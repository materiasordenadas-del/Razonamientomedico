window.HCR_DRUGS = [
  {
    group: "Cardiovasculares",
    children: [
      {
        group: "Antihipertensivos",
        children: [
          {
            group: "Betabloqueantes",
            children: [
              {
                group: "β1 selectivos",
                drugs: [
                  { id: "atenolol", name: "Atenolol" },
                  { id: "bisoprolol", name: "Bisoprolol" },
                  { id: "metoprolol", name: "Metoprolol" },
                  { id: "esmolol", name: "Esmolol" },
                  { id: "nebivolol", name: "Nebivolol" }
                ]
              },
              {
                group: "No selectivos",
                drugs: [
                  { id: "propranolol", name: "Propranolol" },
                  { id: "nadolol", name: "Nadolol" },
                  { id: "timolol", name: "Timolol" }
                ]
              },
              {
                group: "Mixtos α1 + β",
                drugs: [
                  { id: "carvedilol", name: "Carvedilol" },
                  {
                    id: "labetalol",
                    name: "Labetalol",
                    presentations: ["20 mg", "40 mg", "Otra dosis"],
                    routes: ["IV", "VO"],
                    frequencies: ["Dosis unica", "Cada 10 minutos segun respuesta", "Cada 12 horas", "Otra"],
                    duration: true
                  }
                ]
              },
              {
                group: "Con actividad simpaticomimética intrínseca",
                drugs: [
                  { id: "pindolol", name: "Pindolol" },
                  { id: "acebutolol", name: "Acebutolol" },
                  { id: "celiprolol", name: "Celiprolol" }
                ]
              }
            ]
          },
          {
            group: "Bloqueadores de canales de calcio",
            children: [
              {
                group: "Dihidropiridínicos",
                drugs: [
                  { id: "amlodipine", name: "Amlodipino" },
                  { id: "nifedipine", name: "Nifedipino" },
                  { id: "felodipine", name: "Felodipino" },
                  { id: "nicardipine", name: "Nicardipino" },
                  { id: "clevidipine", name: "Clevidipino" },
                  { id: "lercanidipine", name: "Lercanidipino" }
                ]
              },
              {
                group: "No dihidropiridínicos",
                drugs: [
                  { id: "verapamil", name: "Verapamilo" },
                  { id: "diltiazem", name: "Diltiazem" }
                ]
              }
            ]
          },
          { group: "Vasodilatadores directos", drugs: [] },
          {
            group: "Vasodilatadores dependientes de óxido nítrico",
            drugs: [
              {
                id: "nitroglycerin",
                name: "Nitroglicerina",
                presentations: ["Infusion IV", "Sublingual", "Otra dosis"],
                routes: ["IV", "SL"],
                frequencies: ["Infusion titulada", "Cada 5 minutos segun respuesta", "Otra"],
                duration: true
              }
            ]
          },
          { group: "Bloqueadores α1", drugs: [] },
          { group: "Simpaticolíticos centrales", drugs: [] },
          {
            group: "IECA",
            drugs: [
              { id: "lisinopril", name: "Lisinopril" },
              { id: "ramipril", name: "Ramipril" },
              { id: "perindopril", name: "Perindopril" },
              { id: "benazepril", name: "Benazepril" },
              { id: "enalapril", name: "Enalaprilato" }
            ]
          },
          {
            group: "BRA",
            drugs: [
              { id: "losartan", name: "Losartán" },
              { id: "valsartan", name: "Valsartán" },
              { id: "candesartan", name: "Candesartán" }
            ]
          },
          { group: "Inhibidor directo de renina", drugs: [{ id: "aliskiren", name: "Aliskireno" }] },
          {
            group: "Diuréticos",
            drugs: [
              { id: "hydrochlorothiazide", name: "Hidroclorotiazida" },
              { id: "chlorthalidone", name: "Clortalidona" }
            ]
          },
          {
            group: "Antagonistas mineralocorticoides",
            drugs: [
              { id: "spironolactone", name: "Espironolactona" },
              { id: "eplerenone", name: "Eplerenona" }
            ]
          },
          {
            group: "Otros antihipertensivos IV",
            drugs: [
              { id: "hydralazine_iv", name: "Hidralazina IV" },
              { id: "nitroprusside", name: "Nitroprusiato" }
            ]
          }
        ]
      },
      {
        group: "Antiarritmicos",
        drugs: [
          { id: "amiodarone", name: "Amiodarona" },
          { id: "adenosine", name: "Adenosina" }
        ]
      },
      {
        group: "Antianginosos",
        drugs: [
          { id: "isosorbide", name: "Dinitrato de isosorbida" },
          { id: "ranolazine", name: "Ranolazina" }
        ]
      },
      {
        group: "Inotrópicos y vasopresores",
        drugs: [
          { id: "dobutamine", name: "Dobutamina" },
          { id: "norepinephrine", name: "Noradrenalina" }
        ]
      },
      {
        group: "Diuréticos",
        drugs: [
          {
            id: "furosemide",
            name: "Furosemida",
            presentations: ["20 mg", "40 mg", "Otra dosis"],
            routes: ["IV", "VO"],
            frequencies: ["Dosis unica", "Cada 12 horas", "Cada 24 horas", "Infusion continua", "Otra"],
            duration: true
          }
        ]
      },
      {
        group: "Fármacos para insuficiencia cardiaca",
        drugs: [
          { id: "sacubitril_valsartan", name: "Sacubitril/valsartán" },
          { id: "dapagliflozin", name: "Dapagliflozina" }
        ]
      },
      {
        group: "Hipolipemiantes",
        drugs: [
          {
            id: "atorvastatin",
            name: "Atorvastatina",
            presentations: ["40 mg", "80 mg", "Otra dosis"],
            routes: ["VO"],
            frequencies: ["Cada 24 horas", "Otra"],
            duration: true
          }
        ]
      }
    ]
  },
  {
    group: "Antimicrobianos",
    children: [
      {
        group: "Beta-lactámicos",
        children: [
          {
            group: "Cefalosporinas",
            children: [
              {
                group: "3a generación",
                drugs: [
                  {
                    id: "ceftriaxone",
                    name: "Ceftriaxona",
                    presentations: ["1 g", "2 g", "Otra dosis"],
                    routes: ["IV", "IM"],
                    frequencies: ["Cada 12 horas", "Cada 24 horas", "Otra"],
                    duration: true
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        group: "Glucopéptidos",
        drugs: [
          {
            id: "vancomycin",
            name: "Vancomicina",
            presentations: ["500 mg", "1 g", "Otra dosis"],
            routes: ["IV"],
            frequencies: ["Cada 8 horas", "Cada 12 horas", "Segun niveles", "Otra"],
            duration: true
          }
        ]
      }
    ]
  },
  {
    group: "Respiratorio",
    children: [
      { group: "Broncodilatadores", drugs: [{ id: "salbutamol", name: "Salbutamol" }, { id: "ipratropium", name: "Ipratropio" }] },
      { group: "Corticoides inhalados", drugs: [{ id: "budesonide", name: "Budesonida" }] }
    ]
  },
  {
    group: "Endocrino",
    children: [
      { group: "Insulinas", drugs: [{ id: "regular_insulin", name: "Insulina regular" }, { id: "glargine", name: "Insulina glargina" }] },
      { group: "Antitiroideos", drugs: [{ id: "methimazole", name: "Metimazol" }] }
    ]
  },
  {
    group: "Gastrointestinal",
    children: [
      { group: "Protectores gástricos", drugs: [{ id: "omeprazole", name: "Omeprazol" }, { id: "pantoprazole", name: "Pantoprazol" }] },
      { group: "Antieméticos", drugs: [{ id: "ondansetron", name: "Ondansetrón" }] }
    ]
  },
  {
    group: "Neurología",
    children: [
      { group: "Anticonvulsivantes", drugs: [{ id: "levetiracetam", name: "Levetiracetam" }, { id: "phenytoin", name: "Fenitoína" }] },
      { group: "Sedación", drugs: [{ id: "midazolam", name: "Midazolam" }] }
    ]
  },
  {
    group: "Analgesia y antiinflamatorios",
    children: [
      { group: "Analgésicos no opioides", drugs: [{ id: "acetaminophen", name: "Acetaminofén" }, { id: "dipyrone", name: "Dipirona" }] },
      { group: "Antiinflamatorios", drugs: [{ id: "ibuprofen", name: "Ibuprofeno" }] }
    ]
  },
  {
    group: "Anticoagulantes y antiagregantes",
    children: [
      {
        group: "Anticoagulantes",
        drugs: [
          {
            id: "enoxaparin",
            name: "Enoxaparina",
            presentations: ["40 mg", "60 mg", "80 mg", "1 mg/kg", "Otra dosis"],
            routes: ["SC"],
            frequencies: ["Cada 12 horas", "Cada 24 horas", "Otra"],
            duration: true
          }
        ]
      },
      {
        group: "Antiagregantes",
        drugs: [
          {
            id: "aspirin",
            name: "Aspirina",
            presentations: ["81 mg", "100 mg", "300 mg", "Otra dosis"],
            routes: ["VO"],
            frequencies: ["Dosis de carga", "Cada 24 horas", "Otra"],
            duration: true
          }
        ]
      }
    ]
  },
  {
    group: "Otros",
    children: [
      { group: "Líquidos y electrolitos", drugs: [{ id: "normal_saline", name: "Solución salina 0,9%" }, { id: "potassium_chloride", name: "Cloruro de potasio" }] }
    ]
  }
];
