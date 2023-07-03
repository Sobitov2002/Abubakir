window.addEventListener("scroll", function(){
    let header = this.document.getElementById('site_nav');
    if(window.scrollY > 0){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
})


// let navBurger = document.getElementById('nav_burger')
// let navMenu = document.getElementsByClassName('.navigation_menu_items')
// console.log(navMenu)

// navBurger.addEventListener("click", function(){
//     navMenu.classList.add('fa-xmark');
//     console.log("salom");
// });
let navBurger = document.getElementById('nav_burger');
let navMenu = document.getElementById('navigation_items')
let burgerIcon = document.getElementById('burger_icon')
let number = false;
 function navburgertoggle(){
   if (number == false){
    burgerIcon.classList.add('fa-xmark')
    navMenu.classList.add('burger_active')
    number = true;
   }
   else
   if(number == true){
    navMenu.classList.remove('burger_active')
    burgerIcon.classList.remove('fa-xmark');
    number = false;
   }
 }