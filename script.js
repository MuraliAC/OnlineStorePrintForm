
function handleChange() {
    const selectedCity = document.getElementById("city").value;
    let change = 0;
    const parent = document.getElementById("inputbox");
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild)
    }

    if (selectedCity === "Chennai") {
        change = 15;
    } else if (selectedCity === "Coimbatore" || selectedCity === "Madurai") {
        change = 12;
    } else if (selectedCity === "Salem") {
        change = 8;
    } else if (selectedCity === "Tiruchirappalli") {
        change = 6;
    } else {
        change = 2;
    }


    for (let i = 0; i < change; i++) {
        let element = document.createElement("input");
        document.getElementById('inputbox').appendChild(element);
    }


}