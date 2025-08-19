let img1, img2, img3, img4, img5, img6, img7, img8, img9;
let button1, button2, button3, button4, button5, button6, button7, button8, button9;

function preload(){
    if (windowWidth < 1000) {
        img1 = loadImage('media/chiamatemi_quipresente/Mobile_screensaver_chiamatemi_ludotron.png');
        img2 = loadImage('media/chiamatemi_quipresente/Mobile_screensaver_chiamatemi_lully.png');
        img3 = loadImage('media/chiamatemi_quipresente/Mobile_screensaver_chiamatemi_malvagio_gaspare.png');
        img4 = loadImage('media/chiamatemi_quipresente/Mobile_screensaver_chiamatemi_quipre.png');
        img5 = loadImage('media/chiamatemi_quipresente/Mobile_screensaver_chiamatemi_quipresente.png');
        img6 = loadImage('media/chiamatemi_quipresente/Mobile_screensaver_chiamatemi_william.png');
        img7 = loadImage('media/chiamatemi_quipresente/Mobile_screensaver_chiamatemi_willie.png');
        img8 = loadImage('media/chiamatemi_quipresente/Mobile_screensaver_ludoconlebraccia_dark.png');
        img9 = loadImage('media/chiamatemi_quipresente/Mobile_screensaver_ludoconlebraccia.png');
    } else {
        img1 = loadImage('media/chiamatemi_quipresente/Screensaver_chiamatemi_ludotron.png');
        img2 = loadImage('media/chiamatemi_quipresente/Screensaver_chiamatemi_lully.png');
        img3 = loadImage('media/chiamatemi_quipresente/Screensaver_chiamatemi_malvagio_gaspare.png');
        img4 = loadImage('media/chiamatemi_quipresente/Screensaver_chiamatemi_quipre.png');
        img5 = loadImage('media/chiamatemi_quipresente/Screensaver_chiamatemi_quipresente.png');
        img6 = loadImage('media/chiamatemi_quipresente/Screensaver_chiamatemi_william.png');
        img7 = loadImage('media/chiamatemi_quipresente/Screensaver_chiamatemi_willie.png');
        img8 = loadImage('media/chiamatemi_quipresente/Screensaver_ludoconlebraccia.png');
        img9 = loadImage('media/chiamatemi_quipresente/Screensaver_ludoconlebraccia_dark.png');
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    button1 = createButton('chiamatemi ludotron');
    button1.position(random(0, windowWidth / 3 - button1.width), random(0, windowHeight / 3 - button1.height));
    button1.mousePressed(saveImage1);


    button2 = createButton('chiamatemi lully');
    button2.position(random(windowWidth / 3, (windowWidth / 3) * 2 - button2.width), random(0, windowHeight / 3 - button2.height));
    button2.mousePressed(saveImage2);

    button3 = createButton('chiamatemi malvagio gaspare');
    button3.position(random((windowWidth / 3) * 2, (windowWidth / 3) * 3 - button3.width), random(0, windowHeight / 3 - button3.height));
    button3.mousePressed(saveImage3);

    button4 = createButton('chiamatemi quipre');
    button4.position(random(0, windowWidth / 3 - button4.width), random(windowHeight / 3, (windowHeight / 3) * 2 - button4.height));
    button4.mousePressed(saveImage4);

    button5 = createButton('chiamatemi quipresente');
    button5.position(random(windowWidth / 3, (windowWidth / 3) * 2 - button5.width), random(windowHeight / 3, (windowHeight / 3) * 2 - button5.height));
    button5.mousePressed(saveImage5);

    button6 = createButton('chiamatemi william');
    button6.position(random((windowWidth / 3) * 2, (windowWidth / 3) * 3 - button6.width), random(windowHeight / 3, (windowHeight / 3) * 2 - button6.height));
    button6.mousePressed(saveImage6);

    button7 = createButton('chiamatemi willie');
    button7.position(random(0, windowWidth / 3 - button7.width), random((windowHeight / 3) * 2, (windowHeight / 3) * 3 - button7.height));
    button7.mousePressed(saveImage7);

    button8 = createButton('pallaconlebraccia');
    button8.position(random(windowWidth / 3, (windowWidth / 3) * 2 - button8.width), random((windowHeight / 3) * 2, (windowHeight / 3) * 3 - button8.height));
    button8.mousePressed(saveImage8);

    button9 = createButton('pallaconlebraccia dark');
    button9.position(random((windowWidth / 3) * 2, (windowWidth / 3) * 3 - button9.width), random((windowHeight / 3) * 2, (windowHeight / 3) * 3 - button9.height));
    button9.mousePressed(saveImage9);
}

function draw() {
}


function saveImage1(){
    save(img1, 'chiamatemi_ludotron');
}
function saveImage2(){
    save(img2, 'chiamatemi_lully');
}
function saveImage3(){
    save(img3, 'chiamatemi_malvagio_gaspare');
}
function saveImage4(){
    save(img4, 'chiamatemi_quipre');
}
function saveImage5(){
    save(img5, 'chiamatemi_quipresente');
}
function saveImage6(){
    save(img6, 'chiamatemi_william');
}
function saveImage7(){
    save(img7, 'chiamatemi_willie');
}
function saveImage8(){
    save(img8, 'pallaconlebraccia');
}
function saveImage9(){
    save(img9, 'pallaconlebraccia_dark');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    button1.position(random(0, windowWidth / 3 - button1.width), random(0, windowHeight / 3 - button1.height));

    button2.position(random(windowWidth / 3, (windowWidth / 3) * 2 - button2.width), random(0, windowHeight / 3 - button2.height));
   
    button3.position(random((windowWidth / 3) * 2, (windowWidth / 3) * 3 - button3.width), random(0, windowHeight / 3 - button3.height));
   
    button4.position(random(0, windowWidth / 3 - button4.width), random(windowHeight / 3, (windowHeight / 3) * 2 - button4.height));
 
    button5.position(random(windowWidth / 3, (windowWidth / 3) * 2 - button5.width), random(windowHeight / 3, (windowHeight / 3) * 2 - button5.height));
    
    button6.position(random((windowWidth / 3) * 2, (windowWidth / 3) * 3 - button6.width), random(windowHeight / 3, (windowHeight / 3) * 2 - button6.height));

    button7.position(random(0, windowWidth / 3 - button7.width), random((windowHeight / 3) * 2, (windowHeight / 3) * 3 - button7.height));

    button8.position(random(windowWidth / 3, (windowWidth / 3) * 2 - button8.width), random((windowHeight / 3) * 2, (windowHeight / 3) * 3 - button8.height));

    button9.position(random((windowWidth / 3) * 2, (windowWidth / 3) * 3 - button9.width), random((windowHeight / 3) * 2, (windowHeight / 3) * 3 - button9.height));
}