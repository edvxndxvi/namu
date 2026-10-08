// API de conteúdos de bem-estar da Namu, fornecida pronta para o teste de Front-end.
// Sem dependências externas: roda com `node server.js` ou via Docker Compose.
const http = require('node:http');
const { categories, contents } = require('./data/contents.json');

const PORT = Number(process.env.PORT || 3333);
const [MIN_DELAY, MAX_DELAY] = String(process.env.API_DELAY_MS || '300-900')
  .split('-')
  .map(Number);

// Favoritos ficam em memória: reiniciar a API zera a lista.
const favorites = new Set();

const normalize = (text) =>
  text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

const byNewest = (a, b) => b.publishedAt.localeCompare(a.publishedAt);

function send(res, status, body) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(body === undefined ? undefined : JSON.stringify(body));
}

const error = (res, status, message) => send(res, status, { error: message });

function parsePositiveInt(value, fallback) {
  if (value === null) return fallback;
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : NaN;
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => (raw += chunk));
    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        reject(new Error('invalid json'));
      }
    });
  });
}

function listContents(res, query) {
  const page = parsePositiveInt(query.get('page'), 1);
  const limit = parsePositiveInt(query.get('limit'), 10);
  if (Number.isNaN(page) || Number.isNaN(limit) || limit > 50) {
    return error(res, 400, 'Parâmetros de paginação inválidos: page >= 1 e 1 <= limit <= 50.');
  }

  const category = query.get('category');
  if (category && !categories.some((c) => c.slug === category)) {
    return error(res, 400, `Categoria "${category}" não existe.`);
  }

  const search = normalize(query.get('search') || '').trim();
  const filtered = contents
    .filter((c) => !category || c.category === category)
    .filter((c) => !search || normalize(c.title).includes(search))
    .sort(byNewest);

  const start = (page - 1) * limit;
  send(res, 200, {
    data: filtered.slice(start, start + limit),
    page,
    limit,
    total: filtered.length,
    totalPages: Math.ceil(filtered.length / limit),
  });
}

function getContent(res, rawId) {
  const id = Number(rawId);
  if (!Number.isInteger(id)) return error(res, 400, 'O id do conteúdo deve ser numérico.');
  // Falha proposital: o conteúdo 13 simula uma instabilidade do servidor.
  if (id === 13) return error(res, 500, 'Erro interno ao carregar o conteúdo.');
  const content = contents.find((c) => c.id === id);
  if (!content) return error(res, 404, 'Conteúdo não encontrado.');
  send(res, 200, { ...content, isFavorite: favorites.has(id) });
}

async function addFavorite(req, res) {
  let body;
  try {
    body = await readJson(req);
  } catch {
    return error(res, 400, 'Corpo da requisição não é um JSON válido.');
  }
  const id = body.contentId;
  if (!Number.isInteger(id)) return error(res, 400, 'Informe "contentId" numérico.');
  const content = contents.find((c) => c.id === id);
  if (!content) return error(res, 404, 'Conteúdo não encontrado.');
  if (favorites.has(id)) return error(res, 409, 'Conteúdo já está nos favoritos.');
  favorites.add(id);
  send(res, 201, content);
}

function removeFavorite(res, rawId) {
  const id = Number(rawId);
  if (!favorites.has(id)) return error(res, 404, 'Conteúdo não está nos favoritos.');
  favorites.delete(id);
  send(res, 204);
}

async function route(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname.replace(/\/+$/, '') || '/';
  const detail = path.match(/^\/contents\/([^/]+)$/);
  const favorite = path.match(/^\/favorites\/([^/]+)$/);

  if (req.method === 'OPTIONS') return send(res, 204);
  if (req.method === 'GET' && path === '/health') return send(res, 200, { status: 'ok' });
  if (req.method === 'GET' && path === '/categories') return send(res, 200, { data: categories });
  if (req.method === 'GET' && path === '/contents') return listContents(res, url.searchParams);
  if (req.method === 'GET' && detail) return getContent(res, detail[1]);
  if (req.method === 'GET' && path === '/favorites') {
    const data = contents.filter((c) => favorites.has(c.id)).sort(byNewest);
    return send(res, 200, { data });
  }
  if (req.method === 'POST' && path === '/favorites') return addFavorite(req, res);
  if (req.method === 'DELETE' && favorite) return removeFavorite(res, favorite[1]);
  error(res, 404, 'Rota não encontrada.');
}

http
  .createServer((req, res) => {
    const delay = MIN_DELAY + Math.random() * ((MAX_DELAY || MIN_DELAY) - MIN_DELAY);
    setTimeout(() => {
      route(req, res).catch(() => error(res, 500, 'Erro inesperado.'));
    }, req.url.startsWith('/health') ? 0 : delay);
  })
  .listen(PORT, () => console.log(`API Namu Conteúdos em http://localhost:${PORT}`));
