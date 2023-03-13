var agora = new Date()
var diaSem = agora.getDay()
var hora = agora.getHours()
var min = agora.getMinutes()
var seg = agora.getSeconds()
var mes = agora.getMonth()
var ano = agora.getFullYear()
//  Domingo = 0
//  Segunda = 1
//  Terça = 2
//  Quarta = 3
//  Quinta = 4
//  Sexta = 5
//  Sábado = 6

console.log(ano)
//console.log(mes)
console.log(`Agora são exatamente ${hora} horas e ${min} minutos e ${seg} segundos`)

switch (mes) {
    case 0:
        console.log('Janeiro')
        break
    case 1:
        console.log('Fevereiro')
        break
    case 2:
        console.log('Março')
        break
    case 3:
        console.log('Abril')
        break
    case 4:
        console.log('Maio')
        break
    case 5:
        console.log('Junho')
        break
    case 6:
        console.log('Julho')
        break
    case 7:
        console.log('Agosto')
        break
    case 8:
        console.log('Setembro')
        break
    case 9:
        console.log('Outubro')
        break
    case 10:
        console.log('Novembro')
        break
    case 11:
        console.log('Dezembro')
        break
    default:
        console.log('Erro, Mês inválido!')
        break
}

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break    
    default:
        console.log('Erro! Dia inválido')
        break
}

