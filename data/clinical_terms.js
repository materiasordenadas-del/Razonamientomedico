window.HCR_CLINICAL_TERMS = {
  fiebre: {
    title: "Fiebre",
    aliases: ["fiebre", "febril", "picos febriles"],
    definition: "Elevacion regulada de la temperatura corporal por cambio del punto de ajuste termico.",
    relevance: "Orienta hacia procesos infecciosos, inflamatorios, neoplasicos o farmacologicos, segun el contexto.",
    keyPoints: [
      "Diferenciar fiebre de hipertermia.",
      "Valorar duracion, patron y sintomas asociados.",
      "Buscar signos de gravedad o foco probable."
    ]
  },
  cefalea: {
    title: "Cefalea",
    aliases: ["cefalea", "dolor de cabeza"],
    definition: "Dolor localizado en la cabeza o region craneofacial.",
    relevance: "Puede ser primaria o expresar una enfermedad secundaria que requiera evaluacion urgente.",
    keyPoints: [
      "Identificar inicio subito, intensidad maxima y sintomas neurologicos.",
      "Preguntar por fiebre, rigidez de nuca, trauma o inmunosupresion.",
      "Comparar con episodios previos."
    ]
  },
  disnea: {
    title: "Disnea",
    aliases: ["disnea", "falta de aire", "me falta el aire", "dificultad para respirar"],
    definition: "Sensacion subjetiva de dificultad o esfuerzo para respirar.",
    relevance: "Puede originarse en problemas respiratorios, cardiovasculares, metabolicos, hematologicos o funcionales.",
    keyPoints: [
      "Valorar inicio, progresion y relacion con esfuerzo o reposo.",
      "Relacionarla con signos vitales y saturacion de oxigeno.",
      "Buscar dolor toracico, tos, sibilancias, edema o fiebre."
    ]
  },
  presion_arterial: {
    title: "Presion arterial",
    aliases: ["presion arterial", "tension arterial", "pa"],
    definition: "Presion que ejerce la sangre sobre las arterias, expresada como sistolica y diastolica.",
    relevance: "Ayuda a estimar estabilidad hemodinamica, riesgo cardiovascular y seguridad de algunas intervenciones.",
    keyPoints: [
      "Interpretar el valor junto con sintomas y perfusion.",
      "Comparar con valores previos si estan disponibles.",
      "Confirmar mediciones extremas o discordantes."
    ]
  },
  frecuencia_cardiaca: {
    title: "Frecuencia cardiaca",
    aliases: ["frecuencia cardiaca", "fc", "pulso"],
    definition: "Numero de latidos cardiacos por minuto.",
    relevance: "Puede reflejar dolor, fiebre, hipoxemia, hipovolemia, arritmia, ansiedad u otras respuestas fisiologicas.",
    keyPoints: [
      "Interpretarla con ritmo, presion arterial y estado general.",
      "Buscar causas reversibles de taquicardia o bradicardia.",
      "Relacionarla con fiebre, dolor, hipoxemia o medicamentos."
    ]
  },
  frecuencia_respiratoria: {
    title: "Frecuencia respiratoria",
    aliases: ["frecuencia respiratoria", "fr"],
    definition: "Numero de respiraciones por minuto.",
    relevance: "Es un marcador sensible de dificultad respiratoria, acidosis, dolor, ansiedad o deterioro sistemico.",
    keyPoints: [
      "No interpretarla aislada de saturacion y trabajo respiratorio.",
      "Una frecuencia elevada puede preceder deterioro evidente.",
      "Revisar si hay uso de musculos accesorios o fatiga."
    ]
  },
  saturacion_oxigeno: {
    title: "Saturacion de oxigeno",
    aliases: ["saturacion de oxigeno", "saturacion", "sato2", "sato₂", "spo2", "spo₂"],
    definition: "Estimacion no invasiva del porcentaje de hemoglobina unida a oxigeno.",
    relevance: "Ayuda a detectar hipoxemia y a decidir si se requiere soporte de oxigeno o vigilancia estrecha.",
    keyPoints: [
      "Relacionarla con aire ambiente o dispositivo de oxigeno.",
      "Confirmar lecturas dudosas por mala perfusion o artefacto.",
      "Interpretarla junto con trabajo respiratorio y estado mental."
    ]
  },
  taquicardia: {
    title: "Taquicardia",
    aliases: ["taquicardia", "fc elevada", "pulso rapido"],
    definition: "Frecuencia cardiaca por encima del rango esperado para el contexto clinico.",
    relevance: "Puede ser respuesta a fiebre, dolor, hipoxemia, hipovolemia, sepsis, arritmia u otras causas.",
    keyPoints: [
      "Determinar si el ritmo es regular o irregular.",
      "Buscar causas fisiologicas antes de asumir arritmia primaria.",
      "Valorar estabilidad hemodinamica."
    ]
  },
  hipoxemia: {
    title: "Hipoxemia",
    aliases: ["hipoxemia", "desaturacion", "saturacion baja", "sat baja"],
    definition: "Disminucion del oxigeno en sangre arterial o estimada por saturacion baja.",
    relevance: "Indica posible compromiso respiratorio o de intercambio gaseoso y puede requerir intervencion inmediata.",
    keyPoints: [
      "Confirmar si ocurre al aire ambiente o con oxigeno suplementario.",
      "Buscar signos de trabajo respiratorio o deterioro mental.",
      "Relacionarla con gasometria, imagenes y contexto clinico cuando existan."
    ]
  },
  hipertension_arterial: {
    titulo: "Hipertension arterial",
    definicion: "Elevacion sostenida de la presion arterial por encima del rango esperado.",
    relevancia: "Es un factor de riesgo cardiovascular y puede modificar la probabilidad de varias hipotesis clinicas.",
    puntosClave: [
      "Considerar duracion, control y tratamiento habitual.",
      "Relacionarla con dano de organo blanco cuando existan datos."
    ]
  },
  diabetes_mellitus_tipo_2: {
    titulo: "Diabetes mellitus tipo 2",
    definicion: "Trastorno metabolico caracterizado por hiperglucemia cronica asociada a resistencia a la insulina y deficit relativo de secrecion.",
    relevancia: "Aumenta riesgo cardiovascular, renal, neurologico e infeccioso, segun el contexto.",
    puntosClave: [
      "Valorar anos de evolucion y control metabolico.",
      "Buscar complicaciones cronicas y medicamentos actuales."
    ]
  },
  dislipidemia: {
    titulo: "Dislipidemia",
    definicion: "Alteracion de las concentraciones de lipidos en sangre, como colesterol o trigliceridos.",
    relevancia: "Se asocia a riesgo aterosclerotico y ayuda a interpretar antecedentes cardiovasculares.",
    puntosClave: [
      "Distinguir antecedente conocido de control actual.",
      "Relacionarla con otros factores de riesgo."
    ]
  },
  infarto_miocardio: {
    titulo: "Infarto de miocardio",
    definicion: "Lesion del musculo cardiaco por isquemia, generalmente relacionada con enfermedad coronaria.",
    relevancia: "Un antecedente previo cambia el riesgo basal y la interpretacion de sintomas cardiovasculares.",
    puntosClave: [
      "Precisar fecha, tratamiento recibido y secuelas.",
      "No asumir infarto actual solo por el antecedente."
    ]
  },
  angina: {
    titulo: "Angina",
    definicion: "Dolor o molestia toracica por isquemia miocardica transitoria.",
    relevancia: "Ayuda a reconocer patrones compatibles con enfermedad coronaria estable o inestable.",
    puntosClave: [
      "Describir relacion con esfuerzo, reposo y duracion.",
      "Comparar el episodio actual con episodios previos."
    ]
  },
  revascularizacion_coronaria: {
    titulo: "Revascularizacion coronaria",
    definicion: "Procedimiento para restaurar flujo en arterias coronarias, como angioplastia o cirugia de bypass.",
    relevancia: "Indica enfermedad coronaria previa y puede cambiar el riesgo y la interpretacion del cuadro.",
    puntosClave: [
      "Precisar tipo de procedimiento y fecha.",
      "Preguntar por sintomas posteriores y medicacion asociada."
    ]
  },
  insuficiencia_cardiaca: {
    titulo: "Insuficiencia cardiaca",
    definicion: "Sindrome en el que el corazon no cubre adecuadamente las demandas del organismo o lo hace con presiones elevadas.",
    relevancia: "Puede explicar disnea, edema, fatiga y riesgo de descompensacion.",
    puntosClave: [
      "Buscar ortopnea, edema y tolerancia al esfuerzo.",
      "Distinguir antecedente cronico de descompensacion aguda."
    ]
  },
  fibrilacion_auricular: {
    titulo: "Fibrilacion auricular",
    definicion: "Arritmia supraventricular con activacion auricular desorganizada y ritmo ventricular irregular.",
    relevancia: "Aumenta riesgo embolico y puede causar palpitaciones, disnea o inestabilidad.",
    puntosClave: [
      "Valorar anticoagulacion y control de frecuencia o ritmo.",
      "Relacionarla con sintomas y pulso irregular."
    ]
  },
  valvulopatia: {
    titulo: "Valvulopatia",
    definicion: "Alteracion estructural o funcional de una valvula cardiaca.",
    relevancia: "Puede contribuir a soplos, disnea, sincope, dolor toracico o insuficiencia cardiaca.",
    puntosClave: [
      "Precisar valvula afectada y severidad si se conoce.",
      "Relacionarla con hallazgos de auscultacion y ecocardiograma."
    ]
  },
  enfermedad_renal_cronica: {
    titulo: "Enfermedad renal cronica",
    definicion: "Disminucion persistente de la funcion renal o dano renal mantenido en el tiempo.",
    relevancia: "Modifica riesgo cardiovascular, interpretacion de laboratorios y seguridad de medicamentos.",
    puntosClave: [
      "Revisar creatinina, filtrado estimado y albuminuria si existen.",
      "Considerar ajuste de dosis en fases posteriores del manejo."
    ]
  },
  accidente_cerebrovascular: {
    titulo: "Accidente cerebrovascular",
    definicion: "Deficit neurologico por interrupcion del flujo sanguineo cerebral o por hemorragia intracraneal.",
    relevancia: "Aporta informacion sobre riesgo vascular y antecedentes neurologicos importantes.",
    puntosClave: [
      "Precisar tipo, fecha y secuelas.",
      "Buscar deficit neurologico actual si el contexto lo sugiere."
    ]
  },
  enfermedad_arterial_periferica: {
    titulo: "Enfermedad arterial periferica",
    definicion: "Aterosclerosis u obstruccion significativa de arterias fuera del corazon y cerebro, con frecuencia en extremidades.",
    relevancia: "Es marcador de enfermedad vascular sistemica y riesgo cardiovascular elevado.",
    puntosClave: [
      "Preguntar por claudicacion, dolor en reposo o ulceras.",
      "Explorar pulsos y perfusion periférica cuando corresponda."
    ]
  },
  ulcera_peptica: {
    titulo: "Ulcera peptica",
    definicion: "Lesion de la mucosa gastrica o duodenal expuesta a acido y pepsina.",
    relevancia: "Puede aumentar riesgo de sangrado digestivo y modificar seguridad de algunos tratamientos.",
    puntosClave: [
      "Distinguir antecedente remoto de ulcera activa.",
      "Preguntar por sangrado previo, dolor epigastrico o uso de AINE."
    ]
  },
  hemorragia_digestiva: {
    titulo: "Hemorragia digestiva",
    definicion: "Sangrado originado en el tubo digestivo, visible o no visible clinicamente.",
    relevancia: "Es un antecedente importante al estimar riesgo hemorragico.",
    puntosClave: [
      "Precisar sitio, gravedad y recurrencia.",
      "Relacionarla con anemia, melena, hematemesis o rectorragia."
    ]
  },
  sangrado_mayor: {
    titulo: "Sangrado mayor",
    definicion: "Hemorragia con impacto clinico relevante, como inestabilidad, transfusion, hospitalizacion o compromiso de organos criticos.",
    relevancia: "Ayuda a estimar riesgo de complicaciones al decidir estudios o manejo posterior.",
    puntosClave: [
      "Precisar causa, fecha y tratamiento recibido.",
      "Distinguir sangrado menor de eventos con repercusion clinica."
    ]
  }
};
