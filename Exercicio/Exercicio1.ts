namespace exercicio1{
    //Crie um array com 5 números 
    let numeros:number[]=[1,10,20,30,40];
    let soma: number=0;//soma
    //Em seguida, use um loop for para iterar sobre o array
    for(let i=0; i<numeros.length;i++){
        //soma
        soma=soma+numeros[i];
        //soma+=numeros[i]

    }

    //exibir os números
    console.log('A soma dos valores do vetor é: ${soma}')
}
