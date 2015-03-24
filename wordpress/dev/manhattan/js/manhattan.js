( function() {
	'use strict';
	
	// Get distance between container and edge of screen
	var getOffsetLeft = function( element ) {
		var x = 0;
		
		while ( element && !isNaN( element.offsetLeft ) ) {
			x += element.offsetLeft - element.scrollLeft;
			element = element.offsetParent;
		}
		
		return x;
	};
	
	// Loop through containers and set negative margins
	var setContainerMargins = function() {
		Array.prototype.forEach.call( document.getElementsByClassName( 'js-mhtn-container' ), function( container ) {
			// Remove any negative margins
			container.style.marginLeft = '0px';
			container.style.marginRight = '0px';
			
			// Calucate new negative margins
			var leftMargin = getOffsetLeft( container ),
			rightMargin = window.innerWidth - container.offsetWidth - leftMargin;
						
			// Set new negative margins
			container.style.marginLeft = '-' + leftMargin + 'px';
			container.style.marginRight = '-' + rightMargin + 'px';
		} );
	};
	
	// Call
	setContainerMargins();
	window.addEventListener( 'resize', setContainerMargins );
	
} ) ();