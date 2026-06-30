window.HCR_CASE_MODULES = window.HCR_CASE_MODULES || {};
window.HCR_CASE_MODULES.RC2 = window.HCR_CASE_MODULES.RC2 || {};

window.HCR_CASE_MODULES.RC2.module2 = {
    historial: [
      {
        title:'Antecedentes personales y patológicos',
        items:[
          { id:'h01', source:'Historial', text:'Hipertensión arterial diagnosticada hace 14 años', termIds:['hipertension_arterial'] },
          { id:'h02', source:'Historial', text:'Diabetes mellitus tipo 2 desde hace 9 años', termIds:['diabetes_mellitus_tipo_2'] },
          { id:'h03', source:'Historial', text:'Dislipidemia conocida desde hace 6 años', termIds:['dislipidemia'] },
          { id:'h04', source:'Historial', text:'Niega infarto previo, angina diagnosticada o revascularización coronaria', termIds:['infarto_miocardio','angina','revascularizacion_coronaria'] },
          { id:'h05', source:'Historial', text:'Niega insuficiencia cardiaca, fibrilación auricular o valvulopatía conocida', termIds:['insuficiencia_cardiaca','fibrilacion_auricular','valvulopatia'] },
          { id:'h06', source:'Historial', text:'Niega enfermedad renal crónica conocida', termIds:['enfermedad_renal_cronica'] },
          { id:'h07', source:'Historial', text:'Niega accidente cerebrovascular previo o enfermedad arterial periférica sintomática', termIds:['accidente_cerebrovascular','enfermedad_arterial_periferica'] },
          { id:'h08', source:'Historial', text:'Niega úlcera péptica, hemorragia digestiva o sangrado mayor previo', termIds:['ulcera_peptica','hemorragia_digestiva','sangrado_mayor'] }
        ]
      },
      {
        title:'Medicamentos',
        items:[
          { id:'h09', source:'Historial', text:'Losartán 50 mg al día, con adherencia irregular' },
          { id:'h10', source:'Historial', text:'Metformina 850 mg cada 12 horas, refiere omitir dosis con frecuencia' },
          { id:'h11', source:'Historial', text:'Atorvastatina 20 mg nocturna, suspendida por cuenta propia hace aproximadamente 4 meses' },
          { id:'h12', source:'Historial', text:'No recibe antiagregantes, anticoagulantes ni betabloqueantes' },
          { id:'h13', source:'Historial', text:'Niega alergias medicamentosas conocidas' },
          { id:'h14', source:'Historial', text:'Tomó un antiácido en casa sin alivio significativo del dolor' },
          { id:'h15', source:'Historial', text:'No ha usado AINE de manera crónica ni fármacos herbales de forma regular' }
        ]
      },
      {
        title:'Antecedentes familiares',
        items:[
          { id:'h16', source:'Historial', text:'Madre con diabetes mellitus tipo 2 e hipertensión arterial' },
          { id:'h17', source:'Historial', text:'Padre presentó infarto agudo de miocardio a los 57 años' },
          { id:'h18', source:'Historial', text:'Hermano con angioplastia coronaria a los 59 años' },
          { id:'h19', source:'Historial', text:'Niega historia familiar conocida de disección aórtica o muerte súbita hereditaria' },
          { id:'h20', source:'Historial', text:'Niega trastornos hereditarios de coagulación conocidos en la familia' }
        ]
      },
      {
        title:'Hábitos psicosociobiológicos y contexto',
        items:[
          { id:'h21', source:'Historial', text:'Fumadora activa: aproximadamente 22 paquetes-año' },
          { id:'h22', source:'Historial', text:'Consume alcohol de forma ocasional, sin consumo diario' },
          { id:'h23', source:'Historial', text:'Vida predominantemente sedentaria; refiere poco ejercicio regular' },
          { id:'h24', source:'Historial', text:'Dieta frecuente en alimentos ultraprocesados y alto contenido de sodio' },
          { id:'h25', source:'Historial', text:'Vive con su esposo; cuenta con red familiar de apoyo' },
          { id:'h26', source:'Historial', text:'No exposición ocupacional conocida a monóxido de carbono' }
        ]
      }
    ],

    examenFuncional: [
      {
        title:'General',
        items:[
          { id:'ef01', source:'Examen funcional', text:'Refiere diaforesis fría, náuseas y sensación de alarma durante el dolor actual' },
          { id:'ef02', source:'Examen funcional', text:'Niega fiebre, escalofríos o malestar infeccioso previo' },
          { id:'ef03', source:'Examen funcional', text:'Refiere fatiga al esfuerzo en los últimos días, sin pérdida de peso involuntaria' },
          { id:'ef04', source:'Examen funcional', text:'Niega síncope o presíncope durante el episodio actual' }
        ]
      },
      {
        title:'Piel',
        items:[
          { id:'ef05', source:'Examen funcional', text:'Refiere sudor frío asociado al dolor torácico' },
          { id:'ef06', source:'Examen funcional', text:'Niega erupciones, petequias o lesiones cutáneas nuevas' },
          { id:'ef07', source:'Examen funcional', text:'Niega cambios de coloración persistentes en labios o dedos' }
        ]
      },
      {
        title:'Cabeza y ojos',
        items:[
          { id:'ef08', source:'Examen funcional', text:'Niega cefalea intensa de inicio súbito' },
          { id:'ef09', source:'Examen funcional', text:'Niega pérdida visual, diplopía o visión borrosa persistente' },
          { id:'ef10', source:'Examen funcional', text:'Niega dolor ocular o dolor temporal' }
        ]
      },
      {
        title:'Oídos, nariz, boca y garganta',
        items:[
          { id:'ef11', source:'Examen funcional', text:'Niega rinorrea, odinofagia o síntomas respiratorios altos recientes' },
          { id:'ef12', source:'Examen funcional', text:'Niega dolor mandibular al masticar; refiere irradiación del dolor al ángulo mandibular' },
          { id:'ef13', source:'Examen funcional', text:'Niega sensación de globo faríngeo o ardor retroesternal ácido' }
        ]
      },
      {
        title:'Respiratorio',
        items:[
          { id:'ef14', source:'Examen funcional', text:'Refiere disnea leve acompañando al dolor actual' },
          { id:'ef15', source:'Examen funcional', text:'Niega tos, expectoración, fiebre o hemoptisis' },
          { id:'ef16', source:'Examen funcional', text:'Niega dolor pleurítico o empeoramiento del dolor con inspiración profunda' },
          { id:'ef17', source:'Examen funcional', text:'Niega ortopnea, disnea paroxística nocturna o edema de miembros inferiores' }
        ]
      },
      {
        title:'Cardiovascular',
        items:[
          { id:'ef18', source:'Examen funcional', text:'Refiere dolor opresivo retroesternal con irradiación a hombro izquierdo y mandíbula' },
          { id:'ef19', source:'Examen funcional', text:'Refiere episodios de opresión con esfuerzo durante la última semana, aliviados por reposo' },
          { id:'ef20', source:'Examen funcional', text:'Refiere que el episodio actual aparece en reposo y dura más que los previos' },
          { id:'ef21', source:'Examen funcional', text:'Niega palpitaciones sostenidas, síncope o edema periférico reciente' }
        ]
      },
      {
        title:'Gastrointestinal',
        items:[
          { id:'ef22', source:'Examen funcional', text:'Refiere náuseas sin vómitos durante el dolor' },
          { id:'ef23', source:'Examen funcional', text:'Niega dolor epigástrico localizado, relación clara con comidas o pirosis dominante' },
          { id:'ef24', source:'Examen funcional', text:'Niega hematemesis, melena o rectorragia' },
          { id:'ef25', source:'Examen funcional', text:'Niega dolor abdominal irradiado a espalda' }
        ]
      },
      {
        title:'Genitourinario',
        items:[
          { id:'ef26', source:'Examen funcional', text:'Niega disuria, hematuria o dolor lumbar' },
          { id:'ef27', source:'Examen funcional', text:'Diuresis habitual conservada según refiere' },
          { id:'ef28', source:'Examen funcional', text:'Niega uso reciente de anticonceptivos hormonales o terapia estrogénica' }
        ]
      },
      {
        title:'Osteomuscular',
        items:[
          { id:'ef29', source:'Examen funcional', text:'Niega traumatismo torácico o ejercicio inusual previo al dolor' },
          { id:'ef30', source:'Examen funcional', text:'Niega dolor que se reproduzca al mover el brazo o el tronco' },
          { id:'ef31', source:'Examen funcional', text:'Niega dolor, calor o aumento de volumen unilateral de pantorrilla' }
        ]
      },
      {
        title:'Nervioso y mental',
        items:[
          { id:'ef32', source:'Examen funcional', text:'Niega disartria, debilidad focal o asimetría facial' },
          { id:'ef33', source:'Examen funcional', text:'Niega pérdida de conciencia o convulsiones' },
          { id:'ef34', source:'Examen funcional', text:'Refiere ansiedad secundaria al dolor, pero permanece orientada y colaboradora' },
          { id:'ef35', source:'Examen funcional', text:'Niega dolor torácico acompañado de dolor dorsal súbito o déficit neurológico' }
        ]
      }
    ]
  };
