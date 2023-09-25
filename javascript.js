const questions = [
  {
      question: "Qual é o maior planeta do sistema solar?",
      choices: ["Júpiter", "Terra", "Marte", "Vênus"],
      answer: "Júpiter",
  },
  {
      question: "Quem escreveu a obra 'Dom Quixote'?",
      choices: ["Miguel de Cervantes", "William Shakespeare", "Charles Dickens", "Jane Austen"],
      answer: "Miguel de Cervantes",
  },
  {
      question: "Qual é o símbolo químico para o oxigênio?",
      choices: ["O", "Xe", "H", "N"],
      answer: "O",
  },
  {
      question: "Qual é a derivada da função f(x) = x^2?",
      choices: ["2x", "x^2", "2x^2", "x"],
      answer: "2x",
  },
  {
      question: "Qual é o processo pelo qual as plantas produzem seu próprio alimento?",
      choices: ["Fotossíntese", "Respiração", "Digestão", "Fermentação"],
      answer: "Fotossíntese",
  },
  {
      question: "Em que ano ocorreu a Independência do Brasil?",
      choices: ["1822", "1500", "1889", "1945"],
      answer: "1822",
  },
  {
      question: "Qual é a capital da Austrália?",
      choices: ["Camberra", "Sydney", "Melbourne", "Brisbane"],
      answer: "Camberra",
  },
  {
      question: "Qual é a soma dos ângulos internos de um triângulo?",
      choices: ["180 graus", "90 graus", "270 graus", "360 graus"],
      answer: "180 graus",
  },
  {
      question: "Qual é o valor de e (número de Euler) aproximadamente?",
      choices: ["2.718", "3.142", "1.618", "2.236"],
      answer: "2.718",
  },
  {
      question: "Quem pintou a Mona Lisa?",
      choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
      answer: "Leonardo da Vinci",
  },
  {
      question: "Qual é o elemento químico mais abundante na crosta terrestre?",
      choices: ["Oxigênio", "Silício", "Alumínio", "Ferro"],
      answer: "Oxigênio",
  },
  {
      question: "Quem foi o primeiro homem a pisar na lua?",
      choices: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
      answer: "Neil Armstrong",
  },
  {
      question: "Qual é o menor osso do corpo humano?",
      choices: ["Estribo", "Fêmur", "Cúbito", "Tíbia"],
      answer: "Estribo",
  },
  {
      question: "Quem foi o fundador da Microsoft?",
      choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Larry Page"],
      answer: "Bill Gates",
  },
  {
      question: "Qual é o valor de i² (unidade imaginária elevada ao quadrado)?",
      choices: ["-1", "1", "0", "i"],
      answer: "-1",
  },
  {
      question: "Qual é a capital da França?",
      choices: ["Paris", "Londres", "Madri", "Berlim"],
      answer: "Paris",
  },
  {
      question: "Qual é o nome da galáxia onde se encontra o Sistema Solar?",
      choices: ["Via Láctea", "Andrômeda", "Galáxia do Triângulo", "Galáxia do Sombreiro"],
      answer: "Via Láctea",
  },
  {
      question: "Quem escreveu 'Romeu e Julieta'?",
      choices: ["William Shakespeare", "Charles Dickens", "Jane Austen", "F. Scott Fitzgerald"],
      answer: "William Shakespeare",
  },
  {
      question: "Qual é o metal mais abundante na crosta terrestre?",
      choices: ["Alumínio", "Ferro", "Cobre", "Ouro"],
      answer: "Alumínio",
  },
  {
      question: "Qual é o valor de π (pi) arredondado para duas casas decimais?",
      choices: ["3.14", "3.16", "3.18", "3.20"],
      answer: "3.14",
  },
  {
      question: "Qual é a capital do Japão?",
      choices: ["Tóquio", "Pequim", "Seul", "Bangcoc"],
      answer: "Tóquio",
  },
  {
      question: "Em que ano a Segunda Guerra Mundial terminou?",
      choices: ["1945", "1918", "1939", "1955"],
      answer: "1945",
  },
  {
      question: "Qual é o processo pelo qual os organismos produzem energia a partir de glicose?",
      choices: ["Respiração celular", "Fotossíntese", "Digestão", "Fermentação"],
      answer: "Respiração celular",
  },
  {
      question: "Quem foi o autor de 'A Metamorfose'?",
      choices: ["Franz Kafka", "Fyodor Dostoevsky", "Leo Tolstoy", "George Orwell"],
      answer: "Franz Kafka",
  },
  {
      question: "Qual é o elemento químico com símbolo 'Na'?",
      choices: ["Sódio", "Níquel", "Cobre", "Prata"],
      answer: "Sódio",
  },
  {
      question: "Qual é o resultado da expressão log₂(8)?",
      choices: ["3", "2", "1", "4"],
      answer: "3",
  },
  {
      question: "Qual é o valor de sen(π/6) em radianos?",
      choices: ["1/2", "√3/2", "1", "√2/2"],
      answer: "1/2",
  },
  {
      question: "Qual é o teorema que relaciona os lados e ângulos de um triângulo?",
      choices: ["Teorema de Pitágoras", "Lei dos cossenos", "Lei dos senos", "Teorema de Tales"],
      answer: "Lei dos cossenos",
  }
];

const questionElement = document.querySelector('#question');
const choiceElement = document.querySelectorAll('.choice');
const nextbtn = document.querySelector('#nextButton');
const scoreElement = document.querySelector('#score');
const wrongElement = document.querySelector('#wrong');

let currentQuestion = 0;
let score = 0;
let wrong = 0;
let answerChosen = false;

function loadQuestion(){
    const currentQuestionData = questions[currentQuestion];
    questionElement.innerText = currentQuestionData.question;
   
    const choices = shuffleArray(currentQuestionData.choices);

    for(let i = 0; i < choiceElement.length; i++){
      choiceElement[i].innerText = choices[i];
      choiceElement[i].style.background= 'none';
    }

    answerChosen = false;

}

function shuffleArray(arr){
    let currentIndex = arr.length;
    let tempValue;
    let randomIndex;

    while(0 !== currentIndex){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex = currentIndex - 1;

      tempValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex]
      arr[randomIndex] = tempValue;
    }

    return arr;

}

function checkAnswer(event){

  if(answerChosen){
    return;
  }

  answerChosen = true;

  if(event.target.innerText === questions[currentQuestion].answer){
    score = score + 1;
    scoreElement.innerText = `Pontuação: ${score}`;
    event.target.style.backgroundColor = 'rgb(68, 194, 68)';
    //alert('Resposta correta!');
  } else {
    wrong = wrong + 1;
    wrongElement.innerText = `Erros: ${wrong}`;
    //alert('Resposta incorreta!');
    event.target.style.backgroundColor = 'rgb(250, 36, 36)';
  }

}

choiceElement.forEach((btn) => btn.addEventListener('click', checkAnswer));

nextbtn.addEventListener('click', () => {
  if(!answerChosen){
    alert('Responda a pergunta antes de ir para a próxima!');
  } else {
    currentQuestion = currentQuestion + 1;
  }

  if(currentQuestion < questions.length){
    loadQuestion();
  } else {
    alert(`Fim de jogo! Você acertou ${score} de ${questions.length} perguntas!`);
    restartQuiz();
  }
})

function restartQuiz(){
  score = 0;
  wrong = 0;
  currentQuestion = 0;
  scoreElement.innerText = `Pontuação: 0`;
  wrongElement.innerText = `Erros: 0`;
  loadQuestion();
}

loadQuestion();