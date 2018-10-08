//UI
class UI {
  constructor() {
    this.location = document.querySelector('#w-location');
    this.desc = document.querySelector('#w-des');
    this.string = document.querySelector('#w-string');
    this.details = document.querySelector('#w-details');
    this.icon = document.querySelector('#w-icon');
    this.humidity = document.querySelector('#w-humidity');
    this.maxTemp = document.querySelector('#w-max-temp');
    this.pressure = document.querySelector('#w-pressure');
    this.wind = document.querySelector('#w-wind');
    this.sunrise = document.querySelector('#w-sunrise');
    this.sunset = document.querySelector('#w-sunset');
  }
    

  paint(weather) {
    this.location.textContent = `${weather.name} ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${(weather.main.temp - 273.15).toFixed(1)} ℃`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
    this.maxTemp.textContent = `Maximum Temperature: ${(weather.main.temp_max - 273.15).toFixed(1)} ℃`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;
    this.pressure.textContent = `Pressure Level: ${weather.main.pressure} hpa`;
    this.sunset.textContent = `Sunset: ${new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}`;
    this.sunrise.textContent = `Sunrise: ${new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}`;
    //[] -> in case you need to specify locale of ypur application, ex.('en-UK',{...})
  }

}
