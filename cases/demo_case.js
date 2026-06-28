const CASE_DATA = {
  storage: 'hcr_cap_001_v1',
  caseId:  'cap_001',
  title:   'Caso clínico — dificultad respiratoria aguda',
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

  m1: {
    triage: [
      { id:'t01', source:'Triage', text:'Paciente masculino de 68 años' },
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
      {
        id:'i01', source:'Interrogatorio',
        question:'¿Qué lo trae hoy a urgencias?',
        text:'Paciente: Desde hace cuatro días tengo tos y fiebre; hoy me empezó a faltar más el aire.',
        depth:'Paciente: Al principio pensé que era una gripe, pero desde ayer me canso hasta caminando dentro de la casa.'
      },
      {
        id:'i02', source:'Interrogatorio',
        question:'¿Cómo es la tos?',
        text:'Paciente: Estoy botando flema amarilla, espesa, varias veces al día.',
        depth:'Paciente: No he botado sangre. La flema es amarillenta, no transparente.'
      },
      {
        id:'i03', source:'Interrogatorio',
        question:'¿Ha tenido fiebre o escalofríos?',
        text:'Paciente: Sí, me dan escalofríos fuertes y después mucho calor.',
        depth:'Paciente: La fiebre baja un poco con acetaminofén, pero vuelve al rato.'
      },
      {
        id:'i04', source:'Interrogatorio',
        question:'¿Le duele el pecho?',
        text:'Paciente: Me duele aquí del lado derecho cuando respiro hondo o cuando toso.',
        depth:'Paciente: No es una presión en el centro del pecho; es más como una punzada al respirar.'
      },
      {
        id:'i05', source:'Interrogatorio',
        question:'¿La falta de aire aparece acostado o con las piernas hinchadas?',
        text:'Paciente: No se me hinchan las piernas y no me despierto ahogado cuando duermo.',
        depth:null
      },
      {
        id:'i06', source:'Interrogatorio',
        question:'¿Ha tenido dolor opresivo que vaya al brazo o a la mandíbula?',
        text:'Paciente: No, doctor. No es ese tipo de dolor; no se me va al brazo ni a la mandíbula.',
        depth:null
      },
      {
        id:'i07', source:'Interrogatorio',
        question:'¿Ha viajado, estado inmóvil por mucho tiempo o tenido una pierna hinchada?',
        text:'Paciente: No he viajado ni he estado encamado. Tampoco tengo una pierna más hinchada que la otra.',
        depth:null
      },
      {
        id:'i08', source:'Interrogatorio',
        question:'¿Alguien cercano ha estado enfermo?',
        text:'Paciente: Mi nieto estuvo con tos y moqueo la semana pasada.',
        depth:'Paciente: Vive cerca y lo vi varios días antes de que yo empezara con la tos.'
      }
    ]
  },

  m2: {
    historial: [
      {
        title: 'Antecedentes personales y patológicos',
        items: [
          { id:'h01', source:'Historial', text:'Diabetes mellitus tipo 2 desde hace 12 años' },
          { id:'h02', source:'Historial', text:'Hipertensión arterial conocida desde hace 15 años' },
          { id:'h03', source:'Historial', text:'Niega enfermedad pulmonar obstructiva crónica diagnosticada' },
          { id:'h04', source:'Historial', text:'Niega hospitalización o antibióticos intravenosos en los últimos 90 días' },
          { id:'h05', source:'Historial', text:'No recibió vacuna antigripal este año' },
          { id:'h06', source:'Historial', text:'No recuerda haber recibido vacuna antineumocócica' },
          { id:'h07', source:'Historial', text:'Niega antecedente de insuficiencia cardiaca' },
          { id:'h08', source:'Historial', text:'Cirugía de cataratas hace 5 años sin complicaciones' }
        ]
      },
      {
        title: 'Medicamentos',
        items: [
          { id:'h09', source:'Historial', text:'Toma metformina 850 mg cada 12 horas, con adherencia irregular' },
          { id:'h10', source:'Historial', text:'Toma losartán 50 mg al día la mayoría de los días' },
          { id:'h11', source:'Historial', text:'Usó acetaminofén en casa para la fiebre' },
          { id:'h12', source:'Historial', text:'No usa corticoides crónicos ni inmunosupresores' },
          { id:'h13', source:'Historial', text:'Niega alergias medicamentosas conocidas' },
          { id:'h14', source:'Historial', text:'No ha tomado antibióticos para este cuadro antes de consultar' }
        ]
      },
      {
        title: 'Antecedentes familiares',
        items: [
          { id:'h15', source:'Historial', text:'Madre con diabetes mellitus tipo 2' },
          { id:'h16', source:'Historial', text:'Padre falleció por infarto a los 74 años' },
          { id:'h17', source:'Historial', text:'Niega tuberculosis conocida en convivientes' },
          { id:'h18', source:'Historial', text:'Niega enfermedades pulmonares hereditarias conocidas' }
        ]
      },
      {
        title: 'Hábitos psicosociobiológicos y contexto',
        items: [
          { id:'h19', source:'Historial', text:'Exfumador: aproximadamente 25 paquetes-año, suspendió hace 8 años' },
          { id:'h20', source:'Historial', text:'No consume alcohol en exceso' },
          { id:'h21', source:'Historial', text:'Vive con su esposa; independiente para actividades básicas' },
          { id:'h22', source:'Historial', text:'No contacto reciente con aves, murciélagos o animales de granja' },
          { id:'h23', source:'Historial', text:'No viajes recientes ni estancia en hoteles o cruceros' },
          { id:'h24', source:'Historial', text:'Buena red familiar para seguimiento y apoyo' }
        ]
      }
    ],
    examenFuncional: [
      {
        title: 'General',
        items: [
          { id:'ef01', source:'Examen funcional', text:'Refiere fiebre, escalofríos, malestar general y disminución del apetito' },
          { id:'ef02', source:'Examen funcional', text:'Niega pérdida de peso progresiva en los últimos meses' },
          { id:'ef03', source:'Examen funcional', text:'Refiere sudoración durante los picos febriles', expandable:{ id:'ef03a', doctor:'¿La sudoración ocurre sobre todo en la noche desde hace semanas?', patient:'Paciente: No, solo cuando me sube la fiebre estos días.' } }
        ]
      },
      { title:'Piel', items:[
        { id:'ef04', source:'Examen funcional', text:'Niega erupciones, petequias o lesiones nuevas en piel' },
        { id:'ef05', source:'Examen funcional', text:'Refiere sensación de piel caliente durante la fiebre' }
      ]},
      { title:'Cabeza y ojos', items:[
        { id:'ef06', source:'Examen funcional', text:'Niega cefalea intensa, rigidez de nuca o fotofobia' },
        { id:'ef07', source:'Examen funcional', text:'Niega visión borrosa o dolor ocular' }
      ]},
      { title:'Oídos, nariz, boca y garganta', items:[
        { id:'ef08', source:'Examen funcional', text:'Refiere congestión nasal leve al inicio del cuadro', expandable:{ id:'ef08a', doctor:'¿Tuvo dolor fuerte de garganta o placas?', patient:'Paciente: No, solo algo de moqueo y garganta seca.' } },
        { id:'ef09', source:'Examen funcional', text:'Niega odinofagia intensa o secreción purulenta nasal' }
      ]},
      { title:'Respiratorio', items:[
        { id:'ef10', source:'Examen funcional', text:'Refiere tos productiva con esputo amarillo espeso' },
        { id:'ef11', source:'Examen funcional', text:'Refiere disnea progresiva, peor el día de la consulta' },
        { id:'ef12', source:'Examen funcional', text:'Refiere dolor pleurítico derecho asociado a tos y respiración profunda' },
        { id:'ef13', source:'Examen funcional', text:'Niega hemoptisis' },
        { id:'ef14', source:'Examen funcional', text:'Niega sibilancias predominantes o crisis asmáticas previas' }
      ]},
      { title:'Cardiovascular', items:[
        { id:'ef15', source:'Examen funcional', text:'Niega dolor torácico opresivo irradiado a brazo o mandíbula' },
        { id:'ef16', source:'Examen funcional', text:'Niega ortopnea, disnea paroxística nocturna o edema de miembros inferiores' },
        { id:'ef17', source:'Examen funcional', text:'Refiere palpitaciones leves durante la fiebre' }
      ]},
      { title:'Gastrointestinal', items:[
        { id:'ef18', source:'Examen funcional', text:'Disminución del apetito desde el inicio de la fiebre' },
        { id:'ef19', source:'Examen funcional', text:'Niega vómitos, diarrea o dolor abdominal intenso' }
      ]},
      { title:'Genitourinario', items:[
        { id:'ef20', source:'Examen funcional', text:'Niega disuria, polaquiuria o dolor lumbar' },
        { id:'ef21', source:'Examen funcional', text:'Diuresis conservada según refiere la familia' }
      ]},
      { title:'Osteomuscular', items:[
        { id:'ef22', source:'Examen funcional', text:'Refiere mialgias generalizadas durante la fiebre' },
        { id:'ef23', source:'Examen funcional', text:'Niega dolor o aumento de volumen unilateral en pantorrilla' }
      ]},
      { title:'Nervioso y mental', items:[
        { id:'ef24', source:'Examen funcional', text:'Niega confusión, convulsiones o déficit neurológico focal' },
        { id:'ef25', source:'Examen funcional', text:'Refiere cansancio, pero permanece orientado' }
      ]}
    ]
  },

  m3: {
    physicalExam: [
      { title:'Piel', items:[
        { id:'f01', source:'Examen físico', text:'Piel caliente y discretamente diaforética' },
        { id:'f02', source:'Examen físico', text:'Sin cianosis central ni petequias' }
      ] },
      { title:'Cabeza', items:[
        { id:'f03', source:'Examen físico', text:'Cabeza normocéfala, sin lesiones traumáticas' },
        { id:'f04', source:'Examen físico', text:'Sin dolor a la palpación de senos frontales' }
      ] },
      { title:'Ojos', items:[
        { id:'f05', source:'Examen físico', text:'Conjuntivas rosadas, escleróticas anictéricas' },
        { id:'f06', source:'Examen físico', text:'Pupilas isocóricas y reactivas' }
      ] },
      { title:'Oídos', items:[
        { id:'f07', source:'Examen físico', text:'Conductos auditivos sin secreción visible' },
        { id:'f08', source:'Examen físico', text:'Audición conversacional conservada' }
      ] },
      { title:'Nariz y senos paranasales', items:[
        { id:'f09', source:'Examen físico', text:'Mucosa nasal levemente congestiva, sin secreción purulenta' },
        { id:'f10', source:'Examen físico', text:'Senos paranasales no dolorosos a la palpación' }
      ] },
      { title:'Boca', items:[
        { id:'f11', source:'Examen físico', text:'Mucosa oral ligeramente seca' },
        { id:'f12', source:'Examen físico', text:'Dentición con caries antiguas, sin absceso visible' }
      ] },
      { title:'Faringe', items:[
        { id:'f13', source:'Examen físico', text:'Faringe sin exudado ni placas' },
        { id:'f14', source:'Examen físico', text:'Leve eritema faríngeo inespecífico' }
      ] },
      { title:'Cuello', items:[
        { id:'f15', source:'Examen físico', text:'Cuello móvil, sin rigidez de nuca' },
        { id:'f16', source:'Examen físico', text:'No ingurgitación yugular a 45 grados' }
      ] },
      { title:'Ganglios linfáticos', items:[
        { id:'f17', source:'Examen físico', text:'Sin adenopatías cervicales o supraclaviculares palpables' },
        { id:'f18', source:'Examen físico', text:'Sin adenopatías dolorosas en cadenas axilares' }
      ] },
      { title:'Tórax', items:[
        { id:'f19', source:'Examen físico', text:'Expansión torácica disminuida en base derecha' },
        { id:'f20', source:'Examen físico', text:'Dolor leve a la inspiración profunda, sin dolor a la palpación de pared torácica' }
      ] },
      { title:'Senos', items:[
        { id:'f21', source:'Examen físico', text:'Sin hallazgos mamarios de alarma a la inspección rápida' },
        { id:'f22', source:'Examen físico', text:'Sin secreción por pezones' }
      ] },
      { title:'Pulmones', items:[
        { id:'f23', source:'Examen físico', text:'Matidez a la percusión en base pulmonar derecha' },
        { id:'f24', source:'Examen físico', text:'Estertores crepitantes localizados en base derecha' },
        { id:'f25', source:'Examen físico', text:'Soplo tubario en campo basal derecho' },
        { id:'f26', source:'Examen físico', text:'Egofonía positiva en base derecha' },
        { id:'f27', source:'Examen físico', text:'Sin sibilancias difusas' },
        { id:'f28', source:'Examen físico', text:'Murmullo vesicular conservado en hemitórax izquierdo' }
      ] },
      { title:'Corazón', items:[
        { id:'f29', source:'Examen físico', text:'Ritmo regular, taquicárdico' },
        { id:'f30', source:'Examen físico', text:'Ruidos cardíacos audibles, sin soplos nuevos' },
        { id:'f31', source:'Examen físico', text:'Sin roce pericárdico' }
      ] },
      { title:'Vasos sanguíneos', items:[
        { id:'f32', source:'Examen físico', text:'Pulsos periféricos palpables y simétricos' },
        { id:'f33', source:'Examen físico', text:'Llenado capilar menor de 2 segundos' }
      ] },
      { title:'Abdomen', items:[
        { id:'f34', source:'Examen físico', text:'Abdomen blando, depresible, no doloroso' },
        { id:'f35', source:'Examen físico', text:'Ruidos hidroaéreos presentes' },
        { id:'f36', source:'Examen físico', text:'Sin visceromegalias palpables' }
      ] },
      { title:'Genitales masculinos', items:[
        { id:'f37', source:'Examen físico', text:'Examen genital no prioritario; niega síntomas genitourinarios agudos' },
        { id:'f38', source:'Examen físico', text:'Sin lesiones genitales referidas' }
      ] },
      { title:'Recto', items:[
        { id:'f39', source:'Examen físico', text:'Examen rectal diferido por ausencia de indicación inmediata' },
        { id:'f40', source:'Examen físico', text:'Niega sangrado rectal o dolor anal' }
      ] },
      { title:'Huesos, articulaciones y músculos', items:[
        { id:'f41', source:'Examen físico', text:'Sin artritis aguda ni deformidad articular nueva' },
        { id:'f42', source:'Examen físico', text:'Dolor muscular difuso leve durante picos febriles' }
      ] },
      { title:'Extremidades', items:[
        { id:'f43', source:'Examen físico', text:'Sin edema periférico' },
        { id:'f44', source:'Examen físico', text:'Sin dolor a la palpación de pantorrillas' },
        { id:'f45', source:'Examen físico', text:'Extremidades tibias y simétricas' }
      ] },
      { title:'Neurológico y psíquico', items:[
        { id:'f46', source:'Examen físico', text:'Paciente vigil y orientado en persona, tiempo y espacio' },
        { id:'f47', source:'Examen físico', text:'Lenguaje fluido, sin déficit focal evidente' },
        { id:'f48', source:'Examen físico', text:'Sin signos meníngeos' }
      ] }
    ]
  },

  m4: {
    tables: [
      {
        title: 'Hematología y química',
        rows: [
          { id:'p01', source:'Paraclínicos', label:'Leucocitos', value:'16.800', unit:'/µL', ref:'4.000–11.000' },
          { id:'p02', source:'Paraclínicos', label:'Neutrófilos', value:'88', unit:'%', ref:'40–70' },
          { id:'p03', source:'Paraclínicos', label:'Hemoglobina', value:'13,2', unit:'g/dL', ref:'13,0–17,0' },
          { id:'p04', source:'Paraclínicos', label:'Plaquetas', value:'310.000', unit:'/µL', ref:'150.000–450.000' },
          { id:'p05', source:'Paraclínicos', label:'Creatinina', value:'1,1', unit:'mg/dL', ref:'0,7–1,3' },
          { id:'p06', source:'Paraclínicos', label:'Sodio', value:'132', unit:'mEq/L', ref:'135–145' },
          { id:'p07', source:'Paraclínicos', label:'Glucosa', value:'178', unit:'mg/dL', ref:'70–99' },
          { id:'p08', source:'Paraclínicos', label:'Lactato venoso', value:'1,8', unit:'mmol/L', ref:'0,5–2,2' }
        ]
      },
      {
        title: 'Inflamación, microbiología y gasometría',
        rows: [
          { id:'p09', source:'Paraclínicos', label:'Proteína C reactiva', value:'145', unit:'mg/L', ref:'<5' },
          { id:'p10', source:'Paraclínicos', label:'Procalcitonina', value:'0,72', unit:'ng/mL', ref:'<0,10' },
          { id:'p11', source:'Paraclínicos', label:'Gram de esputo', value:'Abundantes PMN y cocos grampositivos en pares; muestra adecuada', unit:'', ref:'No aplica' },
          { id:'p12', source:'Paraclínicos', label:'Hemocultivos x2', value:'Tomados; resultado pendiente', unit:'', ref:'Sin crecimiento' },
          { id:'p13', source:'Paraclínicos', label:'pH arterial', value:'7,46', unit:'', ref:'7,35–7,45' },
          { id:'p14', source:'Paraclínicos', label:'PaO₂', value:'60', unit:'mmHg', ref:'80–100' },
          { id:'p15', source:'Paraclínicos', label:'PaCO₂', value:'32', unit:'mmHg', ref:'35–45' },
          { id:'p16', source:'Paraclínicos', label:'HCO₃⁻', value:'22', unit:'mEq/L', ref:'22–26' }
        ]
      },
      {
        title: 'Electrocardiograma — informe textual',
        rows: [
          { id:'p17', source:'Paraclínicos', label:'Ritmo', value:'Taquicardia sinusal', unit:'', ref:'Ritmo sinusal 60–100 lpm' },
          { id:'p18', source:'Paraclínicos', label:'Segmento ST', value:'Sin elevación ni depresión significativa', unit:'', ref:'Sin cambios isquémicos agudos' },
          { id:'p19', source:'Paraclínicos', label:'Eje y conducción', value:'Sin bloqueo de rama; QRS estrecho', unit:'', ref:'QRS <120 ms' }
        ]
      },
      {
        title: 'Imágenes — informe textual',
        rows: [
          { id:'p20', source:'Paraclínicos', label:'Radiografía de tórax PA', value:'Opacidad alveolar en lóbulo inferior derecho con broncograma aéreo', unit:'', ref:'Sin infiltrados' },
          { id:'p21', source:'Paraclínicos', label:'Radiografía de tórax lateral', value:'Consolidación posterior basal derecha; sin derrame pleural significativo', unit:'', ref:'Sin consolidación' },
          { id:'p22', source:'Paraclínicos', label:'Ecografía pulmonar focal', value:'Consolidación subpleural basal derecha con broncograma dinámico', unit:'', ref:'Pleura y patrón A conservados' }
        ]
      }
    ]
  },

  m6: {
    fields: [
      { key:'managementLeader',    title:'Diagnóstico principal actual',              placeholder:'Escribe el diagnóstico que lidera tu manejo…',        hint:'Justifica en una frase por qué es el más probable ahora.' },
      { key:'managementFatal',     title:'Diagnóstico grave que aún no puedes descartar', placeholder:'Diagnóstico peligroso aún abierto…',               hint:'' },
      { key:'initialActions',      title:'Intervención inicial',                      placeholder:'Primeras acciones para estabilizar al paciente…',    hint:'Prioriza ABC, oxigenación, gravedad y medidas inmediatas.' },
      { key:'stabilization',       title:'Estabilización',                            placeholder:'Soporte respiratorio, fluidos si aplica, control de fiebre/dolor…', hint:'' },
      { key:'etiologicTreatment',  title:'Tratamiento etiológico',                    placeholder:'Antibiótico(s), vía, dosis, frecuencia, secuencia…', hint:'Incluye cobertura empírica razonada y ajustes posteriores.' },
      { key:'activeProblems',      title:'Tratamiento de problemas activos adicionales', placeholder:'Hipoxemia, fiebre, dolor pleurítico, hiperglucemia…', hint:'' },
      { key:'additionalTests',     title:'Pruebas que aún cambian conducta',           placeholder:'Cultivos, antígenos, control radiológico, gases, etc.…',  hint:'' },
      { key:'monitoring',          title:'Monitorización',                            placeholder:'SatO₂, FR, PA, diuresis, estado mental, respuesta clínica…', hint:'' },
      { key:'consults',            title:'Interconsultas',                            placeholder:'Servicio — motivo — prioridad…',                       hint:'' },
      { key:'avoid',               title:'Precauciones y conductas a evitar',         placeholder:'Evitar retrasar antibióticos, exceso de fluidos, alta insegura…', hint:'' },
      { key:'destination',         title:'Tiempo y destino',                          placeholder:'Observación, sala, UCI, criterios de ingreso/alta…', hint:'' }
    ]
  },

  expertEvaluation: {
    findings: {
      selectedExpected: [
        't01','t03','t04','t05','t06','t08','t09',
        'i01','i02','i03','i04','i05','i07',
        'h01','h02','h04','h05','h06','h19',
        'ef01','ef10','ef11','ef12','ef13','ef16',
        'f19','f23','f24','f25','f26','f27','f29','f43','f44',
        'p01','p02','p06','p09','p10','p11','p14','p17','p20','p21'
      ],
      missedImportant: [
        't08','p20','p14','p11','h04'
      ],
      lowValueSelected: [
        'f21','f22','h16','h18','f37','f39'
      ]
    },
    management: {
      expected: [
        { label:'Oxígeno suplementario titulado', reason:'Hipoxemia documentada con SatO₂ 89% al aire ambiente y PaO₂ 60 mmHg.' },
        { label:'Antibiótico empírico para NAC hospitalizada no grave', reason:'Cuadro clínico y radiográfico compatible con NAC; no esperar procalcitonina ni cultivos para iniciar si la sospecha es alta.' },
        { label:'Ceftriaxona + macrólido o esquema equivalente según protocolo local', reason:'Cubre neumococo y patógenos atípicos en paciente hospitalizado sin factores claros de MRSA/Pseudomonas.' },
        { label:'Hemocultivos y muestra respiratoria si se hospitaliza o por criterio de gravedad', reason:'Permiten desescalar tratamiento si identifican patógeno; no deben retrasar antibióticos.' },
        { label:'Monitorizar SatO₂, FR, PA, temperatura y estado mental', reason:'Permite detectar deterioro respiratorio o sepsis temprana.' },
        { label:'Ingreso hospitalario en sala u observación con oxígeno', reason:'Hipoxemia y edad/comorbilidades hacen inseguro manejo ambulatorio inicial.' }
      ],
      dangerousOmissions: [
        { label:'Alta ambulatoria sin oxígeno ni reevaluación', reason:'Hipoxemia basal y consolidación radiográfica elevan el riesgo de deterioro.' },
        { label:'Retrasar antibióticos por esperar procalcitonina', reason:'La procalcitonina no debe usarse para negar antibióticos si la NAC está clínicamente y radiográficamente sospechada.' },
        { label:'Anticoagulación plena sin datos suficientes de TEP', reason:'El cuadro favorece consolidación neumónica; anticoagular sin indicación puede causar daño.' }
      ],
      monitoringOmitted: [
        { label:'Oximetría seriada o continua inicial', reason:'Hay hipoxemia de entrada.' },
        { label:'Reevaluación clínica tras antibiótico y oxígeno', reason:'Permite detectar falla terapéutica o progresión.' },
        { label:'Control de glucemia', reason:'Diabetes e infección aguda elevan riesgo de hiperglucemia.' }
      ],
      destination: {
        label:'Observación o sala hospitalaria según evolución y disponibilidad',
        reason:'Requiere oxígeno, antibiótico inicial y reevaluación; UCI si desarrolla criterios de gravedad.'
      }
    }
  }
};

const STORAGE = CASE_DATA.storage;
