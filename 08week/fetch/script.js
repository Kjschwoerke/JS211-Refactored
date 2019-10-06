//Set Variables for the API URL and Call

let latitude = document.getElementById('latitude').value
let longitude = document.getElementById('longitude').value
let lati = latitude.toString()
let longi = longitude.toString()

let url = "https://api.darksky.net/forecast/"
//Please Enter your Dark Sky Api Key Below
let apiKey = ""

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
  weatherArr.push(weatherData.minutely.icon)
  weatherArr.push(weatherData.hourly.summary)
  weatherArr.push(weatherData.daily.summary)
    
  //console.log(weatherArr)
}

function displayWeather(weatherArr){
    let node = document.createElement('li')
    let node1 = document.createElement('li')
    let node2 = document.createElement('li')
    let node3 = document.createElement('li')
    let temp = document.createTextNode('Current Temperature:  ' + weatherArr[0] + ' F')
    let currWeather = document.createTextNode('Current Weather:  ' + weatherArr[1])
    let hourSummary = document.createTextNode('Later Today:  ' + weatherArr[2]
    )
    let dailySummary = document.createTextNode('Future Forcast:  ' + weatherArr[3])

    node.appendChild(temp)
    document.getElementById('currentWeather').appendChild(node)
    node1.appendChild(currWeather)
    document.getElementById('currentWeather').appendChild(node1)
    node2.appendChild(hourSummary)
    document.getElementById('currentWeather').appendChild(node2)
    node3.appendChild(dailySummary)
    document.getElementById('currentWeather').appendChild(node3)
}
console.log(weatherArr)
//console.log(JSON.parse(weatherArr.summary))
