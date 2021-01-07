    var contador=0; 
       
    
    function direita () {
           
      
        if(contador <7) {

            contador++;
            document.getElementById("imagem").src = "./imagens/imagem-" + contador + ".jpg";
            document.getElementById("esquerda").style.display="inline"; 

        } else if (contador==7) { 

           document.getElementById("imagem").src = "./imagens/imagem-" + contador + ".jpg"; 
           var dr = document.getElementById ("direita");
           dr.style.display = "none";  
                              

        }
    }

    
    function esquerda () {
         

        if(contador > 0) {
        
        contador--;
        document.getElementById("imagem").src = "./imagens/imagem-" + contador + ".jpg";
        document.getElementById("direita").style.display="inline"; 

        }
        if (contador==0) {

        document.getElementById("imagem").src = "./imagens/imagem-" + contador + ".jpg";
        var de = document.getElementById ("esquerda");
        de.style.display="none"; 
       
        
        } 
}