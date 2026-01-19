const toggle = document.getElementById("langToggle");
let current = "en";

toggle.onclick = () => {
  current = current === "en" ? "id" : "en";
  toggle.textContent = current === "en" ? "ID" : "EN";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.dataset[current];
  });
};
