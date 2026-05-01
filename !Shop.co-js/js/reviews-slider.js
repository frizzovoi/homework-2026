export const reviewsSlider = () => {
	new Swiper(".reviews__slider", {
		slidesPerView: "auto",
		centeredSlides: true,
		loop: true,
        watchSlidesProgress: true,
		spaceBetween: 20,
		mousewheel: {
			forceToAxis: true,
		},
		navigation: {
			prevEl: ".reviews__slider-button--prev",
			nextEl: ".reviews__slider-button--next",
		},
	});
};
