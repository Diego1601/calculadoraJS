let botoes_numericos = document.querySelectorAll(".botao_numerico");

const tela = document.querySelector(".valor_saida");

const resultado = document.querySelector(".botao_resultado");

botoes_numericos.forEach (botao => {
    botao.addEventListener("click" , () => {
        const valor = botao.innerText;

        if(tela.innerText === "") {
            tela.innerText = valor;
        } else {
            tela.innerText += valor;
        }
    })
});

resultado.addEventListener("click" , ()=> {
    if(tela.innerText === "") {
        tela.innerText = "";
    } else {
        const valor = eval(tela.innerText);
        tela.innerText = valor;
    }
});

document.getElementById("botao_c").addEventListener("click" , function() {
    tela.innerText = "";
});



