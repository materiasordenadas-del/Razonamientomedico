window.HCR_CASE_EXPERT = window.HCR_CASE_EXPERT || {};

window.HCR_CASE_EXPERT.RC5 = {
  expertEvaluation: {
  "evaluationSchemaVersion": "2.0",
  "findings": {
    "selectedExpected": ["dato-tri-07", "dato-tri-08", "dato-tri-09", "dato-tri-11", "dato-tri-13", "dato-tri-14", "dato-tri-15", "dato-int-01", "dato-int-02", "dato-int-05", "dato-int-07", "dato-int-09", "dato-int-11", "dato-int-12", "dato-int-13", "dato-his-02", "dato-his-03", "dato-his-04", "dato-med-02", "dato-med-05", "dato-fam-03", "dato-hab-01", "dato-hab-03", "dato-hab-04", "dato-ef-gen-01", "dato-ef-gen-02", "dato-ef-piel-01", "dato-ef-gar-01", "dato-ef-resp-01", "dato-ef-cv-02", "dato-ef-cv-04", "dato-ef-ost-02", "dato-ef-ost-04", "dato-ef-neu-01", "dato-ef-neu-04", "dato-efis-gen-03", "dato-efis-piel-01", "dato-efis-far-01", "dato-efis-far-02", "dato-efis-cue-01", "dato-efis-cue-02", "dato-efis-cue-04", "dato-efis-tor-02", "dato-efis-tor-03", "dato-efis-pul-01", "dato-efis-pul-04", "dato-efis-cor-03", "dato-efis-cor-04", "dato-efis-vas-03", "dato-efis-ost-01", "dato-efis-ost-02", "dato-efis-ost-03", "dato-efis-ost-04", "dato-efis-ost-05", "dato-efis-ext-01", "dato-efis-ext-04", "dato-efis-neu-04", "dato-par-hem-01", "dato-par-bio-01", "dato-par-inf-01", "dato-par-inf-02", "dato-par-gas-01", "dato-par-gas-04", "dato-par-mic-01", "dato-par-mic-02", "dato-par-mic-04", "dato-par-mic-06", "dato-par-mic-07", "dato-par-mic-08", "dato-par-mic-09", "dato-par-ecg-01", "dato-par-ecg-02", "dato-par-ecg-03", "dato-par-eco-02", "dato-par-eco-03", "dato-par-eco-04", "dato-par-eco-06"],
    "missedImportant": ["dato-tri-10", "dato-tri-12", "dato-int-03", "dato-int-04", "dato-int-06", "dato-int-10", "dato-ef-resp-02", "dato-ef-cv-01", "dato-ef-ost-01", "dato-efis-cor-05", "dato-par-mic-03", "dato-par-mic-05", "dato-par-eco-01"],
    "lowValueSelected": ["dato-tri-05", "dato-tri-16", "dato-int-08", "dato-int-14", "dato-his-05", "dato-med-03", "dato-med-04", "dato-fam-04", "dato-fam-05", "dato-hab-05", "dato-ef-gen-03", "dato-ef-gen-04", "dato-ef-gen-05", "dato-ef-piel-02", "dato-ef-piel-03", "dato-ef-cab-01", "dato-ef-ojo-01", "dato-ef-oid-01", "dato-ef-nar-01", "dato-ef-boc-01", "dato-ef-gi-01", "dato-ef-gu-01", "dato-ef-ost-03", "dato-ef-neu-02", "dato-efis-gen-02", "dato-efis-piel-03", "dato-efis-ojo-04", "dato-efis-oid-02", "dato-efis-nar-02", "dato-efis-boc-02", "dato-efis-cue-05", "dato-efis-gan-01", "dato-efis-tor-04", "dato-efis-pul-02", "dato-efis-vas-01", "dato-efis-abd-03", "dato-efis-ext-02", "dato-efis-neu-02", "dato-par-hem-02", "dato-par-hem-03", "dato-par-hem-04", "dato-par-bio-02", "dato-par-bio-03", "dato-par-coag-01", "dato-par-inf-03", "dato-par-lip-01", "dato-par-lip-02", "dato-par-lip-03", "dato-par-lip-04", "dato-par-uri-01", "dato-par-uri-02", "dato-par-uri-03", "dato-par-gas-02", "dato-par-gas-03", "dato-par-ecg-04", "dato-par-eco-05"]
  },
  "comparisonByModule": {
    "m1": {
      "title": "Módulo 1 — Triage e interrogatorio",
      "sourceComparison": {
        "triage": {
          "expectedSelected": ["dato-tri-07", "dato-tri-08", "dato-tri-09", "dato-tri-11", "dato-tri-13", "dato-tri-14", "dato-tri-15"],
          "criticalMisses": ["dato-tri-10", "dato-tri-12"],
          "lowValueIfSelected": ["dato-tri-05", "dato-tri-16"],
          "rationale": "El ingreso muestra fiebre y taquicardia con perfusión y oxigenación conservadas; el motivo de cansancio obliga a ampliar la historia sin convertir el triage en diagnóstico."
        },
        "interrogatorio": {
          "expectedSelected": ["dato-int-01", "dato-int-02", "dato-int-05", "dato-int-07", "dato-int-09", "dato-int-11", "dato-int-12", "dato-int-13"],
          "criticalMisses": ["dato-int-03", "dato-int-04", "dato-int-06", "dato-int-10"],
          "lowValueIfSelected": ["dato-int-08", "dato-int-14"],
          "rationale": "La secuencia de alivio en una articulación y aparición en otra, junto con el antecedente faríngeo y un cambio funcional de esfuerzo, organiza el problema mejor que la fiebre o el dolor aislados."
        }
      },
      "module7Findings": [
              {
                      "id": "M7-M1-01",
                      "findingId": "dato-int-03",
                      "text": "“Después se me puso mal la rodilla derecha”.",
                      "explanation": {
                              "title": "“Después se me puso mal la rodilla derecha”.",
                              "question": "Librito",
                              "body": [
                                      "Para pensar: ¿Qué cambia cuando una articulación mejora y, después, otra gran articulación se vuelve el problema dominante? ¿El dato decide una etiología o obliga primero a reconstruir una trayectoria?",
                                      "Comentario clínico: Cuando Camila relató este cambio, el punto clínico no era contar articulaciones afectadas. La mejor lectura era reconocer que el dolor no permanecía fijo. Una sucesión de alivio en un sitio y afectación en otro cambia la calidad del síntoma: deja de comportarse como una lesión local persistente y pasa a requerir una explicación sistémica o postinfecciosa. En M1 ese patrón no certificaba un diagnóstico, pero sí tenía más rendimiento que una descripción aislada de dolor de rodilla.",
                                      "Integración del caso: Después, el examen mostró derrame, aumento de temperatura y limitación en la rodilla izquierda, mientras la rodilla derecha ya no tenía sinovitis activa. Esa discordancia espacial convirtió el relato inicial en correlación objetiva de migración. Al integrar el caso completo, el hallazgo se enlaza con la faringitis remota, la inflamación y la evidencia cardíaca; la articulación no era un problema independiente, sino una pieza de una cadena más amplia.",
                                      "Al contrastar hipótesis: Para la hipótesis principal, la migración gana peso porque organiza tiempo y distribución. La alternativa reactiva puede compartir inflamación articular, pero explica con menos economía la secuencia y el posterior compromiso cardíaco. La amenaza infecciosa no desaparece por este patrón: una artritis séptica o endovascular exige otro fenotipo y debe reconsiderarse si la evolución deja de ser migratoria o aparece destrucción articular, bacteriemia o inestabilidad."
                              ]
                      }
              },
              {
                      "id": "M7-M1-02",
                      "findingId": "dato-int-10",
                      "text": "“Hace como tres semanas me ardía mucho la garganta”.",
                      "explanation": {
                              "title": "“Hace como tres semanas me ardía mucho la garganta”.",
                              "question": "Librito",
                              "body": [
                                      "Para pensar: ¿El antecedente faríngeo funciona como diagnóstico, como prueba o como conector temporal? ¿Qué evidencia faltaba todavía cuando Camila lo contó?",
                                      "Comentario clínico: En M1, la garganta dolorosa de semanas antes era un puente temporal, no una confirmación microbiológica. Su valor dependía de aparecer antes del cuadro articular y de coexistir con fiebre en aquel episodio. La operación correcta era usarla para abrir una vía postinfecciosa y precisar latencia, exposición y tratamiento, sin convertir un recuerdo clínico en una prueba de infección activa o en una conclusión etiológica cerrada.",
                                      "Integración del caso: Más adelante, las pruebas faríngeas actuales resultaron negativas, lo que era compatible con que el episodio original ya no estuviera activo. La serología elevada aportó una forma distinta de documentación de exposición previa y explicó por qué el antecedente merecía peso. Al juntarse con artritis migratoria, ECG y ecocardiografía, el dato inicial dejó de ser anecdótico: ayudó a ordenar la causalidad sin reemplazar las pruebas que faltaban en M1.",
                                      "Al contrastar hipótesis: La hipótesis principal gana coherencia porque la latencia conecta una exposición plausible con manifestaciones posteriores. La alternativa reactiva también usa ese antecedente y por eso compite de verdad. En cambio, una amenaza endovascular no queda excluida por la historia faríngea; se vuelve menos integradora si aparecen datos posteriores que favorecen una cadena postestreptocócica, pero requiere evaluación separada cuando fiebre y soplo plantean riesgo. Si el antecedente fuera simultáneo al cuadro articular o no existiera, el mapa diagnóstico tendría que reabrirse."
                              ]
                      }
              },
              {
                      "id": "M7-M1-03",
                      "findingId": "dato-int-06",
                      "text": "“Ayer subiendo escaleras sentí el corazón muy rápido y tuve que parar”.",
                      "explanation": {
                              "title": "“Ayer subiendo escaleras sentí el corazón muy rápido y tuve que parar”.",
                              "question": "Librito",
                              "body": [
                                      "Para pensar: ¿Este cambio describe solo malestar por fiebre o introduce una pregunta de seguridad que no puede quedar dentro del sistema osteomuscular?",
                                      "Comentario clínico: La frase de Camila contiene un umbral funcional concreto: tuvo que detenerse al subir escaleras, actividad que antes toleraba. En M1 no localizaba la causa; podía relacionarse con fiebre, dolor, taquicardia o compromiso cardiovascular. Precisamente por esa ambigüedad era un dato de alto valor: no autorizaba atribuir el cansancio a una sola explicación y obligaba a explorar el corazón antes de tranquilizarse por la ausencia de disnea en reposo.",
                                      "Integración del caso: Después, el soplo apical y la ecocardiografía mostraron que la pregunta cardiovascular no era decorativa. Al integrar el caso completo, la palpitación de esfuerzo se entiende como señal funcional que coexistía con lesión valvular, sin que por sí sola hubiera podido medir su gravedad ni definir su etiología. La ausencia posterior de estertores, edema e hipoxemia ayudó a separar compromiso valvular de insuficiencia congestiva franca en ese momento.",
                                      "Al contrastar hipótesis: En la hipótesis principal, el hallazgo fortalece la necesidad de buscar afectación cardíaca, no la prueba por sí mismo. En la alternativa articular aislada es una tensión porque deja un territorio sin explicar. Para la amenaza infecciosa o arrítmica, conserva valor de seguridad: un cambio de esfuerzo no confirma ninguna de ellas, pero hace peligroso cerrar el caso sin examen, ECG y vigilancia. Si hubiera existido síncope, dolor torácico o disnea en reposo, la prioridad inmediata habría aumentado."
                              ]
                      }
              },
              {
                      "id": "M7-M1-04",
                      "findingId": "dato-tri-12",
                      "text": "Frecuencia cardíaca: 118 latidos por minuto.",
                      "explanation": {
                              "title": "Frecuencia cardíaca: 118 latidos por minuto.",
                              "question": "Librito",
                              "body": [
                                      "Para pensar: ¿Qué pregunta responde una frecuencia cardíaca aislada y qué preguntas deja abiertas en una niña con fiebre, dolor y menor tolerancia al esfuerzo?",
                                      "Comentario clínico: La taquicardia de ingreso no identificaba el mecanismo. En Camila podía acompañar fiebre, dolor, ansiedad, inflamación o un problema cardíaco; lo importante era que impedía llamar “estable” al caso solo porque la presión arterial y la saturación estaban conservadas. El dato debía convertirse en una tarea de reevaluación: correlacionar tendencia, temperatura, síntomas de esfuerzo, exploración y electrocardiograma.",
                                      "Integración del caso: Más tarde, el ECG mostró ritmo sinusal con frecuencia ventricular aún elevada y una alteración de conducción. Ese recorrido aclara que la frecuencia inicial no era una prueba de arritmia aislada ni un sustituto de la valoración valvular. Al integrar el caso completo, la taquicardia funciona como alarma fisiológica que acompaña el síndrome y justifica monitorización, no como una explicación única del cuadro.",
                                      "Al contrastar hipótesis: Para la hipótesis principal, aumenta la necesidad de documentar compromiso sistémico y cardíaco, pero no suma una manifestación específica por sí sola. Para la alternativa reactiva, sigue siendo compatible con inflamación y dolor. Para la amenaza infecciosa, obliga a no perder la reevaluación de perfusión, fiebre y microbiología. Si la frecuencia hubiera normalizado con el control del dolor y la fiebre sin ningún dato cardíaco adicional, su peso etiológico habría sido menor; eso no ocurrió como sustituto de la evaluación estructural."
                              ]
                      }
              }
      ],
      "illnessActual": {
        "expected": "Camila, escolar de 12 años, inició seis días antes con dolor e hinchazón en el tobillo izquierdo, que mejoraron aproximadamente 24 horas después. Posteriormente presentó dolor e inflamación en la rodilla derecha y, tras mejorar esta, se instaló en la rodilla izquierda, con dificultad para caminar. Durante el mismo período ha tenido fiebre y cansancio; desde el día previo nota palpitaciones y necesidad de detenerse al subir escaleras. Tres semanas antes tuvo dolor de garganta con fiebre varios días y no recibió antibiótico. Como negativos pertinentes, niega síncope, dolor torácico, falta de aire en reposo, tos persistente, movimientos involuntarios y lesiones cutáneas nuevas.",
        "essentialElements": []
      },
      "tier3": {
        "leader": {
          "diagnosis": "Fiebre reumática aguda con posible compromiso cardíaco.",
          "rationale": "La migración entre grandes articulaciones organiza mejor el dolor que una lesión local fija. La latencia de semanas tras un episodio faríngeo febril conecta el tempo articular con un mecanismo postinfeccioso posible; fiebre y limitación de esfuerzo añaden repercusión sistémica. El límite es que en esta etapa no existe aún demostración objetiva de exposición previa ni de lesión cardíaca. El puente útil es obtener historial dirigido, revisar síntomas por sistemas y buscar signos cardiovasculares y articulares objetivos."
        },
        "alternative": {
          "diagnosis": "Artritis reactiva postestreptocócica.",
          "rationale": "El antecedente faríngeo y una artritis inflamatoria aguda pueden explicar parte del cuadro. La tensión es que la secuencia claramente migratoria y la alarma de esfuerzo crean una red que exige buscar un proceso más integrador. Los siguientes hallazgos útiles son la historia de basal articular y cardíaco, la revisión funcional y la exploración dirigida."
        },
        "cannotMiss": {
          "diagnosis": "Proceso infeccioso con potencial compromiso cardiovascular por definir.",
          "rationale": "Fiebre, taquicardia al ingreso y descenso del umbral de esfuerzo no permiten minimizar el caso como dolor articular aislado. Esta amenaza no es la más probable con los datos disponibles, pero el daño de omitir una causa infecciosa que comprometa el corazón obliga a buscar signos y pruebas de seguridad antes de tranquilizar o dar alta."
        }
      }
    },
    "m2": {
      "title": "Módulo 2 — Historial y examen funcional",
      "sourceComparison": {
        "historial": {
          "expectedSelected": ["dato-his-02", "dato-his-03", "dato-his-04", "dato-med-02", "dato-med-05", "dato-fam-03", "dato-hab-01", "dato-hab-03", "dato-hab-04"],
          "criticalMisses": [],
          "lowValueIfSelected": ["dato-his-05", "dato-med-03", "dato-med-04", "dato-fam-04", "dato-fam-05", "dato-hab-05"],
          "rationale": ""
        },
        "examenFuncional": {
          "expectedSelected": ["dato-ef-gen-01", "dato-ef-gen-02", "dato-ef-piel-01", "dato-ef-gar-01", "dato-ef-resp-01", "dato-ef-cv-02", "dato-ef-cv-04", "dato-ef-ost-02", "dato-ef-ost-04", "dato-ef-neu-01", "dato-ef-neu-04"],
          "criticalMisses": ["dato-ef-resp-02", "dato-ef-cv-01", "dato-ef-ost-01"],
          "lowValueIfSelected": ["dato-ef-gen-03", "dato-ef-gen-04", "dato-ef-gen-05", "dato-ef-piel-02", "dato-ef-piel-03", "dato-ef-cab-01", "dato-ef-ojo-01", "dato-ef-oid-01", "dato-ef-nar-01", "dato-ef-boc-01", "dato-ef-gi-01", "dato-ef-gu-01", "dato-ef-ost-03", "dato-ef-neu-02"],
          "rationale": ""
        }
      },
      "module7Findings": [
              {
                      "id": "M7-M2-01",
                      "findingId": "dato-his-03",
                      "text": "Sin soplo documentado en controles escolares previos.",
                      "explanation": {
                              "title": "Sin soplo documentado en controles escolares previos.",
                              "question": "Librito",
                              "body": [
                                      "Para pensar: ¿Cómo modifica el razonamiento saber que no existía un soplo conocido antes del episodio? ¿Qué puede apoyar este antecedente y qué no puede probar?",
                                      "Comentario clínico: En M2, este antecedente no era un examen cardiovascular retroactivo ni una garantía de corazón previamente normal. Sí era útil para interpretar un futuro hallazgo auscultatorio como potencialmente nuevo, en lugar de asumir de entrada que se trataba de una lesión estructural vieja. Su valor real estaba en preparar la lectura del examen físico, no en diagnosticar una valvulopatía desde la historia.",
                                      "Integración del caso: Después, el soplo pansistólico apical y la ecocardiografía documentaron regurgitación mitral. En esa secuencia, el antecedente escolar apoya novedad clínica y refuerza que el cambio de esfuerzo merecía ser estudiado. No sustituye la ecocardiografía: la historia solo modifica la probabilidad y el sentido de urgencia con que se interpreta el hallazgo actual.",
                                      "Al contrastar hipótesis: Para la hipótesis principal, un soplo nuevo encaja con la extensión cardíaca de una cadena que ya incluía articulaciones y antecedente faríngeo. La alternativa reactiva aislada pierde capacidad de explicar el territorio valvular si el hallazgo es adquirido. La amenaza infecciosa puede también producir una lesión nueva, por lo que este antecedente no la excluye; orienta a que microbiología y ecocardiografía sean pasos obligatorios, no a que se omitan."
                              ]
                      }
              },
              {
                      "id": "M7-M2-02",
                      "findingId": "dato-med-02",
                      "text": "No recibió antibiótico prescrito para el episodio faríngeo previo.",
                      "explanation": {
                              "title": "No recibió antibiótico prescrito para el episodio faríngeo previo.",
                              "question": "Librito",
                              "body": [
                                      "Para pensar: ¿Qué parte de la cadena causal modifica conocer que el episodio faríngeo no recibió antibiótico? ¿Qué no permite concluir sobre el estado microbiológico actual?",
                                      "Comentario clínico: Este dato amplía la plausibilidad del antecedente sin convertirlo en una prueba. En Camila, distingue un episodio faríngeo recordado de una infección tratada y resuelta bajo documentación. Su función es causal y temporal: vuelve más razonable buscar evidencia de exposición previa y entender por qué un evento remoto puede relacionarse con una respuesta posterior. No permite afirmar que exista infección faríngea activa al momento de la consulta.",
                                      "Integración del caso: Las pruebas faríngeas negativas posteriores y las serologías elevadas muestran por qué esta distinción importa. Un resultado negativo semanas después no borra la posibilidad de exposición previa; responde una pregunta diferente. La cadena completa une episodio no tratado, intervalo temporal, artritis migratoria y compromiso cardíaco objetivo, sin convertir la falta de antibiótico en un sustituto de criterios o pruebas.",
                                      "Al contrastar hipótesis: La hipótesis principal gana coherencia porque este hallazgo hace más plausible la exposición previa que debe documentarse. La alternativa reactiva también lo incorpora, por lo que no es discriminador único. La amenaza endovascular no depende de este dato y debe evaluarse por su propio fenotipo y microbiología. Si Camila hubiera completado tratamiento documentado, la hipótesis postestreptocócica no desaparecería automáticamente, pero la conversación sobre exposición y prevención requeriría otra precisión."
                              ]
                      }
              },
              {
                      "id": "M7-M2-03",
                      "findingId": "dato-ef-ost-01",
                      "text": "Refiere que el dolor cambia de una articulación grande a otra.",
                      "explanation": {
                              "title": "Refiere que el dolor cambia de una articulación grande a otra.",
                              "question": "Librito",
                              "body": [
                                      "Para pensar: ¿Por qué repetir el patrón migratorio en la revisión por sistemas no es redundancia? ¿Qué debe buscar el siguiente módulo para que el relato gane o pierda peso?",
                                      "Comentario clínico: En M2, que Camila vuelva a describir la migración no añade una articulación nueva; confirma que la secuencia era reproducible al explorar el sistema osteomuscular de forma dirigida. La utilidad pedagógica consiste en mostrar que un patrón de alto rendimiento debe verificarse, no solo escucharse una vez. El dato sigue siendo subjetivo y no autoriza llamar sinovitis a lo que aún no se ha explorado.",
                                      "Integración del caso: El examen físico posterior aportó la pieza que faltaba: signos objetivos en la rodilla izquierda y ausencia de sinovitis activa en la derecha. Esa combinación validó la trayectoria sin convertir el relato inicial en signo físico retrospectivo. Al integrar el caso completo, la migración se vuelve un puente entre experiencia de la paciente, localización objetiva y mecanismo postinfeccioso.",
                                      "Al contrastar hipótesis: Para la hipótesis principal, la repetición dirigida fortalece una cadena temporal coherente. La alternativa reactiva conserva competencia porque también puede ser inflamatoria, pero el patrón y el posterior territorio cardíaco la tensionan. En una amenaza infecciosa articular, una articulación fija, muy destructiva o con deterioro sistémico desproporcionado reorganizaría el diferencial; por eso la migración no debe usarse para dejar de vigilar evolución y seguridad."
                              ]
                      }
              },
              {
                      "id": "M7-M2-04",
                      "findingId": "dato-ef-cv-01",
                      "text": "Refiere sensación de corazón rápido con esfuerzo.",
                      "explanation": {
                              "title": "Refiere sensación de corazón rápido con esfuerzo.",
                              "question": "Librito",
                              "body": [
                                      "Para pensar: ¿Qué convierte una palpitación subjetiva en un dato que exige examen cardiovascular, aun sin ritmo documentado ni falta de aire en reposo?",
                                      "Comentario clínico: La sensación de corazón rápido no equivale a arritmia, y en M2 tampoco localizaba una lesión valvular. Su valor en Camila surgía de aparecer en una niña previamente capaz de subir escaleras sin limitación, durante un síndrome inflamatorio que ya no se explicaba cómodamente como dolor local. La pregunta correcta no era “¿qué arritmia tiene?”, sino “¿qué cambio cardiovascular o sistémico vuelve este esfuerzo diferente?”.",
                                      "Integración del caso: Después, el examen auscultatorio, el ECG y la ecocardiografía mostraron que había un componente cardíaco real. La ausencia de ortopnea, edema y estertores evitó interpretar la palpitación como prueba de falla congestiva. En conjunto, el hallazgo fue una alarma funcional que llevó al territorio correcto antes de que existieran los resultados que permitirían caracterizarlo.",
                                      "Al contrastar hipótesis: La hipótesis principal gana porque ahora debe explicar articulaciones y corazón con una misma cadena. La alternativa articular aislada queda incompleta mientras no explique el cambio funcional. La amenaza endovascular mantiene relevancia porque fiebre y una futura lesión valvular podrían producir síntomas similares, de modo que el examen y la microbiología no se sustituyen por la impresión subjetiva. Si la palpitación ocurriera en reposo con síncope o irregularidad documentada, la jerarquía de riesgos cambiaría."
                              ]
                      }
              }
      ],
      "illnessActual": {
        "expected": "Paciente de 12 años previamente funcional, con síndrome febril inflamatorio de seis días y dolor migratorio de grandes articulaciones tras episodio faríngeo no tratado, en contexto de exposición estrecha, con palpitaciones y menor tolerancia al esfuerzo, sin falta de aire en reposo ni síntomas congestivos referidos.",
        "essentialElements": [
          "Basal articular y cardiovascular previamente conservado, exposición domiciliaria y escolar, y episodio faríngeo remoto no tratado.",
          "Patrón migratorio con fiebre y cambio funcional de esfuerzo; persiste incertidumbre anatómica y no se incorporan signos físicos ni pruebas futuras."
        ]
      },
      "tier3": {
        "leader": {
          "diagnosis": "Fiebre reumática aguda con posible carditis.",
          "rationale": "La historia basal sin artritis persistente ni cardiopatía conocida se conecta con una exposición faríngea no tratada y la transición migratoria de grandes articulaciones. El deterioro de esfuerzo no demuestra todavía lesión cardíaca, pero obliga a buscarla. El límite continúa siendo la ausencia de signos físicos y pruebas objetivas. El siguiente puente es la exploración articular y cardiovascular."
        },
        "alternative": {
          "diagnosis": "Artritis reactiva postestreptocócica.",
          "rationale": "Sigue explicando una artritis inflamatoria tras infección faríngea y por eso compite. Pierde coherencia relativa si la exploración demuestra una lesión valvular nueva o hallazgos de conducción; esos datos todavía no están disponibles en M2."
        },
        "cannotMiss": {
          "diagnosis": "Proceso endovascular infeccioso con potencial lesión valvular.",
          "rationale": "La fiebre y los síntomas de esfuerzo preservan una obligación de seguridad aunque no existan puerta de entrada conocida, disnea de reposo ni antecedentes invasivos. El examen físico debe determinar si hay hallazgo cardíaco nuevo y el módulo siguiente deberá resolver la necesidad de microbiología."
        }
      }
    },
    "m3": {
      "title": "Módulo 3 — Examen físico",
      "sourceComparison": {
        "examenFisico": {
          "expectedSelected": ["dato-efis-gen-03", "dato-efis-piel-01", "dato-efis-far-01", "dato-efis-far-02", "dato-efis-cue-01", "dato-efis-cue-02", "dato-efis-cue-04", "dato-efis-tor-02", "dato-efis-tor-03", "dato-efis-pul-01", "dato-efis-pul-04", "dato-efis-cor-03", "dato-efis-cor-04", "dato-efis-vas-03", "dato-efis-ost-01", "dato-efis-ost-02", "dato-efis-ost-03", "dato-efis-ost-04", "dato-efis-ost-05", "dato-efis-ext-01", "dato-efis-ext-04", "dato-efis-neu-04"],
          "criticalMisses": ["dato-efis-cor-05"],
          "lowValueIfSelected": ["dato-efis-gen-02", "dato-efis-piel-03", "dato-efis-ojo-04", "dato-efis-oid-02", "dato-efis-nar-02", "dato-efis-boc-02", "dato-efis-cue-05", "dato-efis-gan-01", "dato-efis-tor-04", "dato-efis-pul-02", "dato-efis-vas-01", "dato-efis-abd-03", "dato-efis-ext-02", "dato-efis-neu-02"],
          "rationale": ""
        }
      },
      "module7Findings": [
              {
                      "id": "M7-M3-01",
                      "findingId": "dato-efis-ost-05",
                      "text": "Rodilla derecha sin sinovitis activa al examen.",
                      "explanation": {
                              "title": "Rodilla derecha sin sinovitis activa al examen.",
                              "question": "Librito",
                              "body": [
                                      "Para pensar: ¿Por qué una articulación actualmente sin sinovitis puede ser más informativa que una articulación dolorosa? ¿Qué patrón está ayudando a confirmar?",
                                      "Comentario clínico: En Camila, este hallazgo no es una normalidad decorativa. Se vuelve informativo porque la rodilla derecha había formado parte de la historia reciente y ahora no muestra sinovitis activa, mientras la rodilla izquierda sí concentra signos inflamatorios. La comparación entre articulaciones captura un cambio de localización que el examen físico puede verificar sin depender únicamente del relato.",
                                      "Integración del caso: Junto con derrame, temperatura local, dolor a movilización y limitación de flexión en la rodilla izquierda, la ausencia de actividad en la derecha convierte la cronología en una distribución objetiva. Este paso evita dos errores: tratar cada articulación como episodio independiente y transformar de manera retrospectiva un relato subjetivo en signo. Al integrar el caso completo, esa migración se conecta con la evidencia postestreptocócica y el compromiso valvular.",
                                      "Al contrastar hipótesis: La hipótesis principal gana economía explicativa al unir tiempo, articulaciones y corazón. La alternativa reactiva puede conservar artritis, pero debe explicar por qué aparece el hallazgo valvular. La amenaza infecciosa articular pierde ajuste si el proceso no es persistente en una sola articulación, aunque no queda anulada: una evolución hacia monoartritis fija, destrucción o sepsis haría cambiar de inmediato la lectura y las pruebas requeridas."
                              ]
                      }
              },
              {
                      "id": "M7-M3-02",
                      "findingId": "dato-efis-cor-05",
                      "text": "Soplo pansistólico grado 3/6 en ápex.",
                      "explanation": {
                              "title": "Soplo pansistólico grado 3/6 en ápex.",
                              "question": "Librito",
                              "body": [
                                      "Para pensar: ¿Qué pregunta anatómica abre un soplo pansistólico apical en este caso? ¿Por qué no basta el soplo para decidir su etiología?",
                                      "Comentario clínico: En M3, el soplo fue el punto de inflexión porque añadió un hallazgo objetivo en el territorio que los síntomas de esfuerzo habían obligado a explorar. Por su localización y temporalidad, sugería regurgitación mitral y justificaba caracterización estructural. No cuantificaba la lesión, no demostraba el mecanismo inflamatorio y no distinguía por sí solo una causa postestreptocócica de una endovascular u otra valvulopatía.",
                                      "Integración del caso: La ecocardiografía posterior documentó insuficiencia mitral moderada, coaptación incompleta y función sistólica ventricular izquierda preservada. Esos resultados explican por qué el hallazgo auscultatorio debía cambiar la prioridad de la evaluación sin convertirlo en diagnóstico definitivo en el momento del examen. La cadena completa enlaza faringitis remota, migración articular, soplo y lesión valvular, mientras la microbiología conserva la tarea de evaluar una amenaza alternativa.",
                                      "Al contrastar hipótesis: Para la hipótesis principal, el soplo une el cambio funcional con un órgano objetivo. Para la alternativa reactiva aislada, crea una brecha que ya no puede ignorarse. Para la amenaza endovascular, es un dato de seguridad importante pero no confirmatorio; los hemocultivos y la ausencia de masa posteriormente reducen su probabilidad sin permitir que el soplo se interprete como prueba exclusiva de una sola causa. Si el soplo hubiera sido funcional y la ecocardiografía normal, el Top 3 habría necesitado reordenarse."
                              ]
                      }
              },
              {
                      "id": "M7-M3-03",
                      "findingId": "dato-efis-pul-04",
                      "text": "Sin estertores a la auscultación.",
                      "explanation": {
                              "title": "Sin estertores a la auscultación.",
                              "question": "Librito",
                              "body": [
                                      "Para pensar: ¿Qué aspecto de la gravedad actual se calibra con pulmones sin estertores? ¿Qué problema importante permanece abierto a pesar de este negativo?",
                                      "Comentario clínico: La ausencia de estertores no contradice un hallazgo valvular. En Camila, delimita una cosa específica: en esta evaluación no había evidencia auscultatoria de congestión pulmonar franca. El error sería usar un examen pulmonar sin estertores para descartar compromiso cardíaco, cuando el problema hasta ese momento era caracterizar una posible lesión mitral y determinar si ya estaba produciendo descompensación.",
                                      "Integración del caso: Después, la función ventricular preservada, la ausencia de edema periférico y la saturación conservada completaron una imagen de afectación valvular sin insuficiencia congestiva manifiesta. Esa diferencia es clínica y pedagógica: una lesión estructural puede requerir ingreso, evaluación y seguimiento antes de que se exprese como edema pulmonar. El hallazgo permite calibrar soporte y vigilancia, no minimizar la necesidad de estudiar la válvula.",
                                      "Al contrastar hipótesis: En la hipótesis principal, reduce la gravedad congestiva inmediata sin reducir la necesidad de documentar carditis. En la alternativa reactiva, no aporta una explicación del soplo. Para la amenaza endovascular, tampoco descarta lesión valvular; solo indica que no hay un patrón auscultatorio de edema pulmonar en ese momento. Si aparecieran estertores, hipoxemia o disnea en reposo, cambiarían monitorización y destino, no solo la etiqueta diagnóstica."
                              ]
                      }
              },
              {
                      "id": "M7-M3-04",
                      "findingId": "dato-efis-neu-04",
                      "text": "Sin movimientos coreiformes observados.",
                      "explanation": {
                              "title": "Sin movimientos coreiformes observados.",
                              "question": "Librito",
                              "body": [
                                      "Para pensar: ¿Cómo se usa una manifestación ausente dentro de un síndrome multisistémico sin convertir esa ausencia en un criterio de exclusión?",
                                      "Comentario clínico: No observar movimientos coreiformes informa sobre una manifestación neurológica en ese momento, no sobre la inexistencia de toda la cadena postestreptocócica. En Camila, este negativo debía evitar dos extremos: ignorar el examen neurológico por concentrarse en articulaciones y corazón, o usar su normalidad para descartar un proceso que puede expresarse de manera parcial y temporalmente variable.",
                                      "Integración del caso: La historia, el examen articular, el soplo y los estudios posteriores mostraron que el caso se organizaba por otros componentes. La ausencia de movimientos coreiformes queda entonces como dato de fenotipo y de seguimiento, no como un vacío que deshace la explicación central. Su presencia habría ampliado el compromiso clínico, pero su ausencia no elimina la necesidad de integrar los datos que sí están presentes.",
                                      "Al contrastar hipótesis: Para la hipótesis principal, disminuye la probabilidad de manifestación neurológica actual sin afectar la coherencia de articulaciones, inflamación y válvula. Para la alternativa reactiva aporta poco discriminativamente. Para la amenaza infecciosa tampoco es un dato de exclusión. Si aparecieran movimientos involuntarios, deterioro del estado mental o focalidad, el caso requeriría revalorar mecanismo, seguridad y prioridad de evaluación neurológica."
                              ]
                      }
              }
      ],
      "illnessActual": {
        "expected": "Paciente de 12 años con síndrome febril inflamatorio y artritis migratoria de grandes articulaciones, ahora con sinovitis objetiva en la articulación activa y soplo apical pansistólico de nueva detección, sin hallazgos clínicos de congestión ni hipoperfusión.",
        "essentialElements": [
          "Hallazgo articular objetivo en la articulación activa y ausencia de sinovitis en una articulación previamente comprometida, compatibles con la trayectoria migratoria ya conocida.",
          "Hallazgo auscultatorio nuevo que obliga a caracterizar anatomía y conducción, manteniendo evaluación microbiológica de seguridad sin anticipar resultados."
        ]
      },
      "tier3": {
        "leader": {
          "diagnosis": "Fiebre reumática aguda con carditis.",
          "rationale": "La migración referida ahora se corresponde con una articulación activa y otra previamente afectada sin sinovitis actual. El soplo pansistólico apical crea una conexión cardíaca objetiva que permite que una sola cadena explique articulaciones, fiebre y repercusión de esfuerzo. Aún requiere confirmar exposición antecedente y caracterizar la válvula; el puente es serología, ECG y ecocardiografía Doppler."
        },
        "alternative": {
          "diagnosis": "Artritis reactiva postestreptocócica.",
          "rationale": "Mantiene peso por la infección antecedente y la artritis. Su tensión central es que el hallazgo valvular nuevo no queda bien explicado por una artritis reactiva aislada. La ecocardiografía y la integración de criterios serán los discriminadores decisivos."
        },
        "cannotMiss": {
          "diagnosis": "Endocarditis infecciosa con afectación valvular.",
          "rationale": "La combinación de fiebre y soplo nuevo obliga a no anclarse. La secuencia migratoria postfaríngea es más congruente con el principal, pero no sustituye la evaluación microbiológica. Deben obtenerse hemocultivos y revisar ecocardiografía antes de asumir que todo hallazgo valvular tiene un mecanismo único."
        }
      }
    },
    "m4": {
      "title": "Módulo 4 — Paraclínicos",
      "sourceComparison": {
        "paraclinicos": {
          "expectedSelected": ["dato-par-hem-01", "dato-par-bio-01", "dato-par-inf-01", "dato-par-inf-02", "dato-par-gas-01", "dato-par-gas-04", "dato-par-mic-01", "dato-par-mic-02", "dato-par-mic-04", "dato-par-mic-06", "dato-par-mic-07", "dato-par-mic-08", "dato-par-mic-09", "dato-par-ecg-01", "dato-par-ecg-02", "dato-par-ecg-03", "dato-par-eco-02", "dato-par-eco-03", "dato-par-eco-04", "dato-par-eco-06"],
          "criticalMisses": ["dato-par-mic-03", "dato-par-mic-05", "dato-par-eco-01"],
          "lowValueIfSelected": ["dato-par-hem-02", "dato-par-hem-03", "dato-par-hem-04", "dato-par-bio-02", "dato-par-bio-03", "dato-par-coag-01", "dato-par-inf-03", "dato-par-lip-01", "dato-par-lip-02", "dato-par-lip-03", "dato-par-lip-04", "dato-par-uri-01", "dato-par-uri-02", "dato-par-uri-03", "dato-par-gas-02", "dato-par-gas-03", "dato-par-ecg-04", "dato-par-eco-05"],
          "rationale": ""
        }
      },
      "module7Findings": [
              {
                      "id": "M7-M4-01",
                      "findingId": "dato-par-inf-01",
                      "text": "Velocidad de sedimentación globular: 78 mm/h.",
                      "explanation": {
                              "title": "Velocidad de sedimentación globular: 78 mm/h.",
                              "question": "Librito",
                              "body": [
                                      "Para pensar: ¿Qué parte del problema responde un reactante elevado y qué parte queda completamente sin responder si se interpreta de forma aislada?",
                                      "Comentario clínico: En Camila, una velocidad de sedimentación elevada apoya que existe un proceso inflamatorio activo, pero no dice por qué apareció ni dónde está la lesión más relevante. Su error de lectura más peligroso sería convertir inflamación en diagnóstico y detener el razonamiento en una categoría tan amplia que puede acompañar tanto procesos inmunomediados como infecciosos.",
                                      "Integración del caso: El resultado gana significado porque aparece junto con fiebre, artritis migratoria y, posteriormente, evidencia de exposición previa y lesión mitral. Así, ubica la intensidad del terreno inflamatorio dentro de una cadena ya sugerida por la historia. No reemplaza serología, ECG, ecocardiografía ni hemocultivos; cada una responde una pregunta distinta que la velocidad de sedimentación no puede resolver.",
                                      "Al contrastar hipótesis: Para la hipótesis principal, es compatible con actividad inflamatoria pero no decide etiología. Para la alternativa reactiva, también es compatible y por eso no separa ambas. Para la amenaza endovascular, mantiene la necesidad de no asumir un mecanismo estéril solo por tener migración articular. Si los reactantes fueran normales, la explicación inflamatoria perdería apoyo, pero una normalidad aislada no borraría los hallazgos clínicos y estructurales ya presentes."
                              ]
                      }
              },
              {
                      "id": "M7-M4-02",
                      "findingId": "dato-par-mic-01",
                      "text": "Prueba rápida faríngea para estreptococo del grupo A: negativa.",
                      "explanation": {
                              "title": "Prueba rápida faríngea para estreptococo del grupo A: negativa.",
                              "question": "Librito",
                              "body": [
                                      "Para pensar: ¿Qué periodo clínico examina una prueba faríngea tomada ahora? ¿Puede responder por sí sola si hubo exposición semanas antes?",
                                      "Comentario clínico: La prueba rápida negativa responde principalmente a la presencia detectable de estreptococo faríngeo en el momento de la toma; no reconstruye por sí sola un episodio remoto. En Camila, interpretarla como negación del antecedente habría sido un error de desajuste temporal: la pregunta del caso no era solo si tenía faringitis activa hoy, sino si existía evidencia de una exposición previa capaz de conectarse con el intervalo y el síndrome posterior.",
                                      "Integración del caso: El cultivo faríngeo sin desarrollo fue concordante con ausencia de actividad actual, mientras antiestreptolisina O y anti-DNasa B elevados aportaron otra clase de información sobre exposición previa. Esta secuencia enseña que resultados aparentemente opuestos pueden ser coherentes cuando responden preguntas temporales distintas. La prueba rápida no debilita automáticamente la cadena postinfecciosa; evita tratar una faringitis activa no demostrada como si fuera el mecanismo presente.",
                                      "Al contrastar hipótesis: Para la hipótesis principal, el resultado obliga a buscar documentación de exposición previa sin cerrar la puerta por un negativo actual. Para la alternativa reactiva tiene la misma limitación temporal. Para la amenaza endovascular, aporta poco directamente y no sustituye hemocultivos. Si la prueba faríngea hubiera sido positiva en M4, habría abierto una cuestión distinta sobre actividad actual, pero tampoco explicaría por sí sola la lesión valvular ni desplazaría la necesidad de microbiología endovascular."
                              ]
                      }
              },
              {
                      "id": "M7-M4-03",
                      "findingId": "dato-par-mic-03",
                      "text": "Antiestreptolisina O: 845 UI/mL.",
                      "explanation": {
                              "title": "Antiestreptolisina O: 845 UI/mL.",
                              "question": "Librito",
                              "body": [
                                      "Para pensar: ¿Qué gana esta serología al compararse con su límite local y con la cronología? ¿Qué afirmación seguiría siendo excesiva incluso con un título elevado?",
                                      "Comentario clínico: La antiestreptolisina O elevada, frente al límite local registrado, aporta evidencia de exposición estreptocócica previa cuando se lee con el intervalo clínico de Camila. No identifica el sitio exacto del episodio ni convierte una exposición previa en infección activa. Tampoco, por sí sola, decide si la lesión cardíaca tiene un mecanismo determinado. Su peso proviene de conectar un antecedente temporal con una pieza objetiva, no de funcionar como etiqueta diagnóstica autónoma.",
                                      "Integración del caso: La concordancia con anti-DNasa B elevada, artritis migratoria, PR prolongado y regurgitación mitral completa una red de datos complementarios. Cada uno añade una conexión diferente: exposición previa, inflamación, conducción y estructura. El resultado explica por qué el relato faríngeo de M1 debía tomarse en serio sin pretender que el estudiante hubiera podido conocer este respaldo cuando elaboró la primera hipótesis.",
                                      "Al contrastar hipótesis: Para la hipótesis principal, fortalece el puente entre evento antecedente y síndrome posterior. Para la alternativa reactiva también es compatible, de modo que no la elimina. Para la amenaza endovascular no es un refutador directo; solo vuelve más coherente la explicación postestreptocócica al compararla con microbiología y ecocardiografía. Si la serología fuera normal o discordante, la historia no se invalidaría automáticamente, pero la arquitectura diagnóstica requeriría revisar qué evidencia de exposición queda disponible y cuánto peso conservan las otras hipótesis."
                              ]
                      }
              },
              {
                      "id": "M7-M4-04",
                      "findingId": "dato-par-ecg-03",
                      "text": "ECG de 12 derivaciones: intervalo PR 220 ms.",
                      "explanation": {
                              "title": "ECG de 12 derivaciones: intervalo PR 220 ms.",
                              "question": "Librito",
                              "body": [
                                      "Para pensar: ¿Qué dimensión nueva agrega un PR prolongado cuando ya existe un soplo? ¿Por qué sería un error contar ambos como la misma evidencia?",
                                      "Comentario clínico: El intervalo PR prolongado es un dato de conducción. En Camila no describe la válvula ni cuantifica la regurgitación; añade un territorio eléctrico al caso. Su importancia está en mostrar que el problema no se limita a dolor articular y a un soplo, pero no debe convertirse en una pieza que se sume mecánicamente a la lesión valvular como si fueran duplicados de la misma información.",
                                      "Integración del caso: Después de la exploración, el ECG aporta una correlación objetiva para la taquicardia y el cambio funcional; la ecocardiografía, por otra parte, demuestra la lesión mitral. Al integrar el caso completo, ambas pruebas se complementan porque responden preguntas diferentes. Esta separación evita el doble conteo y permite que el razonamiento sea más riguroso: inflamación, exposición previa, conducción y estructura deben tener funciones distintas dentro de la misma cadena.",
                                      "Al contrastar hipótesis: Para la hipótesis principal, aumenta la coherencia de compromiso cardíaco sin reemplazar la prueba estructural. Para la alternativa reactiva aislada, agrega una tensión que no explica bien. Para la amenaza endovascular, no actúa como exclusión ni confirmación; se necesita la microbiología y el patrón ecocardiográfico. Si el PR fuese normal, el compromiso valvular seguiría necesitando la misma atención; simplemente faltaría esta dimensión eléctrica de apoyo."
                              ]
                      }
              },
              {
                      "id": "M7-M4-05",
                      "findingId": "dato-par-eco-01",
                      "text": "Ecocardiografía Doppler: insuficiencia mitral moderada.",
                      "explanation": {
                              "title": "Ecocardiografía Doppler: insuficiencia mitral moderada.",
                              "question": "Librito",
                              "body": [
                                      "Para pensar: ¿Qué problema convierte en objetivo este estudio y qué parte etiológica permanece abierta aun después de documentar la lesión?",
                                      "Comentario clínico: La ecocardiografía transforma la sospecha auscultatoria en lesión estructural documentada: existe regurgitación mitral de grado moderado. En Camila, este resultado explica por qué el cansancio y las palpitaciones de esfuerzo no debían considerarse un acompañante inespecífico de la fiebre. Sin embargo, una válvula regurgitante no lleva escrita su causa; el estudio identifica el territorio y la magnitud funcional, no sustituye la integración de historia, serología, conducción y microbiología.",
                                      "Integración del caso: La coaptación mitral incompleta y la función ventricular preservada ayudan a situar la lesión: hay compromiso valvular objetivo sin datos de disfunción sistólica ventricular izquierda. Sumado a la secuencia articular, la evidencia de exposición previa y el PR prolongado, el resultado desplaza la alternativa articular aislada. Al mismo tiempo, la ausencia de masa valvular y los hemocultivos seriados negativos permiten reducir de modo razonado la explicación endovascular, sin convertir esa reducción en certeza absoluta.",
                                      "Al contrastar hipótesis: Para la hipótesis principal, es el dato estructural que integra el territorio cardíaco con el resto de la cadena. Para la alternativa reactiva, crea una brecha importante porque una artritis aislada no explica bien la lesión mitral y la conducción. Para la amenaza endovascular, confirma que hay una válvula comprometida pero no decide el mecanismo; la diferencia depende de microbiología, imagen y evolución. Si la ecocardiografía no hubiera mostrado regurgitación, el caso mantendría el patrón postinfeccioso articular, pero la prioridad cardíaca y el Top 3 se reorganizarían."
                              ]
                      }
              },
              {
                      "id": "M7-M4-06",
                      "findingId": "dato-par-mic-07",
                      "text": "Primer hemocultivo: sin desarrollo a cinco días.",
                      "explanation": {
                              "title": "Primer hemocultivo: sin desarrollo a cinco días.",
                              "question": "Librito",
                              "body": [
                                      "Para pensar: ¿Qué puede reducir un hemocultivo negativo aislado y qué no puede excluir cuando el motivo para buscarlo fue fiebre más soplo?",
                                      "Comentario clínico: Un primer hemocultivo sin desarrollo reduce la probabilidad de bacteriemia documentable en esa muestra, pero no es una autorización para borrar una amenaza endovascular. En Camila, la indicación de obtener microbiología nació del hallazgo de fiebre con soplo nuevo, no de que la hipótesis infecciosa fuera la más probable. La lectura correcta exige distinguir “menos probable” de “descartada”.",
                                      "Integración del caso: El segundo y tercer hemocultivos también fueron negativos y la ecocardiografía no describió masa valvular. En conjunto, esos datos reducen la amenaza de una explicación endovascular y permiten que la red postestreptocócica gane jerarquía. Ninguno de los elementos funciona solo: la serie microbiológica se interpreta con la ecocardiografía y con una evolución clínica que no introduce bacteriemia, sepsis periférica ni lesión nueva.",
                                      "Al contrastar hipótesis: Para la hipótesis principal, este hallazgo evita que se omita una alternativa de seguridad mientras se construye la explicación integradora. Para la alternativa reactiva no es decisivo. Para la amenaza endovascular, es una pieza de reducción progresiva, no una exclusión instantánea. Si apareciera bacteriemia, fiebre persistente discordante o nueva evidencia estructural, la amenaza tendría que reabrirse aunque los resultados previos fueran negativos; el contrafactual enseña por qué la vigilancia sigue formando parte del plan."
                              ]
                      }
              }
      ],
      "illnessActual": {
        "expected": "Paciente de 12 años con síndrome inflamatorio migratorio, evidencia serológica de exposición estreptocócica previa, alteración de conducción y regurgitación valvular documentada; la evaluación microbiológica de seguridad ya fue iniciada, pero sus resultados definitivos no están disponibles en esta etapa.",
        "essentialElements": [
          "Reactantes inflamatorios, títulos serológicos por encima de límites locales, alteración de conducción y regurgitación mitral documentada como elementos disponibles en M4.",
          "Muestras microbiológicas seriadas obtenidas antes de antimicrobianos, con disponibilidad definitiva diferida; no se usan para cerrar ni reducir una amenaza durante esta etapa."
        ]
      },
      "tier3": {
        "leader": {
          "diagnosis": "Fiebre reumática aguda con carditis.",
          "rationale": "Una misma red conecta artritis migratoria, latencia faríngea, inflamación objetiva, evidencia serológica de exposición estreptocócica previa, alteración de conducción y regurgitación mitral documentada. La ecocardiografía añade un hallazgo estructural que cambia la jerarquía clínica. El límite operativo es que la evaluación microbiológica de seguridad está en curso, no resuelta. La decisión consecuente es mantener vigilancia hospitalaria y valoración especializada mientras se completa la información diferida."
        },
        "alternative": {
          "diagnosis": "Artritis reactiva postestreptocócica.",
          "rationale": "La exposición previa y artritis siguen siendo compatibles, pero la alteración de conducción y la regurgitación mitral objetiva reducen la capacidad de esta alternativa para explicar la totalidad del síndrome. Permanece como alternativa si los componentes cardíacos se reinterpretaran o fueran no concluyentes, escenario que no describe el expediente actual."
        },
        "cannotMiss": {
          "diagnosis": "Endocarditis infecciosa con afectación valvular.",
          "rationale": "Fiebre y lesión valvular justifican obtener microbiología adecuada antes de anclar el razonamiento. En M4, las muestras seriadas están en incubación y no existe un resultado definitivo que disminuya la amenaza. La hipótesis debe mantenerse hasta que la evolución clínica y los resultados diferidos permitan reclasificarla de manera temporalmente honesta."
        }
      }
    },
    "m5": {
      "title": "Módulo 5 — Pausa diagnóstica",
      "expectedVenn": {
        "dx1": "Fiebre reumática aguda con carditis.",
        "dx2": "Artritis reactiva postestreptocócica.",
        "dx3": "Endocarditis infecciosa con afectación valvular.",
        "pivotFinding": "La combinación de artritis migratoria, evidencia serológica de exposición estreptocócica previa, PR prolongado y regurgitación mitral moderada transforma un patrón inflamatorio inicial en una cadena clínica integrada.",
        "sharedFinding": "Fiebre, reactantes elevados, artritis y taquicardia pueden aparecer en más de una hipótesis y no deciden solas el diagnóstico.",
        "decisiveAgainstDx2": "La alteración de conducción y la lesión valvular objetiva explican un compromiso cardíaco que una artritis reactiva aislada no organiza de forma satisfactoria.",
        "decisiveAgainstDx3": "Tres hemocultivos sin desarrollo a cinco días y la ausencia de masa valvular descrita reducen de forma importante una explicación endovascular infecciosa, aunque la vigilancia depende de la evolución clínica."
      }
    },
    "m6": {
      "title": "Módulo 6 — Manejo clínico",
      "expectedPlanSummary": "",
      "management": {
        "expected": [
          {
            "label": "ACT-01 — Ingreso hospitalario pediátrico con monitorización clínica y cardiovascular",
            "reason": "La combinación de fiebre, taquicardia persistente, descenso del umbral de esfuerzo y regurgitación mitral moderada no permite alta basada en oxigenación o perfusión conservadas aisladas. El objetivo es detectar deterioro hemodinámico, congestión, cambios de ritmo o progresión del compromiso valvular. Prioridad: Inmediata Momento: Tras la integración de M4. Condiciones: Escalar si aparece disnea en reposo, congestión, hipoxemia, hipotensión, mala perfusión, dolor torácico, síncope o deterioro del ritmo. [REF-03; sección de evaluación clínica y ecocardiografía; verificada 2026-07-04]"
          },
          {
            "label": "ACT-02 — Integración diagnóstica estructurada por equipo pediátrico y cardiología",
            "reason": "La artritis migratoria, la evidencia serológica de infección estreptocócica previa, el PR prolongado y la regurgitación mitral deben ser integrados como una sola cadena en vez de tratar cada hallazgo como un problema independiente. Prioridad: Alta Momento: Durante la hospitalización inicial, después de contar con los resultados de M4. Condiciones: No doble contar hallazgos que expresan el mismo componente clínico y reabrir el diferencial si la evolución deja de ser congruente. [REF-03; criterios diagnósticos y ecocardiografía; REF-08; criterios revisados de Jones; verificados 2026-07-04]"
          },
          {
            "label": "ACT-03 — Mantener evaluación microbiológica de seguridad mientras se completa la observación",
            "reason": "Fiebre y lesión valvular nueva justificaron la obtención de hemocultivos y ecocardiografía. La serie sin desarrollo y la ausencia de masa disminuyen la amenaza endovascular, pero la conducta se modifica si surge bacteriemia, sepsis periférica, nueva lesión o evolución discordante. Prioridad: Alta Momento: Durante la fase inicial y ante cualquier cambio clínico. Condiciones: No interpretar un cultivo negativo aislado como exclusión total; revalorar la estrategia si aparecen hallazgos que cambien la probabilidad. [REF-03; evaluación diagnóstica; REF-05; correlación clínica; verificados 2026-07-04]"
          },
          {
            "label": "Viabilidad del seguimiento",
            "reason": "La lesión mitral objetiva, la alteración de conducción, la fiebre/taquicardia y la necesidad de vigilar una alternativa infecciosa impiden una disposición ambulatoria inicial segura. Prioridad: Antes del egreso Momento: Iniciar la coordinación durante la hospitalización y concretarla antes del alta. Condiciones: No proceder a alta si no existe enlace real con seguimiento pediátrico/cardiológico y plan de continuidad que la familia pueda ejecutar. [REF-04; continuidad preventiva y seguimiento; verificada 2026-07-04]"
          }
        ],
        "dangerousOmissions": [
          {
            "label": "Dar alta por estabilidad aparente",
            "reason": "La saturación y la perfusión conservadas no sustituyen la caracterización de una lesión valvular nueva ni la vigilancia de taquicardia y fiebre. Puede retrasar detección de deterioro cardiovascular y romper continuidad especializada. El error nace de usar un dato compartido o incompleto como si pudiera reemplazar la cronología, la correlación estructural y la reevaluación."
          },
          {
            "label": "Cerrar el caso por una prueba faríngea actual negativa",
            "reason": "Las pruebas faríngeas actuales responden a actividad presente, mientras la cronología y la serología buscan una exposición previa. Puede eliminar erróneamente la hipótesis integradora y retrasar documentación de compromiso cardíaco. El error nace de usar un dato compartido o incompleto como si pudiera reemplazar la cronología, la correlación estructural y la reevaluación."
          },
          {
            "label": "Tratar cada articulación como un problema aislado",
            "reason": "La secuencia migratoria es el dato que conecta la distribución articular con una cadena sistémica. Favorece anclaje musculoesquelético y omite el estudio del corazón. El error nace de usar un dato compartido o incompleto como si pudiera reemplazar la cronología, la correlación estructural y la reevaluación."
          },
          {
            "label": "Viabilidad del seguimiento",
            "reason": "La lesión mitral objetiva, la alteración de conducción, la fiebre/taquicardia y la necesidad de vigilar una alternativa infecciosa impiden una disposición ambulatoria inicial segura. Puede provocar falsa tranquilidad ante evolución clínica discordante. El error nace de usar un dato compartido o incompleto como si pudiera reemplazar la cronología, la correlación estructural y la reevaluación. 10.3 MONITORIZACION OMITIDA MONITORIZACION"
          }
        ],
        "monitoringOmitted": [
          {
            "label": "Temperatura y frecuencia cardíaca seriadas",
            "reason": "Persisten fiebre y taquicardia en la fase inicial. Si aumentan o no se explican por dolor/inflamación, reevaluar seguridad, perfusión, ritmo y amenaza infecciosa."
          },
          {
            "label": "Síntomas de esfuerzo y signos de congestión",
            "reason": "La paciente refiere palpitaciones y menor tolerancia al ejercicio con lesión valvular objetiva. Si aparece disnea en reposo, ortopnea, edema, hipoxemia o estertores, escalar evaluación y soporte."
          },
          {
            "label": "Ritmo y conducción",
            "reason": "El ECG registra PR prolongado y taquicardia. Si aparecen cambios de conducción, arritmia, síncope o inestabilidad, modificar nivel de monitorización y valoración cardiológica."
          },
          {
            "label": "Evolución microbiológica y clínica",
            "reason": "La hipótesis endovascular disminuye con cultivos negativos y ausencia de masa, pero no se elimina por un dato único. Si aparece bacteriemia, fiebre persistente discordante o nueva evidencia estructural, reabrir el diferencial y la estrategia diagnóstica."
          },
          {
            "label": "Viabilidad del seguimiento",
            "reason": "La lesión mitral objetiva, la alteración de conducción, la fiebre/taquicardia y la necesidad de vigilar una alternativa infecciosa impiden una disposición ambulatoria inicial segura. Si no hay enlace con controles y acceso al plan, no completar el alta; reorganizar coordinación asistencial. 10.4 DESTINO"
          }
        ],
        "destination": {
          "label": "Hospitalización pediátrica con evaluación cardiológica y enlace de continuidad especializada.",
          "reason": "La lesión mitral objetiva, la alteración de conducción, la fiebre/taquicardia y la necesidad de vigilar una alternativa infecciosa impiden una disposición ambulatoria inicial segura. Disnea en reposo, congestión, hipoxemia, deterioro de perfusión, hipotensión, síncope, nueva arritmia/conducción, bacteriemia o progresión estructural. Persistencia de fiebre o taquicardia sin reevaluación, síntomas cardiovasculares de esfuerzo no caracterizados, falta de plan especializado, ausencia de red de seguimiento real o datos nuevos que reabran la amenaza endovascular."
        }
      }
    }
  },
  "management": {
    "expected": [
      {
        "label": "ACT-01 — Ingreso hospitalario pediátrico con monitorización clínica y cardiovascular",
        "reason": "La combinación de fiebre, taquicardia persistente, descenso del umbral de esfuerzo y regurgitación mitral moderada no permite alta basada en oxigenación o perfusión conservadas aisladas. El objetivo es detectar deterioro hemodinámico, congestión, cambios de ritmo o progresión del compromiso valvular. Prioridad: Inmediata Momento: Tras la integración de M4. Condiciones: Escalar si aparece disnea en reposo, congestión, hipoxemia, hipotensión, mala perfusión, dolor torácico, síncope o deterioro del ritmo. [REF-03; sección de evaluación clínica y ecocardiografía; verificada 2026-07-04]"
      },
      {
        "label": "ACT-02 — Integración diagnóstica estructurada por equipo pediátrico y cardiología",
        "reason": "La artritis migratoria, la evidencia serológica de infección estreptocócica previa, el PR prolongado y la regurgitación mitral deben ser integrados como una sola cadena en vez de tratar cada hallazgo como un problema independiente. Prioridad: Alta Momento: Durante la hospitalización inicial, después de contar con los resultados de M4. Condiciones: No doble contar hallazgos que expresan el mismo componente clínico y reabrir el diferencial si la evolución deja de ser congruente. [REF-03; criterios diagnósticos y ecocardiografía; REF-08; criterios revisados de Jones; verificados 2026-07-04]"
      },
      {
        "label": "ACT-03 — Mantener evaluación microbiológica de seguridad mientras se completa la observación",
        "reason": "Fiebre y lesión valvular nueva justificaron la obtención de hemocultivos y ecocardiografía. La serie sin desarrollo y la ausencia de masa disminuyen la amenaza endovascular, pero la conducta se modifica si surge bacteriemia, sepsis periférica, nueva lesión o evolución discordante. Prioridad: Alta Momento: Durante la fase inicial y ante cualquier cambio clínico. Condiciones: No interpretar un cultivo negativo aislado como exclusión total; revalorar la estrategia si aparecen hallazgos que cambien la probabilidad. [REF-03; evaluación diagnóstica; REF-05; correlación clínica; verificados 2026-07-04]"
      },
      {
        "label": "Viabilidad del seguimiento",
        "reason": "La lesión mitral objetiva, la alteración de conducción, la fiebre/taquicardia y la necesidad de vigilar una alternativa infecciosa impiden una disposición ambulatoria inicial segura. Prioridad: Antes del egreso Momento: Iniciar la coordinación durante la hospitalización y concretarla antes del alta. Condiciones: No proceder a alta si no existe enlace real con seguimiento pediátrico/cardiológico y plan de continuidad que la familia pueda ejecutar. [REF-04; continuidad preventiva y seguimiento; verificada 2026-07-04]"
      }
    ],
    "dangerousOmissions": [
      {
        "label": "Dar alta por estabilidad aparente",
        "reason": "La saturación y la perfusión conservadas no sustituyen la caracterización de una lesión valvular nueva ni la vigilancia de taquicardia y fiebre. Puede retrasar detección de deterioro cardiovascular y romper continuidad especializada. El error nace de usar un dato compartido o incompleto como si pudiera reemplazar la cronología, la correlación estructural y la reevaluación."
      },
      {
        "label": "Cerrar el caso por una prueba faríngea actual negativa",
        "reason": "Las pruebas faríngeas actuales responden a actividad presente, mientras la cronología y la serología buscan una exposición previa. Puede eliminar erróneamente la hipótesis integradora y retrasar documentación de compromiso cardíaco. El error nace de usar un dato compartido o incompleto como si pudiera reemplazar la cronología, la correlación estructural y la reevaluación."
      },
      {
        "label": "Tratar cada articulación como un problema aislado",
        "reason": "La secuencia migratoria es el dato que conecta la distribución articular con una cadena sistémica. Favorece anclaje musculoesquelético y omite el estudio del corazón. El error nace de usar un dato compartido o incompleto como si pudiera reemplazar la cronología, la correlación estructural y la reevaluación."
      },
      {
        "label": "Viabilidad del seguimiento",
        "reason": "La lesión mitral objetiva, la alteración de conducción, la fiebre/taquicardia y la necesidad de vigilar una alternativa infecciosa impiden una disposición ambulatoria inicial segura. Puede provocar falsa tranquilidad ante evolución clínica discordante. El error nace de usar un dato compartido o incompleto como si pudiera reemplazar la cronología, la correlación estructural y la reevaluación. 10.3 MONITORIZACION OMITIDA MONITORIZACION"
      }
    ],
    "monitoringOmitted": [
      {
        "label": "Temperatura y frecuencia cardíaca seriadas",
        "reason": "Persisten fiebre y taquicardia en la fase inicial. Si aumentan o no se explican por dolor/inflamación, reevaluar seguridad, perfusión, ritmo y amenaza infecciosa."
      },
      {
        "label": "Síntomas de esfuerzo y signos de congestión",
        "reason": "La paciente refiere palpitaciones y menor tolerancia al ejercicio con lesión valvular objetiva. Si aparece disnea en reposo, ortopnea, edema, hipoxemia o estertores, escalar evaluación y soporte."
      },
      {
        "label": "Ritmo y conducción",
        "reason": "El ECG registra PR prolongado y taquicardia. Si aparecen cambios de conducción, arritmia, síncope o inestabilidad, modificar nivel de monitorización y valoración cardiológica."
      },
      {
        "label": "Evolución microbiológica y clínica",
        "reason": "La hipótesis endovascular disminuye con cultivos negativos y ausencia de masa, pero no se elimina por un dato único. Si aparece bacteriemia, fiebre persistente discordante o nueva evidencia estructural, reabrir el diferencial y la estrategia diagnóstica."
      },
      {
        "label": "Viabilidad del seguimiento",
        "reason": "La lesión mitral objetiva, la alteración de conducción, la fiebre/taquicardia y la necesidad de vigilar una alternativa infecciosa impiden una disposición ambulatoria inicial segura. Si no hay enlace con controles y acceso al plan, no completar el alta; reorganizar coordinación asistencial. 10.4 DESTINO"
      }
    ],
    "destination": {
      "label": "Hospitalización pediátrica con evaluación cardiológica y enlace de continuidad especializada.",
      "reason": "La lesión mitral objetiva, la alteración de conducción, la fiebre/taquicardia y la necesidad de vigilar una alternativa infecciosa impiden una disposición ambulatoria inicial segura. Disnea en reposo, congestión, hipoxemia, deterioro de perfusión, hipotensión, síncope, nueva arritmia/conducción, bacteriemia o progresión estructural. Persistencia de fiebre o taquicardia sin reevaluación, síntomas cardiovasculares de esfuerzo no caracterizados, falta de plan especializado, ausencia de red de seguimiento real o datos nuevos que reabran la amenaza endovascular."
    }
  },
  "module7Evaluation": {
    "illnessComparison": {
      "student": "",
      "expert": "Paciente de 12 años con síndrome inflamatorio migratorio, evidencia serológica de exposición estreptocócica previa, alteración de conducción y regurgitación valvular documentada; la evaluación microbiológica de seguridad ya fue iniciada, pero sus resultados definitivos no están disponibles en esta etapa."
    },
    "tier3Comparison": {
      "student": "",
      "expert": "Principal: Fiebre reumática aguda con carditis.\nAlternativo: Artritis reactiva postestreptocócica.\nNo se puede perder: Endocarditis infecciosa con afectación valvular."
    },
    "phaseComparisons": [
      {
        "id": "m7_rc5_phase_m1",
        "phase": "m1",
        "title": "Triage e interrogatorio",
        "studentBinding": {
          "illnessField": "ill_m1",
          "tierFields": [
            "tier_m1_1",
            "tier_m1_2",
            "tier_m1_3"
          ],
          "selectedSources": [
            "Triage",
            "Interrogatorio"
          ]
        },
        "illnessComparison": {
          "student": "",
          "studentField": "ill_m1",
          "expert": "Camila, escolar de 12 años, inició seis días antes con dolor e hinchazón en el tobillo izquierdo, que mejoraron aproximadamente 24 horas después. Posteriormente presentó dolor e inflamación en la rodilla derecha y, tras mejorar esta, se instaló en la rodilla izquierda, con dificultad para caminar. Durante el mismo período ha tenido fiebre y cansancio; desde el día previo nota palpitaciones y necesidad de detenerse al subir escaleras. Tres semanas antes tuvo dolor de garganta con fiebre varios días y no recibió antibiótico. Como negativos pertinentes, niega síncope, dolor torácico, falta de aire en reposo, tos persistente, movimientos involuntarios y lesiones cutáneas nuevas."
        },
        "tier3Comparison": {
          "student": "",
          "studentFields": [
            "tier_m1_1",
            "tier_m1_2",
            "tier_m1_3"
          ],
          "expert": "Principal: Fiebre reumática aguda con posible compromiso cardíaco.\nAlternativo: Artritis reactiva postestreptocócica.\nNo se puede perder: Proceso infeccioso con potencial compromiso cardiovascular por definir."
        },
        "sections": [
          {
            "title": "Triage",
            "type": "findings",
            "rows": [
              {
                "id": "m7_rc5_m1_triage_01",
                "severity": "yellow",
                "studentText": "",
                "expertText": "El ingreso muestra fiebre y taquicardia con perfusión y oxigenación conservadas; el motivo de cansancio obliga a ampliar la historia sin convertir el triage en diagnóstico.",
                "expertNote": "El ingreso muestra fiebre y taquicardia con perfusión y oxigenación conservadas; el motivo de cansancio obliga a ampliar la historia sin convertir el triage en diagnóstico."
              }
            ]
          },
          {
            "title": "Interrogatorio",
            "type": "findings",
            "rows": [
              {
                "id": "m7_rc5_m1_interrogatorio_01",
                "severity": "yellow",
                "studentText": "",
                "expertText": "La secuencia de alivio en una articulación y aparición en otra, junto con el antecedente faríngeo y un cambio funcional de esfuerzo, organiza el problema mejor que la fiebre o el dolor aislados.",
                "expertNote": "La secuencia de alivio en una articulación y aparición en otra, junto con el antecedente faríngeo y un cambio funcional de esfuerzo, organiza el problema mejor que la fiebre o el dolor aislados."
              }
            ]
          }
        ]
      },
      {
        "id": "m7_rc5_phase_m2",
        "phase": "m2",
        "title": "Historial y examen funcional",
        "studentBinding": {
          "illnessField": "ill_m2",
          "tierFields": [
            "tier_m2_1",
            "tier_m2_2",
            "tier_m2_3"
          ],
          "selectedSources": [
            "Historial",
            "Examen funcional"
          ]
        },
        "illnessComparison": {
          "student": "",
          "studentField": "ill_m2",
          "expert": "Paciente de 12 años previamente funcional, con síndrome febril inflamatorio de seis días y dolor migratorio de grandes articulaciones tras episodio faríngeo no tratado, en contexto de exposición estrecha, con palpitaciones y menor tolerancia al esfuerzo, sin falta de aire en reposo ni síntomas congestivos referidos."
        },
        "tier3Comparison": {
          "student": "",
          "studentFields": [
            "tier_m2_1",
            "tier_m2_2",
            "tier_m2_3"
          ],
          "expert": "Principal: Fiebre reumática aguda con posible carditis.\nAlternativo: Artritis reactiva postestreptocócica.\nNo se puede perder: Proceso endovascular infeccioso con potencial lesión valvular."
        },
        "sections": [
          {
            "title": "Hallazgos integradores",
            "type": "findings",
            "rows": [
              {
                "id": "m7_rc5_m2_essential_01",
                "severity": "red",
                "studentText": "",
                "expertText": "Basal articular y cardiovascular previamente conservado, exposición domiciliaria y escolar, y episodio faríngeo remoto no tratado.",
                "expertNote": "La historia basal sin artritis persistente ni cardiopatía conocida se conecta con una exposición faríngea no tratada y la transición migratoria de grandes articulaciones. El deterioro de esfuerzo no demuestra todavía lesión cardíaca, pero obliga a buscarla. El límite continúa siendo la ausencia de signos físicos y pruebas objetivas. El siguiente puente es la exploración articular y cardiovascular."
              },
              {
                "id": "m7_rc5_m2_essential_02",
                "severity": "yellow",
                "studentText": "",
                "expertText": "Patrón migratorio con fiebre y cambio funcional de esfuerzo; persiste incertidumbre anatómica y no se incorporan signos físicos ni pruebas futuras.",
                "expertNote": "Sigue explicando una artritis inflamatoria tras infección faríngea y por eso compite. Pierde coherencia relativa si la exploración demuestra una lesión valvular nueva o hallazgos de conducción; esos datos todavía no están disponibles en M2."
              }
            ]
          }
        ]
      },
      {
        "id": "m7_rc5_phase_m3",
        "phase": "m3",
        "title": "Examen físico",
        "studentBinding": {
          "illnessField": "ill_m3",
          "tierFields": [
            "tier_m3_1",
            "tier_m3_2",
            "tier_m3_3"
          ],
          "selectedSources": [
            "Examen físico"
          ]
        },
        "illnessComparison": {
          "student": "",
          "studentField": "ill_m3",
          "expert": "Paciente de 12 años con síndrome febril inflamatorio y artritis migratoria de grandes articulaciones, ahora con sinovitis objetiva en la articulación activa y soplo apical pansistólico de nueva detección, sin hallazgos clínicos de congestión ni hipoperfusión."
        },
        "tier3Comparison": {
          "student": "",
          "studentFields": [
            "tier_m3_1",
            "tier_m3_2",
            "tier_m3_3"
          ],
          "expert": "Principal: Fiebre reumática aguda con carditis.\nAlternativo: Artritis reactiva postestreptocócica.\nNo se puede perder: Endocarditis infecciosa con afectación valvular."
        },
        "sections": [
          {
            "title": "Hallazgos del examen físico",
            "type": "findings",
            "rows": [
              {
                "id": "m7_rc5_m3_essential_01",
                "severity": "red",
                "studentText": "",
                "expertText": "Hallazgo articular objetivo en la articulación activa y ausencia de sinovitis en una articulación previamente comprometida, compatibles con la trayectoria migratoria ya conocida.",
                "expertNote": "La migración referida ahora se corresponde con una articulación activa y otra previamente afectada sin sinovitis actual. El soplo pansistólico apical crea una conexión cardíaca objetiva que permite que una sola cadena explique articulaciones, fiebre y repercusión de esfuerzo. Aún requiere confirmar exposición antecedente y caracterizar la válvula; el puente es serología, ECG y ecocardiografía Doppler."
              },
              {
                "id": "m7_rc5_m3_essential_02",
                "severity": "yellow",
                "studentText": "",
                "expertText": "Hallazgo auscultatorio nuevo que obliga a caracterizar anatomía y conducción, manteniendo evaluación microbiológica de seguridad sin anticipar resultados.",
                "expertNote": "Mantiene peso por la infección antecedente y la artritis. Su tensión central es que el hallazgo valvular nuevo no queda bien explicado por una artritis reactiva aislada. La ecocardiografía y la integración de criterios serán los discriminadores decisivos."
              }
            ]
          }
        ]
      },
      {
        "id": "m7_rc5_phase_m4",
        "phase": "m4",
        "title": "Paraclínicos",
        "studentBinding": {
          "illnessField": "ill_m4",
          "tierFields": [
            "tier_m4_1",
            "tier_m4_2",
            "tier_m4_3"
          ],
          "selectedSources": [
            "Paraclínicos"
          ]
        },
        "illnessComparison": {
          "student": "",
          "studentField": "ill_m4",
          "expert": "Paciente de 12 años con síndrome inflamatorio migratorio, evidencia serológica de exposición estreptocócica previa, alteración de conducción y regurgitación valvular documentada; la evaluación microbiológica de seguridad ya fue iniciada, pero sus resultados definitivos no están disponibles en esta etapa."
        },
        "tier3Comparison": {
          "student": "",
          "studentFields": [
            "tier_m4_1",
            "tier_m4_2",
            "tier_m4_3"
          ],
          "expert": "Principal: Fiebre reumática aguda con carditis.\nAlternativo: Artritis reactiva postestreptocócica.\nNo se puede perder: Endocarditis infecciosa con afectación valvular."
        },
        "sections": [
          {
            "title": "Hallazgos paraclínicos",
            "type": "findings",
            "rows": [
              {
                "id": "m7_rc5_m4_essential_01",
                "severity": "red",
                "studentText": "",
                "expertText": "Reactantes inflamatorios, títulos serológicos por encima de límites locales, alteración de conducción y regurgitación mitral documentada como elementos disponibles en M4.",
                "expertNote": "Una misma red conecta artritis migratoria, latencia faríngea, inflamación objetiva, evidencia serológica de exposición estreptocócica previa, alteración de conducción y regurgitación mitral documentada. La ecocardiografía añade un hallazgo estructural que cambia la jerarquía clínica. El límite operativo es que la evaluación microbiológica de seguridad está en curso, no resuelta. La decisión consecuente es mantener vigilancia hospitalaria y valoración especializada mientras se completa la información diferida."
              },
              {
                "id": "m7_rc5_m4_essential_02",
                "severity": "yellow",
                "studentText": "",
                "expertText": "Muestras microbiológicas seriadas obtenidas antes de antimicrobianos, con disponibilidad definitiva diferida; no se usan para cerrar ni reducir una amenaza durante esta etapa.",
                "expertNote": "La exposición previa y artritis siguen siendo compatibles, pero la alteración de conducción y la regurgitación mitral objetiva reducen la capacidad de esta alternativa para explicar la totalidad del síndrome. Permanece como alternativa si los componentes cardíacos se reinterpretaran o fueran no concluyentes, escenario que no describe el expediente actual."
              }
            ]
          }
        ]
      }
    ],
    "legacySections": [
      {
        "id": "m1_triage_interrogatorio",
        "title": "M1 — triage/interrogatorio",
        "type": "findings",
        "rows": [
          {
            "id": "m1_triage_interrogatorio_tier",
            "severity": "yellow",
            "studentText": "",
            "expertText": "Principal: Fiebre reumática aguda con posible compromiso cardíaco | Alternativo: Artritis reactiva postestreptocócica | No se puede perder: Proceso infeccioso con posible compromiso cardiovascular",
            "expertNote": "",
            "explanation": {
              "title": "Tier 3 experto",
              "question": "¿Qué compara?",
              "body": [
                "Principal: Fiebre reumática aguda con posible compromiso cardíaco | Alternativo: Artritis reactiva postestreptocócica | No se puede perder: Proceso infeccioso con posible compromiso cardiovascular"
              ]
            }
          }
        ]
      },
      {
        "id": "m2_historial_examen_funcional",
        "title": "M2 — historial/examen funcional",
        "type": "findings",
        "rows": [
          {
            "id": "m2_historial_examen_funcional_tier",
            "severity": "yellow",
            "studentText": "",
            "expertText": "Principal: Fiebre reumática aguda con posible carditis | Alternativo: Artritis reactiva postestreptocócica | No se puede perder: Proceso endovascular infeccioso con posible lesión valvular",
            "expertNote": "",
            "explanation": {
              "title": "Tier 3 experto",
              "question": "¿Qué compara?",
              "body": [
                "Principal: Fiebre reumática aguda con posible carditis | Alternativo: Artritis reactiva postestreptocócica | No se puede perder: Proceso endovascular infeccioso con posible lesión valvular"
              ]
            }
          }
        ]
      },
      {
        "id": "m3_examen_fisico",
        "title": "M3 — examen físico",
        "type": "findings",
        "rows": [
          {
            "id": "m3_examen_fisico_tier",
            "severity": "yellow",
            "studentText": "",
            "expertText": "Principal: Fiebre reumática aguda con carditis | Alternativo: Artritis reactiva postestreptocócica | No se puede perder: Endocarditis infecciosa con afectación valvular",
            "expertNote": "",
            "explanation": {
              "title": "Tier 3 experto",
              "question": "¿Qué compara?",
              "body": [
                "Principal: Fiebre reumática aguda con carditis | Alternativo: Artritis reactiva postestreptocócica | No se puede perder: Endocarditis infecciosa con afectación valvular"
              ]
            }
          }
        ]
      },
      {
        "id": "m4_paraclinicos",
        "title": "M4 — paraclínicos",
        "type": "findings",
        "rows": [
          {
            "id": "m4_paraclinicos_tier",
            "severity": "yellow",
            "studentText": "",
            "expertText": "Principal: Fiebre reumática aguda con carditis | Alternativo: Artritis reactiva postestreptocócica | No se puede perder: Endocarditis infecciosa con afectación valvular",
            "expertNote": "",
            "explanation": {
              "title": "Tier 3 experto",
              "question": "¿Qué compara?",
              "body": [
                "Principal: Fiebre reumática aguda con carditis | Alternativo: Artritis reactiva postestreptocócica | No se puede perder: Endocarditis infecciosa con afectación valvular"
              ]
            }
          }
        ]
      }
    ]
  },
  "clinicalReferences": [
    {
      "authority": "Centers for Disease Control and Prevention (CDC)",
      "document": "Diagnosing Acute Rheumatic Fever",
      "use": "Criterios de integración diagnóstica, evidencia de infección previa y uso de ecocardiografía Doppler.",
      "citation": "CDC. Diagnosing Acute Rheumatic Fever. Actualizado 2025-08-06."
    },
    {
      "authority": "Centers for Disease Control and Prevention (CDC)",
      "document": "Clinical Guidance for Acute Rheumatic Fever",
      "use": "Latencia postestreptocócica, presentaciones clínicas y continuidad preventiva sin incluir dosis en este caso.",
      "citation": "CDC. Clinical Guidance for Acute Rheumatic Fever. Actualizado 2025-08-05."
    },
    {
      "authority": "Harrison",
      "document": "Principios de Medicina Interna, 22.ª edición, capítulo 371",
      "use": "Fisiopatología postestreptocócica, latencia, artritis, carditis y lesión valvular.",
      "citation": "Harrison. Principios de Medicina Interna. BOOK_ID TRATADO_DE_MEDICINA_INTE; CHUNK_1551; PDF 6117–6119."
    },
    {
      "authority": "Harrison",
      "document": "Principios de Medicina Interna, 22.ª edición, capítulo 371",
      "use": "Anatomía y ecocardiografía de afectación mitral en carditis aguda.",
      "citation": "Harrison. BOOK_ID TRATADO_DE_MEDICINA_INTE; CHUNK_1552–1554; PDF 6120–6122."
    },
    {
      "authority": "Talley & O’Connor",
      "document": "Clinical Examination",
      "use": "Semiología del soplo pansistólico apical y sus límites sin ecocardiografía.",
      "citation": "Talley & O’Connor. Clinical Examination. BOOK_ID TALLEY_CLINICAL_EXAMINAT; CHUNK_035–036; PDF 88–91."
    },
    {
      "authority": "Gewitz MH et al.",
      "document": "Revision of the Jones Criteria",
      "use": "Criterios revisados de Jones e integración sin doble conteo.",
      "citation": "Gewitz MH et al. Revision of the Jones Criteria. Circulation. 2015."
    }
  ]
}
};
