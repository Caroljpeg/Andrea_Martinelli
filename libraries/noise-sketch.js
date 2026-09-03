let noiseShader;
let mainColor;
let noiseScale, noiseVelocity;
let currentHour;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noiseShader = buildFilterShader(noiseShaderCallback);

    currentHour = hour();
}

function draw(){
    filter(noiseShader);
}

function noiseShaderCallback(){
    filterColor.begin();
    let coord = filterColor.texCoord;

    noiseVelocity = 250; // the highest, the slowest
    let t = frameCount / noiseVelocity;

    noiseScale = 1;
    let mixFraction = noise(coord.x * noiseScale, coord.y * noiseScale, t);

    mainColor = color('#8cc5ff');
    secondaryColor = color('#ffffff')
    filterColor.set(mix(mainColor, secondaryColor, mixFraction));
    filterColor.end();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}