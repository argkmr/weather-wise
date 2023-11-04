const removePrevTempHTML = () => {
    const tempInfo = document.getElementById("tempInfo");
    const subInfo = document.getElementById("sub-info");

    if (tempInfo && subInfo) {
        tempInfo.remove();
        subInfo.remove();
    }
}

export default removePrevTempHTML;