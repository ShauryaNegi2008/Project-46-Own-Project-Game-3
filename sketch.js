var bg, bgImg, spaceShip, spaceShipImg, ufo1, ufo2, ufo3, ufo4, ufo5, ufoImg, bullet, bullet1, bulletGroup, bulletGroup1, ufo1health = 10, ufo2health = 10, ufo3health = 10, ufo4health = 10, ufo5health = 10;

function preload() {
  bg = loadImage("assets/bg.jpg");
  spaceShipImg = loadImage("assets/spaceShip.jpg");
  ufoImg = loadImage("assets/ufo.jpg")
}

function setup() {
  canvas = createCanvas(800, 400);
  spaceShip = createSprite(400, 350);
  spaceShip.addImage(spaceShipImg);
  spaceShip.scale = 0.5;
  ufo1 = createSprite(0, 10)
  ufo1.scale = 0.10
  ufo1.velocityX = 2
  ufo1.addImage(ufoImg);
  ufo2 = createSprite(200, 10)
  ufo2.scale = 0.10
  ufo2.velocityX = -2
  ufo2.addImage(ufoImg);
  ufo3 = createSprite(400, 10)
  ufo3.scale = 0.10
  ufo3.velocityX = 2
  ufo3.addImage(ufoImg);
  ufo4 = createSprite(600, 10)
  ufo4.scale = 0.10
  ufo4.velocityX = -2
  ufo4.addImage(ufoImg);
  ufo5 = createSprite(800, 10)
  ufo5.scale = 0.10
  ufo5.velocityX = 2
  ufo5.addImage(ufoImg);

  bulletGroup = new Group();
}

function draw() {
  background(bg);
  if (bulletGroup.isTouching(ufo1)) {
    for (var i = 0; i < bulletGroup.length; i++) {
      if (bulletGroup[i].isTouching(ufo1)) {
        ufo1health = ufo1health - 1;
        bulletGroup[i].destroy()

      }
    }
  }
  if (bulletGroup.isTouching(ufo2)) {
    for (var i = 0; i < bulletGroup.length; i++) {
      if (bulletGroup[i].isTouching(ufo2)) {
        ufo2health = ufo2health - 1;
        bulletGroup[i].destroy()

      }
    }
  }
  if (bulletGroup.isTouching(ufo3)) {
    for (var i = 0; i < bulletGroup.length; i++) {
      if (bulletGroup[i].isTouching(ufo3)) {
        ufo3health = ufo3health - 1;
        bulletGroup[i].destroy()

      }
    }
  }
  if (bulletGroup.isTouching(ufo4)) {
    for (var i = 0; i < bulletGroup.length; i++) {
      if (bulletGroup[i].isTouching(ufo4)) {
        ufo4health = ufo4health - 1;
        bulletGroup[i].destroy()

      }
    }
  }
  if (bulletGroup.isTouching(ufo5)) {
    for (var i = 0; i < bulletGroup.length; i++) {
      if (bulletGroup[i].isTouching(ufo5)) {
        ufo5health = ufo5health - 1;
        bulletGroup[i].destroy()

      }
    }
  }
  if (ufo1health == 0) {
    ufo1.destroy();
  }
  if (ufo2health == 0) {
    ufo2.destroy();
  }
  if (ufo3health == 0) {
    ufo3.destroy();
  }
  if (ufo4health == 0) {
    ufo4.destroy();
  }
  if (ufo5health == 0) {
    ufo5.destroy();
  }
  Move();
  drawSprites();
  UfoX();
}
function Move() {
  if (keyDown("RIGHT_ARROW")) {
    spaceShip.x = spaceShip.x + 5
  }
  if (keyDown("LEFT_ARROW")) {
    spaceShip.x = spaceShip.x - 5
  }
  if (keyWentDown("UP_ARROW")) {
    bullet = createSprite(spaceShip.x, spaceShip.y, 5, 15)
    bullet.velocityY = -5;
    bulletGroup.add(bullet);
  }
}

function UfoX() {
  if (ufo1.x >= 800) {
    ufo1.velocityX = -2
  }
  if (ufo1.x <= 0) {
    ufo1.velocityX = 2
  }

  if (ufo2.x >= 800) {
    ufo2.velocityX = -2
  }
  if (ufo2.x <= 0) {
    ufo2.velocityX = 2
  }

  if (ufo3.x >= 800) {
    ufo3.velocityX = -2
  }
  if (ufo3.x <= 0) {
    ufo3.velocityX = 2
  }

  if (ufo4.x >= 800) {
    ufo4.velocityX = -2
  }
  if (ufo4.x <= 0) {
    ufo4.velocityX = 2
  }

  if (ufo5.x >= 800) {
    ufo5.velocityX = -2
  }
  if (ufo5.x <= 0) {
    ufo5.velocityX = 2
  }
}