let rowsSeed;
let columnsSeed;


function setup(){
    createCanvas(windowWidth, windowHeight);
    rowsSeed = int(random(1, 50));
    columnsSeed = int(random(1, 2));
}

function draw(){
    background('#ffffff15')
    backgroundNoise();
}





function backgroundNoise(){
    fill('#b8c8e9');
    stroke('#b9c9e940');
    strokeCap(SQUARE);

    let columns = columnsSeed;
    let rows = rowsSeed;
    let cellsCount = columns * rows;

    let gridWidth = windowWidth;
    let gridHeight = windowHeight;
    let cellWidth = gridWidth / columns;
    let cellHeight = gridHeight / rows;
    let marginX = (windowWidth - gridWidth) * 0.8;
    let marginY = (windowHeight - gridHeight) * 0.8;

    for (let a = 0; a < cellsCount; a++){
        let column = a % columns;
        let row = floor(a/columns);

        let x = column * cellWidth;
        let y = row * cellHeight;
        let w = cellWidth * 0.8;
        let h = cellHeight * 0.8;

        let noiseScale = 0.001;

        let perlin = noise(x * noiseScale, y * noiseScale, frameCount * 0.01);
        let perlinN = map(perlin, 0, 1, -1, 1);
        let angle = perlinN * TWO_PI * 0.2;
        let scale = map(perlinN, -1, 1, 0, 20);

        push();
        translate(x, y);
        translate(marginX, marginY);
        translate(w * 0.5, h * 0.5)
        rotate(angle);

        strokeWeight(scale);

        line(w * -0.5, 0, w * 0.5, 0)

        pop();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}