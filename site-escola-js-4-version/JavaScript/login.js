const botao = document.querySelector("#send");
botao.addEventListener ("click", function(e) {
    
    e.preventDefault();

    const emailAluno = document.querySelector("#email");

    const email = emailAluno.value;

    const senhaAluno = document.querySelector("#senha");

    const senha = senhaAluno.value;

    if (email == "" || senha == "") {
        alert("Todos os campos devem ser preenchidos!")
    //  login alunos
    }else if (email == "AnaRodrigues2011@hotmail.com.br" && senha == "aluno"){
        window.location.href = '../telas/aluno/index.html';
    }else if (email == "AndreAlmeida10@outlook.com" && senha == "aluno"){
        window.location.href = '../telas/aluno/index.html';
    }else if (email == "CarlosFC@gmail.com" && senha == "aluno"){
        window.location.href = '../telas/aluno/index.html';
    }else if (email == "FabioAzevedoAraujo@gmail.com.br" && senha == "aluno"){
        window.location.href = '../telas/aluno/index.html';
    }else if (email == "GabrielaAlves@gmail.com" && senha == "aluno"){
        window.location.href = '../telas/aluno/index.html';
    }else if (email == "Luiza041Gomes@hotmail.com" && senha == "aluno"){
        window.location.href = '../telas/aluno/index.html';
    }else if (email == "MariCarvalho@gmail.com" && senha == "aluno"){
        window.location.href = '../telas/aluno/index.html';
    }else if (email == "PedroAlmeida06@gmail.com" && senha == "aluno"){
        window.location.href = '../telas/aluno/index.html';
    }else if (email == "RenatoDiasCorreia@hotmail.com" && senha == "aluno"){
        window.location.href = '../telas/aluno/index.html';
    }else if (email == "ThaisRocha2010@outlook.com.br" && senha == "aluno"){
        window.location.href = '../telas/aluno/index.html';
    // login responsavel
    }else if (email == "AnaRodrigues2011@hotmail.com.br" && senha == "responsavel"){
        window.location.href = '../telas/responsavel/index.html';
    }else if (email == "AndreAlmeida10@outlook.com" && senha == "responsavel"){
        window.location.href = '../telas/responsavel/index.html';
    }else if (email == "CarlosFC@gmail.com" && senha == "responsavel"){
        window.location.href = '../telas/responsavel/index.html';
    }else if (email == "FabioAzevedoAraujo@gmail.com.br" && senha == "responsavel"){
        window.location.href = '../telas/responsavel/index.html';
    }else if (email == "GabrielaAlves@gmail.com" && senha == "responsavel"){
        window.location.href = '../telas/responsavel/index.html';
    }else if (email == "Luiza041Gomes@hotmail.com" && senha == "responsavel"){
        window.location.href = '../telas/responsavel/index.html';
    }else if (email == "MariCarvalho@gmail.com" && senha == "responsavel"){
        window.location.href = '../telas/responsavel/index.html';
    }else if (email == "PedroAlmeida06@gmail.com" && senha == "responsavel"){
        window.location.href = '../telas/responsavel/index.html';
    }else if (email == "RenatoDiasCorreia@hotmail.com" && senha == "responsavel"){
        window.location.href = '../telas/responsavel/index.html';
    }else if (email == "ThaisRocha2010@outlook.com.br" && senha == "responsavel"){
        window.location.href = '../telas/responsavel/index.html';
    // login secretaria
    }else if (email == "secretaria@escolanegativo.com" && senha == "secretaria"){
        window.location.href = '../telas/secretaria/index.html'
    // login professor
    }else if (email == "professor@escolanegativo.com" && senha == "professor"){
        window.location.href = '../telas/professor/index.html';
    }else{
        alert("Email ou senha estão incorretos!")
    }

})
