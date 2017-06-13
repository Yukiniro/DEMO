$(function(){

	//移动端导航
	$('#nav-btn').click(function(event) {
		$('#nav-list').slideToggle(300);
	});

	//轮播图
	var calIndex = 1;
	var calList = $('.banner-cal > ul').children('li');
	var calBtns =$('.btns').children('span');
	var calNum = calList.length;

	function showCal(index){
		index--;
		index = index < 1 ? calNum : index;
		$(calList[index-1]).fadeOut('fast', function() {
			index++;
			index = index > calNum ? 1 : index;
			$(calList[index-1]).fadeIn();
		});
	}

	function showBtn(index){
		$(calBtns[index-1]).addClass('cal-btn-on');
		$(calBtns[index-1]).siblings('span').removeClass('cal-btn-on');
	}

	function calPlay(){
		var timer = setInterval(function(){
			showCal(calIndex);
			showBtn(calIndex);
			calIndex++;
			calIndex = calIndex > calNum ? 1 : calIndex;
			console.log(calIndex);
		},3000);
	}

	for(var i = 0; i < calBtns.length; i++){
		$(calBtns[i]).click(function(evnt) {
			var btnIndex = $(this).attr('index');
			showBtn(btnIndex);
			showCal(btnIndex);
		});
	}

	calPlay();

	//gallery点击放大
	$('.gallery .item a').click(function(event) {
		
		$('#galleryMask').fadeIn();
		return false;
	});

	$('#galleryMask').click(function(){
		$(this).fadeOut();
	});

	$(window).keydown(function(event) {
		if(event.keyCode == 27){
			$("#galleryMask").fadeOut();
		}
	});

	//回到顶部
	$().UItoTop();
});