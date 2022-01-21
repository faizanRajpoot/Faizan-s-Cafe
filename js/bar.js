const bar = document.querySelector('.bar');
const menu = document.querySelector('.header_hamburger')
// const add = document.getElementsByClassName('.active')
const hide = document.querySelector('.cross')

bar.addEventListener("click", () => {
  
    menu.classList.add('active');   
    
})

hide.addEventListener("click", () => {
  
    menu.classList.remove('active');
    
})
