# Posicionamiento — Aporte de la tesis y tabla comparativa de herramientas

**Proyecto:** robotica-educativa · **Fase:** Discovery · **Fecha:** 2026-10-08

---

## 1. Propuesta de enunciado del aporte (borrador para el asesor)

> La literatura muestra que los simuladores web reducen la dependencia de los kits (Tselegkaridis y Sapounidis, 2021; Berland y Wilensky, 2015), que la programación por bloques con vista de código facilita el inicio sin perjudicar el paso a texto (Weintrop y Wilensky, 2017, 2019) y que es viable programar microcontroladores ESP32 de bajo costo desde el navegador con MicroPython (da Silva Junior et al., 2020). Sin embargo, estas piezas aparecen por separado. Las plataformas existentes (Open Roberta, VEXcode VR, Kibotics, MetaRoboLearn) no combinan simulador, robot real de bajo costo compartido por turnos, analítica para el docente y gestión de varios colegios. Además, casi no se mide cuántos programas probados en el simulador funcionan sin cambios en el robot real, ni cuánto tiempo practica cada estudiante cuando hay pocos kits.
>
> Esta tesis desarrolla y valida, en un colegio privado de Panamá, una plataforma web que **integra** esas cuatro piezas. Aporta **evidencia empírica de tres cosas**: la tasa de transferencia simulador→robot ESP32 (H3), el tiempo de práctica por estudiante en una clase de unos 30 estudiantes con 2 robots (H1) y la reducción del tiempo de evaluación docente gracias al panel (H4). Es el primer estudio de este tipo documentado en el contexto panameño.

**Versión corta (para el resumen):**
> Plataforma web que une simulador 2D, programación por bloques con vista Python, robots ESP32 de bajo costo compartidos por turnos y un panel docente multi-colegio. Se valida en Panamá midiendo el tiempo de práctica, la usabilidad (SUS), la transferencia simulador→robot y el tiempo de evaluación.

---

## 2. Tres ejes de diferenciación

| Eje | Frente a quién | Diferencia defendible |
|-----|---------------|----------------------|
| **D1. Integración "simulador → robot de bajo costo compartido"** | Open Roberta, VEXcode VR, Kibotics, MetaRoboLearn, Ángel-Díaz et al. (2020) | Ellos usan robots comerciales (EV3, mBot, VEX, ROS2) o no tienen robot real. La tesis usa ESP32 + MicroPython con un intérprete JSON estándar (patrón adaptador) y una **cola de turnos** para 2 robots y 30 estudiantes, en la línea de Mendieta (Zabala et al., 2021) pero con simulador previo. |
| **D2. Analítica docente en tiempo útil** | Scaradozzi et al. (2020); Diana et al. (2017); Dr. Scratch | Scaradozzi analiza los logs a posteriori. Diana y Grover trabajan en Alice. Dr. Scratch hace análisis estático. La tesis registra intentos, errores y tiempo por reto, en simulador y robot, y los muestra al docente con exportación a Excel. |
| **D3. Contexto y escala** | Todas | Multi-colegio (`colegio_id`), en español, con un modelo de negocio para colegios privados de Panamá. Es la primera validación con usuarios en ese contexto (antecedentes nacionales: Moreno et al., 2012, descriptivo; Candanedo Yau, 2026, universitario). |

**Lo que la tesis NO debe reclamar:**
- Que mejora el pensamiento computacional: la evidencia es mixta (Ouyang y Xu, 2024, g = 0,079, no significativo) y el diseño antes/después con un solo grupo no permite atribuir causalidad.
- Ser "la primera plataforma con simulador y bloques": Open Roberta (2014), Kibotics y el simulador de La Laguna (2020) ya lo son.
- Ser "la primera en programar ESP32 con bloques desde el navegador": BIPES (2020) ya lo hace.

---

## 3. Tabla comparativa de herramientas (estado del arte)

**Leyenda:** Sí · Parcial · No · **?** = no verificado (revisar el sitio oficial antes de la defensa). Las columnas siguen el pedido del usuario.

| Herramienta | Simulador | Bloques | Vista de código | Robot real | Robot de bajo costo | Analítica docente | Multi-colegio | Español | Precio |
|-------------|-----------|---------|-----------------|------------|---------------------|-------------------|---------------|---------|--------|
| **Scratch 3** (Resnick et al., 2009) | No (escenario 2D de objetos, no robot) | Sí | No | Parcial (extensiones: micro:bit, LEGO) | Parcial (micro:bit) | No (solo gestión de clase) **?** | No | Sí | Gratis |
| **mBlock 5** (Makeblock) | No | Sí | Sí (Python / Arduino C) | Sí (mBot, CyberPi, Arduino) | Parcial (Arduino; ESP32 **?**) | No **?** | No | Sí **?** | Software gratis; hardware de pago |
| **MakeCode** (Ball et al., 2019) | Parcial (simula la placa, no un robot en pista) | Sí | Sí (JavaScript/TypeScript, Python) | Sí (micro:bit y otras placas) | Sí (micro:bit) | No **?** | No | Sí **?** | Gratis |
| **Open Roberta Lab** (Jost et al., 2014) | Sí (2D; para EV3, NXT, Calliope, micro:bit según fuente de 2019) | Sí (NEPO / Blockly) | Sí (código generado) | Sí (≈10 plugins: EV3, micro:bit, mBot, Arduino…) | Parcial (Arduino, micro:bit; ESP32 **?**) | No **?** | No | Sí **?** | Gratis |
| **VEXcode VR** (Sirinterlikci et al., 2022) | Sí (3D) | Sí | Sí (Python, "Switch") | No (solo virtual; el robot real usa otra app VEXcode) | No | Parcial (panel de licencias y clases en versión Premium) | No (licencia por docente) | **?** | Básico gratis; Enhanced USD 199 y Premium USD 499 por docente al año |
| **Tinkercad Circuits** (Autodesk) | Sí (circuitos Arduino / micro:bit) | Sí (Codeblocks) | Sí (C++) | Parcial (exporta código; no carga directa) | Sí (Arduino) | Parcial (Tinkercad Classrooms) **?** | No | Sí | Gratis |
| **Kibotics** (Álvarez Martín, 2020; URJC) | Sí (3D en navegador) | Sí (Blockly / Scratch) | Sí (Python) | Sí (mBot, EV3, Tello) | Parcial (mBot) | Parcial (evaluadores automáticos de ejercicios) | **?** | Sí | **?** |
| **BIPES** (da Silva Junior et al., 2020) | No | Sí (Blockly) | Sí (MicroPython) | Sí (ESP32, ESP8266, micro:bit…) | Sí | No (tiene panel IoT de datos, no docente) | No | **?** | Gratis, código abierto |
| **Simulador ULL** (Ángel-Díaz et al., 2020) | Sí | Sí | **?** | No | No aplica | **?** | No | Sí | Gratis |
| **MetaRoboLearn** (Terzic et al., 2025) | Sí (3D, herramienta Python) | Sí (herramienta Blockly) | Sí (Python) | Sí (ROS2) | **?** (ROS2 suele ser más costoso) | **?** | **?** | **?** | **?** |
| **Mendieta** (Zabala et al., 2021) | No | **?** | **?** | Sí (1 robot por escuela, cola multiusuario) | Sí (menos de USD 180) | No | No | Sí (Argentina) | Abierto |
| **ESTA TESIS** (propuesta) | Sí (2D Canvas, sensores de distancia y línea) | Sí (Blockly) | Sí (Python) | Sí (ESP32 vía Web Serial; WiFi = SHOULD) | Sí (ESP32 + MicroPython) | Sí (intentos, errores, tiempo, notas, Excel) | Sí (`colegio_id`) | Sí | Por definir (modelo de negocio, objetivo 6) |

**Notas sobre la tabla:**
1. Los datos de VEXcode VR (precios y panel Premium) se verificaron en vexrobotics.com mediante la búsqueda (2026-10). Los demás datos de productos comerciales vienen de conocimiento general o de páginas antiguas (por ejemplo, Google Code-in 2019 para Open Roberta) y están marcados con **?** cuando no se confirmaron.
2. Antes de presentar la tabla al jurado, verificar en cada sitio oficial: soporte de ESP32 en Open Roberta y mBlock, idioma español en VEXcode VR y BIPES, y funciones de analítica en MakeCode, Scratch y Tinkercad Classrooms.
3. Conviene añadir una columna "Gestión de turnos o cola para robots compartidos". Solo la tienen Mendieta, los laboratorios remotos (Garcia-Costa et al., 2020; RoboBlock) y esta tesis. Es el diferenciador más claro frente al problema de "pocos kits".

---

## 4. Literaturas en las que se inserta la tesis

| Literatura | Pregunta típica | Aporte de la tesis | Cita ancla |
|-----------|-----------------|--------------------|-----------|
| Robótica educativa (efectos) | ¿La robótica mejora el aprendizaje? | No responde esto directamente. Se usa como motivación | Benitti (2012); Ouyang y Xu (2024) |
| Simuladores y "sim-to-real" educativo | ¿Sustituye el simulador al robot? ¿Se transfieren los programas? | Mide la tasa de transferencia (H3) y el tiempo de práctica (H1) | Berland y Wilensky (2015); Tselegkaridis y Sapounidis (2021); Terzic et al. (2025) |
| Learning analytics y paneles | ¿Qué datos ayudan al docente? | Panel docente para robótica con datos del simulador y del robot, evaluado con un docente real (H4) | Schwendimann et al. (2017); Scaradozzi et al. (2020) |
| Robots de bajo costo y herramientas web | ¿Cómo bajar costos y barreras de instalación? | ESP32 + MicroPython + Web Serial integrado a retos | da Silva Junior et al. (2020); Zabala et al. (2021) |
| Contexto Panamá y Latinoamérica | ¿Qué pasa en la región? | Primera validación con usuarios en un colegio panameño | Moreno et al. (2012); Mesa Pinto (2026) |

---

## 5. Recomendaciones para la Estrategia (sin proponer un diseño de evaluación)

Son observaciones de la literatura que el strategist puede usar; no son decisiones metodológicas.
- La literatura de simuladores reporta muestras pequeñas e intervenciones cortas (Ztoupas et al., 2026, UNVERIFIED venue). El jurado puede plantear la misma crítica: conviene reconocerlo como limitación.
- La línea base de SUS de 68 viene de la literatura de Sauro y Lewis. Conviene confirmar la cita exacta en Lewis (2018) antes de usarla. Bangor et al. (2009) permiten traducir la puntuación a adjetivos.
- La adaptación de SUS a menores (Putnam et al., 2020) sugiere pilotar la redacción en español con 2 o 3 estudiantes.
- Para H3 no se encontró ningún protocolo estándar de "tasa de transferencia". La tesis tendría que definirlo (por ejemplo, reto superado en el robot al primer intento sin cambiar código).
