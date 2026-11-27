/* Screenshot lightbox. Every gallery shot is a real link, so without JS the
   image still opens. With JS we show the native <dialog> modal: focus trap,
   Esc to close, arrow keys, swipe, click on the backdrop to close.
   Respects reduced motion through CSS only. */
(function () {
  "use strict";

  var links = Array.prototype.slice.call(document.querySelectorAll("a[data-shot]"));
  if (!links.length || typeof window.HTMLDialogElement === "undefined") return;

  var items = links.map(function (a) {
    var img = a.querySelector("img");
    return {
      href: a.getAttribute("href") || (img && img.getAttribute("src")) || "",
      alt: (img && img.getAttribute("alt")) || "",
      caption: a.getAttribute("data-caption") || (img && img.getAttribute("alt")) || "",
      el: a
    };
  }).filter(function (it) { return it.href; });
  if (!items.length) return;

  var SVG_NS = "http://www.w3.org/2000/svg";
  function icon(pathData, label) {
    var svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("width", "22");
    svg.setAttribute("height", "22");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    var p = document.createElementNS(SVG_NS, "path");
    p.setAttribute("d", pathData);
    p.setAttribute("fill", "none");
    p.setAttribute("stroke", "currentColor");
    p.setAttribute("stroke-width", "1.8");
    p.setAttribute("stroke-linecap", "round");
    p.setAttribute("stroke-linejoin", "round");
    svg.appendChild(p);
    if (label) svg.setAttribute("aria-label", label);
    return svg;
  }

  var dlg = document.createElement("dialog");
  dlg.className = "lb";
  dlg.setAttribute("aria-label", "Screenshot viewer");

  var shell = document.createElement("div");
  shell.className = "lb-shell";

  var close = document.createElement("button");
  close.type = "button";
  close.className = "lb-btn lb-close";
  close.setAttribute("aria-label", "Close viewer");
  close.appendChild(icon("M6 6l12 12M18 6L6 18"));

  var prev = document.createElement("button");
  prev.type = "button";
  prev.className = "lb-btn lb-prev";
  prev.setAttribute("aria-label", "Previous screenshot");
  prev.appendChild(icon("M15 5l-7 7 7 7"));

  var next = document.createElement("button");
  next.type = "button";
  next.className = "lb-btn lb-next";
  next.setAttribute("aria-label", "Next screenshot");
  next.appendChild(icon("M9 5l7 7-7 7"));

  var fig = document.createElement("figure");
  fig.className = "lb-fig";
  var img = document.createElement("img");
  img.className = "lb-img";
  img.decoding = "async";
  img.alt = "";
  var cap = document.createElement("figcaption");
  cap.className = "lb-cap";
  fig.appendChild(img);
  fig.appendChild(cap);

  var bar = document.createElement("div");
  bar.className = "lb-bar";
  var count = document.createElement("span");
  count.className = "lb-count";
  count.setAttribute("aria-live", "polite");
  var hint = document.createElement("span");
  hint.className = "lb-hint";
  hint.textContent = "Arrow keys to browse. Esc to close.";
  bar.appendChild(count);
  bar.appendChild(hint);

  shell.appendChild(close);
  shell.appendChild(prev);
  shell.appendChild(next);
  shell.appendChild(fig);
  shell.appendChild(bar);
  dlg.appendChild(shell);
  document.body.appendChild(dlg);

  var current = 0;
  var opener = null;
  var swipeX = null;

  function preload(i) {
    var it = items[(i + items.length) % items.length];
    if (!it) return;
    var pre = new Image();
    pre.src = it.href;
  }

  function paint(i) {
    current = (i + items.length) % items.length;
    var it = items[current];
    img.src = it.href;
    img.alt = it.alt || it.caption;
    cap.textContent = it.caption;
    count.textContent = (current + 1) + " / " + items.length;
    dlg.setAttribute("aria-label", "Screenshot viewer, " + (current + 1) + " of " + items.length);
    prev.disabled = items.length < 2;
    next.disabled = items.length < 2;
    document.documentElement.classList.add("lb-open");
    preload(current + 1);
    preload(current - 1);
  }

  function open(i, from) {
    opener = from || null;
    paint(i);
    if (typeof dlg.showModal === "function") dlg.showModal();
    else dlg.setAttribute("open", "");
    close.focus();
  }

  function shut() {
    if (typeof dlg.close === "function") dlg.close();
    else dlg.removeAttribute("open");
  }

  links.forEach(function (a) {
    a.addEventListener("click", function (event) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button > 0) return;
      event.preventDefault();
      var i = -1;
      for (var k = 0; k < items.length; k++) if (items[k].el === a) i = k;
      if (i >= 0) open(i, a);
    });
  });

  dlg.addEventListener("keydown", function (event) {
    var key = event.key;
    if (key === "ArrowLeft") { event.preventDefault(); paint(current - 1); }
    else if (key === "ArrowRight") { event.preventDefault(); paint(current + 1); }
    else if (key === "Home") { event.preventDefault(); paint(0); }
    else if (key === "End") { event.preventDefault(); paint(items.length - 1); }
  });

  dlg.addEventListener("click", function (event) {
    if (event.target === dlg) shut();
  });

  dlg.addEventListener("pointerdown", function (event) {
    if (event.target.closest("button")) return;
    swipeX = event.clientX;
  });
  dlg.addEventListener("pointerup", function (event) {
    if (swipeX === null) return;
    var dx = event.clientX - swipeX;
    swipeX = null;
    if (Math.abs(dx) > 60) paint(current + (dx < 0 ? 1 : -1));
  });
  dlg.addEventListener("pointercancel", function () { swipeX = null; });

  dlg.addEventListener("close", function () {
    document.documentElement.classList.remove("lb-open");
    img.removeAttribute("src");
    if (opener && typeof opener.focus === "function") opener.focus();
    opener = null;
  });

  close.addEventListener("click", shut);
  prev.addEventListener("click", function () { paint(current - 1); });
  next.addEventListener("click", function () { paint(current + 1); });
})();
