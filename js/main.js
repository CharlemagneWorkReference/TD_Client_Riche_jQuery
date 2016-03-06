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
    var defWidth = $('.boite_orange').css('width');

    var buttonAdd = $('button#one');
    var buttonChange = $('button#two');
    var buttonFade = $('button#three');

    var sectionSquare = $('section#square');

    $('.boite_orange').mouseover(function(){
        $('.boite_orange').css('width','+=10');
        console.log("Survol");
    });
    $('.boite_orange').click(function(){
        $('.boite_orange').css('width',defWidth);
    });

    buttonAdd.click(function(){
        var count = sectionSquare.children().length + 1;
        sectionSquare.append('<div class="boite_orange">' + count + '</div>')
    });

    buttonChange.click(function () {
        $('.boite_orange').toggleClass('boite_orange2');
    });

    buttonFade.click(function(){
        $('.boite_orange').fadeToggle();
    });
})();

jquery.modules.ex3 = (function(){
    $('button#showContent').click(function(){
        $('p.slidingContent').slideToggle();
    });
})();