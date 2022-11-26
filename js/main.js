const filterButtons = document.querySelectorAll(".filter-button");
for (let i = 0; i < filterButtons.length; i++) {
	filterButtons[i].onclick = function () {
		document.querySelectorAll(".filter-button").forEach((button) => {
			button.classList.remove("active");
		});
		filterButtons[i].classList.add("active");
		myFunction(filterButtons[i].getAttribute("data-filter"));
	};
}

function myFunction(filter) {
	const PorjectCards = document.querySelectorAll(".project-card");
	for (let i = 0; i < PorjectCards.length; i++) {
		if (
			filter == PorjectCards[i].getAttribute("data-filter") ||
			filter == "all"
		) {
			PorjectCards[i].style.display = "flex";
		} else {
			PorjectCards[i].style.display = "none";
		}
	}
}
