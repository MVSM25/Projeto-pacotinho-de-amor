/* =====================================================
   PACOTINHOS DE AMOR
   JAVASCRIPT
   VERSÃO 5

   ATUALIZAÇÕES:
   - Caminhos individuais das fotos
   - Novos animais do portfólio CERET
   - Histórias dos animais
   - Correção dos contadores
   - Correção do modal
   - Tratamento de erro das imagens
   - Busca por nome e informações
   - Cache-busting das fotos
   - Padronização dos nomes dos arquivos
   - Cada animal possui sua própria foto
   ===================================================== */


/* =====================================================
   CONFIGURAÇÃO DAS FOTOS
   ===================================================== */

/*
   IMPORTANTE:

   Todas as fotos devem estar dentro de:

   assets/animais/

   Os nomes dos arquivos devem ser exatamente
   iguais aos informados no campo "foto".

   Exemplo:

   Julinho:
   assets/animais/julinho.jpg

   Ísis:
   assets/animais/isis.jpg
*/


const VERSAO_FOTOS = "2026-10-08-v5";


/* =====================================================
   FUNÇÃO PARA LOCALIZAR A FOTO
   ===================================================== */

function caminhoFoto(animal) {

    if (
        animal &&
        typeof animal.foto === "string" &&
        animal.foto.trim() !== ""
    ) {

        const caminho =
            animal.foto.trim();

        /*
           Adiciona uma versão à URL para evitar que
           o navegador continue exibindo uma foto antiga
           que ficou armazenada em cache.
        */

        return `${caminho}?v=${VERSAO_FOTOS}`;

    }

    return "";

}


/* =====================================================
   DADOS DOS ANIMAIS
   ===================================================== */

const animais = [


/* =====================================================
   CACHORROS
   ===================================================== */


{
    nome: "Julinho",
    especie: "cachorro",
    idade: "1 ano",
    foto: "assets/animais/julinho.jpg",

    historia:
        "Julinho foi encontrado no estacionamento de uma farmácia na Chácara Santo Antônio, sozinho e precisando de ajuda. Hoje está seguro e aguarda uma família responsável e cheia de amor para chamar de sua.",

    cuidados:
        "Vacinado • Vermifugado • Castrado • Porte médio"
},


{
    nome: "Luna",
    especie: "cachorro",
    idade: "24.08.22",
    foto: "assets/animais/luna.jpg",

    historia:
        "Luna foi resgatada ainda na barriga da mãe, em 2022. Sua mãe estava grávida e sendo agredida nas ruas, mas, infelizmente, apenas Luna sobreviveu. Hoje, ela é uma cachorra muito carinhosa e protetora com humanos. Ama passear e receber carinho na barriga! É de porte grande, daquelas que parecem um verdadeiro urso de pelúcia. Por não se dar bem com gatos e ter dificuldades com alguns cães, Luna seria mais feliz como filha única, recebendo todo o amor e atenção de sua família. Agora, ela espera encontrar um lar onde possa ser amada e cuidada para sempre.",

    cuidados:
        "Castrada • Vacinada • Vermifugada • Porte grande"
},


{
    nome: "Ana Castela",
    especie: "cachorro",
    idade: "4 anos",
    foto: "assets/animais/ana-castela.jpg",

    historia:
        "Ana Castela foi abandonada em Francisco Morato e acabou precisando recomeçar sua história. Hoje está segura e aguarda uma família responsável que possa oferecer todo o amor, carinho e proteção que ela merece.",

    cuidados:
        "Castrada • Vacinada • Vermifugada • Porte médio"
},


{
    nome: "Joe",
    especie: "cachorro",
    idade: "3/4 anos",
    foto: "assets/animais/joe.jpg",

    historia:
        "Joe foi resgatado junto com seu filho, Tigrão, em maio de 2025. Os dois viviam em um pequeno cubículo, tentando se proteger da chuva e do sol, em um espaço muito limitado no fundo de um quintal. Em agosto, Tigrão foi adotado e, cerca de um mês depois, Joe também ganhou uma família junto com seu filho. Infelizmente, quase um ano após a adoção, ele foi devolvido. Agora Joe aguarda novamente a chance de encontrar um lar definitivo, onde seja amado para sempre.",

    cuidados:
        "Castrado • Vacinado • Vermifugado • Porte grande"
},


{
    nome: "Rebeca",
    especie: "cachorro",
    idade: "1 ano e meio",
    foto: "assets/animais/rebeca.jpg",

    historia:
        "Rebeca foi resgatada no final de março de 2026, em Guarulhos, extremamente debilitada e muito magra. Quando foi resgatada, pesava apenas 7kg. Com cuidados, alimentação e muito carinho, se recuperou muito bem e hoje já está com 12kg. Agora está saudável e aguarda uma família para chamar de sua.",

    cuidados:
        "Vermifugada • Vacinada • Castrada • Porte pequeno/médio"
},


{
    nome: "Hércules",
    especie: "cachorro",
    idade: "11 anos",
    foto: "assets/animais/hercules.jpg",

    historia:
        "Hércules é um lindo mix de Border Collie que foi resgatado em maio de 2026 muito debilitado, magro e sem forças. Após receber todos os cuidados necessários, se recuperou completamente e hoje está saudável e cheio de vida. Dócil, muito carinhoso e inteligente, adora passear, aprende comandos com facilidade e ama receber atenção. Agora, Hércules aguarda uma família que lhe ofereça o amor e a segurança que sempre mereceu.",

    cuidados:
        "Vacinado • Vermifugado • Porte médio/grande"
},


{
    nome: "Nick",
    especie: "cachorro",
    idade: "7/8 anos",
    foto: "assets/animais/nick.jpg",

    historia:
        "Nick é um cãozinho dócil e medroso, que se dá bem com cães e gatos. Ele entrou na casa de uma protetora quando encontrou o portão aberto, procurando abrigo. Estava muito judiado, com medo e com muita fome. Hoje está em lar temporário, mas como vive com muitos cães, acaba ficando com medo e só consegue comer quando é separado. Nick espera uma família que lhe dê segurança, paciência e muito amor.",

    cuidados:
        "Castrado • Vacinado • Vermifugado • Porte pequeno/médio"
},


{
    nome: "Athena",
    especie: "cachorro",
    idade: "2 anos",
    foto: "assets/animais/athena.jpg",

    historia:
        "Athena foi abandonada pela própria tutora e, ao ser levada para castração, descobrimos que ela já era castrada e possuía microchip. Muito amorosa e dócil, Athena se dá super bem com outros animais e só espera encontrar uma família que realmente a ame e cuide dela para sempre.",

    cuidados:
        "Castrada • Vacinada • Porte médio"
},


{
    nome: "Shakira",
    especie: "cachorro",
    idade: "3 anos",
    foto: "assets/animais/shakira.jpg",

    historia:
        "Shakira foi encontrada prenha nas ruas, já prestes a dar à luz. Felizmente, seus filhotes foram todos adotados, mas ninguém quis dar uma chance para a mamãe. Ela é super dócil, amorosa, tranquila e se dá muito bem com outros cães. Agora, Shakira espera que finalmente alguém enxergue todo o amor que ela tem para oferecer e escolha ser sua família.",

    cuidados:
        "Castrada • Vacinada • Porte médio"
},


/* =====================================================
   NINHADA HE-MAN E SHE-RA
   ===================================================== */


{
    nome: "She-ra",
    especie: "cachorro",
    idade: "2 meses",
    ninhada: "He-Man e She-Ra",
    foto: "assets/animais/she-ra.jpg",

    historia:
        "Os filhotes da Ninhada He-Man e She-Ra nasceram de uma mãezinha que vivia na periferia e não havia sido castrada. Assumimos a castração da mãe e acolhemos os filhotes para que todos tenham a oportunidade de encontrar lares responsáveis através da adoção consciente. Hoje, eles aguardam famílias cheias de amor para começarem uma nova história, com todo o cuidado e proteção que merecem.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


{
    nome: "Cintilante",
    especie: "cachorro",
    idade: "2 meses",
    ninhada: "He-Man e She-Ra",
    foto: "assets/animais/cintilante.jpg",

    historia:
        "Os filhotes da Ninhada He-Man e She-Ra nasceram de uma mãezinha que vivia na periferia e não havia sido castrada. Assumimos a castração da mãe e acolhemos os filhotes para que todos tenham a oportunidade de encontrar lares responsáveis através da adoção consciente. Hoje, eles aguardam famílias cheias de amor para começarem uma nova história, com todo o cuidado e proteção que merecem.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


{
    nome: "Teela",
    especie: "cachorro",
    idade: "2 meses",
    ninhada: "He-Man e She-Ra",
    foto: "assets/animais/teela.jpg",

    historia:
        "Os filhotes da Ninhada He-Man e She-Ra nasceram de uma mãezinha que vivia na periferia e não havia sido castrada. Assumimos a castração da mãe e acolhemos os filhotes para que todos tenham a oportunidade de encontrar lares responsáveis através da adoção consciente. Hoje, eles aguardam famílias cheias de amor para começarem uma nova história, com todo o cuidado e proteção que merecem.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


{
    nome: "He-man",
    especie: "cachorro",
    idade: "2 meses",
    ninhada: "He-Man e She-Ra",
    foto: "assets/animais/he-man.jpg",

    historia:
        "Os filhotes da Ninhada He-Man e She-Ra nasceram de uma mãezinha que vivia na periferia e não havia sido castrada. Assumimos a castração da mãe e acolhemos os filhotes para que todos tenham a oportunidade de encontrar lares responsáveis através da adoção consciente. Hoje, eles aguardam famílias cheias de amor para começarem uma nova história, com todo o cuidado e proteção que merecem.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


{
    nome: "Pacato",
    especie: "cachorro",
    idade: "2 meses",
    ninhada: "He-Man e She-Ra",
    foto: "assets/animais/pacato.jpg",

    historia:
        "Os filhotes da Ninhada He-Man e She-Ra nasceram de uma mãezinha que vivia na periferia e não havia sido castrada. Assumimos a castração da mãe e acolhemos os filhotes para que todos tenham a oportunidade de encontrar lares responsáveis através da adoção consciente. Hoje, eles aguardam famílias cheias de amor para começarem uma nova história, com todo o cuidado e proteção que merecem.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


{
    nome: "Rei Randor",
    especie: "cachorro",
    idade: "5 meses",
    ninhada: "He-Man e She-Ra",
    foto: "assets/animais/rei-randor.jpg",

    historia:
        "Os filhotes da Ninhada He-Man e She-Ra nasceram de uma mãezinha que vivia na periferia e não havia sido castrada. Assumimos a castração da mãe e acolhemos os filhotes para que todos tenham a oportunidade de encontrar lares responsáveis através da adoção consciente. Hoje, eles aguardam famílias cheias de amor para começarem uma nova história, com todo o cuidado e proteção que merecem.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


{
    nome: "Ventania",
    especie: "cachorro",
    idade: "2 meses",
    ninhada: "He-Man e She-Ra",
    foto: "assets/animais/ventania.jpg",

    historia:
        "Os filhotes da Ninhada He-Man e She-Ra nasceram de uma mãezinha que vivia na periferia e não havia sido castrada. Assumimos a castração da mãe e acolhemos os filhotes para que todos tenham a oportunidade de encontrar lares responsáveis através da adoção consciente. Hoje, eles aguardam famílias cheias de amor para começarem uma nova história, com todo o cuidado e proteção que merecem.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


{
    nome: "Arqueiro",
    especie: "cachorro",
    idade: "2 meses",
    ninhada: "He-Man e She-Ra",
    foto: "assets/animais/arqueiro.jpg",

    historia:
        "Os filhotes da Ninhada He-Man e She-Ra nasceram de uma mãezinha que vivia na periferia e não havia sido castrada. Assumimos a castração da mãe e acolhemos os filhotes para que todos tenham a oportunidade de encontrar lares responsáveis através da adoção consciente. Hoje, eles aguardam famílias cheias de amor para começarem uma nova história, com todo o cuidado e proteção que merecem.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


{
    nome: "Corujito",
    especie: "cachorro",
    idade: "2 meses",
    ninhada: "He-Man e She-Ra",
    foto: "assets/animais/corujito.jpg",

    historia:
        "Os filhotes da Ninhada He-Man e She-Ra nasceram de uma mãezinha que vivia na periferia e não havia sido castrada. Assumimos a castração da mãe e acolhemos os filhotes para que todos tenham a oportunidade de encontrar lares responsáveis através da adoção consciente. Hoje, eles aguardam famílias cheias de amor para começarem uma nova história, com todo o cuidado e proteção que merecem.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


/* =====================================================
   OUTROS CACHORROS
   ===================================================== */


{
    nome: "Aurora",
    especie: "cachorro",
    idade: "9 meses",
    foto: "assets/animais/aurora.jpg",

    historia:
        "Aurora tinha uma família, mas foi deixada para trás quando eles se mudaram. Ela permaneceu por um tempo de favor em um quintal, até que foi levada para ser castrada. Infelizmente, quando voltou, não aceitaram mais que ela permanecesse no local. Desde então, Aurora aguarda uma nova chance. É uma cadelinha que merece encontrar uma família de verdade, que a acolha com amor, segurança e nunca mais a abandone.",

    cuidados:
        "Castrada • Vacinada • Vermifugada • Porte médio"
},


{
    nome: "Zeus",
    especie: "cachorro",
    idade: "3 anos",
    foto: "assets/animais/zeus.jpg",

    historia:
        "Zeus viveu meses em uma casa abandonada no Embu, após a morte de sua tutora. Ficava preso em um quintal cheio de lixo e, infelizmente, sofria agressões. Quando foi resgatado, estava muito magro e precisou de cuidados para recuperar suas forças. Hoje, Zeus é um cão alegre, carinhoso e cheio de amor para dar. Adora ficar pertinho, dar lambeijos e se dá muito bem com outros cães, gatos e crianças. No abrigo, inclusive, cuidava dos filhotes que chegavam. Também adora passear e é tranquilo na guia. Zeus é um verdadeiro sonho de cachorro caramelo e merece finalmente ter uma família para amar e ser amado.",

    cuidados:
        "Castrado • Vacinado • Vermifugado • Porte médio"
},


{
    nome: "Belo",
    especie: "cachorro",
    idade: "2/3 anos",
    foto: "assets/animais/belo.jpg",

    historia:
        "Belo foi resgatado no Grajaú após vagar por dias sozinho, pedindo atenção e comida. Já passou por exames (parvovirose, cinomose, giárdia e doença do carrapato), todos com resultado negativo. É extremamente tranquilo, amoroso e muito “zen”. Convive bem com outros animais e não demonstrou incômodo no lar temporário.",

    cuidados:
        "Vacinado • Vermifugado • Castrado • Porte médio"
},


{
    nome: "Olívia",
    especie: "cachorro",
    idade: "2 anos",
    foto: "assets/animais/olivia.jpg",

    historia:
        "Olívia foi encontrada nas ruas junto com seus filhotes, Oscar e Oceane. Desde então, os três estão seguros e aguardam uma família para chamar de sua. Oscar tem uma sequela em uma das patinhas, provavelmente causada por algo que aconteceu quando ainda era muito pequeno e vivia nas ruas. Ele já passou por avaliação veterinária e, apesar da limitação, leva uma vida normal e feliz, brincando e aproveitando cada momento. Essa família tão especial merece uma chance de conhecer o amor e a segurança de um lar definitivo.",

    cuidados:
        "Castrada • Vacinada • Vermifugada • Porte médio"
},


{
    nome: "Oceane",
    especie: "cachorro",
    idade: "3 meses",
    ninhada: "Filhotes da Olívia",
    foto: "assets/animais/oceane.jpg",

    historia:
        "Olívia foi encontrada nas ruas junto com seus filhotes, Oscar e Oceane. Desde então, os três estão seguros e aguardam uma família para chamar de sua. Essa família tão especial merece uma chance de conhecer o amor e a segurança de um lar definitivo.",

    cuidados:
        "Vacinada • Vermifugada • Porte médio"
},


{
    nome: "Oscar",
    especie: "cachorro",
    idade: "2 meses",
    ninhada: "Filhotes da Olívia",
    foto: "assets/animais/oscar.jpg",

    historia:
        "Olívia foi encontrada nas ruas junto com seus filhotes, Oscar e Oceane. Desde então, os três estão seguros e aguardam uma família para chamar de sua. Oscar tem uma sequela em uma das patinhas, provavelmente causada por algo que aconteceu quando ainda era muito pequeno e vivia nas ruas. Ele já passou por avaliação veterinária e, apesar da limitação, leva uma vida normal e feliz, brincando e aproveitando cada momento. Essa família tão especial merece uma chance de conhecer o amor e a segurança de um lar definitivo.",

    cuidados:
        "Vacinado • Vermifugado • Porte médio"
},


/* =====================================================
   NINHADA CHICLETES
   ===================================================== */


{
    nome: "Bazooka",
    especie: "cachorro",
    idade: "Nasc. 27.07.26",
    ninhada: "Chicletes",
    foto: "assets/animais/bazooka.jpg",

    historia:
        "Esses pequenos foram resgatados após serem abandonados em Embu. Agora estão seguros e prontos para encontrar famílias que possam oferecer todo o amor e cuidado que merecem.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


{
    nome: "Trident",
    especie: "cachorro",
    idade: "Nasc. 27.07.26",
    ninhada: "Chicletes",
    foto: "assets/animais/trident.jpg",

    historia:
        "Esses pequenos foram resgatados após serem abandonados em Embu. Agora estão seguros e prontos para encontrar famílias que possam oferecer todo o amor e cuidado que merecem.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


{
    nome: "Fini",
    especie: "cachorro",
    idade: "Nasc. 27.07.26",
    ninhada: "Chicletes",
    foto: "assets/animais/fini.jpg",

    historia:
        "Esses pequenos foram resgatados após serem abandonados em Embu. Agora estão seguros e prontos para encontrar famílias que possam oferecer todo o amor e cuidado que merecem.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


{
    nome: "Plutonita",
    especie: "cachorro",
    idade: "Nasc. 27.07.26",
    ninhada: "Chicletes",
    foto: "assets/animais/plutonita.jpg",

    historia:
        "Esses pequenos foram resgatados após serem abandonados em Embu. Agora estão seguros e prontos para encontrar famílias que possam oferecer todo o amor e cuidado que merecem.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


{
    nome: "Gloop",
    especie: "cachorro",
    idade: "Nasc. 27.07.26",
    ninhada: "Chicletes",
    foto: "assets/animais/gloop.jpg",

    historia:
        "Esses pequenos foram resgatados após serem abandonados em Embu. Agora estão seguros e prontos para encontrar famílias que possam oferecer todo o amor e cuidado que merecem.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


{
    nome: "Mentos",
    especie: "cachorro",
    idade: "Nasc. 27.07.26",
    ninhada: "Chicletes",
    foto: "assets/animais/mentos.jpg",

    historia:
        "Esses pequenos foram resgatados após serem abandonados em Embu. Agora estão seguros e prontos para encontrar famílias que possam oferecer todo o amor e cuidado que merecem.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


{
    nome: "Hubba Bubbles",
    especie: "cachorro",
    idade: "Nasc. 27.07.26",
    ninhada: "Chicletes",
    foto: "assets/animais/hubba-bubbles.jpg",

    historia:
        "Esses pequenos foram resgatados após serem abandonados em Embu. Agora estão seguros e prontos para encontrar famílias que possam oferecer todo o amor e cuidado que merecem.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


{
    nome: "Chiclets",
    especie: "cachorro",
    idade: "Nasc. 27.07.26",
    ninhada: "Chicletes",
    foto: "assets/animais/chiclets.jpg",

    historia:
        "Esses pequenos foram resgatados após serem abandonados em Embu. Agora estão seguros e prontos para encontrar famílias que possam oferecer todo o amor e cuidado que merecem.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


/* =====================================================
   OUTROS
   ===================================================== */


{
    nome: "Ziggy",
    especie: "cachorro",
    idade: "5 meses",
    foto: "assets/animais/ziggy.jpg",

    historia:
        "Ziggy foi resgatado ainda na barriga da mamãe e, desde então, espera pela chance de conhecer um lar cheio de amor. Agora, esse pequeno está em busca de uma família para crescer cercado de carinho e cuidado.",

    cuidados:
        "Castrado • Vacinado • Porte médio"
},


{
    nome: "Julie",
    especie: "cachorro",
    idade: "2 anos",
    foto: "assets/animais/julie.jpg",

    historia:
        "Julie foi abandonada durante o cio, atropelada e ainda enfrentou uma grave infecção. Foi resgatada e reabilitada, mas tudo o que sofreu não foi capaz de apagar sua doçura. Hoje, Julie só espera encontrar uma família que lhe dê todo o amor e cuidado que sempre mereceu.",

    cuidados:
        "Vacinada • Castrada • Porte médio/grande"
},


{
    nome: "Pitucha",
    especie: "cachorro",
    idade: "9 anos",
    foto: "assets/animais/pitucha.jpg",

    historia:
        "Pitucha foi resgatada após ser abandonada no Tatuapé. Agora está segura e esperando a oportunidade de encontrar uma família que lhe ofereça muito amor, carinho e um lar para sempre.",

    cuidados:
        "Vacinada • Castrada • Vermifugada • Porte médio"
},


/* =====================================================
   NINHADA A
   ===================================================== */


{
    nome: "Atlas",
    especie: "cachorro",
    idade: "4 meses",
    ninhada: "Ninhada A",
    foto: "assets/animais/atlas.jpg",

    historia:
        "Os filhotes da Ninhada A foram encontrados abandonados em uma ocupação na região de São Mateus. Hoje estão seguros, recebendo todos os cuidados necessários e aguardando famílias responsáveis para começarem uma nova história cheia de amor, carinho e proteção.",

    cuidados:
        "Vacinados • Castrados • Vermifugados • Porte médio"
},


{
    nome: "Asher",
    especie: "cachorro",
    idade: "3 meses",
    ninhada: "Ninhada A",
    foto: "assets/animais/asher.jpg",

    historia:
        "Os filhotes da Ninhada A foram encontrados abandonados em uma ocupação na região de São Mateus. Hoje estão seguros, recebendo todos os cuidados necessários e aguardando famílias responsáveis para começarem uma nova história cheia de amor, carinho e proteção.",

    cuidados:
        "Vacinados • Castrados • Vermifugados • Porte médio"
},


{
    nome: "Adriel",
    especie: "cachorro",
    idade: "4 meses",
    ninhada: "Ninhada A",
    foto: "assets/animais/adriel.jpg",

    historia:
        "Os filhotes da Ninhada A foram encontrados abandonados em uma ocupação na região de São Mateus. Hoje estão seguros, recebendo todos os cuidados necessários e aguardando famílias responsáveis para começarem uma nova história cheia de amor, carinho e proteção.",

    cuidados:
        "Vacinados • Castrados • Vermifugados • Porte médio"
},


{
    nome: "Aninha",
    especie: "cachorro",
    idade: "1 ano",
    foto: "assets/animais/aninha.jpg",

    historia:
        "Aninha foi resgatada no Itaim Paulista após dar à luz em um córrego de esgoto. Infelizmente, seus filhotes foram morrendo ainda no local, mas ela sobreviveu e agora está pronta para recomeçar. No primeiro contato, pode ser um pouco arisca, mas quando percebe que está segura, vira um verdadeiro grude! É muito carinhosa, brincalhona, se dá bem com crianças e outros animais. Aninha só precisa de uma família que lhe mostre que as ruas ficaram para trás e que agora ela pode ser muito amada.",

    cuidados:
        "Castrada • Vacinada • Porte pequeno"
},


/* =====================================================
   VAI QUE COLA
   ===================================================== */


{
    nome: "Terezinha",
    especie: "cachorro",
    idade: "45 dias",
    ninhada: "Vai Que Cola",
    foto: "assets/animais/terezinha.jpg",

    historia:
        "A mãezinha da Ninhada Vai Que Cola foi resgatada prenha na Zona Leste. Hoje, ela e seus filhotes estão seguros e recebem todo o cuidado necessário, enquanto aguardam famílias responsáveis para começar uma nova história cheia de amor e proteção.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


{
    nome: "Jéssica",
    especie: "cachorro",
    idade: "3 meses",
    ninhada: "Vai Que Cola",
    foto: "assets/animais/jessica.jpg",

    historia:
        "A mãezinha da Ninhada Vai Que Cola foi resgatada prenha na Zona Leste. Hoje, ela e seus filhotes estão seguros e recebem todo o cuidado necessário, enquanto aguardam famílias responsáveis para começar uma nova história cheia de amor e proteção.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


{
    nome: "Velna",
    especie: "cachorro",
    idade: "45 dias",
    ninhada: "Vai Que Cola",
    foto: "assets/animais/velna.jpg",

    historia:
        "A mãezinha da Ninhada Vai Que Cola foi resgatada prenha na Zona Leste. Hoje, ela e seus filhotes estão seguros e recebem todo o cuidado necessário, enquanto aguardam famílias responsáveis para começar uma nova história cheia de amor e proteção.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


{
    nome: "Gabi do Lins",
    especie: "cachorro",
    idade: "45 dias",
    ninhada: "Vai Que Cola",
    foto: "assets/animais/gabi-do-lins.jpg",

    historia:
        "A mãezinha da Ninhada Vai Que Cola foi resgatada prenha na Zona Leste. Hoje, ela e seus filhotes estão seguros e recebem todo o cuidado necessário, enquanto aguardam famílias responsáveis para começar uma nova história cheia de amor e proteção.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


{
    nome: "Valdo",
    especie: "cachorro",
    idade: "3 meses",
    ninhada: "Vai Que Cola",
    foto: "assets/animais/valdo.jpg",

    historia:
        "A mãezinha da Ninhada Vai Que Cola foi resgatada prenha na Zona Leste. Hoje, ela e seus filhotes estão seguros e recebem todo o cuidado necessário, enquanto aguardam famílias responsáveis para começar uma nova história cheia de amor e proteção.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


{
    nome: "Wilson",
    especie: "cachorro",
    idade: "3 meses",
    ninhada: "Vai Que Cola",
    foto: "assets/animais/wilson.jpg",

    historia:
        "A mãezinha da Ninhada Vai Que Cola foi resgatada prenha na Zona Leste. Hoje, ela e seus filhotes estão seguros e recebem todo o cuidado necessário, enquanto aguardam famílias responsáveis para começar uma nova história cheia de amor e proteção.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Porte médio"
},


{
    nome: "Tatu",
    especie: "cachorro",
    idade: "6 meses",
    foto: "assets/animais/tatu.jpg",

    historia:
        "Tatu foi resgatado extremamente debilitado, com a pele toda tomada pela sarna. Recebeu o tratamento necessário, se recuperou e agora está liberado para adoção! Depois de tudo que enfrentou, Tatu só espera encontrar uma família que lhe ofereça todo o amor e cuidado que merece.",

    cuidados:
        "Castrado • Vacinado • Vermifugado • Porte pequeno"
},


{
    nome: "Pitucho",
    especie: "cachorro",
    idade: "1 ano",
    foto: "assets/animais/pitucho.jpg",

    historia:
        "Pitucho foi resgatado após ser abandonado em Francisco Morato. Agora está seguro e esperando a oportunidade de encontrar uma família que lhe ofereça muito amor, carinho e um lar para sempre.",

    cuidados:
        "Castrado • Vacinado • Vermifugado • Porte pequeno"
},


/* =====================================================
   SALGADINHOS
   ===================================================== */


{
    nome: "Pringles",
    especie: "cachorro",
    idade: "35 dias",
    ninhada: "Salgadinhos",
    foto: "assets/animais/pringles.jpg",

    historia:
        "Uma família da periferia de Embu não conseguiu castrar os pais a tempo, e os filhotes acabaram nascendo. Nós resgatamos os pequenos e também encaminhamos a castração dos pais. Agora, essa turminha está segura e espera por famílias que possam oferecer muito amor e cuidado.",

    cuidados:
        "Vermifugados • Vacinados • Porte médio/grande"
},


{
    nome: "Torcida",
    especie: "cachorro",
    idade: "45 dias",
    ninhada: "Salgadinhos",
    foto: "assets/animais/torcida.jpg",

    historia:
        "Uma família da periferia de Embu não conseguiu castrar os pais a tempo, e os filhotes acabaram nascendo. Nós resgatamos os pequenos e também encaminhamos a castração dos pais. Agora, essa turminha está segura e espera por famílias que possam oferecer muito amor e cuidado.",

    cuidados:
        "Vermifugados • Vacinados • Porte médio/grande"
},


{
    nome: "Ruffles",
    especie: "cachorro",
    idade: "45 dias",
    ninhada: "Salgadinhos",
    foto: "assets/animais/ruffles.jpg",

    historia:
        "Uma família da periferia de Embu não conseguiu castrar os pais a tempo, e os filhotes acabaram nascendo. Nós resgatamos os pequenos e também encaminhamos a castração dos pais. Agora, essa turminha está segura e espera por famílias que possam oferecer muito amor e cuidado.",

    cuidados:
        "Vermifugados • Vacinados • Porte médio/grande"
},


{
    nome: "Lay’s",
    especie: "cachorro",
    idade: "45 dias",
    ninhada: "Salgadinhos",
    foto: "assets/animais/lays.jpg",

    historia:
        "Uma família da periferia de Embu não conseguiu castrar os pais a tempo, e os filhotes acabaram nascendo. Nós resgatamos os pequenos e também encaminhamos a castração dos pais. Agora, essa turminha está segura e espera por famílias que possam oferecer muito amor e cuidado.",

    cuidados:
        "Vermifugados • Vacinados • Porte médio/grande"
},


{
    nome: "Baconzitos",
    especie: "cachorro",
    idade: "45 dias",
    ninhada: "Salgadinhos",
    foto: "assets/animais/baconzitos.jpg",

    historia:
        "Uma família da periferia de Embu não conseguiu castrar os pais a tempo, e os filhotes acabaram nascendo. Nós resgatamos os pequenos e também encaminhamos a castração dos pais. Agora, essa turminha está segura e espera por famílias que possam oferecer muito amor e cuidado.",

    cuidados:
        "Vermifugados • Vacinados • Porte médio/grande"
},


{
    nome: "Cheetos",
    especie: "cachorro",
    idade: "45 dias",
    ninhada: "Salgadinhos",
    foto: "assets/animais/cheetos.jpg",

    historia:
        "Uma família da periferia de Embu não conseguiu castrar os pais a tempo, e os filhotes acabaram nascendo. Nós resgatamos os pequenos e também encaminhamos a castração dos pais. Agora, essa turminha está segura e espera por famílias que possam oferecer muito amor e cuidado.",

    cuidados:
        "Vermifugados • Vacinados • Porte médio/grande"
},


{
    nome: "Fandangos",
    especie: "cachorro",
    idade: "45 dias",
    ninhada: "Salgadinhos",
    foto: "assets/animais/fandangos.jpg",

    historia:
        "Uma família da periferia de Embu não conseguiu castrar os pais a tempo, e os filhotes acabaram nascendo. Nós resgatamos os pequenos e também encaminhamos a castração dos pais. Agora, essa turminha está segura e espera por famílias que possam oferecer muito amor e cuidado.",

    cuidados:
        "Vermifugados • Vacinados • Porte médio/grande"
},


{
    nome: "Doritos",
    especie: "cachorro",
    idade: "45 dias",
    ninhada: "Salgadinhos",
    foto: "assets/animais/doritos.jpg",

    historia:
        "Uma família da periferia de Embu não conseguiu castrar os pais a tempo, e os filhotes acabaram nascendo. Nós resgatamos os pequenos e também encaminhamos a castração dos pais. Agora, essa turminha está segura e espera por famílias que possam oferecer muito amor e cuidado.",

    cuidados:
        "Vermifugados • Vacinados • Porte médio/grande"
},


{
    nome: "Daniel",
    especie: "cachorro",
    idade: "2 anos",
    foto: "assets/animais/daniel.jpg",

    historia:
        "Daniel foi resgatado após ser encontrado sozinho em frente a uma farmácia. Agora está seguro e espera encontrar uma família que lhe ofereça muito amor, carinho e um lar para sempre.",

    cuidados:
        "Castrado • Vacinado • Vermifugado • Porte médio"
},


{
    nome: "Canela",
    especie: "cachorro",
    idade: "3/4 anos",
    foto: "assets/animais/canela.jpg",

    historia:
        "Canela sofreu uma facada ainda filhote e, depois de ser cuidada, passou anos vivendo na rua com pessoas que a protegiam. Como essas pessoas estão de mudança e ela corria o risco de voltar a ficar desamparada, Canela foi resgatada para ter a chance de encontrar uma família de verdade. Agora, ela está segura e pronta para um novo começo, cercado de amor e cuidado.",

    cuidados:
        "Vacinada • Vermifugada • Castrada • Porte médio"
},


{
    nome: "Nutella",
    especie: "cachorro",
    idade: "3 anos",
    foto: "assets/animais/nutella.jpg",

    historia:
        "Nutella foi resgatada com cerca de 6 meses após ser adotada apenas para brincar com uma criança enquanto era filhote. Quando cresceu, foi deixada do lado de fora da casa, sem água e comida, passando frio e medo. Chegou a procurar alimento na rua e ainda entrou no cio antes de ser resgatada. Hoje é uma cachorrinha forte e carinhosa.",

    cuidados:
        "Castrada • Vacinada • Vermifugada • Porte médio"
},


/* =====================================================
   NINHADA DEUSES
   ===================================================== */


{
    nome: "Kairos",
    especie: "cachorro",
    idade: "5 meses",
    ninhada: "Deuses",
    foto: "assets/animais/kairos.jpg",

    historia:
        "Os filhotes da Ninhada Deuses foram resgatados em um terreno abandonado no bairro Jardim Brasília. Agora estão seguros, recebendo os cuidados necessários e esperando por famílias que possam oferecer muito amor, carinho e um lar para sempre.",

    cuidados:
        "Vacinados • Castrados • Vermifugados • Porte pequeno/médio"
},


{
    nome: "Chronos",
    especie: "cachorro",
    idade: "5 meses",
    ninhada: "Deuses",
    foto: "assets/animais/chronos.jpg",

    historia:
        "Os filhotes da Ninhada Deuses foram resgatados em um terreno abandonado no bairro Jardim Brasília. Agora estão seguros, recebendo os cuidados necessários e esperando por famílias que possam oferecer muito amor, carinho e um lar para sempre.",

    cuidados:
        "Vacinados • Castrados • Vermifugados • Porte pequeno/médio"
},


{
    nome: "Aion",
    especie: "cachorro",
    idade: "5 meses",
    ninhada: "Deuses",
    foto: "assets/animais/aion.jpg",

    historia:
        "Os filhotes da Ninhada Deuses foram resgatados em um terreno abandonado no bairro Jardim Brasília. Agora estão seguros, recebendo os cuidados necessários e esperando por famílias que possam oferecer muito amor, carinho e um lar para sempre.",

    cuidados:
        "Vacinados • Castrados • Vermifugados • Porte pequeno/médio"
},


{
    nome: "Pataca",
    especie: "cachorro",
    idade: "1 ano",
    foto: "assets/animais/pataca.jpg",

    historia:
        "Pataca foi resgatado após ser encontrado abandonado em Francisco Morato. Agora está seguro e espera encontrar uma família que lhe ofereça muito amor, carinho e um lar para sempre.",

    cuidados:
        "Castrado • Vacinado • Vermifugado • Porte pequeno"
},


{
    nome: "Rascal",
    especie: "cachorro",
    idade: "9 meses",
    foto: "assets/animais/rascal.jpg",

    historia:
        "Rascal foi resgatado entre os carros, na Avenida Celso Garcia, em uma situação de muito risco e quase sendo atropelado. Agora está seguro e espera encontrar uma família que lhe ofereça amor, carinho e um lar para sempre.",

    cuidados:
        "Castrado • Vacinado • Vermifugado • Porte pequeno/médio"
},


{
    nome: "Maia",
    especie: "cachorro",
    idade: "1 ano",
    foto: "assets/animais/maia.jpg",

    historia:
        "Maia foi resgatada de uma situação de maus-tratos, onde apanhava e muitas vezes ficava sem comida. Foi resgatada no dia 16 de setembro e agora está segura. Ela é muito carinhosa, ama crianças, se dá bem com cães e gatos e adora ficar pertinho de quem ama. É um pouco medrosa e precisa de tempo para ganhar confiança, mas depois se torna uma verdadeira companheira. Depois de tanto sofrimento, Maia está pronta para conhecer o amor de uma família e ser muito feliz.",

    cuidados:
        "Vacinada • Vermifugada • Castrada • Porte pequeno"
},


{
    nome: "Liz",
    especie: "cachorro",
    idade: "3 meses",
    foto: "assets/animais/liz.jpg",

    historia:
        "Liz foi resgatada após ser abandonada em São Mateus. Agora está segura e esperando a chance de encontrar uma família que lhe ofereça muito amor, carinho e um lar para sempre.",

    cuidados:
        "Vacinada • Vermifugada • Porte médio"
},


/* =====================================================
   NOVOS ANIMAIS — PORTFÓLIO CERET
   ===================================================== */


/* -----------------------------------------------------
   FAMILY MORGAN
   ----------------------------------------------------- */


{
    nome: "Dexter",
    especie: "cachorro",
    idade: "1 ano",
    ninhada: "Family Morgan",
    foto: "assets/animais/dexter.jpg",

    historia:
        "Sete bebês foram abandonados dentro de uma caixa na rua. Uma pessoa os encontrou e colocou todos dentro de uma casa vazia, onde ficaram confinados por cerca de um ano, recebendo cuidados apenas de vez em quando e sem alimentação e limpeza adequadas. Até que, finalmente, a ajuda chegou. Hoje, três deles ainda estão esperando pela chance de encontrar uma família que ofereça o amor, cuidado e segurança que nunca tiveram.",

    cuidados:
        "Vacinado • Castrado • Vermifugado • Porte médio"
},


{
    nome: "Killer",
    especie: "cachorro",
    idade: "1 ano",
    ninhada: "Family Morgan",
    foto: "assets/animais/killer.jpg",

    historia:
        "Sete bebês foram abandonados dentro de uma caixa na rua. Uma pessoa os encontrou e colocou todos dentro de uma casa vazia, onde ficaram confinados por cerca de um ano, recebendo cuidados apenas de vez em quando e sem alimentação e limpeza adequadas. Até que, finalmente, a ajuda chegou. Hoje, três deles ainda estão esperando pela chance de encontrar uma família que ofereça o amor, cuidado e segurança que nunca tiveram.",

    cuidados:
        "Vacinado • Castrado • Vermifugado • Porte médio"
},


{
    nome: "Cooper",
    especie: "cachorro",
    idade: "1 ano",
    ninhada: "Family Morgan",
    foto: "assets/animais/cooper.jpg",

    historia:
        "Sete bebês foram abandonados dentro de uma caixa na rua. Uma pessoa os encontrou e colocou todos dentro de uma casa vazia, onde ficaram confinados por cerca de um ano, recebendo cuidados apenas de vez em quando e sem alimentação e limpeza adequadas. Até que, finalmente, a ajuda chegou. Hoje, três deles ainda estão esperando pela chance de encontrar uma família que ofereça o amor, cuidado e segurança que nunca tiveram.",

    cuidados:
        "Vacinado • Castrado • Vermifugado • Porte médio"
},


/* -----------------------------------------------------
   LAIKA
   ----------------------------------------------------- */


{
    nome: "Laika",
    especie: "cachorro",
    idade: "1 ano e meio",
    foto: "assets/animais/laika.jpg",

    historia:
        "Laika é uma cachorrinha amorosa, inteligente, brincalhona e cheia de energia. Ama brincar e passear. Já teve uma tutora, mas foi deixada com a família, que não quis cuidar dela e deixava o portão aberto para que ela sumisse. Hoje está segura no abrigo e espera uma família para chamar de sua.",

    cuidados:
        "Castrada • Vacinada • Vermifugada • Porte médio"
},


/* -----------------------------------------------------
   ÍSIS
   ----------------------------------------------------- */


{
    nome: "Ísis",
    especie: "cachorro",
    idade: "2 anos",
    foto: "assets/animais/isis.jpg",

    historia:
        "Ísis foi resgatada em frente a uma casa enquanto estava no cio e sendo machucada por vários cães. Apesar disso, se mostrou muito dócil, carinhosa e brincalhona. Agora espera uma família cheia de amor.",

    cuidados:
        "Castrada • Vacinada • Vermifugada • Porte médio/grande"
},


/* -----------------------------------------------------
   BRUNO
   ----------------------------------------------------- */


{
    nome: "Bruno",
    especie: "cachorro",
    idade: "3/4 anos",
    foto: "assets/animais/bruno.jpg",

    historia:
        "Bruno foi resgatado no extremo leste, no Jardim Robru, com ferimentos na orelha e no pescoço, possivelmente vítima de espancamento. Estava com miíase e muito debilitado, precisando ficar internado para tratamento até receber alta e seguir para um lar temporário. Apesar de tudo o que sofreu, Bruno não perdeu sua doçura. É um cão muito alegre, extremamente dócil e amoroso. Se dá bem com pessoas e outros animais, anda de carro sem enjoar, quase não late e não costuma destruir objetos. Bruno é o tipo de companheiro que só quer uma chance de viver cercado de amor.",

    cuidados:
        "Castrado • Vacinado • Vermifugado • Porte médio"
},


/* -----------------------------------------------------
   KELLY
   ----------------------------------------------------- */


{
    nome: "Kelly",
    especie: "cachorro",
    idade: "1 ano",
    foto: "assets/animais/kelly.jpg",

    historia:
        "Kelly é extremamente carinhosa, brincalhona e tem um jeitinho de criança! Ama crianças, adora brincar com outros animais e é uma companheira incrível. Ela foi abandonada pela antiga tutora, que alegou não ter condições de alimentá-la porque Kelly comia demais. Ficou dias chorando e com fome na porta de sua antiga casa, até ser resgatada. Hoje, está pronta para deixar esse passado para trás e fazer uma família muito feliz.",

    cuidados:
        "Castrada • Vacinada • Porte médio"
},


/* -----------------------------------------------------
   SCOOBY
   ----------------------------------------------------- */


{
    nome: "Scooby",
    especie: "cachorro",
    idade: "1/2 anos",
    foto: "assets/animais/scooby.jpg",

    historia:
        "Scooby foi resgatado no dia 31 de dezembro de 2025, em Itaquera, depois de se assustar com os fogos de artifício e atravessar a rua. Ele acabou sendo atingido por um carro, mas, felizmente, não teve nenhuma fratura, apenas uma luxação. Hoje, Scooby é um cachorro muito dócil e obediente. Se dá bem com cães e crianças, mas não gosta de gatos. Depois de tudo que enfrentou, ele espera encontrar uma família que lhe ofereça muito amor e um lar seguro para sempre.",

    cuidados:
        "Vacinado • Vermifugado • Castrado • Porte médio"
},


/* -----------------------------------------------------
   DANTE
   ----------------------------------------------------- */


{
    nome: "Dante",
    especie: "cachorro",
    idade: "1/2 anos",
    foto: "assets/animais/dante.jpg",

    historia:
        "Dante foi abandonado junto com seus irmãos na rua. Uma pessoa os recolheu e colocou todos dentro de uma casa vazia, onde passaram fome, sede e viveram em condições muito precárias, até que finalmente a ajuda chegou. Hoje, Dante é um cachorro muito bonzinho e tranquilo. Se dá bem com todos os cães e, apesar de nunca ter convivido com gatos, acreditamos que possa se adaptar bem. Agora, ele espera encontrar uma família que lhe ofereça todo o amor e cuidado que merece.",

    cuidados:
        "Vacinado • Vermifugado • Castrado • Porte pequeno"
},


/* =====================================================
   GATOS
   ===================================================== */


{
    nome: "Bibi",
    especie: "gato",
    idade: "2 anos",
    foto: "assets/animais/bibi.jpg",

    historia:
        "Bibi ficou três dias em trabalho de parto. Quando perceberam que os filhotes não conseguiam nascer, havia um bebê preso, ela foi resgatada às pressas. Infelizmente, nenhum dos filhotes sobreviveu. Bibi precisou passar por procedimento cirúrgico e ficou internada para se recuperar. Agora, ela merece um recomeço com cuidado, amor e a segurança de um lar que a proteja para sempre.",

    cuidados:
        "Castrada • Vermifugada • Vacinada • Fiv e Felv negativo",

    observacoes:
        "Apenas para lares 100% telados e sem rota de fuga."
},


{
    nome: "Levi",
    especie: "gato",
    idade: "04.09.25",
    ninhada: "Ninhada L",
    foto: "assets/animais/levi.jpg",

    historia:
        "A mãezinha deu cria na Zona Leste e foi resgatada junto com seus filhotes. Agora, todos estão seguros, recebendo cuidados e prontos para encontrar lares cheios de amor e responsabilidade.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Fiv e Felv negativo",

    observacoes:
        "Apenas para lares 100% telados e sem rota de fuga."
},


{
    nome: "Lorena",
    especie: "gato",
    idade: "04.09.25",
    ninhada: "Ninhada L",
    foto: "assets/animais/lorena.jpg",

    historia:
        "A mãezinha deu cria na Zona Leste e foi resgatada junto com seus filhotes. Agora, todos estão seguros, recebendo cuidados e prontos para encontrar lares cheios de amor e responsabilidade.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Fiv e Felv negativo",

    observacoes:
        "Apenas para lares 100% telados e sem rota de fuga."
},


{
    nome: "Leona",
    especie: "gato",
    idade: "04.09.25",
    ninhada: "Ninhada L",
    foto: "assets/animais/leona.jpg",

    historia:
        "A mãezinha deu cria na Zona Leste e foi resgatada junto com seus filhotes. Agora, todos estão seguros, recebendo cuidados e prontos para encontrar lares cheios de amor e responsabilidade.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Fiv e Felv negativo",

    observacoes:
        "Apenas para lares 100% telados e sem rota de fuga."
},


{
    nome: "Leandro",
    especie: "gato",
    idade: "04.09.25",
    ninhada: "Ninhada L",
    foto: "assets/animais/leandro.jpg",

    historia:
        "A mãezinha deu cria na Zona Leste e foi resgatada junto com seus filhotes. Agora, todos estão seguros, recebendo cuidados e prontos para encontrar lares cheios de amor e responsabilidade.",

    cuidados:
        "Vermifugados • Vacinados • Castrados • Fiv e Felv negativo",

    observacoes:
        "Apenas para lares 100% telados e sem rota de fuga."
},


{
    nome: "Torrada",
    especie: "gato",
    idade: "2 meses e meio",
    ninhada: "Torrada e Manteiga",
    foto: "assets/animais/torrada.jpg",

    historia:
        "Torrada e Manteiga foram abandonadas em São Mateus e agora estão seguras, esperando a chance de encontrar uma família que possa oferecer muito amor, carinho e um lar para sempre.",

    cuidados:
        "Vacinadas • Vermifugadas",

    observacoes:
        "Apenas para lares 100% telados e sem rota de fuga."
},


{
    nome: "Manteiga",
    especie: "gato",
    idade: "2 meses e meio",
    ninhada: "Torrada e Manteiga",
    foto: "assets/animais/manteiga.jpg",

    historia:
        "Torrada e Manteiga foram abandonadas em São Mateus e agora estão seguras, esperando a chance de encontrar uma família que possa oferecer muito amor, carinho e um lar para sempre.",

    cuidados:
        "Vacinadas • Vermifugadas",

    observacoes:
        "Apenas para lares 100% telados e sem rota de fuga."
}

];


/* =====================================================
   ELEMENTOS DO SITE
   ===================================================== */

const dogGrid =
    document.getElementById("dogGrid");

const catGrid =
    document.getElementById("catGrid");

const searchGrid =
    document.getElementById("searchGrid");

const searchInput =
    document.getElementById("searchInput");

const clearSearch =
    document.getElementById("clearSearch");

const searchResults =
    document.getElementById("resultados");

const searchMessage =
    document.getElementById("searchMessage");

const dogCount =
    document.getElementById("dogCount");

const catCount =
    document.getElementById("catCount");

const modal =
    document.getElementById("animalModal");

const modalClose =
    document.getElementById("modalClose");

const modalBackdrop =
    document.getElementById("modalBackdrop");


/* =====================================================
   NORMALIZAR TEXTO
   ===================================================== */

function normalizar(texto) {

    return String(texto || "")
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .toLowerCase();

}


/* =====================================================
   ESCAPAR HTML
   ===================================================== */

/*
   Evita que informações cadastradas nos dados
   sejam interpretadas como código HTML.
*/

function escaparHTML(texto) {

    return String(texto || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =====================================================
   PLACEHOLDER
   ===================================================== */

function criarPlaceholderFoto(
    nome,
    tipo = "card"
) {

    const classe =
        tipo === "modal"
            ? "modal-photo-placeholder"
            : "foto-placeholder";


    return `

        <div class="${classe}">

            <span class="placeholder-paw">
                🐾
            </span>

            <strong>
                ${escaparHTML(nome)}
            </strong>

            <small>
                Foto em breve
            </small>

        </div>

    `;

}


/* =====================================================
   CRIAR CARD
   ===================================================== */

function criarCard(animal) {

    const foto =
        caminhoFoto(animal);


    const card =
        document.createElement("article");


    card.className =
        "animal-card";


    const especieTexto =
        animal.especie === "gato"
            ? "Gato"
            : "Cachorro";


    const fotoHTML =
        foto

            ? `

                <img
                    src="${foto}"
                    alt="Foto de ${escaparHTML(animal.nome)}"
                    loading="lazy"
                >

                ${criarPlaceholderFoto(
                    animal.nome
                )}

              `

            : criarPlaceholderFoto(
                animal.nome
            );


    card.innerHTML = `

        <div class="card-photo">

            ${fotoHTML}

        </div>


        <div class="card-body">

            <div class="card-top">

                <span class="tag">

                    ${especieTexto}

                </span>

            </div>


            <h3>

                ${escaparHTML(animal.nome)}

            </h3>


            ${
                animal.idade

                    ? `

                        <p class="age">

                            ${escaparHTML(animal.idade)}

                        </p>

                      `

                    : ""
            }


            <p class="story-preview">

                ${escaparHTML(
                    animal.historia || ""
                )}

            </p>


            <div class="read-more">

                Conhecer história →

            </div>

        </div>

    `;


    const imagem =
        card.querySelector(
            ".card-photo img"
        );


    const placeholder =
        card.querySelector(
            ".foto-placeholder"
        );


    if (imagem) {

        if (placeholder) {

            placeholder.style.display =
                "none";

        }


        imagem.addEventListener(
            "error",
            function() {

                imagem.style.display =
                    "none";

                if (placeholder) {

                    placeholder.style.display =
                        "flex";

                }

            }
        );

    }


    card.addEventListener(
        "click",
        function() {

            abrirModal(animal);

        }
    );


    return card;

}


/* =====================================================
   RENDERIZAR
   ===================================================== */

function renderizarAnimais(
    lista,
    elemento
) {

    if (!elemento) {
        return;
    }


    elemento.innerHTML = "";


    if (lista.length === 0) {

        elemento.innerHTML = `

            <div class="empty">

                Nenhum animal encontrado.

            </div>

        `;

        return;

    }


    lista.forEach(
        function(animal) {

            elemento.appendChild(
                criarCard(animal)
            );

        }
    );

}


/* =====================================================
   SEPARAR CACHORROS E GATOS
   ===================================================== */

const cachorros =
    animais.filter(
        animal =>
            animal.especie === "cachorro"
    );


const gatos =
    animais.filter(
        animal =>
            animal.especie === "gato"
    );


/* =====================================================
   EXIBIR LISTAS
   ===================================================== */

renderizarAnimais(
    cachorros,
    dogGrid
);


renderizarAnimais(
    gatos,
    catGrid
);


/* =====================================================
   CONTADORES
   ===================================================== */

if (dogCount) {

    dogCount.textContent =
        `${cachorros.length} animais`;

}


if (catCount) {

    catCount.textContent =
        `${gatos.length} animais`;

}


/* =====================================================
   BUSCA
   ===================================================== */

function realizarBusca() {

    if (!searchInput || !searchResults) {
        return;
    }


    const termo =
        normalizar(
            searchInput.value.trim()
        );


    if (!termo) {

        searchResults.classList.add(
            "hidden"
        );

        if (searchMessage) {

            searchMessage.textContent =
                "";

        }

        return;

    }


    const resultados =
        animais.filter(
            function(animal) {

                const texto = [

                    animal.nome,

                    animal.especie,

                    animal.ninhada,

                    animal.idade,

                    animal.historia,

                    animal.cuidados,

                    animal.observacoes

                ]
                .filter(Boolean)
                .join(" ");


                return normalizar(
                    texto
                ).includes(
                    termo
                );

            }
        );


    searchResults.classList.remove(
        "hidden"
    );


    renderizarAnimais(
        resultados,
        searchGrid
    );


    if (searchMessage) {

        searchMessage.textContent =

            resultados.length === 1

                ? "1 animal encontrado."

                : `${resultados.length} animais encontrados.`;

    }

}


/* =====================================================
   BUSCAR ENQUANTO DIGITA
   ===================================================== */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        realizarBusca
    );

}


/* =====================================================
   LIMPAR BUSCA
   ===================================================== */

if (clearSearch) {

    clearSearch.addEventListener(
        "click",
        function() {

            if (searchInput) {

                searchInput.value = "";

            }


            if (searchResults) {

                searchResults.classList.add(
                    "hidden"
                );

            }


            if (searchMessage) {

                searchMessage.textContent = "";

            }


            if (searchInput) {

                searchInput.focus();

            }

        }
    );

}


/* =====================================================
   ABRIR MODAL
   ===================================================== */

function abrirModal(animal) {

    if (!modal) {
        return;
    }


    const modalPhoto =
        document.getElementById(
            "modalPhoto"
        );


    const modalSpecies =
        document.getElementById(
            "modalSpecies"
        );


    const modalName =
        document.getElementById(
            "modalName"
        );


    const modalAge =
        document.getElementById(
            "modalAge"
        );


    const modalLitter =
        document.getElementById(
            "modalLitter"
        );


    const modalStory =
        document.getElementById(
            "modalStory"
        );


    const modalCare =
        document.getElementById(
            "modalCare"
        );


    const modalObs =
        document.getElementById(
            "modalObs"
        );


    const foto =
        caminhoFoto(animal);


    if (modalSpecies) {

        modalSpecies.textContent =
            animal.especie === "gato"
                ? "Gato"
                : "Cachorro";

    }


    if (modalName) {

        modalName.textContent =
            animal.nome;

    }


    if (modalAge) {

        modalAge.textContent =
            animal.idade
                ? `Idade: ${animal.idade}`
                : "";

    }


    if (modalStory) {

        modalStory.textContent =
            animal.historia ||
            "História não cadastrada.";

    }


    /* =================================================
       FOTO DO MODAL
       ================================================= */

    if (modalPhoto) {

        if (foto) {

            modalPhoto.innerHTML = `

                <img
                    src="${foto}"
                    alt="Foto de ${escaparHTML(animal.nome)}"
                >

                ${criarPlaceholderFoto(
                    animal.nome,
                    "modal"
                )}

            `;


            const modalImagem =
                modalPhoto.querySelector(
                    "img"
                );


            const modalPlaceholder =
                modalPhoto.querySelector(
                    ".modal-photo-placeholder"
                );


            if (modalPlaceholder) {

                modalPlaceholder.style.display =
                    "none";

            }


            if (modalImagem) {

                modalImagem.addEventListener(
                    "error",
                    function() {

                        modalImagem.style.display =
                            "none";


                        if (modalPlaceholder) {

                            modalPlaceholder.style.display =
                                "flex";

                        }

                    }
                );

            }

        } else {

            modalPhoto.innerHTML =
                criarPlaceholderFoto(
                    animal.nome,
                    "modal"
                );

        }

    }


    /* =================================================
       NINHADA
       ================================================= */

    if (modalLitter) {

        if (animal.ninhada) {

            modalLitter.innerHTML = `

                <strong>
                    Ninhada:
                </strong>

                ${escaparHTML(
                    animal.ninhada
                )}

            `;

        } else {

            modalLitter.innerHTML =
                "";

        }

    }


    /* =================================================
       CUIDADOS
       ================================================= */

    if (modalCare) {

        modalCare.textContent =
            animal.cuidados ||
            "Informações não cadastradas.";

    }


    /* =================================================
       OBSERVAÇÕES
       ================================================= */

    if (modalObs) {

        if (animal.observacoes) {

            modalObs.innerHTML = `

                <strong>
                    Observação
                </strong>

                <span>
                    ${escaparHTML(
                        animal.observacoes
                    )}
                </span>

            `;

        } else {

            modalObs.innerHTML =
                "";

        }

    }


    /* =================================================
       ABRIR
       ================================================= */

    modal.classList.add(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );

}


/* =====================================================
   FECHAR MODAL
   ===================================================== */

function fecharModal() {

    if (!modal) {
        return;
    }


    modal.classList.remove(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


/* =====================================================
   BOTÃO FECHAR
   ===================================================== */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        fecharModal
    );

}


/* =====================================================
   CLICAR FORA DO MODAL
   ===================================================== */

if (modalBackdrop) {

    modalBackdrop.addEventListener(
        "click",
        fecharModal
    );

}


/* =====================================================
   TECLA ESC
   ===================================================== */

document.addEventListener(
    "keydown",
    function(evento) {

        if (
            evento.key === "Escape"
        ) {

            fecharModal();

        }

    }
);


/* =====================================================
   VERIFICAÇÃO DAS FOTOS
   ===================================================== */

/*
   Esta função não altera o site.

   Ela apenas permite verificar no console do navegador
   quais fotos estão sendo carregadas e quais não foram
   encontradas.

   Para usar:

   1. Abra o site.
   2. Pressione F12.
   3. Vá em "Console".
   4. Digite:

      verificarFotos()

*/

function verificarFotos() {

    console.log(
        "======================================"
    );

    console.log(
        "VERIFICAÇÃO DAS FOTOS"
    );

    console.log(
        "======================================"
    );


    animais.forEach(
        function(animal) {

            console.log(
                `${animal.nome} → ${animal.foto}`
            );

        }
    );


    console.log(
        "======================================"
    );

    console.log(
        `Total de animais: ${animais.length}`
    );

    console.log(
        `Cachorros: ${cachorros.length}`
    );

    console.log(
        `Gatos: ${gatos.length}`
    );

    console.log(
        "======================================"
    );

}