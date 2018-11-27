$( document ).ready(function() {
	$('#header_nav').load("header_nav.html");
	$('#body').removeAttr( "hidden" );
	$('#footer').load("footer.html");
});

// $('nav.navbar > .container >a').on('click', function(e) {
// 	$('nav.navbar > .container >a').removeClass('active');
// 	$(this).addClass('active');
// 	var page_title = this.innerText.toLowerCase().trim();

// 	console.log( page_title )
// 	// debugger
// 	$('#body').load(page_title+".html");
// });
