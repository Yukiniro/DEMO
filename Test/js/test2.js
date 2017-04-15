/**
 * Created by 95 on 2017/4/6.
 */
var container = document.getElementById("container");
var list = document.getElementById("list");
var buttons = document.getElementById("buttons").getElementsByTagName("span");
var preBtn = document.getElementById("pre");
var nextBtn = document.getElementById("next");
var index = 1;
var timer;
var itemOffset = list.firstElementChild.offsetWidth;

function setItem(itemIndex){
   // alert(itemOffset);
    var offset = parseInt(itemOffset) * (itemIndex - 1);
    list.style.left = -offset + "px";
}

function play(){
    timer = setInterval(function(){
        nextBtn.onclick();
    },2000);
}

function stop(){
    clearInterval(timer);
}

nextBtn.onclick = function(){

    index++;

    if(index > 5){
        index = 1;
    }

    setItem(index);
    showButton();
};

preBtn.onclick = function(){
    index--;
    index = index < 1 ? 5 : index;
    setItem(index);
    showButton();
};

function showButton(){
    for(var i = 0; i < buttons.length; i++){
        if(buttons[i].className == "on"){
            buttons[i].className = "";
        }

        buttons[index - 1].className = "on";
    }
}

for(var i = 0; i < buttons.length; i++){
    buttons[i].onclick = function(){
        index = parseInt(this.getAttribute("index"));
        showButton();
        setItem(index);
    };
}

container.onmouseover = stop;
container.onmouseout = play;

play();