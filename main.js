let counter = 0
let padpos = 0
let padbot = 8
let padtop = -8
let npos = 0
let nbot = 8
let ntop = -8
let npcedge = 0
let score = 0
let balls = []

function setup() {
createCanvas(300, 100);
npcedge = width - 10;
balls.push(new Ball());
pad = new Pad();
npc = new Npc();
}
	
function draw(){

	padpos = pad.y;


padbot = padpos+15;
padtop = padpos;
nbot = npos+15;
ntop = npos;

background(0);
 for (let i = 0; i < balls.length; i++) {
  	balls[i].show();
balls[i].move();
  }


	npc.show();
	npc.play();
	pad.show();

console.log(score);




}

function keyPressed(){balls.push(new Ball());}

//pong ball
class Ball{

	constructor(){
	this.x = width/2;
    this.y = height/2;
    this.xdirection = 0;
    this.yspeed = 1;
}


show(){
	fill(255);
	ellipse(this.x,this.y,10,10);
}

move(){
	

if (this.y >= height){this.yspeed = -1;}
if (this.y <= 0){this.yspeed = 1;}
this.y += this.yspeed;
	if (this.xdirection  == 0){


		this.x --;
		// this.y += this.yspeed;
		if (this.x == 15){
			if (this.y <= padbot && this.y >= padtop){
				this.xdirection = 1;
			}
				else	{balls.push(new Ball());} 
		}

	}

	if (this.xdirection  == 1){


		this.x ++;
			// this.y += this.yspeed;
		if (this.x == npcedge){
			if (this.y <= nbot && this.y >= ntop){
				this.xdirection = 0;
			}
			else	{balls.push(new Ball());}
		}


}}
}


//pad
class Pad{
	constructor(){	this.x = 10;

}

show(){
	fill(0,255,0);
	rect(this.x,mouseY,5,15);
	this.y = mouseY;
}

}
// NPC Pad
class Npc{

constructor(){this.x = width-10;
this.y = height/2;
this.direction = 0;}

show(){fill(255,0,0);
rect(this.x,this.y,5,15);
npos = this.y;}

play(){
	if (this.direction == 0){
		this.y++;
		if(this.y >= height){this.direction = 1;}}
	if (this.direction == 1){
		this.y--;
		if(this.y <= 0){this.direction = 0;}}
}


}