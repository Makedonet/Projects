// var user = {
//     'name' : 'Max',
//     'surname' : 'Medvedev',
//     'age' : 20
// }

// alert (user.name)

var btn = document.getElementById('btn')
btn.onclick = function () {
    var text = document.querySelector('.title span')
    text.classList.add('green')
}

$(function () {
    $(window).scroll(function () {
        $('#future .section-title').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 850) {
                $(this).addClass("animate__fadeInDown");
            }
        });
    });
    $(window).scroll(function () {
        $('#future .intresting').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 850) {
                $(this).addClass("animate__fadeInUp");
            }
        });
    });
    $(window).scroll(function () {
        $('#section .form').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 850) {
                $(this).addClass("animate__fadeIn");
            }
        });
    });
    $(window).scroll(function () {
        $('#section .section-title').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 850) {
                $(this).addClass("animate__fadeInDown");
            }
        });
    });
    $(window).scroll(function () {
        $('#footer p.credits').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 900) {
                $(this).addClass("animate__fadeIn");
            }
        });
    });
})