/* RC1 — ficha experta de comparación para M7. */
window.HCR_EXPERT_COMPARISON = {
  m1: {
    title:'Módulo 1 — Triage e interrogatorio',
    sourceComparison:{
      triage:{
        expectedSelected:['t03','t04','t05','t06','t08','t09','t10','t12'],
        criticalMisses:['t08','t09','t12'],
        lowValueIfSelected:['t11'],
        rationale:'Fiebre, taquicardia, taquipnea, hipoxemia y dolor pleurítico ubican un síndrome respiratorio agudo potencialmente grave sin choque inicial.'
      },
      interrogatorio:{
        expectedSelected:['i01','i02','i03','i04','i05','i06','i07'],
        criticalMisses:['i02','i03','i04','i05','i07'],
        lowValueIfSelected:['i08'],
        rationale:'La tos productiva, fiebre con escalofríos, dolor pleurítico y progresión de disnea apoyan infección respiratoria baja; los negativos cardiovasculares y tromboembólicos ordenan diferenciales.'
      }
    },
    illnessActual:{
      expected:'Hombre de 68 años con diabetes, hipertensión y antecedente de tabaquismo, con cuatro días de fiebre, escalofríos y tos productiva amarillenta, que progresa a disnea de esfuerzo y dolor pleurítico derecho; llega hipoxémico pero hemodinámicamente estable.',
      essentialElements:['68 años','fiebre y escalofríos','tos productiva','disnea progresiva','dolor pleurítico derecho','SatO₂ 89%','estabilidad hemodinámica']
    },
    tier3:{
      leader:{ diagnosis:'Neumonía adquirida en la comunidad con hipoxemia', rationale:'Síndrome febril respiratorio bajo con esputo purulento, dolor pleurítico e hipoxemia.' },
      alternative:{ diagnosis:'Embolia pulmonar aguda', rationale:'Disnea y dolor torácico exigen considerarla inicialmente, aunque no hay factores provocadores, hemoptisis ni signos de TVP.' },
      cannotMiss:{ diagnosis:'Sepsis de foco pulmonar', rationale:'Debe vigilarse por edad, infección, taquipnea e hipoxemia, aunque no hay choque ni lactato elevado al ingreso.' }
    }
  },
  m2: {
    title:'Módulo 2 — Historial y examen funcional',
    sourceComparison:{
      historial:{
        expectedSelected:['h01','h02','h04','h05','h06','h09','h10','h12','h13','h19','h21','h23'],
        criticalMisses:['h04','h12','h13'],
        lowValueIfSelected:['h15','h16','h18'],
        rationale:'Comorbilidad metabólica, edad, tabaquismo y ausencia de antibióticos/hospitalización recientes afectan gravedad y elección empírica; alergias e inmunosupresión determinan seguridad terapéutica.'
      },
      examenFuncional:{
        expectedSelected:['ef01','ef10','ef11','ef12','ef13','ef16','ef18','ef19','ef22','ef23','ef24'],
        criticalMisses:['ef10','ef11','ef12','ef16','ef23'],
        lowValueIfSelected:['ef04','ef07','ef20'],
        rationale:'El conglomerado respiratorio y sistémico sostiene infección pulmonar. Ausencia de ortopnea/edema, hemoptisis y signos de TVP disminuye probabilidad de insuficiencia cardiaca o TEP.'
      }
    },
    illnessActual:{
      expected:'Hombre de 68 años con diabetes, HTA y antecedente de tabaquismo, sin inmunosupresión ni exposición reciente a antibióticos IV/hospitalización, con síndrome febril respiratorio bajo de cuatro días, tos purulenta, dolor pleurítico y disnea progresiva con hipoxemia.',
      essentialElements:['comorbilidades','sin factores claros para MRSA/Pseudomonas','tos purulenta','dolor pleurítico','disnea','negativos para IC/TEP']
    },
    tier3:{
      leader:{ diagnosis:'Neumonía adquirida en la comunidad', rationale:'La historia consolida un proceso infeccioso respiratorio bajo de probable origen comunitario.' },
      alternative:{ diagnosis:'Insuficiencia cardiaca aguda', rationale:'Disnea en adulto mayor obliga considerarla, pero faltan ortopnea, DPN, edema e historia de IC.' },
      cannotMiss:{ diagnosis:'Embolia pulmonar aguda', rationale:'No hay desencadenantes o signos de TVP, pero la coexistencia de dolor torácico y disnea exige vigilancia diagnóstica.' }
    }
  },
  m3: {
    title:'Módulo 3 — Examen físico',
    sourceComparison:{
      examenFisico:{
        expectedSelected:['f01','f11','f16','f19','f23','f24','f25','f26','f27','f29','f33','f34','f43','f44','f46'],
        criticalMisses:['f19','f23','f24','f25','f26','f27','f43','f44'],
        lowValueIfSelected:['f21','f22','f37','f38','f39','f40'],
        rationale:'Matidez, crepitantes focales, soplo tubario y egofonía en base derecha constituyen un síndrome de condensación. Ausencia de edema/JVP y de signos de TVP orienta diferenciales.'
      }
    },
    illnessActual:{
      expected:'Paciente febril y discretamente diaforético, sin choque, con síndrome de condensación basal derecho: expansión disminuida, matidez, crepitantes focales, soplo tubario y egofonía; sin datos clínicos de congestión sistémica o TVP.',
      essentialElements:['síndrome de condensación','base derecha','matidez','crepitantes','soplo tubario','egofonía','sin edema/TVP']
    },
    tier3:{
      leader:{ diagnosis:'Neumonía lobar derecha', rationale:'El examen físico localiza consolidación pulmonar basal derecha.' },
      alternative:{ diagnosis:'Derrame pleural parapneumónico', rationale:'Puede coexistir con neumonía y requiere vigilancia, aunque la clínica no sugiere derrame significativo inicial.' },
      cannotMiss:{ diagnosis:'Insuficiencia respiratoria aguda hipoxémica', rationale:'SatO₂ 89% obliga soporte y monitorización aunque el paciente conserve estado mental y presión arterial.' }
    }
  },
  m4: {
    title:'Módulo 4 — Paraclínicos',
    sourceComparison:{
      paraclinicos:{
        expectedSelected:['p01','p02','p06','p09','p10','p11','p14','p15','p17','p18','p20','p21','p22'],
        criticalMisses:['p11','p14','p20','p21','p22'],
        lowValueIfSelected:['p03','p04','p05','p12','p13','p16'],
        rationale:'Leucocitosis neutrofílica, inflamación sistémica, hipoxemia y consolidación radiográfica/ecográfica establecen infección pulmonar con lesión alveolar focal. La gasometría muestra hipoxemia con hipocapnia por hiperventilación.'
      }
    },
    illnessActual:{
      expected:'Hombre de 68 años con síndrome febril respiratorio bajo e hipoxemia, con leucocitosis neutrofílica, marcadores inflamatorios elevados, PaO₂ 60 mmHg con hipocapnia y consolidación alveolar basal derecha con broncograma aéreo en radiografía y ecografía pulmonar.',
      essentialElements:['leucocitosis neutrofílica','PCR/procalcitonina elevadas','PaO₂ 60','consolidación basal derecha','broncograma aéreo','sin edema pulmonar']
    },
    tier3:{
      leader:{ diagnosis:'Neumonía adquirida en la comunidad con consolidación lobar derecha e insuficiencia respiratoria hipoxémica', rationale:'Los datos clínicos, laboratorio e imagen son concordantes.' },
      alternative:{ diagnosis:'Neumonía viral con sobreinfección bacteriana', rationale:'Contacto respiratorio previo y congestión inicial son compatibles, pero esputo purulento, neutrofilia y consolidación focal favorecen componente bacteriano.' },
      cannotMiss:{ diagnosis:'Sepsis de foco pulmonar con deterioro respiratorio', rationale:'Aún requiere vigilancia estrecha, evaluación seriada y decisión de ingreso por hipoxemia.' }
    }
  }
};
