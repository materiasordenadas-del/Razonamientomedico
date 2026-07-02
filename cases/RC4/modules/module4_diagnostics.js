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
        { id:'p20', source:'Paraclínicos', label:'AST, ALT y bilirrubinas', value:'Dentro de rango de referencia', unit:'', ref:'Sin alteraciones', termIds:[] }
      ]
    },
    {
      title:'Electrocardiogramas seriados',
      helpId:'electrocardiograma',
      rows:[
        { id:'p21', source:'Paraclínicos', label:'ECG inicial — 06:28', value:'Ritmo sinusal a 92 lpm; depresión horizontal del ST de aproximadamente 1 mm en I, aVL y V4–V6; sin elevación persistente del ST ni bloqueo de rama nuevo', unit:'', ref:'Sin desviación isquémica del ST', termIds:['electrocardiograma','segmento_st'] },
        { id:'p22', source:'Paraclínicos', label:'ECG durante recurrencia de dolor — 07:54', value:'Ritmo sinusal a 98 lpm; depresión horizontal del ST de 1,5 mm en V4–V6 y ondas T negativas nuevas en I y aVL; sin elevación del ST', unit:'', ref:'Sin cambios dinámicos isquémicos', termIds:['electrocardiograma','segmento_st'] },
        { id:'p23', source:'Paraclínicos', label:'ECG posterior a nitrato sublingual — 08:18', value:'Dolor disminuye; persiste depresión de ST de aproximadamente 0,5 mm en V4–V6, sin arritmia ni trastorno de conducción', unit:'', ref:'No aplica', termIds:['electrocardiograma'] }
      ]
    },
    {
      title:'Imágenes y evaluación estructural',
      helpId:'ecocardiografia',
      rows:[
        { id:'p24', source:'Paraclínicos', label:'Radiografía de tórax', value:'Silueta cardiaca no aumentada; campos pulmonares sin edema, consolidación ni derrame; mediastino no ensanchado', unit:'', ref:'Sin alteraciones agudas', termIds:['radiografia_torax'] },
        { id:'p25', source:'Paraclínicos', label:'Ecocardiograma transtorácico urgente', value:'FEVI 55%; hipocinesia leve de segmentos basal y medio inferolaterales; sin derrame pericárdico, insuficiencia valvular significativa ni datos ecográficos de sobrecarga derecha', unit:'', ref:'Sin alteraciones segmentarias nuevas', termIds:['ecocardiograma','insuficiencia_cardiaca'] },
        { id:'p26', source:'Paraclínicos', label:'Evaluación clínica para disección aórtica', value:'Sin dolor transfixiante o migratorio, déficit neurológico, déficit de pulso, insuficiencia aórtica nueva, hipotensión ni mediastino ensanchado; la sospecha clínica actual es baja', unit:'', ref:'No aplica', termIds:['dolor_toracico','pulsos_perifericos','presion_arterial'] },
        { id:'p27', source:'Paraclínicos', label:'Evaluación clínica para embolia pulmonar', value:'Sin hipoxemia, taquicardia marcada, dolor pleurítico, hemoptisis, signos de TVP ni factor precipitante mayor; probabilidad clínica baja', unit:'', ref:'No aplica', termIds:['disnea','hemoptisis','dolor_pleuritico','hipoxemia'] }
      ]
    }
  ]
};

window.HCR_CASE_MODULES.RC4.module4.diagnosticImages = [
  {
    id: 'ecg_inicial',
    type: 'ecg',
    category: 'Electrocardiograma',
    title: 'Electrocardiograma inicial',
    image: 'cases/RC4/assets/ecg/ecg_inicial.webp',
    description: 'Electrocardiograma de 12 derivaciones incorporado como recurso visual del caso.',
    selectable: true
  }
];
window.HCR_CASE_MODULES.RC4.module4Media = window.HCR_CASE_MODULES.RC4.module4.diagnosticImages;
