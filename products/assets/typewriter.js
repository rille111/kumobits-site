/* Hero typewriter: type, hold, erase, next phrase, loop.
   Notes:
   - Runs even when the OS reports "reduce motion". The effect is a short text
     reveal on one line of copy; it is the page's main hook. Reduce only turns
     off the caret blink and the decorative transitions (see products.css).
   - The static full sentence stays in the .sr-only span for screen readers and
     no-JS, so the animation is never the only source of the text.
   - Height is reserved on the heading so typing and erasing never shift layout.
   - Pauses while the tab is hidden, resumes where it stopped. */
(function () {
  "use strict";

  /* Defer rather than cancel while the tab is hidden; the chain resumes when
     the page is visible again. */
  function wait(ms, fn) {
    window.setTimeout(function () {
      if (document.hidden) {
        wait(400, fn);
        return;
      }
      fn();
    }, Math.max(0, ms));
  }

  function parseList(el, name) {
    var raw = el.getAttribute(name);
    if (!raw) return [];
    try {
      var data = JSON.parse(raw);
      return Array.isArray(data) ? data.map(String).filter(function (s) { return s.length; }) : [];
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
    if (!lines.length) lines.push((el.textContent || "").trim());
    return lines;
  }

  /* Measure the tallest line at the real width and pin it on the heading.
     .tw itself is inline, so the block parent gets the min-height. */
  function reserveHeight(el, lines) {
    var host = el.closest ? el.closest(".tw-line") : null;
    if (!host) host = el.parentNode;
    var width = host.getBoundingClientRect().width;
    if (!width) return;
    var probe = host.cloneNode(false);
    probe.removeAttribute("id");
    probe.setAttribute("aria-hidden", "true");
    probe.className = host.className + " tw-probe";
    probe.textContent = "";
    probe.style.cssText =
      "position:absolute;left:-9999px;top:0;height:auto;min-height:0;visibility:hidden;" +
      "pointer-events:none;width:" + width + "px;max-width:1600px";
    document.body.appendChild(probe);
    var tallest = 0;
    for (var i = 0; i < lines.length; i++) {
      probe.textContent = lines[i] || "\u00a0";
      tallest = Math.max(tallest, probe.offsetHeight);
    }
    probe.parentNode.removeChild(probe);
    if (tallest) host.style.minHeight = tallest + "px";
  }

  function run(el) {
    var lines = fullLines(el);
    if (lines.length < 2) return;

    var hold = parseInt(el.getAttribute("data-hold") || "2300", 10);
    var typeMs = parseInt(el.getAttribute("data-type") || "36", 10);
    var eraseMs = parseInt(el.getAttribute("data-erase") || "16", 10);
    if (isNaN(hold) || hold < 400) hold = 2300;
    if (isNaN(typeMs) || typeMs < 8) typeMs = 36;
    if (isNaN(eraseMs) || eraseMs < 4) eraseMs = 16;

    reserveHeight(el, lines);
    var index = 0;
    var text = lines[0];
    el.textContent = text;
    el.setAttribute("data-tw-state", "holding");

    function setText(s) {
      text = s;
      el.textContent = s.length ? s : "\u00a0";
    }

    function type(line, done) {
      el.setAttribute("data-tw-state", "typing");
      var n = 0;
      function step() {
        n += 1;
        setText(line.slice(0, n));
        if (n < line.length) wait(typeMs, step);
        else done();
      }
      if (!line.length) { setText(""); done(); return; }
      wait(typeMs, step);
    }

    function erase(done) {
      el.setAttribute("data-tw-state", "erasing");
      var n = text.replace(/\u00a0/g, " ").length;
      function step() {
        n -= 1;
        setText(n > 0 ? text.slice(0, n) : "");
        if (n > 0) wait(eraseMs, step);
        else wait(260, done);
      }
      if (!n) { done(); return; }
      wait(eraseMs, step);
    }

    function cycle() {
      type(lines[index], function () {
        el.setAttribute("data-tw-state", "holding");
        wait(hold, function () {
          erase(function () {
            index = (index + 1) % lines.length;
            cycle();
          });
        });
      });
    }

    /* First paint shows line 0 in full (good LCP, no empty heading). Hold it,
       then erase and continue from the second phrase. */
    wait(hold, function () {
      erase(function () {
        index = 1 % lines.length;
        cycle();
      });
    });
  }

  function start() {
    var nodes = document.querySelectorAll(".tw[data-phrases]");
    for (var i = 0; i < nodes.length; i++) run(nodes[i]);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
