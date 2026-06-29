import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
import { auth, db } from "./firebase-core.js";

const AUTH_DOMAIN = "razonamientomedico-c7d9e.firebaseapp.com";
const USERNAME_PATTERN = /^[a-z0-9_]{3,24}$/;
const RESERVED_USERNAMES = new Set([
  "admin",
  "administrator",
  "root",
  "system",
  "support",
  "firebase"
]);

function normalizeUsername(username) {
  const normalized = String(username ?? "").trim().toLowerCase();

  if (!USERNAME_PATTERN.test(normalized)) {
    throw new Error("El usuario debe tener 3 a 24 caracteres: minusculas, numeros o guion bajo.");
  }

  if (RESERVED_USERNAMES.has(normalized)) {
    throw new Error("Ese nombre de usuario no esta disponible.");
  }

  return normalized;
}

function assertPassword(password) {
  if (typeof password !== "string" || password.length < 8) {
    throw new Error("La contrasena debe tener al menos 8 caracteres.");
  }
}

function buildInternalEmail(usernameNormalized) {
  return `${usernameNormalized}@${AUTH_DOMAIN}`;
}

function profileRef(uid) {
  return doc(db, "users", uid);
}

function profileData(uid, usernameNormalized) {
  return {
    uid,
    username: usernameNormalized,
    usernameNormalized,
    role: "student",
    contactEmail: null,
    createdAt: serverTimestamp(),
    lastLoginAt: serverTimestamp()
  };
}

async function readProfile(uid) {
  const snapshot = await getDoc(profileRef(uid));
  return snapshot.exists() ? snapshot.data() : null;
}

async function registerUser(username, password, rememberSession = true) {
  const usernameNormalized = normalizeUsername(username);
  assertPassword(password);

  await setPersistence(auth, rememberSession ? browserLocalPersistence : browserSessionPersistence);

  const credential = await createUserWithEmailAndPassword(
    auth,
    buildInternalEmail(usernameNormalized),
    password
  );

  await setDoc(profileRef(credential.user.uid), profileData(credential.user.uid, usernameNormalized));

  return {
    user: credential.user,
    profile: await readProfile(credential.user.uid)
  };
}

async function loginUser(username, password, rememberSession = true) {
  const usernameNormalized = normalizeUsername(username);
  assertPassword(password);

  await setPersistence(auth, rememberSession ? browserLocalPersistence : browserSessionPersistence);

  const credential = await signInWithEmailAndPassword(
    auth,
    buildInternalEmail(usernameNormalized),
    password
  );

  const ref = profileRef(credential.user.uid);
  const snapshot = await getDoc(ref);

  if (snapshot.exists()) {
    await updateDoc(ref, { lastLoginAt: serverTimestamp() });
  } else {
    await setDoc(ref, profileData(credential.user.uid, usernameNormalized));
  }

  return {
    user: credential.user,
    profile: await readProfile(credential.user.uid)
  };
}

function logoutUser() {
  return signOut(auth);
}

function getCurrentUser() {
  return auth.currentUser;
}

async function getCurrentProfile() {
  const user = getCurrentUser();
  return user ? readProfile(user.uid) : null;
}

function onAuthStateChangedHCR(callback) {
  return onAuthStateChanged(auth, async (user) => {
    const profile = user ? await readProfile(user.uid) : null;
    callback({ user, profile });
  });
}

export {
  normalizeUsername,
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  getCurrentProfile,
  onAuthStateChangedHCR
};
