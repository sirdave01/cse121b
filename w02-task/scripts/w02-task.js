/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Osigwe Uchechukwu Davidcaleb";
let currentYear = 2023;
let profilePicture = "images/mypicture.jpg.jpg";




/* Step 3 - Element Variables */
const nameElement = document.getElementById("name"); //getting the name element from HTML
const foodElement = document.getElementById("food"); //getting the food element from the HTML
const yearElement = document.querySelector("#year"); //getting the year element from the HTML
const imageElement = document.querySelector("img"); //getting the image element fron the HTML




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`; //replacing the gotten name element on HTML with Script
yearElement.textContent = currentYear; //replacing the gotten year element on HTML with script
imageElement.setAttribute("src", `${profilePicture}`); //replacing the gotten img element on HTML with script
imageElement.setAttribute("alt", `Profile Image of ${fullName}`); //alternative for the img element


/* Step 5 - Array */

let favoriteFood = ["rice", "beans", "indomie"]; //declaring an array
foodElement.textContent = favoriteFood; // modifying the HTML with the id of food
let moreFood = "Yam";
favoriteFood.push(moreFood);// to add the food to the existing array
foodElement.innerHTML += `<br>${favoriteFood}`; //appending the array with  linebrek
favoriteFood.shift(); // to remove the first item on the array
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop(); //to remove the last item on the array
foodElement.innerHTML += `<br>${favoriteFood}`;






