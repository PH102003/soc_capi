/* ============================================================
   MAIN.JS — Lógica principal do site de Socorro Capiberibe
   ------------------------------------------------------------
   Este arquivo é responsável por TUDO que "se move" no site:
   navegação entre páginas, renderização do conteúdo vindo
   do data.js, busca de livros, modal de contos e formulário.

   Estrutura geral:
    1. Navegação entre páginas
    2. Renderizar livros
    3. Busca de livros
    4. Renderizar contos e crônicas
    5. Modal (janela de leitura completa)
    6. Renderizar página "Sobre mim"
    7. Renderizar redes sociais
    8. Formulário de contato
    9. Ano no rodapé
   10. Inicialização (chamada de tudo)
============================================================ */


/* ============================================================
   1. NAVEGAÇÃO ENTRE PÁGINAS
   ------------------------------------------------------------
   O site tem 4 "páginas" (home, contos, sobre, contato), mas
   tecnicamente é um único arquivo HTML. A troca de página é
   feita ocultando todas as seções e exibindo apenas a escolhida,
   usando a classe CSS "active".

   Por que fazer assim em vez de abrir arquivos separados?
   - Mais rápido: o navegador não precisa baixar nada novo ao
     trocar de aba — tudo já foi carregado de uma vez.
   - Mais simples de hospedar: só existe um index.html.
   - Funciona perfeitamente no GitHub Pages sem configuração extra.
============================================================ */

// Seleciona todos os links do menu de navegação.
// querySelectorAll retorna uma "NodeList" — parecida com um array,
// e podemos usar forEach para percorrê-la.
const navLinks   = document.querySelectorAll('.nav-link');

// Seleciona todas as seções <section class="page"> do HTML.
const pages      = document.querySelectorAll('.page');

// Botão de hambúrguer (menu mobile — as três listrinhas).
const menuToggle = document.querySelector('.menu-toggle');

// O elemento <nav> que contém os links — é ele que abre/fecha no mobile.
const navMenu    = document.getElementById('main-nav');


// showPage(pageId) é a função central de navegação.
// Ela recebe o id da seção que queremos mostrar (ex: "home", "contos")
// e faz duas coisas em paralelo:
//   a) Esconde todas as páginas e mostra só a escolhida.
//   b) Remove o destaque "active" de todos os links e coloca no correto.
function showPage(pageId) {

  // Remove a classe "active" de todas as páginas.
  // Sem "active", o CSS aplica display:none — a seção some da tela.
  pages.forEach(p => p.classList.remove('active'));

  // Remove o destaque de todos os links do menu.
  navLinks.forEach(l => l.classList.remove('active'));

  // Busca a seção com o id correto e adiciona "active".
  // Com "active", o CSS aplica display:block — a seção aparece.
  const target = document.getElementById(pageId);
  if (target) target.classList.add('active');

  // Percorre os links e destaca aquele cujo data-page bate com o pageId.
  // data-page é um atributo personalizado que colocamos no HTML:
  // <a href="#home" data-page="home">Home</a>
  navLinks.forEach(l => {
    if (l.dataset.page === pageId) l.classList.add('active');
  });

  // Fecha o menu hambúrguer ao navegar (importante no mobile).
  navMenu.classList.remove('open');

  // aria-expanded="false" informa leitores de tela que o menu está fechado.
  // Isso é acessibilidade — usuários com deficiência visual usam isso.
  menuToggle.setAttribute('aria-expanded', 'false');

  // Rola a janela suavemente para o topo ao trocar de página.
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Adiciona o evento de clique em cada link do menu.
// e.preventDefault() impede o comportamento padrão do <a href="#...">
// que seria rolar a página — nós queremos trocar de seção no lugar disso.
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // link.dataset.page lê o atributo data-page do elemento clicado.
    showPage(link.dataset.page);
  });
});


// Controla o menu hambúrguer no mobile.
// classList.toggle('open') adiciona 'open' se não tiver, remove se tiver —
// funciona como um interruptor. O retorno (true/false) indica o novo estado.
menuToggle.addEventListener('click', () => {
  const estaAberto = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', estaAberto);
});


// Fecha o menu se o usuário clicar em qualquer lugar fora dele.
// document.addEventListener('click') escuta cliques em toda a página.
// contains() verifica se o elemento clicado está dentro do menu ou do botão —
// se não estiver em nenhum dos dois, fechamos o menu.
document.addEventListener('click', e => {
  if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});


/* ============================================================
   2. RENDERIZAR LIVROS
   ------------------------------------------------------------
   "Renderizar" significa gerar o HTML de cada livro
   dinamicamente, a partir dos dados do data.js.

   Por que não escrever os livros direto no HTML?
   - Se fizermos isso, qualquer mudança exige editar o index.html,
     que tem a estrutura da página inteira e é mais fácil de quebrar.
   - Com data.js, a Socorro edita um arquivo simples com texto e
     o resultado aparece automaticamente — sem tocar na estrutura.

   A função recebe "lista" como parâmetro (não usa "livros" direto)
   porque ela também é chamada durante a busca, com a lista filtrada.
============================================================ */

function renderLivros(lista) {

  // Encontra o elemento HTML onde os livros serão inseridos.
  const container = document.getElementById('livros-lista');

  // Proteção: se o elemento não existir na página, para aqui.
  // O "return" sem valor sai da função imediatamente.
  if (!container) return;

  // Limpa o conteúdo anterior antes de inserir o novo.
  // Isso é necessário principalmente na busca: quando o usuário digita,
  // limpamos os livros antigos e desenhamos só os que correspondem ao filtro.
  container.innerHTML = '';

  // Se a lista estiver vazia (busca sem resultado), exibe mensagem e para.
  if (lista.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:#aaa;padding:40px 0;">Nenhum livro encontrado para essa busca.</p>';
    return;
  }

  // Percorre cada livro da lista e cria seu bloco HTML.
  // "index" é a posição do livro (0, 1, 2...) — usamos para mostrar
  // o número de ordem no card ("Livro 01", "Livro 02", etc.).
  lista.forEach((livro, index) => {

    // createElement cria um elemento <div> vazio na memória do navegador.
    // Ainda não aparece na tela — isso acontece ao final com appendChild.
    const item = document.createElement('div');
    item.className = 'livro-item';

    // Monta o HTML das fotos do livro.
    // Se o livro tiver fotos cadastradas, cria uma <img> para cada uma.
    // Se não tiver (fotos: []), mostra um placeholder com emoji de livro.
    let fotosHTML = '';
    if (livro.fotos && livro.fotos.length > 0) {

      // .map() transforma cada nome de arquivo numa tag <img> completa.
      // loading="lazy" faz o navegador carregar a imagem só quando
      // ela está prestes a aparecer na tela — melhora muito a velocidade
      // da página quando há muitas imagens.
      fotosHTML = livro.fotos.map(f =>
        `<img src="assets/${f}" alt="Capa: ${livro.titulo}" loading="lazy" />`
      ).join(''); // join('') une todas as strings sem nenhum separador

    } else {
      fotosHTML = `
        <div class="livro-foto-placeholder">
          📖
          <span>capa em<br/>breve</span>
        </div>`;
    }

    // Monta o HTML do ano — só aparece se o campo "ano" não estiver vazio.
    // O operador ternário ( condição ? seVerdadeiro : seFalso ) é um
    // "if/else" em uma linha, muito usado em templates HTML assim.
    const anoHTML = livro.ano
      ? `<span class="livro-ano">Publicado em ${livro.ano}</span>`
      : '';

    // Monta o HTML da descrição — só aparece se houver texto.
    const descricaoHTML = livro.descricao
      ? `<p class="livro-descricao">${livro.descricao}</p>`
      : '';

    // Formata o número com dois dígitos: 1 → "01", 12 → "12".
    // String(index+1) converte o número para texto.
    // padStart(2, '0') garante que tenha pelo menos 2 caracteres,
    // preenchendo com "0" à esquerda se necessário.
    const numeroFormatado = String(index + 1).padStart(2, '0');

    // innerHTML define o conteúdo HTML interno do elemento criado.
    // Template literals (crase `) permitem escrever HTML em várias linhas
    // e inserir variáveis diretamente com ${ }.
    item.innerHTML = `
      <div class="livro-info">
        <span class="livro-numero">Livro ${numeroFormatado}</span>
        <h3 class="livro-titulo">${livro.titulo}</h3>
        ${descricaoHTML}
        ${anoHTML}
      </div>
      <div class="livro-fotos">
        ${fotosHTML}
      </div>
    `;

    // Adiciona o item ao container — agora ele aparece de fato na tela.
    container.appendChild(item);
  });
}


/* ============================================================
   3. BUSCA DE LIVROS
   ------------------------------------------------------------
   Filtra a lista de livros em tempo real enquanto o usuário digita.
   Não há envio de formulário nem chamada a servidor — tudo
   acontece localmente no navegador, de forma instantânea.
============================================================ */

const buscaInput = document.getElementById('busca-input');

if (buscaInput) {

  // O evento 'input' dispara a cada tecla pressionada.
  // É diferente de 'change', que só dispara ao sair do campo.
  // 'input' dá a sensação de busca ao vivo, letra por letra.
  buscaInput.addEventListener('input', () => {

    // Pega o texto digitado, converte para minúsculas e remove espaços
    // nas pontas. toLowerCase() garante que "Sala" encontre "sala de leitura"
    // — a busca não diferencia maiúsculas de minúsculas.
    const q = buscaInput.value.toLowerCase().trim();

    // Se o campo estiver vazio (q é uma string vazia, que é "falsy" em JS),
    // mostra todos os livros. Se tiver texto, filtra com .filter().
    // .filter() percorre o array e mantém só os elementos onde a função
    // retorna true — ou seja, onde o título contém o texto digitado.
    const filtrados = q
      ? livros.filter(l => l.titulo.toLowerCase().includes(q))
      : livros;

    // Redesenha a lista com o resultado filtrado.
    renderLivros(filtrados);
  });
}


/* ============================================================
   4. RENDERIZAR CONTOS E CRÔNICAS
   ------------------------------------------------------------
   Cria os cards da página "Contos e Crônicas" a partir do
   array "contos" definido em data.js.

   Cada card tem: título, tipo+data, trecho e botão "Ler mais".
   O índice ("i") de cada conto é guardado no botão via data-index,
   para sabermos qual conto abrir no modal quando o usuário clicar.
============================================================ */

function renderContos() {
  const container = document.getElementById('contos-lista');
  if (!container) return;

  contos.forEach((conto, i) => {
    const card = document.createElement('div');
    card.className = 'conto-card';

    // data-index="${i}" salva o número de posição do conto no botão.
    // Quando o usuário clicar, lemos esse número com dataset.index
    // para saber qual item do array "contos" abrir no modal.
    card.innerHTML = `
      <h3>${conto.titulo}</h3>
      <div class="conto-meta">
        ${conto.tipo}${conto.data ? ' · ' + conto.data : ''}
      </div>
      <p class="conto-trecho">${conto.trecho}</p>
      <button class="conto-ler-mais" data-index="${i}">Ler na íntegra →</button>
    `;
    container.appendChild(card);
  });

  // Event delegation: em vez de adicionar um listener em cada botão
  // individualmente, colocamos UM único listener no elemento pai (container).
  // Quando qualquer botão dentro dele é clicado, o evento "sobe" (bubble)
  // até o container, que verifica se foi um botão "ler mais" e age.
  // Vantagem: é mais eficiente e funciona mesmo para botões que forem
  // adicionados dinamicamente depois que a página já carregou.
  container.addEventListener('click', e => {
    if (e.target.classList.contains('conto-ler-mais')) {

      // parseInt converte a string "2" para o número inteiro 2,
      // necessário para usar como índice de array.
      const idx = parseInt(e.target.dataset.index);
      abrirModal(contos[idx]);
    }
  });
}


/* ============================================================
   5. MODAL DE LEITURA COMPLETA
   ------------------------------------------------------------
   O modal é uma janela que aparece sobre o conteúdo da página
   para exibir o texto completo de um conto, sem sair da página.

   Criamos o modal UMA VEZ (criarModal) e depois reutilizamos
   ele para qualquer conto (abrirModal / fecharModal), trocando
   apenas o conteúdo de texto dentro dele.

   A variável "modalOverlay" é declarada aqui fora das funções
   para que tanto criarModal quanto abrirModal/fecharModal
   consigam acessá-la. Isso é chamado de escopo de módulo.
============================================================ */

let modalOverlay; // começa como undefined; será preenchida em criarModal()

function criarModal() {

  // Cria o elemento do modal na memória do navegador.
  modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';

  // role="dialog" e aria-modal="true" são atributos de acessibilidade
  // que informam leitores de tela que isto é uma janela de diálogo.
  modalOverlay.innerHTML = `
    <div class="modal-box" role="dialog" aria-modal="true">
      <button class="modal-close" aria-label="Fechar">✕</button>
      <h2 id="modal-titulo"></h2>
      <div class="modal-meta" id="modal-meta"></div>
      <div class="modal-body" id="modal-body"></div>
    </div>
  `;

  // Adiciona o modal ao <body> do documento — agora existe no HTML,
  // mas ainda está invisível (display:none definido no CSS).
  document.body.appendChild(modalOverlay);

  // Fecha ao clicar no botão "✕".
  modalOverlay.querySelector('.modal-close').addEventListener('click', fecharModal);

  // Fecha ao clicar fora da caixa (no fundo escuro semi-transparente).
  // e.target === modalOverlay verifica se o clique foi EXATAMENTE no overlay,
  // não dentro da caixa branca — assim clicar no texto não fecha o modal.
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) fecharModal();
  });

  // Fecha ao pressionar a tecla Escape — comportamento esperado pelo usuário
  // em qualquer modal/diálogo na web.
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') fecharModal();
  });
}

function abrirModal(conto) {

  // Preenche os elementos do modal com os dados do conto escolhido.
  // Usamos textContent (não innerHTML) para conteúdo que vem do usuário —
  // é mais seguro porque trata o texto como texto puro, não como HTML,
  // evitando que caracteres como < e > causem problemas.
  document.getElementById('modal-titulo').textContent = conto.titulo;
  document.getElementById('modal-meta').textContent =
    `${conto.tipo}${conto.data ? ' · ' + conto.data : ''}`;
  document.getElementById('modal-body').textContent = conto.texto;

  // Adiciona "open" ao overlay — no CSS isso muda display:none para flex,
  // fazendo o modal aparecer centralizado na tela.
  modalOverlay.classList.add('open');

  // Trava o scroll da página de fundo enquanto o modal está aberto.
  // Sem isso, o usuário conseguiria rolar a página por baixo do modal
  // enquanto lê, o que seria confuso.
  document.body.style.overflow = 'hidden';
}

function fecharModal() {

  // Remove "open" — o modal volta a ficar invisível.
  modalOverlay.classList.remove('open');

  // Libera o scroll da página novamente.
  document.body.style.overflow = '';
}


/* ============================================================
   6. RENDERIZAR PÁGINA "SOBRE MIM"
   ------------------------------------------------------------
   Preenche o texto da biografia e a lista de curiosidades
   a partir dos dados definidos em data.js.
============================================================ */

function renderSobre() {

  // Insere o texto da biografia no elemento correspondente.
  // A variável "biograifa" (com esse nome) vem do data.js —
  // mantemos igual para não quebrar a referência entre os arquivos.
  const bio = document.getElementById('sobre-bio');
  if (bio) bio.textContent = biograifa;

  // Cria um elemento visual para cada curiosidade e insere na lista.
  const lista = document.getElementById('curiosidades-lista');
  if (!lista) return;

  curiosidades.forEach(c => {
    const item = document.createElement('div');
    item.className = 'curiosidade-item';

    // O emoji fica num <span> separado para facilitar o alinhamento
    // com CSS — assim conseguimos alinhar o ícone e o texto em colunas.
    item.innerHTML = `
      <span class="curiosidade-icon">${c.icone}</span>
      <span class="curiosidade-texto">${c.texto}</span>
    `;
    lista.appendChild(item);
  });
}


/* ============================================================
   7. RENDERIZAR REDES SOCIAIS
   ------------------------------------------------------------
   Cria os botões de redes sociais na página de Contato
   a partir do array "redesSociais" do data.js.
============================================================ */

function renderRedes() {
  const lista = document.getElementById('redes-lista');
  if (!lista) return;

  redesSociais.forEach(r => {
    const link = document.createElement('a');
    link.className = 'rede-link';
    link.href = r.url;

    // target="_blank" abre o link em uma nova aba — padrão para links externos,
    // para o usuário não sair do site sem querer.
    link.target = '_blank';

    // rel="noopener noreferrer" é uma medida de segurança:
    // "noopener" impede que a nova aba acesse esta via window.opener
    // (uma vulnerabilidade conhecida em links target="_blank").
    // "noreferrer" impede que o destino saiba de qual página veio o clique.
    link.rel = 'noopener noreferrer';

    link.innerHTML = `<span class="rede-icon">${r.icone}</span> ${r.nome}`;
    lista.appendChild(link);
  });
}


/* ============================================================
   8. FORMULÁRIO DE CONTATO
   ------------------------------------------------------------
   Ao enviar o formulário, abre o cliente de email do usuário
   (Gmail app, Outlook, etc.) já com destinatário, assunto e
   corpo da mensagem preenchidos — via o protocolo "mailto:".

   Por que mailto e não um servidor real?
   - Este site é 100% front-end, sem back-end ou servidor.
   - Para receber emails sem servidor próprio seria necessário
     um serviço externo (Formspree, EmailJS, etc.).
   - mailto: é simples e gratuito para começar.
   - No futuro, se quiser trocar, basta substituir esta função.

   Esta função é chamada pelo atributo onsubmit no HTML:
   <form onsubmit="handleContato(event)">
   O "event" passado é o objeto que representa o envio do form.
============================================================ */

function handleContato(e) {

  // e.preventDefault() impede o comportamento padrão do formulário,
  // que seria recarregar a página inteira ao ser submetido.
  e.preventDefault();

  const form = e.target; // referência ao elemento <form> que foi enviado
  const nome = form.nome.value;

  // ⚠️ IMPORTANTE: Troque pelo email real da Socorro antes de publicar!
  const emailDestino = 'socorrocapiberibe@email.com';
  const mensagem = form.mensagem.value;

  // encodeURIComponent() converte caracteres especiais para o formato
  // seguro de URL. Ex: "olá, tudo bem?" vira "ol%C3%A1%2C%20tudo%20bem%3F"
  // Isso é necessário porque o link mailto: é uma URL — sem essa conversão,
  // acentos e pontuação poderiam quebrar o link.
  const mailto = `mailto:${emailDestino}`
    + `?subject=${encodeURIComponent('Mensagem de ' + nome)}`
    + `&body=${encodeURIComponent(mensagem)}`;

  // Redireciona para o link mailto: — o navegador interpreta isso como
  // uma instrução para abrir o aplicativo de email padrão do sistema.
  window.location.href = mailto;

  // Substitui o formulário por uma mensagem de confirmação visual.
  // closest() sobe na árvore HTML a partir do <form> até encontrar o
  // primeiro elemento ancestral com a classe indicada.
  // Isso é mais robusto do que depender de um id fixo no HTML.
  form.closest('.contato-content').innerHTML = `
    <div class="form-sucesso">
      <div class="check">💌</div>
      <p>
        <strong>Obrigada por entrar em contato!</strong><br/>
        Seu cliente de e-mail foi aberto com a mensagem pronta para enviar.
      </p>
    </div>
  `;
}


/* ============================================================
   9. ANO NO RODAPÉ
   ------------------------------------------------------------
   Atualiza o ano exibido no rodapé automaticamente todo ano.
   new Date() cria um objeto representando o momento atual.
   getFullYear() extrai apenas o ano como número (ex: 2025).
   Assim o site nunca exibe um ano desatualizado no copyright.
============================================================ */

const anoEl = document.getElementById('ano');
if (anoEl) anoEl.textContent = new Date().getFullYear();


/* ============================================================
  10. INICIALIZAÇÃO
   ------------------------------------------------------------
   Estas chamadas de função executam assim que o navegador
   termina de carregar o main.js — ou seja, quando a página abre.
   Elas disparam toda a renderização do conteúdo dinâmico.

   A ordem importa:
   - criarModal() deve rodar ANTES de renderContos(), porque
     renderContos() configura botões que chamam abrirModal(),
     e abrirModal() depende de modalOverlay já ter sido criado.
   - As demais podem rodar em qualquer ordem entre si.
============================================================ */

renderLivros(livros);  // Desenha todos os livros na home
renderContos();        // Desenha os cards de contos e crônicas
criarModal();          // Cria a janela de leitura (antes dos botões de "ler mais" serem usados)
renderSobre();         // Preenche a biografia e as curiosidades
renderRedes();         // Cria os botões de redes sociais na página de contato
