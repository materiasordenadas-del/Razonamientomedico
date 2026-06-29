window.HCR_CASE_MODULES = window.HCR_CASE_MODULES || {};
window.HCR_CASE_MODULES.RC1 = window.HCR_CASE_MODULES.RC1 || {};

// Future diagnostic media can be attached without changing the clinical tables.
// Expected media object format:
// { id, type: "ecg" | "xray" | "audio" | "image" | "lab" | "document", src, title, hiddenInterpretation }

window.HCR_CASE_MODULES.RC1.module4 = {
    tables: [
      { title:'Hematología y química', rows:[
        { id:'p01', source:'Paraclínicos', label:'Leucocitos', value:'16.800', unit:'/µL', ref:'4.000–11.000' },
        { id:'p02', source:'Paraclínicos', label:'Neutrófilos', value:'88', unit:'%', ref:'40–70' },
        { id:'p03', source:'Paraclínicos', label:'Hemoglobina', value:'13,2', unit:'g/dL', ref:'13,0–17,0' },
        { id:'p04', source:'Paraclínicos', label:'Plaquetas', value:'310.000', unit:'/µL', ref:'150.000–450.000' },
        { id:'p05', source:'Paraclínicos', label:'Creatinina', value:'1,1', unit:'mg/dL', ref:'0,7–1,3' },
        { id:'p06', source:'Paraclínicos', label:'Sodio', value:'132', unit:'mEq/L', ref:'135–145' },
        { id:'p07', source:'Paraclínicos', label:'Glucosa', value:'178', unit:'mg/dL', ref:'70–99' },
        { id:'p08', source:'Paraclínicos', label:'Lactato venoso', value:'1,8', unit:'mmol/L', ref:'0,5–2,2' }
      ]},
      { title:'Inflamación, microbiología y gasometría', rows:[
        { id:'p09', source:'Paraclínicos', label:'Proteína C reactiva', value:'145', unit:'mg/L', ref:'<5' },
        { id:'p10', source:'Paraclínicos', label:'Procalcitonina', value:'0,72', unit:'ng/mL', ref:'<0,10' },
        { id:'p11', source:'Paraclínicos', label:'Gram de esputo', value:'Abundantes PMN y cocos grampositivos en pares; muestra adecuada', unit:'', ref:'No aplica' },
        { id:'p12', source:'Paraclínicos', label:'Hemocultivos x2', value:'Tomados; resultado pendiente', unit:'', ref:'Sin crecimiento' },
        { id:'p13', source:'Paraclínicos', label:'pH arterial', value:'7,46', unit:'', ref:'7,35–7,45' },
        { id:'p14', source:'Paraclínicos', label:'PaO₂', value:'60', unit:'mmHg', ref:'80–100' },
        { id:'p15', source:'Paraclínicos', label:'PaCO₂', value:'32', unit:'mmHg', ref:'35–45' },
        { id:'p16', source:'Paraclínicos', label:'HCO₃⁻', value:'22', unit:'mEq/L', ref:'22–26' }
      ]},
      { title:'Electrocardiograma — informe textual', rows:[
        { id:'p17', source:'Paraclínicos', label:'Ritmo', value:'Taquicardia sinusal', unit:'', ref:'Ritmo sinusal 60–100 lpm' },
        { id:'p18', source:'Paraclínicos', label:'Segmento ST', value:'Sin elevación ni depresión significativa', unit:'', ref:'Sin cambios isquémicos agudos' },
        { id:'p19', source:'Paraclínicos', label:'Eje y conducción', value:'Sin bloqueo de rama; QRS estrecho', unit:'', ref:'QRS <120 ms' }
      ]},
      { title:'Imágenes — informe textual', rows:[
        { id:'p20', source:'Paraclínicos', label:'Radiografía de tórax PA', value:'Opacidad alveolar en lóbulo inferior derecho con broncograma aéreo', unit:'', ref:'Sin infiltrados' },
        { id:'p21', source:'Paraclínicos', label:'Radiografía de tórax lateral', value:'Consolidación posterior basal derecha; sin derrame pleural significativo', unit:'', ref:'Sin consolidación' },
        { id:'p22', source:'Paraclínicos', label:'Ecografía pulmonar focal', value:'Consolidación subpleural basal derecha con broncograma dinámico', unit:'', ref:'Pleura y patrón A conservados' }
      ]}
    ]
  };

window.HCR_CASE_MODULES.RC1.module4Media = [];
