//http://www.willpeavy.com/minifier/
//contact.photos4life@gmail.com
//http://try.powermapper.com/Demo/ViewSitemap/9e6c72e5-b2cb-4267-8b08-a2b660c0009d

function buildNoticeError(msg) {
	var htmlFirst = "<div style='margin-top:0px'class='notice error'><i class='icon-remove-sign icon-large'></i>";
	var htmlLast = "<a href='#close' class='icon-remove'></a></div>";
	return htmlFirst + msg + htmlLast;
}

function getNavBar() {
	document.getElementById('navbar').innerHTML = "<div id='buttons' class='hide-phone'><button type='button' class='small blue' style='margin-right:12px' onclick='goToRegister();'>Sign up</button><label style='font-size:12px;'>Already a member?</label><button type='button' class='small green' style='margin-left:8px' onclick='goToLogIn();'>Log in</button></div><ul><li><a href='index.html'>Photos4Life</a></li></ul>";
}

function getFooter() {
	document.getElementById('footer').innerHTML = "<div>Site Map</div><div class='col_7 footerLeft'><ul class='links'><li><a style='color:inherit' href='index.html'>Index</a>&nbsp;&nbsp;|&nbsp;&nbsp;</li><li><a style='color:inherit' href='contact.html'>Contact us</a>&nbsp;&nbsp;|&nbsp;&nbsp;</li><li><a style='color:inherit' href='register.html'>Sign up</a>&nbsp;&nbsp;|&nbsp;&nbsp;</li><li><a style='color:inherit' href='login.html'>Log in</a>&nbsp;&nbsp;|&nbsp;&nbsp;</li><li><a style='color:inherit' href='about.html'>Disclaimer/About us</a>&nbsp;&nbsp;|&nbsp;&nbsp;</li><li><a style='color:inherit' href='reference.html'>Reference</a></li></ul><p>©2014 Photos 4 Life, All Rights Reserved</p></div><div class='col_5' class='footerRight'><div><a href='http://css-validator.org/check/referer'><img style='border:0;width:88px;height:31px' src='http://css-validator.org/images/vcss.png' alt='Valid CSS!' /></a><a href='http://validator.w3.org/check/referer'><img src='http://www.w3.org/html/logo/badge/html5-badge-h-solo.png' width='63' height='64' alt='HTML5 Powered' title='HTML5 Powered'/></a></div><p>Last update:&nbsp;&nbsp;"+getLastModifiedFullDate()+"</p></div>";
}

function getLastModifiedDate() {
	return new Date(Date.parse(document.lastModified));
}

function getLastModifiedFullDate() {
	var newObjDate = getLastModifiedDate();
	var date = [newObjDate.getDate(),newObjDate.getMonth(),newObjDate.getFullYear()].join("/");
	var time = [newObjDate.getHours(),newObjDate.getMinutes(),newObjDate.getSeconds()].join(":");
	return date + " " + time;
}

function searchPhotosUsers(a) {
	var query = $('#textSearch').val();
	if(query.length == 0) {
		alert('Please, provide some information.');
	} else {
		var type = $('#selectType').val();
		if(type==0){
			type = "Photos";
		} else{
			type = "Users";
		}
		$('#main-left').html('Sorry, no results were found.');
	}
}

function goToLogIn() {
	location.href="login.html";
}

function goToRegister() {
	location.href="register.html";
}

function makeLogin() {
	if(isLoginDataValid()) {
		alert("Welcome, <USERNAME>. You are being redirected.");
		location.href = "index.html";
	}
}

function getDescriptionImageById(idImage){
	switch(idImage){
		case "1":
			return "This very rare bird was found in Sydney. I was extremelly lucky to find it. Does anyone know the breed?";
			break;
		case "2":
			return "I made this picture using microsoft paint.";
			break;
		case "3":
			return "I took this picture last winter in Asia. Awesome, isn't it?";
			break;
		case "4":
			return "It's hard to describe how beautiful it is this place.";
			break;
		case "5":
			return "Hi, I bought a nice laptop. See the surface details.";
			break;
	}
	return "The user has not written a description.";
}

function getTagsImageById(idImage){
	switch(idImage){
		case "1":
			return ['bird','nature'];
			break;
		case "2":
			return ['computer','paint','bottle'];
			break;
		case "3":
			return ['holidays','vacation','sea'];
			break;
		case "4":
			return ['bridge','NZ'];
			break;
		case "5":
			return ['laptop','power button','computer'];
			break;
	}
	return "";
}



function isLoginDataValid() {
	$('#formEmail').removeClass();
	$('#formPassword').removeClass();
	$('#noticeForm').html('');
	var email = $('#formEmail').val();
	var password = $('#formPassword').val();
	var valid = true;
	var re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

	if(email.length == 0) {
		$('#formEmail').addClass('error');
		$('#noticeForm').html(buildNoticeError("Email must be provided"));
		valid = false;
	} else if(!re.test(email)) {
		$('#formEmail').addClass('error');
		$('#noticeForm').html(buildNoticeError("You must enter a valid email"));
		valid = false;
	}
	if (password.length == 0) {
		$('#formPassword').addClass('error');
		$('#noticeForm').html($('#noticeForm').html() + buildNoticeError("Password must be provided"));
		valid = false;
	}

	return valid;
}

function passwordsMatch() {
 	return $('#inputPassword').val() == $('#inputPasswordRepeat').val();
}

function checkPasswords() {
	$('#inputPasswordRepeat').removeClass();
	$('#noticeForm').html('');
	if(!passwordsMatch()) {
		$('#inputPasswordRepeat').addClass('error');
		$('#noticeForm').html($('#noticeForm').html() + buildNoticeError("Passwords don't match"));
	}
}

function submitRegisterData() {
	if(isRegisterDataValid()) {
		alert("Congratulations. Your data has been accepted. Now you're a member.");
		location.href = "index.html";
	}
}

function checkPasswordsOnBlur() {


}

function isRegisterDataValid() {
	$('#inputFirstName').removeClass();
	$('#inputSurname').removeClass();
	$('#inputEmail').removeClass();
	$('#inputPassword').removeClass();
	$('#inputPasswordRepeat').removeClass();
	$('#noticeForm').html('');

	var firstName = $('#inputFirstName').val();
	var surname = $('#inputSurname').val();
	var email = $('#inputEmail').val();
	var password = $('#inputPassword').val();
	var passwordRepeat = $('#inputPasswordRepeat').val();

	var re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	var valid = true;

	if(firstName.length == 0) {
		valid = false;
		$('#inputFirstName').addClass('error');
		$('#noticeForm').html($('#noticeForm').html() + buildNoticeError("First name is required"));
	}

	if(surname.length == 0) {
		valid = false;
		$('#inputSurname').addClass('error');
		$('#noticeForm').html($('#noticeForm').html() + buildNoticeError("Surname is required"));
	}

	if(email.length == 0) {
		valid = false;
		$('#inputEmail').addClass('error');
		$('#noticeForm').html($('#noticeForm').html() + buildNoticeError("Email is required"));
	} else if(!re.test(email)) {
		valid = false;
		$('#inputEmail').addClass('error');
		$('#noticeForm').html($('#noticeForm').html() + buildNoticeError("You must provide a valid email"));
	}

	if(password.length == 0) {
		valid = false;
		$('#inputPassword').addClass('error');
		$('#noticeForm').html($('#noticeForm').html() + buildNoticeError("Password is required"));
	}

	if(passwordRepeat.length == 0) {
		valid = false;
		$('#inputPasswordRepeat').addClass('error');
		$('#noticeForm').html($('#noticeForm').html() + buildNoticeError("You must confirm your password"));
	}

	if(password.length != 0 && passwordRepeat.length != 0 && !passwordsMatch()) {
		valid = false;
		$('#inputPassword').addClass('error');
		$('#inputPasswordRepeat').addClass('error');
		$('#noticeForm').html($('#noticeForm').html() + buildNoticeError("Passwords don't match"));
	}

	if(!valid) {
		location.href="#";
	}

	return valid;
}

function submitContact() {
	$('#noticeForm').html('');
	var name = $('#inputName').val();
	var email = $('#inputEmail').val();
	var message = $('#inputMessage').val();
	$('#inputName').removeClass();
	$('#inputEmail').removeClass();
	$('#inputMessage').removeClass();

	var re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	var valid = true;

	if(name.length == 0) {
		valid = false;
		$('#inputName').addClass('error');
		$('#noticeForm').html($('#noticeForm').html() + buildNoticeError("Name is required"));
	}

	if(email.length == 0) {
		valid = false;
		$('#inputEmail').addClass('error');
		$('#noticeForm').html($('#noticeForm').html() + buildNoticeError("Email is required"));
	} else if(!re.test(email)) {
		valid = false;
		$('#inputEmail').addClass('error');
		$('#noticeForm').html($('#noticeForm').html() + buildNoticeError("Invalid email"));
	}

	if(message.length == 0) {
		valid = false;
		$('#inputMessage').addClass('error');
		$('#noticeForm').html($('#noticeForm').html() + buildNoticeError("Message is required"));
	}

	if(!valid) {
		location.href="#";
	} else if(valid) {
		alert('Your message was sent. Thank you');
	}
}