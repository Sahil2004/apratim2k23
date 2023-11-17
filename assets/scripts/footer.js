const footer = document.querySelector("footer");
const fbr = document.querySelector(".footer-border-radius");

const percentageSeen = () => {
	// Get the relevant measurements and positions
	if (!footer) return 0;
	const viewportHeight = window.innerHeight;
	const scrollTop = window.scrollY;
	const elementOffsetTop = footer.offsetTop;
	const elementHeight = footer.offsetHeight;
	// Calculate percentage of the element that's been seen
	const distance = scrollTop + viewportHeight - elementOffsetTop;
	const percentage = Math.round(
		distance / ((viewportHeight + elementHeight) / 100)
	);
	// Restrict the range to between 0 and 100
	return Math.min(100, Math.max(0, percentage));
};
window.addEventListener("scroll", () => {
	const y = percentageSeen();
	fbr.style.borderRadius = `${y < 23 ? 46 : y * 2}% ${
		y < 23 ? 46 : y * 2
	}% 0 0`;
	fbr.style.top = `-${y > 20 ? 20 : y}vh`;
});
