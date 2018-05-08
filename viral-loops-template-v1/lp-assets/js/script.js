var topParallax;
$(window).scroll(function(){
	if(topParallax){
			var st = $(this).scrollTop();

	$(".pink").css({
	"transform" : "translate(0%, -" + st / 8 + "%"
});

$(".yellow").css({
	"transform" : "translate(0%, " + st / 12 + "%"
});
	}

});



//Video Autoplay

// $("bgvid").play();

$(document).ready(function(){
	parallax();
	if($(window).width() >= 768){
		topParallax = true;
	}
	if($(window).width() < 768){
		topParallax = false;
	}	

});

$(window).resize(function(event) {
		parallax();	

	if($(window).width()<=992){
		$('div[data-type="background"]').css({ backgroundPosition: 'center'  });
	}
			
	
});	

function parallax () {

	
	if($(window).width()>= 992){
    	
		$('div[data-type="background"]').each(function(){
       		var $bgobj = $(this); 
        	$(window).scroll(function() {		
				if($(window).width()>= 992){

	            	var yPos = -($(window).scrollTop() / $bgobj.data('speed')); // вычисляем коэффициент 
	          		var cur = yPos -400;
	            	var coords = 'center '+ cur + 'px';
	            	
	            	$bgobj.css({ backgroundPosition: coords  });
	            }
				else{
					$('div[data-type="background"]').css({ backgroundPosition: 'center'  });
				}
        }	);
   		});
	}
	
}




var clicked = false;
$("#left").click(function() {

	if(!clicked){
		slideLeft();
	}

});

$("#right").click(function() {
	if(!clicked){
		slideRight();
	}
	
});

function slideLeft () {
	var current = parseInt($("#timeline").css("left"));
	console.log(current);
	if(current<-180){
		$("#timeline").css("left", current+250 + "px");
		clicked = true;
		setTimeout(function () {
			clicked = false;
		},1000);
	}

}

function slideRight () {
	var current = parseInt($("#timeline").css("left"));
	console.log(current);
	if(current>-820){
		$("#timeline").css("left", current-250 + "px");
		clicked = true;
		setTimeout(function () {
			clicked = false;
		},1000);	
	}

}

$(".point").mouseover(function(event) {
	var step = parseInt( $(this).css("left")) +20;
	$(".progress").css("width", step)
	
});

$(".point").mouseout(function(event) {
	
	$(".progress").css("width", '10%')
	
});

$(window).resize(function(event) {
	if($(window).width() >= 768){
		$("#timeline").css("left", 0 + "px");
		topParallax = true;
	}
	if($(window).width() < 768){
		$("#timeline").css("left", -180 + "px");
		topParallax = false;
	}
});

//////////form validation

// var valid = false;
// $(document).ready(function() {
// 			$('#email').blur(function() {
// 				if($(this).val() != '') {
// 					var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
// 					if(pattern.test($(this).val())){
// 						$(this).css({'border' : '1px solid #569b44'});
// 						valid = true;
						
// 					} else {
// 						$(this).css({'border' : '1px solid #ff0000'});
// 						valid = false;
						
// 					}
// 				} else {
// 					$(this).css({'border' : '1px solid #ff0000'});
// 					valid= false;
					
// 				}
// 			});


// 			$(".send_email").submit(function(event) {
// 				return valid;
// 			});
// 		});