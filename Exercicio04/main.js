function calcular() {
	var nome = document.getElementById('nome').value;
	var materia = document.getElementById('materia').value;
	var nota1 = document.getElementById('num1').value;
	var nota2 = document.getElementById('num2').value;
	var nota3 = document.getElementById('num3').value;
	var media;
	var status;

	if (nome == "" | nota1 == "" | nota2 == "" | nota3 == "") {
		document.getElementById('mensagens').innerHTML = "Todos os campos devem estar preenchidos";
	} else{
		nota1 = parseFloat(nota1);
		nota2 = parseFloat(nota2);
		nota3 = parseFloat(nota3);
		media = (nota1 + nota2 + nota3) / 3;

		if (media < 4) {
			status = "Reprovado";
		} else {
			if (media >= 7) {
				status = "Aprovado";
			} else{
				status = "Em exame";
			}
		} 

		if (materia == "1") {
			materia = "Matemática";
		}
		if (materia == "2") {
			materia = "Português";
		}
		if (materia == "3") {
			materia = "Geografia";
		}

		document.getElementById('mensagens').innerHTML = "A média final do aluno" + nome + " na DISCIPLINA " + materia + " foi " + media +". Aluno " + status;
	}
}  