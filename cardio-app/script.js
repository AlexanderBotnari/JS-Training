'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputTemp = document.querySelector('.form__input--temp');
const inputClimb = document.querySelector('.form__input--climb');

class Workout{

    id = Date.now() + ''.slice(-10);
    date = new Date();

    constructor(coords, distance, duration){
        this.coords = coords;
        this.distance = distance;
        this.duration = duration;
    }

    _setDescription(){
        this.type === 'running' ? this.description = 'Alergat ' + new Intl.DateTimeFormat('ru-RU').format(this.date) : 
        this.description = 'Ciclism ' + new Intl.DateTimeFormat('ru-RU').format(this.date);
    }
}

class Running extends Workout{
    type = 'running';

    constructor(coords, distance, duration, temp){
        super(coords, distance, duration);
        this.temp = temp;
        this._calculatePace();
        this._setDescription();
    }

    _calculatePace(){
        this.pace = this.duration / this.distance;
    }
}

class Cycling extends Workout{
    type = 'cycling';

    constructor(coords, distance, duration, climb){
        super(coords, distance, duration);
        this.climb = climb;
        this._calculateSpeed();
        this._setDescription();
    }

    _calculateSpeed(){
        this.speed = this.distance / this.duration / 60;
    }
}

// const running = new Running([50, 40], 2, 20, 100);
// const cycling = new Cycling([50, 40], 2, 10, 200);

// console.log(running, cycling);

class App{

    #map;
    #mapEvent;
    #workouts = [];

    constructor(){
        this._getPosition();

        form.addEventListener('submit', this._newWorkout.bind(this));
        
        inputType.addEventListener('change', this._toggleClimbField);
    }

    _getPosition(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
            this._loadMap.bind(this), 
            function(){
                alert('Position error!');
            });
        }
    }

    _loadMap(position){
        const {latitude} = position.coords;
        const {longitude} = position.coords;
    
        const coords = [latitude, longitude];
    
        this.#map = L.map('map').setView(coords, 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#map);
    
        this.#map.on('click', this._showForm.bind(this));
    }

    _showForm(e){
        this.#mapEvent = e;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    _hideForm(e){
        inputDistance.value = inputDuration.value = inputTemp.value = inputClimb.value = '';
        form.classList.add('hidden');
    }

    _toggleClimbField(){
        inputClimb.closest('.form__row').classList.toggle('form__row--hidden');
        inputTemp.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e){
        e.preventDefault();

        const areNumbers = (...numbers) => numbers.every(num => Number.isFinite(num));

        const areNumbersPositive = (...numbers) => numbers.every(num => num > 0);
                
        const {lat, lng } = this.#mapEvent.latlng;

        let workout;

        const type = inputType.value;
        const duration = +inputDuration.value;
        const distance = +inputDistance.value;

        if(type === 'running'){
            const temp = +inputTemp.value;

            if( !areNumbers(distance, duration, temp) || 
                !areNumbersPositive(distance, duration, temp)
                ){
                    return alert('Introduceti nr valid!');
            }
            workout = new Running([lat, lng], distance, duration, temp);
        }

        if(type === 'cycling'){
            const climb = +inputClimb.value;

            if( !areNumbers(distance, duration, climb) || 
                !areNumbersPositive(distance, duration, climb)
                ){
                    return alert('Introduceti nr valid!');
            }
            workout = new Cycling([lat, lng], distance, duration, climb);
        }

        this.#workouts.push(workout);

        this.displayWorkout(workout);

        this._displayWorkoutOnSidebar(workout);

        this._hideForm();        
    }

    displayWorkout(workout){
        L.marker(workout.coords)
        .addTo(this.#map)
        .bindPopup(L.popup({
            maxWidth: 200,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: `${workout.type}-popup`,
            })
        )
        .setPopupContent(`${workout.type === 'running' ? '🏃' : '🚵‍♂️'} ${workout.description}`)
        .openPopup();
    }

    _displayWorkoutOnSidebar(workout){
        let html = `
            <li class="workout workout--${workout.type}" data-id="${workout.id}">
                <h2 class="workout__title">${workout.description}</h2>
                <div class="workout__details">
                <span class="workout__icon">${workout.type === 'running' ? '🏃' : '🚵‍♂️'}</span>
                <span class="workout__value">${workout.distance}</span>
                <span class="workout__unit">км</span>
                </div>
                <div class="workout__details">
                <span class="workout__icon">⏱</span>
                <span class="workout__value">${workout.duration}</span>
                <span class="workout__unit">мин</span>
                </div>
        `;

        if(workout.type === 'running'){
            html += `
            <div class="workout__details">
                <span class="workout__icon">📏⏱</span>
                <span class="workout__value">${workout.pace.toFixed(2)}</span>
                <span class="workout__unit">мин/км</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">👟⏱</span>
                <span class="workout__value">${workout.temp}</span>
                <span class="workout__unit">шаг/мин</span>
            </div>
          </li>
            `;
        }

        if(workout.type === 'cycling'){
            html += `
            <div class="workout__details">
                <span class="workout__icon">📏⏱</span>
                <span class="workout__value">${workout.speed.toFixed(2)}</span>
                <span class="workout__unit">км/ч</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">🏔</span>
                <span class="workout__value">${workout.climb}</span>
                <span class="workout__unit">м</span>
            </div>
        </li>
            `;
        }
        
        form.insertAdjacentHTML('afterend', html);
    }
}

const app = new App();
