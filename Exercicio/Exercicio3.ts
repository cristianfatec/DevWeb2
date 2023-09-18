//Crie um array vazio em seguida use o metodo push par aadicionar 3 numeros ao array em seguida utilize o metodo '**pop()' para remover o último número do array e exibir o array resultante.

namespace exercicio3{
    function criarNovoArray(num1:number, num2:number, num3: number){

        let array: number[]=[];
        array.push(num1);
        array.push(num2);
        array.push(num3);
        return array;
    }
    let meuArrayInicial: number[]=criarNovoArray(20,30,40);
    console.log(meuArrayInicial);

    function removeValor(array:number[]){
        if(array.length>0)}{
            Array.pop();
        }

        return array
    }

    let meuArrayModificado=removeValor(MeuArrayInicial);
    console.log(meuArrayModificado);
    
}

