'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const data = [
      {
        "name": "Parque Nacional dos Lençóis Maranhenses",
        "city": "Barreirinhas",
        "description": "O Parque Nacional dos Lençóis Maranhenses é o destino perfeito para aqueles que buscam aventura e contemplação da natureza!! Caminhar sobre as areias brancas do maior campo de dunas do Brasil, se refrescar em lagoas de água cristalina e observar o pôr-do-sol são experiências únicas que você levará para o resto da vida. Tudo isso com a emoção de um passeio fora de estrada em veículos 4x4 credenciados especialmente adaptados para percorrer o terreno arenoso e alagado da restinga dos Lençóis Maranhenses. Aqueles que preferem caminhadas longas e interação com comunidades tradicionais, podem ainda se aventurar a atravessar o campo de dunas e ter a experiência de pernoitar nos oásis do “deserto brasileiro”.\nO Parque Nacional dos Lençóis Maranhenses, localizado no litoral oriental do estado do Maranhão, é o principal destino indutor do turismo no estado. Está inserido no Cerrado mas apresenta forte influência da Caatinga e da Amazônia, sendo encontradas espécies comuns destes 3 biomas. Em seus 155 mil hectares, abriga ecossistemas diversos e frágeis, como a restinga, o manguezal, e um campo de dunas que ocupa 2/3 da área total da unidade, sendo o principal atrativo do Parque Nacional devido as lagoas interdunares que se formam no período chuvoso da região.O parque está inserido em 3 municípios maranhenses, que dispõem de estrutura para recepção e condução de visitantes, Barreirinhas, Santo Amaro e Primeira Cruz.",
        "latitude": -2.5392872000000004, 
        "longitude": -43.0169994,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "name": "Palácio dos Leões",
        "city": "Sào Luís",
        "description": "Desde o início de sua primeira construção em 1626 como residência de governante, e após sofrer sucessivas adjunções e modificações, o edifício tornou-se descaracterizado e deteriorado ao longo dos anos, o que ocasionou a interdição da ala residencial. Após o projeto de recuperação e restauração, concluído em 2003, o prédio passou a ter as características atuais.\nA sua localização privilegiada, no alto do promontório onde nasceu a cidade de São Luís, aliada à sua trajetória histórica, à sua arquitetura e seus bens artísticos, fazem do Palácio um conjunto de fundamental importância para o entendimento da formação da identidade cultural do povo maranhense.",
        "latitude": -2.5274408704253895, 
        "longitude": -44.30680178492367,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "name": "Parque Nacional da Chapada das Mesas",
        "city": "Carolina",
        "description": "O Parque Nacional da Chapada das Mesas foi criado em 2005, uma unidade de conservação com 160.046 hectares de Cerrado, abrangendo parte dos municípios de Carolina, Riachão, Estreito.\nEsta região de cerrado é rica em espécies de animais e de plantas, além do alto potencial turístico em decorrência das belezas naturais de chapadas vermelhas, formações rochosas, cânions, cavernas e cachoeiras.",
        "latitude": -7.11755065,
        "longitude": -47.30963308083669,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "name": "Teatro Arthur Azevedo",
        "city": "São Luís",
        "description": "O Teatro Arthur Azevedo, localizado em São Luís, no estado do Maranhão, Brasil, teve sua criação proposta em 1815 por dois comerciantes portugueses, Eleutério Lopes da Silva Varela e Estevão Gonçalves Braga. Inicialmente chamado de Teatro União, foi inaugurado em 1817, destacando-se por seu conforto, tamanho e estilo neoclássico. Em 1852, passou a se chamar Teatro São Luiz e, na década de 1920, recebeu o nome atual em homenagem ao dramaturgo maranhense Artur de Azevedo. O teatro também é conhecido por ser o local de nascimento da atriz maranhense Apolônia Pinto. No século XX, o teatro foi descaracterizado e transformado em cinema, mas em 1989, a fachada original foi restaurada e o teatro reconstruído de acordo com o projeto original, mantendo seu estilo histórico. Atualmente, o Teatro Arthur Azevedo tem uma capacidade de 750 lugares e oferece uma variedade de espaços e estruturas, incluindo salões, palco, bar, carpintaria e lojinha de souvenirs.",
        "latitude": -2.528946, 
        "longitude": -44.3024852,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "name": "Catedral Metropolitana de São Luis - Nossa Senhora da Vitória",
        "city": "São Luís",
        "description": "Considerado um dos monumentos históricos mais antigos e importantes de São Luís do Maranhão, a Igreja da Sé (ou Catedral Metropolitana) foi denominada Igreja de Nossa Senhora da Vitória, em homenagem a Nossa Senhora, protetora dos portugueses na Batalha de Guaxenduba.\nEssa batalha ocorreu em 1615, onde hoje se localiza a cidade de Icatu e foi um confronto militar importante para acelerar a expulsão definitiva dos franceses do Maranhão. Conta-se que, nessa batalha contra os franceses, os portugueses estavam em desvantagem quanto ao número de soldados. Pediram ajuda a Nossa Senhora e foram atendidos. Por isso, a igreja foi denominada Nossa Senhora da Vitória.\nA edificação foi iniciada em 1619 pelo 3º Capitão-Mor Diogo Machado da Costa que, no final do seu mandato, em 1622, a inaugurou.\nQuase setenta anos depois, a Companhia de Jesus deu início às obras da igreja de Nossa Senhora da Luz, conforme desenho feito pelo padre Felipe Bertendorf e aprovado por Roma. A construção ficava próxima à modesta igreja construída pelo Capitão-Mor Diogo Machado e foi concluída em 30 de julho de 1699.\nEm 1761, após a expulsão dos jesuítas do Brasil (1759-1760), ficou determinado que os bens daquela ordem religiosa passariam para a Fazenda Nacional e o Colégio e a Igreja de Nossa Senhora da Luz iriam servir de Paço Episcopal e Catedral. Como a primeira e antiga igreja estava bastante arruinada, a dos jesuítas tornou-se catedral, deixando de ter como padroeira Nossa Senhora da Luz e passando a ter como titular Nossa Senhora da Vitória. A antiga igreja foi demolida no ano de 1763.\nDurante sua longa existência sofreu reformas, muitas malfeitas, que culminaram com desmoronamento de parte da igreja e sua reconstrução. Em 1701, restauração do frontispício; 1737: afixação de relógio doado pela Casa da Câmara; 1768: ampliação da capela-mor pelo Cabido; 1851-1927: restauração do assoalho, execução de obras de encanamento para luz de gás hidrogênio; reconstrução da fachada, com o acréscimo da torre norte; colocação de novo piso e nova pintura. As formas atuais da Igreja da Sé ou Catedral Metropolitana de São Luís do Maranhão é o resultado da reforma ocorrida em 1922.\nNo período de 1993 a 1996, a 3ª Superintendência Regional do Instituto do Patrimônio Histórico e Artístico Nacional (Iphan) realizou obras de restauração que recuperaram o ouro primitivo “encoberto por pintura azul e branca que refletem um simbolismo litúrgico muito frequente no barroco luso-espanhol, austríaco e sul-americano em geral”.\nA Catedral é tombada pelo Iphan e tem como destaque o altar-mor, do século XVIII, que é considerado um tesouro da arte barroca brasileira.",
        "latitude": -2.5280464277843926,
        "longitude": -44.304639976517144,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "name": "Centro Histórico de São Luís",
        "city": "São Luís",
        "description": "O Centro Histórico de São Luís, localizado na capital do Maranhão, é um dos mais importantes conjuntos arquitetônicos coloniais do Brasil e foi declarado Patrimônio Mundial pela UNESCO em 1997. Fundado pelos franceses em 1612 e posteriormente ocupado por portugueses, o centro histórico preserva uma rica herança cultural e arquitetônica. Suas ruas estreitas e sinuosas são ladeadas por casarios coloridos, muitos dos quais decorados com azulejos portugueses, que conferem um charme único à cidade. Entre os destaques estão a Praça Dom Pedro II, onde se encontra o Palácio dos Leões, sede do governo estadual, e a Fonte do Ribeirão, uma obra hidráulica histórica. Além disso, o bairro abriga diversas igrejas históricas, como a Catedral da Sé e a Igreja de Santo Antônio. O Centro Histórico de São Luís é um testemunho vivo da mistura de culturas e influências que moldaram a história do Maranhão.",
        "latitude": -2.529477,
        "longitude": -44.304241,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "name": "Museu Histórico de Alcântara - MHA",
        "city": "Alcântara",
        "description": "O Museu Histórico de Alcântara está instalado em um sobrado colonial, exemplar típico dos casarões maranhenses do século XIX.\nOrganizado pela Secretaria de Estado da Cultura do Maranhão em 1977, com o apoio da EMBRATUR, da MARATUR e da Prefeitura deste município, o Museu Histórico de Alcântara testemunha um período de opulência e riqueza baseado nas monoculturas do arroz e algodão alimentados pelo sistema escravagista. O prédio do Museu Histórico encanta aos visitantes por sua fachada revestida de azulejos coloridos e portais emoldurados de pedras de lioz. A planta em forma de L dá lugar a longos corredores avarandados abrindo para um pátio interno,onde se encontra um belo poço com bordas trabalhadas em pedra e alvenaria. Com inúmeros detalhes arquitetônicos interessantes, o prédio do Museu Histórico de Alcântara destaca-se por seus longos beirais, janelas em guilhotina,forro em espinha de peixe no segundo pavimento,balcões com base de pedra e gradil em ferro trabalhado,além de outros detalhes que garantem condições de ventilação e conferem beleza ao conjunto arquitetônico.",
        "latitude": -2.4081615,
        "longitude":  -44.4176746,
        "created_at": new Date(),
        "updated_at": new Date()
      }
    ];
    
    return queryInterface.bulkInsert('attractions', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('attractions', null, {});
  }
};
