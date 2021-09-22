class Puck {
  constructor(x, y, w, h, vx, vy, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
    this.c = c;
  }

  drawPuck() {
    fill(this.c);
    ellipse(this.x, this.y, this.w, this.h);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.x <= 20 || this.x >= 480) {
      this.vx = this.vx * -1;
    }
    if (this.y <= 24 || this.y >= 380) {
      this.vy = this.vy * -1;
    }
  }
}



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
  block_links = new Block(0, 0, 10, 400);
  block_rechts = new Block(489, 0, 10, 400);
  block_benedenL = new Block(0, 390, 175, 10);
  block_benedenR = new Block(325, 390, 175, 10);
  block_bovenL = new Block(0, 0, 175, 10);
  block_bovenR = new Block(325, 0, 175, 10);
  block_speler = new Block(200, 350, 100, 10)
  puck1 = new Puck(300, 300, 50, 50, 5, 5, "black")
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
  block_speler.drawBlock();
  puck1.drawPuck();
  fill(0);

  if (puck1.y + puck1.h > block_speler.y) {
    if (puck1.x + puck1.w > block_speler.x) {
      puck1.vy = puck1.vy * -1;     
    }
  }
  else{
    puck1.c = "black";
  }



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