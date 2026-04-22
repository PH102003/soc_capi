/* ===========================
   NAVEGAÇÃO ENTRE PÁGINAS
=========================== */

const navLinks = document.querySelectorAll('.nav-link');
const pages    = document.querySelectorAll('.page');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu  = document.getElementById('main-nav');

function showPage(pageId) {
  pages.forEach(p => p.classList.remove('active'));
  navLinks.forEach(l => l.classList.remove('active'));

  const target = document.getElementById(pageId);
  if (target) target.classList.add('active');

  navLinks.forEach(l => {
    if (l.dataset.page === pageId) l.classList.add('active');
  });

  // fechar menu mobile
  navMenu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showPage(link.dataset.page);
  });
});

menuToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

// Fechar menu ao clicar fora
document.addEventListener('click', e => {
  if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});


/* ===========================
   RENDERIZAR LIVROS
=========================== */

function renderLivros(lista) {
  const container = document.getElementById('livros-lista');
  if (!container) return;
  container.innerHTML = '';

  if (lista.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:#aaa;padding:32px 0;">Nenhum livro encontrado.</p>';
    return;
  }

  lista.forEach(livro => {
    const item = document.createElement('div');
    item.className = 'livro-item';

    let fotosHTML = '';
    if (livro.fotos && livro.fotos.length > 0) {
      fotosHTML = livro.fotos.map(f =>
        `<img src="assets/${f}" alt="${livro.titulo}" loading="lazy" />`
      ).join('');
    } else {
      fotosHTML = `<div class="livro-foto-placeholder">📖<br/>capa em breve</div>`;
    }

    item.innerHTML = `
      <div class="livro-titulo">${livro.titulo}</div>
      <div class="livro-fotos">${fotosHTML}</div>
    `;
    container.appendChild(item);
  });
}

// Busca de livros
const buscaInput = document.getElementById('busca-input');
if (buscaInput) {
  buscaInput.addEventListener('input', () => {
    const q = buscaInput.value.toLowerCase().trim();
    const filtrados = q
      ? livros.filter(l => l.titulo.toLowerCase().includes(q))
      : livros;
    renderLivros(filtrados);
  });
}


/* ===========================
   RENDERIZAR CONTOS
=========================== */

function renderContos() {
  const container = document.getElementById('contos-lista');
  if (!container) return;

  contos.forEach((conto, i) => {
    const card = document.createElement('div');
    card.className = 'conto-card';
    card.innerHTML = `
      <h3>${conto.titulo}</h3>
      <div class="conto-meta">${conto.tipo}${conto.data ? ' · ' + conto.data : ''}</div>
      <p class="conto-trecho">${conto.trecho}</p>
      <button class="conto-ler-mais" data-index="${i}">Ler na íntegra →</button>
    `;
    container.appendChild(card);
  });

  // Botões "Ler mais"
  container.addEventListener('click', e => {
    if (e.target.classList.contains('conto-ler-mais')) {
      const idx = parseInt(e.target.dataset.index);
      abrirModal(contos[idx]);
    }
  });
}

/* ===========================
   MODAL DE CONTO COMPLETO
=========================== */

let modalOverlay;

function criarModal() {
  modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';
  modalOverlay.innerHTML = `
    <div class="modal-box" role="dialog" aria-modal="true">
      <button class="modal-close" aria-label="Fechar">✕</button>
      <h2 id="modal-titulo"></h2>
      <div class="modal-meta" id="modal-meta"></div>
      <div class="modal-body" id="modal-body"></div>
    </div>
  `;
  document.body.appendChild(modalOverlay);

  modalOverlay.querySelector('.modal-close').addEventListener('click', fecharModal);
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) fecharModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') fecharModal();
  });
}

function abrirModal(conto) {
  document.getElementById('modal-titulo').textContent = conto.titulo;
  document.getElementById('modal-meta').textContent =
    `${conto.tipo}${conto.data ? ' · ' + conto.data : ''}`;
  document.getElementById('modal-body').textContent = conto.texto;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function fecharModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}


/* ===========================
   RENDERIZAR SOBRE MIM
=========================== */

function renderSobre() {
  const bio = document.getElementById('sobre-bio');
  if (bio) bio.textContent = biograifa;

  const lista = document.getElementById('curiosidades-lista');
  if (!lista) return;

  curiosidades.forEach(c => {
    const item = document.createElement('div');
    item.className = 'curiosidade-item';
    item.innerHTML = `
      <span class="curiosidade-icon">${c.icone}</span>
      <span class="curiosidade-texto">${c.texto}</span>
    `;
    lista.appendChild(item);
  });
}


/* ===========================
   RENDERIZAR REDES SOCIAIS
=========================== */

function renderRedes() {
  const lista = document.getElementById('redes-lista');
  if (!lista) return;

  redesSociais.forEach(r => {
    const link = document.createElement('a');
    link.className = 'rede-link';
    link.href = r.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.innerHTML = `<span class="rede-icon">${r.icone}</span> ${r.nome}`;
    lista.appendChild(link);
  });
}


/* ===========================
   FORMULÁRIO DE CONTATO
=========================== */

function handleContato(e) {
  e.preventDefault();
  const form = e.target;
  const nome = form.nome.value;
  // Substitua pelo seu email real no mailto abaixo:
  const email = 'socorrocapiberibe@email.com';
  const mensagem = form.mensagem.value;

  // Abre o cliente de email do usuário
  const mailto = `mailto:${email}?subject=Mensagem de ${encodeURIComponent(nome)}&body=${encodeURIComponent(mensagem)}`;
  window.location.href = mailto;

  form.closest('.contato-content').innerHTML = `
    <div class="form-sucesso">
      <div class="check">💌</div>
      <p><strong>Obrigada por entrar em contato!</strong><br/>
      Seu cliente de e-mail foi aberto com a mensagem pronta.</p>
    </div>
  `;
}


/* ===========================
   ANO NO FOOTER
=========================== */

const anoEl = document.getElementById('ano');
if (anoEl) anoEl.textContent = new Date().getFullYear();


/* ===========================
   INICIALIZAR TUDO
=========================== */

renderLivros(livros);
renderContos();
criarModal();
renderSobre();
renderRedes();
