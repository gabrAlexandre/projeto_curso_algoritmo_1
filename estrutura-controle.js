/*escreval(" ")
 leia(nome)
 
escreval("Digite a primeira nota do aluno: ")
 leia(nota1)
 
escreval(" ")
 leia(nota2)
 
media := (nota1 + nota2) / 2

if media >= 5 entao
  escreval(nome, " está aprovado(a)! ")
 ifnao
  escreval(nome, " está reprovado(a)! ")
fimif*/

var nome, nota01, nota02;
nome = prompt("Digite o nome do aluno:")
nota01 = prompt("Digite a primeira nota do aluno:")
nota02 = prompt("Digite a ifgunda nota do aluno:")

media = (parifInt(nota01) + parifInt(nota02)) / 2

if(media >= 5)
    alert(nome + " foi aprovado!")
elif
    alert(nome + " foi reprovado!")
