//EXERCICIOS PARA FIXAÇÃO 10-08-2023

//EXERCICIO 2 


//FAÇA UM PROGRAMA QUE RECEBA TRÊS NOTAS, CALCULE E MOSTRE A MÉDIA ARITMÉTIA ENTRE ELAS.


namespace exercicio2 {
    let nota1: number, nota2: number, nota3:number;

    nota1=8, nota2=4, nota3=9;
    const media: number =(nota1+nota2+nota3)/3

    if(media > 7){
        console.log(`Aluno aprovado com média de: ${media}`)
    } else if (media < 3){
        console.log(`Aluno está em recuperação com média de: ${media}`)
    }else {
        console.log(`Aluno está em recuperação com médiade: ${media}`)
    }
}

