<<<<<<< Updated upstream
<<<<<<< HEAD
!function(){$("body > section").hammer().data("hammer").get("pan").set({direction:Hammer.DIRECTION_HORIZONTAL});var o=function(o,c){var n=c||$("body > section:eq("+Math.round($(window).scrollLeft()/900)+")"),e=o||$("body > section:eq(0)");console.log(n,e);var i=new TimelineMax({repeat:1});$.each(n.children(".box"),function(o,c){var i=new TimelineMax,t=100*Math.random(),l=100*Math.random();i.fromTo(c,3,{left:0,top:0,opacity:100},{left:10*t-500+"%",top:10*l-500+"%"}),n.selector!=e.selector&&i.to(c,1,{opacity:0})}),$.each(e.children(".box"),function(o,c){var n=new TimelineMax,e=100*Math.random(),i=100*Math.random();n.fromTo(c,2,{left:10*e-500+"%",top:10*i-500+"%",opacity:100},{left:0,top:0,opacity:100})})};o()}(),$("div .exit").click(function(){console.log("exit")}),$("div .click-to-paris").click(function(){console.log("paris")}),$("div .click-to-london").click(function(){console.log("london")}),$("div .click-to-ny").click(function(){console.log("ny")}),$("div .click-to-create").click(function(){console.log("create")}),$("div .click-next").click(function(){console.log("next")});
=======
!function(){$.widget("ui.custommouse",$.ui.mouse,{options:{mouseStart:function(o){console.log("mouse start")},mouseDrag:function(o){console.log("mouse drag")},mouseStop:function(o){console.log("mouse stop")},mouseCapture:function(o){return!0}},_mouseStart:function(o){return this.options.mouseStart(o)},_mouseDrag:function(o){return this.options.mouseDrag(o)},_mouseStop:function(o){return this.options.mouseStop(o)},_mouseCapture:function(o){return this.options.mouseCapture(o)},widgetEventPrefix:"custommouse",_init:function(){return this._mouseInit()},_create:function(){return this.element.addClass("ui-custommouse")},_destroy:function(){return this._mouseDestroy(),this.element.removeClass("ui-custommouse")}}),$("body > section").custommouse({mouseStart:function(o){console.log("mouse start")},mouseDrag:function(o){console.log("mouse drag")},mouseStop:function(o){console.log("mouse stop")},mouseCapture:function(o){return!0}}),$(".selector").mouse("_mouseDown"),$("body > section").hammer().on("pan",function(o){console.log(o)});var o=function(o,t){var e=t||$("body > section:eq("+Math.round($(window).scrollLeft()/900)+")"),n=o||$("body > section:eq(0)");console.log(e,n);var s=new TimelineMax({repeat:1});$.each(e.children(".box"),function(o,t){var s=new TimelineMax,u=100*Math.random(),i=100*Math.random();s.fromTo(t,3,{left:0,top:0,opacity:100},{left:10*u-500+"%",top:10*i-500+"%"}),e.selector!=n.selector&&s.to(t,1,{opacity:0})}),$.each(n.children(".box"),function(o,t){var e=new TimelineMax,n=100*Math.random(),s=100*Math.random();e.fromTo(t,2,{left:10*n-500+"%",top:10*s-500+"%",opacity:100},{left:0,top:0,opacity:100})})};o()}();
>>>>>>> origin/master
=======
!function(){$.widget("ui.custommouse",$.ui.mouse,{options:{mouseStart:function(o){console.log("mouse start")},mouseDrag:function(o){console.log("mouse drag")},mouseStop:function(o){console.log("mouse stop")},mouseCapture:function(o){return!0}},_mouseStart:function(o){return this.options.mouseStart(o)},_mouseDrag:function(o){return this.options.mouseDrag(o)},_mouseStop:function(o){return this.options.mouseStop(o)},_mouseCapture:function(o){return this.options.mouseCapture(o)},widgetEventPrefix:"custommouse",_init:function(){return this._mouseInit()},_create:function(){return this.element.addClass("ui-custommouse")},_destroy:function(){return this._mouseDestroy(),this.element.removeClass("ui-custommouse")}}),$("body").custommouse({mouseStart:function(o){console.log("mouse start")},mouseDrag:function(o){console.log("mouse drag")},mouseStop:function(o){console.log("mouse stop")},mouseCapture:function(o){return!0}}),$("body > section").on("mousestart",function(){console.log("mouseStart")});var o=function(o,t){var e=t||$("body > section:eq("+Math.round($(window).scrollLeft()/900)+")"),n=o||$("body > section:eq(0)");console.log(e,n);var s=new TimelineMax({repeat:1});$.each(e.children(".box"),function(o,t){var s=new TimelineMax,u=100*Math.random(),i=100*Math.random();s.fromTo(t,3,{left:0,top:0,opacity:100},{left:10*u-500+"%",top:10*i-500+"%"}),e.selector!=n.selector&&s.to(t,1,{opacity:0})}),$.each(n.children(".box"),function(o,t){var e=new TimelineMax,n=100*Math.random(),s=100*Math.random();e.fromTo(t,2,{left:10*n-500+"%",top:10*s-500+"%",opacity:100},{left:0,top:0,opacity:100})})};o()}();
>>>>>>> Stashed changes
