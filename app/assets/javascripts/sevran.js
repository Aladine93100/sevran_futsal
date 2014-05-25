$('document').ready(function() {

	$( '#b1' ).click(function() {
		$( '.recit2, .recit3, .recit4' ).hide( 'slow' )
		$( '#video1' ).show( 'slow' )
	});
	$( '#r1' ).click(function() {
		$( '.recit2, .recit3, .recit4' ).show( 'slow' )
		$( '#video1' ).hide( 'slow' )
	});

	$( '#b2' ).click(function() {
		$( '.recit1, .recit3, .recit4' ).hide( 'slow' )
		$( '#video2' ).show( 'slow' )
	});
	$( '#r2' ).click(function() {
		$( '.recit1, .recit3, .recit4' ).show( 'slow' )
		$( '#video2' ).hide( 'slow' )
	});

	$( '#b3' ).click(function() {
		$( '.recit2, .recit1, .recit4' ).hide( 'slow' )
		$( '#video3' ).show( 'slow' )
	});
	$( '#r3' ).click(function() {
		$( '.recit2, .recit1, .recit4' ).show( 'slow' )
		$( '#video3' ).hide( 'slow' )
	});

	$( '#b4' ).click(function() {
		$( '.recit2, .recit3, .recit1' ).hide( 'slow' )
		$( '#video4' ).show( 'slow' )
	});
	$( '#r4' ).click(function() {
		$( '.recit2, .recit3, .recit1' ).show( 'slow' )
		$( '#video4' ).hide( 'slow' )
	});
});