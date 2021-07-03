$(document).ready(
    function () {
        //Slider
        if (window.location.href.indexOf('index') > -1) {
            $('.bxslider').bxSlider({
                mode: 'horizontal',
                captions: true,
                responsive: true,
                pager: false,
                captions: false
            });
        }
        //Fin Slider

        //Posts
        if (window.location.href.indexOf('index') > -1) {

            let posts = [
                {
                    title: 'Titulo 1',
                    date: moment().format('MMMM Do YYYY'),
                    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minima harum reprehenderit
                quasi nulla quod alias repellendus eos, numquam corporis quam officia? Molestias perferendis
                assumenda ipsum optio sed, nulla consequuntur. Eum nobis facilis
                neque repellendus molestias necessitatibus quidem error sunt, minima delectus placeat molestiae
                eius fugiat, nam harum! Consequatur nulla excepturi nostrum natus ex dolorem nemo debitis
                perferendis error assumenda?`
                },
                {
                    title: 'Titulo 2',
                    date: moment().format('MMMM Do YYYY'),
                    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minima harum reprehenderit
                quasi nulla quod alias repellendus eos, numquam corporis quam officia? Molestias perferendis
                assumenda ipsum optio sed, nulla consequuntur. Eum nobis facilis
                neque repellendus molestias necessitatibus quidem error sunt, minima delectus placeat molestiae
                eius fugiat, nam harum! Consequatur nulla excepturi nostrum natus ex dolorem nemo debitis
                perferendis error assumenda?`
                },
                {
                    title: 'Titulo 3',
                    date: moment().format('MMMM Do YYYY'),
                    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minima harum reprehenderit
                quasi nulla quod alias repellendus eos, numquam corporis quam officia? Molestias perferendis
                assumenda ipsum optio sed, nulla consequuntur. Eum nobis facilis
                neque repellendus molestias necessitatibus quidem error sunt, minima delectus placeat molestiae
                eius fugiat, nam harum! Consequatur nulla excepturi nostrum natus ex dolorem nemo debitis
                perferendis error assumenda?`
                },
                {
                    title: 'Titulo 4',
                    date: moment().format('MMMM Do YYYY'),
                    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minima harum reprehenderit
                quasi nulla quod alias repellendus eos, numquam corporis quam officia? Molestias perferendis
                assumenda ipsum optio sed, nulla consequuntur. Eum nobis facilis
                neque repellendus molestias necessitatibus quidem error sunt, minima delectus placeat molestiae
                eius fugiat, nam harum! Consequatur nulla excepturi nostrum natus ex dolorem nemo debitis
                perferendis error assumenda?`
                },
                {
                    title: 'Titulo 5',
                    date: moment().format('MMMM Do YYYY'),
                    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minima harum reprehenderit
                quasi nulla quod alias repellendus eos, numquam corporis quam officia? Molestias perferendis
                assumenda ipsum optio sed, nulla consequuntur. Eum nobis facilis
                neque repellendus molestias necessitatibus quidem error sunt, minima delectus placeat molestiae
                eius fugiat, nam harum! Consequatur nulla excepturi nostrum natus ex dolorem nemo debitis
                perferendis error assumenda?`
                },

            ]
            posts.forEach((post) => {
                let myHTML =
                    `
                    <article class="post">
                    <h2>${post.title}</h2>
                    <span class="date">${post.date}</span>
                    <p>
                        ${post.content}
                    </p>
                    <button class="button-more">Leer mas</button>
                    </article>
                    `
                $('#posts').append(myHTML);
            })

            /* El each de JQuery no me funcionó */

        }
        //Fin Posts

        //Themes

        let theme = $('#theme')
        $('#to-red').click(
            function () {
                theme.attr('href', 'css/red.css')

            }
        )
        $('#to-green').click(
            function () {
                theme.attr('href', 'css/green.css')

            }
        )
        $('#to-blue').click(
            function () {
                theme.attr('href', 'css/blue.css')

            }
        )
        //Fin Themes

        //Subir
        $('footer a').click(
            function (e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: 0
                }, 500)
            }
        )
        //Fin Subir

        //Login Falso
        console.log($('.login form'))
        $('.login form').submit(
            function () {
                let nombre = $('#nombre').val()
                localStorage.setItem('form_name', nombre)
            }
        )
        let form_name = localStorage.getItem('form_name')
        if (form_name != null && form_name != undefined) {
            $('#about p')
                .html('Bienvenido,' + form_name)
                .append('<a href = "index.html" id="logout">Cerrar sesión</a>')
            $('#login').hide()
        }
        $('#logout').click(
            function () {
                localStorage.clear();
            }
        )
        //Fin Login Falso

        //Acordeon
        if (window.location.href.indexOf('about') > -1) {
            $('#acordeon').accordion()
        }
        //Fin Acordeon

        //Reloj
        if (window.location.href.indexOf('reloj') > -1) {
            setInterval(function () {
                let reloj = moment().format('h:mm:ss')
                $('#reloj h2').html(reloj);
            }, 1000)
        }
        //Fin Reloj

        //JS Validator
        $('#form_contact').validate()
    }
)