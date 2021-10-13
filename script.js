var gameState = 0;

var punten1 = 0;

function draw() {
  background(225);
  if (gameState == 1) {
    game();
  }
  if (gameState == 0) {
    menu();
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
  block_speler = new Spelerblocks(210, 350, 80, 10, 0)
  block_speler_2 = new Spelerblocks(210, 50, 80, 10, 0)
  puck1 = new Puck(250, 200, 50, 50, 5, 5, "black")
}

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

class Spelerblocks {
  constructor(x, y, w, h, xspeed) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.xspeed = xspeed;
    
  }
  drawSpelerblocks() {
    rect(this.x, this.y, this.w, this.h);
    this.x = this.x + this.xspeed;
    
  }
}

function game() {
  background(225);
  block_links.drawBlock();
  block_rechts.drawBlock();
  block_benedenL.drawBlock();
  block_benedenR.drawBlock();
  block_bovenL.drawBlock();
  block_bovenR.drawBlock();
  block_speler.drawSpelerblocks();
  block_speler_2.drawSpelerblocks();
  puck1.drawPuck();
  fill(0);

  textSize(40);
  text(punten1, 240, 100)
  fill(10);

  if (block_links.x + block_links.w > block_speler.x || block_speler.x + block_speler.w > block_rechts.x){
    block_speler.xspeed = block_speler.xspeed * -1;
  }
  if (puck1.y + 0.58 * puck1.h > block_speler.y && puck1.y - 0.58 * puck1.h < block_speler.y + block_speler.h && puck1.x + 0.58 * puck1.w > block_speler.x && puck1.x - 0.58 * puck1.w < block_speler.x + block_speler.w){
    puck1.vy = puck1.vy * -1;
  }

  if (puck1.y + 0.58 * puck1.h < block_speler_2.y && puck1.y > block_speler_2.y + block_speler_2.h && puck1.x + 0.58 * puck1.w > block_speler_2.x && puck1.x < block_speler_2.x + block_speler_2.w){
    puck1.vy = puck1.vy * -1;
  }

  else{
    puck1.c = "black";
  }

  if (puck1.x - 0.58 * puck1.w < block_links.x + block_links.w){
    puck1.vx = puck1.vx * -1;
  }
  if (puck1.x + 0.58 * puck1.w > block_rechts.x){
    puck1.vx = puck1.vx * -1;
  }
  if (puck1.y + 0.58 * puck1.h > block_benedenL.y && puck1.x - puck1.w * 0.50 < block_benedenL.x + block_benedenL.w){
    puck1.vy = puck1.vy * -1;
  }
  if (puck1.y + 0.58 * puck1.h > block_benedenR.y && puck1.x + puck1.w * 0.50 > block_benedenR.x){
    puck1.vy = puck1.vy * -1;
  }
  if (puck1.y - 0.58 * puck1.h < block_bovenL.y + block_bovenL.h && puck1.x - puck1.w * 0.50 < block_bovenL.x + block_bovenL.w){
    puck1.vy = puck1.vy * -1;
  }
  if (puck1.y - 0.58 * puck1.h < block_bovenR.y + block_bovenR.h && puck1.x + puck1.w * 0.50 > block_bovenR.x){
    puck1.vy = puck1.vy * -1;
  } 

 if (mouseX > 250){
   block_speler_2.xspeed = 4;
 }
 if (mouseX < 250){
   block_speler_2.xspeed = -4;
 }

 if (puck1.y > 370){
   if (puck1.x > 175 && puck1.x < 325){
     puck1.x = 250
     puck1.y = 200
     puck1.vx = 5
     puck1.vy = 5
     punten1 = punten1 + 1
   }
 }

}

// 	fill(0);
// 	text("Use the arrow keys (or WASD) to move the square around", 25, 25);

// 	fill(0, 255, 0);
// 	rect(xpos, ypos, 50, 50);

// 	if(xpos >= 0 && xpos + 50 <= 500) xpos += xspeed;
// 	if(ypos >= 0 && ypos + 50 <= 500) ypos += yspeed;
// }
function menu() {
  background("#aaaaaa");
  text("press 1 to start", 70, 70);
  text("press 2 to open menu", 70, 100);
}


function keyPressed() {
	switch(keyCode) {
		case 37:
		case 65:
			block_speler.xspeed = -4;
			break;
		case 39:
		case 68:
			block_speler.xspeed = 4;
			break;
		case 38:
		case 87:
			yspeed = -4;
			break;
		case 40:
		case 83:
			yspeed = 4;
			break;
	}
  if (keyCode == 49) {
    gameState = 1;
  }
  if (keyCode == 50) {
    gameState = 0;
  }
}

function keyReleased() {
	switch(keyCode) {
		case 37:
		case 65:
			block_speler.xspeed = 0;
			break;
		case 39:
		case 68:
			block_speler.xspeed = 0;
			break;
		case 38:
		case 87:
			yspeed = 0;
			break;
		case 40:
		case 83:
			yspeed = 0;
			break;
	}
}