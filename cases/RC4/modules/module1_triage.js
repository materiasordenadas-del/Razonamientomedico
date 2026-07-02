window.HCR_CASE_MODULES = window.HCR_CASE_MODULES || {};
window.HCR_CASE_MODULES.RC4 = window.HCR_CASE_MODULES.RC4 || {};

window.HCR_CASE_MODULES.RC4.module1 = {
  patient: {
    name: 'Mariana Rivas',
    age: '59 años',
    sex: 'Femenino',
    reason: '“Desde anoche siento una presión en el pecho; me da sudor frío y náuseas”',
    portrait: {
      type: 'external_or_local_placeholder',
      alt: 'Mujer de 59 años con expresión de preocupación y malestar, pendiente de imagen real compatible.'
    }
  },

  triage: [
    { id:'t01', source:'Triage', text:'Paciente femenina' },
    { id:'t01_age', source:'Triage', text:'Edad 59 años' },
    { id:'t02', source:'Triage', text:'Procede de domicilio; llega caminando, acompañada por su hija' },
    { id:'t03', source:'Triage', text:'Motivo de consulta: opresión retroesternal intermitente en reposo desde la noche anterior, acompañada de sudoración fría y náuseas' },
    { id:'t04', source:'Triage', text:'Dolor actual 3/10, descrito como presión; niega dolor desgarrador hacia espalda' },
    { id:'t05', source:'Triage', text:'PA 168/94 mmHg en brazo derecho y 166/92 mmHg en brazo izquierdo' },
    { id:'t06', source:'Triage', text:'FC 92 lpm, regular' },
    { id:'t07', source:'Triage', text:'FR 20 rpm' },
    { id:'t08', source:'Triage', text:'SatO₂ 98% al aire ambiente' },
    { id:'t09', source:'Triage', text:'Temperatura 36,7 °C' },
    { id:'t10', source:'Triage', text:'Glucemia capilar 224 mg/dL' },
    { id:'t11', source:'Triage', text:'Paciente vigil, orientada, con piel discretamente diaforética y perfusión periférica conservada' },
    { id:'t12', source:'Triage', text:'Sin síncope, déficit neurológico, hipotensión, hipoxemia ni signos clínicos de choque al ingreso' }
  ],

  interrogatorio: [
    {
      id:'i01', source:'Interrogatorio',
      question:'Descríbame exactamente el dolor actual: cuándo comenzó, dónde se localiza y cómo se siente.',
      text:'Paciente: Anoche, como a las diez y media, estaba sentada viendo televisión y sentí una presión fuerte en el centro del pecho. No era una punzada ni ardor; era como si alguien me apretara por dentro.',
      depth:'Paciente: Duró unos cuarenta minutos. Mejoró sola, pero a las cinco de la mañana volvió y por eso vine. Ahora todavía siento una molestia leve.'
    },
    {
      id:'i02', source:'Interrogatorio',
      question:'¿El dolor se irradia? ¿Qué síntomas aparecen al mismo tiempo?',
      text:'Paciente: A veces se me va hacia la mandíbula y al hombro izquierdo. Me dio mucha sudoración, náuseas y una sensación de falta de aire, pero no he vomitado.',
      depth:'Paciente: No he sentido palpitaciones largas ni que me vaya a desmayar.'
    },
    {
      id:'i03', source:'Interrogatorio',
      question:'¿Había tenido episodios parecidos antes de anoche?',
      text:'Paciente: Desde hace unas tres semanas, cuando subo dos pisos o camino rápido, siento una presión más leve en el pecho. Me detenía unos minutos y se quitaba.',
      depth:'Paciente: Pensé que era cansancio o gastritis porque también a veces siento llenura después de comer, pero antes nunca me había despertado ni me había dado estando quieta.'
    },
    {
      id:'i04', source:'Interrogatorio',
      question:'¿El dolor cambia al respirar, toser, acostarse, inclinarse hacia delante o al presionar el pecho?',
      text:'Paciente: No cambia con respirar ni con moverme. No mejora al inclinarme. Mi hija me apretó el pecho y no pudo reproducirlo.',
      depth:null
    },
    {
      id:'i05', source:'Interrogatorio',
      question:'¿El dolor comenzó de manera súbita y máxima desde el primer segundo, se corre hacia la espalda o ha tenido desmayo, debilidad de un lado o dificultad para hablar?',
      text:'Paciente: No fue como una rasgadura ni se me fue a la espalda. No me desmayé y no he tenido problemas para hablar, ver o moverme.',
      depth:null
    },
    {
      id:'i06', source:'Interrogatorio',
      question:'¿Ha tenido dolor pleurítico, hemoptisis, una pierna más hinchada que la otra, inmovilización reciente, cirugía o viaje prolongado?',
      text:'Paciente: No. No me duele al respirar, no he tosido sangre y mis piernas están iguales. No he viajado ni me han operado.',
      depth:null
    },
    {
      id:'i07', source:'Interrogatorio',
      question:'¿Tiene hipertensión, diabetes, colesterol alto, tabaquismo u otros factores de riesgo cardiovascular?',
      text:'Paciente: Tengo presión alta y diabetes desde hace años. Me dijeron que el colesterol estaba alto, pero dejé la pastilla porque me dolían los músculos. Fumé desde joven, aunque dejé hace cuatro años.',
      depth:'Paciente: A veces no tomo las medicinas todos los días porque trabajo temprano y se me olvida.'
    },
    {
      id:'i08', source:'Interrogatorio',
      question:'¿Ha tenido infarto, angina, insuficiencia cardiaca, arritmias, accidente cerebrovascular o procedimientos cardíacos previos?',
      text:'Paciente: Nunca me han dicho que tuve un infarto ni me han puesto stent. Hace dos años me hicieron un electrocardiograma por la presión y me dijeron que estaba bien.',
      depth:null
    },
    {
      id:'i09', source:'Interrogatorio',
      question:'¿Qué medicamentos toma, cuándo fue la última dosis y tiene alergias o antecedentes de sangrado?',
      text:'Paciente: Metformina y losartán, pero no siempre. No tomo aspirina ni anticoagulantes. Nunca he tenido úlcera sangrante, heces negras ni alergias a medicamentos.',
      depth:'Paciente: Hace varios meses suspendí la atorvastatina por mi cuenta; no consulté para cambiarla.'
    },
    {
      id:'i10', source:'Interrogatorio',
      question:'¿Usa cocaína, anfetaminas, estimulantes para adelgazar o medicamentos para la migraña con ergotamina?',
      text:'Paciente: No uso drogas ni pastillas para adelgazar. Solo tomo café por las mañanas.',
      depth:null
    },
    {
      id:'i11', source:'Interrogatorio',
      question:'¿Existe enfermedad coronaria temprana o muerte súbita en su familia?',
      text:'Paciente: Mi papá tuvo un infarto a los 54 años y murió a los 61. Mi hermano mayor se puso un stent hace poco, cuando tenía 57.',
      depth:null
    },
    {
      id:'i12', source:'Interrogatorio',
      question:'¿Ha tenido fiebre, infección reciente, tos, diarrea importante, sangrado, anemia conocida o un estrés físico intenso reciente?',
      text:'Paciente: No he tenido fiebre, gripe fuerte, diarrea, sangrado ni una enfermedad reciente. He estado trabajando igual, pero no tuve un esfuerzo diferente.',
      depth:null
    }
  ]
};
