$(document).ready(
    () => {
        $('p')
            .css('font-size', '16pt')
            .css('padding', '.5rem')
            .css('border-radius', '1rem')

        $('#rojo')
            .css('background', 'red')
            .css('color', 'white')
            .css('padding', '1rem')

        $('p:nth-of-type(2)').css('border', 'yellow solid 5px')

        $('p:last-of-type').css('color', 'blue')

        $('p').click(
            function () {

                // Intercalando añadir y sacar clase
                if ($(this).hasClass('nya')) { // si tiene la clase nya
                    $(this).removeClass('nya') // remover la clase nya
                }
                else {                      // sino
                    $(this).addClass('nya') // añadir la clase nya
                    $('.nya')
                        .css('border-radius', '0px')
                        .css('padding', '1rem')
                }

                //Toggle, intercalando poner y sacar una misma clase
                $(this).toggleClass('nyu'); //es solo esta linea

                $('.nyu')
                    .css('border-radius', '15px')
                    .css('font-weight', 'bold')
                    .css('padding', '2rem')

                console.log(this) // es el this que proporciona function

                // Estamos haciendo exactamente lo mismo con nya y nyu
                // pero con toggle es solo una linea
            }
        )
    }
)