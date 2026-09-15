//            ▒▒▓▓▓▓▓▓▓▒▒▒         
//        ▒▓▓███▓▓▓▓▓▓▒▒▒▒▒▒▒      
//     ▒▓████▓▒                    
//    ▓████▓▒                      
//   ▓████▓     ▒▓▓████████▓▓▒     
//  ▓████▓    ▓███████████████▓▒   
// ▒▓████▒   ▓███▓░       ▒▓████▓░ 
// ▒████▓   ░▓██▓           ▓████▓░
// ▒████▓    ▓█▓             ▓████▒
// ▒████▓    ▓██▒            ▓████▒
// ▒████▓    ▒▓██▓▓▒▒▒▒░    ▒█████▒
// ▒█████▓    ░▒▓▓█▓▓▒░    ▒█████▓░
//  ▓█████▓               ▓██████▒ 
//  ▒▓█████▓▒           ▓▓█████▓▒  
//   ▒▓█████████▓▓▓▓▓█████████▓    
//     ▒▓██████████████████▓▒      
//         ▒▒▓▓▓▓▓▓▓▓▓▓▒▒          

// ©2026 Andrea Martinelli
// a website by Andrea Martinelli (@carol__jpg)
// https://caroljpeg.github.io/Andrea_Martinelli/index.html






let noiseShader;
let mainColor;
let noiseScale, noiseVelocity;
let currentHour;
let noiseCanvas;

function setup() {
    noiseCanvas = createCanvas(windowWidth, windowHeight);
    noiseCanvas.class('noiseCanvas');
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