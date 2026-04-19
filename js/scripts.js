// Esperamos a que el documento esté completamente cargado usando jQuery
$(document).ready(function() {
    
    console.log("jQuery está funcionando correctamente, bro. 🚀");

    // Función para detener los videos cuando se cierra una ventana modal
    $('.modal').on('hidden.bs.modal', function () {
        // Buscamos el iframe (el video) dentro del modal que se acaba de cerrar
        var $iframe = $(this).find('iframe');
        
        if ($iframe.length) {
            // Reiniciamos la URL del video para forzar que se detenga la reproducción
            var urlOriginal = $iframe.attr('src');
            $iframe.attr('src', '');
            $iframe.attr('src', urlOriginal);
        }
    });

});