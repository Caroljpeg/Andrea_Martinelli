let date = new Date();
let hours = date.getHours();

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background('#ffffff15')
    backgroundNoise();
}





function backgroundNoise() {
    let noiseScale = 0.0005;
    let noiseVelocity = map(hours, 0, 23, 0.02, 0.001);

    noiseDetail(2, 2);

    let pixel = 20;

    for (var x = 0; x < windowWidth; x += pixel) {
		for (var y = 0; y < windowHeight; y += pixel) {
			var perlin =  noise(x * noiseScale, y * noiseScale, frameCount * noiseVelocity);
            let perlinColor = map(perlin, 0, 1, 0, 255);
            noStroke();
			fill(perlinColor);
			rect(x, y, pixel, pixel);
		}		
  	}
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}