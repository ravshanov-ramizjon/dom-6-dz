const btns = document.querySelectorAll('.phone_right button');
const btnSsd = document.querySelectorAll('.btn button');
const color = document.querySelectorAll('.color img');
const mainImg = document.querySelector('.picture img');
const colorName = document.querySelector('.colorName');
const navButtons = document.querySelectorAll('.picture button');
const images = [
    './img/desert-titan.webp',
    './img/natural-titan.webp',
    './img/white-titan.webp',
    './img/bleck-titan.webp'
];

btns.forEach((btn) => {
    btn.onclick = () => {
        let border = document.querySelector('.border');
        if (border) {
            border.classList.remove('border');
        }
        btn.classList.add('border');
    };
});

btnSsd.forEach((btn) => {
    btn.onclick = () => {
        let borderSsd = document.querySelector('.borderSsd');
        if (borderSsd) {
            borderSsd.classList.remove('borderSsd');
        }
        btn.classList.add('borderSsd');
    };
});

color.forEach((btn, inx) => {
    btn.onclick = () => {
        mainImg.setAttribute('src', images[inx]);
        let newColor = btn.getAttribute('data-color');
        colorName.textContent = newColor;
        let borderColor = document.querySelector('.borderColor');
        if (borderColor) {
            borderColor.classList.remove('borderColor');
        }
        btn.classList.add('borderColor');
    };
});

let Index = 0;

const updateImage = () => {
    mainImg.src = images[Index];
};

navButtons.forEach((button) => {
    button.onclick = () => {
        const direction = button.getAttribute('data-direction');

        if (direction === 'next') {
            Index = (Index + 1) % images.length;
        } else if (direction === 'prev') {
            Index = (Index - 1 + images.length) % images.length;
        }

        updateImage();
    };
});

const open = document.querySelector('[data-open]')
const dialog = document.querySelector('[data-dialog]')
const close = document.querySelector('[data-close]')


open.onclick = () => {

    dialog.classList.remove('active')

}
close.onclick = () => {
    dialog.classList.add('active')
}