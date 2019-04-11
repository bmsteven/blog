const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', () => {
		//toggle nav
		nav.classList.toggle('nav-active');
		//Animate links
	    navLinks.forEach((link, index) => {
		   if (link.style.animation) {
			link.style.animation = '';
		   } else {
			link.style.animation = 'navLinkFade 0.5s ease forwad ${index / 7 + 1.5}s';
		   }
	});
	    //burger animation
	    burger.classList.toggle('toggle');
	});
}
navSlide();
function subMenu() {
	if (document.getElementById('smenu').style.maxHeight = "0") {
		document.getElementById('smenu').style.maxHeight = "25em";
		document.getElementById('smenu2').style.maxHeight = "0em";
	} else {
		document.getElementById('smenu').style.maxHeight = "0";
	}
}
function subMenu2() {
	if (document.getElementById('smenu2').style.maxHeight = "0") {
		document.getElementById('smenu2').style.maxHeight = "20em";
		document.getElementById('smenu').style.maxHeight = "0em";

	} else {
		document.getElementById('smenu2').style.maxHeight = "0";
	}
}
    var a = document.getElementById('nav-menu');
	var b = document.getElementById('form');
	var c = document.getElementById('menu-mobile');
function openSearch() {
		b.style.transform = 'translateY(0%)'; 
		a.style.transform = 'translateY(-106%)';
		c.style.marginTop = '16vh';
}
function closeSearch() {
		b.style.transform = 'translateY(-106%)'; 
		a.style.transform = 'translateY(0%)';
		c.style.marginTop = '8vh';
}