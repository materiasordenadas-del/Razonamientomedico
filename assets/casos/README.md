# Biblioteca de imágenes para casos H-CR

Carpeta central para almacenar imágenes que podrán reutilizarse o asignarse a casos clínicos.

## Organización recomendada

```text
assets/casos/
├── portadas/
├── electrocardiogramas/
├── rayos-x/
├── ecogramas/
├── tomografias/
├── resonancias/
├── fotografias-clinicas/
└── otros/
```

## Convención de nombres

Usar nombres descriptivos, sin espacios ni tildes:

```text
rx_torax_neumonia_lobulo_inferior_derecho.jpg
ecg_fibrilacion_auricular_respuesta_rapida.png
portada_fiebre_malestar_cefalea_01.jpg
```

## Regla de uso

Esta carpeta es una biblioteca de recursos. Cada caso debe referenciar de forma explícita la imagen que utilizará desde su propio archivo de datos; no se asignarán imágenes automáticamente.

Para imágenes que pertenecen exclusivamente a un caso, mantenerlas en:

```text
cases/<ID_DEL_CASO>/assets/
```
