import { createRequire } from "node:module";
import path from "node:path";
import fs from "node:fs/promises";

const runtimePackage = "C:/Users/profe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/package.json";
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

try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, acceptDownloads: true });
  await context.addInitScript(() => {
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

  assert(await page.locator(".course-unit-node").count() === 2, "El mapa presenta exactamente dos unidades.");
  assert(await page.locator(".companion-card").count() === 4, "La selección presenta cuatro acompañantes nuevos.");
  assert(await page.locator(".course-unit-node.is-locked").count() === 1, "La Unidad 2 inicia bloqueada.");
  assert(await page.evaluate(() => document.documentElement.scrollWidth === document.documentElement.clientWidth), "La pantalla principal no tiene desbordamiento horizontal.");

  const nexo = page.locator(".companion-card").filter({ hasText: "Nexo" });
  assert(await nexo.count() === 1, "Nexo aparece como acompañante seleccionable.");
  await nexo.click();
  assert(await page.locator(".companion-card.is-selected").count() === 1, "La selección del acompañante queda marcada.");
  assert(await page.locator("#btnContinueJourney").isEnabled(), "El botón del recorrido se habilita al elegir acompañante.");
  await page.screenshot({ path: path.join(outputDir, "01-inicio.png"), fullPage: true });

  const unitOne = page.locator(".course-unit-node").filter({ hasText: "Unidad 1" });
  await unitOne.click();
  await page.waitForSelector("#moduleView.is-active");
  assert((await page.locator("#modTitle").innerText()).includes("Gestión del Conocimiento"), "La Unidad 1 muestra el contenido de Gestión del Conocimiento.");
  assert(await page.locator(".mindmap-node").count() === 5, "La Unidad 1 contiene cinco temas teóricos.");
  assert(await page.locator(".media-card").count() === 3, "La Unidad 1 contiene tres recursos visuales.");
  assert(await page.locator(".sorter-zone").count() === 6, "La actividad principal usa clasificación por zonas, no parejas obvias.");
  assert(await page.locator(".decision-card").count() === 3, "El repaso usa decisiones con pistas interactivas.");

  const theoryCards = page.locator(".mindmap-node");
  await theoryCards.first().click();
  await page.waitForSelector("#theoryModal.is-active");
  assert((await page.locator("#theoryBody").innerText()).length > 300, "La tarjeta teórica abre contenido completo en una vista.");
  await page.locator("#closeTheoryBtn").click();
  await page.waitForSelector("#theoryModal", { state: "hidden" });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: path.join(outputDir, "02-unidad-1.png"), fullPage: false });

  await page.evaluate(() => {
    const suffix = "qa-user";
    localStorage.setItem(`fgc_selected_companion_${suffix}`, "nexo");
    localStorage.setItem(`fgc_highest_unlocked_${suffix}`, "2");
    localStorage.setItem(`fgc_viewed_theory_${suffix}`, JSON.stringify({
      1: ["1.1", "1.2", "1.3", "1.4", "1.5"],
      2: ["2.1", "2.2", "2.3", "2.4", "2.5"]
    }));
    localStorage.setItem(`fgc_viewed_resources_${suffix}`, JSON.stringify({
      1: ["0", "1", "2"],
      2: ["0", "1", "2", "3", "4"]
    }));
    localStorage.setItem(`fgc_activity_progress_${suffix}`, JSON.stringify({
      1: { memory: true, review: true },
      2: { memory: true, review: true }
    }));
    localStorage.setItem(`fgc_quiz_results_${suffix}`, JSON.stringify({
      1: { score: 80, correctas: 8, total: 10, answers: [], passed: true, date: "25/6/2026" }
    }));
  });

  await page.reload({ waitUntil: "domcontentloaded" });
  await page.waitForSelector("#homeView.is-active");
  assert(await page.locator(".course-unit-node.is-locked").count() === 0, "La Unidad 2 se desbloquea al aprobar la única evaluación.");

  const unitTwo = page.locator(".course-unit-node").filter({ hasText: "Unidad 2" });
  await unitTwo.click();
  await page.waitForSelector("#moduleView.is-active");
  assert((await page.locator("#modTitle").innerText()).includes("Universidad Horizonte"), "La Unidad 2 abre el caso Universidad Horizonte.");
  assert(await page.locator(".mindmap-node").count() === 5, "El caso presenta cinco apartados de preparación.");
  assert(await page.locator(".media-card").count() === 5, "El caso incluye el laboratorio AR y cuatro apoyos visuales; la matriz queda al final.");

  const matrixLaunch = page.getByRole("button", { name: "Iniciar evaluación final" });
  await matrixLaunch.click();
  await page.waitForSelector("#capitalMatrixForm");
  assert(await page.locator(".capital-rating-row").count() === 30, "La matriz presenta 30 aspectos distribuidos en tres capitales.");
  const valueFourInputs = page.locator('.capital-rating-scale input[value="4"]');
  assert(await valueFourInputs.count() === 30, "Cada aspecto permite una valoración de 1 a 5.");
  for (const input of await valueFourInputs.all()) await input.check();
  const reflectionFields = page.locator('.capital-reflection-grid textarea');
  assert(await reflectionFields.count() === 7, "La actividad incluye las siete preguntas de reflexión crítica.");
  for (const field of await reflectionFields.all()) {
    await field.fill("Esta reflexión conecta mi experiencia personal con la creación y transferencia del conocimiento.");
  }
  await page.locator("#capitalBalanceText").fill(
    "Mi capital personal se ha construido mediante el aprendizaje continuo, la experiencia y las relaciones de confianza. " +
    "Reconozco que mis habilidades generan valor cuando puedo compartirlas, documentarlas y aplicarlas con otras personas. " +
    "Durante los próximos dos años fortaleceré mi formación, participaré en redes académicas y transformaré mis experiencias en recursos útiles. " +
    "También cuidaré mis relaciones y buscaré oportunidades para enseñar, colaborar y aprender de manera permanente."
  );
  await page.getByRole("button", { name: "Finalizar actividad" }).click();
  await page.waitForSelector("#capitalMatrixForm");
  assert((await page.locator("#capitalGrandTotal").innerText()) === "120 / 150", "La matriz calcula automáticamente el puntaje total.");
  assert((await page.locator("#capitalLevelName").innerText()).toLowerCase().includes("muy alto"), "La matriz interpreta automáticamente el nivel obtenido.");
  const downloadPromise = page.waitForEvent("download");
  await page.locator(".capital-matrix-actions").getByRole("button", { name: "Descargar balance PDF" }).click();
  const balanceDownload = await downloadPromise;
  assert(balanceDownload.suggestedFilename().endsWith(".pdf"), "La actividad genera el Balance de Capital Personal en PDF.");
  await page.screenshot({ path: path.join(outputDir, "03-matriz-capital.png"), fullPage: false });
  await page.setViewportSize({ width: 390, height: 844 });
  assert(await page.evaluate(() => {
    const modal = document.querySelector(".activity-modal-content");
    const form = document.querySelector("#capitalMatrixForm");
    return modal.scrollWidth <= modal.clientWidth && form.scrollWidth <= form.clientWidth;
  }), "La matriz no presenta desbordamiento horizontal en celular.");
  await page.screenshot({ path: path.join(outputDir, "03b-matriz-capital-movil.png"), fullPage: false });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.locator("#closeTheoryBtn").click();
  await page.waitForSelector("#theoryModal", { state: "hidden" });
  assert((await page.locator("#quizContainer").innerText()).includes("Capital Personal Estratégico"), "Completar la matriz desbloquea la insignia final de la Unidad 2.");

  const arResource = page.locator(".media-card").filter({ hasText: "Laboratorio de realidad aumentada" });
  await arResource.click();
  await page.waitForSelector("#arView.is-active");
  assert(await page.locator(".ar-target-button").count() === 4, "El laboratorio AR presenta cuatro capas organizacionales.");
  assert(await page.locator("#arQrCode canvas, #arQrCode img").count() >= 1, "El laboratorio genera un código QR.");
  const intellectualTarget = page.locator(".ar-target-button").filter({ hasText: "Capital intelectual" });
  await intellectualTarget.click();
  assert(await page.locator("#arFloatingCard").isHidden(), "La información AR no aparece antes del escaneo.");
  await page.locator("#btnSimulateARScan").click();
  assert((await page.locator("#arFloatingLabel").innerText()) === "Capital intelectual", "El escaneo revela la capa AR seleccionada.");
  assert((await page.locator("#arInsightPanel").innerText()).includes("Datos importantes"), "La capa AR muestra información ampliada e interactiva.");
  await page.screenshot({ path: path.join(outputDir, "03-realidad-aumentada.png"), fullPage: false });

  await page.locator("#btnBackFromAR").click();
  await page.waitForSelector("#moduleView.is-active");
  await page.locator("#btnGoProfile").click();
  await page.waitForSelector("#profileView.is-active");
  assert(await page.locator(".badge-card.is-unlocked").count() >= 2, "El perfil muestra insignias digitales desbloqueadas.");
  assert((await page.locator("#profileCertCard").innerText()).includes("Capital Personal Estratégico"), "El perfil incluye la insignia de la matriz final.");
  await page.screenshot({ path: path.join(outputDir, "04-insignias.png"), fullPage: false });

  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 }, acceptDownloads: true });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto("http://127.0.0.1:8135/?experience=capitales", { waitUntil: "domcontentloaded" });
  await mobilePage.waitForSelector("#arView.is-active");
  assert(await mobilePage.evaluate(() => document.documentElement.scrollWidth === document.documentElement.clientWidth), "La experiencia AR no se desborda en celular.");
  assert(await mobilePage.locator(".ar-target-button").count() === 4, "La vista móvil conserva las cuatro capas AR.");
  assert(await mobilePage.locator("#arFloatingCard").isHidden(), "La vista móvil inicia sin mostrar contenido permanente de RA.");
  await mobilePage.locator("#btnSimulateARScan").click();
  assert(await mobilePage.locator("#arInsightPanel").isVisible(), "La vista móvil revela la información después del escaneo guiado.");
  await mobilePage.screenshot({ path: path.join(outputDir, "05-ar-movil.png"), fullPage: true });
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
