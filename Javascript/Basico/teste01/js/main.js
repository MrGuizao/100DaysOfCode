function mostraTudo(){
     let fundo = document.querySelector('body');
     fundo.setAttribute('style', 'background-color: #fff555');
     let localElement = document.querySelector('#lista');
     let criaElement = document.createElement('p');
     criaElement.textContent = "Teste";
     localElement.appendChild(criaElement);
     criaElement.setAttribute('style', 'color: blue; font-size: 2rem; text-align: center; padding: 0px; margin: 0;');
     
}
function save(){
     localStorage.setItem('list', mostraTudo());
     mostraTudo();
}