window.HCR_CASE_EXPERT = window.HCR_CASE_EXPERT || {};

window.HCR_CASE_EXPERT.RC2 = {
  expertEvaluation: {
    evaluationSchemaVersion:'2.0',

    findings: {
      selectedExpected:[
        't03','t04','t05','t06','t10','t12',
        'i01','i02','i03','i04','i05','i06','i08','i09',
        'h01','h02','h03','h09','h10','h11','h17','h18','h21','h23','h24',
        'ef01','ef14','ef15','ef16','ef18','ef19','ef20','ef22','ef23','ef29','ef30','ef31','ef32','ef35',
        'f01','f22','f29','f34','f35','f37','f39','f40','f41','f43','f44','f55','f56','f58','f59',
        'p04','p06','p08','p09','p10','p15','p16','p17','p18','p19','p20'
      ],
      missedImportant:[
        't04','t10','i02','i04','i05','i06','h17','h18','h21','ef18','ef19','ef20','f29','f37','f40','f41','p09','p10','p15','p16','p19'
      ],
      lowValueSelected:[
        't09','ef10','ef11','ef12','f10','f11','f12','f31','f32','f33','f46','f47','f48','f49','f50','f51'
      ]
    },

    comparisonByModule: {
      m1: {
        title:'Módulo 1 — Triage e interrogatorio',
        sourceComparison:{
          triage:{
            expectedSelected:['t03','t04','t05','t06','t10','t12'],
            criticalMisses:['t04','t10','t12'],
            lowValueIfSelected:['t09'],
            rationale:'Dolor opresivo persistente en reposo, diaforesis y ausencia de choque constituyen datos iniciales de alto valor para isquemia aguda y estratificación inmediata.'
          },
          interrogatorio:{
            expectedSelected:['i01','i02','i03','i04','i05','i06','i08','i09'],
            criticalMisses:['i02','i04','i05','i06'],
            lowValueIfSelected:['i10'],
            rationale:'La cualidad opresiva, irradiación típica, síntomas autonómicos y patrón de angina de reciente inicio/progresión favorecen SCA; la falta de dolor pleurítico/posicional y de dolor desgarrante reduce alternativas críticas sin descartarlas por completo.'
          }
        },
        illnessActual:{
          expected:'Mujer de 61 años con HTA, diabetes, dislipidemia y tabaquismo, con una semana de dolor torácico de esfuerzo progresivo y episodio actual opresivo, prolongado y en reposo, irradiado a hombro izquierdo/mandíbula, asociado a náuseas, diaforesis y disnea leve, hemodinámicamente estable.',
          essentialElements:['61 años','factores de riesgo aterosclerótico','dolor opresivo retroesternal','en reposo y prolongado','irradiación típica','síntomas autonómicos','estabilidad hemodinámica']
        },
        tier3:{
          leader:{ diagnosis:'Síndrome coronario agudo sin elevación del ST — alta sospecha', rationale:'Fenotipo de dolor isquémico de alto riesgo con patrón de angina inestable.' },
          alternative:{ diagnosis:'Embolia pulmonar aguda', rationale:'Dolor torácico y disnea justifican considerarla inicialmente, aunque faltan desencadenantes, pleuresía, hemoptisis y signos de TVP.' },
          cannotMiss:{ diagnosis:'Síndrome aórtico agudo', rationale:'Debe permanecer como diagnóstico no perder en dolor torácico agudo hasta integrar ausencia de dolor desgarrante dorsal, asimetría de pulsos/PA y déficit neurológico.' }
        }
      },

      m2: {
        title:'Módulo 2 — Historial y examen funcional',
        sourceComparison:{
          historial:{
            expectedSelected:['h01','h02','h03','h09','h10','h11','h17','h18','h21','h23','h24'],
            criticalMisses:['h17','h18','h21','h11'],
            lowValueIfSelected:['h16','h20','h26'],
            rationale:'La carga aterosclerótica acumulada, mal control farmacológico, tabaquismo y fuerte antecedente familiar aumentan de forma marcada la probabilidad previa de enfermedad coronaria.'
          },
          examenFuncional:{
            expectedSelected:['ef01','ef14','ef15','ef16','ef18','ef19','ef20','ef22','ef23','ef29','ef30','ef31','ef32','ef35'],
            criticalMisses:['ef18','ef19','ef20','ef16','ef35'],
            lowValueIfSelected:['ef08','ef09','ef10','ef11','ef12'],
            rationale:'El patrón cardiovascular es coherente con isquemia miocárdica; los negativos respiratorios, pleuríticos, posicionales, musculoesqueléticos y neurológicos ayudan a ordenar los diferenciales.'
          }
        },
        illnessActual:{
          expected:'Mujer de 61 años con múltiples factores de riesgo aterosclerótico y baja adherencia a tratamiento preventivo, con angina de esfuerzo de reciente aparición que progresa a dolor opresivo prolongado en reposo con irradiación típica y síntomas autonómicos, sin datos clínicos dominantes de pericarditis, neumonía, TEP, disección o dolor de pared.',
          essentialElements:['HTA/DM/dislipidemia','tabaquismo','antecedentes familiares prematuros','angina de esfuerzo previa','progresión a reposo','negativos dirigidos para diferenciales']
        },
        tier3:{
          leader:{ diagnosis:'Síndrome coronario agudo sin elevación del ST', rationale:'La probabilidad clínica aumenta claramente con factores de riesgo y patrón temporal de crescendo angina.' },
          alternative:{ diagnosis:'Pericarditis aguda', rationale:'El dolor torácico agudo la mantiene en el diferencial, pero faltan fiebre/virus reciente, empeoramiento inspiratorio y mejoría al inclinarse.' },
          cannotMiss:{ diagnosis:'Síndrome aórtico agudo', rationale:'Menos probable por ausencia de dolor máximo al inicio, irradiación dorsal, déficit neurológico y asimetría de pulsos, pero el daño de omitirlo es alto.' }
        }
      },

      m3: {
        title:'Módulo 3 — Examen físico',
        sourceComparison:{
          examenFisico:{
            expectedSelected:['f01','f22','f29','f34','f35','f37','f39','f40','f41','f43','f44','f55','f56','f58','f59'],
            criticalMisses:['f29','f37','f40','f41','f55','f56'],
            lowValueIfSelected:['f10','f11','f12','f31','f32','f33','f46','f47','f48','f49','f50','f51'],
            rationale:'La diaforesis y el dolor no reproducible apoyan un proceso visceral. La ausencia de congestión, estertores, roce pericárdico, asimetría de pulsos/PA, déficit neurológico y signos de TVP orienta el diferencial y la seguridad del manejo inicial.'
          }
        },
        illnessActual:{
          expected:'Paciente hemodinámicamente estable, diaforética, con dolor torácico no reproducible, sin datos de insuficiencia cardiaca aguda, pericarditis clínica, trombosis venosa periférica, déficit neurológico ni asimetría vascular periférica.',
          essentialElements:['diaforesis','dolor no reproducible','sin estertores/JVP elevada','sin roce pericárdico','pulsos y PA simétricos','sin signos de TVP','sin déficit focal']
        },
        tier3:{
          leader:{ diagnosis:'Síndrome coronario agudo sin elevación del ST', rationale:'El examen no ofrece alternativa más explicativa y mantiene alta la preocupación por isquemia.' },
          alternative:{ diagnosis:'Embolia pulmonar aguda', rationale:'Se vuelve menos probable por ausencia de hipoxemia, signos de TVP, pleuresía o hallazgos respiratorios, pero no se elimina solo con el examen.' },
          cannotMiss:{ diagnosis:'Síndrome aórtico agudo', rationale:'La simetría de pulsos/PA y ausencia de déficit neurológico reducen probabilidad, sin constituir exclusión definitiva.' }
        }
      },

      m4: {
        title:'Módulo 4 — Paraclínicos',
        sourceComparison:{
          paraclinicos:{
            expectedSelected:['p04','p06','p08','p09','p10','p15','p16','p17','p18','p19','p20'],
            criticalMisses:['p09','p10','p15','p16','p19'],
            lowValueIfSelected:['p01','p02','p03','p11','p12','p13'],
            rationale:'El ascenso dinámico de troponina por encima del percentil 99, los cambios isquémicos de ST-T y la alteración segmentaria nueva integran lesión miocárdica aguda con evidencia de isquemia.'
          }
        },
        illnessActual:{
          expected:'Mujer de 61 años con dolor torácico isquémico de alto riesgo y factores ateroscleróticos, con troponina I ultrasensible elevada y en ascenso (56 a 212 ng/L), infradesnivel dinámico del ST en derivaciones laterales y alteración segmentaria inferolateral, sin elevación del ST ni datos de insuficiencia cardiaca aguda.',
          essentialElements:['síntomas de isquemia','troponina dinámica elevada','cambios isquémicos ST-T','alteración segmentaria','sin ST elevado','función renal conservada']
        },
        tier3:{
          leader:{ diagnosis:'Infarto agudo de miocardio sin elevación del ST (NSTEMI), probable tipo 1', rationale:'Hay lesión miocárdica aguda con ascenso de troponina y evidencia clínica/electrocardiográfica/ecocardiográfica de isquemia.' },
          alternative:{ diagnosis:'Miopericarditis', rationale:'La troponina puede elevarse, pero el patrón de dolor, ECG regional con infradesnivel y ausencia de datos pericárdicos hacen esta alternativa mucho menos probable.' },
          cannotMiss:{ diagnosis:'Síndrome aórtico agudo', rationale:'Los datos disponibles lo reducen notablemente, pero no debe cerrarse si aparecen dolor dorsal súbito, déficit, asimetría de PA/pulsos o inestabilidad.' }
        }
      },

      m5: {
        title:'Módulo 5 — Pausa diagnóstica',
        expectedVenn:{
          dx1:'Infarto agudo de miocardio sin elevación del ST (NSTEMI), probable tipo 1',
          dx2:'Miopericarditis',
          dx3:'Síndrome aórtico agudo',
          pivotFinding:'Ascenso dinámico de troponina con infradesnivel isquémico del ST en un cuadro clínico típico de isquemia.',
          sharedFinding:'Dolor torácico agudo.',
          decisiveAgainstDx2:'Dolor no pleurítico ni posicional, ausencia de roce/derrame y ECG no compatible con pericarditis difusa.',
          decisiveAgainstDx3:'Ausencia de dolor desgarrante dorsal, asimetría de pulsos/PA, déficit neurológico e inestabilidad; mantener vigilancia clínica.'
        }
      },

      m6: {
        title:'Módulo 6 — Manejo clínico',
        expectedPlanSummary:'Admisión en área monitorizada/telemetría, activación de cardiología para estrategia invasiva temprana, antiagregación con aspirina si no hay contraindicación, anticoagulación según protocolo y función renal, estatina de alta intensidad, control del dolor/isquemia y presión arterial con nitratos solo si son seguros, ECG y troponinas seriados, monitorización de sangrado/función renal/glucosa y no administrar oxígeno rutinario con SatO₂ 97% salvo deterioro o hipoxemia.',
        management:{
          expected:[
            { label:'Ingreso inmediato a unidad monitorizada o área de observación con telemetría', reason:'El dolor isquémico, cambios de ST-T y troponina dinámica requieren vigilancia de arritmias y deterioro.' },
            { label:'Aspirina de carga si no existe contraindicación', reason:'Es base de la antiagregación inicial en SCA.' },
            { label:'Estrategia antitrombótica y segundo antiagregante coordinados con cardiología/estrategia invasiva', reason:'La elección y momento dependen del riesgo, anatomía prevista, riesgo hemorrágico y plan de angiografía.' },
            { label:'Anticoagulación parenteral según protocolo institucional y función renal', reason:'Forma parte del manejo del SCA sin elevación del ST en pacientes seleccionados.' },
            { label:'Estatina de alta intensidad temprana', reason:'La paciente tiene SCA y LDL elevado con alto riesgo aterosclerótico.' },
            { label:'Nitrato si persiste dolor o hipertensión y no hay contraindicaciones', reason:'Puede aliviar isquemia/síntomas; verificar PA, uso de inhibidores PDE5 y sospecha de infarto de VD antes de administrar.' },
            { label:'Evaluación temprana por cardiología para coronariografía/estrategia invasiva', reason:'Troponina dinámica, cambios isquémicos en ECG y alteración segmentaria indican riesgo elevado.' },
            { label:'Control de glucemia y factores modificables', reason:'Hiperglucemia, tabaquismo y pobre adherencia aumentan riesgo y requieren intervención durante hospitalización.' }
          ],
          dangerousOmissions:[
            { label:'Dar alta desde urgencias tras mejoría parcial del dolor', reason:'La paciente tiene evidencia objetiva de lesión miocárdica aguda e isquemia.' },
            { label:'No realizar ECG y troponina seriados', reason:'Los cambios dinámicos son centrales para confirmar y estratificar SCA.' },
            { label:'Retrasar cardiología/estrategia invasiva pese a datos de alto riesgo', reason:'Puede retrasar revascularización y aumentar eventos.' },
            { label:'Administrar oxígeno de rutina con saturación normal', reason:'No hay hipoxemia de entrada; oxígeno debe ser selectivo.' },
            { label:'Usar nitratos sin evaluar contraindicaciones hemodinámicas', reason:'Puede causar deterioro si hay hipotensión, infarto de VD o interacción farmacológica relevante.' }
          ],
          monitoringOmitted:[
            { label:'Telemetría continua', reason:'Riesgo de arritmias isquémicas.' },
            { label:'ECG seriado y reevaluación del dolor', reason:'Permiten detectar evolución a elevación del ST o isquemia persistente.' },
            { label:'Troponina seriada', reason:'Confirma cinética y extensión de lesión miocárdica.' },
            { label:'Control de PA, FC, SatO₂ y signos de congestión/choque', reason:'Guía seguridad de nitratos, betabloqueo y escalada de atención.' },
            { label:'Vigilancia de sangrado, hemoglobina y función renal', reason:'Importante antes y durante terapia antitrombótica/intervencionismo.' },
            { label:'Glucemias seriadas', reason:'Tiene diabetes e hiperglucemia al ingreso.' }
          ],
          destination:{
            label:'Unidad coronaria o área monitorizada con intervención cardiológica temprana',
            reason:'NSTEMI de alto riesgo por troponina dinámica, cambios de ECG y alteración segmentaria. Escalar a UCI si inestabilidad, arritmia grave, choque, edema pulmonar o dolor refractario.'
          }
        }
      }
    },

    management: {
      expected:[
        { label:'Manejo de SCA sin elevación del ST en área monitorizada', reason:'Dolor isquémico con evidencia objetiva de lesión miocárdica e isquemia.' },
        { label:'Aspirina, anticoagulación/antiagregación individualizada y estatina de alta intensidad', reason:'Tratamiento antitrombótico y prevención secundaria temprana según riesgo y estrategia invasiva.' },
        { label:'Cardiología y estrategia invasiva temprana', reason:'Marcadores de alto riesgo presentes.' },
        { label:'No oxígeno rutinario con SatO₂ normal', reason:'No existe hipoxemia de entrada.' }
      ],
      dangerousOmissions:[
        { label:'Alta ambulatoria o demora diagnóstica', reason:'No es un dolor torácico de bajo riesgo.' },
        { label:'No identificar posible evolución a STEMI', reason:'Debe repetirse ECG ante dolor persistente o cambio clínico.' },
        { label:'No valorar riesgo hemorrágico/renal antes de antitrombóticos', reason:'Afecta seguridad de tratamiento.' }
      ],
      monitoringOmitted:[
        { label:'Telemetría y signos vitales seriados', reason:'Riesgo arrítmico e isquémico.' },
        { label:'ECG/troponina seriados', reason:'Define evolución y conducta.' },
        { label:'Glucosa y función renal', reason:'Comorbilidad diabética y preparación para fármacos/procedimientos.' }
      ],
      destination:{
        label:'Área monitorizada/unidad coronaria con cardiología',
        reason:'NSTEMI de alto riesgo hasta demostrar estabilidad y completar estrategia invasiva.'
      }
    },

    clinicalReferences:[
      {
        authority:'ACC/AHA',
        document:'2025 Guideline for the Management of Patients With Acute Coronary Syndromes',
        use:'Construcción de la evaluación de SCA, estratificación, antitrombóticos, estatinas, oxígeno selectivo y estrategia invasiva.'
      },
      {
        authority:'Universal Definition of Myocardial Infarction',
        document:'Fourth Universal Definition of Myocardial Infarction',
        use:'Definición de infarto con elevación/descenso de troponina y evidencia clínica de isquemia.'
      }
    ]
  }
};
