/*
1.site cursor events create
2.sticy navigation
3.navigation burger 
4.Site dark/Light
5.portfolio scroll animation
6.frend section show btn
*/ 

//site cursor events create.
let cursor = document.getElementById('cursor');
let timeOut;
window.addEventListener('mousemove', function(e){
    let xtop = e.pageX;
    let yleft = e.pageY;
   
    cursor.style.top =  yleft  + 'px';
    cursor.style.left = xtop  + 'px';
    cursor.style.display  = 'block';
    

    function mouseStopped(){
        cursor.style.display = 'none';
    }
    timeOut = setTimeout(mouseStopped , 10000)

    window.addEventListener('mouseout', () =>{
        cursor.style.display = 'none';
    })
})

//sticy navigation
let navMenu = document.getElementById('navigation_items')
window.addEventListener("scroll", function(){
    let header = this.document.getElementById('site_nav');
    if(window.scrollY > 0){
        cursor.classList.add('cursor_active');
        header.classList.add('sticky')
        navMenu.style.marginTop = "35px"
    }else{
        header.classList.remove('sticky');
        cursor.classList.remove('cursor_active');

    }
})

//navigation burger 
let navBurger = document.getElementById('nav_burger');
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


//Site dark/Light
let btnDark = document.getElementById('dark');
let bd = document.getElementById('body'),
    sliderblok = document.getElementsByClassName('.slider');
let darkNumber = true;
bd.style.backgroundColor = '#1A1919'
btnDark.onclick = function(e){
    e.preventDefault();
    document.body.classList.toggle('dark_site')
    if(btnDark.textContent == 'DARK'){
        btnDark.textContent = "LIGHT"
    }
    else{
        btnDark.textContent = "DARK"
    }
    if(darkNumber == true){
        bd.style.backgroundColor = 'white'
        darkNumber = false;
    }
    else {
        bd.style.backgroundColor = '#1A1919';
        darkNumber = true;
    }
}

//portfolio scroll animation
let slider = document.querySelector('.portfolio_items'),
    lin1 = document.querySelector('.lin1'),
    lin2 = document.querySelector('.lin2'),
    lin3 = document.querySelector('.lin3'),
    lin4 = document.querySelector('.lin4'),
    sliderImg = document.querySelector('#slider_img')
    sliderActive = document.querySelector('.controller_active');

    lin1.addEventListener('click', function(){
        slider.style.transform = 'translateX(0%)';
        sliderActive.style.left = 0;
    })
    lin2.addEventListener('click', function(){
        slider.style.transform = 'translateX(-25%)';
        sliderActive.style.left = '80px';
    })
    lin3.addEventListener('click', function(){
        slider.style.transform = 'translateX(-50%)';
        sliderActive.style.left = '160px';
    })
    lin4.addEventListener('click', function(){
        slider.style.transform = 'translateX(-75%)';
        sliderActive.style.left = '240px';
    })

  //frend section show btn 
    let showBtn = document.getElementById('frenbtn'),
        frendsContent = document.getElementById('fren')
        frenIcon = document.getElementById('frenIcon'),
        frentwo = document.getElementById('frentwo');
        shownumber  = true;
        showBtn.addEventListener('click', function(){
            if(shownumber == true){
                frendsContent.style.display = 'flex';
                frenIcon.classList.remove('fa-chevron-down');
                frenIcon.classList.add('fa-chevron-up');
                frentwo.style.display = 'flex';
                frentwo.classList.add('frendanimation');
                shownumber = false;
            }
            else if(shownumber == false){
                frenIcon.classList.remove('fa-chevron-up');
                frenIcon.classList.add('fa-chevron-down');
                frendsContent.style.display = 'none';
                frentwo.style.display = 'none';
                shownumber = true;
            }
        })


        

