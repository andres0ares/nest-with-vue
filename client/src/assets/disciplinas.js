const disciplinas = [
    {   
        id: 1,
        name: 'INTROD A ENGENHARIA DE COMPUTACAO',
        codigo: '1107248',
        periodo: 1,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 2,
        name: 'CALCULO DIFERENCIAL E INTEGRAL I',
        codigo: '1103177',
        periodo: 1,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 3,
        name: 'CALCULO VETORIAL E GEOMETRIA ANALITICA',
        codigo: '1103118 ',
        periodo: 1,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {   
        id: 4,
        name: 'METODOLOGIA DO TRABALHO CIENTIFICO',
        codigo: '1107201',
        periodo: 1,
        creditos: 3,
        categoria: 'Complementar Obrigatoria',
        selected: false
    }, {
        id: 5,
        name: 'INTRODUCAO A PROGRAMACAO PARA ENGENHARIA DE COMPUTACAO',
        codigo: 'GDINF0107',
        periodo: 1,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 6,
        name: 'LABORATORIO DE INTRODUCAO A PROGRAMACAO',
        codigo: 'GDINF0101',
        periodo: 1,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 7,
        name: 'MATERIAIS PARA MICRO E NANO TECNOLOGIA',
        codigo: 'GDSCO0025',
        periodo: 1,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 8,
        name: 'CALCULO DIFERENCIAL E INTEGRAL II',
        codigo: '1103178',
        periodo: 2,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 9,
        name: 'FISICA APLICADA A COMPUTACAO I',
        codigo: '1101171',
        periodo: 2,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 10,
        name: 'LABORATORIO DE LINGUAGEM DE PROGRAMACAO I',
        codigo: 'GDINF0102',
        periodo: 2,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 11,
        name: 'LINGUAGEM DE PROGRAMACAO I',
        codigo: 'GDINF0108',
        periodo: 2,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 12,
        name: 'CIRCUITOS LOGICOS I',
        codigo: 'GDSCO0021',
        periodo: 2,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 13,
        name: 'ELETRICIDADE E CIRCUITOS PARA COMPUTACAO I',
        codigo: 'GDSCO0023',
        periodo: 2,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 14,
        name: 'FISICA EXPERIMENTAL PARA COMPUTACAO',
        codigo: 'GDSCO0046',
        periodo: 2,
        creditos: 2,
        categoria: 'Obrigatória',
        selected: false
    }
    , {
        id: 15,
        name: 'PESQUISA APLICADA A COMPUTACAO',
        codigo: '1107206',
        periodo: 3,
        creditos: 3,
        categoria: 'Complementar Obrigatoria',
        selected: false
    }, {
        id: 16,
        name: 'INTRODUCAO A ALGEBRA LINEAR',
        codigo: '1103179',
        periodo: 3,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 17,
        name: 'CALCULO DIFERENCIAL E INTEGRAL III',
        codigo: '1103232',
        periodo: 3,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 18,
        name: 'CALCULO DAS PROBABILIDADES I',
        codigo: '1108136',
        periodo: 3,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 19,
        name: 'CIRCUITOS LOGICOS II',
        codigo: 'GDSCO0022',
        periodo: 3,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 20,
        name: 'ELETRICIDADE E CIRCUITOS PARA COMPUTACAO II',
        codigo: 'GDSCO0024',
        periodo: 3,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 21,
        name: 'MECANICA PARA ENGENHARIA DA COMPUTACAO',
        codigo: 'GDSCO0059',
        periodo: 3,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 22,
        name: 'LINGUAGEM DE PROGRAMACAO II',
        codigo: '1107148',
        periodo: 4,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 23,
        name: 'FISICA APLICADA A COMPUTACAO II',
        codigo: '1101172',
        periodo: 4,
        creditos: 4,
        categoria: 'Opcional',
        selected: false
    }, {
        id: 24,
        name: 'SERIES E EQUACOES DIFERENCIAIS ORDINARIAS',
        codigo: '1103180',
        periodo: 4,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 25,
        name: 'ESTRUTURA DE DADOS',
        codigo: '1107186',
        periodo: 4,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 26,
        name: 'ELETRONICA APLICADA I',
        codigo: 'GDSCO0026',
        periodo: 4,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 27,
        name: 'ARQUITETURA DE COMPUTADORES',
        codigo: 'GDSCO0035',
        periodo: 4,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 28,
        name: 'ARQUITETURA AVANCADA DE COMPUTADORES',
        codigo: 'GDSCO0034',
        periodo: 5,
        creditos: 4,
        categoria: 'Opcional',
        selected: false
    }, {
        id: 29,
        name: 'BANCO DE DADOS I',
        codigo: '1107180',
        periodo: 5,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 30,
        name: 'CALCULO NUMERICO',
        codigo: 'GDCOC0072',
        periodo: 5,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 31,
        name: 'ANALISE E PROJETO DE ALGORITMOS',
        codigo: 'GDCOC0076',
        periodo: 5,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 32,
        name: 'ELETRONICA APLICADA II',
        codigo: 'GDSCO0027',
        periodo: 5,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 33,
        name: 'INTRODUCAO A MECANICA DOS FLUIDOS',
        codigo: 'GDSCO0052',
        periodo: 5,
        creditos: 2,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 34,
        name: 'INTRODUCAO A MICROELETRONICA',
        codigo: 'GDSCO0053',
        periodo: 5,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 35,
        name: 'REDES DE COMPUTADORES I',
        codigo: 'GDSCO0062 ',
        periodo: 6,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 36,
        name: 'ENGENHARIA DE SOFTWARE',
        codigo: '1107128',
        periodo: 6,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 37,
        name: 'MICROCONTROLADORES',
        codigo: '5101003',
        periodo: 6,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 38,
        name: 'PESQUISA OPERACIONAL',
        codigo: '5102007',
        periodo: 6,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 39,
        name: 'SINAIS E SISTEMAS DINAMICOS',
        codigo: 'GDSCO0064',
        periodo: 6,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 40,
        name: 'SISTEMAS OPERACIONAIS I',
        codigo: 'GDSCO0068',
        periodo: 6,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 41,
        name: 'AVALIACAO E DESEMPENHO DE SISTEMAS OPERACIONAIS',
        codigo: '5101001',
        periodo: 7,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 42,
        name: 'REDES SEM FIO',
        codigo: 'GDSCO0032',
        periodo: 7,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 43,
        name: 'INTRODUCAO A COMPUTACAO GRAFICA',
        codigo: 'GDSCO0051',
        periodo: 7,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 44,
        name: 'INTRODUCAO AO PROCESSAMENTO DIGITAL DE IMAGENS',
        codigo: 'GDSCO0055',
        periodo: 7,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 45,
        name: 'SISTEMAS E CONTROLE DE AUTOMACAO',
        codigo: 'GDSCO0065',
        periodo: 7,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 46,
        name: 'SISTEMAS EMBARCADOS I',
        codigo: 'GDSCO0081',
        periodo: 7,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 47,
        name: 'INTRODUCAO A INTELIGENCIA ARTIFICIAL',
        codigo: '1107191',
        periodo: 8,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 48,
        name: 'ROBOTICA',
        codigo: 'GDSCO0028',
        periodo: 8,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 49,
        name: 'CONCEPCAO ESTRUTURADA DE CIRCUITOS INTEGRADOS',
        codigo: 'GDSCO0040',
        periodo: 8,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 50,
        name: 'INTRODUCAO A TEORIA DA INFORMACAO',
        codigo: 'GDSCO0054',
        periodo: 8,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 51,
        name: 'ECONOMIA I',
        codigo: '1201126',
        periodo: 9,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 52,
        name: 'COMPUTADORES E SOCIEDADE',
        codigo: 'GDINF0106',
        periodo: 9,
        creditos: 4,
        categoria: 'Complementar Obrigatoria',
        selected: false
    }, {
        id: 53,
        name: 'ADMINISTRACAO PARA ENGENHARIA',
        codigo: '1204172',
        periodo: 9,
        creditos: 4,
        categoria: 'Obrigatória',
        selected: false
    }, {
        id: 54,
        name: 'TRABALHO DE CONCLUSAO DE CURSO I - ENG. DE COMPUTACAO',
        codigo: 'GDSCO0029',
        periodo: 9,
        creditos: 2,
        categoria: 'Complementar Obrigatoria',
        selected: false
    }, {
        id: 55,
        name: 'TRABALHO DE CONCLUSAO DE CURSO II - ENG. DE COMPUTACAO',
        codigo: 'GDSCO0029',
        periodo: 10,
        creditos: 2,
        categoria: 'Complementar Obrigatoria',
        selected: false
    }
]

export default disciplinas

// , {
//     id: 56,
//     name: 'ESTAGIO SUPERVISIONADO - ENGENHARIA DA COMPUTACAO',
//     codigo: 'GDSCO0029',
//     periodo: 10,
//     creditos: 20,
//     categoria: 'Obrigatória',
//     selected: false
// }