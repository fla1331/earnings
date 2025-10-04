// Carrega templates via URL absoluta
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("[data-include]");

  elements.forEach(el => {
    const url = el.getAttribute("data-include");
    fetch(url)
      .then(res => res.text())
      .then(data => el.innerHTML = data)
      .catch(() => el.innerHTML = `<p style="color:red">Erro ao carregar ${url}</p>`);
  });
});
