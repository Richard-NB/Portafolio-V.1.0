/*--------------------------------------*/
/*--- Codigo responsive para el menu ---*/
/*--------------------------------------*/
const navIcon = document.querySelector('.nav__icon');
const navMenu = document.querySelector('.nav__menu');

navIcon.addEventListener('click', () => {
    navMenu.classList.toggle("spred");
});

navMenu.addEventListener('click', ()=>{
    navMenu.classList.remove("spred")
})
/*---------------------------*/
/*--- Actualizamos el año ---*/
/*---------------------------*/
const Year = new Date();
let año = Year.getFullYear();
document.getElementById('year').innerHTML = año;