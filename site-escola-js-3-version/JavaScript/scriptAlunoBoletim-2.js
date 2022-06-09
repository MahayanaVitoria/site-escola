var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://raw.githubusercontent.com/BrnCalisario/site-escola/main/Arquivos-Json/Aluno.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var aluno = request.response;

    populateHeader(aluno);
    showHeroes(aluno);
}

function populateHeader(jsonObj) {

    // var nomeAluno = document.createElement('nomeAluno');
    // nomeAluno.textContent = jsonObj['nome'];
    // header.appendChild(nomeAluno);
    
    // var myPara = document.createElement('p');
    // myPara.textContent = 'Cidade de Origem: ' + jsonObj['homeTown']; 
    // header.appendChild(myPara);
}
    