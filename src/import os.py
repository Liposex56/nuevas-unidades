import os

print("Restaurando el sistema de Vistas y los Avatares Virtuales...")

ruta_base = r"C:\Users\profe\OneDrive\Desktop\App trabajo felicidad"

# ==========================================
# 1. CONTENIDO HTML
# ==========================================
html_content = r"""<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Felicidad y Gestión del Conocimiento</title>
  <link rel="stylesheet" href="src/styles.css" />
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <script src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js"></script>
</head>
<body>

  <!-- VISTA 1: PANTALLA DE LOGUEO -->
  <div id="loginView" class="view is-active">
    <div class="login-container">
      <div class="login-box">
        <div class="login-logo">
          <svg viewBox="0 0 32 32" role="img" width="36" height="36" fill="#fff"><path d="M16 3 3 10l13 7 13-7-13-7Z" /><path d="M8 14v6c0 3 4 6 8 6s8-3 8-6v-6" /></svg>
        </div>
        <h2 class="login-title" id="loginTitle">Iniciar sesión</h2>
        <p class="login-subtitle" id="loginSubtitle">Ingresa tus credenciales para continuar</p>
        <form id="loginForm" class="login-form">
          <div class="form-group" id="nameGroup" style="display: none;">
            <label class="field-label">Nombre completo</label>
            <input type="text" id="nameInput" placeholder="Ej. Juan Pérez">
          </div>
          <div class="form-group">
            <label class="field-label">Correo institucional</label>
            <input type="email" id="emailInput" placeholder="estudiante@uptc.edu.co" required>
          </div>
          <div class="form-group">
            <label class="field-label">Contraseña</label>
            <input type="password" id="passwordInput" placeholder="********" required>
          </div>
          <button type="submit" id="submitBtn" class="start-button" style="width: 100%; margin-top: 10px;">Ingresar</button>
        </form>
        <div style="text-align: center; margin-top: 15px;">
          <button type="button" id="toggleAuthBtn" class="ghost-button-text">¿No tienes cuenta? Regístrate aquí</button>
        </div>
      </div>
    </div>
  </div>

  <!-- ENCABEZADO GLOBAL (Visible solo al entrar) -->
  <header class="site-header" id="appHeader" hidden>
    <div class="header-container">
      <a class="brand" href="#" id="brandHomeLink">
        <span class="brand-mark"><svg viewBox="0 0 32 32"><path d="M16 3 3 10l13 7 13-7-13-7Z" /><path d="M8 14v6c0 3 4 6 8 6s8-3 8-6v-6" /></svg></span>
        <span class="brand-copy"><strong>Felicidad y Conocimiento</strong><small>Bienestar, aprendizaje y tecnología</small></span>
      </a>
      <div class="header-actions">
        <button class="ghost-button" id="btnGoProfile">Mi Perfil</button>
        <button class="ghost-button" id="logoutBtn">Cerrar sesión</button>
      </div>
    </div>
  </header>

  <!-- VISTA 2: MAPA PRINCIPAL Y SELECCIÓN DE PERSONAJE -->
  <main id="homeView" class="view app-content">
    <section class="welcome-layout">
      <div class="welcome-panel">
        <p class="eyebrow">Paso 1: Tu guía de aprendizaje</p>
        <h1>Aventura del saber</h1>
        <p class="welcome-text">Antes de explorar los módulos, selecciona el acompañante virtual que te guiará en esta experiencia sobre la Psicología Positiva y la Gestión del Conocimiento.</p>
      </div>
      <aside class="companion-preview">
        <span class="space-kicker" style="color:#aeb9d3;">Acompañante elegido</span>
        <div class="preview-avatar" id="selectedPreview"><span>?</span></div>
        <p id="selectedName" style="color:#34f5e1; font-weight:bold;">Selecciona una opción</p>
      </aside>
    </section>

    <section class="selection-section" style="margin-top:20px;">
      <div class="companion-grid" id="companionGrid"></div>
    </section>

    <section class="route-section" style="margin-top:40px;">
      <p class="eyebrow">Paso 2: Ruta Académica</p>
      <h2 style="color:#fff; margin-bottom:15px;">Mapa de Unidades</h2>
      <div class="unit-track course-route-map" id="unitTrack"></div>
    </section>
  </main>

  <!-- VISTA 3: PERFIL DEL USUARIO -->
  <main id="profileView" class="view app-content">
    <div class="profile-layout">
      <aside class="profile-sidebar">
        <div class="profile-avatar-large" id="profileAvatarDisplay">IA</div>
        <label class="ghost-button" style="text-align:center; cursor:pointer;">
          Cambiar Foto
          <input type="file" id="profileImageInput" accept="image/*" style="display:none;">
        </label>
        <h2 id="profileNameDisplay" style="margin-top:20px; color:#fff;">Usuario</h2>
        <p id="profileEmailDisplay" style="color:#34f5e1;">correo@uptc.edu.co</p>
        <p style="color:#aeb9d3; margin-top:10px;">Licenciatura en Informática<br>UPTC</p>
        <button class="start-button" id="btnBackFromProfile" style="margin-top:20px; width:100%;">Volver al Mapa</button>
      </aside>
      <section class="profile-content">
        <h2 style="color:#fff;">Mis Certificados</h2>
        <div class="cert-card" id="profileCertCard">
          <h3 style="color:#34f5e1;">Aún no tienes certificados</h3>
          <p style="color:#aeb9d3;">Completa las evaluaciones con 80% para obtener tus certificados.</p>
        </div>
      </section>
    </div>
  </main>

  <!-- VISTA 4: MÓDULO INTERACTIVO -->
  <main id="moduleView" class="view app-content space-mode">
    <div class="space-dashboard">
      <button class="space-back-button" id="btnBackToMap">← Volver al mapa galáctico</button>
      <article class="mission-status">
        <div class="mission-avatar" id="moduleCompanionArt">
          <!-- Aquí se inyecta el personaje elegido -->
        </div>
        <div>
          <span class="space-kicker" id="modKicker">Módulo X</span>
          <h1 id="modTitle">Título del Módulo</h1>
          <p id="modDesc">Descripción.</p>
        </div>
      </article>
    </div>
    
    <h2 style="color:#fff; text-align:center; margin: 30px 0 10px;">Mapa Conceptual del Módulo</h2>
    <p style="color:#aeb9d3; text-align:center; margin-bottom: 30px;">Haz clic en cada nodo para estudiar la teoría oficial del curso.</p>
    
    <div class="mindmap-container" id="mindmapContainer"></div>

    <article class="station-card wide-card" style="margin-top:40px; border-color:#f59e0b;">
      <h2 style="color:#f59e0b;">Evaluación Final del Módulo</h2>
      <p style="color:#c8d4ef;">Demuestra lo aprendido. Necesitas mínimo 80% de aciertos para aprobar y avanzar.</p>
      <div id="quizContainer" style="margin-top:20px;"></div>
    </article>
  </main>

  <!-- MODAL DE TEORÍA -->
  <div id="theoryModal" class="activity-modal">
    <div class="activity-modal-overlay" id="theoryOverlay"></div>
    <div class="activity-modal-content">
      <div class="activity-modal-header">
        <h2 id="theoryTitle">Título</h2>
        <button class="close-modal-btn" id="closeTheoryBtn">&times;</button>
      </div>
      <div class="activity-modal-body" id="theoryBody"></div>
    </div>
  </div>

  <!-- MODAL DEL CERTIFICADO -->
  <div id="certificateModal" class="activity-modal">
    <div class="activity-modal-overlay" id="certOverlay"></div>
    <div class="activity-modal-content" style="max-width: 900px;">
      <div class="activity-modal-header">
        <h2 style="color: #34f5e1;">¡Felicidades! Has aprobado</h2>
        <button class="close-modal-btn" id="closeCertBtn">&times;</button>
      </div>
      <div class="activity-modal-body" style="text-align: center;">
        <p style="margin-bottom: 15px; color:#fff;">Aquí tienes tu certificado oficial.</p>
        <iframe id="certPreviewFrame" style="width: 100%; height: 450px; border: 1px solid rgba(52, 245, 225, 0.3); border-radius: 8px; background: #fff;"></iframe>
        <div style="margin-top: 20px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
          <button id="downloadCertBtn" class="start-button">Descargar PDF</button>
        </div>
      </div>
    </div>
  </div>

  <canvas id="certificateCanvas" width="1200" height="850" style="display:none;"></canvas>
  <div class="toast" id="toast"></div>

  <script src="src/main.js"></script>
</body>
</html>"""

# ==========================================
# 2. CONTENIDO CSS
# ==========================================
css_content = r""":root {
  --bg: #071225; --surface: #101633; --primary: #157a8c; --primary-dark: #0f6074;
  --green: #4aa978; --amber: #f3b547; --coral: #eb7b68;
  --shadow: 0 18px 45px rgba(0, 0, 0, 0.4); --radius: 12px;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { min-height: 100vh; background: var(--bg); color: #f4f7ff; }
button { font: inherit; cursor: pointer; border: none; outline: none; }
input { width: 100%; padding: 12px; border-radius: var(--radius); border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.2); color: #fff; }

/* REGLA MAESTRA DE VISTAS (Como IA en la Mochila) */
.view { display: none !important; }
.view.is-active { display: block !important; }
[hidden] { display: none !important; }

/* LOGIN */
#loginView { min-height: 100vh; place-items: center; background: linear-gradient(135deg, #071225, #19163d); }
#loginView.is-active { display: grid !important; }
.login-box { background: rgba(255,255,255,0.05); padding: 40px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); backdrop-filter: blur(10px); width: 100%; max-width: 400px; }
.login-logo { width: 60px; height: 60px; margin: 0 auto 20px; display: grid; place-items: center; background: linear-gradient(135deg, var(--primary), var(--green)); border-radius: 16px; }
.login-title { text-align: center; color: #fff; font-size: 1.8rem; margin-bottom: 5px; }
.login-subtitle { text-align: center; color: #aeb9d3; margin-bottom: 25px; font-size: 0.9rem; }
.form-group { margin-bottom: 15px; }
.field-label { display: block; margin-bottom: 5px; color: #34f5e1; font-weight: bold; font-size: 0.9rem; }
.start-button { background: linear-gradient(135deg, var(--primary), var(--green)); color: #fff; padding: 14px; border-radius: var(--radius); font-weight: bold; transition: 0.2s; }
.start-button:hover { transform: scale(1.02); }
.ghost-button-text { background: none; color: #34f5e1; text-decoration: underline; }

/* HEADER & CONTENEDOR MÁXIMO */
.app-content { max-width: 1200px; margin: 0 auto; padding: 20px; }
.site-header { background: rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.1); padding: 15px 0; }
.header-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; display: flex; justify-content: space-between; align-items: center; }
.brand { display: flex; align-items: center; gap: 15px; text-decoration: none; color: #fff; }
.brand-mark { width: 45px; height: 45px; background: linear-gradient(135deg, var(--primary), var(--green)); border-radius: 12px; display: grid; place-items: center; fill: #fff; }
.brand-mark svg { width: 24px; height: 24px; }
.brand-copy strong { display: block; font-size: 1.1rem; }
.brand-copy small { color: #aeb9d3; font-size: 0.8rem; }
.header-actions { display: flex; gap: 10px; }
.ghost-button { background: rgba(255,255,255,0.1); color: #fff; padding: 10px 20px; border-radius: var(--radius); font-weight: bold; border: 1px solid rgba(255,255,255,0.2); transition: 0.3s; }
.ghost-button:hover { background: rgba(255,255,255,0.2); }

/* HOME MAPA Y AVATARES */
.welcome-layout { display: grid; grid-template-columns: 1fr 300px; gap: 20px; }
.welcome-panel, .companion-preview { background: rgba(31, 211, 207, 0.05); border: 1px solid rgba(31, 211, 207, 0.2); padding: 30px; border-radius: 20px; }
.welcome-panel h1 { font-size: 2.5rem; color: #34f5e1; margin-bottom: 10px; }
.eyebrow { color: #aeb9d3; text-transform: uppercase; font-size: 0.8rem; font-weight: bold; margin-bottom: 10px; display: block; }
.welcome-text { color: #c8d4ef; font-size: 1.1rem; line-height: 1.6;}
.preview-avatar { width: 120px; height: 120px; display: grid; place-items: center; border-radius: 50%; background: rgba(255,255,255,0.1); margin: 15px auto;}
.preview-avatar svg { width: 90px; height: 90px; }

/* TARJETAS DE PERSONAJES */
.companion-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 15px; }
.companion-card { background: rgba(255,255,255,0.05); border: 2px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 20px; text-align: center; transition: 0.3s; color: #fff; }
.companion-card:hover { transform: translateY(-5px); border-color: #34f5e1; background: rgba(52, 245, 225, 0.05); }
.companion-card.is-selected { border-color: #34f5e1; box-shadow: 0 10px 20px rgba(52, 245, 225, 0.2); background: rgba(52, 245, 225, 0.1); }
.companion-art { display: grid; width: 80px; height: 80px; place-items: center; border-radius: 50%; margin: 0 auto 15px; background: rgba(0,0,0,0.3); }
.companion-art svg { width: 60px; height: 60px; }

/* MAPA DE PLANETAS */
.unit-track { display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; background: radial-gradient(circle at center, rgba(6, 13, 31, 0.8), rgba(2, 5, 15, 0.95)); padding: 40px; border-radius: 20px; border: 1px solid rgba(116, 155, 255, 0.3); }
.course-unit-node { display: flex; flex-direction: column; align-items: center; gap: 10px; width: 120px; background: none; }
.course-orb { width: 80px; height: 80px; border-radius: 50%; display: grid; place-items: center; font-size: 1.5rem; font-weight: bold; color: #fff; background: radial-gradient(circle, rgba(145, 93, 255, 0.8), #2a104a); box-shadow: 0 0 20px rgba(140, 109, 255, 0.4); transition: 0.3s; }
.course-unit-node.is-open .course-orb { background: radial-gradient(circle, #34f5e1, #0f6074); box-shadow: 0 0 30px rgba(52, 245, 225, 0.6); }
.course-unit-node.is-locked .course-orb { background: #333; color: #666; box-shadow: inset 0 0 20px #000; }
.course-unit-node.is-open:hover .course-orb { transform: scale(1.1); }
.course-unit-label { background: rgba(0,0,0,0.6); padding: 5px 12px; border-radius: 20px; font-size: 0.85rem; color: #fff; border: 1px solid rgba(255,255,255,0.2); }

/* MODULO VIEW & MINDMAP */
.space-dashboard { display: flex; flex-direction: column; gap: 20px; margin-bottom: 20px; }
.space-back-button { align-self: flex-start; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 10px 20px; border-radius: var(--radius); font-weight: bold; transition: 0.3s; }
.space-back-button:hover { background: rgba(255,255,255,0.2); }
.mission-status { display: flex; gap: 20px; align-items: center; background: rgba(15, 25, 55, 0.8); padding: 30px; border-radius: 20px; border: 1px solid rgba(170, 205, 255, 0.2); }
.mission-avatar { width: 80px; height: 80px; border-radius: 50%; display: grid; place-items: center; background: rgba(255,255,255,0.1); }
.mission-avatar svg { width: 65px; height: 65px; animation: floatAvatar 3s ease-in-out infinite; filter: drop-shadow(0 5px 10px rgba(0,0,0,0.5));}
@keyframes floatAvatar { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }

.space-kicker { color: #34f5e1; font-weight: bold; text-transform: uppercase; font-size: 0.9rem; }
.mission-status h1 { color: #fff; font-size: 2rem; margin: 5px 0; }
.mission-status p { color: #c8d4ef; line-height: 1.5; }

.mindmap-container { display: flex; flex-wrap: wrap; gap: 15px; justify-content: center; padding: 20px; background: rgba(0,0,0,0.2); border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); }
.mindmap-node { background: rgba(31, 211, 207, 0.1); border: 2px solid #34f5e1; color: #fff; padding: 20px; border-radius: 16px; width: calc(50% - 15px); text-align: left; transition: 0.3s; cursor: pointer; box-shadow: 0 5px 15px rgba(0,0,0,0.3); }
.mindmap-node:hover { transform: translateY(-5px); background: rgba(31, 211, 207, 0.2); box-shadow: 0 10px 25px rgba(52, 245, 225, 0.3); }
.mindmap-node h3 { color: #34f5e1; margin-bottom: 8px; font-size: 1.2rem; }
.mindmap-node p { color: #c8d4ef; font-size: 0.9rem; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

/* QUIZ Y TARJETAS */
.station-card { background: rgba(15, 25, 55, 0.8); border: 1px solid rgba(170, 205, 255, 0.2); padding: 30px; border-radius: 20px; }
.quiz-question { background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; margin-bottom: 15px; border: 1px solid rgba(255,255,255,0.1); }
.quiz-question h4 { margin-bottom: 15px; color: #f59e0b; }
.quiz-option { display: block; padding: 12px; margin-bottom: 8px; background: rgba(0,0,0,0.3); border-radius: 8px; cursor: pointer; border: 1px solid transparent; transition: 0.2s; color: #fff;}
.quiz-option:hover { background: rgba(255,255,255,0.1); }
.quiz-option input { width: auto; margin-right: 10px; }

/* PERFIL */
.profile-layout { display: grid; grid-template-columns: 300px 1fr; gap: 20px; }
.profile-sidebar { background: rgba(15, 25, 55, 0.8); padding: 30px; border-radius: 20px; text-align: center; border: 1px solid rgba(255,255,255,0.1); }
.profile-avatar-large { width: 150px; height: 150px; border-radius: 50%; background: linear-gradient(135deg, var(--primary), var(--green)); margin: 0 auto 20px; display: grid; place-items: center; font-size: 3rem; font-weight: bold; color: #fff; overflow: hidden; border: 4px solid #34f5e1; }
.profile-avatar-large img { width: 100%; height: 100%; object-fit: cover; }
.profile-content { background: rgba(15, 25, 55, 0.8); padding: 30px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); }
.cert-card { background: rgba(31, 211, 207, 0.1); border: 1px dashed #34f5e1; padding: 20px; border-radius: 16px; margin-top: 20px; }

/* MODALES */
.activity-modal { display: none; position: fixed; inset: 0; z-index: 9999; align-items: center; justify-content: center; padding: 20px; }
.activity-modal.is-active { display: flex; }
.activity-modal-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(5px); }
.activity-modal-content { position: relative; z-index: 1; width: 100%; max-width: 700px; background: #101633; border: 1px solid #34f5e1; border-radius: 20px; box-shadow: 0 20px 50px rgba(0,0,0,0.6); overflow: hidden; }
.activity-modal-header { display: flex; justify-content: space-between; padding: 20px; background: rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.1); }
.activity-modal-header h2 { color: #34f5e1; font-size: 1.5rem; }
.close-modal-btn { background: none; color: #fff; font-size: 2rem; transition: 0.2s; }
.close-modal-btn:hover { color: #f59e0b; }
.activity-modal-body { padding: 30px; max-height: 70vh; overflow-y: auto; color: #c8d4ef; font-size: 1.1rem; line-height: 1.6; }
.activity-modal-body h3 { color: #fff; margin: 20px 0 10px; }
.activity-modal-body ul { padding-left: 20px; margin: 10px 0; }
.activity-modal-body li { margin-bottom: 8px; }

.toast { position: fixed; bottom: 20px; right: 20px; background: #34f5e1; color: #000; padding: 15px 25px; border-radius: 8px; font-weight: bold; opacity: 0; transition: 0.3s; pointer-events: none; z-index: 10000; }
.toast.is-visible { opacity: 1; }

@media (max-width: 768px) {
  .welcome-layout { grid-template-columns: 1fr; }
  .mindmap-node { width: 100%; }
  .profile-layout { grid-template-columns: 1fr; }
}
"""

# ==========================================
# 3. CONTENIDO JAVASCRIPT
# ==========================================
js_content = r"""// ==========================================
// 1. BASE DE DATOS TEÓRICA (MAPAS MENTALES)
// ==========================================
const courseData = {
  1: {
    title: "Fundamentos de la Psicología Positiva",
    desc: "Estudia las fortalezas humanas, emociones positivas y el bienestar. Martin Seligman es considerado el padre de esta corriente.",
    theoryNodes: [
      { id: "1.1", title: "¿Qué es la Psicología Positiva?", content: "<p>Es una corriente de la psicología científica que estudia las emociones positivas, las fortalezas humanas y las condiciones que favorecen el bienestar y la felicidad.</p><p>Según <strong>Martin Seligman (1998)</strong>, busca promover factores para prosperar, no solo tratar enfermedades.</p>" },
      { id: "1.2", title: "Mensaje Positivo y Comunicación", content: "<p><strong>Lenguaje positivo:</strong> Usar palabras que generan bienestar, motivación y confianza.</p><p><strong>Comunicación asertiva:</strong> Capacidad de expresar ideas y emociones de manera clara y empática (Carl Rogers).</p>" },
      { id: "1.3", title: "Marco Teórico (Autores)", content: "<ul><li><strong>Martin Seligman:</strong> Teoría PERMA.</li><li><strong>Mihaly Csikszentmihalyi:</strong> Teoría del Flow.</li><li><strong>Tal Ben-Shahar:</strong> Define la felicidad como experiencia general de placer y significado.</li><li><strong>Sonja Lyubomirsky:</strong> 40% actividades intencionales.</li></ul>" },
      { id: "1.4", title: "Métodos de Investigación", content: "<p>Cuantitativos (Encuestas), Cualitativos (Entrevistas), Experimentales y Observación.</p>" },
      { id: "1.5", title: "El ser humano integral", content: "<p>Dimensiones emocionales, cognitivas, sociales, físicas y espirituales (Abraham Maslow).</p>" }
    ],
    quiz: [
      { q: "La psicología positiva se caracteriza por:", options: ["Estudiar solo enfermedades", "Potenciar fortalezas y bienestar", "Rechazar emociones", "Analizar conductas negativas"], correct: 1 },
      { q: "Autor del modelo PERMA:", options: ["Daniel Goleman", "Mihaly Csikszentmihalyi", "Martin Seligman", "Tal Ben-Shahar"], correct: 2 },
      { q: "El modelo PERMA incluye:", options: ["Emociones, Compromiso, Relaciones, Sentido, Logro", "Dinero, Éxito, Poder, Fama", "Estrés, Rutina, Aislamiento", "Ninguna de las anteriores"], correct: 0 },
      { q: "Según Lyubomirsky, el 40% de la felicidad depende de:", options: ["Genética", "Circunstancias externas", "Actividades intencionales", "La suerte"], correct: 2 },
      { q: "El estado de Flow se relaciona con:", options: ["Desconexión total", "Falta de motivación", "Concentración profunda y disfrute", "Repetición mecánica"], correct: 2 }
    ]
  },
  2: {
    title: "La felicidad: ciencia y práctica",
    desc: "Estado de bienestar subjetivo influenciado por pensamientos, genética, neurociencias y relaciones.",
    theoryNodes: [
      { id: "2.1", title: "Enfoques de la felicidad", content: "<p>Psicología Positiva, Psicología Cognitiva (pensamientos racionales) y Neurociencias (dopamina, serotonina).</p>" },
      { id: "2.2", title: "El Gen de la felicidad", content: "<p>Biológicos (50%), Ambientales (10%) y Sociales (Redes de apoyo).</p>" },
      { id: "2.3", title: "Gráfico de la felicidad", content: "<p>Variables de satisfacción: salud física, autoestima, relaciones, propósito de vida (Ed Diener).</p>" },
      { id: "2.4", title: "Medición de la felicidad", content: "<p>Inventarios (Oxford), Escalas (Ed Diener) e Indicadores de bienestar nacional.</p>" }
    ],
    quiz: [
      { q: "Neurotransmisor asociado al placer y motivación:", options: ["Cortisol", "Adrenalina", "Dopamina", "Melatonina"], correct: 2 },
      { q: "Según neurociencias, el cerebro puede modificar sus conexiones mediante:", options: ["Cirugías", "Plasticidad neuronal", "Aislamiento", "Medicamentos"], correct: 1 },
      { q: "Porcentaje de felicidad que depende de genética:", options: ["10%", "100%", "40%", "50%"], correct: 3 },
      { q: "Habla del 'yo que experimenta' y el 'yo que recuerda':", options: ["Daniel Kahneman", "Carl Rogers", "Abraham Maslow", "Albert Ellis"], correct: 0 },
      { q: "País famoso por su índice de Felicidad Nacional Bruta:", options: ["Colombia", "Bután", "Noruega", "Japón"], correct: 1 }
    ]
  },
  3: {
    title: "Felicidad y Bienestar Subjetivo",
    desc: "Evaluación personal de la vida, motivación, hábitos positivos y el poder de la inteligencia emocional.",
    theoryNodes: [
      { id: "3.1", title: "Bienestar subjetivo", content: "<p>Ed Diener lo define como la evaluación que las personas hacen de sus vidas.</p>" },
      { id: "3.2", title: "Flow y experiencia óptima", content: "<p>Desarrollado por Csikszentmihalyi. Requiere equilibrio entre el reto y la habilidad.</p>" },
      { id: "3.3", title: "Motivación y propósito", content: "<p>Viktor Frankl: 'Quien tiene un porqué para vivir, puede soportar casi cualquier cómo'.</p>" },
      { id: "3.4", title: "Hábitos e Inteligencia Emocional", content: "<p>Capacidad de reconocer y manejar emociones (Daniel Goleman).</p>" }
    ],
    quiz: [
      { q: "El concepto de 'Flow' fue desarrollado por:", options: ["Daniel Goleman", "Mihaly Csikszentmihalyi", "Viktor Frankl", "Ed Diener"], correct: 1 },
      { q: "Motivación que nace de la satisfacción personal:", options: ["Extrínseca", "Laboral", "Intrínseca", "Económica"], correct: 2 },
      { q: "Autor de: 'Quien tiene un porqué para vivir...':", options: ["Martin Seligman", "Viktor Frankl", "Carl Rogers", "Tal Ben-Shahar"], correct: 1 },
      { q: "Popularizó la Inteligencia Emocional:", options: ["Daniel Goleman", "Aaron Beck", "Albert Ellis", "Ed Diener"], correct: 0 },
      { q: "NO es un componente de la inteligencia emocional:", options: ["Empatía", "Autorregulación", "Autoconocimiento", "Memoria fotográfica"], correct: 3 }
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

const companions = [
  { id: "robot", art: `<svg viewBox="0 0 96 96"><rect x="24" y="28" width="48" height="42" rx="12" fill="#dff2fb" stroke="#157a8c" stroke-width="4"/><circle cx="38" cy="46" r="5" fill="#157a8c"/><circle cx="58" cy="46" r="5" fill="#157a8c"/><path d="M39 59h18" stroke="#16313a" stroke-width="4" stroke-linecap="round"/></svg>`, name: "Asistente Tech" },
  { id: "explorador", art: `<svg viewBox="0 0 96 96"><circle cx="48" cy="42" r="23" fill="#ffe0b8" stroke="#c7783d" stroke-width="3"/><circle cx="39" cy="45" r="3.5" fill="#16313a"/><circle cx="57" cy="45" r="3.5" fill="#16313a"/><path d="M39 55c5 5 13 5 18 0" stroke="#16313a" stroke-width="3" stroke-linecap="round"/></svg>`, name: "Explorador" },
  { id: "creativo", art: `<svg viewBox="0 0 96 96"><circle cx="48" cy="43" r="22" fill="#ffd9bd" stroke="#c7783d" stroke-width="3"/><circle cx="39" cy="46" r="3.4" fill="#16313a"/><circle cx="57" cy="46" r="3.4" fill="#16313a"/><path d="M40 56c5 4 11 4 16 0" stroke="#16313a" stroke-width="3" stroke-linecap="round"/></svg>`, name: "Creativo" },
  { id: "mascota", art: `<svg viewBox="0 0 96 96"><circle cx="48" cy="49" r="28" fill="#e2f6eb" stroke="#4aa978" stroke-width="4"/><circle cx="38" cy="47" r="4" fill="#16313a"/><circle cx="58" cy="47" r="4" fill="#16313a"/><path d="M38 61c4 5 16 5 20 0" stroke="#16313a" stroke-width="3" stroke-linecap="round"/></svg>`, name: "Mascota" }
];

// ==========================================
// 2. ESTADO Y SUPABASE
// ==========================================
const SUPABASE_URL = "https://bxxudrezbaxrmwekeyoe.supabase.co";
const SUPABASE_KEY = "sb_publishable_SnBuzPXugGRag9uAP4NbpQ_HzPhP6BK";
const supabaseClient = window.supabase?.createClient(SUPABASE_URL, SUPABASE_KEY);

let currentUser = JSON.parse(localStorage.getItem("fgc_currentUser")) || null;
let highestUnlocked = parseInt(localStorage.getItem("fgc_highest_unlocked")) || 1;
let currentModuleId = 1;
let selectedCompanion = null;
let isLoginMode = true;

// ==========================================
// 3. VISTAS Y RENDERIZADO BÁSICO
// ==========================================
function switchView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('is-active'));
  document.getElementById(viewId).classList.add('is-active');
  window.scrollTo(0, 0);
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg; t.classList.add("is-visible");
  setTimeout(() => t.classList.remove("is-visible"), 3500);
}

function renderAvatars() {
  document.getElementById("companionGrid").innerHTML = companions.map(c => `
    <div class="companion-card" onclick="selectCompanion('${c.id}')" id="card-${c.id}">
      <div class="companion-art">${c.art}</div>
      <span class="companion-name">${c.name}</span>
    </div>
  `).join("");
}

window.selectCompanion = function(id) {
  selectedCompanion = companions.find(c => c.id === id);
  document.querySelectorAll('.companion-card').forEach(c => c.classList.remove('is-selected'));
  document.getElementById(`card-${id}`).classList.add('is-selected');
  document.getElementById("selectedPreview").innerHTML = selectedCompanion.art;
  document.getElementById("selectedName").textContent = selectedCompanion.name;
}

function renderMap() {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    const isUnlocked = i <= highestUnlocked;
    html += `
      <button class="course-unit-node ${isUnlocked ? 'is-open' : 'is-locked'}" onclick="openModule(${i})">
        <span class="course-orb">${i}</span>
        <span class="course-unit-label">Módulo ${i}</span>
      </button>
    `;
  }
  document.getElementById("unitTrack").innerHTML = html;
}

// ==========================================
// 4. MÓDULOS Y EVALUACIÓN
// ==========================================
window.openModule = function(id) {
  if (id > highestUnlocked) return showToast("Debes aprobar el módulo anterior primero.");
  if (!selectedCompanion) return showToast("Por favor, selecciona un acompañante virtual antes de iniciar.");
  
  currentModuleId = id;
  const modData = courseData[id];
  
  // Llenar info del módulo
  document.getElementById("moduleCompanionArt").innerHTML = selectedCompanion.art;
  document.getElementById("modKicker").textContent = `Módulo ${id}`;
  document.getElementById("modTitle").textContent = modData.title;
  document.getElementById("modDesc").textContent = modData.desc;
  
  // Mapa Mental
  document.getElementById("mindmapContainer").innerHTML = modData.theoryNodes.map(node => `
    <div class="mindmap-node" onclick="openTheory('${id}', '${node.id}')">
      <h3>${node.title}</h3>
      <p>Haz clic para leer la teoría oficial...</p>
    </div>
  `).join("");

  // Quiz
  let quizHtml = `<form id="quizForm" style="display:grid; gap:15px;">`;
  modData.quiz.forEach((q, idx) => {
    quizHtml += `
      <div class="quiz-question">
        <h4>${idx+1}. ${q.q}</h4>
        ${q.options.map((opt, optIdx) => `
          <label class="quiz-option"><input type="radio" name="q${idx}" value="${optIdx}" required> ${opt}</label>
        `).join("")}
      </div>`;
  });
  quizHtml += `<button type="button" class="start-button" onclick="submitQuiz()" style="width:100%; margin-top:10px;">Calificar Evaluación</button></form>`;
  document.getElementById("quizContainer").innerHTML = quizHtml;

  switchView("moduleView");
}

window.openTheory = function(modId, nodeId) {
  const node = courseData[modId].theoryNodes.find(n => n.id === nodeId);
  document.getElementById("theoryTitle").textContent = node.title;
  document.getElementById("theoryBody").innerHTML = node.content;
  document.getElementById("theoryModal").classList.add("is-active");
}
document.getElementById("closeTheoryBtn").onclick = () => document.getElementById("theoryModal").classList.remove("is-active");
document.getElementById("theoryOverlay").onclick = () => document.getElementById("theoryModal").classList.remove("is-active");

window.submitQuiz = function() {
  const form = document.getElementById("quizForm");
  const modData = courseData[currentModuleId];
  let correctas = 0;
  
  for(let i=0; i<modData.quiz.length; i++) {
    const selected = form.querySelector(`input[name="q${i}"]:checked`);
    if(!selected) return showToast("Por favor responde todas las preguntas.");
    if(parseInt(selected.value) === modData.quiz[i].correct) correctas++;
  }

  const porcentaje = (correctas / modData.quiz.length) * 100;
  if(porcentaje >= 80) {
    showToast(`¡Aprobado con ${porcentaje}%! Módulo ${currentModuleId} completado.`);
    saveCertificate(currentModuleId, modData.title);
    
    if(highestUnlocked === currentModuleId && highestUnlocked < 5) {
      highestUnlocked++;
      localStorage.setItem("fgc_highest_unlocked", highestUnlocked);
    }
    renderMap();
    switchView("homeView");
  } else {
    showToast(`Obtuviste ${porcentaje}%. Necesitas 80% para aprobar. Revisa la teoría e intenta de nuevo.`);
  }
}

// ==========================================
// 5. PERFIL Y CERTIFICADOS
// ==========================================
let certificates = JSON.parse(localStorage.getItem("fgc_certificates")) || [];

function saveCertificate(modId, modTitle) {
  if(!certificates.find(c => c.modId === modId)) {
    certificates.push({ modId, title: modTitle, date: new Date().toLocaleDateString('es-CO') });
    localStorage.setItem("fgc_certificates", JSON.stringify(certificates));
  }
}

function renderProfile() {
  document.getElementById("profileNameDisplay").textContent = currentUser?.name || "Estudiante";
  document.getElementById("profileEmailDisplay").textContent = currentUser?.email || "correo@uptc.edu.co";
  
  const pic = localStorage.getItem("fgc_profile_pic");
  document.getElementById("profileAvatarDisplay").innerHTML = pic ? `<img src="${pic}">` : "👤";

  const certContainer = document.getElementById("profileCertCard");
  if(certificates.length === 0) {
    certContainer.innerHTML = `<h3 style="color:#34f5e1;">Aún no tienes certificados</h3><p style="color:#aeb9d3;">Completa las evaluaciones con 80% para obtenerlos.</p>`;
  } else {
    certContainer.innerHTML = certificates.map(c => `
      <div style="background:rgba(0,0,0,0.3); padding:15px; border-radius:10px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
        <div><strong style="color:#fff;">Módulo ${c.modId}</strong><br><small style="color:#aeb9d3;">${c.title} - Aprobado: ${c.date}</small></div>
        <button class="ghost-button" onclick="openCertificate('${c.title}')">Ver Diploma</button>
      </div>
    `).join("");
  }
}

document.getElementById("profileImageInput").onchange = (e) => {
  const file = e.target.files[0];
  if(file) {
    const reader = new FileReader();
    reader.onload = () => { localStorage.setItem("fgc_profile_pic", reader.result); renderProfile(); };
    reader.readAsDataURL(file);
  }
}

window.openCertificate = function(moduleName) {
  const canvas = document.getElementById("certificateCanvas");
  const ctx = canvas.getContext("2d");
  const template = new Image();
  template.src = "Recursos/certificado_base.png"; 
  template.onload = () => {
    ctx.drawImage(template, 0, 0, canvas.width, canvas.height);
    ctx.font = 'bold 50px "Inter", sans-serif'; ctx.fillStyle = '#0f6074'; ctx.textAlign = 'center';
    ctx.fillText((currentUser?.name || "Estudiante").toUpperCase(), canvas.width / 2, 400); 
    ctx.font = 'bold 30px "Inter", sans-serif'; ctx.fillStyle = '#157a8c';
    ctx.fillText(`Por aprobar: ${moduleName}`, canvas.width / 2, 480);
    const fecha = new Date().toLocaleDateString('es-CO');
    ctx.font = 'italic 25px "Inter", sans-serif'; ctx.fillStyle = '#5f7480';
    ctx.fillText(`Duitama, Colombia - ${fecha}`, canvas.width / 2, 550);

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("landscape", "px", [1200, 850]);
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 1200, 850);
    
    document.getElementById("certPreviewFrame").src = URL.createObjectURL(pdf.output("blob"));
    document.getElementById("certificateModal").classList.add("is-active");
    document.getElementById("downloadCertBtn").onclick = () => pdf.save(`Cert_${moduleName.replace(/\s+/g, '')}.pdf`);
  };
}
document.getElementById("closeCertBtn").onclick = () => document.getElementById("certificateModal").classList.remove("is-active");
document.getElementById("certOverlay").onclick = () => document.getElementById("certificateModal").classList.remove("is-active");

// ==========================================
// 6. LOGIN Y FLUJO DE ENTRADA
// ==========================================
document.getElementById("toggleAuthBtn").onclick = () => {
  isLoginMode = !isLoginMode;
  document.getElementById("loginTitle").textContent = isLoginMode ? "Iniciar sesión" : "Crear cuenta";
  document.getElementById("submitBtn").textContent = isLoginMode ? "Ingresar" : "Registrarse";
  document.getElementById("toggleAuthBtn").textContent = isLoginMode ? "¿No tienes cuenta? Regístrate aquí" : "¿Ya tienes cuenta? Inicia sesión";
  document.getElementById("nameGroup").style.display = isLoginMode ? "none" : "block";
};

document.getElementById("loginForm").onsubmit = async (e) => {
  e.preventDefault();
  const btn = document.getElementById("submitBtn");
  btn.disabled = true; btn.textContent = "Cargando...";
  const email = document.getElementById("emailInput").value.trim();
  const password = document.getElementById("passwordInput").value;
  const name = document.getElementById("nameInput").value.trim();

  try {
    if (isLoginMode) {
      const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
      if (error) throw error;
      currentUser = { id: data.user.id, email: data.user.email, name: data.user.user_metadata?.full_name || email.split("@")[0] };
    } else {
      const { data, error } = await supabaseClient.auth.signUp({ email, password, options: { data: { full_name: name } } });
      if (error) throw error;
      currentUser = { id: data.user.id, email: data.user.email, name: name };
    }
    localStorage.setItem("fgc_currentUser", JSON.stringify(currentUser));
    document.getElementById("appHeader").hidden = false;
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
  await supabaseClient.auth.signOut();
  currentUser = null; localStorage.removeItem("fgc_currentUser");
  document.getElementById("appHeader").hidden = true;
  switchView("loginView");
};

// ==========================================
// 7. INICIALIZACIÓN DE NAVEGACIÓN
// ==========================================
document.getElementById("brandHomeLink").onclick = () => { renderMap(); switchView("homeView"); };
document.getElementById("btnBackToMap").onclick = () => { renderMap(); switchView("homeView"); };
document.getElementById("btnGoProfile").onclick = () => { renderProfile(); switchView("profileView"); };
document.getElementById("btnBackFromProfile").onclick = () => { renderMap(); switchView("homeView"); };

document.addEventListener("DOMContentLoaded", () => {
  if (currentUser) {
    document.getElementById("appHeader").hidden = false;
    renderAvatars(); renderMap();
    switchView("homeView");
    showToast(`Hola de nuevo, ${currentUser.name}`);
  }
});
"""

# ==========================================
# 4. CREACIÓN DE ARCHIVOS
# ==========================================
try:
    os.makedirs(ruta_base, exist_ok=True)
    os.makedirs(os.path.join(ruta_base, 'src'), exist_ok=True)
    os.makedirs(os.path.join(ruta_base, 'Recursos'), exist_ok=True)

    with open(os.path.join(ruta_base, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(html_content)
    print("✅ Archivo 'index.html' restaurado con estructura de Vistas e ID para Avatares.")

    with open(os.path.join(ruta_base, 'src', 'styles.css'), 'w', encoding='utf-8') as f:
        f.write(css_content)
    print("✅ Archivo 'src/styles.css' arreglado. (Regla maestra de Vistas aplicada).")

    with open(os.path.join(ruta_base, 'src', 'main.js'), 'w', encoding='utf-8') as f:
        f.write(js_content)
    print("✅ Archivo 'src/main.js' restaurado. Teoría, Quices, Perfiles y Avatares unidos.")
    
    print("\n🎉 ¡Listo! Ejecución completada. Abre index.html en tu navegador.")
except Exception as e:
    print(f"❌ Error al escribir: {e}")