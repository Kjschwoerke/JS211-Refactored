//Set Variables for the API URL and Call

let latitude = document.getElementById('latitude').value
let longitude = document.getElementById('longitude').value
let lati = latitude.toString()
let longi = longitude.toString()

let url = "https://api.darksky.net/forecast/"
let apiKey = "294cc8f4cc01c4179f76ce60b623a876"

function coordinates(){
console.log(lati)
console.log(longi)
}

//create the api link variable
const api = url + apiKey + "/" + lati + "," + longi

console.log(api)

//_______________________________
const weatherArr = [];



var request = new XMLHttpRequest();
request.open('GET', api);
request.responseType = 'json';
request.send();

//Calls and loads the API from darksky
request.onload = function() {
  const weatherData = request.response;
  weatherArr.push(weatherData.currently.temperature)
  weatherArr.push(weatherData.minutely.summary)
  
    
  //console.log(weatherArr)
}

function displayWeather(weatherArr){
    let node = document.createElement('li')
    let node1 = document.createElement('li')
    let temp = document.createTextNode('Current Temperature:  ' + weatherArr[0] + ' F')
    let currWeather = document.createTextNode('Current Weather:  ' + weatherArr[1])

    node.appendChild(temp)
    document.getElementById('currentWeather').appendChild(node)
    node1.appendChild(currWeather)
    document.getElementById('currentWeather').appendChild(node1)
}
console.log(weatherArr)
//console.log(JSON.parse(weatherArr.summary))
