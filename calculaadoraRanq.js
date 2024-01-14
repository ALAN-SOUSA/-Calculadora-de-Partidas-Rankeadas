let vitorias = 150
let derrotas = 50
let soma= vitorias - derrotas;


function resultado(){
    


    if(soma <= 10 ) {
    console.log("ferro")

    } else if (soma>=11 && soma<=20) {
        console.log("bronze")

    } else if (soma>=21 && soma<=50) {
        console.log("prata")

    } else if (soma>=51 && soma <= 80) {
        console.log("ouro")

    } else if (soma>=81 && soma <= 90) {
        console.log("diamante")

    } else if (soma>=91 && soma <= 100) {
        console.log("lendario")
                        
    } else if (soma>=101) {
        console.log("imortal")

    } else {
        console.log("nao encontrado")

    }
 





    






}


resultado();