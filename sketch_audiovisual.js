let xPos = 0;
let yPos = 0;

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){    
    background('#ffffff25')
    let currentSection = 'audiovisual';
    xPos = lerp(xPos, mouseX, 0.05);
    yPos = lerp(yPos, mouseY, 0.05);

    textFont('serif');
    textAlign(CENTER);
    fill('#191c31');
    text(currentSection, xPos, yPos);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }