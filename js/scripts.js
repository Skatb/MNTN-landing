// бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if(iconMenu){
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
 
}
// скролл при клике
const sliderItem  = document.querySelectorAll('.slider-item[data-goto]');

if(sliderItem.length > 0){
    sliderItem.forEach(sliderItem => {
        sliderItem.addEventListener("click", onsliderItemClick)
    });
    function onsliderItemClick(e) {
        const sliderItem = e.target;
        if(sliderItem.dataset.goto && document.querySelector(sliderItem.dataset.goto)){
            const gotoBlock = document.querySelector(sliderItem.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
};

function scrollFooter(element) {
    window.scroll({
      left: 0, 
      top: element.offsetTop, 
      behavior: 'smooth'
    })
  }
  
const button = document.querySelector('.navigation-scroll');
const footer = document.querySelector('.footer');
  
  button.addEventListener('click', () => {
    scrollFooter(footer);
  })