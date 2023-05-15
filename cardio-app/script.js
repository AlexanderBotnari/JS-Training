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
}

class Running extends Workout{
    type = 'running';

    constructor(coords, distance, duration, temp){
        super(coords, distance, duration);
        this.temp = temp;
        this._calculatePace();
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

        inputDistance.value = inputDuration.value = inputTemp.value = inputClimb.value = '';
        
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
        .setPopupContent('Antrenament')
        .openPopup();
    }
}

const app = new App();
