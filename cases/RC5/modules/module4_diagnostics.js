window.HCR_CASE_MODULES = window.HCR_CASE_MODULES || {};
window.HCR_CASE_MODULES.RC5 = window.HCR_CASE_MODULES.RC5 || {};

window.HCR_CASE_MODULES.RC5.module4 = {
  "tables": [
    {
      "title": "Hematología, bioquímica y hemostasia",
      "helpId": "hematologia_bioquimica_y_hemostasia",
      "rows": [
        {
          "id": "dato-par-hem-01",
          "source": "Paraclínicos",
          "label": "Leucocitos",
          "value": "12.4",
          "unit": "x10^9/L",
          "ref": "Lectura autorizada por TXT1: leucocitosis leve inespecífica; no se incorpora un umbral externo.",
          "termIds": [
            "leucocitos_recuento_de_globulos_blancos_obtenido_de_muestra_sanguinea_evalua_la_respuesta_celular_circulante",
            "se_interpreta_con_diferencial",
            "tiempo_de_enfermedad_y_contexto"
          ]
        },
        {
          "id": "dato-par-hem-02",
          "source": "Paraclínicos",
          "label": "Neutrófilos",
          "value": "75",
          "unit": "%",
          "ref": "No se usa un punto de corte decisional en este caso; se interpreta como diferencial celular contextual.",
          "termIds": [
            "neutrofilos_proporcion_de_un_subtipo_leucocitario_medida_en_el_hemograma_describe_distribucion_celular_y_no_identifica_una_etiologia_por_si_sola"
          ]
        },
        {
          "id": "dato-par-hem-03",
          "source": "Paraclínicos",
          "label": "Hemoglobina",
          "value": "11.8",
          "unit": "g/dL",
          "ref": "Lectura autorizada por TXT1: sin anemia grave documentada; no se incorpora un umbral externo.",
          "termIds": [
            "hemoglobina_proteina_transportadora_de_oxigeno_cuantificada_en_sangre_estima_capacidad_de_transporte",
            "requiere_interpretar_edad",
            "hidratacion_y_rango_del_laboratorio"
          ]
        },
        {
          "id": "dato-par-hem-04",
          "source": "Paraclínicos",
          "label": "Plaquetas",
          "value": "462",
          "unit": "x10^9/L",
          "ref": "Lectura autorizada por TXT1: respuesta inflamatoria reactiva posible; no se incorpora un umbral externo.",
          "termIds": [
            "plaquetas_elementos_sanguineos_implicados_en_hemostasia",
            "contados_en_hemograma_pueden_cambiar_con_inflamacion_u_otras_condiciones_y_no_son_especificas"
          ]
        },
        {
          "id": "dato-par-bio-01",
          "source": "Paraclínicos",
          "label": "Creatinina",
          "value": "0.55",
          "unit": "mg/dL",
          "ref": "Lectura autorizada por TXT1: función renal conservada para la seguridad de la fase; no se incorpora un umbral externo.",
          "termIds": [
            "creatinina_producto_metabolico_medido_en_sangre_para_estimar_funcion_renal_depende_de_masa_muscular",
            "hidratacion_y_metodo_analitico"
          ]
        },
        {
          "id": "dato-par-bio-02",
          "source": "Paraclínicos",
          "label": "AST",
          "value": "22",
          "unit": "U/L",
          "ref": "No se usa un punto de corte decisional en este caso; resultado contextual según TXT1.",
          "termIds": [
            "ast_enzima_medida_en_sangre_que_puede_provenir_de_varios_tejidos_su_interpretacion_aislada_tiene_baja_especificidad"
          ]
        },
        {
          "id": "dato-par-bio-03",
          "source": "Paraclínicos",
          "label": "ALT",
          "value": "18",
          "unit": "U/L",
          "ref": "No se usa un punto de corte decisional en este caso; resultado contextual según TXT1.",
          "termIds": [
            "alt_enzima_medida_en_sangre_con_predominio_hepatico_relativo_se_interpreta_con_otras_pruebas_y_no_define_lesion_por_si_sola"
          ]
        },
        {
          "id": "dato-par-coag-01",
          "source": "Paraclínicos",
          "label": "INR",
          "value": "1.0",
          "unit": "sin unidad",
          "ref": "Lectura autorizada por TXT1: sin coagulopatía relevante documentada; no se incorpora un umbral externo.",
          "termIds": [
            "inr_razon_estandarizada_derivada_del_tiempo_de_protrombina_evalua_una_parte_de_la_coagulacion_y_puede_variar_por_farmacos",
            "funcion_hepatica_y_tecnica"
          ]
        }
      ]
    },
    {
      "title": "Perfil lipídico",
      "helpId": "perfil_lipidico",
      "rows": [
        {
          "id": "dato-par-lip-01",
          "source": "Paraclínicos",
          "label": "Colesterol total",
          "value": "138",
          "unit": "mg/dL",
          "ref": "No decisional para el episodio actual; se conserva como categoría fija y contexto basal.",
          "termIds": [
            "colesterol_total_suma_de_fracciones_de_colesterol_medida_en_sangre_describe_riesgo_metabolico_basal_y_no_explica_por_si_solo_un_sindrome_agudo"
          ]
        },
        {
          "id": "dato-par-lip-02",
          "source": "Paraclínicos",
          "label": "LDL",
          "value": "74",
          "unit": "mg/dL",
          "ref": "No decisional para el episodio actual; se conserva como categoría fija y contexto basal.",
          "termIds": [
            "ldl_fraccion_de_colesterol_transportada_por_lipoproteinas_de_baja_densidad_se_obtiene_por_calculo_o_medicion_segun_laboratorio",
            "su_lectura_es_de_riesgo_basal"
          ]
        },
        {
          "id": "dato-par-lip-03",
          "source": "Paraclínicos",
          "label": "HDL",
          "value": "46",
          "unit": "mg/dL",
          "ref": "No decisional para el episodio actual; se conserva como categoría fija y contexto basal.",
          "termIds": [
            "hdl_fraccion_de_colesterol_transportada_por_lipoproteinas_de_alta_densidad_se_mide_en_perfil_lipidico_y_no_funciona_como_marcador_diagnostico_agudo"
          ]
        },
        {
          "id": "dato-par-lip-04",
          "source": "Paraclínicos",
          "label": "Triglicéridos",
          "value": "88",
          "unit": "mg/dL",
          "ref": "No decisional para el episodio actual; se conserva como categoría fija y contexto basal.",
          "termIds": [
            "trigliceridos_lipidos_circulantes_medidos_en_sangre_pueden_variar_con_ayuno_e_ingesta_reciente",
            "se_interpretan_como_contexto_metabolico"
          ]
        }
      ]
    },
    {
      "title": "Diagnóstico urinario y ácido-base",
      "helpId": "diagnostico_urinario_y_acido_base",
      "rows": [
        {
          "id": "dato-par-uri-01",
          "source": "Paraclínicos",
          "label": "Uroanálisis: densidad",
          "value": "1.018",
          "unit": "sin unidad",
          "ref": "No se usa un punto de corte decisional en este caso; se conserva como contexto de hidratación.",
          "termIds": [
            "densidad_urinaria_concentracion_relativa_de_solutos_en_una_muestra_de_orina_depende_de_hidratacion_y_momento_de_recoleccion",
            "no_estima_volumen_intravascular_de_forma_aislada"
          ]
        },
        {
          "id": "dato-par-uri-02",
          "source": "Paraclínicos",
          "label": "Uroanálisis: proteínas",
          "value": "Negativas",
          "unit": "cualitativa",
          "ref": "Referencia cualitativa del informe: negativa.",
          "termIds": [
            "proteinas_urinarias_deteccion_cualitativa_de_proteinas_en_orina_mediante_tira_reactiva_u_otro_metodo_un_resultado_aislado_no_descarta_todas_las_formas_de_enfermedad_renal"
          ]
        },
        {
          "id": "dato-par-uri-03",
          "source": "Paraclínicos",
          "label": "Uroanálisis: eritrocitos",
          "value": "0–2",
          "unit": "por campo",
          "ref": "Lectura autorizada por TXT1: sin hematuria significativa documentada; no se incorpora un umbral externo.",
          "termIds": [
            "eritrocitos_urinarios_celulas_rojas_cuantificadas_en_sedimento_urinario_dependen_de_la_toma_y_contaminacion_de_la_muestra",
            "requieren_correlacion_clinica"
          ]
        },
        {
          "id": "dato-par-gas-01",
          "source": "Paraclínicos",
          "label": "Gasometría venosa: pH",
          "value": "7.39",
          "unit": "sin unidad",
          "ref": "Lectura autorizada por TXT1: sin acidosis documentada en esta medición; no se incorpora un umbral externo.",
          "termIds": [
            "ph_venoso_medida_del_grado_de_acidez_de_una_muestra_de_sangre_venosa_se_interpreta_con_bicarbonato",
            "dioxido_de_carbono_y_estado_clinico"
          ]
        },
        {
          "id": "dato-par-gas-02",
          "source": "Paraclínicos",
          "label": "Gasometría venosa: pCO2",
          "value": "38",
          "unit": "mmHg",
          "ref": "Lectura autorizada por TXT1: sin hipercapnia documentada; no se incorpora un umbral externo.",
          "termIds": [
            "pco2_venosa_presion_parcial_de_dioxido_de_carbono_en_sangre_venosa_refleja_equilibrio_ventilatorio_de_manera_aproximada_y_no_sustituye_una_gasometria_arterial_cuando_esta_sea_necesaria"
          ]
        },
        {
          "id": "dato-par-gas-03",
          "source": "Paraclínicos",
          "label": "Gasometría venosa: bicarbonato",
          "value": "23",
          "unit": "mmol/L",
          "ref": "Lectura autorizada por TXT1: sin alteración ácido-base crítica; no se incorpora un umbral externo.",
          "termIds": [
            "bicarbonato_componente_metabolico_del_equilibrio_acido_base_medido_o_calculado_en_gasometria_debe_interpretarse_con_ph",
            "pco2_y_tendencia_temporal"
          ]
        },
        {
          "id": "dato-par-gas-04",
          "source": "Paraclínicos",
          "label": "Lactato",
          "value": "1.4",
          "unit": "mmol/L",
          "ref": "Lectura autorizada por TXT1: no apoya hipoperfusión sistémica; no se incorpora un umbral externo.",
          "termIds": [
            "lactato_metabolito_medido_en_sangre_asociado_a_balance_entre_produccion_y_depuracion_un_valor_aislado_no_resume_por_si_solo_perfusion_ni_causa"
          ]
        }
      ]
    },
    {
      "title": "Inflamación, microbiología e inmunología",
      "helpId": "inflamacion_microbiologia_e_inmunologia",
      "rows": [
        {
          "id": "dato-par-inf-01",
          "source": "Paraclínicos",
          "label": "Velocidad de sedimentación globular",
          "value": "78",
          "unit": "mm/h",
          "ref": "Elevación documentada en TXT1; se interpreta como reactante inflamatorio inespecífico.",
          "termIds": [
            "velocidad_de_sedimentacion_globular_medicion_indirecta_de_inflamacion_basada_en_el_descenso_de_eritrocitos_en_un_tubo_cambia_lentamente_y_es_inespecifica"
          ]
        },
        {
          "id": "dato-par-inf-02",
          "source": "Paraclínicos",
          "label": "Proteína C reactiva",
          "value": "7.6",
          "unit": "mg/dL",
          "ref": "Elevación documentada en TXT1; se interpreta como reactante inflamatorio inespecífico.",
          "termIds": [
            "proteina_c_reactiva_proteina_de_fase_aguda_cuantificada_en_sangre_informa_actividad_inflamatoria_y_debe_interpretarse_por_tendencia_y_contexto"
          ]
        },
        {
          "id": "dato-par-inf-03",
          "source": "Paraclínicos",
          "label": "Fibrinógeno",
          "value": "560",
          "unit": "mg/dL",
          "ref": "Lectura autorizada por TXT1: reactante de fase aguda elevado; no se incorpora un umbral externo.",
          "termIds": [
            "fibrinogeno_proteina_de_coagulacion_que_tambien_aumenta_con_inflamacion_se_mide_en_plasma_y_no_discrimina_etiologias_de_manera_aislada"
          ]
        },
        {
          "id": "dato-par-mic-01",
          "source": "Paraclínicos",
          "label": "Prueba rápida faríngea para estreptococo del grupo A",
          "value": "Negativa",
          "unit": "cualitativa",
          "ref": "Resultado cualitativo esperado: negativo para actividad faríngea en la toma actual.",
          "termIds": [
            "prueba_rapida_faringea_deteccion_de_antigeno_en_muestra_de_garganta_evalua_actividad_local_en_el_momento_de_toma",
            "un_negativo_no_reconstruye_por_si_solo_una_exposicion_previa"
          ]
        },
        {
          "id": "dato-par-mic-02",
          "source": "Paraclínicos",
          "label": "Cultivo faríngeo",
          "value": "Resultado definitivo diferido; no disponible en M4.",
          "unit": "cualitativa",
          "ref": "Resultado definitivo diferido; no disponible para la integración de M4.",
          "termIds": [
            "cultivo_faringeo_crecimiento_microbiologico_a_partir_de_muestra_de_garganta_requiere_incubacion_y_su_disponibilidad_puede_ser_posterior_a_la_evaluacion_inicial"
          ]
        },
        {
          "id": "dato-par-mic-03",
          "source": "Paraclínicos",
          "label": "Antiestreptolisina O",
          "value": "845",
          "unit": "UI/mL",
          "ref": "Límite superior local registrado: 320 UI/mL.",
          "termIds": [
            "antiestreptolisina_o_titulo_de_anticuerpos_medido_en_suero_frente_a_productos_estreptococicos_documenta_exposicion_inmunologica_previa",
            "no_prueba_infeccion_faringea_activa_por_si_solo"
          ]
        },
        {
          "id": "dato-par-mic-04",
          "source": "Paraclínicos",
          "label": "Límite superior local de antiestreptolisina O",
          "value": "320",
          "unit": "UI/mL",
          "ref": "Límite superior local consignado: 320 UI/mL.",
          "termIds": [
            "limite_superior_local_de_antiestreptolisina_o_umbral_analitico_comunicado_por_el_laboratorio_para_interpretar_ese_ensayo_su_valor_depende_del_metodo_y_poblacion_de_referencia"
          ]
        },
        {
          "id": "dato-par-mic-05",
          "source": "Paraclínicos",
          "label": "Anti-DNasa B",
          "value": "960",
          "unit": "U/mL",
          "ref": "Límite superior local registrado: 375 U/mL.",
          "termIds": [
            "anti_dnasa_b_titulo_de_anticuerpos_medido_en_suero_frente_a_una_enzima_estreptococica_aporta_evidencia_de_exposicion_previa_y_no_localiza_el_foco_actual"
          ]
        },
        {
          "id": "dato-par-mic-06",
          "source": "Paraclínicos",
          "label": "Límite superior local de anti-DNasa B",
          "value": "375",
          "unit": "U/mL",
          "ref": "Límite superior local consignado: 375 U/mL.",
          "termIds": [
            "limite_superior_local_de_anti_dnasa_b_umbral_analitico_reportado_por_el_laboratorio_para_ese_ensayo_no_debe_extrapolarse_entre_metodos_sin_validacion"
          ]
        },
        {
          "id": "dato-par-mic-07",
          "source": "Paraclínicos",
          "label": "Primer hemocultivo: muestra obtenida antes de antimicrobianos",
          "value": "En incubación; resultado definitivo diferido.",
          "unit": "cualitativa",
          "ref": "Resultado definitivo diferido; no disponible para la integración de M4.",
          "termIds": [
            "hemocultivo_cultivo_de_sangre_obtenido_con_tecnica_aseptica_para_buscar_bacteriemia_requiere_muestras_adecuadas_e_incubacion",
            "un_estado_inicial_pendiente_no_excluye_una_causa_endovascular"
          ]
        },
        {
          "id": "dato-par-mic-08",
          "source": "Paraclínicos",
          "label": "Segundo hemocultivo: muestra obtenida antes de antimicrobianos",
          "value": "En incubación; resultado definitivo diferido.",
          "unit": "cualitativa",
          "ref": "Resultado definitivo diferido; no disponible para la integración de M4.",
          "termIds": [
            "hemocultivo_cultivo_de_sangre_obtenido_con_tecnica_aseptica_para_buscar_bacteriemia_requiere_muestras_adecuadas_e_incubacion",
            "un_estado_inicial_pendiente_no_excluye_una_causa_endovascular"
          ]
        },
        {
          "id": "dato-par-mic-09",
          "source": "Paraclínicos",
          "label": "Tercer hemocultivo: muestra obtenida antes de antimicrobianos",
          "value": "En incubación; resultado definitivo diferido.",
          "unit": "cualitativa",
          "ref": "Resultado definitivo diferido; no disponible para la integración de M4.",
          "termIds": [
            "hemocultivo_cultivo_de_sangre_obtenido_con_tecnica_aseptica_para_buscar_bacteriemia_requiere_muestras_adecuadas_e_incubacion",
            "un_estado_inicial_pendiente_no_excluye_una_causa_endovascular"
          ]
        }
      ]
    },
    {
      "title": "Electrocardiograma de 12 derivaciones",
      "helpId": "electrocardiograma_de_12_derivaciones",
      "rows": [
        {
          "id": "dato-par-ecg-01",
          "source": "Paraclínicos",
          "label": "ECG de 12 derivaciones: ritmo",
          "value": "Sinusal",
          "unit": "cualitativa",
          "ref": "Referencia cualitativa: ritmo sinusal.",
          "termIds": [
            "no_aplica_el_ecg_no_lleva_ojito_en_m4"
          ]
        },
        {
          "id": "dato-par-ecg-02",
          "source": "Paraclínicos",
          "label": "ECG de 12 derivaciones: frecuencia ventricular",
          "value": "112",
          "unit": "latidos por minuto",
          "ref": "Lectura autorizada por TXT1: taquicardia registrada en ECG; no se incorpora un umbral externo.",
          "termIds": [
            "no_aplica_el_ecg_no_lleva_ojito_en_m4"
          ]
        },
        {
          "id": "dato-par-ecg-03",
          "source": "Paraclínicos",
          "label": "ECG de 12 derivaciones: intervalo PR",
          "value": "220",
          "unit": "ms",
          "ref": "Lectura autorizada por TXT1: alteración de conducción registrada; no se incorpora un umbral externo.",
          "termIds": [
            "no_aplica_el_ecg_no_lleva_ojito_en_m4"
          ]
        },
        {
          "id": "dato-par-ecg-04",
          "source": "Paraclínicos",
          "label": "ECG de 12 derivaciones: cambios isquémicos",
          "value": "Ausentes",
          "unit": "cualitativa",
          "ref": "Referencia cualitativa: ausencia de cambios isquémicos descritos.",
          "termIds": [
            "no_aplica_el_ecg_no_lleva_ojito_en_m4"
          ]
        }
      ]
    },
    {
      "title": "Ecocardiografía Doppler transtorácica",
      "helpId": "ecocardiografia_doppler_transtoracica",
      "rows": [
        {
          "id": "dato-par-eco-01",
          "source": "Paraclínicos",
          "label": "Ecocardiografía Doppler: insuficiencia mitral",
          "value": "Moderada",
          "unit": "cualitativa",
          "ref": "Interpretación por informe ecocardiográfico consignado en TXT1.",
          "termIds": [
            "ecocardiografia_doppler_ultrasonido_cardiaco_que_combina_imagen_anatomica_y_evaluacion_de_flujo_describe_valvulas_y_funcion",
            "depende_de_calidad_de_ventana_e_informe_especializado"
          ]
        },
        {
          "id": "dato-par-eco-02",
          "source": "Paraclínicos",
          "label": "Ecocardiografía Doppler: valvas mitrales",
          "value": "Móviles",
          "unit": "cualitativa",
          "ref": "Interpretación por informe ecocardiográfico consignado en TXT1.",
          "termIds": [
            "movilidad_valvular_desplazamiento_de_las_valvas_visualizado_en_ecocardiografia_se_interpreta_con_el_patron_global_de_flujo_y_anatomia",
            "no_de_forma_aislada"
          ]
        },
        {
          "id": "dato-par-eco-03",
          "source": "Paraclínicos",
          "label": "Ecocardiografía Doppler: coaptación mitral",
          "value": "Incompleta",
          "unit": "cualitativa",
          "ref": "Interpretación por informe ecocardiográfico consignado en TXT1.",
          "termIds": [
            "coaptacion_valvular_contacto_entre_bordes_de_las_valvas_durante_el_cierre_se_valora_en_multiples_planos_y_puede_requerir_correlacion_con_doppler"
          ]
        },
        {
          "id": "dato-par-eco-04",
          "source": "Paraclínicos",
          "label": "Ecocardiografía Doppler: función sistólica ventricular izquierda",
          "value": "Preservada",
          "unit": "cualitativa",
          "ref": "Interpretación por informe ecocardiográfico consignado en TXT1.",
          "termIds": [
            "funcion_sistolica_ventricular_izquierda_capacidad_de_contraccion_del_ventriculo_evaluada_por_ecocardiografia_no_resume_por_si_sola_todas_las_formas_de_compromiso_cardiaco"
          ]
        },
        {
          "id": "dato-par-eco-05",
          "source": "Paraclínicos",
          "label": "Ecocardiografía Doppler: derrame pericárdico",
          "value": "Ausente",
          "unit": "cualitativa",
          "ref": "Referencia cualitativa: derrame pericárdico ausente en el informe.",
          "termIds": [
            "derrame_pericardico_liquido_alrededor_del_corazon_visualizado_por_ecocardiografia_su_ausencia_no_excluye_otras_causas_de_sintomas_cardiovasculares"
          ]
        },
        {
          "id": "dato-par-eco-06",
          "source": "Paraclínicos",
          "label": "Ecocardiografía Doppler: masa valvular",
          "value": "No descrita",
          "unit": "cualitativa",
          "ref": "Referencia cualitativa: masa valvular no descrita en el informe.",
          "termIds": [
            "masa_valvular_imagen_focal_sobre_una_valvula_descrita_en_ecocardiografia_la_ausencia_de_una_masa_en_un_estudio_no_excluye_todas_las_causas_endovasculares"
          ]
        }
      ]
    }
  ],
  "diagnosticImages": [
    {
        "id":  "ecg_pr_largo",
        "type":  "ecg",
        "category":  "ECG",
        "title":  "Electrocardiograma de 12 derivaciones",
        "image":  "cases/RC5/assets/ecg/010102_ecg_intervalo_pr_largo_pag_0107_ecg_en_ejemplos_booksmedicos_org.webp",
        "description":  "Trazado electrocardiográfico de 12 derivaciones.",
        "findingText":  "Prolongación del intervalo PR.",
        "selectable":  true
    },
    {
        "id":  "eco_doppler_mitral",
        "type":  "ultrasound",
        "category":  "Ecografía",
        "title":  "Ecocardiografía Doppler color",
        "image":  "cases/RC5/assets/ultrasound/009160_otros_diagnosticos_doppler_echocardiogram_of_eccentric_mitral_in_sufficiency_during_pag_0689.webp",
        "description":  "Imagen Doppler color de flujo sistólico a través de una válvula auriculoventricular izquierda.",
        "findingText":  "Chorro sistólico excéntrico de regurgitación mitral.",
        "selectable":  true,
        "termIds":  [
                        "ecocardiografia_doppler",
                        "regurgitacion_mitral",
                        "flujo_sistolico"
                    ]
    }
]
};
window.HCR_CASE_MODULES.RC5.module4Media = window.HCR_CASE_MODULES.RC5.module4.diagnosticImages;
