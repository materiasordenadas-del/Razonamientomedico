window.HCR_CASE_MODULES = window.HCR_CASE_MODULES || {};
window.HCR_CASE_MODULES.RC4 = window.HCR_CASE_MODULES.RC4 || {};

window.HCR_CASE_MODULES.RC4.module4 = {
  "tables": [
    {
      "title": "Laboratorio inicial",
      "helpId": "laboratorio",
      "rows": [
        {
          "id": "p01",
          "source": "Paraclínicos",
          "label": "Hemoglobina",
          "value": "10,6",
          "unit": "g/dL",
          "ref": "13,5–17,5",
          "termIds": []
        },
        {
          "id": "p02",
          "source": "Paraclínicos",
          "label": "VCM",
          "value": "88",
          "unit": "fL",
          "ref": "80–100",
          "termIds": []
        },
        {
          "id": "p03",
          "source": "Paraclínicos",
          "label": "Leucocitos",
          "value": "14.800",
          "unit": "/µL",
          "ref": "4.000–11.000",
          "termIds": []
        },
        {
          "id": "p04",
          "source": "Paraclínicos",
          "label": "Neutrófilos",
          "value": "82",
          "unit": "%",
          "ref": "40–70",
          "termIds": []
        },
        {
          "id": "p05",
          "source": "Paraclínicos",
          "label": "Plaquetas",
          "value": "298.000",
          "unit": "/µL",
          "ref": "150.000–450.000",
          "termIds": []
        },
        {
          "id": "p06",
          "source": "Paraclínicos",
          "label": "Proteína C reactiva",
          "value": "142",
          "unit": "mg/L",
          "ref": "<5",
          "termIds": []
        },
        {
          "id": "p07",
          "source": "Paraclínicos",
          "label": "VSG",
          "value": "86",
          "unit": "mm/h",
          "ref": "<20",
          "termIds": []
        },
        {
          "id": "p08",
          "source": "Paraclínicos",
          "label": "Creatinina",
          "value": "1,18",
          "unit": "mg/dL",
          "ref": "0,7–1,3",
          "termIds": []
        },
        {
          "id": "p09",
          "source": "Paraclínicos",
          "label": "Orina: eritrocitos",
          "value": "20–30",
          "unit": "/campo",
          "ref": "0–2",
          "termIds": []
        },
        {
          "id": "p10",
          "source": "Paraclínicos",
          "label": "Orina: proteínas",
          "value": "1+",
          "unit": "",
          "ref": "Negativo",
          "termIds": []
        }
      ]
    },
    {
      "title": "Microbiología",
      "helpId": "microbiologia",
      "rows": [
        {
          "id": "p11",
          "source": "Paraclínicos",
          "label": "Hemocultivos",
          "value": "Tres pares obtenidos antes de antimicrobianos",
          "unit": "",
          "ref": "Sin crecimiento",
          "termIds": []
        },
        {
          "id": "p12",
          "source": "Paraclínicos",
          "label": "Resultado preliminar de hemocultivos",
          "value": "Crecimiento en las seis botellas: cocos grampositivos en cadenas; identificación y sensibilidad en proceso",
          "unit": "",
          "ref": "Sin microorganismos",
          "termIds": []
        }
      ]
    },
    {
      "title": "Neuroimagen de urgencia",
      "helpId": "tomografia",
      "rows": [
        {
          "id": "p13",
          "source": "Paraclínicos",
          "label": "TC de cráneo sin contraste",
          "value": "Sin hemorragia intracraneal, lesión expansiva ni desviación de línea media",
          "unit": "",
          "ref": "Sin lesiones agudas",
          "termIds": []
        },
        {
          "id": "p14",
          "source": "Paraclínicos",
          "label": "Angio-TC cerebral",
          "value": "Oclusión distal de rama M2 izquierda; sin aneurisma evidente en el estudio inicial",
          "unit": "",
          "ref": "Sin oclusión arterial",
          "termIds": []
        },
        {
          "id": "p15",
          "source": "Paraclínicos",
          "label": "RM cerebral DWI",
          "value": "Infartos isquémicos agudos corticales pequeños en territorio frontal izquierdo y un foco puntiforme contralateral",
          "unit": "",
          "ref": "Sin restricción de difusión",
          "termIds": []
        }
      ]
    },
    {
      "title": "Estudio cardiaco",
      "helpId": "ecocardiografia",
      "rows": [
        {
          "id": "p16",
          "source": "Paraclínicos",
          "label": "Ecocardiograma focal inicial",
          "value": "Masa móvil adherida a la valva posterior mitral, aproximadamente 16 mm, con insuficiencia mitral al menos moderada",
          "unit": "",
          "ref": "Sin masa intracardíaca",
          "termIds": []
        },
        {
          "id": "p17",
          "source": "Paraclínicos",
          "label": "Ecocardiograma transesofágico",
          "value": "Solicitado con prioridad para caracterizar extensión valvular y complicaciones perianulares",
          "unit": "",
          "ref": "No aplica",
          "termIds": []
        }
      ]
    }
  ],
  "diagnosticImages": [
    {
      "id": "m4_img_01",
      "type": "ultrasound",
      "category": "Ecocardiografía",
      "categoryHelpId": "ecocardiografia",
      "title": "Ecocardiograma focal inicial",
      "image": "cases/RC4/assets/images/asset_001.webp",
      "description": "Estudio ecocardiográfico disponible para interpretación en el contexto de la evaluación actual.",
      "selectable": true
    }
  ]
};

window.HCR_CASE_MODULES.RC4.module4Media = window.HCR_CASE_MODULES.RC4.module4.diagnosticImages;
