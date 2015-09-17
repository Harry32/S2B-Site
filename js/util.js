function relogio() {
            var dt = new Date();
            
            var dia = dt.getDate() + "";
            var mes = (dt.getMonth() + 1) + "";
            
            var horas = dt.getHours() + "";
            var minutos = dt.getMinutes() + "";
            
            if(dia.length == 1)
            {
                dia = "0" + dia;
            }
            
            if(mes.length == 1)
            {
                mes = "0" + mes;
            }
            
            if(horas.length == 1)
            {
                horas = "0" + horas;
            }
            
            if(minutos.length == 1)
            {
                minutos = "0" + minutos;
            }
            
            var data = dia + "/" + mes + "/" + dt.getFullYear();
            var hora = horas + ":" + minutos;
            
            $(".data").text(data);
            $(".hora").text(hora);
}