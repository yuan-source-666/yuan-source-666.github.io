/* ===== 全站主题切换 =====
   用法：<html> 上写 data-theme；页头放一个 .theme-toggle 按钮即可。
   优先级：用户手动选择（localStorage）> 系统偏好 > 默认亮色。 */
(function () {
  "use strict";
  var KEY = "my-website-theme";

  function apply(theme) {
    document.documentElement.dataset.theme = theme;
  }

  function systemTheme() {
    try {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } catch (e) {
      return "light";
    }
  }

  // 尽早应用，避免闪色
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  apply(saved === "dark" || saved === "light" ? saved : systemTheme());

  function updateToggleText() {
    document.querySelectorAll(".theme-toggle").forEach(function (btn) {
      var dark = document.documentElement.dataset.theme === "dark";
      btn.textContent = dark ? "☀ 日间" : "☾ 夜间";
      btn.setAttribute("aria-label", dark ? "切换到日间模式" : "切换到夜间模式");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".theme-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        try { localStorage.setItem(KEY, next); } catch (e) {}
        apply(next);
        updateToggleText();
      });
    });
    updateToggleText();
  });
})();
