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
    titulo:" Para os amantes da leitura: Deixando um pouquinho de mim..." ,
    tipo:"Crônica" ,
    trecho:"A crônica a seguir, faz menção a esses meus 'Dois Amores': Minha mãe Maria Ruth e minha filha Mariana Capiberibe Maia... ",
    imagens: ["imagens/foto_nana.jpg", "imagens/socorro_e_ruth.jpg"],
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
    titulo:"SALA DE LEITURA // HORA DO CONTO // SOCORRO CAPIBERIBE // 'O PESO DE UMA PALAVRA...'" ,
    tipo:"Conto" ,
    trecho:"Palavras tem força. Peso. Poder. Levantam ou derrubam. Acalmam ou revoltam. Acariciam ou ferem. Podem levar ao céu mas podem impelir ao abismo. Palavras tem ressonâncias eternas. Podem promover a cura, mas podem provocar prejuízos irreparáveis.",
    imagem:"imagens/walter_capiberibe.jpg",
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
  (Décadas de 60 e 70 - Trechos das músicas: A Praça / O Bilhetinho / A primeira Lágrima / Devolva-me / Eu não aceito o seu adeus / A irmã do meu melhor amigo / A Festa dos seus quinze anos / Pensando nela / Não te esquecerei / Não se esqueça de mim / Eu vou ter sempre você / Aquele beijo que eu te dei / Escreva uma carta meu amor / De que vale tudo isso...? / Quase fui lhe procurar / Como vai você...? / Detalhes / De que vale tudo isso? / Eu daria minha vida / Emoções / As canções que você fez pra mim / Jovens tardes de domingo / Ah, se eu fosse você... Eu voltava pra mim.).`
  },
  {
    titulo: "UMA PAUSA PARA A REFLEXÃO // DEIXANDO UM DE MIM...",
    tipo: "Reflexão",
    data: "Janeiro de 2026",
    trecho: "A vida é e sempre será a nossa riqueza de maior valor.",
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
    data: "Dezembro de 2025",
    trecho: "'Deixar ir'... também é uma forma de amar...",
    texto: `"DEIXAR IR"... TAMBÉM É UMA FORMA DE AMAR... GUARDAR COM CARINHO E RESPEITO, 
OS BONS MOMENTOS VIVIDOS COM OS QUE DECIDIRAM SEGUIR, É ENTENDER QUE O CAMINHO COMPARTILHADO VALEU!*

*Socorro Capiberibe`
  },
  
  {
    titulo: "Para quem curte uma boa leitura / Excelente texto...",
    tipo: "Reflexão",
    data: "Janeiro de 2025",
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
  data: "Dezembro de 2024",
  trecho: "Os sonhos não morrem jamais!",
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
{
    titulo:"SOCORRO CAPIBERIBE COM VOCÊ / DEIXANDO UM POUQUINHO DE MIM..." ,
    tipo:"Crônica" ,
    data:"Maio de 2019",
    trecho:"E SE TU NÃO EXISTISSES, DIZE-ME POR QUE EU EXISTIRIA?",
    imagem:"imagens/praia_socorro.jpg",
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
