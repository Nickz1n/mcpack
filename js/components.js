document.addEventListener("DOMContentLoaded", async () => { 
  const components = document.querySelectorAll("[data-component]");

  for (const el of components) {
    const file = el.getAttribute("data-component");
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`Erro ao carregar ${file}`);
      const html = await res.text();
      el.innerHTML = html;
    } catch (err) {
      console.error(err);
      el.innerHTML = "<p>Erro ao carregar componente.</p>";
    }
  }

  // ✅ Reaplica a linguagem após carregar os componentes
  applyLanguage(localStorage.getItem('lang') || 'pt');
});
