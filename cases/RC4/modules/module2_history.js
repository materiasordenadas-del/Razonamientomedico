window.HCR_CASE_MODULES = window.HCR_CASE_MODULES || {};
window.HCR_CASE_MODULES.RC4 = window.HCR_CASE_MODULES.RC4 || {};

window.HCR_CASE_MODULES.RC4.module2 = {
  historial: [
    {
      title:'Antecedentes personales y patológicos',
      helpId:'antecedentes_personales_patologicos',
      items:[
        { id:'h01', source:'Historial', text:'Hipertensión arterial diagnosticada hace 9 años; seguimiento irregular y sin daño de órgano documentado', termIds:['hipertension_arterial'] },
        { id:'h02', source:'Historial', text:'Diabetes mellitus tipo 2 diagnosticada hace 8 años; último control metabólico referido como deficiente', termIds:['diabetes_mellitus_tipo_2'] },
        { id:'h03', source:'Historial', text:'Dislipidemia diagnosticada hace 5 años; suspendió estatina por mialgias sin ajuste médico posterior', termIds:['dislipidemia','estatinas'] },
        { id:'h04', source:'Historial', text:'Obesidad central; aumento de peso progresivo durante los últimos años' },
        { id:'h05', source:'Historial', text:'Niega infarto previo, angina diagnosticada, insuficiencia cardiaca, fibrilación auricular, enfermedad valvular significativa o enfermedad arterial periférica', termIds:['infarto_miocardio','angina','insuficiencia_cardiaca','fibrilacion_auricular','valvulopatia','enfermedad_arterial_periferica'] },
        { id:'h06', source:'Historial', text:'Niega enfermedad renal crónica, hepatopatía, anemia conocida, hemorragia digestiva, enfermedad ulcerosa péptica o trastorno hemorrágico', termIds:['enfermedad_renal_cronica','hemorragia_digestiva','ulcera_peptica','sangrado_mayor'] },
        { id:'h07', source:'Historial', text:'Niega accidente cerebrovascular, ataque isquémico transitorio, aneurisma aórtico o disección aórtica conocidos', termIds:['accidente_cerebrovascular'] },
        { id:'h08', source:'Historial', text:'Niega tromboembolismo venoso previo, cáncer activo, cirugía reciente, inmovilización prolongada o enfermedad autoinmune sistémica' }
      ]
    },
    {
      title:'Medicamentos',
      helpId:'medicamentos_actuales',
      items:[
        { id:'h09', source:'Historial', text:'Metformina 1.000 mg cada 12 horas prescrita; admite tomarla aproximadamente 4 a 5 días por semana', termIds:['metformina'] },
        { id:'h10', source:'Historial', text:'Losartán 50 mg al día prescrito; adherencia irregular, con omisión frecuente de dosis', termIds:['hipertension_arterial','presion_arterial'] },
        { id:'h11', source:'Historial', text:'Atorvastatina 20 mg nocturna suspendida por la paciente hace 6 meses debido a mialgias difusas, sin reevaluación clínica', termIds:['estatinas'] },
        { id:'h12', source:'Historial', text:'No recibe aspirina, otro antiagregante, anticoagulante ni antiinflamatorio no esteroideo de uso crónico', termIds:['antiagregantes','anticoagulantes','aine'] },
        { id:'h13', source:'Historial', text:'Niega alergias medicamentosas conocidas', termIds:['alergia_medicamentosa'] },
        { id:'h14', source:'Historial', text:'Niega consumo de fármacos simpaticomiméticos, cocaína, anfetaminas, ergotamina o suplementos herbales para bajar de peso' }
      ]
    },
    {
      title:'Antecedentes familiares',
      helpId:'antecedentes_familiares',
      items:[
        { id:'h15', source:'Historial', text:'Padre con infarto agudo de miocardio a los 54 años y muerte cardiovascular a los 61 años', termIds:['infarto_miocardio'] },
        { id:'h16', source:'Historial', text:'Hermano mayor con intervención coronaria percutánea a los 57 años', termIds:['revascularizacion_coronaria'] },
        { id:'h17', source:'Historial', text:'Madre con hipertensión arterial y diabetes mellitus tipo 2', termIds:['hipertension_arterial','diabetes_mellitus_tipo_2'] },
        { id:'h18', source:'Historial', text:'Niega antecedente familiar conocido de disección aórtica, síndrome de Marfan, muerte súbita hereditaria o miocardiopatía hipertrófica' },
        { id:'h18a', source:'Historial', text:'Tía materna con diabetes mellitus tipo 2 diagnosticada después de los 60 años, sin cardiopatía isquémica conocida', termIds:['diabetes_mellitus_tipo_2'] }
      ]
    },
    {
      title:'Hábitos psicosociobiológicos y contexto',
      helpId:'habitos_psicosociobiologicos_contexto',
      items:[
        { id:'h19', source:'Historial', text:'Exfumadora; antecedente aproximado de 22 paquetes-año, suspendió hace 4 años', termIds:['tabaquismo'] },
        { id:'h20', source:'Historial', text:'Niega consumo de alcohol de alto riesgo y niega drogas ilícitas' },
        { id:'h21', source:'Historial', text:'Trabaja como administradora de un comercio; horario prolongado, alimentación con alta proporción de ultraprocesados y baja actividad física estructurada', termIds:['sedentarismo'] },
        { id:'h22', source:'Historial', text:'Vive con su hija adulta; cuenta con apoyo familiar para tratamiento y seguimiento' },
        { id:'h23', source:'Historial', text:'Refiere dificultades para cumplir tratamiento por horario laboral, no por imposibilidad económica ni falta de acceso a medicamentos' },
        { id:'h24', source:'Historial', text:'No ha recibido educación estructurada reciente sobre riesgo cardiovascular, automonitoreo de presión arterial ni meta de lípidos', termIds:['presion_arterial','dislipidemia'] }
      ]
    }
  ],

  examenFuncional: [
    {
      title:'General',
      helpId:'revision_general',
      items:[
        { id:'ef01', source:'Examen funcional', text:'Refiere sudoración fría, náuseas y sensación de alarma asociadas a los episodios de opresión torácica', termIds:['diaforesis','nausea','dolor_toracico'] },
        { id:'ef02', source:'Examen funcional', text:'Niega fiebre, escalofríos, pérdida de peso involuntaria o síndrome constitucional', termIds:['fiebre'] },
        { id:'ef03', source:'Examen funcional', text:'Refiere disminución progresiva de la tolerancia al ejercicio durante las últimas tres semanas por aparición de presión torácica al esfuerzo', termIds:['angina'] },
        { id:'ef04', source:'Examen funcional', text:'Niega síncope, presíncope sostenido o deterioro súbito del estado mental', termIds:['sincope','alteracion_estado_mental'] },
        { id:'ef04a', source:'Examen funcional', text:'Niega sudoración nocturna fuera de los episodios dolorosos y no ha notado pérdida reciente de apetito', termIds:['sudoracion_nocturna','anorexia'] }
      ]
    },
    {
      title:'Piel',
      helpId:'revision_piel',
      items:[
        { id:'ef05', source:'Examen funcional', text:'Niega exantema, lesiones vesiculares, edema angioneurótico o equimosis espontáneas' },
        { id:'ef06', source:'Examen funcional', text:'Niega diaforesis nocturna fuera de los episodios dolorosos', termIds:['sudoracion_nocturna'] },
        { id:'ef07', source:'Examen funcional', text:'Niega heridas infectadas, úlceras crónicas o cambios de coloración persistente en extremidades' },
        { id:'ef07a', source:'Examen funcional', text:'Niega prurito generalizado, ictericia o cambios recientes en la coloración de la piel', termIds:['ictericia'] },
        { id:'ef07b', source:'Examen funcional', text:'Niega edema facial, edema de manos o edema progresivo de miembros inferiores', termIds:['edema_periferico'] }
      ]
    },
    {
      title:'Cabeza y ojos',
      helpId:'revision_cabeza_ojos',
      items:[
        { id:'ef08', source:'Examen funcional', text:'Niega cefalea súbita máxima, pérdida visual, diplopía, disartria o déficit neurológico focal', termIds:['cefalea','deficit_neurologico_focal','alteracion_visual'] },
        { id:'ef09', source:'Examen funcional', text:'Niega dolor mandibular al masticar o dolor temporal' },
        { id:'ef10', source:'Examen funcional', text:'Niega visión borrosa persistente durante los episodios de dolor', termIds:['alteracion_visual'] },
        { id:'ef10a', source:'Examen funcional', text:'Niega fotofobia, ojo rojo doloroso o secreción ocular' },
        { id:'ef10b', source:'Examen funcional', text:'Niega vértigo intenso, tinnitus o sensación de oído tapado de inicio reciente' }
      ]
    },
    {
      title:'Oídos, nariz, boca y garganta',
      helpId:'revision_orl',
      items:[
        { id:'ef11', source:'Examen funcional', text:'Refiere irradiación ocasional hacia mandíbula izquierda durante los episodios de opresión', termIds:['dolor_toracico','angina'] },
        { id:'ef12', source:'Examen funcional', text:'Niega odinofagia, disfagia, tos crónica o síntomas de infección respiratoria alta', termIds:['tos'] },
        { id:'ef13', source:'Examen funcional', text:'Niega dolor dental agudo o dolor facial que explique la molestia mandibular' },
        { id:'ef13a', source:'Examen funcional', text:'Niega ronquera, sensación de cuerpo extraño o dolor cervical anterior' },
        { id:'ef13b', source:'Examen funcional', text:'Niega epistaxis, rinorrea purulenta o congestión nasal importante' }
      ]
    },
    {
      title:'Respiratorio',
      helpId:'revision_respiratorio',
      items:[
        { id:'ef14', source:'Examen funcional', text:'Refiere sensación breve de falta de aire durante el dolor, sin disnea en reposo', termIds:['disnea'] },
        { id:'ef15', source:'Examen funcional', text:'Niega tos, expectoración, hemoptisis, dolor pleurítico o sibilancias', termIds:['tos','hemoptisis','dolor_pleuritico','sibilancias'] },
        { id:'ef16', source:'Examen funcional', text:'Niega ortopnea, disnea paroxística nocturna y edema periférico de nueva aparición', termIds:['ortopnea','disnea_paroxistica_nocturna','edema_periferico'] },
        { id:'ef16a', source:'Examen funcional', text:'Niega despertares nocturnos por falta de aire y niega necesidad de dormir sentada', termIds:['disnea_paroxistica_nocturna','ortopnea'] },
        { id:'ef16b', source:'Examen funcional', text:'Niega exposición reciente a humo intenso, infección respiratoria baja o contacto conocido con tuberculosis', termIds:['tuberculosis'] }
      ]
    },
    {
      title:'Cardiovascular',
      helpId:'revision_cardiovascular',
      items:[
        { id:'ef17', source:'Examen funcional', text:'Opresión retroesternal con componente de esfuerzo previo y progresión a episodios en reposo durante las últimas 12 horas', termIds:['angina','dolor_toracico'] },
        { id:'ef18', source:'Examen funcional', text:'Irradiación hacia mandíbula y hombro izquierdo, asociada a diaforesis y náuseas', termIds:['diaforesis','nausea','dolor_toracico'] },
        { id:'ef19', source:'Examen funcional', text:'No identifica palpitación sostenida, síncope, ortopnea, edema periférico ni ganancia rápida de peso', termIds:['palpitaciones','sincope','ortopnea','edema_periferico'] },
        { id:'ef20', source:'Examen funcional', text:'Niega dolor abrupto transfixiante hacia espalda, dolor migratorio, asimetría de pulsos o claudicación aguda', termIds:['pulsos_perifericos','enfermedad_arterial_periferica'] },
        { id:'ef20a', source:'Examen funcional', text:'Niega dolor de inicio exclusivamente posprandial, alivio consistente con antiácidos o empeoramiento al acostarse' }
      ]
    },
    {
      title:'Gastrointestinal',
      helpId:'revision_gastrointestinal',
      items:[
        { id:'ef21', source:'Examen funcional', text:'Refiere náuseas asociadas al dolor torácico; niega vómitos persistentes, hematemesis, melena o rectorragia', termIds:['nausea','vomito','hemorragia_digestiva'] },
        { id:'ef22', source:'Examen funcional', text:'Niega dolor epigástrico focal sostenido, dolor en hipocondrio derecho o dolor abdominal súbito', termIds:['dolor_epigastrico','dolor_abdominal'] },
        { id:'ef23', source:'Examen funcional', text:'Niega relación consistente del dolor actual con comida, antiácidos o posición' },
        { id:'ef23a', source:'Examen funcional', text:'Niega distensión abdominal persistente, diarrea reciente o estreñimiento nuevo', termIds:['diarrea'] },
        { id:'ef23b', source:'Examen funcional', text:'Niega disfagia progresiva, pirosis frecuente o regurgitación ácida nocturna' }
      ]
    },
    {
      title:'Genitourinario',
      helpId:'revision_genitourinario',
      items:[
        { id:'ef24', source:'Examen funcional', text:'Niega disuria, hematuria, oliguria o dolor lumbar', termIds:['disuria','hematuria','dolor_lumbar'] },
        { id:'ef25', source:'Examen funcional', text:'Refiere diuresis habitual conservada' },
        { id:'ef26', source:'Examen funcional', text:'Niega sangrado genital anormal actual', termIds:['sangrado_mayor'] },
        { id:'ef26a', source:'Examen funcional', text:'Niega urgencia urinaria, polaquiuria nocturna o incontinencia de nueva aparición' },
        { id:'ef26b', source:'Examen funcional', text:'Niega edema matutino, orina espumosa o antecedente de cálculos urinarios', termIds:['proteinuria'] }
      ]
    },
    {
      title:'Osteomuscular',
      helpId:'revision_osteomuscular',
      items:[
        { id:'ef27', source:'Examen funcional', text:'Niega trauma torácico, dolor que aumente con rotación del tronco o dolor reproducible al movimiento de hombro', termIds:['dolor_toracico'] },
        { id:'ef28', source:'Examen funcional', text:'Niega dolor lumbar súbito o dolor interescapular intenso', termIds:['dolor_lumbar','dolor_vertebral'] },
        { id:'ef29', source:'Examen funcional', text:'Niega edema unilateral de pierna, dolor en pantorrilla o limitación reciente de la marcha', termIds:['edema_periferico'] },
        { id:'ef29a', source:'Examen funcional', text:'Niega artralgias inflamatorias, rigidez matutina prolongada o debilidad muscular proximal', termIds:['artralgia'] },
        { id:'ef29b', source:'Examen funcional', text:'Niega dolor cervical irradiado a brazo ni parestesias persistentes en manos' }
      ]
    },
    {
      title:'Nervioso y mental',
      helpId:'revision_neurologico_mental',
      items:[
        { id:'ef30', source:'Examen funcional', text:'Niega paresia, alteración sensitiva, afasia, convulsiones o pérdida de conciencia', termIds:['deficit_neurologico_focal','convulsiones'] },
        { id:'ef31', source:'Examen funcional', text:'Refiere ansiedad reactiva al dolor, pero conserva orientación y capacidad de relatar una cronología coherente', termIds:['ansiedad'] },
        { id:'ef32', source:'Examen funcional', text:'Niega cefalea súbita, ataxia o síntomas compatibles con hipoperfusión cerebral', termIds:['cefalea'] },
        { id:'ef33', source:'Examen funcional', text:'No refiere uso de estimulantes ni cambio conductual previo al episodio' },
        { id:'ef33a', source:'Examen funcional', text:'Niega insomnio persistente, ánimo depresivo marcado o crisis de pánico previas' , termIds:['ansiedad'] }
      ]
    }
  ]
};
