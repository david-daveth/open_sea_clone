const toggleDark = document.getElementById('check')

toggleDark.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
})

/* to toggle menu */

const toggleMenu = document.querySelector('.icon_show__menu')
const menuToggle = document.querySelector('.ul')

toggleMenu.addEventListener('click', ()=>{
    if (menuToggle.classList.contains('show')){
        menuToggle.classList.remove('show')
        document.body.classList.add('body-col-toggle')
        toggleMenu.innerHTML = '<i class="uil uil-times"></i>'
    } else{
        menuToggle.classList.add('show')
        document.body.classList.remove('body-col-toggle')
        toggleMenu.innerHTML = '<i class="uil uil-bars"></i>'
    }
})