     // sideBar toggle harmbuger
     const menu_toggle = document.querySelector('.menu-toggle');
     const sidebar =document.querySelector('.sidebar');

     menu_toggle.addEventListener ('click', () =>{
         menu_toggle.classList.toggle('is-active');
         sidebar.classList.toggle('is-active');
     })
     //Side bar toggle ends

     //scroll top
     function scrollToTop(){
        window.scrollTo(0,0)
    //scroll to top end
    }

    AOS.init({
        duration: 1000
      });