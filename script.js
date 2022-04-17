const parallax = document.querySelector('#parallax-1');
const menuBtn = document.querySelector('#menuBtn');
const menuList = document.querySelector('#menuList');

// SCROLL CHANGE ELEMENTS
const leftSideContent = document.querySelector('.left-side-content');
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const tags = document.querySelector('.tags');
const links = document.querySelector('.links');
// PHONES
const phone1 = document.querySelector('#phone1');
const phone2 = document.querySelector('#phone2');
const phone3 = document.querySelector('#phone3');
const phone4 = document.querySelector('#phone4');
const phone5 = document.querySelector('#phone5');
const phone6 = document.querySelector('#phone6');

const parallax4 = document.querySelector('#parallax-4');
const parallax5 = document.querySelector('#parallax-5');
const parallax6 = document.querySelector('#parallax-6');

window.addEventListener('scroll', function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
    let scrollTop = document.scrollingElement.scrollTop;
    // console.log(offset / 100);
    let xvalue = 'center';
    let rotate = 0.1;
    let factor = 0.7;
    let factor2 = 0.7;
    let factor3 = 1;
    let yvalue = scrollTop * factor;
    let yvalue2 = scrollTop * factor2;
    let yvalue3 = scrollTop * factor3;
    parallax4.style.backgroundPosition = xvalue + ' ' + yvalue + 'px';
    parallax5.style.backgroundPosition = xvalue + ' ' + yvalue2 + 'px';
    parallax6.style.backgroundPosition = xvalue + ' ' + yvalue3 + 'px';
    phone1.style.rotate = offset * rotate + 'deg';
    phone2.style.scale = offset / 950 * 0.45;
    phone4.style.rotate = offset * rotate + 'deg';
    phone5.style.rotate = offset * rotate + 'deg';
    phone6.style.scale = offset / 3900 * 0.6;
    phone6.style.rotate = offset / 30 + 'deg';
})
let inOut = false;

menuBtn.addEventListener('click', () => {

    if (!inOut) {
        menuList.classList?.remove('scale-out-hor-left');
        menuList.classList.add('scale-in-hor-left');
        menuList.classList.toggle('d-none');
        inOut = true;

    } else {
        menuList.classList.remove('scale-in-hor-left');
        menuList.classList.add('scale-out-hor-left');

        setTimeout(() => {
            menuList.classList.toggle('d-none');
            inOut = false;
        }, 500);
    }
})

// ABOUT ME SCROLLING TEXT
const line1 = document.querySelector('.line-1');

window.onscroll = () => {
    let pos = window.scrollY - 1000;
    // console.log('pos: ', pos);
    // line1.style.left = `${pos} px`;
    line1.style.left = pos * 1.5 + 'px';
    line1.style.top = pos * 1.5 + 'px';


    // CHANGE CONTENT ON SCROLL
    console.log('position: ', pos);
    if (pos >= 900) {
        title.style.position = 'fixed';
        text.style.position = 'fixed';
        tags.style.position = 'fixed';
        links.style.position = 'fixed';
    } else {
        title.style.position = 'relative';
        text.style.position = 'relative';
        tags.style.position = 'relative';
        links.style.position = 'relative';
    }
    if (pos >= 800 && pos <= 2500) {
        title.innerHTML = 'Projekt 1';
    }
    else if (pos >= 2500 && pos <= 4400) {
        title.innerHTML = 'Projekt 2';
    }
    else if (pos >= 4400 && pos <= 6000) {
        title.innerHTML = 'Projekt 3';
    } else {
        title.innerHTML = 'The End';
        title.style.position = 'relative';
        text.style.position = 'relative';
        tags.style.position = 'relative';
        links.style.position = 'relative';
    }

}