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

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
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
    let homeYpos = home.offsetTop;

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





    noFill();
    stroke(0);
    strokeWeight(1);
    clear();
    if(about.style.display == 'block'){
        beginShape();
        vertex(homeXPos, homeYpos + homeHeight);
        vertex(homeXPos, aboutYpos + (aboutHeight / 2));
        vertex(aboutXPos, aboutYpos + (aboutHeight / 2));
        endShape();
    }

    if(works.style.display == 'block'){
        beginShape();
        vertex(homeXPos, homeYpos + homeHeight);
        vertex(homeXPos, worksYpos + (worksHeight / 2));
        vertex(worksXPos, worksYpos + (worksHeight / 2));
        endShape();
    }

    if(contacts.style.display == 'block'){
        beginShape();
        vertex(homeXPos, homeYpos + homeHeight);
        vertex(homeXPos, contactsYpos + (contactsHeight / 2));
        vertex(contactsXPos, contactsYpos + (contactsHeight / 2));
        endShape();
    }





    if(editory.style.display == 'block'){
        beginShape();
        vertex(worksXPos, worksYpos + worksHeight);
        vertex(worksXPos, editoryYpos + (editoryHeight / 2));
        vertex(editoryXPos, editoryYpos + (editoryHeight / 2));
        endShape();
    }

    if(audiovisual.style.display == 'block'){
        beginShape();
        vertex(worksXPos, worksYpos + worksHeight);
        vertex(worksXPos, audiovisualYpos + (audiovisualHeight / 2));
        vertex(audiovisualXPos, audiovisualYpos + (audiovisualHeight / 2));
        endShape();
    }

    if(installations.style.display == 'block'){
        beginShape();
        vertex(worksXPos, worksYpos + worksHeight);
        vertex(worksXPos, installationsYpos + (installationsHeight / 2));
        vertex(installationsXPos, installationsYpos + (installationsHeight / 2));
        endShape();
    }

    if(threed.style.display == 'block'){
        beginShape();
        vertex(worksXPos, worksYpos + worksHeight);
        vertex(worksXPos, threedYpos + (threedHeight / 2));
        vertex(threedXPos, threedYpos + (threedHeight / 2));
        endShape();
    }





    if(email.style.display == 'block'){
        beginShape();
        vertex(contactsXPos, contactsYpos + contactsHeight);
        vertex(contactsXPos, emailYpos + (emailHeight / 2));
        vertex(emailXPos, emailYpos + (emailHeight / 2));
        endShape();
    }

    if(phone.style.display == 'block'){
        beginShape();
        vertex(contactsXPos, contactsYpos + contactsHeight);
        vertex(contactsXPos, phoneYpos + (phoneHeight / 2));
        vertex(phoneXPos, phoneYpos + (phoneHeight / 2));
        endShape();
    }

    if(instagram.style.display == 'block'){
        beginShape();
        vertex(contactsXPos, contactsYpos + contactsHeight);
        vertex(contactsXPos, instagramYpos + (instagramHeight / 2));
        vertex(instagramXPos, instagramYpos + (instagramHeight / 2));
        endShape();
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

    if(about.style.display == 'none' || about.style.display == ''){
        about.style.display = 'block';
        works.style.display = 'block';
        contacts.style.display = 'block';
    } else{
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

    if(editory.style.display == 'none' || editory.style.display == ''){
        contacts.style.top = '66.66%';
        email.style.top = '75%';
        phone.style.top = '79.16%';
        instagram.style.top = '83.33%';

        editory.style.display = 'block';
        audiovisual.style.display = 'block';
        installations.style.display = 'block';
        threed.style.display = 'block';
    } else{
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





function revealContacts(){
    contacts = document.getElementById('contacts');

    email = document.getElementById('email');
    phone = document.getElementById('phone');
    instagram = document.getElementById('instagram');

    if(email.style.display == 'none' || email.style.display == ''){
        email.style.display = 'block';
        phone.style.display = 'block';
        instagram.style.display = 'block';
    } else{
        email.style.display = 'none';
        phone.style.display = 'none';
        instagram.style.display = 'none';
    }
}