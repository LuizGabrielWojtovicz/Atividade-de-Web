//ativ01

function atv01()
{
    var num1 = Number(window.prompt("Digite o primeiro valor"));
    var num2 = Number(window.prompt("Digite o segundo valor"));

    if(num1 > num2)
    {
        document.getElementById("resultado")
        .innerHTML = num2 + ", " + num1;
    }
    else if(num1 < num2)
    {
        document.getElementById("resultado")
        .innerHTML = num1 + ", " + num2;
    }
    else if(num1 == num2)
    {
        document.getElementById("resultado")
        .innerHTML = num1 + ", " + num2;
    }
}


//ativ02

function atv02()
{
    var genero = window.prompt("Digite o seu genero (m/f)");
    var altura = Number(window.prompt("Digite a sua altura (00.0)"));

    if(genero == "m")
    {
        var res = (72.7 * altura) - 58;

        document.getElementById("resultado")
        .innerHTML = "Peso ideal = " + res;
    }
    else if(genero == "f")
    {

        var res = (62.1 * altura) - 44.7;

        document.getElementById("resultado")
        .innerHTML = "Peso ideal = " + res;
    }
    else if(genero != ("m" | "f"))
    {
        document.getElementById("resultado")
        .innerHTML = "Erro";
    }
}

//ativ03

function atv03()
{
    var num1 = parseInt(window.prompt("Digite o primeiro valor:"));
    var num2 = parseInt(window.prompt("Digite o segundo valor:"));
    var num3 = parseInt(window.prompt("Digite o terceiro valor:"));

    if(num1 < (num2 && num3))
    {
        document.getElementById("resultado")
        .innerHTML = "O menor valor é: " + num1;
    }
    if(num2 < (num1 && num3))
    {
        document.getElementById("resultado")
        .innerHTML = "O menor valor é: " + num2;
    }
    if(num3 < (num1 && num2))
    {
        document.getElementById("resultado")
        .innerHTML = "O menor valor é: " + num3;
    }
}

//ativ04

function atv04()
{
    var num = parseInt(window.prompt("Digite um valor:"));

    if(num >= 0) 
    {
        var txt = (num % 1 == 0)? "par" : "impar";
        document.getElementById("resultado")
        .innerHTML = txt;
    }
    else if(num < 0)
    {
        num *= (-1);
        document.getElementById("resultado")
        .innerHTML = num;
    }
}

//ativ05

function atv05()
{
    var num = parseInt(window.prompt("Digite um numero:"));

    if((num % 2 == 0) && (num % 3 == 0))
    {
        document.getElementById("resultado")
        .innerHTML = num + " é divisivel por 2 e 3";
    }
    else if((num % 2 == 0) && (num % 3 > 0))
    {
        document.getElementById("resultado")
        .innerHTML = num + " é divisivel por 2"; 
    }
    else if((num % 2 > 0) && (num % 3 == 0))
    {
        document.getElementById("resultado")
        .innerHTML = num + " é divisivel por 3"; 
    }
    else if((num % 2 > 0) && (num % 3 > 0))
    {
        document.getElementById("resultado")
        .innerHTML = num + " não é divisivel por 2 ou 3";
    }
}

//ativ06

function atv06()
{
    var num = parseInt(window.prompt("Digite um numero:"));

    if((num % 2 == 0) && (num % 7 == 0))
    {
        document.getElementById("resultado")
        .innerHTML = num + " é divisivel por 2 e 7";
    }
    else if((num % 2 == 0) && (num % 7 > 0))
    {
        document.getElementById("resultado")
        .innerHTML = num + " é divisivel por 2"; 
    }
    else if((num % 2 > 0) && (num % 7 == 0))
    {
        document.getElementById("resultado")
        .innerHTML = num + " é divisivel por 7"; 
    }
    else if((num % 2 > 0) && (num % 7 > 0))
    {
        document.getElementById("resultado")
        .innerHTML = num + " não é divisivel por 2 ou 7";
    }
}

//ativ07

function atv07()
{
    var semana;
    var dia;

    do
    {
        dia = Number(window.prompt("Digite um numero entre 1 e 7: "));
    
    switch(dia)
    {
        case 1:
            semana = "domingo";
            break;
        case 2: 
            semana = "segunda-feira";
            break;
        case 3: 
            semana = "terça-feira";
            break;
        case 4:
            semana = "quarta-feira";
            break;
        case 5:
            semana = "quinta-feira";
            break;
        case 6:
            semana = "sexta-feira";
            break;
        case 7:
            semana = "sábado"; 
            break; 
        default:
            semana = null;
    }
    }while(semana == null);

    document.getElementById("resultado")
    .innerHTML = "Dia da semana é " + semana;

    }

//ativ08

function atv08()
{
    var soma = 0;
    var somaX = 0;
    var i = 0;

    while(i <= 20)
    {
        if(i % 2 == 0) soma += i;

        if(i % 2 == 0 && i < 20) somaX += i;

        i++;
    }

    document.getElementById("resultado")
    .innerHTML = "A soma dos número pares de 1 <= 20 é: " + soma + "<br>A soma dos número pares de 1 < 20 é: " + somaX;
}

//ativ09

function atv09()
{
    var tabuada = Number(window.prompt("Digite um número: "));

    for(i = 1; i <= 10; i++)
    {
        document.getElementById("resultado")
        .innerHTML += tabuada + "x" + i + "=" + (tabuada * i);

        (i < 10)
        ? 
        document.getElementById("resultado")
        .innerHTML += ", "
        :
        document.getElementById("resultado")
        .innerHTML += ".";
    }
}

//ativ10

function atv10()
{
    var num = Number(window.prompt("Digite um número"));
    var fatorial = 1;

    if(num >= 0)
    {
        while(num > 0)
        {
            fatorial *= num;
            num -= 1;
        }
        document.getElementById("resultado")
        .innerHTML = "Fatorial = " + fatorial;
    }
    else if(num == 0)
    {
        document.getElementById("resultado")
        .innerHTML = "Fatorial = 1";
    }
    else
    {
        document.getElementById("resultado")
        .innerHTML = "Erro";
    }
}
