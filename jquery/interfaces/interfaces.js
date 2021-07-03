$(document).ready(
    function(){
        // Mover elemento por la pagina
        $('.elemento').draggable()

        //Redimencionar elementos
        $('.elemento').resizable()

        // Seleccionar elementos con colores
        $('.JQuery-selectable').selectable()

        //Mover elementos de una lista para ordenarlos
        //$('.JQuery-sortable').sortable()
        $('.JQuery-sortable').sortable({
            update: function(event, ui){
                console.log('Se ha realizado un cambio')
                //console.log(event)
                console.log(ui)
            }
        })

        //Mover elemento dentro de otro
        $('.moveme').draggable()
        $('.area').droppable({
            drop: function(){
                console.log('Estoy llenito')
            }
        })
    }
)