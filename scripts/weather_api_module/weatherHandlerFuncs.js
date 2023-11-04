import removePrevTempHTML from "./removePrevTempHTML.js";
import weatherDataHandler from "./weatherDataHandler.js";

const weatherHandlerFuncs = () => {
    const welcome = document.getElementById("welcome");
    if (welcome) welcome.remove();

    const tempInfo = document.getElementById("tempInfo");
    const subInfo = document.getElementById("sub-info");

    if (tempInfo && subInfo) removePrevTempHTML();
    weatherDataHandler();
}

export default weatherHandlerFuncs;