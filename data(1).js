/**
 * ========================================================
 *  DATA.JS — Arquivo de conteúdo do site de Socorro Capiberibe
 * ========================================================
 *
 *  COMO EDITAR ESTE ARQUIVO:
 *  Basta abrir no Bloco de Notas (ou qualquer editor de texto)
 *  e seguir os exemplos abaixo.
 *
 *  DICAS IMPORTANTES:
 *  - Textos ficam entre aspas: "assim"
 *  - Cada item é separado por vírgula
 *  - NÃO apague os colchetes [ ] nem as chaves { }
 *  - Salve o arquivo e reabra o site no navegador para ver as mudanças
 * ========================================================
 */


/* -------------------------------------------------------
   SOBRE MIM — Texto da biografia
------------------------------------------------------- */
const biograifa = `Nascida em João Pessoa, Paraíba no dia 8 de março de 1955, desde cedo mostrei interesse nas artes, especialmente a música e a escrita. Em 1976, concluí minha graduação de Biblioteconomia pela UFPE (Universidade Federal de Pernambuco) e no ano de 1999 publiquei meu primeiro livro entitulado: "Estórias que a Vida Escreveu".`;


/* -------------------------------------------------------
   CURIOSIDADES
   Para adicionar uma nova: copie um bloco { ... },
   cole no final da lista (antes do ] ) e edite.
   Escolha um emoji que combine no campo "icone".
------------------------------------------------------- */
const curiosidades = [
  {
    icone: "📚",
    texto: "Já publiquei mais de 13 livros ao longo da minha vida."
  },
  {
    icone: "🎵",
    texto: "Além de escritora, sou apaixonada por música desde a infância."
  },
  {
    icone: "🏛️",
    texto: "Me formei em Biblioteconomia pela UFPE em 1976."
  },
  {
    icone: "✍️",
    texto: "Meu primeiro livro, 'Estórias que a Vida Escreveu', foi publicado em 1999."
  },
  {
    icone: "💕",
    texto: "Adoro receber mensagens dos leitores — cada história compartilhada é um presente!"
  }
];


/* -------------------------------------------------------
   LIVROS
   Para adicionar um livro: copie um bloco { ... },
   cole no final da lista (antes do ] ) e edite.

   Campos disponíveis:
   - "titulo": nome do livro (aparece em destaque e na busca)
   - "descricao": texto curto sobre o livro (1 a 3 frases)
   - "ano": ano de publicação — deixe "" se não quiser mostrar
   - "fotos": nomes das imagens dentro da pasta assets/
       Exemplo: ["vida-contos-frente.jpg", "vida-contos-verso.jpg"]
       Se ainda não tiver foto, deixe fotos: []
------------------------------------------------------- */
const livros = [
  {
    titulo: "A Vida Através dos Contos",
    descricao: "Uma coletânea de contos que capturam momentos da vida cotidiana com sensibilidade e poesia.",
    ano: "",
    fotos: []
  },
  {
    titulo: "Sala de Leitura (2ª edição)",
    descricao: "Segunda edição revisada e ampliada da obra que convida o leitor a mergulhar no universo da leitura como transformação.",
    ano: "",
    fotos: []
  },
  {
    titulo: "Associação dos Amigos dos Pacientes de Físico em Recife — Ampare: 40 anos",
    descricao: "Registro histórico e afetivo dos 40 anos de uma associação que faz a diferença na vida de pacientes e famílias.",
    ano: "",
    fotos: []
  },
  {
    titulo: "Estórias que a Vida Escreveu",
    descricao: "O primeiro livro publicado, em 1999. Histórias retiradas do cotidiano que revelam a beleza escondida nas pequenas coisas.",
    ano: "1999",
    fotos: []
  },
  {
    titulo: "Armadilhas do Coração",
    descricao: "Narrativas sobre amor, perda e recomeço — histórias que tocam fundo porque falam de nós mesmos.",
    ano: "",
    fotos: []
  },
  {
    titulo: "Coisas que a Vida me Contou",
    descricao: "Reflexões e crônicas nascidas da observação atenta do mundo ao redor, escritas com leveza e profundidade.",
    ano: "",
    fotos: []
  },
  {
    titulo: "De Geração a Geração (1ª edição)",
    descricao: "Uma obra sobre memória, família e o fio invisível que conecta as gerações através do tempo.",
    ano: "",
    fotos: []
  },
  {
    titulo: "SOCORROCAPIBERIBE.COM VOCÊ Face a Face",
    descricao: "Um encontro direto com o leitor — pensamentos, experiências e reflexões compartilhadas de forma pessoal e íntima.",
    ano: "",
    fotos: []
  },
  {
    titulo: "O Fantasma do Físico ou o Panela do Paço Como Eles Esqueceu?",
    descricao: "Narrativa que mescla memória e imaginação, resgatando personagens e histórias de um passado marcante.",
    ano: "",
    fotos: []
  },
  {
    titulo: "Primavera no Campo",
    descricao: "Poesia e prosa se encontram nesta obra que celebra a natureza, a renovação e a beleza do recomeço.",
    ano: "",
    fotos: []
  },
  {
    titulo: "A Arte de Contar Histórias",
    descricao: "Um olhar apaixonado sobre o ato de narrar — o que nos move a contar, e por que as histórias nos salvam.",
    ano: "",
    fotos: []
  },
  {
    titulo: "De Geração a Geração (2ª edição)",
    descricao: "Edição revisada e enriquecida da obra sobre os laços que atravessam o tempo e unem famílias.",
    ano: "",
    fotos: []
  },
  {
    titulo: "Tantas são as Histórias de Amor",
    descricao: "Uma celebração do amor em suas muitas formas — romântico, materno, fraternal, e aquele que a gente sente pela própria vida.",
    ano: "",
    fotos: []
  }
];


/* -------------------------------------------------------
   CONTOS E CRÔNICAS
   Para adicionar um conto: copie um bloco { ... },
   cole no final da lista e edite.
   - "tipo": pode ser "Conto" ou "Crônica"
   - "data": data de publicação (pode deixar vazio "")
   - "trecho": primeiras linhas que aparecem no card
   - "texto": texto completo (aparece ao clicar "Ler mais")
     Use \n\n para separar parágrafos.
------------------------------------------------------- */
const contos = [
  {
    titulo: "O Dia que a Chuva Chegou",
    tipo: "Crônica",
    data: "Março de 2024",
    trecho: "Era uma tarde de abril quando as primeiras gotas tocaram o telhado de zinco. Aquele barulho sempre me levou de volta à infância, ao quintal da minha avó...",
    texto: `Era uma tarde de abril quando as primeiras gotas tocaram o telhado de zinco. Aquele barulho sempre me levou de volta à infância, ao quintal da minha avó, onde a chuva era festa e não inconveniência.

A gente corria para debaixo da mangueira como se aquilo fosse proteção — era, claro que era, mas de um jeito que só a infância entende. Proteção contra o tédio, contra a seriedade, contra o peso dos anos que ainda não tínhamos.

Hoje, a chuva bate nas janelas fechadas do apartamento e eu escuto de longe. Mas se eu fechar os olhos, ainda consigo sentir a lama entre os dedos.`
  },
  {
    titulo: "A Carta que Nunca Cheguei a Enviar",
    tipo: "Conto",
    data: "Janeiro de 2024",
    trecho: "Querida amiga de tantos anos, começo esta carta sabendo que jamais chegará às suas mãos. Mas há palavras que precisam existir em algum lugar — mesmo que seja só no papel...",
    texto: `Querida amiga de tantos anos,

Começo esta carta sabendo que jamais chegará às suas mãos. Mas há palavras que precisam existir em algum lugar — mesmo que seja só no papel, mesmo que o papel acabe numa gaveta esquecida.

Você me ensinou que amizade não tem prazo de validade. Que a gente pode ficar anos sem se ver e, quando finalmente se encontra, o tempo colapsa como se nunca tivesse passado. Tínhamos esse dom raro.

Guardo você no melhor lugar que existe: naquelas memórias que a gente sorri sozinha, sem precisar explicar para ninguém.

Com carinho eterno,
Socorro`
  },
  {
    titulo: "Receita de Saudade",
    tipo: "Crônica",
    data: "Novembro de 2023",
    trecho: "Ingredientes: uma foto antiga, um cheiro de comida que não se encontra mais em restaurante nenhum, e aquela música que tocava no rádio quando você tinha doze anos...",
    texto: `Ingredientes: uma foto antiga, um cheiro de comida que não se encontra mais em restaurante nenhum, e aquela música que tocava no rádio quando você tinha doze anos.

Modo de preparo: misture tudo numa tarde de domingo sem compromisso. Deixe repousar por alguns minutos — ou horas, se deixar. Não tem tempo certo.

Sirva frio ou quente, tanto faz. A saudade não tem temperatura. Ela tem textura: é aquele aperto no peito que dói e que, ao mesmo tempo, você não trocaria por nada.

Rende: uma vida inteira de histórias para contar.`
  }
];


/* -------------------------------------------------------
   REDES SOCIAIS E CONTATO
   Edite os links com seus perfis reais.
   Para remover uma rede, apague o bloco { ... } dela.
------------------------------------------------------- */
const redesSociais = [
  {
    nome: "Instagram",
    icone: "📸",
    url: "https://instagram.com/socorrocapiberibe"
  },
  {
    nome: "Facebook",
    icone: "📘",
    url: "https://facebook.com/socorrocapiberibe"
  },
  {
    nome: "WhatsApp",
    icone: "💬",
    url: "https://wa.me/5581900000000"
  }
];
