//原生
var xmlHttp;
function loadXMLdoc(url,cfunc){
	if(window.XMLHttpRequest){
		xmlHttp = new XMLHttpRequest();
	}
	else{
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlHttp.onreadystatechange = cfunc;
	xmlHttp.open("GET",url,true);
	xmlHttp.send();
}
function aFunction(){
	loadXMLdoc("text.txt",function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			document.getElementById("big").innerHTML = xmlHttp.responseText;
		}
	});
}

//jq
$(document).ready(function(){
	$("input").click(function(){
		$("#big").load("text.txt");
		$.post("hfhh.php",
		{
			name:ss,
			url:"dfff"
		},
		function(data,status){
			alert(data+status);
		});
		$.get(
			"ffff.php",
			function(data,status){
			alert(data+status);
		});
	})
})


