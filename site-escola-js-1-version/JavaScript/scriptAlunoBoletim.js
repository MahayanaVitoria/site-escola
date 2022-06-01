import dataAluno from "../Arquivos-Json/Aluno.json" assert {type:"json"}
import dataProfessor from "../Arquivos-Json/Professor.json" assert {type:"json"}


var mytable = []
mytable.push(dataAluno[0].notas);
console.log(mytable[0]);
//create table
var html = "<table>";


mytable[0].forEach(function(e) {
    
    Object.keys(e).forEach((value) => {
        html += "<tr>";
        Object.keys(e[value]).forEach((n) => {
            console.log(e[value][n])
            html += "<th>" + e[value][n] + "</th>";
        })
        html += "</tr>";
    })

});

    


html += "</table>";
document.getElementById("result").innerHTML = html;