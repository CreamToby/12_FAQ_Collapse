const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})



// THIS IS NOT WORKING! HAVE TO USE 'parentNode'

// const buttons = document.querySelectorAll('.faq-toggle');
// const active = document.getElementsByClassName(`faq`);
// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         active.classList.toggle(`active`);
//        // button.parentNode.classList.toggle(`active`);  
//     })
// })
