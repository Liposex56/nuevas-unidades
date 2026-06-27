window.KNOWLEDGE_COURSE_DATA = {
  1: {
    title: "Gestión del Conocimiento e Innovación",
    desc: "Comprende cómo las organizaciones crean, transforman, comparten y aplican conocimiento para aprender, innovar y adaptarse.",
    completionMode: "quiz",
    theoryNodes: [
      {
        id: "1.1",
        title: "Concepto y tipos de conocimiento",
        learnMoreResources: [
          {
            type: "image",
            title: "Del saber personal a la memoria organizacional",
            description: "Vista holográfica del conocimiento como activo intangible que se organiza, documenta y comparte.",
            imageUrl: "Recursos/nuevo/infografia-conocimiento-organizacional.svg"
          }
        ],
        content: `<p>La <strong>Gestión del Conocimiento</strong> es el proceso mediante el cual una organización crea, organiza, comparte y utiliza conocimiento para mejorar el aprendizaje, la innovación y el desempeño institucional.</p>
        <p>Ikujiro Nonaka y Hirotaka Takeuchi consideran que el conocimiento es uno de los recursos más importantes de las organizaciones modernas. Su valor aparece cuando la información se relaciona con experiencia, reflexión y práctica social.</p>
        <h3>Conocimiento tácito</h3>
        <p>Es personal, subjetivo y difícil de documentar. Se construye mediante experiencias, habilidades, emociones, intuiciones y vivencias. Un ejemplo es la capacidad de una docente experimentada para motivar a un grupo en una situación compleja.</p>
        <h3>Conocimiento explícito</h3>
        <p>Es formal y estructurado. Puede escribirse, almacenarse y compartirse en manuales, libros, bases de datos, protocolos, investigaciones o repositorios digitales.</p>
        <p>Gestionar el conocimiento permite conservar saberes, compartir experiencias, desarrollar aprendizaje colectivo y generar innovación continua.</p>`
      },
      {
        id: "1.2",
        title: "Modelo SECI",
        learnMoreResources: [
          {
            type: "image",
            title: "Espiral de creación del conocimiento",
            description: "El conocimiento crece cuando la experiencia circula, se explica, se integra y vuelve a la práctica.",
            imageUrl: "Recursos/nuevo/infografia-conocimiento-organizacional.svg"
          }
        ],
        content: `<p>El modelo SECI de Nonaka y Takeuchi explica la creación del conocimiento como una espiral continua entre saber tácito y explícito.</p>
        <h3>Socialización: tácito a tácito</h3><p>Se aprende mediante observación, convivencia, práctica y experiencia compartida. Ejemplo: una persona aprende observando a una experta.</p>
        <h3>Exteriorización: tácito a explícito</h3><p>La experiencia se convierte en conceptos, modelos, documentos o explicaciones. Ejemplo: una profesora documenta su metodología.</p>
        <h3>Combinación: explícito a explícito</h3><p>Se integran distintas fuentes para producir una síntesis nueva. Ejemplo: construir un informe con artículos, datos y protocolos.</p>
        <h3>Interiorización: explícito a tácito</h3><p>El conocimiento documentado se incorpora mediante práctica y aplicación. Ejemplo: aplicar una teoría aprendida en un proyecto real.</p>`
      },
      {
        id: "1.3",
        title: "Aprendizaje organizacional",
        learnMoreResources: [
          {
            type: "image",
            title: "Personas que aprenden juntas",
            description: "El capital humano se fortalece cuando las experiencias individuales se convierten en aprendizaje colectivo.",
            imageUrl: "Recursos/nuevo/infografia-aprendizaje-colectivo.svg"
          }
        ],
        content: `<p>El aprendizaje organizacional es el proceso mediante el cual una organización adquiere, construye y transforma conocimientos para mejorar sus acciones y resultados.</p>
        <p>Peter Senge denomina <strong>organizaciones inteligentes</strong> a aquellas que aprenden continuamente, se adaptan al cambio, innovan y comparten conocimiento.</p>
        <h3>Cinco disciplinas de Senge</h3>
        <ul><li><strong>Dominio personal:</strong> crecimiento individual y profesional.</li><li><strong>Modelos mentales:</strong> revisión de creencias que influyen en las decisiones.</li><li><strong>Visión compartida:</strong> objetivos construidos colectivamente.</li><li><strong>Aprendizaje en equipo:</strong> diálogo, cooperación e intercambio de saberes.</li><li><strong>Pensamiento sistémico:</strong> comprensión de las relaciones entre las partes de la organización.</li></ul>`
      },
      {
        id: "1.4",
        title: "Innovación y cultura de conocimiento",
        learnMoreResources: [
          {
            type: "image",
            title: "Redes que convierten ideas en valor",
            description: "La innovación emerge de personas, saberes documentados, relaciones y tecnología.",
            imageUrl: "Recursos/nuevo/infografia-capital-relacional.svg"
          }
        ],
        content: `<p>La innovación consiste en generar ideas, productos, procesos o estrategias nuevas que produzcan mejoras significativas. Joseph Schumpeter la relaciona con la introducción de nuevas combinaciones productivas.</p>
        <p>Puede ser tecnológica, educativa, organizacional o social. Para Nonaka y Takeuchi, la innovación surge de la creación de conocimiento, el aprendizaje compartido y la colaboración.</p>
        <p>Una cultura de innovación promueve participación, escucha ideas, permite experimentar, aprende de los errores y conecta el conocimiento con necesidades reales.</p>`
      },
      {
        id: "1.5",
        title: "Transformación digital",
        learnMoreResources: [
          {
            type: "image",
            title: "Ecosistema digital de conocimiento",
            description: "Plataformas, datos, inteligencia artificial y colaboración conectadas alrededor de una memoria institucional.",
            imageUrl: "Recursos/nuevo/infografia-transformacion-digital.svg"
          }
        ],
        content: `<p>La transformación digital integra tecnologías para mejorar procesos, comunicación, aprendizaje, productividad y servicios. No consiste únicamente en comprar herramientas: implica transformar la cultura organizacional.</p>
        <p>Incluye TIC, automatización, gestión de información, aprendizaje virtual, simuladores, analítica de datos, inteligencia artificial y software educativo.</p>
        <p>En educación facilita acceso flexible al conocimiento, colaboración virtual, desarrollo de competencias digitales y toma de decisiones basada en información.</p>
        <p>La tecnología aporta valor cuando permite que el conocimiento sea accesible, confiable, reutilizable y útil para las personas.</p>`
      }
    ],
    quiz: [
      { q: "Una universidad desea evitar que la experiencia de docentes próximos a jubilarse se pierda. ¿Qué acción corresponde mejor a la gestión del conocimiento?", options: ["Comprar equipos sin modificar procesos", "Documentar prácticas y crear espacios de transferencia", "Eliminar los saberes informales", "Centralizar todas las decisiones en una persona"], correct: 1 },
      { q: "Una habilidad adquirida durante años de experiencia y difícil de explicar por completo corresponde a conocimiento:", options: ["Explícito", "Estadístico", "Tácito", "Automatizado"], correct: 2 },
      { q: "Cuando una experta convierte su experiencia en una guía metodológica ocurre el proceso SECI de:", options: ["Socialización", "Exteriorización", "Combinación", "Interiorización"], correct: 1 },
      { q: "Un equipo integra artículos, datos institucionales y protocolos para construir un nuevo modelo. Este proceso es:", options: ["Combinación", "Socialización", "Exteriorización", "Observación informal"], correct: 0 },
      { q: "Una persona aplica repetidamente un protocolo hasta incorporarlo a su práctica profesional. Esto representa:", options: ["Exteriorización", "Interiorización", "Combinación", "Almacenamiento"], correct: 1 },
      { q: "Según Peter Senge, una organización inteligente se caracteriza principalmente por:", options: ["Evitar cambios para mantener estabilidad", "Aprender continuamente y transformarse", "Conservar información sin compartirla", "Depender exclusivamente de la tecnología"], correct: 1 },
      { q: "¿Cuál situación evidencia pensamiento sistémico?", options: ["Analizar un problema aislando por completo sus causas", "Comprender cómo decisiones de un área afectan a toda la organización", "Premiar solo el rendimiento individual", "Repetir una solución sin evaluar consecuencias"], correct: 1 },
      { q: "La innovación organizacional se fortalece cuando:", options: ["Las ideas circulan y se convierten en aprendizaje", "Se penaliza cualquier experimentación", "Se limita la colaboración entre áreas", "La información permanece fragmentada"], correct: 0 },
      { q: "¿Qué afirmación diferencia mejor digitalización de transformación digital?", options: ["Son exactamente lo mismo", "Transformar digitalmente implica cambios culturales y de proceso", "Digitalizar elimina la necesidad de personas", "La transformación digital solo consiste en comprar software"], correct: 1 },
      { q: "Una plataforma tecnológica genera valor para la gestión del conocimiento cuando:", options: ["Acumula archivos sin criterios", "Facilita acceso, colaboración, reutilización y toma de decisiones", "Impide modificar documentos", "Sustituye completamente la reflexión humana"], correct: 1 }
    ],
    media: [
      {
        type: "infografia",
        title: "Mapa visual: conocimiento organizacional",
        description: "Explora cómo el conocimiento tácito y explícito alimenta la memoria institucional.",
        imageUrl: "Recursos/nuevo/infografia-conocimiento-organizacional.svg",
        content: "<p>Observa qué saberes dependen de las personas y cuáles ya están documentados. Una estrategia equilibrada debe proteger ambos.</p>"
      },
      {
        type: "infografia",
        title: "Personas y aprendizaje colectivo",
        description: "Relaciona capital humano, aprendizaje en equipo y organizaciones inteligentes.",
        imageUrl: "Recursos/nuevo/infografia-aprendizaje-colectivo.svg",
        content: "<p>El conocimiento no circula por sí solo. Requiere confianza, diálogo, comunidades de práctica y oportunidades para aprender haciendo.</p>"
      },
      {
        type: "infografia",
        title: "Transformación digital con propósito",
        description: "Analiza un ecosistema de plataformas, datos, IA y colaboración.",
        imageUrl: "Recursos/nuevo/infografia-transformacion-digital.svg",
        content: "<p>La herramienta es solo una parte. El valor aparece cuando tecnología, procesos, cultura y necesidades de las personas se alinean.</p>"
      }
    ]
  },
  2: {
    title: "Caso Integrador: Universidad Horizonte",
    desc: "Diagnostica sus capitales organizacionales y diseña una estrategia tecnológica para proteger y movilizar el conocimiento.",
    completionMode: "case",
    theoryNodes: [
      {
        id: "2.1",
        title: "Contexto del caso",
        content: `<p>La Universidad Horizonte está ampliando su oferta híbrida. Varios docentes expertos se jubilarán, los materiales están dispersos, diferentes equipos repiten investigaciones similares y los aliados externos sienten que sus aportes no se aprovechan.</p>
        <p>La institución compró varias plataformas, pero no definió una estrategia para conectar personas, conocimiento, relaciones y tecnología. Tu misión es diagnosticar el problema y proponer una ruta viable.</p>`
      },
      {
        id: "2.2",
        title: "Capital humano",
        learnMoreResources: [{ type: "image", title: "Capital humano", description: "Habilidades, experiencia, motivación, creatividad y capacidad de aprender.", imageUrl: "Recursos/nuevo/infografia-capital-humano.svg" }],
        content: `<p>El capital humano reúne conocimientos, habilidades, experiencias, creatividad, motivación y capacidades de las personas. No pertenece de forma automática a la institución: necesita condiciones para desarrollarse y compartirse.</p>
        <p>En el caso, incluye la experiencia docente, las competencias digitales, el liderazgo académico y la disposición para colaborar.</p>`
      },
      {
        id: "2.3",
        title: "Capital intelectual",
        learnMoreResources: [{ type: "image", title: "Capital intelectual", description: "Memoria institucional, procesos, investigaciones, bases de datos y activos intangibles.", imageUrl: "Recursos/nuevo/infografia-capital-intelectual.svg" }],
        content: `<p>El capital intelectual integra los activos intangibles que permiten reutilizar conocimiento: metodologías, investigaciones, protocolos, bases de datos, propiedad intelectual, repositorios y memoria organizacional.</p>
        <p>En la Universidad Horizonte está fragmentado: parte del saber vive solo en las personas y parte se encuentra en archivos difíciles de localizar.</p>`
      },
      {
        id: "2.4",
        title: "Capital relacional",
        learnMoreResources: [{ type: "image", title: "Capital relacional", description: "Confianza y vínculos con estudiantes, egresados, aliados, comunidades y organizaciones.", imageUrl: "Recursos/nuevo/infografia-capital-relacional.svg" }],
        content: `<p>El capital relacional está formado por los vínculos de confianza con estudiantes, egresados, proveedores, comunidades, instituciones y aliados estratégicos.</p>
        <p>No se limita a una lista de contactos. Se fortalece cuando las relaciones generan intercambio, aprendizaje, legitimidad y proyectos compartidos.</p>`
      },
      {
        id: "2.5",
        title: "Herramientas tecnológicas y TIC",
        learnMoreResources: [{ type: "image", title: "Ecosistema digital", description: "Tecnología conectada con procesos de creación, acceso y transferencia del conocimiento.", imageUrl: "Recursos/nuevo/infografia-ecosistema-digital.svg" }],
        content: `<p>Las TIC facilitan creación, almacenamiento, acceso, intercambio y aplicación del conocimiento. Pueden incluir LMS, repositorios, comunidades virtuales, videoconferencia, analítica, asistentes de IA, simuladores y experiencias inmersivas.</p>
        <p>Una solución sostenible debe integrar gobernanza, formación, accesibilidad, seguridad, calidad de contenidos e indicadores de uso. La tecnología no reemplaza la cultura de aprendizaje: la hace visible y escalable.</p>`
      }
    ],
    quiz: [],
    media: [
      {
        type: "ar",
        title: "Laboratorio de realidad aumentada",
        description: "Escanea el QR con tu celular y explora cuatro capas del capital organizacional sobre la cámara.",
        imageUrl: "Recursos/nuevo/ar-ecosistema-digital.webp"
      },
      {
        type: "infografia",
        title: "Objetivo visual: capital humano",
        description: "Examina capacidades, experiencia, motivación y aprendizaje.",
        imageUrl: "Recursos/nuevo/infografia-capital-humano.svg",
        content: "<p>Busca evidencias de saber experto, competencias digitales, motivación y oportunidades de mentoría.</p>"
      },
      {
        type: "infografia",
        title: "Objetivo visual: capital intelectual",
        description: "Reconoce memoria institucional y activos intangibles.",
        imageUrl: "Recursos/nuevo/infografia-capital-intelectual.svg",
        content: "<p>Identifica qué debe documentarse, organizarse, protegerse y hacerse reutilizable.</p>"
      },
      {
        type: "infografia",
        title: "Objetivo visual: capital relacional",
        description: "Analiza confianza, redes, aliados y transferencia externa.",
        imageUrl: "Recursos/nuevo/infografia-capital-relacional.svg",
        content: "<p>Valora la calidad de los vínculos y su capacidad para producir conocimiento compartido.</p>"
      },
      {
        type: "infografia",
        title: "Objetivo visual: ecosistema digital",
        description: "Conecta plataformas, datos, IA, colaboración y seguridad.",
        imageUrl: "Recursos/nuevo/infografia-ecosistema-digital.svg",
        content: "<p>Selecciona herramientas por su función pedagógica y organizacional, no por novedad.</p>"
      }
    ]
  }
};

window.KNOWLEDGE_CAPITAL_MATRIX_ACTIVITY = {
  id: "capital-personal-matrix-final",
  type: "evaluacion",
  activityKind: "capitalMatrix",
  title: "Evaluación final: Matriz de valoración del capital personal",
  description: "Valora tus capitales humano, intelectual y relacional; interpreta el resultado, responde la reflexión crítica y construye tu balance personal como cierre del caso.",
  imageUrl: "Recursos/nuevo/matriz-capital-personal.webp"
};

window.KNOWLEDGE_BADGES = [
  {
    id: "unidad-1-seci",
    modId: 1,
    icon: "SECI",
    imageUrl: "Recursos/nuevo/insignia-seci.svg",
    name: "Arquitecto SECI",
    description: "Domina la creación y transferencia del conocimiento organizacional.",
    condition: "Aprobar la evaluación de la Unidad 1 con mínimo 80%."
  },
  {
    id: "unidad-2-estratega",
    modId: 2,
    icon: "U2",
    imageUrl: "Recursos/nuevo/insignia-estratega.svg",
    name: "Estratega del Conocimiento",
    description: "Diseña una respuesta institucional para proteger y movilizar el conocimiento.",
    condition: "Completar el Caso Integrador de la Unidad 2 con mínimo 80%."
  },
  {
    id: "laboratorio-ar",
    activity: "ar",
    icon: "AR",
    imageUrl: "Recursos/nuevo/insignia-ar.svg",
    name: "Explorador Aumentado",
    description: "Activa una capa de realidad aumentada y relaciona el marcador con el caso.",
    condition: "Escanear al menos una capa del laboratorio AR."
  },
  {
    id: "matriz-capital",
    finalEvaluation: true,
    icon: "150",
    imageUrl: "Recursos/nuevo/insignia-capital.svg",
    name: "Capital Personal Estratégico",
    description: "Completa la matriz, interpreta tus capitales y presenta tu balance final.",
    condition: "Finalizar la evaluación de Matriz de Capital Personal."
  }
];

window.KNOWLEDGE_COMPANIONS = [
  {
    id: "nexo",
    name: "Nexo",
    description: "Analiza conexiones y organiza saberes",
    art: `<span class="animated-companion avatar-robot companion-nexo"><img src="Recursos/nuevo/companero-nexo.webp" alt="Nexo, robot del conocimiento"><span class="blink-layer"></span><span class="holo-ring"></span></span>`
  },
  {
    id: "vera",
    name: "Vera",
    description: "Explora estrategias y decisiones",
    art: `<span class="animated-companion avatar-explorador companion-vera"><img src="Recursos/nuevo/companera-vera.webp" alt="Vera, estratega de innovación"><span class="blink-layer"></span><span class="compass-spin">✦</span></span>`
  },
  {
    id: "prisma",
    name: "Prisma",
    description: "Convierte ideas en soluciones visuales",
    art: `<span class="animated-companion avatar-creativo companion-prisma"><img src="Recursos/nuevo/companero-prisma.webp" alt="Prisma, arquitecto creativo"><span class="blink-layer"></span><span class="creative-shape one"></span><span class="creative-shape two"></span></span>`
  },
  {
    id: "kubo",
    name: "Kubo",
    description: "Integra personas, ideas, redes y tecnología",
    art: `<span class="animated-companion avatar-mascota companion-kubo"><img src="Recursos/nuevo/companero-kubo.webp" alt="Kubo, asistente modular"><span class="blink-layer"></span><span class="pet-mark one">◆</span><span class="pet-mark two">•</span></span>`
  }
];

window.KNOWLEDGE_MODULE_MESSAGES = {
  1: "vamos a transformar experiencia en conocimiento útil. Revisa cada etapa del modelo SECI y piensa cómo circulan los saberes en una organización.",
  2: "ahora eres parte del comité de transformación de Universidad Horizonte. Cada decisión debe conectar personas, memoria institucional, relaciones y tecnología."
};

window.KNOWLEDGE_REINFORCEMENT_DATA = {
  1: {
    mode: "sorter",
    title: "Arquitectura SECI en acción",
    instruction: "Arrastra cada evidencia al proceso que mejor explica cómo circula el conocimiento. Hay casos parecidos: analiza el verbo central antes de decidir.",
    categories: [
      { id: "tacito", label: "Conocimiento tácito", hint: "Saber práctico, experiencia o intuición que aún no está documentada." },
      { id: "explicito", label: "Conocimiento explícito", hint: "Información organizada en guías, protocolos, bases de datos o documentos." },
      { id: "socializacion", label: "Socialización", hint: "Aprender observando, conversando o practicando con otra persona." },
      { id: "exteriorizacion", label: "Exteriorización", hint: "Convertir experiencia en conceptos, guías, modelos o registros." },
      { id: "combinacion", label: "Combinación", hint: "Integrar documentos, datos o fuentes explícitas para crear una nueva síntesis." },
      { id: "interiorizacion", label: "Interiorización", hint: "Aplicar documentos o modelos hasta incorporarlos como práctica personal." }
    ],
    cards: [
      { id: "u1-a", text: "Una profesora anticipa cuándo un grupo perderá motivación y cambia la dinámica sin consultar ningún manual.", answer: "tacito" },
      { id: "u1-b", text: "El comité publica un protocolo validado para acompañar proyectos híbridos y lo guarda con metadatos.", answer: "explicito" },
      { id: "u1-c", text: "Docentes jóvenes observan clases de una experta y luego conversan sobre sus decisiones pedagógicas.", answer: "socializacion" },
      { id: "u1-d", text: "Un equipo entrevista a investigadores senior y transforma sus criterios en una guía de buenas prácticas.", answer: "exteriorizacion" },
      { id: "u1-e", text: "La facultad cruza reportes, artículos y datos de uso para diseñar un nuevo tablero institucional.", answer: "combinacion" },
      { id: "u1-f", text: "Después de estudiar una guía, un equipo la aplica varias semanas hasta que la incorpora a su forma de trabajo.", answer: "interiorizacion" },
      { id: "u1-g", text: "Una coordinadora sabe detectar tensiones en reuniones híbridas por gestos mínimos y ajusta la mediación en tiempo real.", answer: "tacito" },
      { id: "u1-h", text: "El equipo fusiona rúbricas, datos de permanencia y actas de comité para crear una matriz de seguimiento académico.", answer: "combinacion" },
      { id: "u1-i", text: "Durante una mentoría, un docente novel aprende a formular preguntas observando cómo la experta conduce una tutoría.", answer: "socializacion" },
      { id: "u1-j", text: "Una práctica de retroalimentación queda convertida en plantilla, lista de verificación y ejemplo comentado para otros cursos.", answer: "exteriorizacion" }
    ]
  },
  2: {
    mode: "investigation",
    title: "Investigación del problema institucional",
    instruction: "Explora seis espacios de Universidad Horizonte, abre las evidencias y agrégalas al tablero de investigación. La unidad no avanza hasta que el diagnóstico esté completo.",
    locations: [
      {
        id: "docentes",
        icon: "01",
        place: "Sala de profesores",
        title: "Docente próximo a jubilarse",
        signal: "Saber experto en riesgo",
        capital: "Capital humano",
        explanation: "Tres docentes dominan metodologías híbridas, pero ese conocimiento sigue siendo tácito. Si no se socializa y documenta, la universidad pierde experiencia crítica."
      },
      {
        id: "repositorio",
        icon: "02",
        place: "Repositorio institucional",
        title: "Materiales dispersos",
        signal: "Memoria difícil de recuperar",
        capital: "Capital intelectual",
        explanation: "Existen guías, investigaciones y datos, pero no tienen metadatos, responsables ni taxonomía común. La información no se convierte en conocimiento reutilizable."
      },
      {
        id: "plataforma",
        icon: "03",
        place: "Aula virtual",
        title: "Plataforma sin responsables",
        signal: "Tecnología sin gobernanza",
        capital: "Ecosistema digital",
        explanation: "La universidad compró herramientas, pero no definió quién valida, actualiza o mide su uso. La tecnología aislada no transforma la cultura de aprendizaje."
      },
      {
        id: "aliados",
        icon: "04",
        place: "Mesa de aliados",
        title: "Aportes sin retorno",
        signal: "Confianza debilitada",
        capital: "Capital relacional",
        explanation: "Los aliados externos entregan experiencias, pero no reciben devolución ni evidencia de uso. El vínculo pierde valor si no hay aprendizaje mutuo."
      },
      {
        id: "investigacion",
        icon: "05",
        place: "Centro de investigación",
        title: "Investigaciones repetidas",
        signal: "Duplicación de esfuerzos",
        capital: "Capital intelectual",
        explanation: "Varios equipos resuelven problemas similares sin conocer trabajos previos. Falta una memoria institucional visible que conecte hallazgos y evite reprocesos."
      },
      {
        id: "estudiantes",
        icon: "06",
        place: "Atención estudiantil",
        title: "Recursos difíciles de encontrar",
        signal: "Accesibilidad baja",
        capital: "Gestión del conocimiento",
        explanation: "Los estudiantes no encuentran rutas, materiales ni respuestas consistentes. La gestión debe organizar acceso, calidad, comunicación y seguimiento."
      }
    ]
  }
};

window.KNOWLEDGE_REVIEW_DATA = {
  1: {
    mode: "decisionLab",
    title: "Comité de transferencia del conocimiento",
    instruction: "Resuelve decisiones situadas. Puedes pedir una pista, pero la respuesta final debe ser tu análisis.",
    decisions: [
      {
        prompt: "Un experto se jubila en dos meses y sus criterios solo aparecen cuando acompaña proyectos reales. ¿Qué acción priorizas?",
        options: ["Comprar licencias nuevas", "Mentorías observadas, entrevistas y documentación de casos", "Esperar a que entregue sus archivos personales", "Reducir la oferta de proyectos"],
        correct: 1,
        hint: "Piensa en socialización y exteriorización: primero observar, luego documentar.",
        feedback: "La mentoría captura conocimiento tácito y la documentación lo vuelve reutilizable."
      },
      {
        prompt: "La universidad tiene documentos, pero cada área usa nombres distintos y nadie encuentra lo necesario. ¿Qué mejora tiene mayor impacto?",
        options: ["Duplicar carpetas", "Crear metadatos, responsables y una taxonomía común", "Eliminar todo lo antiguo", "Usar solo mensajes de chat"],
        correct: 1,
        hint: "El problema no es cantidad de información, sino recuperación y calidad.",
        feedback: "La taxonomía y los metadatos convierten archivos en capital intelectual accesible."
      },
      {
        prompt: "Un equipo aplica una guía durante el semestre y al final ya resuelve casos sin volver a leerla. ¿Qué proceso SECI ocurrió?",
        options: ["Combinación", "Interiorización", "Socialización", "Exteriorización"],
        correct: 1,
        hint: "El documento explícito se volvió habilidad práctica.",
        feedback: "La interiorización ocurre cuando lo explícito se incorpora a la práctica."
      },
      {
        prompt: "Dos grupos investigan el mismo problema porque no conocen estudios previos guardados en carpetas separadas. ¿Qué decisión previene mejor la duplicación?",
        options: ["Crear un repositorio con metadatos, buscador y responsables de actualización", "Pedir que cada grupo trabaje aislado", "Eliminar los proyectos antiguos sin revisarlos", "Comprar licencias nuevas sin clasificar información"],
        correct: 0,
        hint: "El problema central es recuperar y reutilizar capital intelectual.",
        feedback: "Un repositorio con metadatos convierte información dispersa en memoria institucional accesible."
      }
    ]
  },
  2: {
    mode: "interventionRoute",
    title: "Construcción del ecosistema de conocimiento",
    instruction: "Ordena la ruta de intervención y ubica cada componente en el mapa institucional. Aquí no eliges opciones: construyes una arquitectura coherente.",
    steps: [
      { id: "riesgo", order: 1, title: "Identificar conocimiento en riesgo", detail: "Ubicar saber experto, documentos críticos y relaciones estratégicas vulnerables." },
      { id: "entrevistar", order: 2, title: "Entrevistar a personas expertas", detail: "Capturar experiencia mediante observación, conversaciones guiadas y mentorías." },
      { id: "documentar", order: 3, title: "Documentar experiencias", detail: "Convertir conocimiento tácito en guías, casos, protocolos y recursos reutilizables." },
      { id: "clasificar", order: 4, title: "Clasificar recursos", detail: "Usar metadatos, taxonomías, permisos y criterios de calidad." },
      { id: "transferir", order: 5, title: "Crear espacios de transferencia", detail: "Activar comunidades de práctica, mesas de aliados y aprendizaje entre pares." },
      { id: "implementar", order: 6, title: "Implementar herramientas", detail: "Integrar repositorio, LMS, analítica, IA y recursos inmersivos con gobernanza." },
      { id: "evaluar", order: 7, title: "Evaluar resultados", detail: "Medir reutilización, participación, confianza, accesibilidad y sostenibilidad." }
    ],
    zones: [
      { id: "personas", label: "Personas" },
      { id: "procesos", label: "Procesos" },
      { id: "conocimiento", label: "Conocimiento" },
      { id: "tecnologia", label: "Tecnología" },
      { id: "gobernanza", label: "Gobernanza" }
    ],
    components: [
      { id: "mentoria", label: "Programa de mentoría", zone: "personas", detail: "Conecta expertos con equipos que necesitan aprender haciendo." },
      { id: "comunidad", label: "Comunidad de práctica", zone: "personas", detail: "Mantiene conversación técnica y pedagógica alrededor de problemas comunes." },
      { id: "protocolo", label: "Protocolos de actualización", zone: "gobernanza", detail: "Define responsables, calidad, permisos y ciclos de revisión." },
      { id: "repositorio", label: "Repositorio con metadatos", zone: "conocimiento", detail: "Hace recuperables guías, investigaciones, casos y recursos institucionales." },
      { id: "analitica", label: "Sistema de analítica", zone: "tecnologia", detail: "Mide uso, reutilización y brechas de acceso." },
      { id: "aliados", label: "Mesa de aliados", zone: "procesos", detail: "Ordena devolución de resultados, acuerdos y transferencia externa." },
      { id: "ia", label: "Asistente de inteligencia artificial", zone: "tecnologia", detail: "Ayuda a buscar, orientar y recomendar recursos sin reemplazar la gobernanza humana." }
    ]
  }
};

window.KNOWLEDGE_CASE_SCENARIO = {
  organization: "Universidad Horizonte",
  title: "Rescate de la memoria institucional",
  summary: "La universidad debe proteger conocimiento experto, reducir duplicaciones y construir un ecosistema digital que conecte personas y aliados.",
  decisions: [
    {
      title: "Diagnóstico inicial",
      prompt: "Tres docentes expertos se jubilarán y gran parte de su metodología solo existe en su práctica cotidiana. ¿Qué riesgo debe atenderse primero?",
      options: [
        "Pérdida de capital humano y conocimiento tácito",
        "Falta de mobiliario en las oficinas",
        "Exceso de capital relacional",
        "Uso excesivo de documentos explícitos"
      ],
      correct: 0,
      rationale: "La experiencia experta vive en las personas. Antes de que se pierda, debe socializarse y exteriorizarse."
    },
    {
      title: "Intervención SECI",
      prompt: "¿Qué acción convierte mejor la experiencia docente en memoria institucional reutilizable?",
      options: [
        "Comprar otra plataforma sin plan de uso",
        "Realizar mentorías, entrevistas y laboratorios para producir guías y casos",
        "Guardar únicamente las hojas de vida",
        "Esperar a que cada facultad resuelva el problema por separado"
      ],
      correct: 1,
      rationale: "La mentoría favorece socialización y la documentación de casos permite exteriorización."
    },
    {
      title: "Arquitectura tecnológica",
      prompt: "¿Cuál ecosistema responde mejor al problema completo?",
      options: [
        "Repositorio con buscador, comunidad de práctica, LMS integrado y analítica de uso",
        "Una carpeta compartida sin responsables ni metadatos",
        "Un chat informal como única memoria institucional",
        "Equipos nuevos sin formación ni gobernanza"
      ],
      correct: 0,
      rationale: "La solución debe conectar almacenamiento, aprendizaje, colaboración, acceso y evaluación del uso."
    },
    {
      title: "Capital relacional",
      prompt: "Los aliados externos sienten que sus aportes desaparecen después de cada proyecto. ¿Qué decisión fortalece el capital relacional?",
      options: [
        "Cerrar el acceso a toda experiencia externa",
        "Crear mesas de conocimiento, acuerdos de retroalimentación y repositorios de resultados compartidos",
        "Enviar únicamente publicidad institucional",
        "Cambiar de aliados cada semestre"
      ],
      correct: 1,
      rationale: "La confianza se fortalece cuando los aportes circulan, producen resultados visibles y generan aprendizaje mutuo."
    },
    {
      title: "Sostenibilidad",
      prompt: "¿Qué indicador demuestra mejor que la estrategia está movilizando conocimiento?",
      options: [
        "Cantidad de plataformas compradas",
        "Número de archivos sin consultar",
        "Reutilización de recursos, participación entre áreas y reducción de trabajo duplicado",
        "Horas de conexión sin relación con resultados"
      ],
      correct: 2,
      rationale: "La gestión debe observar uso, transferencia, colaboración y mejoras reales, no solo infraestructura."
    }
  ]
};

window.KNOWLEDGE_AR_TARGETS = [
  {
    id: "humano",
    name: "Capital humano",
    image: "Recursos/nuevo/ar-capital-humano.webp",
    color: "#ff8c69",
    description: "Experiencia, habilidades, motivación, creatividad y capacidad de aprender.",
    detail: "En Universidad Horizonte, el capital humano está en la experiencia docente, la capacidad de diseñar clases híbridas, el liderazgo académico y la disposición para compartir saberes antes de que se pierdan.",
    characteristics: [
      "Vive principalmente en las personas y en su experiencia acumulada.",
      "Se fortalece con confianza, formación, mentoría y participación.",
      "Puede perderse cuando no existen mecanismos de transferencia."
    ],
    example: "Una docente experta sabe ajustar una clase híbrida cuando detecta baja participación. Si esa práctica se observa, se conversa y se documenta, deja de depender solo de ella.",
    facts: [
      "El conocimiento tácito vive en las personas y suele perderse si no se transfiere.",
      "La mentoría convierte experiencia individual en aprendizaje colectivo.",
      "La motivación y la confianza son condiciones para compartir conocimiento."
    ],
    risks: [
      "Jubilación o rotación sin captura de experiencia.",
      "Baja motivación para compartir saberes.",
      "Formación digital desconectada de necesidades reales."
    ],
    actions: [
      "Identifica expertos próximos a jubilarse.",
      "Diseña entrevistas, mentorías y comunidades de práctica.",
      "Registra buenas prácticas con ejemplos reales."
    ],
    resources: ["Modelo SECI", "Aprendizaje organizacional", "Comunidades de práctica"],
    challenge: "¿Qué saber depende hoy de una persona y podría perderse?"
  },
  {
    id: "intelectual",
    name: "Capital intelectual",
    image: "Recursos/nuevo/ar-capital-intelectual.webp",
    color: "#8f8cff",
    description: "Procesos, investigaciones, datos, propiedad intelectual y memoria reutilizable.",
    detail: "El capital intelectual convierte la experiencia en memoria institucional: protocolos, guías, investigaciones, repositorios, bases de datos, rutas de formación y criterios de calidad.",
    characteristics: [
      "Organiza conocimiento en recursos recuperables y reutilizables.",
      "Depende de metadatos, calidad, actualización y permisos claros.",
      "Permite aprender de experiencias anteriores sin repetir esfuerzos."
    ],
    example: "Si dos grupos investigan el mismo problema sin conocer trabajos previos, el repositorio debe conectar antecedentes, autores, hallazgos y recursos de aula.",
    facts: [
      "No todo archivo es conocimiento: debe ser claro, recuperable y aplicable.",
      "Los metadatos ayudan a encontrar y reutilizar recursos.",
      "La combinación SECI integra documentos para producir nuevo conocimiento."
    ],
    risks: [
      "Archivos dispersos que nadie consulta.",
      "Duplicación de investigaciones y materiales.",
      "Pérdida de calidad por falta de responsables."
    ],
    actions: [
      "Crea un repositorio con responsables y criterios de actualización.",
      "Clasifica recursos por programa, tema, autor y uso pedagógico.",
      "Relaciona documentos con problemas reales de la institución."
    ],
    resources: ["Repositorios institucionales", "Gestión documental", "Analítica de uso"],
    challenge: "¿Qué conocimiento debería quedar documentado y ser fácil de encontrar?"
  },
  {
    id: "relacional",
    name: "Capital relacional",
    image: "Recursos/nuevo/ar-capital-relacional.webp",
    color: "#48d6aa",
    description: "Confianza, redes y aprendizaje con estudiantes, aliados y comunidades.",
    detail: "El capital relacional aparece cuando estudiantes, egresados, aliados, comunidades y docentes producen confianza, retroalimentación y proyectos que generan valor para todos.",
    characteristics: [
      "Se basa en confianza, reciprocidad y comunicación sostenida.",
      "Conecta la universidad con estudiantes, egresados, comunidades y aliados.",
      "Produce valor cuando las relaciones generan aprendizaje compartido."
    ],
    example: "Un aliado externo entrega datos para un proyecto; la universidad devuelve resultados, crea un caso de clase y abre una mesa de mejora conjunta.",
    facts: [
      "Una red sin confianza no moviliza conocimiento.",
      "Los aliados aportan experiencia externa y validan necesidades reales.",
      "La transferencia de conocimiento requiere diálogo, seguimiento y retorno."
    ],
    risks: [
      "Relaciones utilizadas solo para cumplir requisitos.",
      "Aportes externos sin retroalimentación.",
      "Pérdida de legitimidad y colaboración futura."
    ],
    actions: [
      "Crea mesas de conocimiento con aliados estratégicos.",
      "Devuelve resultados a las comunidades participantes.",
      "Convierte experiencias externas en casos de aprendizaje."
    ],
    resources: ["Alianzas académicas", "Transferencia social", "Proyectos colaborativos"],
    challenge: "¿Qué relación estratégica puede producir conocimiento compartido?"
  },
  {
    id: "digital",
    name: "Ecosistema digital",
    image: "Recursos/nuevo/ar-ecosistema-digital.webp",
    color: "#56b8ff",
    description: "Plataformas, IA, analítica, simulación y colaboración conectadas con un propósito.",
    detail: "El ecosistema digital integra LMS, repositorios, asistentes de IA, analítica, simuladores y recursos inmersivos para que el conocimiento sea accesible, seguro y útil.",
    characteristics: [
      "Integra herramientas con procesos académicos y reglas de uso.",
      "Facilita acceso, colaboración, trazabilidad y evaluación.",
      "Necesita formación, accesibilidad, seguridad y soporte continuo."
    ],
    example: "Un LMS conectado con repositorio, analítica y asistente de IA permite ubicar recursos, recomendar rutas y detectar qué materiales necesitan actualización.",
    facts: [
      "Comprar tecnología no transforma la cultura por sí sola.",
      "La analítica ayuda a saber qué recursos se consultan y reutilizan.",
      "La accesibilidad permite que más estudiantes participen en igualdad de condiciones."
    ],
    risks: [
      "Herramientas compradas sin propósito pedagógico.",
      "Datos sin protección ni criterios de calidad.",
      "Brechas de acceso para estudiantes o docentes."
    ],
    actions: [
      "Define una arquitectura con responsables, permisos y objetivos.",
      "Integra herramientas con procesos formativos y de investigación.",
      "Evalúa uso, impacto y calidad de los recursos digitales."
    ],
    resources: ["LMS", "Repositorios", "IA educativa", "Realidad aumentada"],
    challenge: "¿Qué herramienta facilita acceso y aplicación, no solo almacenamiento?"
  }
];

window.CAPITAL_MATRIX_DATA = {
  scale: [
    { value: 1, label: "Muy bajo" },
    { value: 2, label: "Bajo" },
    { value: 3, label: "Medio" },
    { value: 4, label: "Alto" },
    { value: 5, label: "Muy alto" }
  ],
  capitals: [
    {
      id: "human",
      name: "Capital humano",
      subtitle: "Habilidades, talentos, valores y competencias personales",
      color: "#72c985",
      aspects: [
        "Liderazgo",
        "Comunicación",
        "Trabajo en equipo",
        "Creatividad",
        "Resolución de problemas",
        "Empatía",
        "Adaptabilidad al cambio",
        "Inteligencia emocional",
        "Capacidad de aprendizaje",
        "Ética profesional"
      ]
    },
    {
      id: "intellectual",
      name: "Capital intelectual",
      subtitle: "Conocimientos, formación y experiencia acumulada",
      color: "#aa78d6",
      aspects: [
        "Estudios realizados",
        "Cursos y diplomados",
        "Certificaciones",
        "Experiencia laboral",
        "Experiencia investigativa",
        "Producción académica",
        "Manejo tecnológico",
        "Conocimiento disciplinar",
        "Formación continua",
        "Capacidad para enseñar"
      ]
    },
    {
      id: "relational",
      name: "Capital relacional",
      subtitle: "Relaciones, redes y conexiones que generan valor",
      color: "#f0aa45",
      aspects: [
        "Relaciones familiares",
        "Amistades significativas",
        "Relaciones laborales",
        "Relaciones académicas",
        "Participación en comunidades",
        "Redes profesionales",
        "Trabajo colaborativo",
        "Capacidad para generar confianza",
        "Capacidad para ayudar a otros",
        "Reconocimiento social"
      ]
    }
  ],
  reflections: [
    "¿Qué descubrí sobre mi capital personal que antes no valoraba?",
    "¿Cuál de los tres capitales considero más fortalecido?",
    "¿Cuál necesita mayor desarrollo y por qué?",
    "¿Qué acciones concretas puedo realizar durante los próximos dos años para fortalecer mi capital intelectual?",
    "¿Cómo contribuyen mis relaciones personales y profesionales a mi felicidad y bienestar?",
    "¿Por qué las organizaciones deben valorar a las personas más allá de los recursos económicos?",
    "Desde los aportes de Nonaka y Takeuchi, ¿por qué el conocimiento de las personas es considerado el activo más importante de una organización?"
  ]
};
