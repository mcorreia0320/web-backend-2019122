function nota_final (nota_teorica, nota_pratica) {
    var result = nota_teorica * 0.6 + nota_pratica * 0.4;
    if (result >= 9.5)
        console.log("Aprovado")
    else
        console.log("Reprovado")
}

nota_final(10, 6)

function month (number) {
    if (number == 1)
        console.log("JANIERO")
    else if (number == 2)
        console.log("FEVEREIRO")
    else if (number == 3)
        console.log("MARÇO")
    else if (number == 4)
        console.log("ABRIL")
    else if (number == 5)
        console.log("MAIO")
    else if (number == 6)
        console.log("JUNHO")
    else if (number == 7)
        console.log("JULHO")
    else if (number == 8)
        console.log("AGOSTO")
    else if (number == 9)
        console.log("SETEMBRO")
    else if (number == 10)
        console.log("OUTUBRO")
    else if (number == 11)
        console.log("NOVEMBRO")
    else if (number == 12)
        console.log("DEZEMBRO")
}

month(6)

function month2 (number_month) {
    var mes = [null,"JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]
    console.log(mes[number_month])
}

month2(4)


function operacoes (valor1, valor2, operador) {
    
    if (operador == '+')
        console.log(valor1 + valor2)
    else if (operador == '-')
        console.log(valor1 - valor2)
    else if (operador == '*')
        console.log(valor1 * valor2)
    else if (operador == '/')
        console.log(valor1 / valor2)
    else if (operador == '^')
        console.log(valor1 ** valor2)
}

operacoes(3, 5, '/')

function multiplos_de_5() {
    var indice = 1;
    var multiplo = 0
    while (multiplo < 20) {
        multiplo = indice * 5
        indice = indice + 1
        if (multiplo < 20) {
            console.log(multiplo)
        }
    }
}

multiplos_de_5()

function somatorio_100() {
    var somatorio = 0;
    var indice = 1
    while (indice <= 100) {
        somatorio += indice;
        indice += 1;
    }
    console.log(somatorio)
}

somatorio_100()

function fatorial(n) {
    var result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    console.log(result);
}

fatorial(4)

function calculos(array) {
    var min = array[0];
    var max = array[0];
    var somatorio = 0;
    for (let i = 0; i < array.length; i++) {
        
        somatorio += array[i];
       
        if (min > array[i]) {
            min = array[i];
        }
        else if (max < array[i]) {
            max = array[i];
        }
    }
    console.log('Minimo:', min);
    console.log('Maximo:', max);
    console.log('Media:', somatorio / array.length);
}

calculos([45,12,23,73,10,56,4,97,34,51])

