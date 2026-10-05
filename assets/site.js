// Language switch (English / 한국어). Remembers the choice per browser.
(function () {
  var KEY = "miya-lang";
  var root = document.documentElement;

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function apply(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    var btn = document.querySelector(".lang-toggle");
    if (btn) btn.textContent = lang === "ko" ? "English" : "한국어";
    try { localStorage.setItem(KEY, lang); } catch (e) { /* ignore */ }
  }

  var initial = saved() || ((navigator.language || "").toLowerCase().indexOf("ko") === 0 ? "ko" : "en");
  apply(initial);

  document.addEventListener("click", function (e) {
    var t = e.target.closest && e.target.closest(".lang-toggle");
    if (!t) return;
    apply(root.getAttribute("data-lang") === "ko" ? "en" : "ko");
  });

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
