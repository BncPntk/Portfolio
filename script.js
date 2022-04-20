const parallax = document.querySelector('#parallax-1');
const menuBtn = document.querySelector('#menuBtn');
const menuList = document.querySelector('#menuList');

// SCROLL CHANGE ELEMENTS
const leftSideContent = document.querySelector('.left-side-content');
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const tag = document.querySelector('.tags');
const links = document.querySelector('.links');
let tags = document.querySelectorAll('#tags');
// PHONES
const phone1 = document.querySelector('#phone1');
const phone2 = document.querySelector('#phone2');
const phone3 = document.querySelector('#phone3');
const phone4 = document.querySelector('#phone4');
const phone5 = document.querySelector('#phone5');
const phone6 = document.querySelector('#phone6');

const parallax3 = document.querySelector('#parallax-3');
const parallax4 = document.querySelector('#parallax-4');
const parallax5 = document.querySelector('#parallax-5');
const parallax6 = document.querySelector('#parallax-6');

const loading = document.querySelector('#loading');
const parallaxMain = document.querySelector('#parallaxMain');

// MENU ELEMENTS
const menuHome = document.querySelector('#menuHome');
const menuAboutme = document.querySelector('#menuAboutme');
const menuWorks = document.querySelector('#menuWorks');
const menuCV = document.querySelector('#menuCV');

const cv = document.querySelector('#cv');


menuHome.addEventListener('click', () => {
    showHideLoading(parallax);
})
menuAboutme.addEventListener('click', () => {
    showHideLoading(parallax3);
});

menuWorks.addEventListener('click', () => {
    showHideLoading(parallax4);
});

menuCV.addEventListener('click', () => {
    showHideLoading(cv);
});
let inOut = false;

//GO TO TARGET EL
function showHideLoading(target) {
    loading.style.display = 'block'
    target.scrollIntoView();
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        loading.style.display = 'none'
        document.body.style.overflowY = 'visible';
        // HIDE MENU
        menuList.classList.remove('scale-in-hor-left');
        menuList.classList.add('scale-out-hor-left');
        // setTimeout(() => {
        menuList.classList.toggle('d-none');
        inOut = false;
        // }, 200);

    }, 800)
}

window.addEventListener('scroll', function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
    let scrollTop = document.scrollingElement.scrollTop;
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

    phone1.style.transform = `rotate(${offset * rotate}deg)`;
    phone2.style.transform = `rotate(45deg) scale(${offset / 950 * 0.45}) `;
    phone4.style.transform = `rotate(${offset * rotate}deg)`;
    phone5.style.transform = `rotate(${offset * rotate}deg)`;
    phone6.style.transform = `rotate(${offset / 30}deg) scale(${offset / 3900 * 0.6})`;

})

// SHOW/HIDE MENU
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
let indicator = '|';
let titleLastChar = '';
// ABOUT ME SCROLLING TEXT
const line1 = document.querySelector('.line-1');

window.onscroll = () => {
    let pos = window.scrollY - 1000;
    // console.log('pos: ', pos);
    line1.style.left = pos * 1.5 + 'px';
    line1.style.top = pos * 1.5 + 'px';


    // CHANGE CONTENT ON SCROLL
    if (pos >= 800) {
        title.style.position = 'fixed';
        text.style.position = 'fixed';
        tag.style.position = 'fixed';
        links.style.position = 'fixed';
    } else {
        title.style.position = 'relative';
        text.style.position = 'relative';
        tag.style.position = 'relative';
        links.style.position = 'relative';
    }

    if (pos >= 800 && pos <= 2500) {
        tagsColor(0);
        title.style.opacity = 1;
        title.innerHTML = data[0].title;
        text.innerHTML = data[0].text;
        links.style.opacity = 1;
        tag.style.display = 'flex';
    }

    else if (pos >= 2500 && pos <= 4400) {
        tagsColor(1);
        title.style.opacity = 1;
        title.innerHTML = data[1].title;
        text.innerHTML = data[1].text;
        links.style.opacity = 1;
        tag.style.display = 'flex';
    }
    else if (pos >= 4400 && pos <= 6000) {
        tagsColor(2);
        title.style.opacity = 1;
        title.innerHTML = data[2].title;
        text.innerHTML = data[2].text;
        links.style.opacity = 1;
        tag.style.display = 'flex';

    } else {
        title.style.opacity = 0;
        title.style.position = 'relative';
        text.innerHTML = '';
        text.style.position = 'relative';
        tag.style.display = 'none';
        tag.style.position = 'relative';
        links.style.opacity = 0;
        links.style.position = 'relative';
    }

}
function tagsColor(n) {
    // SET COLOR OF TAGS
    for (let i = 0; i < data[n].tags.length; i++) {
        tags[i].innerHTML = data[n].tags[i];
        if (tags[i].innerHTML.toUpperCase() === 'HTML') {
            tags[i].style.backgroundColor = '#e34c26 ';
        }
        else if (tags[i].innerHTML.toUpperCase() === 'CSS') {
            tags[i].style.backgroundColor = '#264de4 ';
        }
        else if (tags[i].innerHTML.toUpperCase() === 'JS') {
            tags[i].style.backgroundColor = '#ebd026 ';
        }
        else if (tags[i].innerHTML.toUpperCase() === 'SCSS') {
            tags[i].style.backgroundColor = '#cc6699'
        }
        else if (tags[i].innerHTML.toUpperCase() === 'BOOTSTRAP') {
            tags[i].style.backgroundColor = '#563d7c '
        }
        else if (tags[i].innerHTML === '') {
            tags[i].style.backgroundColor = 'rgba(0,0,0,0)';
        }
        else {
            tags[i].style.backgroundColor = '#a2c22fff';
        }
    }
}
