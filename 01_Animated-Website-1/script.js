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
