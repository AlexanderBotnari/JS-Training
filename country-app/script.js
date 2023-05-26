'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const displayCountry = function (data, className = '') {
    const currencies = data.currencies;
    const currensyName = Object.values(currencies)[0].name;
    const currensySymbol = Object.values(currencies)[0].symbol;
  
    const languages = data.languages;
    const firstLanguage = Object.values(languages)[0];
  
    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
          +data.population / 1000000
        ).toFixed(1)} миллионов</p>
        <p class="country__row"><span>🗣️</span>${firstLanguage}</p>
        <p class="country__row"><span>💰</span>${currensySymbol} ${currensyName}</p>
      </div>
    </article>
    `;
  
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  };
  
  const displayError = function (message) {
    countriesContainer.insertAdjacentText('beforeend', message);
    countriesContainer.style.opacity = 1;
  };

const getDataAndConvertToJSON = function (
    url,
    errorMessage = 'Что-то пошло не так 🧐.'
  ) {
    return fetch(url).then(response => {
      if (!response.ok)
        throw new Error(`${errorMessage} Ошибка ${response.status}`);
      return response.json();
    });
  };
//////////////////////////////////////////////////////
// EX 1
const displayCountryByGPS = function(lat, lng){
    fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`)
    .then(function(response) {
        if(!response.ok){
            throw new Error('Cannot read data!');
        }
        return response.json()
    })
    .then(data => {
        console.log(data);
        console.log(`You are in ${data.address.municipality}, ${data.address.country}`);
        return getDataAndConvertToJSON(
                    `https://restcountries.com/v3.1/name/${data.address.country.toLowerCase()}`,
                    'Страна не найдена.'
                  );
    })
    .then(data => displayCountry(data[0]))
    .catch(e => {
        console.error(`${e} 🧐`);
        displayError(`Что-то пошло не так 🧐: ${e.message} Попробуйте ещё раз!`);
    })
    .finally(() => {
        countriesContainer.style.opacity = 1;
    });
}

btn.addEventListener('click', function(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          displayCountryByGPS(latitude, longitude);
            // displayCountryByGPS(35.756, 139.256);
            // displayCountryByGPS(48.857, 2.358);
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
});

