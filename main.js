 function onScroll() {
    if(scrollY == 0){
        navigation.classList.remove('scroll') //remove a class no html
    }
    else if(scrollY > 50){
        navigation.classList.add('scroll') //adiciona a class no html
    }
    
 }

 function openMenu() {
    document.body.classList.add('menu-expanded')
 }

 function closeMenu() {
    document.body.classList.remove('menu-expanded')
 }


 //elementos aparecendo conforme acontece a rolagem 
 ScrollReveal({
   origin: 'top',
   distance: '30px',
   duration: 700,
 }).reveal(`#home, 
 #home img, 
 #home .stats,
 #services,
 #services header,
 #services .card, 
 #about,
 #about header,
 #about .content`);