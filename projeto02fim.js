console.clear()
console.log()
const prompt = require('prompt-sync')()


let jogarNovamente = "sim"

while (jogarNovamente == "sim" ){
    console.clear()
    const nome = prompt('Insira o seu nome ou apelido: ')
console.log (`Bem vindo(a), ${nome}`)
console.log()


const jogo = prompt('ESTE É O JO KEN PÔ!! Será que você consegue vencer o computador e se tornar o mestre supremo?? Você só precisa escolher entra pedra, papel ou tesoura. Que vença o melhor!!                                                                                                             PRESSIONE "ENTER" PARA CONTINUAR.                                                                        ') 

console.clear()

let lista = ['pedra','papel','tesoura']
let computador = lista[Math.floor(Math.random() * lista.length)]

let fichas = +prompt("Quantas fichas você tem para jogar? ")
console.clear()

let j = 0
let pc = 0
let empate = 0

for (let fichasRestantes = fichas ; fichasRestantes >= 1 ; fichasRestantes--){
    console.log(`Restam ${fichasRestantes} ficha(s)`)

    console.log()

    
let jogada = prompt('Faça a sua jogada !!')



console.clear()       
console.log()


while (jogada != lista[0] && jogada!=lista[1] && jogada!=lista[2]){
    console.log()
    console.log("INVÁLIDO")
    console.log(`Você escolheu ${jogada}.`)
    console.log("Escolha pedra, papel ou tesoura !!")
    jogada = prompt('Faça a sua jogada !!')
}

console.clear()
console.log(`Você escolheu ${jogada}!!!`)
console.log(`O computador escolheu ${computador}!!!`)
console.log()
 
   



if (jogada == 'pedra') {

            if (computador == 'pedra') {
                console.log('Empate')
                empate ++;
            } else if (computador == 'papel') {
                console.log('Computador venceu!!')
                pc++;
            } else if (computador == 'tesoura'){
                console.log("Você venceu!!!")
                j++;
            }
console.log()
            console.log(`Computador = ${pc} ponto(s).
                ${nome} = ${j} ponto(s).
                ${empate} empate(s).`)

        } else if (jogada == 'papel') {

            if (computador == 'pedra') {
                console.log('Você venceu!!')
                j++;
            } else if (computador == 'papel') {
                console.log('Empate')
                empate++;
            } else if (computador == 'tesoura') {
                console.log('Computador venceu!!')
                pc++;
            }
            console.log()

            console.log(`Computador = ${pc} ponto(s).
                ${nome} = ${j} ponto(s).
                ${empate} empate(s).`)

        } else if (jogada == 'tesoura') {

            if (computador == 'pedra') {
                console.log('Computador venceu!!')
                pc++;
            } else if (computador == 'papel') {
                console.log('Você venceu!!')
                j++;
            } else if (computador == 'tesoura') {
                console.log('Empate')
                empate++;
            }
console.log()
            
            console.log(`Computador = ${pc} ponto(s).
                ${nome} = ${j} ponto(s).
                ${empate} empate(s).`)

            

        } 


    
    
            }
            console.log()
            if ( pc >> j){
                console.log("O computador foi o vencedor supremo!!!")
                console.log()
                
            }
            
            else if (j >> pc){
                console.log(`${nome} foi o(a) vencedor(a) supremo(a)!!! `)
                console.log()
                
            }
            
            else {
            console.log()
            console.log(`Houve um grande empate supremo entre o computador e ${nome}!!!`)
                   }

            jogarNovamente = prompt('Deseja mais fichas para jogar novamente?Responda "sim" ou "não".')

    

}
console.clear()
console.log()
console.log()
console.log()
console.log()
console.log('""""" Game Over """"')
console.log()
console.log()
console.log()
console.log()










