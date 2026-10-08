# Posicionamiento — Aporte de la tesis, tabla comparativa y marco para los retos

**Proyecto:** robotica-educativa · **Fase:** Discovery · **Ronda 2** · **Fecha:** 2026-10-08

**Las cinco piezas:**

| Pieza | Descripción |
|-------|-------------|
| **P1** | Simulador web |
| **P2** | Programación por bloques con vista de código |
| **P3** | Robot real de bajo costo compartido por turnos |
| **P4** | Analítica y panel docente |
| **P5** | Gestión multi-colegio |

---

## 1. Propuesta de enunciado del aporte (borrador para el asesor)

> La literatura muestra varias cosas por separado:
> - los simuladores web reducen la dependencia de los kits (Tselegkaridis y Sapounidis, 2021; Berland y Wilensky, 2015);
> - la programación por bloques con vista de código facilita el inicio sin perjudicar el paso a texto (Weintrop y Wilensky, 2017, 2019);
> - es viable programar microcontroladores ESP32 de bajo costo desde el navegador con MicroPython (da Silva Junior et al., 2020);
> - la analítica en tiempo real para el docente puede mejorar el aprendizaje (Holstein et al., 2018).
>
> Sin embargo, en la búsqueda realizada no se encontró ninguna herramienta que reúna las cinco piezas. Tampoco se encontraron estudios que midan, en robótica escolar, cuántos programas probados en el simulador funcionan sin cambios en el robot real, ni cuánto practica cada estudiante cuando hay pocos kits.
>
> Esta tesis desarrolla, con un enfoque de investigación en ciencia del diseño (Hevner et al., 2004; Peffers et al., 2007), una plataforma web que integra las cinco piezas y la valida en un colegio privado de Panamá. Mide cuatro cosas:
> - el tiempo de práctica por estudiante (H1);
> - la usabilidad con el SUS en español (H2);
> - la tasa de transferencia simulador→robot ESP32 (H3);
> - el tiempo de evaluación docente (H4).
>
> En la búsqueda realizada no se encontraron estudios previos de este tipo en el contexto panameño.

**Versión corta (resumen):**
> Plataforma web que integra un simulador 2D, programación por bloques con vista Python, robots ESP32 de bajo costo compartidos por turnos y un panel docente multi-colegio. Se valida en Panamá midiendo el tiempo de práctica, la usabilidad (SUS), la transferencia simulador→robot y el tiempo de evaluación.

---

## 2. Ejes de diferenciación

| Eje | Frente a quién | Diferencia defendible |
|-----|---------------|----------------------|
| **D1. P1→P3: simulador con transferencia a un robot de bajo costo compartido** | Open Roberta, VEXcode VR, Kibotics, MetaRoboLearn, MakeCode, Ángel-Díaz et al. | Ellos usan robots comerciales o ROS2, la placa sin robot, o no tienen robot real. La tesis usa ESP32 + MicroPython con la **misma API JSON** en simulador y firmware (como Kibotics y Thymio/Webots), más una **cola de turnos** (como Mendieta y Garcia-Costa). Además, **diseña el simulador para la transferencia** (ruido y calibración, §4 de `frontier_map.md`) y **mide** esa transferencia. |
| **D2. P4: analítica docente en tiempo útil, en robótica** | Scaradozzi/Cesaretti; Diana; iSnap; Dr. Scratch; Lumilo | La analítica de robótica existente es a posteriori. La de tiempo real existe en matemáticas (Lumilo) o en bloques sin robot (iSnap, Diana). La tesis la lleva a retos de robótica, con datos del simulador y del robot. |
| **D3. P5 y contexto** | Todas | Multi-colegio (`colegio_id`, patrón SaaS multi-inquilino; Bezemer y Zaidman, 2010), en español, con modelo de negocio. **No se encontraron en la búsqueda realizada** validaciones con usuarios en colegios panameños. |

**Lo que la tesis NO debe reclamar:**
- Que mejora el pensamiento computacional (Ouyang y Xu, 2024: g = 0,079, no significativo; además, el diseño tiene un solo grupo).
- Ser la primera plataforma con simulador y bloques (Open Roberta 2014, Kibotics, ULL 2020).
- Ser la primera en programar ESP32 con bloques desde el navegador (BIPES 2020).
- Ser "el primer estudio" de algo. Usar siempre: "no se encontró en la búsqueda realizada".

---

## 3. Tabla comparativa de herramientas

**Leyenda:** Sí · Parcial · No · **?** = no verificado (revisar el sitio oficial antes de la defensa).

| Herramienta | Simulador (P1) | Bloques (P2) | Vista de código (P2) | Robot real | Robot de bajo costo (P3) | Turnos/cola (P3) | Analítica docente (P4) | Multi-colegio (P5) | Español | Precio |
|---|---|---|---|---|---|---|---|---|---|---|
| **Scratch 3** | No (escenario 2D, no robot) | Sí | No | Parcial (extensiones) | Parcial (micro:bit) | No | No **?** | No | Sí | Gratis |
| **mBlock 5** | No | Sí | Sí (Python/Arduino C) | Sí (mBot, CyberPi, Arduino) | Parcial (ESP32 **?**) | No | No **?** | No | Sí **?** | Software gratis; hardware de pago |
| **MakeCode** (Ball et al., 2019) | Parcial (placa) | Sí | Sí (JS/TS, Python) | Sí (micro:bit…) | Sí | No | No **?** | No | Sí **?** | Gratis |
| **Open Roberta Lab** (Jost et al., 2014) | Sí (2D) | Sí (NEPO) | Sí | Sí (≈10 plugins) | Parcial (ESP32 **?**) | No | No **?** | No | Sí **?** | Gratis |
| **VEXcode VR** | Sí (3D) | Sí | Sí (Python) | No (otra app) | No | No | Parcial (panel de licencias Premium) | No (licencia por docente) | **?** | Básico gratis; Enhanced USD 199 y Premium USD 499 por docente al año |
| **Tinkercad Circuits** | Sí (circuitos) | Sí | Sí (C++) | Parcial | Sí (Arduino) | No | Parcial (Classrooms) **?** | No | Sí | Gratis |
| **Kibotics** (URJC) | Sí (3D) | Sí | Sí (Python) | Sí (mBot, EV3, Tello) | Parcial | No | Parcial (evaluadores automáticos) | **?** | Sí | **?** |
| **Thymio + Aseba/VPL** (Mondada et al., 2017) | Parcial (modelo en Webots) | Sí (VPL, Blockly, Scratch) | Sí (Aseba) | Sí (Thymio) | Parcial (robot propio, abierto) | No | No **?** | No | **?** | Software gratis; robot de pago |
| **BIPES** (2020) | No | Sí | Sí (MicroPython) | Sí (ESP32…) | Sí | No | No | No | **?** | Gratis, abierto |
| **Simulador ULL** (Ángel-Díaz et al., 2020) | Sí | Sí | **?** | No | No aplica | No | **?** | No | Sí | Gratis |
| **MetaRoboLearn** (2025) | Sí (3D) | Sí | Sí (Python) | Sí (ROS2) | **?** | **?** | **?** | **?** | **?** | **?** |
| **Mendieta** (Zabala et al., 2021) | No | **?** | **?** | Sí | Sí (<USD 180) | **Sí (cola multiusuario)** | No | No | Sí | Abierto |
| **Garcia-Costa et al.** (2020) | No | Sí | Parcial | Sí | **?** | **Sí (cola de ejecución)** | No | No | **?** | **?** |
| **ESTA TESIS** | Sí (2D, con ruido y calibración) | Sí (Blockly) | Sí (Python) | Sí (ESP32) | Sí | Sí | Sí | Sí | Sí | Por definir (objetivo 6) |

**Notas:**
1. Los precios y el panel de VEXcode VR se verificaron en vexrobotics.com. Las demás celdas con **?** deben confirmarse en los sitios oficiales.
2. La columna "Turnos/cola" es el diferenciador más directo frente al problema de pocos kits. Solo Mendieta, los laboratorios remotos y esta tesis la cubren.
3. Sobre el ESP32: el Arduino UNO R4 WiFi (2023) ya incluye un módulo ESP32-S3. Esto refuerza la elección del ESP32 por conectividad, no por obsolescencia de Arduino.

---

## 4. Literaturas en las que se inserta la tesis

| Literatura | Pregunta típica | Aporte de la tesis | Cita ancla |
|---|---|---|---|
| Robótica educativa (efectos) | ¿Mejora el aprendizaje? | Motivación; no lo mide directamente | Benitti (2012); Ouyang y Xu (2024) |
| Pensamiento computacional | ¿Cómo se describe y evalúa? | Clasificación de retos y diseño de indicadores | Brennan y Resnick (2012); Román-González et al. (2017) |
| Simuladores y sim-to-real | ¿Se transfieren los programas? | Mide la tasa de transferencia (H3) y diseña el simulador para lograrla | Jakobi et al. (1995); Berland y Wilensky (2015); Ztoupas et al. (2026) |
| Learning analytics | ¿Qué datos ayudan al docente? | Panel de robótica en tiempo útil (H4) | Holstein et al. (2018); Schwendimann et al. (2017); Verbert et al. (2013) |
| Bajo costo y web | ¿Cómo bajar costos y barreras? | ESP32 + MicroPython + Web Serial + cola | BIPES (2020); Zabala et al. (2021) |
| Metodología (DSR/DBR) | ¿Cómo se valida un artefacto educativo? | Artefacto + evaluación en aula real | Hevner et al. (2004); Peffers et al. (2007); DBRC (2003) |
| Panamá y Latinoamérica | ¿Qué pasa en la región? | Evidencia con usuarios en Panamá | Moreno et al. (2012); Cobre Panamá (2023); Castro Rojas y Acuña Zúñiga (2012) |

---

## 5. Qué marco usar para clasificar los retos por nivel

**Recomendación: Brennan y Resnick (2012) como eje principal, con la progresión de dificultad del CTt (Román-González et al., 2017) y las facetas de Shute et al. (2017) para los indicadores del panel.**

**Por qué Brennan y Resnick:**
- Su dimensión de **conceptos computacionales** viene de un entorno de bloques (Scratch) y se corresponde directamente con bloques de Blockly.
- Es el marco más citado en programación por bloques.
- Sus otras dos dimensiones (prácticas y perspectivas) recuerdan que los logs no capturan todo, lo cual sirve como limitación declarada.

**Por qué el CTt para graduar la dificultad:**
- Está validado en español con estudiantes de 10 a 16 años (5.º a 10.º grado), el rango de la tesis.
- Su progresión de conceptos sirve de guía para ordenar niveles. **Verificar en el texto del CTt la lista exacta y el orden de sus conceptos** antes de citarla; no se leyó el texto completo.

**Propuesta de niveles (borrador para el strategist y el writer; no es un resultado de la literatura):**

| Nivel | Concepto dominante (Brennan y Resnick / CTt) | Ejemplo de reto en el simulador 2D | Indicador del panel (Shute) |
|---|---|---|---|
| 1 | Secuencias | Llevar el robot a la meta con avanzar y girar | Intentos hasta lograrlo (depuración) |
| 2 | Bucles de "repetir N veces" | Dibujar un cuadrado o recorrer un pasillo con repetición | Longitud del programa frente a la solución mínima (abstracción) |
| 3 | Condicionales (si / si-no) con sensor de distancia | Detenerse ante un obstáculo | Errores de lógica detectados (depuración) |
| 4 | Bucles condicionales ("mientras") + sensores | Seguir una línea | Iteraciones de prueba y error (iteración) |
| 5 | Funciones o descomposición | Recorrido con subrutinas reutilizables | Uso de funciones (descomposición y generalización) |
| 6 | Transferencia | Repetir los retos 3–4 en el robot ESP32 real | Pasa o no al primer intento (H3) |

Las **prácticas** (depurar, iterar) se aproximan con los logs. Las **perspectivas** quedan fuera del alcance y se declaran como limitación.

---

## 6. Metodología: cómo encaja el eje 9

- **Marco general:** investigación en ciencia del diseño. La plataforma es el artefacto; las seis actividades de Peffers et al. (2007) estructuran los capítulos (problema → objetivos → diseño → demostración → evaluación → comunicación) y corresponden a los objetivos específicos 1 a 5.
- **Puente con la educación:** la investigación basada en diseño (DBRC, 2003; Wang y Hannafin, 2005) justifica validar en un aula real y con iteración (piloto → ajuste).
- **Proceso de desarrollo:** Scrum (Schwaber y Sutherland, 2020) con diseño centrado en el usuario (ISO 9241-210:2019).
- **Arquitectura:** SaaS multi-inquilino con esquema compartido y `colegio_id` (Bezemer y Zaidman, 2010).
- **Medición de H1:** observación por muestreo momentáneo inspirada en BROMP (Ocumpaugh et al., 2015). Por ejemplo, rondas cada N minutos codificando a cada estudiante como "practicando / esperando turno / fuera de tarea", antes y después.
- **Medición de H2:** SUS en español (Sevilla-Gonzalez et al., 2020, α = 0,812), interpretado con el promedio de 68 (Sauro, 2011; Sauro y Lewis, 2016) y la escala de adjetivos (Bangor et al., 2009). Reportar el α de la propia muestra.
