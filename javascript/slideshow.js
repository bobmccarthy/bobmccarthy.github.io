// ################ Slideshow js ###################


$(document).ready(function() {
	$('body').show();
    $('#slideshow').cycle({
        fx:     'scrollLeft',
        timeout: 8000,
        pager:  '#bnav',
		slideExpr: 'li',    
		next:   '#next2',
		prev:   '#prev2'

    });
    $('#pauseButton').click(function() {
		$('#slideshow').cycle('pause');
		document.getElementById('pauseButton').style.visibility='hidden';
		document.getElementById('resumeButton').style.visibility='visible';
	});
	$('#resumeButton').click(function() {
		$('#slideshow').cycle('resume');
		document.getElementById('pauseButton').style.visibility='visible';
		document.getElementById('resumeButton').style.visibility='hidden';
	});
    $('#frslideshow').cycle({
        fx:     'fade',
        timeout: 6000,
        pager:  '#frnav',
		slideExpr: 'table',    
		next:   '#frnext2',
		prev:   '#frprev2'

    });
    $('#frpauseButton').click(function() {
		$('#frslideshow').cycle('pause');
		document.getElementById('frpauseButton').style.visibility='hidden';
		document.getElementById('frresumeButton').style.visibility='visible';
	});
	$('#frresumeButton').click(function() {
		$('#frslideshow').cycle('resume');
		document.getElementById('frpauseButton').style.visibility='visible';
		document.getElementById('frresumeButton').style.visibility='hidden';
	});
	// $('.jsok-placeholder').hide();
	$('.jsok').show();
	$('#bnav a').html('');


	// bx slider--------

	$('.slider2').bxSlider({
	slideWidth: 246,
	minSlides: 2,
	maxSlides: 2,
	slideMargin: 20
	});

	$('.bx-prev').html('<div class="specials-slidecontainer-leftarrow"></div>');
	$('a.bx-prev').css('text-indent','0px');
	$('a.bx-prev').css('margin-left','-45px');
	$('.bx-next').html('<div class="specials-slidecontainer-rightarrow"></div>');
	$('a.bx-next').css('text-indent','0px');
	$('a.bx-next').css('margin-right','-50px');
	$('.bx-pager').hide();
	$('.bx-viewport').css('box-shadow','none');
	$('.bx-viewport').css('border','none');
	$('.bx-viewport').css('height','230px');
	$('.slide').css('border','1px solid #D0A50A');
	$('.slide').css('border','1px solid rgba(208,165,10,0.3)');
	  
	// end bx slider-----------


});


	


