{
    let boxObj = document.querySelector(".sale-box");
    let smbox = document.querySelector(".sale");
    let prev = document.querySelector(".sale-left-arrow");
    let next = document.querySelector(".sale-right-arrow");

    let num = 4;
    let dir = "r";
    let t = setInterval(moveFn, 2000);

    function moveFn() {
        if (dir == "r") {
            num++;
        }
        if (dir == "l") {
            num--;
        }
        smbox.style.transition = "all,1s";
        smbox.style.marginLeft = -295 * num + "px";
    };

    smbox.addEventListener("transitionend", function () {
        flag = true;
        if (num === 12) {
            num = 4;
            smbox.style.transition = "none";
            smbox.style.marginLeft = -1180 * num + "px";
        }
        if (num === 0) {
            num = 8;
            smbox.style.transition = "none";
            smbox.style.marginLeft = -2360 * num + "px";
        }
    });

    boxObj.onmouseover = window.onblur = function () {
        clearInterval(t);
    }
    boxObj.onmouseout = window.onfocus = function () {
        t = setInterval(moveFn, 2000);
    }

    let flag = true;
    next.onclick = function () {
        dir = "r";
        if (flag) {
            flag = false;
            moveFn();
        }
    }
    prev.onclick = function () {
        dir = "l";
        if (flag) {
            flag = false;
            moveFn();
        }
    }

}

//公告
{
	let bigbox=document.querySelector(".gonger");
	let prev=document.querySelector(".gonggao-left");
	let next=document.querySelector(".gonggao-right");
	let arrows=document.querySelector(".gonggao-jiantou");
	console.log(bigbox,prev,next,arrows);

	let dir="r";
	next.onclick=function(){
		if(dir==="r"){
			bigbox.style.marginTop=-36+"px";
		}
	}
	prev.onclick=function(){
		if(dir==="l"){
			bigbox.style.marginTop="0";
		}
	}










}
