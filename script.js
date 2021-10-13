var gameState = 0;

var punten1 = 0;

var punten2 = 0;


var blocks = [];

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
  goal2 = new Block(150, 0, 200, 40);
  goal = new Block(150, 360, 200, 40);
  block_speler = new Spelerblocks(210, 350, 80, 10, 0)
  block_speler_2 = new Computerblocks(210, 50, 80, 10, 0)

  blocks.push(goal2);
  blocks.push(goal);
  blocks.push(block_speler);
  blocks.push(block_speler_2);
  puck1 = new Puck(250, 200, 10, 10, 5, 5, "black")
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
    rect(this.x, this.y, this.w, this.h);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.x <= 10 || this.x + this.w >= width - 10) {
      this.vx = this.vx * -1;
    }
    if (this.y <= 10 || this.y + this.h >= height - 10) {
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
    this.c = "#ededed";
    this.score = 0;
  }
  draw() {
    fill(this.c);
    rect(this.x, this.y, this.w, this.h);
  }

  checkCollision() {
    if (puck1.y + puck1.h > this.y && puck1.y < this.y + this.h) {
      if (puck1.x + puck1.w > this.x && puck1.x < this.x + this.w) {
        puck1.y = height / 2;
        this.score++;        
      }
    }
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
  draw() {
    this.x = mouseX;
    rect(this.x, this.y, this.w, this.h);
    this.x = this.x + this.xspeed;
  }

  checkCollision() {
    if (puck1.y + puck1.h > this.y) {
      if (puck1.x + puck1.w > this.x && puck1.x < this.x + this.w) {
        puck1.vy = -puck1.vy;
      }
    }
  }
}

class Computerblocks {
  constructor(x, y, w, h, xspeed) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.xspeed = xspeed;

  }
  draw() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    }
    rect(this.x, this.y, this.w, this.h);
  }

  checkCollision() {
    if (puck1.y + puck1.h > this.y && puck1.y < this.y + this.h) {
      if (puck1.x + puck1.w > this.x && puck1.x < this.x + this.w) {
        puck1.vy = -puck1.vy;
      }
    }
  }
}


function game() {
  
  // speelveld
  fill(0)
  rect(0,0, width, height);

  fill(235)
  rect(10,10, width -20, height-20);
  // END speelveld

  blocks.forEach((s) => {
    s.draw();
    s.checkCollision();
  })

  puck1.drawPuck();
  fill(0);

  textSize(40);
  text(goal.score, 240, 100)
  fill(10);

  text(goal2.score, 240, 300)  

}

function menu() {
  background("#aaaaaa");
  text("press 1 to start", 70, 70);
  text("press 2 to open menu", 70, 100);
}

function keyPressed() {
  if (keyCode == 49) {
    gameState = 1;
  }
  if (keyCode == 50) {
    gameState = 0;
  }
}