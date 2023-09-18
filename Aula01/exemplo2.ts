namespace exemplo2 {
    //3 tipos de váriaveis - VAR, LET, CONST 
    let numero: number;
    numero = 5;

    let resultado: number;
    resultado = numero + numero;
    // Essa é a forma comumde se escrever e é necessário ficar cocatenando as váriaveis e os textos com "+"
    console.log("a soma entre "+ numero + "com " + numero + "é igual a: " + resultado);
    resultado = numero - 4;

    // Ao se escrever dessa forma é necessário utilizar crase `    ` e não é necessário utilizar "+" ao invés disso quando se puxar uma váriavel, constante etc utiliza-se ${    }
    console.log(`a subtração entre ${numero} com 4 é igual a: ${resultado}`);

    resultado = numero * numero;
    console.log(`a multiplicação entre ${numero} com ${numero} é igual a: ${resultado}`);

    resultado = numero / numero;
   console.log(`a divisão entre ${numero} com ${numero} é igual a: ${resultado}`);

   }