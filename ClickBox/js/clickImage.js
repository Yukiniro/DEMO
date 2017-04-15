/**
 * Created by 95 on 2017/3/29.
 */
window.addEventListener("load",function(){
    imageScr = document.getElementById("images").children;
    myScreen = document.getElementById("screen");

    function createDiv(preDiv){
        createImg(preDiv,0,0);
        createImg(preDiv,0,1);
        createImg(preDiv,1,0);
        createImg(preDiv,1,1);
    }

    function createImg(preDiv,x,y){
        image = document.createElement("img");
        imgSrc = imageScr[Math.floor(Math.random()*imageScr.length)].src;
        image.src = imgSrc;
        image.className = "image";
        image.onmousedown = function(){
            paretNode = this.parentNode;
            createDiv(paretNode);
            paretNode.removeChild(this);
        };

        div = document.createElement("div");
        div.className = "div";
        div.style.top = 50 * y + "%";
        div.style.left = 50 * x + "%";

        preDiv.appendChild(div);
        div.appendChild(image);
    }

    createDiv(myScreen);
});

window.ondragstart = function(){return false;};