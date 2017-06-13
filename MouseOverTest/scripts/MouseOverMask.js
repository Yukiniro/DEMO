;(function($){
	$.fn.extend({
		Show : function(div){
			var w = $(this).width(), h = $(this).height();
			var xpos = w / 2, ypos = h / 2, eventType = "", direct = "";
			//var $div = $(div);
			$(this).css({
				"overflow": 'hidden',
				"position": 'relative'
			});
			div.css({
				"position": 'absolute',
				"top": $(this).height() + 'px'
			});
			$(this).on("mouseenter mouseleave",function(e){
				//var oe = e || event;
				var x = e.offsetX;
				var y = e.offsetY;
				var angle = Math.abs(Math.atan((y - ypos) / (x - xpos)) * 180 / Math.PI);
				var defaultAngle = Math.atan(ypos / xpos) * 180 /Math.PI;
				if(angle > defaultAngle){
					if(y < ypos){
						direct = "top";
					}else {
						direct = "bottom";
					}
				}else {
					if(x < xpos){
						direct = 'left';
					}else {
						direct = 'right';
					}
				}
				move(e.type, direct);
			});
			function move(eventType, direct){
				if(eventType == "mouseenter"){
					switch (direct) {
						case "bottom":
						div.css({
							"left" : '0px',
							"top" : h + 'px'
						}).stop(true, true).animate({"top" : "0px"}, "fast");
						break;
						case "top":
						div.css({
							"left" : '0px',
							"top" : -h + 'px'
						}).stop(true, true).animate({"top" : "0px"}, "fast");
						break;
						case "left":
						div.css({
							"left": -w + 'px',
							"top": '0px'
						}).stop(true, true).animate({"left" : "0px"}, "fast");
						break;
						case "right":
						div.css({
							"left": w + 'px',
							"top": '0px'
						}).stop(true, true).animate({"left" : '0px'}, "fast");
						break;
					}
				}else if(eventType == "mouseleave") {
					switch (direct) {
						case "bottom":
						div.css({
							"left": '0px',
							"top": '0px'
						}).stop(true, true).animate({"top" : h + 'px'}, "fast");
						break;
						case "top":
						div.css({
							"left": '0px',
							"top": '0px'
						}).stop(true, true).animate({"top" : -h + 'px'}, "fast");
						break;
						case "left":
						div.css({
							"left": '0px',
							"top": '0px'
						}).stop(true, true).animate({"left" : -w + 'px'}, "fast");
						break;
						case "right":
						div.css({
							"left": '0px',
							"top": '0px'
						}).stop(true, true).animate({"left" : w + 'px'}, "fast");
						break;
					}
				}
			}
		}
	})
})(jQuery);