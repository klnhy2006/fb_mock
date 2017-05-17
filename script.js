$(document).ready(main);

function main()
{
	var box1Show=false;
	var box2Show=false;
	var box1Clicked=false;
	var box2Clicked=false;
	
	//default conditions
	if(!box1Show)
		$(".box1").hide();
	if(!box2Show)
		$(".box2").hide();
	
	//adding textboxes to chat area	
	$(".user_input1,.user_input2").keydown(function(key)
	{
		if(key.keyCode=="13")
		{
			key.preventDefault();
			if($(this).attr("class")=="user_input1")
			{
				var toAdd=$(".user_input1").val();
				var newElement=$("<br/>"+"<div class=\"chat owner\">"+toAdd+"</div>");
				newElement.insertBefore(".chat_push1");
				newElement=$("<br/>"+"<div class=\"chat other\">"+toAdd+"</div>");
				newElement.insertBefore(".chat_push2");
				$(".user_input1").val(""); //to clear input box
			}
			else 
			{
				var toAdd=$(".user_input2").val();
				var newElement=$("<br/>"+"<div class=\"chat owner\">"+toAdd+"</div>");
				newElement.insertBefore(".chat_push2");
				newElement=$("<br/>"+"<div class=\"chat other\">"+toAdd+"</div>");
				newElement.insertBefore(".chat_push1");
				$(".user_input2").val("");
			}
			$('.chatarea1').scrollTop($('.chatarea1')[0].scrollHeight);
			$('.chatarea2').scrollTop($('.chatarea2')[0].scrollHeight);
		}		
	});
	
	
	//closing a chatbox
	$(".close").click(function(){
		$(this).parent().parent().hide();
		var clicked=$(this).prev().text();
		if(clicked=="name1"){
			$(".box2").css({"top":"-43.5%","left":"55%"});
			box1Show=false;
		}
		else if(clicked=="name2"){
			$(".box1").css({"top":"-43.5%","left":"55%"});
			box2Show=false;
		}
	});
	
	//opening up a chatbox
	$(".contacts").click(function(){
		var clicked=$(this).children(".names").text();
		if(clicked=="name1" && !box1Show){
			box1Show=true;
			if(box2Show){
				$(".box1").css({"top":"-43.5%","left":"30%"});
				$(".box2").css({"top":"-93.5%","left":"55%"});
			}
			else
				$(".box1").css({"top":"-43.5%","left":"55%"});
			$(".box1").show();
		}
		else if(clicked=="name2" && !box2Show){
			box2Show=true;
			if(box1Show){
				$(".box2").css({"top":"-93.5%","left":"30%"});
				$(".box1").css({"top":"-43.5%","left":"55%"});
			}
			else
				$(".box2").css({"top":"-43.5%","left":"55%"});
			$(".box2").show();
		}
	});
	
	//clicking a chatbox
	$(".chatbox").click(function(){
		$(this).children("h3").css("background-color","#4080FF");
		if($(this).attr("class")=="chatbox box1")
		{
			box1Clicked=true;
			box2Clicked=false;
			$(".user_input1").focus();
			$(".box2 h3").css("background-color","white");
		}
		else
		{
			box2Clicked=true;
			box1Clicked=false;
			$(".user_input2").focus();
			$(".box1 h3").css("background-color","white");
		}
	});
	$(document).click(function(event) { 
		if($(event.target).closest(".chatbox").length==0) {
			if(box1Clicked)
			{
				$(".box1 h3").css("background-color","white");
				box1Clicked=false;
			}
			if(box2Clicked)
			{
				$(".box2 h3").css("background-color","white");
				box2Clicked=false;
			}
			
		}
	});
	
	//sending thumbs up
	$(".thumb_up").click(function(){
		if($(this).parent().attr("class")=="stickers2")
		{
			var newImg=$("<br/>"+"<div class=\"chat owner thumbs\">"+"<img src=\"blue-thumbs-up-icon-16.png\" class=\"thumb\"/>"+"</div>");
			newImg.insertBefore(".chat_push2");
			newImg=$("<br/>"+"<div class=\"chat other thumbs\">"+"<img src=\"blue-thumbs-up-icon-16.png\" class=\"thumb\"/>"+"</div>");
			newImg.insertBefore(".chat_push1");
		}
		else
		{
			var newImg=$("<br/>"+"<div class=\"chat owner thumbs\">"+"<img src=\"blue-thumbs-up-icon-16.png\" class=\"thumb\"/>"+"</div>");
			newImg.insertBefore(".chat_push1");
			newImg=$("<br/>"+"<div class=\"chat other thumbs\">"+"<img src=\"blue-thumbs-up-icon-16.png\" class=\"thumb\"/>"+"</div>");
			newImg.insertBefore(".chat_push2");
		}
		
		$('.chatarea1').scrollTop($('.chatarea1')[0].scrollHeight);
		$('.chatarea2').scrollTop($('.chatarea2')[0].scrollHeight);
	});
}