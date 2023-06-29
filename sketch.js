let rowsSeed;
let columnsSeed;

seedsArray = [1, 5, 25, 30, 35, 40, 45, 50];

let andrea;
let about;
let works;
let contacts;
let editory;
let audovisual;
let installations;
let threed;
let email;
let phone;
let instagram;

function setup() {
    createCanvas(windowWidth, windowHeight);

    if (windowWidth < 768) {
        columnsSeed = random(seedsArray);
        rowsSeed = int(columnsSeed * 2);
    } else {
        rowsSeed = random(seedsArray);
        columnsSeed = int(rowsSeed * 2);
    }
}

function draw() {
    home = document.getElementById('name');
    about = document.getElementById('about');
    works = document.getElementById('works');
    contacts = document.getElementById('contacts');

    editory = document.getElementById('editory');
    audiovisual = document.getElementById('audiovisual');
    installations = document.getElementById('installations');
    threed = document.getElementById('threed');

    email = document.getElementById('email');
    phone = document.getElementById('phone');
    instagram = document.getElementById('instagram');

    let homeXPos = home.offsetLeft;
    let homeHeight = home.offsetHeight;
    let homeYpos = home.offsetTop + 20;

    let aboutXPos = about.offsetLeft;
    let aboutHeight = about.offsetHeight;
    let aboutYpos = about.offsetTop;

    let worksXPos = works.offsetLeft;
    let worksHeight = works.offsetHeight;
    let worksYpos = works.offsetTop;

    let contactsXPos = contacts.offsetLeft;
    let contactsHeight = contacts.offsetHeight;
    let contactsYpos = contacts.offsetTop;


    let editoryXPos = editory.offsetLeft;
    let editoryHeight = editory.offsetHeight;
    let editoryYpos = editory.offsetTop;

    let audiovisualXPos = audiovisual.offsetLeft;
    let audiovisualHeight = audiovisual.offsetHeight;
    let audiovisualYpos = audiovisual.offsetTop;

    let installationsXPos = installations.offsetLeft;
    let installationsHeight = installations.offsetHeight;
    let installationsYpos = installations.offsetTop;

    let threedXPos = threed.offsetLeft;
    let threedHeight = threed.offsetHeight;
    let threedYpos = threed.offsetTop;

    let emailXPos = email.offsetLeft;
    let emailHeight = email.offsetHeight;
    let emailYpos = email.offsetTop;

    let phoneXPos = phone.offsetLeft;
    let phoneHeight = phone.offsetHeight;
    let phoneYpos = phone.offsetTop;

    let instagramXPos = instagram.offsetLeft;
    let instagramHeight = instagram.offsetHeight;
    let instagramYpos = instagram.offsetTop;





    background('#ffffff15')
    backgroundNoise();





    noFill();
    stroke('#1A1A1A');
    strokeWeight(0.25);
    if (about.style.display == 'block') {
        beginShape();
        vertex(homeXPos, homeYpos + homeHeight);
        vertex(homeXPos, aboutYpos + (aboutHeight / 2));
        vertex(aboutXPos - 20, aboutYpos + (aboutHeight / 2));
        endShape();
    }

    if (works.style.display == 'block') {
        beginShape();
        vertex(homeXPos, homeYpos + homeHeight);
        vertex(homeXPos, worksYpos + (worksHeight / 2));
        vertex(worksXPos - 20, worksYpos + (worksHeight / 2));
        endShape();
    }

    if (contacts.style.display == 'block') {
        beginShape();
        vertex(homeXPos, homeYpos + homeHeight);
        vertex(homeXPos, contactsYpos + (contactsHeight / 2));
        vertex(contactsXPos - 20, contactsYpos + (contactsHeight / 2));
        endShape();
    }





    if (editory.style.display == 'block') {
        beginShape();
        vertex(worksXPos, worksYpos + 20 + worksHeight);
        vertex(worksXPos, editoryYpos + (editoryHeight / 2));
        vertex(editoryXPos - 20, editoryYpos + (editoryHeight / 2));
        endShape();
    }

    if (audiovisual.style.display == 'block') {
        beginShape();
        vertex(worksXPos, worksYpos + 20 + worksHeight);
        vertex(worksXPos, audiovisualYpos + (audiovisualHeight / 2));
        vertex(audiovisualXPos - 20, audiovisualYpos + (audiovisualHeight / 2));
        endShape();
    }

    if (installations.style.display == 'block') {
        beginShape();
        vertex(worksXPos, worksYpos + 20 + worksHeight);
        vertex(worksXPos, installationsYpos + (installationsHeight / 2));
        vertex(installationsXPos - 20, installationsYpos + (installationsHeight / 2));
        endShape();
    }

    if (threed.style.display == 'block') {
        beginShape();
        vertex(worksXPos, worksYpos + 20 + worksHeight);
        vertex(worksXPos, threedYpos + (threedHeight / 2));
        vertex(threedXPos - 20, threedYpos + (threedHeight / 2));
        endShape();
    }





    if (email.style.display == 'block') {
        beginShape();
        vertex(contactsXPos, contactsYpos + 20 + contactsHeight);
        vertex(contactsXPos, emailYpos + (emailHeight / 2));
        vertex(emailXPos - 20, emailYpos + (emailHeight / 2));
        endShape();
    }

    if (phone.style.display == 'block') {
        beginShape();
        vertex(contactsXPos, contactsYpos + 20 + contactsHeight);
        vertex(contactsXPos, phoneYpos + (phoneHeight / 2));
        vertex(phoneXPos - 20, phoneYpos + (phoneHeight / 2));
        endShape();
    }

    if (instagram.style.display == 'block') {
        beginShape();
        vertex(contactsXPos, contactsYpos + 20 + contactsHeight);
        vertex(contactsXPos, instagramYpos + (instagramHeight / 2));
        vertex(instagramXPos - 20, instagramYpos + (instagramHeight / 2));
        endShape();
    }
}





function backgroundNoise() {
    fill('#E6E6E6');
    stroke('#E6E6E6');
    strokeCap(SQUARE);

    let columns = columnsSeed;
    let rows = rowsSeed;
    let cellsCount = columns * rows;

    let gridWidth = windowWidth;
    let gridHeight = windowHeight;
    let cellWidth = gridWidth / columns;
    let cellHeight = gridHeight / rows;
    let marginX = (windowWidth - gridWidth);
    let marginY = (windowHeight - gridHeight);

    for (let a = 0; a < cellsCount; a++) {
        let column = a % columns;
        let row = floor(a / columns);

        let x = column * cellWidth;
        let y = row * cellHeight;
        let w = cellWidth * 0.95;
        let h = cellHeight * 0.95

        let noiseScale = .001;

        let perlin = noise(x * noiseScale, y * noiseScale, frameCount * 0.005);
        let perlinN = map(perlin, 0, 1, -1, 1);
        let angle = perlinN * TWO_PI;
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





function revealSections() {
    about = document.getElementById('about');
    works = document.getElementById('works');
    contacts = document.getElementById('contacts');

    editory = document.getElementById('editory');
    audiovisual = document.getElementById('audiovisual');
    installations = document.getElementById('installations');
    threed = document.getElementById('threed');

    email = document.getElementById('email');
    phone = document.getElementById('phone');
    instagram = document.getElementById('instagram');

    if (about.style.display == 'none' || about.style.display == '') {
        about.style.display = 'block';
        works.style.display = 'block';
        contacts.style.display = 'block';
    } else {
        about.style.display = 'none';
        works.style.display = 'none';
        contacts.style.display = 'none';

        editory.style.display = 'none';
        audiovisual.style.display = 'none';
        installations.style.display = 'none';
        threed.style.display = 'none';

        contacts.style.top = '41.66%';
        email.style.top = '50%';
        phone.style.top = '58.33%';
        instagram.style.top = '66.66%';

        email.style.display = 'none';
        phone.style.display = 'none';
        instagram.style.display = 'none';
    }
}





function revealSubSections() {
    contacts = document.getElementById('contacts');

    editory = document.getElementById('editory');
    audiovisual = document.getElementById('audiovisual');
    installations = document.getElementById('installations');
    threed = document.getElementById('threed');

    email = document.getElementById('email');
    phone = document.getElementById('phone');
    instagram = document.getElementById('instagram');

    if (editory.style.display == 'none' || editory.style.display == '') {
        contacts.style.top = '66.66%';
        email.style.top = '75%';
        phone.style.top = '79.16%';
        instagram.style.top = '83.33%';

        editory.style.display = 'block';
        audiovisual.style.display = 'block';
        installations.style.display = 'block';
        threed.style.display = 'block';
    } else {
        contacts.style.top = '41.66%';
        email.style.top = '50%';
        phone.style.top = '54.16%';
        instagram.style.top = '58.33%';

        editory.style.display = 'none';
        audiovisual.style.display = 'none';
        installations.style.display = 'none';
        threed.style.display = 'none';
    }
}





function revealContacts() {
    contacts = document.getElementById('contacts');

    email = document.getElementById('email');
    phone = document.getElementById('phone');
    instagram = document.getElementById('instagram');

    if (email.style.display == 'none' || email.style.display == '') {
        email.style.display = 'block';
        phone.style.display = 'block';
        instagram.style.display = 'block';
    } else {
        email.style.display = 'none';
        phone.style.display = 'none';
        instagram.style.display = 'none';
    }
}





function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}