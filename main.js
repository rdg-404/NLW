 window;addEventListener('scroll', onScroll)
 
 onScroll()
 function onScroll() {
   showNavOnScroll()
   showBackToTopButtonOnScroll()

   activateMenuAtCurrentSection(home)
   activateMenuAtCurrentSection(services)
   activateMenuAtCurrentSection(about)
   // activateMenuAtCurrentSection(contact)
 }


 function activateMenuAtCurrentSection(section){

   const targetLine = scrollY + innerHeight / 2 


   //verificar se a seção passou da linha
   //Dados necessarios
   const sectionTop = section.offsetTop 
   const sectionHeight = section.offsetHeight 
   const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

   // console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)


   //verificar se a base está abaixo da linha alvo
   // dados necessarios
   const sectionEndsAt = sectionTop + sectionHeight
   const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

   // console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

   const sectionBoundaries =
      sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine


   const sectionId = section.getAttribute('id') //pega o id da section como uma string
   const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`) //pega o href que contenha o id 

   menuElement.classList.remove('active') //ja começa eliminando a class do elemento
   if(sectionBoundaries){
      menuElement.classList.add('active')
   }



 }










 function showNavOnScroll(){
   if(scrollY == 0){
      navigation.classList.remove('scroll') //remove a class no html
  }
  else if(scrollY > 50){
      navigation.classList.add('scroll') //adiciona a class no html
  }
 }

function showBackToTopButtonOnScroll(){
   if(scrollY > 500){
      backToTopButton.classList.add('show') //remove a class no html
  }
  else{
      backToTopButton.classList.remove('show') //adiciona a class no html
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
 #about .content,
 #contact,
 #contact header,
 #contact ul li`);