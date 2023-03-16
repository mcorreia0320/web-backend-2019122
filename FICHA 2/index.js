function calcular_imc(peso, altura) {
    var calculo = peso / (altura ** 2);
    
    if (calculo < 18.5) {
        console.log('IMC=',calculo,'----> Abaixo do peso')
    }
        
    else if (calculo > 18.5 && calculo < 25) {
        console.log('IMC=',calculo,'----> Peso normal')
    }
        
    else if (calculo > 25 && calculo < 30) {
        console.log('IMC=',calculo,'----> Acima do peso')
    }
        
    else if (calculo > 30) {
        console.log('IMC=',calculo,'----> Obeso')
    }
}

calcular_imc(40, 1.55)

function inversa(texto) {
    var splittedStr = texto.split(" ");
    var reversedTexto = "";
    for (let i = 0; i < splittedStr.length; i++) {
        for (let j = splittedStr[i].length -1; j >= 0; j--) {
            reversedTexto += splittedStr[i][j];
        }
        reversedTexto += " ";
    }
    return reversedTexto;
}
console.log(inversa("Hoje e Domingo"))

function contarVogais(texto) {
    var count = 0;

    for (let i = 0; i < texto.length; i++) {
        const element = texto[i];
        
        if (texto[i] == 'a' || texto[i] == 'e' || texto[i] == 'i' || texto[i] == 'o' || texto[i] == 'u') {
            count += 1;
        }
    }
    return console.log(count)
}

contarVogais('Hello World')

function contarLetra(texto, letra) {
    var count = 0;

    texto = texto.toLowerCase()
    
    for (let i = 0; i < texto.length; i++) {
        const element = texto[i];

        if (texto[i] == letra) {
            count += 1;
        }
    }
    return console.log(count)
}

contarLetra('Hello World', 'l')

function tempoTrabalho(hora_entrada, minuto_entrada, segundo_entrada, hora_saida, minuto_saida, segundo_saida) {
    
    var segundos_trabalhados = segundo_entrada - segundo_saida;
    
    segundos_trabalhados = Math.abs(segundos_trabalhados);

    var minutos_trabalhados = minuto_entrada - minuto_saida;

    minutos_trabalhados = Math.abs(minutos_trabalhados);

    var horas_trabalhadas = hora_entrada - hora_saida;

    horas_trabalhadas = Math.abs(horas_trabalhadas)

    return console.log('O funcionario trabalho durante:', horas_trabalhadas,':',minutos_trabalhados,':',segundos_trabalhados)
}

tempoTrabalho(08,30,00,20,45,00)

function tempoTrabalho_bem_feito(hora_entrada, minuto_entrada, segundo_entrada, hora_saida, minuto_saida, segundo_saida) {
    
    var inicio_em_segundos = 3600 * hora_entrada + minuto_entrada * 60 + segundo_entrada;

    var saida_em_segundos = 3600 * hora_saida + minuto_saida * 60 + segundo_saida;

    var total_trabalhado = saida_em_segundos - inicio_em_segundos;

    var hora = total_trabalhado / 3600;
    hora = Math.round(hora)
    var sobrante1 = total_trabalhado % 3600;

    var minuto = sobrante1 / 60;
    minuto = Math.round(minuto)
    var segundos = sobrante1 % 60;
    segundos = Math.round(segundos)


    return console.log('O funcionario trabalho durante:', hora,':',minuto,':',segundos)
}

tempoTrabalho_bem_feito(08, 00, 00, 09, 00, 05)

function retangulo(altura, largura) {
    console.log('')
    console.log('Desenha rectangulos')
    console.log('Largura:', largura)
    console.log('Altura', altura)
    console.log('')
    var linha = '';

    for (let j = 0; j <= altura; j++) {
        linha = '';
        for (let i = 0; i <= largura; i++) {
            linha += '*';
        }
        console.log(linha)
    }
}

retangulo(10, 20)

function triangulo(altura) {
    console.log('')
    console.log('Desenha Triangulos')
    console.log('Altura:', altura)
    console.log('')
    var linha = '';

    for (let j = 0; j <= altura; j++) {
        linha += '*'
        console.log(linha)
    }
    console.log('')
}

triangulo(10)

function caixa(lado) {
    var box = '';
    for (let i = 0; i < lado; i++) {
        for (let j = 0; j < lado; j++) {
            if (i == 0 || i == lado - 1 || j == 0 || j == lado - 1) {
                box += "*"
            } else {
                box += " "
            }
        }
        box += "\n"
    }
    return console.log(box)
}

caixa(10)

function notas() {
    var student1 = { name: "Roberto", Grade: 13, number: "2027722" };
    var student2 = { name: "Saul", Grade: 15, number: "2027723" };
    var student3 = { name: "Jacky", Grade: 20, number: "2027724" };
    var student4 = { name: "Miguel", Grade: 05, number: "2027725" };
    var student5 = { name: "Kevin", Grade: 08, number: "2027729" };
    var student6 = { name: "Roberto Moniz", Grade: 18, number: "2027732" };
    var student7 = { name: "Cristina", Grade: 04, number: "2027743" };
    var student8 = { name: "Henrique", Grade: 12, number: "2027741" };
    

    var student_list = [];

    student_list.push(student1);
    student_list.push(student2);
    student_list.push(student3);
    student_list.push(student4);
    student_list.push(student5);
    student_list.push(student6);
    student_list.push(student7);
    student_list.push(student8);

    for (let i = 0; i < student_list.length; i++) {
        const p = student_list[i];

        var c = p.name;
        console.log("\n" + c + ", " + p.number + ", " + p.Grade)
    }

    var melhor_nota = 0;
    var numero_do_aluno_melhor_nota;
   
    for (let j = 0; j < student_list.length; j++) {
        var aluno_nota = student_list[j].Grade;
        var aluno_number = student_list[j].number


        if (aluno_nota > melhor_nota) {
            melhor_nota = aluno_nota;
            numero_do_aluno_melhor_nota = aluno_number;
        }
    }

    console.log("\n O aluno com o numero", numero_do_aluno_melhor_nota, "teve a melhor nota com um valor de", melhor_nota);

    var pior_nota = 20;
    var numero_do_aluno_pior_nota;

    for (let a = 0; a < student_list.length; a++) {
        var aluno_nota = student_list[a].Grade;
        var aluno_number = student_list[a].number;

        if (aluno_nota < pior_nota) {
            pior_nota = aluno_nota;
            numero_do_aluno_pior_nota = aluno_number;
        }
    }

    console.log("\n O aluno com o numero", numero_do_aluno_pior_nota, "teve a pior nota com um valor de", pior_nota);

    var media_notas = 0;
    var aluno_proximo_media;

    for (let b = 0; b < student_list.length; b++) {
        var notas = student_list[b].Grade;

        media_notas += notas;
        
        
    }
    media_notas = media_notas / student_list.length
    
    function closeToAverage(student_list) {
        var media = media_notas;
        var min = media;

        var student = student_list[0];
        for (let c = 0; c < student_list.length; c++) {
            var diff = Math.abs(media - student_list[c].Grade);
            if (diff < min) {
                min = diff;
                student = student_list[c];
            }  
        }
        return console.log("\n O aluno com o numero",student.number,"teve a nota mais proxima á media de valor", media_notas, "com una nota de", student.Grade)
    }
   
    closeToAverage(student_list)

    numero_de_notas_negativas = 0;
    numero_de_notas_positivas = 0;
    
    for (let d = 0; d < student_list.length; d++) {
        var nota = student_list[d].Grade;

        if (nota < 9.5) {
            numero_de_notas_negativas += 1;
        }
        else {
            numero_de_notas_positivas += 1;
        } 
    }
    console.log ("\n Quantidade de alunos reprovados:",numero_de_notas_negativas, "\n Quantidade de alunos aprovados:",numero_de_notas_positivas, "\n")
}

notas()
