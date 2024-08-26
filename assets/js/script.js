$(document).ready(function(){
    $(".paginaObjetivo").click(function(){
        var ventanita= $(this).attr("id"); //guardar en variable la obtencion del id 
        var seleccion = $("#detalles" + ventanita);
        
        seleccion.toggle(); //hace que al momento de hacer click cambie el estado hidden y show
    })

    $(".btn-close").click(function() {
        $(".detalles").hide();//hide para ocultar los detalles al hacer click en la "x"
    })
    
    //oculta los detalles cuando se hace click fuera del contenido del div
    $(document).click(function(e){
        if (!$(e.target).closest(".detalles, .paginaObjetivo").length){//si el objetivo del click esta fuera de lo especificado en el closest y el largo de estos
            $(".detalles").hide();//si esta fuera de estos parametros, oculta la tarjeta detalles
        }
    })
})

