
class ExampleView {
    constructor (container, model) {
	this.container=container;
	this.model=model;

	/**
	 * numberOfGuests is a reference to the <span> element that 
	 * represents the placeholder for where we want to show the number of guests. It's
	 * a reference to HTML element (wrapped in jQuery object for added benefit of jQuery methods)
	 * and we can use it to modify <span>, for example to populate it with dynamic data (for now 
	 * only 'Hello world', but you should change this by end of Lab 1).
	 * 
	 * IMPORTANT: Never use document.querySelector() directly in the views. Always use
	 * some other way of searching only among the containers child elements. In this way you
	 * make your view code modular and ensure it dosn't break if by mistake somebody else
	 * in some other view gives the same ID to another element.
	 * 
	 */
	this.numberOfGuests = $("#numberOfGuests");


	this.plusButton = $("#plusGuest");
	this.minusButton = $("#minusGuest");
	
	
	this.numberOfGuests.innerHTML="Hello World";
    }

   
}
 
