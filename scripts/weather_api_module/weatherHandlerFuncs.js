import removePrevTempHTML from "./removePrevTempHTML.js";
import weatherDataHandler from "./weatherDataHandler.js";

const weatherHandlerFuncs = () => {
    const welcome = document.getElementById("welcome");
    if (welcome) welcome.remove();
    
    removePrevTempHTML();
    weatherDataHandler();
}

export default weatherHandlerFuncs;