 //Avaliacao 3 unidade
// Ramon Andrade Santana

//Questao 1

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// o laço "for" por ser bem simples!



//Questao 2


 let soma = 0;


for (let i = 1; i <= 50; i++) {
    soma += i;  
}

console.log ("A soma dos números de 1 a 50 é: " + soma);


//Questao 3

let numero = parseInt(prompt("Digite um número inteiro positivo:"));


if (numero > 0) {
    console.log("Números pares de 0 até " + numero + ":");
    
 
    for (let i = 0; i <= numero; i++) {
        
        if (i % 2 === 0) {
            console.log(i);
        }
    }
} else {
    console.log("Por favor, insira um número inteiro positivo.");
}


//Questao 4
 
let soma = 0;


for (let i = 1; i <= 5; i++) {
    
    let numero = parseInt(prompt(`Digite o ${i}º número inteiro:`));
    
        soma += numero;
}

let media = soma / 5;

console.log("A média dos números é: " + media);


//Questao 5







//Questao 6 

let soma = 0;
let contador = 0;
let numero;


do {
    numero = parseInt(prompt("Digite um número inteiro (digite 0 para sair):"));
    
    if (numero !== 0) {  
        soma += numero;  
        contador++;       
    }
} while (numero !== 0);  

console.log("Você digitou " + contador + " números.");
console.log("A soma total dos números digitados é: " + soma);

// nesse codigo tive um problema em executa-lo, pois nao saía da barra de pesquisa


//Questao 7

let termo1 = 0;  
let termo2 = 1;  
let proximoTermo; 

console.log("Sequência de Fibonacci até o 15º termo:");

console.log(termo1);
console.log(termo2);

for (let i = 3; i <= 15; i++) {
    proximoTermo = termo1 + termo2;  
    console.log(proximoTermo);        
    
    termo1 = termo2;                 
    termo2 = proximoTermo;           
}


//Questao 8

 //*Nao consegui professor!*



 //Questao 9 

let quantidade = parseInt(prompt("Quantos números você deseja inserir?"));

if (quantidade <= 0) {
    console.log("Por favor, insira um número válido maior que 0.");
} else {
    let maiorValor = -Infinity; 
    let menorValor = Infinity;  

    for (let i = 1; i <= quantidade; i++) {
        let numero = parseInt(prompt(`Digite o ${i}º número:`)); /

        
        if (numero > maiorValor) {
            maiorValor = numero;
        }

    
        if (numero < menorValor) {
            menorValor = numero;
        }
    }

    console.log("O maior valor inserido foi: " + maiorValor);
    console.log("O menor valor inserido foi: " + menorValor);
}



//Questao 10

let n = parseInt(prompt("Digite o número de linhas do triângulo:"));


for (let i = 1; i <= n; i++) {
    let linha = '';

    for (let j = 1; j <= i; j++) {
        linha += '*';
    }

    console.log(linha);
}