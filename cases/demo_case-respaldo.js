const CASE_DATA = {
  storage: 'hcr_demo_v1',
  caseId:  'demo',
  title:   'Laboratorio técnico H-CR',
  patient: {
    name:   'Dato de demostración',
    age:    '00 años',
    sex:    'Masculino (ficticio)',
    reason: 'Dato de demostración: motivo de consulta ficticio para verificar la interfaz'
  },

  m1: {
    triage: [
      { id:'t01', source:'Triage', text:'Dato de demostración: FC 110 lpm' },
      { id:'t02', source:'Triage', text:'Dato de demostración: PA 130/85 mmHg' },
      { id:'t03', source:'Triage', text:'Dato de demostración: SatO₂ 93% al aire ambiente' },
      { id:'t04', source:'Triage', text:'Dato de demostración: FR 22 rpm' },
      { id:'t05', source:'Triage', text:'Dato de demostración: Temperatura 37,2 °C' }
    ],
    interrogatorio: [
      {
        id:'i01', source:'Interrogatorio',
        text:'Dato de demostración: síntoma principal ficticio desde hace 3 días.',
        question:'¿Qué lo trae por aquí hoy?',
        depth:'Dato de demostración: información adicional al profundizar en el síntoma principal.'
      },
      {
        id:'i02', source:'Interrogatorio',
        text:'Dato de demostración: síntoma asociado ficticio de aparición progresiva.',
        question:'¿Tiene algún otro síntoma?',
        depth:'Dato de demostración: profundización del síntoma asociado con detalles adicionales.'
      },
      {
        id:'i03', source:'Interrogatorio',
        text:'Dato de demostración: niega síntoma negativo relevante.',
        question:'¿Tiene dolor en el pecho?',
        depth: null
      }
    ]
  },

  m2: {
    historial: [
      {
        title: 'Antecedentes personales y patológicos',
        items: [
          { id:'h01', source:'Historial', text:'Dato de demostración: antecedente personal ficticio relevante.' },
          { id:'h02', source:'Historial', text:'Dato de demostración: niega cirugía reciente.' },
          { id:'h03', source:'Historial', text:'Dato de demostración: antecedente patológico remoto ficticio.' }
        ]
      },
      {
        title: 'Medicamentos',
        items: [
          { id:'h04', source:'Historial', text:'Dato de demostración: toma un medicamento ficticio de forma irregular.' },
          { id:'h05', source:'Historial', text:'Dato de demostración: usa un tratamiento de demostración sin horario fijo.' },
          { id:'h06', source:'Historial', text:'Dato de demostración: niega alergias medicamentosas conocidas.' }
        ]
      },
      {
        title: 'Antecedentes familiares',
        items: [
          { id:'h07', source:'Historial', text:'Dato de demostración: antecedente familiar ficticio relevante.' },
          { id:'h08', source:'Historial', text:'Dato de demostración: familiar de primer grado con condición ficticia.' }
        ]
      },
      {
        title: 'Hábitos psicosociobiológicos y contexto',
        items: [
          { id:'h09', source:'Historial', text:'Dato de demostración: hábito psicosocial ficticio relevante.' },
          { id:'h10', source:'Historial', text:'Dato de demostración: vive en un contexto de demostración con apoyo variable.' },
          { id:'h11', source:'Historial', text:'Dato de demostración: exposición ambiental ficticia sin detalle clínico real.' }
        ]
      }
    ],
    examenFuncional: [
      {
        title: 'General',
        items: [
          { id:'ef01', source:'Examen funcional', text:'Dato de demostración: se siente más cansado de lo habitual.' },
          { id:'ef02', source:'Examen funcional', text:'Dato de demostración: refiere cambio de peso ficticio.', expandable:{ id:'ef02a', doctor:'¿Cuánto cree que ha cambiado su peso?', patient:'Dato de demostración: cambio aproximado ficticio en dos meses.' } }
        ]
      },
      { title:'Piel', items:[
        { id:'ef03', source:'Examen funcional', text:'Dato de demostración: niega lesiones nuevas en piel.' },
        { id:'ef04', source:'Examen funcional', text:'Dato de demostración: nota cambio cutáneo ficticio intermitente.' }
      ]},
      { title:'Cabeza y ojos', items:[
        { id:'ef05', source:'Examen funcional', text:'Dato de demostración: refiere molestia ocular ficticia.' },
        { id:'ef06', source:'Examen funcional', text:'Dato de demostración: niega cefalea intensa de demostración.' }
      ]},
      { title:'Oídos, nariz, boca y garganta', items:[
        { id:'ef07', source:'Examen funcional', text:'Dato de demostración: niega dolor de garganta relevante.' },
        { id:'ef08', source:'Examen funcional', text:'Dato de demostración: refiere congestión nasal ficticia.', expandable:{ id:'ef08a', doctor:'¿La congestión cambia durante el día?', patient:'Dato de demostración: el patrón cambia de forma variable.' } }
      ]},
      { title:'Respiratorio', items:[
        { id:'ef09', source:'Examen funcional', text:'Dato de demostración: refiere disnea ficticia con esfuerzo.' },
        { id:'ef10', source:'Examen funcional', text:'Dato de demostración: niega tos productiva relevante.' }
      ]},
      { title:'Cardiovascular', items:[
        { id:'ef11', source:'Examen funcional', text:'Dato de demostración: refiere palpitación ficticia ocasional.' },
        { id:'ef12', source:'Examen funcional', text:'Dato de demostración: niega dolor torácico opresivo.' }
      ]},
      { title:'Gastrointestinal', items:[
        { id:'ef13', source:'Examen funcional', text:'Dato de demostración: apetito variable ficticio.' },
        { id:'ef14', source:'Examen funcional', text:'Dato de demostración: niega vómitos persistentes.' }
      ]},
      { title:'Genitourinario', items:[
        { id:'ef15', source:'Examen funcional', text:'Dato de demostración: niega disuria relevante.' },
        { id:'ef16', source:'Examen funcional', text:'Dato de demostración: patrón urinario ficticio sin alarma.' }
      ]},
      { title:'Osteomuscular', items:[
        { id:'ef17', source:'Examen funcional', text:'Dato de demostración: dolor muscular ficticio leve.' },
        { id:'ef18', source:'Examen funcional', text:'Dato de demostración: niega rigidez articular marcada.' }
      ]},
      { title:'Nervioso y mental', items:[
        { id:'ef19', source:'Examen funcional', text:'Dato de demostración: sueño no reparador ficticio.' },
        { id:'ef20', source:'Examen funcional', text:'Dato de demostración: refiere sensación de mareo inespecífica.', expandable:{ id:'ef20a', doctor:'¿El mareo aparece en reposo o al moverse?', patient:'Dato de demostración: aparece de forma variable, sin patrón real.' } }
      ]}
    ]
  },

  m3: {
    physicalExam: [
      { title:'Piel', items:[{ id:'f01', source:'Examen físico', text:'Dato de demostración: piel tibia y seca.' }, { id:'f02', source:'Examen físico', text:'Dato de demostración: sin petequias visibles.' }] },
      { title:'Cabeza', items:[{ id:'f03', source:'Examen físico', text:'Dato de demostración: cráneo sin lesiones evidentes.' }, { id:'f04', source:'Examen físico', text:'Dato de demostración: sensibilidad local ficticia leve.' }] },
      { title:'Ojos', items:[{ id:'f05', source:'Examen físico', text:'Dato de demostración: conjuntivas de aspecto conservado.' }, { id:'f06', source:'Examen físico', text:'Dato de demostración: pupilas simétricas en demostración.' }] },
      { title:'Oídos', items:[{ id:'f07', source:'Examen físico', text:'Dato de demostración: conductos auditivos sin hallazgo mayor.' }, { id:'f08', source:'Examen físico', text:'Dato de demostración: audición conversacional conservada.' }] },
      { title:'Nariz y senos paranasales', items:[{ id:'f09', source:'Examen físico', text:'Dato de demostración: mucosa nasal con hallazgo ficticio leve.' }, { id:'f10', source:'Examen físico', text:'Dato de demostración: senos paranasales sin dolor a la palpación.' }] },
      { title:'Boca', items:[{ id:'f11', source:'Examen físico', text:'Dato de demostración: mucosa oral húmeda.' }, { id:'f12', source:'Examen físico', text:'Dato de demostración: dentición con distractor de demostración.' }] },
      { title:'Faringe', items:[{ id:'f13', source:'Examen físico', text:'Dato de demostración: faringe sin exudado.' }, { id:'f14', source:'Examen físico', text:'Dato de demostración: leve eritema ficticio no específico.' }] },
      { title:'Cuello', items:[{ id:'f15', source:'Examen físico', text:'Dato de demostración: cuello móvil.' }, { id:'f16', source:'Examen físico', text:'Dato de demostración: sin rigidez de nuca.' }] },
      { title:'Ganglios linfáticos', items:[{ id:'f17', source:'Examen físico', text:'Dato de demostración: no se palpan adenopatías mayores.' }, { id:'f18', source:'Examen físico', text:'Dato de demostración: ganglio pequeño ficticio no doloroso.' }] },
      { title:'Tórax', items:[{ id:'f19', source:'Examen físico', text:'Dato de demostración: tórax simétrico.' }, { id:'f20', source:'Examen físico', text:'Dato de demostración: expansibilidad torácica de demostración conservada.' }] },
      { title:'Senos', items:[{ id:'f21', source:'Examen físico', text:'Dato de demostración: sin hallazgo mamario de alarma.' }, { id:'f22', source:'Examen físico', text:'Dato de demostración: distractor normal de exploración de senos.' }] },
      { title:'Pulmones', items:[{ id:'f23', source:'Examen físico', text:'Dato de demostración: murmullo vesicular conservado.' }, { id:'f24', source:'Examen físico', text:'Dato de demostración: ruido respiratorio ficticio leve.' }] },
      { title:'Corazón', items:[{ id:'f25', source:'Examen físico', text:'Dato de demostración: ruidos cardíacos audibles.' }, { id:'f26', source:'Examen físico', text:'Dato de demostración: soplo ficticio de baja intensidad.' }] },
      { title:'Vasos sanguíneos', items:[{ id:'f27', source:'Examen físico', text:'Dato de demostración: pulsos periféricos palpables.' }, { id:'f28', source:'Examen físico', text:'Dato de demostración: llenado capilar de demostración conservado.' }] },
      { title:'Abdomen', items:[{ id:'f29', source:'Examen físico', text:'Dato de demostración: abdomen blando.' }, { id:'f30', source:'Examen físico', text:'Dato de demostración: dolor abdominal ficticio leve a la palpación.' }] },
      { title:'Genitales masculinos', items:[{ id:'f31', source:'Examen físico', text:'Dato de demostración: examen genital sin hallazgo mayor.' }, { id:'f32', source:'Examen físico', text:'Dato de demostración: distractor normal de demostración.' }] },
      { title:'Recto', items:[{ id:'f33', source:'Examen físico', text:'Dato de demostración: examen rectal sin dato de alarma ficticio.' }, { id:'f34', source:'Examen físico', text:'Dato de demostración: tono de demostración conservado.' }] },
      { title:'Huesos, articulaciones y músculos', items:[{ id:'f35', source:'Examen físico', text:'Dato de demostración: fuerza muscular global conservada.' }, { id:'f36', source:'Examen físico', text:'Dato de demostración: dolor articular ficticio sin deformidad.' }] },
      { title:'Extremidades', items:[{ id:'f37', source:'Examen físico', text:'Dato de demostración: sin edema periférico evidente.' }, { id:'f38', source:'Examen físico', text:'Dato de demostración: extremidades con temperatura simétrica.' }] },
      { title:'Neurológico y psíquico', items:[{ id:'f39', source:'Examen físico', text:'Dato de demostración: orientado durante la entrevista.' }, { id:'f40', source:'Examen físico', text:'Dato de demostración: reflejo ficticio discretamente aumentado.' }] }
    ]
  },

  m4: {
    tables: [
      {
        title: 'Hematología y química',
        rows: [
          { id:'p01', source:'Paraclínicos', label:'Prueba A', value:'0,0', unit:'unidad', ref:'0–10' },
          { id:'p02', source:'Paraclínicos', label:'Prueba B', value:'0,0', unit:'unidad', ref:'0–10' },
          { id:'p03', source:'Paraclínicos', label:'Prueba C', value:'0,0', unit:'unidad', ref:'0–10' }
        ]
      },
      {
        title: 'Marcadores cardíacos y gasometría',
        rows: [
          { id:'p04', source:'Paraclínicos', label:'Marcador cardíaco A', value:'0,0', unit:'unidad', ref:'0–10' },
          { id:'p05', source:'Paraclínicos', label:'Gasometría A', value:'0,0', unit:'unidad', ref:'0–10' }
        ]
      },
      {
        title: 'Electrocardiograma — informe textual',
        rows: [
          { id:'p06', source:'Paraclínicos', label:'Electrocardiograma ficticio', value:'Dato de demostración: informe textual de ECG ficticio.', unit:'', ref:'' },
          { id:'p07', source:'Paraclínicos', label:'Ritmo ficticio', value:'Dato de demostración: descripción electrocardiográfica ficticia.', unit:'', ref:'' }
        ]
      },
      {
        title: 'Imágenes — informe textual',
        rows: [
          { id:'p08', source:'Paraclínicos', label:'Imagen ficticia', value:'Dato de demostración: informe de imagen ficticio.', unit:'', ref:'' },
          { id:'p09', source:'Paraclínicos', label:'Informe complementario ficticio', value:'Dato de demostración: segundo informe textual de imagen ficticio.', unit:'', ref:'' }
        ]
      }
    ]
  },

  m6: {
    fields: [
      { key:'managementLeader',    title:'Diagnóstico principal actual',              placeholder:'Escribe el diagnóstico que lidera tu manejo…',        hint:'Justifica en una frase por qué es el más probable ahora.' },
      { key:'managementFatal',     title:'Diagnóstico grave que aún no puedes descartar', placeholder:'Diagnóstico peligroso aún abierto…',               hint:'' },
      { key:'initialActions',      title:'Intervención inicial',                      placeholder:'Primeras acciones para estabilizar al paciente…',    hint:'' },
      { key:'additionalTests',     title:'Paraclínicos adicionales',                  placeholder:'Prueba — pregunta clínica — conducta — prioridad…',  hint:'' },
      { key:'etiologicTreatment',  title:'Tratamiento etiológico',                    placeholder:'Fármaco, dosis, vía, frecuencia…',                   hint:'' },
      { key:'complications',       title:'Prevención y manejo de complicaciones',     placeholder:'Complicación — medida…',                             hint:'' },
      { key:'avoid',               title:'Precauciones y conductas a evitar',         placeholder:'Evitar / precauciones…',                             hint:'' },
      { key:'consults',            title:'Interconsultas y destino',                  placeholder:'Servicio — motivo — destino…',                       hint:'' }
    ]
  },

  expertEvaluation: {
    findings: {
      selectedExpected: ['t03','t04','ef09','f24','p06'],
      missedImportant: ['h01','f25'],
      lowValueSelected: ['ef03','f08']
    },
    management: {
      expected: [
        { label:'Dato demo: registrar soporte inicial si aplica', reason:'Ejemplo ficticio para probar la comparación.' },
        { label:'Dato demo: definir monitorización', reason:'Ejemplo ficticio para probar omisiones.' },
        { label:'Dato demo: definir destino de cuidado', reason:'Ejemplo ficticio para probar destino.' }
      ],
      dangerousOmissions: [
        { label:'Dato demo: no dejar destino sin definir', reason:'Ejemplo ficticio, no corresponde a una guía clínica real.' }
      ],
      monitoringOmitted: [
        { label:'Dato demo: vigilancia seriada pendiente', reason:'Ejemplo ficticio para la vista de evaluación.' }
      ],
      destination: {
        label:'Dato demo: destino debe quedar explícito',
        reason:'Ejemplo ficticio para validar el diseño.'
      }
    }
  }
};

const STORAGE = CASE_DATA.storage;
