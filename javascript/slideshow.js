// ################ Slideshow js ###################


$(document).ready(function() {
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
	

});


	


