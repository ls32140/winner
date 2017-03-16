$("#long_time").on("click",function(e){
    $("#long_time").attr("class","choose_right");
    $("#short_time").attr("class","");
    $("dd")[0].innerText="96天";
    $("dd")[1].innerText="1500.00元";
    $("dd")[2].innerText="2017-10-23";
})
$("#short_time").on("click",function(e){
    $("#long_time").attr("class","");
    $("#short_time").attr("class","choose_right");
    $("dd")[0].innerText="30天";
    $("dd")[1].innerText="5000.00元";
    $("dd")[2].innerText="2017-06-10";
})
var time=0;
$("#save_now").on("click",function(){
    if(time==0){
        time++; 
        $("#open_count").css("display","block");
        $("#mask").css("display","block");
        
    }
    else{
        time--;
        document.location.href='/changeNum';
    }
})
$("#do_now").click(function(){
    $("#open_count").css("display","none");
    $("#mask").css("display","none");
})
$("#mask").click(function(){
    $("#open_count").css("display","none");
    $("#mask").css("display","none");
})

