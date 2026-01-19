const toggle = document.getElementById("langToggle");
let current = "en";

toggle.onclick = () => {
  current = current === "en" ? "id" : "en";
  toggle.textContent = current === "en" ? "ID" : "EN";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.dataset[current];
  });
};
document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("langToggle");

  if (!langToggle) return;

  langToggle.addEventListener("change", () => {
    const lang = langToggle.checked ? "en" : "id";

    document.querySelectorAll("[data-id]").forEach(el => {
      el.textContent =
        lang === "id"
          ? el.dataset.id
          : el.dataset.en;
    });
  });
});
