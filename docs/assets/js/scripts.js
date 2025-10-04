// Carrega automaticamente templates via data-include
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("[data-include]");

  elements.forEach(el => {
    const file = el.getAttribute("data-include");
    fetch(file)
      .then(res => res.text())
      .then(data => el.innerHTML = data)
      .catch(() => el.innerHTML = `<p style="color:red">Erro ao carregar ${file}</p>`);
  });
});
