$(document).ready( function() {
   
   //if($(window).width() > 615) {
	   var topOfOthDiv = $("#pageTop").offset().top;
	   $(window).scroll(function() {
		   if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
			   $("#nav-brand").fadeIn(500); //reached the desired point -- show div
		   }
			else {
				$("#nav-brand").fadeOut(500);
			}
			
	   });
   //}   
    
});


  