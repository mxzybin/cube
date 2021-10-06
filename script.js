let canvas = document.querySelector('.perspective__items');
canvas.addEventListener('click', def);
function def(params) {
    canvas.classList.toggle('perspective__items-active');
}

// ВРАЩАЕМ КУБ!!! 
let board = document.querySelector('.board');
board.addEventListener('mousemove', spinCube);
function spinCube(event) {
    let cube = document.querySelector('.cube');
    const posX = event.offsetY * 360 / board.clientHeight; ;
    const posY = event.offsetX * 360 / board.clientWidth;
    cube.style.transform = 'rotateY(' +posY+'deg) rotateX(' +posX+'deg)';
}   