window.HCR_CASE_MODULES = window.HCR_CASE_MODULES || {};
window.HCR_CASE_MODULES.RC1 = window.HCR_CASE_MODULES.RC1 || {};

window.HCR_CASE_MODULES.RC1.module2 = {
    historial: [
      { title:'Antecedentes personales y patológicos', items:[
        { id:'h01', source:'Historial', text:'Diabetes mellitus tipo 2 desde hace 12 años' },
        { id:'h02', source:'Historial', text:'Hipertensión arterial conocida desde hace 15 años' },
        { id:'h03', source:'Historial', text:'Niega enfermedad pulmonar obstructiva crónica diagnosticada' },
        { id:'h04', source:'Historial', text:'Niega hospitalización o antibióticos intravenosos en los últimos 90 días' },
        { id:'h05', source:'Historial', text:'No recibió vacuna antigripal este año' },
        { id:'h06', source:'Historial', text:'No recuerda haber recibido vacuna antineumocócica' },
        { id:'h07', source:'Historial', text:'Niega antecedente de insuficiencia cardiaca' },
        { id:'h08', source:'Historial', text:'Cirugía de cataratas hace 5 años sin complicaciones' }
      ] },
      { title:'Medicamentos', items:[
        { id:'h09', source:'Historial', text:'Toma metformina 850 mg cada 12 horas, con adherencia irregular' },
        { id:'h10', source:'Historial', text:'Toma losartán 50 mg al día la mayoría de los días' },
        { id:'h11', source:'Historial', text:'Usó acetaminofén en casa para la fiebre' },
        { id:'h12', source:'Historial', text:'No usa corticoides crónicos ni inmunosupresores' },
        { id:'h13', source:'Historial', text:'Niega alergias medicamentosas conocidas' },
        { id:'h14', source:'Historial', text:'No ha tomado antibióticos para este cuadro antes de consultar' }
      ] },
      { title:'Antecedentes familiares', items:[
        { id:'h15', source:'Historial', text:'Madre con diabetes mellitus tipo 2' },
        { id:'h16', source:'Historial', text:'Padre falleció por infarto a los 74 años' },
        { id:'h17', source:'Historial', text:'Niega tuberculosis conocida en convivientes' },
        { id:'h18', source:'Historial', text:'Niega enfermedades pulmonares hereditarias conocidas' }
      ] },
      { title:'Hábitos psicosociobiológicos y contexto', items:[
        { id:'h19', source:'Historial', text:'Exfumador: aproximadamente 25 paquetes-año, suspendió hace 8 años' },
        { id:'h20', source:'Historial', text:'No consume alcohol en exceso' },
        { id:'h21', source:'Historial', text:'Vive con su esposa; independiente para actividades básicas' },
        { id:'h22', source:'Historial', text:'No contacto reciente con aves, murciélagos o animales de granja' },
        { id:'h23', source:'Historial', text:'No viajes recientes ni estancia en hoteles o cruceros' },
        { id:'h24', source:'Historial', text:'Buena red familiar para seguimiento y apoyo' }
      ] }
    ],
    examenFuncional: [
      { title:'General', items:[
        { id:'ef01', source:'Examen funcional', text:'Refiere fiebre, escalofríos, malestar general y disminución del apetito' },
        { id:'ef02', source:'Examen funcional', text:'Niega pérdida de peso progresiva en los últimos meses' },
        { id:'ef03', source:'Examen funcional', text:'Refiere sudoración durante los picos febriles', expandable:{ id:'ef03a', doctor:'¿La sudoración ocurre sobre todo en la noche desde hace semanas?', patient:'Paciente: No, solo cuando me sube la fiebre estos días.' } }
      ]},
      { title:'Piel', items:[{ id:'ef04', source:'Examen funcional', text:'Niega erupciones, petequias o lesiones nuevas en piel' },{ id:'ef05', source:'Examen funcional', text:'Refiere sensación de piel caliente durante la fiebre' }]},
      { title:'Cabeza y ojos', items:[{ id:'ef06', source:'Examen funcional', text:'Niega cefalea intensa, rigidez de nuca o fotofobia' },{ id:'ef07', source:'Examen funcional', text:'Niega visión borrosa o dolor ocular' }]},
      { title:'Oídos, nariz, boca y garganta', items:[{ id:'ef08', source:'Examen funcional', text:'Refiere congestión nasal leve al inicio del cuadro', expandable:{ id:'ef08a', doctor:'¿Tuvo dolor fuerte de garganta o placas?', patient:'Paciente: No, solo algo de moqueo y garganta seca.' } },{ id:'ef09', source:'Examen funcional', text:'Niega odinofagia intensa o secreción purulenta nasal' }]},
      { title:'Respiratorio', items:[{ id:'ef10', source:'Examen funcional', text:'Refiere tos productiva con esputo amarillo espeso' },{ id:'ef11', source:'Examen funcional', text:'Refiere disnea progresiva, peor el día de la consulta' },{ id:'ef12', source:'Examen funcional', text:'Refiere dolor pleurítico derecho asociado a tos y respiración profunda' },{ id:'ef13', source:'Examen funcional', text:'Niega hemoptisis' },{ id:'ef14', source:'Examen funcional', text:'Niega sibilancias predominantes o crisis asmáticas previas' }]},
      { title:'Cardiovascular', items:[{ id:'ef15', source:'Examen funcional', text:'Niega dolor torácico opresivo irradiado a brazo o mandíbula' },{ id:'ef16', source:'Examen funcional', text:'Niega ortopnea, disnea paroxística nocturna o edema de miembros inferiores' },{ id:'ef17', source:'Examen funcional', text:'Refiere palpitaciones leves durante la fiebre' }]},
      { title:'Gastrointestinal', items:[{ id:'ef18', source:'Examen funcional', text:'Disminución del apetito desde el inicio de la fiebre' },{ id:'ef19', source:'Examen funcional', text:'Niega vómitos, diarrea o dolor abdominal intenso' }]},
      { title:'Genitourinario', items:[{ id:'ef20', source:'Examen funcional', text:'Niega disuria, polaquiuria o dolor lumbar' },{ id:'ef21', source:'Examen funcional', text:'Diuresis conservada según refiere la familia' }]},
      { title:'Osteomuscular', items:[{ id:'ef22', source:'Examen funcional', text:'Refiere mialgias generalizadas durante la fiebre' },{ id:'ef23', source:'Examen funcional', text:'Niega dolor o aumento de volumen unilateral en pantorrilla' }]},
      { title:'Nervioso y mental', items:[{ id:'ef24', source:'Examen funcional', text:'Niega confusión, convulsiones o déficit neurológico focal' },{ id:'ef25', source:'Examen funcional', text:'Refiere cansancio, pero permanece orientado' }]}
    ]
  };
