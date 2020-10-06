// random images

jQuery(function($){
    
    var totalCount = 8;
    var num = Math.ceil( Math.random() * totalCount );
    function setBGImage() {
        var bgimage = './img/'+num+'.jpg';
        $('.search').css(
        {
        backgroundImage:"url("+bgimage+")",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
        
        });
    }
    setBGImage();
    });

    // smooth scroll
$(document).ready(function(){
    
    var scrollLink = $('.mybutton');

    scrollLink.click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $('#abc').offset().top

        }, 2000);
    })

})
    
