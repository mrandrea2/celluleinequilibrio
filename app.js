"use strict";

const byId = (id) => document.getElementById(id);

function tabs(root, items, render, label) {
  const navigation = document.createElement("div");
  navigation.className = "tabs";
  navigation.setAttribute("role", "group");
  navigation.setAttribute("aria-label", label);
  const panel = document.createElement("div");
  panel.className = "panel";
  root.append(navigation, panel);
  const buttons = items.map((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item;
    button.addEventListener("click", () => select(index));
    navigation.append(button);
    return button;
  });
  function select(index) {
    buttons.forEach((button, i) => button.setAttribute("aria-pressed", i === index));
    render(panel, index);
  }
  select(0);
}

tabs(byId("lessons"), lessons.map((lesson) => lesson.name), (panel, index) => {
  const lesson = lessons[index];
  panel.innerHTML = `<h3>${lesson.title}</h3><p>${lesson.intro}</p>
    <div class="scheme" aria-label="Schema concettuale">${lesson.scheme.map((label) => `<strong>${label}</strong>`).join('<span aria-hidden="true">→</span>')}</div>
    <div class="grid">${lesson.tiles.map(([title, copy]) => `<div class="tile"><h3>${title}</h3><p>${copy}</p></div>`).join("")}</div>
    <details><summary>${lesson.more[0]}</summary><p>${lesson.more[1]}</p></details>
    <p class="inline-source">${lesson.refs.map(([id, label]) => `<a href="#fonte-${id}">${label}</a>`).join(" · ")}</p>`;
}, "Unità di teoria");

function feedback(target, message, good = true) {
  target.dataset.kind = good ? "correct" : "retry";
  target.textContent = message;
}

function challenge(panel, questions, title, description, scored = false) {
  let index = 0;
  let points = 0;
  function draw(moveFocus = false) {
    const complete = index === questions.length;
    if (complete) {
      const summary = scored ? `Hai risposto correttamente a ${points} domande su ${questions.length}. Scegli una risposta da spiegare domani senza consultare la teoria.` : "Hai completato tutti i casi. Scegli un caso e spiega perché una delle altre risposte non si applica.";
      panel.innerHTML = `<h3 tabindex="-1">${title} completato</h3><p>${summary}</p><button type="button" class="control">Ricomincia</button>`;
      panel.querySelector("button").addEventListener("click", () => {
        index = 0;
        points = 0;
        draw(true);
      });
    } else {
      const [prompt, choices, correct, explanation] = questions[index];
      panel.innerHTML = `<h3 tabindex="-1">${title}</h3><p>${description}</p><p><strong>${index + 1} di ${questions.length}</strong> · ${prompt}</p>
        <div class="choice-list" role="group" aria-label="Risposte">${choices.map((choice) => `<button type="button" class="choice" aria-pressed="false">${choice}</button>`).join("")}</div>
        <p class="feedback" role="status" tabindex="-1"></p><button type="button" class="control next" hidden>${index + 1 === questions.length ? "Vedi riepilogo" : "Avanti"}</button>`;
      const options = [...panel.querySelectorAll(".choice")];
      const output = panel.querySelector(".feedback");
      const next = panel.querySelector(".next");
      options.forEach((button, i) => button.addEventListener("click", () => {
        const good = i === correct;
        if (good) points += 1;
        button.setAttribute("aria-pressed", "true");
        options.forEach((option) => { option.disabled = true; });
        feedback(output, `${good ? "Corretto." : `Risposta attesa: ${choices[correct]}.`} ${explanation}`, good);
        next.hidden = false;
        output.focus();
      }));
      next.addEventListener("click", () => { index += 1; draw(true); });
    }
    if (moveFocus) panel.querySelector("h3").focus();
  }
  draw();
}

function cellLab(panel) {
  panel.innerHTML = `<h3>Cellula · Il controllo prima della divisione</h3>
  <p>Prevedi che cosa succederà al clone se il controllo è alterato. Usa lo stesso danno simulato nelle due condizioni e confronta i risultati dopo quattro passi.</p>
  <fieldset><legend>Imposta il checkpoint</legend><label class="checkline"><input type="checkbox">Checkpoint alterato</label></fieldset>
  <div class="lab-controls"><button type="button" class="control step">Fai un passo</button><button type="button" class="control run" aria-pressed="false">Avvia</button><button type="button" class="control reset">Azzera</button></div>
  <div class="tissue" aria-hidden="true">${"<span class='dot'></span>".repeat(48)}</div>
  <p class="result" role="status"></p><p>Quadrati magenta = cellule del clone con danno iniziale. Cerchio ambra = cellula arrestata. Un punto corrisponde a un’unità del modello. I numeri sono illustrativi. Le cellule reali hanno più controlli e dinamiche variabili.</p>
  <p class="inline-source"><a href="#fonte-biologia">Fonte · Biologia del cancro</a></p>`;
  let step = 0;
  let timer = null;
  const condition = panel.querySelector("input");
  const stepButton = panel.querySelector(".step");
  const run = panel.querySelector(".run");
  const dots = [...panel.querySelectorAll(".dot")];
  function stop() {
    clearInterval(timer);
    timer = null;
    run.textContent = "Avvia";
    run.setAttribute("aria-pressed", "false");
  }
  function show() {
    const count = condition.checked ? 2 ** step : 1;
    const halted = step > 0 && !condition.checked;
    dots.forEach((dot, i) => { dot.className = i >= count ? "dot" : halted ? "dot stopped" : "dot clone"; });
    const message = step === 0 ? "Stessa condizione iniziale: una cellula con danno al DNA." : halted ? "Il controllo blocca la divisione. Nel tessuto reale potrebbero seguire riparazione o altri esiti." : "In questo modello il danno viene trasmesso alle cellule figlie. L’espansione di un clone è distinta dalla malignità.";
    panel.querySelector(".result").textContent = `Passo ${step}/4 · Cellule del clone: ${count}. ${message}`;
    stepButton.disabled = step === 4 || timer !== null;
    run.disabled = step === 4;
  }
  function advance() {
    if (!panel.contains(run)) { stop(); return; }
    step += 1;
    if (step === 4) stop();
    show();
  }
  function reset() { stop(); step = 0; show(); }
  condition.addEventListener("change", reset);
  stepButton.addEventListener("click", advance);
  panel.querySelector(".reset").addEventListener("click", reset);
  run.addEventListener("click", () => {
    if (timer !== null) stop();
    else {
      timer = setInterval(advance, 950);
      run.textContent = "Pausa";
      run.setAttribute("aria-pressed", "true");
    }
    show();
  });
  show();
  return stop;
}

function menuLab(panel) {
  panel.innerHTML = `<h3>Alimentazione · Le scelte abituali</h3><p>Confronta alcune scelte alimentari abituali e individua quelle coerenti con le raccomandazioni sulla prevenzione oncologica.</p>
  <form>${menuChoices.map(([label, choices], group) => `<fieldset><legend>${label}</legend>${choices.map(([choice, fits]) => `<label class="checkline"><input type="radio" name="group-${group}" value="${fits}" required> ${choice}</label>`).join("")}</fieldset>`).join("")}
  <button class="control" type="submit">Confronta con le evidenze</button> <button class="control" type="reset">Azzera</button>
  <p class="feedback" role="status"></p></form><p class="inline-source"><a href="#fonte-alimentazione">Fonte · Raccomandazioni WCRF</a></p>`;
  const form = panel.querySelector("form");
  const output = form.querySelector(".feedback");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const values = [...new FormData(form).values()];
    const matches = values.filter((value) => value === "true").length;
    const prompts = [
      "Legumi e cereali integrali aumentano la varietà e le fibre. I salumi sono carni lavorate da limitare.",
      "Frutta e verdura apportano fibre e nutrienti. Gli integratori hanno usi specifici.",
      "L’acqua è la bevanda abituale. Per la prevenzione oncologica è preferibile evitare l’alcol."
    ];
    feedback(output, `${matches}/3 scelte coerenti con le raccomandazioni per le abitudini. ${prompts.join(" ")}`, matches === 3);
  });
  form.addEventListener("reset", () => { output.textContent = ""; });
  form.addEventListener("change", () => { output.textContent = ""; });
}

function screeningLab(panel) {
  panel.innerHTML = `<h3>Screening · Che cosa significa un positivo?</h3>
    <p>Confronta due gruppi fittizi di 1.000 persone. Il test immaginario identifica il 90% delle persone con l’alterazione ed è negativo nel 90% di chi non ce l’ha. Prevedi in quale gruppo una quota maggiore dei positivi sarà confermata.</p>
    <div class="choice-list" role="group" aria-label="Frequenza dell’alterazione">
      <button class="choice" type="button" aria-pressed="false" data-count="10">10 persone su 1.000</button>
      <button class="choice" type="button" aria-pressed="false" data-count="100">100 persone su 1.000</button>
    </div><p class="feedback" role="status"></p><p>I numeri sono inventati per isolare il ruolo della frequenza di partenza. I programmi reali usano test e criteri specifici.</p><p class="inline-source"><a href="#fonte-italia">Fonte · Programmi organizzati in Italia</a></p>`;
  const options = [...panel.querySelectorAll(".choice")];
  options.forEach((button) => button.addEventListener("click", () => {
    options.forEach((option) => option.setAttribute("aria-pressed", option === button));
    const count = Number(button.dataset.count);
    const truePositives = count * 0.9;
    const falsePositives = (1000 - count) * 0.1;
    const total = truePositives + falsePositives;
    const percent = Math.round(100 * truePositives / total);
    feedback(panel.querySelector(".feedback"), `${truePositives} positivi con alterazione e ${falsePositives} senza alterazione. Dei ${total} positivi, circa il ${percent}% ha davvero l’alterazione. Anche a parità di test, la frequenza di partenza cambia il significato del risultato.`);
  }));
}

let stopLab = null;
tabs(byId("labs"), ["Cellula", "Casi di cura", "Sfida prevenzione", "Scelte alimentari", "Screening"], (panel, index) => {
  if (stopLab) stopLab();
  stopLab = null;
  if (index === 0) stopLab = cellLab(panel);
  if (index === 1) challenge(panel, clinical, "Casi di cura", "Abbina ciascuna situazione al meccanismo richiesto. I casi sono fittizi e servono a distinguere i trattamenti.");
  if (index === 2) challenge(panel, prevention, "Sfida prevenzione", "Prendi una decisione, poi confrontala con la spiegazione.");
  if (index === 3) menuLab(panel);
  if (index === 4) screeningLab(panel);
}, "Scegli un laboratorio");

challenge(byId("review"), quiz, "Quiz di ripasso", "Scegli una risposta e leggi il feedback prima di proseguire.", true);
byId("cards").innerHTML = cards.map(([question, answer]) => `<details class="tile"><summary>${question}</summary><p>${answer}</p></details>`).join("");
byId("sources").innerHTML = sources.map(([id, title, links, description]) => `<article id="fonte-${id}"><h3>${title}</h3><p>${description}</p><ul>${links.map(([label, url]) => `<li><a href="${url}">${label}</a></li>`).join("")}</ul></article>`).join("");

function createModel() {
  const canvas = byId("cell");
  const context = canvas.getContext("2d");
  if (!context) {
    byId("model-state").textContent = "Visualizzazione 3D non disponibile";
    document.querySelectorAll(".visual-controls button").forEach((button) => { button.disabled = true; });
    return;
  }
  const spin = byId("spin");
  const toggle = byId("model-switch");
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  let yaw = 0.52;
  let pitch = -0.22;
  let clone = false;
  let frame = null;
  let lastTime = 0;
  let pointer = null;
  const colors = { surface: "#79d6e5", nucleus: "#aaacfa", strand: "#ffe795", clone: "#fb91c8" };

  // Surface samples and internal geometry share the same 3D projection.
  function sphere(samples, radius, layer) {
    return Array.from({ length: samples }, (_, i) => {
      const y = 1 - 2 * (i + .5) / samples;
      const edge = Math.sqrt(1 - y * y);
      const angle = i * 2.399963;
      return [edge * Math.cos(angle) * radius, y * radius, edge * Math.sin(angle) * radius, layer];
    });
  }
  const membrane = sphere(1120, 1, "surface");
  const nucleus = sphere(430, .46, "nucleus").map(([x, y, z, layer]) => [x - .07, y + .08, z, layer]);
  const strands = Array.from({ length: 114 }, (_, i) => {
    const t = Math.floor(i / 2) * .22;
    const angle = t + Math.PI * (i % 2);
    return [Math.cos(angle) * .17 - .07, (t / 12 - .5) * .58 + .08, Math.sin(angle) * .17, "strand"];
  });
  const ordinary = [...membrane, ...nucleus, ...strands];
  const cluster = [
    ...ordinary.map(([x, y, z, layer]) => [x * .67 - .35, y * .67, z * .67, layer]),
    ...sphere(430, .48, "clone").map(([x, y, z, layer]) => [x + .57, y + .28, z - .18, layer]),
    ...sphere(370, .43, "clone").map(([x, y, z, layer]) => [x + .55, y - .42, z + .27, layer])
  ];

  function draw() {
    const { width, height } = canvas;
    const ratio = canvas.width / Math.max(1, canvas.clientWidth);
    const scale = Math.min(width / 3.05, height / 2.55);
    const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
    context.clearRect(0, 0, width, height);
    const projected = (clone ? cluster : ordinary).map(([x, y, z, layer]) => {
      const horizontal = x * cy + z * sy;
      const depth = z * cy - x * sy;
      return [horizontal, y * cp - depth * sp, y * sp + depth * cp, layer];
    }).sort((a, b) => a[2] - b[2]);
    for (const [x, y, z, layer] of projected) {
      const perspective = 3.7 / (3.7 - z);
      const radius = (layer === "strand" ? 2.0 : 1.45) * ratio * perspective;
      context.beginPath();
      context.arc(width / 2 + x * scale * perspective, height / 2 + y * scale * perspective, radius, 0, Math.PI * 2);
      context.fillStyle = colors[layer];
      context.globalAlpha = layer === "strand" ? .96 : .26 + (z + 1.15) * .29;
      context.fill();
    }
    context.globalAlpha = 1;
  }

  function resize() {
    const ratio = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round(canvas.clientWidth * ratio));
    canvas.height = Math.max(1, Math.round(canvas.clientHeight * ratio));
    draw();
  }
  new ResizeObserver(resize).observe(canvas);
  function animate(time) {
    if (lastTime) yaw += Math.min(time - lastTime, 32) * .00045;
    lastTime = time;
    draw();
    frame = requestAnimationFrame(animate);
  }
  function pause() {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    lastTime = 0;
    spin.textContent = "Avvia rotazione";
    spin.setAttribute("aria-pressed", "false");
  }
  spin.addEventListener("click", () => {
    if (frame !== null) { pause(); return; }
    spin.textContent = "Pausa rotazione";
    spin.setAttribute("aria-pressed", "true");
    frame = requestAnimationFrame(animate);
  });
  motion.addEventListener("change", (event) => { if (event.matches) pause(); });
  document.addEventListener("visibilitychange", () => { if (document.hidden) pause(); });
  byId("turn-left").addEventListener("click", () => { yaw -= .35; draw(); });
  byId("turn-right").addEventListener("click", () => { yaw += .35; draw(); });
  toggle.addEventListener("click", () => {
    clone = !clone;
    toggle.setAttribute("aria-pressed", clone);
    toggle.textContent = clone ? "Mostra cellula" : "Mostra clone";
    byId("model-state").textContent = clone ? "Espansione di un clone" : "Cellula con controlli integri";
    canvas.setAttribute("aria-label", clone ? "Modello tridimensionale schematico con una cellula e due cellule figlie del clone" : "Modello tridimensionale schematico di una cellula con membrana, nucleo e materiale genetico");
    draw();
  });
  canvas.addEventListener("pointerdown", (event) => {
    if (pointer || event.button !== 0) return;
    canvas.setPointerCapture(event.pointerId);
    pointer = { id: event.pointerId, x: event.clientX, y: event.clientY };
  });
  canvas.addEventListener("pointermove", (event) => {
    if (pointer?.id !== event.pointerId) return;
    yaw += (event.clientX - pointer.x) * .012;
    pitch = Math.max(-1.5, Math.min(1.5, pitch + (event.clientY - pointer.y) * .012));
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    draw();
  });
  canvas.addEventListener("lostpointercapture", (event) => { if (pointer?.id === event.pointerId) pointer = null; });
  resize();
}
createModel();

byId("video-cell-lab").addEventListener("click", () => {
  const cellTab = byId("labs").querySelector(".tabs button");
  if (cellTab.getAttribute("aria-pressed") !== "true") cellTab.click();
  cellTab.focus({ preventScroll: true });
});

const loadVideo = byId("load-video");
loadVideo.hidden = false;
loadVideo.addEventListener("click", () => {
  const frame = document.createElement("iframe");
  frame.title = "Video Ciclo cellulare e cancro";
  frame.src = loadVideo.dataset.src;
  frame.allowFullscreen = true;
  byId("video-player").replaceChildren(frame);
  frame.focus();
}, { once: true });
