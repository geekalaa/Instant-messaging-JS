var blackList = [];
var lastid;
$(document).ready(function() {

	$('#subm').click(function(){
	
	if($('#user').val().length < 2 || !$.trim($("#messa").val()) || $("#user").val().replace(/^\s+|\s+$/g, "").length == 0){
	//var empty = true;
	alert("username et message required !!!");
	}else{
	//empty = false;
	//alert(empty);
	//alert ($('#user').val());
	//alert ($('#messa').val());
	var usern=$('#user').val();
	var mess=$('#messa').val();
	//alert($('#messa').val());
		var request=$.ajax({
			type: 'POST',
			url: 'php/traitement.php',
			data: {u:usern,m:mess}
		
		});
		request.done(function(res){
		$('#user').val(' ');
		$('#messa').val(' ');
		refrech(true);

		});

		
		
		
		
		
		}});
		
		

		
		

	
		
		
		
			
		
		
	
		
		
		
		
		
		
		
		

	});
	
	function refrech(val){	
     	
		
		
		

		
		
		
		
		
		
		
		var request=$.ajax({
			type: 'GET',
			url: 'php/refrech.php'
		});
		request.done(function(restable){
		var obj = $.parseJSON(restable);
		lastid = obj[0].id;
		//alert(obj[0].id);
		//alert(val);
      
		if (val == true && $("ul li").length == 10){
		/*$("li").each(function() {
		$(this).children("span").text(obj[it].name+" ID : "+obj[it].id);
		var nbrl="";
		it=it-1;
		});*/
		var nbrl="";
		$("li").first().fadeOut(700,function(){
		$("ul").append('<li class="message"><span class="name">'+obj[0].name+':</span><span class="msg">'+obj[0].message+'</span><div class="like-dislike"><img  id="hide"  data-id="'+obj[0].id+'"  src="images/dislike_photoshoped.png"><img id="like" data-id="'+obj[0].id+'"  class="image" src="images/Like_Facebook-533x533.png"><span id="nbrlike" data-like="'+obj[0].jaimes+'">'+nbrl+'</span></div></li>').fadeIn(2000);
		$(this).first().remove();
		hidlik();
		});
				

		
		}else if(val == true && $("ul li").length < 10){
		var nbrl="";
				$("ul").append('<li class="message"><span class="name">'+obj[0].name+':</span><span class="msg">'+obj[0].message+'</span><div class="like-dislike"><img  id="hide"  data-id="'+obj[0].id+'"  src="images/dislike_photoshoped.png"><img id="like" data-id="'+obj[0].id+'"  class="image" src="images/Like_Facebook-533x533.png"><span id="nbrlike" data-like="'+obj[0].jaimes+'">'+nbrl+'</span></div></li>').fadeIn(2000);
		hidlik();

		}else if(val == "refre"){
		if($("ul li").length == 10){
		//alert("true");
		$("li").each(function() {
		$(this).remove();
		});
		var i=obj.length-1;
		//alert(i);
				

	    while(i >= 0){
		var gh = $.inArray(obj[i].id,blackList);
		//console.log(gh);
		//alert(i);
		//alert(gh);
		if(gh == -1 ){
		var nbrl="";
		if(obj[i].jaimes > 0){nbrl = "("+obj[i].jaimes+")";}
		$("ul").append('<li class="message"><span class="name">'+obj[i].name+':</span><span class="msg">'+obj[i].message+'</span><div class="like-dislike"><img  id="hide"  data-id="'+obj[i].id+'"  src="images/dislike_photoshoped.png"><img id="like" data-id="'+obj[i].id+'"  class="image" src="images/Like_Facebook-533x533.png"><span id="nbrlike" data-like="'+obj[i].jaimes+'">'+nbrl+'</span></div></li>').fadeIn(2000);
		}
		i = i-1;
		hidlik();} 
		}else if(lastid != obj[0].id){
		lastid = obj[0].id;
		console.log(lastid != obj[0].id);
		var nbrl="";
				$("ul").append('<li class="message"><span class="name">'+obj[0].name+':</span><span class="msg">'+obj[0].message+'</span><div class="like-dislike"><img  id="hide"  data-id="'+obj[0].id+'"  src="images/dislike_photoshoped.png"><img id="like" data-id="'+obj[0].id+'"  class="image" src="images/Like_Facebook-533x533.png"><span id="nbrlike" data-like="'+obj[0].jaimes+'">'+nbrl+'</span></div></li>').fadeIn(2000);
		hidlik().toogle();
		}

}else{
//alert("false");
var i=obj.length-1;
		//alert(i);
				

	    while(i >= 0){
		//alert(i);
		var nbrl="";
		if(obj[i].jaimes > 0){nbrl = "("+obj[i].jaimes+")";}
		$("ul").append('<li class="message"><span class="name">'+obj[i].name+':</span><span class="msg">'+obj[i].message+'</span><div class="like-dislike"><img  id="hide"  data-id="'+obj[i].id+'"  src="images/dislike_photoshoped.png"><img id="like" data-id="'+obj[i].id+'"  class="image" src="images/Like_Facebook-533x533.png"><span id="nbrlike" data-like="'+obj[i].jaimes+'">'+nbrl+'</span></div></li>').fadeIn(2000);
		i = i-1;
		
		
		
		
		hidlik();
		
		
		
		
		
		
		
		
		} 

}
});
}

	
//alert(id);

 

//alert(y);

//alert($('"#'+id+'"').attr("src"));

function hidlik(){

		$("li").each(function() {
		$(this).children(".like-dislike").children('img').each(function(){
		
		
		//alert($(this).attr("id"));
		//var y =$(this).children(".like-dislike").children('#like').attr("src");
		$(this).click(function(){
		if($(this).attr("id") == "hide"){
		
		var idblacklisted = $(this).attr("data-id");
		blackList.push(idblacklisted);
		console.log($.inArray(idblacklisted,blackList)+"\n");
		
		//alert($(this).attr("data-id"));
		$(this).parent(".like-dislike").parent("li").css('background-color','#ff00004f').fadeOut(2000).toogle();;
		
		
		
		
		//alert("done").toogle();
		}else if($(this).attr("id") == "like"){
		
		var idn = $(this).attr("data-id");
		var idlik = $(this).parent(".like-dislike").children('#nbrlike').attr('data-like');
		var spanl =  $(this).parent(".like-dislike").children('#nbrlike');
		var likebut =$(this).parent(".like-dislike").children('#like');
		//alert(idn);
		var request=$.ajax({
			type: 'POST',
			url: 'php/likes.php',
			data: {ln:idlik,idl:idn}
		
		});
		request.done(function(resiu){
		var linn = parseInt(idlik) ;
		var newli =linn +1;
		//alert(newli);
spanl.html("("+newli+")");
likebut.css('width','21px').hide(3000).toogle();
		});
		
		//alert(idlik).toogle();
		}
		
		});
		});
		});

}