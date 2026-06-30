window.HCR_CASE_MODULES = window.HCR_CASE_MODULES || {};
window.HCR_CASE_MODULES.RC2 = window.HCR_CASE_MODULES.RC2 || {};

// Future diagnostic media can be attached without changing the clinical tables.
// Expected media object format:
// { id, type: "ecg" | "xray" | "audio" | "image" | "lab" | "document", src, title, hiddenInterpretation }

window.HCR_CASE_MODULES.RC2.module4 = {
    tables: [
      {
        title:'Hematología, glucosa y función renal',
        helpId:'laboratorio',
        rows:[
          { id:'p01', source:'Paraclínicos', label:'Hemoglobina', value:'13,6', unit:'g/dL', ref:'12,0–16,0', termIds:['hemoglobina'] },
          { id:'p02', source:'Paraclínicos', label:'Leucocitos', value:'9.400', unit:'/µL', ref:'4.000–11.000', termIds:['leucocitos'] },
          { id:'p03', source:'Paraclínicos', label:'Plaquetas', value:'278.000', unit:'/µL', ref:'150.000–450.000', termIds:['plaquetas'] },
          { id:'p04', source:'Paraclínicos', label:'Creatinina', value:'0,9', unit:'mg/dL', ref:'0,6–1,1', termIds:['creatinina'] },
          { id:'p05', source:'Paraclínicos', label:'TFGe estimada', value:'76', unit:'mL/min/1,73 m²', ref:'≥60', termIds:['tfge'] },
          { id:'p06', source:'Paraclínicos', label:'Potasio', value:'4,3', unit:'mEq/L', ref:'3,5–5,0', termIds:['potasio'] },
          { id:'p07', source:'Paraclínicos', label:'Magnesio', value:'1,9', unit:'mg/dL', ref:'1,7–2,2', termIds:['magnesio'] },
          { id:'p08', source:'Paraclínicos', label:'Glucosa plasmática', value:'218', unit:'mg/dL', ref:'70–99', termIds:['glucosa'] }
        ]
      },
      {
        title:'Marcadores cardíacos y coagulación',
        helpId:'marcadores_cardiacos',
        rows:[
          { id:'p09', source:'Paraclínicos', label:'Troponina I ultrasensible — 0 h', value:'56', unit:'ng/L', ref:'<14', termIds:['troponina'] },
          { id:'p10', source:'Paraclínicos', label:'Troponina I ultrasensible — 2 h', value:'212', unit:'ng/L', ref:'<14', termIds:['troponina'] },
          { id:'p11', source:'Paraclínicos', label:'BNP', value:'68', unit:'pg/mL', ref:'<100', termIds:['bnp'] },
          { id:'p12', source:'Paraclínicos', label:'TP/INR', value:'1,0', unit:'', ref:'0,8–1,2', termIds:['inr'] },
          { id:'p13', source:'Paraclínicos', label:'TTPa', value:'30', unit:'s', ref:'25–35', termIds:['ttpa'] },
          { id:'p14', source:'Paraclínicos', label:'Perfil lipídico — LDL-C', value:'164', unit:'mg/dL', ref:'<70 si muy alto riesgo', termIds:['ldl_colesterol'] }
        ]
      },
      {
        title:'Electrocardiograma — informes seriados',
        helpId:'electrocardiograma',
        rows:[
          { id:'p15', source:'Paraclínicos', label:'ECG inicial', value:'Ritmo sinusal a 98 lpm; infradesnivel horizontal del ST de aproximadamente 1 mm en V4–V6 y T negativas en I/aVL', unit:'', ref:'Sin cambios isquémicos agudos', termIds:['electrocardiograma','segmento_st','ritmo_sinusal'] },
          { id:'p16', source:'Paraclínicos', label:'ECG a 30 min por persistencia de dolor', value:'Persistencia de infradesnivel del ST en V4–V6 e I/aVL, sin elevación del ST en derivaciones contiguas', unit:'', ref:'Sin cambios dinámicos de isquemia', termIds:['electrocardiograma','segmento_st'] },
          { id:'p17', source:'Paraclínicos', label:'ECG — conducción', value:'QRS estrecho; sin bloqueo de rama ni arritmia sostenida', unit:'', ref:'QRS <120 ms; ritmo sinusal', termIds:['qrs','ritmo_sinusal'] }
        ]
      },
      {
        title:'Imágenes y evaluación cardiaca',
        helpId:'imagenes_diagnosticas',
        rows:[
          { id:'p18', source:'Paraclínicos', label:'Radiografía de tórax', value:'Silueta cardiaca no aumentada; sin edema pulmonar, consolidación ni derrame pleural', unit:'', ref:'Sin alteraciones agudas', termIds:['radiografia_torax','consolidacion_pulmonar','derrame_pleural'] },
          { id:'p19', source:'Paraclínicos', label:'Ecocardiograma transtorácico focal', value:'FEVI aproximada 50%; hipocinesia inferolateral leve; sin derrame pericárdico significativo', unit:'', ref:'Sin alteraciones segmentarias nuevas', termIds:['ecocardiograma'] },
          { id:'p20', source:'Paraclínicos', label:'Aorta proximal visible por ecocardiografía', value:'Sin dilatación evidente de raíz aórtica en ventana disponible; estudio no excluye disección por sí solo', unit:'', ref:'No aplica' }
        ]
      }
    ]
  };

window.HCR_CASE_MODULES.RC2.module4.diagnosticImages = [
  {
    id: 'ecg_ejemplo_infarto_inferior_antiguo',
    type: 'ecg',
    category: 'Electrocardiograma',
    categoryHelpId: 'electrocardiograma',
    title: 'Electrocardiograma de 12 derivaciones — ejemplo visual',
    image: 'cases/RC2/assets/ecg/ecg_ejemplo_infarto_inferior_antiguo.png',
    description: 'Imagen de ejemplo cargada solo para previsualizar el componente de Módulo 4; no corresponde al caso clínico.'
  },
  {
    id: 'rx_ejemplo_enfisema',
    type: 'xray',
    category: 'Rayos X',
    categoryHelpId: 'rayos_x',
    title: 'Radiografía de tórax — ejemplo visual',
    image: 'cases/RC2/assets/xray/rx_ejemplo_enfisema.jpg',
    description: 'Imagen de ejemplo cargada solo para previsualizar el componente de Módulo 4; no corresponde al caso clínico.'
  }
];

window.HCR_CASE_MODULES.RC2.module4Media = window.HCR_CASE_MODULES.RC2.module4.diagnosticImages;
