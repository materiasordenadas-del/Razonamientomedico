window.HCR_CASE_MODULES = window.HCR_CASE_MODULES || {};
window.HCR_CASE_MODULES.RC4 = window.HCR_CASE_MODULES.RC4 || {};

window.HCR_CASE_MODULES.RC4.module4 = {
  tables: [
    {
      title:'Hematología, bioquímica y hemostasia',
      helpId:'laboratorio',
      rows:[
        { id:'p01', source:'Paraclínicos', label:'Hemoglobina', value:'13,1', unit:'g/dL', ref:'12,0–16,0', termIds:['hemoglobina'] },
        { id:'p02', source:'Paraclínicos', label:'Leucocitos', value:'10.800', unit:'/µL', ref:'4.000–11.000', termIds:['leucocitos'] },
        { id:'p03', source:'Paraclínicos', label:'Plaquetas', value:'312.000', unit:'/µL', ref:'150.000–450.000', termIds:['plaquetas'] },
        { id:'p04', source:'Paraclínicos', label:'Creatinina', value:'0,84', unit:'mg/dL', ref:'0,5–1,1', termIds:['creatinina'] },
        { id:'p05', source:'Paraclínicos', label:'TFGe estimada', value:'80', unit:'mL/min/1,73 m²', ref:'≥60', termIds:['tfge'] },
        { id:'p06', source:'Paraclínicos', label:'Sodio', value:'138', unit:'mEq/L', ref:'135–145', termIds:['sodio'] },
        { id:'p07', source:'Paraclínicos', label:'Potasio', value:'4,3', unit:'mEq/L', ref:'3,5–5,1', termIds:['potasio'] },
        { id:'p08', source:'Paraclínicos', label:'Magnesio', value:'1,9', unit:'mg/dL', ref:'1,7–2,4', termIds:['magnesio'] },
        { id:'p09', source:'Paraclínicos', label:'INR', value:'1,0', unit:'', ref:'0,8–1,2', termIds:['inr'] },
        { id:'p10', source:'Paraclínicos', label:'TTPa', value:'29', unit:'s', ref:'25–35', termIds:['ttpa'] },
        { id:'p11', source:'Paraclínicos', label:'Glucosa plasmática', value:'218', unit:'mg/dL', ref:'70–140 en muestra aleatoria', termIds:['glucosa'] },
        { id:'p12', source:'Paraclínicos', label:'Hemoglobina glucosilada (HbA1c)', value:'8,8', unit:'%', ref:'<7 individualizado', termIds:['diabetes_mellitus_tipo_2','glucosa'] }
      ]
    },
    {
      title:'Biomarcadores y perfil metabólico',
      helpId:'marcadores_inflamatorios',
      rows:[
        { id:'p13', source:'Paraclínicos', label:'Troponina I de alta sensibilidad — 0 h', value:'68', unit:'ng/L', ref:'Percentil 99: <16', termIds:['troponina'] },
        { id:'p14', source:'Paraclínicos', label:'Troponina I de alta sensibilidad — 2 h', value:'286', unit:'ng/L', ref:'Percentil 99: <16', termIds:['troponina'] },
        { id:'p15', source:'Paraclínicos', label:'Troponina I de alta sensibilidad — 6 h', value:'1.420', unit:'ng/L', ref:'Percentil 99: <16', termIds:['troponina'] },
        { id:'p16', source:'Paraclínicos', label:'NT-proBNP', value:'96', unit:'pg/mL', ref:'Interpretar según edad y contexto', termIds:['bnp'] },
        { id:'p17', source:'Paraclínicos', label:'Proteína C reactiva', value:'4,2', unit:'mg/L', ref:'<5', termIds:['proteina_c_reactiva'] },
        { id:'p18', source:'Paraclínicos', label:'Colesterol LDL', value:'164', unit:'mg/dL', ref:'Meta según riesgo; muy alto riesgo <55', termIds:['ldl_colesterol'] },
        { id:'p19', source:'Paraclínicos', label:'Triglicéridos', value:'218', unit:'mg/dL', ref:'<150', termIds:['dislipidemia'] },
        { id:'p20', source:'Paraclínicos', label:'AST, ALT y bilirrubinas', value:'Dentro de rango de referencia', unit:'', ref:'Sin alteraciones', termIds:['ast','alt','bilirrubina'] }
      ]
    }
  ]
};

window.HCR_CASE_MODULES.RC4.module4.diagnosticImages = [
  {
    id: 'ecg_inicial',
    type: 'ecg',
    category: 'Electrocardiograma',
    categoryHelpId: 'electrocardiograma',
    termIds: ['electrocardiograma','segmento_st','ritmo_sinusal'],
    title: 'Electrocardiograma inicial',
    image: 'cases/RC4/assets/ecg/ecg_inicial.webp',
    description: 'Registro de 12 derivaciones con ritmo sinusal y descenso horizontal del segmento ST. No se observa elevación persistente del ST.',
    selectable: true,
    zoomable: true
  },
  {
    id: 'ecg_recurrencia',
    type: 'ecg',
    category: 'Electrocardiograma',
    categoryHelpId: 'electrocardiograma',
    termIds: ['electrocardiograma','segmento_st'],
    title: 'Electrocardiograma durante recurrencia de dolor',
    image: 'cases/RC4/assets/ecg/ecg_recurrencia.webp',
    description: 'Registro de 12 derivaciones con cambios de repolarización en derivaciones laterales. No se observa elevación persistente del ST.',
    selectable: true,
    zoomable: true
  },
  {
    id: 'radiografia_torax',
    type: 'xray',
    category: 'Radiografía de tórax',
    categoryHelpId: 'radiografia_torax',
    termIds: ['radiografia_torax'],
    title: 'Radiografía de tórax',
    image: 'cases/RC4/assets/rx/radiografia_torax.webp',
    description: 'Radiografía de tórax en dos proyecciones: silueta cardiomediastínica sin aumento evidente; campos pulmonares sin consolidación, edema ni derrame; mediastino no ensanchado.',
    selectable: true,
    zoomable: true
  }
];

window.HCR_CASE_MODULES.RC4.module4Media = window.HCR_CASE_MODULES.RC4.module4.diagnosticImages;
