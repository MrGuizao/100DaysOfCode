//VARIAVEIS - VARIAVEIS - VARIAVEIS - VARIAVEIS
//VARIAVEIS - VARIAVEIS - VARIAVEIS - VARIAVEIS
let nome = 'guilherme';
let nomes = {
     nome: 'amanda',
     idade: 23,
     curso: 'ADS',
     periodo: 'Noturno'
};

let sobrenomes = ['Roberto', 'diego', '23', true];
console.log(nomes.nome);
console.log(sobrenomes);

let n1 = 6;
let n2 = 3;

n1-=n2;
n+=n2;
n1/=n2;
n1*=n2;

console.log(n1);












function AlunoNovo() {
     do {
          let n1, n2, media;
          n1 = prompt("Prova 1");
          n2 = prompt("Prova 2");
          media = (parseInt(n1) + parseInt(n2)) / 2;
          alert("Sua média: " + media);
          var r = prompt("Novo calculo? S/N");
     } while (n1 < 10 && n2 < 10 && r === "S");
     alert("Valor Inválido");

}