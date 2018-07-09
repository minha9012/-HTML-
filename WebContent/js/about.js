$(function(){
	
	
	$(".btn_icon").mouseenter(function(){
		$(this).animate(
				{top:"-41px"},200
		);
	});
	$(".btn_icon").mouseleave(function(){
		$(this).animate(
				{top:"0px"},200
		);
	});
	
	$(".cell_img").hover (
		    function() {
		        $(this).addClass("img_scale");
		    },
		    function() {
		        $(this).removeClass("img_scale");
		    }
		);
	
	$("#love").click(function(){
		$(".about_wrapper").fadeOut(500);
		$(".about_wrapper2").fadeIn(500);
	});
	$("#love_close").click(function(){
		$(".about_wrapper").fadeIn(500);
		$(".about_wrapper2").fadeOut(500);
	});
	$("#core").click(function(){
		$(".about_wrapper").fadeOut(500);
		$(".about_wrapper3").fadeIn(500);
	});
	$("#core_close").click(function(){
		$(".about_wrapper").fadeIn(500);
		$(".about_wrapper3").fadeOut(500);
	});
	$("#work").click(function(){
		$(".about_wrapper").fadeOut(500);
		$(".about_wrapper4").fadeIn(500);
	});
	$("#work_close").click(function(){
		$(".about_wrapper").fadeIn(500);
		$(".about_wrapper4").fadeOut(500);
	});
	


	
	
});


