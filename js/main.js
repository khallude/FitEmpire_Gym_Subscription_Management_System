 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {

	"use strict";



	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {

			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();

    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		})

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	};
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();



	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 0,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        },
	        1200:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 4
	        }
		    }
			});
		}


		if ( $('.nonloop-block-14').length > 0 ) {
			$('.nonloop-block-14').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 20,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: true,
	          items: 2
	        },
	        1200:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        }
		    }
			});
		}

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    autoplay: true,
	    pauseOnHover: false,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});

	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');
   	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        'scrollTop': $(hash).offset().top
      }, 600, 'easeInOutCirc', function(){
        window.location.hash = hash;
      });

    });
  };
  OnePageNavigation();

  var siteScroll = function() {



  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	})

  };
	siteScroll();


	$(function () {
		$("#bgndVideo").YTPlayer();
	});

});
let selectedPaymentPlan = 'monthly'; // Default payment plan

function selectPlan(plan) {
	const proPriceElement = document.getElementById('standard-price');
	const beginnerPriceElement = document.getElementById('basic-price');
	const premiumPriceElement = document.getElementById('premium-price');

	const monthlyButton = document.querySelector('.monthly-button');
	const annualButton = document.querySelector('.annual-button');

	if (plan === 'monthly') {
		proPriceElement.innerText = 'Price: $79/month';
		beginnerPriceElement.innerText = 'Price: $49/month';
		premiumPriceElement.innerText = 'Price: $99/month';
		selectedPaymentPlan = 'monthly'; // Set selected payment plan to monthly

		// Monthly button selected
		monthlyButton.style.backgroundColor = '#D6FD51';
		monthlyButton.style.color = 'black';
		annualButton.style.backgroundColor = 'transparent';
		annualButton.style.color = '#D6FD51';
		monthlyButton.style.border = '1px solid #D6FD51';
		annualButton.style.border = 'none';
	} else {
		proPriceElement.innerText = 'Price: $799/year';
		beginnerPriceElement.innerText = 'Price: $499/year';
		premiumPriceElement.innerText = 'Price: $999/year';
		selectedPaymentPlan = 'annual'; // Set selected payment plan to annual

		// Annual button selected
		monthlyButton.style.color = 'white';
		monthlyButton.style.backgroundColor = 'transparent';
		annualButton.style.backgroundColor = '#D6FD51';
		annualButton.style.color = 'black';
		monthlyButton.style.border = 'none';
		annualButton.style.border = '1px solid #D6FD51';
	}
}

function joinPlan(planName) {
	let price;

	// Determine the price based on the selected payment plan
	if (planName === 'Standard Plan') {
		price = selectedPaymentPlan === 'monthly' ? '79/month' : '799/year';
	} else if (planName === 'Basic Plan') {
		price = selectedPaymentPlan === 'monthly' ? '49/month' : '499/year';
	} else if (planName === 'Premium Plan') {
		price = selectedPaymentPlan === 'monthly' ? '99/month' : '999/year';
	}

	// Redirect to the signup page with the selected plan and price
	const url = `/auth/signup.html?plan=${encodeURIComponent(planName)}&price=${encodeURIComponent(price)}`;
	window.location.href = url;
}



const logo2 = document.createElement('img');
logo2.src = 'logos/logo2.png';
logo2.alt = 'logo';
logo2.className = 'logo';
logo2.id = 'logo2';
logo2.style.position = 'fixed';
logo2.style.top = '5px';
logo2.style.left = '4rem';
document.querySelector('.site-navbar').appendChild(logo2);

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const logo1 = document.getElementById('logo1');
    if (scrollPosition > 100) {
        logo1.style.opacity = '0';
        logo2.style.display = 'block';
        logo2.style.opacity = '1';
        logo2.style.transition = 'opacity 0.5s ease';
    } else {
        logo1.style.opacity = '1';
        logo2.style.opacity = '0';
        logo2.style.display = 'none';
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth < 991) {
        logo2.style.left = '1rem';
    } else {
        logo2.style.left = '4rem';
    }
});

// Initial check for screen size
if (window.innerWidth < 991) {
    logo2.style.left = '1rem';
} else {
    logo2.style.left = '4rem';
}

let isExpanded = false;

function toggleCards() {
		const allCards = document.querySelectorAll('.trainer-card');

		if (isExpanded) {
				allCards.forEach((card, index) => {
						if (index >= 3) {
								card.classList.add('hidden');
						}
				});
				isExpanded = false;
				document.querySelector('.view-all').textContent = 'View All Trainers';
		} else {
				allCards.forEach(card => {
						card.classList.remove('hidden');
				});
				isExpanded = true;
				document.querySelector('.view-all').textContent = 'View Less';
		}
}

document.addEventListener('DOMContentLoaded', () => {
		const allCards = document.querySelectorAll('.trainer-card');
		allCards.forEach((card, index) => {
				if (index >= 3) {
						card.classList.add('hidden');
				}
		});
});
let currentIndex = 0;
const testimonials = [
		{ name: "Maria Adam", profession: "Nutritionist", image: "Testimonial-images/client-1.png", text: "I've been using FitEmpire for three months, and the personalized coaching has been a game-changer. Highly recommend it for anyone serious about fitness!" },
		{ name: "Emma Smith", profession: "Fitness Enthusiast", image: "Testimonial-images/client-2.png", text: "I joined FitEmpire six weeks ago, and it’s exceeded my expectations! The custom meal plans and supportive coaching have really boosted my progress." },
		{ name: "John Tim", profession: "CEO, Acme Corp" , image: "Testimonial-images/client-3.png", text: "Joining FitEmpire was a great choice! The expert support has kept me engaged, and I appreciate how the workouts fit seamlessly into my schedule." }
];
function updateTestimonial(index) {
	const testimonialCard = document.querySelectorAll('.testimonial-card');
	testimonialCard[0].querySelector('img').src = testimonials[index].image;
	testimonialCard[1].querySelector('h4').textContent = testimonials[index].name;
	testimonialCard[1].querySelector('span').textContent = testimonials[index].profession;
	testimonialCard[1].querySelector('p').textContent = testimonials[index].text;

	const otherClients = testimonials.filter((_, i) => i !== index).slice(0, 2);
	testimonialCard[2].querySelector('img').src = otherClients[0].image;
	testimonialCard[3].querySelector('img').src = otherClients[1].image;
}

function prevTestimonial() {
	currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
	updateTestimonial(currentIndex);
}

function nextTestimonial() {
	currentIndex = (currentIndex + 1) % testimonials.length;
	updateTestimonial(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
	updateTestimonial(currentIndex);
});
document.addEventListener('DOMContentLoaded', () => {
	updateTestimonial(currentIndex);
	window.addEventListener('resize', handleResize);
	handleResize();
});

document.addEventListener('DOMContentLoaded', () => {
	updateTestimonial(currentIndex);
	window.addEventListener('resize', handleResize);
	handleResize();
});
document.addEventListener('DOMContentLoaded', () => {
	updateTestimonial(currentIndex);
	window.addEventListener('resize', handleResize);
	handleResize();
});
document.addEventListener('DOMContentLoaded', () => {
	updateTestimonial(currentIndex);
	window.addEventListener('resize', handleResize);
	handleResize();
});

function handleResize() {
	const flexBlock = document.querySelector('.flex-block');
	const speechCard = document.querySelector('.speech');
	const testimonialGrid = document.querySelector('.testimonial-grid');
	const testimonialCards = document.querySelectorAll('.testimonial-card img');

	if (window.innerWidth <= 768) {
			flexBlock.style.display = 'none';
			speechCard.style.gridColumn = 'span 2';
	} else {
			flexBlock.style.display = 'flex';
			speechCard.style.gridColumn = '';
	}

	if (window.innerWidth <= 481) {
			testimonialGrid.style.display = 'flex';
			testimonialGrid.style.flexDirection = 'column';
			testimonialGrid.style.alignItems = 'flex-start';
			testimonialCards.forEach(card => {
					card.style.height = '250px';
			});
	} else {
			testimonialGrid.style.display = '';
			testimonialGrid.style.flexDirection = '';
			testimonialGrid.style.alignItems = '';
			testimonialCards.forEach(card => {
					card.style.height = '';
			});
	}
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
	event.preventDefault();

	const feedback = document.getElementById('feedback');
	const formData = new FormData(this);

	// Basic form validation
	for (let [key, value] of formData.entries()) {
			if (!value) {
					feedback.textContent = 'All fields are required.';
					feedback.className = 'alert alert-danger';
					feedback.style.display = 'block';
					return;
			}
	}

	// AJAX submission
	fetch('your-form-processing-url', {
			method: 'POST',
			body: formData
	})
	.then(response => response.json())
	.then(data => {
			if (data.success) {
					feedback.textContent = 'Your message has been sent successfully!';
					feedback.className = 'alert alert-success';
			} else {
					feedback.textContent = 'There was an error sending your message. Please try again.';
					feedback.className = 'alert alert-danger';
			}
			feedback.style.display = 'block';
	})
	.catch(error => {
			feedback.textContent = 'There was an error sending your message. Please try again.';
			feedback.className = 'alert alert-danger';
			feedback.style.display = 'block';
	});
});
