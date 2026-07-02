window.HCR_CASE_MODULES = window.HCR_CASE_MODULES || {};
window.HCR_CASE_MODULES.RC4 = window.HCR_CASE_MODULES.RC4 || {};

window.HCR_CASE_MODULES.RC4.module3 = {
  physicalExam: [
    { title:'Piel', helpId:'examen_piel', items:[
      { id:'f01', source:'Examen físico', text:'Piel discretamente diaforética al ingreso, tibia, sin cianosis, palidez marcada ni livedo reticularis', termIds:['diaforesis','cianosis'] },
      { id:'f02', source:'Examen físico', text:'Llenado capilar menor de 2 segundos; sin signos de hipoperfusión periférica', termIds:['llenado_capilar'] },
      { id:'f03', source:'Examen físico', text:'Sin exantema, equimosis extensas ni lesiones compatibles con herpes zóster' }
    ]},
    { title:'Cabeza', helpId:'examen_cabeza', items:[
      { id:'f04', source:'Examen físico', text:'Cabeza normocéfala, sin traumatismo ni dolor a la palpación temporal' },
      { id:'f05', source:'Examen físico', text:'Facies de preocupación durante el dolor; sin signos de sufrimiento respiratorio' },
      { id:'f06', source:'Examen físico', text:'Sin asimetría facial ni disartria', termIds:['deficit_neurologico_focal'] }
    ]},
    { title:'Ojos', helpId:'examen_ojos', items:[
      { id:'f07', source:'Examen físico', text:'Pupilas isocóricas y reactivas a la luz; movimientos oculares conservados' },
      { id:'f08', source:'Examen físico', text:'Conjuntivas normocoloreadas; escleróticas anictéricas' },
      { id:'f09', source:'Examen físico', text:'Sin alteración visual grosera durante la exploración' }
    ]},
    { title:'Oídos', helpId:'examen_oidos', items:[
      { id:'f10', source:'Examen físico', text:'Audición conversacional conservada bilateralmente' },
      { id:'f11', source:'Examen físico', text:'Sin otorrea ni dolor mastoideo' },
      { id:'f12', source:'Examen físico', text:'Sin hallazgos otológicos que expliquen dolor referido a mandíbula' }
    ]},
    { title:'Nariz y senos paranasales', helpId:'examen_nariz_senos', items:[
      { id:'f13', source:'Examen físico', text:'Mucosa nasal sin sangrado activo ni secreción purulenta' },
      { id:'f14', source:'Examen físico', text:'Senos paranasales no dolorosos a la palpación' },
      { id:'f15', source:'Examen físico', text:'Sin signos de infección de vías respiratorias superiores activa' }
    ]},
    { title:'Boca', helpId:'examen_boca_faringe', items:[
      { id:'f16', source:'Examen físico', text:'Mucosa oral húmeda; sin cianosis central ni úlceras orales', termIds:['cianosis'] },
      { id:'f17', source:'Examen físico', text:'Sin absceso odontógeno ni dolor dental a la palpación dirigida' },
      { id:'f18', source:'Examen físico', text:'Sin signos clínicos de deshidratación grave' }
    ]},
    { title:'Faringe', helpId:'examen_boca_faringe', items:[
      { id:'f19', source:'Examen físico', text:'Faringe sin eritema marcado, placas ni exudado' },
      { id:'f20', source:'Examen físico', text:'Sin desviación uvular ni trismus' },
      { id:'f21', source:'Examen físico', text:'No hay signo clínico de infección faríngea aguda' }
    ]},
    { title:'Cuello', helpId:'examen_cuello', items:[
      { id:'f22', source:'Examen físico', text:'Presión venosa yugular no elevada a 45 grados; no reflujo hepatoyugular patológico', termIds:['ingurgitacion_yugular'] },
      { id:'f23', source:'Examen físico', text:'Pulsos carotídeos de amplitud conservada y simétricos; sin soplos carotídeos audibles', termIds:['pulsos_perifericos','soplo_cardiaco'] },
      { id:'f24', source:'Examen físico', text:'Sin rigidez de nuca, adenopatías cervicales ni masas pulsátiles' }
    ]},
    { title:'Ganglios linfáticos', helpId:'examen_ganglios_linfaticos', items:[
      { id:'f25', source:'Examen físico', text:'Sin adenopatías cervicales, supraclaviculares o axilares palpables' },
      { id:'f26', source:'Examen físico', text:'Sin adenopatías dolorosas' },
      { id:'f27', source:'Examen físico', text:'Sin hallazgos que sugieran proceso linfoproliferativo o infeccioso sistémico' }
    ]},
    { title:'Tórax', helpId:'examen_torax', items:[
      { id:'f28', source:'Examen físico', text:'Tórax simétrico, con expansión bilateral conservada y sin uso de musculatura accesoria', termIds:['disnea','frecuencia_respiratoria'] },
      { id:'f29', source:'Examen físico', text:'Dolor no reproducible a la palpación esternal, costocondral ni de músculos pectorales', termIds:['dolor_toracico'] },
      { id:'f30', source:'Examen físico', text:'Sin crepitación subcutánea ni deformidad de pared torácica' }
    ]},
    { title:'Senos', helpId:'examen_senos', items:[
      { id:'f31', source:'Examen físico', text:'Sin síntomas mamarios focales referidos' },
      { id:'f32', source:'Examen físico', text:'Exploración mamaria completa diferida por no modificar la prioridad diagnóstica de dolor torácico agudo' },
      { id:'f33', source:'Examen físico', text:'Sin datos clínicos de proceso cutáneo mamario agudo' }
    ]},
    { title:'Pulmones', helpId:'examen_respiratorio', items:[
      { id:'f34', source:'Examen físico', text:'Murmullo vesicular conservado bilateralmente, sin estertores crepitantes ni sibilancias', termIds:['murmullo_vesicular','estertores','sibilancias'] },
      { id:'f35', source:'Examen físico', text:'Percusión pulmonar sonora bilateralmente; sin disminución focal de ruidos respiratorios', termIds:['matidez_percusion','murmullo_vesicular'] },
      { id:'f36', source:'Examen físico', text:'Sin roce pleural ni signos clínicos de edema pulmonar agudo', termIds:['roce_pericardico','estertores'] }
    ]},
    { title:'Corazón', helpId:'examen_cardiovascular', items:[
      { id:'f37', source:'Examen físico', text:'Ritmo regular a aproximadamente 92 lpm; primer y segundo ruidos presentes, sin desdoblamiento patológico evidente', termIds:['frecuencia_cardiaca','ritmo_sinusal'] },
      { id:'f38', source:'Examen físico', text:'Sin soplo nuevo, tercer ruido, cuarto ruido ni roce pericárdico audible', termIds:['soplo_cardiaco','roce_pericardico'] },
      { id:'f39', source:'Examen físico', text:'Choque de punta no desplazado; sin impulso paraesternal sostenido' }
    ]},
    { title:'Vasos sanguíneos', helpId:'examen_cardiovascular', items:[
      { id:'f40', source:'Examen físico', text:'Pulsos radiales, braquiales, femorales, pedios y tibiales posteriores palpables, simétricos y de buena amplitud', termIds:['pulsos_perifericos'] },
      { id:'f41', source:'Examen físico', text:'Presión arterial sin diferencia clínicamente relevante entre ambos brazos', termIds:['presion_arterial'] },
      { id:'f42', source:'Examen físico', text:'Extremidades tibias; sin signos de isquemia arterial aguda, edema unilateral o tromboflebitis superficial', termIds:['enfermedad_arterial_periferica','edema_periferico'] }
    ]},
    { title:'Abdomen', helpId:'examen_abdominal', items:[
      { id:'f43', source:'Examen físico', text:'Abdomen blando, depresible y no doloroso; sin defensa ni rebote' },
      { id:'f44', source:'Examen físico', text:'Sin masa abdominal pulsátil ni soplo abdominal audible' },
      { id:'f45', source:'Examen físico', text:'Sin hepatomegalia congestiva, ascitis ni dolor en epigastrio a la palpación profunda', termIds:['dolor_epigastrico'] }
    ]},
    { title:'Genitales femeninos', helpId:'examen_genitourinario', items:[
      { id:'f46', source:'Examen físico', text:'Exploración ginecológica no prioritaria en el contexto actual' },
      { id:'f47', source:'Examen físico', text:'Niega sangrado genital activo', termIds:['sangrado_mayor'] },
      { id:'f48', source:'Examen físico', text:'Exploración diferida por ausencia de indicación inmediata' }
    ]},
    { title:'Recto', helpId:'examen_rectal', items:[
      { id:'f49', source:'Examen físico', text:'Examen rectal diferido por ausencia de indicación inmediata' },
      { id:'f50', source:'Examen físico', text:'Niega melena, rectorragia o dolor anal', termIds:['hemorragia_digestiva'] },
      { id:'f51', source:'Examen físico', text:'Sin datos clínicos actuales de hemorragia digestiva activa', termIds:['hemorragia_digestiva'] }
    ]},
    { title:'Huesos, articulaciones y músculos', helpId:'examen_osteomuscular', items:[
      { id:'f52', source:'Examen físico', text:'Sin dolor a la movilización activa de hombros ni sensibilidad costocondral reproducible', termIds:['dolor_toracico'] },
      { id:'f53', source:'Examen físico', text:'Sin edema o dolor a la palpación de pantorrillas; perímetros simétricos', termIds:['edema_periferico'] },
      { id:'f54', source:'Examen físico', text:'Sin dolor vertebral focal ni limitación musculoesquelética que explique el cuadro' }
    ]},
    { title:'Extremidades', helpId:'examen_extremidades_perifericas', items:[
      { id:'f55', source:'Examen físico', text:'Sin edema periférico, cianosis ni acropaquia', termIds:['edema_periferico','cianosis'] },
      { id:'f56', source:'Examen físico', text:'Pies sin úlceras activas; pulsos pedios conservados bilateralmente', termIds:['pulsos_perifericos','enfermedad_arterial_periferica'] },
      { id:'f57', source:'Examen físico', text:'No se observan signos de hipoperfusión periférica ni congestión venosa', termIds:['llenado_capilar','edema_periferico'] }
    ]},
    { title:'Neurológico y psíquico', helpId:'examen_neurologico', items:[
      { id:'f58', source:'Examen físico', text:'Paciente vigil y orientada en persona, lugar y tiempo' },
      { id:'f59', source:'Examen físico', text:'Lenguaje fluido; sin déficit motor, sensitivo, cerebeloso o de pares craneales evidente', termIds:['deficit_neurologico_focal'] },
      { id:'f60', source:'Examen físico', text:'Ansiedad situacional, juicio preservado y adecuada colaboración; sin signos meníngeos', termIds:['ansiedad'] }
    ]}
  ]
};
