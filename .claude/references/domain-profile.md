# Domain Profile

## Field

**Primary:** Ingeniería informática — Tecnología educativa (EdTech), robótica educativa
**Adjacent subfields:** Interacción humano-computador, pensamiento computacional, IoT/domótica, ingeniería de software (SaaS)

**Proyecto:** Tesis de pregrado de desarrollo — Universidad de Panamá, Facultad de Informática.
**Idioma:** Español.

---

## Target Venues (publicación opcional tras la tesis)

| Tier | Venues |
|------|--------|
| Revistas regionales | Revista Punto Educativo (Univ. de Panamá), revistas UTP (RIDDA), Redalyc, SciELO |
| Revistas de EdTech | Revista de Educación a Distancia (RED, Univ. de Murcia), IEEE-RITA, Computers & Education |
| Congresos | LACCEI, CLEI, ICCE, IEEE EDUCON |

---

## Common Data Sources

| Dataset | Type | Access | Notes |
|---------|------|--------|-------|
| Encuesta a docentes de robótica/informática | Encuesta propia | Propia | 10–20 docentes de colegios privados |
| Observación de clases | Observación | Requiere permiso | Minutos de práctica por estudiante |
| Logs de la plataforma | Administrativo propio | Propio | Intentos, errores, tiempo por reto |
| Cuestionario SUS | Encuesta estándar | Pública | Usabilidad; umbral 68 |
| Reportes MEDUCA / FUNDESTEAM | Informes públicos | Público | Contexto de clubes de robótica y kits |

---

## Common Evaluation Strategies

| Strategy | Typical Application | Key Assumption to Defend |
|----------|-------------------|------------------------|
| Antes/después en el mismo grupo | Tiempo de práctica con vs. sin plataforma | El grupo y el contenido son comparables entre sesiones |
| Pruebas de usabilidad (SUS) | Aceptación del sistema | Muestra suficiente (≥ 20 usuarios) |
| Pruebas funcionales y de carga | 30 usuarios simultáneos | El ambiente de prueba refleja el uso real |
| Caso de estudio cualitativo | Opinión del docente | Triangular con datos de los logs |

---

## Field Conventions

- Tesis de desarrollo: problema → requisitos → diseño → implementación → pruebas → resultados.
- Documentar requisitos (funcionales y no funcionales), casos de uso, UML, modelo ER y arquitectura.
- Metodología ágil declarada (Scrum) con evidencias de sprints.
- Menores de edad: consentimiento informado de padres y permiso del colegio.
- Tabla comparativa con herramientas existentes en el estado del arte.

---

## Seminal References

| Paper | Why It Matters |
|-------|---------------|
| Papert (1980), *Mindstorms* | Base del construccionismo y la robótica educativa |
| Wing (2006), *Computational Thinking* | Define el pensamiento computacional |
| Brooke (1996), *SUS* | Instrumento estándar de usabilidad |
| Benitti (2012), revisión sistemática de robótica en escuelas | Evidencia sobre el efecto de la robótica educativa |
| UTP / Univ. de Salamanca (2012), robótica educativa en Chiriquí | Antecedente panameño |

<!-- Verificar citas completas con /discover lit antes de usarlas. -->

---

## Field-Specific Referee Concerns (jurado)

- "¿En qué se diferencia de Scratch, mBlock u Open Roberta?" → tabla comparativa.
- "¿Cómo demostró que el problema existe?" → diagnóstico con datos.
- "¿Funciona con 30 estudiantes a la vez?" → pruebas de carga.
- "¿Qué pasa sin robot?" → el simulador funciona de forma independiente.
- "¿Es escalable y vendible?" → arquitectura multi-colegio y modelo de negocio.
- "¿Protegió los datos de los menores?" → consentimientos y privacidad.
