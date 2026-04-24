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
    descricao: " 'Ser jovem, mesmo aos oitenta, Sentir que pode sonhar... Não se deixar vencer pelo cansaço...'",
    ano: "",
    fotos: ["imagens/livros/a-vida-atraves-dos-contos-capa.jpeg","imagens/livros/a-vida-atraves-dos-contos-verso.jpeg"]
  },
  {
    titulo: "Sala de Leitura (2ª edição)",
    descricao: "Segunda edição revisada e ampliada da obra que convida o leitor a mergulhar no universo da leitura como transformação.",
    ano: "",
    fotos: ["imagens/livros/sala-de-leitura-2-capa.jpeg","imagens/livros/sala-de-leitura-2-verso.jpeg"]
  },
  {
    titulo: "AMPARE — 10 anos",
    descricao: "Registro histórico e afetivo dos 10 anos de uma associação que faz a diferença na minha vida, na vida de pacientes e famílias.",
    ano: "",
    fotos: ["imagens/livros/ampare-10-anos-capa.jpeg","imagens/livros/ampare-10-anos-verso.jpeg"]
  },
  {
    titulo: "Estórias que a Vida Escreveu",
    descricao: "O meu primeiro livro publicado, em 1999. Histórias retiradas do cotidiano que revelam a beleza escondida nas pequenas coisas.",
    ano: "",
    fotos: ["imagens/livros/estorias-que-a-vida-escreveu-capa.jpeg","imagens/livros/estorias-que-a-vida-escreveu-verso.jpeg"]
  },
  {
    titulo: "Armadilhas do Coração",
    descricao: "Meu quarto livro lançado e o primeiro do gênero de romance.",
    ano: "",
    fotos: ["imagens/livros/armadilhas-do-coracao-capa.jpeg","imagens/livros/armadilhas-do-coracao-verso.jpeg"]
  },
  {
    titulo: "Contos que a Vida me Contou",
    descricao: "Uma coletânea de contos contadas por mim.",
    ano: "",
    fotos: ["imagens/livros/contos-que-a-vida-me-contou-capa.jpeg","imagens/livros/contos-que-a-vida-me-contou-verso.jpeg"]
  },
  {
    titulo: "De Geração a Geração (1ª edição)",
    descricao: "Uma obra sobre memória, família e o fio invisível que conecta as gerações através do tempo.",
    ano: "",
    fotos: ["imagens/livros/de-geracao-a-geracao-1-edicao-capa.jpeg","imagens/livros/de-geracao-a-geracao-1-edicao-verso.jpeg"]
  },
  {
    titulo: "SOCORROCAPIBERIBE.COM VOCÊ Face a Face",
    descricao: " 'Certa vez li de um poeta, que a LÁGRIMA é quando a saudade é tanta que não cabe mais no peito e, então, vasa pelos olhos...' ",
    ano: "",
    fotos: ["imagens/livros/socorro-capiberibe-face-a-face-capa.jpeg","imagens/livros/socorro-capiberibe-face-a-face-verso.jpeg"]
  },
  {
    titulo: "O Fantasma do Pânico ou o Fundo do Poço: Como Esquecer?",
    descricao: "Livro que visa explorar ser acometido pela síndrome do pânico e como não deixarmos ele nos dominar.",
    ano: "",
    fotos: ["imagens/livros/fantasma-do-panico-capa.jpeg","imagens/livros/fantasma-do-panico-verso.jpeg"]
  },
  {
    titulo: "Primavera no Campo",
    descricao: "Meu primeiro livro, escrito nos meus 17 anos. Um romance simples sobre o 'ser criança'. ",
    ano: "",
    fotos: ["imagens/livros/primavera-no-campo-capa.jpeg","imagens/livros/primavera-no-campo-verso.jpeg"]
  },
  {
    titulo: "A Arte de Contar Histórias",
    descricao: "Um olhar apaixonado sobre o ato de narrar — o que nos move a contar, e por que as histórias nos salvam.",
    ano: "",
    fotos: ["imagens/livros/arte-de-contar-historias-capa.jpeg","imagens/livros/arte-de-contar-historias-verso.jpeg"]
  },
  {
    titulo: "De Geração a Geração (2ª edição)",
    descricao: "Edição revisada e enriquecida da obra sobre os laços que atravessam o tempo e unem famílias.",
    ano: "",
    fotos: ["imagens/livros/de-geracao-a-geracao-2-edicao-capa.jpeg","imagens/livros/de-geracao-a-geracao-2-edicao-verso.jpeg"]
  },
  {
    titulo: "Tantas são as Histórias de Amor",
    descricao: "Um romance sobre celebração do amor em suas muitas formas — romântico, materno, fraternal, e aquele que a gente sente pela própria vida.",
    ano: "",
    fotos: ["imagens/livros/tantas-sao-as-historias-de-amor-capa.jpeg","imagens/livros/tantas-sao-as-historias-de-amor-verso.jpeg"]
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
    titulo: "A ESTRELINHA QUE FICOU – ( DO LIVRO CONTOS & LENDAS ORIENTAIS DE MALBA TAHAN)",
    tipo: "Conto",
    data: "Abril de 2026",
    trecho: "Era uma tarde de abril quando as primeiras gotas tocaram o telhado de zinco. Aquele barulho sempre me levou de volta à infância, ao quintal da minha avó...",
    texto: `O caso que vou narrar, meu amigo, aconteceu há muitos e muitos anos. As estrelinhas do céu resolveram, certa vez, deixar as alturas em que vivem. 
Deixariam o céu e viriam todas a Terra. “Vamos para a Terra! Vamos para a Terra!" – gritavam com alegria as estrelinhas do céu. 
– Na Terra há mares, há rios e há florestas! Na terra há frutos, há flores e há perfumes. 
Vamos todas para a Terra! As estrelinhas falaram ao Anjo da Serena Compaixão. 
Esse Anjo da Serena Compaixão é que vigia e comanda, por ordem de Deus, todos os astros luminosos do céu. 
O anjo da Serena Compaixão sabia que as estrelas, que parecem, lá longe no céu , tão pequeninas, são grandes , imensas.
E foi, por isso, falar a Deus, O Senhor da Eterna Bondade: “Deus Poderoso, as estrelinhas do céu querem ir para a Terra. 
Mas são pesadas enormes e cheias de calor. A Terra não poderia conter constelações que povoam o céu. 
Deus, O Senhor do Mundo, sorriu bondoso e respondeu: Ora, tudo é muito simples. 
Eu permitirei que as estrelinhas desçam do céu e passem a viver na Terra.
Sim, irão para a Terra. Mas elas descerão e permanecerão, assim pequeninas, como aparecem lá nas alturas; pequeninas e bem pequeninas.
E sempre pequeninas e brilhantes permanecerão na Terra. Houve, neste dia, ao cair da noite, uma chuva maravilhosa de estrelas. No céu ficaram o sol, a lua e um cometa rabugento, de cauda comprida, que não quis descer. Mas as estrelas desceram. Desceram e encheram a Terra. Espalharam –se por toda parte . pelos campos, pelas praias, pelas estradas e pelos jardins. Havia estrelinhas brancas, azuis, verdes, roxas, amarelas. Havia até (vejam só!) uma estrela furta-cor! Que beleza ! Algumas ficaram bem quietinhas, a cintilar, no alto das torres; vieram outras pousar nas fontes, nos repuxos, ou saltitar entre as flores e iluminar os bosques. As mais pequeninas, brincalhonas, apostavam corrida com os vaga-lumes: outras iam devagarzinho assustar os sapos que cochilavam tranqüilos entre as pedras junto das lagoas. Que alegria para as crianças! Que alegria! Mas no fim de poucos dias as estrelinhas começaram a fugir da Terra, aos grupos, aos bandos. Deixaram a Terra e voltavam para o céu. Voltavam a brilhar lá em cima, para além das nuvens, para além da Lua. O anjo da Serena Compaixão ao observar que as estrelinhas voltavam, interrogou-as: “Por que vocês voltaram?” A primeira estrela respondeu: Vi tanta maldade na terra que fiquei triste, muito triste, e resolvi voltar para o céu. Outra estrela, sendo interrogada, disse ao Anjo: Na Terra senhor vi egoísmo, vi ingratidão e perfídias! Vi filhos falando grosseiramente com seus pais! Vi fracos perseguidos e espancados pelos fortes. Meu coração ficou abalado. E por isso, e só por isso, resolvi voltar para o céu. E assim todas as estrelinhas, por terem visto maldades na Terra, voltaram ao céu. E cada uma, ao chegar, ia muito quietinha, retomar o seu antigo lugar no meio das constelações. O anjo contou-as uma a uma e percebeu que vinte mil e seis estrelinhas tinham voltado. Estranhou o anjo a conta pois faltava uma estrela para completar o número das que tinham descido a Terra. E as estrelas lhe contaram que a estrelinha verde da esperança, boa e velha companheira, não havia voltado. A estrela verde da Esperança! É por isso, meu amigo, que os homens, todos os homens, nos momentos mais tristes da vida, nos momentos de perigo, de dor ou de aflição, nunca perdem a esperança... É que a estrelinha da esperança, nossa boa amiga, deixou o céu e veio (diz a lenda) viver na Terra. Foi a única que ficou e vive, para sempre, no coração dos Homens.`
},
  {
    titulo: "UMA PAUSA PARA A REFLEXÃO // DEIXANDO UM DE MIM...",
    tipo: "Reflexão",
    data: "Janeiro de 2026",
    trecho: "Querida amiga de tantos anos, começo esta carta sabendo que jamais chegará às suas mãos. Mas há palavras que precisam existir em algum lugar — mesmo que seja só no papel...",
    texto: `A vida é e sempre será a nossa riqueza de maior valor. Viva hoje. Viva agora. Não deixe nada para depois.
O futuro não é garantido a ninguém. 
Só temos de certo o momento presente e a certeza de que a qualquer momento a música da vida vai terminar.
Então, dancemos felizes ao som dessa orquestra Divina, até o último acorde dessa maravilhosa canção!

Com carinho,
Socorro Capiberibe`
  },
  {
    titulo: "SALA DE LEITURA // DE VOLTA NO TEMPO... // SOCORRO CAPIBERIBE COM VOCÊ: ",
    tipo: "Colagem literária",
    data: "Março de 2026",
    trecho: "AS CANÇÕES QUE VOCÊ FEZ PRA MIM, NAS JOVENS TARDES DE DOMINGO... (Para os Jovens de 70... Como EU... Quem viveu essa época vai lembrar.)",
    texto: `"AS CANÇÕES QUE VOCÊ FEZ PRA MIM, NAS JOVENS TARDES DE DOMINGO... (Para os Jovens de 70... Como EU... Quem viveu essa época vai lembrar.)
"Hoje eu acordei com saudade de você / beijei aquela foto que você me ofertou / sentei naquele banco da pracinha só por que/foi lá que começou o nosso amor... "
"Lembrei-me com saudade da escolinha / que viu um dia o nosso amor nascer / e foi como se visse a menininha / de olhos verdes lindos de morrer / aquele bilhetinho hoje me faz / lembrar um tempo que não volta mais / dizia mesmo assim / te contarei depois / mamãe sabe de tudo entre nós dois... "
"Sei que é muito feio / um rapaz chorar / mas tenho receio / de não suportar / sua ausência que me acaba e até me alucina / eu não me imagino namorando outra  menina... /Quando você sorriu pra mim e disse... "Rasgue as minhas cartas e não me procure mais / que assim será melhor meu bem / o retrato que eu te dei / se ainda tens não sei / mas se tiver devolva-me / deixe-me sozinha porque assim eu viverei em paz... "
"Quando você sorriu pra mim e disse Adeus, a primeira lágrima caiu dos olhos meus."
"Eu não aceito o seu adeus... / você bem sabe que eu preciso de você / Não é verdade o que falei / eu nunca te esqueci, amor... "
"Fui seu primeiro namorado / tive tanto, tanto cuidado / pra você confiar em mim / mas você pensou / que eu fosse tão ruim... / hoje em sua casa não vou mais / meu caminho tão sozinho agora eu sigo / pois até o seu irmão / não quer mais ser meu amigo... "
" Na festa dos seus quinze anos / mais uma vela se acendeu / você estava tão bonita / mas nem sequer me percebeu / de longe eu olhava pra você / eu olhava pra você... / Notei que você só dançava / com gente que eu não conhecia / por fora eu me controlava / mas por dentro eu morria / de longe eu olhava pra você / eu olhava pra você..." 
"Toda vez que chove eu me lembro da garota quase sonho que me deu tanta emoção / e ao lembrar eu sinto novamente seu perfume envolvente que me aperta o coração..."
"Não te esquecerei, não te esquecerei, meu eterno amor / não sei viver, não sei viver / sem o teu calor / que será da lua, que será da lua /se não anoitecer / que será de mim, que será de mim /tão longe de você?... "
"Senti que os passarinhos todos me reconheceram / e eles entenderam toda minha solidão / ficaram tão tristonhos que até emudeceram / ai então eu fiz esta canção... "
"Onde você estiver não se esqueça de mim... / Com quem você estiver não se esqueça de mim / Eu quero apenas estar no seu pensamento / por um momento pensar / que você pensa em mim... / Onde você estiver / não se esqueça de mim / quando você se lembrar não se esqueça que eu... / que eu não consigo tirar você da minha vida / onde você estiver não se esqueça de mim... "
"A mesma praça / o mesmo banco / as mesmas flores / o mesmo jardim / tudo é igual / mas estou triste / porque não tenho você perto de mim... "
"Você jamais saberá, querida... / a falta que você faz em mim /  meu coração se nega a pensar em outro alguém / ele não quer que eu seja de mais ninguém... "
" O guarda ainda é o mesmo que um dia me pegou / roubando uma rosa amarela pra você / ainda tem balanço, tem gangorra meu amor / crianças que não param de correr / aquele bom velhinho pipoqueiro foi quem viu / quando envergonhado de namoro eu lhe falei / ainda é o mesmo sorveteiro que assistiu / ao primeiro beijo que eu te dei... "
" Aquele beijo que eu te dei / nunca, nunca mais esquecerei / na noite linda de luar / lua testemunha tão vulgar / lembro de você e fico triste / até me dá  vontade de chorar / de lembrar que o amor não mais existe / não mais existe, mas eu sempre hei de te amar... "
"Meu amor está tão longe de mim / meu bem não seja tão ruim / escreva uma carta meu amor / e diga alguma coisa, por favor... / o beijo que você me deu / eu guardo até hoje o calor / escreva uma carta meu amor / e mande outro beijo por favor... "
" Eu pensei em lhe falar... / quase fui lhe procurar / mas evitei e aqui fiquei / sofrendo tanto a esperar / que um dia você por fim / talvez voltasse pra mim / mas me enganei / e então eu vi / o longo tempo que eu perdi... /E agora eu não sei mais por que / não consigo lhe esquecer / eu quero lhe pedir para deixar / pelo menos lhe encontrar pra dizer..."
"Como vai você? / Eu preciso saber da sua vida... / peço a alguém pra me contar sobre o seu dia / anoiteceu e eu preciso só saber / Como vai você / que já modificou a minha vida / razão da minha paz tão esquecida / nem sei se gosto mais de mim ou de você... "
"Beijei aquela árvore tão linda onde eu... / com o meu canivete um coração eu desenhei / escrevi no coração meu nome junto ao seu / ser seu grande amor então jurei... A gente vai crescendo, vai crescendo e o tempo passa / mas nunca esquece a felicidade que encontrou / eu sempre vou lembrar do nosso banco lá da praça / Foi lá que começou o nosso amor..." 
"Detalhes tão pequenos de nós dois / são coisas muito grandes pra esquecer / e a toda hora vão estar presentes / você vai ver... "
"A mesma praça / o mesmo banco / as mesmas flores / o mesmo jardim / tudo é igual / mas estou triste / porque não tenho você perto de mim... "
"De que vale tudo isso... / se você não está aqui? / 
De que vale tudo isso... / Se você não está aqui.../
"Eu daria a minha vida para te esquecer / eu daria a minha vida pra não mais te ver / mas existe em mim um coração apaixonado / que diz só pra mim / que eu daria a minha vida pra você voltar / que eu daria a minha vida pra você ficar."
"Sei tudo que o amor é capaz de me dar / eu sei, já sofri... mas não deixo de amar /Se chorei ou se sorri, o importante é que emoções eu vivi."
"Hoje eu ouço as canções que você fez pra mim / não sei porque razão tudo mudou assim / ficaram as canções / mas você não ficou..."
"Canções usavam formas simples pra falar de amor / carrões e gente numa festa de sorriso e cor / jovens tardes de domingo tantas alegrias / velhos tempos / belos dias / hoje os meus domingos são doces recordações / daquelas tardes de guitarras, sonhos e emoções / o que foi felicidade me mata hoje de saudade / velhos tempos / belos dias..."
"Estou guardando o que há de bom em mim / para lhe dar quando você voltar / toda ternura e todo o meu amor / estou guardando pra te dar..."
"Ah, se eu fosse você... / eu voltava pra mim... "
"A mesma praça / o mesmo banco / as mesmas flores / o mesmo jardim / tudo é igual / mas estou triste / porque não tenho você perto de mim."
"De que vale tudo isso... / se você não está aqui? / 
De que vale tudo isso... / Se você não está aqui.../
"Ah, se eu fosse você... / eu voltava pra mim..."
Hoje eu ouço as canções que você fez pra mim e lembro com saudade das jovens tardes de domingo, quando canções usavam formas simples pra falar de amor e Ronnie Von, Roberto Carlos, Renato e seus blue caps, Golden boys, Leno e Lílian, Antonio Marcos e toda uma turma de cantores jovens embalavam os sonhos da JOVEM GUARDA... Inclusive, os meus! E, os seus???
(Décadas de ´60 e ´70 - Trechos das músicas: A Praça / O Bilhetinho / A primeira Lágrima / Devolva-me / Eu não aceito o seu adeus / A irmã do meu melhor amigo / A Festa dos seus quinze anos / Pensando nela / Não te esquecerei / Não se esqueça de mim / Eu vou ter sempre você / Aquele beijo que eu te dei / Escreva uma carta meu amor / De que vale tudo isso...? / Quase fui lhe procurar / Como vai você...? / Detalhes / De que vale tudo isso? / Eu daria minha vida / Emoções / As canções que você fez pra mim / Jovens tardes de domingo / Ah, se eu fosse você... Eu voltava pra mim.).`
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
