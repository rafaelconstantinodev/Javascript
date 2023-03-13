function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var mint = data.getMinutes()
var seg = data.getSeconds()
//msg.innerHTML = `<strong>Agora são ${hora} horas e ${mint} minutos e ${seg} segundos</strong>` 
if (hora >= 0 && hora < 12) {
    msg.innerHTML = '<strong>Bom dia <br>' + `Agora são ${hora} : ${mint} min ${seg} seg</strong>` 
    img.src = 'fotomanha.png'
    document.body.style.background = '#0183db'
} else if (hora >= 12 && hora < 18) {
    msg.innerHTML = '<strong>Boa tarde <br>' + `Agora são ${hora} : ${mint} min ${seg} seg</strong>`
    img.src = 'fototarde.png'
    document.body.style.background = '#b3763a'
} else {
    msg.innerHTML = '<strong>Boa noite <br>' + `Agora são ${hora} : ${mint} min ${seg} seg</strong>`
    img.src = 'fotonoite.png'
    document.body.style.background = '#012046'
}

}

