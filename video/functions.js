function toInteractive(thisTarget){
	$('#video_content').fadeOut('fast', function(){
		$('#video_console').animate({height:'330px'}, 500, function(){
			toSection(thisTarget);
		});
	});
}
function updateSubtitles(obj) {
  if (obj.enabled===true)
        $('#video_captions').html( obj.value );   
}