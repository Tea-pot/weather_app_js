class Storage {
  constructor() {
    this.city;
    this.country;
    this.defaultCity = 'Helsinki';
    this.defaultCountry = 'FI';
  }
  //set location data
  getLocationData() {
    //it ther si nothing there-> default
    if(localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }
    if(localStorage.getItem('country') === null) {
      this.city = this.defaultCity;
    } else {
      this.country = localStorage.getItem('country');
    }

    return {
      city: this.city,
      country: this.country
    }
  }

  setLocationData(city, country) {
    localStorage.setItem('city', city);
    localStorage.setItem('country', country);
    /*
    this case, we're savind string, so there is no need to stringifying and parseing
    */
  }
}