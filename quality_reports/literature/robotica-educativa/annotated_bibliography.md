# Bibliografía anotada — Plataforma web de robótica educativa (simulador + Blockly + ESP32 + analítica docente)

**Proyecto:** robotica-educativa (tesis de desarrollo, pregrado, Universidad de Panamá)
**Fase:** Discovery (severidad baja)
**Fecha de búsqueda:** 2026-10-08
**Elaborado por:** librarian (sin autoevaluación; la puntuación corresponde al librarian-critic)

## Notas de método y verificación

- **Escala de proximidad (definida por el usuario):** 1 = compite directamente (web + simulador + bloques + robot real + analítica docente); 2 = muy cercano, le falta 1–2 componentes; 3 = relacionado en método o contexto; 4 = relevante pero tangencial; 5 = fundamento o antecedente general.
- **Verificación:** todos los datos de autor, año, título y venue salen de resultados de búsqueda web (repositorios institucionales, DOAJ, IEEE Xplore, DBLP, páginas de editoriales y listas de referencias). El proxy bloqueó el acceso directo (WebFetch) a doi.org, ScienceDirect, Springer, SAGE, revistas.um.es y APSCE, así que **no se leyó el texto completo de ningún artículo**. Las magnitudes vienen de resúmenes y páginas de tablas indexadas.
- **Marcas:** `UNVERIFIED` significa que algún dato bibliográfico (autor, año, título o venue) no se pudo confirmar en una fuente real. Se indica cuál.
- **Correcciones a la especificación:** tres antecedentes de `research_spec_robotica-educativa.md` tienen datos imprecisos. Se corrigen en las entradas correspondientes (Ángel-Díaz et al. 2020; Moreno et al. 2012; Guerrero Támara et al. 2022) y se resumen en `frontier_map.md`.

---

## Eje 1 — Efecto de la robótica educativa en el aprendizaje

### Papert (1980) — *Mindstorms: Children, Computers, and Powerful Ideas*
- **Venue:** Libro, Basic Books (Nueva York).
- **Proximity:** 5
- **Main contribution:** Propone el construccionismo: los niños aprenden construyendo artefactos con los que "piensan", como la tortuga Logo y los micromundos.
- **Method:** Ensayo teórico.
- **Key finding:** No aplica (marco conceptual).
- **Relevance:** Base del marco teórico. El simulador 2D con "tortuga-robot" sigue directamente la lógica de los micromundos de Papert.
- **URL/DOI:** ISBN 0-465-04627-4. https://en.wikipedia.org/wiki/Mindstorms_(book)

### Wing (2006) — Computational Thinking
- **Venue:** *Communications of the ACM*, 49(3), 33–35.
- **Proximity:** 5
- **Main contribution:** Define el pensamiento computacional como una habilidad universal (abstracción, descomposición, pensamiento algorítmico) que no es exclusiva de los informáticos.
- **Method:** Artículo de opinión.
- **Key finding:** No aplica.
- **Relevance:** Define el constructo que los retos de la plataforma buscan desarrollar.
- **URL/DOI:** 10.1145/1118178.1118215 — https://www.cs.columbia.edu/~wing/publications/Wing06.pdf

### Benitti (2012) — Exploring the educational potential of robotics in schools
- **Venue:** *Computers & Education*, 58(3), 978–988.
- **Proximity:** 4
- **Main contribution:** Primera revisión sistemática muy citada sobre robótica en la escuela.
- **Method:** Revisión sistemática.
- **Key finding:** La robótica tiene potencial educativo, sobre todo en STEM, pero no siempre mejora el aprendizaje. Faltan estudios cuantitativos rigurosos (según descripciones secundarias; no se leyó el texto completo).
- **Relevance:** Referencia obligada del estado del arte. Justifica que la tesis mida resultados (H1–H4) en lugar de suponerlos.
- **URL/DOI:** 10.1016/j.compedu.2011.10.006. Los datos bibliográficos se confirmaron en una lista de referencias. El DOI es el estándar del artículo, pero no se abrió la página del editor.

### Xia y Zhong (2018) — A systematic review on teaching and learning robotics content knowledge in K-12
- **Venue:** *Computers & Education*, 127, 267–282.
- **Proximity:** 4
- **Main contribution:** Revisa cómo se enseña y evalúa el contenido de robótica en K-12.
- **Method:** Revisión sistemática (22 estudios según fuentes secundarias).
- **Key finding:** El cuestionario es el instrumento de evaluación más común. Hay casos en que el robot no produce ganancias significativas.
- **Relevance:** Apoya el argumento de que evaluar es difícil y que faltan datos objetivos de proceso, que es la base del panel docente.
- **URL/DOI:** 10.1016/j.compedu.2018.08.007. El DOI no se verificó directamente; el venue, el volumen y las páginas sí.

### Anwar, Bascou, Menekse y Kardgar (2019) — A Systematic Review of Studies on Educational Robotics
- **Venue:** *Journal of Pre-College Engineering Education Research (J-PEER)*, 9(2), 19–42.
- **Proximity:** 4
- **Main contribution:** Clasifica la investigación en cinco temas: efectividad general, aprendizaje y transferencia, creatividad y motivación, diversidad y participación, y desarrollo profesional docente.
- **Method:** Revisión sistemática.
- **Key finding:** El desarrollo profesional docente aparece como tema propio de investigación.
- **Relevance:** Respalda el riesgo señalado en la especificación de que el cuello de botella sea el docente y no el kit.
- **URL/DOI:** 10.7771/2157-9288.1223 — https://docs.lib.purdue.edu/jpeer/vol9/iss2/2

### Zhang, Luo, Zhu et al. (2021) — Educational Robots Improve K-12 Students' Computational Thinking and STEM Attitudes
- **Venue:** *Journal of Educational Computing Research*, 59(7), 1450–1481.
- **Proximity:** 4
- **Main contribution:** Revisión sistemática con metaanálisis de 17 estudios (2010–2019).
- **Method:** Revisión sistemática y metaanálisis.
- **Key finding:** Efecto global medio, SMD = 0,46 (IC 95 %: 0,23–0,69). Pensamiento computacional SMD = 0,48 frente a actitudes STEM SMD = 0,01. Efectos mayores en primaria que en secundaria y en intervenciones cortas.
- **Relevance:** Da una magnitud de referencia para el marco teórico. También advierte que en secundaria (la población de la tesis) los efectos son menores.
- **URL/DOI:** 10.1177/0735633121994070. **UNVERIFIED (parcial):** la fuente consultada lista solo tres autores más "et al."; el cuarto autor no se confirmó.

### Ouyang y Xu (2024) — The effects of educational robotics in STEM education: a multilevel meta-analysis
- **Venue:** *International Journal of STEM Education*, 11.
- **Proximity:** 4
- **Main contribution:** Metaanálisis multinivel con 30 tamaños de efecto de 21 estudios K-16 (2010–2022).
- **Method:** Metaanálisis multinivel.
- **Key finding:** Efecto global moderado, g = 0,488 (IC 95 %: 0,094–0,882). Desempeño g = 0,665 y actitud g = 0,497. Pensamiento computacional g = 0,079, no significativo.
- **Relevance:** Contrapeso a Zhang et al. (2021): la evidencia sobre pensamiento computacional es mixta. Conviene que la tesis no prometa mejoras de pensamiento computacional y se enfoque en tiempo de práctica y evaluación.
- **URL/DOI:** 10.1186/s40594-024-00469-4

### Alonso-García, Rodríguez Fuentes, Ramos Navas-Parejo y Victoria-Maldonado (2024) — Enhancing computational thinking in early childhood education with educational robotics: A meta-analysis
- **Venue:** *Heliyon*, 10(13), e33249.
- **Proximity:** 5
- **Main contribution:** Revisión PRISMA y metaanálisis sobre robótica y pensamiento computacional en educación infantil.
- **Method:** Revisión sistemática y metaanálisis.
- **Key finding:** Efecto significativo en educación infantil. El contexto normativo pesa más que la brecha de acceso digital.
- **Relevance:** Matiza que el acceso a kits no lo es todo, lo cual es útil para discutir H1 con honestidad. La población (infantil) difiere de la tesis.
- **URL/DOI:** 10.1016/j.heliyon.2024.e33249 — https://hdl.handle.net/10481/93485

---

## Eje 2 — Programación por bloques y transición a texto

### Resnick et al. (2009) — Scratch: Programming for All
- **Venue:** *Communications of the ACM*, 52(11), 60–67.
- **Proximity:** 4
- **Main contribution:** Presenta Scratch y su filosofía de diseño ("low floor, high ceiling, wide walls") y su comunidad de remezcla.
- **Method:** Descriptivo (diseño de herramienta).
- **Key finding:** No aplica (descriptivo).
- **Relevance:** Referente de diseño y competidor de la tabla comparativa.
- **URL/DOI:** 10.1145/1592761.1592779

### Fraser (2015) — Ten Things We've Learned from Blockly
- **Venue:** *2015 IEEE Blocks and Beyond Workshop*, 49–50.
- **Proximity:** 3
- **Main contribution:** Lecciones de diseño del equipo de Blockly, por ejemplo que condicionales y bucles son los bloques más difíciles y que no deben parecerse visualmente.
- **Method:** Reporte de experiencia (sin datos empíricos, según el propio autor).
- **Key finding:** Diez errores de diseño frecuentes en editores de bloques.
- **Relevance:** Guía práctica para diseñar los bloques personalizados (`avanzar`, `girar`, `leer_sensor`).
- **URL/DOI:** https://ieeexplore.ieee.org/document/7369000/ — PDF en https://developers.google.com/blockly/publications/publications

### Price y Barnes (2015) — Comparing Textual and Block Interfaces in a Novice Programming Environment
- **Venue:** *ICER 2015*, ACM.
- **Proximity:** 4
- **Main contribution:** Aísla el efecto de la interfaz de bloques frente a texto en la misma tarea.
- **Method:** Experimento con dos grupos.
- **Key finding:** No hubo diferencia en actitudes. El grupo de bloques se distrajo menos y cumplió más objetivos en menos tiempo.
- **Relevance:** Apoya usar bloques para aumentar el trabajo efectivo en clase (relacionado con H1).
- **URL/DOI:** 10.1145/2787622.2787712

### Bau, Gray, Kelleher, Sheldon y Turbak (2017) — Learnable Programming: Blocks and Beyond
- **Venue:** *Communications of the ACM*, 60(6), 72–80.
- **Proximity:** 4
- **Main contribution:** Síntesis de las ventajas de los bloques (reconocer en lugar de recordar, menos carga cognitiva, prevención de errores) y de los entornos híbridos.
- **Method:** Revisión narrativa.
- **Key finding:** La experiencia con bloques puede facilitar luego el paso a lenguajes de texto.
- **Relevance:** Justifica el diseño "bloques + vista de código Python".
- **URL/DOI:** 10.1145/3015455 — https://arxiv.org/abs/1705.09413

### Weintrop y Wilensky (2017) — Comparing Block-Based and Text-Based Programming in High School Computer Science Classrooms
- **Venue:** *ACM Transactions on Computing Education*, 18(1), art. 3.
- **Proximity:** 3
- **Main contribution:** Cuasiexperimento de 5 semanas en secundaria que compara versiones isomorfas de bloques y de texto del mismo entorno.
- **Method:** Cuasiexperimento.
- **Key finding:** Ambos grupos mejoraron. El grupo de bloques ganó más y mostró más interés en seguir estudiando computación. El grupo de texto percibió su trabajo como más "auténtico".
- **Relevance:** Evidencia directa en la población de la tesis (educación media). Apoya ofrecer las dos vistas.
- **URL/DOI:** 10.1145/3089799 — https://ccl.northwestern.edu/2017/a3_weintrop_wilensky.pdf

### Weintrop y Wilensky (2019) — Transitioning from introductory block-based and text-based environments to professional programming languages in high school computer science classrooms
- **Venue:** *Computers & Education*, 142, 103646.
- **Proximity:** 3
- **Main contribution:** Sigue a los mismos estudiantes durante 10 semanas tras pasar a Java.
- **Method:** Cuasiexperimento longitudinal (15 semanas).
- **Key finding:** Tras la transición no hubo diferencias en desempeño ni en prácticas de programación entre los que empezaron con bloques y los que empezaron con texto.
- **Relevance:** Responde a la pregunta del jurado de si los bloques retrasan el aprendizaje del código real.
- **URL/DOI:** 10.1016/j.compedu.2019.103646 — https://www.terpconnect.umd.edu/~weintrop/papers/Weintrop&Wilensky_2019_C&E.pdf

### Xu, Ritzhaupt, Tian y Umapathy (2019) — Block-based versus text-based programming environments on novice student learning outcomes: a meta-analysis
- **Venue:** *Computer Science Education*, 29(2–3), 177–204.
- **Proximity:** 3
- **Main contribution:** Metaanálisis con 13 publicaciones y 52 comparaciones.
- **Method:** Metaanálisis.
- **Key finding:** Resultado cognitivo g = 0,245 (p = 0,137) y afectivo g = 0,195 (p = 0,429), ambos a favor de bloques pero no significativos. Hay indicios de sesgo de publicación.
- **Relevance:** Matiza el entusiasmo: los bloques no son una "bala de plata". Conviene presentarlos como reductores de barrera, no como mejora garantizada.
- **URL/DOI:** 10.1080/08993408.2019.1565233

### Miranda, Varela-Aldás y Palacios-Navarro (2022) — Comparison of Blockly vs Arduino IDE for programming education using M5Stack Core2 ESP32 IoT Development Kit
- **Venue:** *AHFE Open Access* (AHFE International).
- **Proximity:** 3
- **Main contribution:** Compara Blockly (UIFlow) con Arduino IDE para programar un ESP32 (M5Stack) que lee un sensor inercial. Autores de Ecuador y España.
- **Method:** Comparación con estudiantes de ingeniería y prueba de aceptación.
- **Key finding:** Blockly logró menor tiempo de implementación y mayor aceptación (sin magnitudes en el resumen).
- **Relevance:** Es el único estudio encontrado que combina Blockly y ESP32 con usuarios, en contexto latinoamericano. La población es universitaria.
- **URL/DOI:** 10.54941/ahfe1001182. El año 2022 sale del repositorio de la Universidad Indoamérica, no de la página de AHFE.

---

## Eje 3 — Simuladores de robótica educativa y transferencia simulador→robot real (incluye laboratorios remotos y robots compartidos)

### Terzic, Boticki, Lovrekovic y Topalovic (2025) — Educational Robotics through Web Applications: From Visual Programming to Simulation-Driven Learning (MetaRoboLearn)
- **Venue:** *Proceedings of the 33rd International Conference on Computers in Education (ICCE 2025)*, APSCE.
- **Proximity:** 2
- **Main contribution:** Compara dos herramientas web del proyecto MetaRoboLearn (Univ. de Zagreb): una de bloques con Blockly para primaria y otra con Python y simulador 3D. Ambas controlan robots simulados y físicos con ROS2.
- **Method:** Desarrollo y descripción comparativa. No se pudo confirmar si incluye evaluación con usuarios.
- **Key finding:** Los autores proponen combinar programación visual, simulación en tiempo real y robot físico como vía escalable ("sim-to-real learning").
- **Relevance:** **El trabajo más cercano encontrado.** Tiene web, bloques, Python, simulador y robot real, pero no se reporta analítica docente, gestión multi-colegio ni robot de bajo costo con ESP32. Sus robots usan ROS2, que es más costoso.
- **URL/DOI:** https://library.apsce.net/index.php/ICCE/article/view/5673 (también listado como 6059)

### Ángel-Díaz, Segredo, Arnay y León (2020) — Simulador de robótica educativa para la promoción del pensamiento computacional
- **Venue:** *RED. Revista de Educación a Distancia*, 20(63). Editada por la Universidad de Murcia.
- **Proximity:** 2
- **Main contribution:** Aplicación web gratuita en la que el estudiante arma un robot con distintos sensores y lo prueba en retos simulados programándolo con bloques.
- **Method:** Desarrollo de herramienta y propuesta didáctica.
- **Key finding:** El artículo vincula los retos con descomposición, abstracción, reconocimiento de patrones y pensamiento algorítmico. No se obtuvieron magnitudes.
- **Relevance:** Antecedente hispano directo de simulador web con bloques y retos. No tiene robot real ni analítica docente. **Corrección:** los autores son de la **Universidad de La Laguna**; la Universidad de Murcia solo edita la revista.
- **URL/DOI:** 10.6018/red.410191 — https://revistas.um.es/red/article/view/410191

### Álvarez Martín (2020) — Mejoras en entorno de robótica educativa para niños (Kibotics)
- **Venue:** Trabajo Fin de Grado, Grado en Ingeniería Telemática, Universidad Rey Juan Carlos (curso 2019/2020). Tutor: José María Cañas Plaza.
- **Proximity:** 2
- **Main contribution:** Extiende Kibotics (JdeRobot/URJC), una plataforma web con simulador que corre por completo en el navegador (WebSim, A-Frame) y se programa con Blockly/Scratch o Python. Añade drones, mBot, ejercicios competitivos con **evaluadores automáticos** y teleoperación. Otros TFG de la misma línea añaden el robot LEGO EV3 real (Pulido, 2020).
- **Method:** Desarrollo de software.
- **Key finding:** No aplica (desarrollo). Demuestra que es viable programar en el navegador, simular y luego ejecutar en el robot real.
- **Relevance:** Antecedente muy cercano y **precedente de TFG** (mismo tipo de trabajo que la tesis). Le faltan robots ESP32 de bajo costo, panel docente y multi-colegio.
- **URL/DOI:** https://gsyc.urjc.es/jmplaza/students/tfg-kibotics-ruben_alvarez-2019.pdf. La especificación lo cita como "TFG 2019"; la portada indica el curso 2019/2020.

### Jost, Ketterl, Budde y Leimbach (2014) — Graphical Programming Environments for Educational Robots: Open Roberta — Yet Another One?
- **Venue:** *2014 IEEE International Symposium on Multimedia (ISM)*.
- **Proximity:** 2
- **Main contribution:** Evalúa entornos de programación de robots y presenta Open Roberta Lab (Fraunhofer IAIS): web, en la nube, con lenguaje de bloques NEPO basado en Blockly, simulador y conexión a robots reales.
- **Method:** Análisis de herramientas, desarrollo y descripción.
- **Key finding:** Hace falta bajar la complejidad de instalación y combinar tecnologías web, nube y sistemas embebidos.
- **Relevance:** Competidor principal de la tabla comparativa (es gratuito, multi-robot y tiene simulador). Hay una versión en revista: Ketterl, Jost, Leimbach y Budde (2016), *Læring og Medier*, 8(14), DOI 10.7146/lom.v8i14.22183.
- **URL/DOI:** 10.1109/ISM.2014.24

### Sirinterlikci, McKenna, Lin, Oravec y Harter (2022) — Learning Robot Programming Anywhere: VEXcode VR
- **Venue:** *2022 ASEE Annual Conference & Exposition*, Minneapolis.
- **Proximity:** 2
- **Main contribution:** Describe VEXcode VR, un simulador web gratuito lanzado el 2 de abril de 2020 por la pandemia, y un taller en línea con este.
- **Method:** Descriptivo (taller y retroalimentación).
- **Key finding:** Argumenta que el simulador evita el cuello de botella de enviar kits caros a cada estudiante. Dos de los autores son de VEX, lo que implica conflicto de interés.
- **Relevance:** Competidor comercial. Resuelve "pocos kits" con lo virtual, pero no transfiere a robots de bajo costo.
- **URL/DOI:** https://peer.asee.org/41259

### Parra-González, Cardona-Reyes y Murillo Alfaro (2025) — VEXcode VR: A Virtual Tool as Support in the Teaching of Analytical Geometry
- **Venue:** *CLEI Electronic Journal*, 28(2).
- **Proximity:** 3
- **Main contribution:** Cuasiexperimento con VEXcode VR para enseñar geometría analítica en secundaria en México.
- **Method:** Cuasiexperimento.
- **Key finding:** El grupo experimental obtuvo en promedio un 18,2 % más que el control, con diferencia significativa según los autores. Otro resumen indica que la media global del control fue ligeramente mayor, lo que es contradictorio y hay que revisar en el texto completo.
- **Relevance:** Evidencia latinoamericana (CLEI) de simulador web en secundaria.
- **URL/DOI:** 10.19153/cleiej.28.2.4 — https://ejbeta.clei.org/cleiej/article/view/749. **UNVERIFIED (año):** el año 2025 se infiere del volumen 28; no se confirmó.

### Tselegkaridis y Sapounidis (2021) — Simulators in Educational Robotics: A Review
- **Venue:** *Education Sciences*, 11(1), 11.
- **Proximity:** 3
- **Main contribution:** Catálogo comparativo de 17 simuladores con interfaz gráfica (2013–2020): edad, tipo de robot, lenguaje y plataforma.
- **Method:** Revisión de literatura.
- **Key finding:** Los simuladores pueden reducir el costo de obtener un sistema robótico y aumentar la disponibilidad.
- **Relevance:** Respaldo directo al argumento de "pocos kits" y fuente para la tabla comparativa.
- **URL/DOI:** 10.3390/educsci11010011

### Camargo, Gonçalves, Conde, Rodríguez-Sedano, Costa y García-Peñalvo (2021) — Systematic Literature Review of Realistic Simulators Applied in Educational Robotics Context
- **Venue:** *Sensors*, 21(12), 4031.
- **Proximity:** 3
- **Main contribution:** Revisión sistemática de simuladores realistas usados en robótica educativa.
- **Method:** Revisión sistemática.
- **Key finding:** No se obtuvieron magnitudes (no se pudo acceder al texto).
- **Relevance:** Revisión en una de las revistas pedidas (*Sensors*). Coautoría del grupo GRIAL de la Universidad de Salamanca.
- **URL/DOI:** 10.3390/s21124031

### Ztoupas, Sapounidis y Tselegkaridis (2026) — Simulators in Educational Robotics: A Systematic Review with Content Analysis
- **Venue:** **UNVERIFIED (venue).** Solo se encontró en una página de tame.tlu.ee con fecha de febrero de 2026.
- **Proximity:** 3
- **Main contribution:** Revisión de 8 bases de datos: de 1.200 artículos, 89 incluidos (54 de marcos o herramientas y 35 de intervenciones).
- **Method:** Revisión sistemática con análisis de contenido.
- **Key finding:** Predominan simuladores 3D y gratuitos. Las intervenciones se concentran en nivel terciario y hay pocas en secundaria. Las muestras son pequeñas y las intervenciones cortas. La participación docente es nula o moderada.
- **Relevance:** Documenta el vacío en secundaria y en el rol del docente que la tesis busca cubrir. Es la revisión más reciente encontrada.
- **URL/DOI:** https://tame.tlu.ee/2026/02/09/simulators-in-educational-robotics-a-systematic-review-with-content-analysis/

### Berland y Wilensky (2015) — Comparing Virtual and Physical Robotics Environments for Supporting Complex Systems and Computational Thinking
- **Venue:** *Journal of Science Education and Technology*, 24(5).
- **Proximity:** 3
- **Main contribution:** Compara unidades de 2 semanas con robots físicos y virtuales en 4 aulas urbanas de secundaria básica (*middle school*).
- **Method:** Cuasiexperimento.
- **Key finding:** Las ganancias fueron similares, pero el medio cambia la perspectiva: lo físico favorece la visión "agente" y lo virtual la visión "agregada".
- **Relevance:** Fundamento clave del enfoque híbrido (simulador + robot real) de la tesis.
- **URL/DOI:** 10.1007/s10956-015-9552-x

### Liu, Newsom, Schunn y Shoop (≈2013) — Students Learn Programming Faster through Robotic Simulation
- **Venue:** **UNVERIFIED (venue y año).** Se cita como *Tech Directions*, 2013, pero solo se encontró el PDF en el sitio de la CMU Robotics Academy.
- **Proximity:** 3
- **Main contribution:** Compara una clase con robots VEX físicos (n = 13) y otra con Robot Virtual Worlds (n = 17), con el mismo docente, en secundaria.
- **Method:** Cuasiexperimento con dos clases.
- **Key finding:** Ganancias de aprendizaje similares. El grupo virtual terminó el curso aproximadamente un mes antes (dato de resúmenes secundarios).
- **Relevance:** Apoya H1: el simulador aumenta la práctica efectiva.
- **URL/DOI:** https://www.cmu.edu/roboticsacademy/PDFs/Research/LearnProgrammingFasterThroughSimulation.pdf

### Zabala, Morán y Teragni (2021) — Mendieta, One Robot Per School: Multi-user Robot for Technology Education
- **Venue:** En *Education in & with Robotics to Foster 21st-Century Skills (EDUROBOTICS 2021)*, Studies in Computational Intelligence, vol. 982, Springer.
- **Proximity:** 2
- **Main contribution:** Robot autónomo de bajo costo (Arduino Nano + Orange Pi con servidor web) que **encola** los programas de varios usuarios para que un solo robot sirva a toda la clase. Contexto: Argentina.
- **Method:** Desarrollo y descripción.
- **Key finding:** Implementación en una escuela por menos de USD 180, con hardware y software abiertos.
- **Relevance:** **Antecedente casi idéntico al módulo "cola de turnos"** y al problema de pocos kits. No tiene simulador ni analítica docente.
- **URL/DOI:** https://repositorio.uai.edu.ar/handle/123456789/4991. Hay discrepancias de nombre entre fuentes (Moran J. R. / Morán R.).

### Garcia-Costa, Suarez, Martinez, Martos, Fayos y Lopez-Iñesta (2020) — A Transversal Virtual Remote Laboratory for Teaching in STEM Disciplines Using Robotic Platforms
- **Venue:** *INTED2020 Proceedings*, 6069–6075 (IATED).
- **Proximity:** 2
- **Main contribution:** Laboratorio remoto en el que el estudiante sube su programa por la web y el sistema lo ejecuta en uno de los robots reales. Los bloques se adaptan al nivel (primaria, secundaria, universidad).
- **Method:** Desarrollo y descripción.
- **Key finding:** No se obtuvieron magnitudes.
- **Relevance:** Modelo de flujo "programa → cola → robot real" desde el navegador. Universidad de Valencia.
- **URL/DOI:** 10.21125/inted.2020.1643

### Angulo, García-Zubía, Hernández-Jayo, Uriarte, Rodríguez-Gil, Orduña y Pieper (2017) — RoboBlock: A Remote Lab for Robotics and Visual Programming
- **Venue:** *2017 4th Experiment@International Conference (exp.at'17)*, 109–110.
- **Proximity:** 3
- **Main contribution:** Laboratorio remoto que integra robot y programación visual con Blockly en una sola interfaz, para K-12 (WebLab-Deusto).
- **Method:** Desarrollo (resumen corto).
- **Key finding:** Las escuelas tienen dificultades para mantener laboratorios físicos de robots, y el laboratorio remoto es una alternativa.
- **Relevance:** Precedente de compartir robots reales entre muchos estudiantes vía web.
- **URL/DOI:** 10.1109/EXPAT.2017.7984373

### Pickem et al. (2017) — The Robotarium: A Remotely Accessible Swarm Robotics Research Testbed
- **Venue:** *2017 IEEE International Conference on Robotics and Automation (ICRA)*.
- **Proximity:** 4
- **Main contribution:** Instalación multi-robot accesible remotamente (Georgia Tech), con rutinas de seguridad para ejecutar código de terceros.
- **Method:** Desarrollo y validación.
- **Key finding:** Se puede abrir hardware costoso a muchos usuarios remotos de forma segura.
- **Relevance:** Patrón arquitectónico (cola, seguridad, ejecución remota) aplicable a "robots compartidos por turnos". Kinner, Wilson y Dawadi (2024, ASEE Southeast, DOI 10.18260/1-2--45513) le añadieron una interfaz de bloques y un piloto en secundaria.
- **URL/DOI:** 10.1109/ICRA.2017.7989200 — https://arxiv.org/abs/1609.04730

---

## Eje 4 — Robots educativos de bajo costo (ESP32 / Arduino / MicroPython)

### da Silva Junior, Gonçalves, Caurin, Tamanaka, Hernandes y Aroca (2020) — BIPES: Block Based Integrated Platform for Embedded Systems
- **Venue:** *IEEE Access*, 8, 197955–197968.
- **Proximity:** 2
- **Main contribution:** Plataforma web de código abierto (Brasil) para programar con Blockly o Python placas de bajo costo (ESP32, ESP8266, micro:bit, etc.). Usa **MicroPython**, **Web Serial API**, WebREPL y WebSockets, y no requiere servidor (PWA).
- **Method:** Desarrollo y validación (arquitectura, diseño y resultados de validación).
- **Key finding:** Es viable programar el ESP32 con bloques que se traducen a MicroPython directamente desde el navegador.
- **Relevance:** **El precedente técnico más cercano al módulo ESP32 + Web Serial + MicroPython.** No tiene simulador de robot, retos ni panel docente.
- **URL/DOI:** 10.1109/ACCESS.2020.3035083

### Lamprecht, Haller-Seeber y Piater (2021) — A Block-based IDE Extension for the ESP32
- **Venue:** En *Robotics in Education (RiE 2020)*, Advances in Intelligent Systems and Computing, Springer, 304–310.
- **Proximity:** 3
- **Main contribution:** Extensión de Ardublockly para ESP32 orientada a la escuela, con un ejercicio de robótica de enjambre.
- **Method:** Desarrollo y aplicación en aula.
- **Key finding:** Señala que Arduino Uno no se actualiza desde 2010, lo que motiva migrar a ESP32.
- **Relevance:** Justifica elegir ESP32 sobre Arduino Uno.
- **URL/DOI:** 10.1007/978-3-030-67411-3_27

### Armesto, Blanc, González y Sala (2023) — Wireless Remote Control of Low-Cost Smart Devices for No-Coders (Facilino)
- **Venue:** *Proceedings of the 20th International Conference on Informatics in Control, Automation and Robotics (ICINCO 2023)*, vol. 2, 173–180.
- **Proximity:** 2
- **Main contribution:** Facilino, herramienta de bloques sobre Blockly para controlar por Bluetooth o WiFi dispositivos ESP32/Arduino de bajo costo, incluida **una casa inteligente y un robot**. Se integra con App Inventor. Universitat Politècnica de València.
- **Method:** Desarrollo con resultados preliminares en docencia.
- **Key finding:** No se obtuvieron magnitudes.
- **Relevance:** Antecedente directo de la extensión "domótica + robot con el mismo adaptador" (MAY). No tiene simulador ni analítica.
- **URL/DOI:** 10.5220/0012194600003543

### Chronis y Varlamis (2022) — FOSSBot: An Open Source and Open Design Educational Robot
- **Venue:** *Electronics*, 11(16), 2606.
- **Proximity:** 3
- **Main contribution:** Robot educativo abierto, impreso en 3D y con piezas comerciales (Raspberry Pi), con programación por bloques y simulador asociado (según materiales del proyecto).
- **Method:** Desarrollo y diseño abierto.
- **Key finding:** No se obtuvieron magnitudes.
- **Relevance:** Referente de robot abierto de bajo costo en Europa (Grecia).
- **URL/DOI:** 10.3390/electronics11162606. El DOI se construyó a partir de volumen, número y artículo; verificar.

### Chatzopoulos, Kalogiannakis, Papadakis y Papoutsidakis (2022) — A Novel, Modular Robot for Educational Robotics Developed Using Action Research Evaluated on Technology Acceptance Model
- **Venue:** *Education Sciences*, 12(4), 274.
- **Proximity:** 3
- **Main contribution:** Robot modular, abierto y de bajo costo diseñado con investigación-acción, motivado por el alto costo de los robots comerciales.
- **Method:** Investigación-acción y evaluación con el modelo TAM (116 estudiantes universitarios de pedagogía).
- **Key finding:** Buena aceptación según TAM (sin magnitudes en el resumen).
- **Relevance:** Modelo metodológico de "desarrollo + validación de aceptación", comparable a SUS en la tesis.
- **URL/DOI:** 10.3390/educsci12040274

### Oberholster (s. f.) — The ESP32 Microcontroller as a Low-cost Teaching Tool for Mechatronics
- **Venue:** *IRSPBL* (Aalborg University journals).
- **Proximity:** 4
- **Main contribution:** Uso del ESP32 como herramienta docente de bajo costo en mecatrónica universitaria (Universidad de Pretoria).
- **Method:** Descriptivo o experiencia docente.
- **Key finding:** No se obtuvieron magnitudes.
- **Relevance:** Apoyo secundario a la elección del ESP32 por costo.
- **URL/DOI:** 10.54337/irspbl-11067. **UNVERIFIED (año):** probablemente 2025 o posterior.

---

## Eje 5 — Learning analytics y paneles docentes en programación y robótica

### Ihantola et al. (2015) — Educational Data Mining and Learning Analytics in Programming: Literature Review and Case Studies
- **Venue:** *Proceedings of the 2015 ITiCSE Working Group Reports*, ACM, 41–63.
- **Proximity:** 4
- **Main contribution:** Revisión 2005–2015 de minería de datos y analítica en la enseñanza de programación, con tres casos de replicación.
- **Method:** Revisión de literatura y estudios de caso.
- **Key finding:** Crece el análisis del proceso de programación, pero predominan métricas simples en estudios de un solo curso e institución.
- **Relevance:** Marco para definir qué registrar (intentos, errores, tiempo) en los logs.
- **URL/DOI:** 10.1145/2858796.2858798

### Schwendimann et al. (2017) — Perceiving Learning at a Glance: A Systematic Literature Review of Learning Dashboard Research
- **Venue:** *IEEE Transactions on Learning Technologies*, 10(1), 30–41.
- **Proximity:** 4
- **Main contribution:** Revisión de 55 artículos sobre paneles de aprendizaje y una definición de "learning dashboard".
- **Method:** Revisión sistemática.
- **Key finding:** La mayoría son estudios exploratorios o pruebas de concepto. Faltan estudios en entornos reales y comparaciones de diseños.
- **Relevance:** Fundamento del panel docente. Justifica evaluarlo con un docente real (H4).
- **URL/DOI:** 10.1109/TLT.2016.2599522

### Diana, Eagle, Stamper, Grover, Bienkowski y Basu (2017) — An Instructor Dashboard for Real-Time Analytics in Interactive Programming Assignments
- **Venue:** *Proceedings of the 7th International Learning Analytics & Knowledge Conference (LAK '17)*, 272–279.
- **Proximity:** 3
- **Main contribution:** Panel docente en tiempo real para tareas de programación (entorno de bloques Alice, según la línea del grupo).
- **Method:** Desarrollo y análisis de datos.
- **Key finding:** No se obtuvieron magnitudes (no se encontró el resumen).
- **Relevance:** Precedente directo de un panel docente basado en logs de programación.
- **URL/DOI:** ACM DL (LAK '17); DOI no confirmado.

### Grover, Basu, Bienkowski, Eagle, Diana y Stamper (2017) — A Framework for Using Hypothesis-Driven Approaches to Support Data-Driven Learning Analytics in Measuring Computational Thinking in Block-Based Programming Environments
- **Venue:** *ACM Transactions on Computing Education*, 17(3), art. 14.
- **Proximity:** 3
- **Main contribution:** Marco basado en Evidence-Centered Design para interpretar logs de entornos de bloques y medir pensamiento computacional.
- **Method:** Marco metodológico y análisis de logs (Alice, secundaria).
- **Key finding:** Combinar hipótesis pedagógicas con minería de datos mejora la interpretación de los logs.
- **Relevance:** Guía para que el panel no muestre solo conteos sino indicadores interpretables.
- **URL/DOI:** 10.1145/3105910

### Moreno-León, Robles y Román-González (2015) — Dr. Scratch: Automatic Analysis of Scratch Projects to Assess and Foster Computational Thinking
- **Venue:** *RED. Revista de Educación a Distancia*, 46, 1–23.
- **Proximity:** 3
- **Main contribution:** Herramienta web que analiza automáticamente proyectos de Scratch, puntúa el pensamiento computacional y da retroalimentación.
- **Method:** Desarrollo y talleres en 8 escuelas (estudiantes de 10 a 14 años).
- **Key finding:** Los estudiantes usaron la retroalimentación para mejorar sus proyectos.
- **Relevance:** Precedente hispano de **evaluación automática** de programas de bloques, útil para el módulo "retos + evaluación automática".
- **URL/DOI:** 10.6018/RED/46/10

### Scaradozzi, Cesaretti, Screpanti y Mangina (2020) — Identification of the Students Learning Process During Education Robotics Activities
- **Venue:** *Frontiers in Robotics and AI*, 7, 21.
- **Proximity:** 3
- **Main contribution:** Registra cada intento de programación de equipos con LEGO EV3 (log en el robot) y aplica minería de datos educativa (k-means) en primaria y secundaria.
- **Method:** Estudio empírico con análisis de logs.
- **Key finding:** Identifica patrones y trayectorias de resolución de problemas a partir de los intentos. En el trabajo de seguimiento (Cesaretti et al., 2021, 197 estudiantes) se predijo el desempeño con clasificadores.
- **Relevance:** **El precedente más cercano de analítica de aprendizaje en robótica educativa.** Registra intentos como hará la plataforma, pero no tiene panel docente web.
- **URL/DOI:** 10.3389/frobt.2020.00021

### Vaz Junior, Pernas y Primo (s. f.) — ScratchAnalytics: A Framework for Collecting and Analyzing Interactions in Scratch Projects
- **Venue:** *Anais do Simpósio Brasileiro de Informática na Educação (SBIE)*, SBC.
- **Proximity:** 3
- **Main contribution:** Marco para recolectar y analizar automáticamente las interacciones de estudiantes en Scratch (Universidade Federal de Pelotas).
- **Method:** Desarrollo.
- **Key finding:** No se obtuvieron magnitudes.
- **Relevance:** Antecedente latinoamericano de analítica sobre programación por bloques.
- **URL/DOI:** https://sol.sbc.org.br/index.php/sbie/article/view/12842. **UNVERIFIED (año).**

---

## Eje 6 — Contexto de Panamá y Latinoamérica

### Moreno, Muñoz, Serracín, Quintero, Pittí y Quiel (2012) — La robótica educativa, una herramienta para la enseñanza-aprendizaje de las ciencias y las tecnologías
- **Venue:** *Teoría de la Educación. Educación y Cultura en la Sociedad de la Información (TESI)*, 13(2), 74–90. Ediciones Universidad de Salamanca.
- **Proximity:** 3
- **Main contribution:** Estudio de la UTP en 6 colegios secundarios de Chiriquí sobre robótica como apoyo a matemáticas, física e informática.
- **Method:** Descriptivo, con estudiantes y docentes de 6 colegios.
- **Key finding:** La robótica ayuda a comprender conceptos abstractos y fomenta el trabajo en equipo.
- **Relevance:** **Antecedente panameño principal.** **Corrección:** no es una colaboración UTP–Universidad de Salamanca. Son autores de la UTP que publican en una revista de la Universidad de Salamanca, en un número monográfico coordinado por Curto Diego y Pittí Patiño.
- **URL/DOI:** https://gredos.usal.es/handle/10366/121803 — https://ridda2.utp.ac.pa/handle/123456789/4919

### Barranco Candanedo (2012) — La robótica educativa, un nuevo reto para la educación panameña
- **Venue:** *TESI*, 13(2), 9–17.
- **Proximity:** 4
- **Main contribution:** Reflexión sobre los cambios que la robótica educativa exige a docentes y estudiantes en Panamá (el autor es del IPT Arnulfo Arias Madrid).
- **Method:** Ensayo o descriptivo.
- **Key finding:** No aplica.
- **Relevance:** Contexto histórico nacional.
- **URL/DOI:** https://www.redalyc.org/pdf/2010/201024390002.pdf

### Candanedo Yau (2026) — Robótica educativa y herramientas TIC: fusión que transforma la enseñanza-aprendizaje en la era digital
- **Venue:** *Synergia* (Universidad de Panamá), 5(1), 124–142.
- **Proximity:** 3
- **Main contribution:** Estudio mixto en el Centro Regional Universitario de Panamá Este (Universidad de Panamá) con 25 estudiantes de Informática y 5 docentes.
- **Method:** Mixto (revisión, encuestas, entrevistas y observación).
- **Key finding:** La robótica mejoró la comprensión de conceptos abstractos, el pensamiento crítico y la colaboración (cualitativo).
- **Relevance:** Antecedente reciente de la **misma universidad**, útil para citar y para contactar posibles asesores o colaboradores.
- **URL/DOI:** 10.48204/synergia.v5n1.9851

### Mesa Pinto (2026) — Didáctica de la robótica educativa en educación básica secundaria
- **Venue:** *Ciencia Latina Revista Científica Multidisciplinar*, 10(1).
- **Proximity:** 4
- **Main contribution:** Revisión de 45 artículos (Scopus, WoS y SciELO, 2015–2025). Autor de la Universidad de Panamá.
- **Method:** Revisión documental o sistemática.
- **Key finding:** Hay una brecha entre el discurso pedagógico y la práctica en el aula, por falta de formación docente. El valor depende de la mediación didáctica, no de lo sofisticado del hardware. Recomienda hardware de bajo costo y software libre.
- **Relevance:** Respalda tanto el enfoque de bajo costo como el riesgo de que el docente sea el cuello de botella.
- **URL/DOI:** 10.37811/cl_rcm.v10i1.23362. **UNVERIFIED (año):** el año 2026 se infiere del volumen 10 y no se confirmó.

### Causil Villalba (s. f.) — Robótica educativa: una revisión sistemática de su progreso en América Latina en los últimos años
- **Venue:** *Punto Educativo* (Universidad de Panamá).
- **Proximity:** 4
- **Main contribution:** Revisión documental del progreso de la robótica educativa en América Latina.
- **Method:** Revisión documental (aunque el título dice "sistemática").
- **Key finding:** Brasil lidera la investigación regional. Las herramientas más usadas son LEGO, Arduino y Scratch.
- **Relevance:** Contexto regional. Confirma que Arduino/Scratch dominan, lo que da pie a diferenciarse con ESP32 + simulador.
- **URL/DOI:** 10.5281/zenodo.17437190 — https://revistas.up.ac.pa/index.php/punto_educativo/article/view/8167. **UNVERIFIED (año):** probablemente 2025 por el DOI de Zenodo.

### Guerrero Támara, Penadillo Lirio y Lezameta Blas (2022) — Nivel de percepción de la robótica educativa en una universidad peruana
- **Venue:** *ACADEMO*, 9(1), 62–72.
- **Proximity:** 4
- **Main contribution:** Cuestionario a 35 docentes del Departamento de Educación de una universidad peruana.
- **Method:** Descriptivo transversal (censal, no probabilístico).
- **Key finding:** El 97 % desconoce los fundamentos conceptuales, el 94 % los aspectos pedagógicos y **el 74 % no sabe cómo aplicar** la robótica educativa.
- **Relevance:** **Corrección a la especificación:** el 74 % no "desconoce la robótica educativa"; no sabe aplicarla. Además son 35 docentes universitarios de una sola institución, no docentes escolares del país, así que no debe generalizarse.
- **URL/DOI:** 10.30545/academo.2022.ene-jun.6 — https://www.redalyc.org/journal/6882/688272308006/688272308006.pdf

### Fernández Morales, Iriarte Gómez, Mejía Solano y Revuelta Domínguez (2018) — Contextualización de la formación virtual en robótica educativa de los docentes rurales del Perú
- **Venue:** *REXE. Revista de Estudios y Experiencias en Educación*, 2(Esp. 2), 71–82.
- **Proximity:** 4
- **Main contribution:** Formación virtual de docentes rurales en robótica educativa (Ministerio de Educación del Perú y Universidad de Extremadura).
- **Method:** Descriptivo o experiencia.
- **Key finding:** Perú distribuyó más de 20.000 kits que requieren docentes capacitados.
- **Relevance:** Contraejemplo regional: tener kits no basta si falta formación. Apoya la "sorpresa posible" de la especificación.
- **URL/DOI:** 10.21703/rexe.Especial3201871826

### MEDUCA y FUNDESTEAM (2023) — Notas de prensa sobre clubes de robótica y formación docente STEAM (literatura gris)
- **Venue:** Prensa nacional: Telemetro (13/05/2023 y 15/10/2023) y La Estrella de Panamá.
- **Proximity:** 3
- **Main contribution:** Cifras oficiales del programa nacional de robótica.
- **Method:** Literatura gris (comunicados y prensa).
- **Key finding:** Más de 1.000 clubes de robótica y más de 1.300 docentes formados en el diplomado STEAM (ministra, octubre de 2023). FUNDESTEAM reporta más de 1.600 docentes (noviembre de 2023) y que el 33 % de las escuelas públicas tiene club. En mayo de 2023 unos 300 docentes de primaria recibieron kits (WeDo 1.0 y Arduino). El programa Cobre Panamá–FUNDESTEAM cubre 61 escuelas de Donoso y Omar Torrijos (Colón) y 191 docentes.
- **Relevance:** Motivación de la tesis. **Precaución:** el dato de "80 kits para 61 escuelas en Colón" de la especificación **no se pudo verificar**. Las cifras de docentes varían según la fuente y son de prensa, no de un informe oficial.
- **URL/DOI:** https://www.telemetro.com/nacionales/meduca-inicia-conteo-regresivo-la-olimpiada-mundial-robotica-n5931970 ; https://www.telemetro.com/nacionales/entregan-kits-robotica-docentes-colegios-oficiales-n5880438 ; https://cobrepanama.com/descargar/nota/380

---

## Eje 7 — Herramientas comparables (para la tabla comparativa)

> Las herramientas Scratch (Resnick et al., 2009), Open Roberta (Jost et al., 2014), VEXcode VR (Sirinterlikci et al., 2022), Kibotics (Álvarez Martín, 2020), BIPES (da Silva Junior et al., 2020) y MetaRoboLearn (Terzic et al., 2025) ya están anotadas arriba. Aquí se agregan las que faltan.

### Ball, Chatra, de Halleux, Hodges, Moskal y Russell (2019) — Microsoft MakeCode: Embedded Programming for Education, in Blocks and TypeScript
- **Venue:** *Proceedings of the 2019 ACM SIGPLAN SPLASH-E Symposium*, Atenas.
- **Proximity:** 2
- **Main contribution:** Plataforma web para programar microcontroladores en el aula: editores de bloques y TypeScript (y Python), **simulador del dispositivo**, depurador y compilador en el navegador.
- **Method:** Descripción de diseño.
- **Key finding:** No aplica. Documenta las decisiones de diseño.
- **Relevance:** Competidor fuerte (bloques ↔ texto, simulador, web). Su simulador es de la placa, no de un robot en una pista. Sin analítica docente documentada.
- **URL/DOI:** 10.1145/3358711.3361630

### mBlock 5 (Makeblock) — herramienta comercial
- **Venue:** Sitio oficial y documentación (no se encontró un artículo científico canónico).
- **Proximity:** 3
- **Main contribution:** Entorno basado en Scratch que genera código Arduino o Python y programa robots Makeblock (mBot, CyberPi).
- **Method:** No aplica.
- **Key finding:** Un estudio semiexperimental con 60 estudiantes no halló diferencias entre Scratch y mBlock en rendimiento ni pensamiento computacional. **UNVERIFIED:** no se identificaron autores, año ni venue; solo apareció en un resumen de búsqueda.
- **Relevance:** Competidor comercial de la tabla.
- **URL/DOI:** https://mblock.makeblock.com

### Tinkercad Circuits (Autodesk) — herramienta comercial
- **Venue:** Sitio oficial. Hay evidencia de uso pandémico en informes de congresos ASEE e INTED sin autoría individual verificada aquí.
- **Proximity:** 3
- **Main contribution:** Simulador web de circuitos con Arduino y micro:bit, con bloques ("Codeblocks") y vista de código.
- **Method:** No aplica.
- **Key finding:** Muy usado en la pandemia para sustituir laboratorios de Arduino.
- **Relevance:** Competidor de la tabla en "simular antes de tener hardware". No simula robots móviles en pista.
- **URL/DOI:** https://www.tinkercad.com

---

## Eje 8 — Usabilidad (SUS) como instrumento

### Brooke (1996) — SUS: A "quick and dirty" usability scale
- **Venue:** En Jordan, Thomas, Weerdmeester y McClelland (eds.), *Usability Evaluation in Industry*, Taylor & Francis, 189–194.
- **Proximity:** 4
- **Main contribution:** Cuestionario de 10 ítems Likert que da una puntuación de 0 a 100.
- **Method:** Instrumento.
- **Key finding:** No aplica.
- **Relevance:** Instrumento de H2.
- **URL/DOI:** https://hriscaledatabase.psychology.gmu.edu/usability/2025/01/13/SUS.html

### Bangor, Kortum y Miller (2008) — An Empirical Evaluation of the System Usability Scale
- **Venue:** *International Journal of Human-Computer Interaction*, 24(6), 574–594.
- **Proximity:** 4
- **Main contribution:** Datos normativos de SUS acumulados durante 10 años.
- **Method:** Análisis de una gran base de encuestas.
- **Key finding:** Permite situar una puntuación SUS frente a otros sistemas.
- **Relevance:** Respaldo para interpretar el umbral de H2.
- **URL/DOI:** 10.1080/10447310802205776

### Bangor, Kortum y Miller (2009) — Determining What Individual SUS Scores Mean: Adding an Adjective Rating Scale
- **Venue:** *Journal of Usability Studies*, 4(3), 114–123.
- **Proximity:** 4
- **Main contribution:** Añade una escala de adjetivos (de "Worst imaginable" a "Best imaginable") como ítem 11 en casi 1.000 encuestas.
- **Method:** Estudio psicométrico.
- **Key finding:** La escala de adjetivos correlaciona r = 0,822 con SUS.
- **Relevance:** Permite reportar el resultado de H2 en lenguaje comprensible para el jurado ("bueno", "excelente").
- **URL/DOI:** https://uxpajournal.org/wp-content/uploads/sites/7/pdf/JUS_Bangor_May2009.pdf

### Lewis (2018) — The System Usability Scale: Past, Present, and Future
- **Venue:** *International Journal of Human–Computer Interaction*, 34(7), 577–590.
- **Proximity:** 4
- **Main contribution:** Revisión histórica y psicométrica de SUS.
- **Method:** Revisión.
- **Key finding:** SUS es el cuestionario estandarizado de usabilidad percibida más usado.
- **Relevance:** Cita moderna para justificar SUS y su punto de referencia de 68. Ese promedio se atribuye a Sauro y Lewis; conviene confirmarlo en el texto completo antes de citarlo.
- **URL/DOI:** 10.1080/10447318.2018.1455307

### Putnam, Puthenmadom, Cuerdo, Wang y Paul (2020) — Adaptation of the System Usability Scale for User Testing with Children
- **Venue:** *Extended Abstracts of the 2020 CHI Conference on Human Factors in Computing Systems*, ACM.
- **Proximity:** 3
- **Main contribution:** Adapta la redacción de SUS para niños de 7 a 11 años (con 4 docentes) y la prueba con 30 niños.
- **Method:** Estudio piloto psicométrico.
- **Key finding:** Redacción comprensible. El análisis factorial dio 4 componentes, de los cuales 2 son fiables (resultados mixtos).
- **Relevance:** Advierte que SUS en menores necesita adaptación del lenguaje. Para educación media (14–17 años) el SUS estándar en español probablemente basta, pero conviene pilotar la redacción.
- **URL/DOI:** 10.1145/3334480.3382840. Hay una posible segunda versión (IDC '20, con otros coautores) sin verificar; se usa la de CHI EA.

---

## Resumen de conteo

| Eje | N.º de trabajos |
|-----|-----------------|
| 1. Efecto de la robótica educativa | 8 |
| 2. Bloques y transición a texto | 8 |
| 3. Simuladores, transferencia y robots compartidos o remotos | 15 |
| 4. Robots de bajo costo (ESP32/Arduino/MicroPython) | 6 |
| 5. Learning analytics y paneles docentes | 7 |
| 6. Panamá y Latinoamérica | 8 (incluye 1 entrada de literatura gris) |
| 7. Herramientas comerciales (adicionales) | 3 (más 6 ya contadas en otros ejes) |
| 8. SUS | 5 |
| **Total de entradas** | **60** |

| Proximidad | N.º |
|-----------|-----|
| 1 (compite directamente) | 0 |
| 2 | 10 |
| 3 | 26 |
| 4 | 21 |
| 5 | 3 |

**Entradas con algún dato UNVERIFIED:** 9 (Zhang et al. 2021 [4.º autor]; Parra-González et al. [año]; Ztoupas et al. [venue]; Liu et al. [venue y año]; Oberholster [año]; Vaz Junior et al. [año]; Mesa Pinto [año]; Causil Villalba [año]; estudio mBlock con 60 estudiantes [todo]). Ninguna de las 10 entradas de proximidad 2 tiene datos sin verificar.
