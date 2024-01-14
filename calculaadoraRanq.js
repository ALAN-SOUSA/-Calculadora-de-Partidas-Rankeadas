

function resultado(vitoria, derrotas ){
    
   const saldoVitorias = vitoria - derrotas;
    
    

    if(vitoria <= 10 ) {
        nivel = "ferro"

    } else if (vitoria >=11 && vitoria <=20) {
        nivel = "bronze"

    } else if (vitoria >=21 && vitoria <=50) {
        nivel = "prata"

    } else if (vitoria >=51 && vitoria <= 80) {
        nivel = "ouro"

    } else if (vitoria >=81 && vitoria <= 90) {
        nivel = "diamante"

    } else if (vitoria >=91 && vitoria <= 100) {
        nivel = "lendario"
                        
    } else if (vitoria >=101) {
        nivel = "imortal"

    } else {
        console.log("nao encontrado")

    }
<<<<<<< HEAD
    console.log(`O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}`);

}


resultado(70,20);
=======
 
}
resultado();
>>>>>>> 68513d4187e1d4b247241806dd5454a380d85a73
