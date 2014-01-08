;(function($,undefined){
	$.fn.equalize = function(length){
		for(var i = 0; i < this.length; i+=length) {
			var elems = this.slice(i, i+length), equalizeArray = [];
			for(j = 0; j < length; j++){
				equalizeArray.push(elems.eq(j).outerHeight());
			}
			var height = Math.max.apply( Math, equalizeArray);
			elems.css('min-height', height);
		}
		return this;
	}
})(jQuery);