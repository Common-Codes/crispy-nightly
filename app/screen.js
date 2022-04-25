// MOVE ELEMENT DEPENDING ON SCREEN WIDTH
function movePosition(){
	// set element variables
	var nav = document.getElementById("nav");
	var navMobile = document.getElementById("mob-nav");
	
	// get window width
	var $windowWidth = document.documentElement.clientWidth;
	// positioning if statement
	if($windowWidth < 800){
		// if below 800px insert after the title and above paragraph
		nav.style.display = 'block'
        navMobile.style.display = 'block'
	} else {
		// if above 800px move imageHold (sidebar loctaction)
		nav.style.display = 'block'
        navMobile.style.display = 'block'
	}
}

// check document is ready
var domReady = function(callback) {
	document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

// on document ready 
domReady(function() {
	// run move function	
	movePosition()
});

// on window resize
window.onresize = function(event) {
	// run move function
   movePosition()
};




// JQUERY
// MOVE ELEMENT DEPENDING ON SCREEN WIDTH
/*function movePosition(){
	// set element variables
	var $introPosition = $("#intro-section h1");
	var nav = $("#image");
	var navMobile = $("#imageHold");
	
	// get window width
	var $windowWidth = $(window).width();
	// positioning if statement
	if($windowWidth < 800){
		// if below 800px insert after the title and above paragraph
		nav.insertAfter($introPosition)
	} else {
		// if above 800px move into imageHold (sidebar loctaction)
		navMobile.append(nav);
	}
}

$(document).ready(function(){
	movePosition()
})*/










// get element selector
/*var $intro = document.getElementByID("intro");
var nav = document.getElementByID( "image" );

// create function
function movePosition(){
	// get window width
	var $windowWidth = document.documentElement.clientWidth;
	
	// positioning if statement
	if($windowWidth < 800){
		// if below 800px move below intro (append)
		$intro.appendChild($title);
	} else {
		// if above 800px move above intro (prepend)
		$intro.insertBefore($title, $intro.firstChild);
	}
}*/