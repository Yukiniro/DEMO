$(function(){
	$(".outer").each(function(index) {
		$(this).Show($(".inner").eq(index));
	})
});