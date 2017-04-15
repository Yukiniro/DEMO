/**
 * Created by 95 on 2017/4/13.
 */
$(function(){
    waterFall('main','box');
    doIt();
    window.onscroll = function(){
        if(checkScrollSide()){
            var $oBox = $('<div>').addClass('box').appendTo($('#main'));
            var $oPin = $('<div>').addClass('pic').appendTo($oBox);
            $('<img>').attr('src','../test1/images/P_00.jpg').appendTo($oPin);
            waterFall('main','box');
        }
    };
});

function waterFall(parent,pin){
    var s1 = '#' + parent;
    var s2 = '.' + pin;
    var $aPin = $(s1+ ' ' + s2);
    var iPinW = $aPin.eq(0).innerWidth();
    var num = Math.floor($(s1).width() / iPinW);

    var pinHArr = [];

    $aPin.each(function(index,value){
        var pinH = $aPin.eq( index ).innerHeight();
        if(index < num){
            pinHArr[index] = pinH;
        }else{
            var minH = Math.min.apply(null,pinHArr);
            var minHIndex = $.inArray(minH,pinHArr);
            $(value).css({
                'position':'absolute',
                'top':minH,
                'left':$aPin.eq(minHIndex).position().left
            });
            pinHArr[minHIndex] += $aPin.eq(index).innerHeight();
        }
    });
}

function checkScrollSide(){
    var $aPin = $('#main .box');
    var lastPinH = $aPin.get(-1).offsetTop + Math.floor($aPin.get(-1).offsetHeight/2);
    var scrollTop = $(window).scrollTop();
    var documentH = $(document).height();
    return (lastPinH<scrollTop+documentH) ? true : false;
}

function check(){
    var $aPin = $('#main .box');
    var lastPinH = $aPin.get(-1).offsetTop + Math.floor($aPin.get(-1).offsetHeight/2);
    //var documentH = document.documentElement.clientHeight;
    var documentH = $(window).height();
    return lastPinH<documentH ? true : false;
}

function doIt(){
    if(check()){
        var $box = $('<div>').addClass('box').appendTo($('#main'));
        var $pic = $('<div>').addClass('pic').appendTo($box);
        $('<img>').attr('src','../test1/images/P_01.jpg').appendTo($pic);
        waterFall('main','box');
        doIt();
    }else{
        return;
    }
}