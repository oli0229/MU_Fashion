
var rect = $('body')[0].getBoundingClientRect();
var mouse = {x: 0, y: 0, moved: false};

$("body").mousemove(function(e) {
    mouse.moved = true;
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
});

TweenLite.ticker.addEventListener('tick', function(){
    if (mouse.moved){
        parallaxIt(".icon-1", -20);
        parallaxIt(".icon-2", -50);
        parallaxIt(".icon-3", -30);
        parallaxIt(".icon-4", -40);
        parallaxIt(".icon-5", -30);
        parallaxIt(".icon-6", -30);
        parallaxIt(".icon-7", -50);
        parallaxIt(".icon-8", -30);
        parallaxIt(".icon-9", -50);
        parallaxIt(".paralex-disable", 0);
    }
    mouse.moved = false;
});

function parallaxIt(target, movement) {
    TweenMax.to(target, 0.5, {
        x: (mouse.x - rect.width / 2) / rect.width * movement ,
        y: (mouse.y - rect.height / 2) / rect.height * movement * 2
    });
}

$(window).on('resize scroll', function(){
    rect = $('body')[0].getBoundingClientRect();
})