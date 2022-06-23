//Ancora botão

var menu = `<div class="gtm-link-event" 
            data-analytics-event-category="ancora-planos" 
            data-analytics-event-action="clique:menu" 
            data-analytics-event-label="pacotes-adicionais" 
            data-analytics-attach-event-to-child=".js_nav__link > a">
                <ul class="clearfix">
                    <li class="  nav__links--primary ">
                        <span class="yCmsComponent nav__link js_nav__link">
                        <a class="cro-focus" href="javascript:;" title="Pacotes adicionais">
                            Pacotes adicionais
                        </a>
                        </span>
                    </li>
                </ul>
        </div>`

var menuDrop = `<li class="item gtm-link-event" 
                data-analytics-event-category="ancora-planos" 
                data-analytics-event-action="clique:menu" 
                data-analytics-event-label="pacotes-adicionais"
                data-analytics-attach-event-to-child="> a">
                    <a class="cro-focus2" href="javascript:;" title="PACOTES ADICIONAIS">
                        PACOTES ADICIONAIS
                    </a>
                </li>`

document.querySelector(`#exclusive-applications`).insertAdjacentHTML(`afterend`, 
    `<div class="cro-acordion-info">
        <div class="cro-width mdn-u-padding--md">
            <div class="cro-acodion mdn-Accordion" data-component=”accordion” aria-label="Accordion Control Group">
                
                <div class="mdn-Accordion-box">
                    <a id="cro-btn-focus" class="cro-btn mdn-Accordion-toggle mdn-Text mdn-Text--body" role="button" title="Acordion clicável para expandir o conteúdo">
                        <i class="cro-button button button-collapse button-block mdn-Icon-direita mdn-Icon--md"></i>
                        Pacotes adicionais
                    </a>                
                    <div class="mdn-Accordion-content">
                        <p class="mdn-Text mdn-Text--body">
                            
                        </p>
                    </div>
                </div>                    
            </div>
        </div>
    </div>`
);  
    
document.querySelector(`.nav__links.nav__links--products.js-offcanvas-links`).insertAdjacentHTML(`beforeend`, menu);
document.querySelectorAll(`.nav.navbar-nav.list`)[0].insertAdjacentHTML(`beforeend`, menuDrop);        
document.querySelector(`.cro-btn.mdn-Accordion-toggle`).addEventListener(`click`,function(e){
    var styleBtn = document.querySelector(`#cro-pacotes`).style.display;    
        if(styleBtn == `block`){
            var styleBtn = document.querySelector(`#cro-pacotes`).style.display="none"
        } else {
            var styleBtn = document.querySelector(`#cro-pacotes`).style.display="block"
        };
}); 

const swiper = new MdnSwiper('.mdn-Swiper', {
    slidesPerView: 1,
    freeMode: true,
    pagination:{
        el: `.mdn-Swiper-pagination`,
        clickable: true,
    }, 
});


document.querySelector(`.cro-focus`).addEventListener(`click`, function(e){
    window.location.href='#cro-pacotes'; //href Ancora botaõ
});

document.querySelector(`.cro-focus2`).addEventListener(`click`, function(e){
    document.querySelector(`.mdn-Icon-fechar.mdn-Icon--md.fas.fa-times`).click();
    window.location.href='#cro-btn-focus'; //href Ancora botaõ
    document.querySelector('#cro-btn-focus').click(); //href Ancora botaõ
});

  