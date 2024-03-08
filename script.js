//Function to generate random automobile brand
function changeBrand() {
    const brands = ["BENTLY", "FERRARI", "BMW", "TOYOTA", "TESLA", "AUDI"];
    const randomBrand = brands[Math.floor(Math.random() * brands.length)];

    //update random brand in HTML 
    document.getElementById("heading").textContent = randomBrand;

}

//Event listener triggers on mouse click
document.getElementById("changeButton").addEventListener("click", changeBrand);