$(function() {
	var wait_load = $('.proPic');
	load();
	//跨浏览器获取视口大小
	function getInner() {
		if (typeof window.innerWidth != 'undefined') {
			return {
				width: window.innerWidth,
				height: window.innerHeight
			}
		} else {
			return {
				width: document.documentElement.clientWidth,
				height: document.documentElement.clientHeight
			}
		}
	}

	//获取某一个元素到最外层顶点的位置
	function offsetTop(element) {
		var top = element.offsetTop;
		var parent = element.offsetParent;
		while (parent != null) {
			top += parent.offsetTop;
			parent = parent.offsetParent;
		}
		return top;
	}

	//跨浏览器获取滚动条位置
	function getScroll() {
		return {
			top: document.documentElement.scrollTop || document.body.scrollTop,
			left: document.documentElement.scrollLeft || document.body.scrollLeft
		}
	}


	function load() {
		for (var i = 0; i < wait_load.length; i++) {
			var _this = wait_load.eq(i)[0];
			if (getInner().height + getScroll().top + 200 >= offsetTop(_this)) {
				$(_this).attr('src', $(_this).attr('data-src'));
			}
		}
	}
	
	$(window).on('scroll', function() {
		setTimeout(function() {
			load()
		}, 100);
	});
})