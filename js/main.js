const searchBar = document.querySelector(".header__search");
const listItems = document.querySelectorAll("li");

const searchEngine = (e) => {
	const searchPhrase = e.target.value.toLowerCase();

	listItems.forEach((item) => {
		const task = item.textContent;

		if (task.toLowerCase().indexOf(searchPhrase) !== -1) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	});
};

searchBar.addEventListener("keyup", searchEngine);
