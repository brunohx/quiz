$(document).ready(function(){
        
        $('.bq1').click((e) => {
            e.preventDefault();
            $('.p1').fadeOut('slow', ()=> {
                $('.p2').fadeIn('slow');
            });
        })
        
        $('.bq2').click((e) => {
            e.preventDefault();
            $('.p2').fadeOut('slow', ()=> {
                $('.p3').fadeIn('slow');
            });
        })
        
        $('.bq3').click((e) => {
            e.preventDefault();
            $('.p3').fadeOut('slow', ()=> {
                $('.validatingDiv').fadeIn('slow',validateQuiz());
            });
        })

        
        var progress = 5;
    
        function validateQuiz() {
            progress += 25.3;
            $("#analyzeBar").css("width", Math.min(progress, 100) + "%");
            $("#analyzeText").html(Math.min(Math.round(progress), 100) + "%");
            if (progress >= 100) {
                progress = 100;
                $("#analyzeBar").removeClass("progress-bar-striped");
                $("#analyzeText").removeClass("text-right").addClass("text-center");
                $("#analyzeText").html("Concluído! Aguarde...");
                setTimeout(function () {
                    $('.validatingDiv').fadeOut('slow', function () {
                        $('.hp2').fadeIn('slow');
                        $('.validatedDiv').fadeIn('slow');
                    });
                }, 2000);
            }
        
            if (progress < 100) {
                setTimeout(function () {
                    validateQuiz();
                }, 250);
            }
        }
    });
