var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#sub')
var city = document.querySelector('#cityoutput')
var description = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')

apikey = "de9fd8a722542a526890360832401551"

function convertion(val) {
    return (val - 273).toFixed(2)
}

btn.addEventListener('click', function () {

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apikey)
        .then(res => res.json())

        .then(data => {

            var namevalue = data['name']
            var descri = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']

            city.innerHTML = `Weather of <span>${namevalue}<span>`;
            temp.innerHTML = `Temparature : <span>${convertion(tempature)} C</span>`
            description.innerHTML = `Sky Condition : <span>${descri}<span>`
            wind.innerHTML = `Wind Speed : <span>${wndspd} km/h<span>`
        })

        .catch(err => alert('Entered City Name is Wrong, Please try again!'))
})