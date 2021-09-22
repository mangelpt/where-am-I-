function renderHtml(data, type = '') {
	const container = document.querySelector('.message');
	container.innerHTML = '';
	if (type === 'error') {
		container.insertAdjacentHTML('afterbegin', `<h2 class="message">something wrong error ${data}</h2>`);
	} else {
		container.insertAdjacentHTML('afterbegin', `<h2 class="message">you are in ${data}</h2>`);
	}
}

const renderCity = function(data) {
	const countriesContainer = document.querySelector('.countries');
	countriesContainer.innerHTML = '';
	const html = `
    <article class="country ">
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>
    `;
	countriesContainer.insertAdjacentHTML('beforeend', html);
	countriesContainer.style.opacity = 1;
};
export { renderHtml, renderCity };
