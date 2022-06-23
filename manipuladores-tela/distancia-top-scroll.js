var footer = document.querySelector(`.cms-Footer--sitemap`);
var distance = footer.getBoundingClientRect().top;

document.addEventListener('scroll', function() {
        var cro = document.querySelector(`#cro-section`);
        if(distance > cro.offsetTop){
            console.log(`deu certo`)
        }
});

document.querySelector(`#cro-section`).offsetTop