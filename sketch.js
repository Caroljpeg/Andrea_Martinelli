let andrea;
let about;
let works;
let contacts;
let projectsSection;
let experimentsSection;
let email;
let phone;
let instagram;


let date = new Date();
let hours = date.getHours();

about = document.getElementById('about');
works = document.getElementById('works');
contacts = document.getElementById('contacts');

projectsSection = document.getElementById('projectsSection');
experimentsSection = document.getElementById('experimentsSection');

email = document.getElementById('email');
phone = document.getElementById('phone');
instagram = document.getElementById('instagram');

function setup() {
    createCanvas(windowWidth, windowHeight);

        about = document.getElementById('about');
        works = document.getElementById('works');
        contacts = document.getElementById('contacts');

        about.style.display = 'block';
        works.style.display = 'block';
        contacts.style.display = 'block';
}

function draw() {
    home = document.getElementById('name');
    about = document.getElementById('about');
    works = document.getElementById('works');
    contacts = document.getElementById('contacts');

    projectsSection = document.getElementById('projectsSection');
    experimentsSection = document.getElementById('experimentsSection');

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


    let projectsSectionXPos = projectsSection.offsetLeft;
    let projectsSectionHeight = projectsSection.offsetHeight;
    let projectsSectionYpos = projectsSection.offsetTop;

    let experimentsSectionXPos = experimentsSection.offsetLeft;
    let experimentsSectionHeight = experimentsSection.offsetHeight;
    let experimentsSectionYpos = experimentsSection.offsetTop;

    let emailXPos = email.offsetLeft;
    let emailHeight = email.offsetHeight;
    let emailYpos = email.offsetTop;

    let phoneXPos = phone.offsetLeft;
    let phoneHeight = phone.offsetHeight;
    let phoneYpos = phone.offsetTop;

    let instagramXPos = instagram.offsetLeft;
    let instagramHeight = instagram.offsetHeight;
    let instagramYpos = instagram.offsetTop;





    backgroundNoise2();




    noFill();
    stroke('#0000FC');
    strokeWeight(1);
    if (about.style.display == 'block' || about.style.display == '') {
        beginShape();
        vertex(homeXPos, homeYpos + homeHeight);
        vertex(homeXPos, aboutYpos + (aboutHeight / 2));
        vertex(aboutXPos - 20, aboutYpos + (aboutHeight / 2));
        endShape();
    }

    if (works.style.display == 'block' || works.style.display == '') {
        beginShape();
        vertex(homeXPos, homeYpos + homeHeight);
        vertex(homeXPos, worksYpos + (worksHeight / 2));
        vertex(worksXPos - 20, worksYpos + (worksHeight / 2));
        endShape();
    }

    if (contacts.style.display == 'block' || contacts.style.display == '') {
        beginShape();
        vertex(homeXPos, homeYpos + homeHeight);
        vertex(homeXPos, contactsYpos + (contactsHeight / 2));
        vertex(contactsXPos - 20, contactsYpos + (contactsHeight / 2));
        endShape();
    }





    if (projectsSection.style.display == 'block') {
        beginShape();
        vertex(worksXPos, worksYpos + 20 + worksHeight);
        vertex(worksXPos, projectsSectionYpos + (projectsSectionHeight / 2));
        vertex(projectsSectionXPos - 20, projectsSectionYpos + (projectsSectionHeight / 2));
        endShape();
    }

    if (experimentsSection.style.display == 'block') {
        beginShape();
        vertex(worksXPos, worksYpos + 20 + worksHeight);
        vertex(worksXPos, experimentsSectionYpos + (experimentsSectionHeight / 2));
        vertex(experimentsSectionXPos - 20, experimentsSectionYpos + (experimentsSectionHeight / 2));
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

        let noiseScale = 0.001;

        let perlin = noise(x * noiseScale, y * noiseScale, frameCount * 0.005);
        let perlinValue = map(perlin, 0, 1, -1, 1);
        let angle = perlinValue * TWO_PI;
        let scale = map(perlinValue, -1, 1, 0, 5);
        let perlinColor = map(perlinValue, -1, 1, 150, 255);

        push();
        translate(x, y);
        translate(marginX, marginY);
        translate(w * 0.5, h * 0.5)
        rotate(angle);

        stroke(perlinColor);
        strokeWeight(scale);

        line(w * -0.5, 0, w * 0.5, 0)

        pop();
    }
}





function backgroundNoise2() {
    let noiseScale = 0.001;
    // let noiseVelocity = map(hours, 0, 23, 0.1, 0.001);
    let noiseVelocity = 0.01;

    noiseDetail(2, 2);

    let pixel = 20;

    for (var x = 0; x < windowWidth; x += pixel) {
		for (var y = 0; y < windowHeight; y += pixel) {
			var perlin =  noise(x * noiseScale, y * noiseScale, frameCount * noiseVelocity);
            let perlinColor = map(perlin, 0, 1, 1, 255);
            noStroke();
			fill(perlinColor, perlinColor, 255);
			rect(x, y, pixel, pixel);
		}		
  	}
}










function revealSections() {
    if (about.style.display == 'none') {
        about.style.display = 'block';
        works.style.display = 'block';
        contacts.style.display = 'block';
    } else {
        about.style.display = 'none';
        works.style.display = 'none';
        contacts.style.display = 'none';

        projectsSection.style.display = 'none';
        experimentsSection.style.display = 'none';

        contacts.style.top = '45vh';
        email.style.top = '55vh';
        phone.style.top = '60vh';
        instagram.style.top = '65vh';

        email.style.display = 'none';
        phone.style.display = 'none';
        instagram.style.display = 'none';
    }
}





function revealSubSections() {
    if (projectsSection.style.display == 'none' || projectsSection.style.display == '') {
        contacts.style.top = '60vh';
        email.style.top = '70vh';
        phone.style.top = '75vh';
        instagram.style.top = '80vh';

        projectsSection.style.display = 'block';
        experimentsSection.style.display = 'block';

    } else {
        contacts.style.top = '45vh';
        email.style.top = '55vh';
        phone.style.top = '60vh';
        instagram.style.top = '65vh';

        projectsSection.style.display = 'none';
        experimentsSection.style.display = 'none';
    }
}





function revealContacts() {
    if (email.style.display == 'none' || email.style.display == '') {
        email.style.display = 'block';
        phone.style.display = 'block';
        instagram.style.display = 'block';

        if (projectsSection.style.display == 'none' || projectsSection.style.display == ''){
            contacts.style.top = '45vh';
            email.style.top = '55vh';
            phone.style.top = '60vh';
            instagram.style.top = '65vh'
        } else {
            contacts.style.top = '60vh';
            email.style.top = '70vh';
            phone.style.top = '75vh';
            instagram.style.top = '80vh';
        }
    } else {
        email.style.display = 'none';
        phone.style.display = 'none';
        instagram.style.display = 'none';
    }
}





function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}