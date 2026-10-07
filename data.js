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
    texto: "Já publiquei mais de 10 livros ao longo da minha vida."
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
    texto: "Meu primeiro livro escrito, 'PRIMAVERA NO CAMPO', foi feito por mim aos meus 15 anos."
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
    titulo: "Uma Lição de Amor ",
    descricao: "Um singelo romance que retrata a vida de um casal que em meio aos estresses do dia-a-dia busca a continuação do casamento e a preservação da família.",
    fotos: ["imagens/livros/uma-licao-de-amor-capa.jpeg","imagens/livros/uma-licao-de-amor-verso.jpeg"]
  },
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
   - "trecho": primeiras linhas que aparecem no card
   - "texto": texto completo (aparece ao clicar "Ler mais")
     Use \n\n para separar parágrafos.
   titulo:"",
   tipo:"",
   trecho:"",
   imagens:[],
   texto:``
------------------------------------------------------- */
const contos = [
  {
    titulo:"CANTINHO DO POETA/SOCORRO CAPIBERIBE (DEIXANDO UM POUQUINHO DE MIM...",
   tipo:"",
   trecho:"Leve a alegria e os sonhos da mocidade com você...",
   imagens:["imagens/IMG-20261007-WA0009-imageonline.co-merged.jpg"],
   texto:`
*CAMINHOS DA VIDA*
*Socorro Capiberibe

"Minha Criança,
Não tenha pressa em crescer...
A infância é o tempo mais curto da vida...
Passa num piscar de olhos...
Passa num estalar de dedos...
Dorme-se criança... 
E acorda-se adulto.

Meu jovem, 
Não queira deter o tempo...
A juventude é breve e fugaz...
Passa num bater de asas...
Passa num soprar dos ventos...
Tal qual uma ave ligeira, Passa depressa demais.

Guarde um pouco da ternura da infância na bagagem,
Leve a alegria e os sonhos da mocidade com você...

Precisa-se de tudo um pouco nessa viagem... 
Não esqueça dos segredos e delícias de cada idade...
Não se detenha nos planos... Atenha-se mais em viver!

E quando o outono da vida chegar,
Contemple esse entardecer
Que a brisa desse outono traz
E leva o espírito a vagar
Pelas lembranças felizes da infância esquecida...
Pelos sonhos mais belos da juventude vivida...
Com a sabedoria que só a vida pode oferecer!"

*Socorro Capiberibe

Para meus netos: Marcos Roberto, João Victor e Maria Clara, com todo amor de Vovó Socorrinho ❤️
`
  },
  {
  titulo:"QUEM PRESTA O FAVOR, NÃO DEVE LEMBRAR... QUEM RECEBE O FAVOR, NÃO PODE ESQUECER!",
   tipo:"Conto",
   trecho:"Mas vamos voltar aquela citação inicial... Aquele ensinamento de minha mãe... ",
   imagens:["imagens/IMG-20261007-WA0011.jpg"],
   texto:`"QUEM PRESTA O FAVOR, NÃO DEVE LEMBRAR... QUEM RECEBE O FAVOR, NÃO PODE ESQUECER!"

Certa vez ouvi isso de minha Mãe e jamais esqueci. "Dona Ruth" era muito sábia e me ensinou muita coisa... Eu sempre guardava seus ensinamentos, porque eu sentia que através deles eu poderia me tornar uma pessoa melhor. Entendi bem esse ensinamento anos depois. Eu conto para vocês... 

Muitos devem ter conhecimento de que durante longos anos eu sofri com o Transtorno do Pânico... Eu mesma relatei isso num livro de minha autoria: "O FANTASMA DO PÂNICO OU O FUNDO DO POÇO: COMO ESQUECER?" Sim, eu convivi muito tempo com esse fantasma e senti de perto todos os medos que a mente humana é capaz de fabricar... Morri muitas vezes, um pouquinho em cada crise, mas, sobrevivi. E me tornei mais forte, mais feliz talvez, e certamente uma versão melhorada do que eu era. A gente sempre cresce com os golpes duros da vida. 

Mas vamos voltar aquela citação inicial... Aquele ensinamento de minha mãe... 

Já aposentada como Professora, após 27 anos de trabalho numa Escola da Rede Estadual, encontrei casualmente um antigo colega de trabalho, um professor poeta, que conversava sempre comigo à noite na biblioteca e que me apresentou à Editora Universitária de Pernambuco, para eu publicar o meu primeiro livro... 

Pense num reencontro feliz! Pense na satisfação e no carinho daquela reaproximação após tantos anos... 

Quando o vi de longe e chamei pelo seu nome, ele abriu um largo sorriso e perguntou: 

- Você me reconheceu?

Ele estava numa roda de amigos e eu me aproximei...

Como eu não reconheceria? 

E contei para ele um fato importante na minha vida, no qual ele tinha sido o meu "Anjo guardador"...

Durante uma crise de Pânico que eu tivera na Escola - e que aliás devo confessar que não foram poucas que eu havia tido lá no trabalho... - Mas, enfim, durante esse referido ataque de Pânico em que eu fiquei bem mal e achando que ia morrer... Ele, o bom colega, Professor Luciano - mais conhecido pelos alunos por "LULU SEMENTE", e que lançou seu livro antes do meu... Ele mesmo, naquela noite da minha crise, foi o anjo que me socorreu. Ele conseguiu me conduzir até o meu carro e como eu não tinha a menor condição de dirigir, ele foi guiando até o meu prédio, estacionou na garagem, subiu no elevador me amparando e me deixou em casa, sã e salva, com meu marido e minhas filhas.

Quando terminei de relatar o fato, ele me abraçou forte e apenas disse:

- Eu não me lembrava mais que tinha feito isso... 

Eu sorrindo respondi:

"QUEM PRESTA O FAVOR, NÃO DEVE LEMBRAR... MAS, QUEM RECEBE O FAVOR, NÃO PODE ESQUECER"...

Socorro Capiberibe

Recife, 10 de Setembro de 2023

Do livro da autora: SALA DE LEITURA COM SOCORRO CAPIBERIBE - Contos & Crônicas 

*Todos os livros de Socorro Capiberibe encontram-se à venda na AMPARE: 81-3222.6252 e 9.9504.0782

Visite o site literário da autora:
socorrocapiberibe.com.br 

YOUTUBE:
SOCORRO CAPIBERIBE`  
  },
  {
titulo:"SALA DE LEITURA // SOCORRO CAPIBERIBE/ AS DUAS CLARAS",
   tipo:"Conto",
   trecho:"A Clara, clara, de olhos claros, cabelos loiros, cheia de laços...",
   imagens:["imagens/IMG-20261007-WA0007.jpg"],
   texto:`
"Somos todos da mesma cor pelo lado de dentro" (para refletir!)

*AS DUAS CLARAS*

Uma, era clara e chamava-se: Clara. A outra, era escura, mas também era Clara. E, na sala de aula, quando a professora chamava, as duas se levantavam e a classe inteira entoava: " 

- Qual Clara, Professora? A Clara, escura... ou a Clara, clara?" - E o riso corria solto, mas as meninas não se embaraçavam. Era sempre assim.

Cresceram, juntas, as duas Claras. Freqüentaram o mesmo colégio desde a infância. Estudaram na mesma sala, durante anos... Dividiram a mesma banca, todo o primário.

A Clara, clara, de olhos claros, cabelos loiros, cheia de laços... Chegava de carro, com o motorista, farda bem arrumada, lanche caprichado. 

A outra Clara, a Clara negra, olhos escuros, bem expressivos... cabelo enroladinho, bem arrumado... farda cerzida, mas bem engomada... lanche mais simples, porém bem gostoso... chegava a pé, com a mãe de lado.

Eram amigas, as duas meninas... Boas colegas, grandes confidentes. Companheiras inseparáveis nos estudos e nas brincadeiras. Faziam juntas as tarefas e juntas se preparavam para as provas. Tiravam as melhores notas da sala... Até que um dia se estranharam. A amizade ruiu. As diferenças pesaram.

Estavam concluindo o Curso Ginasial - 
hoje chamado: "Fundamental" - quando o colégio promoveu um concurso de redação, sobre o tema: "BRASIL, PÁTRIA AMADA, BRASIL", para premiar os concluintes. E o Primeiro lugar ganharia uma viagem à Brasília, capital do país. 

Todos os alunos se prepararam. Deram o melhor de si. Usaram seu melhor Português. Todos queriam a viagem. Dessa vez, as duas Claras não puderam se ajudar... Eram concorrentes.

O prêmio veio para uma delas.

Mal a Diretora anunciou o nome, as duas se levantaram... e como era de costume, a classe inteira perguntou: - "Qual Clara, Senhora Diretora? A Clara escura ou a Clara, clara?..." - Tal qual faziam com os professores, em sala de aula...

Mas, esta, também, não se intimidou e carinhosamente respondeu: 

- A Clara, de olhos negros e cabelos de cachinhos... Uma aluna de idéias brilhantes e sorriso de mel".

 Todos aplaudiram.

A outra Clara, sentou-se, decepcionada. Não era ela a vencedora. Não era ela, a Clara clara, de olhos claros, de cabelos loiros, lisos e sedosos, e de farda arrumada. Engoliu o choro. Segurou a lágrima. Sentiu-se injustiçada. 

Era o preconceito falando mais alto. Nunca havia sentido tal sentimento antes. Também nunca tinham sido concorrentes. 

Foram sempre colegas... Estudaram sempre juntas... Mas nunca disputaram o mesmo prêmio.

Existe uma citação bíblica bem simples e muito profunda, que diz, em outras palavras...
que, às vezes, basta tão pouco, para que duas pessoas que se amam... fiquem separadas. De repente, um tom mais áspero na voz, uma palavra mais forte num momento mais sensível, uma expressão dura no olhar ou um simples trejeito... e, dois irmãos, marido e mulher ou dois amigos muito unidos, desconhecem-se e transformam-se, de um momento para outro, em dois estranhos... e foi, justamente isso, o que separou aquelas duas amigas.

A jovem, branca, que sentiu-se injustiçada, por perder o prêmio para a colega negra, deixou-se vencer por um sentimento pobre e mesquinho... e lançou contra a amiga palavras duras, carregadas de ressentimento, que revelavam um preconceito sórdido... estúpido... cruel:

- Você não merecia ganhar esse prêmio... Foi "jogo" da direção para não parecer preconceituosa diante do colégio e se reeleger... mas, deveria haver uma lei que proibisse os negros de disputarem as mesmas vagas e os mesmos prêmios que os brancos...

Impossível descrever a incredulidade da outra jovem e a força de tais palavras sobre seus sentimentos. Em apenas alguns minutos, uma amizade de longos anos caía pelo chão. As lágrimas desciam livres... de três, de quatro... pela face da amiga ofendida. Não conseguia acreditar no que estava ouvindo. De repente, teve a impressão de nunca ter visto aquela colega antes... Simplesmente não a conhecia... e foi com muito sofrimento, sentindo na pele a mais profunda humilhação, que a Clara escura dirigiu-se à Clara clara...

- Isso foi a pior coisa que você já falou durante todos esses anos... Eu não a conheço... Você não é a minha amiga... mas eu vou perdoar porque você não sabe o que está dizendo...

- Eu não preciso do seu perdão! E não retiro o que falei... Foi "arrumação" da Diretora... e, não é justo os negros terem direitos iguais aos brancos. 

A aluna insultada, desconsolada, infeliz, indignada... ia se voltando para sair, quando esbarrou em alguém... A Diretora do colégio, tão indignada quanto ela, escutara tudo em silêncio, não perdera uma palavra sequer e podia ver nos olhos da moça, toda dor daquela humilhação... Apenas segurou-lhe o braço com carinho e num tom suave murmurou:

- Venha comigo, filha... Não foi nada... ela não sabe o que diz.

Levou-a até à Diretoria, convidou-a a sentar, ofereceu-lhe água. Depois pediu licença por um instante e saiu. Voltou em seguida, trazendo com ela a outra aluna...

- Peça desculpa! - Ordenou.

- Eu não tenho nada para falar.

- Peça desculpa à sua colega... - insistiu a Diretora - foi muito grave o que você falou. As palavras também machucam... talvez até mais do que uma pancada, dependendo de quem diz e do que se diz...

E, como não obteve resposta, a Diretora chamou a outra aluna, a Clara negra, a Clara humilhada... e disse:

- Dê-me o seu braço, filha... 

Depois pegou também o braço da outra Clara e juntou os dois.

Estavam ali... juntos, colados, os braços das duas. Um braço, bem alvo, parecia um copo de leite. O outro, bem escuro, parecendo chocolate. Esfregou os dois, um no outro, bem esfregado... depois perguntou à jovem branca:

- Sujou o seu braço?... 

A jovem, muito alva, ficou vermelha de repente e tentou retirar o braço... mas a Diretora insistiu:

- Vamos, responda, sujou o seu braço?  

Não houve resposta e a Diretora concluiu:

- Claro que não sujou. A cor da pele não larga tinta, não mancha. Não é sujeira.

Também não precisa sair correndo para lavar, porque não pega... não é doença. E o sangue que corre em suas veias é tão vermelho quanto o dela. Sangue azul, minha filha, só existe em contos de fadas... E o sangue de um negro, salva a vida de um branco. Ninguém é melhor por causa da cor da pele, da religião, situação econômica ou classe social. Todos somos iguais aos olhos de Deus... Somos filhos de um mesmo Pai. Pense nisso! 

Fez-se um grande silêncio. As alunas retiraram os braços e a Diretora suspirou, visivelmente aborrecida. Não houve pedido de desculpa... a Diretora não insistiu e as alunas foram dispensadas. A lição foi dada... Se foi aprendida, não se sabe. Mas se não foi... A vida, certamente, ensinaria.

Alguns anos se passaram... As duas Claras não mais se viram... Mudaram de colégio, cursaram faculdade, casaram, tiveram sua vida. As feridas foram cicatrizadas, mas as lembranças não foram esquecidas.

Tempos depois, numa Maternidade... Duas mães, duas situações, uma lição de amor... 

Num andar, uma mãe recém-operada, não tinha leite para oferecer ao filho... O bebê tão pequenino, nascido alguns dias antes do prazo, tão frágil e indefeso, chorava faminto e necessitava de leite materno...

Em outro andar, outra mãe dera a luz, a uma criança doentinha, que morreu horas depois do nascimento... e em cujo seio o leite era abundante... 

As enfermeiras, constrangidas, sem saber a reação daquela mãe, que chorava a perda da filha... com muito jeito, com muito carinho, com muito tato, perguntaram se ela aceitaria amamentar o outro bebê, cuja mãe não tinha leite. 

Apesar da profunda tristeza, aquela mulher atendeu ao pedido... 

Tomou em seus braços o pequeno prematuro que chorava faminto, e pensando ter nos braços a filha que durante nove meses carregou no ventre, o amamentou. E fez isso durante os quatro dias que permaneceu no hospital.

No dia da saída, a mãe do bebê amamentado, quis conhecer a outra mãe que teve aquele gesto desmedido de amor... 

Foi até seu quarto, com o filho nos braços... mas ficou parada na porta, muda de emoção...

Tinha diante dela, a amiga do passado... a colega de colégio que dividira com ela não só a banca da classe, mas também, a infância e a adolescência. A Clara escura, cor de chocolate, dos olhos negros e expressivos, dos cabelos enroladinhos cheios de fivelas coloridas, sorriso doce como mel e dentes muito alvos. A amiga negra, que ela, Clara, tanto humilhou.

Quase não acreditou. Um nó apertou-lhe a garganta, impedindo-a de falar... O. coração parecia querer saltar-lhe do peito e as lágrimas começaram a cair...  

A outra mulher, a mãe negra que perdera a filhinha... a Clara escura, que apesar da dor teve a dignidade de amamentar seu filho, expressão serena e sorriso doce, preparava-se para deixar o quarto... mas também ficou paralisada de espanto, com uma expressão indefinida no olhar. Não era ódio nem rancor... talvez susto ou então um enorme vazio provocado pela perda da filha... O marido, ao seu lado, segurava a malinha da criança, que não poderia voltar com eles para casa. 

O bebê nos braços da mãe, começou a chorar pedindo o peito... A mulher negra permaneceu parada, silenciosa, apenas fitando os olhos de Clara. Teve ímpeto de pegar a criança, mas não o fez. Há coisas que dispensam as palavras... entende-se apenas com o olhar e Clara entendeu. Sentiu-se terrivelmente envergonhada. E num gesto de arrependimento e gratidão, pegou o filho e depositou nos braços da mãe escura... da outra Clara... que tomou a criança no colo e cheia de ternura ofereceu-lhe o seio.

Aquela foi a cena mais bonita que Clara, clara, cabelos loiros e olhos claros, pôde assistir. Do seio negro da Clara escura, o leite bem branquinho jorrava em abundância e alimentava o seu filho. Dos olhos de Clara, jorravam lágrimas, enquanto seus ouvidos ainda podiam escutar... "A cor da pele não larga tinta... não mancha... porque não é sujeira. Também não pega, porque não é doença. O sangue de um negro pode salvar a vida de um branco..."
A diretora tinha razão. Aquela lição ela aprendia agora.

Lembrou-se do último encontro com a sua amiga... Jamais esquecera o tamanho dos olhos da colega, aumentados pelo espanto, bem como das lágrimas que deles desciam, provocadas por tanta decepção.

Durante todos aqueles anos, tentou esquecer essa imagem... mas não conseguiu. Ela a perseguiu e continuou bem viva em sua memória. Naquele instante, sentada diante da amiga, aquela mulher negra tão humilhada e tão sua conhecida, que a vida acabava de lhe tirar um bem imenso e que ainda assim oferecia o peito para saciar a fome do seu filho... pensou envergonhada: "meu Deus, como pude ser tão cruel?" Tomou consciência, naquele momento, da grandeza das palavras da Diretora e em seu pensamento concluiu... "tão vermelho quanto o seu, era o sangue dela... e ele também podia salvar a vida de um branco... - dissera a Diretora... - e tão branco, quanto o de uma mãe branca, era o leite de uma mãe negra... e esse também podia alimentar uma criança branca, como estava alimentando agora o seu filho..." - constatou ela.

A criança adormeceu tranqüila no peito da outra... barriguinha farta, fome saciada, leite escorrendo pela boca, numa expressão de paz tão própria das crianças... A mulher afagou-lhe a cabecinha e despediu-se... era a última vez que o amamentava. De alguma maneira, o contato que mantivera com aquele bebê, serviu-lhe de lenitivo na sua dor. E feito isso, devolveu a criança à sua mãe.

Clara tentou falar... precisava agradecer... queria pedir perdão... mas as palavras estavam presas... as lágrimas não permitiam. E dessa vez, foi a outra quem entendeu... Conseguiu ler o seu silêncio e com o coração escutou as palavras que não foram ditas... E num gesto de quem aceitava o seu pedido de perdão, colocou levemente a mão nos lábios da amiga e concluiu:

- Não faça isso, por favor... Não é necessário...

- Mas eu preciso... balbuciou a outra... está preso aqui... - e bateu no peito... - Eu preciso que você me perdoe...

- Foi a muito tempo... Eu já lhe perdoei.

As duas Claras se despediram. Voltaram para suas casas, para suas vidas. As mágoas foram perdoadas. A lição foi bem aprendida. Mas, a amizade jamais voltaria a ser igual. Alguma coisa tinha quebrado... e por mais bem colado que fosse, ficaria sempre uma emenda."
______________
 (Do livro da autora: A VIDA ATRAVÉS DOS CONTOS)
______________
Todos os livros da autora encontram-se à venda na AMPARE: 81-3222.6252 e 9.9504.0782

Rua Oswaldo Cruz, 393/Prédio anexo, Boa Vista, Recife, PE.`
  },
  {
titulo:"FESTA DAS NEVES... FÁBRICA DE SONHOS OU NO TEMPO DA TERNURA...",
   tipo:"Conto",
   trecho:"Era sempre assim, exatamente assim, ano após ano...",
   imagens:["imagens/IMG-20261007-WA0008.jpg"],
   texto:`FESTA DAS NEVES... FÁBRICA DE SONHOS OU
NO TEMPO DA TERNURA...
(Por Socorro Capiberibe)

Era Julho...
Os caminhões começavam a chegar, carregados de brinquedos empilhados, para serem descarregados e armados ao longo do grande pátio da Catedral, no coração da cidade, para a festa da Padroeira.

Era sempre assim, exatamente assim, ano após ano...

Homens trabalhavam dia e noite, descarregando pilhas de cavalinhos coloridos, carrinhos, cadeiras, barcos, aviões, pesadas armações de ferro, blocos de madeira, trilhos, cordas, fios, ganchos e placas diversas... Em poucos dias, o pátio seria transformado num grande parque de diversões ou numa divertida “Fábrica de sonhos”, com os mais diversos brinquedos e atrações, que durante Dez dias fariam a alegria das pessoas do lugar: crianças, jovens, adultos, principalmente os namorados... A festa da Padroeira mudava a rotina da cidade.

No vasto pátio, além da Catedral, existia também um tradicional Colégio, cujos alunos esperavam ansiosos por essa época do ano, para acompanharem de perto – passo a passo – e cheios de alvoroço, o trabalho incansável daqueles homens que com suas mãos mágicas transformavam aquele espaço num palco de emoções.

A festa tinha inicio no dia 27 e permanecia até o dia 05 de Agosto, dia de Nossa Senhora das Neves. Nesse período, toda cidade se enchia de alegria e todos se encontravam a partir das 16:00h até o final da noite, para desfrutar da magia dos brinquedos.

E eram tantos... Eram muitos... Eram todos...

Rodas-Gigantes de todos os tamanhos, carrosséis de cavalinhos, Montanhas - russas, Trem-fantasma, carrinhos, aviões, barcos, Polvo, Tira-prosa e outros.

Havia atrações do tipo: Casa dos horrores – que tinha a mulher barbada e o homem que virava macaco; Tenda da sorte - onde as moças entravam para conhecer o seu destino; Casa dos espelhos – onde as pessoas se viam de diferentes formas; Pescarias e tiro ao alvo.

Tinha também as irresistíveis barracas de comidas típicas: Sarapatel, Churrasquinhos, queijo assado, tapiocas, crepes, pastéis, bolos e bebidas geladas... Porém, a grande sensação mesmo, eram as famosas e tradicionais barracas de cachorro-quente... Essas eram as mais concorridas, e seu cheiro espalhava-se no ar atiçando o apetite dos fregueses...

Completando o “Passeio” e o paladar, surgiam os vendedores ambulantes com seus tabuleiros de amendoim confeitado, Castanha torrada, rolete de cana, algodão-doce, cocadas, doce - japonês, maçãs – do - amor, pipocas doces e salgadas, cavaco chinês e pirulitos de açúcar queimado.

A tarde era repleta da garotada e o parque ficava cheio de bolas coloridas... Cada criança segurava a sua bola amarrada a uma linha e de vez em quando, ouvia-se um choro porque as bolas escapavam de suas mãos, subiam ao céu sob a pressão do gás e flutuavam no ar levadas pelo vento. O choro misturava-se com os risos das outras crianças em delírio nos carrosséis, carrinhos e aviões.

À noite era a vez dos jovens e adultos. Casais passeavam de mãos dadas, rodavam nas montanhas-russas e rodas-gigantes, sentindo aquele friozinho gostoso na barriga... Ah, como era bom!

Não dava para esquecer as músicas que ecoavam pelos alto-falantes - todas apaixonadas – muitas, oferecidas pelos namorados ‘a suas musas “com muito amor e carinho do Sicrano para Fulana...”

E a voz de Roberto Carlos nos anos 60 enchia o ar e penetrava fundo nos ouvidos e nas emoções...

“Quero me casar contigo / não me abandones tenha compaixão / a coisa que eu tenho mais medo na vida / é saber que um dia posso perder teu coração...”

Depois, Jerry Adriany entoava...

“Querida / quero lhe dizer / que toda a minha vida / entreguei a você / procure olvidar / o que lhe fiz / querida, perdoa / querida, não vá...”

Agora era a vez de Nelson Gonçalves...

“Cabocla teu olhar está me dizendo / que você está me querendo / que você gosta de mim... / Cabocla, não te dou meu coração / hoje você me quer muito / amanhã não quer mais não...”

Aí entrava Moacyr Franco...

“É tão calma a noite / a noite é de nós dois / ninguém amou assim / nem há de amar depois...”

Não podia faltar Agnaldo Timóteo...

“Quem será, quem será / o amor que imagino eu /Quem será, quem será / o amor para ser só meu / Eu só quero você / se você me quiser também / coração que eu ganhar eu não vou dividir com ninguém...”

E, tinha o outro Agnaldo... O “Rayol...”

“E, de repente o amor aconteceu / unindo para sempre você e eu / um beijo então calou a nossa voz / O amor falou por fim / falou por nós... “

Núbia Lafayette também marcava presença...

“Que será / da minha vida sem o teu amor / da minha boca sem os beijos teus / da minha alma sem o teu calor / Que será / da luz difusa do abajur lilás / se nunca mais vier a iluminar / outras noites iguais...”

Quem podia esquecer Altemar Dutra?

"Sentimental eu sou / eu sou demais / Eu sei que sou assim / porque assim ela me faz / as músicas que eu vivo a cantar / tem um sabor igual / por isso é que se diz / como ele é sentimental... "

E, vinha Adilson Ramos...

“Sonhar contigo / por toda vida / sonhar contigo / meu amor, minha querida / viver pensando em ti somente / viver te amando / ser só teu eternamente...”

E as músicas seguiam, uma a uma, carregadas de ternura e paixão, e davam “seus recados aos namorados” e, eram retribuídas com os olhares intensos que arrebentavam corações e o aperto das mãos entrelaçadas, com promessas de amor eterno... Era o tempo do flerte, do namoro comportado, do encanto jovem e natural das festas de rua...

Muitos namoros começavam na “FESTA DAS NEVES”...

Alguns resistiam a muitas “FESTAS” e transformavam -se em casamentos. Outros duravam apenas os dez dias de magia e viravam amizades.

Quando a festa terminava e os caminhões levavam de volta os brinquedos desarmados para outras cidades, ficavam as lembranças e os assuntos eram conversados por muitos dias ainda até serem substituídos por outras novidades.

E, embora, passassem meses sem se ver ou se falar...
Todos se conheciam e se reencontrariam no ano seguinte, no mês de Julho, no grande pátio da Catedral de João Pessoa.

Do livro da autora: *A ARTE DE CONTAR* HISTÓRIAS (50 melhores contos e crônicas)

À venda na AMPARE: Rua Oswaldo Cruz, 393/Anexo, Boa Vista, Recife, PE.
81-3222.6252 e 9.9504.0782

Site literário:
socorrocapiberibe.com.br 

instagram:
@msocorrocapiberibemaia 

YOUTUBE:
Socorro Capiberibe`
  },
  {
   titulo:"SALA DE LEITURA // HORA DO CONTO // *SOCORRO CAPIBERIBE",
   tipo:"Conto",
   trecho:"Sentou-se à mesa, mas quase não tocou na comida...",
   imagens:["imagens/combined-image(2).jpg"],
    texto:` 
PROFESSOR X ALUNO: UM APRENDIZADO EM VIA DE MÃO DUPLA OU "QUANDO O ALUNO É QUEM DÁ A LIÇÃO"! 

Helena acordou antes da hora, mais cedo do que o de costume. Estava chateada, não dormira bem a noite, a mente estava cansada, o corpo reclamava pela cama, embora estivesse acabando de levantar. Era horrível quando acordava assim... sentia que teria um dia difícil pela frente... uma classe barulhenta com quarenta e cinco alunos a aguardava e a sua primeira vontade naquele dia era voltar para o seu quarto e faltar ao trabalho. A cabeça estava confusa. Não queria colaborar. Melhor não insistir e tentar arrumar as ideias...

- O motivo de tudo isso?...  

Problemas de saúde na família; falta de dinheiro; uma discussão com o marido; um aborrecimento com a empregada e finalmente uma mal criação da filha; tudo de uma só vez... e Helena não era de ferro.

Sentou-se à mesa, mas quase não tocou na comida... estava enjoada e sentia muita dor de cabeça. Tomou um copo de leite, um comprimido e voltou a se deitar. Se melhorasse, iria à escola... ainda era cedo... daria tempo.

A dor de cabeça melhorou, mas Helena não conseguiu dormir... Começou a pensar nos seus alunos... 

"Não é justo; eles não tem culpa. Problemas, todos temos o tempo todo... e a vida não pára por isso. Eu tenho mais é que ir trabalhar... certamente vou me sentir melhor..." 

Era o lado sensato de Helena cobrando uma atitude... Era a razão vencendo o coração... E lá se foi a professora para mais um dia de trabalho. Seus alunos conseguiriam confortá-la. Eles tinham o poder de fazê-la esquecer-se de seus próprios problemas.

Helena era professora de Língua Portuguesa e trabalhava especialmente Redação e Leitura. Tinha mania de interpretação de textos, redação e leitura dos clássicos da Literatura Brasileira. Dizia sempre, que o aluno que lê com freqüência, expressa-se melhor, escreve melhor e pensa melhor. Naquele dia, por exemplo, dado o seu estado de angústia, nada melhor do que colocar os alunos para viajar na imaginação...  
E Instituiu, naquele momento, um concurso de Redação. 

Mostrou algumas gravuras - técnica bastante utilizada antigamente pelas professoras primárias - e pediu que cada aluno criasse a sua história. As Redações valeriam notas e seriam expostas num grande painel para apreciação dos colegas, sendo as cinco melhores, premiadas.

Nem precisa dizer a empolgação da turma... Os alunos simplesmente amaram a idéia! 

Tinham verdadeiro fascínio pela competição... 

- "Valeria nota? Teria prêmio? Haveria vencedor?..."  

Então, vamos à luta! Caneta e papel sobre a mesa, olhos nas gravuras, imaginação correndo solta... cada um dava o melhor de si. E a professora Helena, coração amargurado, olhos fixos nos alunos mas pensamento longe dali, esperava pacientemente em seu birô...

"E a cirurgia de sua mãe? Ela tinha diabetes... Já não era tão jovem... Helena estava tão apreensiva... 

- E a filha tão rebelde?... Tão mal criada... Tão sem limites?... 

Sem pensar na irritação do marido, nas reclamações das despesas, nas cobranças da casa perfeita, no dinheiro curto... E se não bastasse tudo isso, ainda tinha os desacertos da empregada... Os atrasos, as faltas, o mau humor..."

E Helena suspirava... Pressionava as têmporas, sentindo-as latejar... - Era a dor de cabeça ameaçando voltar... Mas os alunos permaneciam absortos nas suas redações e isso lhe trazia um certo alívio.  

Mais um pouco, e lentamente um a um foi levantando e colocando sobre a mesa da professora o seu trabalho, até que todos terminaram.  

Ela dispensou os alunos e pôs-se a corrigir as redações... Esse era um trabalho que ela fazia com prazer. 

Os jovens tem idéias fantásticas... é só lhes dar um papel, e eles criam histórias incríveis.
Foi o caso da aluna Carolina... a última aluna a entregar a redação... uma menina de doze anos, daquela sexta-série, de uma escola pública, de uma sensibilidade e criatividade extraordinárias... e que escrevera algo tão forte e tão profundo, capaz não só de comover a professora, como também de dar-lhe uma lição de vida naquele momento.

Carolina passou um longo tempo olhando a gravura exposta no quadro à sua frente... Nela podia ser visto um vulto de homem, num fim de tarde, diante do mar num momento de reflexão... E a garota, inspirada nesta cena, criou uma história linda, uma mensagem de fé, uma lição de esperança e confiança no poder de Deus, algo que fugia à sua idade e cuja percepção era tão complexa, que podia impressionar um adulto e conduzi-lo à reflexão.

Na história criada pela aluna, de maneira simples e num português incorreto, ela contava de uma grande tristeza que se apoderara dela, que lhe tirava o gosto pela vida e que lhe provocava o choro com a maior facilidade... e de um desejo súbito de se isolar e procurar por Deus... 
Num desses momentos de profunda solidão, foi até a beira da praia para refletir sobre a sua vida tão angustiada naquele momento e nesse momento de reflexão, sentada ali diante do mar, teve a resposta do poder infinito de Deus.
Olhando o mundo de águas em movimento à sua frente, percebeu que mesmo as ondas vindo e espalhando-se em espumas sobre a areia, elas a partir de determinado ponto começavam a voltar... permanecendo assim dentro de um limite imposto pela própria natureza... E de repente ela se perguntou: 

"- E se Deus resolvesse abrir o ferrolho do mar?... 

Seria uma catástrofe... A Terra se inundaria ... E todos morreríamos..."

E para concluir o seu pensamento: Carolina, a adolescente de apenas doze anos de idade, aluna da sexta-série, de uma escola pública, encontrou a resposta para sua pergunta... 

"Se Deus conseguia manter fechado o ferrolho do mar, se Ele tinha o poder de segurar todo aquele "mundão de água" dentro do seu limite... Quanto mais fazer desaparecer o seu sofrimento que era tão pequeno diante daquela imensidão de mar?... 

"O poder de Deus é infinito... - Constatou Carolina... - E o seu sofrimento era apenas um grão de areia ou simplesmente uma gota d'água naquele oceano..."

Helena, ainda com a redação na mão, sentiu-se como se fosse a aluna e Carolina, a mestra. 

Sentiu-se tão recompensada com a mensagem da aluna, que toda sua amargura antes do tamanho de um oceano, não passava agora de uma pequenina gota...  

Agradeceu a Deus não ter perdido aquela aula... Jamais esqueceria aquela lição. Não se pode subestimar a criança... Muitas vezes são elas quem ensinam aos adultos.

Carolina ganhou um "Dez"... e conquistou o " primeiro lugar." Sua redação ficou exposta no Mural e foi aplaudida por toda turma.
_____________________________

O texto inspirado em fatos reais é parte integrante do livro da autora: A VIDA ATRAVÉS DOS CONTOS // Dedicado a todos os meus colegas Professores - representados no texto pela Professora HELENA - e a todos os alunos, em especial: "MARIA CAROLINA SILVA DE SANTANA" - a Carolina do texto - Ex-aluna da Escola Estadual Santa Paula Frassinetti - em Recife/PE, na Década de '90 - Onde atuei como Professora/ Coordenadora de Biblioteca, pelo período de fevereiro de 1989 a Fevereiro de 2016. 

Todos os livros de Socorro Capiberibe encontram-se à venda na AMPARE - Pça Oswaldo Cruz, 393/Anexo, Boa Vista, Recife/Pe.

81-3222.6252 e 9.9504.0782 

YOUTUBE:
SOCORRO CAPIBERIBE`
  },
  {
   titulo:"SALA DE LEITURA COM SOCORRO CAPIBERIBE / DEIXANDO UM POUQUINHO DE MIM...",
   tipo:"Conto",
   trecho:"Se chorei ou se sorri, o importante é que emoções eu vivi. (Roberto Carlos)",
   imagens:["imagens/1000140256.jpg"],
   texto:`
O RETRATO DE MARIA TERESA OU DE DEGRAU EM DEGRAU SE SOBE UMA ESCADA... 
*Socorro Capiberibe 

"Se chorei ou se sorri, o importante é que emoções eu vivi." (Roberto Carlos)

E, lá estava ele...
Junto aos demais retratos expostos na parede principal da biblioteca. Era o quinto da fila de ex-diretores do antigo colégio, que completava naquele dia 80 anos da sua fundação. Estavam em ordem cronológica, indicando o período de regência de cada um, embaixo de cada foto.

Teresa olhou fixamente o seu retrato e sentiu o peso dos anos pousarem sobre seus ombros. Fazia tanto tempo... Ela ainda era tão jovem... - quando foi que envelheceu? O tempo passou e ela não percebeu. Uma estranha emoção invadiu-lhe o peito e sem que ela pudesse conter, as lágrimas desceram livres pela sua face envelhecida.

Naquele colégio, tinha vivido os momentos mais difíceis e também os mais felizes de sua vida. Teresa conhecia cada palmo daquele chão; cada corredor; cada sala de aula... Cada recanto.

Acompanhara de perto o crescimento de cada árvore do jardim e viu muitas turmas se formarem. Muitos dos alunos que chegaram ali crianças e que ela ajudou a formar eram hoje adultos, casados, com filhos, com uma profissão. Isso era maravilhoso. Era a certeza do dever cumprido.

Teresa caminhou lentamente até o birô, passou a mão de leve sobre a cadeira, olhou o porta-retratos sobre a mesa, por fim sentou-se.

Chegara antes do horário marcado para o início da comemoração. Nenhum outro ex-diretor havia chegado; nem mesmo a diretora atual. Foi recebida pela secretária, que gentilmente a acomodou na biblioteca e desculpando-se, retirou-se para o galpão, afim de ajudar aos professores e demais funcionários, nos últimos preparativos da festa.

Teresa olhou em volta a biblioteca vazia e por alguns instantes tentou buscar na memória imagens antigas, daquele espaço repleto de alunos... Mergulhou tão fundo nas lembranças, que se fechasse os olhos, seus ouvidos poderiam escutar o barulho gostoso da garotada, tão habituados eram eles com esse maravilhoso som, que durante anos esteve presente em sua vida.

Era uma longa caminhada. Trinta anos de trabalho dedicados a um mesmo lugar. Aquelas paredes abrigavam toda uma vida de luta e glória. Dentro daquele colégio Teresa escrevera sua história.

E a história de Teresa não era uma história comum. Não era igual a tantas outras, que acontecem todos os dias, com tantas pessoas, em todos os lugares. Era uma história especial, de alguém especial, que lutou e sofreu, chorou e sorriu, acreditou e conseguiu. Alguém, que galgou degrau por degrau, com muito suor... E fez por merecer chegar aonde chegou.

A história de Teresa não poderia ser esquecida. E, muito mais até...
Era uma história que deveria ser lembrada. Era uma lição de vida.

Chegou ali mocinha... Muito jovem ainda... Era o seu primeiro emprego. Em que ano foi isso? Mil, Novecentos e quanto? Já nem se lembrava mais. Precisava fazer as contas, mas resolveu deixar pra lá... Não tinha tanta importância assim... Depois lembraria. Seus setenta anos já lhe permitiam tais esquecimentos.

Começou do batente mais baixo; do primeiro degrau; começou como servente.

Morava num quarto sublocado da casa de uma parenta. Acordava muito cedo, saía junto com o Sol, marmita do dia na mão, pegava o primeiro ônibus... ‘As sete, tinha que estar no colégio.

- Seu serviço? Abrir o portão para os alunos, preparar cafezinho para os professores, ajudar na merenda das crianças, varrer o pátio, os corredores, as salas de aulas, limpar os banheiros.

-Tinha mais? Claro, que tinha. Esperta que era, esforçada bastante, trabalhadora exemplar... Não tardou em conquistar a admiração da diretora e o carinho dos professores, que não hesitaram em lapidar aquela pedra bruta. E, em pouco tempo, Teresa já executava algumas tarefas administrativas...
Rodava as provas dos alunos no mimeógrafo, para ajudar aos professores; arrumava os livros na biblioteca para auxiliar a bibliotecária; ajudava na disciplina, recolocando os alunos nas salas de aulas, quando estes fugiam; chegava a aplicar provas com as turmas, quando o professor precisava se ausentar. Teresa era uma funcionária dedicada. Tinha tempo para tudo. Só não tivera chance de estudar.

Largou os estudos para trabalhar. Não tinha sequer concluído o Ginasial, que corresponde hoje ao primeiro grau. Cursou até o segundo ano e partiu em busca de um trabalho; tinha que batalhar pelo "pão nosso de cada dia".

Mas, Teresa não permaneceu parada, não estacionou no tempo, não se acomodou no primeiro batente. Era esperta, dinâmica, inteligente... E sem orgulho aceitou a ajuda de quem se dispôs a ajudá-la.

Havia na época um curso especial chamado "Madureza", que preparava os alunos num tempo reduzido e correspondia ao curso Ginasial. Teresa, orientada pelos professores, retomou os estudos e com muito sacrifício concluiu o "Madureza", hoje o primeiro grau.

Cursou depois o "Artigo 99" - outro curso especial também em tempo reduzido, que correspondia ao "Científico"... E Teresa concluiu também o "Segundo grau". Já era uma grande vitória. Conseguira galgar mais alguns degraus. Nessa época ela já utilizava a máquina de Datilografia com facilidade e também já sabia redigir qualquer documento da Secretaria. Providenciava com precisão: Transferências, históricos, requerimentos... Enfim, começava a dominar o serviço burocrático do colégio.

Seu passo mais largo foi o "Vestibular"... E, esse, ela também conseguiu. Custou-lhe muitas noites em claro, muitas saídas tarde da noite do colégio, onde ficava depois do expediente, queimando as pestanas, às voltas com todos os livros, atenta a todas as informações... Muitas privações. Mas era por uma boa causa e Teresa não mediu esforços.

Muitas foram as vezes, em que ali mesmo naquela biblioteca, ela adormecera sobre os livros, vencida pelo cansaço e fora acordada pela bibliotecária, na hora de encerrar as atividades daquele dia. Fechava o colégio, voltava pela rua deserta, apanhava o ônibus, chegava em casa exausta.

E, durante o período da faculdade não foi diferente. As privações não foram menores. O trabalho não foi menos exaustivo. Mas tinha boas amizades, fez um bom relacionamento e teve a colaboração de muitos colegas. Chegara a participar de trabalhos em grupo apenas com o nome, sem ter mesmo colaborado com uma única pesquisa... Todos entendiam. Todos conheciam a sua história. Todos se empenharam em ajudar a colega.

Colou grau junto com a turma. Foi o dia mais feliz da sua vida. A emoção que sentiu foi indescritível. Não era qualquer pessoa que tinha pulso para transpor tantos obstáculos. Escolheu por madrinha a bibliotecária amiga, a professora mais antiga daquele colégio, que tanto a ajudou, incentivou e confortou, durante aqueles longos anos. Acompanhou com ela tantos diretores e conviveu de perto, o mais de perto, com a Teresa servente; a Teresa secretária; a Teresa aluna e por fim, a Teresa professora.

Continuaram juntas por muito tempo ainda...
Aposentaram-se no mesmo ano. Foi uma amizade bonita, forte, verdadeira... Que só foi interrompida há um ano atrás, com o falecimento da bibliotecária.

Após a sua formatura em Pedagogia, Teresa exerceu no colégio as funções de: Professora de Artes, Coordenadora e finalmente Diretora.
Dirigiu o Colégio durante vinte anos consecutivos.
Aposentou-se após trinta e cinco anos de serviços bem prestados e gozava de uma aposentadoria não tão farta, mas tranqüila.
Tinha seu próprio apartamento, pequeno, mas confortável; tinha um carrinho antigo, que a levava onde queria.
Não casou, nem teve filhos. Mas, tinha bons amigos e não deixara faltar nada aos três sobrinhos. Todos estudaram e cursaram Faculdade. Aquela tinha sido a sua forma de retribuir, um pouco do muito que recebera dos outros.

Se, no início de sua carreira lhe tivessem dito, que chegaria aonde chegou... Provavelmente não teria acreditado. Diria que era utopia. Jamais pensou, que pudesse um dia, ser "Diretora" do colégio, onde muitas vezes esfregara o chão.

Teresa olhou mais uma vez o seu retrato na parede... Ele continuava lá, junto aos demais... Não tinha sido um sonho. Leu a inscrição embaixo da sua foto: "Maria Teresa... 1964 a 1984".

Teresa sorriu para o próprio retrato e lembrou o que estava esquecido na sua memória: o ano em que chegara ali naquele colégio. Após calcular mentalmente, veio a lembrança... Tinha sido o ano de "1949"... Ela tinha apenas 20 anos de idade.

Naquele instante a secretária voltou para buscá-la... A festa iria começar. No pátio, os alunos perfilados aguardavam o momento de começar a cantar o Hino do Colégio. A atual Diretora autorizou a Banda a começar a tocar, dando inicio às festividades.

Somente dois ex-Diretores estiveram presentes à Solenidade:
Professor Augusto, antecessor de Teresa e ela, Maria Teresa, a penúltima diretora, o quinto retrato da galeria.

"De degrau em degrau é que se sobe uma escada” foi o tema do discurso de um professor, ex-aluno do colégio, numa homenagem prestada à Professora Teresa."" 

*Socorro Capiberibe
 
DO LIVRO DA AUTORA: "A ARTE DE CONTAR HISTÓRIAS" - 50 MELHORES CONTOS & CRÔNICAS // À VENDA NA AMPARE. 

Fone: 81- 3104.7617 

Visite o site da autora:
socorrocapiberibe.com.br

Instagram:
@msocorrocapiberibemaia 

YOUTUBE:
SOCORRO CAPIBERIBE`
  },
  {
titulo:"PARA OS AMANTES DA POESIA -CANTINHO DO POETA // SOCORRO CAPIBERIBE",
   tipo:"Poesia",
   trecho:"A vida? Uma eterna alegria...",
   imagens:["imagens/1000140258.jpg"],
   texto:`

"QUE DOCE ILUSÃO!"

Um dia eu também fui criança
E como toda criança eu cresci
Mas ainda conservo a lembrança... 
Da infância que um dia vivi.
Nesse tempo eu acreditava...
Que a felicidade era um presente
E assim a gente poderia guardá-la
E dar a todo mundo simplesmente.

Mas, que doce ilusão, a minha!
A felicidade não é presente
Nem dura a vida inteira...
Não é como uma bonequinha
Que se guarda depois da brincadeira.

Eu era uma criança apenas
Igual a toda criança
Uma cabecinha ingênua
Um peito cheio de esperança.
Tomava banhos de chuva
Soltava barcos de papel
Gostava de ouvir estórias
Sonhava com o Papai Noel.

Mas, que doce ilusão a minha!
Papai Noel não existe!
Era apenas uma historinha...
Quando descobri, fiquei triste.

E os meus castelos de areia?
Os cozinhados no quintal?
O medo do escuro... Das bruxas feias...
Do bicho papão e do lobo mau?

Foi tudo desaparecendo aos poucos...
E era outra a realidade.
Dos doces sonhos da infância
Restou apenas uma grande saudade.

Um dia eu também fui criança
E como toda criança eu cresci
Mas ainda conservo a lembrança... 
Da infância que um dia vivi.
Eu era uma criança apenas
Igual a qualquer criança
Uma cabecinha ingênua
Um peito cheio de esperança.

A vida? Uma eterna alegria...
De Deus o melhor presente.
Por que é que se cresce um dia?
Gente grande vê tudo diferente.

Mas, que doce ilusão, a minha!
Não se pode ser sempre criança.
Pode-se conservar simplesmente
Os sentimentos mais puros da infância.
E pode-se ainda tentar...
Enxergar com os olhos das crianças.
Ser bons, sinceros como elas...
Conservar o peito cheio de esperança.

(Autora: Socorro Capiberibe - poema integrante do livro: POETAS BRASILEIROS DE HOJE – Rio de Janeiro, Shogun Editora e Arte Ltda, 1986.)

*Os livros de Socorro Capiberibe encontram-se à venda na AMPARE: 81-3222.6252 e 9.9504.0782`
  },
  {
titulo: "DEIXANDO UM POUQINHO DE MIM... //SALA DE LEITURA // SOCORRO CAPIBERIBE ",
   tipo:"Conto",
   trecho:"Domingo de sol claro, nuvens brancas desenhando diferentes formas no céu azul, vento brando do mês de maio entrando de mansinho pela janela de Sarah, fazendo um interessante balé na parede do quarto da jovem, junto com os raios de sol e o movimento harmonioso das folhas de uma viçosa pitangueira.",
   imagens:["imagens/1000140261.jpg"],
   texto:`
"UM DIA NA VIDA DE SARAH"

Domingo de sol claro, nuvens brancas desenhando diferentes formas no céu azul, vento brando do mês de maio entrando de mansinho pela janela de Sarah, fazendo um interessante balé na parede do quarto da jovem, junto com os raios de sol e o movimento harmonioso das folhas de uma viçosa pitangueira.

Sarah foi até a janela, abriu bem as cortinas deixando que o sol entrasse por inteiro, respirou o ar fresco da manhã, espreguiçou-se e saudou com um sorriso o dia que se iniciava. Fitou por um instante o céu azul e seus olhos viram uma enorme garça branca num aglomerado de nuvens. Olhou em outra direção e achou que naquele ponto as nuvens formavam um urso. Mais adiante podia ver um rebanho de carneirinhos - sorriu - dias atrás tinha visualizado uma foca com bola no nariz e tudo... “ É interessante a percepção da gente..." - pensou a moça. Ela sempre podia enxergar figuras de animais, objetos ou mesmo pessoas nos desenhos das nuvens.

Ali embaixo da janela, num galho da pitangueira, cantou um sabiá. Sarah desviou os olhos dos desenhos das nuvens e pôs-se a assobiar para o passarinho, sentindo uma paz tão grande, como se estivesse em comunhão com a natureza.
Naquele instante o jornaleiro chegou ao portão, jogou o jornal no terraço e desviou a atenção da jovem. Sarah suspirou como se despertasse de um sonho fantástico e voltou-se para os seus afazeres habituais. Era Domingo, o segundo do mês de maio, dia das mães.

“... Houve um tempo em que bravos guerreiros e sanguinários bandidos, sentiram medo do escuro, do boi da cara preta, do bicho papão... e choraram. Nesse dia... uma atenta, meiga e materna presença, afagou-lhes os cabelos e dissipou-lhes o medo... Adormeceram. E homens acordaram..."

Sarah leu e releu esse artigo publicado no jornal, homenageando as mães, e ficou pensativa... "Quem inventou o dia das mães? Por que apenas um dia no ano para serem lembradas, se elas dedicam todos os dias de suas vidas aos seus filhos? Dia das mães são todos os dias. Isso é invenção do comércio..." - pensava a jovem, olhando distraída a fumaça que saia da sua xícara de café com leite...
Sarah continuou lendo o jornal. Havia mais homenagens para as mães: cartas, poemas, desenhos, beijos, abraços e toda sorte de promoção de presentes oferecidos pelas lojas e outra infinidade de ofertas dos mais deliciosos pratos, oferecidas pelos restaurantes. Esse era o lado bom das notícias... O lado das homenagens bonitas... O lado que falava das mães felizes, amadas e lembradas por seus filhos.

Mas, tinha também o lado triste da notícia. O lado das mães esquecidas, que experimentavam o gosto amargo da solidão no abandono dos asilos e que nunca eram visitadas pela família. As mães que não ganhavam presentes no seu dia, não almoçavam com os filhos nos restaurantes bonitos, nem recebiam mensagens especiais no jornal. Mães que só tinham lembranças, retratos, saudades e pessoas estranhas por companhia. E uma dessas mães, sozinha e triste, esquecida e abandonada, tocou o coração de Sarah.

Estava lá o seu retrato no jornal, junto com a sua solitária e amarga história. Era uma história comum, igual a tantas outras. Chamava-se Clarice, tinha setenta anos de idade e há dez anos vivia sozinha num asilo, distante do convívio feliz da família, sem a visita dos filhos, sem um afago de um neto, perdida nas recordações do passado.

Sarah leu a reportagem completa. Sentiu-se triste de repente. A história de dona Clarice mexeu com seus sentimentos. Não conseguia entender como existiam filhos assim, capazes de abandonar sua mãe no mais completo esquecimento. E pensar que tinha tanta gente que daria tudo na vida para ter sua mãe perto de si, ouvir uma palavra sua, ganhar um abraço seu... "A vida tem desses contrastes...” - pensou Sarah - ali naquele jornal estava um desses exemplos... Numa página, mães sorridentes abraçando os filhos, desenhos bonitos, mensagens as mais belas. Na outra página, reportagens como a de Dona Clarice... Não dava para entender. A Humanidade estava ficando desumana. Sem saber porque, sentiu uma grande vontade de conhecer aquela senhora, de dar-lhe um abraço e oferecer-lhe um presente. E movida por uma força maior, por uma profunda ternura, teve um gesto solidário de imensa bondade... Anotou o endereço do abrigo, vestiu-se e foi ao encontro daquela mãe solitária, que ansiava tanto pelo abraço de um filho. Não poderia substituir a sua família, mas poderia oferecer-lhe a sua amizade.

- Desça já daí, Firmino! Desse jeito não vai sobrar uma única carambola no pé. O que os passarinhos vão comer?
- São para fazer o suco do almoço, dona Clarice. Suco de carambola é bom para pressão... - argumentava o empregado.

- Você já tirou suficiente. Agora chega! os passarinhos também precisam se alimentar. Deus criou as frutas mais para eles do que para os homens. A gente tem outros alimentos para comer... Eles só se alimentam do que a natureza tem para oferecer.

- As pessoas precisam dos alimentos naturais também, dona Clarice... - insistia Firmino, enquanto colocava mais carambolas na cesta.

- Desça daí, Firmino. Que rapaz mais teimoso! Onde já se viu deixar a árvore sem frutas? Deixe de ser ganancioso! É preciso saber repartir. Você gostaria que lhe tirassem toda a comida? Experimente ficar com fome e veja se é bom.

O rapaz desceu da árvore, amuado. Pegou a cesta de carambolas e saiu resmungando. Dona Clarice deu um muxoxo e fingiu não escutar as reclamações de Firmino. Pegou outra vez o crochê e continuou seu trabalho. Naquele instante um passarinho pousou no galho da árvore e pôs-se a bicar a carambola, como se houvesse entendido o diálogo dos dois... A natureza é sábia.
Sarah sorriu; assistiu a tudo em silêncio, a poucos metros dali. Achou tão bonita a lição que dona Clarice passou para o jovem, que ficou comovida. Aproximou-se com a caixa de biscoitos na mão, envolta num lindo papel de presente, com laço de fita e cartão e sentou-se ao lado da senhora.

- Quem é você? É do Jornal? Eu não quero mais dar Entrevista...
Disse Dona Clarice, afastando os olhos do crochê e olhando
a moça por cima dos óculos...

- Não se preocupe. Eu não sou do Jornal. Sou apenas uma amiga,
que veio visitá-la.

- Eu não tenho amigos. Há dez anos ninguém me visita.

- Eu sei... - Sarah iria dizer que conhecia a história dela. Que estava ali pela reportagem do jornal... Mas a senhora interrompeu...

- Sabe? O que você é minha? É minha neta? É minha sobrinha?
E, buscava no rosto da jovem algum traço familiar, enquanto
sua voz parecia embargada pela expectativa da resposta.

Sarah sentiu um aperto no peito. Sabia que iria desapontá-la, afinal não era neta ou sobrinha e isso fazia muita diferença para quem esperava há dez anos ser visitada pela família.

- Eu gostaria muito de ser sua neta ou alguém que a senhora espera rever a tanto tempo. Eu ficaria feliz se pudesse lhe dar essa alegria... Mas na realidade a única coisa que posso lhe oferecer é a minha amizade e essa simples lembrança pelo dia das mães... - e Sarah entregou-lhe a lata de biscoitos, com papel de presente e laço de fita.
Dona Clarice permaneceu em silêncio por alguns instantes, fitando o rosto de Sarah, depois começou a abrir o presente e com voz tranqüila perguntou:

- Por que você quis me conhecer? Como me encontrou aqui?

Sarah lhe contou do jornal, de como a história dela tinha tocado seus sentimentos e do desejo de ser sua amiga. Dona Clarice ouviu em silêncio, agradeceu os biscoitos, aceitou a solidariedade da moça. Tentou disfarçar a emoção, mas Sarah pôde perceber lágrimas em seus olhos.

As duas conversaram no banco do jardim, passearam entre as árvores, cumprimentaram outros velhinhos. Em poucos instantes, passado o constrangimento natural do primeiro encontro, sentiram-se amigas.
Dona Clarice convidou Sarah para ficar para o almoço e levou-a também a conhecer seu quarto.

O quarto simples e humilde do asilo abrigava toda uma vida, uma história, um passado de recordações e um presente de solidão. Continha uma cama, uma cadeira de balanço, uma cômoda e retratos em todas as paredes. Dona Clarice apresentou toda a família à Sarah, através dos retratos... O marido falecido, três filhos, uma filha, cinco netos. Falou de todos com carinho. Justificou a falta de tempo de cada um. Desculpou a ausência da família. Só não conseguiu conter o choro quando falou da saudade... Se seu velhinho fosse vivo, certamente ela não estaria ali... - disse ela enxugando o pranto.
Sarah nada falava, tinha a voz presa pela emoção...
"É incrível, como para as mães, não existem filhos maus. Todos são bons, até suas ingratidões são perdoadas..." - pensava a moça com tristeza.
Após o almoço, Sarah se despediu. Abraçou forte a amiga, afagou-lhes os cabelos grisalhos e prometeu voltar. Aquele dia fora especial em sua vida, jamais iria esquecer. Seu gesto de imensa bondade fizera feliz uma mãe solitária. Ela própria ficara feliz.

E Sarah não esqueceu a sua promessa...

Voltou outras vezes a visitar o asilo. Adotou dona Clarice. Ganhou outros amigos. Sempre que podia aparecia para visitá-los e sua chegada era aguardada com alegria por todos. Levava bolo, biscoitos, doces e frutas. Era uma festa.
Dona Clarice já não se sentia sozinha. Ganhara uma filha, uma neta, uma sobrinha, uma amiga. Naquele dia das mães, dona Clarice não ganhou só uma lata de biscoitos... Sarah representava uma família inteira.
Certa tarde, Sarah chegou para sua visita costumeira... Dona Clarice tomou-lhe a mão e levou-a até seu quarto. Queria lhe fazer uma surpresa...
Todos os retratos tinham saído das paredes. Estavam todos guardados dentro de uma gaveta. E, na parede principal,
em frente a porta de entrada e junto à cama de Dona Clarice, apenas um quadro... Um retrato ampliado de Sarah.

AUTORA: SOCORRO CAPIBERIBE - ( BASEADO EM FATO REAL ) - PARTE INTEGRANTE DO LIVRO: A VIDA ATRAVÉS DOS CONTOS. 

*Todos os livros da autora encontram-se à venda na AMPARE: Rua Oswaldo Cruz, 393, Boa Vista, Recife/PE. 
81-3222.6252 e 9.9504.0782`
  },
  {
   titulo:"SALA DE LEITURA // HORA DO CONTO // SOCORRO CAPIBERIBE",
   tipo:"Conto",
   trecho:"Acode, minha Virge, dá juízo a meu fio... me alcança essa graça, faz ele estudá",
   imagens:["imagens/1000140263-imageonline.co-merged.jpg"],
   texto:`
*8 DE DEZEMBRO // TEM FESTA NO MORRO*

"Acode, minha Virge, dá juízo a meu fio... me alcança essa graça, faz ele estudá. Afasta dos  vício, das má cumpanhia, bota ele pra gente, faz dele dotô. Cuncede essa bênça Virge da Conceição... Prometo qui rezo, eu juro qui rezo, um terço todinho, jueio no chão... Te trago uma cabeça de cera, acendo uma vela, se vós me atendê... Escuta, minha mãe..."

- "Vombora, minha nega, num aperreia a Santa... Isquece o Zezinho, ele vai miorá. É só um minino... Um dia ele cresce... Toma gosto na vida... Vombora Maria, óia a hora muié..."

Maria, contrita, de terço na mão, os olhos na Santa, peito cheio de fé... Implora clemência, juízo pro filho, joelhos em terra, murmurando baixinho o nome da Virgem... Nem ouve o Mané. E, o homem, do lado, impaciente, preocupado, pensando na hora... Ainda vai trabalhar...

- "Vombora, criatura... Acaba cum isso...  A Santa já uvío. A Santa já sabe. Ela vai atendê. Assussega, muié, nosso fio é criança... Um dia ele cansa; mais tarde ele aprende; o muleque dá pra gente; ele vai se acertá."

Maria levanta, acende uma vela, dá o braço ao marido e ganha a ladeira... É hora da janta, Mané tem trabalho - é vigia do posto - já está atrasado. Sentado à mesa, ele apressa a mulher... E Maria, com gosto, esquenta a chaleira...  - Tem calma Mané.

Zezinho emburaca... Chiclete na boca, chutando uma bola, batendo nas coisas, tirando a camisa, jogando no móvel, sentando na mesa, derrubando o talher, parece um trovão. Belisca a galinha servida no prato; retira o sapato e joga no chão...  

"Minha Virge, minha mãe... Óia isso! Tem jeito de gente? Dá pra cunsertá?..."  - Maria suspira...  - "Tem calma, minino... Te benze primeiro... Vai lavar tua mão..."

- "Oxente, maínha, isso tudo é besteira... Tô cuma fome danada... Dá logo esse pão. A turma me espera; o morro tá cheio; é dia de festa; vou descer a ladeira.  Imbaixo tem parque cum roda gigante e barraca de tudo... Mais tarde eu me lavo e guardo a chuteira."

E Maria, coitada, procura o Mané... Mas Mané foi embora... Nem comeu a galinha, estava tão atrasado que só tomou o café. A mulher desolada, sem saber o que fazer, olha o filho e pergunta:

- "Quando é que tu vai crescer?"

O menino, tranqüilo, olhando a fumaça da caneca, enquanto tira o miolo do pão vai falando macio...

- "Num se avexe, maínha... Me deixa vivê. Eu prometo estudá... A sinhora vai ver. Vou ser gente na vida... Quero ser um dotô... Inda sô um minino... Deixa disso, maínha. Num se avexe, muié."

Sete horas da noite... A ladeira está cheia. 
Zezinho escapole, a mãe guarda a ceia, Mané guarda o posto, a moçada passeia. O morro é uma festa... Está todo iluminado... Cheio de pontos de luz... Visto lá de baixo parece uma árvore de Natal...  E quem vai pela primeira vez, jura que nunca viu nada igual.
  
Barraca tem muita... Comida não falta pra todos os gostos...
Tem milho, tem bolo, queijo assado, churrasco, amendoim confeitado, rolete de cana, cachorro quente e pastel. O cheiro recende, atiça a barriga, dá água na boca, convida a comer... Mas, nada é mais forte do que a fé das pessoas que sobem e descem, com um terço na mão...
  
Meu Deus, quanta gente subindo o morro... Rezando, chorando, pagando promessa, pedindo uma graça pra Virgem da Conceição! 

Parece um mar... Uma onda humana... Subindo mansinho, rezando baixinho, pra Virgem escutar. São tantas pessoas, são tantos pedidos: "um emprego pro filho... um marido pra filha... conversão de um parente... paz pra família... passar nos estudos... saúde pra alguém... curar o marido... livrar da bebida... passar num concurso... trazer não sei quem... comprar uma casa... vender tal terreno... resolver um negócio... achar o que perdeu... passar no vestibular... fazer o time ganhar...  encontrar um amor... esquecer o fulano... dar juízo a sicrano... promover o beltrano... ganhar um dinheiro...  unir pai e filho... marido e mulher... sarar uma dor...

E, ano após ano, a fé se renova... Os pedidos aumentam... Cresce a procissão... De joelhos, descalços, vestidos de anjo... Agradecendo ou pedindo... Rezando ou cantando... Chorando ou sorrindo...  Louvando, contritos, a Virgem da Conceição.

É a fé, que sustenta e alimenta a esperança... Que segura as pessoas... Que ajuda a viver. Fé, que une os Cristãos... Dá sentido à vida... Remove montanhas... Fortalece o ser.

E no ano seguinte, no morro da Virgem, no mês de dezembro, a festa é igual... O morro iluminado... Cheio de pontos de luz... Quem vê lá de baixo parece uma árvore de Natal... Enquanto lá em cima, a imagem da Santa acolhe em silêncio as preces dos fiéis...
       
- "Obrigada, minha Santa Virge da Conceição, o Zezinho passou... Vai pra oitava esse ano... Tá ajudando na missa... Tá cum pensamento de home... Agora obedece... Vem cedo pra casa... Faz logo a tarefa...  Inté a professora elugiô o muleque e a cumadre também. Obrigada, minha mãe! A Sinhora me uvíu... É milagre, minha Santa... Meu fio vai ser um home de bem..."

E, Maria, ajoelha... Acende uma vela... Reza o terço todinho... Agradece à Santa e deposita aos seus pés uma cabeça de cera... (que simboliza a cabeça do filho). Paga a promessa e quando termina já tem outro pedido...
       
- "Acode, minha Virge, tô aflita de novo... Não é mais o Zezinho... Agora é Mané...  Pois num é qui largou do trabalho? Já viu disso, minha Santa? O home caiu na bebida, quer deixar a famía, enrabichou cuma dona, tá cum outra muié. Num é um fim de mundo, minha Santa? Me arresponde... Num é? Acode, minha Virge, traz de vorta o meu nego... Dá juízo pra ele, lhe arruma outro emprego, me cunserta o Mané."

(Do Livro da autora: A VIDA ATRAVÉS DOS CONTOS - Socorro Capiberibe - Editora Universitária - UFPE, 2002)

Obs. Todos os livros de Socorro Capiberibe encontram-se à venda na AMPARE
81-3222.6252 e 9.9504.0782 (Whatsapp)
`
  },
  {
    titulo:"SALA DE LEITURA //LEMBRANÇAS DE UMA NOITE DE NATAL",
    tipo:"Conto",
    trecho:"Era uma tarde luminosa de Dezembro... O vento soprava brando, vindo do mar...",
    imagens:["imagens/combined-image.png"],
    texto:`Para os amantes da leitura...


''''O ÚLTIMO ESPETÁCULO... OU O COMEÇO DO FIM.""

Era uma tarde luminosa de Dezembro... O vento soprava brando, vindo do mar. A praça principal do lugarejo com a igreja, a Prefeitura, o colégio municipal e um pequeno comércio, pararam para ver a chegada do circo na cidade.

‘BOA TARDE MINHAS SENHORAS, MEUS SENHORES, JOVENS E CRIANÇAS DE SÃO JOSÉ DO PORTO... O GRANDE CIRCO TABAJARA TEM A GRATA SATISFAÇAO DE CONVIDAR A TODOS PARA ESTREIA DE NOSSA TEMPORADA NESTE DOMINGO ÀS DEZESSETE HORAS. NÃO FALTEM. CONTAMOS COM TODOS VOCÊS E LEMBREM-SE:  *ENQUANTO EXISTIR O CIRCO,  O SONHO TAMBÉM VIVERÁ...*

A música soou forte pelo alto-falante, ecoou pela praça, penetrou nas casas, mexeu com os corações e fez surgir pessoas de todos os lugares, de todas as cores, crenças e idades. Era a magia do circo despertando as fantasias e invadindo a alma daquele povo simples do lugar.
A cidade se encheu de alegria. A meninada era um alvoroço só. Os portões do colégio se abriram e os alunos correram para a rua. Todos queriam ver o desfile da bicharada: elefante, leão, tigre, onça, macaco... SÃO JOSÉ DO PORTO parou para ver o circo chegar.

Canduca largou sua carrocinha de pipoca no meio da praça, e correu desabalado, camisa aberta ao peito e pés descalços, coração explodindo de emoção. Correu, fazendo toda sorte de piruetas e cambalhotas, atrás dos caminhões enfeitados e coloridos do GRANDE CIRCO TABAJARA, que entrava glorioso naquele lugarejo simples, naquele ponto esquecido do mapa, aguçando a curiosidade dos moradores e mexendo com a rotina tão pacata da cidade.

Canduca era um menino sozinho, sem pai nem mãe ou irmãos. Vendia pipoca na praça, na praia, na porta do colégio, na frente da igreja, nas quermesses... Onde houvesse gente, Canduca estava lá. Fora criado pelos padrinhos, um casal pobre e sem filhos, que o adotou ainda criança quando seus pais morreram e lhe deram o ofício de pipoqueiro, para ajudar na despesa da casa. Quando o padrinho morreu, encharcado pela bebida, a madrinha o arrastou para morar com ela num abrigo público, onde tinham um colchão para dormir e um prato de sopa todas as noites. Sobrevivia da carrocinha de pipoca e era conhecido por todos do lugar. Tinha dezesseis anos, o curso primário e a paixão pelo circo. Cada circo que chegava e partia, mexia com a cabeça do rapaz, enchia de esperanças o coração de Canduca.

No último caminhão seguiam os artistas: mágicos, palhaços, trapezistas, malabaristas... O palhaço avistou Canduca atrás da caravana, correndo, gritando, fazendo piruetas, dando  cambalhotas, ao som contagiante da música... Tirou o chapéu, sorriu e acenou para o menino... Canduca ficou emocionado. Fez mais estripulias. Mostrou seu talento. Ganhou aplausos. Sentiu-se um artista. Tocou o coração do palhaço.

O circo fez sua estréia no domingo às dezessete horas, para uma platéia lotada e esfuziante de alegria. Foi um sucesso. O espetáculo foi maravilhoso, todos os bilhetes foram vendidos. 

Lá na frente estava Canduca... Na primeira fila... Feliz... Coração saltando do peito... Olhos brilhando de tanta emoção. Mais uma vez esquecera a carrocinha de pipoca e fora se juntar à platéia, aplaudindo, gritando, se permitindo ser feliz. Naquele instante Canduca era gente simplesmente... Podia viajar nos seus sonhos... Podia mergulhar na ilusão.
Prestou o máximo de atenção aos mínimos detalhes de cada apresentação, mas foi na vez do palhaço que Canduca ficou mais empolgado. O velho palhaço, o artista mais antigo da Companhia, deu um show de alegria. Fez toda sorte de brincadeiras, contagiou as crianças, levou a platéia ao delírio.

DISTRAÇÃO avistou Canduca, ali juntinho do picadeiro e repetiu o gesto com o qual saudou o garoto do alto do caminhão, quando o circo entrou na cidade... “Tirou o chapéu, sorriu e acenou para ele...” Canduca ficou de pé e aplaudiu, enquanto seus olhos se enevoaram de lágrimas.
O palhaço estendeu a mão para o rapaz e o convidou a subir ao palco, para participar de uma brincadeira. Distração entregou-lhe um balde cheio de papel celofane transparente picado e segredou-lhe ao ouvido... Canduca soltou uma gargalhada marota, fez uma pirueta e fingiu um tropeço, derrubando o balde em cima da platéia. Foi um rebuliço só... Aquele susto... Um pula-pula sem fim. Todos queriam se livrar do banho. Depois o UUUHHHHHHH!... A risada... O aplauso.
Canduca foi aplaudido com entusiasmo pela platéia. Curvou-se diante do público, num cumprimento solene, apertou a mão de Distração, o palhaço amigo, e desceu do picadeiro ao som de “vivas, assobios e palmas”. Seu coração parecia querer saltar do peito... Prendeu o choro... Forçou um sorriso... De volta à sua cadeira, Canduca chorou.

O circo demorou-se um mês em São José do Porto.
A pequena cidade litorânea era simpática e hospitaleira, o clima agradável, o povo acolhedor e amigo. Durante trinta dias a cidade teve sua rotina modificada... A fantasia andava solta... O riso pairava no ar. Existia um clima de festa, o circo estava sempre lotado. Todos se deram o direito de sonhar.

Canduca esteve presente em todos os espetáculos. Tinha lugar marcado na primeira fila. Tornara-se grande amigo do palhaço e ganhara a simpatia de todos do circo.
O jovem pipoqueiro levou seu amigo a conhecer todos os recantos da pitoresca cidade: O porto, a praia, o abrigo público onde morava com a madrinha, a igreja, o colégio municipal, a praça... Em todos os lugares onde sua carrocinha de pipoca pudesse chegar. Em troca, Distração ensinou ao rapaz muitas brincadeiras, truques e segredos do mundo mágico do circo.
Canduca escutava atento, maravilhado, boquiaberto, cada vez mais apaixonado pelas aventuras do picadeiro. Assimilava fácil, aprendia rápido, mostrou-se excelente aluno.
Distração o olhava comovido e orgulhoso... “O  menino tinha talento; tinha futuro; o circo não podia acabar...”
E ele, Distração, o velho palhaço, o artista mais antigo do circo... – Cinquenta anos de picadeiro - sentiu o peso dos anos pousarem sobre seus ombros. Sentiu-se velho. Sentiu que era chegada a hora de parar, guardar a fantasia, ter um pouso certo. Tinha diante dele Canduca, um jovem de dezesseis anos, cheio de garra, esbanjando talento e se perdendo com uma carrocinha de pipoca, naquele lugarejo tão distante. Canduca tinha um futuro promissor... Tinha um caminho a percorrer...
Era como uma pedra bruta a ser lapidada. Tinha a esperança a sua frente... Para ele, Distração, existia o passado, as lembranças da juventude, a saudade dos anos de glória, das noites de festas, do circo lotado, do aplauso da platéia, do riso solto da garotada, de todas as cidades que conhecera e de todos os amigos que ganhara, ao longo daqueles Cinqüenta anos de circo. Era uma grande bagagem...  Iria sentir saudade... Mas era hora de parar. Chegara o momento de “passar a faixa” para outro palhaço e Distração viu em Canduca um excelente candidato para substituí-lo.

Veio a noite de Natal...
Durante a ceia com seus companheiros, Distração falou do seu desejo de preparar o rapaz para ser seu substituto. Todos ficaram perplexos, mas o palhaço disfarçou a emoção e prosseguiu com tranqüilidade e firmeza...
Estava cansado, não agüentaria por muito tempo as longas viagens de caminhão, por tantas estradas, dormindo em acampamentos. Era chegada a hora de fechar com “chave de ouro” sua carreira. Seria um palhaço aposentado, faria parte de platéia.
Todos o ouviram em silêncio, pesarosos, solidários. Sabiam que aquele dia chegaria para todos eles. Formavam uma grande família. Houve lágrimas e brindes, mas também houve compreensão. Um artista sempre sabe a hora de: “descer o pano... fechar a cortina... despedir-se do palco”.
Programaram uma linda despedida para Distração. O espetáculo da passagem do ano seria a última apresentação do palhaço e também a despedida do circo em São José do Porto. Convidariam Canduca para seguir com a companhia e Distração iria se recolher no Retiro dos artistas - “o acampamento sede” - moradia de todos os artistas veteranos que se aposentavam.
Distração faria parte da platéia e contaria a história do circo a outras gerações. O palhaço, também escutou silencioso, a proposta dos seus companheiros, sorriu com tristeza e ficou pensativo... “Talvez fosse melhor assim...” Agradeceu a todos e saiu.

Aquela noite, depois da ceia, Distração foi com Canduca visitar o abrigo público... Levou sua fantasia de palhaço e fez uma apresentação especial, única, inesquecível, para todas aquelas pessoas: homens, mulheres e crianças, que usavam o abrigo como moradia. Olhou com ternura os diversos rostos à sua volta e ficou comovido.  Lembrou-se de uma frase inscrita no caminhão do circo: “Enquanto existir o circo, o sonho também viverá...”. Aquele povo pobre... Cansado e maltrapilho, que só tinha de certo um colchão para dormir e um prato de sopa para tomar, também guardava dentro de si um resto de esperança, vestígios de alegria, um pouco de criança, o direito de sonhar.
E Distração esmerou-se. Deu o melhor de si. Fez seu melhor espetáculo. Repetiu com Canduca aquela brincadeira do balde que fizeram na estréia e a cena se repetiu: susto, gargalhada e aplauso. Todos pareciam crianças naquele momento...

O abrigo teve uma noite feliz... Uma noite de festa... Uma noite de paz. Distração compartilhou com eles sua noite de Natal. Um Natal simples e humilde como foi o do Menino Jesus em Belém.
De volta ao acampamento, diante dos letreiros luminosos do circo, Distração olhou comovido nos olhos do jovem e fez o convite para ele seguir com a caravana e fazer parte da companhia.
Canduca quase não acreditou...  Abraçou forte o palhaço, recostou a cabeça em seu ombro e chorou. Aquele convite era tudo o que queria na vida. Para Canduca aquele momento representava o começo... Para o palhaço, o começo do fim.

Chegara finalmente o grande dia! O dia da despedida! 
 
Canduca dormia tranqüilo, sorriso nos lábios, sonhando talvez com os aplausos e os fogos do último espetáculo do Circo na passagem do ano... 

Foi um espetáculo emocionante. Maravilhoso. Inesquecível. Era a despedida de Distração do palco, a despedida do circo em São José do Porto, o ingresso de Canduca na Companhia e a passagem do ano. Era muita coisa de uma só vez... Havia um misto de alegria e de saudade.
Houve uma linda homenagem de todos os  artistas ao companheiro, que após Cinqüenta longos anos dedicados ao circo, fazia sua última apresentação... 

Distração foi aplaudido de pé... Emocionou-se... Emocionou. Falou aos amigos, acenou à platéia, agradeceu a Deus, chorou. 

Houve entrega de presentes, retratos, beijos e abraços... Lá fora o céu estrelado e o espocar dos fogos que saudavam o ano novo.

No “trailer”, Distração contemplou mais uma vez o rapaz adormecido, o novo artista do Grande Circo Tabajara, que sonhava sereno com o futuro que o esperava e sorriu. Tinha sido uma excelente escolha. Canduca seria certamente um grande palhaço e ele, Distração, sentiria saudade. O velho palhaço acariciou de leve os cabelos encaracolados do jovem, depositou um envelope fechado sobre sua mesa, debaixo de uma foto sua e saiu silencioso, com uma mochila na mão, pelo acampamento adormecido.

Tinha outros planos para ele... Passara toda uma vida sendo apenas palhaço... Agora, que já não lhe restava tanto tempo, queria ser simplesmente gente... Aquele espetáculo no abrigo público, na Noite de Natal, mudou seus planos... Antes de se recolher ao “Retiro dos artistas”, ainda queria conhecer um lado da vida que não conhecera. E Distração deixou para trás os companheiros e seguiu pela cidade deserta rumo ao abrigo.

Todos dormiam... Apanhou um colchão enrolado que se encontrava junto de uma carrocinha de pipoca, estendeu no chão e deitou-se. O abrigo ganhou um novo hóspede e no dia seguinte haveria também um novo pipoqueiro na praça.

O grande Circo Tabajara deixou São José do Porto incompleto, faltando um pedaço, triste e saudoso do velho palhaço... Mas respeitaram o desejo do companheiro e sabiam que um dia todos se encontrariam. Na hora em que a caravana partiu, Canduca avistou Distração com a carrocinha de pipoca na porta do Colégio Municipal, cercado de crianças...
O rapaz fez menção de gritar, de mandar parar a caravana... Mas um nó apertou-lhe a garganta quando o velho amigo tirou o chapéu, sorriu e acenou-lhe, pedindo com a mão para prosseguirem... Canduca silenciou. Permaneceu imóvel, olhando a cidade que ficava para  trás... No caminhão a inscrição: “ENQUANTO EXISTIR O CIRCO, O SONHO TAMBÉM VIVERÁ.”
______________________________

Do livro da autora:  HISTÓRIAS QUE A VIDA ESCREVEU -  Contos & Crônicas) // À venda na AMPARE (Pça Oswaldo Cruz, 393/Anexo, Boa Vista, Recife/Pe).
81-3104.7617 e 9.9504.0782

Canal do YouTube: 
Socorro Capiberibe

Site literário:
socorrocapiberibe.com.br`
  },
  {
    titulo:"SALA DE LEITURA // HORA DO CONTO // SOCORRO CAPIBERIBE",
    tipo:"Conto",
    trecho:"Ela sempre tomava o mesmo ônibus, na mesma hora, no mesmo ponto, cada manhã, durante anos...",
    imagens:["imagens/combined-image(1).png"],
    texto:`

"COMPANHEIROS DO ACASO"

"Ela sempre tomava o mesmo ônibus, na mesma hora, no mesmo ponto, cada manhã, durante anos... Sabia exatamente o horário que ele passaria e até os passageiros que frequentemente ele conduzia.

Era como se fossem todos colegas: do mesmo trabalho ou do mesmo colégio. Uma vez ou outra surgia um rosto novo... Por poucos dias, por muitos dias ou por um dia apenas. Cada um com seus compromissos, em cada um deles uma realidade, em todos eles o mesmo desejo: chegar ao seu destino... E eram tantos e tão diferentes esses destinos!

Alguns se cumprimentavam cordialmente com um sorriso e até mantinham alguma conversa com os que sentavam ao lado. Outros apenas balançavam discretamente a cabeça num gesto de reconhecimento; enquanto outros permaneciam totalmente distantes como se cada vez que se vissem fosse a primeira vez.

O motorista e o cobrador, entretanto, eram os mesmos e parecia conhecer a todos.

Interessante como o ser humano consegue se expressar mesmo sem palavras. Os olhos falam, a expressão da boca, as rugas na testa, o sorriso, a postura do corpo, o repouso das mãos ou das pernas, tudo tem a sua própria linguagem... O corpo fala por si, muito embora nem todos consigam decifrar.

Ela observava atentamente do seu assento cada companheiro de viagem e tentava traduzir os seus gestos ou até ler seus pensamentos... Algumas vezes acertava e chegava a sorrir da sua intuição.

Já conhecia bem o jovem casal de namorados que ocupava sempre o primeiro banco e descia junto no cursinho pré-vestibular.
Sabia quando eles tiravam boas notas e estavam alegres; quando estavam brigados e mal se falavam; quando faziam as pazes e ficavam mais apaixonados e até quando estavam apreensivos e se preparavam para uma nova prova.

Conhecia também o vendedor de enciclopédias, sempre com a sua bolsa carregada de livros e que saía para oferecer nos colégios e repartições. Certa vez sentara ao seu lado e ele tentou lhe vender a versão mais atualizada da BARSA por um preço promocional incrível e em não sei quantas prestações...

Havia ainda a freira – estudante de psicologia – que descia diariamente na porta da Faculdade. Ela sempre estava com um livro sobre o comportamento humano na mão ou com o seu inseparável caderno de várias matérias onde registrava as suas anotações sobre as aulas. Também já tivera oportunidade de sentar junto dela...

E, assim, de uma forma ou de outra, ia mantendo em silêncio essa relação telepática com cada um deles.

Certa manhã ao pegar o ônibus, após fazer as suas constatações habituais, percebeu um novo passageiro e pôs-se a fazer conjecturas sobre o novo colega.

Observou-lhe a fisionomia tranquila e quase feliz... O porte esguio e bem trajado... O modo confiante com que segurava a pasta e a expressão de admiração no olhar para com tudo o que via de passagem.

... Eu acho que ele não é daqui... Talvez esteja chegando ‘a cidade pela primeira vez... O que será que ele faz?...

Sentindo-se observado o jovem olhou-a por alguns instantes, passeou rapidamente os olhos pelos outros passageiros e em seguida voltou-se a contemplar pela janela.

No dia seguinte lá estava ele outra vez...
Quando ela entrou, ele a cumprimentou com a cabeça e indicou-lhe um assento vazio ‘a sua frente.

Durante aquela semana e na outra semana e em todas as semanas seguintes, quando ela entrava no ônibus o jovem já estava nele.

... De onde ele vinha? Ela não sabia. Para onde ele estava indo... Ela também não sabia, uma vez que sempre descia antes dele...

Algumas vezes sentava ao lado dele quando o assento estava livre. Outras vezes ele lhe cedia o lugar quando o ônibus estava cheio... E na maioria das vezes – sempre que podia – ele dava um jeito de colocar o paletó e a pasta sobre o assento vizinho para guardar o lugar para ela.

Chegavam a conversar sobre coisas corriqueiras: a previsão do tempo, o trânsito, alguma noticia do jornal, alguma reportagem de revista ou algo visto na televisão. Eram companheiros de viagem. Tinham um encontro marcado todos os dias no mesmo ônibus. Formou-se um agradável e cordial elo entre eles... Uma mistura de satisfação, respeito e simpatia. Era quase uma alegria aquele encontro de todo dia.

Veio o fim do ano...
A freira concluiu o seu curso de Psicologia e despediu-se afetuosamente do cobrador e do motorista. Não precisaria mais vir todas as manhãs para a Faculdade. Sentiria falta deles, mas qualquer dia desses, quem sabe, pegaria o ônibus para revê-los. Outros passageiros precisariam do seu assento.

Chegou também o vestibular...
A jovem aluna conseguiu entrar para a Faculdade, mas o namorado não foi aprovado no concurso e agora viajava sozinho no ônibus todos os dias para o cursinho.

Novos rostos surgiam entre os passageiros e passavam a integrar aquele coletivo.

Certa manhã ela tomou o ônibus em seu horário habitual e sentou-se ao lado do companheiro que a aguardava com um sorriso e que há um ano guardava o seu lugar...

Falaram sobre a chuva que caiu á noite, sobre a manhã que estava mais fresca, sobre o inverno que se anunciava mais cedo, o frio no sul do país, o filme da véspera na televisão...

Chegou a sua parada. Quando ela levantou-se para descer, ele a acompanhou. Pela primeira vez eles desceram juntos na mesma parada. Surpresa, ela perguntou:

- O que houve? Não vai ao trabalho hoje?

Ele tomou a mão dela, entre as suas, e falou cheio de respeito e gratidão...

- Na verdade hoje eu vim só para me despedir. Fui transferido para uma filial em outra cidade... Não poderia viajar sem falar com você.

Retirou do bolso um cartão contendo o novo endereço e o telefone, abraçou-a com força e atravessou a rua para tomar o ônibus de volta para casa.

Com uma estranha sensação de vazio dentro do peito - uma espécie de saudade do amigo anônimo – ela olhou o cartão que acabara de receber e deu-se conta do tamanho do afeto que nutria por ele.

Assim é a vida... Pessoas entram e saem constantemente em nosso caminho, sempre nos acrescentando alguma coisa ou deixando alguma recordação. Sempre existirão os passageiros do acaso.

Na manhã seguinte, quando ela pegou o ônibus para o trabalho, o vendedor de enciclopédias ofereceu-lhe o assento e começou a lhe mostrar uma nova coleção de dicionários ilustrados, de última geração, por um preço imperdível e uma forma de pagamento sem igual..."

*Socorro Capiberibe 

Do livro da autora: A ARTE DE CONTAR HISTÓRIAS - 50 MELHORES CONTOS & CRÔNICAS // À venda na  AMPARE - Rua Oswaldo Cruz, 393 / Anexo - Boa Vista, Recife/PE. 
81-3104.7617 e 9.9504.0782 

YouTube: 
Socorro Capiberibe

Site literário:
socorrocapiberibe.com.br`
  },
  {

    titulo:"SALA DE LEITURA  / COM SOCORRO CAPIBERIBE",
    tipo:"Conto",
    trecho:"Os sonhos são livres, são jovens, são belos! São vôos diretos em busca de Paz. Alimentam esperanças, desejos secretos... Os sonhos são eternos... Não morrem jamais.",
    imagens:["imagens/socorro_e_paisagem.jpeg"],
    texto:`SALA DE LEITURA  / COM SOCORRO CAPIBERIBE
"Os sonhos são livres, são jovens, são belos! São vôos diretos em busca de Paz. Alimentam esperanças, desejos secretos... Os sonhos são eternos... Não morrem jamais." 
*Socorro Capiberibe  

COMO SONHA MARICOTA...

Fim de tarde. Brisa morna vinda do mar balança suavemente as folhas de um viçoso jasmineiro perfumando o ar e levando para longe os sonhos de Maricota. Toda tardinha a moça se debruça na janela do sobrado e solta seu pensamento como quem abre a porta de uma gaiola... E como corre o pensamento da crioula! Como sonha Maricota!

Nem bem ela se debruça sobre o jardim florido e lança o seu olhar carregado de saudade ladeira abaixo, por aquela rua estreita com calçamento de pedras, ladeada de antigos sobrados multicoloridos, que vai dar no mar... O seu pensamento tal qual passarinho cativo se desprende dela, ganha asas ligeiras, corre solto no vento e vai muito além do que os olhos de Maricota conseguem chegar.

O pensamento de Maricota corre pras bandas do Norte, pra sua vila esquecida, rua batida de barro, casas de palha e madeira, rio beirando a colina, pés de caju e goiaba, gado solto na rua, meninos de pé no chão, mulheres com trouxas de roupa na cabeça, burros puxando carroça, homens na plantação. Seu Chico cortando fumo na porta do armazém; Severino no pátio da feira contando histórias de assombração. Alzira assando castanha em frente ao coreto da praça, Elvira pintando a unha sentada no batente de casa e sonhando com Sebastião. Bentinho empinando papagaio, mãe preta fazendo tapioca, Mocinha cozinhando milho, Poeta cantando seus versos, Terêncio carregando carvão.

- Que idade teria Maricota? E quem poderia afirmar se mal sabia das letras ou dos números e não tinha certidão de nascimento que pudesse atestar? A mãe era analfabeta, o pai variava com a lua; Alzira, a irmã mais velha, dizia que ela tinha nascido nas chuvas de Janeiro; Elvira, encostada a Alzira, teimava que ela nasceu num susto com uma bomba de São João... A verdade é que Maricota não tinha data de aniversário... Sabia apenas que viera menina, do interior da Paraíba, trazida por uma tia, para trabalhar de babá, na cidade de Olinda em Pernambuco, há quase vinte anos atrás.

Lembrou de quando viu o mar pela primeira vez... Aquela imensidão de água salgada, indo e vindo em ondas azuladas, que se quebravam em espumas na areia. Tirou o sapato, molhou timidamente os pés e bebeu um pouco da água... Queria ver se era mesmo verdade que continha sal... Depois levantou a saia e adentrou no mar... Coração batendo forte de emoção, não sabia se sorria ou se chorava... A água subia pelas pernas e mais água descia dos seus olhos... Maricota jurava que não poderia haver nada mais belo que o mar e prometeu naquele momento que não importava o tempo que passasse, um dia ela traria a sua família para ver o mar... Para morar ali com ela.

Levaria sua mãe para tomar sorvete na sorveteria chique de Olinda, comer tapioca na Sé, tomar banho salgado. Passearia com ela de ônibus pelo Recife, fariam compras no comércio da cidade e sentariam para conversar no Parque 13 de Maio. À noite assistiriam à televisão e sonhariam com o mundo fantástico das novelas. Seus irmãos poderiam estudar e seriam doutores... Suas irmãs se casariam e seriam felizes. E, ela, Maricota, compraria uma casa para morar com a mãe de frente para o mar e com um bonito pé de acácia amarela no jardim.

Passaram vinte Natais e Maricota a sonhar... As crianças que viera cuidar cresceram e casaram... E, a família de Maricota não conhecia o mar!

- Olha o pão, Maricota!

Chegou o entregador da padaria em sua bicicleta e parou diante do portão do sobrado interrompendo os devaneios de Maricota. Ela pegou o dinheiro no bolso do vestido, entregou ao rapaz e pegou o pão ali mesmo pela janela. O rapaz foi embora com o bagageiro carregado de pães; Maricota voltou-se para o interior da casa, arrumou o pão na cestinha sobre a mesa e foi cuidar do jantar. Mais um pouco e o pessoal estaria chegando para ceia.

(INSPIRADO EM TANTAS "MARIAS, JOSEFAS, SEVERINAS, ROSENILDAS... QUE DEIXAM SUAS CIDADES E SUAS FAMILIAS E PARTEM EM BUSCA DE SEUS SONHOS... SONHOS ESSES - QUE COMO OS DE MARICOTA - NEM SEMPRE SE REALIZAM, MAS QUE NEM POR ISSO DEIXAM DE SER LIVRES E BELOS E JOVENS E ETERNOS)

*Do livro da autora: A arte de contar histórias (50 Melhores contos & crônicas)

À venda na AMPARE: Rua Oswaldo Cruz, 393 / Anexo, Boa Vista, Recife/PE.

Fones: 3104.7617 e 9.9504.0782 (Whatsapp)

Acesse o site literário da autora:
socorrocapiberibe.com.br 

Instagram:
@msocorrocapiberibemaia 

YOUTUBE:
Socorro Capiberibe`
  },
  {
    titulo:"PARA OS AMANTES DA LEITURA... // SALA DE LEITURA // HORA DO CONTO ",
    tipo:"Conto",
    trecho:"Alegria de uns, tristeza de outros ou um peixinho brincalhão e um gato muito esperto...",
    imagens:["imagens/compilcao_socorro_livro.jpg"],
    texto:`
"A vida é agora. Viva! O tempo é curto. E a gente nunca sabe quando o nosso relógio vai parar. Ame mais. Abrace mais. Perdoe mais... Porque a vida é breve e nós não sabemos quanto tempo nos resta."

ALEGRIA DE UNS, TRISTEZA DE OUTROS OU UM PEIXINHO BRINCALHÃO E UM GATO MUITO ESPERTO...

O dia nasceu em paz como nascem todos os dias. 
O sol, majestoso, despontou no horizonte e seus raios dourados desceram do céu e cobriram os montes; atravessaram as folhagens; penetraram nas florestas; iluminaram os campos... Colorindo as flores; aquecendo as águas dos mares, rios e lagos; descortinando a manhã. Ah! E era uma linda manhã! Uma manhã feliz. Uma tranqüila e fresca manhã de Julho. 

Sons maravilhosos enchiam o ar e falavam de vida...
O galo cantou anunciando a manhã nascida; a galinha cacarejou chamando seus filhotes; os pintinhos se alvoroçaram; os passarinhos entoaram seu canto; os pombos bateram suas asas e partiram em revoada... Ah! Era de fato uma linda manhã! Uma manhã harmoniosa e abençoada... Como harmoniosas e abençoadas são todas as manhãs! Era a natureza toda que despertava para o milagre de um novo dia.

As mesas, arrumadas para o café, espalhavam-se pelo terraço arborizado da fazenda, e um cheiro apetitoso atraía os hóspedes... Tem coisa mais cheirosa que cuscuz no fogo? Bolo no forno? Queijo assando? Café fresquinho? Pois, é. Não dava para ficar na cama. E em pouco tempo as mesas estavam repletas e as famílias comiam e conversavam alegremente.

Ali embaixo da varanda cardumes corriam, brincavam, e por vezes saltavam, compartilhando com os patos a água cintilante e tranqüila de um lago. No extenso gramado que contornava o terraço, os pombos em festa, num alegre bater de asas, disputavam os farelos de pão e bolachas que os hóspedes lhes atiravam, para depois, satisfeitos, realizarem no ar um gracioso balé e retornarem para sua casa cravada no meio do lago.

Por vezes os pedacinhos de pão caíam na água; e os peixes saltitantes - tal qual os pombos no gramado - realizavam a mesma brincadeira e disputavam alegremente os miolinhos molhados. Era um verdadeiro festival de vida e alegria, dos bichos e dos hóspedes.

Indiferente a tudo isso, cauteloso e determinado, um gato muito esperto postou-se numa pedra na beira do lago, e como um pescador ardoroso ou um espectador enciumado, aguardou pacientemente o momento certo para fazer também a sua festa.

E, sem perceber o perigo que corria, nadando ligeiro ao encontro do pãozinho apetitoso... Um peixinho, saltitante de alegria, foi parar na boca de um gato traiçoeiro.

Debatendo-se e implorando pra ser solto, o peixinho foi levado pelo gato impiedoso que vorazmente o comeu, e satisfeito, foi dormir bem feliz dentro do mato.

A platéia, entre espanto e frustração, dividiu-se em acusação e defesa. 
Houve quem entendesse e justificasse a atitude do gato, como sendo a lei da natureza... 
Em que todos têm que garantir o seu sustento para a própria sobrevivência. 

Mas, houve também quem com a cena ficou chocado... 
Vendo o peixinho covardemente arrebatado... 
Retirado bruscamente do seu habitat natural, quando brincava acompanhado... Desfrutando do prazer de mais um dia, nadando feliz na tranqüilidade do seu lago.

Nunca se sabe o que pode nos acontecer...  No momento seguinte... A cada amanhecer... 

Enquanto uns nascem e festejam a preciosa vida... Outros morrem, inocentemente, sem querer.

E enquanto o gato descansava alimentado e satisfeito; 
sem nenhuma culpa pelo seu gesto traiçoeiro...
O dia se fez mais triste para os outros peixes...
Que no lago sofriam a perda do peixinho companheiro."

(Do Livro da autora: A ARTE DE CONTAR HISTÓRIAS) 

YOUTUBE:
SOCORRO CAPIBERIBE 

À VENDA NA AMPARE: RUA OSWALDO CRUZ, 393 / ANEXO,  BOA VISTA, RECIFE/PE
81-3104.7617 e 9.9504.0782

YOUTUBE:
SOCORRO CAPIBERIBE 

Instagram:
@msocorrocapiberibemaia`
  },
  {
    titulo:"SALA DE LEITURA // HORA DO CONTO // DEIXANDO UM POUQUINHO DE MIM...",
    tipo:"Crônica",
    trecho:"LEMBRANÇAS DA MINHA INFÂNCIA... RETRATOS DA MINHA VIDA.",
    imagens:["imagens/compilacao_socorro_jovem.jpg"],
    texto:` 

"Oh, que saudades que eu tenho da aurora da minha vida, da minha infância querida que os anos não trazem mais!" *Casimiro de Abreu 

""LEMBRANÇAS DA MINHA INFÂNCIA... RETRATOS DA MINHA VIDA.""
*Socorro Capiberibe

Não tem coisa que me dê mais saudade que ver pés de manga, caju e goiaba plantados ao longo de uma estrada, ornamentando os quintais das casas simplesinhas com cadeiras de balanço e rede nos terraços, que se espalham pelos campos beirando as colinas ou margeando rios...

Desde menina percorro com a minha família a estrada que liga João Pessoa a Recife, capitais de estados vizinhos que guardam pedaços da minha infância e juventude até a minha idade atual, compondo assim o retrato da minha vida.
Tenho uma relação muito forte e estreita com essas duas cidades.

Em João Pessoa eu nasci e vivi a minha infância, ao lado dos meus pais e de meus irmãos, no bem-aventurado convívio com meus avós, tios e primos maternos. 

Era a época dos circos, dos cozinhados no quintal, dos veraneios em Tambaú com pescarias, assustados, serenatas e banhos de mar. Era também a época dos cajus, das goiabas e das mangas tirados por nós das próprias árvores e das castanhas assadas com carvão em fogareiro de barro.

Ah, João Pessoa querida! Cidade pequenina e amada! João Pessoa do meu “Jardim da infância Nossa Senhora de Lourdes no Instituto Dom Adauto”, da minha primeira professora “tia Herundina”, do meu “curso primário” no Colégio de Nossa Senhora das Neves onde eu recitava de Casimiro de Abreu “Meus oito anos”. João Pessoa da “Lagoa”, da “Bica”, do “Cabo Branco” e da “Festa das Neves”... Como foi triste e saudosa a minha despedida de ti.

Chegamos a Recife em fevereiro de 1966, nossos pais, meus irmãos e eu. Recife nos acolheu de braços abertos. Uma nova etapa de nossas vidas iniciava-se ali. 

Foi amor à primeira vista. Apesar da saudade que trazia no peito quando te vi me encantei! Tua alegria me contagiou. Pareceste-me tão grande e tão bela naquela tarde banhada de sol. Havia tanta gente nas ruas, tantos ônibus enormes que eu não conhecia – “os ônibus elétricos” - Recife de mil encantos, foi aí que me apaixonei. Eu estava completando onze anos de idade... Tudo era novo para mim.

Ah, Recife... Recife!
Recife dos rios e pontes... Do rio Capiberibe como o meu nome - como constava nos livros de geografia daquela época e como pode ser visto ainda hoje nos mapas antigos da cidade expostos no Museu da cidade do Recife no forte das Cinco pontas – posteriormente mudado para rio Capib(a)ribe, nomenclatura que permanece até os dias atuais.

Recife de ruas singelas: da AURORA, do SOL, da AMIZADE, da CONCÓRDIA, da SAUDADE, da UNIÃO... Recife dos cinemas: SÃO LUIS, TRIANON, ART PALÁCIO e MODERNO... Recife da confeitaria CONFIANÇA na Rua da IMPERATRIZ, dos desfiles de sete de setembro na Av. CONDE DA BOA VISTA... Da CASA-NAVIO, do VELEIRO e do CASTELINHO na praia de BOA VIAGEM.
Recife da minha juventude, do meu curso ginasial no Colégio Nossa Senhora do Carmo, do meu baile de debutantes no clube INTERNACIONAL, do namoro, do casamento, da formatura na Universidade Federal, das minhas filhas e dos meus netos.

Nesse meu meio século de vida, quantas vezes percorri a velha estrada JOÃO PESSOA - RECIFE  / RECIFE – JOÃO PESSOA, em companhia da minha família e em diferentes automóveis: inicialmente ÔNIBUS, depois RURAL, KOMBI, OPALA, MARAJÓ, CHEVETTE, BRASILIA e o saudoso “FUSCA BRANCO de placa BX3535”?

Aprendemos a conhecer cada curva do caminho, cada ponto pitoresco da estrada: OS PÉS DE EUCALÍPTOS rodeando a IGREJINHA da Usina Nossa Senhora das Maravilhas; a parada em GOIANA para comprar frutas e ir ao banheiro; a FAZENDA RECREIO em Mata Redonda que indicava que estávamos bem perto de João Pessoa.

Hoje percorremos a mesma estrada com a família diminuída e ao mesmo tempo aumentada. 

Diminuída pela ausência de nosso pai, da nossa “Mãe de criação” e de dois dos nossos irmãos. Aumentada, porém, com a presença agora de nossos filhos e dos nossos netos. Nossa família de hoje já não cabe mais num carro só.

A estrada de agora está mais larga, mais moderna e mais movimentada, mas ainda conserva um pouco do que compõe as lembranças da nossa infância. 

É comum vermos ao longo da rodovia barracas de frutas coloridas: abacaxis, cajus, goiabas, abacates, bananas, mamões, laranjas, sapotis, cocos... Ainda podemos encontrar pessoas assando castanhas em fogareiros de barro embaixo das árvores e casas com cadeiras no terraço e roupas coloridas penduradas no quintal.

É uma alegria chegar a João Pessoa. É uma felicidade voltar para Recife.

As duas cidades se confundem em nossos corações e se entrelaçam em nossas vidas, escrevendo juntas as nossas histórias... 

E, tal qual os rios Capibaribe – outrora capib(e)ribe – em Pernambuco, e o rio Paraíba, na Paraíba,  deságuam juntos no oceano... Também o sangue Paraibano e o sangue Pernambucano correm juntos em nossas veias e desembocam no oceano da nossa família.

MEUS IRMÃOS E EU
No inicio éramos sete...
Oito passamos a ser...
Até que um nos deixou...
E éramos sete outra vez.
Outro também se foi...
Agora nós somos seis.
Um dia seremos cinco...
Seremos quatro...
Seremos três...
E quando todos partirmos...
Seremos oito outra vez.

DEDICATÓRIA:

A meus irmãos: Luis Filipe (Lula) / os gêmeos: José Walter (Vavá) e Fernando Antônio (Tota) - in memóriam - / Maria de Fátima (Fátima) / Maria de Lourdes (Lourdinha) / Isaura Maria aparecida (Amor) e ao caçula Marcos Marcel -(Marquinhos). 
Com carinho,
Maria do Socorro Capiberibe Maia (Socorro Capiberibe)
Recife, 26 de Novembro de 2010.

DO LIVRO: SOCORRO CAPIBERIBE.COM.VOCE // FACE A FACE (MEMÓRIAS)

À VENDA NA  AMPARE (PÇA OSWALDO CRUZ, 393, BOA VISTA, RECIFE/PE)
81-3104.7617 e 9.9504.0782 (WhatsApp)

socorrocapiberibe.com.br 

YOUTUBE:
SOCORRO CAPIBERIBE 

Instagram:
@msocorrocapiberibemaia
`
  },
  {
    titulo:"SALA DE LEITURA // HORA DO CONTO: A SOMBRA AMIGA -   ACONTECEU COMIGO...",
    tipo:"Conto",
    trecho:"Este conto é dedicado à minha mãe: Maria Ruth Marinho Capiberibe - In memorian - ('A MINHA SOMBRA AMIGA') - E A TODAS AS MÃES - QUE COMO A MINHA - DEDICARAM / DEDICAM - TODO SEU AMOR INCONDICIONAL E DESMEDIDO AOS SEUS FILHOS, QUE JAMAIS DEIXARÃO DE SER SUAS CRIANÇAS",
    imagens:["imagens/ruth_e_socorro.jpeg"],
    texto:` 
"ESTE CONTO É DEDICADO À MINHA MÃE: MARIA RUTH MARINHO CAPIBERIBE - In memorian - (A MINHA "SOMBRA AMIGA") - E A TODAS AS MÃES - QUE COMO A MINHA - DEDICARAM / DEDICAM - TODO SEU AMOR INCONDICIONAL E DESMEDIDO AOS SEUS FILHOS, QUE JAMAIS DEIXARÃO DE SER "SUAS CRIANÇAS")

"A SOMBRA AMIGA"

Todas as tardes Socorrinho saía com sua mãe. Estava se recuperando de um problema de saúde que a deixara muito debilitada. Precisava se readaptar a vida normal, das pessoas normais, fora dos limites do seu portão. Durante anos esteve prisioneira de sua própria casa, sua "gaiola dourada"... como costumava chamar, vítima de todos os medos  que a mente humana pode fabricar.
O mundo lá fora, além dos muros que a protegiam, a assustava. Criara um mundo todo seu, onde se escondia de tudo e de todos que pudessem, de alguma forma, provocar-lhe algum desconforto ou embaraço; qualquer coisa que representasse perigo ou desencadeasse medo. Seus amigos - os únicos que podiam ter acesso a esse mundo tão limitado - restringia-se a sua família.
Suas atividades: cuidar de plantas, peixes, passarinhos, fazer tricô, ler, ouvir música, assistir novelas. A vida lá de fora chegava até ela através da tela de tv.
Era dotada de uma sensibilidade extraordinária; amava as artes, estudava a vida dos mestres da pintura e dos compositores clássicos famosos; conhecia toda a obra de Chopin e apreciava a beleza singular da pintura de Renoir.
Tinha uma paixão especial pelos livros e pela música. Gostava de escrever e tocar violão. Tinha um bom arquivo de poemas e canções de sua autoria; entretanto guardava tudo só para si... Era um patrimônio restrito ao seu mundo particular; abrigado dentro dos limites de sua casa.

- Sempre fora assim?
- Não.
- Por que ficou assim?
- Também não sabia.

Foi uma criança normal igual a todas as crianças da sua idade, com medos e sonhos próprios da infância. Teve uma adolescência saudável, sem desajuste ou rebeldia e foi uma jovem feliz.  Freqüentou colégios e universidade. Teve muitos amigos, fez muitos passeios, foi a muitas festas. Brincou, dançou, namorou; fez tudo que teve direito e que a vida lhe proporcionou, dentro de uma juventude normal e saudável. Casou, teve filhos, constituiu uma família. Teve toda uma estrutura favorável e bem consolidada, que podia proporcionar uma vida harmoniosa e tranqüila.

- Onde estava o erro? O que foi que mudou? Por que a reviravolta em sua vida?...
- Não tinha resposta.

Nada explicava o medo que de repente se instalara em sua vida...

- Como entender que o mesmo mundo - outrora tão fascinante e sedutor -fosse de um momento para outro o grande monstro, o terrível fantasma, que tanto a assustava e a mantinha cativa do seu próprio lar?

- Como explicar tudo isso, se ela própria não entendia?...

A cabeça humana ainda é a "caixa preta" do avião. Talvez nos compêndios da psicologia e da medicina psiquiátrica, estivesse a resposta.
Existem coisas que simplesmente acontecem na vida da gente, para as quais não se tem uma explicação. Coisas, que a gente não quer e não pede que aconteçam, mas quando surgem tem que se buscar a solução.

Os únicos passeios de Socorrinho eram sempre feitos de carro... Era como se o automóvel fosse uma extensão de sua casa. Dentro dele e em companhia da família, sentia-se segura; desde que não precisasse saltar em nenhum lugar. Nele, podia ir tomar uma água de coco na praia olhando o mar; parar na sorveteria e tomar um sorvete ou ir a uma lanchonete e comer um sanduíche sem descer do carro.  Era de fato uma vida muito limitada; um mundo muito restrito e particular, o de Socorrinho.

Um dia, Socorrinho resolveu se deixar ajudar. Permitiu ser acompanhada por uma psicóloga. Queria sair da clausura; fazer parte outra vez do mundo dos "normais" e viver novamente a vida com toda intensidade, gozando de toda liberdade que alguém pode ter. Tinha dado o primeiro passo. Os outros passos se dariam naturalmente, lentamente, gradativamente... Afinal, Deus não criou o mundo num dia só... E todo recomeço é difícil; não se faz da noite para o dia. Tudo tem um momento certo para acontecer. E a recuperação de Socorrinho também aconteceria; era só esperar.

Matriculou-se numa aula de hidroginástica junto com as filhas. Tinha medo de ficar só na piscina sem alguém da família e com pessoas estranhas. "E, se passasse mal? Se cansasse muito? E se desmaiasse?..."  - as filhas lhe davam segurança... Cuidavam dela... Ficavam atentas a qualquer expressão de cansaço ou de medo no rosto de sua mãe. Isso a tranqüilizava, mas também a entristecia. Era incrível pensar que ali naquela mesma piscina há anos atrás, era ela Socorrinho, quem entrava com suas filhas ainda criancinhas, carregando-as no colo, para aprenderem a nadar. Agora era o contrário, as filhas já moças, tomavam conta da mãe. A vida tem desses contrastes e ainda bem que podia contar com a ajuda das suas filhas. Os benefícios da água para o corpo são realmente maravilhosos e Socorrinho passou a curtir ao máximo as suas aulas. Começou a sentir-se melhor com ela mesma. Tinha mais disposição durante o dia. Dormia bem à noite e relacionava-se melhor com as pessoas. Fez amizades com todo o grupo, chegava a trocar receitas com as colegas... Começou a curtir o seu bronzeado como nunca e mal conseguia esperar pela hora das aulas, tanto que gostava daquela atividade. Aceitou um desafio com o professor: iniciou uma dieta e se propôs a trabalhar o corpo dentro da água, executando com a maior dedicação todos os exercícios. Começou a perder peso. O professor dava o maior estímulo. Ficava atento a qualquer erro e corrigia no ato. Em pouco tempo Socorrinho dispensou os cuidados das filhas... Elas não tinham mais que continuar freqüentando as aulas se não quisessem e realmente elas não quiseram. Preferiram se matricular numa outra modalidade de ginástica, própria para a idade delas e com uma turma também mais jovem. Socorrinho não se intimidou. Passou a fazer as aulas sozinha. Começava a resgatar sua auto-confiança. Era o tratamento surtindo efeito... O médico e a psicóloga, juntos. Um trabalho paralelo...  Remédio e exercícios lado a lado, dia a dia, sem descanso.

Comprou um teclado e começou também a ter aulas particulares. A música é um estado de espírito, algo Divino e maravilhoso, capaz de harmonizar corpo e alma numa perfeita comunhão...  E ninguém poderia amar mais a música do que Socorrinho. Quando sentava diante do teclado, seus dedos dedilhavam suavemente as melodias enquanto sua mente era toda descontração e paz.
As vezes, começava um exercício prescrito pela professora, mas bastava um acorde em falso ou uma nota descuidada, que a fizesse lembrar de tal melodia... E lá se ia Socorrinho tentar tirar a tal música... Concentrava-se nas notas, apurava os ouvidos e esquecia da aula... Alguns minutos depois era capaz de tocar a melodia inteira - apenas dedilhando- e corria para copiá-la num papel. Precisava mostrá-la à professora na aula seguinte. A música também passou a ter uma presença maior no seu tratamento.

Outros exercícios foram sendo acrescentados à vida de Socorrinho. Era preciso sair à rua sozinha. Tinha que se libertar da sua gaiola dourada... Tinha que desmanchar os nós que a prendiam em tantos medos. Começou caminhando até a esquina mais próxima, sempre em companhia de alguém. Era difícil; sentia-se insegura; mas insistiu. Dia após dia, o mesmo exercício, até ficar uma coisa normal. Depois, o percurso do passeio foi aumentando até a outra esquina, depois já dobrava a rua e algum tempo depois já caminhava todo o quarteirão. O segundo passo mudou um pouco:  agora, em vez da companhia de uma pessoa, fazia o mesmo passeio seguida pelo seu cachorrinho de estimação. Era incrível como um simples animalzinho conseguia lhe passar segurança e diminuía a sua solidão. Finalmente conseguiu sair sozinha e percebeu que não era tão ruim assim.

Começava a se sentir "normal"... Já experimentava uma agradável sensação de liberdade... E para tornar o seu exercício ainda mais proveitoso, passou a atribuir-lhe alguma finalidade: comprar o pão na padaria da esquina; algumas frutas no mercadinho do bairro; fazer as unhas no salão mais próximo ou uma compra qualquer no comércio local.

Estava redescobrindo a vida. Era maravilhoso viver. Às vezes, em seu passeio pelo bairro, Socorrinho parava diante de um sobrado antigo e punha-se a admirar a  bonita arquitetura da antiga construção, em contraste com a beleza moderna dos novos prédios, que emolduravam as ruas arborizadas de seu bairro. Outras vezes surpreendia-se admirando quadros simples do cotidiano: a senhora grisalha, que vinha com a sacola carregada de verduras do supermercado; o senhor de pijama, lendo o jornal na cadeira de balanço do terraço; o menino entregando jornais; a moça vendendo bilhetes de loteria; o homem com o cachorro passeando na calçada; a babá com a criança tomando banho de sol no portão, pessoas entrando e saindo da igreja, caminhonetes carregadas de deliciosas e coloridas frutas...  Gente, carros, animais, colégios, lojas, bancas de revistas, jogo do bicho... Um movimento intenso; estava sentindo falta de tudo aquilo.

Cada dia era único. Havia sempre algo novo, aos olhos de Socorrinho, em seu passeio. Ela levantava os olhos para o céu muito azul e agradecia a Deus pela vida. Estava viva outra vez. Sentia-se feliz novamente.

De toda sua caminhada, em busca do tempo perdido, na luta pela recuperação... Dentre as lembranças que guardava dos seus exercícios, uma lhe era especial e destacava-se das demais...
"Certa vez, no início do tratamento, saíra com sua mãe, como fazia todas as tardes, para um passeio de carro pela praia. Desceram do automóvel e sentaram no banco do calçadão para tomar uma água de coco. Depois Socorrinho convidou a mãe para fazerem sua caminhada habitual, pela pista de "Cooper" da avenida; exercício que faziam juntas com freqüência. Sua mãe era sua fortaleza; a sua simples companhia dava a Socorrinho a segurança de que ela necessitava. Naquele dia porém, Dona Ruth se recusou; não iria caminhar com a filha. Já estava na hora de Socorrinho caminhar sozinha... - refletiu - e disse que esperaria sentada no banco.

Socorrinho voltou a se sentar. Não iria sem a sua mãe. Sentiu-se insegura, frágil, pequena. E veio o medo; e veio o sentimento de impotência. E todos os pensamentos mais tolos tomaram conta da cabeça da jovem mulher, que mais parecia naquele instante uma menina assustada... "E se eu passar mal ? E se eu ficar cansada ? E se eu desmaiar? E se isso?  E se aquilo?... Eram sempre os mesmos pensamentos. E Socorrinho não se sentia em condições de caminhar sozinha.

Dona Ruth percebeu a aflição de Socorrinho. Conhecia todos os medos de sua filha e como se pudesse ler o seu pensamento, concluiu:
- você não vai passar mal, minha filha. Nada vai lhe acontecer. Não existe motivo para se sentir insegura. Eu vou estar aqui lhe esperando e se você ficar cansada, eu vou de carro lhe apanhar na outra barraca de coco... Por quê o medo? Olhe quanta gente caminhando... Você não vai estar sozinha. Você não precisa de bengala, Socorrinho. Já é tempo de caminhar com os próprios pés.

Socorrinho ouviu em silêncio. Ficou triste, mas concordou. Sua mãe estava certa.
Não era eterna; não poderia estar sempre ao seu lado. Estava na hora de tentar caminhar sozinha.

Levantou-se e com passos incertos começou seu exercício. Não olhou para trás uma única vez. Sabia que sua mãe estaria sentada no banco, olhando de longe... Isso já lhe confortava. Nunca o percurso entre uma barraca de coco e outra lhe pareceu tão comprido... E enquanto caminhava, veio-lhe na mente, a lembrança de uma frase que lera num "outdoor", numa propaganda de sapatos:  "Liberdade é você ir aonde quiser com seus próprios pés..."

De repente percebeu, o quanto era limitada a sua liberdade, naquele momento. Seus pés só conseguiam lhe levar, a distâncias muito pequenas ainda. Seu coração batia forte dentro do peito, de tanta ansiedade. Tentou se distrair para atenuar o medo. Começou a olhar os prédios altos e majestosos da avenida; depois o mar, quebrando em espumas na areia alva; mais adiante um animado jogo de vôlei e ali perto, no banco do calçadão, uma concorrida partida de dominó. Por vezes, diminuía o passo, fitava o céu, respirava fundo e pensava assustada e feliz: "estou conseguindo".  Em determinados pontos do passeio, notou algumas pessoas sorrindo para ela... Socorrinho era uma pessoa simpática e retribuiu o sorriso, mas achou estranho porque, na realidade, não conhecia qualquer uma delas.

Finalmente chegou à outra barraca; ponto final da sua caminhada. Parou; fechou os olhos e suspirou feliz...- "consegui"... - pensou satisfeita. Ia se virando para trás... Queria medir com o olhar a distância percorrida e acenar para sua mãe... Mas esbarrou em alguém. Assustou-se. Ficou muda de espanto. Dona Ruth sorriu. Estava exatamente atrás dela; colada nela. Seguiu os passos da filha o tempo todo; brincando de sombra.

Socorrinho também sorriu, desarmada. Compreendeu naquele instante, o porquê do sorriso das pessoas. Durante todo trajeto, pensou que estava caminhando sozinha e via naquele momento, que sua mãe estivera com ela todo tempo, protegendo-a, guardando-a, impedindo que qualquer mal lhe acontecesse.
Foi um gesto lindo de sua mãe. Ficou comovida. Enquanto vivesse, lembraria com o maior carinho dessa "sombra amiga" - desse momento ímpar; dessa prova genuína de amor.

Socorrinho se recuperou completamente do mal que a afligia: "A síndrome do pânico". Hoje é uma pessoa normal, saudável, alegre e descontraída. Trabalha, passeia, viaja, diverte-se, dirige seu automóvel, participa intensamente de todo e qualquer evento social - festivo ou solidário; na alegria ou na dor -  profissional, esportivo e religioso, que a vida lhe apresente e que durante dezoito anos de sua vida esteve impossibilitada de realizar.

Contou com a ajuda valiosa de dois profissionais da área de saúde: seu médico, que lhe administrava a medicação para anular os sintomas desagradáveis de uma crise de Pânico, e sua psicóloga, que a acompanhava passo a passo, semana após semana, orientando-lhe nos exercícios diários de readaptação à vida.

Contou ainda com o apoio indispensável de bons amigos e sobretudo, de toda sua família. Sente-se até mais feliz do que antes e bem mais amadurecida, porque afinal o sofrimento amadurece as pessoas e de cada experiência sempre se tira alguma lição. Segundo o seu médico, a doença é uma surra de humanidade...  E se isso faz algum sentido, certamente Socorrinho está agora mais humana e mais solidária para enfrentar a vida e disposta a estender a mão para amparar alguém. Agradece a Deus o presente maior: "O milagre da vida" e atribui à Dona Ruth - ( sua SOMBRA AMIGA), uma grande parcela de colaboração no seu restabelecimento.

*Socorro Capiberibe

Obs.
O conto A SOMBRA AMIGA – extraído da vida real - é parte integrante do livro "O FANTASMA DO PÂNICO OU O FUNDO DO POÇO: COMO ESQUECER?" (Relato pessoal da Autora sobre o Transtorno do Pânico)

Agradeço a Deus pela minha mãe Maria Ruth Marinho  Capiberibe – a minha sombra amiga - e desejo um FELIZ DIA DAS MÃES a todas as mães, que como ela, são capazes de gestos tão bonitos como este, que traduz o mais genuíno amor)

AGRADECIMENTOS ESPECIAIS:

*Cristina Jatobá - Psicóloga Clínica (minha psicóloga)

*Wilson Alves de Oliveira Jr - Médico Cardiologista (meu médico)

*TODOS OS LIVROS DE SOCORRO CAPIBERIBE ENCONTRAM-SE À VENDA NA AMPARE: 

👉🏻81-3104.7617 e 9.9504.0782 (WhatsApp)

YOUTUBE:
SOCORRO CAPIBERIBE 

Instagram:
@msocorrocapiberibemaia`
  },
  {
    titulo:"SALA DE LEITURA COM SOCORRO CAPIBERIBE // DEIXANDO UM POUQUINHO DE MIM...",
    tipo:"Crônica",
    trecho:"UM ANJO QUE VIVEU ENTRE NÓS...",
    imagens:["imagens/maria_evangelina.png"],
    texto:`

"Mãe não é só aquela que gera o filho em seu ventre... Existem as Mães que geram seus filhos no coração"... (Socorro Capiberibe)

"UM ANJO QUE VIVEU ENTRE NÓS"

Ela um dia apareceu em nossa vida... Não tinha um lar e fez de nós sua família. E como uma verdadeira mãe amou cada criança... E cada um de nós ela amou como seu filho. A sua cama era igual a qualquer cama... Mas nela cabia todos nós bem acolhidos. Cada tristeza ela transformou em alegria... E enxugou nosso pranto com sua bondade. E sorriu com a gente, e chorou com a gente, no dia a dia... E a todos nós dedicou sua mocidade.

De sua boca jamais se ouviu qualquer lamento... As suas mãos nunca deram qualquer palmada. Nossa alegria era a sua e era seu o nosso sofrimento... Não teve filhos, mas como Mãe foi sempre amada.

Deu-nos a mão e ensinou nossos primeiros passos... E,  passo a passo, pela vida caminhou... 
Segurando sempre firme a nossa mão, como se ainda fôssemos crianças... 
Enchendo sempre o nosso coração de esperanças... Em cada gesto nos ensinou o seu amor. 

Ela, que adotou tantos filhos durante a vida... Ela, que a tantas crianças ensinou a chamar "Mamãe"... Não conheceu sequer a sua própria mãe.

E hoje eu agradeço com os olhos rasos d'água... Nessas palavras soltas, sem rima, sem nada... 
Por Deus nos tê-la dado e abençoado sua velhice. 

-Perdão, querida, se algum dia a fiz chorar... Perdão também, também, pelas palavras de amor e gratidão que eu não disse...

E, mesmo agora, que tu vives lá no Céu... Não te esqueças nunca desses filhos que são teus... Nós a amamos muito e sempre a amaremos... Tu tens um pouco de Maria, Mãe de Deus. 

E se um dia apareceste em nossa vida... 
Se não tinhas lar e fomos nós tua família... A felicidade foi toda nossa, mãe querida... 
Agradecemos a Deus por tê-la colocado em nossa vida!

Mãe não é só aquela que gera o filho em seu ventre... Existem as Mães que geram seus filhos no coração. 

(Dedico este poema, com o coração carregado de gratidão e da mais profunda saudade, à nossa mãe de criação: Maria Evangelina Guedes de Carvalho (para nós: *"LOU"* - expressão mais pura e mais verdadeira da bondade e do amor).

*SOCORRO CAPIBERIBE 
Do livro da autora: 
SALA DE LEITURA / DEIXANDO UM POUQUINHO DE MIM...

AMPARE: 81-3104.7617 e 9.9504.0782 (WhatsApp)

YOUTUBE:
SOCORRO CAPIBERIBE 

Instagram:
@msocorrocapibeibemaia

Facebook:
SOCORRO CAPIBERIBE`
  },
  {
    titulo:"PARA OS AMANTES DA POESIA... CANTINHO DO POETA // SOCORRO CAPIBERIBE: DEIXANDO UM POUQUINHO DE MIM...",
    tipo:"Poesia",
    trecho:"ESSA TAL FELICIDADE...",
    imagens:["imagens/socorro_restaurante.jpeg"],
    texto:`"ESSA TAL FELICIDADE"

Encontrei toda brejeira, certo dia, na cidade...
Uma velha companheira; uma tal "Felicidade".
Ela estava tão bonita... Com um vestido de cetim.
Há tanto tempo eu não a via...
Ela passou perto de mim. 
Quis sorrir-lhe, foi em vão... Ela fez que não me viu.
Perdeu-se na multidão... Num instante ela sumiu.

Noutra esquina, toda prosa, caminhando displicente...
Encontrei "Dona Saudade"... Que me sorriu gentilmente.

Quis fugir-lhe, foi em vão... Ela logo me alcançou.
Segurou na minha mão... E comigo caminhou.
Caminhamos, lado a lado, pelas ruas da cidade...
Procurei por todo canto... Mas não vi "Felicidade". 

Perguntei a tanta gente... Mas ninguém soube informar.
Eis que surgiu de repente, uma voz a me falar:

- Não procures tanto assim. Ela fugiu com certeza! 
Também se escondeu de mim... Falou, suspirando, a "Tristeza".

A Tristeza e a Saudade, ao me verem assim tão triste...
Tentaram até consolar... 
- Felicidade? Ela não existe.

Sentei-me num banco da praça, remoendo a minha dor.
Em nada eu achava graça... Até que alguém me falou:

- Não ligues  àquelas duas... O que dizem não é verdade.
Elas andam pela rua sem ver a felicidade.
Mas eu posso lhe afirmar: a felicidade existe.
Você pode acreditar. Não precisa ficar triste. 

Ela está perto da gente... Mas nem sempre a gente a vê.
Às vezes, a gente a sente... Ou a tem sem perceber.
Agora, meu bem, sorria. Você é só uma criança!
E quando me quiser um dia... 
- Muito prazer! Eu me chamo: "Esperança".

*Socorro Capiberibe 
______
Do Livro da autora: DE GERAÇÃO A GERAÇÃO - POESIAS & REFLEXÕES.

Todos os livros de Socorro Capiberibe encontram-se à venda na AMPARE: 
81-3104.7617 e 9.9504.0782 (WhatsApp)

Canal no YOUTUBE:
SOCORRO CAPIBERIBE`
  },
  {
    titulo:"PARA OS AMANTES DA POESIA... CANTINHO DO POETA // SOCORRO CAPIBERIBE: DEIXANDO UM POUQUINHO DE MIM... ",
    tipo:"Poesia",
    trecho:"Porque Deus é Amor! Porque tudo o que vem de Deus é leve, é simples, é sublime e cheio de Paz!",
    imagens:["imagens/socorro_cafe.jpeg"],
    texto:` 
"Porque Deus é Amor! Porque tudo o que vem de Deus é leve, é simples, é sublime e cheio de Paz!"

O AMOR É O MAIOR DOS SENTIMENTOS
*Socorro Capiberibe

Estavam os sentimentos em importante reunião...
Discutiam quem era mais forte, se o Amor ou a Paixão.
Levantou-se a Alegria, desmanchando-se em sorrisos,
e falou que era a Paixão... que levava ao Paraíso.

- Pode ser!
Disse a Tristeza, no seu tom de amargura...
Mas a Paixão é tempestuosa e também leva à loucura.
Também não voto no Amor... Ele é pura ilusão...
Sendo assim, a minha escolha é para a colega Gratidão.

A Gratidão pediu a vez, bem polida e educada...

- Eu discordo de vocês. A Paixão não leva a nada.
Ela chega como um trovão, mas se vai com a tempestade. Pode ser forte como um furacão.
Contudo, parte sem deixar Saudade.

- Já que falaram em meu nome... E a Saudade se levantou...

- Eu não quero que me deixem; eu prefiro que me levem... por isso é que voto no Amor. 
O Amor me torna importante; não me deixa ficar esquecida. Quando alguém que a gente ama está distante... Eu estou presente em sua vida.

- Ora, deixem de tolice! Pra que tanta discussão?
Afinal, o que importa... se é o Amor ou a Paixão?
E a Revolta prosseguiu, com toda agressividade...
- Não voto em nenhum dos dois. Prefiro a Amizade

O Ciúme ironizou:
- Amizade? Isso é piada! Eu aposto no amor.
É ele quem me desperta. Sem ele eu não sou nada.
Vou com ele onde ele for.

Bem maldosa, a Inveja, soltou seu sorriso cruel...
- Nem Paixão e nem Amor. Nem Gratidão, nem Amizade.
Se tenho que votar em alguém... eu voto na Vaidade.

- Agradeço a referência... - disse a Vaidade, enfim;
Mas só me importo com a minha aparência, por isso meu voto é pra mim.

Muito amável, a Amizade, que ainda não tinha falado...
- Meu voto é para você!... - e tocou no companheiro ao lado.

O Amor, muito vermelho, fechou os olhos de emoção..
E preferiu ficar calado, para ouvir seu coração.

Nessa pausa que se fez, a Paixão aproveitou:
- Agora é a minha vez... Também voto no amor.

Todos ficaram perplexos: sem saber o que pensar.
E, a Paixão continuou:

- Esperem! Eu ainda quero falar...
Sou muito forte e fugaz; não sirvo pra companheira...
Quem me tem hoje, amanhã não tem mais. A minha relação é passageira. Eu mexo com os corações, agito as emoções, mas alço vôo em seguida...
Machuco os meus amantes, porque sou mesmo inconstante... E o Amor é pra toda vida.

A Simpatia levantou o dedo, e cheia de doçura completou:

- Eu concordo com a Paixão. O meu voto também é para o amor.

Faltava ainda a Esperança... Tão confiante e solidária.
E, num lindo sorriso que lembrava uma criança... Também pediu a palavra:

- O Amor é, sem dúvida alguma, de todos o maior
sentimento. Semeia a Paz e o Perdão. É bálsamo no sofrimento. É a ponte que liga as pessoas; os Cristãos e os ateus... Amor é vida e verdade. É a eterna aliança com Deus.

O Ódio, contrariado...
Retirou-se, derrotado...
cheio de ira e má fé.
Depois disso ninguém falou mais...
O ambiente encheu-se de Paz...
E todos aplaudiram de pé.

YouTube:
SOCORRO CAPIBERIBE 

Do livro da autora: DE GERAÇÃO A GERAÇÃO (POESIAS & REFLEXÕES)

À venda na AMPARE (Rua  Oswaldo Cruz, 393/Anexo, Boa Vista, Recife/Pe)
81-3104.7617 e 9.9504.0782 (WhatsApp)

Canal no YOUTUBE:
SOCORRO CAPIBERIBE`
  },
  {
    titulo:"PARA OS AMANTES DA LEITURA... UMA PAUSA PARA A REFLEXÃO // O PODER DA PALAVRA",
    tipo:"Crônica",
    trecho:"Palavras têm força...",
    imagens:["imagens/socorro_festa.jpeg"],
    texto:`Para os amantes da leitura...

"As palavras tem um poder assustador..." (Bess Sondel)

Brilhante afirmação de Bess Sondel! É a mais pura verdade.
Palavras levantam ou derrubam.
Acalmam ou revoltam.
Acariciam ou ferem.
Harmonizam ou destroem.
Ora são pontes, ora são muralhas...
Às vezes, unem; outras vezes, separam.

Palavras têm força.
Peso.
Poder.
Podem promover a paz ou podem provocar uma guerra.

Certamente já se ouviu falar de guerras que foram deflagradas, em conseqüência de algo que foi dito num momento impensado.

- Quem nunca experimentou situações de ódio, rancor, indiferença, 
paixão ou amor, despertadas por palavras proferidas no auge da exaltação?

Palavras têm ressonâncias eternas. 
Têm conseqüências inesperadas e ás vezes irreparáveis.
Podem levar ao céu e podem impelir ao abismo.

E, uma vez proferidas, como retirá-las? Como desfazer os estragos por elas provocados?

Há sempre a possibilidade de um pedido de perdão
ou a tentativa de alguma explicação para minimizar o impacto causado.
Mas, como colar uma porcelana sem deixar
as marcas da emenda? Seria o mesmo que tratar das feridas e ignorar as cicatrizes.

Palavras exigem reflexão, cautela, serenidade...
Jamais a impulsividade.

A reflexão e o cuidado previnem estragos que podem ser evitados.
A impulsividade gera atritos e desentendimentos.

Palavras podem ser bênçãos ou sentenças...

Que as nossas palavras jamais sejam sentenças.
Que elas possam sempre ser bênçãos sussurradas por Deus em nossos ouvidos, 
para que tenham o poder da harmonia,
da cura, do conforto, da fé, da esperança, do amor e da paz."" 
_______________
DO LIVRO DA AUTORA: 

"DE GERAÇÃO A GERAÇÃO
 - POESIAS & REFLEXÕES" 
* Socorro Capiberibe

À VENDA NA AMPARE: PRAÇA OSWALDO CRUZ, 393/ANEXO, BOA VISTA, RECIFE/PE -
(81)3104.7617 / 9.9504.0782 (WhatsApp)

Canal no YOUTUBE:
SOCORRO CAPIBERIBE`
  },
  {
    titulo: "PARA OS AMANTES DA LEITURA // SALA DE LEITURA ",
    tipo: "Crônica",
    trecho: "REFLEXÕES NUM NOVELO DE LÃ OU A MANTA DE TRICÔ AZUL",
    imagens: ["imagens/compilacao_fotos_sala_de_leitura.png"],
    texto: `Para os amantes da leitura...

*👆🏻Estou compartilhando com vocês uma crônica do meu mais recente   livro: "SALA DE LEITURA", que gostei muito de ter escrito. Espero que gostem! Um forte abraço carregado de carinho, Socorro Capiberibe. 
😘🌻


*REFLEXÕES NUM NOVELO DE LÃ OU A MANTA DE TRICÔ AZUL*

*Socorro Capiberibe

Era o ano de 2020... Estávamos enfrentando uma Pandemia de "Covid 19" que se alastrou pelo mundo e ceifou muitas vidas...

Tudo começou no primeiro ponto da linha azul, que teceria a manta de tricô que eu estava  fazendo para o meu sobrinho-neto Guilherme, que estava sendo ansiosamente esperado por toda a família, e que iria nascer em Dezembro para alegrar o nosso Natal... 

É impressionante como o pensamento da gente corre solto, as emoções afloram e a inspiração flui,  quando se está fazendo com carinho um trabalho manual que exige toda nossa  concentração... 

Pois é. Foi mesmo assim que ela surgiu: a inspiração.

À medida que os pontos se seguiam e a linha deslizava suavemente  entre meus dedos passando de uma agulha à outra, dando forma à manta,  para agasalhar esse novo membro da família que estava chegando...  Comecei a pensar na relação que havia  entre ambos: a manta que estava sendo tecida pelas minhas mãos e a criança que estava sendo gerada no ventre da minha sobrinha Lara... 

Ambas começaram de um primeiro e  pequenino ponto de linha...

A manta: da linha de um novelo de lã. A criança: da linha do tempo de uma vida.

Ambas cresciam, tomavam forma, ficavam prontas,  cumpriam sua missão... Assim como uma gestação. 

Essa primeira comparação levou-me a uma segunda reflexão, que de uma certa forma tinha a ver com a primeira: A linha do novelo de lã e a linha do tempo da vida. Eu conto para vocês... 

Voltando ao início do texto, eu comecei dizendo como o pensamento voa fácil nas asas da imaginação, quando se está entretido com um trabalho manual que exige concentração, principalmente quando se tem uma alma de escritor... 

Então, no momento eu vinha dedicando boas horas tricotando e viajando no pensamento... 

Acontece que eu também tinha uma mãe velhinha, com 91 anos, e sempre que eu ia visitá -la e fazer-lhe um pouco de  companhia,  levava junto a minha sacola de tricô... 

E, assim, numa dessas visitas,  olhando sua cabeça branquinha e as suas limitações impostas pelo tempo, lembrei-me de um trechinho de um poema do meu avô Severino Cândido Marinho (Pai de mamãe):

"Já sinto o fio dos anos a encurtar os meus dias... Tive poucos desenganos, tive muitas alegrias...  A Vida me deu prazer, e não me deu desenganos. Ah, eu queria viver... Morrer, de velho, aos Cem anos!"

Vocês vão entender essa minha colocação...  

Eu estava tecendo uma manta de tricô para o meu sobrinho-neto Guilherme que iria  nascer... Estava também  acompanhando o envelhecer de minha mãe... 

Muitos de vocês podem achar que estávamos diante do "Início" e do "Fim", pode parecer... mas eu não penso assim. Não penso na Morte como o Fim. E essa foi justamente a minha segunda reflexão: 

Acredito que existam "Duas Vidas" e consequentemente "Dois Nascimentos": A VIDA TERRENA e a VIDA ESPIRITUAL.  

Após Nove meses, ao final da gestação,  quando as Mães  dão a Luz a uma criança... É o nascimento para a vida na Terra. 

Mas, a própria Linha do Tempo da nossa vida terrena, também pode ser vista como uma outra "Gestação", que quando completa o seu ciclo, culmina com o "Parto" onde se nasce para a "VIDA NO CÉU" ou para a "VIDA NA  TERRA DOS QUE VIVEM PARA SEMPRE" - como li numa Novena a Santa Mônica...

E, aqui, eu abro um parêntese para uma  citação de Henry Sobel, num brilhante texto em que compara a morte com "um navio partindo rumo à linha do horizonte: 

"Enquanto os que ficam na praia vendo o navio se distancianciando, pensam saudosos: ELE ESTÁ PARTINDO... Outros, na outra margem, exclamam alegres: ELE ESTÁ CHEGANDO!"

Bem, a MANTA DE TRICÔ AZUL que eu  estava fazendo para o meu sobrinho-neto Guilherme, felizmente ficou pronta a tempo do nascimento dele. 

Não ficou perfeita, mas foi tecida, ponto a ponto, com muito amor e muita alegria na espera da sua chegada. 

No dia 30 de Novembro de 2020, a gestação da minha sobrinha Lara se concluiu e ela deu à luz ao meu sobrinho-neto Guilherme. E a manta de lã azul cumpriu sua missão: agasalhou o soninho de Guilherme por muitas vezes... 

Quando ele crescer e for ler esse texto, ele vai gostar de saber que foi muito amado e ansiosamente  esperado por essa nossa família, para a qual ele foi destinado. 

Em 16 de Maio de 2021 a gestação da vida terrena de minha mãe, agora já com 92 anos, também se concluiu,  e mamãe também nasceu novamente: dessa vez para a VIDA NA TERRA DOS QUE VIVEM PARA SEMPRE! 

*Socorro Capiberibe 
Recife, 18 de Novembro de 2022

Todos os livros da autora encontram-se à venda na AMPARE: Rua Oswaldo Cruz, 393 / Anexo, Boa Vista, Recife/PE. 
81-3104.7617 e 9.9504.0782`
  },
  {
    titulo: "PARA OS AMANTES DA LEITURA: DEIXANDO UM POUQINHO DE MIM... // A ARTE DE CONTAR HISTÓRIAS",
    tipo:"Crônica",
    trecho: "Um dia olhei-me no espelho e não vi mais a menina que eu via todos os dias...",
    imagens: ["imagens/compilacao_socorro_capiberibe.jpeg"],
    texto: `Para os amantes da leitura: Deixando um pouquinho de mim... 

(Hoje, especialmente, quando completo meus "7.0", compartilho com vocês essa crônica que gostei muito de ter escrito. Espero que gostem! Com carinho, Socorrinho)

""REVELAÇÕES DO MEU ESPELHO"" 
*Socorro Capiberibe

Um dia olhei-me no espelho e não vi mais a menina que eu via todos os dias... E, em vez da menina, eu vi uma jovem bonita, de olhos brilhantes, de corpo gracioso e sedutor com suaves curvas, cabelos longos e sedosos de um castanho claro sem igual.

- Quando foi que eu cresci? Em que momento se deu essa transformação, se ainda ontem eu não era mais do que uma menina?
Terá sido no dia em que troquei as bonecas pelas fotonovelas e os sapatos baixos pelos saltos altos?

E, nesse dia, o espelho me revelou que a infância se fora... Que a juventude chegara... Era o tempo dos sonhos e da ternura. O tempo da descoberta do amor e do despertar das paixões.

- Que idade tinha eu nesse momento? Talvez 15... A tenra idade desejada por toda moça.

E não faltaram festas. E não faltaram amigos. E não faltaram flertes. E não faltaram fãs.

Vieram o namoro, os desejos, as promessas, os presentes, os planos, a formatura, o casamento e os filhos.

E, eis, que um belo dia, o meu espelho me fez nova revelação... Olhei-me novamente e de repente não vi mais a jovem que eu vira todos os dias até então... E em seu lugar, eu vi refletida a imagem de uma mulher madura, com cabelos levemente prateados, corpo com formas arredondadas, olhar confiante de quem sabe das coisas, sorriso tranqüilo de quem aprendeu com o tempo.
- Quando foi que amadureci? Em que momento se deu essa transformação, se ainda ontem eu não era mais que uma jovem sonhadora ansiando por viver?

Terá sido no dia que coloquei o anel de formatura na minha primeira filha ou quando vi minha filha mais nova vestida de noiva?

E, nesse dia, o meu espelho me revelou que também a juventude se fora... Que a maturidade chegara... Agora era o tempo das realizações. Da colheita das sementes plantadas. Da mudança de valores, da seleção dos prazeres, da qualidade em vez da quantidade. Era o tempo do equilíbrio dos sentimentos, da estabilidade das relações, do amor duradouro e em paz em vez das paixões desmedidas e transitórias, da razão se sobrepondo ‘a emoção.

- Que idade tinha eu nesse momento? Talvez, Quarenta – que é quando se começa a viver, segundo uns... E como a “Mulher de 40” que Roberto Carlos homenageou em sua música... Ou quem sabe, não foi aos 50, outra idade que todos comemoram e em que toda mulher se declara madura?

Essa revelação do espelho é como uma descoberta ou tomada de consciência e pode ter duas conotações: O início de uma nova etapa tão desejável quanto as que se foram ou o começo do fim... Sim, porque as transformações não se dão apenas no campo físico do corpo, mas também no emocional.

Nesse instante, não é rara a pessoa a desencantar-se com a vida, perder a auto-estima, sentir-se velha, gorda e feia, tornar-se amarga, achar que a vida não tem sentido, descuidar de tudo e entregar-se a uma profunda depressão.
Há quem relute em aceitar os fios grisalhos e o aumento nas medidas da cintura e quadris ou na perda de firmeza dos seios e entre num processo de completo desespero. Aí começa uma corrida desenfreada contra o tempo, em busca de todos os recursos oferecidos pela modernidade, como: maquiagens, tinturas de cabelo, dietas e exercícios para a modelagem do corpo, cremes de todos os tipos que tiram manchas e retardam o envelhecimento da pele e vendem a falsa ilusão da eterna juventude. Isso poderia até ser saudável quando feito na medida certa, em todas as fases da vida, como uma vaidade benéfica e preventiva, e não como uma obsessão.

Mas, pode também se dar o inverso – sim, porque afinal, o espírito cresce, amadurece, mas não envelhece... E, é aí nesse momento, exatamente nesse momento, que a vida pode ganhar um novo sentido. A gente pode se sentir mais bonita, mais madura, mais experiente, mais desejável e mais interessante.

É quando a gente se dá conta de que o físico é apenas a embalagem e o espírito é o verdadeiro presente.

A embalagem é bonita, mas é provisória e descartável, enquanto o presente é o que fica. A gente descobre que a verdadeira beleza é aquela que o tempo ao invés de destruir, só faz renovar, refinar, lapidar e aprimorar.

É essa beleza que tem o poder de reforçar os laços afetivos que sustentam os relacionamentos. É essa beleza que está além do corpo, que se sobrepõe ao tempo e se eterniza na memória de quem fica, depois que a gente parte.

Aí é o tempo dos netos... Os filhos dos nossos filhos... É a vida que se renova mais uma vez... A nossa própria continuação. E a gente também recomeça... A gente ensina a cuidá-los e eles, tal qual os nossos filhos, também ensinam pra gente... Porque na escola da vida nós somos eternos aprendizes.

Na verdade cada idade tem o seu encanto, a sua graça, o seu brilho, o seu valor. Todas elas são importantes e necessárias... Afinal, uma a uma, elas representam os capítulos da nossa história e todas juntas, compõem o livro da nossa vida.

Se eu viver mais essa etapa da minha vida, estou certa de que o meu espelho ainda me reserva mais uma revelação...

Nesse dia, certamente, eu não verei mais a imagem da mulher madura... Mas serei contemplada com a mais bela imagem da minha vida: Eu verei, refletida no espelho, a imagem de uma simpática senhora que viveu intensamente todas as etapas de sua vida e traz consigo um pouco de cada idade: a alegria da infância, a graça da adolescência, os encantos da juventude, a confiança da maturidade e a sabedoria da velhice. Meus cabelos brancos e as rugas do meu rosto não farão menos feliz o meu sorriso, que nesse instante há de brilhar como o diamante mais puro e bem lapidado.

Cada fio de cabelo branco e cada ruga do meu corpo revelarão uma lição aprendida no decorrer da vida, e quem sabe, também, algumas lições ensinadas.

Nesse dia, quando o meu espelho me disser que também a minha maturidade se fora... É hora de mais uma vez agradecer a Deus, porque eu terei conquistado o meu melhor tempo... O tempo da SABEDORIA, que é o meu passaporte para a imortalidade.

- Que idade eu terei nesse instante da última revelação do meu espelho?

- Talvez, Oitenta... Que é a idade que mais comumente se comemora...

Mas, como amante da vida que sou, eu ouso desejar ir mais além... Como o meu avô que um dia escreveu assim:

“A vida me deu prazer...
E não me deu desenganos.
Ah! Eu queria viver...
Morrer de velho aos Cem anos.”

(Meu avô: Severino Cândido Marinho – quase realizou seu desejo: viveu até os 96 anos)

DO LIVRO DA AUTORA: "A ARTE DE CONTAR HISTÓRIAS / 50 MELHORES CONTOS & CRÔNICAS" - Todos os livros de Socorro Capiberibe encontram-se à venda na AMPARE: 81-3104.7617 e 9.9504.0782`
  },
  {
    titulo:"Para os amantes da leitura // UM OLHAR ESPECIAL QUE EU GUARDEI NA MEMÓRIA... OU TERÁ SIDO NO CORAÇÃO?... ",
    tipo:"Crônica" ,
    trecho:"Estávamos já naquela fase em que o passo começa a ficar mais lento, que o peso dos anos começa a se fazer sentir nos ombros, e que as marcas do tempo já não conseguem disfarçar no corpo...",
    imagens:["imagens/compilacao_socorro_wagner_flavia.jpeg"],
    texto:`Estávamos já naquela fase em que o passo começa a ficar mais lento, que o peso dos anos começa a se fazer sentir nos ombros, e que as marcas do tempo já não conseguem disfarçar no corpo. Muito cedo iniciamos  a nossa jornada, e muitos amigos acompanharam de perto a nossa trajetória. Era, de fato, uma boa e longa caminhada! 
É natural que com o passar dos anos e com  a nossa  diminuição da  marcha, as pessoas mais próximas e que nos tem afeição,  sintam-se tocadas na sua sensibilidade, e de um modo especial, demonstrem esse afeto com pequenos gestos de carinho e de cuidado. Criança e idoso, geralmente, parece ganhar um espaço especial no nosso coração. Não que isso seja uma regra e nem que todas as pessoas tenham essa sensibilidade. 
O fato é, que ao longo do caminho, algumas vezes somos surpreendidos, por pequenos gestos de carinho, que na sua simplicidade denotam uma profunda ternura e tocam fundo nosso coração... 
Quem lê os meus livros e  conhece os meus textos, já percebeu, que a minha alma de escritora se inspira nas vivências mais simples do meu cotidiano... 
Nesse texto, por exemplo, iniciei  falando de: *UM OLHAR ESPECIAL, QUE COM MUITO CARINHO GUARDEI NA MEMÓRIA*...
Pois, muito bem, eu conto para vocês...
Faz algum tempo, mas não tanto tempo assim, pouco antes da Pandemia...
Após uma tarde de expediente na AMPARE - e aqui eu abro um espaço para explicar aos que, porventura, ainda não conhecem essa Instituição: *AMPARE (ASSOCIAÇÃO DOS AMIGOS DOS PACIENTES DE PÂNICO EM RECIFE) - Desde 2001 cuidando da SAÚDE MENTAL*...  
Sim, mas voltando ao texto... A algum tempo atrás, num comecinho de noite, após uma  tarde de expediente na AMPARE, Wagner e eu iríamos chamar um Táxi para nos levar ao Shopping Tacaruna... Uma Psicóloga muito querida, jovem talvez como a nossa filha, ofereceu-nos carinhosamente para nos levar. Ela estava de carro e o caminho que iria fazer passaria na frente do Shopping... 
Talvez vocês estejam se perguntando o que tem de especial nisso, afinal, nada mais comum do que dar uma carona...  Entretanto eu gostaria de concluir:
Sim, caro leitor, uma simples  carona talvez não tenha nada de especial que merecesse essa crônica... Mas, devo lembrar, que quando se tem uma alma de escritor e um coração apaixonado pela vida e pelos sentimentos mais puros, até mesmo as coisas mais simples e aparentemente sem importância, adquirem grandes proporções quando tocam na nossa alma... Lembra do "OLHAR ESPECIAL" que falei, e que  guardei na memória? (Ou terá sido no coração?)... 
Pois é! Vamos a ele...
A viagem até o shopping foi ótima. A companhia agradável e carinhosa, não poderia ter sido melhor. A nossa jovem motorista Psicóloga - tal qual uma filha dedicada - sempre gentil e cuidadosa, fez questão de nos levar o mais próximo que o carro podia chegar, até bem junto da entrada principal. 
Descemos, Wagner e eu...  Agradecemos, despedimo-nos e caminhamos lentamente de mãos dadas, pelo restinho do  estacionamento... Ela, o nosso anjo guardador naquele momento, permanecia lá... parada dentro do carro, atenta, zelosa, acompanhando-nos com o olhar, como sentindo na alma uma pontinha de afeto e reconhecimento pelo trabalho que realizamos e pelos jovens que um dia fomos...  
Lá da porta de entrada do Shopping, olhamos para ela e acenamos... Mas a expressão de ternura, carinho, respeito e cuidado, que vi no seu olhar naquele momento, tocou profundamente a minha alma e ficou registrado para sempre em minha memória.
À Psicóloga Flávia Rocha, com carinho:
*SOCORRO CAPIBERIBE 
03/09/2024`    
  },
  {
    titulo:" Para os amantes da leitura: Deixando um pouquinho de mim..." ,
    tipo:"Crônica" ,
    trecho:"A crônica a seguir, faz menção a esses meus 'Dois Amores': Minha mãe Maria Ruth e minha filha Mariana Capiberibe Maia... ",
    imagens: ["imagens/mariana.jpg", "imagens/ruth_e_socorro_lancamento_livro.jpg"],
    texto:`(Hoje, especificamente, lembrei-me com profunda saudade e ternura, de minha mãe — "minha sombra amiga" e, mais fielmente falando: "minha melhor amiga". Não que eu não lembre dela com frequência, aliás lembro dela sempre... mas, hoje, de forma especial, ela está ainda mais presente nas minhas lembranças, talvez pelo fato de nessa data, há 49 anos atrás, eu ter me tornado "mãe", como ela. Em 03 de Março de 1976, Deus me agraciou com o dom da maternidade. E naquele 03 de Março, no amanhecer de uma Quarta-feira de cinzas, quando as orquestras entoavam suas últimas marchinhas de Carnaval, nasceu minha filha primogênita: "Mariana", fazendo transbordar o nosso coração de alegria).
    
    A crônica a seguir, faz menção a esses meus "Dois Amores": Minha mãe "Maria Ruth" e minha filha Mariana Capiberibe Maia...
    
    ✦ Por Socorro Capiberibe
    
    A citação a seguir talvez não tenha se dado exatamente como a transcrevi, nem com as mesmas palavras e nem na mesma ordem, mas penso que consegui captar o seu verdadeiro sentido e busquei transcrevê-la da forma mais fiel como a escutei e como consegui traduzi-la.

"Quando na vida precisamos acompanhar uma pessoa mais lenta, temos que diminuir a nossa pressa, do contrário nunca a teremos conosco e perdemos a oportunidade de usufruir de sua companhia e compartilhar momentos inesquecíveis..." (Pe. Fábio de Melo / Na CANÇÃO NOVA / Programa DIREÇÃO ESPIRITUAL / em 25 de Maio de 2011).

Refleti muito sobre isso e pensei "nos passos lentos" da minha mãe — impostos pelo cansaço dos seus 82 anos e pelas limitações provocadas por um "AVC"... E também nas pessoas que são "lentas por natureza"... (eu tenho uma filha assim).

Lembrei ainda com muita ternura que sempre que caminho com mamãe me vem na mente aquele trecho da música de Roberto Carlos: "Esses passos lentos de agora / caminhando sempre comigo / já correram tanto na vida / meu querido, meu velho, meu amigo..." (Lindo e verdadeiro).

Postei a citação de Pe. Fábio de Melo no "Facebook" e comentei sobre a minha interpretação...

Cada pessoa tem o seu próprio ritmo. Cada pessoa é única. Entretanto, todas são igualmente importantes, necessárias e capazes. É preciso respeitar as diferenças. As pessoas não precisam mudar seu perfil para serem AMADAS... E, se nós as queremos em nossas vidas, nós podemos "desacelerar" o passo e continuar a AMÁ-LAS tal qual elas são...

Foi interessante. A partir daí começaram a surgir comentários que complementavam a minha reflexão...

Minha sobrinha escreveu-me assim:
— Exatamente tia. Cada um tem seu ritmo e nós aprendemos a andar nesse ritmo só pelo grande prazer dos momentos que relógio nenhum conseguiria marcar.

Maravilhoso. Pensei. E senti que deveria dar continuidade àquela reflexão e deixar-me ajudar com os comentários de outros amigos e familiares que se interessaram pelo tema.

A minha cunhada, então, acrescentou:
— Verdade Socorrinho, antes de terminar de ler também eu já pensei em Dona Ruth — ainda se referindo à minha mãe — ela é uma pessoa fantástica, um exemplo de vida que nos faz ter vontade de caminhar lentamente só pelo prazer de sua companhia, só para ouvir com atenção seus grandes ensinamentos...

Outro comentário foi postado por um amigo de minha filha, e ele dizia assim:
— Tia... Um verdadeiro aprendizado o que Padre Fábio nos ensina. Sou fã de suas palestras... Certo dia ele contou que devemos sempre entender o tempo do outro... Citou o exemplo da mãe dele... Disse que algumas vezes ela fazia coisas que ele não concordava, não admitia; mas que precisava entender que aquele era o tempo (mental) dela. O mesmo acontece com as pessoas que convivemos diariamente. Não podemos exigir que as pessoas pensem iguais a nós e levem a vida como nós levamos. Cada um tem o seu tempo. É preciso entender e respeitar o limite de cada um.

Fiquei feliz. Meu texto ganhou vida. Minha reflexão se aprofundou.

Concluí que há pessoas lentas pela sua própria natureza e outras que se tornaram lentas pelas imposições da vida. Algumas cumprem sua jornada de trabalho em 6 horas sem dificuldades, enquanto outras precisam de mais tempo para realizar as mesmas atividades e prolongam o seu expediente por mais duas ou três horas excedentes... — Eu tenho uma filha assim... — Umas não são melhores do que outras... Ambas dão o melhor de si e cumprem suas tarefas com dedicação e responsabilidade. Cada uma no seu ritmo. Cada uma com o seu tempo.

De uma forma ou de outra, se nós as amamos e desejamos tê-las conosco, nós temos que "esquecer nossa pressa" ou "desacelerar nosso passo" para que possamos caminhar juntas... É a única forma de compartilhar da sua companhia e crescer com a sua sabedoria — ou corremos o risco de "perdê-las em vida".

Em outra ocasião, ainda sobre o assunto em pauta, escutei do palestrante — o Psicólogo e Escritor Luiz Schettini Filho — algo muito interessante, sobre os pais que em meio à "Pressa dos dias atuais" não tinham tempo para escutar os filhos e perdiam a chance de ouvir histórias fascinantes e significativas da vida deles, deixando-os frustrados, com suas "histórias interrompidas" e jamais concluídas...

Isso vem reforçar um pensamento antigo que cultivo e no qual acredito:

"É preciso ter tempo para cada pessoa que nos seja importante enquanto é tempo... Porque pode chegar o tempo que se queira ter tempo e não haja mais tempo... ou porque a pessoa se foi... ou porque o tempo passou."

✦ Do livro: SOCORROCAPIBERIBE.COM.VOCÊ
À venda na AMPARE: 81-3104.7617 e 9.9504.0782

Canal do YouTube: SOCORRO CAPIBERIBE`
},
{
    titulo:"SOCORRO CAPIBERIBE COM VOCÊ / DEIXANDO UM POUQUINHO DE MIM..." ,
    tipo:"Crônica" ,
    
    trecho:"E SE TU NÃO EXISTISSES, DIZE-ME POR QUE EU EXISTIRIA?",
    imagens:["imagens/praia_socorro.jpg", "imagens/foto_luis.jpg"],
    texto:`Escutei pela primeira vez num comercial de televisão, no horário nobre da novela das Oito... Era linda... Muito linda... Tocou minha alma profundamente e eu me apaixonei.

— Pelas sandálias ou pela música?

Ah, esqueci de dizer: Era um comercial de uma sandália nova chamada "FRANCESINHA"... Sim, mas como eu ia dizendo, foi "Amor à primeira vista ou à primeira escuta" — como o leitor preferir — porque o fato é que me apaixonei perdidamente pelas duas: a música e a sandália, exatamente nessa ordem.

Esperei ansiosamente pelo dia seguinte, e no mesmo horário lá estava ele: o comercial da música e da sandália apaixonantes...

Pronto. Agora tínhamos encontro marcado todos os dias: o comercial e eu.

Já dá para imaginar que esse era o momento mais esperado por mim...

Devo dizer que tenho paixão por música e um coração loucamente romântico... E embora nunca tenha estudado Francês e não entendesse nada daquela letra, podia sentir que ela falava de um grande amor... Amo músicas e histórias que falam de um grande amor.

Devo ainda dizer que também tenho paixão por sandálias, e aquelas FRANCESINHAS ficariam maravilhosas nos meus pés...

Bem, as sandálias não seriam problema, toda sapataria teria... Mas, e a música?

Sem o nome e nem o cantor da música, ficava difícil procurar nas lojas de discos... Eu até tentei mas não consegui.

Chegaram as férias de Julho... Fomos com as crianças para o apartamento de meu irmão em João Pessoa, na praia de Tambaú...

Na primeira manhã da nossa estadia, meu marido levantou mais cedo, foi para a salinha de música e colocou um longplay na vitrola...

Ah, antes que você se pergunte que tempo era esse — de Longplays e Vitrolas — eu digo: era a década de 80... mas, incrível mesmo foi a primeira música que tocou...

Abri os olhos, concentrei os ouvidos e pulei da cama cheia de emoção... Era ela... A minha paixão do momento... a música apaixonante, da sandália apaixonante, do comercial apaixonante, que eu ansiosamente esperava todas as noites para assistir...

Essas férias foram inesquecíveis! Durante trinta dias eu ouvi a minha música preferida:

"ET SI TU N'EXISTAIS PAS"

— Se eu fiquei com o LP do meu irmão?
— Não. Eu não faria isso... Mas comprei outro exatamente igual.

Ah, e as sandálias FRANCESINHAS também!

E foi assim que ela entrou em minha vida!

✦ Férias de Julho de 1986 — Não foi em Paris, mas foi igualmente feliz!

Socorro Capiberibe
Dedico essa crônica ao meu irmão Luis Filipe Marinho Capiberibe`
},
{
  titulo:"SALA DE LEITURA // HORA DO CONTO // SOCORRO CAPIBERIBE // 'O PESO DE UMA PALAVRA...'" ,
    tipo:"Conto" ,
    trecho:"Palavras tem força. Peso. Poder. Levantam ou derrubam. Acalmam ou revoltam. Acariciam ou ferem. Podem levar ao céu mas podem impelir ao abismo. Palavras tem ressonâncias eternas. Podem promover a cura, mas podem provocar prejuízos irreparáveis.",
    imagens:["imagens/walter_capiberibe.jpg"],
    texto:`Tomaram café normalmente, como todos os dias a quarenta anos... Conversaram sobre os filhos, comentaram sobre os netos, procuraram no jornal as ofertas do dia nos supermercados e saíram para as compras e passeios, como era de costume.

Estavam casados há todos esses anos... Era uma longa caminhada... Uma união muito sólida... Um carinho muito grande... Um laço muito forte.

Saíam sempre juntos... Onde um estivesse, o outro também estava. Eram companheiros inseparáveis... Na saúde e na doença; na alegria e na tristeza; na briga e na paz... - sim, porque casal de meia-idade sente prazer em implicar por qualquer bobagem... É o cigarro escondido, que faz mal à saúde; o doce escondido, porque vai engordar; a batata frita salgada, por causa da pressão ou a coxinha de galinha, para não aumentar o colesterol... - mas, ai de quem se metesse na discussão dos dois... - "não fale assim com sua mãe, olhe o respeito... veja o jeito como fala com seu pai, ele não tem a sua idade..." - e os dois faziam as pazes, ficavam mais unidos do que antes e ainda ralhavam com quem tomasse partido. Fora assim, a vida inteira. Não iriam mudar.

Os anos passam rapidamente e não pedem licença... Um belo dia a gente se olha no espelho e fica surpresa... - é uma ruga aqui, outra ali... Um cabelo branco na fronte que não tinha na véspera... E num piscar de olhos o tempo passou.

E, aquele casal outrora tão jovem, que há quarenta anos atrás iniciou uma vida... Criou oito filhos, ganhou muitos netos e agora idoso, seguia na lida.

O tempo passou e eles ficaram mais unidos; e as sementes plantadas germinaram em bom terreno. Estavam mais velhos... Cabelo embranquecido, andar mais pausado... Porém, mais vividos.

Naquele dia, durante o passeio, Coronel Capiberibe — Militar reformado — sempre cauteloso, sempre educado, dirigia seu carro cuidadosamente, com a esposa do lado... Talvez mais lento que o habitual, talvez na mesma velocidade com que sempre dirigia, quando um outro motorista mais jovem, impaciente e mal-educado, buzinou irado, emparelhou o carro e sem o menor respeito gritou: "sai da frente velho decrépito... um velho da sua idade não era para estar mais dirigindo..." – e, arrancou na maior velocidade.

Coronel Capiberibe assustou-se; quase bate com o carro; ficou vermelho da contrariedade... Tentou revidar, mas o rapaz já ia longe e ele tremendo, com os olhos cheios d'água, apenas desabafou sentido... "Os jovens não têm mais respeito pelos mais velhos!" Dona Ruth percebeu a humilhação no desabafo do marido e solidária confortou: "não ligue, Walter, esse rapaz com certeza não deve mais ter pai nem mãe, do contrário saberia respeitar."

Voltaram para casa aborrecidos. A contrariedade tinha sido muito forte. Tem dias na vida em que se está mais sensível, que o peso dos anos incomoda mais, que a saudade do passado se faz mais presente ou que a proximidade do fim tem uma conotação maior. Talvez aquele, fosse um desses dias para o velho Coronel, porque, virava e mexia e ele voltava a falar no assunto. Dona Ruth desconversava, falava outra coisa, comentava a novela... - todas as noites eles assistiam a televisão de mãos dadas e acompanhavam todas as novelas... - mas, não tinha jeito... Mais adiante ele falava outra vez.

As pessoas, muitas vezes, desconhecem o poder da palavra... Não pensam que a dor moral pode ser bem mais forte do que uma dor física. Xingar um jovem de "esclerosado" não ofende... Uma jovem magra de "baleia", também não... Porém, se a gente xinga um deficiente físico de "coxo", ou um idoso, de "velho decrépito..." aí a gente humilha... E pancadas dadas e palavras ditas não se retira... - diz um velho ditado... Foi o que aconteceu com o Coronel Capiberibe. Aquele insulto do rapaz doeu tanto ou até mais do que uma bofetada. Se as pessoas pensassem mais antes de falar, cometeriam menos grosserias e fariam sofrer bem menos pessoas. A velhice, a obesidade, a deficiência física ou, seja o que for, não são defeitos; são contingências da vida... Merecem respeito e não depreciação.

Coronel Capiberibe não viveu muito tempo. Claro que não foi por isso... Não teve nada a ver. Morreu porque chegou o dia... Todos temos um tempo a cumprir... Mas essa mágoa poderia lhe ter sido subtraída, se houvesse mais sensibilidade e respeito entre os homens.

Dois dias depois faleceu o bom Coronel... Ainda triste com a grosseria recebida... Ele, que na vida, procurou dar o melhor exemplo de homem de bem e de chefe de família.

✦ Em memória do meu pai: Walter Freire Capiberibe — Exemplo de Dignidade e Integridade Moral.
(Baseado em fatos reais.)

Do livro da autora: A ARTE DE CONTAR HISTÓRIAS (Contos & Crônicas)

✦ Todos os livros de Socorro Capiberibe encontram-se à venda na AMPARE: 81-3104.7617 e 9.9504.0782`
},
{
    titulo: "A ESTRELINHA QUE FICOU – ( DO LIVRO CONTOS & LENDAS ORIENTAIS DE MALBA TAHAN)",
    tipo: "Conto",
    trecho: "Era uma tarde de abril quando as primeiras gotas tocaram o telhado de zinco. Aquele barulho sempre me levou de volta à infância, ao quintal da minha avó...",
    imagens: ["imagens/estrelinha.jpeg"],
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
    E sempre pequeninas e brilhantes permanecerão na Terra. Houve, neste dia, ao cair da noite, uma chuva maravilhosa de estrelas. No céu ficaram o sol, a lua e um cometa rabugento, de cauda comprida, que não quis descer. Mas as estrelas desceram. Desceram e encheram a Terra. Espalharam –se por toda parte . pelos campos, pelas praias, pelas estradas e pelos jardins. Havia estrelinhas brancas, azuis, verdes, roxas, amarelas. Havia até (vejam só!) uma estrela furta-cor! Que beleza ! Algumas ficaram bem quietinhas, a cintilar, no alto das torres; vieram outras pousar nas fontes, nos repuxos, ou saltitar entre as flores e iluminar os bosques. As mais pequeninas, brincalhonas, apostavam corrida com os vaga-lumes: outras iam devagarzinho assustar os sapos que cochilavam tranqüilos entre as pedras junto das lagoas. Que alegria para as crianças! Que alegria! Mas no fim de poucos dias as estrelinhas começaram a fugir da Terra, aos grupos, aos bandos. Deixaram a Terra e voltavam para o céu. Voltavam a brilhar lá em cima, para além das nuvens, para além da Lua. O anjo da Serena Compaixão ao observar que as estrelinhas voltavam, interrogou-as: “Por que vocês voltaram?” A primeira estrela respondeu: Vi tanta maldade na terra que fiquei triste, muito triste, e resolvi voltar para o céu. Outra estrela, sendo interrogada, disse ao Anjo: Na Terra senhor vi egoísmo, vi ingratidão e perfídias! Vi filhos falando grosseiramente com seus pais! Vi fracos perseguidos e espancados pelos fortes. Meu coração ficou abalado. E por isso, e só por isso, resolvi voltar para o céu. E assim todas as estrelinhas, por terem visto maldades na Terra, voltaram ao céu. E cada uma, ao chegar, ia muito quietinha, retomar o seu antigo lugar no meio das constelações. O anjo contou-as uma a uma e percebeu que vinte mil e seis estrelinhas tinham voltado. Estranhou o anjo a conta pois faltava uma estrela para completar o número das que tinham descido a Terra. E as estrelas lhe contaram que a estrelinha verde da esperança, boa e velha companheira, não havia voltado. A estrela verde da Esperança! É por isso, meu amigo, que os homens, todos os homens, nos momentos mais tristes da vida, nos momentos de perigo, de dor ou de aflição, nunca perdem a esperança... É que a estrelinha da esperança, nossa boa amiga, deixou o céu e veio (diz a lenda) viver na Terra. Foi a única que ficou e vive, para sempre, no coração dos Homens.
    
    Fonte (imagem): Internet`
    
  },
  {
    titulo: "SALA DE LEITURA // DE VOLTA NO TEMPO... // SOCORRO CAPIBERIBE COM VOCÊ: ",
    tipo: "Colagem literária",
    trecho: "AS CANÇÕES QUE VOCÊ FEZ PRA MIM, NAS JOVENS TARDES DE DOMINGO... (Para os Jovens de 70... Como EU... Quem viveu essa época vai lembrar.)",
    imagens: ["imagens/jovens_tardes_de_domingo.jpeg"],
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
  (Décadas de 60 e 70 - Trechos das músicas: A Praça / O Bilhetinho / A primeira Lágrima / Devolva-me / Eu não aceito o seu adeus / A irmã do meu melhor amigo / A Festa dos seus quinze anos / Pensando nela / Não te esquecerei / Não se esqueça de mim / Eu vou ter sempre você / Aquele beijo que eu te dei / Escreva uma carta meu amor / De que vale tudo isso...? / Quase fui lhe procurar / Como vai você...? / Detalhes / De que vale tudo isso? / Eu daria minha vida / Emoções / As canções que você fez pra mim / Jovens tardes de domingo / Ah, se eu fosse você... Eu voltava pra mim.).`
  },
  {
    titulo: "UMA PAUSA PARA A REFLEXÃO // DEIXANDO UM DE MIM...",
    tipo: "Reflexão",
    trecho: "A vida é e sempre será a nossa riqueza de maior valor.",
    imagens:["imagens/dancemos.jpeg"],
    texto: `A vida é e sempre será a nossa riqueza de maior valor. Viva hoje. Viva agora. Não deixe nada para depois.
    O futuro não é garantido a ninguém. 
    Só temos de certo o momento presente e a certeza de que a qualquer momento a música da vida vai terminar.
Então, dancemos felizes ao som dessa orquestra Divina, até o último acorde dessa maravilhosa canção!

Com carinho,
Socorro Capiberibe`
  },
  {
    titulo: "SOCORRO CAPIBERIBE COM VOCÊ  / DEIXANDO UM POUQUINHO DE MIM...",
    tipo: "Reflexão",
   
    trecho: "'Deixar ir'... também é uma forma de amar...",
    imagens: ["imagens/deixar_ir.jpeg"],
    texto: `"DEIXAR IR"... TAMBÉM É UMA FORMA DE AMAR... GUARDAR COM CARINHO E RESPEITO, 
OS BONS MOMENTOS VIVIDOS COM OS QUE DECIDIRAM SEGUIR, É ENTENDER QUE O CAMINHO COMPARTILHADO VALEU!*

*Socorro Capiberibe`
  },
  
  {
    titulo: "Para quem curte uma boa leitura / Excelente texto...",
    tipo: "Reflexão",
    
    trecho: "Passeando pelo parque de Steglitz, em Berlim, encontrou uma menina chorando porque havia perdido sua boneca...",
    texto: `Um ano antes de sua morte, Franz Kafka (1883-1924), viveu uma experiência singular. 
Passeando pelo parque de Steglitz, em Berlim, encontrou uma menina chorando porque havia perdido sua boneca. 
Kafka ofereceu ajuda para encontrar a boneca. Procuraram juntos pelo parque, e não tendo encontrado a boneca, Kafka então propôs encontrar-se no outro dia com a menina, ali no mesmo lugar. 
No dia seguinte, quando se encontraram, ele entregou uma carta como se fosse da boneca e leu para a garotinha. A carta dizia: “Por favor, não chores por mim, parti numa viagem para ver o mundo. Vou te escrever sobre as minhas aventuras". Durante três semanas, Kafka entregou pontualmente à menina outras cartas, que narravam as
peripécias da boneca em todos os cantos do mundo: Londres, Paris, Madagascar… A menina escutava maravilhada e encantava-se com cada carta. Kafka fazia 
tudo para que a menina esquecesse a grande tristeza! 
Esta história foi contada para alguns jornais e inspirou um livro de Jordi Sierra i Fabra (Kafka e a Boneca Viajante) onde o escritor imagina como teriam sido as conversas e o conteúdo das cartas de Kafka.
No fim, Kafka presenteou a menina com uma outra boneca. 
Ela era obviamente diferente da boneca original. 
Uma carta anexa explicava: “minhas viagens me transformaram…”. 
Anos depois, a garota encontrou uma carta enfiada numa abertura escondida da querida boneca substituta. 
O bilhete dizia: “Tudo que você ama, provavelmente você perderá, mas no final, o amor retornará de forma diferente”

Franz Kafka e a Boneca Viajante" // Autor: Jordi Sierra i Fabra)`
},
{
  titulo: "O DIREITO E A LIBERDADE DE SONHAR // SOCORRO CAPIBERIBE",
  tipo: "Poesia/reflexão",
 
  trecho: "Os sonhos não morrem jamais!",
  imagens:["imagens/livros/uma-licao-de-amor-capa.jpeg"],
  texto: `Os sonhos não morrem jamais!"
Os sonhos não morrem... 
Tampouco envelhecem...
Por vezes, se escondem... 
Se muito adormecem.
São bônus da vida da vida... 
Riquezas do ser... 
constróem o futuro... 
Ajudam a viver.
E, quando, calados... 
No peito escondidos...
No fundo da alma... 
Quietos esperam...
Não importa o tempo que fiquem guardados...
Que passem adormecidos... 
Um dia despertam.
Os sonhos são livres, são jovens, são belos...
São vôos diretos em busca de paz...
Alimentam esperanças, desejos secretos,
o sonhos são eternos, não morrem jamais."" 
______________________________
PARA REFLETIR:
"Ninguém tem o direito de destruir os SONHOS de ninguém e nem de tentar desviar o caminho de alguém que está indo em direção da realização dos seus SONHOS. O sonho é um bem precioso que se tem de graça, sem se pagar nenhum imposto pelo direito de sonhar.
E a ESPERANÇA de ter seus sonhos realizados é o que sustenta e dá sentido à vida de quem sonha. 
O sonho só não se realiza quando se desiste de sonhar"" 
// Um dia sonhei que seria escritora e soltei minha imaginação nos versos que escrevia e nas histórias que criava... 
// E Meus livros se tornaram REALIDADE. // A LEITURA É UMA ESPÉCIE DE VIAGEM E MUITAS VIAGENS SÃO FEITAS DE SONHOS!!!

Do Livro: UMA LIÇÃO DE AMOR (Romance)
*Socorro Capiberibe `


},
];


/* -------------------------------------------------------
   REDES SOCIAIS E CONTATO
   Edite os links com seus perfis reais.
   Para remover uma rede, apague o bloco { ... } dela.
------------------------------------------------------- */
const redesSociais = [
  {
    nome: "Instagram",
    icone: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>`,
    url: "https://instagram.com/msocorrocapiberibemaia"
  },
  {
    nome: "Facebook",
    icone: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>`,
    url: "https://facebook.com/socorrocapiberibe"
  }
];
