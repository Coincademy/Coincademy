window.onscroll = function() {MenuBG()};

function MenuBG() {
	if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
		document.getElementById("menu").classList.add("menu-bg");
	} else {
		document.getElementById("menu").classList.remove("menu-bg");
	}
}