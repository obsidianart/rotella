/*! Rotella - v0.1.0 - 2013-04-06
* https://github.com/obsidianart/rotella
* Copyright (c) 2013 ; Licensed MIT */
!function ($) {

	"use strict"; // jshint ;_;


	/* ROTELLA PUBLIC CLASS DEFINITION
	* =============================== */

	var Rotella = function (element, options) {
		this.init('rotella', element, options)
	}

	Rotella.prototype = {

		constructor: Rotella

		, init: function (type, element, options) {
			this.type = type
			this.$element = $(element)
			this.options = this.getOptions(options)
			this.timer;
		}

		, getOptions: function (options) {
			options = $.extend({}, $.fn[this.type].defaults, this.$element.data(), options)
			return options
		}

		, goTo: function (/*percent*/){
			//TODO:check if time or percent
			var isPercent = true


			if (isPercent) {

			}
		}

		, start: function(){
			this.start = Date.now();
			this._update();
		}

		, stop: function(){

		}

		, reset: function(){

		}

		, _update: function(){
			console.log("update");
			this.timer = setTimeout($.proxy(this._update, this), 100);
		}

		, destroy: function(){
			this.timer && clearTimeout (this.timer);
		}
	}



	/* ROTELLA PLUGIN DEFINITION
	* ========================= */

	var old = $.fn.rotella

	$.fn.rotella = function ( option ) {
		return this.each(function () {
			var $this = $(this)
			, data = $this.data('rotella')
			, options = typeof option === 'object' && option
			if (!data) $this.data('rotella', (data = new Rotella(this, options)))
			if (typeof option === 'string') data[option]()
		})
	}

	$.fn.rotella.Constructor = Rotella

	$.fn.rotella.defaults = {
		time: 5000 //Time for a full loop in ms
		, show: "time" //Show time or percentage
		, starting: 0
		, sprite: "loader.png"
		, width: 50
		, height: 50
	}


	/* ROTELLA NO CONFLICT
	* =================== */

	$.fn.rotella.noConflict = function () {
		$.fn.rotella = old
		return this
	}

}(jQuery);