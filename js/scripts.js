//http://www.willpeavy.com/minifier/

function getNavBar(){
	document.getElementById('navbar').innerHTML = "<div id='buttons' class='hide-phone'><button type='button' class='small blue' style='margin-right:12px' onclick='goToRegister();'>Sign up</button><label style='font-size:12px;'>Already a member?</label><button type='button' class='small green' style='margin-left:8px' onclick='goToLogIn();'>Log in</button></div><ul><li><a href='about.html'>Get Started</a></li><li><a href='contact.html'>Contact us</a></li></ul>";
}

function getFooter(){
	document.getElementById('footer').innerHTML = "<a href='http://jigsaw.w3.org/css-validator/check/referer'><img style='border:0;width:88px;height:31px' src='http://jigsaw.w3.org/css-validator/images/vcss' alt='CSS valid!'/></a>&nbsp;<a href='http://validator.w3.org/#validate_by_uri'><img src='http://www.w3.org/html/logo/badge/html5-badge-h-solo.png' width='63' height='64' alt='HTML5 Powered' title='HTML5 Powered'/></a><p>©2014 Photos 4 Life, All Rights Reserved</p>";
}

function getPhotos(){
	for (var i = 0; i<3; i++) {
		document.getElementById('main-left').innerHTML += "<div class='index-photo'><p>Posted by <a href='profile.html'>Italo</a> - 2 minutes ago</p><img class='align-left' src='images/filegeo.jpg' alt='abc'/><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euism...<a href=''>(read full description)</a></p><p><i class='icon-edit icon-2x'></i><a href='image.html'>1 comment(s)</a><br /><br /><i>Tags:</i>&nbsp<a href=''>bird</a>&nbsp<a href=''>nature</a></p><div class='fb-share-button' style='display:inline' data-href='http://student.csse.uwa.edu.au/~21382104/CITS3403/' data-width='200' data-type='button_count'></div></div><hr class='alt1' /><div class='clearfix'></div>";
	}
}

function searchPhotosUsers(a){
	var type = $('#selectType').val();
	if(type==0){
		type = "Photos";
	} else{
		type = "Users";
	}
	var query = $('#textSearch').val();
	alert("Search-> query:"+query+" type: "+type)
}

function test(){
	alert("Javascript working!");
}

function goToLogIn(){
	location.href="login.html";
}

function goToRegister(){
	location.href="register.html";
}

function makeLogin(){
	if(isLoginDataValid()){
		alert("Welcome, <USERNAME>. You are being redirected.");
		location.href = "index.html";
	}
}

function isLoginDataValid(){

	$('#formEmail').removeClass();
	$('#formPassword').removeClass();
	$('#noticeForm').html('');
	var email = $('#formEmail').val();
	var password = $('#formPassword').val();
	var valid = true;
	var re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

	if(email.length == 0){
		$('#formEmail').addClass('error');
		$('#noticeForm').html("<div class='notice error'><i class='icon-remove-sign icon-large'></i> Email must be provided<a href='#close' class='icon-remove'></a></div>");
		valid = false;
	} else if(!re.test(email)){
		$('#formEmail').addClass('error');
		$('#noticeForm').html("<div class='notice error'><i class='icon-remove-sign icon-large'></i> You must enter a valid email<a href='#close' class='icon-remove'></a></div>");
		valid = false;
	}
	if (password.length == 0) {
		$('#formPassword').addClass('error');
		$('#noticeForm').html($('#noticeForm').html() + "<div class='notice error'><i class='icon-remove-sign icon-large'></i> Password must be provided<a href='#close' class='icon-remove'></a></div>");
		valid = false;
	}
	return valid;
}