const accordion = document.querySelectorAll('.js-accordion');

accordion.forEach( acc => {
    acc.addEventListener('click', () =>{
        let daddy = acc.parentElement;

        daddy.classList.toggle('active');
    })
})