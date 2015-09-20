function esconderElementos() {
    $(".start-menu").hide();
    $(".windows-window").hide();
    $(".windows-word").hide();
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

function toggleStartMenu() {
    $(".start-menu").toggle("fast");

    if ($("#windowsStartButton").hasClass("ativo")) {
        $("#windowsStartButton").removeClass("ativo");
    } else {
        $("#windowsStartButton").addClass("ativo");
    }
}

function carregarPagina(destino) {
    var caminhoPagina = "pages/" + destino + ".html";
    
    $(".windows-window-corpo").load(caminhoPagina);
    $(".windows-window-name").text(destino + ".doc");
    $(".windows-window").fadeIn("fast");
}

function descarregarPagina() {
    $(".windows-window-corpo").empty();
    $(".windows-window").fadeOut("fast");
}