$(document).ready(
    () => {
        let list = $('.list')

        listHref(list);

        let button = $('#add')

        button.click(
            () => {
                let addLink = $('#add-link').val()
                console.log(addLink)
                $('#ul-list')
                    .prepend(
                        '<li><a href="' + addLink + '">' + addLink + '</li>'
                    )
            }
        )






    }
)

function listHref(list) {
    list.each(
        function() {
            console.log(this)
            let enlace = $(this).attr('href')
            $(this).text(enlace)
        }
    )
}