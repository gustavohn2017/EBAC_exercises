$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true,
        dots: false,
        prevArrow: false,
        nextArrow: false
    });
    $('.menu-hamburger').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email: true
            },
            telefone:{
                required:true
            },
            veiculoDeInteresse:{
                required: false
            }
        },
        messages:{
            nome: 'Este campo é obrigatório',
            email: 'Este campo é obrigatório',
            telefone: 'Este campo é obrigatório',

        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento,validador){
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)                        
            }
        }
        
    })
    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        $('html').animate({
            scrolltop: destino.offset().top
        },1000)
    })

})
