$(document)
    .mousemove(
        function(e) {
            $('#cursor')
                .css('left', e.clientX)
                .css('top', e.clientY)
        }
    )