//

//$(".button").click(function(){
//		$(document).scrollTo(".wherever",200)
//});


$(document).ready(function(){

	// init controller
	var controller = new ScrollMagic.Controller();

	// build scene
	new ScrollMagic.Scene({ //referenced from scroll magic tutorial file: reveal on scroll
						triggerElement: "#trigger1",
						triggerHook: 0.6, // show, when scrolled 10% into view
						duration: "0%", // hide 10% before exiting view (80% + 10% from bottom)
						offset: 50 // move trigger to center of element
					})
					.setClassToggle("#reveal1", "visible") // add class to reveal
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	new ScrollMagic.Scene({
						triggerElement: "#trigger2",
						triggerHook: 0.6, // show, when scrolled 10% into view
						duration: "0%", // hide 10% before exiting view (80% + 10% from bottom)
						offset: 50 // move trigger to center of element
					})
					.setClassToggle("#reveal2", "visible") // add class to reveal
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	new ScrollMagic.Scene({
						triggerElement: "#trigger3",
						triggerHook: 0.6, // show, when scrolled 10% into view
						duration: "0%", // hide 10% before exiting view (80% + 10% from bottom)
						offset: 50 // move trigger to center of element
					})
					.setClassToggle("#reveal3", "visible") // add class to reveal
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	new ScrollMagic.Scene({
						triggerElement: "#trigger4",
						triggerHook: 0.6, // show, when scrolled 10% into view
						duration: "0%", // hide 10% before exiting view (80% + 10% from bottom)
						offset: 50 // move trigger to center of element
					})
					.setClassToggle("#reveal4", "visible") // add class to reveal
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	new ScrollMagic.Scene({
						triggerElement: "#trigger5",
						triggerHook: 0.6, // show, when scrolled 10% into view
						duration: "0%", // hide 10% before exiting view (80% + 10% from bottom)
						offset: 50 // move trigger to center of element
					})
					.setClassToggle("#reveal5", "visible") // add class to reveal
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	new ScrollMagic.Scene({
						triggerElement: "#trigger6",
						triggerHook: 0.6, // show, when scrolled 10% into view
						duration: "0%", // hide 10% before exiting view (80% + 10% from bottom)
						offset: 50 // move trigger to center of element
					})
					.setClassToggle("#reveal6", "visible") // add class to reveal
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	new ScrollMagic.Scene({
						triggerElement: "#trigger7",
						triggerHook: 0.6, // show, when scrolled 10% into view
						duration: "0%", // hide 10% before exiting view (80% + 10% from bottom)
						offset: 50 // move trigger to center of element
					})
					.setClassToggle("#reveal7", "visible") // add class to reveal
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	new ScrollMagic.Scene({
						triggerElement: "#trigger8",
						triggerHook: 0.6, // show, when scrolled 10% into view
						duration: "0%", // hide 10% before exiting view (80% + 10% from bottom)
						offset: 50 // move trigger to center of element
					})
					.setClassToggle("#reveal8", "visible") // add class to reveal
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
					
	var pinIntroScene = new ScrollMagic.Scene({ //referenced from sticky element: pinning from scrollmagic
						triggerElement: '#intro',
						duration: 4300,
						triggerHook: 0.01,
						offset: 50
					})
					.setPin('#intro')
					.addTo(controller);
});