window.HCR_CASE_MODULES = window.HCR_CASE_MODULES || {};
window.HCR_CASE_MODULES.RC1 = window.HCR_CASE_MODULES.RC1 || {};

window.HCR_CASE_MODULES.RC1.module6 = {
    fields: [
      { key:'managementLeader', title:'Diagnóstico principal actual', placeholder:'Escribe el diagnóstico que lidera tu manejo…', hint:'Justifica en una frase por qué es el más probable ahora.' },
      { key:'managementFatal', title:'Diagnóstico grave que aún no puedes descartar', placeholder:'Diagnóstico peligroso aún abierto…', hint:'' },
      { key:'initialActions', title:'Intervención inicial', placeholder:'Primeras acciones para estabilizar al paciente…', hint:'Prioriza ABC, oxigenación, gravedad y medidas inmediatas.' },
      { key:'stabilization', title:'Estabilización', placeholder:'Soporte respiratorio, fluidos si aplica, control de fiebre/dolor…', hint:'' },
      { key:'etiologicTreatment', title:'Tratamiento etiológico', placeholder:'Antibiótico(s), vía, dosis, frecuencia, secuencia…', hint:'Incluye cobertura empírica razonada y ajustes posteriores.' },
      { key:'activeProblems', title:'Tratamiento de problemas activos adicionales', placeholder:'Hipoxemia, fiebre, dolor pleurítico, hiperglucemia…', hint:'' },
      { key:'additionalTests', title:'Pruebas que aún cambian conducta', placeholder:'Cultivos, antígenos, control radiológico, gases, etc.…', hint:'' },
      { key:'monitoring', title:'Monitorización', placeholder:'SatO₂, FR, PA, diuresis, estado mental, respuesta clínica…', hint:'' },
      { key:'consults', title:'Interconsultas', placeholder:'Servicio — motivo — prioridad…', hint:'' },
      { key:'avoid', title:'Precauciones y conductas a evitar', placeholder:'Evitar retrasar antibióticos, exceso de fluidos, alta insegura…', hint:'' },
      { key:'destination', title:'Tiempo y destino', placeholder:'Observación, sala, UCI, criterios de ingreso/alta…', hint:'' }
    ]
  };
