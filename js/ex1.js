/*functionxxx(){

    corpo da função - comandos js
} */

// arrow functions: () => {corpo}


document.querySelector('#botao').addEventListener('Keydown', () =>{
    // neste momento o js vai pegar o nome digitado e armazenar em uma variavel de memória
    let nome;   // declaração da variavel de memória nome
    
    nome = document.getElementById('nome').value; //atribuindo o nome digitado para a variavel nome 
    let sobrenome=document.getElementById('sobrenome').value;

    // imprimir: o nome digitado 
    document.write('O nome digitado é  '+nome+ '  '+sobrenome)
})




/*criar um evento para escutar o botao */
document.querySelector('#botao').addEventListener('click', () =>{
// corpo da função 

let nome = document.getElementById('nome').value;
let sobrenome = document.getElementById('sobrenome').value;

// cubo rosa =  método -> vai fazer alguma ação
alert('O nome digitado é ' +nome+ ' ' +sobrenome)

}) 