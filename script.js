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
