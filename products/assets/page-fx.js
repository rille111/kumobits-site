/* Scroll reveal for sections below the fold. Only hides content when motion is
   welcome, so reduced motion and no-JS visitors always see everything. */
(function () {
  "use strict";
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var nodes = document.querySelectorAll("[data-reveal]");
  if (!nodes.length) return;
  document.documentElement.classList.add("fx");
  var io = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add("is-in");
        io.unobserve(entries[i].target);
      }
    }
  }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
  for (var i = 0; i < nodes.length; i++) io.observe(nodes[i]);
})();
