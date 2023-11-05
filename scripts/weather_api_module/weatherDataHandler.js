const canvas = document.getElementById("canvas");
import { placeName } from "../index.js";

const weatherDataHandler = async () => {

    if (placeName.value==="delhi" || placeName.value==="Delhi") placeName.value = "New delhi";
    else placeName.value = placeName.value;

    const KEY = "b256a47f9c0f45ebb1d63652233110";
    const URL = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${placeName.value}&aqi=no`;

    const response = await fetch(URL);
    const data = await response.json();

    if (data.error) alert(data.error.message);
    
    const city = data.location.name
    const region = data.location.region;
    const country = data.location.country;
    const temp_logo = data.current.condition.icon
    const deg_c = data.current.temp_c;
    const weather_condition = data.current.condition.text;
    const lastUpdateOn = data.current.last_updated;

    const feelsLike = data.current.feelslike_c;
    const windSpeed = data.current.wind_kph;
    const humidity = data.current.humidity;
    const uv = data.current.uv;
    const gust = data.current.gust_kph;
    const timeZone = data.location.tz_id;
    const localTime = data.location.localtime;

    const container = document.createElement("div");
    container.setAttribute("id", "container");

    const tempInfo = document.createElement("div");
    tempInfo.setAttribute("id", "tempInfo");

    {
        const cityName = document.createElement("p");
        cityName.innerText = city+", "+`${region?region:country}`;

        const temp = document.createElement("div");
        temp.setAttribute("id", "temp");

        {
            const logo = document.createElement("img");
            logo.setAttribute("id", "logo");
            logo.setAttribute("src", temp_logo);
            logo.setAttribute("alt", "logo");
            const h1 = document.createElement("h1");
            const sup = document.createElement('sup');
            h1.innerText = deg_c;
            sup.innerText = "°C";
            h1.append(sup);

            temp.append(logo, h1);
        }

        const h2 = document.createElement("h2");
        h2.innerText = weather_condition;
        const lastUpdate = document.createElement("p");
        lastUpdate.innerText = "Last updated on: "+lastUpdateOn;

        tempInfo.append(cityName, temp, h2, lastUpdate);
    }


    const subInfo = document.createElement("div");
    subInfo.setAttribute("id", "sub-info");

    {
        const subInfo1 = document.createElement("div");
        subInfo1.setAttribute("id", "sub-info-1");
        {
            const heading4 = document.createElement("h4");
            heading4.innerText = "Feels Like";

            const heading1 = document.createElement("h1");
            heading1.innerText = feelsLike;
            const sup = document.createElement("sup");
            sup.innerText = "°C"
            heading1.append(sup);

            subInfo1.append(heading4,heading1);
        }

        const subInfo2 = document.createElement("div");
        subInfo2.setAttribute("id", "sub-info-2");
        {
            const heading4 = document.createElement("h4");
            heading4.innerText = "Wind Speed";

            const heading1 = document.createElement("h1");
            heading1.innerText = windSpeed;
            const sup = document.createElement("sup");
            sup.innerText = "kmph"
            heading1.append(sup);

            subInfo2.append(heading4,heading1);
        }

        const subInfo3 = document.createElement("div");
        subInfo3.setAttribute("id", "sub-info-3");
        {
            const heading4 = document.createElement("h4");
            heading4.innerText = "Humidity";

            const heading1 = document.createElement("h1");
            heading1.innerText = humidity;
            const sup = document.createElement("sup");
            sup.innerText = "g/m3"
            heading1.append(sup);

            subInfo3.append(heading4,heading1);
        }

        const subInfo4 = document.createElement("div");
        subInfo4.setAttribute("id", "sub-info-4");
        {
            const heading4 = document.createElement("h4");
            heading4.innerText = "UV";

            const heading1 = document.createElement("h1");
            heading1.innerText = uv;
            const sup = document.createElement("sup");
            sup.innerText = "mW/m^2"
            heading1.append(sup);

            subInfo4.append(heading4,heading1);
        }

        const subInfo5 = document.createElement("div");
        subInfo5.setAttribute("id", "sub-info-5");
        {
            const heading4 = document.createElement("h4");
            heading4.innerText = "Gust";

            const heading1 = document.createElement("h1");
            heading1.innerText = gust;
            const sup = document.createElement("sup");
            sup.innerText = "kmph"
            heading1.append(sup);

            subInfo5.append(heading4,heading1);
        }

        const subInfo6 = document.createElement("div");
        subInfo6.setAttribute("id", "sub-info-6");
        {
            const heading4 = document.createElement("h4");
            heading4.innerText = "Local Time";

            const heading3 = document.createElement("h3");
            heading3.innerText = localTime;

            subInfo6.append(heading4,heading3);
        }

        const subInfo7 = document.createElement("div");
        subInfo7.setAttribute("id", "sub-info-7");
        {
            const heading4 = document.createElement("h4");
            heading4.innerText = "Time Zone";

            const heading2 = document.createElement("h2");
            heading2.innerText = timeZone;
            
            subInfo7.append(heading4,heading2);
        }

        subInfo.append(subInfo1, subInfo2, subInfo3, subInfo4, subInfo5, subInfo6, subInfo7);
    }

    container.append(tempInfo, subInfo);
    canvas.append(container);

}

export default weatherDataHandler;