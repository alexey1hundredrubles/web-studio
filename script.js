document.querySelectorAll(".link").forEach(item => {
	item.addEventListener("click", ({ target }) => {
		let to = document.getElementsByClassName(target.dataset.to)[0];
		to.scrollIntoView({ behavior: "smooth" });
	});
});
