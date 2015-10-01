function esconderElementos() {
    $(".start-menu").hide();
    $(".windows-window").hide();
    $(".windows-word").hide();
    $(".windows-edge").hide();
}

function relogio() {
    var dt = new Date();

    var dia = dt.getDate() + "";
    var mes = (dt.getMonth() + 1) + "";

    var horas = dt.getHours() + "";
    var minutos = dt.getMinutes() + "";

    if (dia.length == 1) {
        dia = "0" + dia;
    }

    if (mes.length == 1) {
        mes = "0" + mes;
    }

    if (horas.length == 1) {
        horas = "0" + horas;
    }

    if (minutos.length == 1) {
        minutos = "0" + minutos;
    }

    var data = dia + "/" + mes + "/" + dt.getFullYear();
    var hora = horas + ":" + minutos;

    $(".data").text(data);
    $(".hora").text(hora);
}

function exibirCarregamento() {
    setTimeout(function () {
        $("#loading-page").fadeOut("slow");
    }, 3000);
}

function toggleStartMenu() {
    $(".start-menu").toggle("fast");

    if ($("#windowsStartButton").hasClass("ativo")) {
        $("#windowsStartButton").removeClass("ativo");
    } else {
        $("#windowsStartButton").addClass("ativo");
    }
}

function carregarPagina(tipo, destino) {
    var caminhoPagina = "pages/" + destino + ".html";
    var nome = destino;
    
    if(tipo == "word")
    {
        nome += ".doc";
    }
    else
    {
        nome = "Início"
    }
    
    nome = nome.replace("_", " ");
        
    $(".windows-" + tipo + "-corpo").load(caminhoPagina);
    $(".windows-" + tipo + "-name").html("<b>" + nome + "</b>");
    $(".windows-" + tipo).fadeIn("fast");
}

function descarregarPagina(tipo) {
    $(".windows-" + tipo + "-corpo").empty();
    $(".windows-" + tipo).fadeOut("fast");
}