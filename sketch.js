let imgSnowflake;
let particles = [];
let gridColSize = 5;
let maxParticles = 1000;
let particleCounter = 0;

class Particle {
  constructor(x, y) {
    this.wiggleFreq = 5;
    this.age = 0;
    this.rndX = 1 + Math.random() * 32;
    
    this.position = {}
    this.size = {}
    
    this.size.x = 30;
    this.size.y = 30;
    
    this.position.x = x + this.rndX;
    this.position.y = y;
    
    this.velocityY = 1 + Math.random() * 2;
  }
  
  render() {
    this.age++;
    image(imgSnowflake, this.position.x - this.size.x / 2, this.position.y - this.size.y / 2, this.size.x, this.size.y);
  }
  
  update() {
    if (this.age % this.wiggleFreq == 0) this.position.y += this.velocityY * gridColSize;
    if (this.age % this.wiggleFreq == 0) this.position.x += Math.floor(Math.random() * (10 - (-10) + 1) + (-10));
  }
}

function setup() {
  createCanvas(400, 400);
  
  for (let i = 0; i < maxParticles; i++) {
    particles[i] = new Particle(i * gridColSize, i * gridColSize);
  }
  
  imgSnowflake = loadImage("Data/snowflake.png");
}

function draw() {
  background(220);
  
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].render();
  }
  
  if (mouseIsPressed) particles[particleCounter++] = new Particle(mouseX, mouseY);
}

function mousePressed() {

}