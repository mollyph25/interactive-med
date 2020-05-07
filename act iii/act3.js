$(document).ready(function(){

	// init controller
	var controller = new ScrollMagic.Controller();

	// build scene
	var scene01 = new ScrollMagic.Scene({
		triggerElement: $('.trigger1')
	})
	.setClassToggle('#reveal1', 'fade-in') // add class toggle
	.addIndicators() 
	.addTo(controller);

});
