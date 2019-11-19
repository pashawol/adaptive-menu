
// тут все надо подключить
var $ = jQuery;
var btnToggle = $(".toggle-menu-mobile--js"),
		menu = $(".menu-mobile--js")

jQuery(document).ready(function ($) {
	// скрывает модальное окно при нажатии на сылку меню
	$(".form-wrap__link").click(function(){
		$.magnificPopup.close()
	});
	// /скрывает модальное окно
	// для свг
	svg4everybody({}); 
	JSCCommon.magnificPopupCall();
 
	JSCCommon.mobileMenu();



	function heightses() {

		var w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		var topH = $("header ").innerHeight();

 
		// конец добавил
		if (window.matchMedia("(min-width: 1200px)").matches) {

			btnToggle.removeClass("on");
			// $("body").removeClass("fixed");
			menu.removeClass("active");
			$("body").removeClass("fixed");
		}
	} 

	$(window).resize(function () {
		heightses();

	});
	$(window).on("load", function () {
		heightses();

	})

	heightses();
 


	JSCCommon = {
		// часть вызов скриптов здесь, для использования при AJAX
	
	
		magnificPopupCall: function () {
			$('.popup-with-move-anim').magnificPopup({
				type: 'inline',
	
				fixedContentPos: true,
				fixedBgPos: true,
	
				overflowY: 'auto',
	
				closeBtnInside: true,
				preloader: false,
	
				midClick: true,
				removalDelay: 300,
				mainClass: 'my-mfp-zoom-in',
				tClose: 'Закрыть (Esc)',
			});
	
			// / modal window
	
		},
		// /magnificPopupCall
		mobileMenu: function () {
			// закрыть/открыть мобильное меню
	
			btnToggle.click(function () {
	
				btnToggle.toggleClass("on");
				// $("body").toggleClass("fixed");
				menu.toggleClass("active");
				$("body, html").toggleClass("fixed");
				return false;
			});
			// $('.menu-mobile--js ul li a').on('click', function () {
			// 	$(".menu-mobile--js .toggle-mnu").click();
			// });
	
			$(document).mouseup(function (e) {
				var container = $(".menu-mobile--js.active");
				if (container.has(e.target).length === 0) {
					btnToggle.removeClass("on");
					// $("body").toggleClass("fixed");
					menu.removeClass("active");
					$("body, html").removeClass("fixed");
				}
			});
			// закрыть меню при горизонтальном свайпе
			$('.menu-mobile--js.active').swipe({
				swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
					if (direction == 'left') {
						btnToggle.removeClass("on");
						$(".menu-mobile--js.active").removeClass("active");
						$("body, html").removeClass("fixed");
					}
					if (direction == 'right') {
						btnToggle.removeClass("on");
						$(".menu-mobile--js.active").removeClass("active");
						$("body, html").removeClass("fixed");
					}
				},
				triggerOnTouchEnd: false,
			});
		},
		// /mobileMenu
	
	};
	 
});

