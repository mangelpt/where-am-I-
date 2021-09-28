const countriesContainer = document.querySelector('.container');

function renderHtmlError(data) {
	countriesContainer.innerHTML = '';
	countriesContainer.insertAdjacentHTML('afterbegin', `<h2 class="message"> 🗣️ ${data}</h2>`);
}

const renderCity = function (data) {
	countriesContainer.innerHTML = '';
	const html = `
	<div class="countries">  
    <article class="country ">
       <div class="country__data">
         <h3 class="country__name">${data.name.official}</h3>
         <h4 class="country__region">${data.region}</h4>
         <p class="country__row"><span>flag :</span>${data.flag}</p>
         <p class="country__row"><span>🗣️</span>${data.languages.spa}</p>
         <p class="country__row"><span>💰</span>${data.currencies.PEN.name}</p>
        </div>
    </article>
	</div>

<h2 class="message">
	you are in ${data.name.common}
</h2>

    `;
	countriesContainer.insertAdjacentHTML('beforeend', html);
	countriesContainer.style.opacity = 1;
};
export { renderHtmlError, renderCity };
