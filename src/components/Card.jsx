import React from "react";
import Loading from "./Loading";
import "../css/Card.css";
import Default from "./Default";

function Card({ showData, loadingData, weatherData, forecastData }) {
  // console.log(loadingData);  

  var today =  new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var date = `${day}/${month}/${year}`;

  var url = "";
  var url3 = "";
  var url4 = "";
  var url5 = "";

  var forecast3 =  "";
  var forecast4 =  "";
  var forecast5 =  "";



  if (loadingData) {
    return (
      <>
        <Loading />
      </>
    );
  }
  

  if (showData) {
    
    url = "https://openweathermap.org/img/wn/" + weatherData.weather[0].icon + ".png";
    
    url3 = "https://openweathermap.org/img/wn/" + forecastData.list[0].weather[0].icon + ".png";
    url4 = "https://openweathermap.org/img/wn/" + forecastData.list[1].weather[0].icon + ".png";
    url5 = "https://openweathermap.org/img/wn/" + forecastData.list[2].weather[0].icon + ".png";


    forecast3 = forecastData.list[1].dt_txt.substring(8, 10) + "/" + forecastData.list[1].dt_txt.substring(5, 7) + "/" + forecastData.list[1].dt_txt.substring(0, 4) + " " + forecastData.list[1].dt_txt.substring(11, 16);
    forecast4 = forecastData.list[2].dt_txt.substring(8, 10) + "/" + forecastData.list[2].dt_txt.substring(5, 7) + "/" + forecastData.list[2].dt_txt.substring(0, 4) + " " + forecastData.list[2].dt_txt.substring(11, 16);
    forecast5 = forecastData.list[3].dt_txt.substring(8, 10) + "/" + forecastData.list[3].dt_txt.substring(5, 7) + "/" + forecastData.list[3].dt_txt.substring(0, 4) + " " + forecastData.list[3].dt_txt.substring(11, 16);
    
  }
  
  
  

  return (
    <div>
      <div className="mt-5">
        
        {showData ? (
          <div className="container">
            <div className="card">
              <div className="card_container">
                <div className="img_and_text">
                  <h3 className="card-title">{weatherData.name}</h3>
                  <p className="card-date">{date}</p>
                  <h1 className="card-temp">{(weatherData.main.temp - 273.15).toFixed(1)} °C</h1>
                  <p className="card-desc"><img src={url} alt="" />{weatherData.weather[0].description}</p>
                  <img
                    src="https://images.pexels.com/photos/53212/one-world-trade-center-manhattan-owtc-new-york-53212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="img"
                    alt=".."
                  />
                </div>
                <div className="data">
                  <div className="data_top">
                    <h5 className="card-text">Temperatura Maxima: {(weatherData.main.temp_max- 273.15).toFixed(2)}°C</h5>
                    <h5 className="card-text">Temperatura minima: {(weatherData.main.temp_min- 273.15).toFixed(2)}°C</h5>
                    <h5 className="card-text">Sensacion termica: {(weatherData.main.feels_like- 273.15).toFixed(2)}°C</h5>
                    <h5 className="card-text">Humedad: {weatherData.main.humidity}%</h5>
                    <h5 className="card-text"> velocidad del viento: {weatherData.wind.speed}m/s</h5>
                  </div>
                  {/* <hr /> */}
                  <div className="data_bottom">
                    <div className="col">
                      <p>{forecast3}H</p>
                      <p className="description"><img src={url3}/>{forecastData.list[1].weather[0].description}</p>
                      <p className="temp">{(forecastData.list[1].main.temp - 273.15).toFixed(1)} °C</p>
                    </div>
                    <div className="col">
                      <p>{forecast4}H</p>
                      <p className="description"><img src={url4}/>{forecastData.list[2].weather[0].description}</p>
                      <p className="temp">{(forecastData.list[2].main.temp - 273.15).toFixed(1)} °C</p>
                    </div>
                    <div className="col">
                      <p>{forecast5}H</p>
                      <p className="description"><img src={url5}/>{forecastData.list[3].weather[0].description}</p>
                      <p className="temp">{(forecastData.list[3].main.temp - 273.15).toFixed(1)} °C</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ) : (
          <Default/>

          // <div className="container">
          //   <h2>( ͡° ͜ʖ ͡°)</h2>
          //   <p>ingrese el lugar de donde quiera saber datos meteorologicos</p>
          // </div>
        )}
      </div>
    </div>
  );
}

export default Card;
