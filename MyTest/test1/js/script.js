/**
 * Created by 95 on 2017/4/12.
 */
window.onload = function(){
    waterFall('main','box');

    doIt();

    window.onscroll = function(){
        if(checkScrollSide()){
            var oParent = document.getElementById('main');
            var oPin = document.createElement('div');
            oPin.className = 'box';
            oParent.appendChild(oPin);
            var oPic = document.createElement('div');
            oPic.className = 'pic';
            oPin.appendChild(oPic);
            var oImg = document.createElement('img');
            oImg.src = '../test1/images/P_00.jpg';
            oPic.appendChild(oImg);
        }
        waterFall('main','box');
    };
};

function waterFall(parent,pin){
    var oParent = document.getElementById(parent);
    var aPin = oParent.getElementsByClassName(pin);
    var iPinW = aPin[0].offsetWidth;
    var num = Math.floor(oParent.offsetWidth/iPinW);
   // oParent.style.cssText = 'width:'+iPinW*num+'px;margin:0 auto;';

    var pinHArr = [];
    for(var i = 0; i < aPin.length; i++){
        var pinH = aPin[i].offsetHeight;
        if(i < num){
            pinHArr[i] = pinH;
        }else{
            var minH = Math.min.apply(null,pinHArr);
            var minHIndex = getMinHIndex(pinHArr,minH);
            aPin[i].style.position = 'absolute';
            aPin[i].style.top = minH + 'px';
            aPin[i].style.left = aPin[minHIndex].offsetLeft + 'px';

            pinHArr[minHIndex] += aPin[i].offsetHeight;
        }
    }
}

function getMinHIndex(arr,minH){
    for(var a in arr){
        if(arr[a] == minH){
            return a;
        }
    }
}

function checkScrollSide(){
    var oParent = document.getElementById('main');
    var aPin = oParent.getElementsByClassName('box');
    var lastPinH = aPin[aPin.length-1].offsetTop + Math.floor(aPin[aPin.length-1].offsetHeight/2);
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var documentH = document.documentElement.clientHeight;
    return (lastPinH < scrollTop + documentH) ? true : false;
}

function check(){
    var oParent = document.getElementById('main');
    var aPin = oParent.getElementsByClassName('box');
    var lastH = aPin[aPin.length-1].offsetTop + aPin[aPin.length-1].offsetHeight/2;
    var documentH = document.documentElement.clientHeight;
    return lastH < documentH ? true : false;
}

function doIt(){
    if(check()){
        var oParent = document.getElementById('main');
        var oPin = document.createElement('div');
        oPin.className = 'box';
        oParent.appendChild(oPin);
        var oPic = document.createElement('div');
        oPic.className = 'pic';
        oPin.appendChild(oPic);
        var oImg = document.createElement('img');
        oImg.src = '../test1/images/P_00.jpg';
        oPic.appendChild(oImg);
        waterFall('main','box');
        doIt();
    }else{
        return;
    }
}