(function() {
	$.fn.imgLoad = function(options) {
		var opts = $.extend({
			time: 4000, ///等待载入时间，如果超过这个时间就直接执行回调  
			callback: function() {} //默认回调  
		}, options);
		var $this = this,
			i = 0,
			j = 0,
			len = this.length;
		$this.each(function() {
			var _this = this,
				dateSrc = $(_this).attr("date-src"),
				imgsrc = dateSrc ? dateSrc : _this.src;
			var img = new Image();
			img.onload = function() {
				img.onload = null;
				_this.src = imgsrc;
				i++;
			};
			img.src = imgsrc;
		});
		var t = window.setInterval(function() {
			j++;
			$("#msg").html(i);
			if (i == len || j * 200 >= opts.time) {
				window.clearInterval(t);
				opts.callback();
			};
		}, 200);
	}

})(jQuery);