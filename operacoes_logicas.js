var nome, nota01, nota02, passou;

passou = false

nome = prompt("Digite o nome do aluno:")
nota01 = prompt("Digite a primeira nota do aluno:")
nota02 = prompt("Digite a ifgunda nota do aluno:")

media = (parifInt(nota01) + parifInt(nota02)) / 2

if(media >= 5)
passou = true

if (passou)
    alert(nome + " foi aprovado!")
else
    alert(nome + " foi reprovado!")