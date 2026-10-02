const animais = [
  {
    "nome": "Julinho",
    "especie": "cachorro",
    "idade": "1 ano",
    "historia": "Julinho foi encontrado no estacionamento de uma farmácia na Chácara Santo Antônio, sozinho e precisando de ajuda.",
    "cuidados": "Vacinado • Vermifugado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Luna",
    "especie": "cachorro",
    "idade": "24.08.22",
    "historia": "Luna foi resgatada ainda na barriga da mãe, em 2022. Sua mãe estava grávida e sendo agredida nas ruas, mas, infelizmente, apenas Luna sobreviveu. Hoje, ela é uma cachorra muito carinhosa e protetora com humanos. Ama passear e receber carinho na barriga! É de porte grande, daquelas que parecem um verdadeiro urso de pelúcia. Por não se dar bem com gatos e ter dificuldades com alguns cães, Luna seria mais feliz como filha única, recebendo todo o amor e atenção de sua família. Agora, ela espera encontrar um lar onde possa ser amada e cuidada para sempre.",
    "cuidados": "Castrada • Vacinada • Vermifugada • Porte grande",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Ana Castela",
    "especie": "cachorro",
    "idade": "4 anos",
    "historia": "Ana Castela foi abandonada em Francisco Morato e acabou precisando recomeçar sua história. Hoje está segura e aguarda uma família responsável que possa oferecer todo o amor, carinho e proteção que ela merece.",
    "cuidados": "Castrada • Vacinada • Vermifugada • Porte médio",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Joe",
    "especie": "cachorro",
    "idade": "3/4 anos",
    "historia": "Joe foi resgatado junto com seu filho, Tigrão, em maio de 2025. Os dois viviam em um pequeno cubículo, tentando se proteger da chuva e do sol, em um espaço muito limitado no fundo de um quintal. Em agosto, Tigrão foi adotado e, cerca de um mês depois, Joe também ganhou uma família junto com seu filho. Infelizmente, quase um ano após a adoção, ele foi devolvido. Agora Joe aguarda novamente a chance de encontrar um lar definitivo, onde seja amado para sempre.",
    "cuidados": "Castrado • Vacinado • Vermifugado • Porte grande",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Rebeca",
    "especie": "cachorro",
    "idade": "1 ano e meio",
    "historia": "Rebeca foi resgatada no final de março de 2026, em Guarulhos, extremamente debilitada e muito magra. Quando foi resgatada, pesava apenas 7kg. Com cuidados, alimentação e muito carinho, se recuperou muito bem e hoje já está com 12kg. Agora está saudável e aguarda uma família para chamar de sua.",
    "cuidados": "Vermifugada • Vacinada • Castrada • Porte peq./médio",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Hércules",
    "especie": "cachorro",
    "idade": "11 anos",
    "historia": "Hércules é um lindo mix de Border Collie que foi resgatado em maio de 2026 muito debilitado, magro e sem forças. Após receber todos os cuidados necessários, se recuperou completamente e hoje está saudável e cheio de vida. Dócil, muito carinhoso e inteligente, adora passear, aprende comandos com facilidade e ama receber atenção. Agora, Hércules aguarda uma família que lhe ofereça o amor e a segurança que sempre mereceu.",
    "cuidados": "Vacinado • Vermifugado • Porte médio/grande",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Nick",
    "especie": "cachorro",
    "idade": "7/8 anos",
    "historia": "Nick é um cãozinho dócil e medroso, que se dá bem com cães e gatos. Ele entrou na casa de uma protetora quando encontrou o portão aberto, procurando abrigo. Estava muito judiado, com medo e com muita fome. Hoje está em lar temporário, mas como vive com muitos cães, acaba ficando com medo e só consegue comer quando é separado. Nick espera uma família que lhe dê segurança, paciência e muito amor.",
    "cuidados": "Castrado • Vacinado • Vermifugado • Porte peq./médio",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Athena",
    "especie": "cachorro",
    "idade": "2 anos",
    "historia": "Athena foi abandonada pela própria tutora e, ao ser levada para castração, descobrimos que ela já era castrada e possuía microchip. Muito amorosa e dócil, Athena se dá super bem com outros animais e só espera encontrar uma família que realmente a ame e cuide dela para sempre.",
    "cuidados": "Castrada • Vacinada • Porte médio",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Shakira",
    "especie": "cachorro",
    "idade": "3 anos",
    "historia": "Shakira foi encontrada prenha nas ruas, já prestes a dar à luz. Felizmente, seus filhotes foram todos adotados, mas ninguém quis dar uma chance para a mamãe. Ela é super dócil, amorosa, tranquila e se dá muito bem com outros cães. Agora, Shakira espera que finalmente alguém enxergue todo o amor que ela tem para oferecer e escolha ser sua família.",
    "cuidados": "Castrada • Vacinada • Porte médio",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Aurora",
    "especie": "cachorro",
    "idade": "9 meses",
    "historia": "Aurora tinha uma família, mas foi deixada para trás quando eles se mudaram. Ela permaneceu por um tempo de favor em um quintal, até que foi levada para ser castrada. Infelizmente, quando voltou, não aceitaram mais que ela permanecesse no local. Desde então, Aurora aguarda uma nova chance. É uma cadelinha que merece encontrar uma família de verdade, que a acolha com amor, segurança e nunca mais a abandone.",
    "cuidados": "Castrada • Vacinada • Vermifugada • Porte médio",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Zeus",
    "especie": "cachorro",
    "idade": "3 anos",
    "historia": "Zeus viveu meses em uma casa abandonada no Embu, após a morte de sua tutora. Ficava preso em um quintal cheio de lixo e, infelizmente, sofria agressões. Quando foi resgatado, estava muito magro e precisou de cuidados para recuperar suas forças. Hoje, Zeus é um cão alegre, carinhoso e cheio de amor para dar. Adora ficar pertinho, dar lambeijos e se dá muito bem com outros cães, gatos e crianças. No abrigo, inclusive, cuidava dos filhotes que chegavam. Também adora passear e é tranquilo na guia. Zeus é um verdadeiro sonho de cachorro caramelo e merece finalmente ter uma família para amar e ser amado.",
    "cuidados": "Castrado • Vacinado • Vermifugado • Porte médio",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Belo",
    "especie": "cachorro",
    "idade": "2/3 anos",
    "historia": "Belo foi resgatado no Grajaú após vagar por dias sozinho, pedindo atenção e comida. Já passou por exames (parvovirose, cinomose, giárdia e doença do carrapato), todos com resultado negativo. É extremamente tranquilo, amoroso e muito “zen”. Convive bem com outros animais e não demonstrou incômodo no lar temporário.",
    "cuidados": "Vacinado • Vermifugado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Olívia",
    "especie": "cachorro",
    "idade": "2 anos",
    "historia": "Olívia foi encontrada nas ruas junto com seus filhotes, Oscar e Oceane. Desde então, os três estão seguros e aguardam uma família para chamar de sua. Essa família tão especial merece uma chance de conhecer o amor e a segurança de um lar definitivo.",
    "cuidados": "Castrada • Vacinada • Vermifugada • Porte médio",
    "observacoes": "Família com Oscar e Oceane",
    "ninhada": "Olívia e filhotes",
    "foto": ""
  },
  {
    "nome": "Oscar",
    "especie": "cachorro",
    "idade": "2 meses",
    "historia": "Oscar é filhote de Olívia. Tem uma sequela em uma das patinhas, provavelmente causada por algo que aconteceu quando ainda era muito pequeno e vivia nas ruas. Ele já passou por avaliação veterinária e, apesar da limitação, leva uma vida normal e feliz, brincando e aproveitando cada momento.",
    "cuidados": "Vacinado • Vermifugado • Porte médio",
    "observacoes": "Filho de Olívia; irmão de Oceane",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Oceane",
    "especie": "cachorro",
    "idade": "3 meses",
    "historia": "Oceane é filhote de Olívia. Foi encontrada nas ruas junto com a mãe e o irmão Oscar. Desde então, está segura e aguarda uma família para chamar de sua.",
    "cuidados": "Vacinada • Vermifugada • Porte médio",
    "observacoes": "Filha de Olívia; irmã de Oscar",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Pitucha",
    "especie": "cachorro",
    "idade": "9 anos",
    "historia": "Pitucha foi resgatada após ser abandonada no Tatuapé. Agora está segura e esperando a oportunidade de encontrar uma família que lhe ofereça muito amor, carinho e um lar para sempre.",
    "cuidados": "Vacinada • Castrada • Vermifugada • Porte médio",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Aninha",
    "especie": "cachorro",
    "idade": "1 ano",
    "historia": "Aninha foi resgatada no Itaim Paulista após dar à luz em um córrego de esgoto. Infelizmente, seus filhotes foram morrendo ainda no local, mas ela sobreviveu e agora está pronta para recomeçar. No primeiro contato, pode ser um pouco arisca, mas quando percebe que está segura, vira um verdadeiro grude! É muito carinhosa, brincalhona, se dá bem com crianças e outros animais. Aninha só precisa de uma família que lhe mostre que as ruas ficaram para trás e que agora ela pode ser muito amada.",
    "cuidados": "Castrada • Vacinada • Porte pequeno",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Tatu",
    "especie": "cachorro",
    "idade": "6 meses",
    "historia": "Tatu foi resgatado extremamente debilitado, com a pele toda tomada pela sarna. Recebeu o tratamento necessário, se recuperou e agora está liberado para adoção! Depois de tudo que enfrentou, Tatu só espera encontrar uma família que lhe ofereça todo o amor e cuidado que merece.",
    "cuidados": "Castrado • Vacinado • Vermifugado • Porte pequeno",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Pituxo",
    "especie": "cachorro",
    "idade": "1 ano",
    "historia": "Pituxo foi resgatado após ser abandonado em Francisco Morato. Agora está seguro e esperando a oportunidade de encontrar uma família que lhe ofereça muito amor, carinho e um lar para sempre.",
    "cuidados": "Castrado • Vacinado • Vermifugado • Porte pequeno",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Daniel",
    "especie": "cachorro",
    "idade": "2 anos",
    "historia": "Daniel foi resgatado após ser encontrado sozinho em frente a uma farmácia. Agora está seguro e espera encontrar uma família que lhe ofereça muito amor, carinho e um lar para sempre.",
    "cuidados": "Castrado • Vacinado • Vermifugado • Porte médio",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Canela",
    "especie": "cachorro",
    "idade": "3/4 anos",
    "historia": "Canela sofreu uma facada ainda filhote e, depois de ser cuidada, passou anos vivendo na rua com pessoas que a protegiam. Como essas pessoas estão de mudança e ela corria o risco de voltar a ficar desamparada, Canela foi resgatada para ter a chance de encontrar uma família de verdade. Agora, ela está segura e pronta para um novo começo, cercado de amor e cuidado.",
    "cuidados": "Vacinada • Vermifugada • Castrada • Porte médio",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Nutella",
    "especie": "cachorro",
    "idade": "3 anos",
    "historia": "Nutella foi resgatada com cerca de 6 meses após ser adotada apenas para brincar com uma criança enquanto era filhote. Quando cresceu, foi deixada do lado de fora da casa, sem água e comida, passando frio e medo. Chegou a procurar alimento na rua e ainda entrou no cio antes de ser resgatada. Hoje é uma cachorrinha forte e carinhosa.",
    "cuidados": "Castrada • Vacinada • Vermifugada • Porte médio",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Pataca",
    "especie": "cachorro",
    "idade": "1 ano",
    "historia": "Pataca foi resgatado após ser encontrado abandonado em Francisco Morato. Agora está seguro e espera encontrar uma família que lhe ofereça muito amor, carinho e um lar para sempre.",
    "cuidados": "Castrado • Vacinado • Vermifugado • Porte pequeno",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Rascal",
    "especie": "cachorro",
    "idade": "9 meses",
    "historia": "Rascal foi resgatado entre os carros, na Avenida Celso Garcia, em uma situação de muito risco e quase sendo atropelado. Agora está seguro e espera encontrar uma família que lhe ofereça amor, carinho e um lar para sempre.",
    "cuidados": "Castrado • Vacinado • Vermifugado • Porte peq./médio",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Maia",
    "especie": "cachorro",
    "idade": "1 ano",
    "historia": "Maia foi resgatada de uma situação de maus-tratos, onde apanhava e muitas vezes ficava sem comida. Foi resgatada no dia 16 de setembro e agora está segura. Ela é muito carinhosa, ama crianças, se dá bem com cães e gatos e adora ficar pertinho de quem ama. É um pouco medrosa e precisa de tempo para ganhar confiança, mas depois se torna uma verdadeira companheira. Depois de tanto sofrimento, Maia está pronta para conhecer o amor de uma família e ser muito feliz.",
    "cuidados": "Vacinada • Vermifugada • Castrada • Porte pequeno",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Liz",
    "especie": "cachorro",
    "idade": "3 meses",
    "historia": "Liz foi resgatada após ser abandonada em São Mateus. Agora está segura e esperando a chance de encontrar uma família que lhe ofereça muito amor, carinho e um lar para sempre.",
    "cuidados": "Vacinada • Vermifugada • Porte médio",
    "observacoes": "",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Cintilante",
    "especie": "cachorro",
    "idade": "2 meses",
    "historia": "Os filhotes da Ninhada He-Man e She-Ra nasceram de uma mãezinha que vivia na periferia e não havia sido castrada. Assumimos a castração da mãe e acolhemos os filhotes para que todos tenham a oportunidade de encontrar lares responsáveis através da adoção consciente. Hoje, eles aguardam famílias cheias de amor para começarem uma nova história, com todo o cuidado e proteção que merecem.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada He-Man e She-Ra",
    "foto": ""
  },
  {
    "nome": "Teela",
    "especie": "cachorro",
    "idade": "2 meses",
    "historia": "Os filhotes da Ninhada He-Man e She-Ra nasceram de uma mãezinha que vivia na periferia e não havia sido castrada. Assumimos a castração da mãe e acolhemos os filhotes para que todos tenham a oportunidade de encontrar lares responsáveis através da adoção consciente. Hoje, eles aguardam famílias cheias de amor para começarem uma nova história, com todo o cuidado e proteção que merecem.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada He-Man e She-Ra",
    "foto": ""
  },
  {
    "nome": "He-Man",
    "especie": "cachorro",
    "idade": "2 meses",
    "historia": "Os filhotes da Ninhada He-Man e She-Ra nasceram de uma mãezinha que vivia na periferia e não havia sido castrada. Assumimos a castração da mãe e acolhemos os filhotes para que todos tenham a oportunidade de encontrar lares responsáveis através da adoção consciente. Hoje, eles aguardam famílias cheias de amor para começarem uma nova história, com todo o cuidado e proteção que merecem.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada He-Man e She-Ra",
    "foto": ""
  },
  {
    "nome": "Pacato",
    "especie": "cachorro",
    "idade": "2 meses",
    "historia": "Os filhotes da Ninhada He-Man e She-Ra nasceram de uma mãezinha que vivia na periferia e não havia sido castrada. Assumimos a castração da mãe e acolhemos os filhotes para que todos tenham a oportunidade de encontrar lares responsáveis através da adoção consciente. Hoje, eles aguardam famílias cheias de amor para começarem uma nova história, com todo o cuidado e proteção que merecem.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada He-Man e She-Ra",
    "foto": ""
  },
  {
    "nome": "Rei Randor",
    "especie": "cachorro",
    "idade": "5 meses",
    "historia": "Os filhotes da Ninhada He-Man e She-Ra nasceram de uma mãezinha que vivia na periferia e não havia sido castrada. Assumimos a castração da mãe e acolhemos os filhotes para que todos tenham a oportunidade de encontrar lares responsáveis através da adoção consciente. Hoje, eles aguardam famílias cheias de amor para começarem uma nova história, com todo o cuidado e proteção que merecem.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada He-Man e She-Ra",
    "foto": ""
  },
  {
    "nome": "Ventania",
    "especie": "cachorro",
    "idade": "2 meses",
    "historia": "Os filhotes da Ninhada He-Man e She-Ra nasceram de uma mãezinha que vivia na periferia e não havia sido castrada. Assumimos a castração da mãe e acolhemos os filhotes para que todos tenham a oportunidade de encontrar lares responsáveis através da adoção consciente. Hoje, eles aguardam famílias cheias de amor para começarem uma nova história, com todo o cuidado e proteção que merecem.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada He-Man e She-Ra",
    "foto": ""
  },
  {
    "nome": "Arqueiro",
    "especie": "cachorro",
    "idade": "2 meses",
    "historia": "Os filhotes da Ninhada He-Man e She-Ra nasceram de uma mãezinha que vivia na periferia e não havia sido castrada. Assumimos a castração da mãe e acolhemos os filhotes para que todos tenham a oportunidade de encontrar lares responsáveis através da adoção consciente. Hoje, eles aguardam famílias cheias de amor para começarem uma nova história, com todo o cuidado e proteção que merecem.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada He-Man e She-Ra",
    "foto": ""
  },
  {
    "nome": "Corujito",
    "especie": "cachorro",
    "idade": "2 meses",
    "historia": "Os filhotes da Ninhada He-Man e She-Ra nasceram de uma mãezinha que vivia na periferia e não havia sido castrada. Assumimos a castração da mãe e acolhemos os filhotes para que todos tenham a oportunidade de encontrar lares responsáveis através da adoção consciente. Hoje, eles aguardam famílias cheias de amor para começarem uma nova história, com todo o cuidado e proteção que merecem.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada He-Man e She-Ra",
    "foto": ""
  },
  {
    "nome": "She-Ra",
    "especie": "cachorro",
    "idade": "2 meses",
    "historia": "Os filhotes da Ninhada He-Man e She-Ra nasceram de uma mãezinha que vivia na periferia e não havia sido castrada. Assumimos a castração da mãe e acolhemos os filhotes para que todos tenham a oportunidade de encontrar lares responsáveis através da adoção consciente. Hoje, eles aguardam famílias cheias de amor para começarem uma nova história, com todo o cuidado e proteção que merecem.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada He-Man e She-Ra",
    "foto": ""
  },
  {
    "nome": "Bubbaloo",
    "especie": "cachorro",
    "idade": "",
    "historia": "Esses pequenos foram resgatados após serem abandonados em Embu. Agora estão seguros e prontos para encontrar famílias que possam oferecer todo o amor e cuidado que merecem.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada Chicletes",
    "foto": ""
  },
  {
    "nome": "Bazooka",
    "especie": "cachorro",
    "idade": "",
    "historia": "Esses pequenos foram resgatados após serem abandonados em Embu. Agora estão seguros e prontos para encontrar famílias que possam oferecer todo o amor e cuidado que merecem.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada Chicletes",
    "foto": ""
  },
  {
    "nome": "Trident",
    "especie": "cachorro",
    "idade": "",
    "historia": "Esses pequenos foram resgatados após serem abandonados em Embu. Agora estão seguros e prontos para encontrar famílias que possam oferecer todo o amor e cuidado que merecem.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada Chicletes",
    "foto": ""
  },
  {
    "nome": "Fini",
    "especie": "cachorro",
    "idade": "",
    "historia": "Esses pequenos foram resgatados após serem abandonados em Embu. Agora estão seguros e prontos para encontrar famílias que possam oferecer todo o amor e cuidado que merecem.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada Chicletes",
    "foto": ""
  },
  {
    "nome": "Plutonita",
    "especie": "cachorro",
    "idade": "",
    "historia": "Esses pequenos foram resgatados após serem abandonados em Embu. Agora estão seguros e prontos para encontrar famílias que possam oferecer todo o amor e cuidado que merecem.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada Chicletes",
    "foto": ""
  },
  {
    "nome": "Gloop",
    "especie": "cachorro",
    "idade": "",
    "historia": "Esses pequenos foram resgatados após serem abandonados em Embu. Agora estão seguros e prontos para encontrar famílias que possam oferecer todo o amor e cuidado que merecem.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada Chicletes",
    "foto": ""
  },
  {
    "nome": "Mentos",
    "especie": "cachorro",
    "idade": "",
    "historia": "Esses pequenos foram resgatados após serem abandonados em Embu. Agora estão seguros e prontos para encontrar famílias que possam oferecer todo o amor e cuidado que merecem.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada Chicletes",
    "foto": ""
  },
  {
    "nome": "Hubba Bubbles",
    "especie": "cachorro",
    "idade": "",
    "historia": "Esses pequenos foram resgatados após serem abandonados em Embu. Agora estão seguros e prontos para encontrar famílias que possam oferecer todo o amor e cuidado que merecem.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada Chicletes",
    "foto": ""
  },
  {
    "nome": "Chiclets",
    "especie": "cachorro",
    "idade": "",
    "historia": "Esses pequenos foram resgatados após serem abandonados em Embu. Agora estão seguros e prontos para encontrar famílias que possam oferecer todo o amor e cuidado que merecem.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada Chicletes",
    "foto": ""
  },
  {
    "nome": "Atlas",
    "especie": "cachorro",
    "idade": "4 meses",
    "historia": "Os filhotes da Ninhada A foram encontrados abandonados em uma ocupação na região de São Mateus. Hoje estão seguros, recebendo todos os cuidados necessários e aguardando famílias responsáveis para começarem uma nova história cheia de amor, carinho e proteção.",
    "cuidados": "Vacinado • Castrado • Vermifugado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada A",
    "foto": ""
  },
  {
    "nome": "Asher",
    "especie": "cachorro",
    "idade": "3 meses",
    "historia": "Os filhotes da Ninhada A foram encontrados abandonados em uma ocupação na região de São Mateus. Hoje estão seguros, recebendo todos os cuidados necessários e aguardando famílias responsáveis para começarem uma nova história cheia de amor, carinho e proteção.",
    "cuidados": "Vacinado • Castrado • Vermifugado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada A",
    "foto": ""
  },
  {
    "nome": "Adriel",
    "especie": "cachorro",
    "idade": "4 meses",
    "historia": "Os filhotes da Ninhada A foram encontrados abandonados em uma ocupação na região de São Mateus. Hoje estão seguros, recebendo todos os cuidados necessários e aguardando famílias responsáveis para começarem uma nova história cheia de amor, carinho e proteção.",
    "cuidados": "Vacinado • Castrado • Vermifugado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada A",
    "foto": ""
  },
  {
    "nome": "Terezinha",
    "especie": "cachorro",
    "idade": "45 dias",
    "historia": "A mãezinha da Ninhada Vai Que Cola foi resgatada prenha na Zona Leste. Hoje, ela e seus filhotes estão seguros e recebem todo o cuidado necessário, enquanto aguardam famílias responsáveis para começar uma nova história cheia de amor e proteção.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada Vai Que Cola",
    "foto": ""
  },
  {
    "nome": "Jéssica",
    "especie": "cachorro",
    "idade": "3 meses",
    "historia": "A mãezinha da Ninhada Vai Que Cola foi resgatada prenha na Zona Leste. Hoje, ela e seus filhotes estão seguros e recebem todo o cuidado necessário, enquanto aguardam famílias responsáveis para começar uma nova história cheia de amor e proteção.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada Vai Que Cola",
    "foto": ""
  },
  {
    "nome": "Velna",
    "especie": "cachorro",
    "idade": "45 dias",
    "historia": "A mãezinha da Ninhada Vai Que Cola foi resgatada prenha na Zona Leste. Hoje, ela e seus filhotes estão seguros e recebem todo o cuidado necessário, enquanto aguardam famílias responsáveis para começar uma nova história cheia de amor e proteção.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada Vai Que Cola",
    "foto": ""
  },
  {
    "nome": "Gabi do Lins",
    "especie": "cachorro",
    "idade": "45 dias",
    "historia": "A mãezinha da Ninhada Vai Que Cola foi resgatada prenha na Zona Leste. Hoje, ela e seus filhotes estão seguros e recebem todo o cuidado necessário, enquanto aguardam famílias responsáveis para começar uma nova história cheia de amor e proteção.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada Vai Que Cola",
    "foto": ""
  },
  {
    "nome": "Valdo",
    "especie": "cachorro",
    "idade": "3 meses",
    "historia": "A mãezinha da Ninhada Vai Que Cola foi resgatada prenha na Zona Leste. Hoje, ela e seus filhotes estão seguros e recebem todo o cuidado necessário, enquanto aguardam famílias responsáveis para começar uma nova história cheia de amor e proteção.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada Vai Que Cola",
    "foto": ""
  },
  {
    "nome": "Wilson",
    "especie": "cachorro",
    "idade": "3 meses",
    "historia": "A mãezinha da Ninhada Vai Que Cola foi resgatada prenha na Zona Leste. Hoje, ela e seus filhotes estão seguros e recebem todo o cuidado necessário, enquanto aguardam famílias responsáveis para começar uma nova história cheia de amor e proteção.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte médio",
    "observacoes": "",
    "ninhada": "Ninhada Vai Que Cola",
    "foto": ""
  },
  {
    "nome": "Pringles",
    "especie": "cachorro",
    "idade": "35 dias",
    "historia": "Uma família da periferia de Embu não conseguiu castrar os pais a tempo, e os filhotes acabaram nascendo. Nós resgatamos os pequenos e também encaminhamos a castração dos pais. Agora, essa turminha está segura e espera por famílias que possam oferecer muito amor e cuidado.",
    "cuidados": "Vermifugado • Vacinado • Porte médio/grande",
    "observacoes": "",
    "ninhada": "Ninhada Salgadinhos",
    "foto": ""
  },
  {
    "nome": "Torcida",
    "especie": "cachorro",
    "idade": "45 dias",
    "historia": "Uma família da periferia de Embu não conseguiu castrar os pais a tempo, e os filhotes acabaram nascendo. Nós resgatamos os pequenos e também encaminhamos a castração dos pais. Agora, essa turminha está segura e espera por famílias que possam oferecer muito amor e cuidado.",
    "cuidados": "Vermifugado • Vacinado • Porte médio/grande",
    "observacoes": "",
    "ninhada": "Ninhada Salgadinhos",
    "foto": ""
  },
  {
    "nome": "Ruffles",
    "especie": "cachorro",
    "idade": "45 dias",
    "historia": "Uma família da periferia de Embu não conseguiu castrar os pais a tempo, e os filhotes acabaram nascendo. Nós resgatamos os pequenos e também encaminhamos a castração dos pais. Agora, essa turminha está segura e espera por famílias que possam oferecer muito amor e cuidado.",
    "cuidados": "Vermifugado • Vacinado • Porte médio/grande",
    "observacoes": "",
    "ninhada": "Ninhada Salgadinhos",
    "foto": ""
  },
  {
    "nome": "Lay’s",
    "especie": "cachorro",
    "idade": "45 dias",
    "historia": "Uma família da periferia de Embu não conseguiu castrar os pais a tempo, e os filhotes acabaram nascendo. Nós resgatamos os pequenos e também encaminhamos a castração dos pais. Agora, essa turminha está segura e espera por famílias que possam oferecer muito amor e cuidado.",
    "cuidados": "Vermifugado • Vacinado • Porte médio/grande",
    "observacoes": "",
    "ninhada": "Ninhada Salgadinhos",
    "foto": ""
  },
  {
    "nome": "Baconzitos",
    "especie": "cachorro",
    "idade": "45 dias",
    "historia": "Uma família da periferia de Embu não conseguiu castrar os pais a tempo, e os filhotes acabaram nascendo. Nós resgatamos os pequenos e também encaminhamos a castração dos pais. Agora, essa turminha está segura e espera por famílias que possam oferecer muito amor e cuidado.",
    "cuidados": "Vermifugado • Vacinado • Porte médio/grande",
    "observacoes": "",
    "ninhada": "Ninhada Salgadinhos",
    "foto": ""
  },
  {
    "nome": "Cheetos",
    "especie": "cachorro",
    "idade": "45 dias",
    "historia": "Uma família da periferia de Embu não conseguiu castrar os pais a tempo, e os filhotes acabaram nascendo. Nós resgatamos os pequenos e também encaminhamos a castração dos pais. Agora, essa turminha está segura e espera por famílias que possam oferecer muito amor e cuidado.",
    "cuidados": "Vermifugado • Vacinado • Porte médio/grande",
    "observacoes": "",
    "ninhada": "Ninhada Salgadinhos",
    "foto": ""
  },
  {
    "nome": "Fandangos",
    "especie": "cachorro",
    "idade": "45 dias",
    "historia": "Uma família da periferia de Embu não conseguiu castrar os pais a tempo, e os filhotes acabaram nascendo. Nós resgatamos os pequenos e também encaminhamos a castração dos pais. Agora, essa turminha está segura e espera por famílias que possam oferecer muito amor e cuidado.",
    "cuidados": "Vermifugado • Vacinado • Porte médio/grande",
    "observacoes": "",
    "ninhada": "Ninhada Salgadinhos",
    "foto": ""
  },
  {
    "nome": "Doritos",
    "especie": "cachorro",
    "idade": "45 dias",
    "historia": "Uma família da periferia de Embu não conseguiu castrar os pais a tempo, e os filhotes acabaram nascendo. Nós resgatamos os pequenos e também encaminhamos a castração dos pais. Agora, essa turminha está segura e espera por famílias que possam oferecer muito amor e cuidado.",
    "cuidados": "Vermifugado • Vacinado • Porte médio/grande",
    "observacoes": "",
    "ninhada": "Ninhada Salgadinhos",
    "foto": ""
  },
  {
    "nome": "Kairos",
    "especie": "cachorro",
    "idade": "5 meses",
    "historia": "Os filhotes da Ninhada Deuses foram resgatados em um terreno abandonado no bairro Jardim Brasília. Agora estão seguros, recebendo os cuidados necessários e esperando por famílias que possam oferecer muito amor, carinho e um lar para sempre.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte peq./médio",
    "observacoes": "",
    "ninhada": "Ninhada Deuses",
    "foto": ""
  },
  {
    "nome": "Chronos",
    "especie": "cachorro",
    "idade": "5 meses",
    "historia": "Os filhotes da Ninhada Deuses foram resgatados em um terreno abandonado no bairro Jardim Brasília. Agora estão seguros, recebendo os cuidados necessários e esperando por famílias que possam oferecer muito amor, carinho e um lar para sempre.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte peq./médio",
    "observacoes": "",
    "ninhada": "Ninhada Deuses",
    "foto": ""
  },
  {
    "nome": "Aion",
    "especie": "cachorro",
    "idade": "5 meses",
    "historia": "Os filhotes da Ninhada Deuses foram resgatados em um terreno abandonado no bairro Jardim Brasília. Agora estão seguros, recebendo os cuidados necessários e esperando por famílias que possam oferecer muito amor, carinho e um lar para sempre.",
    "cuidados": "Vermifugado • Vacinado • Castrado • Porte peq./médio",
    "observacoes": "",
    "ninhada": "Ninhada Deuses",
    "foto": ""
  },
  {
    "nome": "Bibi",
    "especie": "gato",
    "idade": "2 anos",
    "historia": "Bibi ficou três dias em trabalho de parto. Quando perceberam que os filhotes não conseguiam nascer, havia um bebê preso, ela foi resgatada às pressas. Infelizmente, nenhum dos filhotes sobreviveu. Bibi precisou passar por procedimento cirúrgico e ficou internada para se recuperar. Agora, ela merece um recomeço com cuidado, amor e a segurança de um lar que a proteja para sempre.",
    "cuidados": "Castrada • Vermifugada • Vacinada • FIV e FeLV negativo",
    "observacoes": "Apenas para lares 100% telados e sem rota de fuga.",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Levi",
    "especie": "gato",
    "idade": "04.09.25",
    "historia": "A mãezinha deu cria na Zona Leste e foi resgatada junto com seus filhotes. Agora, todos estão seguros, recebendo cuidados e prontos para encontrar lares cheios de amor e responsabilidade.",
    "cuidados": "Vermifugado • Vacinado • Castrado • FIV e FeLV negativo",
    "observacoes": "Apenas para lares 100% telados e sem rota de fuga.",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Lorena",
    "especie": "gato",
    "idade": "04.09.25",
    "historia": "A mãezinha deu cria na Zona Leste e foi resgatada junto com seus filhotes. Agora, todos estão seguros, recebendo cuidados e prontos para encontrar lares cheios de amor e responsabilidade.",
    "cuidados": "Vermifugada • Vacinada • Castrada • FIV e FeLV negativo",
    "observacoes": "Apenas para lares 100% telados e sem rota de fuga.",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Leona",
    "especie": "gato",
    "idade": "04.09.25",
    "historia": "A mãezinha deu cria na Zona Leste e foi resgatada junto com seus filhotes. Agora, todos estão seguros, recebendo cuidados e prontos para encontrar lares cheios de amor e responsabilidade.",
    "cuidados": "Vermifugada • Vacinada • Castrada • FIV e FeLV negativo",
    "observacoes": "Apenas para lares 100% telados e sem rota de fuga.",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Leandro",
    "especie": "gato",
    "idade": "04.09.25",
    "historia": "A mãezinha deu cria na Zona Leste e foi resgatada junto com seus filhotes. Agora, todos estão seguros, recebendo cuidados e prontos para encontrar lares cheios de amor e responsabilidade.",
    "cuidados": "Vermifugado • Vacinado • Castrado • FIV e FeLV negativo",
    "observacoes": "Apenas para lares 100% telados e sem rota de fuga.",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Torrada",
    "especie": "gato",
    "idade": "2 meses e meio",
    "historia": "Torrada e Manteiga foram abandonadas em São Mateus e agora estão seguras, esperando a chance de encontrar uma família que possa oferecer muito amor, carinho e um lar para sempre.",
    "cuidados": "Vacinada • Vermifugada",
    "observacoes": "Apenas para lares 100% telados e sem rota de fuga.",
    "ninhada": "",
    "foto": ""
  },
  {
    "nome": "Manteiga",
    "especie": "gato",
    "idade": "2 meses e meio",
    "historia": "Torrada e Manteiga foram abandonadas em São Mateus e agora estão seguras, esperando a chance de encontrar uma família que possa oferecer muito amor, carinho e um lar para sempre.",
    "cuidados": "Vacinada • Vermifugada",
    "observacoes": "Apenas para lares 100% telados e sem rota de fuga.",
    "ninhada": "",
    "foto": ""
  }
];

const dogGrid = document.getElementById("dogGrid");
const catGrid = document.getElementById("catGrid");
const searchGrid = document.getElementById("searchGrid");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const searchResults = document.getElementById("resultados");
const searchMessage = document.getElementById("searchMessage");
const modal = document.getElementById("animalModal");

function initials(nome) {
  return nome.split(/\s+/).filter(Boolean).slice(0,2).map(p => p[0]).join("").toUpperCase();
}

function card(animal) {
  const el = document.createElement("article");
  el.className = "animal-card";
  el.tabIndex = 0;
  el.setAttribute("role", "button");
  el.setAttribute("aria-label", `Ver detalhes de ${animal.nome}`);
  const foto = animal.foto
    ? `<img src="${animal.foto}" alt="Foto de ${animal.nome}" loading="lazy">`
    : `<span class="initials">${initials(animal.nome)}</span>`;
  el.innerHTML = `
    <div class="card-photo">${foto}</div>
    <div class="card-body">
      <div class="card-top">
        <h3>${animal.nome}</h3>
        <span class="tag">${animal.especie}</span>
      </div>
      <p class="age">${animal.idade || "Idade não informada"}</p>
      <p class="story-preview">${animal.historia}</p>
      <div class="read-more">Ver história completa →</div>
    </div>
  `;
  el.addEventListener("click", () => openModal(animal));
  el.addEventListener("keydown", e => {
    if(e.key === "Enter" || e.key === " ") openModal(animal);
  });
  return el;
}

function render(list, target) {
  target.innerHTML = "";
  if(!list.length) {
    target.innerHTML = `<div class="empty">Nenhum animal encontrado.</div>`;
    return;
  }
  list.forEach(a => target.appendChild(card(a)));
}

function normalize(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function search() {
  const term = normalize(searchInput.value.trim());
  if(!term) {
    searchResults.classList.add("hidden");
    searchMessage.textContent = "";
    return;
  }
  const results = animais.filter(a =>
    normalize([a.nome, a.historia, a.ninhada].join(" ")).includes(term)
  );
  searchResults.classList.remove("hidden");
  searchMessage.textContent = `${results.length} resultado(s) encontrado(s).`;
  render(results, searchGrid);
  document.getElementById("resultados").scrollIntoView({behavior:"smooth", block:"start"});
}

function openModal(animal) {
  document.getElementById("modalName").textContent = animal.nome;
  document.getElementById("modalSpecies").textContent = animal.especie;
  document.getElementById("modalAge").textContent = animal.idade || "Idade não informada";
  document.getElementById("modalStory").textContent = animal.historia;

  const litter = document.getElementById("modalLitter");
  litter.textContent = animal.ninhada ? animal.ninhada : "";

  const care = document.getElementById("modalCare");
  care.innerHTML = animal.cuidados ? `<strong>Cuidados e características</strong>${animal.cuidados}` : "";

  const obs = document.getElementById("modalObs");
  obs.innerHTML = animal.observacoes ? `<strong>Observação</strong>${animal.observacoes}` : "";

  const photo = document.getElementById("modalPhoto");
  photo.innerHTML = animal.foto
    ? `<img src="${animal.foto}" alt="Foto de ${animal.nome}">`
    : `<span class="initials">${initials(animal.nome)}</span>`;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
}

searchInput.addEventListener("input", () => {
  if(searchInput.value.trim().length >= 2) search();
  else {
    searchResults.classList.add("hidden");
    searchMessage.textContent = "";
  }
});
clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  searchResults.classList.add("hidden");
  searchMessage.textContent = "";
  searchInput.focus();
});
document.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => {
  if(e.key === "Escape") closeModal();
});

const dogs = animais.filter(a => a.especie === "cachorro");
const cats = animais.filter(a => a.especie === "gato");
render(dogs, dogGrid);
render(cats, catGrid);
document.getElementById("dogCount").textContent = `${dogs.length} pacotinhos`;
document.getElementById("catCount").textContent = `${cats.length} pacotinhos`;
