const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

// Клик по кнопкам с подсказками
for (let btn of infoBtns) {
	btn.addEventListener('click', showHint)
}

function showHint (e) {
	e.stopPropagation()

	// Скрываем все подсказки
	for (let hint of infoHints) {
		hint.classList.add('none')
	}

	// Показываем текущуюю
	this.parentNode.querySelector('.info-hint').classList.toggle('none')
}
// Закрываем подсказки при клике по всему документу
document.addEventListener('click', closeHint)

function closeHint () {
	for (let hint of infoHints) {
		hint.classList.add('none')
	}
}

// Запрещаем всплытие события клика при клике на подсказки
for (let hint of infoHints) {
	hint.addEventListener('click', (e) => {
		e.stopPropagation()
	})
}

// Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
	slidesPerView: 1,
	spaceBetween: 40,
	freeMode: true,
	// autoplay: {
	// 	delay: 2500,
	// 	disableOnInteraction: false,
	// },
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		920: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1230: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
	},

  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },

});

// Tabs

const tabsBtns = document.querySelectorAll('[data-tab]')
const tabsItems = document.querySelectorAll('[data-tab-value]')

for (let tab of tabsBtns) {
	tab.addEventListener('click', function () {
		// Удаляем класс активности у всех табов 
		for (let tab of tabsBtns) {
			tab.classList.remove('tab-controls__btn--active')
		}

		// Добавляем класс активности на выбраный таб
		this.classList.add('tab-controls__btn--active')

		// Отобразить нужные товары и скрыть не нужные
		for (let item of tabsItems) {
			// Проверка на отображение всех слайдов
			if (this.dataset.tab == 'all') {
				item.classList.remove('none')
			} else {
				if (item.dataset.tabValue == this.dataset.tab) {
					item.classList.remove('none')
				} else {
					item.classList.add('none')
				}
			}
		}
		// Update swiper
		swiper.update()
	})
}

// Mobile Nav

const mobileNavOpenBtn = document.querySelector('.nav__btn'),
			mobileNavCloseBtn = document.querySelector('.mobile-nav-close'),
			mobileNav = document.querySelector('.mobile-nav-wrapper');

mobileNavOpenBtn.onclick = function() {
	mobileNav.classList.add('mobile-nav-wrapper--open')
}

mobileNavCloseBtn.onclick = function() {
	mobileNav.classList.remove('mobile-nav-wrapper--open')
}