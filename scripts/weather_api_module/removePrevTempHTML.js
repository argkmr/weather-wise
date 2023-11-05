const removePrevTempHTML = () => {
    const welcome = document.getElementById("welcome");
    const container = document.getElementById("container");

    welcome ? welcome.remove() : container.remove();

    // if (welcome) welcome.remove();
    // else if (container) container.remove();
}

export default removePrevTempHTML;