let methodNumber;
let areasRatio = 0.1;
let EEAAPRColumns = 6;
let IKASAILIShortSideSubdivisions = 6;
let IKASAILIGutter = 20;
let GFlippingPreferences = [];
let GHorizontalFlip;
let GVerticalFlip;
let GSubdivisionsNumber = 6 

let margins = [];
let verticalGuides = [];
let horizontalGuides = [];

let menu1, menu2, menu3;
let text1, text2, text3, text4;

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    menu1 = document.getElementById('menu1');
    menu2 = document.getElementById('menu2');
    menu3 = document.getElementById('menu3');

    text1 = document.getElementById('text1');
    text2 = document.getElementById('text2');
    text3 = document.getElementById('text3');
    text4 = document.getElementById('text4');

    // methodNumber = Math.round(random(0, 1));
    methodNumber = 2;

    if (methodNumber == 0) {
        everythingEverywhereAllAtPageRatio(areasRatio, EEAAPRColumns)
    } else if (methodNumber == 1) {
        IKissedASquareAndILikedIt(areasRatio, IKASAILIShortSideSubdivisions, IKASAILIGutter)
    } else if (methodNumber == 2) {
        // GHorizontalFlip = random(['horizontallyStandard', 'horizontallyFlipped']);
        // GVerticalFlip = random(['verticallyStandard', 'verticallyFlipped']);
        GFlippingPreferences.push('horizontallyFlipped', 'verticallyStandard');
        gutenbergify(GFlippingPreferences, GSubdivisionsNumber);
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

    let text1Left = verticalGuides[0];
    let text1Top = horizontalGuides[2];

    let text2Left = verticalGuides[2];
    let text2Top = horizontalGuides[Math.round(horizontalGuides.length / 3)];

    let text3Left = verticalGuides[4];
    let text3Top = horizontalGuides[Math.round(horizontalGuides.length / 2)];
    
    let text4Left = verticalGuides[verticalGuides.length - 6];
    let text4Top = horizontalGuides[horizontalGuides.length - 2];

    menu1.style.left = `${verticalGuides[0]}px`;
    menu1.style.top = `${horizontalGuides[0]}px`;
    menu1.style.width = `${verticalGuides[1] - margins[3]}px`;

    menu2.style.left = `${verticalGuides[4]}px`;
    menu2.style.top = `${horizontalGuides[0]}px`;
    menu2.style.width = `${verticalGuides[3] - margins[3]}px`;

    menu3.style.left = `${verticalGuides[8]}px`;
    menu3.style.top = `${horizontalGuides[0]}px`;
    menu3.style.width = `${verticalGuides[3] - margins[3]}px`;

    text1.style.left = `${text1Left}px`;
    text1.style.top = `${text1Top}px`;
    text1.style.width = `${verticalGuides[7] - margins[3]}px`;
    text1.style.textIndent = `${verticalGuides[2] - margins[3]}px`;

    text2.style.left = `${text2Left}px`;
    text2.style.top = `${text2Top}px`;
    text2.style.width = `${verticalGuides[7] - margins[3]}px`;
    text2.style.textIndent = `${verticalGuides[2] - margins[3]}px`;

    text3.style.left = `${text3Left}px`;
    text3.style.top = `${text3Top}px`;
    text3.style.width = `${verticalGuides[7] - margins[3]}px`;
    text3.style.textIndent = `${verticalGuides[2] - margins[3]}px`;

    text4.style.left = `${text4Left}px`;
    text4.style.top = `${text4Top}px`;
    text4.style.width = `${verticalGuides[5] - margins[3]}px`;
    text4.style.textIndent = `${verticalGuides[2] - margins[3]}px`;
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

    margins.push(marginTop, marginBottom, marginLeft, marginRight);
}

function gutenbergify(flippingPreferences, subdivisionsNumber) {
    let marginTop, marginBottom, marginLeft, marginRight;
    var moduleHeight = window.innerHeight / 9;

    if (flippingPreferences[0] == 'horizontallyStandard') {
        marginRight = window.innerWidth / 9;
        marginLeft = (window.innerWidth / 9) * 2;
    } else if (flippingPreferences[0] == 'horizontallyFlipped') {
        marginLeft = window.innerWidth / 9;
        marginRight = (window.innerWidth / 9) * 2;
    }

    if (flippingPreferences[1] == 'verticallyStandard') {
        marginTop = moduleHeight;
        marginBottom = moduleHeight * 2;
    } else if (flippingPreferences[1] == 'verticallyFlipped') {
        marginBottom = moduleHeight;
        marginTop = moduleHeight * 2;
    }

    var rowsHeight = (window.innerHeight - marginTop - marginBottom) / subdivisionsNumber;
    var columnsWidth = (window.innerWidth - marginLeft - marginRight) / subdivisionsNumber;

    var guttersHeight = rowsHeight / 9;
    var guttersWidth = columnsWidth / 9;

    rowsHeight = (window.innerHeight - marginTop - marginBottom - guttersHeight * (subdivisionsNumber - 1)) / subdivisionsNumber;
    columnsWidth = (window.innerWidth - marginLeft - marginRight - guttersWidth * (subdivisionsNumber - 1)) / subdivisionsNumber;


    for (var i = 0; i < subdivisionsNumber; i++) {
        var xPosition = marginLeft + i * (columnsWidth + guttersWidth);

        verticalGuides.push(xPosition, xPosition + columnsWidth);
    }

    for (var k = 0; k < subdivisionsNumber; k++) {
        var yPosition = marginTop + k * (rowsHeight + guttersHeight);

        horizontalGuides.push(yPosition, yPosition + rowsHeight);
    }

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
    } else if (methodNumber == 2) {
        gutenbergify(GFlippingPreferences, GSubdivisionsNumber);
    }

    positionTexts();
}