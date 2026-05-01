const expandButtons = document.querySelectorAll(".js-expand-btn");

expandButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const targetSelector = btn.getAttribute("data-target");
        const section = document.querySelector(targetSelector);

        if (section) {
            const cards = section.querySelectorAll(".product-card");
            let isOpened = false;

            cards.forEach(card => {
                if (card.classList.contains("always")) return;

                // класс есть - удаляем, класса нет - добавляем
                const isHidden = card.classList.toggle("product-card--hidden");
                
                // Если после переключения класс удален, значит карточки открыты
                isOpened = !isHidden;
            });

            // Меняем текст кнопки в зависимости от состояния
            btn.textContent = isOpened ? "Свернуть" : "Посмотреть всё";
        }
    });
});
