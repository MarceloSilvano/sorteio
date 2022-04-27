var sorteado = Math.trunc(Math.random()*10+1); //sorteia um número de 1 a 10
var digitado = []; //armazena os valores que foram digitados
var tentativas = 0; //armazena o número de tentativas
var acerto=false; //verifica se o número digitado é diferente (false) ou igual(true) ao número sorteado
var num = 0; //armazena o número digitado
var consoleNum = 1; //armazena o número da mensagem no console. Começa com o valor "1" porque por padrão ele imprime o número que foi sorteado

console.log(consoleNum+'. O número sorteado foi: '+sorteado); //Imprime o número sorteado

while(acerto==false){ //enquanto o número digitado for diferente do número sorteado ele roda todos os códigos abaixo
    num = prompt('Digite um número de 1 a 10.'); //atribui o número digitado a variavel "num"
    var msg=false //controla para não aparecer as mensagens de número errado e número inválido ao mesmo tempo
    
    for(let indice=0; indice<=digitado.length;indice++){ //percorre a matriz "digitado" até o seu último número ou o seu tamanho (digitado.length)
        if (digitado[indice]==num){ //verifica se "num" está contido na matriz digitado
            alert("O número "+num+" já foi digitado. Tente novamente"); //alerta que o número já foi digitado
            consoleNum = consoleNum+1; //add 1 a váriavel que númera o console
            console.log(consoleNum+'. Você digitou um número repetido: '+num); //imprime a mensagem no console
            msg=true;
        }
    }

    if(num<1|num>20){ //faz a tratativa se o número digitado é menor que 1 e maior que 10
        alert('"'+num+'" não é um número válido. Tentativas: '+tentativas);
        consoleNum = consoleNum+1;//add 1 a váriavel que númera o console
        console.log(consoleNum+'. Você digitou um número inválido: '+num);//imprime a mensagem no console
    }

    else if (isNaN(num)){ //faz a trativa se o valor digitado não foi um número
        alert('"'+num+'" não é um número. Tentativas: '+tentativas);
        consoleNum = consoleNum+1;//add 1 a váriavel que númera o console
        console.log(consoleNum+'. Você digitou um número inválido: '+num);//imprime a mensagem no console
    }
    
    else if (num==sorteado){ //verifica se o numero digitado foi igual ao sorteado
        tentativas=tentativas+1 //add 1 a "tentativas"
        alert('Parabéns! Você acertou em '+tentativas+' tentativas. Seu histório foi gravado no console.'); //mensagem de parabéns
        consoleNum = consoleNum+1;//add 1 a váriavel que númera o console
        console.log(consoleNum+'. Você digitou o número correto: '+num);//imprime a mensagem no console
        consoleNum = consoleNum+1;//add 1 a váriavel que númera o console
        console.log(consoleNum+'. Você acertou em '+tentativas+' tentativas.');//imprime a mensagem no console
        acerto=true //atribui o valor "true" em "acerto" para finalizar a execução do programa
    }

    else if(msg==false){ //verifica se a váriavel de controle "msg" é falsa, para que não apareceça duas mensagens seguidas
        tentativas=tentativas+1; //add 1 a "tentativas"
        digitado.push(num); //add o número que foi digitado("num") na matriz "digitado"
        consoleNum = consoleNum+1;//add 1 a váriavel que númera o console
        console.log(consoleNum+'. Você digitou o número errado: '+num);//imprime a mensagem no console
        alert('Tente novamente! Tentativas: '+tentativas); //sinaliza que o número digitado já foi escolhido
    }
 }