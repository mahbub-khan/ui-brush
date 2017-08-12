$(document).ready(function(){

	$("#ud-dots").delay(4000).fadeOut(2000,function(){
		$("#ud-bg-left").animate({left:'-50%'},300);
		$("#ud-bg-right").animate({right:'-50%'},300,function(){
			$("#ud-preloader").fadeOut(10);//ei line na dile load er por kisui clickable hobe na 
		});
	});
});