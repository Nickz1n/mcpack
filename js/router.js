const routes = {
  '/': 'index.html',
  '/about': 'pages/about.html'
};

async function loadPage(path) {
  const route = routes[path] || 'index.html';
  const res = await fetch(route);
  const html = await res.text();
  document.getElementById('content').innerHTML = html;
}
