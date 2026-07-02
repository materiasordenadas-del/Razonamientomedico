window.HCR_CASE_EXPERT = window.HCR_CASE_EXPERT || {};

window.HCR_CASE_EXPERT.RC4 = {
  expertEvaluation: {
    evaluationSchemaVersion:'2.0',

    findings: {
      selectedExpected:[
        't03','t04','t05','t06','t08','t10','t11','t12',
        'i01','i02','i03','i04','i05','i06','i07','i09','i10','i11','i12',
        'h01','h02','h03','h04','h05','h06','h09','h10','h11','h12','h13','h14','h15','h16','h19','h21','h23',
        'ef01','ef03','ef11','ef14','ef15','ef16','ef17','ef18','ef19','ef20','ef21','ef23','ef27','ef28','ef29','ef30','ef31',
        'f01','f02','f22','f28','f29','f34','f36','f37','f38','f40','f41','f42','f43','f44','f45','f53','f55','f58','f59',
        'p01','p04','p05','p07','p09','p10','p11','p12','p13','p14','p15','p16','p18','p19','p21','p22','p23','p24','p25','p26','p27'
      ],
      missedImportant:[
        't03','t04','t05','t08','t10','t12',
        'i01','i02','i03','i04','i05','i06','i07','i09','i10','i11','i12',
        'h01','h02','h03','h11','h12','h13','h15','h16','h19','h23',
        'ef17','ef18','ef20','ef21','ef23','ef27','ef28','ef29','ef30',
        'f22','f29','f34','f36','f37','f38','f40','f41','f43','f44','f53','f55','f58','f59',
        'p13','p14','p15','p21','p22','p23','p24','p25','p26','p27'
      ],
      lowValueSelected:[
        't09','ef05','ef06','ef09','ef10','ef12','ef13','ef24','ef25','ef26',
        'f10','f11','f12','f13','f14','f15','f19','f20','f21','f25','f26','f27',
        'f31','f32','f33','f46','f47','f48','f49','f50','f51'
      ]
    },

    comparisonByModule: {
      m1: {
        title:'Módulo 1 — Triage e interrogatorio',
        sourceComparison:{
          triage:{
            expectedSelected:['t03','t04','t05','t06','t08','t10','t11','t12'],
            criticalMisses:['t03','t04','t05','t08','t10','t12'],
            lowValueIfSelected:['t09'],
            rationale:'Dolor opresivo retroesternal en reposo, diaforesis, náuseas, hipertensión y glucemia elevada configuran un síndrome de dolor torácico agudo con alta preocupación isquémica. La estabilidad hemodinámica no excluye un síndrome coronario agudo ni permite postergar ECG y troponinas seriadas.'
          },
          interrogatorio:{
            expectedSelected:['i01','i02','i03','i04','i05','i06','i07','i09','i10','i11','i12'],
            criticalMisses:['i01','i02','i03','i04','i05','i06','i07','i09','i10','i11','i12'],
            lowValueIfSelected:['i08'],
            rationale:'La cronología esfuerzo → reposo, el carácter opresivo, irradiación, equivalentes autonómicos y factores de riesgo elevan de forma sustancial la probabilidad preprueba de isquemia aguda. Las preguntas dirigidas sobre dolor pleurítico, dolor transfixiante, déficit neurológico, tromboembolismo, sangrado y estimulantes no son relleno: condicionan el diferencial y la seguridad antitrombótica.'
          }
        },
        illnessActual:{
          expected:'Mujer de 59 años con hipertensión, diabetes tipo 2, dislipidemia sin estatina, obesidad central, antecedente de tabaquismo y fuerte historia familiar de enfermedad coronaria prematura. Durante tres semanas presentó opresión retroesternal inducida por esfuerzo que cedía con reposo; en las últimas 12 horas evolucionó a dos episodios más intensos en reposo, con irradiación a mandíbula y hombro izquierdo, diaforesis, náuseas y disnea breve. Está hipertensa pero perfundida, normoxémica, sin choque, síncope, focalidad neurológica ni datos clínicos fuertes de disección o embolia pulmonar.',
          essentialElements:['59 años','dolor opresivo retroesternal','progresión de esfuerzo a reposo','irradiación','diaforesis/náuseas','factores de riesgo aterosclerótico','antecedente familiar prematuro','estabilidad hemodinámica','cribado de aorta y embolia','riesgo de sangrado']
        },
        tier3:{
          leader:{ diagnosis:'Síndrome coronario agudo sin elevación persistente del ST — sospecha inicial', rationale:'El patrón de angina creciente, episodios en reposo, síntomas autonómicos y carga aterosclerótica requiere tratar primero la posibilidad de isquemia miocárdica aguda.' },
          alternative:{ diagnosis:'Lesión miocárdica aguda o infarto tipo 2 asociado a hipertensión no controlada', rationale:'La hipertensión puede causar desequilibrio oferta-demanda y elevación de troponina, pero aún no explica por sí sola la cronología anginosa y los cambios isquémicos que deben buscarse.' },
          cannotMiss:{ diagnosis:'Síndrome aórtico agudo', rationale:'Aunque la probabilidad clínica inicial es menor, administrar antitrombóticos a una disección no reconocida puede ser catastrófico; debe valorarse explícitamente antes de asumir que todo dolor torácico es coronario.' }
        }
      },

      m2: {
        title:'Módulo 2 — Historial y examen funcional',
        sourceComparison:{
          historial:{
            expectedSelected:['h01','h02','h03','h04','h05','h06','h09','h10','h11','h12','h13','h14','h15','h16','h19','h21','h23'],
            criticalMisses:['h01','h02','h03','h11','h12','h13','h14','h15','h16','h19','h23'],
            lowValueIfSelected:['h17','h18','h20','h22'],
            rationale:'Diabetes, hipertensión, dislipidemia sin tratamiento efectivo, tabaquismo previo e historia familiar prematura son datos causales, no una lista administrativa. La función renal, el antecedente hemorrágico, la medicación real y la exposición a estimulantes condicionan directamente la elección y seguridad del manejo agudo.'
          },
          examenFuncional:{
            expectedSelected:['ef01','ef03','ef11','ef14','ef15','ef16','ef17','ef18','ef19','ef20','ef21','ef23','ef27','ef28','ef29','ef30','ef31'],
            criticalMisses:['ef17','ef18','ef20','ef21','ef23','ef27','ef28','ef29','ef30'],
            lowValueIfSelected:['ef05','ef06','ef09','ef10','ef12','ef13','ef24','ef25','ef26'],
            rationale:'La progresión a dolor en reposo, los equivalentes anginosos y la ausencia de características pleuríticas, posicionales, reproducibles o transfixiantes refinan el fenotipo isquémico. Los negativos no excluyen por sí solos aorta o embolia; disminuyen su probabilidad y determinan que la evaluación adicional sea selectiva, no automática.'
          }
        },
        illnessActual:{
          expected:'Mujer de 59 años con alto riesgo aterosclerótico acumulado y prevención secundaria inexistente, que describe angina de esfuerzo nueva en las semanas previas con evolución a dolor de mayor intensidad en reposo, acompañado de síntomas autonómicos. No hay fiebre, anemia, hemorragia, hipoxemia, sepsis, arritmia sostenida, estimulantes ni otro desencadenante de demanda suficientemente intenso para explicar por sí solo un posible daño miocárdico. Tampoco hay un fenotipo clínico fuerte de pericarditis, embolia pulmonar o síndrome aórtico agudo.',
          essentialElements:['riesgo aterosclerótico acumulado','adherencia deficiente','angina de esfuerzo nueva','inestabilidad por dolor en reposo','equivalentes anginosos','sin disparador de tipo 2 evidente','sin fenotipo pleurítico/posicional','sin rasgos mayores de disección','riesgo hemorrágico bajo']
        },
        tier3:{
          leader:{ diagnosis:'SCA sin elevación del ST, probable infarto agudo de miocardio tipo 1', rationale:'El cambio temporal de angina estable aparente a dolor en reposo con síntomas autonómicos en una paciente de alto riesgo es compatible con inestabilidad de placa hasta demostrar lo contrario.' },
          alternative:{ diagnosis:'Infarto tipo 2 o lesión miocárdica aguda por desequilibrio oferta-demanda en hipertensión', rationale:'Debe mantenerse porque hay hipertensión y diabetes, pero necesita un desencadenante fisiológico demostrable y no debe usarse como explicación automática de toda troponina elevada.' },
          cannotMiss:{ diagnosis:'Síndrome aórtico agudo', rationale:'La ausencia de datos clásicos reduce la probabilidad, pero la evaluación de aorta debe acompañar toda decisión de anticoagulación si el relato, examen o imagen cambian.' }
        }
      },

      m3: {
        title:'Módulo 3 — Examen físico',
        sourceComparison:{
          examenFisico:{
            expectedSelected:['f01','f02','f22','f28','f29','f34','f36','f37','f38','f40','f41','f42','f43','f44','f45','f53','f55','f58','f59'],
            criticalMisses:['f02','f22','f29','f34','f36','f37','f38','f40','f41','f43','f44','f53','f58','f59'],
            lowValueIfSelected:['f10','f11','f12','f13','f14','f15','f19','f20','f21','f25','f26','f27','f31','f32','f33','f46','f47','f48','f49','f50','f51'],
            rationale:'El examen no confirma por sí solo un SCA, pero mide la gravedad fisiológica y explora alternativas que hacen peligroso el manejo antitrombótico. Pulmones limpios, yugulares no elevadas, perfusión preservada y ausencia de tercer ruido reducen la probabilidad de insuficiencia cardiaca aguda. Pulsos simétricos, PA bilateral equivalente, abdomen sin masa y examen neurológico normal reducen, sin anular, la probabilidad de disección.'
          }
        },
        illnessActual:{
          expected:'Paciente hemodinámicamente estable, discretamente diaforética pero normoxémica y bien perfundida. No presenta congestión pulmonar o sistémica, soplo nuevo, roce pericárdico, arritmia, déficit neurológico, diferencia de pulsos, asimetría de presión arterial, masa abdominal pulsátil, signos de TVP ni dolor de pared torácica reproducible. Este examen no descarta enfermedad coronaria; establece que, en el momento evaluado, no hay evidencia clínica de choque, edema pulmonar, disección manifiesta, embolia pulmonar o causa musculoesquelética convincente.',
          essentialElements:['perfusión conservada','sin congestión','sin S3 ni soplo nuevo','sin roce pericárdico','pulmones limpios','pulsos simétricos','PA bilateral equivalente','sin dolor reproducible','sin TVP','sin focalidad neurológica']
        },
        tier3:{
          leader:{ diagnosis:'SCA sin elevación del ST de alto riesgo clínico', rationale:'La ausencia de signos físicos dramáticos no reduce el valor de una historia de isquemia en reposo; el examen define estabilidad y guía el destino hospitalario.' },
          alternative:{ diagnosis:'Lesión miocárdica por hipertensión no controlada', rationale:'La PA elevada está presente, pero no hay edema pulmonar, crisis catecolaminérgica, arritmia ni otro factor claro que explique una gran isquemia de demanda.' },
          cannotMiss:{ diagnosis:'Disección aórtica con presentación no clásica', rationale:'Los pulsos y la PA simétricos reducen probabilidad, pero deben reintegrarse con cronología, ECG, radiografía y evolución antes de antitrombóticos si surge discordancia.' }
        }
      },

      m4: {
        title:'Módulo 4 — Paraclínicos',
        sourceComparison:{
          paraclinicos:{
            expectedSelected:['p01','p04','p05','p07','p09','p10','p11','p12','p13','p14','p15','p16','p18','p19','p21','p22','p23','p24','p25','p26','p27'],
            criticalMisses:['p13','p14','p15','p21','p22','p23','p24','p25','p26','p27'],
            lowValueIfSelected:['p02','p03','p06','p08','p17','p20'],
            rationale:'La elevación de troponina por encima del percentil 99 con ascenso marcado, en presencia de síntomas isquémicos, cambios dinámicos de ST-T y alteración segmentaria nueva, cumple el marco de lesión miocárdica aguda con evidencia clínica de isquemia: infarto agudo de miocardio. La ausencia de elevación persistente del ST lo ubica en el espectro sin elevación del ST, no en STEMI.'
          }
        },
        illnessActual:{
          expected:'Mujer de 59 años con dolor anginoso creciente y riesgo aterosclerótico alto, creatinina y hemostasia normales, glucemia y HbA1c elevadas, LDL 164 mg/dL y troponina I de alta sensibilidad con incremento de 68 a 1.420 ng/L en seis horas. Presenta depresión dinámica del ST y ondas T negativas laterales, con hipocinesia inferolateral leve en ecocardiograma, sin edema pulmonar, disfunción ventricular grave, derrame pericárdico, sobrecarga derecha ni datos clínico-radiográficos fuertes de aorta aguda. La representación correcta es infarto agudo de miocardio sin elevación del ST, probablemente por mecanismo aterotrombótico tipo 1, actualmente sin choque ni insuficiencia cardiaca.',
          essentialElements:['ascenso dinámico de troponina','síntomas de isquemia','cambios ST-T dinámicos','hipocinesia regional','sin elevación persistente del ST','función renal preservada','riesgo hemorrágico basal bajo','sin IC aguda','baja sospecha de aorta/TEP']
        },
        tier3:{
          leader:{ diagnosis:'Infarto agudo de miocardio sin elevación del ST, probable tipo 1', rationale:'Troponina dinámica más evidencia clínica, electrocardiográfica y ecocardiográfica de isquemia establece infarto; el contexto favorece ruptura/erosión de placa sobre causa de demanda aislada.' },
          alternative:{ diagnosis:'Infarto tipo 2 por hipertensión no controlada', rationale:'La hipertensión puede contribuir al desbalance, pero no explica de forma satisfactoria la angina de esfuerzo progresiva, la dinámica lateral ST-T y la alteración segmentaria en ausencia de otro desencadenante mayor.' },
          cannotMiss:{ diagnosis:'Síndrome aórtico agudo', rationale:'La probabilidad es baja por historia, examen y radiografía, pero no debe etiquetarse como cero. Si el dolor cambia a transfixiante, se vuelve migratorio, aparece asimetría de pulsos, déficit neurológico o insuficiencia aórtica, se suspende la inercia antitrombótica y se reevalúa de inmediato.' }
        }
      },

      m5: {
        title:'Módulo 5 — Pausa diagnóstica',
        expectedVenn:{
          dx1:'Infarto agudo de miocardio sin elevación del ST, probable tipo 1',
          dx2:'Infarto tipo 2 o lesión miocárdica aguda por hipertensión no controlada',
          dx3:'Síndrome aórtico agudo',
          pivotFinding:'Ascenso dinámico de troponina I de alta sensibilidad, acompañado de dolor isquémico, cambios laterales dinámicos de ST-T y alteración segmentaria inferolateral nueva.',
          sharedFinding:'Dolor torácico y presión arterial elevada.',
          decisiveAgainstDx2:'No existe anemia, hipoxemia, sepsis, arritmia sostenida, insuficiencia cardiaca aguda ni otro desencadenante fisiológico intenso que explique una demanda aislada; la evolución anginosa previa y los cambios regionales favorecen mecanismo coronario tipo 1.',
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
            { label:'Etiquetar la troponina como “hipertensión” sin integrar síntomas, ECG y ecocardiograma', reason:'Convertir toda elevación de troponina en lesión de demanda puede retrasar una estrategia coronaria necesaria.' },
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

    module7Evaluation: {
      illnessComparison: {
        student:'',
        expert:'Mujer de 59 años con hipertensión arterial, diabetes mellitus tipo 2 mal controlada, dislipidemia sin tratamiento efectivo, obesidad central, antecedente de tabaquismo e historia familiar de enfermedad coronaria prematura. Durante tres semanas presentó opresión retroesternal al esfuerzo que cedía con reposo y, en las últimas 12 horas, evolucionó a episodios más intensos en reposo, con irradiación a mandíbula y hombro izquierdo, náuseas, diaforesis y disnea breve. La enfermedad actual debe explicitar esta cronología de inestabilidad, sus factores causales ateroscleróticos, la ausencia de un desencadenante claro de infarto tipo 2 y la estabilidad actual sin signos de choque, edema pulmonar, disección aórtica manifiesta o embolia pulmonar.'
      },
      tier3Comparison: {
        student:'',
        expert:'El diagnóstico principal es infarto agudo de miocardio sin elevación del ST, probablemente tipo 1 por un mecanismo aterotrombótico coronario. Se fundamenta en el ascenso dinámico de troponina, síntomas isquémicos, cambios laterales dinámicos de ST-T e hipocinesia inferolateral nueva. La alternativa razonable es infarto tipo 2 o lesión miocárdica por hipertensión no controlada, pero queda debilitada por no existir anemia, hipoxemia, sepsis, arritmia sostenida, insuficiencia cardiaca aguda u otro disparador de demanda suficiente. El diagnóstico que no se puede perder es síndrome aórtico agudo: es poco probable por los datos disponibles, pero debe reactivarse de inmediato si el fenotipo de dolor, pulsos, presión arterial, examen neurológico o ecocardiograma cambia.'
      },
      sections: [
        {
          title:'Triage e interrogatorio',
          type:'findings',
          rows:[
            {
              id:'m7_rc4_triage_01',
              severity:'red',
              studentText:'',
              expertText:'Dolor opresivo retroesternal en reposo, irradiado y asociado a diaforesis/náuseas: debe tratarse como isquemia miocárdica aguda hasta demostrar lo contrario.',
              expertNote:'La paciente está estable; eso modifica el lugar y la secuencia de manejo, no la prioridad diagnóstica.',
              explanation:{
                title:'De síntoma a síndrome: reconocer inestabilidad isquémica',
                question:'¿Por qué era importante?',
                body:[
                  'El error inicial frecuente es fragmentar el cuadro: pecho, mandíbula, náuseas y ansiedad. En realidad, la combinación define un síndrome. La opresión retroesternal, la irradiación, la activación autonómica y la transición reciente a dolor en reposo son mecanismos clínicos de inestabilidad isquémica, no simples “síntomas atípicos”.',
                  'La presión arterial elevada no protege contra infarto; puede ser respuesta al dolor, factor que agrava el desequilibrio de oxígeno o comorbilidad crónica. A la vez, una PA conservada, saturación normal y perfusión adecuada permiten obtener ECG, troponinas y una evaluación dirigida sin retrasar por maniobras de reanimación innecesarias.'
                ],
                bullets:[
                  'La progresión de angina de esfuerzo a dolor en reposo pesa más que la intensidad aislada del dolor.',
                  'Diaforesis y náuseas son equivalentes anginosos cuando acompañan un dolor compatible.',
                  'Estabilidad no equivale a bajo riesgo cuando la historia es de isquemia en curso.'
                ],
                closing:'La primera decisión correcta no es “¿infarto sí o no?”; es reconocer que este fenotipo requiere una vía de síndrome coronario agudo.'
              }
            },
            {
              id:'m7_rc4_triage_02',
              severity:'yellow',
              studentText:'',
              expertText:'La cronología esfuerzo → reposo y los factores de riesgo aterosclerótico aumentan marcadamente la probabilidad previa de enfermedad coronaria obstructiva.',
              expertNote:'La diabetes, la dislipidemia no tratada y el antecedente familiar no son antecedentes de relleno: cambian la probabilidad antes del ECG.',
              explanation:{
                title:'Probabilidad preprueba: el contexto clínico sí cambia el significado de un ECG y una troponina',
                question:'¿Por qué era importante?',
                body:[
                  'La aterosclerosis no aparece por un único dato. Diabetes mal controlada, hipertensión, LDL elevado por suspensión de estatina, tabaquismo previo, obesidad central y enfermedad coronaria prematura familiar configuran una carga de riesgo coherente con placa vulnerable. Cada dato aislado tiene valor limitado; el conjunto modifica de forma importante la probabilidad preprueba.',
                  'No debe usarse el antecedente de “gastritis” ni una sensación de llenura previa para explicar por defecto un dolor nuevo que se hace de esfuerzo y luego de reposo. La fisiología de la angina es un desequilibrio entre entrega y demanda de oxígeno; la progresión temporal obliga a pensar que el problema dejó de ser estable.'
                ],
                bullets:[
                  'La historia cardiovascular debe ser causal: identificar factores que favorecen aterosclerosis y factores que desencadenan demanda.',
                  'La adherencia real importa más que la lista de fármacos prescritos.',
                  'No llames “atípico” a un patrón que sí contiene elementos isquémicos específicos.'
                ],
                closing:'Los factores de riesgo no diagnostican un infarto; hacen que un síntoma compatible sea más peligroso y que una prueba positiva tenga mayor peso.'
              }
            },
            {
              id:'m7_rc4_triage_03',
              severity:'red',
              studentText:'',
              expertText:'Antes de automatizar antiagregación y anticoagulación, hay que buscar activamente rasgos de síndrome aórtico agudo y otros diferenciales letales.',
              expertNote:'La baja probabilidad no es una licencia para no preguntar; es el resultado de preguntar y explorar bien.',
              explanation:{
                title:'Seguridad diagnóstica: no todo dolor torácico con troponina elevada es coronario',
                question:'¿Qué debía buscarse?',
                body:[
                  'En este caso se buscaron dolor abrupto y máximo desde el inicio, irradiación dorsal transfixiante, migración del dolor, síncope, déficit neurológico, asimetría de pulsos o presión arterial, soplo nuevo de insuficiencia aórtica y mediastino ensanchado. Ninguno está presente. Eso reduce sustancialmente la probabilidad de disección, pero la vigilancia continúa porque el cuadro puede evolucionar.',
                  'También se revisaron rasgos de embolia pulmonar: dolor pleurítico, hipoxemia, hemoptisis, signos de TVP e inmovilización. La ausencia conjunta hace baja la probabilidad clínica y evita pruebas indiscriminadas que retrasen el manejo coronario.'
                ],
                bullets:[
                  'La selección de antitrombóticos depende de que el diagnóstico alternativo peligroso sea razonablemente improbable.',
                  'Un ECG anormal o troponina elevada pueden aparecer en disección, embolia pulmonar y otras enfermedades críticas.',
                  'Si la historia cambia, se reinicia el razonamiento: no se protege una hipótesis por haber sido la primera.'
                ],
                closing:'La medicina segura no exige descartar toda posibilidad con una prueba; exige que la estrategia elegida sea coherente con la probabilidad y el daño potencial.'
              }
            }
          ]
        },
        {
          title:'Historial y examen funcional',
          type:'findings',
          rows:[
            {
              id:'m7_rc4_historia_01',
              severity:'yellow',
              studentText:'',
              expertText:'Ausencia de anemia, hemorragia, sepsis, hipoxemia, arritmia sostenida o estimulantes: no existe un disparador de demanda convincente para atribuir de entrada la troponina a infarto tipo 2.',
              expertNote:'Infarto tipo 2 no significa “troponina alta en paciente hipertensa”; requiere isquemia por desbalance oferta-demanda identificable.',
              explanation:{
                title:'Troponina elevada no es sinónimo automático de placa rota, pero tampoco autoriza una explicación cómoda',
                question:'¿Por qué era importante?',
                body:[
                  'El infarto tipo 2 exige lesión miocárdica aguda por desbalance de oxígeno asociado a un proceso capaz de generar esa demanda o disminuir el suministro: anemia grave, sepsis, hipoxemia, taquiarritmia sostenida, hipotensión, vasoespasmo, hipertensión extrema con daño agudo u otras situaciones. La paciente está hipertensa, pero no muestra un proceso fisiológico dominante suficiente que haga innecesaria la hipótesis coronaria tipo 1.',
                  'La clasificación no es semántica. Un error hacia tipo 2 puede retrasar angiografía y terapia antitrombótica en una lesión de placa; el error opuesto puede indicar antitrombóticos en una causa no coronaria. Por eso la decisión depende de la integración completa de síntomas, ECG, biomarcadores, ecocardiograma y contexto.'
                ],
                bullets:[
                  'Primero confirma lesión miocárdica aguda por cambio de troponina.',
                  'Después exige evidencia de isquemia para hablar de infarto.',
                  'Finalmente define el mecanismo más probable; no inviertas el razonamiento.'
                ],
                closing:'La hipertensión es un dato relevante, no un diagnóstico explicativo suficiente.'
              }
            },
            {
              id:'m7_rc4_historia_02',
              severity:'yellow',
              studentText:'',
              expertText:'Antecedentes de sangrado, función renal y medicamentos reales condicionan la seguridad de aspirina, anticoagulación, contraste y el plan de prevención secundaria.',
              expertNote:'Preguntar por tratamiento prescrito sin verificar adherencia es una forma de no conocer el tratamiento real.',
              explanation:{
                title:'La historia también construye el plan terapéutico',
                question:'¿Qué decisiones modifica?',
                body:[
                  'La ausencia de hemorragia digestiva previa, anticoagulantes, trombocitopenia o alergia conocida hace más factible usar terapia antitrombótica inicial, aunque el riesgo de sangrado siempre debe reevaluarse durante el ingreso. Creatinina normal y TFGe de 80 mL/min/1,73 m² permiten plantear anticoagulación y contraste con el ajuste habitual, no sin vigilancia.',
                  'La estatina suspendida por mialgias muestra un problema de prevención secundaria ya existente. La respuesta correcta no es ignorar la experiencia de la paciente ni aceptar la suspensión definitiva: hay que caracterizar síntomas, revisar interacciones y causas reversibles, elegir intensidad o agente tolerable y documentar un plan verificable.'
                ],
                bullets:[
                  'Riesgo isquémico y riesgo hemorrágico deben evaluarse simultáneamente.',
                  'Función renal condiciona dosis, elección de anticoagulante y seguridad del contraste.',
                  'La no adherencia es una variable clínica que hay que explicar y modificar, no una etiqueta moral.'
                ],
                closing:'Un manejo técnicamente correcto fracasa si no incorpora cómo la paciente realmente toma —o no toma— sus medicamentos.'
              }
            }
          ]
        },
        {
          title:'Examen físico',
          type:'findings',
          rows:[
            {
              id:'m7_rc4_examen_01',
              severity:'red',
              studentText:'',
              expertText:'Pulmones limpios, yugulares no elevadas, sin S3 y perfusión conservada: no hay insuficiencia cardiaca aguda ni choque al momento del examen.',
              expertNote:'Estos hallazgos definen gravedad actual; no reducen la necesidad de una estrategia invasiva por infarto documentado.',
              explanation:{
                title:'El examen cardiovascular mide la reserva fisiológica inmediata',
                question:'¿Qué cambia?',
                body:[
                  'La presencia de estertores, hipoxemia, S3, presión venosa yugular elevada, frialdad periférica, oliguria, hipotensión o alteración mental habría cambiado el destino hacia mayor nivel de atención y sugerido isquemia extensa, disfunción ventricular o complicación mecánica. Su ausencia permite unidad monitorizada, pero no disminuye el diagnóstico de infarto.',
                  'El error de semiología es buscar solo el “soplo del infarto”. En SCA, la mayoría de los hallazgos físicos tienen más valor para estratificar gravedad, complicaciones y diagnósticos alternativos que para confirmar la oclusión coronaria primaria.'
                ],
                bullets:[
                  'La congestión identifica insuficiencia cardiaca; la perfusión identifica componente de choque.',
                  'Un examen normal entre episodios no excluye isquemia dinámica.',
                  'Repetir examen es esencial: el estado puede cambiar mientras se espera angiografía.'
                ],
                closing:'En dolor torácico, el examen físico responde primero: “¿qué tan inestable está la paciente ahora?”'
              }
            },
            {
              id:'m7_rc4_examen_02',
              severity:'yellow',
              studentText:'',
              expertText:'Pulsos simétricos, presión arterial bilateral equivalente, sin masa abdominal pulsátil, sin déficit neurológico y sin dolor de pared reproducible reducen alternativas peligrosas y no isquémicas.',
              expertNote:'Ningún hallazgo negativo aislado descarta disección; el patrón conjunto es el que modifica la probabilidad.',
              explanation:{
                title:'Anatomía aplicada al diagnóstico diferencial de dolor torácico',
                question:'¿Por qué importan pulsos, PA, abdomen y neurología?',
                body:[
                  'Una disección que compromete ramas del arco puede producir déficit neurológico o desigualdad de pulsos; la extensión a subclavia puede generar diferencia de presión; la insuficiencia aórtica aguda puede producir un soplo nuevo y congestión; la extensión distal puede asociarse con dolor abdominal o isquemia. Nada de esto está presente, lo cual hace coherente continuar el protocolo coronario.',
                  'La ausencia de dolor reproducible a la palpación disminuye una causa musculoesquelética, pero tampoco convierte automáticamente el dolor en cardiaco. La exploración debe interpretar probabilidades, no sustituir la fisiopatología.'
                ],
                bullets:[
                  'Explorar ambos brazos no es un ritual: busca malperfusión de ramas arteriales.',
                  'El examen neurológico breve es obligatorio cuando se contempla aorta.',
                  'No uses un dato negativo para cerrar un diagnóstico; úsalo para redistribuir probabilidades.'
                ],
                closing:'La exploración dirigida convierte el diferencial de una lista en una comparación anatómica de hipótesis.'
              }
            }
          ]
        },
        {
          title:'Paraclínicos y pausa diagnóstica',
          type:'findings',
          rows:[
            {
              id:'m7_rc4_paraclinicos_01',
              severity:'red',
              studentText:'',
              expertText:'La troponina de alta sensibilidad sube de 68 a 1.420 ng/L: hay lesión miocárdica aguda. Los síntomas, ECG y ecocardiograma aportan la evidencia de isquemia necesaria para llamarla infarto.',
              expertNote:'Troponina alta sola significa lesión; infarto exige lesión aguda más contexto de isquemia.',
              explanation:{
                title:'Definición universal aplicada: separar lesión miocárdica de infarto',
                question:'¿Cuál es la secuencia lógica?',
                body:[
                  'Primer paso: la troponina supera el percentil 99 y cambia en serie, por lo que existe lesión miocárdica aguda. Segundo paso: la paciente tiene síntomas compatibles con isquemia, depresión dinámica del ST/ondas T laterales nuevas y una anomalía regional inferolateral de contractilidad. Estas tres capas aportan evidencia de isquemia y permiten diagnosticar infarto agudo de miocardio.',
                  'Tercer paso: se plantea el mecanismo. La historia de angina progresiva, el riesgo aterosclerótico y la falta de un desencadenante sistémico fuerte favorecen infarto tipo 1. La coronariografía definirá anatomía y estrategia; la clasificación clínica inicial no debe esperar a que la lesión evolucione.'
                ],
                bullets:[
                  'Cambio seriado de troponina = lesión aguda, no necesariamente infarto.',
                  'Síntomas o ECG o imagen isquémicos convierten la lesión en infarto.',
                  'El tipo de infarto se infiere por mecanismo; no se decide solo por el valor numérico.'
                ],
                closing:'La troponina no reemplaza el razonamiento. Obliga a hacerlo con más precisión.'
              }
            },
            {
              id:'m7_rc4_paraclinicos_02',
              severity:'red',
              studentText:'',
              expertText:'Depresión dinámica lateral del ST y T negativas nuevas sin elevación persistente del ST: el caso entra en el espectro de SCA sin elevación del ST, no en STEMI.',
              expertNote:'No toda isquemia transmural muestra elevación del ST y no todo NSTEMI puede manejarse lentamente.',
              explanation:{
                title:'Leer el ECG como un proceso dinámico',
                question:'¿Qué significan estos cambios?',
                body:[
                  'La depresión horizontal del ST en derivaciones laterales durante dolor refleja isquemia subendocárdica o una expresión electrocardiográfica de lesión isquémica no oclusiva completa. La mayor magnitud durante el dolor y el cambio posterior al nitrato muestran dinamismo, una información más valiosa que una toma aislada.',
                  'La ausencia de elevación persistente del ST evita activar un algoritmo de STEMI clásico, pero no convierte el episodio en benigno. En NSTEMI, troponina dinámica, cambios de ST y dolor recurrente definen riesgo alto y sostienen una estrategia invasiva temprana.'
                ],
                bullets:[
                  'Obtén ECG en el dolor y repítelo cuando cambia la clínica.',
                  'Compara derivaciones contiguas y evolución temporal, no solo una frase de informe.',
                  'No retrases tratamiento porque no hay elevación del ST.'
                ],
                closing:'El ECG es una película corta; leer una sola imagen puede hacerte perder la isquemia dinámica.'
              }
            },
            {
              id:'m7_rc4_paraclinicos_03',
              severity:'yellow',
              studentText:'',
              expertText:'La hipocinesia inferolateral nueva refuerza que el proceso es regional y coronario; la FEVI preservada y ausencia de edema pulmonar delimitan la gravedad actual, no el riesgo futuro.',
              expertNote:'Una FEVI de 55% no anula el diagnóstico ni la necesidad de coronariografía.',
              explanation:{
                title:'Ecocardiografía: anatomía funcional, no sustituto de angiografía',
                question:'¿Qué añade al caso?',
                body:[
                  'La contractilidad segmentaria depende de perfusión regional. Una hipocinesia inferolateral en el contexto adecuado integra el ECG lateral y la troponina dinámica. Es una pieza de coherencia fisiopatológica: el miocardio muestra una alteración donde el síndrome eléctrico y clínico sugería isquemia.',
                  'La ecocardiografía también busca derrame pericárdico, disfunción ventricular importante, complicaciones mecánicas, valvulopatía y sobrecarga de ventrículo derecho. Su normalidad parcial no descarta una lesión coronaria culpable; simplemente acota las complicaciones presentes.'
                ],
                bullets:[
                  'Una anomalía regional aumenta la coherencia de isquemia miocárdica.',
                  'FEVI preservada no equivale a miocardio ileso.',
                  'El ecocardiograma ayuda a estratificar; la anatomía coronaria requiere otra técnica.'
                ],
                closing:'El ecocardiograma no decide por sí solo revascularización, pero muestra qué parte del miocardio ya está pagando el costo de la isquemia.'
              }
            },
            {
              id:'m7_rc4_pausa_01',
              severity:'yellow',
              studentText:'',
              expertText:'El hallazgo pivote del Venn es la combinación —no un único número— de troponina dinámica, isquemia clínica, cambios ST-T y alteración regional.',
              expertNote:'La pausa diagnóstica debe diferenciar mecanismo tipo 1, mecanismo tipo 2 y aorta; no duplicar tres nombres del mismo diagnóstico.',
              explanation:{
                title:'Cómo debe funcionar el Venn de este caso',
                question:'¿Qué datos van en el centro y cuáles separan?',
                body:[
                  'Dolor torácico y presión arterial elevada pueden estar presentes en SCA, lesión de demanda y síndrome aórtico. Esos son datos compartidos. El ascenso pronunciado de troponina, los cambios dinámicos laterales y la hipocinesia regional favorecen el diagnóstico líder frente a una lesión por hipertensión aislada.',
                  'El Venn no debe usar “troponina positiva” como argumento final. En aorta o embolia también puede haber troponina. La separación se logra por la narrativa del dolor, pulsos, PA bilateral, neurología, radiografía, exploración y evolución.'
                ],
                bullets:[
                  'Centro: dolor torácico e hipertensión.',
                  'A favor de tipo 1: angina progresiva, ECG dinámico, troponina y pared regional.',
                  'Contra aorta: ausencia de fenotipo disecante y de signos de malperfusión, sin tratar esa ausencia como certeza absoluta.'
                ],
                closing:'La calidad de un diferencial se mide por los datos que lo separan, no por la cantidad de diagnósticos escritos.'
              }
            }
          ]
        },
        {
          title:'Manejo',
          type:'management',
          rows:[
            {
              id:'m7_rc4_manejo_01',
              severity:'red',
              studentText:'',
              expertText:'El núcleo inicial es unidad monitorizada, aspirina, anticoagulación parenteral individualizada, estatina de alta intensidad, control de síntomas y coronariografía temprana.',
              expertNote:'No se trata de enumerar fármacos: cada intervención debe responder a un mecanismo, riesgo o decisión de revascularización.',
              explanation:{
                title:'Manejo inicial: tratar la trombosis, proteger el miocardio y preparar la anatomía',
                question:'¿Por qué este plan es coherente?',
                body:[
                  'La aspirina limita activación plaquetaria; la anticoagulación reduce extensión de trombo; la estatina de alta intensidad estabiliza placa y reduce riesgo recurrente; el nitrato puede aliviar dolor isquémico y reducir presión si no hay contraindicaciones. Ninguno reemplaza la decisión anatómica. La paciente requiere valoración invasiva temprana porque ya hay infarto, cambios dinámicos de ST y síntomas en reposo.',
                  'El segundo antiagregante no debe colocarse como “cualquier P2Y12 para todos en triage”. Su selección y momento dependen de estrategia invasiva, riesgo de sangrado, necesidad eventual de cirugía, disponibilidad y protocolo. La regla es no retrasar la revascularización por una decisión farmacológica que debe tomarse en contexto.'
                ],
                bullets:[
                  'Usa aspirina si no hay contraindicación real.',
                  'Elige anticoagulante con función renal, sangrado y estrategia invasiva en mente.',
                  'No administres oxígeno si la paciente está normoxémica.',
                  'La respuesta al nitrato no confirma ni excluye SCA.'
                ],
                closing:'La farmacología inicial compra tiempo y reduce riesgo; la coronariografía define la vía definitiva de revascularización.'
              }
            },
            {
              id:'m7_rc4_manejo_02',
              severity:'red',
              studentText:'',
              expertText:'No dar alta por alivio transitorio ni atribuir el cuadro a hipertensión o gastritis sin integrar la definición de infarto.',
              expertNote:'El peligro no es solo omitir un medicamento; es detener el proceso diagnóstico cuando ya existen datos de alto riesgo.',
              explanation:{
                title:'Errores de manejo que cambian pronóstico',
                question:'¿Qué no debía ocurrir?',
                body:[
                  'La mejoría parcial luego de nitrato no demuestra una causa benigna. En esta paciente el daño miocárdico ya está documentado. El alta o la observación sin estrategia invasiva expone a recurrencia, arritmia, extensión del infarto y muerte.',
                  'Tampoco se debe etiquetar de forma reflexiva como “crisis hipertensiva”. La hipertensión puede coexistir, agravar isquemia y requerir tratamiento, pero la lógica diagnóstica exige explicar el conjunto. Si se usa como un cajón de sastre, se pierde el mecanismo aterotrombótico que requiere prevención secundaria y posible revascularización.'
                ],
                bullets:[
                  'No sustituyas un diagnóstico sindromático por un valor aislado de PA.',
                  'No uses AINE como tratamiento del dolor isquémico.',
                  'No demores hemodinamia por pruebas no indicadas cuando el fenotipo de aorta y embolia es bajo.',
                  'Reabre el diagnóstico diferencial si la evolución deja de ser coherente.'
                ],
                closing:'La omisión más grave no es olvidar una dosis; es no reconocer que el proceso activo requiere una estrategia hospitalaria completa.'
              }
            },
            {
              id:'m7_rc4_manejo_03',
              severity:'yellow',
              studentText:'',
              expertText:'La prevención secundaria empieza en urgencias: LDL, diabetes, PA, actividad física, alimentación, rehabilitación cardíaca y adherencia son parte del mecanismo del próximo evento.',
              expertNote:'La paciente no necesita solo indicaciones; necesita un plan verificable que resuelva las razones de su falta de adherencia previa.',
              explanation:{
                title:'Del evento agudo a la enfermedad crónica',
                question:'¿Qué debe quedar preparado antes del alta?',
                body:[
                  'El episodio no es un accidente aislado: es la manifestación clínica de una enfermedad aterosclerótica acumulada. La meta de LDL en muy alto riesgo, el control de glucosa, el manejo de presión arterial y el abandono sostenido de tabaco reducen eventos futuros. La rehabilitación cardíaca y la educación sobre síntomas de alarma son intervenciones con valor clínico, no anexos administrativos.',
                  'La paciente suspendió estatina por mialgias y omite medicación por rutina laboral. Un plan real pregunta qué ocurrió, ofrece alternativas, simplifica horarios cuando sea posible, incluye a la hija si la paciente lo desea y fija seguimiento concreto. Sin esa ingeniería práctica, el alta repite las condiciones que produjeron el evento.'
                ],
                bullets:[
                  'Caracteriza mialgias antes de declarar intolerancia definitiva.',
                  'Define objetivos de LDL, PA y diabetes con seguimiento programado.',
                  'Indica rehabilitación cardíaca y educación de alarma.',
                  'Comprueba comprensión y factibilidad antes de finalizar el ingreso.'
                ],
                closing:'La revascularización puede resolver una lesión; la prevención secundaria decide si la enfermedad vuelve a expresarse.'
              }
            }
          ]
        }
      ]
    },

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
