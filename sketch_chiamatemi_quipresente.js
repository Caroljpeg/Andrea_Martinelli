let img1, img2, img3, img4, img5, img6, img7, img8, img9;
let button1;

function preload(){
    img1 = loadImage('media/chiamatemi_quipresente/Screensaver_chiamatemi_ludotron.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    button1 = createButton('chiamatemi ludotron');
    button1.position(100,100);
    
    button1.mousePressed(saveImage);
}

function draw() {
    
}


function saveImage(){
    save(img1, 'image');
  }