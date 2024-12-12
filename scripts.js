// fetch an image from Dog ceo

async function randoDog() {
    // fecth and return imageURL data
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    // convert data to img
    const imageURL = data.message;

    // target the img to update the src
    const imageElement = document.getElementById("doggo");
    imageElement.src = imageURL;
}; 

document.addEventListener("DOMContentLoaded", randoDog)