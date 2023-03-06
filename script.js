function verificar() {
    var pais = document.getElementById('txt')
    var resp = document.getElementById('resposta')
  
    if( pais == 'Brasil') {
        resp.innerHTML = 'você é Brasileiro(a)'
    }else {
       resp.innerHTML = 'você é estrangeiro(a)'
    }
}