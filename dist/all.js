$("document").ready(function(){$(".nav__icon").click(function(){$(".nav__block").slideToggle(800)}),$("a").on("click",function(n){if(""!==this.hash){n.preventDefault();var o=this.hash;$("html, body").animate({scrollTop:$(o).offset().top},1200,function(){window.location.hash=o})}})});