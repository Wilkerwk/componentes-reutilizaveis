function confirmacao(){
    var mobile = [ 
        {
            imgMobile: `https://www.claro.com.br/static/email/202202/07191001/images/Muitasvantagens_mobile.png`,
        },
        {
            imgMobile: `https://www.claro.com.br/static/email/202202/07191001/images/Cancelamento_mobile.png`,
        },
        {
            imgMobile: `https://www.claro.com.br/static/email/202202/07191001/images/ServiЗo_mobile.png`,
        },
        {
            imgMobile: `https://www.claro.com.br/static/email/202202/07191001/images/Portabilidade_mobile.png`,
        },
    ];

    function viewControle(arr) {    
                return `<div class="cro-adicionais product-page-custom-accordion-category plan-applications-controle col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="mdn-Modal mdn-Modal--sm mdn-isOpen">    
                                <div id="cro-carrossel"  class="cro-divis-box mdn-Swiper" data-mdn-slider-per-view-mobile="auto" data-mdn-slider-per-view-tablet="auto" data-mdn-slider-per-view-small-desktop="auto" data-mdn-slider-per-view="auto">
                                    <div class="cro-divis-desk um mdn-Swiper-wrapper"> 
                                        ${mobile.map(function(cfg){
                                            return `<div class="cro-box-card mdn-Swiper-slide 1-1">
                                                        <img class="cro-mb" src="${cfg.imgMobile}"/>
                                                    </div>` }).join('')}
                                    </div>                                        
                                    <div id="paginacao" class="mdn-Swiper-pagination"></div>
                                </div>                                        
                            </div>            
                        </div>`    
    };

    var spinner = document.querySelector(`.mdn-Spinner.claro-loading.is-hidden`);
        spinner.querySelector(`i.mdn-Icon-claro.mdn-Icon--lg`).style.display = "none" 
        spinner.insertAdjacentHTML(`afterbegin`, viewControle());

    document.querySelector(`.mdn-Modal div:not(.cro-divis-box)`).addEventListener("click", function(e){
        document.querySelector(`.cro-adicionais`).style.display = "none";
        document.querySelector(`.mdn-Modal.mdn-Modal--sm.mdn-isOpe`).classList.remove= `mdn-isOpen`;
    })
    const swiper = new MdnSwiper('#cro-carrossel', {
        slidesPerView: 1,
        speed: 400,
        loop: true,
        pagination:{
            el: `#paginacao`,
            clickable: true,
        }, 
    });    

    var mySwiper2 = document.querySelector('.mdn-Swiper').swiper;
    mySwiper2.slideNext();
};
