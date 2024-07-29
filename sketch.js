let campoIdade;
let campoAventura;

function setup() {
  createCanvas(650, 400);
  createElement('h2', 'Recomendador de Filmes');
  createSpan('Idade: ')
  campoIdade = createInput('15');
  campoAventura = createCheckbox('Gosta de aventura?')
}

function draw() {
  background('white');
  let idade = campoIdade.value();
  let aventura = campoAventura.checked();
  let filme = geraRecomendacao(idade, aventura);
  
  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(filme, width/2, height/2);
}

function geraRecomendacao(idade, aventura){
  if(idade >= 18){
    if(aventura){
      return 'Bastardos Inglórios'
    }else{
      return 'Jogos Mortais'
    }
  }else{
    return 'Branca de Neve e os sete anões'
  }
}
