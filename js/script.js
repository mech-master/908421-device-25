/* ----- begin block [switching sliders in promo] in file {index.html} -----*/

var promoSliderControlItems = document.querySelectorAll(".product-control-item");

function productSliderSwitch(evt) {
	evt.preventDefault();
	for (var j=0; j < promoSliderControlItems.length; j++) {
		if (promoSliderControlItems[j] === this) {
			document.querySelector(".product-control-item.active").classList.remove("active");
			promoSliderControlItems[j].classList.add("active");

			document.querySelector(".product-slide-item.active").classList.remove("active");
			var  promoSliderContainer = document.querySelector(".product-slider-container");
			promoSliderContainer.children[j].classList.add("active");
			break;
		};
	};
};

for (var i=0; i < promoSliderControlItems.length; i++) {
	promoSliderControlItems[i].addEventListener("click", productSliderSwitch);
};

/* ----- end block [switching sliders in promo] in file {index.html} -----*/

/* ----- begin block [switching sliders in services] in file {index.html} -----*/

var servicesSliderControlItem = document.querySelectorAll(".service-control-item");

function servicesSliderSwitch(evt) {
	for (var j=0; j < servicesSliderControlItem.length; j++) {
		if (servicesSliderControlItem[j] === this) {
			document.querySelector(".service-control-item.active").classList.remove("active");
			servicesSliderControlItem[j].classList.add("active");

			document.querySelector(".services-content-item.active").classList.remove("active");
			var servicesSliderContainer = document.querySelector(".services-content");
			servicesSliderContainer.children[j].classList.add("active");
			break;
		}
	}
}

for (var i=0; i < servicesSliderControlItem.length; i++) {
	servicesSliderControlItem[i].addEventListener("click", servicesSliderSwitch)
}

/* ----- end block [switching sliders in services] in file {index.html} -----*/