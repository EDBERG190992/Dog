# Decision Record — Discovery: Tema de tesis

**Date:** 2026-10-08
**Stage:** Discovery
**Decided by:** Edberg Méndez + Claude (`/discover interview`)

---

## Decision

Tesis de desarrollo: plataforma web de robótica educativa con simulador, bloques, robots ESP32 por turnos y analítica docente, para colegios privados de Panamá.

## Context

Edberg necesita un tema de tesis de pregrado (Universidad de Panamá, Facultad de Informática). Prefiere desarrollo, tiene 1 año, experiencia en robótica educativa, ESP32 y casa domótica, y quiere poder vender la plataforma después.

## Alternatives Considered

| Alternative | Why rejected |
|-------------|-------------|
| Sistema de adopción de mascotas (Dog) | Ya hay código, pero no aprovecha su experiencia en robótica ni educación |
| App de orientación vocacional para la fundación | Menor diferenciación técnica y menos potencial de venta |
| Plataforma de juegos para aprender programación | Compite de frente con Scratch y Code.org sin diferenciarse |
| Robot con visión por computadora | Alto riesgo de hardware para 1 año; menos peso de software |
| Sistema de gestión de competencias de robótica | Útil, pero no resuelve el problema de aprendizaje en el aula |
| Solo simulador, sin robot real | Pierde la diferencia clave: probar en el simulador y luego en el robot |
| Arduino como dispositivo principal | No corre MicroPython, sin WiFi; ESP32 ya está en mano |

## Key Assumptions

1. Los colegios privados tienen pocos kits por estudiante (confirmar con diagnóstico).
2. Un colegio privado acepta el piloto con ~30 estudiantes.
3. Un programa en el simulador se puede transferir al ESP32 con comandos estándar.
4. La facultad acepta tesis de desarrollo con validación con usuarios.

## What Would Invalidate This

- Si el diagnóstico muestra que los kits sobran y el problema es otro → reenfocar hacia evaluación o formación docente.
- Si ningún colegio da permiso → validar en la fundación o en las clases propias.
- Si aparece una plataforma idéntica en Panamá → reforzar la diferencia (multi-colegio, domótica, analítica).
- Si la universidad retiene los derechos del software → revisar el plan de venta.

## Approved By

Pendiente — Edberg
