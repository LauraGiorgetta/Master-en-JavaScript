$(document).ready(
    function () {
        $('#ocultar').click(
            function () {
                $('#ocultar').hide()
                $('#mostrar').fadeIn('slow')
                $('#caja').hide('normal')
            }
        )
        $('#mostrar').click(
            function () {
                $('#mostrar').hide()
                $('#ocultar').fadeIn('slow')
                $('#caja').show('normal')
            }
        )

        $('#nya').click(
            function(){
                $('#caja2').slideToggle('fast')
            }
        )

        $('#nyu').click(
            function(){
                let mitadwidth50per = $('#caja3').width() / 2;
                mitadwidth50per = $(document).width() / 2 - mitadwidth50per;
                $('#caja3')
                .animate(
                    {
                        lineHeight: '5rem',
                        borderRadius: '5rem',
                        marginLeft: mitadwidth50per,
                        marginTop: '5rem'
                    }, 'slow'
                )
                .animate(
                    {
                        marginTop: '10rem'
                    }, 'slow'
                )
                .animate(
                    {
                        lineHeight: '3rem',
                        borderRadius: '0',
                        marginLeft: '0',
                        marginTop: '0'
                    }, 'slow'
                )
            }
        )
    }
)