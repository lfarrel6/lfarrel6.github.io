var age;
var icons = {
	github: {
		mobile: 'img/github32px.png',
		desktop: 'img/github64px.png'
	}
};
var vertical_offset = 0;
var celebrating = false;
document.addEventListener("DOMContentLoaded", function (){
	document.getElementById("age-template").innerHTML = getAge();
});

function getAge(){
	var today = new Date();
	var month = today.getMonth()+1;
	var day = today.getDate();
	var year = today.getFullYear();
	if(month != 5)
		return (year-1996)-(month<5?1:0);
	else{
		if(day==6){
			celebrate();
			return year-1996;
		}else
			return (year-1996)-(day<6?1:0);
	}

}

/**
CODE ADAPTED FROM https://codepen.io/linrock/pen/Amdhr
CREDIT TO: LINMIAO XU
**/

const NUM_CONFETTI = 350;
const COLORS = [[85,71,106], [174,61,99], [219,56,83], [244,92,68], [248,182,70]];
const PI_2 = 2*Math.PI;
var canvas, context;

function celebrate(){
	if(!canvas){
		canvas = document.getElementById("super-secret-canvas");
		context = canvas.getContext("2d");
	}

	window.w = 0;
	window.h = 0;

	resizeWindow = () => {
		canvas.width = window.innerWidth*0.98;
	  	window.w = canvas.width;
	  	/*
		var de = document.documentElement, db = document.body;
		canvas.height = de.scrollTop || db.scrollTop || 0;
		canvas.height = (canvas.height<window.innerHeight*0.99)?window.innerHeight*0.99:canvas.height;
		window.h = canvas.height;
	  	*/
	  	canvas.height = window.innerHeight*0.99;
	  	window.h = canvas.height;
	}

	window.addEventListener('resize', resizeWindow, false);
	  
	window.onload = () => {
		setTimeout(resizeWindow, 0);
	};

	scrollTrack = (root) => {
		var de = document.documentElement, db = document.body;
		vertical_offset = de.scrollTop || db.scrollTop || 0;
		//vertical_offset = document.documentElement.scrollTop;
	}

	window.onscroll = () => { scrollTrack(document.getElementById('container')) };
	//document.getElementById('container').onscroll = window.onscroll;

	range = (a,b) => { return Math.floor((b-a)*Math.random() + a); };

	xpos = 0.5;

	document.onmousemove = (e) => {
	  xpos = e.pageX/w;
	}

	var callback = () => {
      	return window.setTimeout(callback, 1000 / 60);
    };

	if(window.requestAnimationFrame)
	  window.requestAnimationFrame(callback);
	else{
	  var func = getReqAnimFrameFunc();
	  window.requestAnimationFrame = func(callback);
	}

	confetti = [];
	for(var i = 0; i < NUM_CONFETTI; i++)
		confetti.push(new Confetti());

	window.step = () => {
	  requestAnimationFrame(step);
	  context.clearRect(0,0,w,h);
	  for(var c in confetti)
	  	confetti[c].draw();
	}

	step();
}

function getReqAnimFrameFunc(){
    if(window.requestAnimationFrame)
    	return window.requestAnimationFrame;
	else if(window.webkitRequestAnimationFrame)
	  	return window.webkitRequestAnimationFrame;
	else if(window.mozRequestAnimationFrame)
	  	return window.mozRequestAnimationFrame;
	else if(window.oRequestAnimationFrame)
	  	return window.oRequestAnimationFrame;
	else if(window.msRequestAnimationFrame)
	  	return window.msRequestAnimationFrame;
}

function drawCircle(x,y,r,style) {
    context.beginPath();
    context.arc(x,y+vertical_offset,r,0,PI_2,false);
    context.fillStyle = style;
    context.fill();
}

class Confetti{

  constructor(){
  	var temp = range(0,5);
    this.style = COLORS[temp];
    this.rgb = `rgba(${this.style[0]},${this.style[1]},${this.style[2]}`;
    this.r = range(2,6);
    this.r2 = 2*this.r;
    this.replace();
  }

  replace(){
    this.opacity = 0;
    this.dop = 0.03*range(1,4);
    this.x = range(-this.r2,w-this.r2);
    this.y = range(-20,h-this.r2);
    this.xmax = w-this.r;
    this.ymax = h-this.r;
    this.vx = range(0,2)+8*xpos-5;
    this.vy = 0.7*this.r+range(-1,1);
  }

  draw(){
    var ref;
    this.x += this.vx;
    this.y += this.vy;
    this.opacity += this.dop;
    if (this.opacity > 1) {
    	this.opacity = 1;
        this.dop *= -1;
    }
    if (this.opacity < 0 || this.y > this.ymax) {
        this.replace();
    }
    if (!((0 < (ref = this.x) && ref < this.xmax))) {
        this.x = (this.x + this.xmax) % this.xmax;
    }
    return drawCircle(~~this.x, ~~this.y, this.r, `${this.rgb},${this.opacity})`);
  }

  
}