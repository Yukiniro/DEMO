/**
 * Created by 95 on 2017/4/14.
 */
var current = document.getElementById("current");
var prev = document.getElementById("prev");
var numBtn = document.getElementsByClassName('num');
var clearBtn = document.getElementById('clear');
var deleteBtn = document.getElementById('delete');
var pointBtn = document.getElementById('.');
var eqBtn = document.getElementById('eq');
//var sumBtn = document.getElementById('sum');
//var redBtn = document.getElementById('red');
//var mulBtn = document.getElementById('mul');
//var excBtn = document.getElementById('exc');
var calBtn = document.getElementsByClassName('cal');

var currentVal = '';
var prevVal = '';

var point = false; //是否点击小数点
var isResult = false;

var index = 0;

bind();

function getNum(){
    if(isResult){
        currentVal = '';
        isResult = false;
    }
    var num = this.innerHTML;
    if(currentVal == '0' || currentVal == '00'){
        currentVal = '';
    }
    setNum(num);
}

function setNum(number){
    currentVal += number;
    render();
}

function render(){
    current.innerHTML = currentVal;
    prev.innerHTML = prevVal;
}

function clear(){
    currentVal = '';
    prevVal = '';
    point = false;
    render();
}

function del(){
    currentVal = currentVal.slice(0,-1);
    render();
}

function pointC(){
    if(point){
        return;
    }else{
        var num = this.innerHTML;
        setNum(num);
        point = true;
    }
}

function resultC(){
    var result = 0;
    switch (index){
        case 1:
            result = parseFloat(prevVal) + parseFloat(currentVal);
            break;
        case 2:
            result = parseFloat(prevVal) - parseFloat(currentVal);
            break;
        case 3:
            result = parseFloat(prevVal) * parseFloat(currentVal);
            break;
        case 4:
            result = parseFloat(prevVal) / parseFloat(currentVal);
            break;
        default :
            return;
    }
    currentVal = result;
    render();
    isResult = true;
}

function cals(){
    prevVal = currentVal;
    currentVal = '';
    var str = this.innerHTML;
    switch (str){
        case '+':
            index = 1;
            break;
        case '-':
            index = 2;
            break;
        case '*':
            index = 3;
            break;
        case '/':
            index = 4;
            break;
        default:
            index = 0;
    }
}

//绑定函数
function bind(){
    for(var i = 0; i < numBtn.length; i++){
        numBtn[i].onclick = getNum;
    }

    clearBtn.onclick = clear;
    deleteBtn.onclick = del;
    pointBtn.onclick = pointC;
    eqBtn.onclick = resultC;
    for(var i = 0; i < calBtn.length; i++){
        calBtn[i].onclick = cals;
    }
}