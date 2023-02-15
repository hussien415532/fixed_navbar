let burgerIcon = document.querySelector(".burger");
let closeIcon = document.querySelector(".x");
let nav = document.querySelector('nav')

burgerIcon.addEventListener('click',()=>{

    nav.classList.remove('close')
    nav.classList.add('open')
})
closeIcon.addEventListener('click',()=>
{
    nav.classList.remove('open')
    nav.classList.add('close')
})


