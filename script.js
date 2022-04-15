// CONTAINER 2
const line1 = document.querySelector('.line-1');

window.onscroll = () => {
    let pos = window.scrollY - 800;
    console.log('pos: ', pos);
    line1.style.left = `${pos}px`;
}