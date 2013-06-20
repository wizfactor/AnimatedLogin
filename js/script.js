$(function() {
	var activeWindow = 0; //0 == None; 1 == Registration; 2 == Login

	$("#loginButton").hide();
	$("#registerButton").hide();
	$("#loginWindow").hide();
	$("#registerWindow").hide();


	$("#loginButton").delay(500).fadeIn(600);
	$("#registerButton").delay(500).fadeIn(600);

	$("#registerButton").click(function() {
		if(activeWindow == 0) {
			$("#loginButton").fadeOut(300);

			$("#registerButton").animate({
				top: '375px',
				left: '50%',
				marginLeft: '-75px'
			});

			$("#registerWindow").delay(400).fadeIn(600);

			activeWindow = 1;

			return;
		} else if(activeWindow == 1) { //User is submitting a registration form
			//alert("Sending Registration Form");
		}
	});	

	$("#loginButton").click(function() {
		if(activeWindow == 0) {
			$("#registerButton").fadeOut(300);

			$("#loginButton").animate({
				top: '375px',
				right: '50%',
				marginRight: '-75px'
			});

			$("#loginWindow").delay(400).fadeIn(600);

			activeWindow = 2;

			return;
		} else if(activeWindow == 2) { //User is submitting a registration form
			//alert("Sending Login Form");
		}
	});
});