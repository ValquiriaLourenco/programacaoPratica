let tabuleiro
let board
let aviso
let jogador
let linha
let coluna


function iniciar(){
 tabuleiro=new Array(3);
 board = document.getElementById('board')
 aviso = document.getElementById('aviso')
 jogador = 1

 for (let i =0; i<3; i++){
    tabuleiro[i]=new Array(3);
    for (let i =0; i<3; i++)
    for (let j=0; j<3; j++){
        tabuleiro[i][j]=0;
        exibir();
    }
    
 }
  
 console.table(tabuleiro)
 exibir()

}

function exibir(){
    let tabela ='<table cellpadding="10" border="1">';

    for( let i=0; i<3; i++){
         tabela += '<tr>';

         for(let j = 0; j<3; j++){

            switch(tabuleiro[i][j]){
                case -1:marcador ='X'; break;
                case 1:marcador ='O'; break;
                default: '_'
                
            }
            tabela += '<td>' + marcador + '</td>'

         }

         for( let j=0; j<3; j++){
            tabela += '<td>_</td>';
         }
          tabela += '</tr>';
        }
    
      tabela += '</table>';

      board.innerHTML= tabela
}

function jogar(){
    aviso.innerHTML = 'Vez do jogador: ' + (jogador%2+1)

    linha= document.getElementById('linha').value -1
    coluna= document.getElementById('coluna').value -1

    if(tabuleiro[linha][coluna] == 0){
        tabuleiro[linha][coluna] == numerojogador() == 1? 1: -1
    } else{
        aviso.innerHTML = 'Este campo já foi marcado!'
    }


  console.table(tabuleiro)
    jogador++
    exibir()
}

function checar(){

}

function numerojogador(){
    return jogador%2 + 1
}