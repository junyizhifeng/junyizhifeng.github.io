(function () {
    var Rotate=function(ele,options) {
       this.ele=ele,
       this.defaults={
           x:-25,
           y:-20,
           w:$(window).width(),
           h:$(window).height(),
           type:'mousemove'
       },
       this.options=$.extend({},this.defaults,options);
    }
    Rotate.prototype={
        move:function () {
            var self=this;
            self.ele.on(this.options.type,function (event) {
                event=event||window.event;
                var moveX=(event.pageX/self.options.w-0.5)*self.options.x||10;
                var moveY=(event.pageY/self.options.h-0.5)*self.options.y||10;
                var n="rotateX(" +moveY + "deg) rotateY(" + moveX+ "deg) ";
                var r = {
                    "-webkit-transform": n,
                    "-moz-transform": n,
                    "-ms-transform": n,
                    "-o-transform": n,
                    transform: n
                };
                return self.ele.css(r);
            })
        }
    }
    $.fn.myRotate=function (options) {
        var rotate = new Rotate(this,options);
        return rotate.move();
    }
})(jQuery);

