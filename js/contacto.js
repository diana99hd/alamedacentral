(function (d, w) {
	'use strict';

	var mq = w.matchMedia('(min-width: 64em)'),
		map = d.querySelector('.Contact-map');
	
	function showMap(mq) {
		//operador ternario = (condicion) ? true : false ;
		return (mq.matches)
			? map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.459128419503!2d-99.14630788509322!3d19.435761886882485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92af577b44b%3A0xdb290ed58ba64e40!2sAlameda+Central!5e0!3m2!1ses!2smx!4v1490520249070" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
			: map.innerHTML = '<a href="https://goo.gl/maps/tUDUxaPcVcA2" target="_blank">Ver Mapa</a>';
	}

	mq.addListener(showMap);
	showMap(mq);
})(document, window);

(function (d, w) {
	'use strict';

	var form = d.forms[0];

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		alert('Gracias por tus comentarios');
	});
})(document, window);