
var rr = document.querySelector('.rr')
var zz = document.querySelector('.zz')
var ee = document.querySelector('.ee')
var xx = document.querySelector('.xx')
var gg = document.querySelector('.gg')
var navbar = document.querySelector('.navbar')

var burger = document.querySelector('.burger')
var ko = document.querySelector('ko')

// var scroll_linked = document.querySelector('.scroll_linked')

zz.addEventListener('click',()=>{
    gg.classList.toggle('ee');
    zz.classList.toggle('.active');
    
    
   
})

xx.addEventListener('click',()=>{
    ee.classList.toggle('ee');
})

// --------------- burger ----------------

burger.addEventListener('click',() => {
    burger.classList.toggle('active');
    navbar.classList.toggle('active');
})
