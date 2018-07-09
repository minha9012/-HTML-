$(function(){
	
	var nam = 0;
	var num = 0;
	var font_list = ["'Black Han Sans'", "'Jua'"];
	setInterval(function(){ chang_font() },1000);  // 1초마다 폰트 변경

	function chang_font(){
	$("#scene1>h1:eq("+nam+")").css({"font-family":font_list[num]},1000);
	$("#scene2>h1:eq("+nam+")").css({"font-family":font_list[num]},1000);
	$("#scene3>h1:eq("+nam+")").css({"font-family":font_list[num]},1000);
	$("#scene4>h1:eq("+nam+")").css({"font-family":font_list[num]},1000);
	num++;
	nam++;
	if(num >= font_list.length){
	num = 0;
	}
	if(nam >=7){
	nam = 0;
	}
	}
	
	/*var base = { 'font-family': 'Black Han Sans' };
	var blue = { 'font-family': 'Jua' };
	
	$('.swiper-slide h1').each(function (i) {
		var $this = $(this)
		setInterval(function () {
		$('.swiper-slide h1').css(base);
		$this.css(blue);
		}, (i + 1) * 1000)
		})*/
	
	
	
});



