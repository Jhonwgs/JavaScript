let nome = 'Jhon';
let nota1 = 8.5;
let nota2 = 9.4;
let cor1 = 'Vermelho';
let cor2= 'Verde';
let media = 0;
let temp = '';
function calcularMedia(name,n1,n2,med){
    nome = name;
    nota1 = n1;
    nota2 = n2;
    med = nota1+nota2;
    media=med;
};
console.log('Aluno:',nome, 'Prova 1:',nota1,'Prova 2:', nota2, 'Média:', media);
console.log(cor1,cor2);
temp=cor2
cor2 = cor1;
cor1=temp;
console.log(cor1,cor2);
