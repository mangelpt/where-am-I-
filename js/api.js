import { renderHtmlError, renderCity } from './renderHtml.js';


const getPosition = function () {
	return new Promise(function (resolve, reject) {
		navigator.geolocation.getCurrentPosition(resolve, reject)
	})
}



const whereIam = async function () {
	try {
		const position = await getPosition()
		const { latitude, longitude } = position.coords;

		const resolve = await fetch(`https://geocode.xyz/${latitude},${longitude}?json=1`)
		const jsonR = await resolve.json();
		if (!resolve.ok) throw new Error("something Wrong happened with geocode")

		const city = await fetch(`https://restcountries.com/v3/name/${jsonR.country}`)
		const resp = await city.json();
		if (!resolve.ok) throw new Error("something Wrong happened with rest countries")
		renderCity(resp[0]);

	} catch (e) {
		renderHtmlError(e)
	}
}

export default whereIam;
