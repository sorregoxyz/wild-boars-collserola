# Lo que no cuadra: incoherencias en los informes del MAPA

*Exploración de datos · 55 informes del MAPA, 28.11.2025 a 26.11.2026 · actualizada el 26.11.2026*

**En casi un año de informes semanales sobre la peste porcina africana en Cataluña hay cuatro errores aritméticos, una cifra copiada de la semana anterior, al menos cuatro cambios de categoría o de área sin explicación y ningún desglose de los positivos por vía de detección.** Ninguna de estas incoherencias altera por sí sola el orden de magnitud del recuento. Juntas, muestran que los informes no son un registro estable, sino un recuento que se rehace cada semana y cuyas reglas cambian por el camino sin aviso.

## Resumen

| Tipo | Informes | Qué pasa | Cómo lo trata la visualización |
|---|---|---|---|
| Suma que no cuadra | 26.03.2026, 12.11.2026, 19.11.2026 | Las categorías de negativos no suman el total declarado | Se usan las categorías |
| Cifra repetida | 19.03.2026 | Se repite el dato de capturados de la semana anterior | Se corrige con el total y la vigilancia pasiva |
| Recuento de focos contradictorio | 12.11.2026 | El texto da 81 focos; el pie del mapa, 82 | Se anota |
| Fecha de referencia errónea | 19.03.2026, 22.10.2026 | El informe dice comparar con una nota que no es la anterior | Se anota; las cifras se calculan respecto al informe anterior real |
| Total no informado | 02.12.2025 | Da los casos nuevos pero no el acumulado | Se deduce (2 + 7 = 9) |
| Informe sin cifras | 28.04.2026 | Solo actualiza la zonificación | Fila vacía |
| Negativos sin desglose | 04.12 a 29.12.2025 | 262 negativos sin categoría | Categoría "sin clasificar" |
| Categoría que cambia de nombre y de alcance | 05.01, 12.01 y 26.02.2026 | "Capturados en trampas", luego "capturados", luego "capturados o abatidos sin sintomatología clínica" | Se trata como una sola categoría, con nota |
| Área que se amplía | Desde el 19.03.2026 | Los negativos pasan a contarse en las zonas restringidas "y sus alrededores" | Se anota |
| Positivos sin desglose | Todos | Nunca se separan los positivos hallados muertos de los capturados | Reconstrucción a partir del texto (ver `positivos_por_via_de_deteccion.md`) |

## 1. Errores aritméticos

- **19.03.2026.** El informe da 2.179 negativos, de los cuales 1.408 capturados y 601 de vigilancia pasiva. Pero 1.408 + 601 = 2.009, no 2.179. La cifra de 1.408 es exactamente la del informe anterior (12.03.2026): todo indica que se copió sin actualizar. Si el total y la vigilancia pasiva son correctos, los capturados serían 1.578.
- **26.03.2026.** 1.794 capturados + 650 de vigilancia pasiva = 2.444, no los 2.441 declarados. Diferencia de 3 animales.
- **12.11.2026.** 12.795 capturados + 2.262 de vigilancia pasiva = 15.057, no los 15.055 declarados. Diferencia de 2 animales.
- **19.11.2026.** 12.978 capturados + 2.305 de vigilancia pasiva = 15.283, no los 15.308 declarados. Diferencia de 25 animales, y en sentido contrario a la de la semana anterior: ahora el total declarado supera a la suma de las categorías.
- **26.11.2026.** El informe vuelve a cuadrar (13.183 + 2.359 = 15.542), pero no corrige el del 19.11.2026 ni aclara cuál de sus dos cifras era la correcta.

Las diferencias de 2, 3 y 25 animales son pequeñas frente al total, pero indican que el total y el desglose se calculan por separado y nadie comprueba que coincidan. La de marzo afecta a 170 animales y, de no corregirse, haría que esa semana pareciera no tener capturas.

## 2. Cifras y referencias contradictorias

- **Focos (12.11.2026).** El texto dice que "el total de focos asciende a 81"; el pie del mapa 1 habla de "los 82 focos".
- **Fecha de la nota anterior.** El informe del 19.03.2026 se presenta como actualización "desde el 5 de marzo", cuando el anterior es del 12 de marzo. El del 22.10.2026 dice "desde el 8 de octubre", cuando el anterior es del 15 de octubre. En ambos casos las cifras sí cuadran con el informe inmediatamente anterior, así que parece un texto reutilizado sin actualizar.
- **Total que falta (02.12.2025).** El segundo informe anuncia 7 casos nuevos, pero no da el total acumulado de positivos.

## 3. Categorías que cambian sin aviso

La categoría que hoy reúne a la mayoría de los animales, los sanos capturados o abatidos, ha cambiado tres veces de nombre:

1. **05.01.2026:** "capturados en trampas".
2. **12.01.2026:** "capturados".
3. **26.02.2026:** "capturados o abatidos sin mostrar sintomatología clínica".

El cambio de febrero no es solo de nombre: incorpora a los animales abatidos (cazados), que antes no figuraban o no se nombraban. Ese informe suma 281 capturados en nueve días, el mayor salto hasta entonces. Los informes no aclaran si incluye animales abatidos en semanas anteriores que no se habían contado.

Antes de enero, los negativos tampoco tienen una definición estable: "animales muertos" (04.12), "muertos en el medio natural, carreteras o vías férreas" (12.12 y 16.12), "capturados o encontrados muertos" (19.12), "encontrados muertos" (29.12). Son 262 animales que la visualización muestra como "sin clasificar".

## 4. Un área que se amplía

Hasta marzo, los negativos se refieren a la zona infectada. Desde el 19.03.2026, a "las zonas restringidas y sus alrededores". Los informes nunca definen "los alrededores" ni dicen cuántas capturas se hacen dentro del perímetro vallado, cuántas en la zona tampón o "zona blanca" y cuántas fuera. El recuento de negativos crece así sobre un territorio que no se delimita.

## 5. Lo que nunca se desglosa

Los informes desglosan los negativos por vía de detección, pero nunca los positivos. Solo describen los casos nuevos de cada semana, a veces con cifras ("2 capturados"), a veces con una lista de tipos sin números ("cadáveres, restos y una colisión") y a veces sin ningún dato. De los 448 positivos acumulados, 126 no se pueden clasificar con la información publicada. Es justo el dato que permitiría saber si la captura de animales sanos encuentra el virus.

Hay una novedad que va en la buena dirección: el informe del 19.11.2026 es el primero que data los restos positivos (17 con más de cinco meses de muerte y 2 de entre 6 y 16 semanas) y que explica un aumento de casos por el esfuerzo de búsqueda. Es el tipo de información que permite leer el recuento semanal como lo que es. El informe siguiente, del 26.11.2026, ya no data los restos: la datación no se ha consolidado como práctica.

## 6. Una palabra que agrupa

Todos los informes cierran igual: "hasta la fecha se han analizado [otros] X animales que han resultado negativos". La palabra "analizados" pone en la misma frase a un cadáver hallado en el bosque y a un jabalí sano capturado en una trampa. No es un error, pero sí una elección: presenta como esfuerzo diagnóstico lo que, en su gran mayoría (el 83 % de todos los animales contabilizados), es despoblación.

## Reflexión

Ninguna de estas incoherencias, por separado, es un escándalo. Son el tipo de errores que aparecen cuando un documento se redacta cada semana a partir del anterior, con cifras que llegan de varios servicios. Pero juntas dicen algo sobre qué tipo de objeto es este recuento.

- **El recuento es un ensamblaje, no un registro.** Las cifras se rehacen cada semana, las categorías cambian de nombre y de alcance, el área se amplía, y los cambios no se anuncian. Quien lee los informes de uno en uno no los ve; solo aparecen cuando se leen en serie.
- **La precisión es asimétrica.** Los negativos se cuentan al animal y se desglosan por categoría; los positivos, que son el dato epidemiológico, no se desglosan nunca. El informe es más preciso sobre los animales que mata que sobre dónde encuentra el virus.
- **La rendición de cuentas depende de la serie.** Una medida que ha supuesto la muerte de más de 13.000 animales sanos se documenta en notas semanales sin un registro consolidado, sin correcciones publicadas y sin definiciones estables. Reconstruir la serie, como hace esta visualización, es la única forma de ver la medida en su conjunto.

## Preguntas para la administración

1. ¿Cuál es la cifra correcta de capturados del 19.03.2026?
2. ¿Hay un registro consolidado de la serie, con las correcciones aplicadas?
3. ¿Qué abarca "los alrededores" de las zonas restringidas, y cuántas capturas se hacen dentro y fuera del perímetro vallado?
4. ¿El salto de 281 capturados del 26.02.2026 incluye animales abatidos en semanas anteriores?
5. ¿Cuántos de los 458 positivos son animales capturados o abatidos, y cuántos cadáveres o restos?
6. ¿Cuántos focos había a 12.11.2026: 81 u 82?
7. ¿Cuál es el total correcto de negativos a 19.11.2026: 15.283 o 15.308?

## Fuentes y método

- Informes del MAPA, *Actualización de la situación de Peste Porcina Africana en jabalíes silvestres en Cataluña*, 28.11.2025 a 26.11.2026, en `reports/`.
- Las sumas se han comprobado informe a informe a partir del párrafo de cifras de cada nota. Los datos, con las correcciones aplicadas y documentadas, están en `data.js`; las cifras tal como se publicaron, en `ppa_catalunya_informes.csv`.
- Relacionado: `positivos_por_via_de_deteccion.md` y `desde-agosto-solo-muertos.md`.
