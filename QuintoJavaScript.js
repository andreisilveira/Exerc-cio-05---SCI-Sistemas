function inserirDados() {

  const matriz = obterDados(); // cria uma matriz vazia
  const medias = obterMedias(matriz); // cria um vetor para armazenar as médias dos alunos
  
  obterMaiorMenorMedia(medias, matriz);
}

function obterDados(){
  const dados = [];

  for (var i = 0; i < 3; i++) {
    // solicita o nome do aluno
    let nome = prompt("Digite o nome do aluno:");

    // cria um vetor para armazenar as notas do aluno
    let notas = [];

    // solicita as quatro notas do aluno
    for (let j = 0; j < 4; j++) {
      let nota = parseFloat(prompt("Digite a nota " + (j + 1) + " do aluno " + nome + ":"));
      notas.push(nota);
    }

    // adiciona o nome e as notas do aluno na matriz
    dados.push([nome, notas]);
  }

  return dados;
}

function obterMedias(matriz){
  const medias = [];

  for (var i = 0; i < matriz.length; i++) {
    var nome = matriz[i][0];
    var notas = matriz[i][1];
    var soma = 0;

    // calcula a média das notas do aluno
    for (var j = 0; j < notas.length; j++) {
      soma += notas[j];
    }

    var media = soma / notas.length;
    medias.push(media);

    // imprime o nome do aluno e a média das notas
    document.getElementById(`alunosEMedias${i+1}`).innerHTML += nome + " - média: " + media.toFixed(2) + "." + "<br>";
    
  }

  return medias;
}

function obterMaiorMenorMedia(medias, matriz){
  // encontra o índice do aluno com a maior média
  var indiceMaiorMedia = 0;
  var maiorMedia = medias[0];

  for (var i = 1; i < medias.length; i++) {
    if (medias[i] > maiorMedia) {
      indiceMaiorMedia = i;
      maiorMedia = medias[i];
    }
  }

  // encontra o índice do aluno com a menor média
  var indiceMenorMedia = 0;
  var menorMedia = medias[0];

  for (var i = 1; i < medias.length; i++) {
    if (medias[i] < menorMedia) {
      indiceMenorMedia = i;
      menorMedia = medias[i];
    }
  }

  document.getElementById("maiorMedia").innerHTML = "O aluno com a maior média é: " + matriz[indiceMaiorMedia][0] + ".";
  document.getElementById("menorMedia").innerHTML = "O aluno com a menor média é: " + matriz[indiceMenorMedia][0] + ".";
}
