/**
 * Crea en Google Forms la encuesta de diagnóstico para docentes.
 * Fuente: quality_reports/instrumentos/encuesta_diagnostico_docentes.md (v0.1)
 *
 * Cómo usarlo:
 * 1. Entra a https://script.google.com y crea un "Proyecto nuevo".
 * 2. Borra el código de ejemplo y pega todo este archivo.
 * 3. Pulsa "Ejecutar" (función crearEncuesta) y acepta los permisos.
 * 4. Abre "Registro de ejecución": ahí salen el enlace para responder y el de edición.
 */
function crearEncuesta() {
  const form = FormApp.create('Diagnóstico: enseñanza de robótica en colegios de Panamá');
  form.setDescription(
    'Soy Edberg Méndez, estudiante de Ingeniería Informática de la Universidad de Panamá. ' +
    'Esta encuesta forma parte de mi tesis sobre la enseñanza de la robótica educativa en colegios de Panamá.\n\n' +
    'Su participación es voluntaria y anónima. Los datos se usarán solo con fines académicos y se presentarán ' +
    'de forma agrupada. No se publicará el nombre de ningún docente ni colegio. Duración: 10–12 minutos.'
  );
  form.setCollectEmail(false);
  form.setProgressBar(true);

  form.addMultipleChoiceItem()
    .setTitle('Consentimiento')
    .setChoiceValues(['Acepto participar'])
    .setRequired(true);

  // ---------- Sección A ----------
  section(form, 'A. Perfil del docente');
  checkbox(form, 'A1. ¿Qué asignatura imparte?',
    ['Robótica', 'Informática / Tecnología', 'Ciencias', 'Matemáticas', 'Club extracurricular'], true);
  choice(form, 'A2. Años de experiencia enseñando robótica o programación',
    ['Menos de 1', '1–3', '4–6', '7–10', 'Más de 10']);
  checkbox(form, 'A3. Grados en los que enseña robótica',
    ['7.°', '8.°', '9.°', '10.°', '11.°', '12.°']);
  checkbox(form, 'A4. ¿Qué formación tiene en robótica?',
    ['Diplomado STEAM (MEDUCA u otro)', 'Cursos en línea', 'Capacitación del proveedor de kits',
     'Carrera universitaria afín', 'Autodidacta', 'Ninguna']);
  form.addTextItem().setTitle('A5. Provincia del colegio').setRequired(true);

  // ---------- Sección B ----------
  section(form, 'B. Recursos disponibles');
  choice(form, 'B1. ¿Cuántos estudiantes tiene, en promedio, por clase de robótica?',
    ['Menos de 15', '15–20', '21–25', '26–30', 'Más de 30']);
  choice(form, 'B2. ¿Cuántos kits o robots FUNCIONANDO tiene para una clase?',
    ['Ninguno', '1–2', '3–5', '6–10', 'Más de 10']);
  checkbox(form, 'B3. ¿Qué kits usa?',
    ['LEGO (Spike / EV3 / WeDo)', 'mBot / Makeblock', 'Arduino', 'ESP32', 'micro:bit', 'VEX',
     'Kits armados por el docente', 'Ninguno'], true);
  choice(form, 'B4. ¿Cuánto dura una clase de robótica?',
    ['40–45 min', '80–90 min', 'Más de 90 min']);
  choice(form, 'B5. En una clase típica, ¿cuántos minutos usa cada estudiante el robot con sus propias manos? (aproximado)',
    ['0–5', '6–10', '11–20', '21–30', 'Más de 30']);
  choice(form, 'B6. Mientras esperan su turno con el robot, los estudiantes normalmente…',
    ['Programan en la computadora', 'Observan a sus compañeros', 'Hacen otra actividad',
     'No hacen nada en particular', 'No aplica (hay robot para todos)']);
  choice(form, 'B7. ¿Cada estudiante o equipo tiene computadora durante la clase?',
    ['Sí, cada estudiante', 'Sí, cada equipo', 'Solo algunas', 'No']);
  choice(form, 'B8. ¿Cómo es el internet del laboratorio?',
    ['Estable', 'Inestable', 'No hay internet']);

  // ---------- Sección C ----------
  section(form, 'C. Herramientas y metodología');
  checkbox(form, 'C1. ¿Qué herramientas de programación usan?',
    ['Scratch', 'mBlock', 'MakeCode', 'Arduino IDE', 'LEGO Spike App', 'Open Roberta Lab',
     'VEXcode VR', 'Tinkercad', 'Python'], true);
  choice(form, 'C2. ¿Usa algún simulador de robots (robot virtual)?',
    ['Sí, con frecuencia', 'Sí, a veces', 'No, pero me interesa', 'No, y no me interesa']);
  choice(form, 'C3. ¿Sus estudiantes pasan de programar con bloques a escribir código (Python, C++)?',
    ['Sí', 'Solo algunos', 'No', 'No sé cómo hacer esa transición']);

  // ---------- Sección D ----------
  section(form, 'D. Evaluación');
  checkbox(form, 'D1. ¿Cómo evalúa a sus estudiantes en robótica?',
    ['Observación en clase', 'Rúbrica', 'Proyecto final', 'Examen escrito', 'Reto o competencia',
     'Revisión del código'], true);
  choice(form, 'D2. ¿Cuántas horas por semana dedica a evaluar y registrar notas de robótica?',
    ['Menos de 1', '1–2', '3–5', 'Más de 5']);
  choice(form, 'D3. ¿Sabe cuánto avanzó cada estudiante (no solo cada equipo)?',
    ['Siempre', 'Casi siempre', 'A veces', 'Casi nunca', 'Nunca']);

  // ---------- Sección E ----------
  section(form, 'E. Dificultades',
    '1 = Totalmente en desacuerdo · 2 = En desacuerdo · 3 = Neutral · 4 = De acuerdo · 5 = Totalmente de acuerdo');
  form.addGridItem()
    .setTitle('Indique su nivel de acuerdo')
    .setRows([
      'E1. Los kits no alcanzan para que todos practiquen lo suficiente',
      'E2. Muchos estudiantes pierden tiempo esperando su turno',
      'E3. Es difícil evaluar el avance individual de cada estudiante',
      'E4. Evaluar la robótica me toma demasiado tiempo',
      'E5. Me falta material listo (retos, guías) para mis clases',
      'E6. Me siento preparado/a para enseñar robótica',
      'E7. Los kits se dañan o pierden piezas con frecuencia',
      'E8. Los estudiantes no pueden practicar robótica fuera de clase',
      'E9. Mi colegio tiene presupuesto para comprar más kits'
    ])
    .setColumns(['1', '2', '3', '4', '5'])
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('E10. ¿Cuál es su mayor dificultad al enseñar robótica?')
    .setRequired(true);

  // ---------- Sección F ----------
  section(form, 'F. Interés en una solución');
  choice(form, 'F1. ¿Qué tan útil le sería una plataforma web donde los estudiantes practiquen en un robot virtual y luego prueben en el robot real por turnos?',
    ['Nada útil', 'Poco útil', 'Algo útil', 'Útil', 'Muy útil']);
  const ranking = form.addGridItem()
    .setTitle('F2. Ordene estas funciones de más a menos importante (1 = más importante)')
    .setHelpText('Use cada número una sola vez.')
    .setRows(['Simulador (robot virtual)', 'Retos listos por nivel', 'Nota automática y reporte por estudiante',
              'Ver el código Python junto a los bloques', 'Conectar el robot real desde la plataforma',
              'Que los estudiantes practiquen desde casa'])
    .setColumns(['1', '2', '3', '4', '5', '6'])
    .setRequired(true);
  ranking.setValidation(FormApp.createGridValidation()
    .setHelpText('Use cada número una sola vez.')
    .requireLimitOneResponsePerColumn()
    .build());
  choice(form, 'F3. ¿Quién decide la compra de plataformas educativas en su colegio?',
    ['Yo', 'Coordinación académica', 'Dirección', 'Administración', 'No sé']);
  form.addMultipleChoiceItem()
    .setTitle('F4. ¿Su colegio paga actualmente alguna plataforma educativa? (Google Workspace, Moodle, plataforma de notas, etc.)')
    .setChoiceValues(['No', 'No sé'])
    .showOtherOption(true)
    .setHelpText('Si paga alguna, elija "Otro" y escriba cuál.')
    .setRequired(true);
  choice(form, 'F5. ¿Le gustaría participar en una prueba piloto gratuita de la plataforma?',
    ['Sí', 'Tal vez', 'No']);
  form.addTextItem()
    .setTitle('F6. (Opcional) Si respondió Sí o Tal vez, deje un correo de contacto')
    .setRequired(false);

  form.setConfirmationMessage('¡Gracias por su tiempo! Su aporte es muy valioso para esta investigación.');

  Logger.log('Enlace para responder: ' + form.getPublishedUrl());
  Logger.log('Enlace para editar:    ' + form.getEditUrl());
}

function section(form, title, help) {
  const s = form.addPageBreakItem().setTitle(title);
  if (help) s.setHelpText(help);
}

function choice(form, title, options) {
  form.addMultipleChoiceItem().setTitle(title).setChoiceValues(options).setRequired(true);
}

function checkbox(form, title, options, withOther) {
  const item = form.addCheckboxItem().setTitle(title).setChoiceValues(options).setRequired(true);
  if (withOther) item.showOtherOption(true);
}
