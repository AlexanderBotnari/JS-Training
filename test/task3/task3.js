const meteo = fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&"+
                    "current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m")
                    .then((response) => {
                        return response.json();
                    }).then((data) => {
                        console.log(data.current_weather.temperature);
                    });

