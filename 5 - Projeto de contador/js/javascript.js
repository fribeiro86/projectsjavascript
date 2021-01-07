
    var contar;
    var contador;
    var btn_aumenta;
    var btn_diminui;



    function iniciar() {

        btn_aumenta = document.getElementById("aumenta");
        btn_diminui = document.getElementById("diminui");
        contador = document.getElementById("contador");
               
        contar = localStorage.getItem("Contagem");
        contador.innerHTML=  localStorage.getItem("Contagem");
    }


    function aumenta() {

        contar++;
        contador.innerHTML = contar;

        var a = contar.toString();

        localStorage.Contagem = a;



    }

    function diminui() {

        if (contar > 0) {
            contar--;
            contador.innerHTML = contar;

            var a = contar.toString();

            localStorage.Contagem = a;

        }


    }

    function zerar() {

        localStorage.removeItem("Contagem");
        contador.innerHTML = "0";
        contar = 0;

    }

        window.addEventListener("load", iniciar);


