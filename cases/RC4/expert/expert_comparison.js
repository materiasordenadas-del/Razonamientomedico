window.HCR_CASE_EXPERT = window.HCR_CASE_EXPERT || {};

window.HCR_CASE_EXPERT.RC4 = {
  expertEvaluation: {
    evaluationSchemaVersion:'3.0',

    findings: {
      selectedExpected:[
        't03','t04','t05','t06','t07','t09','t10',
        'i01','i02','i03','i04','i04a','i05','i06','i07','i08','i09','i10','i11','i12','i13','i14','i14a','i15','i16','i17',
        'h01','h02','h03','h04','h05','h06','h09','h10','h11','h12','h13','h14','h15','h16','h19','h21','h23',
        'ef01','ef03','ef11','ef14','ef15','ef16','ef17','ef18','ef19','ef20','ef21','ef23','ef27','ef28','ef29','ef30','ef31',
        'f01','f02','f22','f28','f29','f34','f36','f37','f38','f40','f41','f42','f43','f44','f45','f53','f55','f58','f59',
        'p01','p04','p05','p07','p09','p10','p11','p12','p13','p14','p15','p16','p18','p19',
        'ecg_inicial','ecg_recurrencia','radiografia_torax'
      ],
      missedImportant:[
        't03','t04','t07','t09','t10',
        'i01','i02','i05','i06','i07','i08','i09','i11','i12','i13','i14','i14a','i15','i16','i17',
        'h01','h02','h03','h11','h12','h13','h14','h15','h16','h19','h23',
        'ef17','ef18','ef20','ef21','ef23','ef27','ef28','ef29','ef30',
        'f02','f22','f29','f34','f36','f37','f38','f40','f41','f43','f44','f53','f58','f59',
        'p13','p14','p15','ecg_inicial','ecg_recurrencia','radiografia_torax'
      ],
      lowValueSelected:[
        't08','ef05','ef06','ef09','ef10','ef12','ef13','ef24','ef25','ef26',
        'f10','f11','f12','f13','f14','f15','f19','f20','f21','f25','f26','f27',
        'f31','f32','f33','f46','f47','f48','f49','f50','f51'
      ]
    },

    comparisonByModule: {
      m1: {
        title:'Módulo 1 — Triage e interrogatorio',
        studentBinding:{
          illnessField:'ill_m1',
          tierFields:['tier_m1_1','tier_m1_2','tier_m1_3'],
          sources:['Triage','Interrogatorio']
        },
        sourceComparison:{
          triage:{
            expectedSelected:['t03','t04','t05','t06','t07','t09','t10'],
            criticalMisses:['t03','t04','t07','t09','t10'],
            lowValueIfSelected:['t08'],
            expertFindingIds:['t03','t04','t05','t06','t07','t09','t10'],
            expertText:'Dolor torácico; PA 168/94 mmHg; FC 92 lpm; FR 20 rpm; SatO₂ 98%; glucemia capilar 224 mg/dL; diaforesis visible.',
            expertNote:'El triage debe reconocer un síndrome de dolor torácico potencialmente isquémico y, a la vez, clasificar estabilidad inicial. La hipertensión y la hiperglucemia aumentan el riesgo y condicionan decisiones posteriores, pero no explican por sí solas el dolor. La saturación normal y la ausencia de compromiso de conciencia no descartan isquemia aguda; indican que el manejo inicial puede continuar con ECG, troponinas seriadas y monitorización sin retrasar la evaluación.'
          },
          interrogatorio:{
            expectedSelected:['i01','i02','i03','i04','i04a','i05','i06','i07','i08','i09','i10','i11','i12','i13','i14','i14a','i15','i16','i17'],
            criticalMisses:['i01','i02','i04a','i05','i06','i07','i08','i09','i11','i12','i13','i14','i14a','i15','i16','i17'],
            lowValueIfSelected:[],
            expertFindingIds:['i01','i02','i04a','i05','i06','i07','i08','i09','i10','i11','i12','i13','i14','i14a','i15','i16','i17'],
            expertText:'Inicio en reposo; dolor opresivo central; duración aproximada de 40 min; angina de esfuerzo previa; irradiación a mandíbula y hombro; diaforesis, náuseas y disnea; sin rasgos pleuríticos, mecánicos ni aórticos mayores; factores de riesgo y seguridad antitrombótica identificados.',
            expertNote:'La cronología es el dato organizador: síntomas de esfuerzo que cedían con reposo y progresan a un episodio prolongado en reposo. Ese cambio no se debe resumir como “dolor de pecho”; señala inestabilidad isquémica. Las preguntas sobre respiración, palpación, inicio abrupto, espalda, síncope, focalidad y tromboembolismo no son relleno: buscan causas alternativas que cambiarían el uso de antitrombóticos. Identificar medicamentos, sangrado y alergias es parte del interrogatorio de seguridad, no una tarea administrativa posterior.'
          }
        },
        illnessActual:{
          studentField:'ill_m1',
          expected:'Mujer de 59 años con dolor torácico opresivo central, de aproximadamente 40 minutos, iniciado en reposo y precedido por tres semanas de episodios similares al esfuerzo que cedían al detenerse. Se asocia a irradiación a mandíbula y hombro izquierdo, diaforesis, náuseas y disnea breve. Llega hipertensa, normoxémica, vigil y sin datos de choque. Por el patrón clínico y los factores de riesgo conocidos, requiere descartar isquemia miocárdica aguda sin perder de vista causas aórticas y tromboembólicas.',
          essentialElements:['edad y contexto','dolor opresivo central','progresión esfuerzo → reposo','duración prolongada','irradiación','síntomas autonómicos','estabilidad inicial','factores de riesgo','cribado de aorta y embolia','seguridad para antitrombóticos']
        },
        tier3:{
          studentFields:['tier_m1_1','tier_m1_2','tier_m1_3'],
          expertText:'Principal: síndrome coronario agudo sin elevación persistente del ST, sospecha inicial. Alternativo: lesión miocárdica aguda o infarto tipo 2 asociado a hipertensión no controlada. No perder: síndrome aórtico agudo.',
          leader:{ diagnosis:'Síndrome coronario agudo sin elevación persistente del ST — sospecha inicial', rationale:'La progresión de angina de esfuerzo a dolor en reposo con síntomas autonómicos en una paciente de alto riesgo exige tratar la isquemia aguda como hipótesis dominante hasta obtener ECG y troponinas.' },
          alternative:{ diagnosis:'Lesión miocárdica aguda o infarto tipo 2 asociado a hipertensión no controlada', rationale:'La presión arterial elevada puede aumentar la demanda miocárdica, pero todavía no explica por sí sola el patrón temporal de angina. Debe mantenerse como alternativa, no convertirse en atajo diagnóstico.' },
          cannotMiss:{ diagnosis:'Síndrome aórtico agudo', rationale:'Su probabilidad clínica inicial es menor, pero su omisión tendría consecuencias graves si se administran antitrombóticos. El interrogatorio debe buscar el fenotipo aórtico antes de automatizar el manejo coronario.' }
        }
      },

      m2: {
        title:'Módulo 2 — Historial y revisión por sistemas',
        studentBinding:{
          illnessField:'ill_m2',
          tierFields:['tier_m2_1','tier_m2_2','tier_m2_3'],
          sources:['Historial','Examen funcional']
        },
        sourceComparison:{
          historial:{
            expectedSelected:['h01','h02','h03','h04','h05','h06','h09','h10','h11','h12','h13','h14','h15','h16','h19','h21','h23'],
            criticalMisses:['h01','h02','h03','h11','h12','h13','h14','h15','h16','h19','h23'],
            lowValueIfSelected:['h17','h18','h18a','h20','h22'],
            expertFindingIds:['h01','h02','h03','h11','h12','h13','h14','h15','h16','h19','h23'],
            expertText:'Hipertensión, diabetes, dislipidemia sin estatina, ex tabaquismo y antecedente familiar coronario prematuro; adherencia irregular; sin anticoagulantes, AINE crónicos, sangrado digestivo, alergias ni estimulantes.',
            expertNote:'Los antecedentes no se suman como una lista; construyen un mecanismo de riesgo aterosclerótico. Diabetes, hipertensión, LDL no tratado, tabaquismo previo y familiar de primer grado con enfermedad precoz aumentan de forma acumulativa la probabilidad preprueba. La adherencia irregular y la suspensión de estatina no son datos sociales periféricos: explican prevención insuficiente. La ausencia de sangrado, alergias, anticoagulantes y nefropatía es crítica porque determina seguridad de antiagregación, anticoagulación y contraste.'
          },
          examenFuncional:{
            expectedSelected:['ef01','ef03','ef11','ef14','ef15','ef16','ef17','ef18','ef19','ef20','ef21','ef23','ef27','ef28','ef29','ef30','ef31'],
            criticalMisses:['ef17','ef18','ef20','ef21','ef23','ef27','ef28','ef29','ef30'],
            lowValueIfSelected:['ef05','ef06','ef09','ef10','ef12','ef13','ef24','ef25','ef26'],
            expertFindingIds:['ef03','ef11','ef14','ef15','ef16','ef17','ef18','ef20','ef21','ef23','ef27','ef28','ef29','ef30'],
            expertText:'Disminución de tolerancia al esfuerzo; opresión que progresa a reposo; irradiación mandibular; disnea breve, diaforesis y náuseas; sin fenotipo pleurítico, posicional, musculoesquelético, aórtico o tromboembólico dominante.',
            expertNote:'La revisión por sistemas debe refinar la hipótesis, no repetir el interrogatorio. Los equivalentes anginosos sostienen isquemia, mientras que la ausencia de fiebre, hemorragia, hipoxemia, infección importante, arritmia persistente o estimulantes reduce la explicación por desequilibrio aislado de oferta-demanda. Los negativos aórticos y tromboembólicos reducen probabilidad, pero no autorizan a convertir esos diagnósticos en imposibles si aparece un cambio del fenotipo clínico.'
          }
        },
        illnessActual:{
          studentField:'ill_m2',
          expected:'Mujer de 59 años con alto riesgo aterosclerótico acumulado, prevención farmacológica incompleta y adherencia irregular. Presenta angina de esfuerzo nueva que evolucionó a dolor opresivo en reposo con equivalentes autonómicos. No hay anemia, hemorragia, hipoxemia, sepsis, arritmia sostenida, estimulantes u otro desencadenante fisiológico importante que justifique por sí solo una lesión miocárdica de tipo 2. Tampoco predomina un fenotipo pleurítico, posicional, gastrointestinal, musculoesquelético o aórtico.',
          essentialElements:['riesgo aterosclerótico acumulado','prevención insuficiente','angina de esfuerzo nueva','inestabilidad por dolor en reposo','equivalentes anginosos','ausencia de disparador tipo 2','negativos útiles para diferencial','riesgo hemorrágico bajo']
        },
        tier3:{
          studentFields:['tier_m2_1','tier_m2_2','tier_m2_3'],
          expertText:'Principal: síndrome coronario agudo sin elevación persistente del ST, probable infarto tipo 1. Alternativo: infarto tipo 2 o lesión miocárdica por desequilibrio oferta-demanda. No perder: síndrome aórtico agudo.',
          leader:{ diagnosis:'Síndrome coronario agudo sin elevación del ST, probable infarto agudo de miocardio tipo 1', rationale:'La evolución temporal y el perfil de riesgo ya hacen probable un mecanismo aterotrombótico. Aún faltan biomarcadores e imagen para confirmar infarto, pero la hipótesis dominante debe guiar urgencia y pruebas.' },
          alternative:{ diagnosis:'Infarto tipo 2 o lesión miocárdica aguda por desequilibrio oferta-demanda', rationale:'La hipertensión puede contribuir al desequilibrio, pero debe existir un desencadenante fisiológico convincente. No se debe usar “tipo 2” como explicación automática cuando el fenotipo es anginoso y el riesgo aterosclerótico es alto.' },
          cannotMiss:{ diagnosis:'Síndrome aórtico agudo', rationale:'La historia reduce su probabilidad, pero no la elimina. Su evaluación debe mantenerse activa si el dolor se vuelve transfixiante, migratorio o se acompaña de pulso asimétrico, déficit neurológico o insuficiencia aórtica.' }
        }
      },

      m3: {
        title:'Módulo 3 — Examen físico',
        studentBinding:{
          illnessField:'ill_m3',
          tierFields:['tier_m3_1','tier_m3_2','tier_m3_3'],
          sources:['Examen físico']
        },
        sourceComparison:{
          examenFisico:{
            expectedSelected:['f01','f02','f22','f28','f29','f34','f36','f37','f38','f40','f41','f42','f43','f44','f45','f53','f55','f58','f59'],
            criticalMisses:['f02','f22','f29','f34','f36','f37','f38','f40','f41','f43','f44','f53','f58','f59'],
            lowValueIfSelected:['f10','f11','f12','f13','f14','f15','f19','f20','f21','f25','f26','f27','f31','f32','f33','f46','f47','f48','f49','f50','f51'],
            expertFindingIds:['f01','f02','f22','f29','f34','f36','f37','f38','f40','f41','f42','f43','f44','f53','f55','f58','f59'],
            expertText:'Diaforesis leve con perfusión conservada; sin congestión, S3, soplo nuevo, roce pericárdico, dolor reproducible, asimetría de pulsos o PA, masa abdominal, signos de TVP ni focalidad neurológica.',
            expertNote:'El examen físico no confirma ni excluye por sí solo un síndrome coronario agudo. Su función es responder tres preguntas: ¿hay inestabilidad?, ¿hay insuficiencia cardiaca o complicación mecánica?, ¿existe un diagnóstico alternativo que haga peligroso el tratamiento antitrombótico? Pulmones limpios, yugulares no elevadas, buena perfusión y ausencia de S3 reducen la probabilidad de edema pulmonar o bajo gasto. Pulsos simétricos, PA sin diferencia relevante, abdomen sin masa y examen neurológico normal reducen la probabilidad de disección manifiesta, pero no permiten ignorarla si el cuadro cambia.'
          }
        },
        illnessActual:{
          studentField:'ill_m3',
          expected:'Paciente hemodinámicamente estable, discretamente diaforética, normoxémica y bien perfundida. No presenta congestión pulmonar o sistémica, arritmia clínicamente evidente, soplo nuevo, roce pericárdico, dolor de pared torácica reproducible, focalidad neurológica, diferencia de pulsos o presión arterial, masa abdominal pulsátil ni signos de trombosis venosa profunda. El examen establece estabilidad y reduce alternativas peligrosas, pero no descarta enfermedad coronaria.',
          essentialElements:['perfusión conservada','sin congestión','sin S3/soplo nuevo/roce','pulmones limpios','sin dolor reproducible','pulsos y PA simétricos','sin TVP','sin focalidad neurológica','sin masa abdominal']
        },
        tier3:{
          studentFields:['tier_m3_1','tier_m3_2','tier_m3_3'],
          expertText:'Principal: síndrome coronario agudo sin elevación persistente del ST de alto riesgo clínico. Alternativo: lesión miocárdica por hipertensión no controlada. No perder: disección aórtica con presentación no clásica.',
          leader:{ diagnosis:'Síndrome coronario agudo sin elevación del ST de alto riesgo clínico', rationale:'La estabilidad del examen no reduce el valor de la historia isquémica en reposo. El examen define gravedad actual y destino monitorizado, no una causa benigna del dolor.' },
          alternative:{ diagnosis:'Lesión miocárdica por hipertensión no controlada', rationale:'La PA está elevada, pero no hay edema pulmonar, arritmia sostenida, crisis catecolaminérgica ni otro factor de demanda demostrado que explique por sí solo el cuadro.' },
          cannotMiss:{ diagnosis:'Disección aórtica con presentación no clásica', rationale:'Los pulsos y PA simétricos reducen probabilidad. El error sería abandonar la reevaluación si aparece dolor dorsal, migratorio, déficit neurológico, hipotensión o insuficiencia aórtica.' }
        }
      },

      m4: {
        title:'Módulo 4 — Paraclínicos',
        studentBinding:{
          illnessField:'ill_m4',
          tierFields:['tier_m4_1','tier_m4_2','tier_m4_3'],
          sources:['Paraclínicos']
        },
        sourceComparison:{
          paraclinicos:{
            expectedSelected:['p01','p04','p05','p07','p09','p10','p11','p12','p13','p14','p15','p16','p18','p19','ecg_inicial','ecg_recurrencia','radiografia_torax'],
            criticalMisses:['p13','p14','p15','ecg_inicial','ecg_recurrencia','radiografia_torax'],
            lowValueIfSelected:['p02','p03','p06','p08','p17','p20'],
            expertFindingIds:['p01','p04','p05','p09','p10','p11','p12','p13','p14','p15','p16','p18','p19','ecg_inicial','ecg_recurrencia','radiografia_torax'],
            expertText:'Troponina I de alta sensibilidad 68 → 286 → 1.420 ng/L; ECG con depresión horizontal del ST y cambios laterales de repolarización; radiografía sin edema ni mediastino ensanchado; creatinina, TFGe y hemostasia conservadas; glucosa, HbA1c, LDL y triglicéridos elevados.',
            expertNote:'La troponina por encima del percentil 99 con ascenso claro demuestra lesión miocárdica aguda. Se convierte en infarto cuando se integra con síntomas isquémicos y cambios electrocardiográficos compatibles. El ECG no debe leerse como “sin STEMI, por tanto tranquilizador”: la depresión del ST y los cambios de repolarización son evidencia isquémica y exigen estratificación. La radiografía no diagnostica infarto, pero ayuda a valorar congestión, derrame y mediastino. Creatinina y hemostasia normales no confirman el diagnóstico, pero informan seguridad de contraste y tratamiento antitrombótico.'
          }
        },
        illnessActual:{
          studentField:'ill_m4',
          expected:'Mujer de 59 años con dolor anginoso creciente y alto riesgo aterosclerótico, con troponina I de alta sensibilidad en ascenso de 68 a 1.420 ng/L, descenso horizontal del ST y cambios de repolarización laterales en ECG, sin elevación persistente del ST. La radiografía de tórax no muestra edema pulmonar ni mediastino ensanchado. Creatinina, TFGe y pruebas de hemostasia son normales; glucosa, HbA1c, LDL y triglicéridos están elevados. La representación correcta es infarto agudo de miocardio sin elevación del ST, probablemente tipo 1, sin choque ni insuficiencia cardiaca aguda.',
          essentialElements:['troponina dinámica','síntomas de isquemia','cambios ECG','sin elevación persistente del ST','radiografía sin congestión/mediastino ensanchado','función renal preservada','hemostasia basal normal','riesgo metabólico alto']
        },
        tier3:{
          studentFields:['tier_m4_1','tier_m4_2','tier_m4_3'],
          expertText:'Principal: infarto agudo de miocardio sin elevación del ST, probable tipo 1. Alternativo: infarto tipo 2 por hipertensión no controlada. No perder: síndrome aórtico agudo.',
          leader:{ diagnosis:'Infarto agudo de miocardio sin elevación del ST, probable tipo 1', rationale:'Troponina dinámica más síntomas isquémicos y cambios electrocardiográficos establecen infarto. El contexto favorece un mecanismo aterotrombótico tipo 1 sobre una causa aislada de demanda.' },
          alternative:{ diagnosis:'Infarto tipo 2 por hipertensión no controlada', rationale:'La hipertensión puede contribuir al desbalance, pero no explica de forma satisfactoria la angina de esfuerzo progresiva ni los cambios isquémicos laterales en ausencia de un desencadenante sistémico mayor.' },
          cannotMiss:{ diagnosis:'Síndrome aórtico agudo', rationale:'La probabilidad es baja con la historia, el examen y la radiografía disponibles, pero no es cero. Si aparece dolor dorsal transfixiante, migratorio, déficit de pulso, focalidad neurológica, insuficiencia aórtica o hipotensión, se debe detener la inercia antitrombótica y revaluar.' }
        }
      },

      m5: {
        title:'Módulo 5 — Pausa diagnóstica',
        expectedVenn:{
          dx1:'Infarto agudo de miocardio sin elevación del ST, probable tipo 1',
          dx2:'Infarto tipo 2 o lesión miocárdica aguda por hipertensión no controlada',
          dx3:'Síndrome aórtico agudo',
          pivotFinding:'Ascenso dinámico de troponina I de alta sensibilidad, acompañado de dolor isquémico y cambios dinámicos de ST-T.',
          sharedFinding:'Dolor torácico y presión arterial elevada.',
          decisiveAgainstDx2:'No existe anemia, hipoxemia, sepsis, arritmia sostenida, insuficiencia cardiaca aguda ni otro desencadenante fisiológico intenso que explique una demanda aislada; la evolución anginosa previa y los cambios electrocardiográficos laterales favorecen mecanismo coronario tipo 1.',
          decisiveAgainstDx3:'No hay dolor abrupto máximo desde el inicio, irradiación dorsal transfixiante, dolor migratorio, déficit de pulso, PA asimétrica, focalidad neurológica, insuficiencia aórtica nueva, mediastino ensanchado ni hipotensión. Estos datos reducen, pero no abolieron, la necesidad de reevaluar si el fenotipo cambia.'
        }
      },

      m6: {
        title:'Módulo 6 — Manejo clínico',
        expectedPlanSummary:'Activar protocolo de síndrome coronario agudo sin elevación del ST y cardiología/intervencionismo; hospitalizar en unidad monitorizada; administrar ácido acetilsalicílico en dosis de carga si no existe contraindicación, anticoagulación parenteral según protocolo y estrategia invasiva, estatina de alta intensidad y nitrato sublingual para dolor/hipertensión si la presión y contraindicaciones lo permiten; considerar beta-bloqueo oral temprano solo tras excluir insuficiencia cardiaca aguda, bajo gasto, riesgo de choque, bradicardia, bloqueo auriculoventricular y broncoespasmo activo; no administrar oxígeno con saturación normal; decidir el segundo antiagregante y su momento junto con cardiología, evitando retrasar la estrategia invasiva o pretratar de forma irreflexiva antes de conocer anatomía si se prevé angiografía precoz; realizar estrategia invasiva temprana por infarto establecido más cambios dinámicos de ST; vigilar dolor, ECG, arritmias, presión arterial, congestión, sangrado, hemograma, creatinina y glucosa. La prevención secundaria debe iniciarse durante el ingreso y no dejarse como consejo abstracto de alta.',
        management:{
          expected:[
            { label:'Hospitalización inmediata en unidad monitorizada con valoración urgente por cardiología/intervencionismo', reason:'Hay infarto establecido con cambios dinámicos de ST-T. La estabilidad no permite manejo ambulatorio ni observación pasiva.' },
            { label:'Ácido acetilsalicílico en dosis de carga, si no hay alergia ni sangrado activo', reason:'Es pilar de la terapia antiagregante inicial en SCA; en esta paciente no hay antecedente hemorrágico o alergia conocido.' },
            { label:'Anticoagulación parenteral según protocolo institucional y estrategia invasiva', reason:'Reduce progresión trombótica en SCA sin elevación del ST. La función renal y pruebas de hemostasia permiten elegir y dosificar de forma segura, con verificación local.' },
            { label:'Estatina de alta intensidad durante el ingreso', reason:'LDL muy elevado y SCA confirman riesgo cardiovascular muy alto; el antecedente de mialgias exige reevaluación estructurada, no abandonar definitivamente la reducción intensiva de LDL.' },
            { label:'Nitrato sublingual para dolor isquémico/hipertensión si no hay hipotensión, infarto de ventrículo derecho ni uso de inhibidores de fosfodiesterasa 5', reason:'Alivia isquemia sintomática y reduce presión, pero no sustituye reperfusión/estrategia invasiva ni debe emplearse sin revisar contraindicaciones.' },
            { label:'Considerar beta-bloqueo oral temprano una vez excluidos bajo gasto, insuficiencia cardiaca aguda, riesgo de choque, bradicardia, bloqueo auriculoventricular y broncoespasmo activo', reason:'Reduce demanda miocárdica en pacientes seleccionados, pero su administración irreflexiva puede precipitar deterioro hemodinámico.' },
            { label:'Definir con cardiología el agente P2Y12 y el momento de carga en relación con angiografía temprana', reason:'La elección y temporización dependen de la probabilidad de intervención, riesgo hemorrágico, necesidad potencial de cirugía y protocolo. No debe retrasar la revascularización ni aplicarse como automatismo.' },
            { label:'Coronariografía temprana con intención de revascularización según anatomía', reason:'Infarto confirmado, cambios dinámicos de ST y dolor recurrente sitúan a la paciente en un grupo que se beneficia de estrategia invasiva durante el ingreso precoz.' },
            { label:'Control de glucosa con estrategia hospitalaria y plan de prevención secundaria individualizado', reason:'La hiperglucemia y HbA1c elevada aumentan riesgo; el alta requiere adherencia, objetivo de lípidos, PA, diabetes, rehabilitación cardiaca, abandono sostenido de tabaco y educación práctica.' }
          ],
          dangerousOmissions:[
            { label:'Administrar oxígeno rutinario con SatO₂ 98% al aire ambiente', reason:'No trata la isquemia y puede exponer a hiperoxia innecesaria; el oxígeno se reserva para hipoxemia o insuficiencia respiratoria.' },
            { label:'Etiquetar la troponina como “hipertensión” sin integrar síntomas, ECG seriados y cinética de troponina', reason:'Convertir toda elevación de troponina en lesión de demanda puede retrasar una estrategia coronaria necesaria.' },
            { label:'Dar de alta por mejoría transitoria después de nitrato', reason:'El alivio sintomático no resuelve el infarto establecido ni sustituye monitorización, antiagregación, anticoagulación y evaluación invasiva.' },
            { label:'Usar AINE para dolor torácico sin considerar SCA', reason:'Los AINE no son analgésicos de rutina para isquemia aguda y pueden empeorar riesgo cardiovascular y renal.' },
            { label:'Anticoagular sin reevaluar si aparecen rasgos de síndrome aórtico agudo', reason:'El nuevo dolor transfixiante, déficit de pulso, focalidad neurológica, hipotensión o insuficiencia aórtica exige detener la inercia diagnóstica.' },
            { label:'Indicar una estatina y asumir que la adherencia ocurrirá sin explorar las mialgias previas', reason:'La intolerancia reportada debe caracterizarse, descartar causas reversibles y construir un esquema tolerable; abandonarla por completo deja un factor causal sin tratar.' }
          ],
          monitoringOmitted:[
            { label:'Telemetría continua y ECG repetido ante recurrencia de dolor', reason:'Detecta arritmias, cambios isquémicos dinámicos y evolución a elevación del ST.' },
            { label:'Signos vitales, dolor, perfusión y examen de congestión seriados', reason:'Identifican fracaso hemodinámico, edema pulmonar, choque o dolor refractario.' },
            { label:'Hemograma, función renal y signos de sangrado', reason:'Son necesarios para seguridad de anticoagulación, antiagregación y contraste.' },
            { label:'Glucemia capilar y corrección de alteraciones electrolíticas', reason:'Hiperglucemia y disionías aumentan riesgo de complicaciones y arritmias.' },
            { label:'Revisión inmediata de dolor y fenotipo de aorta si la clínica cambia', reason:'Un diagnóstico inicial probable no justifica ignorar una evolución incompatible.' },
            { label:'Ecocardiografía/revaluación de función ventricular si aparece insuficiencia cardiaca, nuevo soplo, arritmia o deterioro', reason:'La extensión isquémica y las complicaciones mecánicas cambian el destino y tratamiento.' }
          ],
          destination:{
            label:'Unidad coronaria o unidad de medicina/cardiología monitorizada con capacidad de coronariografía temprana',
            reason:'Infarto sin elevación del ST con alto riesgo isquémico por troponina dinámica, cambios ECG y dolor reciente en reposo. Escalar a UCI/área de reanimación si aparece choque, edema pulmonar, dolor refractario, arritmia maligna, elevación del ST o compromiso respiratorio.'
          }
        }
      }
    },

    module7Evaluation: {
      schemaVersion:'3.0',
      phaseComparisons:[
        {
          id:'m7_rc4_phase_m1',
          phase:'m1',
          title:'Triage e interrogatorio',
          studentBinding:{
            illnessField:'ill_m1',
            tierFields:['tier_m1_1','tier_m1_2','tier_m1_3'],
            selectedSources:['Triage','Interrogatorio']
          },
          illnessComparison:{
            student:'',
            studentField:'ill_m1',
            expert:'Dolor torácico opresivo de inicio en reposo, precedido por angina de esfuerzo; irradiación, diaforesis, náuseas y disnea breve en una paciente con factores de riesgo cardiovasculares. Estable al ingreso, pero con probabilidad clínica relevante de isquemia aguda.'
          },
          tier3Comparison:{
            student:'',
            studentFields:['tier_m1_1','tier_m1_2','tier_m1_3'],
            expert:'Principal: síndrome coronario agudo sin elevación persistente del ST. Alternativo: lesión miocárdica aguda o infarto tipo 2 por hipertensión. No perder: síndrome aórtico agudo.'
          },
          sections:[
            {
              title:'Triage',
              type:'findings',
              rows:[
                {
                  id:'m7_rc4_m1_triage_01',
                  severity:'red',
                  studentText:'',
                  studentFindingIds:['t03','t10'],
                  expertText:'Dolor torácico con diaforesis visible.',
                  expertNote:'El motivo de consulta debe mantenerse breve, pero la combinación de dolor torácico y diaforesis obliga a priorizar causas tiempo-dependientes. La diaforesis es un dato autonómico; no define por sí sola isquemia, pero aumenta su peso cuando acompaña a un dolor compatible.'
                },
                {
                  id:'m7_rc4_m1_triage_02',
                  severity:'yellow',
                  studentText:'',
                  studentFindingIds:['t04','t05','t06','t07'],
                  expertText:'PA 168/94 mmHg; FC 92 lpm; FR 20 rpm; SatO₂ 98%.',
                  expertNote:'Estos datos clasifican estabilidad inicial. La PA elevada contribuye a la carga miocárdica y debe tratarse con prudencia, pero no basta para atribuirle todo el dolor. Una saturación normal descarta la necesidad de oxígeno rutinario, no la necesidad de tratar un síndrome coronario agudo.'
                },
                {
                  id:'m7_rc4_m1_triage_03',
                  severity:'yellow',
                  studentText:'',
                  studentFindingIds:['t09'],
                  expertText:'Glucemia capilar 224 mg/dL.',
                  expertNote:'La hiperglucemia en el contexto agudo es un marcador de riesgo y puede reflejar diabetes mal controlada o respuesta de estrés. No confirma un diagnóstico cardiovascular, pero debe integrarse en la evaluación metabólica y en el plan de hospitalización.'
                }
              ]
            },
            {
              title:'Interrogatorio',
              type:'findings',
              rows:[
                {
                  id:'m7_rc4_m1_interrogatorio_01',
                  severity:'red',
                  studentText:'',
                  studentFindingIds:['i01','i02','i04a','i05','i06'],
                  expertText:'Dolor en reposo, de 40 minutos, precedido por angina de esfuerzo.',
                  expertNote:'La transición de síntomas inducidos por esfuerzo que ceden con reposo a un episodio prolongado en reposo es el cambio temporal que vuelve el cuadro inestable. No es solo una descripción del dolor: modifica urgencia, pruebas necesarias y disposición.'
                },
                {
                  id:'m7_rc4_m1_interrogatorio_02',
                  severity:'red',
                  studentText:'',
                  studentFindingIds:['i03','i04','i07','i08'],
                  expertText:'Dolor opresivo central con irradiación, diaforesis, náuseas y disnea.',
                  expertNote:'La calidad opresiva, la irradiación y los síntomas autonómicos forman un fenotipo anginoso. Ningún elemento aislado confirma infarto; la fuerza aparece al integrarlos con edad, riesgo cardiovascular, cronología y posteriormente ECG/troponina.'
                },
                {
                  id:'m7_rc4_m1_interrogatorio_03',
                  severity:'yellow',
                  studentText:'',
                  studentFindingIds:['i09','i10','i11','i12','i13','i14','i14a'],
                  expertText:'Sin rasgos pleuríticos, mecánicos, aórticos mayores, neurológicos ni tromboembólicos dominantes.',
                  expertNote:'Los hallazgos negativos no “descartan” por sí solos disección o embolia. Reducen su probabilidad y permiten que el clínico priorice. El error sería convertir una probabilidad menor en una probabilidad cero y dejar de revaluar si el patrón cambia.'
                },
                {
                  id:'m7_rc4_m1_interrogatorio_04',
                  severity:'yellow',
                  studentText:'',
                  studentFindingIds:['i15','i16','i17'],
                  expertText:'Factores de riesgo presentes; sin alergia, sangrado o anticoagulación referidos.',
                  expertNote:'El interrogatorio de medicamentos y sangrado es una intervención de seguridad. Antes de aspirina, anticoagulantes o contraste debe conocerse la exposición previa, alergias y riesgo hemorrágico. Retrasarlo hasta después de decidir tratamiento es una secuencia insegura.'
                }
              ]
            }
          ]
        },
        {
          id:'m7_rc4_phase_m2',
          phase:'m2',
          title:'Historial y revisión por sistemas',
          studentBinding:{
            illnessField:'ill_m2',
            tierFields:['tier_m2_1','tier_m2_2','tier_m2_3'],
            selectedSources:['Historial','Examen funcional']
          },
          illnessComparison:{
            student:'',
            studentField:'ill_m2',
            expert:'Paciente con riesgo aterosclerótico acumulado, prevención insuficiente y síntomas anginosos progresivos. No hay un desencadenante sistémico mayor que explique un desbalance aislado de oferta-demanda ni un fenotipo dominante de pericarditis, embolia pulmonar, aorta, reflujo o dolor musculoesquelético.'
          },
          tier3Comparison:{
            student:'',
            studentFields:['tier_m2_1','tier_m2_2','tier_m2_3'],
            expert:'Principal: síndrome coronario agudo sin elevación persistente del ST, probable tipo 1. Alternativo: infarto tipo 2 o lesión miocárdica por desequilibrio oferta-demanda. No perder: síndrome aórtico agudo.'
          },
          sections:[
            {
              title:'Antecedentes y medicamentos',
              type:'findings',
              rows:[
                {
                  id:'m7_rc4_m2_historial_01',
                  severity:'red',
                  studentText:'',
                  studentFindingIds:['h01','h02','h03','h19','h15','h16'],
                  expertText:'Hipertensión, diabetes, dislipidemia sin tratamiento efectivo, ex tabaquismo y enfermedad coronaria familiar prematura.',
                  expertNote:'La probabilidad preprueba no depende de un único factor. El riesgo aterosclerótico se acumula: hipertensión, diabetes, LDL no tratado, tabaquismo previo y familiar de primer grado con enfermedad precoz hacen que un dolor compatible tenga más peso que el mismo dolor en una persona sin este perfil.'
                },
                {
                  id:'m7_rc4_m2_historial_02',
                  severity:'yellow',
                  studentText:'',
                  studentFindingIds:['h09','h10','h11','h23'],
                  expertText:'Adherencia irregular y suspensión de estatina sin reevaluación.',
                  expertNote:'No es un juicio moral sobre adherencia. Identificar el motivo permite construir prevención secundaria realista. Las mialgias atribuidas a estatinas deben caracterizarse y manejarse; abandonar toda reducción de LDL deja activo un mecanismo modificable del siguiente evento.'
                },
                {
                  id:'m7_rc4_m2_historial_03',
                  severity:'yellow',
                  studentText:'',
                  studentFindingIds:['h06','h12','h13','h14'],
                  expertText:'Sin nefropatía, sangrado digestivo, anticoagulantes, alergias ni estimulantes.',
                  expertNote:'Estos negativos son datos de seguridad terapéutica. Afectan la selección, dosificación y vigilancia de antitrombóticos, contrastes y fármacos antiisquémicos; no son detalles secundarios.'
                }
              ]
            },
            {
              title:'Revisión por sistemas',
              type:'findings',
              rows:[
                {
                  id:'m7_rc4_m2_ros_01',
                  severity:'red',
                  studentText:'',
                  studentFindingIds:['ef03','ef17','ef18'],
                  expertText:'Angina de esfuerzo nueva con progresión a reposo; irradiación y equivalentes anginosos.',
                  expertNote:'La evolución temporal aporta más que la etiqueta “dolor torácico”. El curso esfuerzo → reposo en una paciente con alto riesgo define inestabilidad y mantiene SCA como hipótesis prioritaria antes de que lleguen los biomarcadores.'
                },
                {
                  id:'m7_rc4_m2_ros_02',
                  severity:'yellow',
                  studentText:'',
                  studentFindingIds:['ef14','ef15','ef16','ef19'],
                  expertText:'Disnea solo durante dolor; sin ortopnea, DPN, edema ni fenotipo respiratorio infeccioso.',
                  expertNote:'La disnea breve puede ser equivalente isquémico o respuesta autonómica. La ausencia de ortopnea, DPN, edema y estertores posteriores reduce la probabilidad de insuficiencia cardiaca aguda al ingreso, pero no reemplaza la vigilancia seriada.'
                },
                {
                  id:'m7_rc4_m2_ros_03',
                  severity:'yellow',
                  studentText:'',
                  studentFindingIds:['ef20','ef21','ef23','ef27','ef28','ef29','ef30'],
                  expertText:'Sin patrón aórtico, tromboembólico, gastrointestinal hemorrágico ni musculoesquelético convincente.',
                  expertNote:'Estos datos cambian el orden de prioridades. No deben usarse para cerrar el diferencial prematuramente; sirven para decidir qué pruebas son proporcionadas ahora y qué señales obligarían a reabrir hipótesis peligrosas.'
                }
              ]
            }
          ]
        },
        {
          id:'m7_rc4_phase_m3',
          phase:'m3',
          title:'Examen físico',
          studentBinding:{
            illnessField:'ill_m3',
            tierFields:['tier_m3_1','tier_m3_2','tier_m3_3'],
            selectedSources:['Examen físico']
          },
          illnessComparison:{
            student:'',
            studentField:'ill_m3',
            expert:'Paciente estable y bien perfundida, con diaforesis leve. Sin signos de insuficiencia cardiaca aguda, bajo gasto, causa musculoesquelética reproducible, embolia pulmonar clínica, síndrome aórtico manifiesto ni focalidad neurológica.'
          },
          tier3Comparison:{
            student:'',
            studentFields:['tier_m3_1','tier_m3_2','tier_m3_3'],
            expert:'Principal: síndrome coronario agudo sin elevación persistente del ST de alto riesgo clínico. Alternativo: lesión miocárdica por hipertensión no controlada. No perder: disección aórtica con presentación no clásica.'
          },
          sections:[
            {
              title:'Estabilidad y congestión',
              type:'findings',
              rows:[
                {
                  id:'m7_rc4_m3_01',
                  severity:'red',
                  studentText:'',
                  studentFindingIds:['f01','f02','f22','f34','f36','f55'],
                  expertText:'Diaforesis leve con perfusión conservada; yugulares no elevadas; pulmones sin edema; sin edema periférico.',
                  expertNote:'La exploración demuestra estabilidad fisiológica en ese momento. No hay evidencia clínica de choque o congestión, pero la estabilidad no hace ambulatorio a un posible SCA. Debe conducir a monitorización y reevaluación, no a falsa tranquilidad.'
                },
                {
                  id:'m7_rc4_m3_02',
                  severity:'yellow',
                  studentText:'',
                  studentFindingIds:['f37','f38','f39','f39a'],
                  expertText:'Ritmo regular; sin S3, soplo nuevo, roce pericárdico ni frémito.',
                  expertNote:'La ausencia de S3 o soplo nuevo disminuye la sospecha de insuficiencia cardiaca descompensada o complicación mecánica, pero no modifica por sí sola la necesidad de ECG seriado y biomarcadores en dolor isquémico.'
                }
              ]
            },
            {
              title:'Alternativas peligrosas',
              type:'findings',
              rows:[
                {
                  id:'m7_rc4_m3_03',
                  severity:'yellow',
                  studentText:'',
                  studentFindingIds:['f40','f41','f42','f43','f44'],
                  expertText:'Pulsos y PA simétricos; sin isquemia periférica, masa abdominal pulsátil ni soplo abdominal.',
                  expertNote:'La simetría de pulsos y de presión arterial reduce la probabilidad de disección con malperfusión, no elimina toda disección. Lo importante es reconocer qué cambio obligaría a detener antitrombóticos y revaluar.'
                },
                {
                  id:'m7_rc4_m3_04',
                  severity:'yellow',
                  studentText:'',
                  studentFindingIds:['f29','f53','f58','f59'],
                  expertText:'Dolor no reproducible; pantorrillas sin signos de TVP; examen neurológico sin focalidad.',
                  expertNote:'La falta de reproducibilidad hace menos probable una causa de pared torácica; la ausencia de signos de TVP o focalidad reduce diagnósticos alternativos. Ninguno de esos negativos sustituye el razonamiento probabilístico ni las pruebas indicadas.'
                }
              ]
            }
          ]
        },
        {
          id:'m7_rc4_phase_m4',
          phase:'m4',
          title:'Paraclínicos',
          studentBinding:{
            illnessField:'ill_m4',
            tierFields:['tier_m4_1','tier_m4_2','tier_m4_3'],
            selectedSources:['Paraclínicos']
          },
          illnessComparison:{
            student:'',
            studentField:'ill_m4',
            expert:'Dolor anginoso progresivo con troponina en ascenso claro y cambios isquémicos de ST/repolarización sin elevación persistente del ST. Función renal y hemostasia conservadas; radiografía sin congestión ni mediastino ensanchado. Infarto agudo de miocardio sin elevación del ST, probable tipo 1, sin choque ni insuficiencia cardiaca aguda.'
          },
          tier3Comparison:{
            student:'',
            studentFields:['tier_m4_1','tier_m4_2','tier_m4_3'],
            expert:'Principal: infarto agudo de miocardio sin elevación del ST, probable tipo 1. Alternativo: infarto tipo 2 por hipertensión no controlada. No perder: síndrome aórtico agudo.'
          },
          sections:[
            {
              title:'Lesión miocárdica e isquemia',
              type:'findings',
              rows:[
                {
                  id:'m7_rc4_m4_01',
                  severity:'red',
                  studentText:'',
                  studentFindingIds:['p13','p14','p15'],
                  expertText:'Troponina I de alta sensibilidad: 68 → 286 → 1.420 ng/L.',
                  expertNote:'Una serie ascendente demuestra lesión miocárdica aguda. La troponina no identifica por sí sola el mecanismo. Aquí el diagnóstico de infarto se establece porque la lesión miocárdica se acompaña de síntomas y ECG compatibles con isquemia.'
                },
                {
                  id:'m7_rc4_m4_02',
                  severity:'red',
                  studentText:'',
                  studentFindingIds:['ecg_inicial','ecg_recurrencia'],
                  expertText:'Descenso horizontal del ST y cambios laterales de repolarización, sin elevación persistente del ST.',
                  expertNote:'El ECG es una prueba seriada, no una fotografía única. La ausencia de elevación persistente del ST no descarta infarto. Los cambios de ST/repolarización en un contexto de dolor y troponina dinámica sostienen isquemia y elevan el riesgo.'
                }
              ]
            },
            {
              title:'Seguridad y diagnósticos alternativos',
              type:'findings',
              rows:[
                {
                  id:'m7_rc4_m4_03',
                  severity:'yellow',
                  studentText:'',
                  studentFindingIds:['radiografia_torax'],
                  expertText:'Radiografía sin edema pulmonar, derrame ni mediastino ensanchado.',
                  expertNote:'La radiografía no confirma un SCA. Aporta contexto: congestión, edema y alteraciones mediastínicas pueden cambiar el diferencial, el sitio de atención y la necesidad de estudios adicionales.'
                },
                {
                  id:'m7_rc4_m4_04',
                  severity:'yellow',
                  studentText:'',
                  studentFindingIds:['p01','p04','p05','p09','p10'],
                  expertText:'Hemoglobina, función renal y hemostasia dentro de rango de referencia.',
                  expertNote:'Estos resultados hacen menos probable anemia o sangrado como explicaciones de desequilibrio de oferta-demanda y permiten planificar antitrombóticos y contraste con mayor seguridad. No son “normales irrelevantes”: cambian el margen terapéutico.'
                },
                {
                  id:'m7_rc4_m4_05',
                  severity:'yellow',
                  studentText:'',
                  studentFindingIds:['p11','p12','p18','p19'],
                  expertText:'Glucosa y HbA1c elevadas; LDL y triglicéridos elevados.',
                  expertNote:'Estos datos no explican por completo el evento agudo, pero identifican mecanismos de riesgo residual que deben abordarse desde el ingreso. La prevención secundaria eficaz no se deja para una recomendación vaga al alta.'
                }
              ]
            }
          ]
        }
      ]
    },

    management: {
      expected:[
        { label:'Manejo de SCA sin elevación del ST con monitorización, antitrombóticos y estrategia invasiva temprana', reason:'Integra diagnóstico de infarto, control sintomático y prevención de progresión/complicaciones.' },
        { label:'Aspirina, anticoagulación parenteral según protocolo, estatina de alta intensidad, beta-bloqueo oral selectivo y definición individualizada de P2Y12', reason:'Constituyen la base farmacológica inicial, ajustada a sangrado, función renal, estabilidad hemodinámica, estrategia invasiva y anatomía coronaria.' },
        { label:'Coronariografía temprana', reason:'El infarto establecido más cambios dinámicos de ST-T identifica alto riesgo isquémico.' },
        { label:'Prevención secundaria estructurada antes del alta', reason:'La enfermedad aterosclerótica no se corrige solo con el episodio agudo; diabetes, LDL, PA, actividad física, alimentación, rehabilitación y adherencia deben abordarse como mecanismos del siguiente evento.' }
      ],
      dangerousOmissions:[
        { label:'No reconocer infarto por ausencia de elevación del ST', reason:'NSTEMI sigue siendo infarto y puede requerir estrategia invasiva urgente según riesgo.' },
        { label:'No revisar diagnósticos alternativos peligrosos antes o durante antitrombóticos', reason:'El síndrome aórtico agudo requiere otra secuencia diagnóstica y terapéutica.' },
        { label:'No vigilar sangrado, función renal y recurrencia isquémica', reason:'La terapia antitrombótica y el contraste exigen control clínico y bioquímico seriado.' }
      ],
      monitoringOmitted:[
        { label:'Telemetría y ECG seriados', reason:'Detectan arritmias, isquemia dinámica y posible progresión a STEMI.' },
        { label:'Dolor, PA, perfusión y congestión repetidos', reason:'Definen respuesta y estabilidad hemodinámica.' },
        { label:'Hemograma, creatinina, electrolitos y glucemia', reason:'Permiten tratamiento seguro y corrigen factores que aumentan complicaciones.' }
      ],
      destination:{
        label:'Unidad coronaria o unidad monitorizada con acceso a hemodinamia',
        reason:'La paciente está estable, pero tiene infarto sin elevación del ST de alto riesgo isquémico y requiere evaluación invasiva temprana.'
      }
    },

    // Módulo 7: usar comparisonByModule como fuente única para hallazgos, enfermedad actual y Tier 3 por etapa.
    // No declarar secciones manuales aquí: esos cuadros deben generarse desde los hallazgos seleccionados.




    clinicalReferences:[
      {
        authority:'ACC/AHA/ACEP/NAEMSP/SCAI',
        document:'2025 Guideline for the Management of Patients With Acute Coronary Syndromes',
        use:'Marco de manejo inicial del síndrome coronario agudo, terapia antitrombótica, estatina de alta intensidad, oxígeno solo ante hipoxemia, estrategia invasiva según riesgo, prevención secundaria y rehabilitación cardíaca.',
        citation:'Rao SV, O’Donoghue ML, Ruel M, et al. 2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for the Management of Patients With Acute Coronary Syndromes. Circulation. 2025.'
      },
      {
        authority:'ESC',
        document:'2023 ESC Guidelines for the management of acute coronary syndromes',
        use:'Evaluación diagnóstica de SCA, ECG seriado, biomarcadores de alta sensibilidad, estratificación de riesgo, estrategia invasiva en NSTE-ACS y principios de terapia antitrombótica.',
        citation:'Byrne RA, Rossello X, Coughlan JJ, et al. Eur Heart J. 2023;44:3720–3826. doi:10.1093/eurheartj/ehad191.'
      },
      {
        authority:'European Society of Cardiology / American College of Cardiology / American Heart Association / World Heart Federation',
        document:'Fourth Universal Definition of Myocardial Infarction',
        use:'Distinción entre lesión miocárdica aguda, infarto agudo de miocardio, infarto tipo 1 e infarto tipo 2; integración de troponina dinámica con evidencia clínica de isquemia.',
        citation:'Thygesen K, Alpert JS, Jaffe AS, et al. Eur Heart J. 2019;40:237–269. doi:10.1093/eurheartj/ehy462.'
      }
    ]
  }
};
