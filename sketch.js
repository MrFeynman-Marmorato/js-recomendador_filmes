// Lista de Filmes:

// Idade 18 anos:
// comédia >>> Todo mundo em pânico 1
// romance >>> 50 tons de cinza
// ação >>> Bastardos Inglórios


// Idade 14 anos:
// comédia >>> Ela é Demais 
// romance >>> Depois do Universo
// ação >>> Maze Runner


// Idade Livre:
// comédia >>> Alvin e os Esquilos 
// romance >>> Diário de uma princessa
// ação >>> Karate Kid

let filme;
let campoIdade;
let campoAcao;
let campoRomance;
let campoComedia;

function setup() {
  createCanvas(600, 400);
  createElement('h2', 'Recomendador de Filmes');
  createSpan("Idade: ")
  campoIdade = createInput();
  createElement('h3', 'Selecione somente um gênero de filme');
  campoAcao = createCheckbox('Ação');
  campoRomance = createCheckbox('Romance');
  campoComedia = createCheckbox('Comédia')
}

function draw() {
  background(0);
  textSize(40);
  textAlign( CENTER, CENTER);
  fill('white')
  
  let idade = campoIdade.value();
  let acao = campoAcao.checked();
  let romance = campoRomance.checked();
  let comedia = campoComedia.checked();
  
  filme = geraRecomendacao(idade, acao, romance, comedia);
  
  text(filme, width/2, height/2);
}

function geraRecomendacao(idade, acao, romance, comedia){
  if(idade >= 18){
    if(acao){
      return 'Bastardos Inglórios';
    }else if(romance){
      return '50 tons de cinza';
    }else if(comedia){
      return 'Todo mundo em pânico'
    }else{ 
      return 'Bastardos Inglórios';
    }
  }else if(idade >= 14){
    if(acao){
      return 'Maze Runner';
    }else if(romance){
      return 'Depois do Universo';
    }else if(comedia){
      return 'Ela é Demais'
    }else{
      return 'Maze Runner';
    }
  }else{
    if(acao){
      return 'Karatê Kid';
    }else if(romance){
      return 'Diário de uma princessa';
    }else if(comedia){
      return 'Alvin e os Esquilos'
    }else{
      return 'Karatê Kid';
    }
  }
}
