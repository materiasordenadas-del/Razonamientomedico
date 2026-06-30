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
  },
  tabaquismo: {
    titulo: "Tabaquismo",
    aliases: ["tabaco", "tabaquismo", "cigarrillo"],
    definicion: "Exposicion activa o previa al humo de tabaco.",
    relevancia: "Modifica riesgo cardiovascular, respiratorio y vascular.",
    puntosClave: ["Precisar consumo actual, paquetes-ano y abandono.", "Relacionarlo con sintomas respiratorios o cardiovasculares."]
  },
  sedentarismo: {
    titulo: "Sedentarismo",
    definicion: "Bajo nivel habitual de actividad fisica.",
    relevancia: "Aporta contexto de riesgo cardiometabolico y condicion funcional.",
    puntosClave: ["Distinguir habito cronico de limitacion por sintomas.", "Relacionarlo con tolerancia al esfuerzo."]
  },
  dieta_alta_sodio: {
    titulo: "Dieta alta en sodio",
    definicion: "Patron alimentario con consumo elevado de sal o alimentos muy procesados.",
    relevancia: "Puede relacionarse con control de presion arterial, retencion hidrica y riesgo cardiovascular.",
    puntosClave: ["No usarlo como diagnostico.", "Valorar junto con hipertension y contexto social."]
  },
  enfermedad_pulmonar_obstructiva_cronica: {
    titulo: "Enfermedad pulmonar obstructiva cronica",
    aliases: ["epoc", "enfermedad pulmonar obstructiva cronica"],
    definicion: "Enfermedad respiratoria cronica con limitacion persistente del flujo aereo.",
    relevancia: "Cambia la interpretacion de disnea, tos, saturacion y riesgo respiratorio.",
    puntosClave: ["Precisar severidad y exacerbaciones.", "Relacionarla con tabaco, oxigeno y sintomas actuales."]
  },
  alergia_medicamentosa: {
    titulo: "Alergia medicamentosa",
    definicion: "Reaccion adversa inmunologica o sospechada frente a un medicamento.",
    relevancia: "Afecta la seguridad de tratamientos futuros.",
    puntosClave: ["Precisar farmaco, reaccion y gravedad.", "Distinguir alergia verdadera de intolerancia."]
  },
  antiagregantes: {
    titulo: "Antiagregantes",
    definicion: "Medicamentos que reducen la agregacion plaquetaria.",
    relevancia: "Pueden modificar riesgo trombotico y riesgo de sangrado.",
    puntosClave: ["Confirmar uso actual o suspension.", "Relacionar con antecedentes cardiovasculares o sangrado."]
  },
  anticoagulantes: {
    titulo: "Anticoagulantes",
    definicion: "Medicamentos que reducen la coagulacion sanguinea.",
    relevancia: "Cambian riesgo de sangrado, trombosis e interpretacion de pruebas de coagulacion.",
    puntosClave: ["Precisar nombre, dosis y ultima toma.", "Buscar indicacion y eventos de sangrado."]
  },
  betabloqueantes: {
    titulo: "Betabloqueantes",
    definicion: "Medicamentos que bloquean receptores beta adrenergicos.",
    relevancia: "Pueden modificar frecuencia cardiaca, sintomas y respuesta fisiologica al estres.",
    puntosClave: ["Confirmar uso actual.", "Relacionar con pulso, presion arterial y antecedentes cardiacos."]
  },
  metformina: {
    titulo: "Metformina",
    definicion: "Medicamento usado con frecuencia en diabetes mellitus tipo 2.",
    relevancia: "Aporta contexto sobre control metabolico y funcion renal.",
    puntosClave: ["Relacionarla con diabetes.", "Revisar funcion renal cuando sea relevante."]
  },
  estatinas: {
    titulo: "Estatinas",
    definicion: "Medicamentos hipolipemiantes usados para reducir riesgo aterosclerotico.",
    relevancia: "Aportan contexto sobre dislipidemia y prevencion cardiovascular.",
    puntosClave: ["Confirmar adherencia.", "Relacionar con perfil lipidico y riesgo vascular."]
  },
  aine: {
    titulo: "AINE",
    aliases: ["aine", "antiinflamatorios no esteroideos"],
    definicion: "Antiinflamatorios no esteroideos usados para dolor o inflamacion.",
    relevancia: "Pueden modificar riesgo gastrointestinal, renal y cardiovascular segun contexto.",
    puntosClave: ["Preguntar por uso reciente.", "Relacionar con dolor, sangrado o funcion renal."]
  },
  tos: {
    titulo: "Tos",
    definicion: "Reflejo respiratorio para expulsar secreciones o irritantes.",
    relevancia: "Ayuda a orientar origen respiratorio, infeccioso, irritativo o cardiaco segun el contexto.",
    puntosClave: ["Describir duracion y caracter.", "Relacionarla con fiebre, disnea, esputo o hemoptisis."]
  },
  esputo: {
    titulo: "Esputo",
    definicion: "Secrecion expulsada desde vias respiratorias inferiores.",
    relevancia: "Su presencia y aspecto pueden apoyar inflamacion o infeccion respiratoria.",
    puntosClave: ["Describir color, cantidad y sangre.", "No usar color aislado como diagnostico definitivo."]
  },
  dolor_pleuritico: {
    titulo: "Dolor pleuritico",
    definicion: "Dolor toracico que empeora con respiracion profunda, tos o movimientos respiratorios.",
    relevancia: "Puede orientar compromiso pleural, pulmonar o musculo-esqueletico segun contexto.",
    puntosClave: ["Precisar localizacion.", "Relacionarlo con disnea, tos, fiebre o trauma."]
  },
  hemoptisis: {
    titulo: "Hemoptisis",
    definicion: "Expulsion de sangre proveniente de vias respiratorias.",
    relevancia: "Es un dato de alarma respiratorio o vascular segun cantidad y contexto.",
    puntosClave: ["Distinguir de sangrado oral o digestivo.", "Cuantificar y buscar inestabilidad."]
  },
  dolor_toracico: {
    titulo: "Dolor toracico",
    definicion: "Dolor o molestia localizada en el torax.",
    relevancia: "Puede originarse en causas cardiovasculares, respiratorias, digestivas, musculoesqueleticas o psicogenas.",
    puntosClave: ["Caracterizar inicio, irradiacion, duracion y desencadenantes.", "Buscar datos de alarma y sintomas asociados."]
  },
  ortopnea: {
    titulo: "Ortopnea",
    definicion: "Disnea que aparece o empeora al estar acostado y mejora al incorporarse.",
    relevancia: "Puede apoyar congestion o insuficiencia cardiaca segun contexto.",
    puntosClave: ["Preguntar numero de almohadas.", "Relacionarla con edema y disnea paroxistica nocturna."]
  },
  disnea_paroxistica_nocturna: {
    titulo: "Disnea paroxistica nocturna",
    definicion: "Episodios de falta de aire que despiertan al paciente durante la noche.",
    relevancia: "Puede sugerir congestion cardiopulmonar en el contexto adecuado.",
    puntosClave: ["Distinguir de ansiedad o tos nocturna.", "Relacionarla con ortopnea y edema."]
  },
  edema_periferico: {
    titulo: "Edema periferico",
    definicion: "Acumulacion de liquido en tejidos perifericos, usualmente extremidades.",
    relevancia: "Puede reflejar enfermedad venosa, cardiaca, renal, hepatica o medicamentos.",
    puntosClave: ["Valorar simetria y godet.", "Relacionar con disnea, peso y funcion renal."]
  },
  palpitaciones: {
    titulo: "Palpitaciones",
    definicion: "Percepcion incomoda o evidente de los latidos cardiacos.",
    relevancia: "Puede relacionarse con fiebre, ansiedad, anemia, arritmias o estimulantes.",
    puntosClave: ["Precisar inicio, duracion y regularidad.", "Buscar sincope, dolor toracico o disnea."]
  },
  diaforesis: {
    titulo: "Diaforesis",
    definicion: "Sudoracion marcada o desproporcionada al contexto.",
    relevancia: "Puede acompan ar dolor, fiebre, hipoglucemia, ansiedad o respuesta adrenergica.",
    puntosClave: ["Relacionarla con dolor, fiebre y signos vitales.", "Distinguir sudoracion cronica de episodio agudo."]
  },
  nausea: {
    titulo: "Nausea",
    definicion: "Sensacion desagradable de necesidad de vomitar.",
    relevancia: "Puede acompanar trastornos digestivos, metabolicos, neurologicos o cardiovasculares.",
    puntosClave: ["Relacionarla con dolor, vomitos y tiempo de evolucion.", "No interpretarla de forma aislada."]
  },
  vomito: {
    titulo: "Vomito",
    definicion: "Expulsion forzada del contenido gastrico.",
    relevancia: "Puede causar deshidratacion, alteraciones metabolicas o indicar enfermedad sistemica.",
    puntosClave: ["Cuantificar frecuencia.", "Buscar sangre, dolor abdominal o signos de deshidratacion."]
  },
  dolor_epigastrico: {
    titulo: "Dolor epigastrico",
    definicion: "Dolor localizado en la region superior central del abdomen.",
    relevancia: "Puede tener origen digestivo, pancreatico, biliar o cardiovascular segun contexto.",
    puntosClave: ["Caracterizar relacion con alimentos y esfuerzo.", "Buscar irradiacion o sintomas asociados."]
  },
  disuria: {
    titulo: "Disuria",
    definicion: "Dolor o ardor al orinar.",
    relevancia: "Puede orientar infeccion urinaria o irritacion del tracto urinario.",
    puntosClave: ["Buscar fiebre, polaquiuria y dolor lumbar.", "Relacionar con sedimento urinario si existe."]
  },
  hematuria: {
    titulo: "Hematuria",
    definicion: "Presencia de sangre en la orina, visible o microscopica.",
    relevancia: "Puede indicar enfermedad urinaria, renal, litiasis, trauma o alteraciones de coagulacion.",
    puntosClave: ["Distinguir visible de microscopica.", "Relacionarla con dolor, infeccion o anticoagulacion."]
  },
  deficit_neurologico_focal: {
    titulo: "Deficit neurologico focal",
    definicion: "Alteracion neurologica localizada, como debilidad, perdida sensitiva, asimetria facial o trastorno del lenguaje.",
    relevancia: "Es un dato de alarma para enfermedad neurologica aguda.",
    puntosClave: ["Precisar inicio y lateralidad.", "Buscar lenguaje, fuerza, sensibilidad y conciencia."]
  },
  convulsiones: {
    titulo: "Convulsiones",
    definicion: "Episodios de actividad motora, sensitiva o conductual por descarga neuronal anormal.",
    relevancia: "Pueden indicar compromiso neurologico o metabolico agudo.",
    puntosClave: ["Describir episodio y recuperacion.", "Buscar fiebre, trauma, hipoglucemia o deficit focal."]
  },
  ansiedad: {
    titulo: "Ansiedad",
    definicion: "Estado de preocupacion, tension o activacion emocional.",
    relevancia: "Puede coexistir con enfermedad organica y modificar la expresion de sintomas.",
    puntosClave: ["No usarla para descartar enfermedad grave.", "Relacionarla con signos vitales y contexto."]
  },
  cianosis: {
    titulo: "Cianosis",
    definicion: "Coloracion azulada de piel o mucosas por aumento de hemoglobina desoxigenada.",
    relevancia: "Puede indicar hipoxemia o alteraciones circulatorias.",
    puntosClave: ["Diferenciar central de periferica.", "Relacionarla con saturacion y perfusion."]
  },
  petequias: {
    titulo: "Petequias",
    definicion: "Lesiones puntiformes no blanqueables por sangrado capilar.",
    relevancia: "Pueden orientar trombocitopenia, infeccion grave, vasculitis u otros trastornos.",
    puntosClave: ["Verificar si blanquean.", "Relacionarlas con fiebre, plaquetas y sangrado."]
  },
  ingurgitacion_yugular: {
    titulo: "Ingurgitacion yugular",
    definicion: "Distension visible de venas yugulares por aumento de presion venosa.",
    relevancia: "Puede apoyar congestion cardiaca, taponamiento u otras condiciones hemodinamicas.",
    puntosClave: ["Evaluarla con posicion adecuada.", "Relacionarla con edema, disnea y presion arterial."]
  },
  soplo_cardiaco: {
    titulo: "Soplo cardiaco",
    definicion: "Sonido adicional por flujo turbulento a traves del corazon o grandes vasos.",
    relevancia: "Puede ser funcional o indicar valvulopatia u otra alteracion estructural.",
    puntosClave: ["Describir foco, intensidad y cambios.", "Relacionarlo con sintomas y ecocardiograma."]
  },
  roce_pericardico: {
    titulo: "Roce pericardico",
    definicion: "Ruido auscultatorio por friccion de capas pericardicas inflamadas.",
    relevancia: "Puede apoyar pericarditis en el contexto adecuado.",
    puntosClave: ["Distinguirlo de soplo.", "Relacionarlo con dolor toracico y ECG."]
  },
  pulsos_perifericos: {
    titulo: "Pulsos perifericos",
    definicion: "Palpacion de ondas de pulso en arterias perifericas.",
    relevancia: "Aporta informacion sobre perfusion, simetria y enfermedad vascular.",
    puntosClave: ["Comparar ambos lados.", "Relacionarlos con temperatura, dolor y llenado capilar."]
  },
  llenado_capilar: {
    titulo: "Llenado capilar",
    definicion: "Tiempo que tarda en retornar el color tras comprimir un lecho capilar.",
    relevancia: "Aporta estimacion rapida de perfusion periferica.",
    puntosClave: ["Interpretarlo con temperatura y presion arterial.", "Considerar frio ambiental o mala tecnica."]
  },
  estertores: {
    titulo: "Estertores",
    definicion: "Ruidos respiratorios discontinuos escuchados en la auscultacion.",
    relevancia: "Pueden relacionarse con secreciones, edema, fibrosis o consolidacion segun contexto.",
    puntosClave: ["Localizar el area.", "Relacionarlos con tos, disnea y radiografia."]
  },
  sibilancias: {
    titulo: "Sibilancias",
    definicion: "Ruidos respiratorios musicales por estrechamiento de vias aereas.",
    relevancia: "Pueden apoyar broncoespasmo u obstruccion de vias aereas.",
    puntosClave: ["Distinguir difusas de focales.", "Relacionarlas con disnea y antecedentes respiratorios."]
  },
  matidez_percusion: {
    titulo: "Matidez a la percusion",
    definicion: "Sonido apagado al percutir una zona, comparado con la resonancia esperada.",
    relevancia: "Puede sugerir liquido, consolidacion o masa segun localizacion.",
    puntosClave: ["Comparar ambos lados.", "Relacionarla con auscultacion e imagen."]
  },
  egofonia: {
    titulo: "Egofonia",
    definicion: "Cambio de la transmision de la voz auscultada sobre el torax.",
    relevancia: "Puede apoyar consolidacion o derrame segun contexto.",
    puntosClave: ["Localizarla.", "Relacionarla con matidez y estertores."]
  },
  murmullo_vesicular: {
    titulo: "Murmullo vesicular",
    definicion: "Ruido respiratorio normal producido por el flujo de aire en vias respiratorias.",
    relevancia: "Su disminucion o asimetria puede orientar compromiso respiratorio.",
    puntosClave: ["Comparar lados.", "Relacionarlo con esfuerzo respiratorio y percusion."]
  },
  hemoglobina: {
    titulo: "Hemoglobina",
    definicion: "Proteina de los eritrocitos que transporta oxigeno.",
    relevancia: "Ayuda a detectar anemia o hemoconcentracion y a interpretar disnea o fatiga.",
    puntosClave: ["Relacionarla con sangrado y sintomas.", "Comparar con valores previos si existen."]
  },
  leucocitos: {
    titulo: "Leucocitos",
    definicion: "Celulas sanguineas vinculadas con defensa inmunitaria e inflamacion.",
    relevancia: "Pueden aumentar o disminuir por infeccion, inflamacion, estres, medicamentos u otras causas.",
    puntosClave: ["Interpretar con diferencial.", "No asumir infeccion solo por elevacion."]
  },
  neutrofilos: {
    titulo: "Neutrofilos",
    definicion: "Tipo de leucocito importante en respuesta a infecciones bacterianas e inflamacion aguda.",
    relevancia: "Ayudan a interpretar leucocitosis o neutropenia en contexto.",
    puntosClave: ["Revisar porcentaje y recuento absoluto.", "Relacionar con fiebre y foco probable."]
  },
  plaquetas: {
    titulo: "Plaquetas",
    definicion: "Fragmentos celulares que participan en hemostasia primaria.",
    relevancia: "Afectan riesgo de sangrado o trombosis y pueden cambiar decisiones futuras.",
    puntosClave: ["Interpretar valores bajos o altos en contexto.", "Relacionar con petequias o sangrado."]
  },
  creatinina: {
    titulo: "Creatinina",
    definicion: "Marcador sanguineo usado para estimar funcion renal.",
    relevancia: "Modifica interpretacion de enfermedad renal y seguridad de medicamentos o contraste.",
    puntosClave: ["Relacionarla con TFGe.", "Comparar con valor basal si existe."]
  },
  tfge: {
    titulo: "TFGe",
    definicion: "Tasa de filtracion glomerular estimada a partir de variables clinicas y creatinina.",
    relevancia: "Resume funcion renal para estratificar riesgo y decisiones de seguridad.",
    puntosClave: ["Interpretar con edad y creatinina.", "No confundir estimacion con medicion directa."]
  },
  sodio: {
    titulo: "Sodio",
    definicion: "Electrolito principal del espacio extracelular.",
    relevancia: "Alteraciones pueden explicar sintomas neurologicos, volumen o enfermedad sistemica.",
    puntosClave: ["Valorar magnitud y velocidad.", "Relacionar con hidratacion y medicamentos."]
  },
  potasio: {
    titulo: "Potasio",
    definicion: "Electrolito clave para funcion neuromuscular y electrica cardiaca.",
    relevancia: "Alteraciones pueden predisponer a arritmias o debilidad.",
    puntosClave: ["Relacionarlo con ECG y funcion renal.", "Verificar hemolisis si el valor no encaja."]
  },
  magnesio: {
    titulo: "Magnesio",
    definicion: "Electrolito que participa en funcion neuromuscular y estabilidad electrica cardiaca.",
    relevancia: "Alteraciones pueden relacionarse con arritmias o sintomas neuromusculares.",
    puntosClave: ["Interpretarlo con potasio y calcio.", "Relacionarlo con riesgo electrico cardiaco."]
  },
  glucosa: {
    titulo: "Glucosa",
    definicion: "Principal carbohidrato circulante usado como fuente energetica.",
    relevancia: "Hiperglucemia o hipoglucemia modifican gravedad, sintomas y riesgo metabolico.",
    puntosClave: ["Relacionarla con diabetes y estado clinico.", "Distinguir ayuno, azar o contexto agudo."]
  },
  lactato: {
    titulo: "Lactato",
    definicion: "Producto metabolico que puede aumentar por hipoperfusion, hipoxia o estres metabolico.",
    relevancia: "Ayuda a estimar gravedad en algunos cuadros agudos.",
    puntosClave: ["Interpretar con perfusion y tendencia.", "No usarlo aislado como diagnostico."]
  },
  proteina_c_reactiva: {
    titulo: "Proteina C reactiva",
    definicion: "Reactante de fase aguda producido ante inflamacion.",
    relevancia: "Puede apoyar inflamacion o infeccion, pero es inespecifica.",
    puntosClave: ["Valorar magnitud y tendencia.", "No identificar etiologia por si sola."]
  },
  procalcitonina: {
    titulo: "Procalcitonina",
    definicion: "Biomarcador que puede elevarse en infeccion bacteriana sistemica.",
    relevancia: "Puede apoyar decisiones diagnosticas en contexto, con limitaciones.",
    puntosClave: ["Interpretar con clinica.", "No sustituye examen ni cultivos."]
  },
  gram_esputo: {
    titulo: "Gram de esputo",
    definicion: "Tincion microscopica de muestra respiratoria para observar celulas y microorganismos.",
    relevancia: "Puede orientar calidad de muestra y posible etiologia respiratoria.",
    puntosClave: ["Revisar calidad de muestra.", "Interpretar con cultivo y clinica."]
  },
  hemocultivos: {
    titulo: "Hemocultivos",
    definicion: "Cultivos de sangre para detectar microorganismos circulantes.",
    relevancia: "Ayudan a identificar bacteriemia o fungemia en contexto apropiado.",
    puntosClave: ["Registrar si estan pendientes.", "Interpretar contaminacion vs patogeno real."]
  },
  gasometria_arterial: {
    titulo: "Gasometria arterial",
    definicion: "Prueba que mide pH, gases sanguineos y bicarbonato.",
    relevancia: "Evalua oxigenacion, ventilacion y equilibrio acido-base.",
    puntosClave: ["Integrar pH, PaO2, PaCO2 y HCO3.", "Interpretar segun oxigeno administrado."]
  },
  ph_arterial: {
    titulo: "pH arterial",
    definicion: "Medida de acidez o alcalinidad de la sangre arterial.",
    relevancia: "Identifica acidemia o alcalemia y orienta trastornos metabolicos o respiratorios.",
    puntosClave: ["Interpretarlo con PaCO2 y bicarbonato.", "Relacionarlo con estado clinico."]
  },
  pao2: {
    titulo: "PaO2",
    definicion: "Presion parcial de oxigeno en sangre arterial.",
    relevancia: "Ayuda a estimar oxigenacion real.",
    puntosClave: ["Interpretarla con FiO2 o aire ambiente.", "Relacionarla con saturacion y trabajo respiratorio."]
  },
  paco2: {
    titulo: "PaCO2",
    definicion: "Presion parcial de dioxido de carbono en sangre arterial.",
    relevancia: "Refleja ventilacion alveolar y componente respiratorio del equilibrio acido-base.",
    puntosClave: ["Relacionarla con pH.", "Valorar hipoventilacion o hiperventilacion."]
  },
  bicarbonato: {
    titulo: "Bicarbonato",
    definicion: "Principal base del sistema buffer sanguineo.",
    relevancia: "Ayuda a interpretar componente metabolico en trastornos acido-base.",
    puntosClave: ["Interpretarlo con pH y PaCO2.", "Relacionarlo con contexto renal o metabolico."]
  },
  troponina: {
    titulo: "Troponina",
    definicion: "Biomarcador de lesion miocardica.",
    relevancia: "Ayuda a evaluar dano cardiaco cuando se interpreta con sintomas, ECG y cambios seriados.",
    puntosClave: ["Valorar tendencia.", "No equivale siempre a infarto por si sola."]
  },
  bnp: {
    titulo: "BNP",
    definicion: "Peptido liberado por estiramiento miocardico.",
    relevancia: "Puede apoyar o reducir sospecha de congestion o insuficiencia cardiaca en contexto.",
    puntosClave: ["Interpretarlo con edad, funcion renal y sintomas.", "No usarlo aislado."]
  },
  inr: {
    titulo: "INR",
    definicion: "Estandarizacion del tiempo de protrombina.",
    relevancia: "Evalua via extrinseca de coagulacion y efecto de algunos anticoagulantes.",
    puntosClave: ["Relacionarlo con sangrado y medicamentos.", "Interpretarlo con TP y contexto."]
  },
  ttpa: {
    titulo: "TTPa",
    definicion: "Tiempo de tromboplastina parcial activado.",
    relevancia: "Evalua vias de coagulacion y puede modificarse por heparina u otros trastornos.",
    puntosClave: ["Relacionarlo con anticoagulantes.", "Interpretarlo junto con TP/INR."]
  },
  ldl_colesterol: {
    titulo: "LDL-C",
    definicion: "Fraccion de colesterol asociada a riesgo aterosclerotico.",
    relevancia: "Aporta estimacion de riesgo vascular y control lipidico.",
    puntosClave: ["Interpretarlo segun riesgo global.", "Relacionarlo con dislipidemia y antecedentes vasculares."]
  },
  electrocardiograma: {
    titulo: "Electrocardiograma",
    aliases: ["ecg", "electrocardiograma"],
    definicion: "Registro de la actividad electrica cardiaca mediante derivaciones.",
    relevancia: "Permite evaluar ritmo, conduccion, intervalos y cambios ST-T.",
    puntosClave: ["Comparar con sintomas y biomarcadores.", "Valorar cambios seriados."]
  },
  segmento_st: {
    titulo: "Segmento ST",
    definicion: "Porcion del ECG entre el complejo QRS y la onda T.",
    relevancia: "Cambios del ST pueden orientar isquemia, lesion u otras alteraciones segun contexto.",
    puntosClave: ["Evaluar derivaciones contiguas.", "Comparar con ECG previo o seriado."]
  },
  qrs: {
    titulo: "QRS",
    definicion: "Complejo electrocardiografico que representa despolarizacion ventricular.",
    relevancia: "Su duracion y morfologia aportan datos de conduccion ventricular.",
    puntosClave: ["Medir anchura.", "Relacionar con bloqueos y ritmo."]
  },
  ritmo_sinusal: {
    titulo: "Ritmo sinusal",
    definicion: "Ritmo cardiaco originado en el nodo sinusal.",
    relevancia: "Ayuda a distinguir ritmo basal de arritmias.",
    puntosClave: ["Valorar frecuencia.", "No descarta enfermedad cardiaca por si solo."]
  },
  radiografia_torax: {
    titulo: "Radiografia de torax",
    definicion: "Imagen radiografica del torax para evaluar pulmones, pleura, mediastino y silueta cardiaca.",
    relevancia: "Puede mostrar consolidacion, edema, derrame, hiperinsuflacion u otros hallazgos.",
    puntosClave: ["Revisar proyeccion y calidad.", "Localizar hallazgos antes de interpretarlos."]
  },
  consolidacion_pulmonar: {
    titulo: "Consolidacion pulmonar",
    definicion: "Ocupacion de espacios alveolares por material que aumenta la densidad pulmonar.",
    relevancia: "Puede observarse en neumonia, edema, hemorragia u otros procesos.",
    puntosClave: ["Localizar lobulo o segmento.", "Relacionarla con fiebre, auscultacion y laboratorio."]
  },
  broncograma_aereo: {
    titulo: "Broncograma aereo",
    definicion: "Visualizacion de bronquios aireados dentro de una opacidad alveolar.",
    relevancia: "Ayuda a reconocer patron alveolar en imagen toracica.",
    puntosClave: ["Describirlo como hallazgo, no como diagnostico final.", "Relacionarlo con consolidacion."]
  },
  derrame_pleural: {
    titulo: "Derrame pleural",
    definicion: "Acumulacion de liquido en el espacio pleural.",
    relevancia: "Puede modificar sintomas respiratorios e interpretacion de imagen.",
    puntosClave: ["Valorar tamano y lateralidad.", "Relacionarlo con dolor, disnea o fiebre."]
  },
  ecocardiograma: {
    titulo: "Ecocardiograma",
    definicion: "Ultrasonido cardiaco para evaluar estructura y funcion del corazon.",
    relevancia: "Aporta datos de funcion ventricular, valvulas, derrame y movimiento segmentario.",
    puntosClave: ["Distinguir estudio focal de completo.", "Interpretarlo con sintomas y ECG."]
  },
  ecografia_pulmonar: {
    titulo: "Ecografia pulmonar",
    definicion: "Ultrasonido aplicado al torax para evaluar pleura, artefactos pulmonares, liquido o consolidaciones superficiales.",
    relevancia: "Puede complementar examen fisico e imagenes en cuadros respiratorios.",
    puntosClave: ["Interpretarla segun ventana y operador.", "Relacionarla con auscultacion, sintomas e imagenes disponibles."]
  }
};
