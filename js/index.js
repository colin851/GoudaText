$(function() {
	$("img").imgLoad({
		time: 10000000, //设置足够大 须等待图片载入完成，但是404的时候就杯具了...  
		callback: function() {
			$('.lodingBox').hide();
			$('.page-load').css({
				'opacity': 1
			})
		}
	});
	$(window).on("load", function() {
		var hash = location.hash;
		switch (hash) {
			case '#page1':
				$('.section1').addClass('active');
				break;
			case '#page2':
				$('.section2').addClass('active');
				break;
			case '#page3':
				$('.section3').addClass('active');
				break;
			case '#page4':
				$('.section4').addClass('active');
				break;
		}
		var imgheight = $(".item-one").find("img").height();
		$(".prew,.next").height(imgheight);
		$(".nav-li").on("click", function() {
			$(this).addClass("activeLi").siblings().removeClass("activeLi");
		});

		function initSlid() {
			window._curName = 0; //重置当前索引
			$(".area-text").html($(".item").find(".item-name").html());
			var item = $(".item");
			var len = item.length;
			for (i = 0; i < len; i++) {
				if (i == 0) {
					item.eq(i).css({
						'-webkit-transform': 'translate3d(-50%,-50%,0) scale(1)',
						'transform': 'translate3d(-50%,-50%,0) scale(1)',
						'z-index': len
					});
					item.eq(i).find(".mask").css({
						'opacity': '0'
					})
				}
				if (i == 1) {
					$(".item").eq(i).css({
						'-webkit-transform': 'translate3d(-100%,-50%,0) scale(0.8)',
						'transform': 'translate3d(-100%,-50%,0) scale(0.8)',
						'z-index': len-1
					});
					item.eq(i).find(".mask").css({
						'opacity': '.2'
					})
				}
				if (i == 2) {
					$(".item").eq(i).css({
						'-webkit-transform': 'translate3d(-140%,-50%,0) scale(0.6)',
						'transform': 'translate3d(-140%,-50%,0) scale(0.6)',
						'z-index': len-2
					});
					item.eq(i).find(".mask").css({
						'opacity': '.6'
					})
				}
				if (i == len - 2) {
					$(".item").eq(i).css({
						'-webkit-transform': 'translate3d(40%,-50%,0) scale(0.6)',
						'transform': 'translate3d(40%,-50%,0) scale(0.6)',
						'z-index': len-2
					});
					item.eq(i).find(".mask").css({
						'opacity': '.6'
					})
				}
				if (i == len - 1) {
					$(".item").eq(i).css({
						'-webkit-transform': 'translate3d(0,-50%,0) scale(0.8)',
						'transform': 'translate3d(0,-50%,0) scale(0.8)',
						'z-index': len-1
					});
					item.eq(i).find(".mask").css({
						'opacity': '.2'
					})
				}
				if (i < len - 2 && i > 2) {
					$(".item").eq(i).css({
						'-webkit-transform': 'translate3d(-50%,-50%,0) scale(0.6)',
						'transform': 'translate3d(-50%,-50%,0) scale(0.6)',
						'z-index': 0
					});
					item.eq(i).find(".mask").css({
						'opacity': '.6'
					})
				}
			}
		}
		$("#fullPage").fullpage({
			menu: true,
			scrollOverflow: true,
			verticalCenter: false,
			anchors: ['page1', 'page2', 'page3', 'page4'],
			afterLoad: function(link, index) {
				console.log(link);
				console.log(index);
				switch (index) {
					case 1:
						$(".nav-li").removeClass("activeLi");
						
						setTimeout(function() {
								$(".page-img-1").css({
									'opacity': '1',
									'transform': 'translateX(0)',
									'-webkit-transform': 'translateX(0)',
									'-ms-transform': 'translateX(0)',
									'-moz-transform': 'translateX(0)',
								});
							}, 100)
							//								move('.section1').set('background-position', '0').end();
						break;
					case 2:
						$(".nav-li").eq(0).addClass("activeLi").siblings().removeClass("activeLi");
						$(".line-box").addClass("show-line-box");
						$(".line").addClass("show-line");
						$(".contact-block").addClass("show-contact-block");
						break;
					case 3:
						$(".nav-li").eq(1).addClass("activeLi").siblings().removeClass("activeLi");
						initSlid();
						$(".area li img").addClass("show-shadow");
						//								setTimeout(function() {
						//									window._timer = window.setInterval(function() {
						//										$(".next").trigger("click");
						//									}, 2000);
						//								}, 2000);
						break;
					case 4:
						setTimeout(function() {
							$(".nav-li").eq(2).addClass("activeLi").siblings().removeClass("activeLi");
							$(".slip-item:nth-child(1)").addClass("into");
							$(".slip-item:nth-child(2)").addClass("into");
							$(".slip-item:nth-child(3)").addClass("into");
						}, 0)
						break;
				}
			},
			onLeave: function(link, index) {
				console.log(link);
				console.log(index);
				switch (link) {
					case 1:
						$(".page-img-1").css({
							'opacity': '0',
							'transform': 'translateX(300px)',
							'-webkit-transform': 'translateX(300px)',
							'-ms-transform': 'translateX(300px)',
							'-moz-transform': 'translateX(300px)',
						});
						break;
					case 2:
						$(".line-box").removeClass("show-line-box");
						$(".line").removeClass("show-line");
						$(".contact-block").removeClass("show-contact-block");
						break;
					case 3:
						//	window.clearInterval(window._timer);

						$(".item").css({
							'-webkit-transform': 'translate3d(-50%,-50%,0) scale(1)',
							'transform': 'translate3d(-50%,-50%,0) scale(1)',
						});
						setTimeout(function() {
							$(".item").eq(0).find(".mask").css({
								'opacity': 0
							});
							$(".item").css({
								'z-index': 1
							});
							$(".item").eq(0).css({
								'z-index': 5
							});
							$(".area li img").removeClass("show-shadow");
						}, 1000)
						break;
					case 4:
						$(".slip-item:nth-child(1)").removeClass("into");
						$(".slip-item:nth-child(2)").removeClass("into");
						$(".slip-item:nth-child(3)").removeClass("into");
						break;
				}
			},
		});


		function getRights() {
			var item = $(".item");
			var len = item.length;
			var styles = [];
			var fliters = []
			for (var i = 0; i < len; i++) {
				var positions = item.eq(i).attr("style");
				var opacitys = item.eq(i).find(".mask").attr("style")
				styles.push(positions);
				fliters.push(opacitys);
			};
			return {
				elm: item,
				len: len,
				styles: styles,
				fliters: fliters
			}
		}
		$(".prew").on("click", function() {
			var sild = getRights();
			var curText = 0;
			for (var i = 0; i < sild.len; i++) {
				if (i != 0) {
					sild.elm.eq(i).attr("style", sild.styles[i - 1]);
					sild.elm.eq(i).find(".mask").attr("style", sild.fliters[i - 1]);
				} else {
					sild.elm.eq(0).attr("style", sild.styles[sild.len - 1]);
					sild.elm.eq(0).find(".mask").attr("style", sild.fliters[sild.len - 1]);
				}
			}
			if (window._curName >= 0 && window._curName < sild.len - 1) {
				window._curName = window._curName + 1;
				$(".area-text").html(sild.elm.eq(_curName).find(".item-name").html());
			} else {
				window._curName = 0;
				$(".area-text").html(sild.elm.eq(0).find(".item-name").html());
			}

		});
		$(".next").on("click", function() {
			var sild = getRights();
			for (var i = 0; i < sild.len; i++) {
				if (i < sild.len - 1) {
					sild.elm.eq(i).attr("style", sild.styles[i + 1]);
					sild.elm.eq(i).find(".mask").attr("style", sild.fliters[i + 1]);
				} else {
					sild.elm.eq(i).attr("style", sild.styles[0]);
					sild.elm.eq(i).find(".mask").attr("style", sild.fliters[0]);
				}
			}

			if (window._curName == 0) {
				window._curName = sild.len - 1;
				$(".area-text").html(sild.elm.eq(sild.len - 1).find(".item-name").html());
			} else {
				window._curName = window._curName - 1;
				$(".area-text").html(sild.elm.eq(_curName).find(".item-name").html());

			}
		});
		//				$(".item,.prew,.next").hover(function() {
		//					window.clearInterval(window._timer);
		//				}, function() {
		//					window._timer = window.setInterval(function() {
		//						$(".next").trigger("click");
		//					}, 2000);
		//				})
	})
});