let chapter1;
let chapter2;
let chapter3;
let chapter4;
let chapter5;

let image1;
let image2;
let image3;
let image4;
let image5;





function revealImage1() {
    chapter1 = document.getElementById('chapter1');
    chapter2 = document.getElementById('chapter2');
    chapter3 = document.getElementById('chapter3');
    chapter4 = document.getElementById('chapter4');
    chapter5 = document.getElementById('chapter5');

    image1 = document.getElementById('image1');
    image2 = document.getElementById('image2');
    image3 = document.getElementById('image3');
    image4 = document.getElementById('image4');
    image5 = document.getElementById('image5');

    if (image1.style.display == 'none' || image1.style.display == '') {
        image1.style.display = 'block';
        
        image2.style.display = 'none';
        image3.style.display = 'none';
        image4.style.display = 'none';
        image5.style.display = 'none';


        chapter1.style.color = 'white';
        chapter1.style.backgroundColor = 'black';

        chapter2.style.color = 'black';
        chapter2.style.backgroundColor = 'white';

        chapter3.style.color = 'black';
        chapter3.style.backgroundColor = 'white';

        chapter4.style.color = 'black';
        chapter4.style.backgroundColor = 'white';

        chapter5.style.color = 'black';
        chapter5.style.backgroundColor = 'white';

    } else {
        image1.style.display = 'none';


        chapter1.style.color = 'black';
        chapter1.style.backgroundColor = 'white';
    }
}

function revealImage2() {
    image1 = document.getElementById('image1');
    image2 = document.getElementById('image2');
    image3 = document.getElementById('image3');
    image4 = document.getElementById('image4');
    image5 = document.getElementById('image5');

    if (image2.style.display == 'none' || image2.style.display == '') {
        image2.style.display = 'block';
        
        image1.style.display = 'none';
        image3.style.display = 'none';
        image4.style.display = 'none';
        image5.style.display = 'none';


        chapter2.style.color = 'white';
        chapter2.style.backgroundColor = 'black';

        chapter1.style.color = 'black';
        chapter1.style.backgroundColor = 'white';

        chapter3.style.color = 'black';
        chapter3.style.backgroundColor = 'white';

        chapter4.style.color = 'black';
        chapter4.style.backgroundColor = 'white';

        chapter5.style.color = 'black';
        chapter5.style.backgroundColor = 'white';

        
    } else {
        image2.style.display = 'none';

        chapter2.style.color = 'black';
        chapter2.style.backgroundColor = 'white';
    }
}

function revealImage3() {
    image1 = document.getElementById('image1');
    image2 = document.getElementById('image2');
    image3 = document.getElementById('image3');
    image4 = document.getElementById('image4');
    image5 = document.getElementById('image5');

    if (image3.style.display == 'none' || image3.style.display == '') {
        image3.style.display = 'block';
        
        image1.style.display = 'none';
        image2.style.display = 'none';
        image4.style.display = 'none';
        image5.style.display = 'none';


        chapter3.style.color = 'white';
        chapter3.style.backgroundColor = 'black';

        chapter1.style.color = 'black';
        chapter1.style.backgroundColor = 'white';

        chapter2.style.color = 'black';
        chapter2.style.backgroundColor = 'white';

        chapter4.style.color = 'black';
        chapter4.style.backgroundColor = 'white';

        chapter5.style.color = 'black';
        chapter5.style.backgroundColor = 'white';
        
    } else {
        image3.style.display = 'none';

        chapter3.style.color = 'black';
        chapter3.style.backgroundColor = 'white';
    }
}

function revealImage4() {
    image1 = document.getElementById('image1');
    image2 = document.getElementById('image2');
    image3 = document.getElementById('image3');
    image4 = document.getElementById('image4');
    image5 = document.getElementById('image5');

    if (image4.style.display == 'none' || image4.style.display == '') {
        image4.style.display = 'block';
        
        image1.style.display = 'none';
        image2.style.display = 'none';
        image3.style.display = 'none';
        image5.style.display = 'none';


        chapter4.style.color = 'white';
        chapter4.style.backgroundColor = 'black';

        chapter1.style.color = 'black';
        chapter1.style.backgroundColor = 'white';

        chapter2.style.color = 'black';
        chapter2.style.backgroundColor = 'white';

        chapter3.style.color = 'black';
        chapter3.style.backgroundColor = 'white';

        chapter5.style.color = 'black';
        chapter5.style.backgroundColor = 'white';
        
    } else {
        image4.style.display = 'none';

        chapter4.style.color = 'black';
        chapter4.style.backgroundColor = 'white';
    }
}

function revealImage5() {
    image1 = document.getElementById('image1');
    image2 = document.getElementById('image2');
    image3 = document.getElementById('image3');
    image4 = document.getElementById('image4');
    image5 = document.getElementById('image5');

    if (image5.style.display == 'none' || image5.style.display == '') {
        image5.style.display = 'block';
        
        image1.style.display = 'none';
        image2.style.display = 'none';
        image3.style.display = 'none';
        image4.style.display = 'none';


        chapter5.style.color = 'white';
        chapter5.style.backgroundColor = 'black';

        chapter1.style.color = 'black';
        chapter1.style.backgroundColor = 'white';

        chapter2.style.color = 'black';
        chapter2.style.backgroundColor = 'white';

        chapter3.style.color = 'black';
        chapter3.style.backgroundColor = 'white';

        chapter4.style.color = 'black';
        chapter4.style.backgroundColor = 'white';
        
    } else {
        image5.style.display = 'none';

        chapter5.style.color = 'black';
        chapter5.style.backgroundColor = 'white';
    }
}





magnify('image1',3)
function magnify(imgId, zoom) {
    var imgId;
    var lens;
    var w;
    var h;
    var bw;

    imgId = document.getElementById(imgId);
  
    lens = document.createElement('DIV');
    lens.setAttribute('class', 'imgId-magnifier-lens');
  
    imgId.parentElement.insertBefore(lens, imgId);
  
    lens.style.backgroundImage = "url('" + imgId.src + "')";
    lens.style.backgroundRepeat = "no-repeat";
    lens.style.backgroundSize = (imgId.width * zoom) + "px " + (imgId.height * zoom) + "px";
    bw = 3;
    w = lens.offsetWidth / 2;
    h = lens.offsetHeight / 2;
  
    lens.addEventListener('mousemove', moveMagnifier);
    imgId.addEventListener('mousemove', moveMagnifier);
  
    lens.addEventListener('touchmove', moveMagnifier);
    imgId.addEventListener('touchmove', moveMagnifier);
    function moveMagnifier(e) {

      var pos, x, y;
      e.preventDefault();

      pos = getCursorPos(e);

      x = pos.x;
      y = pos.y;

      if (x > imgId.width - (w / zoom)) {x = imgId.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > imgId.height - (h / zoom)) {y = imgId.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}

      lens.style.left = (x - w) + "px";
      lens.style.top = (y - h) + "px";

      lens.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
  
    function getCursorPos(e) {
      var a, x = 0, y = 0;

      a = imgId.getBoundingClientRect();

      x = e.pageX - a.left;
      y = e.pageY - a.top;

      x = x - window.scrollX;
      y = y - window.scrollY;

      return {x : x, y : y};
    }
  }