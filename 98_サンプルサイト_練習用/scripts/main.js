document.addEventListener('DOMContentLoaded', function() {
  const hero = new HeroSlider('.swiper-container');
  hero.start();

  setTimeout(() => {
    hero.stop();
  }, 5000);
});