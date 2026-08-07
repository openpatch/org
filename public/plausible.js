// Privacy friendly, cookie-less analytics.
// Replaces the Plausible component of the previous Next.js site. Only runs on
// the production domain so local `hyperbook dev` sessions are not counted.
(function () {
  if (window.location.hostname !== "openpatch.org") return;

  var script = document.createElement("script");
  script.defer = true;
  script.setAttribute("data-domain", "openpatch.org");
  script.src = "https://plausible.io/js/plausible.js";
  document.head.appendChild(script);

  // https://plausible.io/docs/custom-event-goals
  window.plausible =
    window.plausible ||
    function () {
      (window.plausible.q = window.plausible.q || []).push(arguments);
    };
})();
