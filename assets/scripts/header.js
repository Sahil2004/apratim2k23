const header = document.getElementsByTagName("header")[0];
const winHeight = window.innerHeight;
const links = document.querySelector(".links");
const overlay = document.querySelector(".header-overlay");
const hamburger = document.querySelector(".hamburger");

Array.from(links.children).forEach((link) => {
	const text = link.innerText;
	link.innerText = "";
	const parentSpan = document.createElement("span");
	for (let i = 0; i < text.length; i++) {
		const div = document.createElement("div");
		div.innerText = text[i];
		div.classList.add("char");
		if (i % 2 === 0) {
			div.classList.add("up");
		} else {
			div.classList.add("down");
		}
		parentSpan.appendChild(div);
	}
	const sp4 = document.createElement("span");
	sp4.classList.add("sp4");
	parentSpan.appendChild(sp4);
	const sp3 = document.createElement("span");
	sp3.classList.add("sp3");
	parentSpan.appendChild(sp3);
	const sp2 = document.createElement("span");
	sp2.classList.add("sp2");
	parentSpan.appendChild(sp2);
	const sp1 = document.createElement("span");
	sp1.classList.add("sp1");
	parentSpan.appendChild(sp1);
	link.appendChild(parentSpan);
	link.addEventListener("click", () => {
		let goto = link.getAttribute("href");
		overlay.style.display = "none";
		addClass = false;
		if (goto === $page.url.pathname) {
			overlay.style.display = "none";
			addClass = false;
		}
	});
});

window.onscroll = () => {
	// Bring background in view when scrolled a little bit.
	if (window.scrollY > 600) {
		header.classList.add("sectionBackground");
	} else {
		header.classList.remove("sectionBackground");
	}
};
const toggleNavBar = () => {
	if (overlay.style.display === "none") {
		overlay.style.display = "block";
		hamburger.classList.add("close");
	} else {
		overlay.style.display = "none";
		hamburger.classList.remove("close");
	}
};
