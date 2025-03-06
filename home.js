let arrow = document.querySelector('.arrow');
setInterval(() => {
    arrow.classList.toggle('active');
},500)

let models = document.querySelectorAll('.model');
opacity = 0;
let current;
window.addEventListener('scroll',() => { 
    models.forEach((model) => {
         if((model.getBoundingClientRect().top + 2*model.getBoundingClientRect().top) >= model.getBoundingClientRect().height/3) {
            model.children[0].style.opacity = 0;
            model.children[0].style.transition = '1s';
            // model.classList.add('active');
         }
         else {
            model.children[0].style.opacity = 1;
            model.children[0].style.transition = '1s';
            // model.classList.remove('active');
         }
    })
})

let side_nav = document.querySelector('.side_nav');
let close_nav = document.querySelector('.closing_btn');
let menu = document.querySelector('.menu');
let body = document.querySelector('.model');
let body2 = document.querySelector('body');
menu.addEventListener('click',() => {
    side_nav.classList.add('active');
})

close_nav.addEventListener('click',() => {
    side_nav.classList.remove('active');
})

body.addEventListener('click',() => {
    side_nav.classList.remove('active');
})