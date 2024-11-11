/* slider */
import '../scss/style.scss'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

window.addEventListener('DOMContentLoaded', () => {
  //передаем breakpoint, класс и настройки свайпера
  const resizibleSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper

    //подписываемся на изменения ширины экрана
    breakpoint = window.matchMedia(breakpoint)

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings)
    }

    //если breakpoint.matches = true, т.е. (экран < 768px) - включаем свайпер
    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings)
      }
    }

    //при изменении ширины экрана вызываем checker
    breakpoint.addEventListener('change', checker)

    //при загрузке сайта вызываем checker
    checker()
  }

  resizibleSwiper('(max-width: 768px)', '.slider-brands', {
    direction: 'horizontal',
    modules: [Navigation, Pagination],
    loop: true,
    spaceBeween: 0,
    slidesPerView: 1.25,
    breakpoints: {
      320: {
        slidesPerView: 1.15
      },
      425: {
        slidesPerView: 1.6
      },
      640: {
        slidesPerView: 2.25
      },
      768: {
        enabled: false
      }
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: 'true'
    }
  })

  resizibleSwiper('(max-width: 768px)', '.slider-repair', {
    direction: 'horizontal',
    modules: [Navigation, Pagination],
    loop: true,
    spaceBeween: 0,
    slidesPerView: 1.25,
    breakpoints: {
      320: {
        slidesPerView: 1.15
      },
      425: {
        slidesPerView: 1.6
      },
      640: {
        slidesPerView: 2.25
      },
      768: {
        enabled: false
      }
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: 'true'
    }
  })

  resizibleSwiper('(max-width: 768px)', '.slider-price', {
    direction: 'horizontal',
    modules: [Navigation, Pagination],
    loop: true,
    spaceBeween: 16,
    slidesPerView: 1.15,
    breakpoints: {
      320: {
        slidesPerView: 1.15
      },
      425: {
        slidesPerView: 1.6
      },
      640: {
        slidesPerView: 2.25
      },
      768: {
        enabled: false
      }
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: 'true'
    }
  })
})

/* buttons show-more */
const readMoreBtn = document.querySelector('.main__read-more') 
const introText = document.querySelector('.main__text-box')

const showAllBtn = document.querySelector('#brands')
const brandsContainer = document.querySelector('.brands__grid')

const showAllRepairBtn = document.querySelector('#repair')
const repairContainer = document.querySelector('.repair-grid')

readMoreBtn.addEventListener('click', function () {
  if (!introText.classList.contains('main__text-box--show')) {
    introText.classList.add('main__text-box--show')
    readMoreBtn.textContent = 'Скрыть'
    readMoreBtn.style.backgroundImage = "url('./../img/expand-top.svg')"
    readMoreBtn.style.minWidth = '85px'
  } else {
    introText.classList.remove('main__text-box--show')
    readMoreBtn.textContent = 'Читать далее'
    readMoreBtn.style.backgroundImage = "url('./../img/expand.svg')"
    readMoreBtn.style.minWidth = '132px'
  }
})

showAllRepairBtn.addEventListener('click', function () {
  if (!repairContainer.classList.contains('repair-grid--show')) {
    repairContainer.classList.add('repair-grid--show')
    showAllRepairBtn.textContent = 'Скрыть'
    showAllRepairBtn.style.backgroundImage = "url('./../img/expand-top.svg')"
  } else {
    repairContainer.classList.remove('repair-grid--show')
    showAllRepairBtn.textContent = 'Показать все'
    showAllRepairBtn.style.backgroundImage = "url('./../img/expand.svg')"
  }
})

showAllBtn.addEventListener('click', function () {
  if (!brandsContainer.classList.contains('brands__grid--show')) {
    brandsContainer.classList.add('brands__grid--show')
    showAllBtn.textContent = 'Скрыть'
    showAllBtn.style.backgroundImage = "url('./../img/expand-top.svg')"
  } else {
    brandsContainer.classList.remove('brands__grid--show')
    showAllBtn.textContent = 'Показать все'
    showAllBtn.style.backgroundImage = "url('./../img/expand.svg')"
  }
})

//sidebar
const sidebarBtn = document.querySelector('#sidebar')
const sidebarEl = document.querySelector('.sidebar')
const exitSidebarBtn = document.querySelector('.button--type--exit')

const switchSidebar = function () {
  sidebarEl.classList.toggle('sidebar--show')
  overlay.classList.toggle('overlay--show')
}

sidebarBtn.addEventListener('click', switchSidebar)
exitSidebarBtn.addEventListener('click', switchSidebar)

//modal feedback
const feedbackEl = document.querySelector('#feedback')
const messageBtn = document.querySelector('.button--type--settings')
const messageSidebarBtn = document.querySelector('.button--type--message-sb')
const messageDesktopBtn = document.querySelector('.main__title-text-link')
const exitModalBtn = document.querySelector('#exit-feedback')


const switchFeedbackModal = function () {
  feedbackEl.classList.toggle('modal--show')
  overlay.classList.toggle('overlay--show')
}

messageBtn.addEventListener('click', switchFeedbackModal)

messageSidebarBtn.addEventListener('click', function () {
  switchSidebar()
  switchFeedbackModal()
})

messageDesktopBtn.addEventListener('click', switchFeedbackModal)

exitModalBtn.addEventListener('click', switchFeedbackModal)

//call modal
const callEl = document.querySelector('#call')
const callBtn = document.querySelector('.button--type--call')
const callSidebarBtn = document.querySelector('.button--type--call-sb')
const exitCallBtn = document.querySelector('#exit-call')

const switchCallModal = function () {
  callEl.classList.toggle('modal--show')
  overlay.classList.toggle('overlay--show')
}

callBtn.addEventListener('click', switchCallModal)

callSidebarBtn.addEventListener('click', function () {
  switchSidebar()
  switchCallModal()
})

exitCallBtn.addEventListener('click', switchCallModal)

//overlay
const overlay = document.querySelector('.overlay')

const handleClickOnOverlay = (evt) => {
  const overlayOpened = document.querySelector('.overlay--show')
  if (evt.target === overlayOpened) {
    callEl.classList.remove('modal--show') //close modal call
    feedbackEl.classList.remove('modal--show') //close modal feedback
    sidebarEl.classList.remove('sidebar--show') //close sidebar
    overlay.classList.remove('overlay--show') //close overlay
  }
}

document.addEventListener('click', handleClickOnOverlay) //click on overlay
