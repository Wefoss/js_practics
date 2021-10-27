
const arrs = [
    'https://www.theuiaa.org/wp-content/uploads/2017/11/RTM19-banner-web.jpg',
    'https://files.worldwildlife.org/wwfcmsprod/images/Mountains_New_Hero_Image/hero_small/1bs3lrclhi_mountains_hero.jpg'
  ]
  
  const [prev, next] = document.querySelectorAll('.main-slider>button')
  const imge = document.querySelector('.slider>img')
  
  class Slider{
     constructor(images = [], currentIndex = 0) {
       this._currentIndex = currentIndex
       this.images = images
     }
  
     get currentIndex() {
        return this._currentIndex
     }
     set currentIndex(val) {
      this._currentIndex = val
   }
  
    getCurrentImage() {
      return this.images[this._currentIndex]
    }
  
    next() {
      return (this._currentIndex + 1)%this.images.length
    }
    prev() {
      return (this._currentIndex - this.images.length)%this.images.length
    }
  }
  
  const slider = new Slider(arrs)
   
   function init() {
    imge.setAttribute('src', slider.getCurrentImage())
   }
   
   init()
  
   next.addEventListener('click', () => {
    slider.currentIndex = slider.next()
        init()
   })
  
   prev.addEventListener('click', () => {
    slider.currentIndex = slider.next()
        init()
   })