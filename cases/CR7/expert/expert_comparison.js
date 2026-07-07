window.HCR_CASE_EXPERT = window.HCR_CASE_EXPERT || {};

window.HCR_CASE_EXPERT.CR7 = {
  expertEvaluation: {
  "evaluationSchemaVersion": "2.0",
  "findings": {
    "selectedExpected": [],
    "missedImportant": [],
    "lowValueSelected": []
  },
  "comparisonByModule": {
    "m1": {
      "title": "Módulo 1",
      "sourceComparison": {},
      "module7Findings": [
        {
          "id": "M7-M1-01",
          "findingId": "dato-int-01",
          "explanation": {
            "title": "Librito",
            "question": "¿Por qué era importante?",
            "body": [
              "**Pregunta clínica:** ¿Qué hora debe ordenar la ruta: la llegada, el inicio observado o el último momento normal?\n\n**En ese momento:** La hija confirma conversación y uso bimanual normales a las 07:36. Ese dato establece el último momento normal y permite reconstruir una cronología fiable cuando la paciente no puede relatarla con precisión. No identifica aún el mecanismo, pero convierte el cuadro en una emergencia potencialmente tiempo-dependiente.\n\n**Después:** La persistencia del déficit, el síndrome cortical del examen y la oclusión M1 mostraron que esa ventana temporal correspondía a una lesión vascular aguda. El hallazgo no “diagnosticaba” el evento en M1; hacía injustificable demorar la evaluación esperando información posterior.\n\n**Implicación:** La hora de ingreso no sustituye el último momento normal. Debe acompañar al paciente en cada decisión de imagen, reperfusión y traslado."
            ]
          }
        },
        {
          "id": "M7-M1-02",
          "findingId": "dato-int-05",
          "explanation": {
            "title": "Librito",
            "question": "¿Por qué era importante?",
            "body": [
              "**Pregunta clínica:** ¿Las sacudidas breves explican todo el síndrome o solo abren una alternativa?\n\n**En ese momento:** Dos movimientos breves de la mano derecha, con vigilia preservada, permiten considerar actividad motora focal. Sin embargo, el dato no aclara por sí solo si hubo una crisis primaria, una manifestación cortical de una lesión aguda o ambas situaciones.\n\n**Después:** La afasia persistente, los signos hemisféricos y la oclusión M1 demostraron que la pista motora no explicaba por sí sola el déficit. Una crisis coexistente siguió siendo posible, pero perdió capacidad para ordenar el caso completo.\n\n**Implicación:** El error es convertir un dato compatible en causa única. Una posibilidad convulsiva no justifica esperar recuperación ni retrasar la ruta neurovascular."
            ]
          }
        },
        {
          "id": "M7-M1-03",
          "findingId": "dato-int-07",
          "explanation": {
            "title": "Librito",
            "question": "¿Por qué era importante?",
            "body": [
              "**Pregunta clínica:** ¿Qué cambia cuando el lenguaje y la fuerza no se recuperan durante el traslado?\n\n**En ese momento:** La persistencia focal obliga a mantener una lesión estructural o vascular entre las primeras hipótesis. Una paresia posictal puede durar más de minutos, de modo que este dato no descarta por sí solo una crisis; lo que sí vuelve insegura es una conducta de observación sin imagen.\n\n**Después:** La exploración documentó un síndrome cortical y la angio-TC identificó la oclusión M1. La persistencia fue, por tanto, el puente entre una historia ambigua y la necesidad de buscar una lesión anatómica.\n\n**Implicación:** Ante un déficit focal sostenido, la pregunta no es cuánto tiempo esperar para que ceda; es qué estudio debe realizarse sin retraso para definir la amenaza.\n\n---"
            ]
          }
        }
      ],
      "illnessActual": {
        "expected": "Mujer de 68 años, previamente independiente, con inicio presenciado de pérdida brusca de lenguaje útil y función de la mano derecha. La hija documenta último momento normal a las 07:36 y cambio clínico desde las 07:38. Hubo dos sacudidas breves de la mano derecha con vigilia conservada, pero el déficit focal persistió sin recuperación durante el traslado. No se refieren cefalea intensa súbita, traumatismo, dolor cervical ni vómitos repetidos.",
        "essentialElements": []
      },
      "tier3": {
        "leader": {
          "diagnosis": "Evento neurovascular agudo de circulación anterior posible",
          "rationale": "El inicio abrupto, la alteración del lenguaje y la pérdida funcional de un miembro superior forman un síndrome focal. En M1 todavía no se puede definir si el mecanismo es isquémico o hemorrágico, pero sí reconocer que una lesión cerebral tiempo-dependiente explica mejor el patrón que un trastorno metabólico o un compromiso global de conciencia.\n\nEl último momento normal ordena la urgencia; no confirma una etiología. La conducta razonable es activar la ruta neurovascular y obtener los discriminadores que faltan, sin esperar a que el déficit se resuelva."
        },
        "alternative": {
          "diagnosis": "Crisis focal con déficit posictal",
          "rationale": "Las sacudidas breves de la mano derecha permiten considerar actividad motora focal. Sin embargo, la vigilia preservada, la afasia persistente y la debilidad mantenida dejan una parte importante del síndrome sin explicar mediante una crisis aislada.\n\nLa alternativa se conserva porque una crisis puede coexistir con una lesión cortical aguda. No debe desplazar la evaluación neurovascular ni convertirse en una razón para observar pasivamente."
        },
        "cannotMiss": {
          "diagnosis": "Hemorragia intracraneal hasta demostrar lo contrario",
          "rationale": "Un déficit focal súbito puede ser hemorrágico aun sin cefalea intensa, vómitos o deterioro de conciencia. Esos negativos modifican la probabilidad, pero no sustituyen la imagen de seguridad.\n\nLa prioridad es excluir sangre intracraneal antes de decisiones que modifiquen la hemostasia o de una estrategia de reperfusión. La amenaza se mantiene abierta hasta la TC sin contraste.\n\n---"
        }
      }
    },
    "m2": {
      "title": "Módulo 2",
      "sourceComparison": {},
      "module7Findings": [
        {
          "id": "M7-M2-01",
          "findingId": "dato-med-02",
          "explanation": {
            "title": "Librito",
            "question": "¿Por qué era importante?",
            "body": [
              "**Pregunta clínica:** ¿Qué pesa más en la valoración del riesgo: que el fármaco esté prescrito o que exista exposición farmacológica real?\n\n**En ese momento:** La última dosis de apixabán había sido aproximadamente seis semanas antes. En una paciente con fibrilación auricular, ese intervalo implica pérdida de la protección anticoagulante esperada y aumenta la plausibilidad de un mecanismo embólico. No demuestra todavía la fuente del evento ni reemplaza la imagen.\n\n**Después:** La fibrilación auricular documentada, la oclusión M1 y la ausencia de una estenosis carotídea cervical significativa hicieron más coherente una fuente cardioembólica. El ecocardiograma sin trombo visible no la excluye; un estudio negativo en esa ventana no borra el mecanismo probable.\n\n**Implicación:** Debe registrarse la última dosis real y su causa de suspensión, porque modifica la evaluación de seguridad actual y define una prevención posterior que tenga posibilidades reales de sostenerse."
            ]
          }
        },
        {
          "id": "M7-M2-02",
          "findingId": "dato-hab-05",
          "explanation": {
            "title": "Librito",
            "question": "¿Por qué era importante?",
            "body": [
              "**Pregunta clínica:** ¿Qué parte del problema continúa existiendo aunque la fase aguda se resuelva correctamente?\n\n**En ese momento:** El costo y la dificultad de transporte explican por qué una medicación prescrita dejó de ser una medicación efectiva. Este dato no define la causa anatómica del déficit, pero permite entender la exposición farmacológica sin convertirla en un juicio moral sobre la paciente.\n\n**Después:** La evolución confirmó que la continuidad terapéutica es clínicamente relevante en esta paciente. La barrera de acceso no es un antecedente decorativo: puede volver a producir riesgo si el plan de prevención se limita a emitir una receta.\n\n**Implicación:** La prevención secundaria debe incluir una estrategia verificable de acceso, retiro de medicamentos, comprensión del plan y participación de la red de apoyo.\n\n---"
            ]
          }
        }
      ],
      "illnessActual": {
        "expected": "Mujer de 68 años con déficit cortical focal súbito y persistente, en contexto de fibrilación auricular, factores vasculares acumulados y ausencia de anticoagulación efectiva durante seis semanas por barreras de acceso. No hay datos subjetivos fuertes de infección, trauma, síncope global o exposición estimulante que reorganicen el síndrome.",
        "essentialElements": []
      },
      "tier3": {
        "leader": {
          "diagnosis": "Ictus isquémico cortical con fuente cardioembólica posible",
          "rationale": "La fibrilación auricular y la suspensión real de apixabán aumentan la plausibilidad de una fuente cardioembólica. Este contexto no reemplaza la semiología ni la imagen, pero vuelve más coherente que un inicio abrupto y focal provenga de una oclusión arterial aguda.\n\nLa explicación debe mantenerse probabilística: el antecedente de arritmia no demuestra por sí solo que el émbolo proceda del corazón. El siguiente paso sigue siendo localizar el síndrome en el examen y definir la lesión vascular con imagen."
        },
        "alternative": {
          "diagnosis": "Crisis focal con paresia posictal",
          "rationale": "La pista motora breve conserva valor como alternativa, pero no hubo desconexión completa, no existen crisis previas y el déficit sigue sin recuperación. La persistencia no excluye una paresia de Todd, que puede prolongarse, pero hace inseguro utilizarla como explicación única.\n\nEl punto clínico no es decidir la alternativa por historia sola. Es evitar que una posibilidad compatible retrase el estudio de un mecanismo vascular que también puede producir actividad motora focal."
        },
        "cannotMiss": {
          "diagnosis": "Hemorragia intracraneal o riesgo hemorrágico inicial",
          "rationale": "Los factores vasculares y la fibrilación auricular aumentan la sospecha isquémica, pero no autorizan a asumirla. La hemorragia sigue siendo una alternativa de seguridad hasta obtener una TC sin contraste.\n\nEl antecedente farmacológico también debe documentarse con precisión. La última dosis real importa para la evaluación de elegibilidad, pero la decisión depende de tiempo, imagen, condiciones clínicas y protocolo local, no de un antecedente aislado.\n\n---"
        }
      }
    },
    "m3": {
      "title": "Módulo 3",
      "sourceComparison": {},
      "module7Findings": [
        {
          "id": "M7-M3-01",
          "findingId": "dato-efis-ojo-04",
          "explanation": {
            "title": "Librito",
            "question": "¿Por qué era importante?",
            "body": [
              "**Pregunta clínica:** ¿La preferencia de mirada es un hallazgo ocular aislado o un signo de lateralización dentro de un síndrome?\n\n**En ese momento:** La mirada preferencial hacia la izquierda, aunque se pueda vencer con estímulo verbal, orienta a disfunción hemisférica cuando aparece junto con otros signos focales. Por sí sola no localiza con precisión un vaso ni permite clasificar el mecanismo de la lesión.\n\n**Después:** Al integrarse con afasia, hemicampo visual derecho reducido, paresia y extinción derecha, el signo se volvió coherente con compromiso cortical izquierdo. La angio-TC mostró después una oclusión M1 del mismo lado.\n\n**Implicación:** Su valor no está en convertir el examen en una angiografía a pie de cama, sino en reconocer que una debilidad de mano no es periférica cuando forma parte de una red cortical."
            ]
          }
        },
        {
          "id": "M7-M3-02",
          "findingId": "dato-efis-neu-01",
          "explanation": {
            "title": "Librito",
            "question": "¿Por qué era importante?",
            "body": [
              "**Pregunta clínica:** ¿Se trata de una dificultad para articular o de un trastorno del lenguaje?\n\n**En ese momento:** El lenguaje no fluente con parafasias, sumado a alteración de denominación y repetición, identifica una afasia. No es equivalente a disartria: la afasia afecta el procesamiento lingüístico y señala disfunción cortical dominante.\n\n**Después:** La coexistencia de defecto visual derecho, paresia derecha y extinción mostró que el lenguaje alterado no era un hallazgo aislado. La oclusión M1 izquierda proporcionó el correlato anatómico de un síndrome hemisférico de circulación anterior.\n\n**Implicación:** Reconocer afasia cambia la representación del problema y la prioridad. Una debilidad aislada admite varias localizaciones; una afasia asociada obliga a pensar primero en lesión cortical aguda.\n\n---"
            ]
          }
        }
      ],
      "illnessActual": {
        "expected": "Mujer de 68 años con síndrome cortical dominante izquierdo de inicio súbito: afasia, preferencia de mirada izquierda, reducción de campo visual derecho, paresia derecha y extinción sensitiva. No hay signos físicos de trauma, meningismo, compromiso respiratorio ni lesión musculoesquelética que expliquen el déficit.",
        "essentialElements": []
      },
      "tier3": {
        "leader": {
          "diagnosis": "Ictus cortical izquierdo probable, de circulación anterior",
          "rationale": "La exploración convierte el relato en una localización anatómica. Afasia, alteración de denominación y repetición, preferencia de mirada, defecto visual derecho, paresia y extinción no corresponden a una lesión periférica de brazo ni a un trastorno confusional global.\n\nLa distribución es compatible con compromiso cortical del hemisferio dominante izquierdo y justifica imagen cerebral de seguridad más estudio vascular urgente. La semiología aumenta la probabilidad de un mecanismo vascular, pero no distingue todavía isquemia de hemorragia."
        },
        "alternative": {
          "diagnosis": "Crisis focal con déficit posictal, cada vez menos congruente",
          "rationale": "Una crisis focal puede dejar debilidad transitoria y puede coexistir con una lesión cerebral. Sin embargo, el conjunto de lenguaje, mirada, visión, fuerza y atención se ordena mejor como un síndrome hemisférico que como un déficit posictal aislado.\n\nLa alternativa pierde prioridad por la red de signos, no por un solo hallazgo. Mantenerla abierta no cambia la necesidad inmediata de imagen y de ruta neurovascular."
        },
        "cannotMiss": {
          "diagnosis": "Hemorragia intracraneal antes de la imagen de seguridad",
          "rationale": "El examen permite localizar, no clasificar con seguridad el tipo de lesión vascular. Una hemorragia puede producir una distribución cortical semejante y no se excluye por ausencia de rigidez de cuello o de traumatismo.\n\nPor eso la siguiente prueba no debe ser diferida ni sustituida por la semiología: la TC sin contraste determina si la ruta puede continuar como isquémica.\n\n---"
        }
      }
    },
    "m4": {
      "title": "Módulo 4",
      "sourceComparison": {},
      "module7Findings": [
        {
          "id": "M7-M4-01",
          "findingId": "dato-par-img-01",
          "explanation": {
            "title": "Librito",
            "question": "¿Por qué era importante?",
            "body": [
              "**Pregunta clínica:** ¿Qué responde la TC sin contraste y qué preguntas deja abiertas?\n\n**En ese momento:** La ausencia de hemorragia intracraneal aguda visible elimina una barrera de seguridad inicial. Un ASPECTS de 9 es compatible con una carga limitada de cambios isquémicos tempranos en la escala utilizada; no demuestra permeabilidad arterial ni identifica la fuente del evento.\n\n**Después:** La angio-TC mostró la oclusión M1 y la perfusión delimitó tejido en riesgo. La TC inicial fue necesaria para abrir la ruta isquémica, pero no habría sido suficiente para decidir el problema anatómico por sí sola.\n\n**Implicación:** La imagen de seguridad debe preceder decisiones que modifiquen la hemostasia. Un estudio sin sangre visible no equivale a una autorización automática de tratamiento."
            ]
          }
        },
        {
          "id": "M7-M4-02",
          "findingId": "dato-par-img-02",
          "explanation": {
            "title": "Librito",
            "question": "¿Por qué era importante?",
            "body": [
              "**Pregunta clínica:** ¿Qué dato transforma un síndrome cortical probable en un problema anatómico operativo?\n\n**En ese momento:** La angio-TC identifica una oclusión proximal de M1 izquierda. Esa arteria irriga un territorio capaz de explicar la convergencia de afasia, alteración de mirada, defecto visual, paresia y extinción contralaterales.\n\n**Después:** La TC sin hemorragia visible y la perfusión con tejido hipoperfundido mayor que el núcleo estimado definieron una situación en la que el tiempo y el destino podían modificar el resultado. La fibrilación auricular sin anticoagulación reciente hace probable una fuente cardioembólica, pero la angiografía no la demuestra por sí sola.\n\n**Implicación:** Una oclusión proximal cambia prioridad, coordinación y destino. El objetivo es evitar demoras evitables antes de una evaluación de reperfusión en un centro con capacidad adecuada."
            ]
          }
        },
        {
          "id": "M7-M4-03",
          "findingId": "dato-par-img-05",
          "explanation": {
            "title": "Librito",
            "question": "¿Por qué era importante?",
            "body": [
              "**Pregunta clínica:** ¿Por qué debe compararse el tejido hipoperfundido con el núcleo estimado, en lugar de interpretar cada volumen por separado?\n\n**En ese momento:** El tejido hipoperfundido estimado fue de 78 mL, mientras que el núcleo estimado fue de 12 mL. La diferencia marcada sugiere que una parte relevante del territorio amenazado no estaba necesariamente establecida como lesión irreversible en el momento del estudio.\n\n**Después:** La oclusión M1 proporcionó el mecanismo anatómico que explica el patrón de perfusión. La perfusión no garantiza recuperación ni define tratamiento de forma aislada: depende de método, tiempo de evolución, clínica, imagen basal y criterios de elegibilidad.\n\n**Implicación:** El valor del estudio es mostrar por qué el tiempo conserva importancia aun después de demostrar la oclusión. No sustituye la decisión clínica; la vuelve más informada.\n\n---"
            ]
          }
        }
      ],
      "illnessActual": {
        "expected": "Mujer de 68 años con infarto isquémico agudo de circulación anterior izquierda por oclusión M1 proximal, sin hemorragia intracraneal aguda visible y con volumen de tejido hipoperfundido mayor que el núcleo estimado. La fibrilación auricular sin anticoagulación reciente hace probable una fuente cardioembólica, sin demostrarla de forma aislada.",
        "essentialElements": []
      },
      "tier3": {
        "leader": {
          "diagnosis": "Infarto isquémico agudo por oclusión M1 izquierda",
          "rationale": "La TC sin sangre visible elimina una barrera de seguridad inicial; la angio-TC demuestra una oclusión M1 izquierda; y la perfusión muestra un núcleo limitado frente a un territorio hipoperfundido mayor. La concordancia entre clínica e imagen define una lesión de gran vaso operativa.\n\nLa consecuencia es coordinar la ruta de reperfusión y el destino especializado sin demoras evitables. La selección final depende de tiempo, imagen, estado hemostático, evolución clínica y protocolo local."
        },
        "alternative": {
          "diagnosis": "Crisis focal coexistente al inicio, no explicación principal",
          "rationale": "La imagen no niega que las sacudidas breves hayan sido actividad cortical irritativa o una crisis focal coexistente. Lo que cambia es su jerarquía: una oclusión M1 con correlación anatómica explica el déficit persistente de lenguaje, visión, fuerza y atención de manera completa.\n\nLa pista convulsiva queda como fenómeno posible, no como explicación suficiente ni como motivo para apartarse de la ruta vascular."
        },
        "cannotMiss": {
          "diagnosis": "Transformación hemorrágica y deterioro neurológico posterior",
          "rationale": "Confirmar la oclusión no cierra el riesgo. La lesión establecida y las decisiones de reperfusión pueden asociarse a transformación hemorrágica, edema, aspiración o nuevo deterioro neurológico.\n\nLa vigilancia seriada y la imagen de control no repiten el diagnóstico; buscan complicaciones que cambian la conducta y el pronóstico.\n\n---"
        }
      }
    }
  },
  "management": {
    "expected": [
      {
        "id": "manejo-esp-01",
        "label": "Mantener la ruta de reperfusión y coordinar traslado neurovascular urgente.",
        "rationale": "La oclusión M1 izquierda, el déficit cortical persistente y la desproporción entre núcleo y tejido hipoperfundido definen una lesión de gran vaso potencialmente modificable por tiempo. La conducta inmediata busca reducir el intervalo de hipoperfusión y llevar a la paciente al recurso capaz de valorar y realizar reperfusión cuando sea elegible.\n\nEsta ruta no se activa por la fibrilación auricular aislada ni por una cifra de presión arterial. Se activa por la concordancia entre clínica, TC sin sangre visible, angiografía y tiempo documentado. La selección definitiva depende de estado clínico, imagen, hemostasia y protocolo local; no debe convertirse en una receta automática.\n\nDemorar coordinación para observar si el déficit mejora expone a expansión del núcleo isquémico y a pérdida de tejido que aún podría ser rescatable. El traslado debe organizarse como parte del tratamiento, no como una medida administrativa posterior."
      },
      {
        "id": "manejo-esp-02",
        "label": "Mantener restricción de vía oral hasta valoración de deglución.",
        "rationale": "La afasia y los signos corticales no permiten asumir una deglución segura aunque la paciente esté despierta, respire sin dificultad y conserve reflejo tusígeno. La lesión hemisférica puede alterar la coordinación protectora de la vía aérea sin producir disnea inicial.\n\nLa restricción oral corrige un riesgo inmediato diferente del riesgo de reperfusión: evita aspiración, neumonitis y deterioro respiratorio prevenible mientras se realiza una valoración de deglución. No es una medida de castigo ni una restricción indefinida; se levanta cuando la evaluación correspondiente define seguridad.\n\nDar líquidos, alimentos o medicación oral por la aparente estabilidad respiratoria confunde ventilación conservada con seguridad deglutoria. Son funciones relacionadas, pero no equivalentes en un déficit neurológico agudo.\n\n---"
      }
    ],
    "dangerousOmissions": [
      {
        "id": "manejo-pel-01",
        "label": "Esperar recuperación por anclaje en las sacudidas breves y retrasar la ruta neurovascular.",
        "rationale": "Las sacudidas de la mano justificaban mantener una crisis focal como alternativa, pero no justificaban detener el razonamiento. Desde M1 coexistían último momento normal definido, pérdida de lenguaje, disfunción de mano y persistencia sin recuperación; posteriormente apareció un síndrome cortical y una oclusión M1.\n\nEl daño de esta omisión no depende de acertar o no la etiqueta convulsiva. Esperar deja progresar una hipoperfusión regional mientras se pierde tiempo para imagen, coordinación y eventual reperfusión. Una crisis focal puede coexistir; no explica por qué se debe cancelar la ruta vascular.\n\nLa corrección es jerarquizar la red completa y actuar sobre la amenaza tiempo-dependiente. La incertidumbre diagnóstica inicial no es una razón válida para inmovilizar la conducta de seguridad."
      },
      {
        "id": "manejo-pel-02",
        "label": "Administrar medicación oral o modificar hemostasia antes de completar la evaluación de seguridad y la ruta de reperfusión.",
        "rationale": "La fibrilación auricular y la interrupción de apixabán hacen probable una vía embólica, pero no autorizan a anticipar tratamiento antitrombótico ni a reiniciar medicación por vía oral antes de definir seguridad. Primero deben integrarse la TC sin contraste, la evaluación de elegibilidad, la última exposición anticoagulante y la estrategia de reperfusión.\n\nEl riesgo no es teórico: una hemorragia no reconocida, una contraindicación clínica o una intervención de reperfusión en curso pueden volver dañina una conducta aparentemente lógica. Los estudios de coagulación aportan contexto, pero no sustituyen la historia farmacológica ni la evaluación integral.\n\nLa secuencia segura es imagen, elegibilidad y coordinación especializada; después se individualizan las decisiones que modifican hemostasia y la vía de administración.\n\n---"
      }
    ],
    "monitoringOmitted": [
      {
        "id": "manejo-mon-01",
        "label": "Realizar evaluación neurológica seriada con una decisión asociada a cada cambio.",
        "rationale": "Lenguaje, mirada, campo visual, fuerza, sensibilidad, nivel de conciencia y una escala neurológica seriada deben reevaluarse desde la fase inicial. La utilidad no es acumular puntajes: es detectar si el déficit mejora, se mantiene o empeora y relacionar cada cambio con una acción clínica.\n\nDeterioro focal, cefalea nueva, vómitos, disminución de conciencia o cambios respiratorios obligan a reevaluar de inmediato por riesgo de expansión de lesión, edema, aspiración o transformación hemorrágica. La mejoría parcial tampoco cierra la vigilancia; una recuperación incompleta no equivale a lesión resuelta.\n\nLa serie de este caso muestra mejoría posterior, pero esa evolución solo tiene valor porque se compara con una línea basal documentada. Sin examen seriado no se reconoce con fiabilidad ni la respuesta ni la complicación."
      },
      {
        "id": "manejo-mon-02",
        "label": "Mantener monitorización cardíaca y hemodinámica durante la fase aguda.",
        "rationale": "La fibrilación auricular está presente en el ECG y el contexto vascular exige vigilancia de ritmo, frecuencia y presión arterial. Estas variables no explican por sí solas la lesión cerebral, pero pueden modificar estabilidad, elegibilidad y la seguridad de las intervenciones posteriores.\n\nLa monitorización no persigue normalizar cifras por reflejo. Busca identificar arritmias sostenidas, cambios hemodinámicos o deterioro que obliguen a revalorar el plan y coordinar con el equipo neurovascular.\n\nSeparar monitorización neurológica de monitorización cardíaca evita un error frecuente: considerar que, tras identificar la oclusión, el resto de los sistemas deja de modificar la seguridad del caso.\n\n---"
      }
    ],
    "destination": {
      "id": "manejo-des-01",
      "label": "Atención prioritaria en centro neurovascular con capacidad de imagen vascular, reperfusión y vigilancia especializada.",
      "rationale": "La oclusión M1 proximal convierte el destino en una decisión terapéutica. La paciente requiere un centro capaz de integrar imagen cerebral y vascular, definir elegibilidad de reperfusión, realizar una intervención endovascular cuando corresponda y vigilar complicaciones neurológicas posteriores.\n\nLa estabilidad inicial no justifica manejo diferido en un recurso sin esa capacidad. El traslado debe preservar continuidad de la ruta: último momento normal, evolución del déficit, resultados de TC/angio-TC/perfusión, exposición farmacológica real y pruebas de seguridad deben acompañar a la paciente.\n\nDespués de la fase aguda, el mismo destino debe permitir estudio etiológico, prevención secundaria, rehabilitación y un plan de acceso farmacológico viable. Una estrategia correcta en el papel fracasa si no resuelve la barrera que dejó a esta paciente sin protección efectiva.\n\n---"
    }
  }
}
};
