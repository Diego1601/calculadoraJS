// trago todos os elementos que quero usar para aqui.

let botoes_numericos = document.querySelectorAll(".botao_numerico");

const tela = document.querySelector(".valor_saida");

const resultado = document.querySelector(".botao_resultado");

const historico = document.querySelector(".valor_historico");


// seleciono todos os botões de números e operadores para pegar os valores digitados.
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

// calculo o resultado e transmito para a tela de exibição.
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

// seleciono o botão de apagar para cada valor digitado. 
document.querySelector("#botao_apagar").addEventListener("click", () => {
        if(tela.innerText === "") {
            tela.innerText = "";
        } else {
            let apagar = tela.innerText.slice(0, -1);
            tela.innerText = apagar;
        }
})

// seleciono o botão de apagar tudo de uma vez na tela de exibição.
document.querySelector("#botao_c").addEventListener("click" , () => {
    tela.innerText = "";
    historico.innerText = "";
});