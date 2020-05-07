var ourKEY = "c37588cba0b1e4c1f0fd8f5d6048b70b"

var APIURL = 'http://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&appid=' + ourKEY;

$.ajax({
	dateType:'JSON', //js object notation
	url:APIURL,
	success:function(goblinFire) {
		console.log(goblinFire.main.temp-273.15) 
		
$("#temp").text(goblinFire.main.temp-273.15);

	}
})

$("a").click(function(){

	var t = $(this).attr("data-target"); //grabing whatever a click on and looking for the attribute on a, taking it and loading into the variable

	$("a").scrollTo("ourTarget", 2000);
});
