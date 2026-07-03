window.HCR_CASE_MODULES = window.HCR_CASE_MODULES || {};
window.HCR_CASE_MODULES.RC4 = window.HCR_CASE_MODULES.RC4 || {};

window.HCR_CASE_MODULES.RC4.module3 = {
  physicalExam: [
    { title:'Piel', helpId:'examen_piel', items:[
      { id:'f01', source:'Examen físico', text:'Piel discretamente diaforética al ingreso, tibia, sin cianosis, palidez marcada ni livedo reticularis', termIds:['diaforesis','cianosis','palidez'] },
      { id:'f02', source:'Examen físico', text:'Llenado capilar menor de 2 segundos; sin signos de hipoperfusión periférica', termIds:['llenado_capilar'] },
      { id:'f03', source:'Examen físico', text:'Sin exantema, equimosis extensas ni lesiones compatibles con herpes zóster' },
      { id:'f03a', source:'Examen físico', text:'Sin petequias, lesiones purpúricas ni sangrado cutáneo visible', termIds:['petequias','sangrado_mayor'] },
      { id:'f03b', source:'Examen físico', text:'Sin edema periférico visible ni lesiones ulceradas en miembros inferiores', termIds:['edema_periferico'] }
    ]},
    { title:'Cabeza', helpId:'examen_cabeza', items:[
      { id:'f04', source:'Examen físico', text:'Cabeza normocéfala, sin traumatismo ni dolor a la palpación temporal' },
      { id:'f05', source:'Examen físico', text:'Facies de preocupación durante el dolor; sin signos de sufrimiento respiratorio' },
      { id:'f06', source:'Examen físico', text:'Sin asimetría facial ni disartria', termIds:['deficit_neurologico_focal'] },
      { id:'f06a', source:'Examen físico', text:'Arterias temporales sin engrosamiento, dolor ni nodularidad palpable' },
      { id:'f06b', source:'Examen físico', text:'Sin dolor a la palpación de senos frontales o maxilares' }
    ]},
    { title:'Ojos', helpId:'examen_ojos', items:[
      { id:'f07', source:'Examen físico', text:'Pupilas isocóricas y reactivas a la luz; movimientos oculares conservados' },
      { id:'f08', source:'Examen físico', text:'Conjuntivas normocoloreadas; escleróticas anictéricas', termIds:['palidez','ictericia'] },
      { id:'f09', source:'Examen físico', text:'Sin alteración visual grosera durante la exploración', termIds:['alteracion_visual'] },
      { id:'f09a', source:'Examen físico', text:'Sin ptosis, anisocoria ni nistagmo espontáneo' },
      { id:'f09b', source:'Examen físico', text:'Fondoscopia no realizada en el primer examen; no hay síntomas visuales que obliguen a priorizarla de inmediato' }
    ]},
    { title:'Oídos', helpId:'examen_oidos', items:[
      { id:'f10', source:'Examen físico', text:'Audición conversacional conservada bilateralmente' },
      { id:'f11', source:'Examen físico', text:'Sin otorrea ni dolor mastoideo' },
      { id:'f12', source:'Examen físico', text:'Sin hallazgos otológicos que expliquen dolor referido a mandíbula' },
      { id:'f12a', source:'Examen físico', text:'Conductos auditivos externos sin eritema, edema o secreción visible' },
      { id:'f12b', source:'Examen físico', text:'Sin sensibilidad dolorosa a la tracción del pabellón auricular' }
    ]},
    { title:'Nariz y senos paranasales', helpId:'examen_nariz_senos', items:[
      { id:'f13', source:'Examen físico', text:'Mucosa nasal sin sangrado activo ni secreción purulenta' },
      { id:'f14', source:'Examen físico', text:'Senos paranasales no dolorosos a la palpación' },
      { id:'f15', source:'Examen físico', text:'Sin signos de infección de vías respiratorias superiores activa' },
      { id:'f15a', source:'Examen físico', text:'Tabique nasal sin desviación obstructiva marcada ni perforación visible' },
      { id:'f15b', source:'Examen físico', text:'Sin rinorrea acuosa, costras hemorrágicas ni lesión nasal ulcerada' }
    ]},
    { title:'Boca', helpId:'examen_boca_faringe', items:[
      { id:'f16', source:'Examen físico', text:'Mucosa oral húmeda; sin cianosis central ni úlceras orales', termIds:['cianosis'] },
      { id:'f17', source:'Examen físico', text:'Sin absceso odontógeno ni dolor dental a la palpación dirigida' },
      { id:'f18', source:'Examen físico', text:'Sin signos clínicos de deshidratación grave' },
      { id:'f18a', source:'Examen físico', text:'Encías sin sangrado activo ni lesiones inflamatorias importantes' },
      { id:'f18b', source:'Examen físico', text:'Lengua húmeda, sin lesiones, desviación ni fasciculaciones' }
    ]},
    { title:'Faringe', helpId:'examen_boca_faringe', items:[
      { id:'f19', source:'Examen físico', text:'Faringe sin eritema marcado, placas ni exudado' },
      { id:'f20', source:'Examen físico', text:'Sin desviación uvular ni trismus' },
      { id:'f21', source:'Examen físico', text:'No hay signo clínico de infección faríngea aguda' },
      { id:'f21a', source:'Examen físico', text:'Amígdalas sin hipertrofia significativa ni exudado' },
      { id:'f21b', source:'Examen físico', text:'Deglución de saliva conservada; sin voz apagada ni estridor' }
    ]},
    { title:'Cuello', helpId:'examen_cuello', items:[
      { id:'f22', source:'Examen físico', text:'Presión venosa yugular no elevada a 45 grados; no reflujo hepatoyugular patológico', termIds:['ingurgitacion_yugular'] },
      { id:'f23', source:'Examen físico', text:'Pulsos carotídeos de amplitud conservada y simétricos; sin soplos carotídeos audibles', termIds:['pulsos_perifericos','soplo_cardiaco'] },
      { id:'f24', source:'Examen físico', text:'Sin rigidez de nuca, adenopatías cervicales ni masas pulsátiles' },
      { id:'f24a', source:'Examen físico', text:'Tráquea centrada; sin bocio visible ni aumento de volumen cervical anterior' },
      { id:'f24b', source:'Examen físico', text:'Sin dolor cervical a la palpación ni limitación importante de la movilidad' }
    ]},
    { title:'Ganglios linfáticos', helpId:'examen_ganglios_linfaticos', items:[
      { id:'f25', source:'Examen físico', text:'Sin adenopatías cervicales, supraclaviculares o axilares palpables' },
      { id:'f26', source:'Examen físico', text:'Sin adenopatías dolorosas' },
      { id:'f27', source:'Examen físico', text:'Sin hallazgos que sugieran proceso linfoproliferativo o infeccioso sistémico' },
      { id:'f27a', source:'Examen físico', text:'Sin ganglios aumentados de tamaño en regiones epitrocleares o inguinales accesibles' },
      { id:'f27b', source:'Examen físico', text:'No se palpan masas supraclaviculares ni adenopatías fijas' }
    ]},
    { title:'Tórax', helpId:'examen_torax', items:[
      { id:'f28', source:'Examen físico', text:'Tórax simétrico, con expansión bilateral conservada y sin uso de musculatura accesoria', termIds:['disnea','frecuencia_respiratoria'] },
      { id:'f29', source:'Examen físico', text:'Dolor no reproducible a la palpación esternal, costocondral ni de músculos pectorales', termIds:['dolor_toracico'] },
      { id:'f30', source:'Examen físico', text:'Sin crepitación subcutánea ni deformidad de pared torácica' },
      { id:'f30a', source:'Examen físico', text:'Frecuencia respiratoria observada de 20 rpm, sin tiraje ni aleteo nasal', termIds:['frecuencia_respiratoria'] },
      { id:'f30b', source:'Examen físico', text:'Sin dolor a la palpación de articulaciones esternoclaviculares ni costocondrales' }
    ]},
    { title:'Senos', helpId:'examen_senos', items:[
      { id:'f31', source:'Examen físico', text:'Sin síntomas mamarios focales referidos' },
      { id:'f32', source:'Examen físico', text:'Piel de ambas mamas sin eritema, edema ni lesiones agudas visibles' },
      { id:'f33', source:'Examen físico', text:'Sin secreción por pezón ni masa superficial evidente a la inspección' },
      { id:'f33a', source:'Examen físico', text:'Sin retracción reciente del pezón ni adenopatía axilar palpable' },
      { id:'f33b', source:'Examen físico', text:'No hay dolor mamario focal que reproduzca la molestia torácica actual' }
    ]},
    { title:'Pulmones', helpId:'examen_respiratorio', items:[
      { id:'f34', source:'Examen físico', text:'Murmullo vesicular conservado bilateralmente, sin estertores crepitantes ni sibilancias', termIds:['murmullo_vesicular','estertores','sibilancias'] },
      { id:'f35', source:'Examen físico', text:'Percusión pulmonar sonora bilateralmente; sin disminución focal de ruidos respiratorios', termIds:['matidez_percusion','murmullo_vesicular'] },
      { id:'f36', source:'Examen físico', text:'Sin roce pleural ni signos clínicos de edema pulmonar agudo', termIds:['edema_pulmonar'] },
      { id:'f36a', source:'Examen físico', text:'Resonancia vocal sin aumento focal ni disminución basal' },
      { id:'f36b', source:'Examen físico', text:'Sin egofonía, pectoriloquia ni prolongación espiratoria' }
    ]},
    { title:'Corazón', helpId:'examen_cardiovascular', items:[
      { id:'f37', source:'Examen físico', text:'Ritmo regular a aproximadamente 92 lpm; primer y segundo ruidos presentes, sin desdoblamiento patológico evidente', termIds:['frecuencia_cardiaca','ritmo_sinusal'] },
      { id:'f38', source:'Examen físico', text:'Sin soplo nuevo, tercer ruido, cuarto ruido ni roce pericárdico audible', termIds:['soplo_cardiaco','roce_pericardico'] },
      { id:'f39', source:'Examen físico', text:'Choque de punta no desplazado; sin impulso paraesternal sostenido' },
      { id:'f39a', source:'Examen físico', text:'No se palpa frémito precordial ni levantamiento paraesternal' },
      { id:'f39b', source:'Examen físico', text:'No se ausculta chasquido, clic mesosistólico ni galope durante la exploración' }
    ]},
    { title:'Vasos sanguíneos', helpId:'examen_cardiovascular', items:[
      { id:'f40', source:'Examen físico', text:'Pulsos radiales, braquiales, femorales, pedios y tibiales posteriores palpables, simétricos y de buena amplitud', termIds:['pulsos_perifericos'] },
      { id:'f41', source:'Examen físico', text:'Presión arterial sin diferencia clínicamente relevante entre ambos brazos', termIds:['presion_arterial'] },
      { id:'f42', source:'Examen físico', text:'Extremidades tibias; sin signos de isquemia arterial aguda, edema unilateral o tromboflebitis superficial', termIds:['enfermedad_arterial_periferica','edema_periferico'] },
      { id:'f42a', source:'Examen físico', text:'Sin soplos femorales ni masa pulsátil inguinal palpable' },
      { id:'f42b', source:'Examen físico', text:'Sin cambios tróficos, úlceras isquémicas ni livedo en extremidades' }
    ]},
    { title:'Abdomen', helpId:'examen_abdominal', items:[
      { id:'f43', source:'Examen físico', text:'Abdomen blando, depresible y no doloroso; sin defensa ni rebote' },
      { id:'f44', source:'Examen físico', text:'Sin masa abdominal pulsátil ni soplo abdominal audible' },
      { id:'f45', source:'Examen físico', text:'Sin hepatomegalia congestiva, ascitis ni dolor en epigastrio a la palpación profunda', termIds:['dolor_epigastrico'] },
      { id:'f45a', source:'Examen físico', text:'Ruidos intestinales presentes y de frecuencia habitual' },
      { id:'f45b', source:'Examen físico', text:'Sin dolor en hipocondrio derecho, ángulo costovertebral ni fosa iliaca' }
    ]},
    { title:'Genitales femeninos', helpId:'examen_genitourinario', items:[
      { id:'f46', source:'Examen físico', text:'Inspección externa sin sangrado genital activo ni secreción anormal visible', termIds:['sangrado_mayor'] },
      { id:'f47', source:'Examen físico', text:'Sin lesiones ulceradas, vesiculares ni edema vulvar visible' },
      { id:'f48', source:'Examen físico', text:'Sin dolor suprapúbico a la palpación externa' },
      { id:'f48a', source:'Examen físico', text:'Sin masa inguinal ni adenopatía inguinal dolorosa palpable' },
      { id:'f48b', source:'Examen físico', text:'Exploración pélvica interna no indicada en la prioridad aguda actual; no hay datos que sugieran hemorragia ginecológica' }
    ]},
    { title:'Recto', helpId:'examen_rectal', items:[
      { id:'f49', source:'Examen físico', text:'Inspección perianal sin sangrado activo, fisura visible ni lesiones externas' },
      { id:'f50', source:'Examen físico', text:'No hay dolor perianal ni masa externa palpable' },
      { id:'f51', source:'Examen físico', text:'Sin datos clínicos actuales de hemorragia digestiva baja', termIds:['hemorragia_digestiva'] },
      { id:'f51a', source:'Examen físico', text:'Tacto rectal no realizado inicialmente por ausencia de sangrado, anemia o indicación urgente' },
      { id:'f51b', source:'Examen físico', text:'La paciente niega melena y rectorragia; no se observa compromiso hemodinámico atribuible a pérdida sanguínea', termIds:['hemorragia_digestiva','palidez'] }
    ]},
    { title:'Huesos, articulaciones y músculos', helpId:'examen_osteomuscular', items:[
      { id:'f52', source:'Examen físico', text:'Sin dolor a la movilización activa de hombros ni sensibilidad costocondral reproducible', termIds:['dolor_toracico'] },
      { id:'f53', source:'Examen físico', text:'Sin edema o dolor a la palpación de pantorrillas; perímetros simétricos', termIds:['edema_periferico'] },
      { id:'f54', source:'Examen físico', text:'Sin dolor vertebral focal ni limitación musculoesquelética que explique el cuadro', termIds:['dolor_vertebral'] },
      { id:'f54a', source:'Examen físico', text:'Fuerza proximal y distal conservada de forma simétrica en las cuatro extremidades' },
      { id:'f54b', source:'Examen físico', text:'Sin artritis, calor articular ni derrame evidente en articulaciones grandes', termIds:['artralgia'] }
    ]},
    { title:'Extremidades', helpId:'examen_extremidades_perifericas', items:[
      { id:'f55', source:'Examen físico', text:'Sin edema periférico, cianosis ni acropaquia', termIds:['edema_periferico','cianosis'] },
      { id:'f56', source:'Examen físico', text:'Pies sin úlceras activas; pulsos pedios conservados bilateralmente', termIds:['pulsos_perifericos','enfermedad_arterial_periferica'] },
      { id:'f57', source:'Examen físico', text:'No se observan signos de hipoperfusión periférica ni congestión venosa', termIds:['llenado_capilar','edema_periferico'] },
      { id:'f57a', source:'Examen físico', text:'Temperatura y coloración simétricas en ambas manos y pies' },
      { id:'f57b', source:'Examen físico', text:'Sin deformidades, lesiones traumáticas recientes ni limitación funcional para la marcha' }
    ]},
    { title:'Neurológico y psíquico', helpId:'examen_neurologico', items:[
      { id:'f58', source:'Examen físico', text:'Paciente vigil y orientada en persona, lugar y tiempo' },
      { id:'f59', source:'Examen físico', text:'Lenguaje fluido; sin déficit motor, sensitivo, cerebeloso o de pares craneales evidente', termIds:['deficit_neurologico_focal'] },
      { id:'f60', source:'Examen físico', text:'Ansiedad situacional, juicio preservado y adecuada colaboración; sin signos meníngeos', termIds:['ansiedad','signos_meningeos'] },
      { id:'f60a', source:'Examen físico', text:'Marcha estable cuando se evalúa de forma breve; sin ataxia ni lateralización' },
      { id:'f60b', source:'Examen físico', text:'Glasgow 15/15; memoria inmediata y atención conservadas durante la entrevista' }
    ]}
  ]
};
