function namae(nome1, nome2) {
     let result = nome1 + nome2;
     return result;

}
// let result = namae(18, 14);
console.log(namae(5, 4));
// console.log(result);

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
function Sexo() {
     let sexo = 'M';
     let retorna = (sexo === 'M') ? 'Masculino' : 'Feminino';
     console.log(retorna);

}
function ParaWhile(){
     for(let i = 0; i <= 10; i++){
          console.log(i);
     }
     
     let j = 0;
     while(j <= 10){
          console.log(j);
          j++;
     }
}
function Tempo(){
     console.log("Olar Stalker!");

}
setTimeout(Tempo, 2000);
setTimeout(() => {
     console.log("Teste2");
}, 2000);

