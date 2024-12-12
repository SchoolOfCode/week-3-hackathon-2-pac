// fetch an image from Dog ceo

async function randoDog() {
    try {
    // fecth and return imageURL data
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    // convert data to img
    const imageURL = data.message;

    // target the img to update the src
    const imageElement = document.getElementById("doggo");
    imageElement.src = imageURL;
    } catch (error) {
        console.error(`Error fetching data:`, error);
    };
};

document.addEventListener("DOMContentLoaded", randoDog)





const buttonNewDoggo = document.getElementById("newDoggo");
buttonNewDoggo.addEventListener("click", randoDog);

// const hoverButtonNewDoggo = document.getElementById("newDoggo");
// buttonNewDoggo.addEventListener("hover", hoverButton);


function clickBark() {
    let barkingArray = [
        "Bark1.mp3",
        "Bark2.mp3",
        "Bark3.mp3",
        "Bark4.mp3", 
        "Bark5.mp3"
    ];
    
    let randomNumber = Math.floor(Math.random() * (barkingArray.length));
    let doggoSound = barkingArray[randomNumber];
    console.log(doggoSound);
    let audio = new Audio(doggoSound);
    audio.play();
};

const buttonBark = document.getElementById("newDoggo");
buttonBark.addEventListener("click", clickBark);