import { renderHtml, renderCity } from './renderHtml.js';

const whereIam = (function() {
	let instance;
	function createGeoApi() {
		return {
			getGeoApi(cord_x, cord_y) {
				fetch(`https://geocode.xyz/${cord_x},${cord_y}?geoit=json`)
					.then((resp) => {
						if (!resp.ok) throw new Error(`${resp.status}`);
						return resp.json();
					})
					.then((data) => {
						renderHtml(data.country);
						return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
					})
					.then((r) => {
						if (!r.ok) throw new Error(`${r.status}`);
						return r.json();
					})
					.then((data) => renderCity(data[0]))
					.catch((e) => renderHtml(e.message, 'error'));
			}
		};
	}

	return {
		getInstance() {
			if (!instance) {
				instance = createGeoApi();
			}

			return instance;
		}
	};
})();

export default whereIam;
