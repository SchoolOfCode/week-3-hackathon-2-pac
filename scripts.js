// Hardcoded array of joke objects
// Each joke object has a unique id

// replace current joke libary with an api that takes us to a random joke from the internet

// new function to fetch joke

// turn the recived request into json object


// fish the joke from the json 
// display the joke with the new joke button



// Main function to retrieve and display a new joke
async function getAndDisplayNewJoke() {
    const joke = await retrieveJoke();
    displayJoke(joke);
  }
  
  // Function to retrieve a random joke
  async function retrieveJoke() {
  
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json"
      },
    });  
    const jokeData = await response.json();
    return jokeData
  };
  
  // Function to update the DOM with the provided joke
  function displayJoke({ joke }) {
    const jokeElement = document.getElementById("joke");
    jokeElement.textContent = joke;
  }
  
  // Waits for the DOM to be fully loaded and then displays an initial joke.
  document.addEventListener("DOMContentLoaded", getAndDisplayNewJoke);
  
  // Retrieves the "new joke" button
  const newJokeButton = document.getElementById("newJokeBtn");
  
  // Sets up a click event listener to fetch and display a new joke upon clicking the newJokeButton.
  newJokeButton.addEventListener("click", getAndDisplayNewJoke);
  
  //DOG STUFF
  
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
  
  
  
  let hoverButtonNewDoggo = document.getElementById("bone");
  
  function hoverDoggo() {
    hoverButtonNewDoggo.src = "fetch.png";
  };
  function unHoverDoggo() {
    hoverButtonNewDoggo.src = "boneButtonTrim.png";
  };
  
  hoverButtonNewDoggo.addEventListener("mouseover", hoverDoggo);
  hoverButtonNewDoggo.addEventListener("mouseout", unHoverDoggo);
  
  
  
  
  
  
  