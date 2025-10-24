let botoes_numericos = document.querySelectorAll(".botao_numerico");

const tela = document.querySelector(".valor_saida");

const resultado = document.querySelector(".botao_resultado");

const historico = document.querySelector(".valor_historico");

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
        let calculo = tela.innerText;
        calculo = calculo.replace(/x/gi , "*");
        calculo = eval(calculo.replace(/÷/gi , "/"));
        const valor_historico = tela.innerText;
        historico.innerText = valor_historico;
        tela.innerText = calculo;
    }
});

document.querySelector("#botao_c").addEventListener("click" , function() {
    tela.innerText = "";
    historico.innerText = "";
});



