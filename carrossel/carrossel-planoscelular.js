document.querySelector(`#product-facet`).parentElement.parentElement.parentElement.insertAdjacentHTML(`afterbegin`,
    `<div id="cro-carrossel" class="mdn-Swiper" data-mdn-slider-per-view-mobile="auto" data-mdn-slider-per-view-tablet="auto" data-mdn-slider-per-view-small-desktop="auto" data-mdn-slider-per-view="auto">
        <div id="cro-wrapper" class="mdn-Swiper-wrapper">
        <div class="mdn-Swiper-slide">
            <!--elemento-->
        </div>
        </div>
        <div id="paginacao" class="mdn-Swiper-pagination-custom">
            <!-- Add Arrows -->
            <div class="mdn-Swiper-button-prev">
                <i class="mdn-Icon-esquerda mdn-Icon--lg"></i>
            </div>
            <div class="mdn-Swiper-button-next">
                <i class="mdn-Icon-direita mdn-Icon--lg"></i>
            </div>
        </div>
    </div>`  );

document.querySelectorAll(`.card-planos`).forEach(function (cards) {
    cards.classList.add("mdn-Swiper-slide");
    cards.classList.remove("swiper-slide");
    document.querySelector(`#cro-wrapper`).insertAdjacentElement(`beforeend`, cards);
});

const swiper = new MdnSwiper('#cro-carrossel', {
    slidesPerView: 3,
    pagination: {
        el: `#paginacao`,
        clickable: true,
    },
}); 