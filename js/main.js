'use strict'

{
    $(function(){


        $(window).resize(function (){
            let windowWidth = $(window).width();
            alert(windowWidth);
        });


         
        

        $(window).scroll(function() {
            let scroll = $(this).scrollTop();
            const WIN_HEI = $(window).height();
            // const WORK_OFFSET = document.getElementsByClassName('work-container');
            // const WORK_OFFSET = $('.work-container').offset().top;
            


            $(".fadein").each(function(){

                let elePos = $(this).offset().top;

                if(scroll > elePos - WIN_HEI + 200){
                    $(this).children(".square").addClass('show');
                    //alert('aaaa');
                    $(this).children(".circle").addClass('show');
                    $(this).children(".circle").children(".work-circle-clip").addClass('show');
                    $(this).children(".work-circle-clip-title").addClass('show');
                    $(this).addClass('show');

                    
                }

            });

        });

        let beforePos = 0;
        let scrollPos = 0;
        $(window).on('scroll',function(){
            scrollPos =  $(this).scrollTop();
            if(scrollPos >= beforePos && !$('header nav ul').hasClass('open')){
                $('header nav').addClass('hide');

            }else{
                $('header nav').removeClass('hide');
            }
            beforePos = scrollPos;
        });


        $('#open').click(function(){
            $('header nav ul').addClass('open');
        });

        $('#close').click(function(){
            $('header nav ul').removeClass('open');
        });



        $('#topbtn').click(function(){
            $('body,html').animate({scrollTop:0},500, "swing");
            return false;
            
        });

        });
}