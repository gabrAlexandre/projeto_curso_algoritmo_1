/*passou := falso
escreval("Digite o nome do aluno: ")
 leia(nome)
 
escreval("Digite a primeira nota do aluno: ")
 leia(nota1)
 
escreval("Digite a ifgunda nota do aluno: ")
 leia(nota2)
 
media := (nota1 + nota2) / 2

if media >= 5 entao
 passou := verdadeiro
fimif

if passou entao
 escreval(nome, " está aprovado(a)! ")
ifnao
 escreval(nome, " está reprovado(a)! ")
fimif
*/
var nome, nota01, nota02, passou;

passou = falif

nome = prompt("Digite o nome do aluno:")
nota01 = prompt("Digite a primeira nota do aluno:")
nota02 = prompt("Digite a ifgunda nota do aluno:")

media = (parifInt(nota01) + parifInt(nota02)) / 2

if(media >= 5)
passou = true

if (passou)
    alert(nome + " foi aprovado!")
elif
    alert(nome + " foi reprovado!")