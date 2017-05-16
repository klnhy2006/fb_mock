$(document).ready(main);

function main(){
	var box1Show=true;
	var box2Show=true;
	var box1Clicked=false;
	var box2Clicked=false;
	
	//adding textboxes to chat area
	$("input").change(function(){
		if($(this).attr("name")=="user_input1")
		{
			var toAdd=$("input[name=\"user_input1\"]").val();
			var newElement=$("<br/>"+"<div class=\"chat owner\">"+toAdd+"</div>");
			newElement.insertBefore(".chat_push1");
			newElement=$("<br/>"+"<div class=\"chat other\">"+toAdd+"</div>");
			newElement.insertBefore(".chat_push2");
			$("input[name=\"user_input1\"]").val(""); //to clear input box
		}
		else 
		{
			var toAdd=$("input[name=\"user_input2\"]").val();
			var newElement=$("<br/>"+"<div class=\"chat owner\">"+toAdd+"</div>");
			newElement.insertBefore(".chat_push2");
			newElement=$("<br/>"+"<div class=\"chat other\">"+toAdd+"</div>");
			newElement.insertBefore(".chat_push1");
			$("input[name=\"user_input2\"]").val("");
		}
		$('.chatarea1').scrollTop($('.chatarea1')[0].scrollHeight);
		$('.chatarea2').scrollTop($('.chatarea2')[0].scrollHeight);
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
	$(".contacts span").click(function(){
		var clicked=$(this).text();
		if(clicked=="name1"){
			box1Show=true;
			if(box2Show){
				$(".box1").css({"top":"-43.5%","left":"30%"});
				$(".box2").css({"top":"-93.5%","left":"55%"});
			}
			else
				$(".box1").css({"top":"-43.5%","left":"55%"});
			$(".box1").show();
		}
		else if(clicked=="name2"){
			box2Show=true;
			if(box1Show)
				$(".box2").css({"top":"93.5%","left":"30%"});
			$(".box2").show();
		}
	});
	
	//clicking a chatbox
	$(".chatbox").click(function(){
		$(this).children("h3").css("background-color","#4080FF");
		if($(this).attr("class")=="chatbox box1")
		{
			box1Clicked=true;
			$("input[name=\"user_input1\"]").focus();
		}
		else
		{
			box2Clicked=true;
			$("input[name=\"user_input2\"]").focus();
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