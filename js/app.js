let iniciopag = window.pageYOffset;
window.onscroll = funtion(){
	let desplazamiento = window.pageYOffset;
	if (iniciopag >= desplazamiento) {
		document.getElementById('nav').style.top = '0';
	}
	else {
		document.getElementById('nav').style.top = '-100px';
	}
	iniciopag = desplazamiento;


}