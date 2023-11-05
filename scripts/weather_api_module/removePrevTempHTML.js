const removePrevTempHTML = () => {
    const welcome = document.getElementById("welcome");
    const container = document.getElementById("container");

    welcome ? welcome.remove() : container.remove();
}

export default removePrevTempHTML;