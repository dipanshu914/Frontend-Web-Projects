const scroll = new LocomotiveScroll({
	el: document.querySelector(".main"),
	smooth: true,
});

const elem = document.querySelectorAll("#elem");
// const elem = document.querySelector("#elem");
const fixedimg = document.querySelector("#fixed-Img");

elem.forEach(function (e) {
	e.addEventListener("mouseenter", function () {
		fixedimg.style.display = "block";
		let img = e.getAttribute("src");
		fixedimg.style.backgroundImage = `url(${img})`;
	});

	e.addEventListener("mouseleave", function () {
		fixedimg.style.display = "none";
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const tablelist = document.querySelectorAll("#tablist a div");

	tablelist.forEach(function (e) {
		e.addEventListener("click", function () {
			tablelist.forEach(function (item) {
				item.style.color = "";
				item.style.borderLeft = "3px solid #504A45";
				item.style.paddingLeft = "10px";
			});
			// console.log(e);
			e.style.color = "#EFEAE3";
			e.style.borderLeft = "3px solid #FE330A";
			e.style.paddingLeft = "10px";
		});
	});
});

// Swipper js code
var swiper = new Swiper(".mySwiper", {
	slidesPerView: "auto",
	centeredSlides: true,
	spaceBetween: 10,
});

let menu = document.querySelector("#menu h3");
let fullscr = document.querySelector("#full-src");
let Navimg = document.querySelector("nav img");
let flag = 0;

menu.addEventListener("click", Menuopen);

function Menuopen() {
	if (flag == 0) {
		fullscr.style.top = 0;
		Navimg.style.opacity = 0;
		flag = 1;
	} else {
		fullscr.style.top = "-100%";
		Navimg.style.opacity = 1;
		flag = 0;
	}
}
