class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      // カーソルがグラブの形
      grabCursor: true,
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      // 画面サイズが1024pxを超えたらスライド写真を２枚表示
      breakpoints: {
        1024: {
          slidesPerView: 2,
        }
      }
    });
  }
  start(options = {}) {
    options = Object.assign({
        // ４秒ごとに自動スライド
        delay: 4000,
        // マウスで操作後も自動スライドを実行
        disableOnInteraction: false,
    }, options);
    
    this.swiper.params.autoplay = {
      delay: 4000,
      disableOnInteraction: false,
    }
    this.swiper.autoplay.start();
  }
  stop() {
    this.swiper.autoplay.stop();
  }
}