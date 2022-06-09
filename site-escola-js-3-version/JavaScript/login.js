const botao = document.querySelector("#send");
botao.addEventListener ("click", function(e) {
    
    e.preventDefault();

    const emailAluno = document.querySelector("#email");

    const email = emailAluno.value;

    const senhaAluno = document.querySelector("#senha");

    const senha = senhaAluno.value;

    if (email == "" || senha == "") {
        alert("Todos os campos devem ser preenchidos!")
    }else if (email == "AnaRodrigues2011@hotmail.com.br" && senha == "123"){
        window.location.href = '../telas/aluno/index.html';
    }



    // let para = document.createElement('p');
    // para.textContent = ('Seu acesso é: ' + email);
    // document.body.appendChild(para);

})