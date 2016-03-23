var baloon = $('.scroll-icon');

function runIt() {
	baloon.animate({
		bottom: '+=15'
	}, 400);
	baloon.animate({
		bottom: '-=15'
	}, 400, runIt);
}
$('input').on('focus', function (event) {});
//window.requestAnimationFrame(runIt); $('#scene').parallax(); $('#scene-1').parallax(); $('#scene-2').parallax(); $('#scene-prev').parallax(); $('#scene-2').parallax(); $('#scene-mobile').parallax();
$(document).ready(function () {
	var position = 0;
	var page = 0;

	var start = 0;
	$('.info-1').addClass('fadeInUp');
	$('.info-2').addClass('fadeOutDown');
	//$('#brand').attr('data', 'assets/images/logo-black.svg')

	var myslideIndex = 0;
	var sliding = false;
	// contact us form
	$('.submit').click(function (e) {
		e.preventDefault();
		  e.stopPropagation();
		  var feedback = {
			  contact: '',
			  feedback: 'asdf d',
			  name: ''
		  };

		  if (feedback.name == "") {

			  feedback.name = "Web anonymous user";
		  }
		if (feedback.feedback != "" || feedback.feedback != null) {


			$.ajax({
				url: "http://cherry.triconslabs.com/v1/util/anonymousfeedback.json",
				type: "POST",
				dataType: "json",
				data: feedback,
				async: false,
				success: function () {
					alert('asdf')
					return false;
				},
				error: function () {

					alert("Couldn't post feedback");
					$('.fc-1').css({'opacity' : 0,'display':'none'});
					$('.fc-2').css({'opacity': 1 , 'display':'block'});
					return false;
				}

			});
		}

	});
	$('.scroll-icon').click(function () {

		if ($('#scroll-img').hasClass('up')) {
			$.fn.fullpage.moveSectionUp();
		} else {

			$.fn.fullpage.moveSectionDown();
		}
	});
	console.log($('#feature-1 p').addClass('cool-text'));
	$('#fullpage').fullpage({
		touchSensitivity: 15,
		lockAnchors: true,

		anchors: [
			'feature4',
			'feature2',
			'feature1',
			'feature11',
			'feature13',
			'feature14',
			'feature15',
			'feature16',
			'feature3'
		],
		scrollingSpeed: 700,
		keyboardScrolling: true,
		navigation: true,
		//responsiveWidth: 600,
		sectionSelector: '.section',
		slideSelector: '.slide',
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
		normalScrollElements: '#element1, #element2',
		verticalCentered: true,
		controlArrows: false,
		fitToSection: true,

		afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
			if ($(window).width() > 600) {

				//after slide loads
				console.log('afterSlideLoad');
				sliding = false;
				console.log(myslideIndex + ' <-- prev-myslideIndex -- currentSlideIndex --> ' + slideIndex);
				myslideIndex = slideIndex;
			}
		},
		afterLoad: function (anchorLink, index) {
			//after section loads

			if ($(window).width() > 400) {
				if (index == 6) {
					var val,
						graphicBool;
					$('.count').each(function () {
						console.log("thissing");

						console.log($(this).hasClass('gr-1'));
						if ($(this).hasClass('gr-1')) {
							val = 2232;
						} else if ($(this).hasClass('gr-2')) {
							val = 39979;
						} else if ($(this).hasClass('gr-3')) {
							val = 781
						}
						$(this).prop('Counter', 0).animate({
							Counter: val
						}, {
							duration: 1500,
							easing: 'linear',
							step: function (now) {

								$(this).text(Math.ceil(now));
								$(this).removeClass('gr-1 gr-2 gr-3');
							}
						});
					});
				}
			}
			if (index == 7) {
				$('#scroll-img').addClass('up');
			} else if (index == 1) {
				$('#scroll-img').removeClass('up');
			}

		},
		onLeave: function (index, nextIndex, direction) {
			//before section leaves
			console.log(index);
			$('p').removeClass('cool-text');
			if (index <= 4 && nextIndex > 4) {
				$('#brand').attr('data', 'assets/images/logo-black.svg')
			} else if (index >= 5 && nextIndex < 5 && myslideIndex == 0) {
				console.log(nextIndex);
				$('#brand').attr('data', 'assets/images/logo-white.svg')
			}
			if ($(window).width() > 600) {
				if (nextIndex == 1) {
					$('#feature-1 p').addClass('cool-text');
				} else if (nextIndex == 2) {
					$('#feature-2 p').addClass('cool-text');
				} else if (nextIndex == 3) {
					$('#feature-4 p').addClass('cool-text');
				} else if (nextIndex == 4) {
					$('#feature-5 p').addClass('cool-text');
				} else if (nextIndex == 6) {
					$('#feature-7 span').addClass('cool-text');
					$('footer').addClass('dark-theme');

				} else if (nextIndex == 7) {
					$('footer').removeClass('dark-theme');
					$('footer').addClass('rock-bottom');
				} else if (nextIndex == 5) {
					$('.mobile-section').addClass('cool-text');
					$('#fp-nav ul li a span').addClass('dark-theme');
					$('footer').addClass('dark-theme');

				} else {
					$('.mobile-section').addClass('cool-text');
				}

			}
			if (nextIndex == 7) {
				$('footer').addClass('rock-bottom');
			} else if (index == 7) {
				$('footer').removeClass('rock-bottom');
			}
			console.log('leaving ....');
			if (sliding) {
				return false;
			}
			if (index == 5) {

				if (nextIndex != (index + 1) && nextIndex != (index - 1)) {
					$('#fp-nav ul li a span').removeClass('dark-theme');
					$('footer').removeClass('dark-theme');

					$.fn.fullpage.moveTo(nextIndex)
					//moveTo nextIndex
				} else {

					if (direction == 'down') {
						//        console.log('down '+ 'myslideIndex '+myslideIndex);
						if (myslideIndex < 3) {
							if ($(window).width() > 600) {

								if (myslideIndex == 0) {
									$('.info-1').removeClass('fadeInUp');
									$('.info-1').addClass('fadeOutDown');
									$('.info-2').removeClass('fadeOutDown');
									$('.info-2').addClass('fadeInUp');
									$('.info-2').css('display', 'block')
									//$('.info-2').hide(500);  $('#feat1').addClass('animated fadeInUp');
									$('.bar-slider').css({'transform': 'translateX(150px)'})
								} else if (myslideIndex == 1) {
									$('.info-2').removeClass('fadeInUp');
									$('.info-2').addClass('fadeOutDown');
									$('.info-3').removeClass('fadeOutDown');
									$('.info-3').addClass('fadeInUp');
									$('.info-3').css('display', 'block')
									$('.bar-slider').css({'transform': 'translateX(302px)'})
								} else if (myslideIndex == 2) {
									$('.info-3').removeClass('fadeInUp');
									$('.info-3').addClass('fadeOutDown');
									$('.info-4').removeClass('fadeOutDown');
									$('.info-4').addClass('fadeInUp');
									$('.info-4').css('display', 'block');
									$('.bar-slider').css({'transform': 'translateX(450px)'})
								}

								sliding = true;
								$.fn.fullpage.moveSlideRight();
								//myslideIndex++;
								return false;
							}
						}
					} else if (direction == 'up') {

						if (myslideIndex > 0) {
							if ($(window).width() > 600) {

								if (myslideIndex == 3) {
									$('.info-4').removeClass('fadeInUp');
									$('.info-4').addClass('fadeOutDown');
									$('.info-3').removeClass('fadeOutDown');
									$('.info-3').addClass('fadeInUp');
									$('.bar-slider').css({'transform': 'translateX(302px)'})
									//$('.info-2').css('display' , 'block')
								} else if (myslideIndex == 2) {
									$('.info-3').removeClass('fadeInUp');
									$('.info-3').addClass('fadeOutDown');
									$('.info-2').removeClass('fadeOutDown');
									$('.info-2').addClass('fadeInUp');
									$('.bar-slider').css({'transform': 'translateX(150px)'})
									//$('.info-2').css('display' , 'block')
								} else if (myslideIndex == 1) {
									$('.info-2').removeClass('fadeInUp');
									$('.info-2').addClass('fadeOutDown');
									$('.info-1').removeClass('fadeOutDown');
									$('.info-1').addClass('fadeInUp');
									$('.bar-slider').css({'transform': 'translateX(0px)'})
								}
								sliding = true;
								$.fn.fullpage.moveSlideLeft();
								//myslideIndex --;
								return false;
							}
						} else {
							$('#fp-nav ul li a span').removeClass('dark-theme');
							$('footer').removeClass('dark-theme');

						}
					}
				}
			}

		},
		onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {}

	});

});
