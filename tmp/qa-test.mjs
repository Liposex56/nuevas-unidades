import { createRequire } from "node:module";
import path from "node:path";
import fs from "node:fs/promises";

const runtimePackage = "C:/Users/profe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/.pnpm/playwright@1.61.0/node_modules/playwright/package.json";
const require = createRequire(runtimePackage);
const { chromium } = require("playwright");

const root = "C:/Users/profe/OneDrive/Desktop/Gestion del Conocimiento - Caso Interactivo";
const outputDir = path.join(root, "tmp", "qa-screenshots");
await fs.mkdir(outputDir, { recursive: true });

const assertions = [];
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
  assertions.push(message);
};

const browser = await chromium.launch({
  headless: true,
  executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
});

async function seedProgress(page, progress) {
  await page.evaluate((payload) => {
    const suffix = "qa-user";
    localStorage.setItem(`fgc_selected_companion_${suffix}`, "nexo");
    localStorage.setItem(`fgc_highest_unlocked_${suffix}`, String(payload.highestUnlocked || 1));
    localStorage.setItem(`fgc_viewed_theory_${suffix}`, JSON.stringify(payload.viewedTheory || {}));
    localStorage.setItem(`fgc_viewed_resources_${suffix}`, JSON.stringify(payload.viewedResources || {}));
    localStorage.setItem(`fgc_activity_progress_${suffix}`, JSON.stringify(payload.activityProgress || {}));
    localStorage.setItem(`fgc_quiz_results_${suffix}`, JSON.stringify(payload.quizResults || {}));
    localStorage.setItem(`fgc_certificates_${suffix}`, JSON.stringify(payload.certificates || []));
    localStorage.setItem(`fgc_final_evaluation_${suffix}`, JSON.stringify(payload.finalEvaluation || null));
  }, progress);
}

try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, acceptDownloads: true });
  await context.addInitScript(() => {
    if (!sessionStorage.getItem("qa-storage-initialized")) {
      localStorage.clear();
      sessionStorage.setItem("qa-storage-initialized", "1");
    }
    localStorage.setItem("fgc_currentUser", JSON.stringify({
      id: "qa-user",
      email: "qa@example.edu.co",
      name: "Estudiante de prueba"
    }));
  });

  const page = await context.newPage();
  const pageErrors = [];
  const missingResources = [];
  page.on("pageerror", error => pageErrors.push(String(error)));
  page.on("response", response => {
    if (response.status() === 404) missingResources.push(response.url());
  });

  await page.goto("http://127.0.0.1:8135/", { waitUntil: "domcontentloaded" });
  await page.waitForSelector("#homeView.is-active");

  assert(await page.locator(".course-unit-node").count() === 3, "El mapa muestra Unidad 1, Unidad 2 y Evaluacion final.");
  assert(await page.locator(".final-evaluation-node").isVisible(), "La matriz final aparece desde el inicio.");
  assert((await page.locator(".final-evaluation-node").innerText()).includes("Bloqueada"), "La matriz final inicia bloqueada.");
  assert(await page.locator(".course-unit-node.is-locked").count() === 2, "Unidad 2 y evaluacion final inician bloqueadas.");
  assert(await page.locator(".companion-card").count() === 4, "La seleccion presenta cuatro acompanantes.");
  assert(await page.evaluate(() => document.documentElement.scrollWidth === document.documentElement.clientWidth), "La pantalla principal no tiene desbordamiento horizontal.");

  const nexo = page.locator(".companion-card").filter({ hasText: "Nexo" });
  await nexo.click();
  assert(await page.locator(".companion-card.is-selected").count() === 1, "La seleccion del acompanante queda marcada.");
  assert(await page.locator("#btnContinueJourney").isEnabled(), "El boton del recorrido se habilita al elegir acompanante.");
  await page.screenshot({ path: path.join(outputDir, "01-inicio-mapa-final-bloqueada.png"), fullPage: true });

  await page.locator(".course-unit-node").filter({ hasText: "Unidad 1" }).click();
  await page.waitForSelector("#moduleView.is-active");
  assert((await page.locator("#modTitle").innerText()).includes("Gestión del Conocimiento"), "La Unidad 1 muestra Gestion del Conocimiento.");
  assert(await page.locator(".mindmap-node").count() === 5, "La Unidad 1 contiene cinco temas teoricos.");
  assert(await page.locator(".sorter-zone").count() === 6, "La Unidad 1 conserva la clasificacion compleja por zonas.");
  assert(await page.locator(".decision-card").count() >= 4, "La Unidad 1 conserva decisiones con pistas y mayor dificultad.");
  assert(await page.locator("#btnOpenModuleChat").isVisible(), "La Unidad 1 ofrece boton para abrir el chat independiente.");
  await page.locator("#btnOpenModuleChat").click();
  await page.waitForSelector("#chatView.is-active");
  assert(await page.locator("#assistantChatLog .assistant-message").count() >= 1, "El asistente inicia como vista de chat con historial.");
  await page.locator(".chat-page-actions button").first().click();
  assert(await page.locator("#assistantChatLog .assistant-message").count() >= 3, "El chat independiente registra pregunta sugerida y respuesta contextual.");
  await page.screenshot({ path: path.join(outputDir, "02-chat-independiente.png"), fullPage: false });
  await page.locator("#btnBackFromChat").click();
  await page.waitForSelector("#moduleView.is-active");

  await seedProgress(page, {
    highestUnlocked: 2,
    viewedTheory: {
      1: ["1.1", "1.2", "1.3", "1.4", "1.5"],
      2: ["2.1", "2.2", "2.3", "2.4", "2.5"]
    },
    viewedResources: {
      1: ["0", "1", "2"],
      2: ["0", "1", "2", "3", "4"]
    },
    activityProgress: {
      1: { memory: true, review: true },
      2: {
        memory: true,
        review: true,
        ar: true,
        investigationEvidence: ["docentes", "repositorio", "plataforma", "aliados", "investigacion", "estudiantes"],
        reviewAnswers: {
          routeOrder: ["riesgo", "entrevistar", "documentar", "clasificar", "transferir", "implementar", "evaluar"],
          zoneAssignments: {
            mentoria: "personas",
            comunidad: "personas",
            protocolo: "gobernanza",
            repositorio: "conocimiento",
            analitica: "tecnologia",
            aliados: "procesos",
            ia: "tecnologia"
          }
        }
      }
    },
    quizResults: {
      1: { score: 80, correctas: 8, total: 10, answers: [], passed: true, date: "25/6/2026" }
    }
  });

  await page.reload({ waitUntil: "domcontentloaded" });
  await page.waitForSelector("#homeView.is-active");
  assert(await page.locator(".course-unit-node").filter({ hasText: "Unidad 2" }).evaluate(node => !node.classList.contains("is-locked")), "La Unidad 2 se desbloquea al aprobar Unidad 1.");
  assert(await page.locator(".final-evaluation-node").evaluate(node => node.classList.contains("is-locked")), "La matriz final sigue bloqueada sin aprobar el caso de Unidad 2.");

  await page.locator(".course-unit-node").filter({ hasText: "Unidad 2" }).click();
  await page.waitForSelector("#moduleView.is-active");
  assert((await page.locator("#modTitle").innerText()).includes("Universidad Horizonte"), "La Unidad 2 abre el caso Universidad Horizonte.");
  assert(await page.locator(".media-card").count() === 5, "La Unidad 2 incluye laboratorio AR y cuatro apoyos visuales.");
  assert(await page.locator(".media-thumb img").count() === 5, "Las tarjetas de recursos muestran miniaturas visuales reales.");
  assert(await page.locator(".evidence-card").count() === 6, "La Unidad 2 usa investigacion de evidencias.");
  assert(await page.locator(".route-step").count() === 7, "La Unidad 2 usa ruta de intervencion ordenable.");
  assert(await page.locator(".ecosystem-component").count() === 7, "La Unidad 2 usa constructor de ecosistema.");
  assert(await page.locator(".decision-card").count() === 0, "La Unidad 2 ya no repite el laboratorio de decisiones de la Unidad 1.");

  await page.getByRole("button", { name: "Resolver caso" }).click();
  await page.waitForSelector("#quizModal.is-active");
  for (const correctIndex of [0, 1, 0, 1, 2]) {
    await page.locator(".case-options button").nth(correctIndex).click();
    await page.locator("#caseDecisionFeedback .start-button").click();
  }
  await page.waitForSelector(".final-result.is-success");
  assert((await page.locator("#quizModalBody").innerText()).includes("Estrategia aprobada"), "El caso integrador aprueba la Unidad 2.");
  await page.locator("#closeQuizBtn").click();
  await page.waitForSelector("#quizModal", { state: "hidden" });
  await page.locator("#btnBackToMap").click();
  await page.waitForSelector("#homeView.is-active");
  assert(await page.locator(".final-evaluation-node").evaluate(node => !node.classList.contains("is-locked")), "La evaluacion final se desbloquea solo despues de completar las dos unidades.");
  assert((await page.locator("#homeProgressValue").innerText()) === "80%", "El progreso queda en 80% antes de completar la matriz final.");

  await page.locator(".final-evaluation-node").click();
  await page.waitForSelector("#capitalMatrixForm");
  assert(await page.locator(".capital-rating-row").count() === 30, "La matriz final presenta 30 aspectos.");
  for (const input of await page.locator('.capital-rating-scale input[value="4"]').all()) await input.check();
  for (const field of await page.locator(".capital-reflection-grid textarea").all()) {
    await field.fill("Esta reflexion conecta mi experiencia personal con la creacion, transferencia y aplicacion del conocimiento.");
  }
  await page.locator("#capitalBalanceText").fill(
    "Mi capital personal se ha construido mediante aprendizaje continuo, experiencia y relaciones de confianza. " +
    "Reconozco que mis habilidades generan valor cuando puedo compartirlas, documentarlas y aplicarlas con otras personas. " +
    "Durante los proximos dos anos fortalecere mi formacion, participare en redes academicas y transformare mis experiencias en recursos utiles. " +
    "Tambien cuidare mis relaciones y buscare oportunidades para ensenar, colaborar y aprender de manera permanente."
  );
  await page.getByRole("button", { name: "Finalizar actividad" }).click();
  await page.waitForSelector("#capitalMatrixForm");
  assert((await page.locator("#capitalGrandTotal").innerText()) === "120 / 150", "La matriz calcula el puntaje total.");
  assert((await page.locator("#capitalLevelName").innerText()).toLowerCase().includes("muy alto"), "La matriz interpreta el nivel obtenido.");
  await page.locator("#closeTheoryBtn").click();
  await page.waitForSelector("#theoryModal", { state: "hidden" });
  assert((await page.locator("#homeProgressValue").innerText()) === "100%", "El progreso llega a 100% solo despues de la matriz final.");
  await page.screenshot({ path: path.join(outputDir, "03-matriz-final.png"), fullPage: false });

  await page.locator(".course-unit-node").filter({ hasText: "Unidad 2" }).click();
  await page.waitForSelector("#moduleView.is-active");
  await page.locator(".media-card").filter({ hasText: "Laboratorio de realidad aumentada" }).click();
  await page.waitForSelector("#arView.is-active");
  assert(await page.locator(".ar-target-button").count() === 4, "El laboratorio AR presenta cuatro marcadores genericos.");
  assert(!(await page.locator("#arTargetList").innerText()).includes("Capital humano"), "Antes del escaneo no se revela ningun capital en la lista.");
  assert(await page.locator("#arFloatingCard").isHidden(), "La informacion AR no aparece antes del escaneo.");
  assert(await page.locator("#arQrCode img").isVisible(), "AR usa un QR real escaneable.");
  await page.locator(".ar-target-button").nth(1).click();
  await page.locator("#btnSimulateARScan").click();
  await page.waitForSelector("#arTheoryView.is-active");
  assert((await page.locator("#arTheoryTitle").innerText()) === "Capital intelectual", "El escaneo abre una vista independiente con la capa seleccionada.");
  const arText = await page.locator("#arTheoryView").innerText();
  assert(arText.includes("Características principales"), "La capa AR muestra caracteristicas.");
  assert(arText.includes("Ejemplo aplicado"), "La capa AR muestra ejemplo aplicado.");
  assert(arText.includes("Riesgos relacionados"), "La capa AR muestra riesgos.");
  await page.screenshot({ path: path.join(outputDir, "04-realidad-aumentada-vista-teoria.png"), fullPage: false });

  await page.locator("#btnARTheoryContinue").click();
  await page.waitForSelector("#moduleView.is-active");
  await page.locator("#btnGoProfile").click();
  await page.waitForSelector("#profileView.is-active");
  assert(await page.locator(".badge-card.is-unlocked").count() >= 4, "El perfil muestra las cuatro insignias desbloqueadas.");
  assert(await page.locator(".badge-card.is-unlocked .badge-medal img").count() >= 4, "Las insignias desbloqueadas se presentan como imagenes reales.");
  assert((await page.locator("#profileCertCard").innerText()).includes("Certificado final disponible"), "El certificado general solo aparece al completar las dos unidades y la matriz.");
  await page.screenshot({ path: path.join(outputDir, "05-perfil-insignias.png"), fullPage: false });

  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 }, acceptDownloads: true });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto("http://127.0.0.1:8135/?experience=capitales", { waitUntil: "domcontentloaded" });
  await mobilePage.waitForSelector("#arView.is-active");
  assert(await mobilePage.evaluate(() => document.documentElement.scrollWidth === document.documentElement.clientWidth), "La experiencia AR no se desborda en celular.");
  assert(await mobilePage.locator("#arFloatingCard").isHidden(), "La vista movil inicia sin contenido AR revelado.");
  await mobilePage.locator("#btnSimulateARScan").click();
  await mobilePage.waitForSelector("#arTheoryView.is-active");
  assert((await mobilePage.locator("#arTheoryTitle").innerText()).length > 0, "La vista movil abre informacion AR en pantalla independiente.");
  await mobilePage.screenshot({ path: path.join(outputDir, "06-ar-movil.png"), fullPage: true });
  await mobileContext.close();

  const relevantMissingResources = missingResources.filter(url => !url.endsWith("/favicon.ico"));
  assert(pageErrors.length === 0, `No se detectaron errores JavaScript: ${pageErrors.join(" | ")}`);
  assert(relevantMissingResources.length === 0, `No faltan recursos visuales: ${relevantMissingResources.join(" | ")}`);

  console.log(JSON.stringify({
    ok: true,
    assertions: assertions.length,
    screenshots: outputDir,
    pageErrors,
    missingResources
  }, null, 2));
} finally {
  await browser.close();
}
