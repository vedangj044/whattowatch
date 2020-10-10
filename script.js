// random images

jQuery(function($){

    var totalCount = 7;
    var num = Math.ceil( Math.random() * totalCount );

    var bglist =[
      "https://i1.wp.com/ccgdelhi.org/wp-content/uploads/2014/07/highway-movie-poster.jpg?fit=1280%2C720&ssl=1","https://wallpapercave.com/wp/wp6118625.jpg","https://photoshoptrainingchannel.com/wp-content/uploads/2012/09/man-of-steel-superman-post.jpg","https://img.indiefolio.com/fit-in/1100x0/filters:format(webp):fill(transparent)/project/body/cf5210abeea454251040e29aad5ef1fe.jpg","https://saniose.com/wp-content/uploads/Saniose-Fargo-Regular-Edition-Movie-Poster.jpg"
      ,"https://www.webfx.com/blog/images/cdn.designinstruct.com/files/179-horrormovie_poster_design/DI_dark_castle.jpg","https://www.joblo.com/assets/images/joblo/posters/2019/04/Avengers-Endgame-Odeon-poster-1-A.jpg","https://cdn.vox-cdn.com/thumbor/o-B6phGVeUCGR-77T-E8119clKc=/0x0:1280x853/1200x800/filters:focal(0x0:1280x853)/cdn.vox-cdn.com/uploads/chorus_image/image/46970672/star_wars_poster_full.0.0.0.jpg","https://s8v8k3v9.stackpathcdn.com/wp-content/uploads/2016/03/grindhouse-style-poster.jpg","https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422"]

    function setBGImage() {
        var bgimage = bglist[num];
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

document.addEventListener("DOMContentLoaded", function() {
  options = {
    data: {
      Apple: null,
      Microsoft: null,
      Google: "https://placehold.it/250x250"
    }
  };
  var elems = document.querySelectorAll(".autocomplete");
  var instances = M.Autocomplete.init(elems, options);
});

document.getElementById("autocomplete-input").addEventListener("input", function() {
  var value = document.getElementById('autocomplete-input').value;
  var elem = document.querySelector(".autocomplete");
  var instance = M.Autocomplete.getInstance(elem);
  newData = randomData(value, instance);
});

function randomData(value = "", instance){
  var fakeData = {"Google1111": null}

  var myHeaders = {
		'Accept': 'application/json',
  	'Content-Type': 'application/json'
	}

  fetch("https://whattowatch121.herokuapp.com/search",{
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({"key": value})
  })
  .then(res=>res.json())
  .then(result=>result.response)
  .then(
    function(resp){
      var i;
      for(i = 0; i < resp.length; i++){
        fakeData[resp[i]] = null;
      }
    }
  )
  .then(
    function(resp){
      instance.updateData(fakeData);
      instance.open();
    }
  )
  .catch(function(res){ console.log(res) });

  return fakeData;
}




    // smooth scroll
$(document).ready(function(){

var scrollLink = $('.mybutton');

scrollLink.click(function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: $('#abc').offset().top
  }, 2000);

  document.getElementById("abc1").style.opacity = 0;
  document.getElementById("loading").style.opacity = 1;

  var myHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  var value = document.getElementById('autocomplete-input').value;

  fetch("https://whattowatch121.herokuapp.com/recommend",{
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({"query": value})
  })
  .then(res=>res.json())
  .then(
    function(res){
      var i;
      for(i = 0; i < 9; i++){
        document.getElementById('poster'+i.toString()).src = res[i.toString()]["poster"];
        document.getElementById('title'+i.toString()).innerHTML = res[i.toString()]["title"];
      }
      console.log("done");
      document.getElementById("abc1").style.opacity = 1;
      document.getElementById("loading").style.opacity = 0;

    }
  )
  .catch(function(res){ console.log(res) });

})


})
