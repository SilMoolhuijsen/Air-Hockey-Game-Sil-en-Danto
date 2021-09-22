class Block {
  constructor(x, y, w, h) {
    this.x = x; 
    this.y = y;
    this.w = w;
    this.h = h;
  }
    drawBlock() {
     rect(this.x, this.y, this.w, this.h);
    }
}

function setup() {
	createCanvas(500, 400);
  block_links = new Block(0,0,10,400);
  block_rechts = new Block(489,0,10,400);
  block_benedenL = new Block(0,390,200,10);
  block_benedenR = new Block(300,390,200,10);
  block_bovenL = new Block(0,0,200,10);
  block_bovenR = new Block(300,0,200,10);
}

//var [xpos, ypos, xspeed, yspeed] = [225, 225, 0, 0];

function draw() {
	background(225);
  block_links.drawBlock();
  block_rechts.drawBlock();
  block_benedenL.drawBlock();
  block_benedenR.drawBlock();
  block_bovenL.drawBlock();
  block_bovenR.drawBlock();
  fill(0);





}

// 	fill(0);
// 	text("Use the arrow keys (or WASD) to move the square around", 25, 25);
	
// 	fill(0, 255, 0);
// 	rect(xpos, ypos, 50, 50);
	
// 	if(xpos >= 0 && xpos + 50 <= 500) xpos += xspeed;
// 	if(ypos >= 0 && ypos + 50 <= 500) ypos += yspeed;
// }

// function keyPressed() {
// 	switch(keyCode) {
// 		case 37:
// 		case 65:
// 			xspeed = -2;
// 			break;
// 		case 39:
// 		case 68:
// 			xspeed = 2;
// 			break;
// 		case 38:
// 		case 87:
// 			yspeed = -2;
// 			break;
// 		case 40:
// 		case 83:
// 			yspeed = 2;
// 			break;
// 	}
// }

// function keyReleased() {
// 	switch(keyCode) {
// 		case 37:
// 		case 65:
// 			xspeed = 0;
// 			break;
// 		case 39:
// 		case 68:
// 			xspeed = 0;
// 			break;
// 		case 38:
// 		case 87:
// 			yspeed = 0;
// 			break;
// 		case 40:
// 		case 83:
// 			yspeed = 0;
// 			break;
// 	}
// }