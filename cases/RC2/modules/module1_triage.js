window.HCR_CASE_MODULES = window.HCR_CASE_MODULES || {};
window.HCR_CASE_MODULES.RC2 = window.HCR_CASE_MODULES.RC2 || {};

window.HCR_CASE_MODULES.RC2.module1 = {
    patient: {
    name: 'Elena Morales',
    age: '61 años',
    sex: 'Femenino',
    reason: '“Siento una presión muy fuerte en el pecho y me da náuseas”',
    portrait: {
      type: 'external_or_local_placeholder',
      alt: 'Mujer de mediana edad con aspecto ansioso y diaforesis leve. Imagen tipo carnet pendiente de recurso con licencia compatible.'
    }
  },

    triage: [
      { id:'t01', source:'Triage', text:'Paciente femenina' },
      { id:'t01_age', source:'Triage', text:'Edad 61 años' },
      { id:'t02', source:'Triage', text:'Procede de domicilio; llega acompañada por su esposo' },
      { id:'t03', source:'Triage', text:'Motivo de consulta: dolor torácico opresivo de inicio en reposo' },
      { id:'t04', source:'Triage', text:'Dolor actual 8/10, retroesternal, de 75 minutos de duración al llegar' },
      { id:'t05', source:'Triage', text:'PA 164/94 mmHg' },
      { id:'t06', source:'Triage', text:'FC 102 lpm, regular' },
      { id:'t07', source:'Triage', text:'FR 20 rpm' },
      { id:'t08', source:'Triage', text:'SatO₂ 97% al aire ambiente' },
      { id:'t09', source:'Triage', text:'Temperatura 36,6 °C' },
      { id:'t10', source:'Triage', text:'Paciente pálida y discretamente diaforética, pero vigil y orientada' },
      { id:'t11', source:'Triage', text:'Glucemia capilar 224 mg/dL' },
      { id:'t12', source:'Triage', text:'No hay hipotensión, bradicardia ni signos clínicos de choque al ingreso' }
    ],
    interrogatorio: [
      {
        id:'i01', source:'Interrogatorio',
        question:'¿Cómo comenzó el dolor y qué estaba haciendo?',
        text:'Paciente: Empezó hace como una hora cuando estaba sentada viendo televisión. Fue una presión de repente, no una punzada.',
        depth:'Paciente: No se me ha quitado del todo. En la casa intenté sentarme derecha y respirar lento, pero sigue igual.'
      },
      {
        id:'i02', source:'Interrogatorio',
        question:'¿El dolor se corre a alguna parte?',
        text:'Paciente: Se me va hacia el hombro izquierdo y a veces siento molestia en la mandíbula.',
        depth:'Paciente: No baja hacia el abdomen ni hacia la espalda entre los omóplatos.'
      },
      {
        id:'i03', source:'Interrogatorio',
        question:'¿Ha tenido otros síntomas acompañantes?',
        text:'Paciente: Me dio mucha náusea, sudor frío y sentí que me faltaba un poco el aire.',
        depth:'Paciente: No me he desmayado ni he perdido el conocimiento.'
      },
      {
        id:'i04', source:'Interrogatorio',
        question:'¿Le había ocurrido antes algo parecido?',
        text:'Paciente: Desde hace una semana me daba una presión cuando caminaba rápido o subía escaleras, pero se quitaba al descansar.',
        depth:'Paciente: Hoy es la primera vez que me pasa estando quieta y que dura tanto.'
      },
      {
        id:'i05', source:'Interrogatorio',
        question:'¿El dolor cambia al respirar profundo, toser o cambiar de posición?',
        text:'Paciente: No. Respirar hondo no lo cambia y sentarme inclinada hacia adelante tampoco lo mejora.',
        depth:null
      },
      {
        id:'i06', source:'Interrogatorio',
        question:'¿Siente un dolor desgarrante hacia la espalda, debilidad de un lado o dificultad para hablar?',
        text:'Paciente: No, no siento que se me rompa nada por dentro, no me duele la espalda y puedo moverme y hablar normal.',
        depth:null
      },
      {
        id:'i07', source:'Interrogatorio',
        question:'¿Ha tenido fiebre, tos, sangre al toser o dolor al respirar?',
        text:'Paciente: No he tenido fiebre ni tos. No me duele más por respirar y no he botado sangre.',
        depth:null
      },
      {
        id:'i08', source:'Interrogatorio',
        question:'¿Ha viajado, estado inmóvil, tenido cirugía reciente o una pierna hinchada?',
        text:'Paciente: No. No he viajado, no he estado en cama y ninguna pierna está más hinchada o dolorosa.',
        depth:null
      },
      {
        id:'i09', source:'Interrogatorio',
        question:'¿El dolor empezó después de comer o mejora con antiácidos?',
        text:'Paciente: No. Había cenado hace varias horas y no siento acidez ni ardor que suba a la garganta.',
        depth:null
      },
      {
        id:'i10', source:'Interrogatorio',
        question:'¿Ha usado cocaína, anfetaminas o medicamentos no prescritos para adelgazar o aumentar energía?',
        text:'Paciente: No, nunca he usado drogas de ese tipo ni pastillas para adelgazar.',
        depth:null
      }
    ]
  };
