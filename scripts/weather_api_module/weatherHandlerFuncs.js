import removePrevTempHTML from "./removePrevTempHTML.js";
import weatherDataHandler from "./weatherDataHandler.js";

const weatherHandlerFuncs = () => {
    removePrevTempHTML();
    weatherDataHandler();
}

export default weatherHandlerFuncs;