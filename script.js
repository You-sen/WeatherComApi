const API='a9706334285c4da686b143434240205';
const searchTemp=()=>{
    const city=document.getElementById('city').value;
    const url=`https://api.weatherapi.com/v1/current.json?key=${API}&q=${city}`;

    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        displayTemp(data);
    });
}

const ForecastTemp=()=>{
    const city=document.getElementById('city').value;
    const day=document.getElementById('forecastDay').value;
    const urlF=`https://api.weatherapi.com/v1/forecast.json?key=${API}&q=${city}&days=${day}`;
    fetch(urlF)
    .then(res=>res.json())
    .then(data=>{
        displayForecast(data);
    });
}

const setInnerText=(id,text)=>{
    document.getElementById(id).innerText=text;
}
const displayTemp=temp=>{
    setInnerText('city-name',temp.location.name);
    setInnerText('temperature',temp.current.temp_c);
    setInnerText('condition',temp.current.condition.text);

    const url = temp.current.condition.icon;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}
const displayForecast=temp=>{
    const day=document.getElementById('forecastDay').value-1;
    setInnerText('fcity-name',temp.location.name);
    setInnerText('maxtemperature',temp.forecast.forecastday[day].day.maxtemp_c);
    setInnerText('mintemperature',temp.forecast.forecastday[day].day.mintemp_c);
    setInnerText('fcondition',temp.forecast.forecastday[day].day.condition.text);

    const url2 = temp.forecast.forecastday[day].condition.icon;
    const imgIcon2 = document.getElementById('weather-icon2');
    imgIcon.setAttribute('src', url2);
}
