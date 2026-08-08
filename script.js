```javascript
document.addEventListener("DOMContentLoaded", function () {

    const botoes = document.querySelectorAll(".reacoes button");

    botoes.forEach(function (botao) {

        let jaCurtiu = false;

        botao.addEventListener("click", function () {

            const numero = botao.querySelector("span");

            let quantidade = Number(numero.textContent);

            if (jaCurtiu === false) {
                quantidade = quantidade + 1;
                jaCurtiu = true;
            } else {
                quantidade = quantidade - 1;
                jaCurtiu = false;
            }

            numero.textContent = quantidade;

        });

    });

});
```
