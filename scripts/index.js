import placesHandlerFuncs from "./places_api_module/placesHandlerFuncs.js";
import weatherHandlerFuncs from "./weather_api_module/weatherHandlerFuncs.js";

export const placeName = document.getElementById("placeName");
const btn = document.getElementById("btn");
const navlogo = document.getElementById("navlogo");


const handlerFuncs = () =>{
    placesHandlerFuncs();
    weatherHandlerFuncs();
}


btn.addEventListener("click", handlerFuncs);
placeName.addEventListener("change", handlerFuncs);
navlogo.addEventListener("click", () => location.reload());