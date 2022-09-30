$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 60){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

})

// register section javscript

function myfun(){
    var x1 = document.getElementById('text1').value;
    var x2 = document.getElementById('text2').value;
    var x3 = document.getElementById('text3').value;
    var x4 = document.getElementById('text4').value;
    var x5 = document.getElementById('text5').value;


    alert("First Name : "+x1+"\n Last Name : "+x2+"\n Email : "+x3+"\n Phone Number : "+x4+"\n Message : "+x5);
}