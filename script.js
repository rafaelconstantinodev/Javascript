function verificar() {
var pais = document.getElementById('txt').value
var res = document.getElementById('resp')
if (pais == 'Brasil' || pais == 'brasil' || pais == 'BRASIL') {
res.innerHTML = 'Você é <strong>brasileiro(a)</strong>'
} else if (pais == '' || pais == null) {
res.innerHTML = '<strong>OPS! Algo deu errado.</strong> Digite um país válido.'
} else {
res.innerHTML = 'Você é <strong>estrangeiro(a)</strong>'
}
}

//-----------------------COMENTANDO O CÓDIGO---------------------------------

// linha 1 - início do escopo da função verificar--------------------------------
// linha 2 - variável para guardar o texto digitado pelo usuário usando o metodo 
// value(que eu achava que só usava em caso de número)-----------------

// linha 3 - variável para guardar o valor da resposta e mostrar no documento----
// linha 4 - inicio da condição simples para verificação de nacionalidade, estipulando 
// as possiveis variações de digitação do usuário no caso de ser brasileiro(a).

// linha 5 - mostra o resultado brasileiro(a)
// linha 6 - parte da condição que estipula se o usuário não digita nada ou um nome inválido

// linha 7 - mostra o resultado de erro ou falta de digitação
// OBS: Ainda não consegui mostrar o erro quando o usuário digita um país inexistente

// linha 8 - final da condição que estipula quando o usuário digita o nome de um páis estrangeiro

// linha 9 - mostra o resultado estrangeiro(a)