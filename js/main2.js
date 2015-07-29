$(document).ready(function () {

	$('#primary-nav li').click(function(e) {
		e.preventDefault();


		//handles slideDown
			
			//if (slide-down is not open)
		if(!$('#slide-down').hasClass('open')) {
			//show slide-down
			//slide-down.addClass('open')
			$('#slide-down').show().addClass('open');

			//active class for li
			$(this).addClass('active');
		}

		//else if(slide-down is open and link has active class)
		else if($('#slide-down').hasClass('open') && $(this).hasClass('active')) {
			
			//hide slide-down and .removeClass('open')
			$('#slide-down').hide().removeClass('open');

			//remove active class for li
			$(this).removeClass('active');

		}

		//else (clicked on non-active link while slide-down is open)

		else {
			//changes active li
			$(this).addClass('active');
		}

		//handles primary nav active
		$(this).siblings().removeClass('active');


		//handles hide / show of drop sections
		var section = $(this).children('a').attr('href');

		$(section).show();

		$(section).siblings().hide();


	});

});