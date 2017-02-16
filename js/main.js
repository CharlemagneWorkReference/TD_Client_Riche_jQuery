/**
 * Created by cyprien on 04/03/16.
 */
var jquery = {
    modules: {}
};

jquery.modules.ex1 = (function(){
    var changingText = $('p#changingText');
    changingText.on('click', function(){
        changingText.toggleClass('asset2');
    });
})();

jquery.modules.ex2 = (function(){
    var $boiteOrange = $('.boite_orange');
    var defWidth = $boiteOrange.css('width');
    var $buttonAdd = $('button#one');
    var $buttonChange = $('button#two');
    var $buttonFade = $('button#three');

    var $sectionSquare = $('section#square');

    $boiteOrange.mouseover(function(){
        $(this).css('width','+=10');
        console.log("Survol");
    });
    $boiteOrange.click(function(){
        $(this).css('width',defWidth);
    });

    $buttonAdd.click(function(){
        var count = $sectionSquare.children().length + 1;
        $sectionSquare.append('<div class="boite_orange">' + count + '</div>');
        $boiteOrange = $('.boite_orange');
    });

    $buttonChange.click(function () {
        $boiteOrange.toggleClass('boite_orange2');
    });

    $buttonFade.click(function(){
        $boiteOrange.fadeToggle();
    });
})();

jquery.modules.ex3 = (function(){
    $('button#showContent').click(function(){
        $('p.slidingContent').slideToggle();
    });
})();

jquery.modules.ex4 = (function () {
    var $menus = $('li.menu');
    var $currentShown;
    $menus.on('click', function () {
        if ($currentShown != null && $currentShown != $(this).find('ul')){
            $currentShown.slideToggle();
        }
        $currentShown = $(this).find('ul');
        $currentShown.slideToggle();
    });
})();

jquery.modules.ex5 = (function () {
    $boutonModal = $('#four');
    $modal = $('#modal1');
    $modalClose = $('#modal_close');
    $boutonModal.click(function () {
        $modal.toggle();
    });
    $modalClose.click(function () {
        $modal.hide();
    });
})();