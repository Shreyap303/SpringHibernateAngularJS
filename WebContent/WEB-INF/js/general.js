$(document).ready(function(){
	
	$(".uname").blur(function(){
		getUnameValidation();
	});
	$(".uname").keyup(function(){
		getUnameValidation();
	});
	$(".email").blur(function(){
		getEmailValidation();
	});
	$(".email").keyup(function(){
		getEmailValidation();
	});
	
	function getUnameValidation(){
		var uname= $(".uname").val();
		if(uname.length<4)
			{
			$(this).addClass("error");
            $(".errorUname").text("User Name should be more than 3 character");
			return false;
			}
		else
			{
			$(this).removeClass("error");
            $(".errorUname").text("");
			return true;
			}
	}
	
	function getEmailValidation(){
		var regExEmail = /^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([a-zA-Z]{2,4})$/;
		var email= $(".email").val();
		if(email.match(regExEmail))
			{
			$(this).removeClass("error");
            $(".errorEmail").text("");
            return true;
			}
		else
			{
			$(this).addClass("error");
            $(".errorEmail").text("Enter Valid Email");
			return false;
			}
	}
	
	$(".submit").click(function(){
		var uname= $(".uname").val();
		if(uname.length<4)
			{
			$(this).addClass("error");
            $(".errorUname").text("User Name should be more than 3 character");
			return false;
			}
		else
			{
			$(this).removeClass("error");
            $(".errorUname").text("");
			return true;
			}
	});
		
	$(".submit").click(function(){
		var regExEmail = /^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([a-zA-Z]{2,4})$/;
		var email= $(".email").val();
		if(email.match(regExEmail))
			{
			$(this).removeClass("error");
            $(".errorEmail").text("");
            return true;
			}
		else
			{
			$(this).addClass("error");
            $(".errorEmail").text("Enter Valid Email");
			return false;
			}
	});
	
});