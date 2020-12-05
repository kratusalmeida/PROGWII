		function calcular() {

            var num1 = document.getElementById('num1').value;
            var num2 = document.getElementById('num2').value;

            if (num1 == "" | num2 == "") {
                document.getElementById('mensagens').innerHTML = "Os campos não podem ser vazios e precisam ser números";
                if (num1 == 0) {
                    document.getElementById('mensagens').innerHTML = "O primeiro número não pode ser 0";
                }
            } else {
            	num1 = parseInt(num1);
            	num2 = parseInt(num2);
                var soma = num1 + num2;
                var sub = num1 - num2;
                var mult = num1 * num2;
                var div = num1 / num2;
                var resto = num1 % num2;
                document.getElementById('soma').innerHTML = "Soma: " + soma;
                document.getElementById('sub').innerHTML = "Subtração: " + sub;
                document.getElementById('mult').innerHTML = "Multiplicação: " + mult;
                document.getElementById('div').innerHTML = "Divisão: " + div;
                document.getElementById('resto').innerHTML = "Resto: " + resto;
            }
        }