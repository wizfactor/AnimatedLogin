$(function() {
	var activeWindow = 0; //0 == None; 1 == Registration; 2 == Login

	$("#loginButton").hide();
	$("#registerButton").hide();
	$("#loginWindow").hide();
	$("#registerWindow").hide();
	$("#cancelButton").hide();
	$("#mainHeader").hide();


	$("#loginButton").delay(500).fadeIn(600);
	$("#registerButton").delay(500).fadeIn(600);
	$("#mainHeader").delay(500).fadeIn(300);

	$("#registerButton").click(function() {
		if(activeWindow == 0) {
			$("#loginButton").fadeOut(300);
			$("#mainHeader").fadeOut(300);

			$("#registerButton").animate({
				top: '375px',
				left: '50%',
				marginLeft: '-75px'
			});

			$("#cancelButton").delay(400).fadeIn(600);
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
			$("#mainHeader").fadeOut(300);

			$("#loginButton").animate({
				top: '375px',
				right: '50%',
				marginRight: '-75px'
			});

			$("#cancelButton").delay(400).fadeIn(600);
			$("#loginWindow").delay(400).fadeIn(600);

			activeWindow = 2;

			return;
		} else if(activeWindow == 2) { //User is submitting a registration form
			//alert("Sending Login Form");
		}
	});

	$("#cancelButton").click(function() {
		if(activeWindow == 1) {
			$("#registerWindow").fadeOut(600);
			$("#cancelButton").fadeOut(600);

			$("#registerButton").delay(400).animate({
				top: '300px',
				left: '35%',
				marginLeft: '0px'
			});

			$("#loginButton").delay(700).fadeIn(300);
			$("#mainHeader").delay(700).fadeIn(300);
		} else if(activeWindow == 2) {			
			$("#loginWindow").fadeOut(600);
			$("#cancelButton").fadeOut(600);

			$("#loginButton").delay(400).animate({
				top: '300px',
				right: '35%',
				marginRight: '0px'
			});

			$("#registerButton").delay(700).fadeIn(300);
			$("#mainHeader").delay(700).fadeIn(300);
		}

		activeWindow = 0;
	});
});