import { placeName } from "../index.js";

const backgroundImageHandler = async () =>{
    /* 
        https://www.geeksforgeeks.org/how-to-update-properties-of-pseudo-element-after-and-before-using-javascript/
        styleSheets[] -> array of styleSheets, index-wise attached to the html doc, 
        cssRules[] -> array of css elements, index-wise inside the .css file     
    */

    /* check if the place is already there in session storage */
    let placeBackgroundImage = sessionStorage.getItem(placeName.value);

    if (placeBackgroundImage) {
        /* If exists then render immediately*/
        const anyCssElement = document.styleSheets[0].cssRules[2];
        anyCssElement.style.backgroundImage = `url(${placeBackgroundImage})`;
    }
    else {
        /* If not then hit the endpoint */
        try {
            const placeURL = `https://api.pexels.com/v1/search?query=${placeName.value}&per_page=1`;
            const requestOptions = {
                method: "GET",
                headers: {
                    Authorization: "ucMzPk6O4eO99NHCLQmLkuLtV1ezTflevh8pTs8Ddp8uitDFpmBcElg8"
                }
            }

            const imageRes = await fetch(placeURL, requestOptions);
            const imageData = await imageRes.json();
            console.log(imageData);
            if (imageData.photos.length===0) placeBackgroundImage = "https://images.unsplash.com/photo-1637633059043-949f40c73784?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
            else placeBackgroundImage = imageData.photos[0].src.landscape;

            sessionStorage.setItem(placeName.value, placeBackgroundImage);

            const anyCssElement = document.styleSheets[0].cssRules[2];
            anyCssElement.style.backgroundImage = `url(${placeBackgroundImage})`;

        } catch (err) {
            console.log(err);
        }
    }
}

export default backgroundImageHandler;