const removePrevTempHTML = () => {
    const tempInfo = document.getElementById("tempInfo");
    const subInfo = document.getElementById("sub-info");

    const container = document.getElementById("container");

    if (container) {
        container.remove();
    }
}

export default removePrevTempHTML;