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
	if($(window).width() > 768){
		$("#timeline").css("left", 0 + "px");
	}
	if($(window).width() <= 768){
		$("#timeline").css("left", -180 + "px");
	}
});