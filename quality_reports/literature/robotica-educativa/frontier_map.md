# Mapa de la frontera — Robótica educativa: simulador web + bloques + robot ESP32 compartido + analítica docente

**Proyecto:** robotica-educativa · **Fase:** Discovery · **Ronda 2** · **Fecha:** 2026-10-08
**Base:** 98 entradas de `annotated_bibliography.md`. 12 tienen algún dato UNVERIFIED y 5 tienen el DOI o el título sin verificar directamente.

## Definición de las "cinco piezas" (se usa igual en los cuatro archivos)

| Pieza | Descripción |
|-------|-------------|
| **P1** | Simulador web |
| **P2** | Programación por bloques con vista de código |
| **P3** | Robot real de bajo costo compartido por turnos |
| **P4** | Analítica y panel docente |
| **P5** | Gestión multi-colegio |

Proximidad 1 = tener las cinco.

---

## 1. Qué se sabe

### 1.1 La robótica educativa ayuda, con efectos modestos y heterogéneos
- Las revisiones muestran potencial, pero con pocos estudios cuantitativos (Benitti, 2012; Xia y Zhong, 2018; Anwar et al., 2019).
- Los metaanálisis dan efectos medios en desempeño y actitudes. En pensamiento computacional el efecto es mixto:
  - Zhang et al. (2021): SMD = 0,48.
  - Ouyang y Xu (2024): g = 0,079, no significativo.
- **Implicación:** las hipótesis H1–H4 (práctica, usabilidad, transferencia, evaluación) son más defendibles que prometer mejoras de pensamiento computacional.

### 1.2 Hay marcos maduros para describir el pensamiento computacional
- Brennan y Resnick (2012): conceptos, prácticas y perspectivas.
- Shute et al. (2017): seis facetas (descomposición, abstracción, algoritmos, depuración, iteración y generalización).
- Instrumento validado en español: el CTt (Román-González et al., 2017), con 1.251 estudiantes de 5.º a 10.º grado.
- Revisión de estado del arte: Grover y Pea (2013).
- **Implicación:** los retos pueden etiquetarse por concepto y nivel (ver `positioning.md` §5). Los logs del panel capturan sobre todo **conceptos** y parte de las **prácticas** (depuración e iteración), no las perspectivas.

### 1.3 Los bloques reducen barreras sin perjudicar el paso a texto
- Weintrop y Wilensky (2017, 2019); Xu et al. (2019), con g = 0,245 no significativo; Bau et al. (2017).

### 1.4 Los simuladores sustituyen parte de la práctica física y la aceleran
- Berland y Wilensky (2015).
- Liu et al. (≈2013, UNVERIFIED).
- Tselegkaridis y Sapounidis (2021).
- VEXcode VR (Sirinterlikci et al., 2022).

### 1.5 La brecha simulación–realidad es conocida y tiene remedios
- **Ruido calibrado** en el simulador: Jakobi et al. (1995).
- **Randomización de parámetros**: Tobin et al. (2017).
- Revisión de técnicas de transferencia: Zhao et al. (2020).
- En docencia, la estrategia dominante es la **misma API en simulación y en hardware**:
  - Webots (Michel, 2004);
  - Thymio/Aseba con modelo en Webots (Mondada et al., 2017; Magnenat et al., 2011);
  - drivers equivalentes simulado/real en Kibotics (Pulido Millanes, 2021).

### 1.6 Las piezas existen, pero dispersas
| Pieza | Quién la tiene |
|-------|----------------|
| P1 + P2 | Ángel-Díaz et al. (2020); Kibotics; Open Roberta; VEXcode VR; MetaRoboLearn; MakeCode (simulador de placa) |
| P1 → robot real con la misma API | Kibotics (Pulido Millanes, 2021); MetaRoboLearn (ROS2); Webots/Thymio |
| P3 conexión ESP32 + MicroPython + Web Serial | BIPES |
| P3 robot compartido con cola | Mendieta (Zabala et al., 2021); Garcia-Costa et al. (2020); RoboBlock; Robotarium |
| Domótica + robot con ESP32 | Facilino (Armesto et al., 2023) |
| P4 analítica docente en tiempo real con efecto demostrado | Lumilo (Holstein et al., 2018), en matemáticas, no en robótica |
| P4 logs en robótica | Scaradozzi et al. (2020); Cesaretti et al. (2021), a posteriori y sin panel |
| P4 logs y pistas en bloques | iSnap (Price et al., 2017); Diana et al. (2017); Grover et al. (2017) |
| Evaluación automática | Dr. Scratch; evaluadores de Kibotics; Keuning et al. (2018) advierten sus límites |
| P5 multi-inquilino | Patrón SaaS (Bezemer y Zaidman, 2010); no se encontró en herramientas de robótica escolar |

### 1.7 En Latinoamérica el cuello de botella también es el docente (y la evidencia)
- **Perú:**
  - El 74 % de 35 docentes universitarios no sabe aplicar la robótica (Guerrero Támara et al., 2022).
  - Hay más de 20.000 kits que requieren formación (Fernández Morales et al., 2018).
- **Costa Rica:**
  - Experiencia comunitaria de la FOD (Castro Rojas y Acuña Zúñiga, 2012).
  - En 2023 terminó el convenio PRONIE MEP-FOD, en parte por el argumento de que "no se evalúan resultados" (prensa).
- **Uruguay:** Plan Ceibal distribuyó unos 5.300 kits con formación docente previa. No se encontró una evaluación rigurosa de impacto.
- **Panamá:**
  - Más de 1.000 clubes y entre 1.300 y 1.600 docentes formados (MEDUCA/FUNDESTEAM, 2023).
  - **80 kits para 61 escuelas de Colón hasta 2026** (Cobre Panamá, verificado).
  - Proyecto Blue-Bot/Rugged Robot de SENACYT (2024).
  - Evidencia académica escasa: Moreno et al. (2012); Candanedo Yau (2026); Esquivel et al. (2025).

---

## 2. Qué falta (vacíos)

| # | Vacío | Evidencia de que es un vacío | Fuerza |
|---|-------|------------------------------|--------|
| V1 | **Ninguna herramienta revisada reúne las cinco piezas** | No hay ninguna entrada de proximidad 1. Las más cercanas (MetaRoboLearn, Kibotics, Open Roberta, VEXcode VR, MakeCode, BIPES, Garcia-Costa) cubren de 2 a 3 piezas (§3) | Alta, en la búsqueda realizada (solo web, sin bases de suscripción) |
| V2 | **No se mide la tasa de transferencia simulador → robot real en robótica escolar** | La literatura de sim-to-real (Jakobi, Tobin, Zhao) es de robótica general o de aprendizaje profundo. Las herramientas educativas (Kibotics, Thymio/Webots, MetaRoboLearn) declaran la portabilidad del código, pero no se encontró ninguna que reporte el % de programas que funcionan sin cambios | Media-alta |
| V3 | **Pocas intervenciones en secundaria y poco papel del docente** | Ztoupas et al. (2026, *Applied Sciences*, **verificado**): intervenciones sobre todo terciarias y participación docente nula o moderada. Forsström et al. (2025): recomiendan formación y orientación docente. Schwendimann et al. (2017): paneles poco evaluados en entornos reales | Media-alta (antes era media) |
| V4 | **La analítica en robótica no llega al docente en tiempo útil** | Scaradozzi/Cesaretti analizan los logs a posteriori. Lumilo demuestra el valor del tiempo real, pero en tutores de matemáticas | Media-alta |
| V5 | **No se mide el tiempo de práctica por estudiante con pocos kits** | El argumento de pocos kits aparece como motivación (VEXcode VR, Mendieta, laboratorios remotos, Cobre Panamá con <1,5 kits por escuela), pero no se encontró ninguna medición | Media |
| V6 | **No hay evidencia con usuarios de plataformas de robótica en colegios panameños** | Solo Moreno et al. (2012, descriptivo), estudios universitarios de la UP y literatura gris. No se hallaron trabajos de la UTP sobre robótica escolar entre 2020 y 2026 | Alta |
| V7 | **ESP32 + MicroPython en secundaria con evaluación de usuario** | BIPES sin estudio en aula. Miranda et al. (2022) con universitarios | Media |
| V8 | **No hay multi-tenencia (P5) en español para robótica escolar** | Ninguna herramienta revisada la declara. VEXcode VR gestiona por licencia de docente | Media (hay que verificar las funciones actuales de los productos) |
| V9 (nuevo) | **No hay literatura de robótica educativa en IEEE-RITA ni LACCEI 2020–2026 visible en búsqueda web** | Las búsquedas dirigidas no devolvieron resultados de esos venues | Baja: probablemente es un límite de la búsqueda, no un vacío real |

---

## 3. Dónde encaja la tesis (matriz por piezas)

```
                         P1 Simulador  P2 Bloques+código  P3 Robot bajo costo/turnos  P4 Analítica docente  P5 Multi-colegio
                         ────────────  ─────────────────  ──────────────────────────  ────────────────────  ────────────────
Ángel-Díaz 2020 (ULL)        ●              ◐ (bloques)           ○                         ○                    ○
Open Roberta 2014            ●              ●                     ◐ (robots comerciales)    ○                    ○
VEXcode VR 2022              ●              ●                     ○                         ◐ (licencias)        ○
MakeCode 2019                ◐ (placa)      ●                     ◐ (micro:bit, sin turnos) ○                    ○
Kibotics (TFG 2020/21)       ●              ●                     ◐ (mBot/EV3, sin turnos)  ◐ (evaluadores)      ?
MetaRoboLearn 2025           ●              ●                     ◐ (ROS2)                  ○                    ○
BIPES 2020                   ○              ●                     ◐ (ESP32, sin turnos)     ○                    ○
Garcia-Costa 2020            ○              ◐                     ◐ (cola, robots reales)   ○                    ○
Mendieta 2021                ○              ?                     ● (cola, <USD 180)        ○                    ○
Facilino 2023                ○              ◐                     ◐ (ESP32, sin turnos)     ○                    ○
Scaradozzi/Cesaretti         ○              ○                     ○                         ◐ (logs a posteriori) ○
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
ESTA TESIS                   ●              ●                     ●                         ●                    ●
```
● = sí · ◐ = parcial · ○ = no · ? = no verificado

**Lectura:** el aporte de la tesis es la **integración** de piezas validadas por separado más la **medición** de V2 (H3) y V5 (H1), en un contexto sin evidencia previa (V6).

---

## 4. Implicaciones del sim-to-real para el simulador 2D y para la H3

Se derivan de Jakobi et al. (1995), Tobin et al. (2017), Zhao et al. (2020), Michel (2004), Mondada et al. (2017), Magnenat et al. (2011) y Pulido Millanes (2021). Son implicaciones de diseño, no resultados empíricos de esas fuentes.

### 4.1 Diseño del simulador 2D
1. **Misma API en ambos lados.** Los comandos JSON (`avanzar`, `girar`, `leer_sensor`) deben tener exactamente la misma semántica en el simulador (JavaScript) y en el firmware MicroPython, con un adaptador por destino. Así lo hacen Kibotics (drivers JS y Python equivalentes), Webots y Thymio/Aseba.
2. **Comandos de alto nivel ejecutados en el robot.** Conviene que `avanzar(20 cm)` se cierre en el ESP32 (con temporización o encoders si los hay) en lugar de enviar comandos de bajo nivel desde el navegador. Así la latencia del enlace (Web Serial o WiFi) no altera la trayectoria. El intérprete en el nodo es el principio de Aseba.
3. **Ruido en los sensores.** Siguiendo a Jakobi, el sensor de distancia simulado debe devolver la lectura ideal más un ruido gaussiano, con valores fuera de rango ocasionales. El sensor de línea debe tener un umbral con zona de incertidumbre. Un simulador "perfecto" produce programas frágiles que dependen de valores exactos.
4. **Imperfecciones de los actuadores.** Asimetría entre ruedas (deriva), aceleración no instantánea y error de giro de ±X grados.
5. **Calibración desde el robot real.** Antes del piloto, medir en el robot ESP32 la velocidad real (cm/s), la tasa de giro (°/s), la desviación del sensor de distancia y el umbral de la línea, y cargarlos como parámetros del simulador por robot. Así la brecha se reduce con datos, no con suposiciones.
6. **Randomización ligera (inspirada en Tobin).** En cada ejecución, variar los parámetros dentro del rango medido. Un reto se marca como "superado en el simulador" solo si pasa en N ejecuciones con parámetros distintos. Esto anticipa la robustez en el robot real.
7. **Pistas físicas iguales a las simuladas.** Mismas dimensiones, ancho de línea y obstáculos, documentados en la guía docente.

### 4.2 Operacionalización de la H3
- **Definición propuesta (a decidir con el strategist):** tasa de transferencia = % de retos en los que un programa que **pasó en el simulador** también pasa en el robot real **al primer intento y sin modificar el código**, con el mismo criterio de éxito (llegar a la meta, no chocar, seguir la línea).
- **Registro:** el panel debe guardar el ID del programa probado en el simulador y su ejecución en el robot, para calcular la tasa automáticamente.
- **Desglose:** reportar por tipo de reto (movimiento abierto, sensor de distancia, seguimiento de línea). La literatura sugiere que los retos con más dependencia de sensores y de lazo abierto transfieren peor.
- **Contraste opcional:** comparar la tasa con el simulador "sin ruido" frente a "con ruido calibrado" en un subconjunto de retos. Sería una pequeña contribución técnica propia, no encontrada en la literatura escolar.
- **Umbral del 80 %** (especificación): no hay ninguna referencia que lo respalde. Debe presentarse como meta de diseño, no como estándar de la literatura.

---

## 5. Riesgo de que otro publique primero

| Trabajo | Riesgo | Acción |
|---------|--------|--------|
| MetaRoboLearn (ICCE 2025) | Medio | Leer el texto completo. Diferenciarse por P3 de bajo costo, P4, P5, español y Panamá |
| Línea Kibotics/URJC (TFG 2020–2021, TFM 2022) | Bajo-medio | Revisar si el TFM de Castro San Martín (2022) evalúa con estudiantes o tiene panel |
| BIPES | Bajo | Referencia técnica |
| VEXcode VR | Bajo | Diferenciar por costo y robot real |
| Candanedo Yau (2026), Esquivel et al. (2025), UP | Bajo | Citar y considerar como contactos académicos |

**No se encontró en la búsqueda realizada** ningún trabajo con la misma combinación técnica (cinco piezas) en el contexto panameño.

---

## 6. Correcciones a la especificación (actualizadas en la ronda 2)

1. **Simulador "Universidad de Murcia" (DOI 10.6018/red.410191):** es de la **Universidad de La Laguna**. Murcia solo edita la revista RED.
2. **"UTP + Universidad de Salamanca (2012)":** son autores de la **UTP** que publican en *TESI* (Ediciones Universidad de Salamanca).
3. **Dato de Perú:** el **74 % no sabe aplicar** la robótica educativa. Son 35 docentes universitarios de una sola institución.
4. **Kibotics:** el TFG de 2019/2020 es Álvarez Martín, "Mejoras en entorno de robótica educativa para niños". El de Pulido Millanes es del curso **2020/2021**, no de 2020.
5. **"80 kits para 61 escuelas en Colón": VERIFICADO** en la ronda 2 (nota de Cobre Panamá: 80 kits hasta 2026).
6. **MetaRoboLearn:** el título real es "Educational Robotics through Web Applications: From Visual Programming to Simulation-Driven Learning".
7. **(Nuevo) Justificación del ESP32:** no debe apoyarse en que "Arduino Uno no se actualiza desde 2010" (Lamprecht et al., 2021), porque el **UNO R4 salió en 2023**. Hay que justificarlo por WiFi y BLE integrados, soporte oficial de MicroPython y costo (verificar el precio local).
8. **(Nuevo) Umbral SUS 68:** citar Sauro (2011) o Sauro y Lewis (2016) como fuente primaria, y usar la versión en español validada de Sevilla-Gonzalez et al. (2020).

---

## 7. Limitaciones de la búsqueda (ronda 2)

- WebFetch siguió bloqueado para editoriales. No se leyó ningún texto completo.
- No se pudo buscar dentro de IEEE-RITA, LACCEI, Dialnet ni RIDDA/UP con sus buscadores propios; solo vía buscador web, que no devolvió resultados de RITA ni de LACCEI.
- No se encontró ningún informe consolidado de SENACYT ni de MEDUCA. Las cifras nacionales son de prensa.
- El seguimiento de citas fue parcial, a través de resultados indexados.
