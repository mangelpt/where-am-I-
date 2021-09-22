import api from './api.js';

const place1 = api.getInstance();

document.querySelector('button').addEventListener('click', () => {
	place1.getGeoApi(-33.933, 18.474);
});
