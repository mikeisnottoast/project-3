let balls = [];
let collisionIndex = {};
let collision = [];


function setup(){
	createCanvas(200, 200);
	for (var i = 0; i < 100; i++) {
		balls[i] = new Ball(i);
	}
}

function draw(){
	collisionIndex = new Object();
	collision = [];
	background(0);
	fill(255);
	noStroke();

	for (let i = 0; i < 100; i++) {
		balls[i].display();
		balls[i].move();
		balls[i].edge();
		balls[i].compare();
		
	}
	for (let i = 0; i < collision.length; i++) {
		balls[collision[i]].collide();
		
	}

}

class Ball {
	constructor(index) {
		this.x = random(width);
		this.y = random(height);
		this.directionX = random(-1,1);
		this.directionY = random(-1,1);
		this.pX = 0;
		this.pY = 0;
		this.position = [];
		this.ID = index;
		this.destroyed = 0;
	}

	move() {
		this.directionX = this.directionX;
		this.directionY = this.directionY;
		this.x = this.x + this.directionX;
		this.y = this.y + this.directionY;
		this.pX = this.x.toFixed(0);
		this.pY = this.y.toFixed(0);
		this.position = [this.pX, this.pY];
		this.pullX;
		this.pullY;

	}
	
	
	
	compare(){
		if(!collisionIndex[this.position]){ 
			collisionIndex[this.position] = this.ID;		
		}else{
			collision.push(this.ID);
			collision.push(collisionIndex[this.position]);
		}
	}

	
	collide(){	
	
	this.destroyed ++;	
			this.directionX *= -2;
			this.directionY *= -2;
			this.x = this.x + random(-.25, .25);
			this.y = this.y + random(-.25, .25);
			
		}	
						
	edge(){
		if(this.x > width){
			this.directionX *= -.75;
			this.x = width - (this.x - width);
		}else if (this.x < 0){
			this.directionX *= -.75;
			this.x = abs(this.x);
			
		}
		
		if(this.y > height){
			this.directionY *= -.75;
			this.y = height - (this.y - height);
		}else if (this.y < 0){
			this.directionY *= -.75;
			this.y = abs(this.y);
			
		}
	}
	
	display() {
	ellipseMode(CENTER);
	fill(255);
		if (this.destroyed < 2){
		ellipse(this.x,this.y,10,10);
	}
		if (this.destroyed >= 2 && this.destroyed < 5){
		ellipse(this.x,this.y,5,5);
	}
if (this.destroyed >= 5){
		ellipse(this.x,this.y,1,1);
	}



}
panic(){this.directionX *= random(-3,3);this.directionY *= random(-3,3);}
}

function keyPressed(){for (let i = 0; i < 100; i++) {
		balls[i].panic();}
	
		
	}

