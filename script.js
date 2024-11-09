const apiKey="2d7da02a2a7c7cc68b093c94accdf29f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search_box input");
const searchbtn=document.querySelector(".search_box button");
const weatherIcon=document.querySelector(".weather_icon");

async function checkWeather(city) {
    const response= await fetch(apiUrl +city+ `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else var data=await response.json();

   
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind_speed").innerHTML=data.wind.speed+" Km/h";
    
     if(data.weather[0].main =="Clouds"){
        weatherIcon.src= "clouds.png";
     }
     else if(data.weather[0].main == "Rain"){
        weatherIcon.src= "rain.png";
     } 
     else if(data.weather[0].main == "Snow"){
        weatherIcon.src= "snow.png";
     }
     else if(data.weather[0].main == "Clear"){
        weatherIcon.src= "clear.png";
     }
     else if(data.weather[0].main == "Mist"){
        weatherIcon.src="mist.png";
     }
     else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="drizzle.png";
     }
     document.querySelector(".error").style.display="none";
     document.querySelector(".weather").style.display="block";
}
searchbtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
    
})
 