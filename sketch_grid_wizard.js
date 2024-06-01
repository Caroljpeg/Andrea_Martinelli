let methodNumber;
let areasRatio = 0.1;
let EEAAPRColumns = 7;
let IKASAILIShortSideSubdivisions = 6;
let IKASAILIGutter = 20;

let margins = [];
let verticalGuides = [];
let horizontalGuides = [];

let text1, text2;

function preload(){
}

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    text1 = document.getElementById('text1');
    text2 = document.getElementById('text2');

    methodNumber = Math.round(random(0, 1));

    if (methodNumber == 0) {
        everythingEverywhereAllAtPageRatio(areasRatio, EEAAPRColumns)
    } else if (methodNumber == 1) {
        IKissedASquareAndILikedIt(areasRatio, IKASAILIShortSideSubdivisions, IKASAILIGutter)
    }

    positionTexts();
}

function draw() {
    clear();
    stroke(128, 255, 255);
    strokeWeight(1);
    for (let i = 0; i < verticalGuides.length; i++) {
        line(verticalGuides[i], 0, verticalGuides[i], window.innerHeight);
    }
    for (let j = 0; j < horizontalGuides.length; j++) {
        line(0, horizontalGuides[j], window.innerWidth, horizontalGuides[j]);
    }

    stroke(204, 153, 255);
    strokeWeight(2);
    line(margins[2], 0, margins[2], window.innerHeight);
    line(window.innerWidth - margins[3], 0, window.innerWidth - margins[3], window.innerHeight);

    stroke(255, 167, 255);
    strokeWeight(2);
    line(0, margins[0], window.innerWidth, margins[0]);
    line(0, window.innerHeight - margins[1], window.innerWidth, window.innerHeight - margins[1]);
}

function positionTexts() {
    let textIndent = 'text-indent';

    if (text1) {
        text1.style.left = `${verticalGuides[0]}px`;
        text1.style.top = `${horizontalGuides[0]}px`;

        text1.style.width = `${verticalGuides[7] - margins[3]}px`;

        text1.style.textIndent = `${verticalGuides[2] - margins[3]}px`;
    }

    if (text2) {
        text2.style.left = `${verticalGuides[2]}px`;
        text2.style.top = `${horizontalGuides[2]}px`;

        text2.style.width = `${verticalGuides[7] - margins[3]}px`;

        text2.style.textIndent = `${verticalGuides[2] - margins[3]}px`;
    }
}





function everythingEverywhereAllAtPageRatio(areasRatio, columns) {
    let marginTop, marginBottom, marginLeft, marginRight;
    
    let marginWidth = window.innerWidth * areasRatio;
    let marginHeight = window.innerHeight * areasRatio;
    
    marginTop = marginHeight / 2;
    marginBottom = marginHeight / 2;
    marginLeft = marginWidth / 2;
    marginRight = marginWidth / 2;

    let columnsWidth = (window.innerWidth - marginWidth) / columns;
    let guttersWidth = (window.innerWidth * areasRatio) / (2 * columns);
    columnsWidth = (window.innerWidth - marginWidth - guttersWidth * (columns - 1)) / columns;

    let rowsHeight = columnsWidth * (window.innerHeight - marginHeight) / (window.innerWidth - marginWidth);
    let guttersHeight = (window.innerHeight * areasRatio) / (2 * columns)

    for (let i = 0; i < columns; i++) {
        let xPosition = marginLeft + i * (columnsWidth + guttersWidth);
       verticalGuides.push(xPosition, xPosition + columnsWidth);
    }
    for (let j = 0; j < columns; j++) {
        let yPosition = marginTop + j * (rowsHeight + guttersHeight);
        horizontalGuides.push(yPosition, yPosition + rowsHeight)
    }

    margins.push(marginTop, marginBottom, marginLeft, marginRight);
}

function IKissedASquareAndILikedIt(areasRatio, shortSideSubdivisions, gutter) {
    let pageShortSide, pageLongSide;
    let marginTop, marginBottom, marginLeft, marginRight;

    if (window.innerHeight >= window.innerWidth) {
        pageShortSide = window.innerWidth;
        pageLongSide = window.innerHeight;
    } else if (window.innerHeight < window.innerWidth) {
        pageShortSide = window.innerHeight;
        pageLongSide = window.innerWidth;
    }

    let shortSideMargins = Math.round(pageShortSide * areasRatio);
    if (window.innerHeight >= window.innerWidth) {
        marginLeft = shortSideMargins / 2;
        marginRight = shortSideMargins / 2;
    } else if (window.innerHeight < window.innerWidth) {
        marginTop = shortSideMargins / 2;
        marginBottom = shortSideMargins / 2;
    }

    let subdivisionsLenght = (pageShortSide - shortSideMargins - gutter * (shortSideSubdivisions - 1)) / shortSideSubdivisions;

    let longSideMarginsDraft = Math.round(pageLongSide * areasRatio);
    let longSideMargins;

    let longSideSubdivisionsDraft = (pageLongSide - longSideMarginsDraft) / subdivisionsLenght;
    let longSideSubdivisions = Math.round((pageLongSide - longSideMarginsDraft - gutter * (longSideSubdivisionsDraft - 1)) / subdivisionsLenght);
    if ((pageLongSide - longSideMarginsDraft) % subdivisionsLenght !== 0) {
        longSideMargins = pageLongSide - (subdivisionsLenght * longSideSubdivisions) - gutter * (longSideSubdivisions - 1);
    }

    if (window.innerHeight >= window.innerWidth) {
        marginTop = longSideMargins / 2;
        marginBottom = longSideMargins / 2;
    } else if (window.innerHeight < window.innerWidth) {
        marginLeft = longSideMargins / 2;
        marginRight = longSideMargins / 2;
    }

    if (window.innerHeight >= window.innerWidth) {
        for (let i = 0; i < shortSideSubdivisions; i++) {
            let xPosition = marginLeft + i * (subdivisionsLenght + gutter);
            verticalGuides.push(xPosition, xPosition + subdivisionsLenght);
        }
        for (let j = 0; j < longSideSubdivisions; j++) {
            let yPosition = marginTop + j * (subdivisionsLenght + gutter);
            horizontalGuides.push(yPosition, yPosition + subdivisionsLenght);
        }
    }

    else if (window.innerHeight < window.innerWidth) {
        for (let i = 0; i < longSideSubdivisions; i++) {
            let xPosition = marginLeft + i * (subdivisionsLenght + gutter);
            verticalGuides.push(xPosition, xPosition + subdivisionsLenght);
        }
        for (let j = 0; j < shortSideSubdivisions; j++) {
            let yPosition = marginTop + j * (subdivisionsLenght + gutter);
            horizontalGuides.push(yPosition, yPosition + subdivisionsLenght);
        }
    }

    console.log(window.innerHeight, window.innerWidth);
    margins.push(marginTop, marginBottom, marginLeft, marginRight);
}





function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);

    margins = [];
    verticalGuides = [];
    horizontalGuides = [];

    if (methodNumber == 0) {
        everythingEverywhereAllAtPageRatio(areasRatio, EEAAPRColumns)
    } else if (methodNumber == 1) {
        IKissedASquareAndILikedIt(areasRatio, IKASAILIShortSideSubdivisions, IKASAILIGutter)
    }

    positionTexts();
}