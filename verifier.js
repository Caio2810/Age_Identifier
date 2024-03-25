document.addEventListener('DOMContentLoaded', function() {
    let botao = document.getElementById('verificar');

    botao.addEventListener('click', function() {
        let ano = parseInt(document.getElementById('ano').value);
        let sexo = document.querySelector('input[name="gender"]:checked').value;
        let dataAtual = new Date(); 
        let anoAtual = dataAtual.getFullYear();
        let idade = anoAtual - ano;

        let geracao = "";
        if (ano < 1960) {
            geracao = "idoso";
        } else if (ano >= 1960 && ano < 1995) {
            geracao = "adulto";
        } else if (ano >= 1995) {
            geracao = "jovem";
        }

        let pronome = (sexo === "male") ? "homem" : "mulher";
        let mensagem = `Você é ${geracao}, tem ${idade} anos e é ${pronome}.`;

        if (geracao === "jovem" && sexo === "female") {
            mensagem = `Você é ${geracao}, tem ${idade} anos e é mulher.`;
        } else if (sexo === "female") {
            mensagem = `Você é ${geracao.slice(0, -1)}a, tem ${idade} anos e é mulher.`;
        }

        window.alert(mensagem);
    });
});
