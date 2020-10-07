// random images

jQuery(function($){
    
    var totalCount = 7;
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

    //autocomplete
    $(document).ready(function(){
      console.log("As");
       $('input.autocomplete').autocomplete({
         data: {
           "Apple": null,
           "Microsoft": null,
           "Google": 'https://placehold.it/250x250'
         },
       });
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
