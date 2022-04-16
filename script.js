const parallax = document.querySelector('#parallax-1');
const menuBtn = document.querySelector('#menuBtn');
const menuList = document.querySelector('#menuList');

// SCROLL CHANGE ELEMENTS
const leftSideContent = document.querySelector('.left-side-content');
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const tags = document.querySelector('.tags');
const links = document.querySelector('.links');

window.addEventListener('scroll', function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';

})
let inOut = false;

menuBtn.addEventListener('click', () => {

    if (!inOut) {
        menuList.classList?.remove('scale-out-hor-left');
        menuList.classList.add('scale-in-hor-left');
        menuList.classList.toggle('d-none');
        inOut = true;

    } else {
        console.log('yo??');
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

}