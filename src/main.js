// ==========================================
// 1. BASE DE DATOS TEÓRICA (MAPAS MENTALES)
// ==========================================
function slideGallery(folder, title, description, slideNumbers) {
  return {
    type: "gallery",
    title,
    description,
    slides: slideNumbers.map(number => `Recursos/${folder}/slide-${String(number).padStart(2, "0")}.png`)
  };
}

function flourishingGallery(title, description, slideNumbers) {
  return slideGallery("flourishing", title, description, slideNumbers);
}

function unitTwoGallery(title, description, slideNumbers) {
  return slideGallery("unidad-2/slides", title, description, slideNumbers);
}

function unitThreeGallery(title, description, slideNumbers) {
  return slideGallery("unidad-3/slides", title, description, slideNumbers);
}

const legacyCourseData = {
  1: {
    title: "Fundamentos de la Psicología Positiva",
    desc: "La psicología positiva estudia fortalezas humanas, emociones positivas y factores que permiten alcanzar bienestar y felicidad.",
    theoryNodes: [
      {
        id: "1.1",
        title: "¿Qué es la Psicología Positiva?",
        learnMoreResources: [
          {
            type: "image",
            title: "Principios de la Psicología Positiva",
            description: "Síntesis visual sobre el cambio de paradigma, el modelo PERMA, el estado de Flow, las acciones intencionales y el lenguaje positivo.",
            imageUrl: "Recursos/Principios_de_la_Psicología_Positiva.png"
          },
          flourishingGallery(
            "Origen y propósito de la Psicología Positiva",
            "Recorrido visual desde el enfoque centrado en reparar hasta la ciencia del florecimiento humano.",
            [1, 2, 3, 4]
          )
        ],
        learnMoreVideo: {
          title: "Aprende más: Psicología Positiva",
          description: "Video de apoyo para ampliar la primera tarjeta de teoría de la Unidad 1.",
          embedUrl: "https://www.youtube.com/embed/cSm4YE0hI6A",
          source: "YouTube"
        },
        content: `<p>La Psicología Positiva es una corriente de la psicología científica que estudia las emociones positivas, las fortalezas humanas y las condiciones que favorecen el bienestar y la felicidad.</p>
        <p>Según <strong>Martin Seligman (1998)</strong>, busca comprender y promover los factores que permiten a las personas y comunidades prosperar. Su objetivo no es únicamente tratar enfermedades mentales, sino potenciar las capacidades humanas y mejorar la calidad de vida.</p>
        <p>Seligman plantea que la psicología no debe limitarse a reparar lo que está mal, sino también construir lo mejor de la vida. Sonja Lyubomirsky afirma que la felicidad puede desarrollarse mediante actividades intencionales y hábitos positivos.</p>
        <p>Mihaly Csikszentmihalyi define la felicidad como un estado de experiencia óptima llamado <strong>Flow</strong>, donde la persona alcanza concentración profunda, satisfacción y motivación intrínseca. Tal Ben-Shahar considera que la felicidad puede aprenderse mediante equilibrio emocional, relaciones humanas y propósito de vida.</p>
        <h3>Historia</h3>
        <p>La Psicología Positiva surge oficialmente en 1998 cuando Martin Seligman propone cambiar el enfoque tradicional centrado solo en enfermedades y trastornos.</p>
        <ul><li>Antecedentes: filosofía griega, eudaimonía de Aristóteles, psicología humanista de Maslow y Rogers.</li><li>Estudia felicidad, optimismo, resiliencia, gratitud, esperanza, fortalezas personales y bienestar subjetivo.</li><li>Se aplica en educación, organizaciones, salud, neurociencias y desarrollo humano.</li></ul>`
      },
      {
        id: "1.2",
        title: "Mensaje Positivo y Comunicación",
        learnMoreResources: [
          flourishingGallery(
            "Lenguaje positivo y comunicación asertiva",
            "Tres vistas para comprender el optimismo aprendido, el impacto emocional de las palabras y la comunicación basada en empatía, respeto y escucha activa.",
            [9, 10, 11]
          )
        ],
        content: `<h3>Lenguaje positivo</h3>
        <p>El lenguaje positivo consiste en utilizar palabras y expresiones que generan bienestar, motivación y confianza. Según Tal Ben-Shahar, las palabras influyen directamente en las emociones y en la construcción de relaciones saludables.</p>
        <p>Martin Seligman afirma que el optimismo aprendido se desarrolla mediante el cambio del lenguaje interno negativo por pensamientos positivos y realistas.</p>
        <ul><li>Ejemplos: “Puedo mejorar”, “Voy a intentarlo nuevamente”, “Confío en mis capacidades”.</li><li>Favorece autoestima, motivación, resiliencia, aprendizaje y convivencia.</li></ul>
        <h3>Comunicación asertiva</h3>
        <p>La comunicación asertiva es la capacidad de expresar ideas, emociones y opiniones de manera clara, respetuosa y empática. Carl Rogers destaca que la comunicación debe promover aceptación y comprensión emocional.</p>
        <ul><li>Características: respeto mutuo, escucha activa, claridad, empatía y honestidad emocional.</li><li>Mejora relaciones interpersonales, trabajo colaborativo, resolución de conflictos y bienestar emocional.</li></ul>
        <h3>Impacto emocional de las palabras</h3>
        <p>Las palabras generan efectos emocionales y psicológicos. Según las neurociencias, el cerebro responde emocionalmente al lenguaje positivo y negativo. Daniel Kahneman plantea que las experiencias emocionales quedan almacenadas en la memoria y afectan la percepción de felicidad.</p>`
      },
      {
        id: "1.3",
        title: "Marco Teórico",
        learnMoreResources: [
          {
            type: "image",
            title: "Fundamentos de la Psicología Positiva",
            description: "Mapa visual de los aportes de Seligman, Csikszentmihalyi y Lyubomirsky: PERMA, Flow y actividades intencionales.",
            imageUrl: "Recursos/Fundamentos_de_la_Psicología_Positiva.png"
          },
          flourishingGallery(
            "Modelos centrales del bienestar",
            "Ampliación visual del 40% de actividades intencionales, los cinco pilares PERMA y el equilibrio entre reto y habilidad en el Flow.",
            [6, 7, 8]
          )
        ],
        content: `<h3>Martin Seligman</h3>
        <p>Desarrolla la teoría del bienestar PERMA: <strong>P</strong> emociones positivas, <strong>E</strong> compromiso, <strong>R</strong> relaciones positivas, <strong>M</strong> significado o propósito de vida y <strong>A</strong> logro. Sostiene que la felicidad puede aprenderse mediante hábitos positivos.</p>
        <h3>Mihaly Csikszentmihalyi</h3>
        <p>Desarrolla la teoría del Flow, un estado mental de concentración profunda donde la persona pierde la noción del tiempo, disfruta la actividad y alcanza satisfacción personal. Aparece cuando existe equilibrio entre habilidad, reto, motivación y concentración.</p>
        <h3>Tal Ben-Shahar</h3>
        <p>Define la felicidad como la experiencia general de placer y significado. Plantea que depende de relaciones humanas, gratitud, actividad física, propósito y bienestar emocional.</p>
        <h3>Sonja Lyubomirsky</h3>
        <p>Afirma que el 50% de la felicidad depende de genética, el 10% de circunstancias externas y el 40% de actividades intencionales. Destaca gratitud, optimismo, altruismo y pensamiento positivo.</p>`
      },
      {
        id: "1.4",
        title: "Métodos de Investigación",
        learnMoreResources: [
          flourishingGallery(
            "El rigor empírico del bienestar",
            "Resumen visual de los métodos cuantitativos, cualitativos, experimentales y de observación utilizados por la Psicología Positiva.",
            [5]
          )
        ],
        content: `<p>La Psicología Positiva utiliza distintos métodos para estudiar bienestar, emociones y experiencias humanas.</p>
        <ul><li><strong>Métodos cuantitativos:</strong> analizan datos numéricos, encuestas, escalas psicológicas, mediciones objetivas y análisis estadístico.</li><li><strong>Métodos cualitativos:</strong> comprenden experiencias humanas mediante entrevistas, observación, grupos focales y análisis de experiencias.</li><li><strong>Estudios experimentales:</strong> investigan causa y efecto con grupos experimentales, grupos control y manipulación de variables.</li><li><strong>Observación:</strong> analiza conductas en contextos reales; puede ser participante, no participante, estructurada o abierta.</li></ul>`
      },
      {
        id: "1.5",
        title: "La idea del hombre en la Psicología Positiva",
        learnMoreResources: [
          flourishingGallery(
            "Fortalezas y ser humano integral",
            "Vistas sobre fortalezas personales, dimensiones del ser humano y el bienestar entendido como una construcción consciente.",
            [12, 13, 14]
          )
        ],
        content: `<h3>Ser humano integral</h3>
        <p>La Psicología Positiva considera al ser humano como un ser integral con dimensiones emocionales, cognitivas, sociales, físicas y espirituales. Abraham Maslow señala que las personas buscan autorrealización y desarrollo pleno.</p>
        <h3>Desarrollo humano</h3>
        <p>Implica crecimiento personal y fortalecimiento de capacidades. Según Seligman, el bienestar requiere emociones positivas, relaciones saludables, sentido de vida y metas personales.</p>
        <h3>Fortalezas personales</h3>
        <p>Son capacidades positivas que ayudan a enfrentar desafíos. Seligman y Peterson clasifican fortalezas como valentía, gratitud, creatividad, liderazgo, perseverancia, empatía y amor por el aprendizaje.</p>`
      }
    ],
    quiz: [
      { q: "La psicología positiva se caracteriza por:", options: ["Estudiar solo enfermedades", "Potenciar fortalezas y bienestar", "Rechazar emociones", "Analizar conductas negativas"], correct: 1 },
      { q: "Autor del modelo PERMA:", options: ["Daniel Goleman", "Mihaly Csikszentmihalyi", "Martin Seligman", "Tal Ben-Shahar"], correct: 2 },
      { q: "El modelo PERMA incluye:", options: ["Emociones, Compromiso, Relaciones, Sentido, Logro", "Dinero, Éxito, Poder, Fama", "Estrés, Rutina, Aislamiento", "Ninguna de las anteriores"], correct: 0 },
      { q: "Según Lyubomirsky, el 40% de la felicidad depende de:", options: ["Genética", "Circunstancias externas", "Actividades intencionales", "La suerte"], correct: 2 },
      { q: "El estado de Flow se relaciona con:", options: ["Desconexión total", "Falta de motivación", "Concentración profunda y disfrute", "Repetición mecánica"], correct: 2 },
      { q: "La comunicación asertiva implica:", options: ["Imponer opiniones", "Claridad, respeto y empatía", "Evitar toda emoción", "Responder con agresividad"], correct: 1 },
      { q: "Las fortalezas personales ayudan a:", options: ["Enfrentar desafíos y crecer", "Eliminar el aprendizaje", "Evitar relaciones", "Reducir la motivación"], correct: 0 },
      { q: "La psicología positiva complementa a la psicología tradicional porque:", options: ["La reemplaza por completo", "También estudia bienestar y capacidades", "Niega la salud mental", "Solo analiza estadísticas"], correct: 1 },
      { q: "Un método cualitativo permite estudiar:", options: ["Solo números", "Experiencias y percepciones", "Bases de datos únicamente", "Resultados automáticos"], correct: 1 },
      { q: "El lenguaje positivo puede fortalecer:", options: ["Autoestima y resiliencia", "Desconfianza", "Aislamiento", "Desmotivación"], correct: 0 }
    ],
    media: [
      {
        type: "video",
        title: "Martin Seligman: nueva era de la psicología positiva",
        description: "Video base para comprender el origen del enfoque positivo, las fortalezas humanas y el bienestar.",
        embedUrl: "https://www.youtube.com/embed/9FBxfd7DL3E",
        source: "TED"
      },
      {
        type: "infografia",
        title: "Infografía 1.1: Psicología Positiva",
        description: "Vista visual del concepto, historia y propósito de la psicología positiva.",
        imageUrl: "Recursos/infografia unidad 1.png",
        content: "<p>Esta infografía acompaña el subtema 1.1. Úsala para recordar visualmente qué estudia la Psicología Positiva y por qué se centra en fortalezas, bienestar y felicidad.</p>"
      },
      {
        type: "infografia",
        title: "Infografía 1.2: Mensaje positivo",
        description: "Vista visual sobre lenguaje positivo, comunicación asertiva e impacto de las palabras.",
        imageUrl: "Recursos/infografia unidad 1.2.png",
        content: "<p>Esta vista refuerza el subtema 1.2: lenguaje positivo, comunicación asertiva y el efecto emocional de las palabras en el aprendizaje y la convivencia.</p>"
      },
      {
        type: "infografia",
        title: "Infografía 1.3: Marco teórico",
        description: "Vista visual de Seligman, Csikszentmihalyi, Ben-Shahar y Lyubomirsky.",
        imageUrl: "Recursos/infografia unidad 1.3.png",
        content: "<p>Esta infografía resume los autores principales: PERMA, Flow, felicidad como placer y significado, y actividades intencionales.</p>"
      },
      {
        id: "gratitude-journal",
        type: "actividad",
        activityKind: "gratitudeJournal",
        title: "Bitácora de gratitud",
        description: "Actividad breve para conectar la teoría con una experiencia positiva personal.",
        content: "<p>Registra tres situaciones positivas de tu día, una fortaleza personal que usaste y una acción de gratitud. Esta actividad conecta con Sonja Lyubomirsky y los hábitos positivos.</p><ul><li>¿Qué ocurrió?</li><li>¿Qué emoción positiva sentiste?</li><li>¿Qué fortaleza utilizaste?</li><li>¿Cómo puedes repetir esa acción durante la semana?</li></ul>"
      }
    ]
  },
  2: {
    title: "La felicidad: ciencia y práctica",
    desc: "Estado de bienestar subjetivo influenciado por pensamientos, genética, neurociencias y relaciones.",
    theoryNodes: [
      {
        id: "2.1",
        title: "Enfoques de la felicidad",
        learnMoreVideo: {
          title: "Aprende más: ciencia de la felicidad",
          description: "Video de apoyo proporcionado para ampliar los enfoques científicos del bienestar en la Unidad 2.",
          embedUrl: "https://www.youtube.com/embed/sK9iKV2p9MU",
          source: "YouTube"
        },
        learnMoreResources: [
          {
            type: "image",
            title: "La ciencia y práctica del bienestar",
            description: "Síntesis visual de los pilares científicos, la percepción cognitiva, los hábitos y la dinámica de la felicidad.",
            imageUrl: "Recursos/La_Ciencia_de_la_Felicidad.png"
          },
          unitTwoGallery("Enfoques científicos de la felicidad", "De la definición multidimensional a los aportes de la Psicología Positiva, la Psicología Cognitiva y las Neurociencias.", [1, 2, 3, 4, 5, 13])
        ],
        content: `<p>La felicidad ha sido estudiada desde diferentes disciplinas científicas y humanísticas. Entre los enfoques más importantes están la Psicología Positiva, la Psicología Cognitiva y las Neurociencias.</p><h3>Psicología Positiva</h3><p>Estudia fortalezas humanas, emociones positivas y factores que permiten alcanzar bienestar y satisfacción personal. Martin Seligman define la felicidad como desarrollo del bienestar integral mediante emociones positivas, compromiso, relaciones saludables, sentido de vida y logros.</p><h3>Psicología Cognitiva</h3><p>Estudia pensamiento, memoria, percepción, aprendizaje, razonamiento y toma de decisiones. Aaron Beck y Albert Ellis demostraron que los pensamientos influyen directamente en emociones y comportamientos.</p><h3>Neurociencias</h3><p>Analizan cómo emociones, pensamientos y conductas se relacionan con procesos cerebrales. La felicidad involucra dopamina, serotonina, oxitocina y endorfinas. Richard Davidson destaca la plasticidad neuronal.</p>`
      },
      {
        id: "2.2",
        title: "El Gen de la felicidad",
        learnMoreResources: [
          {
            type: "image",
            title: "¿Qué determina nuestro bienestar?",
            description: "Vista visual de genética, circunstancias, vínculos, neurotransmisores, acciones intencionales y reentrenamiento cognitivo.",
            imageUrl: "Recursos/La_Ciencia_de_la_Felicidad (1).png"
          },
          unitTwoGallery("Biología, entorno y agencia personal", "Química cerebral, proporción 50-10-40, factores sociales y hábitos que favorecen la plasticidad neuronal.", [6, 7, 8, 14])
        ],
        content: `<p>El “gen de la felicidad” hace referencia a la influencia genética y biológica sobre el bienestar humano. Sonja Lyubomirsky plantea que la felicidad depende de factores biológicos, ambientales y sociales.</p><h3>Factores biológicos</h3><p>Incluyen genética, funcionamiento cerebral, hormonas y neurotransmisores. Aproximadamente el 50% de la felicidad se relaciona con predisposición genética.</p><ul><li>Serotonina: bienestar emocional.</li><li>Dopamina: placer y motivación.</li><li>Oxitocina: vínculos afectivos.</li><li>Endorfinas: sensación de bienestar.</li></ul><h3>Factores ambientales y sociales</h3><p>Las condiciones externas influyen, pero no determinan completamente la felicidad. Las relaciones humanas, el apoyo familiar, la amistad, la cultura y la participación comunitaria fortalecen el bienestar.</p>`
      },
      {
        id: "2.3",
        title: "Gráfico de la felicidad",
        learnMoreResources: [
          unitTwoGallery("Curva emocional y satisfacción vital", "Fluctuaciones emocionales y equilibrio entre condiciones objetivas y percepciones personales.", [9, 10])
        ],
        content: `<p>El gráfico de la felicidad representa cómo varían las emociones y los niveles de satisfacción a lo largo del tiempo. Permite comprender que la felicidad no es permanente, sino dinámica y cambiante.</p><h3>Curva emocional</h3><p>Según Daniel Kahneman, las experiencias emocionales tienen picos, momentos de intensidad y recuerdos significativos. Las emociones fluctúan por experiencias personales, relaciones, logros, estrés y acontecimientos cotidianos.</p><h3>Variables de satisfacción</h3><p>Incluyen salud física, relaciones sociales, autoestima, logros personales, estabilidad emocional, trabajo, educación y propósito de vida. Ed Diener afirma que la satisfacción con la vida es un indicador central de felicidad.</p>`
      },
      {
        id: "2.4",
        title: "Medición de la felicidad",
        learnMoreResources: [
          unitTwoGallery("Instrumentos e indicadores de bienestar", "Inventarios, escalas psicológicas, indicadores globales y criterios científicos para estudiar la felicidad.", [11, 12, 15])
        ],
        content: `<p>La felicidad puede evaluarse científicamente mediante instrumentos psicológicos y escalas de bienestar.</p><h3>Inventarios</h3><p>Cuestionarios diseñados para medir emociones, satisfacción y bienestar psicológico, como el Inventario de Felicidad de Oxford, la Escala de Bienestar Psicológico y cuestionarios de satisfacción vital.</p><h3>Escalas psicológicas</h3><p>Ed Diener desarrolló la Escala de Satisfacción con la Vida. Sonja Lyubomirsky creó instrumentos relacionados con bienestar subjetivo y felicidad.</p><h3>Indicadores de bienestar</h3><p>Incluyen salud física, estabilidad emocional, relaciones sociales, productividad, educación y satisfacción personal. Bután implementó el índice de Felicidad Nacional Bruta.</p>`
      }
    ],
    quiz: [
      { q: "Neurotransmisor asociado al placer y motivación:", options: ["Cortisol", "Adrenalina", "Dopamina", "Melatonina"], correct: 2 },
      { q: "Según neurociencias, el cerebro puede modificar sus conexiones mediante:", options: ["Cirugías", "Plasticidad neuronal", "Aislamiento", "Medicamentos"], correct: 1 },
      { q: "Porcentaje de felicidad que depende de genética:", options: ["10%", "100%", "40%", "50%"], correct: 3 },
      { q: "Habla del 'yo que experimenta' y el 'yo que recuerda':", options: ["Daniel Kahneman", "Carl Rogers", "Abraham Maslow", "Albert Ellis"], correct: 0 },
      { q: "País famoso por su índice de Felicidad Nacional Bruta:", options: ["Colombia", "Bután", "Noruega", "Japón"], correct: 1 },
      { q: "La felicidad se considera dinámica porque:", options: ["Nunca cambia", "Varía con experiencias y contextos", "Depende solo del dinero", "No puede estudiarse"], correct: 1 },
      { q: "Las relaciones sociales fuertes suelen asociarse con:", options: ["Mayor bienestar", "Menor apoyo emocional", "Aislamiento", "Ausencia de sentido"], correct: 0 },
      { q: "La serotonina se relaciona con:", options: ["Bienestar emocional", "Memoria mecánica", "Miedo permanente", "Bloqueo físico"], correct: 0 },
      { q: "Las escalas psicológicas sirven para:", options: ["Medir bienestar y satisfacción", "Eliminar emociones", "Reemplazar la reflexión", "Evitar datos"], correct: 0 },
      { q: "Daniel Kahneman diferencia entre:", options: ["Yo que experimenta y yo que recuerda", "Yo físico y yo virtual", "Yo externo y yo oculto", "Yo social y yo financiero"], correct: 0 }
    ],
    media: [
      {
        type: "video",
        title: "Robert Waldinger: ¿qué hace una buena vida?",
        description: "Recurso para analizar felicidad, relaciones humanas y bienestar desde un estudio longitudinal.",
        embedUrl: "https://www.youtube.com/embed/8KkKuTCFvzI",
        source: "TED"
      },
      {
        type: "infografia",
        title: "Felicidad y bienestar humano",
        description: "Infografía sobre emociones, pensamiento, procesos biológicos, relaciones, redes neuronales y escalas de bienestar.",
        imageUrl: "Recursos/infografia recursus del modulo.png",
        content: "<p>Este recurso integra los enfoques de la Unidad 2 y muestra cómo el bienestar se relaciona con el cerebro, las emociones, las redes sociales y la medición científica.</p>"
      },
      {
        id: "personal-happiness-curve",
        type: "actividad",
        activityKind: "happinessCurve",
        title: "Curva personal de felicidad",
        description: "Ejercicio interactivo para ubicar momentos de bienestar, estrés, aprendizaje, superación y logro."
      }
    ]
  },
  3: {
    title: "Felicidad y Bienestar Subjetivo",
    desc: "Evaluación personal de la vida, motivación, hábitos positivos y el poder de la inteligencia emocional.",
    theoryNodes: [
      {
        id: "3.1",
        title: "Bienestar subjetivo",
        learnMoreVideo: {
          title: "Aprende más: bienestar y felicidad",
          description: "Video de apoyo proporcionado para ampliar los pilares del bienestar subjetivo en la Unidad 3.",
          embedUrl: "https://www.youtube.com/embed/iyAZbuUlJTU",
          source: "YouTube"
        },
        learnMoreResources: [
          {
            type: "image",
            title: "Pilares de la felicidad y el bienestar subjetivo",
            description: "Mapa visual del bienestar subjetivo, PERMA, propósito, Flow, motivación, hábitos e inteligencia emocional.",
            imageUrl: "Recursos/Pilares_de_felicidad_y_bienestar.png"
          },
          unitThreeGallery("Arquitectura del bienestar subjetivo", "Visión integral del bienestar, sus dimensiones, el modelo PERMA y la relación entre los conceptos centrales.", [1, 2, 3, 4, 13, 15])
        ],
        content: `<p>El bienestar subjetivo hace referencia a la manera como las personas evalúan y perciben su propia vida, considerando emociones, satisfacción personal y equilibrio emocional.</p><p>Ed Diener lo define como la evaluación que las personas hacen de sus vidas, incluyendo juicios cognitivos y respuestas emocionales.</p><ul><li>Incluye satisfacción con la vida, emociones positivas, emociones negativas, percepción de felicidad y calidad de vida.</li><li>Se relaciona con PERMA: emociones positivas, compromiso, relaciones, significado y logros.</li></ul>`
      },
      {
        id: "3.2",
        title: "Flow y experiencia óptima",
        learnMoreResources: [
          unitThreeGallery("Mecánica y canal del Flow", "Características de la experiencia óptima, equilibrio entre reto y habilidad y beneficios para el aprendizaje y la creatividad.", [5, 6])
        ],
        content: `<p>El Flow fue desarrollado por Mihaly Csikszentmihalyi y se define como un estado de concentración profunda y disfrute total durante una actividad.</p><ul><li>Concentración absoluta.</li><li>Equilibrio entre reto y habilidad.</li><li>Pérdida de noción del tiempo.</li><li>Motivación intrínseca.</li><li>Sensación de control.</li></ul><p>Favorece creatividad, aprendizaje, autoestima, motivación y felicidad.</p>`
      },
      {
        id: "3.3",
        title: "Motivación y propósito de vida",
        learnMoreResources: [
          unitThreeGallery("Motivación y brújula existencial", "Comparación entre motivación intrínseca y extrínseca, y el propósito como fuente de dirección, resiliencia y sentido.", [7, 8])
        ],
        content: `<p>La motivación es la fuerza interna que impulsa a las personas a actuar, alcanzar metas y satisfacer necesidades. Herbert Petri la define como procesos que activan, dirigen y mantienen la conducta.</p><h3>Tipos de motivación</h3><p>La motivación intrínseca nace de la satisfacción personal. La motivación extrínseca depende de recompensas externas.</p><h3>Propósito de vida</h3><p>Viktor Frankl afirma: “Quien tiene un porqué para vivir, puede soportar casi cualquier cómo”. El propósito orienta decisiones, fortalece resiliencia, aumenta motivación y mejora bienestar psicológico.</p>`
      },
      {
        id: "3.4",
        title: "Hábitos de felicidad e inteligencia emocional",
        learnMoreResources: [
          {
            type: "image",
            title: "Los cinco pilares del bienestar y la felicidad",
            description: "Síntesis visual de Flow, propósito, hábitos positivos e inteligencia emocional.",
            imageUrl: "Recursos/Los_5_Pilares_del_Bienestar.png"
          },
          unitThreeGallery("Hábitos e inteligencia emocional", "Prácticas intencionales, auditoría de hábitos, componentes emocionales y aplicación del bienestar consciente.", [9, 10, 11, 12, 14])
        ],
        content: `<h3>Hábitos de felicidad</h3><p>Son acciones repetidas que favorecen bienestar emocional y calidad de vida. Sonja Lyubomirsky sostiene que la felicidad puede cultivarse mediante actividades intencionales.</p><ul><li>Gratitud, optimismo, actividad física, relaciones positivas, meditación, altruismo y buen descanso.</li></ul><h3>Inteligencia emocional</h3><p>Es la capacidad para reconocer, comprender y manejar emociones propias y ajenas. Daniel Goleman afirma que el éxito personal depende tanto de habilidades emocionales como de capacidades intelectuales.</p><ul><li>Componentes: autoconocimiento, autorregulación, motivación, empatía y habilidades sociales.</li></ul>`
      }
    ],
    quiz: [
      { q: "El concepto de 'Flow' fue desarrollado por:", options: ["Daniel Goleman", "Mihaly Csikszentmihalyi", "Viktor Frankl", "Ed Diener"], correct: 1 },
      { q: "Motivación que nace de la satisfacción personal:", options: ["Extrínseca", "Laboral", "Intrínseca", "Económica"], correct: 2 },
      { q: "Autor de: 'Quien tiene un porqué para vivir...':", options: ["Martin Seligman", "Viktor Frankl", "Carl Rogers", "Tal Ben-Shahar"], correct: 1 },
      { q: "Popularizó la Inteligencia Emocional:", options: ["Daniel Goleman", "Aaron Beck", "Albert Ellis", "Ed Diener"], correct: 0 },
      { q: "NO es un componente de la inteligencia emocional:", options: ["Empatía", "Autorregulación", "Autoconocimiento", "Memoria fotográfica"], correct: 3 },
      { q: "El bienestar subjetivo fue trabajado por:", options: ["Ed Diener", "Nonaka", "Schumpeter", "Sveiby"], correct: 0 },
      { q: "La motivación intrínseca nace de:", options: ["Satisfacción personal", "Premios externos únicamente", "Castigos", "Obligación sin sentido"], correct: 0 },
      { q: "Un hábito positivo puede ser:", options: ["Gratitud diaria", "Aislamiento total", "Queja constante", "Evitar metas"], correct: 0 },
      { q: "La inteligencia emocional ayuda a:", options: ["Reconocer y manejar emociones", "Ignorar relaciones", "Evitar empatía", "Eliminar el autocontrol"], correct: 0 },
      { q: "El propósito de vida se relaciona con:", options: ["Sentido y motivación", "Rutina sin metas", "Desinterés", "Ausencia de valores"], correct: 0 }
    ],
    media: [
      {
        type: "video",
        title: "Mihaly Csikszentmihalyi: Flow, el secreto de la felicidad",
        description: "Video para comprender experiencia óptima, concentración, reto y motivación intrínseca.",
        embedUrl: "https://www.youtube.com/embed/fXIeFJCqsPs",
        source: "TED"
      },
      {
        type: "infografia",
        title: "Pilares de la felicidad humana",
        description: "Infografía integradora sobre bienestar subjetivo, Flow, motivación, hábitos positivos e inteligencia emocional.",
        imageUrl: "Recursos/infografia recursus del modulo unidad 3.png",
        content: "<p>Esta infografía resume los cinco ejes principales de la Unidad 3 y muestra prácticas conscientes para fortalecer el bienestar.</p>"
      },
      {
        id: "positive-habits-plan",
        type: "actividad",
        activityKind: "positiveHabitsPlan",
        title: "Plan de hábitos positivos",
        description: "Actividad interactiva para diseñar una práctica semanal de bienestar subjetivo."
      }
    ]
  },
  4: {
    title: "Gestión del Conocimiento",
    desc: "Cómo las organizaciones crean y comparten saberes para generar innovación.",
    theoryNodes: [
      { id: "4.1", title: "Tipos de Conocimiento", content: "<p>Tácito (experiencia) y Explícito (documentado).</p>" },
      { id: "4.2", title: "Modelo SECI", content: "<p>Socialización, Exteriorización, Combinación, Interiorización (Nonaka y Takeuchi).</p>" },
      { id: "4.3", title: "Aprendizaje Organizacional", content: "<p>Organizaciones Inteligentes (Peter Senge).</p>" },
      { id: "4.4", title: "Transformación Digital", content: "<p>Integrar TIC para optimizar procesos y cambiar la cultura.</p>" }
    ],
    quiz: [
      { q: "El conocimiento Tácito se caracteriza por:", options: ["Estar en manuales", "Ser fácil de documentar", "Ser basado en la experiencia", "Bases de datos"], correct: 2 },
      { q: "El modelo SECI fue creado por:", options: ["Peter Senge", "Nonaka y Takeuchi", "Joseph Schumpeter", "Karl Wiig"], correct: 1 },
      { q: "Transformar Explícito a Explícito se llama:", options: ["Socialización", "Combinación", "Interiorización", "Exteriorización"], correct: 1 },
      { q: "Autor de 'Organizaciones Inteligentes':", options: ["Peter Senge", "Sveiby", "Nonaka", "Takeuchi"], correct: 0 },
      { q: "La transformación digital requiere:", options: ["Comprar PC", "Transformar cultura con TIC", "Eliminar humanos", "Imprimir más"], correct: 1 }
    ]
  },
  5: {
    title: "Capitales Organizacionales y TIC",
    desc: "El valor de las personas, las relaciones y la tecnología.",
    theoryNodes: [
      { id: "5.1", title: "Capital Humano", content: "<p>Habilidades, experiencias y motivación de las personas.</p>" },
      { id: "5.2", title: "Capital Intelectual", content: "<p>Valor de los activos intangibles (patentes, manuales).</p>" },
      { id: "5.3", title: "Capital Relacional", content: "<p>Vínculos con el entorno (estudiantes, aliados).</p>" },
      { id: "5.4", title: "TIC", content: "<p>Facilitan el aprendizaje colaborativo (plataformas LMS).</p>" }
    ],
    quiz: [
      { q: "El capital humano representa:", options: ["Dinero", "Habilidades y experiencia", "Computadores", "Manuales"], correct: 1 },
      { q: "El capital relacional se refiere a:", options: ["Vínculos y redes", "Patentes", "Bases numéricas", "Software"], correct: 0 },
      { q: "Las TIC sirven para:", options: ["Aislar trabajadores", "Facilitar aprendizaje", "Eliminar creatividad", "Reducir inteligencia"], correct: 1 },
      { q: "El conocimiento documentado forma parte del:", options: ["Capital social", "Capital relacional", "Capital intelectual", "Capital emocional"], correct: 2 },
      { q: "¿Cuál es un recurso de transformación digital?", options: ["Ábaco", "LMS y simuladores", "Tiza", "Fotocopias"], correct: 1 }
    ]
  }
};

const LEGACY_MAX_MODULES = 3;
const legacyCompanions = [
  { id: "robot", art: `<span class="animated-companion avatar-robot"><img src="Recursos/robot.png?v=2" alt="Robot"><span class="blink-layer"></span><span class="holo-ring"></span></span>`, name: "Robot", description: "Analítico, curioso y preciso" },
  { id: "explorador", art: `<span class="animated-companion avatar-explorador"><img src="Recursos/aventurero.png?v=2" alt="Explorador"><span class="blink-layer"></span><span class="compass-spin">✦</span></span>`, name: "Explorador", description: "Valiente, atento y perseverante" },
  { id: "creativo", art: `<span class="animated-companion avatar-creativo"><img src="Recursos/creativo.png?v=2" alt="Creativo"><span class="blink-layer"></span><span class="creative-shape one"></span><span class="creative-shape two"></span></span>`, name: "Creativo", description: "Imaginativo, flexible y expresivo" },
  { id: "mascota", art: `<span class="animated-companion avatar-mascota"><img src="Recursos/mascota.png?v=2" alt="Mascota virtual"><span class="blink-layer"></span><span class="pet-mark one">♥</span><span class="pet-mark two">•</span></span>`, name: "Mascota virtual", description: "Cercana, alegre y motivadora" }
];

const legacyModuleCompanionMessages = {
  1: "estoy contigo en esta primera estación. Identifica fortalezas, emociones positivas y el modelo PERMA antes de responder.",
  2: "muy bien, avanzamos. Observa cómo la felicidad combina biología, ambiente, relaciones y actividades intencionales.",
  3: "ya tienes base para conectar bienestar subjetivo, Flow, hábitos positivos y propósito de vida."
};

const legacyReinforcementData = {
  1: {
    title: "Parejas de Psicología Positiva",
    sprite: "Recursos/activity-sprites/unit-1-concepts.png",
    pairs: [
      { concept: "PERMA", answer: "Un programa de bienestar integra experiencias agradables, involucramiento, vínculos, sentido vital y percepción de logro." },
      { concept: "Flow", answer: "Una estudiante pierde la noción del tiempo mientras resuelve un reto exigente que corresponde con sus habilidades." },
      { concept: "Comunicación asertiva", answer: "Ante un desacuerdo, una persona expresa su postura con claridad, escucha la otra perspectiva y establece límites respetuosos." },
      { concept: "Fortalezas humanas", answer: "Una intervención identifica recursos personales estables y enseña a utilizarlos deliberadamente frente a nuevos desafíos." },
      { concept: "Gratitud", answer: "Una práctica dirige la atención hacia beneficios recibidos, reconoce su valor y la contribución de otras personas." },
      { concept: "Resiliencia", answer: "Después de un fracaso académico, la persona reorganiza estrategias, obtiene aprendizaje y retoma sus metas." }
    ]
  },
  2: {
    title: "Factores de la felicidad",
    sprite: "Recursos/activity-sprites/unit-2-concepts.png",
    pairs: [
      { concept: "Dopamina", answer: "Su liberación participa en la anticipación de recompensas y favorece la repetición de conductas orientadas a una meta." },
      { concept: "Plasticidad neuronal", answer: "La práctica sostenida modifica circuitos cerebrales y permite consolidar nuevas formas de responder y aprender." },
      { concept: "Relaciones sociales", answer: "El apoyo percibido, la pertenencia y los vínculos significativos actúan como factores protectores ante el estrés." },
      { concept: "Bienestar subjetivo", answer: "Integra la valoración cognitiva de la propia vida con la frecuencia relativa de afectos positivos y negativos." },
      { concept: "Predisposición genética", answer: "Explica una proporción de las diferencias individuales, pero interactúa con el contexto y las acciones intencionales." },
      { concept: "Curva emocional", answer: "Permite analizar variaciones del estado afectivo antes, durante y después de acontecimientos significativos." }
    ]
  },
  3: {
    title: "Bienestar y hábitos",
    sprite: "Recursos/activity-sprites/unit-3-concepts.png",
    pairs: [
      { concept: "Motivación intrínseca", answer: "La conducta se mantiene por el interés y la satisfacción inherentes a la tarea, incluso sin una recompensa externa." },
      { concept: "Inteligencia emocional", answer: "Supone percibir información afectiva, comprender sus causas y regular la respuesta sin negar lo que se siente." },
      { concept: "Propósito de vida", answer: "Organiza decisiones presentes alrededor de una dirección significativa que trasciende objetivos inmediatos." },
      { concept: "Hábito positivo", answer: "Una señal estable activa una conducta repetida cuya consecuencia facilita que vuelva a realizarse en el futuro." },
      { concept: "Flow", answer: "La atención se absorbe por completo cuando las demandas de la tarea y las capacidades disponibles se encuentran equilibradas." },
      { concept: "Empatía", answer: "Requiere comprender el marco de referencia ajeno y responder de manera sensible sin confundirlo con la experiencia propia." }
    ]
  }
};

const legacyReviewActivitiesData = {
  1: {
    trueFalse: [
      { text: "La psicología positiva estudia únicamente enfermedades mentales.", answer: false },
      { text: "Martin Seligman es uno de los principales autores de la psicología positiva.", answer: true },
      { text: "Las emociones positivas favorecen el bienestar.", answer: true },
      { text: "El modelo PERMA reúne cinco dimensiones del bienestar.", answer: true }
    ],
    fill: [
      { text: "La psicología positiva busca desarrollar ______ humanas.", answer: "fortalezas" },
      { text: "El bienestar emocional mejora la ______ de vida.", answer: "calidad" },
      { text: "El modelo de Seligman se resume con las letras ______.", answer: "perma" },
      { text: "La concentración profunda entre reto y habilidad se llama ______.", answer: "flow" }
    ],
    distractors: ["rutina", "memoria", "competencia"]
  },
  2: {
    trueFalse: [
      { text: "La felicidad puede estudiarse desde la psicología, la cognición y las neurociencias.", answer: true },
      { text: "Las relaciones sociales no influyen en el bienestar.", answer: false },
      { text: "La dopamina se asocia con motivación y placer.", answer: true },
      { text: "La predisposición genética determina por completo la felicidad.", answer: false }
    ],
    fill: [
      { text: "La capacidad del cerebro para cambiar conexiones se llama ______ neuronal.", answer: "plasticidad" },
      { text: "El yo que experimenta y el yo que recuerda fueron estudiados por Daniel ______.", answer: "kahneman" },
      { text: "El neurotransmisor relacionado con placer y motivación es la ______.", answer: "dopamina" },
      { text: "La valoración personal de la vida se denomina ______ subjetivo.", answer: "bienestar" }
    ],
    distractors: ["adrenalina", "conducta", "costumbre"]
  },
  3: {
    trueFalse: [
      { text: "El Flow requiere equilibrio entre reto y habilidad.", answer: true },
      { text: "La inteligencia emocional implica ignorar las emociones.", answer: false },
      { text: "El propósito de vida se relaciona con sentido y motivación.", answer: true },
      { text: "Un hábito positivo se consolida mediante práctica intencional y repetida.", answer: true }
    ],
    fill: [
      { text: "La motivación que nace de la satisfacción personal es ______.", answer: "intrínseca" },
      { text: "Daniel ______ popularizó la inteligencia emocional.", answer: "goleman" },
      { text: "El sentido que orienta metas y decisiones se llama ______ de vida.", answer: "propósito" },
      { text: "El estado de concentración plena se conoce como ______.", answer: "flow" }
    ],
    distractors: ["impulso", "talento", "recuerdo"]
  }
};

const courseData = window.KNOWLEDGE_COURSE_DATA;
const MAX_MODULES = 2;
const companions = window.KNOWLEDGE_COMPANIONS;
const moduleCompanionMessages = window.KNOWLEDGE_MODULE_MESSAGES;
const reinforcementData = window.KNOWLEDGE_REINFORCEMENT_DATA;
const reviewActivitiesData = window.KNOWLEDGE_REVIEW_DATA;
const caseScenario = window.KNOWLEDGE_CASE_SCENARIO;
const arTargets = window.KNOWLEDGE_AR_TARGETS;
const capitalMatrixData = window.CAPITAL_MATRIX_DATA;
const capitalMatrixActivity = window.KNOWLEDGE_CAPITAL_MATRIX_ACTIVITY;
const badgeDefinitions = window.KNOWLEDGE_BADGES || [];

// ==========================================
// 2. ESTADO Y SUPABASE
// ==========================================
const SUPABASE_URL = "https://bxxudrezbaxrmwekeyoe.supabase.co";
const SUPABASE_KEY = "sb_publishable_SnBuzPXugGRag9uAP4NbpQ_HzPhP6BK";
const supabaseClient = window.supabase?.createClient(SUPABASE_URL, SUPABASE_KEY);
const CLOUD_PROGRESS_FIELD = "knowledge_case_course_progress_v1";
const CLOUD_SYNC_DELAY = 650;

let currentUser = JSON.parse(localStorage.getItem("fgc_currentUser")) || null;
let highestUnlocked = 1;
let currentModuleId = 1;
let selectedCompanion = null;
let isLoginMode = true;
let viewedTheoryByModule = {};
let viewedResourcesByModule = {};
let activityProgressByModule = {};
let quizResultsByModule = {};
let certificates = [];
let finalEvaluationResult = null;
let profilePictureDataUrl = null;
let progressUpdatedAt = null;
let cloudProgressReady = false;
let cloudSyncTimer = null;
let cloudSyncPromise = Promise.resolve();
let cloudSyncWarningShown = false;
let cloudSyncState = "local";
let cloudSyncMessage = "El progreso todavía no se ha confirmado en la nube.";
let currentFinalQuestions = [];
let reinforcementCards = [];
let flippedReinforcementCards = [];
let matchedReinforcementPairs = 0;
let reinforcementAttempts = 0;
let reinforcementStreak = 0;
let activeSorterActivity = null;
let sorterAssignments = {};
let selectedSorterCardId = null;
let activeInvestigationActivity = null;
let activeRouteActivity = null;
let interventionRouteOrder = [];
let selectedFillWord = null;
let decisionReviewAnswers = [];
let activeTheoryResources = [];
let currentCaseStep = 0;
let currentCaseAnswers = [];
let assistantHistory = [];
let assistantHelpCounters = {};
let assistantContext = {
  activity: "Mapa del programa",
  topic: "",
  question: "",
  selectedAnswer: "",
  expectedAnswer: "",
  hint: "",
  feedback: "",
  isCorrect: null,
  attempts: 0
};
let chatReturnView = "homeView";
let arCameraStream = null;
let arReturnView = "homeView";
let selectedARTargetId = "humano";
let detectedARTargetId = null;
let arActiveModuleId = null;
let arActiveMediaIndex = null;
let arScanTimer = null;
let arBarcodeDetector = null;
const officialARMarkerImage = "Recursos/nuevo/ar-ecosistema-digital.webp";
let capitalMatrixDraftTimer = null;
const modalFocusStack = [];

// ==========================================
// 3. VISTAS Y RENDERIZADO BÁSICO
// ==========================================
function switchView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('is-active'));
  const nextView = document.getElementById(viewId);
  nextView.classList.add('is-active');
  resetAccessibilityGuide(viewId);
  const skipLink = document.querySelector(".skip-link");
  if (skipLink) skipLink.setAttribute("href", `#${viewId}`);
  window.scrollTo(0, 0);
  nextView.setAttribute("tabindex", "-1");
  if (nextView.matches("main")) {
    window.setTimeout(() => nextView.focus({ preventScroll: true }), 0);
  }
}

function getActiveViewId() {
  return document.querySelector(".view.is-active")?.id || "homeView";
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg; t.classList.add("is-visible");
  const liveRegion = document.getElementById("liveRegion");
  if (liveRegion) liveRegion.textContent = msg;
  setTimeout(() => t.classList.remove("is-visible"), 3500);
}

function setCloudSyncState(state, message) {
  cloudSyncState = state;
  cloudSyncMessage = message;
  const panel = document.getElementById("cloudSyncPanel");
  const status = document.getElementById("cloudSyncStatus");
  const button = document.getElementById("btnSyncProgress");
  if (panel) panel.dataset.state = state;
  if (status) status.textContent = message;
  if (button) {
    button.disabled = state === "syncing";
    button.textContent = state === "syncing" ? "Sincronizando..." : "Sincronizar ahora";
  }
}

function getUserStorageSuffix() {
  const raw = currentUser?.id || currentUser?.email || "local";
  return encodeURIComponent(String(raw).toLowerCase());
}

function userKey(name) {
  return `${name}_${getUserStorageSuffix()}`;
}

function safeParseStoredJSON(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.warn("No fue posible leer un dato local del progreso.", error);
    return fallback;
  }
}

function loadUserProgress() {
  selectedCompanion = companions.find(c => c.id === localStorage.getItem(userKey("fgc_selected_companion"))) || null;
  highestUnlocked = Math.min(parseInt(localStorage.getItem(userKey("fgc_highest_unlocked"))) || 1, MAX_MODULES);
  viewedTheoryByModule = safeParseStoredJSON(localStorage.getItem(userKey("fgc_viewed_theory")), {});
  viewedResourcesByModule = safeParseStoredJSON(localStorage.getItem(userKey("fgc_viewed_resources")), {});
  activityProgressByModule = safeParseStoredJSON(localStorage.getItem(userKey("fgc_activity_progress")), {});
  quizResultsByModule = safeParseStoredJSON(localStorage.getItem(userKey("fgc_quiz_results")), {});
  certificates = safeParseStoredJSON(localStorage.getItem(userKey("fgc_certificates")), []);
  finalEvaluationResult = safeParseStoredJSON(localStorage.getItem(userKey("fgc_final_evaluation")), null);
  profilePictureDataUrl = localStorage.getItem(userKey("fgc_profile_pic")) || null;
  const legacyPicture = localStorage.getItem("fgc_profile_pic");
  if (!profilePictureDataUrl && legacyPicture) {
    profilePictureDataUrl = legacyPicture;
    localStorage.setItem(userKey("fgc_profile_pic"), legacyPicture);
    localStorage.removeItem("fgc_profile_pic");
  }
  progressUpdatedAt = localStorage.getItem(userKey("fgc_progress_updated_at")) || null;
}

function writeLocalProgress() {
  if (selectedCompanion?.id) {
    localStorage.setItem(userKey("fgc_selected_companion"), selectedCompanion.id);
  } else {
    localStorage.removeItem(userKey("fgc_selected_companion"));
  }
  localStorage.setItem(userKey("fgc_highest_unlocked"), highestUnlocked);
  localStorage.setItem(userKey("fgc_viewed_theory"), JSON.stringify(viewedTheoryByModule));
  localStorage.setItem(userKey("fgc_viewed_resources"), JSON.stringify(viewedResourcesByModule));
  localStorage.setItem(userKey("fgc_activity_progress"), JSON.stringify(activityProgressByModule));
  localStorage.setItem(userKey("fgc_quiz_results"), JSON.stringify(quizResultsByModule));
  localStorage.setItem(userKey("fgc_certificates"), JSON.stringify(certificates));
  localStorage.setItem(userKey("fgc_final_evaluation"), JSON.stringify(finalEvaluationResult));
  if (profilePictureDataUrl) {
    localStorage.setItem(userKey("fgc_profile_pic"), profilePictureDataUrl);
  } else {
    localStorage.removeItem(userKey("fgc_profile_pic"));
  }
  if (progressUpdatedAt) {
    localStorage.setItem(userKey("fgc_progress_updated_at"), progressUpdatedAt);
  }
}

function normalizeProgressSnapshot(snapshot) {
  const value = snapshot && typeof snapshot === "object" ? snapshot : {};
  const objectOrEmpty = input => input && typeof input === "object" && !Array.isArray(input) ? input : {};
  const validProfilePicture = typeof value.profilePictureDataUrl === "string"
    && /^data:image\/(?:jpeg|png|webp);base64,/i.test(value.profilePictureDataUrl)
    && value.profilePictureDataUrl.length <= 250000
    ? value.profilePictureDataUrl
    : null;
  return {
    version: 1,
    updatedAt: typeof value.updatedAt === "string" ? value.updatedAt : null,
    selectedCompanionId: typeof value.selectedCompanionId === "string" ? value.selectedCompanionId : null,
    highestUnlocked: Math.min(Math.max(parseInt(value.highestUnlocked) || 1, 1), MAX_MODULES),
    viewedTheoryByModule: objectOrEmpty(value.viewedTheoryByModule),
    viewedResourcesByModule: objectOrEmpty(value.viewedResourcesByModule),
    activityProgressByModule: objectOrEmpty(value.activityProgressByModule),
    quizResultsByModule: objectOrEmpty(value.quizResultsByModule),
    certificates: Array.isArray(value.certificates) ? value.certificates : [],
    profilePictureDataUrl: validProfilePicture,
    finalEvaluationResult: value.finalEvaluationResult && typeof value.finalEvaluationResult === "object"
      ? value.finalEvaluationResult
      : null
  };
}

function buildProgressSnapshot(updatedAt = progressUpdatedAt) {
  return normalizeProgressSnapshot({
    updatedAt,
    selectedCompanionId: selectedCompanion?.id || null,
    highestUnlocked,
    viewedTheoryByModule,
    viewedResourcesByModule,
    activityProgressByModule,
    quizResultsByModule,
    certificates,
    profilePictureDataUrl,
    finalEvaluationResult
  });
}

function hasMeaningfulProgress(snapshot) {
  const value = normalizeProgressSnapshot(snapshot);
  return !!value.selectedCompanionId
    || value.highestUnlocked > 1
    || Object.keys(value.viewedTheoryByModule).length > 0
    || Object.keys(value.viewedResourcesByModule).length > 0
    || Object.keys(value.activityProgressByModule).length > 0
    || Object.keys(value.quizResultsByModule).length > 0
    || value.certificates.length > 0
    || !!value.profilePictureDataUrl
    || !!value.finalEvaluationResult;
}

function mergeViewedCollections(localCollection, cloudCollection) {
  const merged = {};
  const moduleIds = new Set([...Object.keys(localCollection), ...Object.keys(cloudCollection)]);
  moduleIds.forEach(moduleId => {
    merged[moduleId] = [...new Set([
      ...(Array.isArray(cloudCollection[moduleId]) ? cloudCollection[moduleId] : []),
      ...(Array.isArray(localCollection[moduleId]) ? localCollection[moduleId] : [])
    ])];
  });
  return merged;
}

function mergeActivityProgress(localProgress, cloudProgress) {
  const merged = {};
  const moduleIds = new Set([...Object.keys(localProgress), ...Object.keys(cloudProgress)]);
  moduleIds.forEach(moduleId => {
    const local = localProgress[moduleId] || {};
    const cloud = cloudProgress[moduleId] || {};
    merged[moduleId] = {
      ...cloud,
      ...local,
      memory: !!(cloud.memory || local.memory),
      review: !!(cloud.review || local.review)
    };
    const localMemoryTime = Date.parse(local.memoryStats?.updatedAt || "") || 0;
    const cloudMemoryTime = Date.parse(cloud.memoryStats?.updatedAt || "") || 0;
    if (local.memoryStats || cloud.memoryStats) {
      merged[moduleId].memoryStats = localMemoryTime >= cloudMemoryTime
        ? local.memoryStats || cloud.memoryStats
        : cloud.memoryStats;
    }
    if (!local.reviewAnswers && cloud.reviewAnswers) {
      merged[moduleId].reviewAnswers = cloud.reviewAnswers;
    }
    if (local.capitalMatrix || cloud.capitalMatrix) {
      const localMatrixTime = Date.parse(local.capitalMatrix?.updatedAt || "") || 0;
      const cloudMatrixTime = Date.parse(cloud.capitalMatrix?.updatedAt || "") || 0;
      const selectedMatrix = localMatrixTime >= cloudMatrixTime
        ? local.capitalMatrix || cloud.capitalMatrix
        : cloud.capitalMatrix;
      merged[moduleId].capitalMatrix = {
        ...(selectedMatrix || {}),
        completed: !!(local.capitalMatrix?.completed || cloud.capitalMatrix?.completed)
      };
    }
  });
  return merged;
}

function mergeQuizResults(localResults, cloudResults) {
  const merged = {};
  const moduleIds = new Set([...Object.keys(localResults), ...Object.keys(cloudResults)]);
  moduleIds.forEach(moduleId => {
    const local = localResults[moduleId];
    const cloud = cloudResults[moduleId];
    if (!local) merged[moduleId] = cloud;
    else if (!cloud) merged[moduleId] = local;
    else merged[moduleId] = (Number(local.score) || 0) >= (Number(cloud.score) || 0) ? local : cloud;
  });
  return merged;
}

function mergeCertificates(localCertificates, cloudCertificates) {
  const merged = new Map();
  [...cloudCertificates, ...localCertificates].forEach(certificate => {
    const key = certificate?.achievementId || certificate?.badgeId || certificate?.modId;
    if (certificate && key) merged.set(String(key), certificate);
  });
  return [...merged.values()];
}

function mergeProgressSnapshots(localSnapshot, cloudSnapshot) {
  const local = normalizeProgressSnapshot(localSnapshot);
  const cloud = normalizeProgressSnapshot(cloudSnapshot);
  const localTime = Date.parse(local.updatedAt || "") || 0;
  const cloudTime = Date.parse(cloud.updatedAt || "") || 0;
  const newer = localTime > cloudTime ? local : cloud;
  const older = newer === local ? cloud : local;
  const localFinalScore = Number(local.finalEvaluationResult?.score) || 0;
  const cloudFinalScore = Number(cloud.finalEvaluationResult?.score) || 0;

  return normalizeProgressSnapshot({
    updatedAt: new Date().toISOString(),
    selectedCompanionId: newer.selectedCompanionId || older.selectedCompanionId,
    highestUnlocked: Math.max(local.highestUnlocked, cloud.highestUnlocked),
    viewedTheoryByModule: mergeViewedCollections(local.viewedTheoryByModule, cloud.viewedTheoryByModule),
    viewedResourcesByModule: mergeViewedCollections(local.viewedResourcesByModule, cloud.viewedResourcesByModule),
    activityProgressByModule: mergeActivityProgress(local.activityProgressByModule, cloud.activityProgressByModule),
    quizResultsByModule: mergeQuizResults(local.quizResultsByModule, cloud.quizResultsByModule),
    certificates: mergeCertificates(local.certificates, cloud.certificates),
    profilePictureDataUrl: newer.profilePictureDataUrl || older.profilePictureDataUrl,
    finalEvaluationResult: localFinalScore >= cloudFinalScore
      ? local.finalEvaluationResult || cloud.finalEvaluationResult
      : cloud.finalEvaluationResult
  });
}

function applyProgressSnapshot(snapshot) {
  const value = normalizeProgressSnapshot(snapshot);
  selectedCompanion = companions.find(companion => companion.id === value.selectedCompanionId) || null;
  highestUnlocked = value.highestUnlocked;
  viewedTheoryByModule = value.viewedTheoryByModule;
  viewedResourcesByModule = value.viewedResourcesByModule;
  activityProgressByModule = value.activityProgressByModule;
  quizResultsByModule = value.quizResultsByModule;
  certificates = value.certificates;
  profilePictureDataUrl = value.profilePictureDataUrl || profilePictureDataUrl;
  finalEvaluationResult = value.finalEvaluationResult;
  progressUpdatedAt = value.updatedAt || new Date().toISOString();
  writeLocalProgress();
}

async function persistProgressToCloud(snapshot = buildProgressSnapshot()) {
  if (!supabaseClient || !currentUser) return;
  setCloudSyncState("syncing", "Guardando tus logros en la cuenta...");
  const { error } = await supabaseClient.auth.updateUser({
    data: { [CLOUD_PROGRESS_FIELD]: snapshot }
  });
  if (error) throw error;
  cloudSyncWarningShown = false;
  setCloudSyncState("synced", "Progreso guardado en la nube y disponible en otros dispositivos.");
}

function reportCloudSyncError(error) {
  console.error("No fue posible sincronizar el progreso con la nube.", error);
  setCloudSyncState("error", "Solo está guardado en este navegador. Revisa Internet y vuelve a sincronizar.");
  if (!cloudSyncWarningShown) {
    cloudSyncWarningShown = true;
    showToast("Tu avance quedó guardado en este equipo. Se sincronizará cuando vuelva la conexión.");
  }
}

function queueCloudProgressSync() {
  if (!cloudProgressReady || !currentUser || !supabaseClient) return;
  setCloudSyncState("syncing", "Hay cambios pendientes de guardar en la cuenta...");
  window.clearTimeout(cloudSyncTimer);
  cloudSyncTimer = window.setTimeout(() => {
    cloudSyncTimer = null;
    const snapshot = buildProgressSnapshot();
    cloudSyncPromise = cloudSyncPromise
      .catch(() => {})
      .then(() => persistProgressToCloud(snapshot))
      .catch(reportCloudSyncError);
  }, CLOUD_SYNC_DELAY);
}

async function flushCloudProgressSync() {
  if (cloudSyncTimer) {
    window.clearTimeout(cloudSyncTimer);
    cloudSyncTimer = null;
    const snapshot = buildProgressSnapshot();
    cloudSyncPromise = cloudSyncPromise
      .catch(() => {})
      .then(() => persistProgressToCloud(snapshot));
  }
  try {
    await cloudSyncPromise;
  } catch (error) {
    reportCloudSyncError(error);
  }
}

async function syncProgressWithCloud(authUser) {
  cloudProgressReady = false;
  setCloudSyncState("syncing", "Comparando este navegador con el progreso de tu cuenta...");
  loadUserProgress();
  const localSnapshot = buildProgressSnapshot(progressUpdatedAt);
  const cloudSnapshot = normalizeProgressSnapshot(authUser?.user_metadata?.[CLOUD_PROGRESS_FIELD]);
  const localHasProgress = hasMeaningfulProgress(localSnapshot);
  const cloudHasProgress = hasMeaningfulProgress(cloudSnapshot);

  if (!localHasProgress && !cloudHasProgress) {
    cloudProgressReady = true;
    setCloudSyncState("synced", "Cuenta conectada. Aún no hay logros para sincronizar.");
    return;
  }

  const merged = mergeProgressSnapshots(localSnapshot, cloudSnapshot);
  applyProgressSnapshot(merged);
  cloudProgressReady = true;

  try {
    await persistProgressToCloud(buildProgressSnapshot());
  } catch (error) {
    reportCloudSyncError(error);
  }
}

async function syncProgressNow() {
  if (!currentUser || !supabaseClient) {
    setCloudSyncState("error", "Inicia sesión para sincronizar el progreso.");
    return;
  }
  try {
    setCloudSyncState("syncing", "Leyendo la copia local y la copia de tu cuenta...");
    const { data, error } = await supabaseClient.auth.getUser();
    if (error) throw error;
    if (!data.user) throw new Error("No hay una sesión activa.");
    await syncProgressWithCloud(data.user);
    renderAvatars();
    renderMap();
    renderProfile();
    showToast("Progreso sincronizado correctamente.");
  } catch (error) {
    reportCloudSyncError(error);
  }
}

function saveUserProgress() {
  progressUpdatedAt = new Date().toISOString();
  writeLocalProgress();
  queueCloudProgressSync();
}

function getStudentName() {
  return currentUser?.name?.trim() || "estudiante";
}

function getCompanionMessage(moduleId) {
  const message = moduleCompanionMessages[moduleId] || "sigue avanzando. Lee la teoría, realiza la actividad y completa la evaluación.";
  return `Hola ${getStudentName()}, ${message}`;
}

function setAssistantContext(context = {}) {
  assistantContext = {
    ...assistantContext,
    ...context,
    attempts: Number(context.attempts ?? assistantContext.attempts ?? 0)
  };
}

function getAssistantContextKey(mode) {
  return [
    currentModuleId,
    mode,
    assistantContext.activity || "",
    assistantContext.topic || "",
    assistantContext.question || ""
  ].join("|");
}

function getAssistantHistoryKey(moduleId = currentModuleId) {
  return userKey(`fgc_assistant_history_${moduleId || "general"}`);
}

function normalizeAssistantHistory(history) {
  if (!Array.isArray(history)) return [];
  return history
    .filter(item => item && ["user", "assistant"].includes(item.role) && typeof item.text === "string")
    .slice(-80)
    .map(item => ({
      role: item.role,
      text: item.text.slice(0, 1200),
      time: item.time || new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" })
    }));
}

function loadAssistantHistory(moduleId = currentModuleId) {
  return normalizeAssistantHistory(safeParseStoredJSON(localStorage.getItem(getAssistantHistoryKey(moduleId)), []));
}

function saveAssistantHistory(moduleId = currentModuleId) {
  localStorage.setItem(getAssistantHistoryKey(moduleId), JSON.stringify(normalizeAssistantHistory(assistantHistory)));
}

function pushAssistantMessage(role, text) {
  assistantHistory.push({ role, text, time: new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" }) });
  if (assistantHistory.length > 80) assistantHistory = assistantHistory.slice(-80);
  saveAssistantHistory();
  renderAssistantChat();
  if (role === "assistant") {
    const speech = document.getElementById("companionSpeech");
    if (speech) speech.textContent = text;
  }
}

function renderAssistantChat() {
  const log = document.getElementById("assistantChatLog");
  if (!log) return;
  log.innerHTML = assistantHistory.map(message => `
    <article class="assistant-message is-${message.role}">
      <span>${message.role === "user" ? "Tú" : selectedCompanion?.name || "Acompañante"} · ${message.time}</span>
      <p>${escapeHtml(message.text)}</p>
    </article>
  `).join("");
  log.scrollTop = log.scrollHeight;
  const quickActions = document.querySelector(".chat-page-actions");
  if (quickActions) quickActions.hidden = assistantHistory.some(message => message.role === "user");
}

function openChatView(returnView = getActiveViewId()) {
  chatReturnView = returnView === "chatView" ? "homeView" : returnView;
  const companionArt = document.getElementById("chatCompanionArt");
  const summary = document.getElementById("chatContextSummary");
  const topicTitle = document.getElementById("chatTopicTitle");
  if (companionArt) {
    companionArt.innerHTML = selectedCompanion?.art || `<span class="chat-companion-placeholder" aria-hidden="true">?</span>`;
  }
  if (summary) {
    const activity = assistantContext.activity || "recorrido";
    const topic = assistantContext.topic || courseData[currentModuleId]?.title || "el caso";
    summary.textContent = `Estás en ${activity}. Te respondo sobre ${topic} y conservo esta conversación para que no pierdas tus preguntas.`;
  }
  if (topicTitle) topicTitle.textContent = assistantContext.topic || courseData[currentModuleId]?.title || "Estoy listo para ayudarte";
  if (!assistantHistory.length) assistantHistory = loadAssistantHistory(currentModuleId);
  if (!assistantHistory.length) pushAssistantMessage("assistant", getCompanionMessage(currentModuleId));
  renderAssistantChat();
  switchView("chatView");
}

function resetAssistantChatForModule(moduleId) {
  assistantHelpCounters = {};
  setAssistantContext({
    activity: "Mapa de la unidad",
    topic: courseData[moduleId]?.title || "",
    question: "",
    selectedAnswer: "",
    expectedAnswer: "",
    hint: "",
    feedback: "",
    isCorrect: null,
    attempts: 0
  });
  assistantHistory = loadAssistantHistory(moduleId);
  if (!assistantHistory.length) {
    pushAssistantMessage("assistant", getCompanionMessage(moduleId));
  } else {
    renderAssistantChat();
  }
}

function normalizeForSearch(value = "") {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9ñ\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function includesAny(text, terms) {
  return terms.some(term => text.includes(normalizeForSearch(term)));
}

function stripHtml(value = "") {
  return String(value)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&aacute;/g, "á")
    .replace(/&eacute;/g, "é")
    .replace(/&iacute;/g, "í")
    .replace(/&oacute;/g, "ó")
    .replace(/&uacute;/g, "ú")
    .replace(/&ntilde;/g, "ñ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function getShortContentSummary(content = "", maxSentences = 2) {
  const text = stripHtml(content);
  if (!text) return "";
  const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean);
  return sentences.slice(0, maxSentences).join(" ");
}

function getCurrentModuleTitle() {
  return courseData[currentModuleId]?.title || "el recorrido";
}

function getFirstName() {
  return getStudentName().split(/\s+/)[0] || "estudiante";
}

function answerFromTheoryNode(normalizedQuestion) {
  const nodes = courseData[currentModuleId]?.theoryNodes || [];
  const matched = nodes.find(node => {
    const title = normalizeForSearch(`${node.id} ${node.title}`);
    const importantWords = title.split(" ").filter(word => word.length > 3);
    return importantWords.some(word => normalizedQuestion.includes(word));
  });
  if (!matched) return "";
  const summary = getShortContentSummary(matched.content, 3);
  return `${getFirstName()}, sobre "${matched.title}": ${summary} En esta parte lo importante es conectar el concepto con una evidencia del caso o con una acción concreta de gestión del conocimiento.`;
}

function answerCurrentContext(normalizedQuestion) {
  if (includesAny(normalizedQuestion, ["respuesta", "mi respuesta", "correcta", "revisar", "revision", "por que esta mal", "por que"])) {
    if (assistantContext.selectedAnswer) {
      if (assistantContext.isCorrect === true) {
        return `${getFirstName()}, tu respuesta "${assistantContext.selectedAnswer}" está bien orientada. ${assistantContext.feedback || "Conecta el concepto central con la evidencia del caso y propone una acción coherente."}`;
      }
      return `${getFirstName()}, revisa tu respuesta "${assistantContext.selectedAnswer}". ${assistantContext.hint || "Contrasta si atiende la causa del problema o solo un síntoma visible."} ${assistantContext.feedback || ""}`.trim();
    }
    if (assistantContext.question) {
      return `${getFirstName()}, para esa pregunta analiza primero la evidencia: ${assistantContext.question} Luego identifica el capital o proceso afectado y elige la acción que resuelva la causa, no solo la apariencia del problema.`;
    }
  }
  return "";
}

function getDirectAssistantAnswer(question = "") {
  const normalizedQuestion = normalizeForSearch(question);
  const moduleTitle = getCurrentModuleTitle();
  const contextualAnswer = answerCurrentContext(normalizedQuestion);
  if (contextualAnswer) return contextualAnswer;

  if (includesAny(normalizedQuestion, ["hola", "buenas", "buen dia", "buenas tardes", "ayuda"])) {
    return `Hola ${getFirstName()}. Estoy contigo en ${moduleTitle}. Puedes preguntarme por un concepto, una actividad, la evaluación, el caso, la matriz o la realidad aumentada, y te responderé de forma directa sin borrar esta conversación.`;
  }

  if (includesAny(normalizedQuestion, ["seci", "socializacion", "exteriorizacion", "combinacion", "interiorizacion"])) {
    return "El modelo SECI explica cómo se crea conocimiento: socialización comparte experiencia tácita; exteriorización convierte esa experiencia en documentos o modelos; combinación integra documentos y datos; interiorización lleva lo aprendido a la práctica. En el caso, úsalo para decidir cómo capturar experiencia docente y volverla memoria institucional.";
  }

  if (includesAny(normalizedQuestion, ["tacito", "explicito", "conocimiento personal", "documentar experiencia"])) {
    return "El conocimiento tácito vive en la experiencia de las personas: intuición, criterio, habilidades y formas de resolver problemas. El explícito ya está organizado en guías, protocolos, investigaciones o repositorios. La gestión del conocimiento busca que lo valioso no se pierda: primero se comparte, luego se documenta y después se reutiliza.";
  }

  if (includesAny(normalizedQuestion, ["gestion del conocimiento", "que es gestion", "conocimiento organizacional", "memoria institucional"])) {
    return "La gestión del conocimiento es organizar lo que una institución sabe para que no dependa solo de una persona. Incluye identificar saberes importantes, documentarlos, clasificarlos, compartirlos y usarlos para tomar mejores decisiones. En Universidad Horizonte sirve para proteger la experiencia docente, evitar duplicaciones y mejorar el aprendizaje colectivo.";
  }

  if (includesAny(normalizedQuestion, ["aprendizaje organizacional", "senge", "organizacion inteligente", "pensamiento sistemico", "vision compartida"])) {
    return "El aprendizaje organizacional ocurre cuando una institución convierte experiencias individuales en mejora colectiva. Senge lo explica con cinco disciplinas: dominio personal, modelos mentales, visión compartida, aprendizaje en equipo y pensamiento sistémico. La clave es que el aprendizaje no quede aislado, sino que cambie prácticas y decisiones.";
  }

  if (includesAny(normalizedQuestion, ["innovacion", "cultura", "ideas", "schumpeter"])) {
    return "La innovación no es solo inventar algo nuevo; es convertir ideas en mejoras reales. En gestión del conocimiento, la innovación aparece cuando las personas comparten experiencias, documentan aprendizajes, colaboran y prueban soluciones. Una cultura de conocimiento permite experimentar, aprender de errores y conectar saberes con necesidades reales.";
  }

  if (includesAny(normalizedQuestion, ["transformacion digital", "tic", "tecnologia", "plataforma", "lms", "repositorio", "ia", "analitica"])) {
    return "La transformación digital tiene sentido cuando mejora el acceso, la colaboración y la reutilización del conocimiento. No basta comprar plataformas: se necesitan procesos, responsables, formación, criterios de calidad y datos útiles. Un buen ecosistema conecta LMS, repositorio, analítica, IA y comunidades de práctica con objetivos claros.";
  }

  if (includesAny(normalizedQuestion, ["capital humano", "habilidades", "experiencia docente", "mentoria", "jubilacion"])) {
    return "El capital humano son las habilidades, experiencias, motivación, creatividad y capacidad de aprendizaje de las personas. En Universidad Horizonte, el riesgo principal es que docentes expertos se jubilen sin transferir su saber. La respuesta adecuada combina mentorías, entrevistas, observación de clases y documentación de buenas prácticas.";
  }

  if (includesAny(normalizedQuestion, ["capital intelectual", "activos intangibles", "protocolos", "metadatos", "investigaciones", "duplicacion"])) {
    return "El capital intelectual es la memoria reutilizable de la institución: investigaciones, guías, bases de datos, protocolos, criterios de calidad y repositorios. Si los documentos están dispersos, no generan valor. Por eso se necesitan metadatos, responsables, buscador, permisos y actualización periódica.";
  }

  if (includesAny(normalizedQuestion, ["capital relacional", "aliados", "confianza", "egresados", "comunidad", "redes"])) {
    return "El capital relacional es la confianza y el intercambio con estudiantes, egresados, docentes, aliados y comunidades. No es solo tener contactos; es producir aprendizaje compartido. En el caso se fortalece con mesas de conocimiento, devolución de resultados, acuerdos claros y proyectos colaborativos.";
  }

  if (includesAny(normalizedQuestion, ["caso", "universidad horizonte", "diagnostico", "ruta", "intervencion"])) {
    return "En el caso de Universidad Horizonte debes diagnosticar cuatro frentes: capital humano en riesgo por jubilación, capital intelectual disperso, capital relacional debilitado y tecnología sin estrategia. La ruta sólida empieza por identificar conocimiento crítico, capturarlo, documentarlo, clasificarlo, transferirlo, integrarlo con tecnología y evaluar resultados.";
  }

  if (includesAny(normalizedQuestion, ["realidad aumentada", "aumentada", "qr", "camara", "marcador", "ar"])) {
    return "En realidad aumentada debes escoger una capa, escanear el QR real con la cámara y abrir la vista teórica correspondiente. La teoría no debe quedarse encima de la cámara: se muestra en una pantalla aparte para leer con calma el capital humano, intelectual, relacional o el ecosistema digital.";
  }

  if (includesAny(normalizedQuestion, ["actividad", "actividades", "refuerzo", "parejas", "clasificar", "evidencias", "decisiones", "ecosistema"])) {
    return currentModuleId === 1
      ? "En la Unidad 1 las actividades sirven para comprobar si reconoces conceptos y procesos de gestión del conocimiento. Lee la evidencia, identifica si corresponde a conocimiento tácito, explícito, SECI, aprendizaje o innovación, y justifica mentalmente por qué esa categoría encaja."
      : "En el caso integrador las actividades son de análisis aplicado: primero diagnosticas evidencias, luego tomas decisiones y finalmente construyes una ruta de intervención. No busques solo acertar; intenta explicar qué capital está afectado y qué acción lo fortalece.";
  }

  if (includesAny(normalizedQuestion, ["evaluacion", "aprobar", "80", "desbloquear", "preguntas", "quiz"])) {
    return currentModuleId === 1
      ? "La evaluación de la Unidad 1 se desbloquea cuando completas teoría, recursos y actividades. Necesitas mínimo 80% para aprobar y avanzar al caso. Si ya aprobaste, tu mejor resultado queda guardado."
      : "El caso se completa cuando tus decisiones y la matriz final muestran comprensión aplicada. La meta no es memorizar, sino justificar qué capital se afecta, qué conocimiento se protege y qué tecnología ayuda con propósito.";
  }

  if (includesAny(normalizedQuestion, ["matriz", "capital personal", "balance", "puntaje", "150", "reflexion"])) {
    return "La matriz de capital personal te pide valorar capital humano, intelectual y relacional de 1 a 5. Después interpretas el puntaje y escribes una reflexión crítica. La respuesta fuerte no es decir que todo está alto, sino reconocer fortalezas, oportunidades de mejora y acciones concretas para crecer.";
  }

  if (includesAny(normalizedQuestion, ["insignia", "diploma", "certificado", "perfil", "logro"])) {
    return "Las insignias y certificados se desbloquean cuando completas los retos principales: evaluación de la Unidad 1, caso integrador, laboratorio AR y matriz final. En el perfil puedes revisar los certificados disponibles y abrir el diploma correspondiente.";
  }

  const theoryAnswer = answerFromTheoryNode(normalizedQuestion);
  if (theoryAnswer) return theoryAnswer;

  return `${getFirstName()}, te respondo desde ${moduleTitle}: identifica primero el concepto central, luego busca una evidencia concreta y finalmente plantea una acción. En este curso casi todo se analiza con esta lógica: qué conocimiento existe, dónde está, quién lo comparte, cómo se documenta y cómo se reutiliza para mejorar decisiones.`;
}

function getProgressiveHelp(mode, question = "") {
  const key = getAssistantContextKey(mode);
  const count = (assistantHelpCounters[key] || 0) + 1;
  assistantHelpCounters[key] = count;
  const title = courseData[currentModuleId]?.title || "esta unidad";
  const selected = assistantContext.selectedAnswer;
  const expected = assistantContext.expectedAnswer;
  const hasSelection = !!selected;

  if (mode === "review" && hasSelection) {
    if (assistantContext.isCorrect === true) {
      return `Tu respuesta va bien, ${getStudentName()}. La opción "${selected}" se alinea con el problema porque ${assistantContext.feedback || "responde al concepto central del caso"}.`;
    }
    if (count === 1) return `Veo que elegiste "${selected}". Antes de cambiarla, revisa si esa opción resuelve la causa del problema o solo toca un síntoma.`;
    if (count === 2) return assistantContext.hint || "Pista más concreta: identifica qué capital o proceso está fallando y descarta opciones que solo agregan herramientas.";
    if (count === 3) return `Ejemplo: si el problema es pérdida de saber experto, una buena respuesta debe capturar experiencia, transferirla y dejar evidencia reutilizable.`;
    return `La solución esperada apunta a "${expected}". La razón es: ${assistantContext.feedback || "esa opción conecta diagnóstico, concepto y acción institucional"}.`;
  }

  if (mode === "hint") {
    if (count === 1) return currentModuleId === 1
      ? "Primera pista: ubica si el saber está en una persona, en un documento o en una práctica que se está transfiriendo."
      : "Primera pista: separa el caso en personas, memoria institucional, relaciones, tecnología y reglas.";
    if (count === 2) return assistantContext.hint || (currentModuleId === 1
      ? "Pista más específica: mira el verbo. Observar suele ser socialización; documentar suele ser exteriorización; integrar documentos suele ser combinación."
      : "Pista más específica: no empieces por comprar tecnología. Primero identifica qué conocimiento está en riesgo y quién debe sostenerlo.");
    if (count === 3) return currentModuleId === 1
      ? "Ejemplo: cuando una docente explica su método y el equipo lo convierte en guía, pasas de experiencia tácita a conocimiento explícito."
      : "Ejemplo: si los aliados aportan información pero no reciben devolución, el problema principal es relacional y de gobernanza.";
    return assistantContext.feedback || `Solución guiada: conecta la evidencia con el concepto de ${title} y decide qué acción conserva, organiza o moviliza conocimiento.`;
  }

  if (mode === "explain") {
    if (assistantContext.topic) return `Estás trabajando "${assistantContext.topic}". En palabras sencillas: el concepto debe ayudarte a explicar qué conocimiento se crea, dónde queda guardado y cómo vuelve a usarse.`;
    return currentModuleId === 1
      ? "Gestionar conocimiento es evitar que la experiencia quede aislada: se observa, se documenta, se combina y se practica."
      : "En Universidad Horizonte, la estrategia debe unir capital humano, intelectual, relacional y tecnología con reglas claras de uso.";
  }

  if (mode === "example") {
    return currentModuleId === 1
      ? "Ejemplo aplicado: una mentoría permite socializar experiencia; una guía escrita la exterioriza; un repositorio la combina con otros recursos; una práctica docente la interioriza."
      : "Ejemplo aplicado: una comunidad de práctica conversa problemas reales, el repositorio conserva evidencias y la analítica muestra si esos recursos se reutilizan.";
  }

  const lowerQuestion = question.toLowerCase();
  if (lowerQuestion.includes("matriz") || lowerQuestion.includes("capital personal") || lowerQuestion.includes("balance")) {
    return "En la matriz final, responde con honestidad: no se busca perfección, sino reconocer tu capital más fuerte, tu oportunidad de mejora y acciones concretas.";
  }
  if (lowerQuestion.includes("realidad") || lowerQuestion.includes("aumentada") || lowerQuestion.includes("qr")) {
    return "En realidad aumentada, primero activa la cámara y escanea un marcador. Si tu navegador no lo permite, usa el escaneo guiado como alternativa de compatibilidad.";
  }
  if (lowerQuestion.includes("seci") || lowerQuestion.includes("tácito") || lowerQuestion.includes("explícito")) {
    return "Recuerda SECI: socializar comparte experiencia, exteriorizar la documenta, combinar integra documentos e interiorizar convierte recursos en práctica.";
  }
  return `Buena pregunta sobre ${title}. Relaciónala con una evidencia concreta: persona, documento, relación, tecnología o regla. Así tu análisis deja de ser general.`;
}

function getAssistantResponse(mode, question = "") {
  if (mode === "free") return getDirectAssistantAnswer(question);
  return getProgressiveHelp(mode, question);
}

window.askCompanionAssistant = function(mode) {
  const labels = {
    hint: "Necesito una pista.",
    explain: "Explícame el concepto actual.",
    example: "Muéstrame un ejemplo aplicado.",
    review: "Revisa mi respuesta."
  };
  pushAssistantMessage("user", labels[mode] || "Necesito ayuda.");
  pushAssistantMessage("assistant", getAssistantResponse(mode));
}

function getViewedTheorySet(moduleId) {
  return new Set(viewedTheoryByModule[moduleId] || []);
}

function saveViewedTheory(moduleId, nodeId) {
  const viewed = getViewedTheorySet(moduleId);
  viewed.add(nodeId);
  viewedTheoryByModule[moduleId] = [...viewed];
  saveUserProgress();
}

function hasViewedAllTheory(moduleId) {
  const nodes = courseData[moduleId]?.theoryNodes || [];
  const viewed = getViewedTheorySet(moduleId);
  return nodes.length > 0 && nodes.every(node => viewed.has(node.id));
}

function getTheoryProgress(moduleId) {
  const nodes = courseData[moduleId]?.theoryNodes || [];
  const total = nodes.length;
  const viewedSet = getViewedTheorySet(moduleId);
  const viewed = nodes.filter(node => viewedSet.has(node.id)).length;
  return { viewed, total };
}

function getRequiredResourceItems(moduleId) {
  return (courseData[moduleId]?.media || []).filter(item => item.type !== "video");
}

function getViewedResourceSet(moduleId) {
  return new Set(viewedResourcesByModule[moduleId] || []);
}

function saveViewedResource(moduleId, mediaIndex) {
  const viewed = getViewedResourceSet(moduleId);
  viewed.add(String(mediaIndex));
  viewedResourcesByModule[moduleId] = [...viewed];
  saveUserProgress();
}

function hasViewedAllResources(moduleId) {
  const required = getRequiredResourceItems(moduleId);
  const mediaItems = courseData[moduleId]?.media || [];
  const viewed = getViewedResourceSet(moduleId);
  return required.length === 0 || required.every(item => viewed.has(String(mediaItems.indexOf(item))));
}

function getResourceProgress(moduleId) {
  const required = getRequiredResourceItems(moduleId);
  const mediaItems = courseData[moduleId]?.media || [];
  const viewed = getViewedResourceSet(moduleId);
  const viewedCount = required.filter(item => viewed.has(String(mediaItems.indexOf(item)))).length;
  return { viewed: viewedCount, total: required.length };
}

function markActivityComplete(moduleId, activityName) {
  activityProgressByModule[moduleId] = {
    ...(activityProgressByModule[moduleId] || {}),
    [activityName]: true
  };
  saveUserProgress();
  updateModuleLocks();
  renderQuizLaunch();
}

function clearActivityProgress(moduleId, activityName) {
  activityProgressByModule[moduleId] = {
    ...(activityProgressByModule[moduleId] || {}),
    [activityName]: false
  };
  if (activityName === "review") {
    delete activityProgressByModule[moduleId].reviewAnswers;
  }
  saveUserProgress();
  updateModuleLocks();
  renderQuizLaunch();
}

function hasCompletedReviewActivities(moduleId) {
  const progress = activityProgressByModule[moduleId] || {};
  return !!progress.memory && !!progress.review;
}

function hasUnlockedEvaluation(moduleId) {
  return hasViewedAllTheory(moduleId) && hasViewedAllResources(moduleId) && hasCompletedReviewActivities(moduleId);
}

function hasSavedUnitBadge(moduleId) {
  const badgeByUnit = {
    1: "unidad-1-seci",
    2: "unidad-2-estratega"
  };
  const badgeId = badgeByUnit[moduleId];
  return !!badgeId && certificates.some(item => item.achievementId === badgeId || item.badgeId === badgeId);
}

function hasPassedUnitEvaluation(moduleId) {
  const result = quizResultsByModule[moduleId];
  if (!result?.passed) return false;
  if (moduleId === 2) return result.type === "case";
  return true;
}

function hasCompletedUnit(moduleId) {
  return hasPassedUnitEvaluation(moduleId) || hasSavedUnitBadge(moduleId);
}

function getModuleCompletion(moduleId) {
  const theory = getTheoryProgress(moduleId);
  const resources = getResourceProgress(moduleId);
  const activity = activityProgressByModule[moduleId] || {};
  const evaluationDone = hasCompletedUnit(moduleId);
  const total = theory.total + resources.total + 3;
  const complete = theory.viewed + resources.viewed + (activity.memory ? 1 : 0) + (activity.review ? 1 : 0) + (evaluationDone ? 1 : 0);
  return {
    percent: total ? Math.min(100, Math.round((complete / total) * 100)) : 0,
    theoryDone: hasViewedAllTheory(moduleId),
    resourcesDone: hasViewedAllResources(moduleId),
    activitiesDone: hasCompletedReviewActivities(moduleId),
    evaluationDone
  };
}

function getCompletedUnitCount() {
  return Array.from({ length: MAX_MODULES }, (_, index) => index + 1)
    .filter(id => hasCompletedUnit(id)).length;
}

function areCoreModulesApproved() {
  return Array.from({ length: MAX_MODULES }, (_, index) => index + 1)
    .every(id => hasCompletedUnit(id));
}

function hasCompletedFinalEvaluation() {
  return !!finalEvaluationResult?.passed || !!activityProgressByModule.final?.capitalMatrix?.completed;
}

function isFinalEvaluationUnlocked() {
  return areCoreModulesApproved();
}

function isProgramCertificateReady() {
  return areCoreModulesApproved() && hasCompletedFinalEvaluation();
}

function getProgramProgress() {
  return (getModuleCompletion(1).evaluationDone ? 40 : 0)
    + (getModuleCompletion(2).evaluationDone ? 40 : 0)
    + (hasCompletedFinalEvaluation() ? 20 : 0);
}

function getNextProgramActionLabel() {
  if (!selectedCompanion) return "Elige un acompañante";
  if (!getModuleCompletion(1).evaluationDone) return "Continuar con Unidad 1";
  if (!getModuleCompletion(2).evaluationDone) return "Continuar con Unidad 2";
  if (!hasCompletedFinalEvaluation()) return "Abrir evaluación final";
  return "Revisar programa completado";
}

function openNextProgramStep() {
  if (!selectedCompanion) return showToast("Por favor, selecciona un acompañante virtual antes de iniciar.");
  if (!getModuleCompletion(1).evaluationDone) return openModule(1);
  if (!getModuleCompletion(2).evaluationDone) return openModule(2);
  if (!hasCompletedFinalEvaluation()) return openProgramFinalEvaluation();
  renderProfile();
  switchView("profileView");
}

function setHeaderIdentity() {
  const student = document.getElementById("headerStudentName");
  const greeting = document.getElementById("homeGreeting");
  const firstName = getStudentName().split(/\s+/)[0];
  if (student) student.textContent = getStudentName();
  if (greeting) greeting.textContent = `Hola, ${firstName}. Tu recorrido continúa aquí.`;
}

function renderHomeProgress() {
  const overall = getProgramProgress();
  const completedUnits = getCompletedUnitCount();
  const value = document.getElementById("homeProgressValue");
  const bar = document.getElementById("homeProgressBar");
  const track = document.getElementById("homeProgressTrack");
  const text = document.getElementById("homeProgressText");
  const continueButton = document.getElementById("btnContinueJourney");

  if (value) value.textContent = `${overall}%`;
  if (bar) bar.style.width = `${overall}%`;
  if (track) track.setAttribute("aria-valuenow", String(overall));
  if (text) {
    text.textContent = !selectedCompanion
      ? "Selecciona tu acompañante para iniciar el recorrido."
      : hasCompletedFinalEvaluation()
        ? "Programa completado: dos unidades, evaluación final e insignias principales listas."
        : completedUnits === MAX_MODULES
          ? "2 de 2 unidades aprobadas. La evaluación final del programa ya está desbloqueada."
          : `${completedUnits} de ${MAX_MODULES} unidades aprobadas. Avanza para desbloquear la matriz final.`;
  }
  if (continueButton) {
    continueButton.disabled = !selectedCompanion;
    continueButton.textContent = getNextProgramActionLabel();
  }
}

function renderAvatars() {
  document.getElementById("companionGrid").innerHTML = companions.map(c => `
    <button type="button" class="companion-card ${selectedCompanion?.id === c.id ? 'is-selected' : ''}" onclick="selectCompanion('${c.id}')" id="card-${c.id}" aria-pressed="${selectedCompanion?.id === c.id}">
      <span class="companion-check" aria-hidden="true">✓</span>
      <div class="companion-art">${c.art}</div>
      <span class="companion-name">${c.name}</span>
      <small>${c.description}</small>
    </button>
  `).join("");
  renderSelectedCompanion();
  renderHomeProgress();
}

window.selectCompanion = function(id) {
  selectedCompanion = companions.find(c => c.id === id);
  saveUserProgress();
  document.querySelectorAll('.companion-card').forEach(c => {
    c.classList.remove('is-selected');
    c.setAttribute("aria-pressed", "false");
  });
  const selectedCard = document.getElementById(`card-${id}`);
  selectedCard.classList.add('is-selected');
  selectedCard.setAttribute("aria-pressed", "true");
  renderSelectedCompanion();
  renderMap();
  showToast(`${selectedCompanion.name} será tu acompañante.`);
}

function renderSelectedCompanion() {
  const preview = document.getElementById("selectedPreview");
  const name = document.getElementById("selectedName");
  if (!selectedCompanion) {
    preview.innerHTML = '<span class="preview-placeholder" aria-hidden="true">+</span>';
    name.textContent = "Aún no has elegido";
    return;
  }
  preview.innerHTML = selectedCompanion.art;
  name.textContent = `${selectedCompanion.name} te acompañará durante el recorrido`;
}

function getMapGuideMessage() {
  if (!selectedCompanion) return "";
  if (highestUnlocked === 1) return "Comienza por la Unidad 1: distingue conocimiento tácito y explícito, domina el modelo SECI y conecta aprendizaje con innovación.";
  if (hasCompletedFinalEvaluation()) return "Programa completado. Puedes revisar tu matriz final, tus insignias y el certificado general.";
  if (areCoreModulesApproved()) return "Las dos unidades están completas. Ya puedes abrir la Evaluación final del programa.";
  return "La Unidad 2 ya está abierta. Diagnostica Universidad Horizonte, usa los marcadores AR y resuelve el caso integrador.";
}

function renderMap() {
  let html = "";
  for (let i = 1; i <= MAX_MODULES; i++) {
    const isUnlocked = i <= highestUnlocked;
    const isCurrent = i === highestUnlocked;
    const completion = getModuleCompletion(i);
    const status = completion.evaluationDone ? "Completada" : isUnlocked ? `${completion.percent}% completado` : "Bloqueada";
    html += `
      <button type="button" class="course-unit-node ${isUnlocked ? 'is-open' : 'is-locked'} ${isCurrent ? 'is-current' : ''} ${completion.evaluationDone ? 'is-complete' : ''}" onclick="openModule(${i})" aria-disabled="${!isUnlocked}" aria-label="Unidad ${i}: ${isUnlocked ? courseData[i].title : 'bloqueada'}">
        <span class="course-orb"><strong>${isUnlocked ? i : '🔒'}</strong></span>
        <span class="course-unit-label">Unidad ${i}</span>
        <strong class="course-unit-title">${courseData[i].title}</strong>
        <small>${status}</small>
      </button>
    `;
  }
  const completedUnits = getCompletedUnitCount();
  const finalUnlocked = isFinalEvaluationUnlocked();
  const finalDone = hasCompletedFinalEvaluation();
  const finalStatus = finalDone
    ? "Completada"
    : finalUnlocked
      ? "Desbloqueada"
      : "Bloqueada";
  html += `
    <button type="button" class="course-unit-node final-evaluation-node ${finalUnlocked ? 'is-open' : 'is-locked'} ${finalDone ? 'is-complete' : ''}" onclick="openProgramFinalEvaluation()" aria-disabled="${!finalUnlocked}" aria-label="Evaluación final del programa: ${finalStatus}">
      <span class="course-orb"><strong>${finalDone ? '✓' : finalUnlocked ? '★' : '🔒'}</strong></span>
      <span class="course-unit-label">Evaluación final</span>
      <strong class="course-unit-title">Matriz de Valoración del Capital Personal</strong>
      <small>${finalUnlocked ? `Unidades completadas: ${completedUnits} de 2` : `Bloqueada · Unidades completadas: ${completedUnits} de 2`}</small>
    </button>
  `;
  if (selectedCompanion) {
    html += `
      <aside class="map-guide-bubble">
        <div class="map-guide-avatar">${selectedCompanion.art}</div>
        <p>${getMapGuideMessage()}</p>
      </aside>
    `;
  }
  document.getElementById("unitTrack").innerHTML = html;
  renderHomeProgress();
}

// ==========================================
// 4. MÓDULOS Y EVALUACIÓN
// ==========================================
window.openModule = function(id) {
  if (id > highestUnlocked) return showToast("Debes aprobar la unidad anterior primero.");
  if (!selectedCompanion) return showToast("Por favor, selecciona un acompañante virtual antes de iniciar.");
  
  currentModuleId = id;
  const modData = courseData[id];
  if (!modData || id > MAX_MODULES) return showToast("Esta unidad estará disponible en una próxima fase.");
  
  // Actualiza la información central de la unidad abierta.
  document.getElementById("moduleCompanionArt").innerHTML = selectedCompanion.art;
  document.getElementById("modKicker").textContent = id === 1 ? "Unidad 1 · Fundamentos" : "Unidad 2 · Caso integrador";
  document.getElementById("modTitle").textContent = modData.title;
  document.getElementById("modDesc").textContent = modData.desc;
  document.getElementById("companionSpeech").textContent = getCompanionMessage(id);
  resetAssistantChatForModule(id);
  
  // Mapa Mental
  const viewedTheory = getViewedTheorySet(id);
  document.getElementById("mindmapContainer").innerHTML = modData.theoryNodes.map(node => `
    <button type="button" class="mindmap-node ${viewedTheory.has(node.id) ? 'is-viewed' : ''}" id="theory-card-${node.id.replace('.', '-')}" onclick="openTheory('${id}', '${node.id}')">
      <span class="theory-node-number">${node.id}</span>
      <span class="theory-node-status">${viewedTheory.has(node.id) ? 'Revisado' : 'Pendiente'}</span>
      <h3>${node.title}</h3>
      <p>${viewedTheory.has(node.id) ? 'Teoría revisada. Puedes volver a abrirla.' : 'Haz clic para leer la teoría oficial...'}</p>
    </button>
  `).join("");

  renderModuleMedia(modData.media || []);
  renderReinforcement(reinforcementData[id]);
  renderReviewActivities(reviewActivitiesData[id]);
  renderQuizLaunch();
  updateModuleLocks();

  switchView("moduleView");
}

function updateModuleLocks() {
  const theory = getTheoryProgress(currentModuleId);
  const resources = getResourceProgress(currentModuleId);
  const activitiesDone = hasCompletedReviewActivities(currentModuleId);
  const resourcesUnlocked = hasViewedAllTheory(currentModuleId);
  const activitiesUnlocked = resourcesUnlocked && hasViewedAllResources(currentModuleId);
  const evaluationUnlocked = hasUnlockedEvaluation(currentModuleId);
  const message = `Avance requerido: teoría ${theory.viewed}/${theory.total}, recursos ${resources.viewed}/${resources.total}, actividades ${activitiesDone ? 'listas' : 'pendientes'}.`;

  const resourcesSection = document.getElementById("moduleResourcesSection");
  const reinforcementSection = document.getElementById("reinforcementSection");
  const quizSection = document.getElementById("quizSection");

  resourcesSection.classList.toggle("is-locked", !resourcesUnlocked);
  resourcesSection.dataset.lockMessage = `Primero revisa toda la teoría: ${theory.viewed} de ${theory.total} tarjetas vistas.`;

  reinforcementSection.classList.toggle("is-locked", !activitiesUnlocked);
  reinforcementSection.dataset.lockMessage = `Primero abre los recursos e infografías: ${resources.viewed} de ${resources.total} vistos.`;

  quizSection.classList.toggle("is-locked", !evaluationUnlocked);
  quizSection.dataset.lockMessage = message;

  if (!evaluationUnlocked) {
    document.getElementById("quizContainer").innerHTML = `<div class="locked-message">${message}</div>`;
  }
  renderModuleProgress();
}

function renderModuleProgress() {
  const completion = getModuleCompletion(currentModuleId);
  const value = document.getElementById("moduleProgressValue");
  const bar = document.getElementById("moduleProgressBar");
  const track = document.getElementById("moduleProgressTrack");
  const stages = document.getElementById("moduleStageTrack");
  const stageData = [
    { label: "Teoría", done: completion.theoryDone, active: !completion.theoryDone },
    { label: "Recursos", done: completion.resourcesDone, active: completion.theoryDone && !completion.resourcesDone },
    { label: "Práctica", done: completion.activitiesDone, active: completion.resourcesDone && !completion.activitiesDone },
    { label: "Evaluación", done: completion.evaluationDone, active: completion.activitiesDone && !completion.evaluationDone }
  ];

  if (value) value.textContent = `${completion.percent}%`;
  if (bar) bar.style.width = `${completion.percent}%`;
  if (track) track.setAttribute("aria-valuenow", String(completion.percent));
  if (stages) {
    stages.innerHTML = stageData.map((stage, index) => `
      <span class="stage-step ${stage.done ? 'is-done' : ''} ${stage.active ? 'is-active' : ''}">
        <b>${stage.done ? '✓' : index + 1}</b>${stage.label}
      </span>
    `).join("");
  }
}

function renderQuizLaunch() {
  const moduleData = courseData[currentModuleId];
  const challengeTitle = document.getElementById("moduleChallengeTitle");
  const challengeDescription = document.getElementById("moduleChallengeDescription");
  if (moduleData?.completionMode === "case") {
    if (challengeTitle) challengeTitle.textContent = "Caso integrador de la Unidad 2";
    if (challengeDescription) challengeDescription.textContent = "Analiza Universidad Horizonte y toma decisiones para completar la unidad. Necesitas mínimo 80%.";
    renderCaseLaunch();
    return;
  }
  if (challengeTitle) challengeTitle.textContent = "Evaluación ICFES de la Unidad 1";
  if (challengeDescription) challengeDescription.textContent = "Responde 10 preguntas de análisis. Necesitas mínimo 80% para desbloquear el caso.";
  const unlocked = hasUnlockedEvaluation(currentModuleId);
  const theory = getTheoryProgress(currentModuleId);
  const resources = getResourceProgress(currentModuleId);
  const activitiesDone = hasCompletedReviewActivities(currentModuleId);
  const result = quizResultsByModule[currentModuleId];
  if (unlocked && result?.passed) {
    document.getElementById("quizContainer").innerHTML = `
      <div class="evaluation-summary ${result.score === 100 ? 'is-perfect' : ''}">
        <strong>Evaluación Unidad ${currentModuleId} completada: ${result.score}%</strong>
        <span>${result.score === 100 ? 'Felicidades, lograste el 100%.' : 'Aprobaste. Puedes intentar subir al 100%.'}</span>
        <div class="summary-actions">
          <button type="button" class="ghost-button" onclick="reviewStoredModuleEvaluation()">Ver respuestas guardadas</button>
          ${result.score < 100 ? `<button type="button" class="start-button" onclick="startModuleEvaluation(true)">Intentar el 100%</button>` : ''}
        </div>
      </div>
    `;
    return;
  }
  document.getElementById("quizContainer").innerHTML = unlocked
    ? `<button type="button" class="start-button evaluation-launch" onclick="startModuleEvaluation()">Evaluación Unidad ${currentModuleId}</button>`
    : `<div class="locked-message">Para desbloquear: teoría ${theory.viewed}/${theory.total}, recursos ${resources.viewed}/${resources.total}, actividades ${activitiesDone ? 'listas' : 'pendientes'}.</div>`;
}

function renderCapitalMatrixLaunch() {
  const unlocked = hasUnlockedEvaluation(currentModuleId);
  const theory = getTheoryProgress(currentModuleId);
  const resources = getResourceProgress(currentModuleId);
  const activitiesDone = hasCompletedReviewActivities(currentModuleId);
  const result = quizResultsByModule[currentModuleId];
  const matrixProgress = activityProgressByModule[currentModuleId]?.capitalMatrix;
  const container = document.getElementById("quizContainer");
  if (!container) return;

  if (!unlocked) {
    container.innerHTML = `<div class="locked-message">Para abrir la evaluación final: teoría ${theory.viewed}/${theory.total}, recursos ${resources.viewed}/${resources.total}, actividades ${activitiesDone ? 'listas' : 'pendientes'}.</div>`;
    return;
  }

  if (result?.passed && result.type === "capitalMatrix") {
    container.innerHTML = `
      <div class="evaluation-summary is-perfect">
        <strong>Insignia desbloqueada: Capital Personal Estratégico</strong>
        <span>Resultado guardado: ${matrixProgress?.total || result.rawScore || 0}/150 · ${matrixProgress?.level || result.level || "Matriz completada"}.</span>
        <div class="summary-actions">
          <button type="button" class="ghost-button" onclick="openFinalCapitalMatrix()">Revisar evaluación final</button>
          <button type="button" class="start-button" onclick="downloadCapitalMatrixBalance(${currentModuleId})">Descargar balance PDF</button>
        </div>
      </div>`;
    return;
  }

  container.innerHTML = `
    <div class="case-launch-card final-matrix-launch">
      <span class="space-kicker">Cierre evaluativo</span>
      <h3>${capitalMatrixActivity.title}</h3>
      <p>${capitalMatrixActivity.description}</p>
      <div class="case-launch-meta">
        <span><b>30</b> aspectos valorados</span>
        <span><b>7</b> preguntas críticas</span>
        <span><b>1</b> balance final</span>
      </div>
      <button type="button" class="start-button" onclick="openFinalCapitalMatrix()">Iniciar evaluación final</button>
    </div>`;
}

window.openFinalCapitalMatrix = function() {
  openProgramFinalEvaluation();
}

window.openProgramFinalEvaluation = function() {
  if (!selectedCompanion) return showToast("Selecciona un acompañante antes de abrir la evaluación final.");
  if (!isFinalEvaluationUnlocked()) {
    return showToast(`Evaluación final bloqueada. Completa la Unidad 1 y la Unidad 2 (${getCompletedUnitCount()} de 2).`);
  }
  setAssistantContext({
    activity: "Evaluación final del programa",
    topic: "Matriz de Valoración del Capital Personal",
    question: "Balance de capital personal",
    selectedAnswer: "",
    expectedAnswer: "",
    hint: "Valora con honestidad y argumenta acciones concretas de mejora.",
    feedback: "La matriz conecta capital humano, intelectual y relacional con tu proyecto personal.",
    isCorrect: null,
    attempts: 0
  });
  openCapitalMatrix("final", null, capitalMatrixActivity);
}

function renderCaseLaunch() {
  const unlocked = hasUnlockedEvaluation(currentModuleId);
  const theory = getTheoryProgress(currentModuleId);
  const resources = getResourceProgress(currentModuleId);
  const activitiesDone = hasCompletedReviewActivities(currentModuleId);
  const result = quizResultsByModule[currentModuleId];
  const container = document.getElementById("quizContainer");

  if (!unlocked) {
    container.innerHTML = `<div class="locked-message">Para abrir el caso: teoría ${theory.viewed}/${theory.total}, recursos ${resources.viewed}/${resources.total}, actividades ${activitiesDone ? 'listas' : 'pendientes'}.</div>`;
    return;
  }

  if (result?.passed && result.type === "case") {
    container.innerHTML = `
      <div class="evaluation-summary is-perfect">
        <strong>Caso resuelto: ${result.score}% de decisiones acertadas</strong>
        <span>Tu propuesta quedó guardada. Puedes revisar el análisis o repetir la simulación.</span>
        <div class="summary-actions">
          <button type="button" class="ghost-button" onclick="reviewCaseSimulation()">Revisar decisiones</button>
          <button type="button" class="start-button" onclick="startCaseSimulation(true)">Repetir simulación</button>
        </div>
      </div>`;
    return;
  }

  container.innerHTML = `
    <div class="case-launch-card">
      <span class="space-kicker">Comité de transformación</span>
      <h3>${caseScenario.title}</h3>
      <p>${caseScenario.summary}</p>
      <div class="case-launch-meta">
        <span><b>${caseScenario.decisions.length}</b> decisiones</span>
        <span><b>80%</b> desempeño esperado</span>
        <span><b>1</b> estrategia final</span>
      </div>
      <button type="button" class="start-button" onclick="startCaseSimulation()">Resolver caso</button>
    </div>`;
}

window.startCaseSimulation = function(forceRetry = false) {
  if (!hasUnlockedEvaluation(2)) return updateModuleLocks();
  const result = quizResultsByModule[2];
  if (result?.passed && !forceRetry) return reviewCaseSimulation();
  currentCaseStep = 0;
  currentCaseAnswers = [];
  openQuizModal(caseScenario.title, "Caso integrador");
  renderCaseStep();
}

function renderCaseStep() {
  const decision = caseScenario.decisions[currentCaseStep];
  setAssistantContext({
    activity: "Caso integrador",
    topic: decision.title,
    question: decision.prompt,
    selectedAnswer: "",
    expectedAnswer: decision.options[decision.correct],
    hint: "Identifica primero el capital o proceso afectado y luego evalúa si la acción resuelve la causa.",
    feedback: decision.rationale,
    isCorrect: null,
    attempts: currentCaseStep
  });
  const progress = Math.round((currentCaseStep / caseScenario.decisions.length) * 100);
  document.getElementById("quizModalBody").innerHTML = `
    <div class="case-simulation">
      <div class="case-progress-head">
        <span>Decisión ${currentCaseStep + 1} de ${caseScenario.decisions.length}</span>
        <strong>${progress}%</strong>
      </div>
      <div class="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}">
        <span style="width:${progress}%"></span>
      </div>
      <article class="case-decision-card">
        <span class="space-kicker">${decision.title}</span>
        <h3>${decision.prompt}</h3>
        <div class="case-options">
          ${decision.options.map((option, index) => `
            <button type="button" onclick="selectCaseOption(${index}, this)">
              <b>${String.fromCharCode(65 + index)}</b>
              <span>${escapeHtml(option)}</span>
            </button>
          `).join("")}
        </div>
        <div class="case-decision-feedback" id="caseDecisionFeedback" aria-live="polite"></div>
      </article>
    </div>`;
}

window.selectCaseOption = function(optionIndex, button) {
  const decision = caseScenario.decisions[currentCaseStep];
  if (!decision || currentCaseAnswers[currentCaseStep] !== undefined) return;
  currentCaseAnswers[currentCaseStep] = optionIndex;
  setAssistantContext({
    activity: "Caso integrador",
    topic: decision.title,
    question: decision.prompt,
    selectedAnswer: decision.options[optionIndex],
    expectedAnswer: decision.options[decision.correct],
    hint: "Relaciona la decisión con capital humano, intelectual, relacional, tecnología o gobernanza.",
    feedback: decision.rationale,
    isCorrect: optionIndex === decision.correct,
    attempts: currentCaseStep + 1
  });

  document.querySelectorAll(".case-options button").forEach((optionButton, index) => {
    optionButton.disabled = true;
    optionButton.classList.toggle("is-correct", index === decision.correct);
    optionButton.classList.toggle("is-selected-wrong", index === optionIndex && optionIndex !== decision.correct);
  });

  const correct = optionIndex === decision.correct;
  const feedback = document.getElementById("caseDecisionFeedback");
  feedback.className = `case-decision-feedback ${correct ? "is-success" : "is-warning"}`;
  feedback.innerHTML = `
    <strong>${correct ? "Decisión bien fundamentada" : "Revisa la relación entre el problema y el capital afectado"}</strong>
    <p>${decision.rationale}</p>
    <button type="button" class="start-button" onclick="advanceCaseSimulation()">${currentCaseStep + 1 === caseScenario.decisions.length ? "Ver resultado" : "Siguiente decisión"}</button>`;
  button.focus();
}

window.advanceCaseSimulation = function() {
  if (currentCaseAnswers[currentCaseStep] === undefined) return;
  currentCaseStep++;
  if (currentCaseStep < caseScenario.decisions.length) {
    renderCaseStep();
    return;
  }
  finishCaseSimulation();
}

function finishCaseSimulation() {
  const correct = currentCaseAnswers.reduce((total, answer, index) =>
    total + (answer === caseScenario.decisions[index].correct ? 1 : 0), 0);
  const score = Math.round((correct / caseScenario.decisions.length) * 100);
  const passed = score >= 80;
  const previous = quizResultsByModule[2];

  if (!previous || score >= previous.score) {
    quizResultsByModule[2] = {
      type: "case",
      score,
      correctas: correct,
      total: caseScenario.decisions.length,
      answers: [...currentCaseAnswers],
      passed,
      date: new Date().toLocaleDateString("es-CO")
    };
    saveUserProgress();
  }

  if (passed) {
    saveCertificate(2, courseData[2].title);
    showToast(`Caso resuelto con ${score}% de decisiones acertadas.`);
  }

  document.getElementById("quizModalBody").innerHTML = `
    <div class="final-result ${passed ? "is-success" : "is-warning"}">
      <span class="space-kicker">Resultado del comité</span>
      <h3>${passed ? "Estrategia aprobada" : "La estrategia necesita ajustes"}</h3>
      <p>Tomaste ${correct} de ${caseScenario.decisions.length} decisiones correctas (${score}%).</p>
      <p>${passed ? "Conectaste capital humano, intelectual, relacional y tecnología en una propuesta sostenible." : "Revisa el diagnóstico y vuelve a intentarlo. El objetivo es alcanzar al menos 80%."}</p>
      <div class="summary-actions">
        <button type="button" class="ghost-button" onclick="reviewCaseSimulation()">Revisar decisiones</button>
        <button type="button" class="start-button" onclick="startCaseSimulation(true)">Repetir caso</button>
      </div>
    </div>`;
  renderQuizLaunch();
  renderMap();
}

window.reviewCaseSimulation = function() {
  const result = quizResultsByModule[2];
  if (!result?.answers) return startCaseSimulation(true);
  openQuizModal(caseScenario.title, "Análisis guardado");
  document.getElementById("quizModalBody").innerHTML = `
    <div class="case-review-list">
      ${caseScenario.decisions.map((decision, index) => {
        const answer = result.answers[index];
        const correct = answer === decision.correct;
        return `<article class="${correct ? "is-correct" : "is-wrong"}">
          <span>Decisión ${index + 1}</span>
          <h3>${decision.title}</h3>
          <p><strong>Tu respuesta:</strong> ${escapeHtml(decision.options[answer] || "Sin respuesta")}</p>
          <p>${decision.rationale}</p>
        </article>`;
      }).join("")}
      <button type="button" class="start-button" onclick="startCaseSimulation(true)">Repetir simulación</button>
    </div>`;
}

window.startModuleEvaluation = function(forceRetry = false) {
  if (!hasUnlockedEvaluation(currentModuleId)) return updateModuleLocks();
  const result = quizResultsByModule[currentModuleId];
  if (result?.passed && !forceRetry) return reviewStoredModuleEvaluation();
  openQuizModal(`Evaluación Unidad ${currentModuleId}`, `Unidad ${currentModuleId}`);
  renderQuizForm(courseData[currentModuleId].quiz, "submitQuiz()", "Calificar evaluación", "quizModalBody");
}

function renderQuizForm(questions, submitAction, buttonText, targetId = "quizContainer", storedAnswers = null, disabled = false) {
  let quizHtml = `<form id="quizForm" class="quiz-form">`;
  questions.forEach((q, idx) => {
    quizHtml += `
      <div class="quiz-question">
        <h4>${idx + 1}. ${q.q}</h4>
        ${q.options.map((opt, optIdx) => `
          <label class="quiz-option ${storedAnswers?.[idx] === optIdx ? 'is-selected-answer' : ''}">
            <input type="radio" name="q${idx}" value="${optIdx}" ${storedAnswers?.[idx] === optIdx ? 'checked' : ''} ${disabled ? 'disabled' : ''} required> ${opt}
          </label>
        `).join("")}
      </div>`;
  });
  quizHtml += disabled ? `</form>` : `<button type="button" class="start-button" onclick="${submitAction}" style="width:100%; margin-top:10px;">${buttonText}</button></form>`;
  document.getElementById(targetId).innerHTML = quizHtml;
}

window.reviewStoredModuleEvaluation = function() {
  const result = quizResultsByModule[currentModuleId];
  if (!result) return startModuleEvaluation(true);
  openQuizModal(`Evaluación Unidad ${currentModuleId}`, `Resultado ${result.score}%`);
  const intro = `
    <div class="evaluation-summary ${result.score === 100 ? 'is-perfect' : ''}">
      <strong>${result.score === 100 ? 'Felicidades, completaste la evaluación con 100%.' : 'Evaluación aprobada.'}</strong>
      <span>Resultado guardado: ${result.correctas} de ${result.total} respuestas correctas (${result.score}%).</span>
      ${result.score < 100 ? `<button type="button" class="start-button" onclick="startModuleEvaluation(true)">Intentar el 100%</button>` : ''}
    </div>
  `;
  renderQuizForm(courseData[currentModuleId].quiz, "submitQuiz()", "Calificar evaluación", "quizModalBody", result.answers, true);
  document.getElementById("quizModalBody").insertAdjacentHTML("afterbegin", intro);
}

function renderModuleMedia(mediaItems) {
  const container = document.getElementById("mediaContainer");
  if (!container) return;
  const visibleItems = mediaItems.filter(item => item.type !== "video");
  const viewedResources = getViewedResourceSet(currentModuleId);

  container.innerHTML = visibleItems.map((item) => {
    const originalIndex = mediaItems.indexOf(item);
    const icon = item.type === "infografia" ? "▦" : item.type === "actividad" ? "✎" : "✦";
    const isCompleted = item.type === "actividad"
      ? item.activityKind === "capitalMatrix"
        ? !!activityProgressByModule[currentModuleId]?.capitalMatrix?.completed
        : !!activityProgressByModule[currentModuleId]?.[item.activityKind]
      : viewedResources.has(String(originalIndex));
    const actionLabel = item.type === "actividad"
      ? isCompleted
        ? "Actividad completada · Revisar"
        : activityProgressByModule[currentModuleId]?.[item.activityKind]
          ? "Continuar actividad guardada"
          : "Realizar actividad"
      : isCompleted ? "Revisado · Volver a abrir" : "Ver contenido completo";
    const thumbnail = item.imageUrl
      ? `<span class="media-thumb" aria-hidden="true"><img src="${item.imageUrl}" alt=""></span>`
      : `<span class="media-icon">${icon}</span>`;

    return `
      <button class="media-card ${isCompleted ? 'is-completed' : ''}" type="button" onclick="openResource(${currentModuleId}, ${originalIndex})">
        ${isCompleted ? '<span class="media-complete-badge">✓ Completado</span>' : ''}
        ${thumbnail}
        <span class="media-type">${item.type}</span>
        <strong>${item.title}</strong>
        <small>${item.description}</small>
        <em>${actionLabel}</em>
      </button>
    `;
  }).join("");
}

window.openResource = function(modId, mediaIndex) {
  const item = courseData[modId]?.media?.[mediaIndex];
  if (!item) return;
  if (item.type === "ar") return openARExperience(modId, mediaIndex);
  if (item.type === "video") return openVideo(modId, mediaIndex);
  if (item.activityKind === "capitalMatrix") return openCapitalMatrix(modId, mediaIndex, item);
  if (item.activityKind === "gratitudeJournal") return openGratitudeJournal(modId, mediaIndex, item);
  if (item.activityKind === "happinessCurve") return openHappinessCurve(modId, mediaIndex, item);
  if (item.activityKind === "positiveHabitsPlan") return openPositiveHabitsPlan(modId, mediaIndex, item);
  saveViewedResource(modId, mediaIndex);
  updateModuleLocks();

  const image = item.imageUrl ? `<img class="resource-image" src="${item.imageUrl}" alt="${item.title}">` : "";
  const body = `
    ${image}
    <p>${item.description}</p>
    ${item.content || "<p>Recurso preparado para ampliar la teoría de esta unidad.</p>"}
  `;
  openContentModal(item.title, body);
}

function getPublicARLink() {
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  url.searchParams.set("experience", "capitales");
  return url.toString();
}

function getARTargetLink(targetId) {
  const url = new URL(getPublicARLink());
  url.searchParams.set("target", targetId);
  return url.toString();
}

function renderInlineQr(host, link, size = 62) {
  if (!host) return;
  host.innerHTML = "";
  if (window.QRCode) {
    new window.QRCode(host, {
      text: link,
      width: size,
      height: size,
      colorDark: "#07110f",
      colorLight: "#ffffff",
      correctLevel: window.QRCode.CorrectLevel.H
    });
  } else {
    host.textContent = "QR";
  }
}

function renderARTargets() {
  const targetList = document.getElementById("arTargetList");
  if (!targetList) return;
  targetList.innerHTML = arTargets.map((target, index) => `
    <button type="button" class="ar-target-button ${target.id === selectedARTargetId ? "is-selected" : ""}" onclick="selectARTarget('${target.id}')">
      <span class="ar-marker-mini" id="arMarker-${target.id}" aria-label="QR real para abrir la capa ${String.fromCharCode(65 + index)}"></span>
      <span><strong>Capa ${String.fromCharCode(65 + index)}</strong><small>QR real escaneable · selecciona para ampliar</small></span>
    </button>
  `).join("");
  arTargets.forEach(target => renderInlineQr(document.getElementById(`arMarker-${target.id}`), getARTargetLink(target.id), 72));
  selectARTarget(selectedARTargetId, false, false);
}

window.selectARTarget = function(targetId, rerenderList = true, reveal = false) {
  const target = arTargets.find(item => item.id === targetId) || arTargets[0];
  if (!target) return;
  selectedARTargetId = target.id;
  if (rerenderList) renderARTargets();
  const instructions = document.getElementById("arScanInstructions");
  if (instructions && !detectedARTargetId) {
    instructions.innerHTML = `
      <span class="space-kicker">QR preparado</span>
      <strong>Código real listo para escanear</strong>
      <p>Escanea el QR de la capa seleccionada. La teoría se abrirá en una vista nueva, sin superponerse a la cámara.</p>`;
  }
  renderARQrCode();
  if (reveal) revealARTarget(target.id, "manual");
}

function resetARScanState() {
  detectedARTargetId = null;
  const stage = document.querySelector(".ar-camera-stage");
  const floatingCard = document.getElementById("arFloatingCard");
  const insight = document.getElementById("arInsightPanel");
  const question = document.getElementById("arQuestionPanel");
  const instructions = document.getElementById("arScanInstructions");
  if (stage) stage.classList.remove("is-camera-active", "has-detected-layer");
  if (floatingCard) floatingCard.hidden = true;
  if (insight) insight.hidden = true;
  if (question) question.hidden = true;
  if (instructions) {
    instructions.hidden = false;
    instructions.innerHTML = `
      <span class="space-kicker">Escaneo pendiente</span>
      <strong>Escanea un QR real de capital</strong>
      <p>Selecciona una capa y escanea su código. La teoría se abrirá en una vista nueva y ordenada.</p>`;
  }
}

function fillList(targetId, values = []) {
  const host = document.getElementById(targetId);
  if (host) host.innerHTML = values.map(item => `<li>${escapeHtml(item)}</li>`).join("");
}

function populateARTheoryView(target) {
  const title = document.getElementById("arTheoryTitle");
  const intro = document.getElementById("arTheoryIntro");
  const image = document.getElementById("arTheoryImage");
  const label = document.getElementById("arTheoryLabel");
  if (title) title.textContent = target.name;
  if (intro) intro.textContent = target.description;
  if (image) {
    image.src = target.image;
    image.alt = `Representación visual de ${target.name}`;
  }
  if (label) {
    label.textContent = "Capa detectada";
    label.style.setProperty("--ar-accent", target.color);
  }
  document.getElementById("arTheoryDetail").textContent = target.detail || target.description;
  document.getElementById("arTheoryExample").textContent = target.example || "";
  document.getElementById("arTheoryChallenge").textContent = target.challenge || "";
  fillList("arTheoryCharacteristics", target.characteristics || []);
  fillList("arTheoryFacts", target.facts || []);
  fillList("arTheoryRisks", target.risks || []);
  fillList("arTheoryActions", target.actions || []);
  const resources = document.getElementById("arTheoryResources");
  if (resources) resources.innerHTML = (target.resources || []).map(item => `<span>${escapeHtml(item)}</span>`).join("");
}

function openARTheoryView(target, source = "scan") {
  populateARTheoryView(target);
  const liveRegion = document.getElementById("liveRegion");
  if (liveRegion) liveRegion.textContent = source === "scan"
    ? `Capa detectada: ${target.name}. Se abrió la teoría en una vista nueva.`
    : `Escaneo guiado: ${target.name}. Se abrió la teoría en una vista nueva.`;
  switchView("arTheoryView");
}

function revealARTarget(targetId, source = "scan") {
  const target = arTargets.find(item => item.id === targetId) || arTargets[0];
  if (!target) return;
  selectedARTargetId = target.id;
  detectedARTargetId = target.id;

  const floatingCard = document.getElementById("arFloatingCard");
  const question = document.getElementById("arQuestionPanel");
  const insight = document.getElementById("arInsightPanel");
  const instructions = document.getElementById("arScanInstructions");
  const stage = document.querySelector(".ar-camera-stage");

  if (floatingCard) floatingCard.hidden = true;
  if (question) question.hidden = true;
  if (instructions) instructions.hidden = true;
  if (stage) stage.classList.add("is-camera-active", "has-detected-layer");
  if (insight) insight.hidden = true;
  setAssistantContext({
    activity: "Realidad aumentada",
    topic: target.name,
    question: target.challenge,
    selectedAnswer: "",
    expectedAnswer: target.description,
    hint: "Observa qué evidencia del caso se conecta con esta capa.",
    feedback: target.detail,
    isCorrect: null,
    attempts: 1
  });
  renderARTargets();
  if (arActiveModuleId && arActiveMediaIndex !== null) {
    saveViewedResource(arActiveModuleId, arActiveMediaIndex);
    markActivityComplete(arActiveModuleId, "ar");
    unlockBadge("laboratorio-ar", true);
    if (currentModuleId === arActiveModuleId) renderModuleMedia(courseData[arActiveModuleId].media || []);
  }
  openARTheoryView(target, source);
}

function renderARQrCode() {
  const host = document.getElementById("arQrCode");
  if (!host) return;
  const link = getARTargetLink(selectedARTargetId);
  renderInlineQr(host, link, 188);
  host.dataset.target = selectedARTargetId;
}

function initializeARView(returnView = "homeView") {
  arReturnView = returnView;
  const urlTarget = new URLSearchParams(window.location.search).get("target");
  if (arTargets.some(target => target.id === urlTarget)) selectedARTargetId = urlTarget;
  resetARScanState();
  renderARTargets();
  renderARQrCode();
  document.getElementById("arCameraFallback").hidden = false;
  document.getElementById("btnStartARCamera").hidden = false;
  document.getElementById("btnStopARCamera").hidden = true;
  if (urlTarget && arTargets.some(target => target.id === urlTarget)) {
    window.setTimeout(() => revealARTarget(urlTarget, "scan"), 350);
  }
}

window.openARExperience = function(modId, mediaIndex) {
  arActiveModuleId = modId;
  arActiveMediaIndex = mediaIndex;
  initializeARView("moduleView");
  switchView("arView");
}

function decodeARTargetFromValue(value) {
  try {
    const url = new URL(value);
    if (url.searchParams.get("experience") !== "capitales") return null;
    const target = url.searchParams.get("target");
    return arTargets.some(item => item.id === target) ? target : null;
  } catch {
    return arTargets.some(item => item.id === value) ? value : null;
  }
}

function stopARScannerLoop() {
  if (arScanTimer) {
    window.clearTimeout(arScanTimer);
    arScanTimer = null;
  }
}

async function scanARFrame() {
  const video = document.getElementById("arCamera");
  if (!arCameraStream || !arBarcodeDetector || !video || video.readyState < 2) return;
  try {
    const codes = await arBarcodeDetector.detect(video);
    const detected = codes
      .map(code => decodeARTargetFromValue(code.rawValue || ""))
      .find(Boolean);
    if (detected) {
      revealARTarget(detected, "scan");
      return;
    }
  } catch (error) {
    console.warn("No fue posible leer el marcador AR.", error);
  }
  if (arCameraStream) {
    arScanTimer = window.setTimeout(scanARFrame, 700);
  }
}

async function startARScannerLoop() {
  stopARScannerLoop();
  if (!("BarcodeDetector" in window)) {
    showToast("Tu navegador no detecta QR desde video. Usa el escaneo guiado del marcador seleccionado.");
    return;
  }
  try {
    arBarcodeDetector = arBarcodeDetector || new BarcodeDetector({ formats: ["qr_code"] });
    arScanTimer = window.setTimeout(scanARFrame, 500);
  } catch (error) {
    console.warn("BarcodeDetector no está disponible.", error);
    showToast("Usa el escaneo guiado: este navegador no activó el lector QR.");
  }
}

async function startARCamera() {
  const video = document.getElementById("arCamera");
  if (!navigator.mediaDevices?.getUserMedia) {
    showToast("Este navegador no permite acceso a cámara. Puedes usar el modo visual.");
    return;
  }
  try {
    arCameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } },
      audio: false
    });
    video.srcObject = arCameraStream;
    await video.play();
    document.querySelector(".ar-camera-stage")?.classList.add("is-camera-active");
    document.getElementById("arCameraFallback").hidden = true;
    document.getElementById("btnStartARCamera").hidden = true;
    document.getElementById("btnStopARCamera").hidden = false;
    startARScannerLoop();
    showToast("Cámara activada. Apunta a un marcador QR de capital.");
  } catch (error) {
    console.warn("No fue posible activar la cámara.", error);
    showToast("No se pudo activar la cámara. Revisa el permiso del navegador.");
  }
}

function stopARCamera() {
  stopARScannerLoop();
  if (arCameraStream) {
    arCameraStream.getTracks().forEach(track => track.stop());
    arCameraStream = null;
  }
  const video = document.getElementById("arCamera");
  if (video) video.srcObject = null;
  const fallback = document.getElementById("arCameraFallback");
  if (fallback) fallback.hidden = false;
  document.querySelector(".ar-camera-stage")?.classList.remove("is-camera-active", "has-detected-layer");
  const startButton = document.getElementById("btnStartARCamera");
  const stopButton = document.getElementById("btnStopARCamera");
  if (startButton) startButton.hidden = false;
  if (stopButton) stopButton.hidden = true;
}

function getCapitalMatrixLevel(total) {
  if (total >= 120) return { name: "Capital personal muy alto", tone: "very-high" };
  if (total >= 90) return { name: "Capital personal alto", tone: "high" };
  if (total >= 60) return { name: "Capital personal medio", tone: "medium" };
  if (total >= 30) return { name: "Capital personal bajo", tone: "low" };
  return { name: "Completa las 30 valoraciones", tone: "pending" };
}

function renderCapitalRatingRows(capital, savedRatings = []) {
  return capital.aspects.map((aspect, index) => `
    <fieldset class="capital-rating-row">
      <legend><span>${index + 1}</span>${escapeHtml(aspect)}</legend>
      <div class="capital-rating-scale" role="radiogroup" aria-label="${escapeHtml(aspect)}">
        ${capitalMatrixData.scale.map(scaleItem => `
          <label title="${scaleItem.label}">
            <input
              type="radio"
              name="capital-${capital.id}-${index}"
              value="${scaleItem.value}"
              ${Number(savedRatings[index]) === scaleItem.value ? "checked" : ""}
              required
            >
            <span><b>${scaleItem.value}</b><small>${scaleItem.label}</small></span>
          </label>
        `).join("")}
      </div>
    </fieldset>
  `).join("");
}

function openCapitalMatrix(modId, mediaIndex, item, replaceCurrent = false) {
  const matrixKey = String(modId);
  const modArg = `'${matrixKey.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
  const mediaArg = mediaIndex === null || mediaIndex === undefined ? "null" : String(mediaIndex);
  const saved = activityProgressByModule[matrixKey]?.capitalMatrix || {};
  const photo = profilePictureDataUrl
    ? `<img src="${profilePictureDataUrl}" alt="Fotografía del perfil de ${escapeHtml(getStudentName())}">`
    : `<span aria-hidden="true">◎</span>`;

  const body = `
    <section class="capital-matrix-intro">
      <div>
        <span class="space-kicker">Actividad de autovaloración</span>
        <h3>Mi capital personal: lo que realmente valgo</h3>
        <p>Reconoce tus conocimientos, habilidades y relaciones como activos para la vida personal, académica y profesional.</p>
        <div class="capital-scale-legend" aria-label="Escala de valoración">
          ${capitalMatrixData.scale.map(item => `<span><b>${item.value}</b>${item.label}</span>`).join("")}
        </div>
      </div>
      <div class="capital-profile-preview">
        ${photo}
        <small>${profilePictureDataUrl ? "Foto tomada de Mi Perfil" : "Puedes agregar una foto desde Mi Perfil"}</small>
      </div>
    </section>

    <details class="capital-visual-guide">
      <summary>Ver guía visual original de la actividad</summary>
      <img src="${item.imageUrl}" alt="Infografía con las instrucciones de la matriz de valoración del capital personal">
    </details>

    <form id="capitalMatrixForm" class="capital-matrix-form" onsubmit="finalizeCapitalMatrix(event, ${modArg}, ${mediaArg})">
      <nav class="capital-matrix-jump" aria-label="Secciones de la actividad">
        ${capitalMatrixData.capitals.map((capital, index) => `<a href="#capital-${capital.id}">${index + 1}. ${capital.name}</a>`).join("")}
        <a href="#capital-reflection">4. Reflexión</a>
      </nav>

      <div class="capital-matrix-summary" aria-live="polite">
        <div>
          <span>Aspectos valorados</span>
          <strong id="capitalAnsweredCount">0 / 30</strong>
        </div>
        <div>
          <span>Puntaje total</span>
          <strong id="capitalGrandTotal">0 / 150</strong>
        </div>
        <div>
          <span>Interpretación</span>
          <strong id="capitalLevelName">Completa las valoraciones</strong>
        </div>
      </div>

      ${capitalMatrixData.capitals.map((capital, index) => `
        <section class="capital-section" id="capital-${capital.id}" style="--capital-color:${capital.color}">
          <header>
            <span>${index + 1}</span>
            <div>
              <h3>${capital.name}</h3>
              <p>${capital.subtitle}</p>
            </div>
            <strong id="capitalTotal-${capital.id}">0 / 50</strong>
          </header>
          <div class="capital-section-progress"><span id="capitalBar-${capital.id}"></span></div>
          <div class="capital-rating-list">
            ${renderCapitalRatingRows(capital, saved.ratings?.[capital.id] || [])}
          </div>
        </section>
      `).join("")}

      <section class="capital-insight-panel">
        <div>
          <span class="space-kicker">Lectura del resultado</span>
          <h3 id="capitalInsightTitle">Tu balance aparecerá aquí</h3>
          <p id="capitalInsightText">Valora los 30 aspectos para identificar tu capital más fortalecido y el que requiere mayor desarrollo.</p>
        </div>
        <div class="capital-level-scale">
          <span><b>120–150</b> Muy alto</span>
          <span><b>90–119</b> Alto</span>
          <span><b>60–89</b> Medio</span>
          <span><b>30–59</b> Bajo</span>
        </div>
      </section>

      <section class="capital-reflection-section" id="capital-reflection">
        <span class="space-kicker">Reflexión crítica</span>
        <h3>Interpreta lo que descubriste</h3>
        <p>Responde con argumentos y conecta tu experiencia con la gestión del conocimiento.</p>
        <div class="capital-reflection-grid">
          ${capitalMatrixData.reflections.map((question, index) => `
            <label>
              <span><b>${index + 1}</b>${question}</span>
              <textarea name="capital-reflection-${index}" rows="4" minlength="20" required>${escapeHtml(saved.reflections?.[index] || "")}</textarea>
            </label>
          `).join("")}
        </div>
      </section>

      <section class="capital-balance-section">
        <span class="space-kicker">Producto final</span>
        <h3>El valor de lo que sé, lo que soy y las personas que me acompañan</h3>
        <p>Construye tu Balance de Capital Personal. Explica cómo se formaron tus tres capitales y qué acciones realizarás para fortalecerlos.</p>
        <textarea id="capitalBalanceText" name="capital-balance" rows="12" minlength="300" required>${escapeHtml(saved.balance || "")}</textarea>
        <div class="capital-balance-meta">
          <span id="capitalBalanceCount">0 caracteres · mínimo 300</span>
          <span>El balance final puede descargarse como PDF.</span>
        </div>
      </section>

      <div class="capital-matrix-actions">
        <p id="capitalMatrixStatus" aria-live="polite">${saved.completed ? "Actividad completada. Puedes actualizarla o descargar tu balance." : saved.updatedAt ? "Borrador recuperado y listo para continuar." : "Tu avance se guardará automáticamente."}</p>
        <div>
          <button type="button" class="ghost-button" onclick="saveCapitalMatrixDraft(${modArg}, ${mediaArg}, false)">Guardar borrador</button>
          ${saved.completed ? `<button type="button" class="ghost-button" onclick="downloadCapitalMatrixBalance(${modArg})">Descargar balance PDF</button>` : ""}
          <button type="submit" class="start-button">${saved.completed ? "Actualizar actividad" : "Finalizar actividad"}</button>
        </div>
      </div>
    </form>
  `;

  openContentModal(item.title, body, [], replaceCurrent);
  const form = document.getElementById("capitalMatrixForm");
  if (!form) return;
  form.addEventListener("input", () => {
    updateCapitalMatrixSummary();
    scheduleCapitalMatrixDraftSave(matrixKey, mediaIndex);
  });
  form.addEventListener("change", () => {
    updateCapitalMatrixSummary();
    scheduleCapitalMatrixDraftSave(matrixKey, mediaIndex);
  });
  updateCapitalMatrixSummary();
}

function collectCapitalMatrixForm(completed = false) {
  const form = document.getElementById("capitalMatrixForm");
  if (!form) return null;
  const ratings = {};
  const totals = {};

  capitalMatrixData.capitals.forEach(capital => {
    ratings[capital.id] = capital.aspects.map((_, index) => {
      const selected = form.querySelector(`input[name="capital-${capital.id}-${index}"]:checked`);
      return selected ? Number(selected.value) : null;
    });
    totals[capital.id] = ratings[capital.id].reduce((sum, value) => sum + (Number(value) || 0), 0);
  });

  const reflections = capitalMatrixData.reflections.map((_, index) =>
    form.elements.namedItem(`capital-reflection-${index}`)?.value.trim() || "");
  const balance = form.elements.namedItem("capital-balance")?.value.trim() || "";
  const total = Object.values(totals).reduce((sum, value) => sum + value, 0);

  return {
    ratings,
    totals,
    total,
    level: getCapitalMatrixLevel(total).name,
    reflections,
    balance,
    completed,
    updatedAt: new Date().toISOString()
  };
}

function updateCapitalMatrixSummary() {
  const data = collectCapitalMatrixForm(false);
  if (!data) return;
  const answered = Object.values(data.ratings).flat().filter(value => value !== null).length;
  const level = getCapitalMatrixLevel(data.total);
  const answeredNode = document.getElementById("capitalAnsweredCount");
  const totalNode = document.getElementById("capitalGrandTotal");
  const levelNode = document.getElementById("capitalLevelName");
  if (answeredNode) answeredNode.textContent = `${answered} / 30`;
  if (totalNode) totalNode.textContent = `${data.total} / 150`;
  if (levelNode) {
    levelNode.textContent = level.name;
    levelNode.dataset.level = level.tone;
  }

  capitalMatrixData.capitals.forEach(capital => {
    const total = data.totals[capital.id];
    const totalLabel = document.getElementById(`capitalTotal-${capital.id}`);
    const bar = document.getElementById(`capitalBar-${capital.id}`);
    if (totalLabel) totalLabel.textContent = `${total} / 50`;
    if (bar) bar.style.width = `${Math.round((total / 50) * 100)}%`;
  });

  const insightTitle = document.getElementById("capitalInsightTitle");
  const insightText = document.getElementById("capitalInsightText");
  if (answered === 30) {
    const ranked = capitalMatrixData.capitals
      .map(capital => ({ ...capital, total: data.totals[capital.id] }))
      .sort((a, b) => b.total - a.total);
    if (insightTitle) insightTitle.textContent = `${level.name}: ${data.total} puntos`;
    if (insightText) {
      insightText.textContent = `Tu capital más fortalecido es ${ranked[0].name.toLowerCase()} (${ranked[0].total}/50). El área con mayor oportunidad de desarrollo es ${ranked[ranked.length - 1].name.toLowerCase()} (${ranked[ranked.length - 1].total}/50).`;
    }
  }

  const balance = document.getElementById("capitalBalanceText");
  const count = document.getElementById("capitalBalanceCount");
  if (balance && count) count.textContent = `${balance.value.trim().length} caracteres · mínimo 300`;
}

function scheduleCapitalMatrixDraftSave(modId, mediaIndex) {
  window.clearTimeout(capitalMatrixDraftTimer);
  capitalMatrixDraftTimer = window.setTimeout(() => {
    saveCapitalMatrixDraft(modId, mediaIndex, true);
  }, 700);
}

window.saveCapitalMatrixDraft = function(modId, mediaIndex, quiet = false) {
  const matrixKey = String(modId);
  const existing = activityProgressByModule[matrixKey]?.capitalMatrix || {};
  const data = collectCapitalMatrixForm(!!existing.completed);
  if (!data) return;
  activityProgressByModule[matrixKey] = {
    ...(activityProgressByModule[matrixKey] || {}),
    capitalMatrix: data
  };
  saveUserProgress();
  if (courseData[Number(modId)] && currentModuleId === Number(modId)) renderModuleMedia(courseData[Number(modId)].media || []);
  renderHomeProgress();
  const status = document.getElementById("capitalMatrixStatus");
  if (status) status.textContent = `Borrador guardado ${new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" })}.`;
  if (!quiet) showToast("Tu matriz quedó guardada como borrador.");
}

window.finalizeCapitalMatrix = function(event, modId, mediaIndex) {
  event.preventDefault();
  const matrixKey = String(modId);
  const form = event.currentTarget;
  updateCapitalMatrixSummary();
  if (!form.reportValidity()) {
    showToast("Completa todas las valoraciones y reflexiones antes de finalizar.");
    return;
  }
  const data = collectCapitalMatrixForm(true);
  const answered = Object.values(data.ratings).flat().filter(value => value !== null).length;
  if (answered !== 30) {
    showToast("Faltan aspectos por valorar en una de las matrices.");
    return;
  }

  activityProgressByModule[matrixKey] = {
    ...(activityProgressByModule[matrixKey] || {}),
    capitalMatrix: data
  };
  if (mediaIndex !== null && mediaIndex !== undefined && courseData[Number(modId)]) saveViewedResource(Number(modId), mediaIndex);
  if (matrixKey === "final") {
    finalEvaluationResult = {
      type: "capitalMatrix",
      score: Math.round((data.total / 150) * 100),
      rawScore: data.total,
      total: 150,
      totals: data.totals,
      level: data.level,
      passed: true,
      date: new Date().toLocaleDateString("es-CO")
    };
    unlockBadge("matriz-capital");
  }
  saveUserProgress();
  if (courseData[Number(modId)] && currentModuleId === Number(modId)) {
    renderModuleMedia(courseData[Number(modId)].media || []);
    updateModuleLocks();
    renderQuizLaunch();
  }
  renderMap();
  const status = document.getElementById("capitalMatrixStatus");
  if (status) {
    status.textContent = `Actividad completada: ${data.total}/150 · ${data.level}.`;
  }
  showToast(`Matriz completada: ${data.total} de 150 puntos.`);
  openCapitalMatrix(matrixKey, mediaIndex, mediaIndex === null || mediaIndex === undefined || !courseData[Number(modId)] ? capitalMatrixActivity : courseData[Number(modId)].media[mediaIndex], true);
}

window.downloadCapitalMatrixBalance = function(modId) {
  const data = activityProgressByModule[String(modId)]?.capitalMatrix;
  if (!data?.completed || !window.jspdf?.jsPDF) {
    showToast("Completa la actividad antes de descargar el balance.");
    return;
  }
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({ unit: "mm", format: "a4" });
  const margin = 20;
  const pageWidth = pdf.internal.pageSize.getWidth();
  let y = 22;

  pdf.setFillColor(8, 47, 67);
  pdf.rect(0, 0, pageWidth, 42, "F");
  pdf.setTextColor(255, 255, 255);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(19);
  pdf.text("Balance de Capital Personal", margin, y);
  pdf.setFontSize(10);
  pdf.setFont("helvetica", "normal");
  pdf.text(getStudentName(), margin, y + 8);
  pdf.text(new Date(data.updatedAt).toLocaleDateString("es-CO"), margin, y + 14);

  y = 55;
  pdf.setTextColor(24, 40, 55);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(13);
  pdf.text(`${data.total} / 150 - ${data.level}`, margin, y);
  y += 11;

  const capitalLabels = {
    human: "Capital humano",
    intellectual: "Capital intelectual",
    relational: "Capital relacional"
  };
  Object.entries(data.totals).forEach(([id, total]) => {
    pdf.setFillColor(id === "human" ? 114 : id === "intellectual" ? 170 : 240, id === "human" ? 201 : id === "intellectual" ? 120 : 170, id === "human" ? 133 : id === "intellectual" ? 214 : 69);
    pdf.roundedRect(margin, y - 5, 7, 7, 1, 1, "F");
    pdf.setFontSize(11);
    pdf.text(`${capitalLabels[id]}: ${total} / 50`, margin + 11, y);
    y += 11;
  });

  y += 4;
  pdf.setFontSize(14);
  pdf.text("El valor de lo que se, lo que soy y las personas que me acompanan", margin, y);
  y += 9;
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(10.5);
  const balanceLines = pdf.splitTextToSize(data.balance, pageWidth - (margin * 2));
  pdf.text(balanceLines.slice(0, 42), margin, y, { lineHeightFactor: 1.45 });
  pdf.setFontSize(8);
  pdf.setTextColor(90, 105, 115);
  pdf.text("Actividad: Matriz de valoracion del capital personal", margin, 287);
  pdf.save(`balance-capital-personal-${getStudentName().toLowerCase().replace(/[^a-z0-9]+/g, "-")}.pdf`);
}

function openGratitudeJournal(modId, mediaIndex, item) {
  const saved = activityProgressByModule[modId]?.gratitudeJournal || {};
  const body = `
    <p>${item.description}</p>
    <p>Reconoce experiencias concretas del día y relaciónalas con tus emociones y fortalezas personales.</p>
    <form id="gratitudeJournalForm" class="journal-form" onsubmit="saveGratitudeJournal(event, ${modId}, ${mediaIndex})">
      <fieldset>
        <legend>Tres momentos positivos de hoy</legend>
        <label>1. ¿Qué situación positiva ocurrió?<textarea name="positive1" rows="3" required></textarea></label>
        <label>2. ¿Qué segundo momento deseas recordar?<textarea name="positive2" rows="3" required></textarea></label>
        <label>3. ¿Qué otra experiencia te produjo bienestar?<textarea name="positive3" rows="3" required></textarea></label>
      </fieldset>
      <div class="journal-grid">
        <label>¿Qué emoción positiva predominó?
          <select name="emotion" required>
            <option value="">Selecciona una emoción</option>
            <option>Alegría</option><option>Gratitud</option><option>Esperanza</option>
            <option>Serenidad</option><option>Orgullo</option><option>Inspiración</option>
          </select>
        </label>
        <label>¿Qué fortaleza personal utilizaste?<input name="strength" type="text" placeholder="Ej. perseverancia, empatía o creatividad" required></label>
      </div>
      <label>¿A quién o a qué deseas agradecer y por qué?<textarea name="gratitudeAction" rows="4" required></textarea></label>
      <label>¿Cómo repetirás una de estas acciones durante la semana?<textarea name="repeatAction" rows="4" required></textarea></label>
      <div class="journal-actions">
        <p id="journalSaveStatus" class="journal-save-status" aria-live="polite">${Object.keys(saved).length ? "Tu bitácora está guardada. Puedes actualizarla." : "Completa todos los campos para guardar tu reflexión."}</p>
        <button type="submit" class="start-button">${Object.keys(saved).length ? "Actualizar bitácora" : "Guardar bitácora"}</button>
      </div>
    </form>
  `;

  openContentModal(item.title, body);
  const form = document.getElementById("gratitudeJournalForm");
  Object.entries(saved).forEach(([name, value]) => {
    const field = form.elements.namedItem(name);
    if (field) field.value = value;
  });
}

window.saveGratitudeJournal = function(event, modId, mediaIndex) {
  event.preventDefault();
  const form = event.currentTarget;
  const journal = Object.fromEntries(new FormData(form).entries());
  activityProgressByModule[modId] = {
    ...(activityProgressByModule[modId] || {}),
    gratitudeJournal: journal
  };
  saveViewedResource(modId, mediaIndex);
  saveUserProgress();
  renderModuleMedia(courseData[modId].media || []);
  updateModuleLocks();
  const status = document.getElementById("journalSaveStatus");
  if (status) status.textContent = "Bitácora guardada correctamente. Puedes volver cuando quieras.";
  const submitButton = form.querySelector('button[type="submit"]');
  if (submitButton) submitButton.textContent = "Actualizar bitácora";
  showToast("Tu bitácora de gratitud quedó guardada.");
}

function openHappinessCurve(modId, mediaIndex, item) {
  const saved = activityProgressByModule[modId]?.happinessCurve || {};
  const moments = [
    ["inicio", "Punto de partida", 45],
    ["aprendizaje", "Momento de aprendizaje", 60],
    ["dificultad", "Dificultad o estrés", 35],
    ["superacion", "Momento de superación", 75],
    ["logro", "Logro significativo", 90]
  ];
  const rows = moments.map(([key, label, defaultValue]) => `
    <div class="curve-entry">
      <label>${label}<textarea name="${key}Text" rows="2" placeholder="Describe brevemente este momento" required></textarea></label>
      <label class="curve-range-label">Nivel de bienestar: <output for="${key}Level">${defaultValue}</output>
        <input type="range" name="${key}Level" id="${key}Level" min="0" max="100" value="${defaultValue}" oninput="updateCurveValue(this)">
      </label>
    </div>
  `).join("");

  const body = `
    <p>${item.description}</p>
    <p>La felicidad es dinámica. Representa cinco momentos y valora cómo percibiste tu bienestar en cada uno.</p>
    <form id="happinessCurveForm" class="journal-form curve-form" onsubmit="saveHappinessCurve(event, ${modId}, ${mediaIndex})">
      ${rows}
      <label>¿Qué aprendiste al observar tu curva?<textarea name="reflection" rows="4" required></textarea></label>
      <div class="journal-actions">
        <p id="curveSaveStatus" class="journal-save-status" aria-live="polite">${Object.keys(saved).length ? "Tu curva está guardada. Puedes actualizarla." : "Completa los momentos para guardar tu curva."}</p>
        <button type="submit" class="start-button">${Object.keys(saved).length ? "Actualizar curva" : "Guardar curva"}</button>
      </div>
    </form>
  `;

  openContentModal(item.title, body);
  const form = document.getElementById("happinessCurveForm");
  Object.entries(saved).forEach(([name, value]) => {
    const field = form.elements.namedItem(name);
    if (!field) return;
    field.value = value;
    if (field.type === "range") field.closest("label").querySelector("output").value = value;
  });
}

window.updateCurveValue = function(input) {
  input.closest("label").querySelector("output").value = input.value;
}

window.saveHappinessCurve = function(event, modId, mediaIndex) {
  event.preventDefault();
  const form = event.currentTarget;
  const curve = Object.fromEntries(new FormData(form).entries());
  activityProgressByModule[modId] = { ...(activityProgressByModule[modId] || {}), happinessCurve: curve };
  saveViewedResource(modId, mediaIndex);
  saveUserProgress();
  renderModuleMedia(courseData[modId].media || []);
  updateModuleLocks();
  const status = document.getElementById("curveSaveStatus");
  if (status) status.textContent = "Curva guardada correctamente. Puedes actualizarla cuando quieras.";
  const submitButton = form.querySelector('button[type="submit"]');
  if (submitButton) submitButton.textContent = "Actualizar curva";
  showToast("Tu curva personal de felicidad quedó guardada.");
}

function openPositiveHabitsPlan(modId, mediaIndex, item) {
  const saved = activityProgressByModule[modId]?.positiveHabitsPlan || {};
  const body = `
    <p>${item.description}</p>
    <p>Elige una acción pequeña, concreta y sostenible que puedas practicar durante los próximos siete días.</p>
    <form id="positiveHabitsForm" class="journal-form" onsubmit="savePositiveHabitsPlan(event, ${modId}, ${mediaIndex})">
      <div class="journal-grid">
        <label>Hábito que deseas fortalecer
          <select name="habit" required>
            <option value="">Selecciona un hábito</option>
            <option>Gratitud</option><option>Ejercicio físico</option><option>Meditación</option>
            <option>Relaciones positivas</option><option>Altruismo</option><option>Descanso saludable</option>
          </select>
        </label>
        <label>Frecuencia semanal<input type="number" name="frequency" min="1" max="7" placeholder="Días por semana" required></label>
      </div>
      <label>¿Por qué este hábito es importante para ti?<textarea name="purpose" rows="3" required></textarea></label>
      <label>Señal de inicio: ¿cuándo y dónde lo realizarás?<textarea name="trigger" rows="3" placeholder="Ej. después del desayuno, en mi habitación" required></textarea></label>
      <div class="journal-grid">
        <label>Posible obstáculo<textarea name="obstacle" rows="3" required></textarea></label>
        <label>Estrategia para superarlo<textarea name="strategy" rows="3" required></textarea></label>
      </div>
      <label>¿Cómo sabrás que cumpliste tu plan al finalizar la semana?<textarea name="evidence" rows="3" required></textarea></label>
      <div class="journal-actions">
        <p id="habitsSaveStatus" class="journal-save-status" aria-live="polite">${Object.keys(saved).length ? "Tu plan está guardado. Puedes actualizarlo." : "Completa el plan para guardar tu compromiso."}</p>
        <button type="submit" class="start-button">${Object.keys(saved).length ? "Actualizar plan" : "Guardar plan"}</button>
      </div>
    </form>
  `;

  openContentModal(item.title, body);
  const form = document.getElementById("positiveHabitsForm");
  Object.entries(saved).forEach(([name, value]) => {
    const field = form.elements.namedItem(name);
    if (field) field.value = value;
  });
}

window.savePositiveHabitsPlan = function(event, modId, mediaIndex) {
  event.preventDefault();
  const form = event.currentTarget;
  const plan = Object.fromEntries(new FormData(form).entries());
  activityProgressByModule[modId] = { ...(activityProgressByModule[modId] || {}), positiveHabitsPlan: plan };
  saveViewedResource(modId, mediaIndex);
  saveUserProgress();
  renderModuleMedia(courseData[modId].media || []);
  updateModuleLocks();
  const status = document.getElementById("habitsSaveStatus");
  if (status) status.textContent = "Plan guardado correctamente. Puedes actualizarlo cuando quieras.";
  const submitButton = form.querySelector('button[type="submit"]');
  if (submitButton) submitButton.textContent = "Actualizar plan";
  showToast("Tu plan de hábitos positivos quedó guardado.");
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);
}

function getSpritePosition(index) {
  return `${[0, 50, 100][index % 3]}% ${index < 3 ? 0 : 100}%`;
}

function getSorterCard(activity, cardId) {
  return activity?.cards?.find(card => card.id === cardId);
}

function renderSortingReinforcement(activity, practiceMode = false, providedAssignments = null) {
  const container = document.getElementById("reinforcementContainer");
  if (!container || !activity) return;
  const moduleProgress = activityProgressByModule[currentModuleId] || {};
  const saved = providedAssignments || (practiceMode ? {} : moduleProgress.sorterAnswers || {});
  const isSolved = !!moduleProgress.memory && !practiceMode;
  activeSorterActivity = activity;
  sorterAssignments = { ...saved };
  selectedSorterCardId = null;
  reinforcementAttempts = 0;

  const unassignedCards = activity.cards.filter(card => !sorterAssignments[card.id]);
  container.innerHTML = `
    <div class="activity-command-bar">
      <div>
        <span class="activity-kicker">Misión de clasificación</span>
        <h3>${activity.title}</h3>
        <p>${activity.instruction}</p>
      </div>
      <div class="activity-stats" aria-label="Progreso de la clasificación">
        <span><strong id="sorterPlaced">${Object.keys(sorterAssignments).length}/${activity.cards.length}</strong> ubicadas</span>
        <span><strong id="sorterAttempts">--</strong> intentos</span>
        <span><strong id="sorterScore">${isSolved ? '100%' : '--'}</strong> precisión</span>
      </div>
    </div>
    <div class="sorter-workbench">
      <section class="sorter-card-pool" aria-label="Evidencias por clasificar">
        <h4>Evidencias del caso</h4>
        <div class="sorter-card-list" id="sorterCardPool">
          ${unassignedCards.map(card => renderSorterCard(card)).join("") || '<p class="sorter-empty">Todas las evidencias están ubicadas.</p>'}
        </div>
      </section>
      <section class="sorter-zones" aria-label="Categorías de clasificación">
        ${activity.categories.map(category => `
          <div class="sorter-zone" data-sorter-zone="${category.id}" ondragover="event.preventDefault()" ondrop="dropSorterCard(event, '${category.id}')">
            <header>
              <strong>${category.label}</strong>
              <button type="button" class="hint-chip" onclick="showSorterHint('${category.id}')">Pista</button>
            </header>
            <small>${category.hint}</small>
            <div class="sorter-zone-cards" id="sorter-zone-${category.id}">
              ${activity.cards.filter(card => sorterAssignments[card.id] === category.id).map(card => renderSorterCard(card, true)).join("")}
            </div>
            <button type="button" class="drop-zone-button" onclick="placeSelectedSorterCard('${category.id}')">Soltar aquí</button>
          </div>
        `).join("")}
      </section>
    </div>
    <div class="reinforcement-actions">
      <button type="button" class="ghost-button" onclick="resetReinforcement()">Reiniciar misión</button>
      <button type="button" class="start-button" onclick="checkSortingReinforcement()">Comprobar clasificación</button>
    </div>
    <p class="reinforcement-feedback ${isSolved ? 'is-success' : ''}" id="reinforcementFeedback" role="status">${isSolved ? 'Misión completada y guardada. Puedes revisarla o reiniciarla para practicar.' : 'Arrastra cada evidencia o selecciónala y toca una zona.'}</p>
  `;
  refreshSorterState(isSolved);
}

function renderSorterCard(card, assigned = false) {
  return `
    <button type="button" class="sorter-card ${assigned ? 'is-assigned' : ''}" draggable="true"
      data-sorter-card="${card.id}"
      ondragstart="startSorterDrag(event, '${card.id}')"
      onclick="selectSorterCard('${card.id}', this)">
      <span>${assigned ? 'Ubicada' : 'Evidencia'}</span>
      <strong>${escapeHtml(card.text)}</strong>
    </button>`;
}

function refreshSorterState(isSolved = false) {
  const placed = document.getElementById("sorterPlaced");
  if (placed) placed.textContent = `${Object.keys(sorterAssignments).length}/${activeSorterActivity?.cards?.length || 0}`;
  document.querySelectorAll(".sorter-card").forEach(card => {
    const id = card.dataset.sorterCard;
    const expected = getSorterCard(activeSorterActivity, id)?.answer;
    const assigned = sorterAssignments[id];
    card.classList.toggle("is-selected", id === selectedSorterCardId);
    if (isSolved || card.dataset.checked === "true") {
      card.classList.toggle("is-correct", assigned === expected);
      card.classList.toggle("is-wrong", !!assigned && assigned !== expected);
    }
  });
}

window.startSorterDrag = function(event, cardId) {
  event.dataTransfer.setData("text/plain", cardId);
  event.dataTransfer.effectAllowed = "move";
}

window.selectSorterCard = function(cardId, button) {
  selectedSorterCardId = selectedSorterCardId === cardId ? null : cardId;
  document.querySelectorAll(".sorter-card").forEach(card => card.classList.toggle("is-selected", card === button && !!selectedSorterCardId));
  document.querySelectorAll(".sorter-zone").forEach(zone => zone.classList.toggle("is-ready", !!selectedSorterCardId));
}

window.dropSorterCard = function(event, categoryId) {
  event.preventDefault();
  assignSorterCard(event.dataTransfer.getData("text/plain"), categoryId);
}

window.placeSelectedSorterCard = function(categoryId) {
  if (selectedSorterCardId) assignSorterCard(selectedSorterCardId, categoryId);
}

function assignSorterCard(cardId, categoryId) {
  const card = getSorterCard(activeSorterActivity, cardId);
  const category = activeSorterActivity?.categories?.find(item => item.id === categoryId);
  if (!card || !category) return;
  const nextAssignments = { ...sorterAssignments, [cardId]: categoryId };
  renderSortingReinforcement(activeSorterActivity, true, nextAssignments);
  const feedback = document.getElementById("reinforcementFeedback");
  if (feedback) feedback.textContent = `Ubicaste una evidencia en ${category.label}. Comprueba cuando completes todas.`;
}

window.showSorterHint = function(categoryId) {
  const category = activeSorterActivity?.categories?.find(item => item.id === categoryId);
  const feedback = document.getElementById("reinforcementFeedback");
  if (category && feedback) {
    feedback.className = "reinforcement-feedback is-warning";
    feedback.textContent = `Pista para ${category.label}: ${category.hint}`;
  }
}

window.checkSortingReinforcement = function() {
  const activity = activeSorterActivity;
  const feedback = document.getElementById("reinforcementFeedback");
  if (!activity || !feedback) return;
  reinforcementAttempts++;
  let correct = 0;
  activity.cards.forEach(card => {
    if (sorterAssignments[card.id] === card.answer) correct++;
  });
  const total = activity.cards.length;
  const percent = Math.round((correct / total) * 100);
  document.querySelectorAll(".sorter-card").forEach(card => { card.dataset.checked = "true"; });
  const attempts = document.getElementById("sorterAttempts");
  const score = document.getElementById("sorterScore");
  if (attempts) attempts.textContent = String(reinforcementAttempts);
  if (score) score.textContent = `${percent}%`;
  refreshSorterState(true);

  activityProgressByModule[currentModuleId] = {
    ...(activityProgressByModule[currentModuleId] || {}),
    sorterAnswers: { ...sorterAssignments }
  };
  saveUserProgress();

  if (correct === total) {
    activityProgressByModule[currentModuleId] = {
      ...(activityProgressByModule[currentModuleId] || {}),
      sorterStats: { attempts: reinforcementAttempts, score: percent, updatedAt: new Date().toISOString() }
    };
    markActivityComplete(currentModuleId, "memory");
    launchActivityCelebration("reinforcementContainer");
    feedback.className = "reinforcement-feedback is-success";
    feedback.textContent = `Clasificación correcta: ${correct}/${total}. Tu análisis quedó guardado.`;
    const speech = document.getElementById("companionSpeech");
    if (speech) speech.textContent = `Muy bien, ${getStudentName()}. Ya analizaste evidencias con criterio universitario. Sigue con el laboratorio de decisiones.`;
  } else {
    feedback.className = "reinforcement-feedback is-warning";
    feedback.textContent = `Tienes ${correct}/${total} correctas. Revisa las tarjetas marcadas y pide pistas en las categorías difíciles.`;
  }
}

function renderInvestigationReinforcement(activity, practiceMode = false) {
  const container = document.getElementById("reinforcementContainer");
  if (!container || !activity) return;
  activeInvestigationActivity = activity;
  const progress = activityProgressByModule[currentModuleId] || {};
  const allIds = activity.locations.map(item => item.id);
  const savedCollected = progress.investigationEvidence || (progress.memory && !practiceMode ? allIds : []);
  const collected = practiceMode ? [] : savedCollected;
  const collectedSet = new Set(collected);
  const isSolved = collectedSet.size === activity.locations.length && !practiceMode;

  container.innerHTML = `
    <div class="activity-command-bar investigation-command-bar">
      <div>
        <span class="activity-kicker">Investigación institucional</span>
        <h3>${activity.title}</h3>
        <p>${activity.instruction}</p>
      </div>
      <div class="activity-stats" aria-label="Evidencias recolectadas">
        <span><strong id="investigationCollected">${collectedSet.size}/${activity.locations.length}</strong> evidencias</span>
        <span><strong>${isSolved ? "100%" : Math.round((collectedSet.size / activity.locations.length) * 100) + "%"}</strong> diagnóstico</span>
      </div>
    </div>
    <div class="investigation-layout">
      <section class="horizon-map" aria-label="Espacios de Universidad Horizonte">
        ${activity.locations.map(location => `
          <article class="evidence-card ${collectedSet.has(location.id) ? "is-collected" : ""}" data-evidence-card="${location.id}">
            <span class="evidence-index">${location.icon}</span>
            <small>${escapeHtml(location.place)}</small>
            <h4>${escapeHtml(location.title)}</h4>
            <p>${escapeHtml(location.signal)}</p>
            <button type="button" class="ghost-button" onclick="collectInvestigationEvidence('${location.id}')">
              ${collectedSet.has(location.id) ? "Revisar evidencia" : "Abrir evidencia"}
            </button>
          </article>
        `).join("")}
      </section>
      <aside class="investigation-board">
        <span class="space-kicker">Tablero de investigación</span>
        <h4>Evidencias agregadas</h4>
        <div id="investigationBoardList">
          ${collected.length
            ? collected.map(id => {
                const item = activity.locations.find(location => location.id === id);
                return `<article><strong>${escapeHtml(item.capital)}</strong><span>${escapeHtml(item.title)}</span></article>`;
              }).join("")
            : "<p>Aún no has agregado evidencias al tablero.</p>"}
        </div>
      </aside>
    </div>
    <div class="reinforcement-actions">
      <button type="button" class="ghost-button" onclick="resetReinforcement()">Reiniciar investigación</button>
      <span class="activity-tip">Cuando agregues las seis evidencias, la primera actividad quedará completada.</span>
    </div>
    <p class="reinforcement-feedback ${isSolved ? "is-success" : ""}" id="reinforcementFeedback" role="status">${isSolved ? "Diagnóstico completo y guardado. Puedes repasar las evidencias cuando quieras." : "Abre cada espacio y decide qué evidencia aporta al diagnóstico."}</p>
  `;
}

window.collectInvestigationEvidence = function(evidenceId) {
  const activity = activeInvestigationActivity;
  const evidence = activity?.locations?.find(item => item.id === evidenceId);
  if (!activity || !evidence) return;

  const collected = new Set(activityProgressByModule[currentModuleId]?.investigationEvidence || []);
  const isCollected = collected.has(evidenceId);
  const options = [...new Set(activity.locations.map(item => item.capital))];
  const optionButtons = options.map(option => `
    <button type="button" class="diagnosis-option" onclick="submitInvestigationDiagnosis('${evidenceId}', '${escapeHtml(option)}')">
      ${escapeHtml(option)}
    </button>
  `).join("");

  setAssistantContext({
    activity: "Investigación del problema",
    topic: evidence.capital,
    question: evidence.title,
    selectedAnswer: evidence.signal,
    expectedAnswer: evidence.capital,
    hint: "Explica qué capital está afectado y qué acción permitiría conservar o movilizar ese conocimiento.",
    feedback: evidence.explanation,
    isCorrect: null,
    attempts: collected.size
  });

  openContentModal(
    `Diagnóstico: ${evidence.title}`,
    `
      <section class="diagnosis-lab">
        <div class="diagnosis-evidence-card">
          <span class="evidence-index">${escapeHtml(evidence.icon)}</span>
          <div>
            <span class="activity-kicker">${escapeHtml(evidence.place)}</span>
            <h3>${escapeHtml(evidence.signal)}</h3>
            <p>${escapeHtml(evidence.explanation)}</p>
          </div>
        </div>
        <div class="diagnosis-question-card">
          <h3>¿Qué capital o eje institucional está principalmente afectado?</h3>
          <p>Elige con criterio: algunas evidencias se parecen, pero la clave está en identificar dónde se produce la pérdida de valor.</p>
          <div class="diagnosis-options">
            ${optionButtons}
          </div>
          <p class="diagnosis-feedback ${isCollected ? "is-success" : ""}" id="diagnosisFeedback" role="status">
            ${isCollected ? `Esta evidencia ya está guardada como ${escapeHtml(evidence.capital)}.` : "Selecciona una opción para agregar la evidencia al tablero."}
          </p>
        </div>
      </section>
    `,
    [],
    false
  );
}

window.submitInvestigationDiagnosis = function(evidenceId, selectedCapital) {
  const activity = activeInvestigationActivity;
  const evidence = activity?.locations?.find(item => item.id === evidenceId);
  const feedback = document.getElementById("diagnosisFeedback");
  if (!activity || !evidence || !feedback) return;

  if (selectedCapital !== evidence.capital) {
    feedback.className = "diagnosis-feedback is-warning";
    feedback.textContent = `Aún no. Esa opción toca el caso, pero esta evidencia apunta mejor a ${evidence.capital}. Revisa la señal: ${evidence.signal}.`;
    return;
  }

  const current = new Set(activityProgressByModule[currentModuleId]?.investigationEvidence || []);
  current.add(evidenceId);
  activityProgressByModule[currentModuleId] = {
    ...(activityProgressByModule[currentModuleId] || {}),
    investigationEvidence: [...current]
  };
  saveUserProgress();
  feedback.className = "diagnosis-feedback is-success";
  feedback.innerHTML = `<strong>Correcto:</strong> ${escapeHtml(evidence.capital)}. Evidencia guardada en el tablero.`;

  setAssistantContext({
    activity: "Diagnóstico de evidencia",
    topic: evidence.capital,
    question: evidence.title,
    selectedAnswer: selectedCapital,
    expectedAnswer: evidence.capital,
    hint: "Conecta la señal de la evidencia con el capital o eje más afectado.",
    feedback: evidence.explanation,
    isCorrect: true,
    attempts: current.size
  });

  window.setTimeout(() => {
    closeTheoryModal();
    renderInvestigationReinforcement(activity);
    const boardFeedback = document.getElementById("reinforcementFeedback");
    if (boardFeedback) {
      boardFeedback.className = "reinforcement-feedback is-success";
      boardFeedback.innerHTML = `<strong>${escapeHtml(evidence.capital)}:</strong> ${escapeHtml(evidence.explanation)}`;
    }
    if (current.size === activity.locations.length) {
      markActivityComplete(currentModuleId, "memory");
      launchActivityCelebration("reinforcementContainer");
      const speech = document.getElementById("companionSpeech");
      if (speech) speech.textContent = `Muy bien, ${getStudentName()}. Ya reuniste y diagnosticaste las evidencias centrales de Universidad Horizonte.`;
    }
  }, 750);
}

function renderReinforcement(activity, practiceMode = false) {
  const container = document.getElementById("reinforcementContainer");
  if (!container || !activity) return;
  if (activity.mode === "sorter") return renderSortingReinforcement(activity, practiceMode);
  if (activity.mode === "investigation") return renderInvestigationReinforcement(activity, practiceMode);
  const moduleActivityProgress = activityProgressByModule[currentModuleId] || {};
  const progressSolved = !!moduleActivityProgress.memory;
  const savedStats = moduleActivityProgress.memoryStats || {};
  const isSolved = progressSolved && !practiceMode;
  const baseCards = activity.pairs.flatMap((pair, index) => [
    { id: `c-${index}`, pairId: index, label: pair.concept, kind: "concept" },
    { id: `a-${index}`, pairId: index, label: pair.answer, kind: "answer" }
  ]);

  reinforcementCards = (isSolved ? baseCards : shuffleArray(baseCards)).map((card, index) => ({ ...card, cardId: `card-${index}` }));
  flippedReinforcementCards = [];
  matchedReinforcementPairs = isSolved ? activity.pairs.length : 0;
  reinforcementAttempts = isSolved ? Math.max(0, Number(savedStats.attempts) || 0) : 0;
  reinforcementStreak = 0;
  const savedAccuracy = isSolved && Number.isFinite(Number(savedStats.accuracy))
    ? `${Math.max(0, Math.min(100, Math.round(Number(savedStats.accuracy))))}%`
    : "--";
  const completedStatsMessage = isSolved && reinforcementAttempts > 0
    ? `Último resultado guardado: ${reinforcementAttempts} intentos y ${savedAccuracy} de precisión.`
    : isSolved
      ? "Actividad completada antes de activar las métricas. Reinicia para registrar intentos y precisión."
      : "";

  container.innerHTML = `
    <div class="activity-command-bar">
      <div>
        <span class="activity-kicker">Desafío de análisis</span>
        <h3>${activity.title}</h3>
        <p>Interpreta cada caso y relaciónalo con el concepto correcto. No hay pistas visuales repetidas.</p>
      </div>
      <div class="activity-stats" aria-label="Progreso de la actividad">
        <span><strong id="memoryCounter">${matchedReinforcementPairs}/${activity.pairs.length}</strong> parejas</span>
        <span><strong id="memoryAttempts">${reinforcementAttempts || "--"}</strong> intentos</span>
        <span><strong id="memoryAccuracy">${savedAccuracy}</strong> precisión</span>
      </div>
    </div>
    <div class="memory-grid" role="group" aria-label="Tablero de parejas">
      ${reinforcementCards.map((card, index) => `
        <button type="button" class="memory-card ${isSolved ? 'is-flipped is-matched' : ''}" id="${card.cardId}"
          aria-label="${isSolved ? `${card.kind === "concept" ? "Concepto" : "Caso aplicado"}: ${escapeHtml(card.label)}` : `Carta oculta ${index + 1} de ${baseCards.length}`}"
          data-hidden-label="Carta oculta ${index + 1} de ${baseCards.length}"
          onclick="flipReinforcementCard('${card.cardId}')">
          <span class="memory-front">
            <span class="memory-cover-symbol" aria-hidden="true">?</span>
            <span class="memory-front-hint">Analizar carta</span>
          </span>
          <span class="memory-back">
            ${card.kind === "concept"
              ? `<span class="memory-visual memory-visual-small" style="background-image:url('${activity.sprite}');background-position:${getSpritePosition(card.pairId)}" aria-hidden="true"></span>`
              : `<span class="definition-marker" aria-hidden="true">CASO</span>`}
            <small>${card.kind === "concept" ? "Concepto" : "Situación aplicada"}</small>
            <span>${escapeHtml(card.label)}</span>
          </span>
        </button>
      `).join("")}
    </div>
    <div class="reinforcement-actions">
      <button type="button" class="ghost-button" onclick="resetReinforcement()">Reiniciar y mezclar</button>
      <span class="activity-tip">Las imágenes aparecen solo en los conceptos. Para acertar debes interpretar cada situación.</span>
    </div>
    <p class="reinforcement-feedback ${isSolved ? 'is-success' : ''}" id="reinforcementFeedback" role="status">${isSolved ? completedStatsMessage : practiceMode ? 'Nueva ronda preparada. Tu logro anterior sigue guardado; esta ronda actualizará tus métricas si la completas.' : 'Selecciona dos cartas para comenzar.'}</p>
  `;
}

function saveReinforcementStats(totalPairs) {
  const accuracy = reinforcementAttempts > 0
    ? Math.round((matchedReinforcementPairs / reinforcementAttempts) * 100)
    : 0;
  const previous = activityProgressByModule[currentModuleId]?.memoryStats || {};
  activityProgressByModule[currentModuleId] = {
    ...(activityProgressByModule[currentModuleId] || {}),
    memoryStats: {
      attempts: reinforcementAttempts,
      matches: matchedReinforcementPairs,
      totalPairs,
      accuracy,
      bestAttempts: previous.bestAttempts
        ? Math.min(Number(previous.bestAttempts), reinforcementAttempts)
        : reinforcementAttempts,
      bestAccuracy: Math.max(Number(previous.bestAccuracy) || 0, accuracy),
      updatedAt: new Date().toISOString()
    }
  };
  saveUserProgress();
}

window.flipReinforcementCard = function(cardId) {
  const activity = reinforcementData[currentModuleId];
  const feedback = document.getElementById("reinforcementFeedback");
  if (!activity || !feedback || flippedReinforcementCards.length >= 2) return;

  const card = reinforcementCards.find(item => item.cardId === cardId);
  const element = document.getElementById(cardId);
  if (!card || !element || element.classList.contains("is-matched") || element.classList.contains("is-flipped")) return;

  element.classList.add("is-flipped");
  element.setAttribute("aria-label", `${card.kind === "concept" ? "Concepto" : "Situación aplicada"}: ${card.label}`);
  flippedReinforcementCards.push(card);
  if (flippedReinforcementCards.length !== 2) return;

  reinforcementAttempts++;
  document.getElementById("memoryAttempts").textContent = reinforcementAttempts;
  const [first, second] = flippedReinforcementCards;
  const isMatch = first.pairId === second.pairId && first.kind !== second.kind;

  setTimeout(() => {
    const firstEl = document.getElementById(first.cardId);
    const secondEl = document.getElementById(second.cardId);
    if (!firstEl || !secondEl) return;

    if (isMatch) {
      firstEl.classList.add("is-matched");
      secondEl.classList.add("is-matched");
      matchedReinforcementPairs++;
      reinforcementStreak++;
      document.getElementById("memoryCounter").textContent = `${matchedReinforcementPairs}/${activity.pairs.length}`;
      document.getElementById("memoryAccuracy").textContent = `${Math.round((matchedReinforcementPairs / reinforcementAttempts) * 100)}%`;
      feedback.className = "reinforcement-feedback is-success";
      const performance = reinforcementAttempts <= 8 ? "Dominio sobresaliente" : reinforcementAttempts <= 12 ? "Análisis sólido" : "Reto superado";
      feedback.textContent = matchedReinforcementPairs === activity.pairs.length
        ? `${performance}: completaste el reto en ${reinforcementAttempts} intentos.`
        : `¡Pareja correcta! Llevas una racha de ${reinforcementStreak}.`;
      if (matchedReinforcementPairs === activity.pairs.length) {
        saveReinforcementStats(activity.pairs.length);
        markActivityComplete(currentModuleId, "memory");
        launchActivityCelebration("reinforcementContainer");
        const speech = document.getElementById("companionSpeech");
        if (speech) speech.textContent = `¡Excelente, ${getStudentName()}! Ya dominas las conexiones clave de esta unidad. Continúa con el siguiente reto.`;
      }
    } else {
      reinforcementStreak = 0;
      document.getElementById("memoryAccuracy").textContent = `${Math.round((matchedReinforcementPairs / reinforcementAttempts) * 100)}%`;
      firstEl.classList.remove("is-flipped");
      secondEl.classList.remove("is-flipped");
      firstEl.setAttribute("aria-label", firstEl.dataset.hiddenLabel);
      secondEl.setAttribute("aria-label", secondEl.dataset.hiddenLabel);
      feedback.className = "reinforcement-feedback is-warning";
      feedback.textContent = "La relación conceptual no es correcta. Contrasta el mecanismo del caso con los conceptos disponibles.";
    }
    flippedReinforcementCards = [];
  }, 780);
}

window.resetReinforcement = function() {
  renderReinforcement(reinforcementData[currentModuleId], true);
}

function launchActivityCelebration(containerId) {
  const host = document.getElementById(containerId);
  if (!host || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const celebration = document.createElement("div");
  celebration.className = "activity-celebration";
  celebration.setAttribute("aria-hidden", "true");
  celebration.innerHTML = Array.from({ length: 18 }, (_, index) => `<i style="--i:${index}"></i>`).join("");
  host.appendChild(celebration);
  setTimeout(() => celebration.remove(), 1800);
}

function renderFillPrompt(item, index, savedValue, isSolved) {
  const [before, after] = item.text.split("______");
  const safeValue = escapeHtml(savedValue || "");
  return `
    <div class="fill-row ${isSolved ? 'is-correct' : ''}" data-fill-row="${index}">
      <span class="fill-number">${index + 1}</span>
      <p>${escapeHtml(before)}
        <button type="button" class="drop-blank ${savedValue ? 'has-value' : ''}" data-fill-drop="${index}" data-value="${safeValue}"
          ondragover="event.preventDefault()" ondrop="dropFillWord(event, ${index})" onclick="placeSelectedFillWord(${index})"
          aria-label="Espacio ${index + 1}: ${safeValue || 'sin respuesta'}">${safeValue || 'Suelta aquí'}</button>
        ${escapeHtml(after || "")}
      </p>
      <button type="button" class="clear-drop" onclick="clearFillWord(${index})" aria-label="Quitar palabra del espacio ${index + 1}" ${savedValue ? '' : 'hidden'}>&times;</button>
    </div>`;
}

function renderDecisionReview(activity, practiceMode = false) {
  const container = document.getElementById("reviewActivitiesContainer");
  if (!container || !activity) return;
  const saved = practiceMode ? {} : activityProgressByModule[currentModuleId]?.reviewAnswers || {};
  const isSolved = !!activityProgressByModule[currentModuleId]?.review && !practiceMode;
  decisionReviewAnswers = [...(saved.decisions || [])];

  container.innerHTML = `
    <div class="activity-command-bar review-command-bar">
      <div>
        <span class="activity-kicker">Laboratorio de decisiones</span>
        <h3>${activity.title}</h3>
        <p>${activity.instruction}</p>
      </div>
      <div class="review-progress" aria-live="polite"><strong id="reviewAnswered">${decisionReviewAnswers.filter(value => value !== undefined && value !== null).length}</strong><span>de ${activity.decisions.length}<br>decisiones</span></div>
    </div>
    <div class="decision-lab-grid">
      ${activity.decisions.map((decision, index) => `
        <article class="decision-card ${isSolved ? 'is-checked' : ''}" data-decision-card="${index}">
          <span class="decision-number">${String(index + 1).padStart(2, "0")}</span>
          <h3>${escapeHtml(decision.prompt)}</h3>
          <div class="decision-options">
            ${decision.options.map((option, optionIndex) => `
              <button type="button"
                class="${decisionReviewAnswers[index] === optionIndex ? 'is-selected' : ''}"
                onclick="selectDecisionReview(${index}, ${optionIndex}, this)"
                ${isSolved ? 'disabled' : ''}>
                <b>${String.fromCharCode(65 + optionIndex)}</b>
                <span>${escapeHtml(option)}</span>
              </button>
            `).join("")}
          </div>
          <div class="decision-card-actions">
            <button type="button" class="hint-chip" onclick="showDecisionHint(${index})">Dame una pista</button>
            <p class="decision-hint" id="decisionHint-${index}" hidden>${escapeHtml(decision.hint)}</p>
          </div>
          <p class="decision-feedback" id="decisionFeedback-${index}" ${isSolved ? '' : 'hidden'}>${isSolved ? escapeHtml(decision.feedback) : ''}</p>
        </article>
      `).join("")}
    </div>
    <div class="reinforcement-actions review-actions">
      <button type="button" class="ghost-button" onclick="resetReviewActivities()">Reiniciar decisiones</button>
      <button type="button" class="start-button" onclick="checkDecisionReview()">Comprobar decisiones</button>
    </div>
    <p class="reinforcement-feedback ${isSolved ? 'is-success' : ''}" id="reviewFeedback" role="status">${isSolved ? 'Laboratorio resuelto y guardado. Puedes repetirlo para practicar.' : 'Selecciona una respuesta por caso. Las pistas orientan, no resuelven por ti.'}</p>
  `;
  if (isSolved) markDecisionCards(activity, true);
}

window.selectDecisionReview = function(index, optionIndex, button) {
  decisionReviewAnswers[index] = optionIndex;
  const decision = reviewActivitiesData[currentModuleId]?.decisions?.[index];
  if (decision) {
    setAssistantContext({
      activity: "Laboratorio de decisiones",
      topic: reviewActivitiesData[currentModuleId]?.title || "",
      question: decision.prompt,
      selectedAnswer: decision.options[optionIndex],
      expectedAnswer: decision.options[decision.correct],
      hint: decision.hint,
      feedback: decision.feedback,
      isCorrect: optionIndex === decision.correct,
      attempts: (assistantContext.attempts || 0) + 1
    });
  }
  const card = button.closest(".decision-card");
  card.querySelectorAll(".decision-options button").forEach(option => option.classList.remove("is-selected", "is-correct", "is-wrong"));
  button.classList.add("is-selected");
  const answered = decisionReviewAnswers.filter(value => value !== undefined && value !== null).length;
  const counter = document.getElementById("reviewAnswered");
  if (counter) counter.textContent = String(answered);
}

window.showDecisionHint = function(index) {
  const hint = document.getElementById(`decisionHint-${index}`);
  if (hint) hint.hidden = !hint.hidden;
}

function markDecisionCards(activity, final = false) {
  activity.decisions.forEach((decision, index) => {
    const card = document.querySelector(`[data-decision-card="${index}"]`);
    if (!card) return;
    const selected = decisionReviewAnswers[index];
    card.classList.add("is-checked");
    card.querySelectorAll(".decision-options button").forEach((button, optionIndex) => {
      button.classList.toggle("is-correct", optionIndex === decision.correct);
      button.classList.toggle("is-wrong", optionIndex === selected && selected !== decision.correct);
      if (final) button.disabled = true;
    });
    const feedback = document.getElementById(`decisionFeedback-${index}`);
    if (feedback) {
      feedback.hidden = false;
      feedback.textContent = decision.feedback;
    }
  });
}

window.checkDecisionReview = function() {
  const activity = reviewActivitiesData[currentModuleId];
  const feedback = document.getElementById("reviewFeedback");
  if (!activity?.decisions || !feedback) return;
  if (decisionReviewAnswers.filter(value => value !== undefined && value !== null).length < activity.decisions.length) {
    showToast("Responde todas las decisiones antes de comprobar.");
    return;
  }

  const correct = activity.decisions.reduce((sum, decision, index) =>
    sum + (decisionReviewAnswers[index] === decision.correct ? 1 : 0), 0);
  const total = activity.decisions.length;
  markDecisionCards(activity, correct === total);
  activityProgressByModule[currentModuleId] = {
    ...(activityProgressByModule[currentModuleId] || {}),
    reviewAnswers: { decisions: [...decisionReviewAnswers], updatedAt: new Date().toISOString() }
  };
  saveUserProgress();

  if (correct === total) {
    markActivityComplete(currentModuleId, "review");
    launchActivityCelebration("reviewActivitiesContainer");
    feedback.className = "reinforcement-feedback is-success";
    feedback.textContent = `Decisiones correctas: ${correct}/${total}. El reto quedó guardado.`;
    const speech = document.getElementById("companionSpeech");
    if (speech) speech.textContent = `Excelente, ${getStudentName()}. Tus decisiones ya muestran comprensión aplicada. La evaluación se está desbloqueando.`;
  } else {
    feedback.className = "reinforcement-feedback is-warning";
    feedback.textContent = `Lograste ${correct}/${total}. Revisa las pistas y ajusta tus decisiones.`;
  }
}

function getRouteSelections() {
  const assignments = {};
  document.querySelectorAll("[data-ecosystem-component]").forEach(select => {
    assignments[select.dataset.ecosystemComponent] = select.value;
  });
  return assignments;
}

function renderInterventionRouteReview(activity, practiceMode = false, providedOrder = null, providedAssignments = null) {
  const container = document.getElementById("reviewActivitiesContainer");
  if (!container || !activity) return;
  activeRouteActivity = activity;
  const saved = practiceMode ? {} : activityProgressByModule[currentModuleId]?.reviewAnswers || {};
  const isSolved = !!activityProgressByModule[currentModuleId]?.review && !practiceMode;
  const sortedOrder = [...activity.steps].sort((a, b) => a.order - b.order).map(step => step.id);
  interventionRouteOrder = providedOrder
    || saved.routeOrder
    || (isSolved ? sortedOrder : shuffleArray(sortedOrder));
  const assignments = providedAssignments || saved.zoneAssignments || {};
  const routeCorrect = interventionRouteOrder.every((id, index) => {
    const step = activity.steps.find(item => item.id === id);
    return step?.order === index + 1;
  });
  const zonesCorrect = activity.components.every(component => assignments[component.id] === component.zone);

  container.innerHTML = `
    <div class="activity-command-bar review-command-bar ecosystem-command-bar">
      <div>
        <span class="activity-kicker">Ecosistema de conocimiento</span>
        <h3>${activity.title}</h3>
        <p>${activity.instruction}</p>
      </div>
      <div class="activity-stats">
        <span><strong>${routeCorrect && zonesCorrect && isSolved ? "100%" : "--"}</strong> precisión</span>
        <span><strong>${activity.steps.length}</strong> pasos</span>
      </div>
    </div>
    <div class="ecosystem-builder">
      <section class="route-builder" aria-label="Ruta de intervención">
        <div class="mini-activity-heading"><span>01</span><div><h3>Ordena la ruta</h3><p>Mueve las acciones hasta que formen una intervención viable.</p></div></div>
        <div class="route-step-list" id="routeStepList">
          ${interventionRouteOrder.map((stepId, index) => {
            const step = activity.steps.find(item => item.id === stepId);
            return `
              <article class="route-step ${isSolved ? "is-checked" : ""}" data-route-step="${step.id}"
                draggable="${isSolved ? "false" : "true"}"
                ondragstart="startRouteDrag(event, ${index})"
                ondragover="event.preventDefault()"
                ondrop="dropRouteStep(event, ${index})">
                <span>${index + 1}</span>
                <div><strong>${escapeHtml(step.title)}</strong><p>${escapeHtml(step.detail)}</p></div>
                <div class="route-step-actions">
                  <button type="button" class="ghost-button" onclick="moveRouteStep(${index}, -1)" ${index === 0 || isSolved ? "disabled" : ""}>Subir</button>
                  <button type="button" class="ghost-button" onclick="moveRouteStep(${index}, 1)" ${index === interventionRouteOrder.length - 1 || isSolved ? "disabled" : ""}>Bajar</button>
                </div>
              </article>`;
          }).join("")}
        </div>
      </section>
      <section class="ecosystem-map" aria-label="Mapa institucional de componentes">
        <div class="mini-activity-heading"><span>02</span><div><h3>Ubica componentes</h3><p>Asigna cada solución al eje institucional que sostiene mejor.</p></div></div>
        <div class="ecosystem-zone-legend">
          ${activity.zones.map(zone => `<span>${escapeHtml(zone.label)}</span>`).join("")}
        </div>
        <div class="ecosystem-component-list">
          ${activity.components.map(component => `
            <label class="ecosystem-component ${isSolved ? "is-checked" : ""}" data-component-card="${component.id}">
              <span><strong>${escapeHtml(component.label)}</strong><small>${escapeHtml(component.detail)}</small></span>
              <select data-ecosystem-component="${component.id}" ${isSolved ? "disabled" : ""}>
                <option value="">Selecciona eje</option>
                ${activity.zones.map(zone => `<option value="${zone.id}" ${assignments[component.id] === zone.id ? "selected" : ""}>${escapeHtml(zone.label)}</option>`).join("")}
              </select>
            </label>
          `).join("")}
        </div>
      </section>
    </div>
    <div class="reinforcement-actions review-actions">
      <button type="button" class="ghost-button" onclick="resetReviewActivities()">Reiniciar constructor</button>
      <button type="button" class="start-button" onclick="checkInterventionRoute()">Comprobar ecosistema</button>
    </div>
    <p class="reinforcement-feedback ${isSolved ? "is-success" : ""}" id="reviewFeedback" role="status">${isSolved ? "Ecosistema construido y guardado. Puedes revisarlo cuando quieras." : "Ordena la ruta y asigna todos los componentes antes de comprobar."}</p>
  `;
  if (isSolved) markInterventionRoute(activity, true, assignments);
}

window.moveRouteStep = function(index, direction) {
  if (!activeRouteActivity) return;
  const nextIndex = index + direction;
  if (nextIndex < 0 || nextIndex >= interventionRouteOrder.length) return;
  const assignments = getRouteSelections();
  const nextOrder = [...interventionRouteOrder];
  [nextOrder[index], nextOrder[nextIndex]] = [nextOrder[nextIndex], nextOrder[index]];
  renderInterventionRouteReview(activeRouteActivity, true, nextOrder, assignments);
}

window.startRouteDrag = function(event, index) {
  event.dataTransfer.setData("text/plain", String(index));
  event.dataTransfer.effectAllowed = "move";
}

window.dropRouteStep = function(event, targetIndex) {
  event.preventDefault();
  if (!activeRouteActivity) return;
  const fromIndex = Number(event.dataTransfer.getData("text/plain"));
  if (!Number.isInteger(fromIndex) || fromIndex === targetIndex) return;
  const assignments = getRouteSelections();
  const nextOrder = [...interventionRouteOrder];
  const [moved] = nextOrder.splice(fromIndex, 1);
  nextOrder.splice(targetIndex, 0, moved);
  renderInterventionRouteReview(activeRouteActivity, true, nextOrder, assignments);
}

function markInterventionRoute(activity, final = false, assignments = getRouteSelections()) {
  interventionRouteOrder.forEach((stepId, index) => {
    const step = activity.steps.find(item => item.id === stepId);
    const card = document.querySelector(`[data-route-step="${stepId}"]`);
    if (!card || !step) return;
    card.classList.toggle("is-correct", step.order === index + 1);
    card.classList.toggle("is-wrong", step.order !== index + 1);
  });
  activity.components.forEach(component => {
    const card = document.querySelector(`[data-component-card="${component.id}"]`);
    if (!card) return;
    card.classList.toggle("is-correct", assignments[component.id] === component.zone);
    card.classList.toggle("is-wrong", !!assignments[component.id] && assignments[component.id] !== component.zone);
  });
}

window.checkInterventionRoute = function() {
  const activity = activeRouteActivity;
  const feedback = document.getElementById("reviewFeedback");
  if (!activity || !feedback) return;
  const assignments = getRouteSelections();
  if (Object.values(assignments).filter(Boolean).length < activity.components.length) {
    showToast("Ubica todos los componentes del ecosistema antes de comprobar.");
    return;
  }
  const routeCorrect = interventionRouteOrder.every((id, index) => {
    const step = activity.steps.find(item => item.id === id);
    return step?.order === index + 1;
  });
  const zonesCorrect = activity.components.every(component => assignments[component.id] === component.zone);
  const correctSteps = interventionRouteOrder.filter((id, index) => activity.steps.find(item => item.id === id)?.order === index + 1).length;
  const correctZones = activity.components.filter(component => assignments[component.id] === component.zone).length;

  activityProgressByModule[currentModuleId] = {
    ...(activityProgressByModule[currentModuleId] || {}),
    reviewAnswers: {
      routeOrder: [...interventionRouteOrder],
      zoneAssignments: assignments,
      updatedAt: new Date().toISOString()
    }
  };
  saveUserProgress();
  markInterventionRoute(activity, routeCorrect && zonesCorrect, assignments);

  setAssistantContext({
    activity: "Construcción del ecosistema",
    topic: "Ruta de intervención",
    question: "Orden y componentes institucionales",
    selectedAnswer: `${correctSteps}/${activity.steps.length} pasos y ${correctZones}/${activity.components.length} componentes correctos`,
    expectedAnswer: "Ruta completa y componentes ubicados en personas, procesos, conocimiento, tecnología y gobernanza.",
    hint: "La secuencia debe empezar con diagnóstico del conocimiento en riesgo y cerrar con evaluación de resultados.",
    feedback: "Una solución sostenible primero entiende el problema, luego captura y organiza conocimiento, después lo transfiere con tecnología y finalmente mide su impacto.",
    isCorrect: routeCorrect && zonesCorrect,
    attempts: (assistantContext.attempts || 0) + 1
  });

  if (routeCorrect && zonesCorrect) {
    markActivityComplete(currentModuleId, "review");
    launchActivityCelebration("reviewActivitiesContainer");
    feedback.className = "reinforcement-feedback is-success";
    feedback.textContent = "Ecosistema correcto: la ruta y los componentes quedaron guardados.";
    const speech = document.getElementById("companionSpeech");
    if (speech) speech.textContent = `Excelente, ${getStudentName()}. Construiste una ruta institucional completa para Universidad Horizonte.`;
  } else {
    feedback.className = "reinforcement-feedback is-warning";
    feedback.textContent = `Ajusta tu diseño: ${correctSteps}/${activity.steps.length} pasos en orden y ${correctZones}/${activity.components.length} componentes bien ubicados.`;
  }
}

function renderReviewActivities(activity, practiceMode = false) {
  const container = document.getElementById("reviewActivitiesContainer");
  if (!container || !activity) return;
  if (activity.mode === "decisionLab") return renderDecisionReview(activity, practiceMode);
  if (activity.mode === "interventionRoute") return renderInterventionRouteReview(activity, practiceMode);
  const progressSolved = !!activityProgressByModule[currentModuleId]?.review;
  const saved = practiceMode ? {} : activityProgressByModule[currentModuleId]?.reviewAnswers || {};
  const isSolved = progressSolved && !practiceMode;
  const words = shuffleArray([...activity.fill.map(item => item.answer), ...(activity.distractors || [])]);
  selectedFillWord = null;

  container.innerHTML = `
    <div class="activity-command-bar review-command-bar">
      <div>
        <span class="activity-kicker">Laboratorio de repaso</span>
        <h3>Decide, arrastra y comprueba</h3>
        <p>Resuelve las dos misiones. Puedes arrastrar una palabra o seleccionarla y luego tocar el espacio.</p>
      </div>
      <div class="review-progress" aria-live="polite"><strong id="reviewAnswered">0</strong><span>de ${activity.trueFalse.length + activity.fill.length}<br>respondidas</span></div>
    </div>
    <div class="review-activities-grid">
      <article class="mini-activity-card decision-activity">
        <div class="mini-activity-heading"><span>01</span><div><h3>Detecta la afirmación</h3><p>Decide si cada idea es verdadera o falsa.</p></div></div>
        ${activity.trueFalse.map((item, index) => `
          <fieldset class="truefalse-row ${isSolved ? 'is-correct' : ''}" data-tf-row="${index}">
            <legend><span>${index + 1}</span>${escapeHtml(item.text)}</legend>
            <div class="truth-options">
              <label><input type="radio" name="tf${index}" value="true" onchange="updateReviewProgress()" ${saved.trueFalse?.[index] === true ? 'checked' : ''}><span>Verdadero</span></label>
              <label><input type="radio" name="tf${index}" value="false" onchange="updateReviewProgress()" ${saved.trueFalse?.[index] === false ? 'checked' : ''}><span>Falso</span></label>
            </div>
          </fieldset>
        `).join("")}
      </article>
      <article class="mini-activity-card word-activity">
        <div class="mini-activity-heading"><span>02</span><div><h3>Construye la idea</h3><p>Lleva cada palabra al espacio correcto.</p></div></div>
        <div class="word-bank" aria-label="Banco de palabras">
          ${words.map(word => `<button type="button" class="word-chip" draggable="true" data-word="${escapeHtml(word)}" ondragstart="startFillDrag(event, '${escapeHtml(word)}')" onclick="selectFillWord('${escapeHtml(word)}', this)">${escapeHtml(word)}</button>`).join("")}
        </div>
        <div class="fill-prompts">
          ${activity.fill.map((item, index) => renderFillPrompt(item, index, saved.fill?.[index] || "", isSolved)).join("")}
        </div>
      </article>
    </div>
    <div class="reinforcement-actions review-actions">
      <button type="button" class="ghost-button" onclick="resetReviewActivities()">Reiniciar y cambiar orden</button>
      <button type="button" class="start-button" onclick="checkReviewActivities()">Comprobar respuestas</button>
    </div>
    <p class="reinforcement-feedback ${isSolved ? 'is-success' : ''}" id="reviewFeedback" role="status">${isSolved ? 'Actividad resuelta correctamente. Tus respuestas quedaron guardadas.' : practiceMode ? 'Nueva ronda preparada. Tu logro anterior sigue guardado.' : 'Completa ambas misiones y comprueba tu resultado.'}</p>
  `;
  updateWordBankState();
  updateReviewProgress();
}

window.startFillDrag = function(event, word) {
  event.dataTransfer.setData("text/plain", word);
  event.dataTransfer.effectAllowed = "move";
}

window.selectFillWord = function(word, button) {
  if (button.disabled) return;
  selectedFillWord = selectedFillWord === word ? null : word;
  document.querySelectorAll(".word-chip").forEach(chip => chip.classList.toggle("is-selected", chip === button && !!selectedFillWord));
  document.querySelectorAll(".drop-blank").forEach(blank => blank.classList.toggle("is-ready", !!selectedFillWord));
}

function assignFillWord(index, word) {
  if (!word) return;
  const blank = document.querySelector(`[data-fill-drop="${index}"]`);
  if (!blank) return;
  blank.dataset.value = word;
  blank.textContent = word;
  blank.classList.add("has-value");
  blank.classList.remove("is-correct", "is-wrong", "is-ready");
  blank.setAttribute("aria-label", `Espacio ${index + 1}: ${word}`);
  const clearButton = document.querySelector(`[data-fill-row="${index}"] .clear-drop`);
  if (clearButton) clearButton.hidden = false;
  selectedFillWord = null;
  updateWordBankState();
  updateReviewProgress();
}

window.dropFillWord = function(event, index) {
  event.preventDefault();
  assignFillWord(index, event.dataTransfer.getData("text/plain"));
}

window.placeSelectedFillWord = function(index) {
  if (selectedFillWord) assignFillWord(index, selectedFillWord);
}

window.clearFillWord = function(index) {
  const blank = document.querySelector(`[data-fill-drop="${index}"]`);
  if (!blank) return;
  blank.dataset.value = "";
  blank.textContent = "Suelta aquí";
  blank.className = "drop-blank";
  blank.setAttribute("aria-label", `Espacio ${index + 1}: sin respuesta`);
  const clearButton = document.querySelector(`[data-fill-row="${index}"] .clear-drop`);
  if (clearButton) clearButton.hidden = true;
  updateWordBankState();
  updateReviewProgress();
}

function updateWordBankState() {
  const used = [...document.querySelectorAll("[data-fill-drop]")].map(blank => blank.dataset.value).filter(Boolean);
  document.querySelectorAll(".word-chip").forEach(chip => {
    const isUsed = used.includes(chip.dataset.word);
    chip.disabled = isUsed;
    chip.classList.toggle("is-used", isUsed);
    chip.classList.remove("is-selected");
  });
  document.querySelectorAll(".drop-blank").forEach(blank => blank.classList.remove("is-ready"));
}

window.updateReviewProgress = function() {
  const answeredTruth = document.querySelectorAll('.truefalse-row input:checked').length;
  const answeredFill = [...document.querySelectorAll("[data-fill-drop]")].filter(blank => blank.dataset.value).length;
  const counter = document.getElementById("reviewAnswered");
  if (counter) counter.textContent = answeredTruth + answeredFill;
}

window.checkReviewActivities = function() {
  const activity = reviewActivitiesData[currentModuleId];
  const feedback = document.getElementById("reviewFeedback");
  if (!activity || !feedback) return;

  let correct = 0;
  const total = activity.trueFalse.length + activity.fill.length;
  const savedAnswers = { trueFalse: [], fill: [] };

  activity.trueFalse.forEach((item, index) => {
    const selected = document.querySelector(`input[name="tf${index}"]:checked`);
    const row = document.querySelector(`[data-tf-row="${index}"]`);
    const isCorrect = selected && selected.value === String(item.answer);
    row.classList.toggle("is-correct", !!isCorrect);
    row.classList.toggle("is-wrong", !isCorrect);
    savedAnswers.trueFalse[index] = selected ? selected.value === "true" : null;
    if (isCorrect) correct++;
  });

  document.querySelectorAll("[data-fill-drop]").forEach(blank => {
    const index = Number(blank.dataset.fillDrop);
    const item = activity.fill[index];
    const clean = (blank.dataset.value || "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const answer = item.answer.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const isCorrect = clean === answer;
    blank.classList.toggle("is-correct", isCorrect);
    blank.classList.toggle("is-wrong", !isCorrect);
    const row = document.querySelector(`[data-fill-row="${index}"]`);
    row.classList.toggle("is-correct", isCorrect);
    row.classList.toggle("is-wrong", !isCorrect);
    savedAnswers.fill[index] = blank.dataset.value || "";
    if (isCorrect) correct++;
  });

  const wasSolved = !!activityProgressByModule[currentModuleId]?.review;
  if (!wasSolved || correct === total) {
    activityProgressByModule[currentModuleId] = {
      ...(activityProgressByModule[currentModuleId] || {}),
      reviewAnswers: savedAnswers
    };
    saveUserProgress();
  }
  feedback.className = `reinforcement-feedback ${correct === total ? "is-success" : "is-warning"}`;
  feedback.textContent = correct === total
    ? "¡Excelente! Completaste las dos misiones y tus respuestas quedaron guardadas."
    : `Lograste ${correct} de ${total}. Las respuestas marcadas te muestran dónde ajustar.`;
  if (correct === total) {
    markActivityComplete(currentModuleId, "review");
    launchActivityCelebration("reviewActivitiesContainer");
    const speech = document.getElementById("companionSpeech");
    if (speech) speech.textContent = `¡Lo hiciste, ${getStudentName()}! Completaste las actividades de repaso. La evaluación de esta unidad ya está lista para ti.`;
  }
}

window.resetReviewActivities = function() {
  renderReviewActivities(reviewActivitiesData[currentModuleId], true);
}

function openContentModal(title, bodyHtml, learnMoreResources = [], replaceCurrent = false) {
  if (!replaceCurrent) modalFocusStack.push(document.activeElement);
  const learnMore = learnMoreResources.length ? `
    <aside class="theory-learn-more" aria-label="Recursos para aprender más">
      <div>
        <span class="space-kicker">Amplía este tema</span>
        <h3>¿Quieres aprender más?</h3>
        <p>Explora estos apoyos relacionados directamente con el contenido de esta tarjeta.</p>
      </div>
      <div class="learn-more-actions">
        ${learnMoreResources.map((resource, index) => `
          <button type="button" class="learn-more-button" onclick="openTheoryLearningResource(${index})">
            ${resource.type === "video" ? "Ver video" : resource.type === "image" ? "Ver infografía" : "Explorar vistas"}: ${resource.title}
          </button>
        `).join("")}
      </div>
    </aside>
  ` : "";
  document.getElementById("theoryTitle").textContent = title;
  const theoryBody = document.getElementById("theoryBody");
  theoryBody.innerHTML = `${bodyHtml}${learnMore}`;
  theoryBody.scrollTop = 0;
  document.querySelector("#theoryModal .activity-modal-content").classList.toggle("resource-modal-content", bodyHtml.includes("resource-image") || bodyHtml.includes("journal-form") || bodyHtml.includes("capital-matrix-form"));
  document.getElementById("theoryModal").classList.add("is-active");
  syncModalState();
  document.getElementById("closeTheoryBtn").focus();
}

window.openTeamPhoto = function(src, name) {
  activeTheoryResources = [];
  openContentModal(name, `<img class="resource-image team-photo-expanded" src="${src}" alt="Fotografía ampliada de ${name}">`);
}

window.openTheory = function(modId, nodeId) {
  const node = courseData[modId].theoryNodes.find(n => n.id === nodeId);
  setAssistantContext({
    activity: "Teoría",
    topic: node.title,
    question: `Comprender ${node.title}`,
    selectedAnswer: "",
    expectedAnswer: "",
    hint: "Lee la idea central y piensa cómo se aplicaría en Universidad Horizonte.",
    feedback: "La teoría sirve como base para resolver actividades, recursos y evaluación.",
    isCorrect: null,
    attempts: 0
  });
  activeTheoryResources = [...(node.learnMoreResources || [])];
  if (node.learnMoreVideo) activeTheoryResources.unshift({ ...node.learnMoreVideo, type: "video" });
  saveViewedTheory(modId, nodeId);
  const card = document.getElementById(`theory-card-${nodeId.replace('.', '-')}`);
  if (card) {
    card.classList.add("is-viewed");
    const status = card.querySelector(".theory-node-status");
    if (status) status.textContent = "Revisado";
    const p = card.querySelector("p");
    if (p) p.textContent = "Teoría revisada. Puedes volver a abrirla.";
  }
  openContentModal(node.title, node.content, activeTheoryResources);
  updateModuleLocks();
}
function closeTheoryModal() {
  document.getElementById("theoryModal").classList.remove("is-active");
  document.querySelector("#theoryModal .activity-modal-content").classList.remove("resource-modal-content");
  if (document.getElementById("moduleView").classList.contains("is-active")) {
    renderQuizLaunch();
    updateModuleLocks();
  }
  syncModalState();
  restorePreviousFocus();
}
document.getElementById("closeTheoryBtn").onclick = closeTheoryModal;
document.getElementById("theoryOverlay").onclick = closeTheoryModal;

window.openTheoryLearningResource = function(index) {
  const resource = activeTheoryResources[index];
  if (!resource) return;
  if (resource.type === "video") return openVideoItem(resource);
  openLearningItem(resource);
}

function openLearningItem(resource) {
  modalFocusStack.push(document.activeElement);
  document.getElementById("learningTitle").textContent = resource.title;

  const visualContent = resource.type === "image"
    ? `<img class="learning-feature-image" src="${resource.imageUrl}" alt="${resource.title}">`
    : `<div class="learning-gallery">
        ${resource.slides.map((slide, index) => `
          <figure>
            <span>Vista ${index + 1} de ${resource.slides.length}</span>
            <img src="${slide}" alt="${resource.title}, vista ${index + 1}" loading="${index === 0 ? "eager" : "lazy"}">
          </figure>
        `).join("")}
      </div>`;

  document.getElementById("learningBody").innerHTML = `
    <p class="learning-description">${resource.description}</p>
    ${visualContent}
  `;
  document.getElementById("learningModal").classList.add("is-active");
  syncModalState();
  document.getElementById("closeLearningBtn").focus();
}

function closeLearningModal() {
  document.getElementById("learningModal").classList.remove("is-active");
  document.getElementById("learningBody").innerHTML = "";
  syncModalState();
  restorePreviousFocus();
}

window.openVideo = function(modId, mediaIndex) {
  const item = courseData[modId]?.media?.[mediaIndex];
  if (!item?.embedUrl) return showToast("Este recurso multimedia estará disponible pronto.");
  openVideoItem(item);
}

function openVideoItem(item) {
  modalFocusStack.push(document.activeElement);
  document.getElementById("videoTitle").textContent = item.title;
  document.getElementById("videoDescription").textContent = `${item.description}${item.source ? ` Fuente: ${item.source}.` : ""}`;
  document.getElementById("videoFrame").src = item.embedUrl;
  document.getElementById("videoModal").classList.add("is-active");
  syncModalState();
  document.getElementById("closeVideoBtn").focus();
}

function openQuizModal(title, kicker = "Evaluación") {
  modalFocusStack.push(document.activeElement);
  document.getElementById("quizModalTitle").textContent = title;
  document.getElementById("quizModalKicker").textContent = kicker;
  document.getElementById("quizModalBody").innerHTML = "";
  document.getElementById("quizModal").classList.add("is-active");
  syncModalState();
  document.getElementById("closeQuizBtn").focus();
}

function closeQuizModal() {
  document.getElementById("quizModal").classList.remove("is-active");
  document.getElementById("quizModalBody").innerHTML = "";
  syncModalState();
  restorePreviousFocus();
}

function closeVideoModal() {
  document.getElementById("videoModal").classList.remove("is-active");
  document.getElementById("videoFrame").src = "";
  syncModalState();
  restorePreviousFocus();
}

function syncModalState() {
  document.body.classList.toggle("modal-open", !!document.querySelector(".activity-modal.is-active"));
}

function restorePreviousFocus() {
  const previousFocus = modalFocusStack.pop();
  if (previousFocus && document.contains(previousFocus)) previousFocus.focus();
}

document.getElementById("closeVideoBtn").onclick = closeVideoModal;
document.getElementById("videoOverlay").onclick = closeVideoModal;
document.getElementById("closeLearningBtn").onclick = closeLearningModal;
document.getElementById("learningOverlay").onclick = closeLearningModal;
document.getElementById("closeQuizBtn").onclick = closeQuizModal;
document.getElementById("quizOverlay").onclick = closeQuizModal;

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (document.getElementById("certificateModal").classList.contains("is-active")) {
    closeCertificateModal();
  } else if (document.getElementById("learningModal").classList.contains("is-active")) {
    closeLearningModal();
  } else if (document.getElementById("videoModal").classList.contains("is-active")) {
    closeVideoModal();
  } else if (document.getElementById("quizModal").classList.contains("is-active")) {
    closeQuizModal();
  } else if (document.getElementById("theoryModal").classList.contains("is-active")) {
    closeTheoryModal();
  }
});

window.submitQuiz = function() {
  const form = document.getElementById("quizForm");
  const modData = courseData[currentModuleId];
  let correctas = 0;
  const answers = [];
  
  for(let i=0; i<modData.quiz.length; i++) {
    const selected = form.querySelector(`input[name="q${i}"]:checked`);
    if(!selected) return showToast("Por favor responde todas las preguntas.");
    const value = parseInt(selected.value);
    answers[i] = value;
    if(value === modData.quiz[i].correct) correctas++;
  }

  const porcentaje = Math.round((correctas / modData.quiz.length) * 100);
  const previous = quizResultsByModule[currentModuleId];
  if (!previous || porcentaje >= previous.score) {
    quizResultsByModule[currentModuleId] = {
      score: porcentaje,
      correctas,
      total: modData.quiz.length,
      answers,
      passed: porcentaje >= 80,
      date: new Date().toLocaleDateString('es-CO')
    };
    saveUserProgress();
  }

  if(porcentaje >= 80) {
    const perfect = porcentaje === 100;
    showToast(`¡Aprobado con ${porcentaje}%! Unidad ${currentModuleId} completada.`);
    saveCertificate(currentModuleId, modData.title);
    
    if(highestUnlocked === currentModuleId && highestUnlocked < MAX_MODULES) {
      highestUnlocked++;
      saveUserProgress();
    }
    document.getElementById("quizModalBody").innerHTML = `
      <div class="final-result ${perfect ? 'is-success' : 'is-warning'}">
        <h3>${perfect ? '¡Felicidades, completaste la evaluación con 100%!' : 'Evaluación aprobada'}</h3>
        <p>Resultado: ${correctas} de ${modData.quiz.length} respuestas correctas (${porcentaje}%).</p>
        <div class="summary-actions">
          ${perfect ? '' : `<button type="button" class="start-button" onclick="startModuleEvaluation(true)">Intentar el 100%</button>`}
          <button type="button" class="ghost-button" onclick="closeQuizModal(); renderMap(); switchView('homeView');">Continuar</button>
        </div>
      </div>
    `;
    renderQuizLaunch();
    renderFinalEvaluationPanel();
  } else {
    document.getElementById("quizModalBody").innerHTML = `
      <div class="final-result is-warning">
        <h3>Necesitas reforzar un poco más</h3>
        <p>Resultado: ${correctas} de ${modData.quiz.length} respuestas correctas (${porcentaje}%). Necesitas mínimo 80%.</p>
        <button type="button" class="start-button" onclick="startModuleEvaluation(true)">Repetir evaluación</button>
      </div>
    `;
  }
}

function shuffleArray(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function renderFinalEvaluationPanel() {
  // La evaluación final del programa se muestra como tarjeta del mapa principal.
}

function buildFinalQuestions() {
  currentFinalQuestions = [];
}

window.startFinalEvaluation = function() {
  openProgramFinalEvaluation();
}

window.submitFinalEvaluation = function() {
  openProgramFinalEvaluation();
}

// ==========================================
// 5. PERFIL Y CERTIFICADOS
// ==========================================

function getBadgeDefinition(badgeId) {
  return badgeDefinitions.find(badge => badge.id === badgeId);
}

function unlockBadge(badgeId, silent = false) {
  const badge = getBadgeDefinition(badgeId);
  if (!badge) return;
  if (!certificates.find(item => item.achievementId === badgeId || item.badgeId === badgeId)) {
    certificates.push({
      achievementId: badgeId,
      badgeId,
      kind: "badge",
      modId: badge.modId || null,
      title: badge.name,
      description: badge.description,
      date: new Date().toLocaleDateString("es-CO")
    });
    saveUserProgress();
    if (!silent) showToast(`Insignia desbloqueada: ${badge.name}.`);
  }
}

function saveCertificate(modId, modTitle) {
  const badge = badgeDefinitions.find(item => item.modId === modId);
  if (badge) {
    unlockBadge(badge.id);
    return;
  }
  if (!certificates.find(c => c.modId === modId)) {
    certificates.push({ modId, title: modTitle, date: new Date().toLocaleDateString("es-CO") });
    saveUserProgress();
  }
}

function hasUnlockedBadge(badgeId) {
  if (certificates.some(item => item.achievementId === badgeId || item.badgeId === badgeId)) return true;
  if (badgeId === "unidad-1-seci") return hasCompletedUnit(1);
  if (badgeId === "unidad-2-estratega") return hasCompletedUnit(2);
  if (badgeId === "matriz-capital") return hasCompletedFinalEvaluation();
  if (badgeId === "laboratorio-ar") return Object.values(activityProgressByModule).some(progress => !!progress?.ar);
  return false;
}

function renderProfile() {
  document.getElementById("profileNameDisplay").textContent = currentUser?.name || "Estudiante";
  document.getElementById("profileEmailDisplay").textContent = currentUser?.email || "correo@uptc.edu.co";
  setCloudSyncState(cloudSyncState, cloudSyncMessage);

  document.getElementById("profileAvatarDisplay").innerHTML = profilePictureDataUrl
    ? `<img src="${profilePictureDataUrl}" alt="Foto de perfil de ${getStudentName()}">`
    : `<span aria-hidden="true">👤</span>`;

  const certContainer = document.getElementById("profileCertCard");
  const completedAll = isProgramCertificateReady();
  certContainer.innerHTML = `
    <div class="badge-board">
      ${badgeDefinitions.map(badge => {
        const unlocked = hasUnlockedBadge(badge.id);
        const saved = certificates.find(item => item.achievementId === badge.id || item.badgeId === badge.id);
        const badgeVisual = badge.imageUrl
          ? `<img src="${badge.imageUrl}" alt="">`
          : `<span>${escapeHtml(badge.icon || "")}</span>`;
        return `
          <article class="badge-card ${unlocked ? 'is-unlocked' : 'is-locked'}">
            <div class="badge-medal" aria-hidden="true">${badgeVisual}</div>
            <div>
              <span>${unlocked ? `Desbloqueada${saved?.date ? ` · ${saved.date}` : ''}` : 'Bloqueada'}</span>
              <h3>${badge.name}</h3>
              <p>${badge.description}</p>
              <small>${badge.condition}</small>
            </div>
          </article>`;
      }).join("")}
    </div>
    <div class="final-certificate-card ${completedAll ? 'is-ready' : ''}">
      <div>
        <strong>${completedAll ? 'Certificado final disponible' : 'Certificado final bloqueado'}</strong>
        <p>${completedAll ? 'Completaste las dos unidades y la evaluación final. Puedes generar el reconocimiento general.' : 'Completa la Unidad 1, la Unidad 2 y la Matriz de Valoración del Capital Personal para obtenerlo.'}</p>
      </div>
      <button class="ghost-button" ${completedAll ? '' : 'disabled'} onclick="openCertificate('Recorrido completo: Gestión del Conocimiento y Caso Interactivo')">Ver certificado final</button>
    </div>
  `;
}

function compressProfilePicture(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("No fue posible leer la imagen."));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error("El archivo seleccionado no es una imagen válida."));
      image.onload = () => {
        const size = 320;
        const sourceSize = Math.min(image.naturalWidth, image.naturalHeight);
        const sourceX = Math.max(0, (image.naturalWidth - sourceSize) / 2);
        const sourceY = Math.max(0, (image.naturalHeight - sourceSize) / 2);
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext("2d");
        context.drawImage(image, sourceX, sourceY, sourceSize, sourceSize, 0, 0, size, size);

        let result = canvas.toDataURL("image/jpeg", 0.78);
        if (result.length > 180000) result = canvas.toDataURL("image/jpeg", 0.62);
        if (result.length > 250000) {
          reject(new Error("La imagen sigue siendo demasiado pesada. Elige otra fotografía."));
          return;
        }
        resolve(result);
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

document.getElementById("profileImageInput").onchange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    showToast("Selecciona un archivo de imagen.");
    return;
  }

  try {
    showToast("Preparando y guardando tu foto...");
    profilePictureDataUrl = await compressProfilePicture(file);
    saveUserProgress();
    renderProfile();
    if (cloudProgressReady && currentUser && supabaseClient) {
      window.clearTimeout(cloudSyncTimer);
      cloudSyncTimer = null;
      await persistProgressToCloud(buildProgressSnapshot());
      showToast("Foto guardada en tu cuenta y disponible en otros dispositivos.");
    } else {
      setCloudSyncState("error", "La foto quedó en este navegador. Pulsa Sincronizar ahora cuando tengas conexión.");
      showToast("Foto guardada en este navegador. Sincronízala cuando tengas conexión.");
    }
  } catch (error) {
    console.error("No fue posible guardar la foto de perfil.", error);
    showToast(error.message || "No fue posible guardar la foto.");
  } finally {
    e.target.value = "";
  }
}

window.openCertificate = function(moduleName) {
  const canvas = document.getElementById("certificateCanvas");
  const ctx = canvas.getContext("2d");
  modalFocusStack.push(document.activeElement);

  const loadCertificateImage = src => new Promise(resolve => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });

  const drawContainedImage = (image, x, y, width, height) => {
    if (!image) return;
    const scale = Math.min(width / image.naturalWidth, height / image.naturalHeight);
    const drawWidth = image.naturalWidth * scale;
    const drawHeight = image.naturalHeight * scale;
    ctx.drawImage(image, x + (width - drawWidth) / 2, y + (height - drawHeight) / 2, drawWidth, drawHeight);
  };

  const drawWrappedText = (text, centerX, startY, maxWidth, lineHeight) => {
    const words = text.split(/\s+/);
    const lines = [];
    let line = "";
    words.forEach(word => {
      const candidate = line ? `${line} ${word}` : word;
      if (ctx.measureText(candidate).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = candidate;
      }
    });
    if (line) lines.push(line);
    lines.forEach((value, index) => ctx.fillText(value, centerX, startY + index * lineHeight));
  };

  const setFittedFont = (text, maxWidth, maxSize, minSize, family) => {
    let size = maxSize;
    do {
      ctx.font = `bold ${size}px ${family}`;
      size -= 1;
    } while (ctx.measureText(text).width > maxWidth && size >= minSize);
  };

  const renderCertificate = ([uptcLogo, licenciaturaLogo, aveLogo]) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fbfaf7";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Cinta lateral inspirada en la identidad institucional UPTC.
    ctx.fillStyle = "#202122";
    ctx.beginPath();
    ctx.moveTo(1125, 0); ctx.lineTo(1200, 0); ctx.lineTo(1200, 850); ctx.lineTo(1090, 850);
    ctx.bezierCurveTo(1105, 690, 1170, 555, 1140, 360);
    ctx.bezierCurveTo(1128, 245, 1090, 110, 1040, 0);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#f8c80e";
    ctx.beginPath();
    ctx.moveTo(1070, 0); ctx.lineTo(1128, 0);
    ctx.bezierCurveTo(1190, 170, 1190, 345, 1162, 495);
    ctx.bezierCurveTo(1135, 640, 1075, 735, 1060, 850);
    ctx.lineTo(1008, 850);
    ctx.bezierCurveTo(1028, 706, 1090, 615, 1113, 480);
    ctx.bezierCurveTo(1138, 327, 1126, 168, 1070, 0);
    ctx.closePath(); ctx.fill();

    ctx.strokeStyle = "#f2c319";
    ctx.lineWidth = 10;
    ctx.strokeRect(38, 38, 1025, 774);
    ctx.strokeStyle = "#175f69";
    ctx.lineWidth = 2;
    ctx.strokeRect(52, 52, 995, 746);

    drawContainedImage(uptcLogo, 78, 66, 260, 92);
    drawContainedImage(licenciaturaLogo, 390, 66, 350, 92);
    drawContainedImage(aveLogo, 800, 58, 108, 108);

    ctx.textAlign = "center";
    ctx.fillStyle = "#102d35";
    ctx.font = 'bold 34px Georgia, "Times New Roman", serif';
    ctx.fillText("Universidad Pedagógica y Tecnológica de Colombia", 550, 220);
    ctx.fillStyle = "#175f69";
    ctx.font = 'bold 20px Georgia, "Times New Roman", serif';
    ctx.fillText("Grupo AVE | Felicidad y Gestión del Conocimiento", 550, 258);

    ctx.fillStyle = "#b68a22";
    ctx.font = 'bold 38px Georgia, "Times New Roman", serif';
    ctx.fillText("CERTIFICAN QUE", 550, 330);
    ctx.fillStyle = "#175f69";
    const studentName = (currentUser?.name || "Estudiante").toUpperCase();
    setFittedFont(studentName, 720, 46, 28, '"Inter", sans-serif');
    ctx.fillText(studentName, 550, 410);
    ctx.strokeStyle = "#175f69";
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(235, 442); ctx.lineTo(865, 442); ctx.stroke();

    ctx.fillStyle = "#b68a22";
    ctx.font = 'bold 27px Georgia, "Times New Roman", serif';
    const certificateLabel = moduleName.toLowerCase().includes("recorrido completo")
      ? "COMPLETÓ EL RECORRIDO:"
      : "APROBÓ LA UNIDAD:";
    ctx.fillText(certificateLabel, 550, 500);
    ctx.fillStyle = "#175f69";
    ctx.font = 'bold 31px "Inter", sans-serif';
    drawWrappedText(moduleName.toUpperCase(), 550, 555, 700, 38);

    const fecha = new Date().toLocaleDateString("es-CO");
    ctx.fillStyle = "#263840";
    ctx.font = '22px "Inter", sans-serif';
    ctx.fillText(`Fecha de emisión: ${fecha}`, 550, 690);
    ctx.font = 'italic 18px "Inter", sans-serif';
    ctx.fillStyle = "#5f6d73";
    ctx.fillText("Duitama, Colombia", 550, 727);

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("landscape", "px", [1200, 850]);
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 1200, 850);
    document.getElementById("certPreviewFrame").src = URL.createObjectURL(pdf.output("blob"));
    document.getElementById("certificateModal").classList.add("is-active");
    syncModalState();
    document.getElementById("closeCertBtn").focus();
    document.getElementById("downloadCertBtn").onclick = () => pdf.save(`Cert_${moduleName.replace(/\s+/g, "")}.pdf`);
  };

  Promise.all([
    loadCertificateImage("Recursos/Logo_de_la_UPTC.svg.png"),
    loadCertificateImage("Recursos/Logo LI.png"),
    loadCertificateImage("Recursos/grupo-ave-sencillo.jpeg")
  ]).then(renderCertificate);
}
function closeCertificateModal() {
  document.getElementById("certificateModal").classList.remove("is-active");
  syncModalState();
  restorePreviousFocus();
}
document.getElementById("closeCertBtn").onclick = closeCertificateModal;
document.getElementById("certOverlay").onclick = closeCertificateModal;

// ==========================================
// 6. LOGIN Y FLUJO DE ENTRADA
// ==========================================
document.getElementById("toggleAuthBtn").onclick = () => {
  isLoginMode = !isLoginMode;
  document.getElementById("loginTitle").textContent = isLoginMode ? "Iniciar sesión" : "Crear cuenta";
  document.getElementById("loginSubtitle").textContent = isLoginMode ? "Ingresa tus credenciales para continuar" : "Crea tu perfil para guardar el recorrido";
  document.getElementById("submitBtn").textContent = isLoginMode ? "Ingresar" : "Registrarse";
  document.getElementById("toggleAuthBtn").textContent = isLoginMode ? "¿No tienes cuenta? Regístrate aquí" : "¿Ya tienes cuenta? Inicia sesión";
  document.getElementById("nameGroup").style.display = isLoginMode ? "none" : "block";
  document.getElementById("passwordInput").setAttribute("autocomplete", isLoginMode ? "current-password" : "new-password");
  document.getElementById("nameInput").required = !isLoginMode;
};

document.getElementById("loginForm").onsubmit = async (e) => {
  e.preventDefault();
  const btn = document.getElementById("submitBtn");
  btn.disabled = true; btn.textContent = "Cargando...";
  const email = document.getElementById("emailInput").value.trim();
  const password = document.getElementById("passwordInput").value;
  const name = document.getElementById("nameInput").value.trim();

  try {
    let authUser = null;
    if (isLoginMode) {
      const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
      if (error) throw error;
      authUser = data.user;
      currentUser = { id: authUser.id, email: authUser.email, name: authUser.user_metadata?.full_name || email.split("@")[0] };
    } else {
      const { data, error } = await supabaseClient.auth.signUp({ email, password, options: { data: { full_name: name } } });
      if (error) throw error;
      authUser = data.user;
      currentUser = { id: authUser.id, email: authUser.email, name: name };
    }
    localStorage.setItem("fgc_currentUser", JSON.stringify(currentUser));
    await syncProgressWithCloud(authUser);
    document.getElementById("appHeader").hidden = false;
    setHeaderIdentity();
    renderAvatars(); renderMap();
    switchView("homeView");
    showToast(`Bienvenido, ${currentUser.name}`);
  } catch (error) {
    let msg = error.message;
    if(msg.includes("already registered")) msg = "El correo ya está registrado. Inicia sesión.";
    else if(msg.includes("Invalid login")) msg = "Credenciales incorrectas.";
    alert(msg);
  } finally {
    btn.disabled = false; btn.textContent = isLoginMode ? "Ingresar" : "Registrarse";
  }
};

document.getElementById("logoutBtn").onclick = async () => {
  await flushCloudProgressSync();
  await supabaseClient.auth.signOut();
  currentUser = null; localStorage.removeItem("fgc_currentUser");
  cloudProgressReady = false;
  progressUpdatedAt = null;
  window.clearTimeout(cloudSyncTimer);
  cloudSyncTimer = null;
  highestUnlocked = 1;
  selectedCompanion = null;
  viewedTheoryByModule = {};
  viewedResourcesByModule = {};
  activityProgressByModule = {};
  quizResultsByModule = {};
  certificates = [];
  finalEvaluationResult = null;
  document.getElementById("appHeader").hidden = true;
  switchView("loginView");
};

// ==========================================
// 7. INICIALIZACIÓN DE NAVEGACIÓN
// ==========================================
document.getElementById("brandHomeLink").onclick = () => { renderMap(); switchView("homeView"); };
document.getElementById("btnBackToMap").onclick = () => { renderMap(); switchView("homeView"); };
document.getElementById("btnGoTeam").onclick = () => switchView("teamView");
document.getElementById("btnBackFromTeam").onclick = () => { renderMap(); switchView("homeView"); };
document.getElementById("btnGoProfile").onclick = () => { renderProfile(); switchView("profileView"); };
document.getElementById("btnBackFromProfile").onclick = () => { renderMap(); switchView("homeView"); };
document.getElementById("btnSyncProgress").onclick = () => syncProgressNow();
document.getElementById("btnOpenChat").onclick = () => openChatView(getActiveViewId());
document.getElementById("btnOpenModuleChat").onclick = () => openChatView("moduleView");
document.getElementById("btnBackFromChat").onclick = () => {
  if (chatReturnView === "moduleView" && currentUser) {
    openModule(currentModuleId);
    return;
  }
  switchView(currentUser ? chatReturnView || "homeView" : "loginView");
};
document.getElementById("assistantForm").onsubmit = (event) => {
  event.preventDefault();
  const input = document.getElementById("assistantQuestion");
  if (!input) return;
  const question = input.value.trim();
  if (!question) {
    pushAssistantMessage("assistant", "Escríbeme una pregunta corta sobre la teoría, la actividad, la realidad aumentada o la matriz.");
    return;
  }
  pushAssistantMessage("user", question);
  pushAssistantMessage("assistant", getAssistantResponse("free", question));
  input.value = "";
};
const finalEvaluationButton = document.getElementById("btnStartFinalEvaluation");
if (finalEvaluationButton) finalEvaluationButton.onclick = () => startFinalEvaluation();
document.getElementById("btnContinueJourney").onclick = () => {
  openNextProgramStep();
};
document.getElementById("btnStartARCamera").onclick = () => startARCamera();
document.getElementById("btnSimulateARScan").onclick = () => revealARTarget(selectedARTargetId, "manual");
document.getElementById("btnStopARCamera").onclick = () => stopARCamera();
document.getElementById("btnARContinueActivity").onclick = () => {
  stopARCamera();
  if (arReturnView === "moduleView" && currentUser) {
    openModule(2);
    return;
  }
  switchView(currentUser ? "homeView" : "loginView");
};
document.getElementById("btnBackToARScan").onclick = () => {
  switchView("arView");
};
document.getElementById("btnARTheoryContinue").onclick = () => {
  stopARCamera();
  if (arReturnView === "moduleView" && currentUser) {
    openModule(2);
    return;
  }
  switchView(currentUser ? "homeView" : "loginView");
};
document.getElementById("btnCopyARLink").onclick = async () => {
  try {
    await navigator.clipboard.writeText(getPublicARLink());
    showToast("Enlace de realidad aumentada copiado.");
  } catch (error) {
    console.warn("No fue posible copiar el enlace.", error);
    showToast("No fue posible copiar el enlace en este navegador.");
  }
};
document.getElementById("btnBackFromAR").onclick = () => {
  stopARCamera();
  arActiveModuleId = null;
  arActiveMediaIndex = null;
  if (arReturnView === "moduleView" && currentUser) {
    openModule(2);
    return;
  }
  const url = new URL(window.location.href);
  url.searchParams.delete("experience");
  url.searchParams.delete("target");
  window.history.replaceState({}, "", url);
  switchView(currentUser ? "homeView" : "loginView");
};

const accessibilityGuideAudio = document.getElementById("accessibilityGuideAudio");
const accessibilityGuideButton = document.getElementById("btnAccessibilityGuide");
const accessibilityGuideLabel = document.getElementById("accessibilityGuideLabel");

function setAccessibilityGuideButton(text, ariaLabel) {
  accessibilityGuideLabel.textContent = text;
  accessibilityGuideButton.setAttribute("aria-label", ariaLabel);
}

function getAccessibilityGuide(viewId) {
  const guides = {
    loginView: {
      src: "Recursos/nuevo/guia-inicio.wav",
      name: "inicio de sesion"
    },
    homeView: {
      src: "Recursos/nuevo/guia-inicio-recorrido.wav",
      name: "pagina inicial y mapa de unidades"
    },
    profileView: {
      src: "Recursos/guia-perfil.wav",
      name: "perfil"
    },
    teamView: {
      src: "Recursos/guia-equipo-desarrollo.wav",
      name: "equipo de desarrollo"
    },
    arView: {
      src: "Recursos/nuevo/guia-realidad-aumentada.wav",
      name: "laboratorio de realidad aumentada"
    },
    arTheoryView: {
      src: "Recursos/nuevo/guia-realidad-aumentada.wav",
      name: "contenido de realidad aumentada"
    },
    chatView: {
      src: "Recursos/nuevo/guia-inicio-recorrido.wav",
      name: "chat de ayuda"
    }
  };

  if (viewId === "moduleView") {
    const unitGuides = {
      1: "Recursos/nuevo/guia-unidad-1.wav",
      2: "Recursos/nuevo/guia-unidad-2.wav"
    };
    return {
      src: unitGuides[currentModuleId] || unitGuides[1],
      name: `Unidad ${currentModuleId}`
    };
  }

  return guides[viewId] || guides.homeView;
}

function resetAccessibilityGuide(viewId) {
  if (!accessibilityGuideAudio || !accessibilityGuideButton) return;

  const guide = getAccessibilityGuide(viewId);
  accessibilityGuideAudio.pause();
  accessibilityGuideAudio.currentTime = 0;
  accessibilityGuideButton.classList.remove("is-playing");
  accessibilityGuideAudio.src = guide.src;
  accessibilityGuideAudio.load();
  accessibilityGuideButton.dataset.guideName = guide.name;
  setAccessibilityGuideButton(`Escuchar guía: ${guide.name}`, `Escuchar guía accesible de ${guide.name} desde el inicio`);
}

accessibilityGuideButton.onclick = async () => {
  const guideName = accessibilityGuideButton.dataset.guideName || "esta pantalla";
  try {
    if (accessibilityGuideAudio.paused) {
      await accessibilityGuideAudio.play();
      accessibilityGuideButton.classList.add("is-playing");
      setAccessibilityGuideButton(`Pausar guía: ${guideName}`, `Pausar guía accesible de ${guideName}`);
    } else {
      accessibilityGuideAudio.pause();
      accessibilityGuideButton.classList.remove("is-playing");
      setAccessibilityGuideButton(`Continuar guía: ${guideName}`, `Continuar guía accesible de ${guideName}`);
    }
  } catch (error) {
    accessibilityGuideButton.classList.remove("is-playing");
    showToast("No se pudo reproducir la guia accesible en este navegador.");
  }
};
accessibilityGuideAudio.onended = () => {
  const guideName = accessibilityGuideButton.dataset.guideName || "esta pantalla";
  accessibilityGuideAudio.currentTime = 0;
  accessibilityGuideButton.classList.remove("is-playing");
  setAccessibilityGuideButton(`Repetir guía: ${guideName}`, `Repetir guía accesible de ${guideName} desde el inicio`);
};

// La primera guia corresponde a la pantalla de acceso.
resetAccessibilityGuide("loginView");

document.addEventListener("DOMContentLoaded", async () => {
  const publicARMode = new URLSearchParams(window.location.search).get("experience") === "capitales";
  if (publicARMode) {
    document.getElementById("appHeader").hidden = true;
    initializeARView("loginView");
    switchView("arView");
    return;
  }
  if (currentUser) {
    loadUserProgress();
    try {
      const { data, error } = await supabaseClient.auth.getUser();
      if (error) throw error;
      if (data.user) {
        currentUser = {
          id: data.user.id,
          email: data.user.email,
          name: data.user.user_metadata?.full_name || currentUser.name || data.user.email?.split("@")[0]
        };
        localStorage.setItem("fgc_currentUser", JSON.stringify(currentUser));
        await syncProgressWithCloud(data.user);
      }
    } catch (error) {
      console.warn("La aplicación inició con la copia local del progreso.", error);
      cloudProgressReady = false;
      setCloudSyncState("error", "La sesión abrió con la copia de este navegador. Pulsa Sincronizar ahora cuando tengas conexión.");
    }
    document.getElementById("appHeader").hidden = false;
    setHeaderIdentity();
    renderAvatars(); renderMap();
    switchView("homeView");
    showToast(`Hola de nuevo, ${currentUser.name}`);
  }
});

window.addEventListener("online", async () => {
  if (!currentUser || !supabaseClient) return;
  try {
    const { data, error } = await supabaseClient.auth.getUser();
    if (error) throw error;
    if (!data.user) return;
    await syncProgressWithCloud(data.user);
    renderAvatars();
    renderMap();
    if (document.getElementById("profileView").classList.contains("is-active")) renderProfile();
    showToast("Tu progreso quedó sincronizado con la nube.");
  } catch (error) {
    reportCloudSyncError(error);
  }
});
