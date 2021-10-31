const arrayImages = [
    'https://www.theuiaa.org/wp-content/uploads/2017/11/RTM19-banner-web.jpg',
    'https://files.worldwildlife.org/wwfcmsprod/images/Mountains_New_Hero_Image/hero_small/1bs3lrclhi_mountains_hero.jpg'
  ]

const img = document.querySelector('img')
const [prev, next] = document.querySelectorAll('button')

let item = document.createAttribute("src");

const prevNexthandler = () =>  {
  let i = arrayImages.indexOf(img.getAttribute("src")) === 0 ? 1 : 0;
  item.value = arrayImages[i];
  img.setAttributeNode(item);
};

prevNexthandler()
prev.addEventListener("click", prevNexthandler);
next.addEventListener("click", prevNexthandler);
