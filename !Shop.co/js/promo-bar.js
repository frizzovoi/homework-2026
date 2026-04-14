export const promoBar = () => {
	const promoBar = document.querySelector("#promo-bar");
	const closeBtn = document.querySelector("#promo-bar__close");

	if (promoBar && closeBtn) {
		closeBtn.addEventListener("click", () => {
			// Просто добавляем класс, CSS сделает остальное
			promoBar.classList.add("promo-bar--hidden");

			// Опционально: полностью удаляем из DOM после анимации (через 300мс)
			setTimeout(() => {
				promoBar.style.display = "none";
			}, 300);
		});
	}
};
