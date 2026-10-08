# Bibliografía anotada — Plataforma web de robótica educativa (simulador + Blockly + ESP32 + analítica docente)

**Proyecto:** robotica-educativa (tesis de desarrollo, pregrado, Universidad de Panamá)
**Fase:** Discovery (severidad baja) — **Ronda 2** (responde al librarian-critic, 76/100)
**Fecha de búsqueda:** 2026-10-08
**Elaborado por:** librarian (sin autoevaluación)

## Notas de método y verificación

- **"Cinco piezas" (definición única en los cuatro archivos):**
  - (P1) simulador web;
  - (P2) programación por bloques con vista de código;
  - (P3) robot real de bajo costo compartido por turnos;
  - (P4) analítica y panel docente;
  - (P5) gestión multi-colegio.
- **Escala de proximidad:**
  - 1 = compite directamente (tiene las cinco piezas);
  - 2 = muy cercano (le faltan 1 o 2 piezas, o es antecedente directo de una pieza central);
  - 3 = relacionado en método o contexto;
  - 4 = relevante pero tangencial;
  - 5 = fundamento general o literatura gris de contexto.
- **Verificación:** los datos bibliográficos salen de resultados de búsqueda web: repositorios, DOAJ, DBLP, IEEE Xplore, MDPI, páginas de revistas y listas de referencias. El proxy bloqueó WebFetch hacia casi todas las editoriales, así que **no se leyó ningún texto completo**. Las magnitudes provienen de resúmenes.
- **Marcas:**
  - `UNVERIFIED (campo)`: el autor, el año, el título o el venue no se confirmaron en una fuente real.
  - `DOI/TÍTULO NO VERIFICADO DIRECTAMENTE`: la referencia está confirmada, pero el DOI se construyó o se tomó de terceros, o el título de una nota de prensa se infirió de su URL.
- **Correcciones a la especificación:** ver `frontier_map.md` §6.

---

## Eje 1 — Efecto de la robótica educativa y marcos de pensamiento computacional

### Papert (1980) — *Mindstorms: Children, Computers, and Powerful Ideas*
- **Venue:** Libro, Basic Books (Nueva York). ISBN 0-465-04627-4.
- **Proximity:** 5
- **Main contribution:** Construccionismo: se aprende construyendo artefactos para "pensar con ellos", como la tortuga Logo y los micromundos.
- **Method:** Ensayo teórico.
- **Key finding:** No aplica.
- **Relevance:** Base del marco teórico. El simulador 2D funciona como un micromundo.
- **URL/DOI:** https://en.wikipedia.org/wiki/Mindstorms_(book)

### Wing (2006) — Computational Thinking
- **Venue:** *Communications of the ACM*, 49(3), 33–35.
- **Proximity:** 5
- **Main contribution:** Define el pensamiento computacional como una habilidad universal.
- **Method:** Artículo de opinión.
- **Key finding:** No aplica.
- **Relevance:** Constructo de referencia.
- **URL/DOI:** 10.1145/1118178.1118215

### Brennan y Resnick (2012) — New frameworks for studying and assessing the development of computational thinking
- **Venue:** *Proceedings of the 2012 Annual Meeting of the American Educational Research Association (AERA)*, Vancouver.
- **Proximity:** 4
- **Main contribution:** Marco de tres dimensiones derivado de Scratch:
  - **conceptos computacionales**, por ejemplo iteración y paralelismo;
  - **prácticas**, por ejemplo depurar y remezclar;
  - **perspectivas** sobre uno mismo y el mundo.
  - Propone evaluar con portafolios de proyectos, entrevistas sobre artefactos y escenarios de diseño.
- **Method:** Marco conceptual con estudio cualitativo.
- **Key finding:** El análisis automático de proyectos solo capta conceptos. Las prácticas y perspectivas necesitan entrevistas u observación.
- **Relevance:** **Marco recomendado para clasificar los retos por nivel** (ver `positioning.md` §5): cada reto se etiqueta con los conceptos que exige. También advierte que los logs del panel miden sobre todo conceptos y parte de las prácticas (depuración), no las perspectivas.
- **URL/DOI:** https://scratched.gse.harvard.edu/ct/files/AERA2012.pdf. El PDF del congreso lleva un encabezado con otro título ("Using artifact-based interviews…"); se cita con el título estándar.

### Grover y Pea (2013) — Computational Thinking in K–12: A Review of the State of the Field
- **Venue:** *Educational Researcher*, 42(1), 38–43.
- **Proximity:** 5
- **Main contribution:** Revisa definiciones, herramientas y evaluación del pensamiento computacional en K-12 a partir de Wing (2006).
- **Method:** Revisión narrativa.
- **Key finding:** Falta consenso en la definición y en la evaluación.
- **Relevance:** Cita de estado del arte para el marco teórico.
- **URL/DOI:** 10.3102/0013189X12463051

### Román-González, Pérez-González y Jiménez-Fernández (2017) — Which cognitive abilities underlie computational thinking? Criterion validity of the Computational Thinking Test
- **Venue:** *Computers in Human Behavior*, 72, 678–691.
- **Proximity:** 4
- **Main contribution:** Validación de criterio del Computational Thinking Test (CTt) con 1.251 estudiantes españoles de 5.º a 10.º grado.
- **Method:** Estudio psicométrico correlacional.
- **Key finding:** El pensamiento computacional correlaciona con habilidad espacial (r = 0,44), razonamiento (r = 0,44) y resolución de problemas (r = 0,67).
- **Relevance:** Instrumento validado **en español** y en el rango de edad de la tesis. Su progresión de conceptos sirve para graduar la dificultad de los retos. No se propone medir pensamiento computacional como hipótesis, pero el CTt podría usarse como descriptor de la muestra.
- **URL/DOI:** 10.1016/j.chb.2016.08.047

### Shute, Sun y Asbell-Clarke (2017) — Demystifying computational thinking
- **Venue:** *Educational Research Review*. **UNVERIFIED (volumen y páginas):** solo se encontró la preprint, sin paginación; 22, 142–158 no se confirmó.
- **Proximity:** 4
- **Main contribution:** Síntesis K-16 que define seis facetas: descomposición, abstracción, diseño de algoritmos, depuración, iteración y generalización.
- **Method:** Revisión de literatura.
- **Key finding:** Hay mucha diversidad de definiciones, intervenciones y evaluaciones. Proponen evaluación basada en desempeño.
- **Relevance:** Las facetas "depuración" e "iteración" son observables en los logs (intentos y errores por reto). Complementa a Brennan y Resnick para definir los indicadores del panel.
- **URL/DOI:** https://myweb.fsu.edu/vshute/pdf/CT.pdf

### Benitti (2012) — Exploring the educational potential of robotics in schools: A systematic review
- **Venue:** *Computers & Education*, 58(3), 978–988.
- **Proximity:** 4
- **Main contribution:** Revisión sistemática clásica sobre robótica en la escuela.
- **Method:** Revisión sistemática.
- **Key finding:** Muestra potencial, pero no siempre mejora el aprendizaje. Faltan estudios cuantitativos (según fuentes secundarias).
- **Relevance:** Referencia obligada.
- **URL/DOI:** 10.1016/j.compedu.2011.10.006. **DOI NO VERIFICADO DIRECTAMENTE.**

### Xia y Zhong (2018) — A systematic review on teaching and learning robotics content knowledge in K-12
- **Venue:** *Computers & Education*, 127, 267–282 (confirmado en DBLP).
- **Proximity:** 4
- **Main contribution:** Revisa la enseñanza y evaluación del contenido de robótica en K-12 (22 estudios según fuentes secundarias).
- **Method:** Revisión sistemática.
- **Key finding:** El cuestionario es el instrumento de evaluación más frecuente. Hay casos sin ganancias significativas.
- **Relevance:** Evaluar es difícil y faltan datos de proceso, que es lo que motiva el panel docente.
- **URL/DOI:** 10.1016/j.compedu.2018.08.007. **DOI NO VERIFICADO DIRECTAMENTE.**

### Anwar, Bascou, Menekse y Kardgar (2019) — A Systematic Review of Studies on Educational Robotics
- **Venue:** *Journal of Pre-College Engineering Education Research (J-PEER)*, 9(2), 19–42.
- **Proximity:** 4
- **Main contribution:** Agrupa la investigación en cinco temas, entre ellos el desarrollo profesional docente.
- **Method:** Revisión sistemática.
- **Key finding:** El docente es un tema propio de investigación.
- **Relevance:** Respalda el riesgo de que el cuello de botella sea el docente.
- **URL/DOI:** 10.7771/2157-9288.1223

### Zhang, Luo, Zhu et al. (2021) — Educational Robots Improve K-12 Students' Computational Thinking and STEM Attitudes: Systematic Review
- **Venue:** *Journal of Educational Computing Research*, 59(7), 1450–1481.
- **Proximity:** 4
- **Main contribution:** Metaanálisis de 17 estudios (2010–2019).
- **Method:** Revisión sistemática y metaanálisis.
- **Key finding:**
  - SMD global = 0,46 (IC 95 %: 0,23–0,69).
  - Pensamiento computacional SMD = 0,48; actitudes STEM SMD = 0,01.
  - Efectos menores en secundaria.
- **Relevance:** Magnitud de referencia.
- **URL/DOI:** 10.1177/0735633121994070. **UNVERIFIED (4.º autor).**

### Ouyang y Xu (2024) — The effects of educational robotics in STEM education: a multilevel meta-analysis
- **Venue:** *International Journal of STEM Education*, 11.
- **Proximity:** 4
- **Main contribution:** Metaanálisis multinivel con 30 efectos de 21 estudios.
- **Method:** Metaanálisis.
- **Key finding:**
  - g global = 0,488.
  - Desempeño g = 0,665; actitud g = 0,497.
  - Pensamiento computacional g = 0,079, no significativo.
- **Relevance:** No conviene prometer mejoras de pensamiento computacional.
- **URL/DOI:** 10.1186/s40594-024-00469-4

### Alonso-García, Rodríguez Fuentes, Ramos Navas-Parejo y Victoria-Maldonado (2024) — Enhancing computational thinking in early childhood education with educational robotics: A meta-analysis
- **Venue:** *Heliyon*, 10(13), e33249.
- **Proximity:** 5
- **Main contribution:** Metaanálisis en educación infantil.
- **Method:** Revisión PRISMA y metaanálisis.
- **Key finding:** Efecto significativo. El contexto normativo pesa más que la brecha de acceso.
- **Relevance:** Matiza que el acceso a kits no lo es todo.
- **URL/DOI:** 10.1016/j.heliyon.2024.e33249

### Forsström, Bond y Njå (2025) — A meta-review of programming and robotics in schools
- **Venue:** *Review of Education* (Wiley/BERA).
- **Proximity:** 4
- **Main contribution:** Meta-revisión de 49 síntesis de evidencia sobre programación y robótica en primaria y secundaria.
- **Method:** Meta-revisión.
- **Key finding:** Predominan las revisiones sistemáticas. Recomienda orientación y recursos más claros para el docente y priorizar su formación.
- **Relevance:** **Segundo respaldo del vacío V3** (rol docente) junto a Ztoupas et al. (2026).
- **URL/DOI:** 10.1002/rev3.70231

---

## Eje 2 — Programación por bloques y transición a texto

### Resnick et al. (2009) — Scratch: Programming for All
- **Venue:** *Communications of the ACM*, 52(11), 60–67.
- **Proximity:** 4
- **Main contribution:** Diseño de Scratch y de su comunidad.
- **Method:** Descriptivo.
- **Key finding:** No aplica.
- **Relevance:** Referente y competidor.
- **URL/DOI:** 10.1145/1592761.1592779

### Fraser (2015) — Ten Things We've Learned from Blockly
- **Venue:** *2015 IEEE Blocks and Beyond Workshop*, 49–50.
- **Proximity:** 3
- **Main contribution:** Diez lecciones de diseño de Blockly.
- **Method:** Reporte de experiencia.
- **Key finding:** Condicionales y bucles son los bloques más difíciles.
- **Relevance:** Diseño de los bloques personalizados.
- **URL/DOI:** https://ieeexplore.ieee.org/document/7369000/

### Price y Barnes (2015) — Comparing Textual and Block Interfaces in a Novice Programming Environment
- **Venue:** *ICER 2015*, ACM.
- **Proximity:** 4
- **Main contribution:** Aísla el efecto de la interfaz de bloques frente a texto.
- **Method:** Experimento con dos grupos.
- **Key finding:** El grupo de bloques se distrajo menos y alcanzó más objetivos en menos tiempo.
- **Relevance:** Apoya H1 (práctica efectiva).
- **URL/DOI:** 10.1145/2787622.2787712

### Bau, Gray, Kelleher, Sheldon y Turbak (2017) — Learnable Programming: Blocks and Beyond
- **Venue:** *Communications of the ACM*, 60(6), 72–80.
- **Proximity:** 4
- **Main contribution:** Síntesis de las ventajas de los bloques y de los entornos híbridos.
- **Method:** Revisión narrativa.
- **Key finding:** Los bloques facilitan el paso posterior a texto.
- **Relevance:** Justifica "bloques + vista Python".
- **URL/DOI:** 10.1145/3015455

### Weintrop y Wilensky (2017) — Comparing Block-Based and Text-Based Programming in High School Computer Science Classrooms
- **Venue:** *ACM Transactions on Computing Education*, 18(1), art. 3.
- **Proximity:** 3
- **Main contribution:** Cuasiexperimento de 5 semanas en secundaria con versiones isomorfas de bloques y texto.
- **Method:** Cuasiexperimento.
- **Key finding:** El grupo de bloques ganó más y mostró más interés.
- **Relevance:** Evidencia en la población de la tesis.
- **URL/DOI:** 10.1145/3089799

### Weintrop y Wilensky (2019) — Transitioning from introductory block-based and text-based environments to professional programming languages in high school computer science classrooms
- **Venue:** *Computers & Education*, 142, 103646.
- **Proximity:** 3
- **Main contribution:** Seguimiento tras la transición a Java.
- **Method:** Cuasiexperimento longitudinal.
- **Key finding:** Sin diferencias después de la transición.
- **Relevance:** Los bloques no retrasan el aprendizaje del código.
- **URL/DOI:** 10.1016/j.compedu.2019.103646

### Xu, Ritzhaupt, Tian y Umapathy (2019) — Block-based versus text-based programming environments on novice student learning outcomes: a meta-analysis study
- **Venue:** *Computer Science Education*, 29(2–3), 177–204.
- **Proximity:** 3
- **Main contribution:** 13 publicaciones y 52 comparaciones.
- **Method:** Metaanálisis.
- **Key finding:** Cognitivo g = 0,245 y afectivo g = 0,195, ambos no significativos.
- **Relevance:** Los bloques reducen barreras, pero no garantizan aprendizaje.
- **URL/DOI:** 10.1080/08993408.2019.1565233

### Miranda, Varela-Aldás y Palacios-Navarro (2022) — Comparison of Blockly vs Arduino IDE for programming education using M5Stack Core2 ESP32 IoT Development Kit
- **Venue:** *AHFE Open Access*.
- **Proximity:** 3
- **Main contribution:** Blockly (UIFlow) frente a Arduino IDE en ESP32.
- **Method:** Comparación con universitarios.
- **Key finding:** Blockly fue más rápido y tuvo mayor aceptación.
- **Relevance:** Blockly + ESP32 con usuarios, en contexto latinoamericano.
- **URL/DOI:** 10.54941/ahfe1001182. El año sale del repositorio institucional.

---

## Eje 3 — Simuladores, transferencia simulador→robot real y robots compartidos

### 3a. Herramientas y estudios educativos

### Terzic, Boticki, Lovrekovic y Topalovic (2025) — Educational Robotics through Web Applications: From Visual Programming to Simulation-Driven Learning (MetaRoboLearn)
- **Venue:** *Proceedings of the 33rd International Conference on Computers in Education (ICCE 2025)*, APSCE.
- **Proximity:** 2
- **Main contribution:** Dos herramientas web (Blockly; Python con simulador 3D) que controlan robots simulados y físicos con ROS2.
- **Method:** Desarrollo y descripción comparativa.
- **Key finding:** Propone el "sim-to-real learning" como vía escalable.
- **Relevance:** **El más cercano.** Tiene P1, P2 y robot real, pero no P4 ni P5, y su robot no es de bajo costo.
- **URL/DOI:** https://library.apsce.net/index.php/ICCE/article/view/5673

### Ángel-Díaz, Segredo, Arnay y León (2020) — Simulador de robótica educativa para la promoción del pensamiento computacional
- **Venue:** *RED. Revista de Educación a Distancia*, 20(63). Editada por la Universidad de Murcia.
- **Proximity:** 2
- **Main contribution:** Simulador web gratuito con bloques: el estudiante diseña un robot con sensores y lo prueba en retos.
- **Method:** Desarrollo y propuesta didáctica.
- **Key finding:** Vincula los retos con descomposición, abstracción, reconocimiento de patrones y algoritmos.
- **Relevance:** Antecedente hispano de P1 + P2. Los autores son de la **Universidad de La Laguna**.
- **URL/DOI:** 10.6018/red.410191

### Álvarez Martín (2020) — Mejoras en entorno de robótica educativa para niños (Kibotics)
- **Venue:** TFG, Grado en Ingeniería Telemática, Universidad Rey Juan Carlos (curso 2019/2020). Tutor: J. M. Cañas Plaza.
- **Proximity:** 2
- **Main contribution:** Amplía Kibotics, que simula en el navegador (WebSim, A-Frame) y se programa con Blockly o Python. Añade drones, mBot, ejercicios competitivos con evaluadores automáticos y teleoperación.
- **Method:** Desarrollo.
- **Key finding:** No aplica.
- **Relevance:** Precedente de TFG. Tiene P1 y P2, robot real parcial y P4 parcial.
- **URL/DOI:** https://gsyc.urjc.es/jmplaza/students/tfg-kibotics-ruben_alvarez-2019.pdf

### Pulido Millanes (2021) — Integración del Robot Lego Ev3 en una plataforma de Robótica Educativa
- **Venue:** TFG, Grado en Ingeniería Telemática, Universidad Rey Juan Carlos (curso 2020/2021). Tutor: J. M. Cañas Plaza.
- **Proximity:** 2
- **Main contribution:** Integra el LEGO EV3 en Kibotics:
  - tres modelos 3D con sensores en WebSim;
  - drivers en JavaScript para el robot simulado;
  - drivers en Python para el robot real; el código del usuario se envía por peticiones HTTP.
  - Validado con ejercicios educativos.
- **Method:** Desarrollo y validación funcional.
- **Key finding:** El mismo programa corre en el simulador y en el robot real a través de **drivers equivalentes**.
- **Relevance:** **Precedente arquitectónico directo del patrón adaptador** (simulador/robot con la misma API). La especificación lo citaba como 2020; la portada indica el curso 2020/2021.
- **URL/DOI:** https://gsyc.urjc.es/jmplaza/students/tfg-kibotics-lego_ev3-daniel_pulido-2020.pdf

### Castro San Martín (2022) — Enseñanza de la Programación y el Pensamiento Computacional con la Plataforma Kibotics
- **Venue:** TFM, Máster en Formación del Profesorado (especialidad Informática y Tecnología), Universidad Rey Juan Carlos (curso 2021-2022). Directora: R. B. Hijón Neira.
- **Proximity:** 3
- **Main contribution:** Uso didáctico de Kibotics en secundaria.
- **Method:** Propuesta didáctica. No se confirmó si incluye evaluación con estudiantes.
- **Key finding:** No se obtuvieron (no se leyó el texto).
- **Relevance:** Muestra el uso de Kibotics en el aula de secundaria. **Revisar si incluye un panel o evaluación docente, por el riesgo de que se adelante a la tesis.**
- **URL/DOI:** https://gsyc.urjc.es/jmplaza/kibotics/tfm-LuisCastroSanMartin-2022.pdf

### Jost, Ketterl, Budde y Leimbach (2014) — Graphical Programming Environments for Educational Robots: Open Roberta — Yet Another One?
- **Venue:** *2014 IEEE International Symposium on Multimedia (ISM)*.
- **Proximity:** 2
- **Main contribution:** Open Roberta Lab: web, NEPO/Blockly, simulador y robots reales.
- **Method:** Desarrollo y análisis de herramientas.
- **Key finding:** Hay que reducir la complejidad de instalación.
- **Relevance:** Competidor principal. Versión en revista: Ketterl et al. (2016), *LOM* 8(14), DOI 10.7146/lom.v8i14.22183.
- **URL/DOI:** 10.1109/ISM.2014.24

### Mondada, Bonani, Riedo, Briod, Pereyre, Rétornaz y Magnenat (2017) — Bringing Robotics to Formal Education: The Thymio Open-Source Hardware Robot
- **Venue:** *IEEE Robotics & Automation Magazine*, 24(1), 77–85.
- **Proximity:** 3
- **Main contribution:** Robot educativo abierto (EPFL/ECAL/Mobsya) con muchos sensores. Se programa con una progresión de herramientas: VPL (bloques gráficos), Blockly o Scratch, y texto (Aseba Studio).
- **Method:** Diseño y despliegue a escala.
- **Key finding:** Los robots siguen poco extendidos en la escuela pese a su potencial. Thymio busca bajar costo y barrera de uso.
- **Relevance:** Referente de **progresión de lenguajes** (visual → bloques → texto) y de robot abierto. Thymio tiene un modelo en Webots compatible con Aseba, es decir, el mismo programa corre en simulación y en el robot real.
- **URL/DOI:** https://infoscience.epfl.ch/record/223049. EPFL Infoscience usa una variante del título; se usa el de DBLP.

### Sirinterlikci, McKenna, Lin, Oravec y Harter (2022) — Learning Robot Programming Anywhere: VEXcode VR
- **Venue:** *2022 ASEE Annual Conference & Exposition*.
- **Proximity:** 2
- **Main contribution:** Simulador web de VEX lanzado en 2020 por la pandemia.
- **Method:** Descriptivo.
- **Key finding:** Evita el cuello de botella de los kits. Hay conflicto de interés (dos autores son de VEX).
- **Relevance:** Competidor comercial.
- **URL/DOI:** https://peer.asee.org/41259

### Parra-González, Cardona-Reyes y Murillo Alfaro (2025) — VEXcode VR: A Virtual Tool as Support in the Teaching of Analytical Geometry
- **Venue:** *CLEI Electronic Journal*, 28(2).
- **Proximity:** 3
- **Main contribution:** Cuasiexperimento con VEXcode VR en secundaria (México).
- **Method:** Cuasiexperimento.
- **Key finding:** El grupo experimental obtuvo +18,2 %, aunque un resumen indica algo contradictorio.
- **Relevance:** Evidencia CLEI de simulador web en secundaria.
- **URL/DOI:** 10.19153/cleiej.28.2.4. **UNVERIFIED (año).**

### Tselegkaridis y Sapounidis (2021) — Simulators in Educational Robotics: A Review
- **Venue:** *Education Sciences*, 11(1), 11.
- **Proximity:** 3
- **Main contribution:** Catálogo de 17 simuladores (2013–2020).
- **Method:** Revisión.
- **Key finding:** Los simuladores reducen costo y aumentan disponibilidad.
- **Relevance:** Respaldo al argumento de "pocos kits".
- **URL/DOI:** 10.3390/educsci11010011

### Camargo et al. (2021) — Systematic Literature Review of Realistic Simulators Applied in Educational Robotics Context
- **Venue:** *Sensors*, 21(12), 4031.
- **Proximity:** 3
- **Main contribution:** Revisión de simuladores realistas en robótica educativa.
- **Method:** Revisión sistemática.
- **Key finding:** No se obtuvieron.
- **Relevance:** Revisión en *Sensors*.
- **URL/DOI:** 10.3390/s21124031

### Ztoupas, Sapounidis y Tselegkaridis (2026) — Simulators in Educational Robotics: A Systematic Review with Content Analysis
- **Venue:** *Applied Sciences*, 16(2), 653 (MDPI). **Versión publicada verificada en la ronda 2.**
- **Proximity:** 3
- **Main contribution:** 89 artículos de 1.200 (54 de herramientas, 35 de intervenciones), con doble codificación que incluye nivel educativo y participación docente.
- **Method:** Revisión sistemática con análisis de contenido.
- **Key finding:**
  - Predominan simuladores 3D y gratuitos.
  - Las intervenciones son sobre todo terciarias.
  - Muestras pequeñas e intervenciones cortas.
  - Participación docente nula o moderada.
  - Rara vez se abordan colaboración o metacognición.
- **Relevance:** **Respaldo principal del vacío V3.**
- **URL/DOI:** 10.3390/app16020653

### Berland y Wilensky (2015) — Comparing Virtual and Physical Robotics Environments for Supporting Complex Systems and Computational Thinking
- **Venue:** *Journal of Science Education and Technology*, 24(5).
- **Proximity:** 3
- **Main contribution:** Robots físicos frente a virtuales en 4 aulas de *middle school*.
- **Method:** Cuasiexperimento.
- **Key finding:** Ganancias similares con perspectivas distintas (agente frente a agregada).
- **Relevance:** Fundamento del enfoque híbrido.
- **URL/DOI:** 10.1007/s10956-015-9552-x

### Liu, Newsom, Schunn y Shoop (≈2013) — Students Learn Programming Faster through Robotic Simulation
- **Venue:** **UNVERIFIED (venue y año).** Solo hay un PDF en la CMU Robotics Academy.
- **Proximity:** 3
- **Main contribution:** Clase con VEX físico (n = 13) frente a Robot Virtual Worlds (n = 17).
- **Method:** Cuasiexperimento.
- **Key finding:** Ganancias similares; el grupo virtual terminó el curso aproximadamente un mes antes.
- **Relevance:** Apoya H1.
- **URL/DOI:** https://www.cmu.edu/roboticsacademy/PDFs/Research/LearnProgrammingFasterThroughSimulation.pdf

### Zabala, Moran y Teragni (2021) — Mendieta, One Robot Per School: Multi-user Robot for Technology Education
- **Venue:** *EDUROBOTICS 2021* (Studies in Computational Intelligence, vol. 982, Springer).
- **Proximity:** 2
- **Main contribution:** Robot de bajo costo (Arduino Nano + Orange Pi) con **cola de programas multiusuario**.
- **Method:** Desarrollo.
- **Key finding:** Menos de USD 180 por escuela, todo abierto.
- **Relevance:** Antecedente de P3 (turnos).
- **URL/DOI:** https://repositorio.uai.edu.ar/handle/123456789/4991

### Garcia-Costa et al. (2020) — A Transversal Virtual Remote Laboratory for Teaching in STEM Disciplines Using Robotic Platforms
- **Venue:** *INTED2020 Proceedings*, 6069–6075.
- **Proximity:** 2
- **Main contribution:** El programa se sube por la web y se ejecuta en un robot real; los bloques se adaptan al nivel.
- **Method:** Desarrollo.
- **Key finding:** No se obtuvieron.
- **Relevance:** Flujo "programa → cola → robot real".
- **URL/DOI:** 10.21125/inted.2020.1643

### Angulo et al. (2017) — RoboBlock: A Remote Lab for Robotics and Visual Programming
- **Venue:** *exp.at'17*, 109–110.
- **Proximity:** 3
- **Main contribution:** Laboratorio remoto con Blockly para K-12.
- **Method:** Desarrollo.
- **Key finding:** Es difícil mantener laboratorios físicos.
- **Relevance:** Robots reales compartidos vía web.
- **URL/DOI:** 10.1109/EXPAT.2017.7984373

### Pickem et al. (2017) — The Robotarium: A Remotely Accessible Swarm Robotics Research Testbed
- **Venue:** *IEEE ICRA 2017*.
- **Proximity:** 4
- **Main contribution:** Testbed multi-robot remoto con rutinas de seguridad.
- **Method:** Desarrollo y validación.
- **Key finding:** Se puede abrir hardware a muchos usuarios de forma segura.
- **Relevance:** Patrón de cola y seguridad. Kinner, Wilson y Dawadi (2024, ASEE Southeastern, DOI 10.18260/1-2--45513) le añadieron bloques y un piloto en secundaria.
- **URL/DOI:** 10.1109/ICRA.2017.7989200

### 3b. Fundamentos de sim-to-real (robótica general y simuladores de docencia)

### Jakobi, Husbands y Harvey (1995) — Noise and the reality gap: The use of simulation in evolutionary robotics
- **Venue:** *Advances in Artificial Life (ECAL 1995)*, LNCS 929, Springer, 704–720.
- **Proximity:** 4
- **Main contribution:** Introduce la "brecha de realidad" (*reality gap*). Controladores evolucionados en simulación (Khepera con sensores IR y de luz) con distintos niveles de ruido.
- **Method:** Experimental.
- **Key finding:** Con **ruido añadido** al simulador y parámetros medidos empíricamente, los controladores se transfieren al robot real con resultados casi idénticos.
- **Relevance:** **Fundamento para añadir ruido calibrado a los sensores del simulador 2D** y así favorecer H3.
- **URL/DOI:** 10.1007/3-540-59496-5_337

### Tobin, Fong, Ray, Schneider, Zaremba y Abbeel (2017) — Domain Randomization for Transferring Deep Neural Networks from Simulation to the Real World
- **Venue:** *2017 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)*.
- **Proximity:** 5
- **Main contribution:** "Domain randomization": variar aleatoriamente los parámetros del simulador para que el mundo real parezca otra variación más.
- **Method:** Experimental.
- **Key finding:** Un detector entrenado solo con simulación logra 1,5 cm de precisión en el mundo real.
- **Relevance:** Idea trasladable de forma simplificada: variar dentro de un rango la velocidad de los motores, la fricción y el umbral del sensor de línea para que los programas de los estudiantes sean robustos. No hay aprendizaje automático en la tesis.
- **URL/DOI:** https://arxiv.org/abs/1703.06907 — IEEE Xplore 8202133

### Zhao, Peña Queralta y Westerlund (2020) — Sim-to-Real Transfer in Deep Reinforcement Learning for Robotics: a Survey
- **Venue:** *2020 IEEE Symposium Series on Computational Intelligence (SSCI)*, 737–744.
- **Proximity:** 4
- **Main contribution:** Revisión de técnicas sim-to-real: randomización de dominio, adaptación de dominio, imitación, meta-aprendizaje y destilación.
- **Method:** Revisión.
- **Key finding:** La brecha entre simulación y realidad degrada el desempeño al transferir.
- **Relevance:** Marco y vocabulario para la H3 y la discusión de limitaciones.
- **URL/DOI:** 10.1109/SSCI47803.2020.9308468

### Magnenat, Rétornaz, Bonani, Longchamp y Mondada (2011) — ASEBA: A Modular Architecture for Event-Based Control of Complex Robots
- **Venue:** *IEEE/ASME Transactions on Mechatronics* (2011).
- **Proximity:** 4
- **Main contribution:** Arquitectura dirigida por eventos con máquinas virtuales pequeñas en los nodos del robot, compilación instantánea y depuración en tiempo real. Es la base del entorno de Thymio.
- **Method:** Desarrollo y evaluación técnica.
- **Key finding:** Usa dos órdenes de magnitud menos ancho de banda que el sondeo, y la latencia baja de 2 a 3 veces.
- **Relevance:** Precedente técnico del **intérprete de comandos en el microcontrolador** (firmware MicroPython con JSON) en lugar de reflashear en cada ejecución.
- **URL/DOI:** 10.1109/TMECH.2010.2042722

### Michel (2004) — Webots: Professional Mobile Robot Simulation
- **Venue:** *International Journal of Advanced Robotic Systems*, 1(1), 39–42.
- **Proximity:** 4
- **Main contribution:** Simulador de robots móviles (Cyberbotics, spin-off de la EPFL) cuyas bibliotecas permiten **transferir el programa de control a robots reales comerciales**.
- **Method:** Descripción de herramienta.
- **Key finding:** Diseño orientado a que el mismo controlador corra en simulación y en hardware.
- **Relevance:** Precedente del principio "misma API en simulador y robot". Webots se usa en docencia universitaria (e-puck) y tiene modelo de Thymio. No se encontró un estudio que mida la transferencia en la escuela.
- **URL/DOI:** 10.5772/5618

---

## Eje 4 — Robots de bajo costo (ESP32 / Arduino / MicroPython)

### da Silva Junior, Gonçalves, Caurin, Tamanaka, Hernandes y Aroca (2020) — BIPES: Block Based Integrated Platform for Embedded Systems
- **Venue:** *IEEE Access*, 8, 197955–197968.
- **Proximity:** 2
- **Main contribution:** Blockly + MicroPython + Web Serial/WebREPL para ESP32 y otras placas, sin servidor (PWA).
- **Method:** Desarrollo y validación.
- **Key finding:** Es viable programar el ESP32 con bloques desde el navegador.
- **Relevance:** Precedente técnico de P3 (conexión).
- **URL/DOI:** 10.1109/ACCESS.2020.3035083

### Lamprecht, Haller-Seeber y Piater (2021) — A Block-based IDE Extension for the ESP32
- **Venue:** *Robotics in Education (RiE 2020)*, AISC, Springer, 304–310.
- **Proximity:** 3
- **Main contribution:** Ardublockly para ESP32 con un ejercicio de enjambre.
- **Method:** Desarrollo y aplicación.
- **Key finding:** En 2020 los autores señalaban que el Arduino Uno (R3) dominaba la enseñanza sin actualizarse desde 2010.
- **Relevance:** **Corrección ronda 2:** ese argumento ya no vale. Arduino lanzó el **UNO R4 (Minima y WiFi) en 2023**, y el R4 WiFi incluye un módulo ESP32-S3 (ver CNX Software, 2023). La elección del ESP32 debe justificarse por: (a) WiFi y BLE integrados, sin módulo adicional; (b) soporte oficial de **MicroPython**, que permite el intérprete JSON y la vista de código Python; (c) costo bajo y amplia disponibilidad (verificar el precio local antes de citar cifras).
- **URL/DOI:** 10.1007/978-3-030-67411-3_27

### CNX Software (2023) — Arduino UNO R4 Minima and WiFi boards launched for $20 and $27.50
- **Venue:** Nota técnica en línea (literatura gris), 27/06/2023.
- **Proximity:** 5
- **Main contribution:** Confirma el lanzamiento del UNO R4: Renesas RA4M1; la versión WiFi lleva un módulo ESP32-S3 con WiFi 4 y Bluetooth 5.
- **Method:** No aplica.
- **Key finding:** Precio de lanzamiento: USD 20 (Minima) y USD 27,50 (WiFi).
- **Relevance:** Corrige el dato de Lamprecht et al. Además muestra que el propio ecosistema Arduino adopta el ESP32 para la conectividad.
- **URL/DOI:** https://cnx-software.com/2023/06/27/arduino-uno-r4-minima-and-wifi-boards

### Armesto, Blanc, González y Sala (2023) — Wireless Remote Control of Low-Cost Smart Devices for No-Coders (Facilino)
- **Venue:** *ICINCO 2023*, vol. 2, 173–180.
- **Proximity:** 2
- **Main contribution:** Blockly para ESP32/Arduino por Bluetooth o WiFi, con casa inteligente y robot.
- **Method:** Desarrollo con resultados preliminares.
- **Key finding:** No se obtuvieron.
- **Relevance:** Antecedente de la extensión domótica.
- **URL/DOI:** 10.5220/0012194600003543

### Chronis y Varlamis (2022) — FOSSBot: An Open Source and Open Design Educational Robot
- **Venue:** *Electronics*, 11(16), 2606.
- **Proximity:** 3
- **Main contribution:** Robot abierto impreso en 3D con Raspberry Pi (Universidad Harokopio y GFOSS).
- **Method:** Desarrollo.
- **Key finding:** Apto para escolares; limitado para algoritmos complejos.
- **Relevance:** Referente de robot abierto.
- **URL/DOI:** 10.3390/electronics11162606. **DOI NO VERIFICADO DIRECTAMENTE** (coincide con la URL de MDPI 2079-9292/11/16/2606).

### Chatzopoulos, Kalogiannakis, Papadakis y Papoutsidakis (2022) — A Novel, Modular Robot for Educational Robotics Developed Using Action Research Evaluated on Technology Acceptance Model
- **Venue:** *Education Sciences*, 12(4), 274.
- **Proximity:** 3
- **Main contribution:** Robot modular de bajo costo, evaluado con TAM (116 estudiantes universitarios).
- **Method:** Investigación-acción y TAM.
- **Key finding:** Buena aceptación.
- **Relevance:** Modelo de "desarrollo + validación".
- **URL/DOI:** 10.3390/educsci12040274

### Oberholster (s. f.) — The ESP32 Microcontroller as a Low-cost Teaching Tool for Mechatronics
- **Venue:** *IRSPBL* (Aalborg University).
- **Proximity:** 4
- **Main contribution:** El ESP32 como herramienta docente de bajo costo.
- **Method:** Experiencia docente.
- **Key finding:** No se obtuvieron.
- **Relevance:** Apoyo secundario al ESP32.
- **URL/DOI:** 10.54337/irspbl-11067. **UNVERIFIED (año y nombre de pila "Abrie")**.

---

## Eje 5 — Learning analytics y paneles docentes en el aula

### Verbert, Duval, Klerkx, Govaerts y Santos (2013) — Learning Analytics Dashboard Applications
- **Venue:** *American Behavioral Scientist*, 57(10), 1500–1509.
- **Proximity:** 4
- **Main contribution:** Marco conceptual de paneles para estudiantes y docentes, aplicado a 15 paneles.
- **Method:** Revisión y marco conceptual.
- **Key finding:** Las evaluaciones cubren solo parte del marco y casi nunca miden cambio de comportamiento.
- **Relevance:** Guía para decidir qué datos registra el panel (tiempo, resultados de ejercicios, artefactos).
- **URL/DOI:** 10.1177/0002764213479363

### Ihantola et al. (2015) — Educational Data Mining and Learning Analytics in Programming: Literature Review and Case Studies
- **Venue:** *ITiCSE 2015 Working Group Reports*, ACM, 41–63.
- **Proximity:** 4
- **Main contribution:** Revisión 2005–2015 más casos de replicación.
- **Method:** Revisión y casos.
- **Key finding:** Predominan métricas simples en estudios de un solo curso.
- **Relevance:** Qué registrar en los logs.
- **URL/DOI:** 10.1145/2858796.2858798

### Schwendimann et al. (2017) — Perceiving Learning at a Glance: A Systematic Literature Review of Learning Dashboard Research
- **Venue:** *IEEE Transactions on Learning Technologies*, 10(1), 30–41.
- **Proximity:** 4
- **Main contribution:** 55 artículos sobre paneles de aprendizaje.
- **Method:** Revisión sistemática.
- **Key finding:** La mayoría son pruebas de concepto, con pocas evaluaciones en entornos reales.
- **Relevance:** Justifica H4.
- **URL/DOI:** 10.1109/TLT.2016.2599522

### Martinez-Maldonado, Kay, Yacef, Edbauer y Dimitriadis (2013) — MTClassroom and MTDashboard: Supporting Analysis of Teacher Attention in an Orchestrated Multi-Tabletop Classroom
- **Venue:** *CSCL 2013 Proceedings*, vol. 1, 320–327.
- **Proximity:** 4
- **Main contribution:** Panel docente en tiempo real para orquestar grupos en un aula con mesas multitáctiles. Desplegado con docentes reales.
- **Method:** Desarrollo y estudio en aula auténtica.
- **Key finding:** Sin analítica en tiempo real, el docente solo ve el producto final de cada grupo.
- **Relevance:** Precedente de **orquestación de grupos en tiempo real**: la tesis tiene 10 equipos de 3 y 2 robots.
- **URL/DOI:** https://research.monash.edu/en/publications/mtclassroom-and-mtdashboard-supporting-analysis-of-teacher-attent

### Diana, Eagle, Stamper, Grover, Bienkowski y Basu (2017) — An Instructor Dashboard for Real-Time Analytics in Interactive Programming Assignments
- **Venue:** *LAK '17*, ACM, 272–279.
- **Proximity:** 3
- **Main contribution:** Panel docente en tiempo real para programación.
- **Method:** Desarrollo y análisis.
- **Key finding:** No se obtuvieron.
- **Relevance:** Precedente de P4.
- **URL/DOI:** **DOI NO VERIFICADO DIRECTAMENTE** (no localizado).

### Grover, Basu, Bienkowski, Eagle, Diana y Stamper (2017) — A Framework for Using Hypothesis-Driven Approaches to Support Data-Driven Learning Analytics in Measuring Computational Thinking in Block-Based Programming Environments
- **Venue:** *ACM Transactions on Computing Education*, 17(3), art. 14.
- **Proximity:** 3
- **Main contribution:** Marco basado en Evidence-Centered Design para interpretar logs de bloques.
- **Method:** Marco y análisis de logs.
- **Key finding:** Combinar hipótesis pedagógicas con minería de datos mejora la interpretación.
- **Relevance:** Indicadores interpretables para el panel.
- **URL/DOI:** 10.1145/3105910

### Price, Dong y Lipovac (2017) — iSnap: Towards Intelligent Tutoring in Novice Programming Environments
- **Venue:** *Proceedings of the 2017 ACM SIGCSE Technical Symposium*, 483–488.
- **Proximity:** 3
- **Main contribution:** Extensión de Snap! (bloques) que registra logs y genera pistas a partir de datos.
- **Method:** Desarrollo y evaluación.
- **Key finding:** No se obtuvieron.
- **Relevance:** Precedente de **registro detallado de logs en un editor de bloques** y de retroalimentación automática (posible trabajo futuro).
- **URL/DOI:** 10.1145/3017680.3017762

### Holstein, McLaren y Aleven (2018) — Student Learning Benefits of a Mixed-Reality Teacher Awareness Tool in AI-Enhanced Classrooms (Lumilo)
- **Venue:** *Artificial Intelligence in Education (AIED 2018)*, Springer.
- **Proximity:** 3
- **Main contribution:** Gafas de realidad mixta que muestran al docente, sobre cada estudiante, indicadores en tiempo real derivados del tutor inteligente.
- **Method:** Experimento con 286 estudiantes de *middle school*, 18 aulas, 8 docentes y 3 condiciones.
- **Key finding:** La analítica en tiempo real para el docente **mejoró el aprendizaje** frente a la clase habitual y frente al monitoreo sin analítica avanzada. Los autores lo presentan como el primer experimento que lo demuestra.
- **Relevance:** **La evidencia más fuerte de que un panel docente en tiempo real tiene efecto.** Respalda la pieza P4 y su posible efecto, aunque la tesis solo mide tiempo de evaluación (H4).
- **URL/DOI:** 10.1007/978-3-319-93843-1_12

### Keuning, Jeuring y Heeren (2018) — A Systematic Literature Review of Automated Feedback Generation for Programming Exercises
- **Venue:** *ACM Transactions on Computing Education*, 19(1), art. 3.
- **Proximity:** 3
- **Main contribution:** Revisión de 101 herramientas de retroalimentación automática.
- **Method:** Revisión sistemática.
- **Key finding:** La retroalimentación suele señalar errores pero rara vez ayuda a corregirlos. A los docentes les cuesta adaptar las herramientas.
- **Relevance:** Diseño de la "evaluación automática" de los retos: dar pistas de siguiente paso, no solo "falló", y permitir que el docente configure los retos.
- **URL/DOI:** Sin DOI confirmado. **UNVERIFIED (año):** el repositorio de la Open Universiteit dice septiembre de 2018 y la página del autor dice 2019.

### Moreno-León, Robles y Román-González (2015) — Dr. Scratch: Automatic Analysis of Scratch Projects to Assess and Foster Computational Thinking
- **Venue:** *RED*, 46, 1–23.
- **Proximity:** 3
- **Main contribution:** Evaluación automática de proyectos Scratch.
- **Method:** Desarrollo y talleres en 8 escuelas.
- **Key finding:** Los estudiantes mejoraron sus proyectos con la retroalimentación.
- **Relevance:** Precedente hispano de evaluación automática.
- **URL/DOI:** 10.6018/RED/46/10

### Scaradozzi, Cesaretti, Screpanti y Mangina (2020) — Identification of the Students Learning Process During Education Robotics Activities
- **Venue:** *Frontiers in Robotics and AI*, 7, 21.
- **Proximity:** 3
- **Main contribution:** Logs de intentos de programación con EV3 analizados con k-means.
- **Method:** Empírico.
- **Key finding:** Identifica trayectorias de resolución.
- **Relevance:** Analítica de robótica a posteriori.
- **URL/DOI:** 10.3389/frobt.2020.00021

### Cesaretti, Screpanti, Scaradozzi y Mangina (2021) — Analysis of Educational Robotics Activities Using a Machine Learning Approach
- **Venue:** Capítulo de Springer, vol. 240 de la serie, 203–211. Libro: *Makers at School, Educational Robotics and Innovative Learning Environments*.
- **Proximity:** 3
- **Main contribution:** 197 estudiantes de secundaria en Italia. Bloques EV3 modificados para registrar las secuencias. Comparación de 4 clasificadores (regresión logística, SVM, KNN y random forest).
- **Method:** Minería de datos educativa.
- **Key finding:** El enfoque mixto (k-means + SVM) fue el mejor y emergieron 3 estilos de aprendizaje. La cifra de "89 % de precisión" sale de un resumen automático y no se usa.
- **Relevance:** Los logs de intentos predicen el desempeño en **secundaria**, lo que respalda que el panel registre intentos por reto.
- **URL/DOI:** 10.1007/978-3-030-77040-2_27

### Vaz Junior, Pernas y Primo (s. f.) — ScratchAnalytics: A Framework for Collecting and Analyzing Interactions in Scratch Projects
- **Venue:** *SBIE*, SBC.
- **Proximity:** 3
- **Main contribution:** Recolección automática de interacciones en Scratch.
- **Method:** Desarrollo.
- **Key finding:** No se obtuvieron.
- **Relevance:** Antecedente latinoamericano.
- **URL/DOI:** https://sol.sbc.org.br/index.php/sbie/article/view/12842. **UNVERIFIED (año).**

---

## Eje 6 — Panamá y Latinoamérica

### 6a. Panamá — trabajos académicos

### Moreno, Muñoz, Serracín, Quintero, Pittí y Quiel (2012) — La robótica educativa, una herramienta para la enseñanza-aprendizaje de las ciencias y las tecnologías
- **Venue:** *TESI* (Ediciones Universidad de Salamanca), 13(2), 74–90.
- **Proximity:** 3
- **Main contribution:** Estudio de la UTP en 6 colegios de Chiriquí.
- **Method:** Descriptivo.
- **Key finding:** La robótica ayuda con conceptos abstractos y fomenta el trabajo en equipo.
- **Relevance:** Antecedente nacional principal.
- **URL/DOI:** https://gredos.usal.es/handle/10366/121803

### Barranco Candanedo (2012) — La robótica educativa, un nuevo reto para la educación panameña
- **Venue:** *TESI*, 13(2), 9–17.
- **Proximity:** 5
- **Main contribution:** Ensayo sobre los retos para docentes y estudiantes.
- **Method:** Ensayo.
- **Key finding:** No aplica.
- **Relevance:** Contexto histórico.
- **URL/DOI:** https://www.redalyc.org/pdf/2010/201024390002.pdf

### Candanedo Yau (2026) — Robótica educativa y herramientas TIC: fusión que transforma la enseñanza-aprendizaje en la era digital
- **Venue:** *Synergia* (Universidad de Panamá), 5(1), 124–142.
- **Proximity:** 3
- **Main contribution:** Estudio mixto con 25 estudiantes y 5 docentes en el CRUPE (UP).
- **Method:** Mixto.
- **Key finding:** Mejoras cualitativas en comprensión, pensamiento crítico y colaboración.
- **Relevance:** Antecedente de la misma universidad.
- **URL/DOI:** 10.48204/synergia.v5n1.9851

### Esquivel, Ávila y Espinosa (2025) — La robótica educativa: la inteligencia artificial, avances y desafíos
- **Venue:** *Acción y Reflexión Educativa* (Universidad de Panamá), n.º 51, 255–274. Aprobado el 28/10/2025 y publicado en diciembre de 2025.
- **Proximity:** 4
- **Main contribution:** Revisión PRISMA (2020–2025) de robótica educativa con IA, en Scopus, ScienceDirect, ERIC, SciELO y Redalyc.
- **Method:** Revisión sistemática con elementos de teoría fundamentada.
- **Key finding:** El 43 % de los estudios carece de fundamentos pedagógicos sólidos. El 40 % de las instituciones enfrenta barreras tecnológicas.
- **Relevance:** Trabajo reciente de la UP. Respalda las barreras de acceso.
- **URL/DOI:** 10.48204/j.are.n51.a8863

### Mesa Pinto (2026) — Didáctica de la robótica educativa en educación básica secundaria
- **Venue:** *Ciencia Latina*, 10(1).
- **Proximity:** 4
- **Main contribution:** Revisión de 45 artículos (2015–2025). Autor de la UP.
- **Method:** Revisión documental o sistemática.
- **Key finding:** Brecha entre discurso y práctica por falta de formación docente. Recomienda bajo costo y software libre.
- **Relevance:** Respalda V3 y P3.
- **URL/DOI:** 10.37811/cl_rcm.v10i1.23362. **UNVERIFIED (año).**

### Causil Villalba (s. f.) — Robótica educativa: una revisión sistemática de su progreso en América Latina en los últimos años
- **Venue:** *Punto Educativo* (UP).
- **Proximity:** 4
- **Main contribution:** Revisión documental de la región.
- **Method:** Revisión documental.
- **Key finding:** Brasil lidera la investigación. Predominan LEGO, Arduino y Scratch.
- **Relevance:** Contexto regional.
- **URL/DOI:** 10.5281/zenodo.17437190. **UNVERIFIED (año).**

> **Hallazgo de la ronda 2:** no se encontraron trabajos de la **UTP** sobre robótica educativa escolar entre 2020 y 2026 en RIDDA ni en la búsqueda web. Lo más reciente de la UTP es un robot delta para docencia universitaria (Serracín et al., AmITIC 2017), no incluido por quedar fuera de alcance. De la **UP** se encontraron Candanedo Yau (2026), Esquivel et al. (2025), Mesa Pinto y Causil Villalba.

### 6b. Panamá — fuentes oficiales y literatura gris

### MEDUCA y FUNDESTEAM vía Telemetro (2023) — Notas sobre clubes de robótica y formación docente STEAM
- **Venue:** Telemetro, 13/05/2023 y 15/10/2023.
- **Proximity:** 4
- **Main contribution:** Cifras del programa nacional.
- **Method:** Literatura gris.
- **Key finding:**
  - Más de 1.000 clubes y más de 1.300 docentes formados en el diplomado STEAM (ministra, octubre de 2023).
  - FUNDESTEAM reporta más de 1.600 docentes y que el 33 % de las escuelas públicas tiene club (noviembre de 2023).
  - Unos 300 docentes de primaria recibieron kits (mayo de 2023).
- **Relevance:** Motivación de la tesis.
- **URL/DOI:** https://www.telemetro.com/nacionales/meduca-inicia-conteo-regresivo-la-olimpiada-mundial-robotica-n5931970 ; https://www.telemetro.com/nacionales/entregan-kits-robotica-docentes-colegios-oficiales-n5880438. **TÍTULO NO VERIFICADO DIRECTAMENTE** (inferido de la URL).

### Cobre Panamá y FUNDESTEAM (2023) — Programa "Robótica para la Movilidad Social"
- **Venue:** Nota de prensa corporativa (cobrepanama.com).
- **Proximity:** 4
- **Main contribution:** Programa de 4 años en 61 escuelas de Donoso y Omar Torrijos (Colón): diplomado docente (191 docentes), clubes y kits.
- **Method:** Literatura gris.
- **Key finding:** **"Los 61 centros educativos recibirán 80 kits de robótica hasta 2026"**: el dato de la especificación queda **verificado** en la ronda 2. Son menos de 1,5 kits por escuela.
- **Relevance:** Evidencia directa de escasez de kits.
- **URL/DOI:** https://cobrepanama.com/descargar/nota/380

### La Estrella de Panamá (2022) — La robótica educativa avanza con buenos pasos, sigue ganando terreno en Panamá
- **Venue:** *La Estrella de Panamá*, 25/09/2022.
- **Proximity:** 5
- **Main contribution:** Preparación de estudiantes y tutores para la Olimpiada Mundial de Robótica de 2023 en Panamá.
- **Method:** Prensa.
- **Key finding:** Contexto de expansión.
- **Relevance:** Contexto.
- **URL/DOI:** https://www.laestrella.com.pa/panama/nacional/robotica-educativa-buenos-pasos-sigue-ganando-terreno-panama-LKLE478289

### SENACYT vía DPL News (2024) — Cierre del proyecto "Aprendiendo con Blue-Bot y Rugged Robot 2024" (Colón)
- **Venue:** DPL News (prensa), sobre un evento del 31/10/2024 en el CIDETE del Centro Regional Universitario de Colón.
- **Proximity:** 4
- **Main contribution:** Proyecto de SENACYT en 10 escuelas de Colón, desde primer grado hasta duodécimo.
- **Method:** Literatura gris.
- **Key finding:** Se reportan 11.214 estudiantes beneficiados en cinco de las escuelas (cifra de prensa). El Rugged Robot es un carro programable.
- **Relevance:** Es la **única fuente oficial de SENACYT 2020–2026** encontrada. No hay informe consolidado.
- **URL/DOI:** https://dplnews.com/panama-estudiantes-de-colon-participaron-en-el-cierre-del-proyecto-de-robotica-educativa-aprendiendo-con-blue-bot-y-rugged-robot-2024/

### 6c. Latinoamérica

### Guerrero Támara, Penadillo Lirio y Lezameta Blas (2022) — Nivel de percepción de la robótica educativa en una universidad peruana
- **Venue:** *ACADEMO*, 9(1), 62–72.
- **Proximity:** 4
- **Main contribution:** Encuesta a 35 docentes universitarios.
- **Method:** Descriptivo.
- **Key finding:** El 74 % no sabe aplicar la robótica educativa y el 97 % desconoce sus fundamentos.
- **Relevance:** Brecha docente. No generalizable.
- **URL/DOI:** 10.30545/academo.2022.ene-jun.6

### Fernández Morales, Iriarte Gómez, Mejía Solano y Revuelta Domínguez (2018) — Contextualización de la formación virtual en robótica educativa de los docentes rurales del Perú
- **Venue:** *REXE*, 2(Esp. 2), 71–82.
- **Proximity:** 4
- **Main contribution:** Formación virtual de docentes rurales.
- **Method:** Descriptivo.
- **Key finding:** Más de 20.000 kits distribuidos que requieren docentes capacitados.
- **Relevance:** Tener kits no basta.
- **URL/DOI:** 10.21703/rexe.Especial3201871826

### Castro Rojas y Acuña Zúñiga (2012) — Propuesta comunitaria con robótica educativa: valoración y resultados de aprendizaje
- **Venue:** *TESI*, 13(2), 91–119.
- **Proximity:** 4
- **Main contribution:** Proyecto de robótica (LEGO + Robolab) en tres centros comunitarios de zonas urbano-marginales de San José. Vinculado a la Fundación Omar Dengo (Costa Rica).
- **Method:** Estudio cualitativo de resultados de aprendizaje.
- **Key finding:** Los estudiantes usaron estructuras de control (multitarea, bucles condicionales, temporización, sensores). Hubo dificultades de trabajo en equipo.
- **Relevance:** Antecedente de **Costa Rica/FOD**. Advierte sobre la colaboración en equipos, relevante para los equipos de 3 de la tesis.
- **URL/DOI:** https://kerwa.ucr.ac.cr/handle/10669/85980 — https://gredos.usal.es/handle/10366/121804

### Delfino.cr (2023) — Cierre del PRONIE MEP-FOD (literatura gris)
- **Venue:** Prensa costarricense (Delfino.cr, abril de 2023; también Semanario Universidad y CRHoy).
- **Proximity:** 5
- **Main contribution:** El Consejo Superior de Educación no renovó el convenio MEP-FOD (Programa Nacional de Informática Educativa, vigente desde 1988), alegando que no se evaluaban resultados. FLACSO aclaró que su evaluación no recomendó el cierre.
- **Method:** Prensa.
- **Key finding:** Un programa regional emblemático terminó en parte por **falta de evidencia de resultados**. No se encontró una evaluación de impacto de su componente de robótica.
- **Relevance:** Argumento a favor de que la plataforma **genere datos de evaluación** (P4): sin datos, los programas son vulnerables.
- **URL/DOI:** https://www.delfino.cr/2023/04/flacso-evaluacion-realizada-no-solicito-ni-sugirio-el-cierre-del-pronie

### Plan Ceibal (s. f.) — Distribución de kits de robótica en Uruguay (literatura gris)
- **Venue:** Comunicados de Presidencia de Uruguay (gub.uy).
- **Proximity:** 4
- **Main contribution:** Plan Ceibal distribuye kits desde un piloto en 2010 y los masificó desde 2011, con formación docente previa a la entrega.
- **Method:** Literatura gris.
- **Key finding:** El presidente de Ceibal reportó **5.300 kits** distribuidos. Todas las escuelas de tiempo completo y extendido, más 350 centros de media, tienen kits. No se encontró una evaluación rigurosa de impacto.
- **Relevance:** Modelo regional de escala y de que "kit + formación" va junto.
- **URL/DOI:** https://www.gub.uy/presidencia/comunicacion/noticias/programas-jovenes-programar-robotica-ensenanza-ingles-destacados-balance. **UNVERIFIED (fecha de la nota).**

> **Hallazgo de la ronda 2 (IEEE-RITA, LACCEI, CLEI y Dialnet, 2020–2026):** con los términos "robótica educativa" + simulador/Blockly/ESP32 **no se encontró ningún artículo en IEEE-RITA ni en LACCEI** mediante búsqueda web. Probablemente hace falta buscar en los sitios propios de esas revistas. En CLEI solo apareció Parra-González et al. En Dialnet solo apareció Ángel-Díaz et al. (2020).

---

## Eje 7 — Herramientas comparables (adicionales)

### Ball, Chatra, de Halleux, Hodges, Moskal y Russell (2019) — Microsoft MakeCode: Embedded Programming for Education, in Blocks and TypeScript
- **Venue:** *SPLASH-E 2019*, ACM.
- **Proximity:** 2
- **Main contribution:** Web con bloques y TypeScript/Python, simulador de la placa, compilador en el navegador.
- **Method:** Descripción de diseño.
- **Key finding:** No aplica.
- **Relevance:** Competidor con P1 parcial y P2.
- **URL/DOI:** 10.1145/3358711.3361630

### mBlock 5 (Makeblock) — herramienta comercial
- **Venue:** Sitio oficial.
- **Proximity:** 3
- **Main contribution:** Entorno basado en Scratch que genera Arduino C o Python.
- **Method:** No aplica.
- **Key finding:** Se menciona un estudio con 60 estudiantes sin diferencias frente a Scratch. **UNVERIFIED (todo).**
- **Relevance:** Competidor.
- **URL/DOI:** https://mblock.makeblock.com

### Tinkercad Circuits (Autodesk) — herramienta comercial
- **Venue:** Sitio oficial.
- **Proximity:** 3
- **Main contribution:** Simulador de circuitos con Codeblocks.
- **Method:** No aplica.
- **Key finding:** Muy usado en la pandemia.
- **Relevance:** Competidor.
- **URL/DOI:** https://www.tinkercad.com

---

## Eje 8 — Usabilidad (SUS)

### Brooke (1996) — SUS: A "quick and dirty" usability scale
- **Venue:** En Jordan et al. (eds.), *Usability Evaluation in Industry*, Taylor & Francis, 189–194.
- **Proximity:** 4
- **Main contribution:** Cuestionario de 10 ítems con puntuación de 0 a 100.
- **Method:** Instrumento.
- **Key finding:** No aplica.
- **Relevance:** Instrumento de H2.
- **URL/DOI:** —

### Bangor, Kortum y Miller (2008) — An Empirical Evaluation of the System Usability Scale
- **Venue:** *IJHCI*, 24(6), 574–594.
- **Proximity:** 4
- **Main contribution:** Datos normativos.
- **Method:** Análisis de encuestas.
- **Key finding:** Permite comparar puntuaciones.
- **Relevance:** Interpretación de H2.
- **URL/DOI:** 10.1080/10447310802205776

### Bangor, Kortum y Miller (2009) — Determining What Individual SUS Scores Mean: Adding an Adjective Rating Scale
- **Venue:** *Journal of Usability Studies*, 4(3), 114–123.
- **Proximity:** 4
- **Main contribution:** Escala de adjetivos.
- **Method:** Psicométrico.
- **Key finding:** r = 0,822 con SUS.
- **Relevance:** Reportar H2 con adjetivos.
- **URL/DOI:** https://uxpajournal.org/wp-content/uploads/sites/7/pdf/JUS_Bangor_May2009.pdf

### Sauro (2011) — A Practical Guide to the System Usability Scale (SUS): Background, Benchmarks & Best Practices
- **Venue:** Libro, Measuring Usability LLC, Denver.
- **Proximity:** 4
- **Main contribution:** Normas de referencia de SUS a partir de unos 500 estudios.
- **Method:** Compilación normativa.
- **Key finding:** **Promedio SUS = 68** (percentil 50, nota "C"). Un 68 **no** es un 68 %.
- **Relevance:** **Fuente primaria del umbral 68 de H2.** Las cifras de 500 estudios y 5.000 usuarios vienen de resúmenes de MeasuringU, no del libro.
- **URL/DOI:** https://measuringu.com/sus/

### Sauro y Lewis (2016) — Quantifying the User Experience: Practical Statistics for User Research (2.ª ed.)
- **Venue:** Libro, Morgan Kaufmann. ISBN 9780128023082.
- **Proximity:** 4
- **Main contribution:** Estadística práctica para investigación de UX, incluida la interpretación de SUS.
- **Method:** Manual.
- **Key finding:** No aplica.
- **Relevance:** Fuente alternativa para el umbral 68 y para los intervalos de confianza con muestras pequeñas (unos 30 estudiantes).
- **URL/DOI:** https://www.oreilly.com/library/view/-/9780128025482/

### Lewis (2018) — The System Usability Scale: Past, Present, and Future
- **Venue:** *IJHCI*, 34(7), 577–590.
- **Proximity:** 4
- **Main contribution:** Revisión de SUS.
- **Method:** Revisión.
- **Key finding:** SUS es el instrumento estándar más usado.
- **Relevance:** Cita moderna.
- **URL/DOI:** 10.1080/10447318.2018.1455307

### Sevilla-Gonzalez et al. (2020) — Spanish Version of the System Usability Scale for the Assessment of Electronic Tools: Development and Validation
- **Venue:** *JMIR Human Factors*, 7(4), e21161.
- **Proximity:** 3
- **Main contribution:** Traducción, adaptación y validación del SUS en español (México): traducción directa e inversa, 10 expertos, 10 usuarios y 88 usuarios.
- **Method:** Validación psicométrica.
- **Key finding:** IVC = 0,92; validez aparente = 0,94; **α de Cronbach = 0,812** (IC 95 %: 0,748–0,866).
- **Relevance:** **Versión en español validada para H2.** No se encontró una validación específica con adolescentes, así que conviene reportar el α de la propia muestra.
- **URL/DOI:** 10.2196/21161

### Putnam, Puthenmadom, Cuerdo, Wang y Paul (2020) — Adaptation of the System Usability Scale for User Testing with Children
- **Venue:** *CHI 2020 Extended Abstracts*.
- **Proximity:** 3
- **Main contribution:** SUS adaptado para niños de 7 a 11 años.
- **Method:** Piloto psicométrico.
- **Key finding:** Resultados mixtos.
- **Relevance:** Pilotar la redacción con estudiantes.
- **URL/DOI:** 10.1145/3334480.3382840

---

## Eje 9 — Metodología de la tesis de desarrollo (nuevo en la ronda 2)

### Hevner, March, Park y Ram (2004) — Design Science in Information Systems Research
- **Venue:** *MIS Quarterly*, 28(1), 75–105.
- **Proximity:** 4
- **Main contribution:** Marco y **siete guías** de la investigación en ciencia del diseño (Design Science Research, DSR): construir y evaluar artefactos.
- **Method:** Ensayo metodológico.
- **Key finding:** No aplica.
- **Relevance:** **Marco epistemológico de una tesis de desarrollo:** la plataforma es el artefacto y H1–H4 son su evaluación.
- **URL/DOI:** https://aisel.aisnet.org/misq/vol28/iss1/6/

### Peffers, Tuunanen, Rothenberger y Chatterjee (2007) — A Design Science Research Methodology for Information Systems Research
- **Venue:** *Journal of Management Information Systems*, 24(3), 45–77.
- **Proximity:** 4
- **Main contribution:** Metodología DSRM en seis actividades: problema, objetivos, diseño y desarrollo, demostración, evaluación y comunicación.
- **Method:** Metodológico.
- **Key finding:** No aplica.
- **Relevance:** **Estructura de capítulos de la tesis.** Encaja con los objetivos específicos 1 a 5.
- **URL/DOI:** 10.2753/MIS0742-1222240302

### The Design-Based Research Collective (2003) — Design-Based Research: An Emerging Paradigm for Educational Inquiry
- **Venue:** *Educational Researcher*, 32(1), 5–8.
- **Proximity:** 4
- **Main contribution:** La investigación basada en diseño (DBR) combina diseño guiado por teoría y estudio empírico en aulas reales, con ciclos iterativos.
- **Method:** Ensayo metodológico.
- **Key finding:** No aplica.
- **Relevance:** Justifica validar en un **aula real** e iterar (piloto → ajuste).
- **URL/DOI:** 10.3102/0013189X032001005

### Wang y Hannafin (2005) — Design-based research and technology-enhanced learning environments
- **Venue:** *Educational Technology Research and Development*, 53(4), 5–23.
- **Proximity:** 4
- **Main contribution:** Define la DBR para entornos de aprendizaje con tecnología y propone principios de aplicación.
- **Method:** Metodológico.
- **Key finding:** No aplica.
- **Relevance:** Puente entre DSR (informática) y DBR (educación) para la plataforma.
- **URL/DOI:** 10.1007/BF02504682

### Schwaber y Sutherland (2020) — The Scrum Guide
- **Venue:** Documento en línea (scrumguides.org), noviembre de 2020. Hay traducción oficial al español latinoamericano.
- **Proximity:** 5
- **Main contribution:** Definición vigente de Scrum.
- **Method:** No aplica.
- **Key finding:** No aplica.
- **Relevance:** Cita normativa del "Scrum adaptado" de la especificación.
- **URL/DOI:** https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf

### ISO (2019) — ISO 9241-210:2019. Ergonomics of human-system interaction — Part 210: Human-centred design for interactive systems
- **Venue:** Norma ISO (también publicada como EN ISO 9241-210:2019). Revisada y confirmada en 2025.
- **Proximity:** 4
- **Main contribution:** Principios y actividades del diseño centrado en el usuario a lo largo del ciclo de vida.
- **Method:** Norma.
- **Key finding:** No aplica.
- **Relevance:** Fundamento formal del "diseño centrado en el usuario" de la especificación. Conecta con SUS (H2).
- **URL/DOI:** https://www.iso.org/standard/77520.html

### Bezemer y Zaidman (2010) — Multi-tenant SaaS applications: maintenance dream or nightmare?
- **Venue:** *Proceedings of the Joint ERCIM Workshop on Software Evolution and International Workshop on Principles of Software Evolution (IWPSE-EVOL 2010)*, ACM, 88–92.
- **Proximity:** 4
- **Main contribution:** Analiza la multi-tenencia en SaaS: beneficios (una sola instancia) y riesgos de mantenimiento (personalización por inquilino).
- **Method:** Ensayo técnico.
- **Key finding:** No se obtuvieron detalles (solo metadatos).
- **Relevance:** Fundamento de P5 (`colegio_id`, esquema compartido). Hay un trabajo afín de los mismos autores: "Enabling Multi-Tenancy: An Industrial Experience Report" (ICSM 2010).
- **URL/DOI:** https://research.tudelft.nl/en/publications/multi-tenant-saas-applications-maintenance-dream-or-nightmare

### Ocumpaugh, Baker y Rodrigo (2015) — Baker Rodrigo Ocumpaugh Monitoring Protocol (BROMP) 2.0 Technical and Training Manual
- **Venue:** Manual técnico, v1.0, 28/02/2015. **UNVERIFIED (institución editora):** solo se halló en el listado de descargas de Ateneo de Manila (EDM Workbench).
- **Proximity:** 3
- **Main contribution:** Protocolo de observación de campo por muestreo momentáneo (*momentary time-sampling*) del comportamiento y la afectividad de estudiantes en el aula.
- **Method:** Protocolo de observación.
- **Key finding:** No aplica.
- **Relevance:** **Base metodológica para medir H1** (minutos de práctica por estudiante): observar por turnos rotativos a cada estudiante y codificar "practicando / esperando / fuera de tarea". La certificación BROMP formal no es necesaria, pero conviene adoptar su lógica de muestreo.
- **URL/DOI:** https://alls.ateneo.edu/?p=4270 ; https://en.wikipedia.org/wiki/Baker_Rodrigo_Ocumpaugh_Monitoring_Protocol

---

## Resumen de conteo (ronda 2)

| Eje | Ronda 1 | Nuevas | Total |
|-----|---------|--------|-------|
| 1. Efecto de la robótica educativa y pensamiento computacional | 8 | 5 | 13 |
| 2. Bloques y transición a texto | 8 | 0 | 8 |
| 3. Simuladores, sim-to-real y robots compartidos | 15 | 8 | 23 |
| 4. Bajo costo (ESP32/Arduino) | 6 | 1 | 7 |
| 5. Analítica y paneles | 7 | 6 | 13 |
| 6. Panamá y Latinoamérica | 8 | 7 | 15 |
| 7. Herramientas comerciales | 3 | 0 | 3 |
| 8. SUS | 5 | 3 | 8 |
| 9. Metodología de la tesis de desarrollo | — | 8 | 8 |
| **Total** | **60** | **38** | **98** |

| Proximidad | N.º |
|-----------|-----|
| 1 | 0 |
| 2 | 11 |
| 3 | 33 |
| 4 | 44 |
| 5 | 10 |

**Verificación:**

**UNVERIFIED (autor, año, título o venue): 12 entradas**
1. Zhang et al. 2021 (4.º autor)
2. Shute et al. 2017 (volumen y páginas)
3. Parra-González et al. (año)
4. Liu et al. (venue y año)
5. Oberholster (año y nombre de pila)
6. Keuning et al. (año 2018 o 2019)
7. Vaz Junior et al. (año)
8. Mesa Pinto (año)
9. Causil Villalba (año)
10. Plan Ceibal (fecha de la nota)
11. BROMP (institución editora)
12. Estudio mBlock (todo)

**DOI/TÍTULO NO VERIFICADO DIRECTAMENTE: 5 entradas**
1. Benitti (DOI)
2. Xia y Zhong (DOI)
3. Diana et al. (DOI no localizado)
4. Chronis y Varlamis (DOI construido)
5. Notas de Telemetro (2 títulos inferidos de la URL, agrupados en una sola entrada)

**Resueltos en la ronda 2:**
- Ztoupas et al. 2026: venue verificado (*Applied Sciences*).
- Dato de los 80 kits de Cobre Panamá: verificado.
