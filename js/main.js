async function loadComponent(id, url) {
  const res = await fetch(url);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

function handleRouteChange() {
  const hash = location.hash.slice(1) || '/';
  loadPage(hash);
}

window.addEventListener('hashchange', handleRouteChange);
window.addEventListener('DOMContentLoaded', async () => {
  await loadComponent('header', 'components/header.html');
  await loadComponent('footer', 'components/footer.html');
  handleRouteChange();
});
