//var idade = 15
//if (idade < 16) {
//    console.log('Não vota')
//} else {
//    if (idade >= 16 && idade < 18) {
//        console.log('Voto Opicional')
//    } else {
//        console.log('Voto Obrigatório')
//    }
//}

var idade = 18
console.log(`Você tem ${idade} anos ` )
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opicional')
} else {
    console.log('Voto obrigatório')
}