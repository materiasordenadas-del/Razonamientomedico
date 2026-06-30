function hcrHelpEntry(title, what, why, approach, errors) {
  return {
    title,
    sections: [
      { heading: "Que es", body: what },
      { heading: "Por que importa", body: why },
      { heading: "Como debe abordarlo el estudiante", body: approach },
      { heading: "Errores frecuentes", bullets: errors || [] }
    ]
  };
}

window.HCR_MODULE_HELP = {
  enfermedad_actual: hcrHelpEntry(
    "Enfermedad actual",
    "Organiza el problema clinico en una secuencia clara: inicio, evolucion, sintomas principales, sintomas asociados y datos negativos importantes.",
    "Convierte datos sueltos en una representacion clinica coherente antes de elegir diagnosticos.",
    "Ordena los sintomas en el tiempo, separa datos positivos y negativos, y escribe solo lo que el paciente aporta.",
    ["Escribir diagnosticos antes de describir lo ocurrido.", "No ordenar los eventos en el tiempo.", "Omitir progresion, intensidad o sintomas negativos relevantes."]
  ),
  motivo_consulta: hcrHelpEntry(
    "Motivo de consulta",
    "Es la razon principal por la que el paciente busca atencion, expresada de forma breve y cercana a sus palabras.",
    "Define el punto de partida del razonamiento y ayuda a priorizar problemas urgentes.",
    "Identifica el sintoma o problema principal sin convertirlo en diagnostico prematuro.",
    ["Cambiar el motivo por un diagnostico no demostrado.", "Perder el sintoma principal entre datos secundarios.", "Omitir el tiempo de evolucion cuando es relevante."]
  ),
  diagnostico_principal: hcrHelpEntry(
    "Diagnostico principal",
    "Es la hipotesis que mejor explica el conjunto de datos disponibles en ese momento.",
    "Ayuda a organizar decisiones diagnosticas y terapeuticas sin cerrar prematuramente el caso.",
    "Elige la hipotesis que mejor integre los hallazgos y mantenla abierta a cambios con datos nuevos.",
    ["Elegir una enfermedad por un dato aislado.", "Ignorar datos que contradicen la hipotesis.", "Confundir probabilidad con gravedad."]
  ),
  diagnostico_secundario: hcrHelpEntry(
    "Diagnostico secundario",
    "Es una alternativa razonable que tambien podria explicar parte del cuadro clinico.",
    "Mantiene abierto el razonamiento y evita depender de una sola explicacion.",
    "Incluye alternativas que expliquen datos importantes y compara que hallazgos las apoyan o las reducen.",
    ["Poner una lista amplia sin jerarquia.", "No explicar por que la alternativa sigue siendo posible.", "Repetir el diagnostico principal con otro nombre."]
  ),
  diagnostico_no_perder: hcrHelpEntry(
    "Diagnostico que no se puede perder",
    "Es una condicion potencialmente grave que debe vigilarse aunque no sea la mas probable.",
    "Protege al paciente de errores por cierre prematuro cuando existe riesgo alto.",
    "Piensa en condiciones graves que no puedes pasar por alto y busca datos que aumenten o reduzcan su riesgo.",
    ["Elegir diagnosticos raros sin relacion con el caso.", "Confundir este campo con el diagnostico mas probable.", "No buscar datos que modifiquen el riesgo."]
  ),

  historia_clinica: hcrHelpEntry(
    "Historial",
    "Reune antecedentes, medicamentos, familia y contexto que modifican el riesgo clinico.",
    "Permite interpretar el problema actual dentro de la vida real del paciente.",
    "Selecciona solo datos que cambien riesgo, gravedad, interpretacion o seguridad del manejo.",
    ["Copiar antecedentes sin relacion.", "Omitir medicamentos o alergias.", "No separar antecedentes confirmados de datos inciertos."]
  ),
  antecedentes_personales_patologicos: hcrHelpEntry(
    "Antecedentes personales y patologicos",
    "Son enfermedades previas, cirugias o eventos clinicos relevantes del paciente.",
    "Cambian la probabilidad de muchas hipotesis y la vulnerabilidad ante complicaciones.",
    "Busca antecedentes que expliquen riesgo basal, organos vulnerables o limitaciones para decisiones futuras.",
    ["Marcar todo sin jerarquia.", "Ignorar fecha, control o severidad.", "Asumir que un antecedente explica automaticamente el cuadro actual."]
  ),
  medicamentos_actuales: hcrHelpEntry(
    "Medicamentos",
    "Son farmacos, suplementos o tratamientos que el paciente usa o dejo de usar.",
    "Pueden modificar sintomas, riesgos, resultados de laboratorio y seguridad de intervenciones.",
    "Relaciona cada medicamento con indicacion, adherencia, efectos esperados y posibles riesgos.",
    ["Omitir farmacos de venta libre.", "No preguntar por adherencia.", "No relacionar medicamentos con comorbilidades."]
  ),
  antecedentes_familiares: hcrHelpEntry(
    "Antecedentes familiares",
    "Son enfermedades relevantes en familiares biologicos o convivientes cuando aportan riesgo o contexto.",
    "Ayudan a reconocer predisposicion, exposiciones compartidas o patrones hereditarios.",
    "Selecciona antecedentes familiares que cambien riesgo o sospecha clinica en este caso.",
    ["Registrar datos familiares sin impacto.", "No precisar parentesco o edad aproximada.", "Confundir antecedente familiar con diagnostico del paciente."]
  ),
  habitos_psicosociobiologicos_contexto: hcrHelpEntry(
    "Habitos psicosociobiologicos y contexto",
    "Incluye tabaco, alcohol, actividad, alimentacion, exposiciones, trabajo y red de apoyo.",
    "Aporta factores de riesgo, barreras de cuidado y contexto para interpretar sintomas.",
    "Elige datos que cambien probabilidad, gravedad, adherencia o seguridad.",
    ["Seleccionar habitos por rutina sin utilidad.", "Omitir exposiciones importantes.", "Ignorar barreras sociales o de acceso."]
  ),

  examen_funcional: hcrHelpEntry(
    "Examen funcional subjetivo",
    "Es la revision ordenada de sintomas por sistemas referidos por el paciente.",
    "Permite buscar sintomas asociados y negativos clave sin perder el problema central.",
    "Interpreta cada sintoma dentro de la historia, no como lista aislada.",
    ["Marcar sintomas sin relacion.", "Omitir negativos que reducen hipotesis peligrosas.", "Duplicar datos ya seleccionados sin aportar razonamiento."]
  ),
  revision_general: hcrHelpEntry(
    "Revision general",
    "Explora sintomas sistemicos como fiebre, perdida de peso, astenia o cambios generales.",
    "Estos datos orientan gravedad, inflamacion, infeccion o enfermedad sistemica.",
    "Distingue sintomas constitucionales persistentes de molestias inespecificas breves.",
    ["Sobrevalorar sintomas vagos.", "No preguntar duracion.", "Ignorar fiebre o deterioro funcional."]
  ),
  revision_piel: hcrHelpEntry(
    "Revision de piel",
    "Busca lesiones, coloracion, sangrado, edema, cambios de temperatura o signos cutaneos.",
    "La piel puede mostrar infeccion, hipoperfusion, alergia, enfermedad vascular o inflamacion.",
    "Relaciona cada cambio con tiempo de aparicion, distribucion y sintomas asociados.",
    ["Describir lesiones sin localizacion.", "No diferenciar hallazgo nuevo de cronico.", "Ignorar signos de perfusion."]
  ),
  revision_cabeza_ojos: hcrHelpEntry(
    "Cabeza y ojos",
    "Explora cefalea, vision, dolor ocular, mareo y sintomas craneofaciales relevantes.",
    "Puede revelar datos neurologicos, vasculares, infecciosos o de alarma.",
    "Pregunta por inicio, severidad, cambios visuales y sintomas neurologicos acompanantes.",
    ["Tratar toda cefalea igual.", "Omitir perdida visual o deficit focal.", "Ignorar inicio subito."]
  ),
  revision_orl: hcrHelpEntry(
    "Oidos, nariz, boca y garganta",
    "Revisa sintomas de vias respiratorias superiores, mucosa oral, audicion y garganta.",
    "Ayuda a ubicar focos infecciosos, inflamatorios o causas de sintomas respiratorios.",
    "Relaciona secrecion, dolor, fiebre y tiempo de evolucion.",
    ["Confundir congestion leve con foco principal.", "No distinguir secrecion purulenta de irritativa.", "Omitir dolor intenso o disfagia."]
  ),
  revision_respiratorio: hcrHelpEntry(
    "Respiratorio",
    "Explora tos, disnea, esputo, dolor pleuritico, sibilancias y hemoptisis.",
    "Estos sintomas orientan origen respiratorio, gravedad e intercambio gaseoso.",
    "Integra sintomas con signos vitales, saturacion y hallazgos de examen.",
    ["No precisar inicio de disnea.", "Ignorar hemoptisis.", "No relacionar tos con fiebre o dolor pleuritico."]
  ),
  revision_cardiovascular: hcrHelpEntry(
    "Cardiovascular",
    "Explora dolor toracico, palpitaciones, sincope, edema, ortopnea y tolerancia al esfuerzo.",
    "Puede revelar isquemia, arritmia, insuficiencia cardiaca o inestabilidad hemodinamica.",
    "Caracteriza el sintoma principal y busca sintomas acompanantes o negativos clave.",
    ["No describir irradiacion o relacion con esfuerzo.", "Ignorar disnea o edema.", "Confundir ansiedad con exclusion de enfermedad cardiaca."]
  ),
  revision_gastrointestinal: hcrHelpEntry(
    "Gastrointestinal",
    "Revisa apetito, nausea, vomito, diarrea, dolor abdominal y sangrado digestivo.",
    "Aporta causas alternativas, complicaciones y riesgos para decisiones posteriores.",
    "Diferencia sintomas altos, bajos, sangrado y relacion temporal con el cuadro actual.",
    ["Omitir sangrado digestivo.", "No precisar localizacion del dolor.", "Ignorar vomitos persistentes o deshidratacion."]
  ),
  revision_genitourinario: hcrHelpEntry(
    "Genitourinario",
    "Explora disuria, hematuria, cambios urinarios, dolor lumbar y sintomas genitales.",
    "Puede orientar infeccion, enfermedad renal, sangrado o condiciones ginecologicas/urologicas.",
    "Relaciona sintomas urinarios con fiebre, dolor, volumen urinario y antecedentes.",
    ["No preguntar por diuresis.", "Ignorar hematuria.", "Registrar sintomas sin relacion temporal."]
  ),
  revision_osteomuscular: hcrHelpEntry(
    "Osteomuscular",
    "Revisa dolor muscular, articular, debilidad, trauma, inflamacion o limitacion funcional.",
    "Puede apoyar procesos inflamatorios, infecciosos, vasculares o mecanicos.",
    "Describe localizacion, simetria, inicio y relacion con movimiento o fiebre.",
    ["Confundir mialgia general con dolor focal.", "Omitir trauma.", "No evaluar limitacion funcional."]
  ),
  revision_neurologico_mental: hcrHelpEntry(
    "Nervioso y mental",
    "Explora conciencia, orientacion, deficit focal, convulsiones, cefalea, ansiedad o cambios conductuales.",
    "Identifica datos de alarma neurologica o compromiso sistemico grave.",
    "Busca cambios nuevos, inicio, progresion y relacion con otros sintomas.",
    ["No diferenciar cansancio de confusion.", "Omitir deficit focal.", "Ignorar convulsiones o alteracion del estado mental."]
  ),

  examen_fisico: hcrHelpEntry(
    "Examen fisico por sistemas",
    "Es la busqueda ordenada de signos objetivos que apoyan, contradicen o cambian hipotesis.",
    "Permite estimar gravedad, localizar sistemas comprometidos y decidir estudios o manejo.",
    "Relaciona cada signo con una pregunta clinica concreta y el contexto del caso.",
    ["Seleccionar signos sin interpretar relevancia.", "Ignorar signos vitales o estado general.", "No usar hallazgos negativos importantes."]
  ),
  signos_vitales: hcrHelpEntry("Signos vitales", "Son medidas objetivas basicas como presion arterial, pulso, frecuencia respiratoria, temperatura y saturacion.", "Detectan gravedad y cambios fisiologicos tempranos.", "Interpreta cada valor junto con sintomas, perfusion y tendencia.", ["Leer valores aislados.", "No relacionar fiebre, pulso y respiracion.", "Ignorar saturacion o hipotension."]),
  estado_general: hcrHelpEntry("Estado general", "Resume apariencia, conciencia, hidratacion, perfusion y trabajo respiratorio visibles.", "Aporta una primera estimacion de gravedad.", "Observa antes de interpretar: postura, habla, esfuerzo, coloracion y respuesta.", ["Describirlo de forma vaga.", "No reconocer deterioro.", "Confundir ansiedad con estabilidad."]),
  examen_piel: hcrHelpEntry("Piel", "Evalua color, temperatura, humedad, lesiones, sangrado, edema y perfusion cutanea.", "La piel puede mostrar hipoperfusion, infeccion, inflamacion o riesgo hemorragico.", "Describe hallazgos objetivos y su distribucion.", ["No separar palidez de cianosis.", "Omitir petequias.", "No valorar temperatura o humedad."]),
  examen_cabeza: hcrHelpEntry("Cabeza", "Evalua forma, trauma, dolor localizado y signos craneofaciales.", "Puede aportar trauma, infeccion, dolor referido o datos neurologicos.", "Relaciona hallazgos con sintomas de cabeza, ojos, nariz y cuello.", ["Hacer descripcion generica.", "Omitir trauma.", "No correlacionar con sintomas."]),
  examen_ojos: hcrHelpEntry("Ojos", "Evalua pupilas, conjuntivas, escleras, movimientos y signos visibles.", "Puede revelar anemia, ictericia, deficit neurologico o inflamacion.", "Observa simetria, reactividad y cambios nuevos.", ["No valorar pupilas.", "Ignorar palidez conjuntival.", "No relacionar vision con neurologia."]),
  examen_oidos: hcrHelpEntry("Oidos", "Evalua audicion, secreciones, dolor y hallazgos externos relevantes.", "Puede orientar foco infeccioso, trauma o sintomas vestibulares.", "Registra hallazgos positivos y negativos con relacion al cuadro.", ["Explorar sin pregunta clinica.", "Omitir secrecion o dolor.", "Sobrerrepresentar hallazgos cronicos."]),
  examen_nariz_senos: hcrHelpEntry("Nariz y senos paranasales", "Evalua mucosa nasal, secrecion, obstruccion y dolor en senos.", "Ayuda a diferenciar sintomas altos de infecciones o irritacion.", "Describe secrecion, dolor, lateralidad y tiempo de evolucion.", ["No diferenciar rinorrea de secrecion purulenta.", "Ignorar dolor facial.", "Sobrevalorar congestion leve."]),
  examen_boca_faringe: hcrHelpEntry("Boca y faringe", "Evalua mucosa, hidratacion, lesiones, exudado, placas y garganta.", "Puede aportar hidratacion, foco infeccioso, sangrado o inflamacion.", "Busca lesiones objetivas y relacion con sintomas.", ["Omitir hidratacion oral.", "No describir exudado.", "Confundir irritacion leve con foco principal."]),
  examen_cuello: hcrHelpEntry("Cuello", "Evalua movilidad, rigidez, yugulares, masas y dolor.", "Puede aportar datos neurologicos, infecciosos o hemodinamicos.", "Relaciona rigidez, ingurgitacion yugular o masas con el problema actual.", ["No valorar rigidez de nuca si hay alarma.", "Omitir yugulares.", "Describir cuello sin objetivo."]),
  examen_ganglios_linfaticos: hcrHelpEntry("Ganglios linfaticos", "Evalua adenopatias por localizacion, tamano, dolor y consistencia.", "Puede orientar infeccion, inflamacion o enfermedad sistemica.", "Distingue adenopatias localizadas de generalizadas y dolorosas de no dolorosas.", ["No precisar cadenas.", "No describir dolor o consistencia.", "Marcar adenopatias sin relacion."]),
  examen_torax: hcrHelpEntry("Torax", "Evalua forma, expansion, dolor de pared y movimientos respiratorios.", "Ayuda a localizar compromiso respiratorio, trauma o dolor pleuritico.", "Compara ambos hemitorax y relaciona con dolor o disnea.", ["No comparar lados.", "Confundir pared toracica con dolor visceral.", "Omitir expansion toracica."]),
  examen_senos: hcrHelpEntry("Senos", "Evalua hallazgos mamarios cuando son relevantes para el caso.", "Puede aportar datos de alarma, infeccion o hallazgos no relacionados.", "Explora solo cuando el contexto clinico lo justifica y registra negativos relevantes.", ["Explorar sin indicacion clara.", "Omitir signos de alarma si son pertinentes.", "No respetar contexto y prioridad clinica."]),
  examen_respiratorio: hcrHelpEntry("Pulmones", "Evalua inspeccion, palpacion, percusion y auscultacion respiratoria.", "Localiza compromiso pulmonar y ayuda a estimar gravedad.", "Relaciona ruidos, matidez, murmullo y trabajo respiratorio con sintomas y saturacion.", ["Nombrar ruidos sin localizacion.", "Omitir trabajo respiratorio.", "No comparar ambos lados."]),
  examen_cardiovascular: hcrHelpEntry("Corazon y vasos sanguineos", "Evalua ritmo, ruidos, soplos, pulsos, perfusion, yugulares y edema.", "Ayuda a reconocer inestabilidad, isquemia, falla cardiaca o enfermedad vascular.", "Integra auscultacion con signos vitales, pulsos y perfusion periferica.", ["Describir ritmo sin pulso.", "No valorar perfusion.", "Omitir soplos o edema cuando son relevantes."]),
  examen_abdominal: hcrHelpEntry("Abdomen", "Evalua inspeccion, ruidos, dolor, defensa, masas y visceromegalias.", "Puede revelar causas alternativas, complicaciones o contraindicaciones.", "Describe dolor, localizacion, irritacion peritoneal y relacion con sintomas digestivos.", ["No localizar dolor.", "Omitir defensa o rebote.", "No correlacionar con sintomas gastrointestinales."]),
  examen_genitourinario: hcrHelpEntry("Genitourinario", "Evalua hallazgos genitales o urinarios cuando son pertinentes.", "Puede aportar infeccion, sangrado, dolor o condiciones especificas del caso.", "Respeta prioridad clinica y registra si el examen no es necesario en ese momento.", ["Forzar examen sin indicacion.", "Omitir sintomas urinarios relevantes.", "No justificar diferimiento."]),
  examen_rectal: hcrHelpEntry("Recto", "Evalua hallazgos rectales cuando el caso lo justifica.", "Puede detectar sangrado, dolor, masas o datos que cambian riesgo.", "Realiza o difiere segun indicacion clinica y documenta la razon.", ["Hacerlo rutinario sin indicacion.", "Omitir sangrado relevante.", "No documentar diferimiento."]),
  examen_osteomuscular: hcrHelpEntry("Huesos, articulaciones y musculos", "Evalua dolor, inflamacion, deformidad, fuerza y movilidad.", "Puede apoyar enfermedad inflamatoria, infecciosa, traumatica o vascular.", "Describe localizacion, simetria, funcion y signos inflamatorios.", ["No diferenciar dolor articular de muscular.", "Omitir deformidad o limitacion.", "No valorar simetria."]),
  examen_extremidades_perifericas: hcrHelpEntry("Extremidades", "Evalua edema, temperatura, pulsos, dolor, simetria y perfusion distal.", "Aporta datos vasculares, cardiacos, tromboticos o de perfusion.", "Compara ambos lados y relaciona con sintomas cardiovasculares o respiratorios.", ["No comparar simetria.", "Omitir pulsos o llenado capilar.", "No describir edema."]),
  examen_neurologico: hcrHelpEntry("Neurologico y psiquico", "Evalua conciencia, orientacion, lenguaje, fuerza, sensibilidad, coordinacion y estado mental.", "Puede detectar deficit focal, delirium, convulsiones o compromiso sistemico.", "Busca cambios nuevos y focalidad, y relaciona con sintomas y signos vitales.", ["No diferenciar somnolencia de confusion.", "Omitir deficit focal.", "No valorar lenguaje u orientacion."]),

  estudios_diagnosticos: hcrHelpEntry(
    "Estudios disponibles",
    "Son pruebas complementarias que deben interpretarse dentro del contexto clinico.",
    "Pueden confirmar, descartar, estratificar gravedad o revelar complicaciones.",
    "Selecciona resultados que cambien tu representacion del problema o tus hipotesis.",
    ["Interpretar pruebas aisladas.", "Tomar un valor alterado como diagnostico definitivo.", "Ignorar valores normales que reducen hipotesis peligrosas."]
  ),
  laboratorio: hcrHelpEntry("Laboratorio", "Agrupa resultados de sangre, orina u otras muestras biologicas.", "Ayuda a estimar inflamacion, funcion organica, riesgo y gravedad.", "Interpreta valores segun contexto, tendencia y referencia.", ["Marcar todo valor alterado sin razon.", "Ignorar valores normales importantes.", "No relacionar laboratorio con sintomas."]),
  hemograma: hcrHelpEntry("Hemograma", "Evalua globulos rojos, blancos y plaquetas.", "Aporta datos sobre anemia, infeccion, inflamacion, sangrado o riesgo hematologico.", "Relaciona cada linea celular con sintomas y gravedad.", ["Interpretar leucocitos sin diferencial.", "Ignorar anemia o plaquetas.", "No considerar contexto clinico."]),
  bioquimica_sanguinea: hcrHelpEntry("Bioquimica sanguinea", "Incluye glucosa, electrolitos y otros marcadores metabolicos.", "Permite detectar alteraciones metabolicas que modifican riesgo y manejo.", "Evalua si el resultado explica sintomas o cambia seguridad de decisiones.", ["Leer valores aislados.", "Ignorar glucosa o electrolitos alterados.", "No revisar unidades o referencia."]),
  funcion_renal_electrolitos: hcrHelpEntry("Funcion renal y electrolitos", "Evalua creatinina, filtrado estimado y electrolitos relevantes.", "Modifica riesgo, interpretacion de sintomas y seguridad de medicamentos.", "Relaciona funcion renal con antecedentes, hidratacion y decisiones futuras.", ["Ignorar filtrado estimado.", "No relacionar potasio con riesgo cardiaco.", "No ajustar interpretacion por contexto."]),
  marcadores_cardiacos: hcrHelpEntry("Marcadores cardiacos", "Incluyen biomarcadores usados para estimar dano miocardico o carga cardiaca.", "Ayudan a apoyar o reducir hipotesis cardiovasculares cuando se interpretan con clinica y ECG.", "Valora magnitud, tendencia temporal y contexto del dolor o disnea.", ["Interpretar un valor aislado.", "Ignorar cambios seriados.", "Usarlos sin relacion con sintomas y ECG."]),
  coagulacion: hcrHelpEntry("Coagulacion", "Evalua pruebas relacionadas con hemostasia y anticoagulacion.", "Aporta riesgo de sangrado, trombosis o seguridad de intervenciones.", "Interpreta con medicamentos, antecedentes y contexto clinico.", ["Ignorar anticoagulantes.", "No revisar INR o TTPa cuando son relevantes.", "Confundir prueba normal con ausencia de riesgo."]),
  gasometria: hcrHelpEntry("Gasometria", "Evalua pH, oxigenacion, ventilacion y bicarbonato.", "Ayuda a estimar gravedad respiratoria o metabolica.", "Relaciona valores con saturacion, trabajo respiratorio y cuadro clinico.", ["Leer PaO2 sin contexto de oxigeno.", "Ignorar pH.", "No integrar PaCO2 y bicarbonato."]),
  electrocardiograma: hcrHelpEntry("Electrocardiograma", "Registra actividad electrica cardiaca mediante derivaciones.", "Puede mostrar ritmo, conduccion, isquemia, sobrecarga o cambios dinamicos.", "Interpreta ritmo, frecuencia, eje, intervalos y ST-T junto con sintomas.", ["Buscar solo elevacion del ST.", "Ignorar cambios seriados.", "No relacionarlo con dolor, pulso y biomarcadores."]),
  imagenes_diagnosticas: hcrHelpEntry("Imagenes diagnosticas", "Son estudios visuales usados para observar estructuras o patrones objetivos.", "Ayudan a localizar enfermedad, descartar complicaciones o apoyar hipotesis.", "Observa primero la imagen o descripcion objetiva antes de interpretar en exceso.", ["Confundir descripcion con explicacion causal.", "Usar una imagen como diagnostico definitivo.", "Ignorar calidad o limitaciones del estudio."]),
  rayos_x: hcrHelpEntry("Rayos X", "Imagen basada en radiacion ionizante usada para evaluar estructuras como torax, huesos o abdomen.", "Puede mostrar patrones de aire, consolidacion, derrame, silueta cardiaca u otras alteraciones.", "Describe hallazgos visibles y su localizacion sin convertirlos en explicacion docente larga.", ["No localizar el hallazgo.", "Confundir opacidad con diagnostico definitivo.", "Ignorar comparacion entre lados."]),
  ecogramas: hcrHelpEntry("Ecogramas", "Imagen por ultrasonido usada para observar estructuras y movimiento en tiempo real.", "Aporta datos dinamicos y puede orientar funcion, liquido o anatomia segun la ventana.", "Interpreta hallazgos con las limitaciones tecnicas del estudio.", ["Olvidar que depende del operador.", "Tomar una ventana limitada como estudio completo.", "No relacionar con la pregunta clinica."]),
  tomografia_computarizada: hcrHelpEntry("TC", "Imagen seccional que permite evaluar estructuras internas con mayor detalle que radiografias simples.", "Puede aclarar localizacion, extension y complicaciones segun el caso.", "Usa la descripcion objetiva y evita conclusiones que no esten sustentadas.", ["Pedir o interpretar sin pregunta clinica.", "Ignorar contraste o fase del estudio.", "Convertir un hallazgo incidental en eje del caso."]),
  otros_estudios: hcrHelpEntry("Otros estudios", "Agrupa estudios no incluidos en categorias principales.", "Permite integrar pruebas especiales sin cambiar la estructura del modulo.", "Evalua cada estudio segun su objetivo y limitaciones.", ["Tratar todos los estudios como equivalentes.", "No revisar que pregunta responde.", "Sobredimensionar hallazgos inespecificos."]),

  antecedentes: hcrHelpEntry(
    "Antecedentes",
    "Son datos previos que modifican riesgo, gravedad, interpretacion de sintomas o seguridad del manejo.",
    "Ayudan a ajustar el razonamiento al contexto real del paciente.",
    "Selecciona antecedentes que cambien riesgo, interpretacion o seguridad.",
    ["Copiar antecedentes sin relacion.", "Omitir medicamentos o alergias.", "No separar datos confirmados de inciertos."]
  ),
  paraclinicos: hcrHelpEntry(
    "Paraclinicos",
    "Son estudios complementarios interpretados dentro del contexto clinico.",
    "Pueden confirmar, descartar, estratificar gravedad o revelar complicaciones.",
    "Interpreta cada resultado segun la pregunta clinica y los hallazgos previos.",
    ["Pedir o interpretar pruebas sin pregunta clinica.", "Tomar un valor alterado como diagnostico definitivo.", "Ignorar valores normales relevantes."]
  )
};
