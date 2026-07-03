window.HCR_CASE_MODULES = window.HCR_CASE_MODULES || {};
window.HCR_CASE_MODULES.RC4 = window.HCR_CASE_MODULES.RC4 || {};

window.HCR_CASE_MODULES.RC4.module1 = {
  patient: {
    name: 'Mariana Rivas',
    age: '59 años',
    sex: 'Femenino',
    reason: '“Me duele el pecho”',
    portrait: {
      type: 'external_or_local_placeholder',
      alt: 'Mujer de 59 años con expresión de preocupación y malestar.'
    }
  },

  triage: [
    { id:'t01', source:'Triage', text:'Paciente femenina' },
    { id:'t01_age', source:'Triage', text:'Edad 59 años' },
    { id:'t02', source:'Triage', text:'Reside en Maracaibo, estado Zulia; llega caminando, acompañada por su hija' },
    { id:'t03', source:'Triage', text:'Motivo de consulta: “Me duele el pecho”' },
    { id:'t04', source:'Triage', text:'PA 168/94 mmHg en brazo derecho' },
    { id:'t05', source:'Triage', text:'FC 92 lpm, regular' },
    { id:'t06', source:'Triage', text:'FR 20 rpm' },
    { id:'t07', source:'Triage', text:'SatO₂ 98% al aire ambiente' },
    { id:'t08', source:'Triage', text:'Temperatura 36,7 °C' },
    { id:'t09', source:'Triage', text:'Glucemia capilar 224 mg/dL' },
    { id:'t10', source:'Triage', text:'Paciente vigil y orientada, con diaforesis leve visible al ingreso' }
  ],

  interrogatorio: [
    {
      id:'i01', source:'Interrogatorio',
      question:'¿Cuándo empezó el dolor?',
      text:'Paciente: Ayer en la noche, como a las diez y media.',
      depth:'Paciente: Esta mañana volvió otra vez y por eso decidí venir.'
    },
    {
      id:'i02', source:'Interrogatorio',
      question:'¿Qué estaba haciendo cuando empezó por primera vez?',
      text:'Paciente: Estaba sentada viendo televisión; no estaba haciendo fuerza.',
      depth:null
    },
    {
      id:'i03', source:'Interrogatorio',
      question:'¿En qué parte del pecho lo siente?',
      text:'Paciente: Aquí en el centro del pecho.',
      depth:null
    },
    {
      id:'i04', source:'Interrogatorio',
      question:'¿Cómo siente ese dolor?',
      text:'Paciente: Como si me apretaran por dentro; no es una punzada ni una quemazón.',
      depth:null
    },
    {
      id:'i04a', source:'Interrogatorio',
      question:'¿Qué tan fuerte fue el dolor y cuánto le duele ahora?',
      text:'Paciente: Anoche fue muy fuerte, como un ocho de diez. Ahora siento una molestia leve, como un tres de diez.',
      depth:null
    },
    {
      id:'i05', source:'Interrogatorio',
      question:'¿Cuánto duró el primer episodio?',
      text:'Paciente: Duró como cuarenta minutos y se me quitó solo.',
      depth:null
    },
    {
      id:'i06', source:'Interrogatorio',
      question:'¿Le había pasado algo parecido antes de anoche?',
      text:'Paciente: Desde hace unas tres semanas me daba una presión más leve cuando subía escaleras o caminaba rápido.',
      depth:'Paciente: Me detenía unos minutos y se me quitaba.'
    },
    {
      id:'i07', source:'Interrogatorio',
      question:'¿Se le corre el dolor hacia alguna parte?',
      text:'Paciente: A veces se me va hacia la mandíbula y el hombro izquierdo.',
      depth:null
    },
    {
      id:'i08', source:'Interrogatorio',
      question:'¿Qué más siente cuando aparece el dolor?',
      text:'Paciente: Me da sudor frío, náuseas y siento que me falta un poco el aire.',
      depth:'Paciente: No he vomitado ni he sentido que el corazón se me vaya a salir.'
    },
    {
      id:'i09', source:'Interrogatorio',
      question:'¿El dolor cambia cuando respira profundo o tose?',
      text:'Paciente: No, respirar o toser no lo cambia.',
      depth:null
    },
    {
      id:'i10', source:'Interrogatorio',
      question:'¿El dolor cambia al moverse, inclinarse o al tocarse el pecho?',
      text:'Paciente: No. Mi hija me tocó el pecho y no me dolió más.',
      depth:null
    },
    {
      id:'i11', source:'Interrogatorio',
      question:'¿El dolor empezó como una rasgadura muy fuerte desde el primer segundo?',
      text:'Paciente: No, no fue como una rasgadura.',
      depth:null
    },
    {
      id:'i12', source:'Interrogatorio',
      question:'¿El dolor se le ha ido hacia la espalda?',
      text:'Paciente: No, se queda en el pecho; no se me va hacia la espalda.',
      depth:null
    },
    {
      id:'i13', source:'Interrogatorio',
      question:'¿Se ha desmayado o ha tenido dificultad para hablar, ver o mover una parte del cuerpo?',
      text:'Paciente: No, no me he desmayado y no he tenido problemas para hablar, ver ni moverme.',
      depth:null
    },
    {
      id:'i14', source:'Interrogatorio',
      question:'¿El dolor le aumenta al respirar profundo?',
      text:'Paciente: No, respirar profundo no lo empeora.',
      depth:null
    },
    {
      id:'i14a', source:'Interrogatorio',
      question:'¿Ha tosido sangre o ha notado una pierna más hinchada que la otra?',
      text:'Paciente: No he tosido sangre y mis piernas están iguales.',
      depth:null
    },
    {
      id:'i15', source:'Interrogatorio',
      question:'¿Tiene presión alta, azúcar alta o colesterol alto?',
      text:'Paciente: Tengo presión alta y diabetes desde hace años. También me dijeron que tenía el colesterol alto.',
      depth:null
    },
    {
      id:'i16', source:'Interrogatorio',
      question:'¿Qué medicamentos toma?',
      text:'Paciente: Tomo metformina y losartán, pero a veces se me olvida. No tomo aspirina ni anticoagulantes.',
      depth:null
    },
    {
      id:'i17', source:'Interrogatorio',
      question:'¿Ha tenido sangrado de estómago, heces negras o alergias a medicamentos?',
      text:'Paciente: Nunca he tenido sangrado de estómago, heces negras ni alergias a medicamentos.',
      depth:null
    }
  ]
};
