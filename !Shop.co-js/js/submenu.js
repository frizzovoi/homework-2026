document.querySelectorAll(".menu__item--has-submenu").forEach(item => {
	const link = item.querySelector(".menu__link");
	const submenu = item.querySelector(".submenu__list");

	link.addEventListener("click", e => {
		e.preventDefault();
		e.stopPropagation();
		document.querySelectorAll(".submenu__list").forEach(otherList => {
			if (otherList !== submenu) {
				otherList.classList.remove("submenu--is-open");
				otherList.parentElement.classList.remove("submenu--is-active");
			}
		});
		submenu.classList.toggle("submenu--is-open");
		item.classList.toggle("submenu--is-active");
	});
});

document.addEventListener("click", e => {
	if (!e.target.closest(".menu__item--has-submenu")) {
		document
			.querySelectorAll(".submenu__list")
			.forEach(el => el.classList.remove("submenu--is-open"));
	}
});
