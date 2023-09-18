//EXERCICIOS PARA FIXAÇÃO 10-08-2023

//EXERCICIO 3


//FAÇA UM PROGRAMA QUE RECEBA TRÊS NOTAS, CALCULE E MOSTRE A MÉDIA ARITMÉTIA ENTRE ELAS.


namespace exercicio3 {
    let nota1: number, nota2: number, nota3: number
    nota1=8;
    nota2=3;
    nota3=0;

    let peso1:number, peso2:number, peso3:number
    peso1=3;
    peso2=5;
    peso3=2;



    if (nota=0){
        situacao=false
    } else{
        situacao=true
    }*/
    let situacao: boolean = nota3 = 0 ? false: true;


    if (situacao){
        let media: number=(nota1 * peso1 + nota2 * peso2 + nota3 * peso3 )/(peso1+peso2+peso3)
        console.log(`A média final é: ${media}`);
    }else {
        console.log(`Aluno  não entregou o trabalho e sua média foi ${media}`)
    }
}