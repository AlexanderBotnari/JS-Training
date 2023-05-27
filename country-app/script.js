'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// const displayCountry = function (data, className = '') {
//     const currencies = data.currencies;
//     const currensyName = Object.values(currencies)[0].name;
//     const currensySymbol = Object.values(currencies)[0].symbol;
  
//     const languages = data.languages;
//     const firstLanguage = Object.values(languages)[0];
  
//     const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${data.flags.svg}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} миллионов</p>
//         <p class="country__row"><span>🗣️</span>${firstLanguage}</p>
//         <p class="country__row"><span>💰</span>${currensySymbol} ${currensyName}</p>
//       </div>
//     </article>
//     `;
  
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   };
  
  // const displayError = function (message) {
  //   countriesContainer.insertAdjacentText('beforeend', message);
  //   countriesContainer.style.opacity = 1;
  // };

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
// //////////////////////////////////////////////////////
// // EX 1
// const displayCountryByGPS = function(lat, lng){
//     fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`)
//     .then(function(response) {
//         if(!response.ok){
//             throw new Error('Cannot read data!');
//         }
//         return response.json()
//     })
//     .then(data => {
//         console.log(data);
//         console.log(`You are in ${data.address.municipality}, ${data.address.country}`);
//         return getDataAndConvertToJSON(
//                     `https://restcountries.com/v3.1/name/${data.address.country.toLowerCase()}`,
//                     'Страна не найдена.'
//                   );
//     })
//     .then(data => displayCountry(data[0]))
//     .catch(e => {
//         console.error(`${e} 🧐`);
//         displayError(`Что-то пошло не так 🧐: ${e.message} Попробуйте ещё раз!`);
//     })
//     .finally(() => {
//         countriesContainer.style.opacity = 1;
//     });
// }

// btn.addEventListener('click', function(){
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(position) {
//           const latitude = position.coords.latitude;
//           const longitude = position.coords.longitude;
//           displayCountryByGPS(latitude, longitude);
//             // displayCountryByGPS(35.756, 139.256);
//             // displayCountryByGPS(48.857, 2.358);
//         });
//       } else {
//         console.log("Geolocation is not supported by this browser.");
//       }
// });

/////////////////////////////////////////////////////
//EX 2
const imagesContainer = document.querySelector('.images');

const wait = function(secs){
  return new Promise(function(resolve){
      setTimeout(resolve, secs * 1000);
  })
}

const createImageElement = function(imagePath){
  return new Promise(function(resolve, reject){
    const img = document.createElement('img');
    img.src = imagePath;
    img.addEventListener('load', function(){
      imagesContainer.append(img);
      resolve(img);
    });
    
    img.addEventListener('error', function(){
      reject(new Error('Image error!'));
    });

  });
}

// let currentImage;

// createImageElement('./img/image1.jpg')
//   .then(image1 => {
//       console.log('First image loaded!');
//       currentImage = image1;
//       return wait(2);
//   })
//   .then(() => {
//       currentImage.style.display = 'none';
//       return createImageElement('./img/image2.jpg');
//   })
//   .then(image2 => {
//     console.log('Second image loaded!');
//     currentImage = image2;
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImageElement('./img/image3.jpg');
//   })
//   .then(image3 => {
//     console.log('Thirty image loaded!');
//     currentImage = image3;
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//   })
//   .catch(err => console.error(err));

///////////////Async / await////////////////////////////////
// const displayCountry = function (data, className = '') {
//     const currencies = data.currencies;
//     const currensyName = Object.values(currencies)[0].name;
//     const currensySymbol = Object.values(currencies)[0].symbol;
  
//     const languages = data.languages;
//     const firstLanguage = Object.values(languages)[0];
  
//     const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${data.flags.svg}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} миллионов</p>
//         <p class="country__row"><span>🗣️</span>${firstLanguage}</p>
//         <p class="country__row"><span>💰</span>${currensySymbol} ${currensyName}</p>
//       </div>
//     </article>
//     `;
  
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   };

//   const getUserPosition = function(){
//     return new Promise(function(resolve, reject){
//       navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
//   };

// const getCountryData = async function(){
//   try{
//     const userPosition = await getUserPosition();

//     const {latitude: lat, longitude: lng} = userPosition.coords;
  
//     const geocodingResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`);
  
//     if(!geocodingResponse.ok) throw new Error('Problema cu geocodingul!');

//     const geocodingData = await geocodingResponse.json();
  
//     const response = await fetch(`https://restcountries.com/v3.1/name/${geocodingData.address.country.toLowerCase()}`);
  
//     if(!response.ok) throw new Error('Problema cu informatia despre tara!');

//     const data = await response.json();
  
//     displayCountry(data[0]);

//     return `You are in ${geocodingData.address.municipality}, ${geocodingData.address.country}`;
//   }catch(e){
//     displayError(`Ceva nu a mers bine: ${e.message} 🤬`)

//     //o functie asincrona intoarce un promis indeplinit, daca avem eroare trebuie sa rearuncam ca 
//     //promisul sa fie rejectat.
//     throw e;
//   }
// };

// getCountryData();

// (async function (){
//   try {
//     const place  = await getCountryData();
//     console.log(place);
//   } catch (error) {
//     console.log(`Ceva nu a mers bine: ${error.message} 🤬`);
//   }
// })();


//////////////////multiple async data///////////
// const print3CountriesCapitals = async function(country1, country2, country3){
//   try {
//     // const [country1Data] = await getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/${country1}`);
//     // const [country2Data] = await getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/${country2}`);
//     // const [country3Data] = await getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/${country3}`);
  
//     // console.log([country1Data.capital, country2Data.capital, country3Data.capital]);
//     const countriesData = await Promise.all([
//       getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/${country1}`),
//       getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/${country2}`),
//       getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/${country3}`),
//     ]);

//     console.log(countriesData.map(countryData => countryData[0].capital));
//   } catch (error) {
//     console.error(error);
//   }
// };

// print3CountriesCapitals('ukraine', 'russia', 'canada');

//////////race, allSettled, any//////////
// const timeout = function(seconds){
//   return new Promise(function(_, reject){
//     setTimeout(function(){
//       reject(new Error('Timeout request!'));
//     }, seconds * 1000);
//   });
// }
//Promise.race();
// Promise.race([
//     getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/spain`),
//     timeout(3),
// ])
// .then(data => console.log(data[0]))
// .catch(e => console.log(e));

//Promise.allSettled()
// Promise.allSettled([
//     Promise.resolve('Efectuat!'),
//     Promise.reject('Neefectuat!'),
//     Promise.resolve('Efectuat!'),
// ])
// .then(data => console.log[data]);

// Promise.all([
//     Promise.resolve('Efectuat!'),
//     Promise.reject('Neefectuat!'),
//     Promise.resolve('Efectuat!'),
// ])
// .then(data => console.log[data]);

//Promise.any()
// Promise.any([
//     Promise.resolve('1 efectuat!'),
//     Promise.reject('Neefectuat!'),
//     Promise.resolve('2 efectuat!'),
// ])
// .then(data => console.log(data))
// .catch(e => console.error(e));

//Ex 3
const loadAndWait = async function(){
  try{
    let image = await createImageElement('./img/image1.jpg');
    await wait(2);
    image.style.display = 'none';

    image = await createImageElement('./img/image2.jpg');
    await wait(2);
    image.style.display = 'none';

    image = await createImageElement('./img/image3.jpg');
    await wait(2);
    image.style.display = 'none';
  }catch(e){
    console.error(e);
  }
}

// loadAndWait();

const loadAllImages = async function(imagePathsArray){
  const images = imagePathsArray.map(async imagePath => await createImageElement(imagePath));
  const imageElements = await Promise.all(images);
  imageElements.forEach(img => img.classList.add('parallel'));
}

loadAllImages(['./img/image1.jpg', './img/image2.jpg', './img/image3.jpg']);