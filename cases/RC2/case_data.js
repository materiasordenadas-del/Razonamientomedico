/*
 * RC2 — Dolor torácico agudo de alto riesgo
 * Caso cardiovascular intermedio.
 * Los datos diagnósticos y la evaluación experta no deben exponerse en la portada.
 */

const CASE_DATA = {
  storage: 'hcr_rc2_nsteacs_001_v1',
  caseId: 'rc2_nsteacs_001',
  title: 'Caso clínico — dolor torácico agudo',
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

  m1: {
    triage: [
      { id:'t01', source:'Triage', text:'Paciente femenina de 61 años' },
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
  },

  m2: {
    historial: [
      {
        title:'Antecedentes personales y patológicos',
        items:[
          { id:'h01', source:'Historial', text:'Hipertensión arterial diagnosticada hace 14 años' },
          { id:'h02', source:'Historial', text:'Diabetes mellitus tipo 2 desde hace 9 años' },
          { id:'h03', source:'Historial', text:'Dislipidemia conocida desde hace 6 años' },
          { id:'h04', source:'Historial', text:'Niega infarto previo, angina diagnosticada o revascularización coronaria' },
          { id:'h05', source:'Historial', text:'Niega insuficiencia cardiaca, fibrilación auricular o valvulopatía conocida' },
          { id:'h06', source:'Historial', text:'Niega enfermedad renal crónica conocida' },
          { id:'h07', source:'Historial', text:'Niega accidente cerebrovascular previo o enfermedad arterial periférica sintomática' },
          { id:'h08', source:'Historial', text:'Niega úlcera péptica, hemorragia digestiva o sangrado mayor previo' }
        ]
      },
      {
        title:'Medicamentos',
        items:[
          { id:'h09', source:'Historial', text:'Losartán 50 mg al día, con adherencia irregular' },
          { id:'h10', source:'Historial', text:'Metformina 850 mg cada 12 horas, refiere omitir dosis con frecuencia' },
          { id:'h11', source:'Historial', text:'Atorvastatina 20 mg nocturna, suspendida por cuenta propia hace aproximadamente 4 meses' },
          { id:'h12', source:'Historial', text:'No recibe antiagregantes, anticoagulantes ni betabloqueantes' },
          { id:'h13', source:'Historial', text:'Niega alergias medicamentosas conocidas' },
          { id:'h14', source:'Historial', text:'Tomó un antiácido en casa sin alivio significativo del dolor' },
          { id:'h15', source:'Historial', text:'No ha usado AINE de manera crónica ni fármacos herbales de forma regular' }
        ]
      },
      {
        title:'Antecedentes familiares',
        items:[
          { id:'h16', source:'Historial', text:'Madre con diabetes mellitus tipo 2 e hipertensión arterial' },
          { id:'h17', source:'Historial', text:'Padre presentó infarto agudo de miocardio a los 57 años' },
          { id:'h18', source:'Historial', text:'Hermano con angioplastia coronaria a los 59 años' },
          { id:'h19', source:'Historial', text:'Niega historia familiar conocida de disección aórtica o muerte súbita hereditaria' },
          { id:'h20', source:'Historial', text:'Niega trastornos hereditarios de coagulación conocidos en la familia' }
        ]
      },
      {
        title:'Hábitos psicosociobiológicos y contexto',
        items:[
          { id:'h21', source:'Historial', text:'Fumadora activa: aproximadamente 22 paquetes-año' },
          { id:'h22', source:'Historial', text:'Consume alcohol de forma ocasional, sin consumo diario' },
          { id:'h23', source:'Historial', text:'Vida predominantemente sedentaria; refiere poco ejercicio regular' },
          { id:'h24', source:'Historial', text:'Dieta frecuente en alimentos ultraprocesados y alto contenido de sodio' },
          { id:'h25', source:'Historial', text:'Vive con su esposo; cuenta con red familiar de apoyo' },
          { id:'h26', source:'Historial', text:'No exposición ocupacional conocida a monóxido de carbono' }
        ]
      }
    ],

    examenFuncional: [
      {
        title:'General',
        items:[
          { id:'ef01', source:'Examen funcional', text:'Refiere diaforesis fría, náuseas y sensación de alarma durante el dolor actual' },
          { id:'ef02', source:'Examen funcional', text:'Niega fiebre, escalofríos o malestar infeccioso previo' },
          { id:'ef03', source:'Examen funcional', text:'Refiere fatiga al esfuerzo en los últimos días, sin pérdida de peso involuntaria' },
          { id:'ef04', source:'Examen funcional', text:'Niega síncope o presíncope durante el episodio actual' }
        ]
      },
      {
        title:'Piel',
        items:[
          { id:'ef05', source:'Examen funcional', text:'Refiere sudor frío asociado al dolor torácico' },
          { id:'ef06', source:'Examen funcional', text:'Niega erupciones, petequias o lesiones cutáneas nuevas' },
          { id:'ef07', source:'Examen funcional', text:'Niega cambios de coloración persistentes en labios o dedos' }
        ]
      },
      {
        title:'Cabeza y ojos',
        items:[
          { id:'ef08', source:'Examen funcional', text:'Niega cefalea intensa de inicio súbito' },
          { id:'ef09', source:'Examen funcional', text:'Niega pérdida visual, diplopía o visión borrosa persistente' },
          { id:'ef10', source:'Examen funcional', text:'Niega dolor ocular o dolor temporal' }
        ]
      },
      {
        title:'Oídos, nariz, boca y garganta',
        items:[
          { id:'ef11', source:'Examen funcional', text:'Niega rinorrea, odinofagia o síntomas respiratorios altos recientes' },
          { id:'ef12', source:'Examen funcional', text:'Niega dolor mandibular al masticar; refiere irradiación del dolor al ángulo mandibular' },
          { id:'ef13', source:'Examen funcional', text:'Niega sensación de globo faríngeo o ardor retroesternal ácido' }
        ]
      },
      {
        title:'Respiratorio',
        items:[
          { id:'ef14', source:'Examen funcional', text:'Refiere disnea leve acompañando al dolor actual' },
          { id:'ef15', source:'Examen funcional', text:'Niega tos, expectoración, fiebre o hemoptisis' },
          { id:'ef16', source:'Examen funcional', text:'Niega dolor pleurítico o empeoramiento del dolor con inspiración profunda' },
          { id:'ef17', source:'Examen funcional', text:'Niega ortopnea, disnea paroxística nocturna o edema de miembros inferiores' }
        ]
      },
      {
        title:'Cardiovascular',
        items:[
          { id:'ef18', source:'Examen funcional', text:'Refiere dolor opresivo retroesternal con irradiación a hombro izquierdo y mandíbula' },
          { id:'ef19', source:'Examen funcional', text:'Refiere episodios de opresión con esfuerzo durante la última semana, aliviados por reposo' },
          { id:'ef20', source:'Examen funcional', text:'Refiere que el episodio actual aparece en reposo y dura más que los previos' },
          { id:'ef21', source:'Examen funcional', text:'Niega palpitaciones sostenidas, síncope o edema periférico reciente' }
        ]
      },
      {
        title:'Gastrointestinal',
        items:[
          { id:'ef22', source:'Examen funcional', text:'Refiere náuseas sin vómitos durante el dolor' },
          { id:'ef23', source:'Examen funcional', text:'Niega dolor epigástrico localizado, relación clara con comidas o pirosis dominante' },
          { id:'ef24', source:'Examen funcional', text:'Niega hematemesis, melena o rectorragia' },
          { id:'ef25', source:'Examen funcional', text:'Niega dolor abdominal irradiado a espalda' }
        ]
      },
      {
        title:'Genitourinario',
        items:[
          { id:'ef26', source:'Examen funcional', text:'Niega disuria, hematuria o dolor lumbar' },
          { id:'ef27', source:'Examen funcional', text:'Diuresis habitual conservada según refiere' },
          { id:'ef28', source:'Examen funcional', text:'Niega uso reciente de anticonceptivos hormonales o terapia estrogénica' }
        ]
      },
      {
        title:'Osteomuscular',
        items:[
          { id:'ef29', source:'Examen funcional', text:'Niega traumatismo torácico o ejercicio inusual previo al dolor' },
          { id:'ef30', source:'Examen funcional', text:'Niega dolor que se reproduzca al mover el brazo o el tronco' },
          { id:'ef31', source:'Examen funcional', text:'Niega dolor, calor o aumento de volumen unilateral de pantorrilla' }
        ]
      },
      {
        title:'Nervioso y mental',
        items:[
          { id:'ef32', source:'Examen funcional', text:'Niega disartria, debilidad focal o asimetría facial' },
          { id:'ef33', source:'Examen funcional', text:'Niega pérdida de conciencia o convulsiones' },
          { id:'ef34', source:'Examen funcional', text:'Refiere ansiedad secundaria al dolor, pero permanece orientada y colaboradora' },
          { id:'ef35', source:'Examen funcional', text:'Niega dolor torácico acompañado de dolor dorsal súbito o déficit neurológico' }
        ]
      }
    ]
  },

  m3: {
    physicalExam: [
      { title:'Piel', items:[
        { id:'f01', source:'Examen físico', text:'Piel tibia, discretamente pálida y diaforética' },
        { id:'f02', source:'Examen físico', text:'Sin cianosis central ni periférica' },
        { id:'f03', source:'Examen físico', text:'Sin petequias, exantema ni lesiones sugestivas de infección cutánea' }
      ]},
      { title:'Cabeza', items:[
        { id:'f04', source:'Examen físico', text:'Cabeza normocéfala, sin signos de trauma' },
        { id:'f05', source:'Examen físico', text:'Sin dolor a la palpación de cuero cabelludo o región temporal' },
        { id:'f06', source:'Examen físico', text:'Facies de dolor moderado, sin asimetría evidente' }
      ]},
      { title:'Ojos', items:[
        { id:'f07', source:'Examen físico', text:'Conjuntivas rosadas; escleróticas anictéricas' },
        { id:'f08', source:'Examen físico', text:'Pupilas isocóricas y reactivas a la luz' },
        { id:'f09', source:'Examen físico', text:'Sin xantelasmas llamativos ni edema periorbitario' }
      ]},
      { title:'Oídos', items:[
        { id:'f10', source:'Examen físico', text:'Pabellones y conductos auditivos sin secreción visible' },
        { id:'f11', source:'Examen físico', text:'Audición conversacional conservada bilateralmente' },
        { id:'f12', source:'Examen físico', text:'Sin dolor a la palpación mastoidea' }
      ]},
      { title:'Nariz y senos paranasales', items:[
        { id:'f13', source:'Examen físico', text:'Mucosa nasal sin secreción purulenta' },
        { id:'f14', source:'Examen físico', text:'Senos paranasales no dolorosos a la palpación' },
        { id:'f15', source:'Examen físico', text:'Sin epistaxis ni signos de sangrado nasal activo' }
      ]},
      { title:'Boca', items:[
        { id:'f16', source:'Examen físico', text:'Mucosa oral ligeramente seca, sin cianosis lingual' },
        { id:'f17', source:'Examen físico', text:'Dentición conservada, sin absceso odontógeno visible' },
        { id:'f18', source:'Examen físico', text:'Sin lesiones orales ni sangrado gingival espontáneo' }
      ]},
      { title:'Faringe', items:[
        { id:'f19', source:'Examen físico', text:'Faringe sin exudado ni placas' },
        { id:'f20', source:'Examen físico', text:'Sin eritema faríngeo marcado' },
        { id:'f21', source:'Examen físico', text:'Sin desviación uvular ni trismus' }
      ]},
      { title:'Cuello', items:[
        { id:'f22', source:'Examen físico', text:'No ingurgitación yugular a 45 grados' },
        { id:'f23', source:'Examen físico', text:'Pulsos carotídeos simétricos, sin soplos carotídeos audibles' },
        { id:'f24', source:'Examen físico', text:'Cuello móvil, sin rigidez de nuca ni dolor cervical posterior' }
      ]},
      { title:'Ganglios linfáticos', items:[
        { id:'f25', source:'Examen físico', text:'Sin adenopatías cervicales palpables' },
        { id:'f26', source:'Examen físico', text:'Sin adenopatías supraclaviculares palpables' },
        { id:'f27', source:'Examen físico', text:'Sin adenopatías axilares dolorosas' }
      ]},
      { title:'Tórax', items:[
        { id:'f28', source:'Examen físico', text:'Tórax simétrico, sin deformidad ni uso de musculatura accesoria' },
        { id:'f29', source:'Examen físico', text:'Dolor no reproducible a la palpación de pared torácica ni uniones costocondrales' },
        { id:'f30', source:'Examen físico', text:'Expansión torácica bilateral conservada' }
      ]},
      { title:'Senos', items:[
        { id:'f31', source:'Examen físico', text:'Sin síntomas mamarios focales referidos' },
        { id:'f32', source:'Examen físico', text:'Inspección rápida sin retracciones o secreción por pezón' },
        { id:'f33', source:'Examen físico', text:'Examen mamario completo diferido por no modificar la prioridad diagnóstica aguda' }
      ]},
      { title:'Pulmones', items:[
        { id:'f34', source:'Examen físico', text:'Murmullo vesicular conservado bilateralmente' },
        { id:'f35', source:'Examen físico', text:'Sin estertores crepitantes ni sibilancias difusas' },
        { id:'f36', source:'Examen físico', text:'Sin roce pleural; percusión pulmonar sonoridad conservada bilateralmente' }
      ]},
      { title:'Corazón', items:[
        { id:'f37', source:'Examen físico', text:'Ritmo regular, taquicárdico alrededor de 100 lpm' },
        { id:'f38', source:'Examen físico', text:'Ruidos cardíacos audibles, sin soplo nuevo ni galope evidente' },
        { id:'f39', source:'Examen físico', text:'Sin roce pericárdico a la auscultación en posición sentada e inclinada hacia adelante' }
      ]},
      { title:'Vasos sanguíneos', items:[
        { id:'f40', source:'Examen físico', text:'Pulsos radiales y pedios palpables, simétricos y de buena amplitud' },
        { id:'f41', source:'Examen físico', text:'Presión arterial sin diferencia clínicamente relevante entre ambos brazos' },
        { id:'f42', source:'Examen físico', text:'Llenado capilar menor de 2 segundos; extremidades bien perfundidas' }
      ]},
      { title:'Abdomen', items:[
        { id:'f43', source:'Examen físico', text:'Abdomen blando, depresible y no doloroso a la palpación' },
        { id:'f44', source:'Examen físico', text:'Sin dolor epigástrico localizado ni defensa involuntaria' },
        { id:'f45', source:'Examen físico', text:'Ruidos hidroaéreos presentes; sin visceromegalias palpables' }
      ]},
      { title:'Genitales femeninos', items:[
        { id:'f46', source:'Examen físico', text:'Examen genital no prioritario en el contexto agudo actual' },
        { id:'f47', source:'Examen físico', text:'Niega sangrado genital, dolor pélvico o síntomas genitourinarios agudos' },
        { id:'f48', source:'Examen físico', text:'Exploración diferida con consentimiento de la paciente por ausencia de indicación inmediata' }
      ]},
      { title:'Recto', items:[
        { id:'f49', source:'Examen físico', text:'Examen rectal diferido por ausencia de indicación inmediata' },
        { id:'f50', source:'Examen físico', text:'Niega melena, rectorragia o dolor anal' },
        { id:'f51', source:'Examen físico', text:'Sin datos clínicos actuales de sangrado digestivo activo' }
      ]},
      { title:'Huesos, articulaciones y músculos', items:[
        { id:'f52', source:'Examen físico', text:'Sin dolor reproducible a la palpación de músculos pectorales' },
        { id:'f53', source:'Examen físico', text:'Movilidad de hombros conservada, sin reproducir el dolor torácico' },
        { id:'f54', source:'Examen físico', text:'Sin artritis aguda ni deformidad musculoesquelética nueva' }
      ]},
      { title:'Extremidades', items:[
        { id:'f55', source:'Examen físico', text:'Sin edema periférico' },
        { id:'f56', source:'Examen físico', text:'Sin dolor, calor ni asimetría en pantorrillas' },
        { id:'f57', source:'Examen físico', text:'Extremidades tibias, simétricas y sin livedo reticularis' }
      ]},
      { title:'Neurológico y psíquico', items:[
        { id:'f58', source:'Examen físico', text:'Paciente vigil y orientada en persona, tiempo y espacio' },
        { id:'f59', source:'Examen físico', text:'Lenguaje fluido, sin déficit motor o sensitivo focal evidente' },
        { id:'f60', source:'Examen físico', text:'Ansiosa por el dolor, pero con juicio y colaboración conservados' }
      ]}
    ]
  },

  m4: {
    tables: [
      {
        title:'Hematología, glucosa y función renal',
        rows:[
          { id:'p01', source:'Paraclínicos', label:'Hemoglobina', value:'13,6', unit:'g/dL', ref:'12,0–16,0' },
          { id:'p02', source:'Paraclínicos', label:'Leucocitos', value:'9.400', unit:'/µL', ref:'4.000–11.000' },
          { id:'p03', source:'Paraclínicos', label:'Plaquetas', value:'278.000', unit:'/µL', ref:'150.000–450.000' },
          { id:'p04', source:'Paraclínicos', label:'Creatinina', value:'0,9', unit:'mg/dL', ref:'0,6–1,1' },
          { id:'p05', source:'Paraclínicos', label:'TFGe estimada', value:'76', unit:'mL/min/1,73 m²', ref:'≥60' },
          { id:'p06', source:'Paraclínicos', label:'Potasio', value:'4,3', unit:'mEq/L', ref:'3,5–5,0' },
          { id:'p07', source:'Paraclínicos', label:'Magnesio', value:'1,9', unit:'mg/dL', ref:'1,7–2,2' },
          { id:'p08', source:'Paraclínicos', label:'Glucosa plasmática', value:'218', unit:'mg/dL', ref:'70–99' }
        ]
      },
      {
        title:'Marcadores cardíacos y coagulación',
        rows:[
          { id:'p09', source:'Paraclínicos', label:'Troponina I ultrasensible — 0 h', value:'56', unit:'ng/L', ref:'<14' },
          { id:'p10', source:'Paraclínicos', label:'Troponina I ultrasensible — 2 h', value:'212', unit:'ng/L', ref:'<14' },
          { id:'p11', source:'Paraclínicos', label:'BNP', value:'68', unit:'pg/mL', ref:'<100' },
          { id:'p12', source:'Paraclínicos', label:'TP/INR', value:'1,0', unit:'', ref:'0,8–1,2' },
          { id:'p13', source:'Paraclínicos', label:'TTPa', value:'30', unit:'s', ref:'25–35' },
          { id:'p14', source:'Paraclínicos', label:'Perfil lipídico — LDL-C', value:'164', unit:'mg/dL', ref:'<70 si muy alto riesgo' }
        ]
      },
      {
        title:'Electrocardiograma — informes seriados',
        rows:[
          { id:'p15', source:'Paraclínicos', label:'ECG inicial', value:'Ritmo sinusal a 98 lpm; infradesnivel horizontal del ST de aproximadamente 1 mm en V4–V6 y T negativas en I/aVL', unit:'', ref:'Sin cambios isquémicos agudos' },
          { id:'p16', source:'Paraclínicos', label:'ECG a 30 min por persistencia de dolor', value:'Persistencia de infradesnivel del ST en V4–V6 e I/aVL, sin elevación del ST en derivaciones contiguas', unit:'', ref:'Sin cambios dinámicos de isquemia' },
          { id:'p17', source:'Paraclínicos', label:'ECG — conducción', value:'QRS estrecho; sin bloqueo de rama ni arritmia sostenida', unit:'', ref:'QRS <120 ms; ritmo sinusal' }
        ]
      },
      {
        title:'Imágenes y evaluación cardiaca',
        rows:[
          { id:'p18', source:'Paraclínicos', label:'Radiografía de tórax', value:'Silueta cardiaca no aumentada; sin edema pulmonar, consolidación ni derrame pleural', unit:'', ref:'Sin alteraciones agudas' },
          { id:'p19', source:'Paraclínicos', label:'Ecocardiograma transtorácico focal', value:'FEVI aproximada 50%; hipocinesia inferolateral leve; sin derrame pericárdico significativo', unit:'', ref:'Sin alteraciones segmentarias nuevas' },
          { id:'p20', source:'Paraclínicos', label:'Aorta proximal visible por ecocardiografía', value:'Sin dilatación evidente de raíz aórtica en ventana disponible; estudio no excluye disección por sí solo', unit:'', ref:'No aplica' }
        ]
      }
    ]
  },

  m6: {
    fields:[
      { key:'managementLeader', title:'Diagnóstico principal actual', placeholder:'Escribe el diagnóstico que lidera tu manejo…', hint:'Define también el nivel de riesgo y la evidencia principal.' },
      { key:'managementFatal', title:'Diagnóstico grave que aún no puedes descartar', placeholder:'Diagnóstico peligroso aún abierto…', hint:'Aclara qué dato apoya o reduce esa posibilidad.' },
      { key:'initialActions', title:'Intervención inicial', placeholder:'Primeras acciones para estabilizar y monitorizar…', hint:'Prioriza monitorización, ECG, antiisquemia y seguridad.' },
      { key:'stabilization', title:'Estabilización', placeholder:'Manejo del dolor, presión arterial, oxígeno si está indicado y otras medidas…', hint:'Evita medidas rutinarias no indicadas.' },
      { key:'etiologicTreatment', title:'Tratamiento etiológico / antitrombótico', placeholder:'Antiagregación, anticoagulación, estatina, estrategia invasiva y condiciones…', hint:'Incluye razonamiento, vía, contraindicaciones y secuencia.' },
      { key:'activeProblems', title:'Problemas activos adicionales', placeholder:'Hiperglucemia, tabaquismo, HTA, náuseas, riesgo hemorrágico…', hint:'' },
      { key:'additionalTests', title:'Pruebas que aún cambian conducta', placeholder:'ECG/troponinas seriados, ecocardiograma, coronariografía u otras…', hint:'' },
      { key:'monitoring', title:'Monitorización', placeholder:'Telemetría, dolor, SV, sangrado, función renal, glucosa, arritmias…', hint:'' },
      { key:'consults', title:'Interconsultas y destino', placeholder:'Cardiología / hemodinamia — motivo — prioridad…', hint:'' },
      { key:'avoid', title:'Precauciones y conductas a evitar', placeholder:'No alta precoz, no oxígeno rutinario si no hay hipoxemia, no retrasar estrategia…', hint:'' },
      { key:'destination', title:'Tiempo y destino', placeholder:'Área monitorizada, unidad coronaria o sala; criterios de escalada…', hint:'' }
    ]
  },

  expertEvaluation: {
    evaluationSchemaVersion:'2.0',

    findings: {
      selectedExpected:[
        't03','t04','t05','t06','t10','t12',
        'i01','i02','i03','i04','i05','i06','i08','i09',
        'h01','h02','h03','h09','h10','h11','h17','h18','h21','h23','h24',
        'ef01','ef14','ef15','ef16','ef18','ef19','ef20','ef22','ef23','ef29','ef30','ef31','ef32','ef35',
        'f01','f22','f29','f34','f35','f37','f39','f40','f41','f43','f44','f55','f56','f58','f59',
        'p04','p06','p08','p09','p10','p15','p16','p17','p18','p19','p20'
      ],
      missedImportant:[
        't04','t10','i02','i04','i05','i06','h17','h18','h21','ef18','ef19','ef20','f29','f37','f40','f41','p09','p10','p15','p16','p19'
      ],
      lowValueSelected:[
        't09','ef10','ef11','ef12','f10','f11','f12','f31','f32','f33','f46','f47','f48','f49','f50','f51'
      ]
    },

    comparisonByModule: {
      m1: {
        title:'Módulo 1 — Triage e interrogatorio',
        sourceComparison:{
          triage:{
            expectedSelected:['t03','t04','t05','t06','t10','t12'],
            criticalMisses:['t04','t10','t12'],
            lowValueIfSelected:['t09'],
            rationale:'Dolor opresivo persistente en reposo, diaforesis y ausencia de choque constituyen datos iniciales de alto valor para isquemia aguda y estratificación inmediata.'
          },
          interrogatorio:{
            expectedSelected:['i01','i02','i03','i04','i05','i06','i08','i09'],
            criticalMisses:['i02','i04','i05','i06'],
            lowValueIfSelected:['i10'],
            rationale:'La cualidad opresiva, irradiación típica, síntomas autonómicos y patrón de angina de reciente inicio/progresión favorecen SCA; la falta de dolor pleurítico/posicional y de dolor desgarrante reduce alternativas críticas sin descartarlas por completo.'
          }
        },
        illnessActual:{
          expected:'Mujer de 61 años con HTA, diabetes, dislipidemia y tabaquismo, con una semana de dolor torácico de esfuerzo progresivo y episodio actual opresivo, prolongado y en reposo, irradiado a hombro izquierdo/mandíbula, asociado a náuseas, diaforesis y disnea leve, hemodinámicamente estable.',
          essentialElements:['61 años','factores de riesgo aterosclerótico','dolor opresivo retroesternal','en reposo y prolongado','irradiación típica','síntomas autonómicos','estabilidad hemodinámica']
        },
        tier3:{
          leader:{ diagnosis:'Síndrome coronario agudo sin elevación del ST — alta sospecha', rationale:'Fenotipo de dolor isquémico de alto riesgo con patrón de angina inestable.' },
          alternative:{ diagnosis:'Embolia pulmonar aguda', rationale:'Dolor torácico y disnea justifican considerarla inicialmente, aunque faltan desencadenantes, pleuresía, hemoptisis y signos de TVP.' },
          cannotMiss:{ diagnosis:'Síndrome aórtico agudo', rationale:'Debe permanecer como diagnóstico no perder en dolor torácico agudo hasta integrar ausencia de dolor desgarrante dorsal, asimetría de pulsos/PA y déficit neurológico.' }
        }
      },

      m2: {
        title:'Módulo 2 — Historial y examen funcional',
        sourceComparison:{
          historial:{
            expectedSelected:['h01','h02','h03','h09','h10','h11','h17','h18','h21','h23','h24'],
            criticalMisses:['h17','h18','h21','h11'],
            lowValueIfSelected:['h16','h20','h26'],
            rationale:'La carga aterosclerótica acumulada, mal control farmacológico, tabaquismo y fuerte antecedente familiar aumentan de forma marcada la probabilidad previa de enfermedad coronaria.'
          },
          examenFuncional:{
            expectedSelected:['ef01','ef14','ef15','ef16','ef18','ef19','ef20','ef22','ef23','ef29','ef30','ef31','ef32','ef35'],
            criticalMisses:['ef18','ef19','ef20','ef16','ef35'],
            lowValueIfSelected:['ef08','ef09','ef10','ef11','ef12'],
            rationale:'El patrón cardiovascular es coherente con isquemia miocárdica; los negativos respiratorios, pleuríticos, posicionales, musculoesqueléticos y neurológicos ayudan a ordenar los diferenciales.'
          }
        },
        illnessActual:{
          expected:'Mujer de 61 años con múltiples factores de riesgo aterosclerótico y baja adherencia a tratamiento preventivo, con angina de esfuerzo de reciente aparición que progresa a dolor opresivo prolongado en reposo con irradiación típica y síntomas autonómicos, sin datos clínicos dominantes de pericarditis, neumonía, TEP, disección o dolor de pared.',
          essentialElements:['HTA/DM/dislipidemia','tabaquismo','antecedentes familiares prematuros','angina de esfuerzo previa','progresión a reposo','negativos dirigidos para diferenciales']
        },
        tier3:{
          leader:{ diagnosis:'Síndrome coronario agudo sin elevación del ST', rationale:'La probabilidad clínica aumenta claramente con factores de riesgo y patrón temporal de crescendo angina.' },
          alternative:{ diagnosis:'Pericarditis aguda', rationale:'El dolor torácico agudo la mantiene en el diferencial, pero faltan fiebre/virus reciente, empeoramiento inspiratorio y mejoría al inclinarse.' },
          cannotMiss:{ diagnosis:'Síndrome aórtico agudo', rationale:'Menos probable por ausencia de dolor máximo al inicio, irradiación dorsal, déficit neurológico y asimetría de pulsos, pero el daño de omitirlo es alto.' }
        }
      },

      m3: {
        title:'Módulo 3 — Examen físico',
        sourceComparison:{
          examenFisico:{
            expectedSelected:['f01','f22','f29','f34','f35','f37','f39','f40','f41','f43','f44','f55','f56','f58','f59'],
            criticalMisses:['f29','f37','f40','f41','f55','f56'],
            lowValueIfSelected:['f10','f11','f12','f31','f32','f33','f46','f47','f48','f49','f50','f51'],
            rationale:'La diaforesis y el dolor no reproducible apoyan un proceso visceral. La ausencia de congestión, estertores, roce pericárdico, asimetría de pulsos/PA, déficit neurológico y signos de TVP orienta el diferencial y la seguridad del manejo inicial.'
          }
        },
        illnessActual:{
          expected:'Paciente hemodinámicamente estable, diaforética, con dolor torácico no reproducible, sin datos de insuficiencia cardiaca aguda, pericarditis clínica, trombosis venosa periférica, déficit neurológico ni asimetría vascular periférica.',
          essentialElements:['diaforesis','dolor no reproducible','sin estertores/JVP elevada','sin roce pericárdico','pulsos y PA simétricos','sin signos de TVP','sin déficit focal']
        },
        tier3:{
          leader:{ diagnosis:'Síndrome coronario agudo sin elevación del ST', rationale:'El examen no ofrece alternativa más explicativa y mantiene alta la preocupación por isquemia.' },
          alternative:{ diagnosis:'Embolia pulmonar aguda', rationale:'Se vuelve menos probable por ausencia de hipoxemia, signos de TVP, pleuresía o hallazgos respiratorios, pero no se elimina solo con el examen.' },
          cannotMiss:{ diagnosis:'Síndrome aórtico agudo', rationale:'La simetría de pulsos/PA y ausencia de déficit neurológico reducen probabilidad, sin constituir exclusión definitiva.' }
        }
      },

      m4: {
        title:'Módulo 4 — Paraclínicos',
        sourceComparison:{
          paraclinicos:{
            expectedSelected:['p04','p06','p08','p09','p10','p15','p16','p17','p18','p19','p20'],
            criticalMisses:['p09','p10','p15','p16','p19'],
            lowValueIfSelected:['p01','p02','p03','p11','p12','p13'],
            rationale:'El ascenso dinámico de troponina por encima del percentil 99, los cambios isquémicos de ST-T y la alteración segmentaria nueva integran lesión miocárdica aguda con evidencia de isquemia.'
          }
        },
        illnessActual:{
          expected:'Mujer de 61 años con dolor torácico isquémico de alto riesgo y factores ateroscleróticos, con troponina I ultrasensible elevada y en ascenso (56 a 212 ng/L), infradesnivel dinámico del ST en derivaciones laterales y alteración segmentaria inferolateral, sin elevación del ST ni datos de insuficiencia cardiaca aguda.',
          essentialElements:['síntomas de isquemia','troponina dinámica elevada','cambios isquémicos ST-T','alteración segmentaria','sin ST elevado','función renal conservada']
        },
        tier3:{
          leader:{ diagnosis:'Infarto agudo de miocardio sin elevación del ST (NSTEMI), probable tipo 1', rationale:'Hay lesión miocárdica aguda con ascenso de troponina y evidencia clínica/electrocardiográfica/ecocardiográfica de isquemia.' },
          alternative:{ diagnosis:'Miopericarditis', rationale:'La troponina puede elevarse, pero el patrón de dolor, ECG regional con infradesnivel y ausencia de datos pericárdicos hacen esta alternativa mucho menos probable.' },
          cannotMiss:{ diagnosis:'Síndrome aórtico agudo', rationale:'Los datos disponibles lo reducen notablemente, pero no debe cerrarse si aparecen dolor dorsal súbito, déficit, asimetría de PA/pulsos o inestabilidad.' }
        }
      },

      m5: {
        title:'Módulo 5 — Pausa diagnóstica',
        expectedVenn:{
          dx1:'Infarto agudo de miocardio sin elevación del ST (NSTEMI), probable tipo 1',
          dx2:'Miopericarditis',
          dx3:'Síndrome aórtico agudo',
          pivotFinding:'Ascenso dinámico de troponina con infradesnivel isquémico del ST en un cuadro clínico típico de isquemia.',
          sharedFinding:'Dolor torácico agudo.',
          decisiveAgainstDx2:'Dolor no pleurítico ni posicional, ausencia de roce/derrame y ECG no compatible con pericarditis difusa.',
          decisiveAgainstDx3:'Ausencia de dolor desgarrante dorsal, asimetría de pulsos/PA, déficit neurológico e inestabilidad; mantener vigilancia clínica.'
        }
      },

      m6: {
        title:'Módulo 6 — Manejo clínico',
        expectedPlanSummary:'Admisión en área monitorizada/telemetría, activación de cardiología para estrategia invasiva temprana, antiagregación con aspirina si no hay contraindicación, anticoagulación según protocolo y función renal, estatina de alta intensidad, control del dolor/isquemia y presión arterial con nitratos solo si son seguros, ECG y troponinas seriados, monitorización de sangrado/función renal/glucosa y no administrar oxígeno rutinario con SatO₂ 97% salvo deterioro o hipoxemia.',
        management:{
          expected:[
            { label:'Ingreso inmediato a unidad monitorizada o área de observación con telemetría', reason:'El dolor isquémico, cambios de ST-T y troponina dinámica requieren vigilancia de arritmias y deterioro.' },
            { label:'Aspirina de carga si no existe contraindicación', reason:'Es base de la antiagregación inicial en SCA.' },
            { label:'Estrategia antitrombótica y segundo antiagregante coordinados con cardiología/estrategia invasiva', reason:'La elección y momento dependen del riesgo, anatomía prevista, riesgo hemorrágico y plan de angiografía.' },
            { label:'Anticoagulación parenteral según protocolo institucional y función renal', reason:'Forma parte del manejo del SCA sin elevación del ST en pacientes seleccionados.' },
            { label:'Estatina de alta intensidad temprana', reason:'La paciente tiene SCA y LDL elevado con alto riesgo aterosclerótico.' },
            { label:'Nitrato si persiste dolor o hipertensión y no hay contraindicaciones', reason:'Puede aliviar isquemia/síntomas; verificar PA, uso de inhibidores PDE5 y sospecha de infarto de VD antes de administrar.' },
            { label:'Evaluación temprana por cardiología para coronariografía/estrategia invasiva', reason:'Troponina dinámica, cambios isquémicos en ECG y alteración segmentaria indican riesgo elevado.' },
            { label:'Control de glucemia y factores modificables', reason:'Hiperglucemia, tabaquismo y pobre adherencia aumentan riesgo y requieren intervención durante hospitalización.' }
          ],
          dangerousOmissions:[
            { label:'Dar alta desde urgencias tras mejoría parcial del dolor', reason:'La paciente tiene evidencia objetiva de lesión miocárdica aguda e isquemia.' },
            { label:'No realizar ECG y troponina seriados', reason:'Los cambios dinámicos son centrales para confirmar y estratificar SCA.' },
            { label:'Retrasar cardiología/estrategia invasiva pese a datos de alto riesgo', reason:'Puede retrasar revascularización y aumentar eventos.' },
            { label:'Administrar oxígeno de rutina con saturación normal', reason:'No hay hipoxemia de entrada; oxígeno debe ser selectivo.' },
            { label:'Usar nitratos sin evaluar contraindicaciones hemodinámicas', reason:'Puede causar deterioro si hay hipotensión, infarto de VD o interacción farmacológica relevante.' }
          ],
          monitoringOmitted:[
            { label:'Telemetría continua', reason:'Riesgo de arritmias isquémicas.' },
            { label:'ECG seriado y reevaluación del dolor', reason:'Permiten detectar evolución a elevación del ST o isquemia persistente.' },
            { label:'Troponina seriada', reason:'Confirma cinética y extensión de lesión miocárdica.' },
            { label:'Control de PA, FC, SatO₂ y signos de congestión/choque', reason:'Guía seguridad de nitratos, betabloqueo y escalada de atención.' },
            { label:'Vigilancia de sangrado, hemoglobina y función renal', reason:'Importante antes y durante terapia antitrombótica/intervencionismo.' },
            { label:'Glucemias seriadas', reason:'Tiene diabetes e hiperglucemia al ingreso.' }
          ],
          destination:{
            label:'Unidad coronaria o área monitorizada con intervención cardiológica temprana',
            reason:'NSTEMI de alto riesgo por troponina dinámica, cambios de ECG y alteración segmentaria. Escalar a UCI si inestabilidad, arritmia grave, choque, edema pulmonar o dolor refractario.'
          }
        }
      }
    },

    management: {
      expected:[
        { label:'Manejo de SCA sin elevación del ST en área monitorizada', reason:'Dolor isquémico con evidencia objetiva de lesión miocárdica e isquemia.' },
        { label:'Aspirina, anticoagulación/antiagregación individualizada y estatina de alta intensidad', reason:'Tratamiento antitrombótico y prevención secundaria temprana según riesgo y estrategia invasiva.' },
        { label:'Cardiología y estrategia invasiva temprana', reason:'Marcadores de alto riesgo presentes.' },
        { label:'No oxígeno rutinario con SatO₂ normal', reason:'No existe hipoxemia de entrada.' }
      ],
      dangerousOmissions:[
        { label:'Alta ambulatoria o demora diagnóstica', reason:'No es un dolor torácico de bajo riesgo.' },
        { label:'No identificar posible evolución a STEMI', reason:'Debe repetirse ECG ante dolor persistente o cambio clínico.' },
        { label:'No valorar riesgo hemorrágico/renal antes de antitrombóticos', reason:'Afecta seguridad de tratamiento.' }
      ],
      monitoringOmitted:[
        { label:'Telemetría y signos vitales seriados', reason:'Riesgo arrítmico e isquémico.' },
        { label:'ECG/troponina seriados', reason:'Define evolución y conducta.' },
        { label:'Glucosa y función renal', reason:'Comorbilidad diabética y preparación para fármacos/procedimientos.' }
      ],
      destination:{
        label:'Área monitorizada/unidad coronaria con cardiología',
        reason:'NSTEMI de alto riesgo hasta demostrar estabilidad y completar estrategia invasiva.'
      }
    },

    clinicalReferences:[
      {
        authority:'ACC/AHA',
        document:'2025 Guideline for the Management of Patients With Acute Coronary Syndromes',
        use:'Construcción de la evaluación de SCA, estratificación, antitrombóticos, estatinas, oxígeno selectivo y estrategia invasiva.'
      },
      {
        authority:'Universal Definition of Myocardial Infarction',
        document:'Fourth Universal Definition of Myocardial Infarction',
        use:'Definición de infarto con elevación/descenso de troponina y evidencia clínica de isquemia.'
      }
    ]
  }
};

const STORAGE = CASE_DATA.storage;
