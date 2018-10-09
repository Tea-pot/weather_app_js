//Storage -> because first we're going to call local storage
const storage = new Storage();
//get stored location or default data ->call method to check the storage
const weatherLocation = storage.getLocationData();

// initializing object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
//UI -.pass data to UI
const ui = new UI(); 


//get weather on DOMLoad
document.addEventListener('DOMContentLoaded', getWeather);


//CHANGE location
document.querySelector('#w-change-btn').addEventListener('click', () => {
  const city = document.querySelector('#city').value;
  const country = document.querySelector('#country').value;

  //change location
  weather.changeLocation(city, country);

  //set location in LS
  storage.setLocationData(city, country);



  //then we need to call getWeather, fetch API and return ui
  getWeather();

  //close modal -> solved by ading data-dismiss="modal" to HTML, bootstrap class without JQ
  // JQ for closing modal, optional -> $('#locModal').modal('hide');

});

function getWeather() {
  weather.getWeather()
.then(results => {
  console.log(results);  
  
  ui.paint(results);
})
.catch(err => console.log(err));
}



