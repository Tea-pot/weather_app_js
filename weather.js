class Weather {
  constructor(city, country) {
    this.apiKey = '4cb057ad6f322017caf70efafc116d7d';
    this.city = city;
    this.country = country;
  }
  //fetch weather
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  //change the weather location
    changeLocation(city, country) {
      this.city = city;
      this.country = country;
    }    
}