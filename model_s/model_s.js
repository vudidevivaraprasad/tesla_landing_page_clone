let side_nav = document.querySelector('.side_nav');
let close_nav = document.querySelector('.closing_btn');
let menu = document.querySelector('.menu');
let body = document.querySelector('.image');
menu.addEventListener('click',() => {
    side_nav.classList.add('active');
})

close_nav.addEventListener('click',() => {
    side_nav.classList.remove('active');
})

body.addEventListener('click',() => {
    side_nav.classList.remove('active');
})


let slider_btns = document.querySelectorAll('.btn');
let imgs = document.querySelector('.all_imgs');
let imgs_all =  document.querySelectorAll('.img');
let btns = document.querySelectorAll('.btn');
let mats = document.querySelectorAll('.mat');
let imgs_bound = imgs[0];
for(let i =0 ; i < slider_btns.length ; i++) {
    slider_btns[i].addEventListener('click',()=> {
        mats.forEach((item) => {
            item.classList.remove('active');
        })
        mats[i].classList.add('active');
        btns.forEach((item) => {
            item.classList.remove('active');
        })
        btns[i].classList.add('active');
        if(i==0) {
            imgs.classList.remove('first','second','third','fourth');
            imgs.classList.add('first');
        }
        else if(i==1) {
            imgs.classList.remove('first','second','third','fourth');
            imgs.classList.add('second');
        }
        else if(i==2) {
            imgs.classList.remove('first','second','third','fourth');
            imgs.classList.add('third');
        }
        else if(i==3) {
            imgs.classList.remove('first','second','third','fourth');
            imgs.classList.add('fourth');
        }
    })
}

let h1 = document.querySelector('.h1');
let whole = document.querySelector('.slider');
let ani_divs = document.querySelectorAll('.animated_div');
window.addEventListener('scroll',() => {

    if(scrollY > body.getBoundingClientRect().height/10) {
        h1.classList.add('active');
    }
    else {
        h1.classList.remove('active');
    }

    ani_divs.forEach((item) => {
        if(item.getBoundingClientRect().top <= window.innerHeight) {
            item.classList.add('active');
        }
        else {
            item.classList.remove('active');
        }
    })

})

let moving_border = document.querySelector('.moving_border');
let elec_spec = document.querySelector('.elec_div');
let elec_spce_first = document.querySelector('.elec_spec_first');
let elec_spce_second = document.querySelector('.elec_spec_second');
elec_spce_first.addEventListener('click',() => {
    elec_spec.classList.remove('active');
})
elec_spce_second.addEventListener('click',() => {
    console.log('hello')
    elec_spec.classList.add('active');
})

let plaid = document.querySelector('.plaid')
let long = document.querySelector('.long_range')
let space1 = document.querySelector('.space1')
let space2 = document.querySelector('.space2')
plaid.addEventListener('click',() => {
    space2.classList.remove('active')
    long.classList.remove('active')
    space1.classList.add('active')
    plaid.classList.add('active')
})
long.addEventListener('click',() => {
    space1.classList.remove('active')
    plaid.classList.remove('active')
    space2.classList.add('active')
    long.classList.add('active')
})