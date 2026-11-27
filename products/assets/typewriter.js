/* Typewriter hero: types, pauses, erases, next phrase. Honours prefers-reduced-motion. */
(function () {
  "use strict";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  function parseList(el, name) {
    var raw = el.getAttribute(name);
    if (!raw) return [];
    try {
      var data = JSON.parse(raw);
      return Array.isArray(data) ? data.map(String) : [];
    } catch (err) {
      return [];
    }
  }

  function fullLines(el) {
    var prefix = el.getAttribute("data-prefix") || "";
    var phrases = parseList(el, "data-phrases");
    var closer = el.getAttribute("data-closer") || "";
    var lines = phrases.map(function (p) { return prefix + p; });
    if (closer) lines.push(closer);
    if (!lines.length) lines.push(el.textContent.trim());
    return lines;
  }

  function reserveHeight(el, lines) {
    var probe = el.cloneNode(false);
    probe.removeAttribute("id");
    probe.style.visibility = "hidden";
    probe.style.position = "absolute";
    probe.style.left = "0";
    probe.style.right = "0";
    probe.style.height = "auto";
    probe.style.minHeight = "0";
    el.parentNode.appendChild(probe);
    var max = 0;
    for (var i = 0; i < lines.length; i++) {
      probe.textContent = lines[i] || "\u00a0";
      max = Math.max(max, probe.offsetHeight);
    }
    el.style.minHeight = max + "px";
    probe.parentNode.removeChild(probe);
  }

  function run(el) {
    var lines = fullLines(el);
    if (lines.length < 2) return;
    reserveHeight(el, lines);
    var i = 0;
    var hold = parseInt(el.getAttribute("data-hold") || "1400", 10);
    var typeMs = parseInt(el.getAttribute("data-type") || "42", 10);
    var eraseMs = parseInt(el.getAttribute("data-erase") || "26", 10);

    function setText(s) {
      el.textContent = s.length ? s : "\u00a0";
    }

    function typeLine(line, cb) {
      var n = 0;
      function step() {
        n += 1;
        setText(line.slice(0, n));
        if (n < line.length) setTimeout(step, typeMs);
        else setTimeout(cb, hold);
      }
      if (!line.length) { setText(""); setTimeout(cb, hold); return; }
      step();
    }

    function eraseLine(line, cb) {
      var n = line.length;
      function step() {
        n -= 1;
        setText(n > 0 ? line.slice(0, n) : "");
        if (n > 0) setTimeout(step, eraseMs);
        else setTimeout(cb, 280);
      }
      step();
    }

    function cycle() {
      var line = lines[i];
      typeLine(line, function () {
        eraseLine(line, function () {
          i = (i + 1) % lines.length;
          cycle();
        });
      });
    }

    // First paint already shows line 0. Hold, then erase and continue.
    setTimeout(function () {
      eraseLine(lines[0], function () {
        i = 1 % lines.length;
        cycle();
      });
    }, hold);
  }

  document.querySelectorAll(".tw[data-phrases]").forEach(run);
})();
