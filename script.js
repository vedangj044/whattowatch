jQuery(function($){
    
    var totalCount = 7;
    var num = Math.ceil( Math.random() * totalCount );
    function setBGImage() {
        var bgimage = './img/'+num+'.jpg';
        $('.container-fluid').css(
        {
        backgroundImage:"url("+bgimage+")",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
        
        });
    }
    setBGImage();
    });

  
    