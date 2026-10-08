# Mapa de la frontera — Robótica educativa: simulador web + bloques + robot ESP32 compartido + analítica docente

**Proyecto:** robotica-educativa · **Fase:** Discovery · **Fecha:** 2026-10-08
**Base:** 60 entradas de `annotated_bibliography.md` (9 con algún dato UNVERIFIED)

---

## 1. Qué se sabe (consenso razonable)

### 1.1 La robótica educativa ayuda, pero con efectos modestos y heterogéneos
- Las revisiones coinciden en que tiene potencial, sobre todo en STEM, y en que faltan estudios cuantitativos rigurosos (Benitti, 2012; Xia y Zhong, 2018; Anwar et al., 2019).
- Los metaanálisis dan efectos medios en desempeño y actitudes:
  - Zhang et al. (2021): SMD = 0,46 global, con efectos menores en secundaria que en primaria.
  - Ouyang y Xu (2024): g = 0,488 global y g = 0,079 en pensamiento computacional, no significativo.
- **Implicación para la tesis:** no conviene prometer "mejora del pensamiento computacional". Las hipótesis H1–H4 (tiempo de práctica, usabilidad, transferencia y tiempo de evaluación) son más defendibles y medibles.

### 1.2 Los bloques reducen barreras y no perjudican el paso a texto
- Bloques frente a texto en secundaria: el grupo de bloques gana un poco más e informa más interés en la computación (Weintrop y Wilensky, 2017).
- Tras pasar a Java no hay diferencias entre quienes empezaron con bloques o con texto (Weintrop y Wilensky, 2019).
- El metaanálisis de Xu et al. (2019) da efectos pequeños y no significativos (g = 0,245).
- Los entornos híbridos (bloques más vista de código) se recomiendan como puente (Bau et al., 2017).
- **Implicación:** la combinación "Blockly + vista Python" está bien respaldada. Conviene presentarla como reducción de barrera, no como garantía de aprendizaje.

### 1.3 Los simuladores sustituyen bien parte de la práctica física y la aceleran
- Lo virtual y lo físico dan ganancias similares, pero cada uno enfatiza perspectivas distintas (Berland y Wilensky, 2015).
- Con simulación el curso se termina aproximadamente un mes antes (Liu et al., ≈2013; UNVERIFIED).
- Los simuladores reducen el costo y aumentan la disponibilidad (Tselegkaridis y Sapounidis, 2021).
- VEXcode VR nació explícitamente para evitar el cuello de botella de los kits (Sirinterlikci et al., 2022).

### 1.4 Ya existen piezas de la solución, pero dispersas
| Pieza | Quién ya la tiene |
|-------|-------------------|
| Simulador web + bloques + retos | Ángel-Díaz et al. (2020); Kibotics; Open Roberta; VEXcode VR; MetaRoboLearn |
| Simulador → robot real desde el navegador | Kibotics (mBot, EV3, Tello); Open Roberta (EV3, micro:bit, etc.); MetaRoboLearn (ROS2) |
| Bloques → MicroPython en ESP32 vía Web Serial | BIPES (da Silva Junior et al., 2020) |
| Un robot compartido por toda la clase con cola de programas | Mendieta (Zabala et al., 2021); laboratorios remotos (Garcia-Costa et al., 2020; RoboBlock; Robotarium) |
| ESP32 + bloques + casa domótica y robot | Facilino (Armesto et al., 2023) |
| Evaluación automática de programas de bloques | Dr. Scratch (Moreno-León et al., 2015); evaluadores automáticos de Kibotics |
| Analítica de intentos de programación en robótica | Scaradozzi et al. (2020) (logs en EV3 y k-means) |
| Panel docente con logs de programación | Diana et al. (2017); Grover et al. (2017) (en Alice, no en robótica) |

### 1.5 En Latinoamérica el cuello de botella también es el docente
- Los docentes desconocen cómo aplicar la robótica: el 74 % no sabe aplicarla y el 97 % desconoce los fundamentos, en una muestra de 35 docentes universitarios de una sola universidad peruana (Guerrero Támara et al., 2022).
- En Perú hay más de 20.000 kits distribuidos que requieren docentes capacitados (Fernández Morales et al., 2018).
- Hay una brecha entre el discurso y la práctica por falta de formación (Mesa Pinto, 2026).
- En Panamá: MEDUCA y FUNDESTEAM reportan más de 1.000 clubes y entre 1.300 y 1.600 docentes formados (2023, prensa). La evidencia académica nacional es escasa: Moreno et al. (2012) en 6 colegios de Chiriquí y Candanedo Yau (2026) a nivel universitario.

---

## 2. Qué falta (vacíos detectados)

| # | Vacío | Evidencia de que es un vacío | Fuerza |
|---|-------|------------------------------|--------|
| V1 | **Ninguna plataforma integra las cinco piezas:** simulador + bloques/código + robot real de bajo costo + analítica docente + gestión multi-colegio | No apareció ningún trabajo de proximidad 1. Los más cercanos (MetaRoboLearn, Kibotics, Open Roberta, VEXcode VR, BIPES) carecen de 1 a 3 piezas (ver tabla en `positioning.md`) | Alta, con la salvedad de que la búsqueda fue solo web, sin bases de suscripción |
| V2 | **Hay poca medición empírica de la transferencia simulador → robot real** (qué % de programas probados en el simulador funciona sin cambios en el robot) | Las revisiones se centran en catalogar simuladores o en el aprendizaje. MetaRoboLearn habla de "sim-to-real learning" sin métrica de éxito confirmada. No se encontró ningún estudio que reporte esa tasa en robótica escolar | Media-alta |
| V3 | **Pocos estudios en secundaria y con el docente como usuario** | Ztoupas et al. (2026, UNVERIFIED venue): intervenciones concentradas en nivel terciario y participación docente baja. Schwendimann et al. (2017): los paneles casi no se evalúan en entornos reales | Media |
| V4 | **La analítica de aprendizaje en robótica no llega al docente en tiempo útil** | Scaradozzi et al. (2020) analizan logs a posteriori (tarjeta SD + k-means); no hay panel. Los paneles docentes existentes son para Alice o Scratch, no para robots | Media-alta |
| V5 | **El "tiempo de práctica por estudiante" con pocos kits no se mide** | El argumento de pocos kits aparece como motivación (VEXcode VR, Mendieta, laboratorios remotos), pero no se encontró ningún estudio que mida minutos de práctica por estudiante con y sin simulador | Media (búsqueda no exhaustiva) |
| V6 | **No hay evidencia empírica sobre plataformas de robótica en colegios panameños** | Solo Moreno et al. (2012, descriptivo) y literatura gris de MEDUCA | Alta |
| V7 | **ESP32 + MicroPython en secundaria con evaluación de usuario** | BIPES no reporta estudio en aula de secundaria. Miranda et al. (2022) usan ESP32 + Blockly con universitarios. Lamprecht et al. (2021) usan Ardublockly (C++), no MicroPython | Media |
| V8 | **Solución multi-inquilino (multi-colegio) para robótica escolar en español** | Ninguna herramienta académica revisada declara gestión multi-colegio. Las comerciales (VEXcode VR) gestionan clases por licencia de docente, no por colegio | Media (falta verificar las funciones actuales de los productos) |

---

## 3. Dónde encaja la tesis

```
                 Simulador web     Robot real     Analítica docente
                 + bloques         de bajo costo  + multi-colegio
                 ─────────────     ─────────────  ─────────────────
Ángel-Díaz 2020       ●                 ○                ○
Open Roberta          ●                 ◐                ○
VEXcode VR            ●                 ○                ◐
Kibotics (TFG)        ●                 ◐                ◐ (evaluadores automáticos)
MetaRoboLearn 2025    ●                 ◐ (ROS2)         ○
BIPES 2020            ○                 ●                ○
Mendieta 2021         ○                 ● (cola)         ○
Facilino 2023         ○                 ●                ○
Scaradozzi 2020       ○                 ○                ◐ (logs, sin panel)
────────────────────────────────────────────────────────────────
ESTA TESIS            ●                 ● (ESP32 + cola) ● (panel + multi-colegio)
```
● = sí · ◐ = parcial · ○ = no (según la evidencia revisada; ver matices en `positioning.md`)

**Lectura:** la tesis no inventa piezas nuevas. Su aporte es **integrar** en una sola plataforma piezas validadas por separado y **medir** dos cosas que la literatura casi no mide: la tasa de transferencia simulador→robot (H3) y el tiempo de práctica por estudiante con pocos kits (H1). Todo en un contexto sin evidencia previa (colegios privados de Panamá).

---

## 4. Riesgos de "scooping" (que alguien publique lo mismo)

| Trabajo | Riesgo | Por qué | Acción sugerida |
|---------|--------|---------|-----------------|
| MetaRoboLearn (Terzic et al., ICCE 2025, Zagreb) | **Medio** | Proyecto activo con web, Blockly, Python, simulador y robot. Podría añadir analítica | Leer el texto completo. Diferenciarse por ESP32 de bajo costo, panel docente, multi-colegio, español y contexto panameño |
| Kibotics / JdeRobot (URJC) | Bajo-medio | Línea de TFG activa (gamificación 2021, torneos 2020, TFM 2022) | Revisar el TFM de Castro San Martín (2022) y si existe un panel docente. Citar como antecedente directo |
| BIPES | Bajo | Plataforma de IoT, no de robótica con retos y analítica | Usar como referencia técnica (Web Serial + MicroPython) |
| VEXcode VR | Bajo (comercial) | Tiene panel de licencias y clases, pero es hardware propietario y caro | Diferenciarse por costo y por el robot real de bajo costo |
| Candanedo Yau (2026, UP) | Bajo | Misma universidad, pero estudio de percepción, no de desarrollo | Citar. Posible contacto académico |

No se encontró ningún trabajo reciente con la misma pregunta, el mismo contexto (Panamá) y la misma combinación técnica.

---

## 5. Correcciones a la especificación (`research_spec_robotica-educativa.md`)

1. **"Universidad de Murcia: simulador web… (DOI 10.6018/red.410191)"**: el simulador es de la **Universidad de La Laguna** (Ángel-Díaz, Segredo, Arnay y León, 2020). La Universidad de Murcia solo edita la revista RED.
2. **"UTP y Universidad de Salamanca (2012)"**: es un artículo de autores de la **UTP** (Moreno et al., 2012) publicado en *TESI*, revista de Ediciones Universidad de Salamanca. No es una colaboración institucional.
3. **"Estudio en Perú: el 74 % de los docentes no conocía la robótica educativa"**: el 74 % **no sabe aplicarla** y el 97 % desconoce sus fundamentos. Además, la muestra son 35 **docentes universitarios** de un solo departamento de educación (Guerrero Támara et al., 2022). No se debe generalizar a docentes escolares.
4. **"Kibotics, TFG 2019"**: el TFG localizado es Álvarez Martín, curso 2019/2020, titulado "Mejoras en entorno de robótica educativa para niños". Kibotics es la plataforma, no el título.
5. **"80 kits para 61 escuelas en Colón"**: **no verificado**. Lo verificado es que el programa Cobre Panamá–FUNDESTEAM cubre 61 escuelas y 191 docentes. Hay que buscar la fuente del "80 kits" o retirar el dato.
6. **"MetaRoboLearn, ICCE 2025: bloques vs. Python con simulador"**: es correcto, pero el título real es "Educational Robotics through Web Applications: From Visual Programming to Simulation-Driven Learning" (Terzic et al.). MetaRoboLearn es el nombre del proyecto.

---

## 6. Limitaciones de esta búsqueda

- El proxy bloqueó WebFetch a la mayoría de editoriales (ScienceDirect, Springer, SAGE, IEEE, revistas.um.es y APSCE). **Ningún texto completo fue leído.** Las magnitudes provienen de resúmenes.
- No se consultaron directamente IEEE-RITA, IEEE Transactions on Education, Computers & Education (búsqueda propia de la revista), Dialnet ni el repositorio de la Universidad de Panamá con su buscador interno. Solo aparecieron artículos de esas fuentes cuando la búsqueda web los indexó.
- El seguimiento de citas (hacia atrás y hacia adelante) fue parcial: se hizo desde Benitti, Weintrop, Tselegkaridis, Scaradozzi, BIPES y MetaRoboLearn mediante resultados indexados, no con Google Scholar ("cited by").
- **Siguiente paso recomendado:** con acceso institucional, leer los textos completos de MetaRoboLearn, Ángel-Díaz et al. (2020), BIPES y Zabala et al. (2021), y buscar en IEEE-RITA y LACCEI con los términos "simulador", "Blockly", "ESP32" y "analítica".
