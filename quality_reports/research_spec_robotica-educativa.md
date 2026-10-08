# Especificación de Tesis: Plataforma web de robótica educativa con simulador y robots ESP32

**Autor:** Edberg Méndez
**Universidad:** Universidad de Panamá — Facultad de Informática
**Tipo:** Tesis de desarrollo (pregrado)
**Plazo:** 12 meses
**Fecha:** 2026-10-08
**Estado:** BORRADOR — pendiente de validar con asesor y guía oficial de la facultad

---

## Título tentativo

*Desarrollo de una plataforma web escalable para la enseñanza de robótica educativa, con simulador, programación por bloques y conexión a robots ESP32, dirigida a estudiantes de educación media de colegios privados en Panamá.*

---

## 1. Pregunta / Problema

**Problema (hipótesis a confirmar con diagnóstico):**
En los colegios privados de Panamá hay pocos kits de robótica para muchos estudiantes (≈30 por clase). La mayoría espera turno sin practicar, y el docente no tiene herramientas para medir el avance individual de cada estudiante.

**Pregunta guía:**
¿Puede una plataforma web con simulador y robots compartidos por turnos aumentar el tiempo de práctica por estudiante y facilitar la evaluación docente en clases de robótica con pocos kits?

## 2. Motivación

- MEDUCA reporta >1,300 docentes formados en STEAM y >1,000 clubes de robótica (2023). La formación existe; los **kits por estudiante** siguen siendo escasos (ej.: 80 kits para 61 escuelas en Colón).
- El docente evalúa a 30 estudiantes a mano, sin datos.
- Herramientas existentes (Scratch, mBlock, MakeCode, Open Roberta, VEXcode VR) no combinan: simulador + robot real por turnos + analítica docente + multi-colegio, en español y para Panamá.

## 3. Hipótesis (medibles)

| # | Hipótesis | Cómo se mide |
|---|-----------|--------------|
| H1 | Con la plataforma, los minutos de práctica por estudiante aumentan vs. clase tradicional | Observación antes/después en la misma clase |
| H2 | La plataforma tiene usabilidad aceptable | Cuestionario SUS ≥ 68 (estudiantes y docente) |
| H3 | Un programa probado en el simulador funciona en el robot real sin cambios | % de retos que pasan del simulador al robot con éxito |
| H4 | El panel docente reduce el tiempo de evaluación | Entrevista y tiempo reportado por el docente |

## 4. Objetivos

**General:** Desarrollar una plataforma web escalable de robótica educativa con simulador, programación por bloques, conexión a robots ESP32 y analítica docente, validada en un colegio privado de Panamá.

**Específicos:**
1. Diagnosticar la situación de la enseñanza de robótica en colegios privados (kits, evaluación, necesidades).
2. Analizar herramientas existentes y definir requisitos.
3. Diseñar la arquitectura multi-colegio y el modelo de datos.
4. Desarrollar los módulos: editor de bloques, simulador 2D, conexión ESP32, retos, panel docente.
5. Validar la plataforma con un grupo de ~30 estudiantes y su docente.
6. Proponer un modelo de negocio para su comercialización.

## 5. Estrategia de desarrollo y validación

**Metodología:** Scrum adaptado (sprints de 2 semanas), con diseño centrado en el usuario.

**Módulos y prioridad (MoSCoW):**

| Módulo | Prioridad |
|--------|-----------|
| Usuarios, roles (admin, docente, estudiante) y colegios | MUST |
| Editor de bloques (Blockly) + vista de código Python | MUST |
| Simulador 2D (Canvas JS) con sensores de distancia y línea | MUST |
| Conexión ESP32 por USB (Web Serial) + firmware MicroPython | MUST |
| Banco de retos por nivel + evaluación automática | MUST |
| Panel docente: intentos, errores, tiempo, notas, exportar Excel | MUST |
| Cola de turnos para robots reales | SHOULD |
| Conexión por WiFi | SHOULD |
| Retos de domótica (casa domótica con el mismo adaptador) | MAY — demuestra extensibilidad |
| Soporte Arduino, integración Google Classroom/Moodle | Trabajo futuro |

**Arquitectura:**
- Cliente: HTML/JS + Blockly + Canvas + Web Serial.
- Servidor: Python + Django (API REST, auth, multi-colegio por `colegio_id`).
- Base de datos: PostgreSQL.
- Dispositivo: ESP32 con MicroPython; intérprete de comandos JSON estándar (`avanzar`, `girar`, `leer_sensor`). Patrón **adaptador** para sumar otros dispositivos.

**Validación:** prueba en un colegio privado, 1 grupo de ~30 estudiantes en equipos de 3, 2 robots ESP32 por turnos. Medición antes/después (H1–H4). Consentimiento del colegio y de los padres.

## 6. Datos / Recursos

| Recurso | Estado |
|---------|--------|
| 2+ ESP32, sensores, actuadores, casa domótica | EN MANO |
| Dominio de HTML, JS, Python, PostgreSQL | EN MANO |
| Colegio privado para validar | POR CONFIRMAR |
| Encuesta a 10–20 docentes de robótica/informática | POR HACER |
| Permisos y consentimientos (menores de edad) | POR HACER |

## 7. Resultados esperados

- Plataforma funcional desplegada en la nube.
- Aumento del tiempo de práctica por estudiante (H1).
- SUS ≥ 68 (H2).
- ≥ 80% de retos transferibles del simulador al robot (H3).
- **Sorpresa posible:** que el cuello de botella no sea el kit sino la formación docente → ajustar enfoque hacia guías y retos para el docente.

## 8. Contribución

Primera plataforma (según la búsqueda inicial) que integra **simulador + robot ESP32 compartido + analítica docente + multi-colegio**, en español y validada en el contexto panameño. Además, arquitectura extensible (robot, domótica) y modelo de negocio para colegios privados.

## 9. Antecedentes clave

- UTP y Universidad de Salamanca (2012), robótica educativa en 6 colegios de Chiriquí.
- Universidad de Murcia: simulador web de robótica educativa con bloques (DOI 10.6018/red.410191).
- Kibotics, Universidad Rey Juan Carlos (TFG, 2019): simulador de robots en el navegador.
- MetaRoboLearn, ICCE 2025: bloques vs. Python con simulador.
- Estudio en Perú (Redalyc): el 74% de los docentes no conocía la robótica educativa.
- Pendiente: `/discover lit` para la revisión completa.

## 10. Cronograma (12 meses)

| Mes | Actividad |
|-----|-----------|
| 1 | Diagnóstico (encuestas, entrevistas, observación) + aprobación del tema |
| 2 | Estado del arte + requisitos + marco teórico |
| 3 | Arquitectura, modelo de datos, diseño UI |
| 4–5 | Usuarios, colegios, editor Blockly |
| 6–7 | Simulador 2D + sensores |
| 8 | Firmware ESP32 + conexión USB |
| 9 | Retos, evaluación y panel docente |
| 10 | Pruebas internas + piloto en el colegio |
| 11 | Análisis de resultados + modelo de negocio |
| 12 | Redacción final + preparación de la defensa |

## 11. Riesgos y plan B

| Riesgo | Plan B |
|--------|--------|
| El colegio no da permiso | Validar en tus clases o en la fundación |
| El diagnóstico no confirma el problema | Reenfocar hacia la evaluación o la formación docente |
| El robot real se atrasa | El simulador y el panel funcionan solos; el robot pasa a demo |
| Alcance demasiado grande | Recortar los SHOULD y MAY; mantener los MUST |
| Propiedad intelectual de la universidad | Consultar el reglamento antes de iniciar |

## 12. Preguntas abiertas

- ¿Formato oficial y modalidad de tesis de desarrollo en la facultad?
- ¿Quién será tu asesor?
- ¿Qué colegio privado participa en la validación?
- ¿Quién es dueño del software de una tesis (propiedad intelectual)?
