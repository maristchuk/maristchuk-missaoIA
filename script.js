const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você sempre teve vontade de fazer um intercâmbio nos Estados Unidos. Um dia, sua escola anuncia um programa de intercâmbio para estudantes. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Seria uma oportunidade incrível para conhecer uma nova cultura e aprender inglês!",
                afirmacao: "afirmação"
            },
            {
                texto: "Parece interessante, mas ficar longe da minha família e dos meus amigos pode ser difícil.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Depois de decidir participar do intercâmbio, você começa a pesquisar sobre os Estados Unidos, a cidade onde ficará hospedado e a escola que frequentará. Como você se prepara?",
        alternativas: [
            {
                texto: "Pesquiso sobre a cultura, os costumes, o clima e o cotidiano do local para saber o que esperar.",
                afirmacao: "afirmação"
            },
            {
                texto: "Prefiro descobrir tudo quando chegar, pois acho mais divertido conhecer o lugar sem muitas expectativas.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Durante o intercâmbio, você chega à escola nos EUA e percebe que os alunos têm costumes e formas de estudar diferentes das que você conhece. Como você reage?",
        alternativas: [
            {
                texto: "Procuro conhecer os costumes dos outros estudantes e compartilhar também um pouco da cultura brasileira.",
                afirmacao: "afirmação"
            },
            {
                texto: "Fico mais próximo de outros brasileiros, pois acredito que será mais fácil me adaptar dessa maneira.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Durante uma conversa com seus novos colegas, você percebe que seu inglês ainda não é perfeito e tem dificuldade para entender algumas palavras. O que você faz?",
        alternativas: [
            {
                texto: "Continuo tentando conversar, peço para repetirem quando necessário e aproveito a situação para aprender novas palavras.",
                afirmacao: "afirmação"
            },
            {
                texto: "Evito conversar muito para não cometer erros ou passar vergonha na frente dos outros.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Depois de algumas semanas nos Estados Unidos, sua família anfitriã convida você para conhecer uma tradição americana que é diferente dos costumes da sua família. Como você reage?",
        alternativas: [
            {
                texto: "Participo da atividade com curiosidade e respeito, aproveitando a oportunidade para conhecer melhor a cultura americana.",
                afirmacao: "afirmação"
            },
            {
                texto: "Prefiro não participar porque acho melhor manter os costumes que já conheço.",
                afirmacao: "afirmação"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();