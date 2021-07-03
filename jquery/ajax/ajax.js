$(document).ready(
    function () {
        //$('#ajax').load('https://jsonplaceholder.typicode.com/') // Tira el error de que no encuentra el css y js
        $.get('https://jsonplaceholder.typicode.com/posts', function (response) {
            $.each(response, function () {
                let myHtml =
                    `
                <h2>${this.title}</h2>
                <p>${this.body}</p>
                `
                $('#get').append(myHtml)

            })
        })
        $('#formulario').submit(
            function (e) {
                e.preventDefault();
                let usuario = {
                    name: $('#nombre').val(),
                    username: $('#username').val(),
                    email: $('#email').val()
                }
                /*       
                        //No se puede fiar de este metodo porque siempre tira Success, no tira errores
                        $.post($(this).attr('action'), usuario, function (response) {
                            let myHTML =
                                `
                            <h2>${response.id}: ${response.name}</h2>
                            <p>Usuario: ${response.username}</p>
                            <p>Mail: ${response.email}</p>
                            `
                            $('#post').append(myHTML);
                            console.log(response)
                        })
                        .done(
                            function () {
                                console.log('Succes')
                            }
                        )
                */
                $.ajax(
                    {
                        type: 'POST',
                        dataType: 'json',
                        /*contentType: 'application/json',*/
                        url: 'https://reqres.in/api/users', // Esta url acepta POST a diferencia de la que teamos antes
                        data: usuario,
                        beforeSend: function () {
                            console.log('Enviando usuario')
                        },
                        success: function (response) {
                            let myHTML =
                                `
                            <h2>${response.id}: ${response.name}</h2>
                            <p>Usuario: ${response.username}</p>
                            <p>Mail: ${response.email}</p>
                            `
                            $('#ajax2').append(myHTML);
                            console.log(response)
                        },
                        error: function () {
                            console.log('Error')
                        },
                        timeout: 5000
                    }
                )
            }
        )
    }
)