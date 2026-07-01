window.HCR_CASE_MODULES = window.HCR_CASE_MODULES || {};
window.HCR_CASE_MODULES.RC1 = window.HCR_CASE_MODULES.RC1 || {};

window.HCR_CASE_MODULES.RC1.module1 = {
    patient: {
    name:   'José Ramírez',
    age:    '68 años',
    sex:    'Masculino',
    reason: '“Tengo tos, fiebre y me falta el aire”',
    portrait: {
      type: 'external_or_local_placeholder',
      alt:  'Hombre mayor con aspecto cansado y dificultad respiratoria leve. Imagen tipo carnet a definir con recurso libre.'
    }
  },

    triage: [
      { id:'t01', source:'Triage', text:'Paciente masculino' },
      { id:'t01_age', source:'Triage', text:'Edad 68 años' },
      { id:'t02', source:'Triage', text:'Procede de domicilio; llega acompañado por su hija' },
      { id:'t03', source:'Triage', text:'Motivo de consulta en admisión: “tos, fiebre y falta de aire”' },
      { id:'t04', source:'Triage', text:'Temperatura 38,9 °C' },
      { id:'t05', source:'Triage', text:'FC 112 lpm' },
      { id:'t06', source:'Triage', text:'FR 28 rpm' },
      { id:'t07', source:'Triage', text:'PA 132/76 mmHg' },
      { id:'t08', source:'Triage', text:'SatO₂ 89% al aire ambiente' },
      { id:'t09', source:'Triage', text:'Dolor torácico 5/10, predominio en hemitórax derecho, aumenta al respirar profundo' },
      { id:'t10', source:'Triage', text:'Paciente despierto, orientado y responde adecuadamente' },
      { id:'t11', source:'Triage', text:'Glucemia capilar 178 mg/dL' },
      { id:'t12', source:'Triage', text:'No presenta hipotensión ni signos de choque en triage' }
    ],
    interrogatorio: [
      { id:'i01', source:'Interrogatorio', question:'¿Qué lo trae hoy a urgencias?', text:'Paciente: Desde hace cuatro días tengo tos y fiebre; hoy me empezó a faltar más el aire.', depth:'Paciente: Al principio pensé que era una gripe, pero desde ayer me canso hasta caminando dentro de la casa.' },
      { id:'i02', source:'Interrogatorio', question:'¿Cómo es la tos?', text:'Paciente: Estoy botando flema amarilla, espesa, varias veces al día.', depth:'Paciente: No he botado sangre. La flema es amarillenta, no transparente.' },
      { id:'i03', source:'Interrogatorio', question:'¿Ha tenido fiebre o escalofríos?', text:'Paciente: Sí, me dan escalofríos fuertes y después mucho calor.', depth:'Paciente: La fiebre baja un poco con acetaminofén, pero vuelve al rato.' },
      { id:'i04', source:'Interrogatorio', question:'¿Le duele el pecho?', text:'Paciente: Me duele aquí del lado derecho cuando respiro hondo o cuando toso.', depth:'Paciente: No es una presión en el centro del pecho; es más como una punzada al respirar.' },
      { id:'i05', source:'Interrogatorio', question:'¿La falta de aire aparece acostado o con las piernas hinchadas?', text:'Paciente: No se me hinchan las piernas y no me despierto ahogado cuando duermo.', depth:null },
      { id:'i06', source:'Interrogatorio', question:'¿Ha tenido dolor opresivo que vaya al brazo o a la mandíbula?', text:'Paciente: No, doctor. No es ese tipo de dolor; no se me va al brazo ni a la mandíbula.', depth:null },
      { id:'i07', source:'Interrogatorio', question:'¿Ha viajado, estado inmóvil por mucho tiempo o tenido una pierna hinchada?', text:'Paciente: No he viajado ni he estado encamado. Tampoco tengo una pierna más hinchada que la otra.', depth:null },
      { id:'i08', source:'Interrogatorio', question:'¿Alguien cercano ha estado enfermo?', text:'Paciente: Mi nieto estuvo con tos y moqueo la semana pasada.', depth:'Paciente: Vive cerca y lo vi varios días antes de que yo empezara con la tos.' }
    ]
  };
