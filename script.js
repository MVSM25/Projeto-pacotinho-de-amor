/* =====================================================
   PACOTINHOS DE AMOR
   JAVASCRIPT
   VERSÃO 6

   ATUALIZAÇÕES:
   - Foto localizada automaticamente pelo nome do animal
   - Padronização automática dos nomes dos arquivos
   - Cache-busting das fotos
   - Novos animais do portfólio CERET
   - Histórias dos animais
   - Correção dos contadores
   - Correção do modal
   - Tratamento de erro das imagens
   - Busca por nome e informações
   - Cada animal possui sua própria foto

   PASTA DAS FOTOS:

   assets/animais/

   Exemplos:

   Julinho → assets/animais/julinho.jpg
   Luna → assets/animais/luna.jpg
   Ana Castela → assets/animais/ana-castela.jpg
   Ísis → assets/animais/isis.jpg
   Lay’s → assets/animais/lays.jpg
   ===================================================== */


/* =====================================================
   CONFIGURAÇÃO DAS FOTOS
   ===================================================== */

const PASTA_FOTOS = "assets/animais/";
const EXTENSAO_FOTOS = ".jpg";

/*
   Sempre que trocar uma foto no GitHub,
   altere este número/data.

   Isso força o navegador a carregar
   a nova versão da imagem.
*/

const VERSAO_FOTOS = "2026-10-08-v6";


/* =====================================================
   TRANSFORMAR NOME DO ANIMAL EM NOME DO ARQUIVO
   ===================================================== */

function nomeArquivoFoto(nome) {

    return String(nome || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()

        /*
           Remove apóstrofos e caracteres semelhantes.
        */
        .replace(/[’'`´]/g, "")

        /*
           Substitui espaços e outros caracteres
           por hífen.
        */
        .replace(/[^a-z0-9]+/g, "-")

        /*
           Remove hífens do início/fim.
        */
        .replace(/^-+|-+$/g, "")

        + EXTENSAO_FOTOS;

}


/* =====================================================
   LOCALIZAR FOTO
   ===================================================== */

/*
   A foto agora é determinada pelo NOME do animal.

   Isso significa que:

   nome: "Julinho"

   sempre procurará:

   assets/animais/julinho.jpg

   Mesmo que o campo "foto" esteja errado.

   O campo "foto" continua nos dados apenas para
   manter compatibilidade com os cadastros existentes.
*/

function caminhoFoto(animal) {

    if (!animal || !animal.nome) {
        return "";
    }

    const arquivo =
        nomeArquivoFoto(animal.nome);

    return `${PASTA_FOTOS}${arquivo}?v=${VERSAO_FOTOS}`;

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
        "Os filhotes da Ninhada He-Man e She-Ra nasceram de uma mãezinha que vivia na periferia e não havia sido castrada.