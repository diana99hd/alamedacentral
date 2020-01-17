(function (d, w, j) {
	'use strict';

	var ajax = new XMLHttpRequest(),
		lugares = d.querySelector('#lugares'),
		lugaresInfo,
		lugaresTemplate = '';

	ajax.open('GET', './js/lugares.json', true);
	ajax.onload = function () {
		if ( ajax.status >= 200 && ajax.status < 400 ) {
			

			lugaresInfo = j.parse(ajax.response);
			console.log(lugaresInfo);
		
			lugaresInfo['lugares'].forEach(function (lugares) {
				lugaresTemplate += `
					<article class="Lugares">
						<h2>${lugares.title}</h2>
						
						<p><i>${lugares.descripcion}</i></p>
						<img src="${lugares.poster}">
					</article>
				`;
			});

			lugares.innerHTML = lugaresTemplate;
		}
	};
	ajax.send();
})(document, window, JSON);