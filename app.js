function VerificarResposta(){
 let respostaCerta
 respostaCerta = document.getElementById ("alternativacerta").checked

 if(respostaCerta == true){
    alert("Parabéns!!!\nVocê acertou.")
 }else{
    alert("Que pena, não foi dessa vez.")
 }
}


