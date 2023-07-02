window.addEventListener("scroll", function(){
    let header = this.document.getElementById('site_nav');
    if(window.scrollY > 0){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
})