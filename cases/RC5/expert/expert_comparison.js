window.HCR_CASE_EXPERT = window.HCR_CASE_EXPERT || {};

window.HCR_CASE_EXPERT.RC5 = {
  expertEvaluation: {
  "evaluationSchemaVersion": "2.0",
  "findings": {
    "selectedExpected": [],
    "missedImportant": [],
    "lowValueSelected": []
  },
  "comparisonByModule": {
    "m1": {
      "title": "Módulo 1 — Triage e interrogatorio",
      "sourceComparison": {
        "triage": {
          "expectedSelected": [],
          "criticalMisses": [],
          "lowValueIfSelected": [],
          "rationale": "El ingreso muestra fiebre y taquicardia con perfusión y oxigenación conservadas; el motivo de cansancio obliga a ampliar la historia sin convertir el triage en diagnóstico."
        },
        "interrogatorio": {
          "expectedSelected": [],
          "criticalMisses": [],
          "lowValueIfSelected": [],
          "rationale": "La secuencia de alivio en una articulación y aparición en otra, junto con el antecedente faríngeo y un cambio funcional de esfuerzo, organiza el problema mejor que la fiebre o el dolor aislados."
        }
      },
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
          "expectedSelected": [],
          "criticalMisses": [],
          "lowValueIfSelected": [],
          "rationale": ""
        },
        "examenFuncional": {
          "expectedSelected": [],
          "criticalMisses": [],
          "lowValueIfSelected": [],
          "rationale": ""
        }
      },
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
          "expectedSelected": [],
          "criticalMisses": [],
          "lowValueIfSelected": [],
          "rationale": ""
        }
      },
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
          "expectedSelected": [],
          "criticalMisses": [],
          "lowValueIfSelected": [],
          "rationale": ""
        }
      },
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
