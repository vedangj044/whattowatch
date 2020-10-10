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
// $(document).ready(function(){
//   const pozycje_autocomplete = document.querySelector('input.autocomplete');
//   let instance = M.Autocomplete.getInstance(pozycje_autocomplete);
//
//   let po = {"Google": 'https://placehold.it/250x250'};
//
//   instance.updateData(po);
// });
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
  newData = randomData(value);
  var elem = document.querySelector(".autocomplete");
  var instance = M.Autocomplete.getInstance(elem);
  instance.updateData(newData);
});

function randomData(value = ""){
  var fakeData = {"Google1111": null}

  var myHeaders = {
		'Accept': 'application/json',
  	'Content-Type': 'application/json'
	}

  fetch("http://127.0.0.1:5000/search",{
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

  fetch("http://127.0.0.1:5000/recommend",{
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
