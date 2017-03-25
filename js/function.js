$( document ).ready(function() {
	$('.highlight').hover(function() {
	  $('.highlight-text')
	  .addClass("active")
	}, function() {
	  $('.highlight-text')
	  .removeClass("active")
	});

	$(".highlight").click(function(){
    	$(".highlight-show").toggle();
	});
});