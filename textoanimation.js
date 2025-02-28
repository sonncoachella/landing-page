
        // Efeito de Digitação
        const texto = "Find the best tech";
        let index = 0;
        const elemento = document.getElementById("typing");

        function digitar() {
            if (index < texto.length) {
                elemento.innerHTML += texto.charAt(index);
                index++;
                setTimeout(digitar, 100);
            } else {
                setTimeout(apagar, 1500);
            }
        }

        function apagar() {
            if (index > 0) {
                elemento.innerHTML = texto.substring(0, index - 1);
                index--;
                setTimeout(apagar, 50);
            } else {
                setTimeout(digitar, 500);
            }
        }

        digitar();