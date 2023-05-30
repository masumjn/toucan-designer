const menuBtn = document.querySelector(".fa-solid");
const navigation = document.querySelector(".profile-nav");
const cekNav = document.querySelector(".cek-nav-kontak");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("fa-bars");
    menuBtn.classList.toggle("fa-xmark");
    menuBtn.classList.toggle("fa-2xl");
    menuBtn.classList.toggle("fa-xl");
    navigation.classList.toggle("active")
    cekNav.classList.toggle("nav-kontak")
})

// "use strict";
// For slideshow on clients
function carousel() {
    let slider = document.querySelector(".clients-slider");
    let list = document.querySelector(".clients-content");
    let item = document.querySelector(".clients-detail");
    let list2;

    const speed = 1;

    const width = list.offsetWidth;
    let x = 0;
    let x2 = width;

    function clone() {
        list2 = list.cloneNode(true);
        slider.appendChild(list2);
        list2.style.left = `${width}px`;
    }

    function moveFirst() {
        x -= speed;

        if (width >= Math.abs(x)) {
            list.style.left = `${x}px`;
        } else {
            x = width;
        }
    }

    function moveSecond() {
        x2 -= speed;

        if (list2.offsetWidth >= Math.abs(x2)) {
            list2.style.left = `${x2}px`;
        } else {
            x2 = width;
        }
    }

    function hover() {
        clearInterval(a);
        clearInterval(b);
    }

    function unhover() {
        a = setInterval(moveFirst, 10);
        b = setInterval(moveSecond, 10);
    }

    clone();

    let a = setInterval(moveFirst, 10);
    let b = setInterval(moveSecond, 10);

    slider.addEventListener("mouseenter", hover);
    slider.addEventListener("mouseleave", unhover);
}

carousel();

// Carousel on Portofolio
let lists = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let slide = document.getElementById('slide');

prev.onclick = function () {
    slide.appendChild(lists[0]);
    console.log("it's clicked");
}

prev.onclick = function () {
    slide.prepend(lists[lists.length - 1]);
}


function scrollToTop(){
    window.scrollTo(0,0);
}