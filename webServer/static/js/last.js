
$("#hjs").click(function(){
	$("#shopping").css("display","block");
	$("#mask").css("display","block");
})
$("#mask").click(function(){
	$("#shopping").css("display","none");
	$("#mask").css("display","none");
})
$("#do_now").click(function(){
	document.location.href="/order";
})

