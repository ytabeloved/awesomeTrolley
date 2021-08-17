//hover en los botones agregar

$('.add-to-cart').on('click', function (e) {
    console.log(e)
    let cart = $('.shopping-cart');
    let imgtodrag =$("#"+e.currentTarget.parentElement.parentElement.parentElement.parentElement.id).find("img").eq(0);
    console.log(imgtodrag)
    //$('.item').find("img").eq(0);
    console.log(imgtodrag)
    if (imgtodrag) {
        var imgclone =  imgtodrag.clone()
            .offset({
            top: $("#"+imgtodrag[0].id).offset().top,
            left:  $("#"+imgtodrag[0].id).offset().left
        })
            .css({
            'opacity': '0.5',
                'position': 'absolute',
                'height': '150px',
                'width': '150px',
                'z-index': '100'
        })
            .appendTo($('body'))
            .animate({
            'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 75,
                'height': 75
        }, 2000, 'easeInOutExpo');
        
        setTimeout(function () {
            cart.effect("shake", {
                times: 2
            }, 200);
        }, 1500);

        //$("#"+imgtodrag[0].id).animate({
            imgclone.animate({
            'width': 0,
            'height': 0
        }, function () {
            imgclone.detach()
           // $("#"+imgtodrag[0].id).detach()
            //$(this).detach()
        });
    }
});