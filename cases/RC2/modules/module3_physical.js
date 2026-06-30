window.HCR_CASE_MODULES = window.HCR_CASE_MODULES || {};
window.HCR_CASE_MODULES.RC2 = window.HCR_CASE_MODULES.RC2 || {};

window.HCR_CASE_MODULES.RC2.module3 = {
    physicalExam: [
      { title:'Piel', helpId:'examen_piel', items:[
        { id:'f01', source:'Examen físico', text:'Piel tibia, discretamente pálida y diaforética', termIds:['diaforesis'] },
        { id:'f02', source:'Examen físico', text:'Sin cianosis central ni periférica', termIds:['cianosis'] },
        { id:'f03', source:'Examen físico', text:'Sin petequias, exantema ni lesiones sugestivas de infección cutánea', termIds:['petequias'] }
      ]},
      { title:'Cabeza', helpId:'examen_cabeza', items:[
        { id:'f04', source:'Examen físico', text:'Cabeza normocéfala, sin signos de trauma' },
        { id:'f05', source:'Examen físico', text:'Sin dolor a la palpación de cuero cabelludo o región temporal' },
        { id:'f06', source:'Examen físico', text:'Facies de dolor moderado, sin asimetría evidente' }
      ]},
      { title:'Ojos', helpId:'examen_ojos', items:[
        { id:'f07', source:'Examen físico', text:'Conjuntivas rosadas; escleróticas anictéricas' },
        { id:'f08', source:'Examen físico', text:'Pupilas isocóricas y reactivas a la luz' },
        { id:'f09', source:'Examen físico', text:'Sin xantelasmas llamativos ni edema periorbitario' }
      ]},
      { title:'Oídos', helpId:'examen_oidos', items:[
        { id:'f10', source:'Examen físico', text:'Pabellones y conductos auditivos sin secreción visible' },
        { id:'f11', source:'Examen físico', text:'Audición conversacional conservada bilateralmente' },
        { id:'f12', source:'Examen físico', text:'Sin dolor a la palpación mastoidea' }
      ]},
      { title:'Nariz y senos paranasales', helpId:'examen_nariz_senos', items:[
        { id:'f13', source:'Examen físico', text:'Mucosa nasal sin secreción purulenta' },
        { id:'f14', source:'Examen físico', text:'Senos paranasales no dolorosos a la palpación' },
        { id:'f15', source:'Examen físico', text:'Sin epistaxis ni signos de sangrado nasal activo' }
      ]},
      { title:'Boca', helpId:'examen_boca_faringe', items:[
        { id:'f16', source:'Examen físico', text:'Mucosa oral ligeramente seca, sin cianosis lingual', termIds:['cianosis'] },
        { id:'f17', source:'Examen físico', text:'Dentición conservada, sin absceso odontógeno visible' },
        { id:'f18', source:'Examen físico', text:'Sin lesiones orales ni sangrado gingival espontáneo' }
      ]},
      { title:'Faringe', helpId:'examen_boca_faringe', items:[
        { id:'f19', source:'Examen físico', text:'Faringe sin exudado ni placas' },
        { id:'f20', source:'Examen físico', text:'Sin eritema faríngeo marcado' },
        { id:'f21', source:'Examen físico', text:'Sin desviación uvular ni trismus' }
      ]},
      { title:'Cuello', helpId:'examen_cuello', items:[
        { id:'f22', source:'Examen físico', text:'No ingurgitación yugular a 45 grados', termIds:['ingurgitacion_yugular'] },
        { id:'f23', source:'Examen físico', text:'Pulsos carotídeos simétricos, sin soplos carotídeos audibles', termIds:['pulsos_perifericos','soplo_cardiaco'] },
        { id:'f24', source:'Examen físico', text:'Cuello móvil, sin rigidez de nuca ni dolor cervical posterior' }
      ]},
      { title:'Ganglios linfáticos', helpId:'examen_ganglios_linfaticos', items:[
        { id:'f25', source:'Examen físico', text:'Sin adenopatías cervicales palpables' },
        { id:'f26', source:'Examen físico', text:'Sin adenopatías supraclaviculares palpables' },
        { id:'f27', source:'Examen físico', text:'Sin adenopatías axilares dolorosas' }
      ]},
      { title:'Tórax', helpId:'examen_torax', items:[
        { id:'f28', source:'Examen físico', text:'Tórax simétrico, sin deformidad ni uso de musculatura accesoria' },
        { id:'f29', source:'Examen físico', text:'Dolor no reproducible a la palpación de pared torácica ni uniones costocondrales', termIds:['dolor_toracico'] },
        { id:'f30', source:'Examen físico', text:'Expansión torácica bilateral conservada' }
      ]},
      { title:'Senos', helpId:'examen_senos', items:[
        { id:'f31', source:'Examen físico', text:'Sin síntomas mamarios focales referidos' },
        { id:'f32', source:'Examen físico', text:'Inspección rápida sin retracciones o secreción por pezón' },
        { id:'f33', source:'Examen físico', text:'Examen mamario completo diferido por no modificar la prioridad diagnóstica aguda' }
      ]},
      { title:'Pulmones', helpId:'examen_respiratorio', items:[
        { id:'f34', source:'Examen físico', text:'Murmullo vesicular conservado bilateralmente', termIds:['murmullo_vesicular'] },
        { id:'f35', source:'Examen físico', text:'Sin estertores crepitantes ni sibilancias difusas', termIds:['estertores','sibilancias'] },
        { id:'f36', source:'Examen físico', text:'Sin roce pleural; percusión pulmonar sonoridad conservada bilateralmente' }
      ]},
      { title:'Corazón', helpId:'examen_cardiovascular', images:[
        {
          id:'m3_corazon_imagen_ejemplo_sca',
          title:'Imagen de ejemplo para examen fisico por sistema',
          image:'cases/RC2/assets/physical/sca_ejemplo_examen_fisico.jpg',
          description:'Imagen de ejemplo usada para probar el soporte visual dentro del examen fisico por sistemas. No corresponde necesariamente al caso.',
          selectable:false
        }
      ], items:[
        { id:'f37', source:'Examen físico', text:'Ritmo regular, taquicárdico alrededor de 100 lpm', termIds:['taquicardia'] },
        { id:'f38', source:'Examen físico', text:'Ruidos cardíacos audibles, sin soplo nuevo ni galope evidente', termIds:['soplo_cardiaco'] },
        { id:'f39', source:'Examen físico', text:'Sin roce pericárdico a la auscultación en posición sentada e inclinada hacia adelante', termIds:['roce_pericardico'] }
      ]},
      { title:'Vasos sanguíneos', helpId:'examen_cardiovascular', items:[
        { id:'f40', source:'Examen físico', text:'Pulsos radiales y pedios palpables, simétricos y de buena amplitud', termIds:['pulsos_perifericos'] },
        { id:'f41', source:'Examen físico', text:'Presión arterial sin diferencia clínicamente relevante entre ambos brazos' },
        { id:'f42', source:'Examen físico', text:'Llenado capilar menor de 2 segundos; extremidades bien perfundidas', termIds:['llenado_capilar'] }
      ]},
      { title:'Abdomen', helpId:'examen_abdominal', items:[
        { id:'f43', source:'Examen físico', text:'Abdomen blando, depresible y no doloroso a la palpación' },
        { id:'f44', source:'Examen físico', text:'Sin dolor epigástrico localizado ni defensa involuntaria', termIds:['dolor_epigastrico'] },
        { id:'f45', source:'Examen físico', text:'Ruidos hidroaéreos presentes; sin visceromegalias palpables' }
      ]},
      { title:'Genitales femeninos', helpId:'examen_genitourinario', items:[
        { id:'f46', source:'Examen físico', text:'Examen genital no prioritario en el contexto agudo actual' },
        { id:'f47', source:'Examen físico', text:'Niega sangrado genital, dolor pélvico o síntomas genitourinarios agudos' },
        { id:'f48', source:'Examen físico', text:'Exploración diferida con consentimiento de la paciente por ausencia de indicación inmediata' }
      ]},
      { title:'Recto', helpId:'examen_rectal', items:[
        { id:'f49', source:'Examen físico', text:'Examen rectal diferido por ausencia de indicación inmediata' },
        { id:'f50', source:'Examen físico', text:'Niega melena, rectorragia o dolor anal', termIds:['hemorragia_digestiva'] },
        { id:'f51', source:'Examen físico', text:'Sin datos clínicos actuales de sangrado digestivo activo', termIds:['hemorragia_digestiva'] }
      ]},
      { title:'Huesos, articulaciones y músculos', helpId:'examen_osteomuscular', items:[
        { id:'f52', source:'Examen físico', text:'Sin dolor reproducible a la palpación de músculos pectorales' },
        { id:'f53', source:'Examen físico', text:'Movilidad de hombros conservada, sin reproducir el dolor torácico' },
        { id:'f54', source:'Examen físico', text:'Sin artritis aguda ni deformidad musculoesquelética nueva' }
      ]},
      { title:'Extremidades', helpId:'examen_extremidades_perifericas', items:[
        { id:'f55', source:'Examen físico', text:'Sin edema periférico', termIds:['edema_periferico'] },
        { id:'f56', source:'Examen físico', text:'Sin dolor, calor ni asimetría en pantorrillas' },
        { id:'f57', source:'Examen físico', text:'Extremidades tibias, simétricas y sin livedo reticularis' }
      ]},
      { title:'Neurológico y psíquico', helpId:'examen_neurologico', items:[
        { id:'f58', source:'Examen físico', text:'Paciente vigil y orientada en persona, tiempo y espacio' },
        { id:'f59', source:'Examen físico', text:'Lenguaje fluido, sin déficit motor o sensitivo focal evidente', termIds:['deficit_neurologico_focal'] },
        { id:'f60', source:'Examen físico', text:'Ansiosa por el dolor, pero con juicio y colaboración conservados', termIds:['ansiedad'] }
      ]}
    ]
  };
