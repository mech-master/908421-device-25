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
			};
		};
	};

	for (var i=0; i < servicesSliderControlItem.length; i++) {
		servicesSliderControlItem[i].addEventListener("click", servicesSliderSwitch);
	};

/* ----- end block [switching sliders in services] in file {index.html} -----*/

/* ----- begin block [show modal form] in file {index.html and catalog.html} -----*/
	
	/* ----- begin block [localStorage] in file {index.html} -----*/

	var isStorageSupport = true;
	var storageValue ="";

	try {
		storageValue = localStorage.getItem("user-name");
	} catch(err) {
		isStorageSupport = false;
	};


	/* ----- end block [localStorage] in file {index.html} -----*/

	/* ----- begin block [show write-us form] in file {index.html} -----*/

		var writeUsModalShowButton = document.querySelector(".button.write-us");
		var messageAuthorName = document.querySelector(".message-user-name");
		var messageAuthorEmail = document.querySelector(".message-user-email");
		var messageText = document.querySelector(".message-content");
		var writeUsForm = document.querySelector(".write-us-form");


		function showWriteUsModal(event) {
			event.preventDefault();
			var overlayModalWriteUs = document.querySelector(".overlay-write-us");
			if (overlayModalWriteUs) {
				overlayModalWriteUs.classList.add("opened");
				if (storageValue) {
					messageAuthorName.value = storageValue;
					messageAuthorEmail.focus();
				} else {
					messageAuthorName.focus();
				};
			};
		};

		if (writeUsModalShowButton) {
			writeUsModalShowButton.addEventListener("click", showWriteUsModal);
		};

	/* ----- end block [show write-us form] in file {index.html} -----*/

	/* ----- begin block [validate write-us form] in file {index.html} -----*/

		function verificationWriteUsForm(event) {
			if (!messageAuthorName.value || !messageAuthorEmail.value || !messageText.value) {
				event.preventDefault();
				var modalWriteUs = document.querySelector(".modal-write-us");
				modalWriteUs.classList.add("modal-error");
			} else {
				try {
					localStorage.setItem("user-name", messageAuthorName.value);
				} catch(err) {

				};
			};
		};

		if (writeUsForm) {
			writeUsForm.addEventListener("submit",verificationWriteUsForm);
		};

	/* ----- begin block [validate write-us form] in file {index.html} -----*/

	/* ----- begin block [show map modal] in file {index.html and catalog.html} -----*/

		var showMapButtons = document.querySelectorAll(".button-show-map");
		var overlayModalMap = document.querySelector(".overlay-contact-map");

		function showMapModal(event) {
			event.preventDefault();
			if (overlayModalMap) {
				overlayModalMap.classList.add("opened");
			};
		};

		for (var i=0; i < showMapButtons.length; i++) {
			showMapButtons[i].addEventListener("click", showMapModal);
		};

	/* ----- begin block [show map modal] in file {index.html and catalog.html} -----*/

	/* ----- begin block [modal-close] in file {index.html and catalog.html} -----*/

		var modalCloseButtons = document.querySelectorAll(".modal-close");

		function closeModalWindow(event) {
			event.preventDefault();
			if (document.querySelector(".overlay-modal.opened")) {
				document.querySelector(".overlay-modal.opened").classList.remove("opened");
			};
			var modalErrorStatus = document.querySelectorAll(".modal.modal-error");
			for (var j=0; j < modalErrorStatus.length; j++) {
				modalErrorStatus[j].classList.remove("modal-error");
			};
		};

		for (var i=0; i < modalCloseButtons.length; i++) {
			modalCloseButtons[i].addEventListener("click", closeModalWindow);
		};

		window.addEventListener("keydown", function(){
			if (event.keyCode === 27) {
				closeModalWindow(event);
			};
		});

	/* ----- end block [modal-close] in file {index.html and catalog.html} -----*/

/* ----- end block [show modal form] in file {index.html and catalog.html} -----*/