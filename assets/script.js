// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Write password to the #password input
function writePassword() {

  // Prompts confirms for 4 catagories
  window.alert("Your total password length from the next 4 prompts must add up to be between 8 and 128 characters (0 is an acceptable value).")
  var numLowercase = parseInt(window.prompt("How many lower case characters do you want in your password?"));
  var numUppercase = parseInt(window.prompt("How many upper case characters do you want in your password?"));
  var numSpecialChar = parseInt(window.prompt("How many special characters do you want in your password?"));
  var numNumber = parseInt(window.prompt("How many numbers do you want in your password?"));

  // Password length total
  var passwordLength = numLowercase + numUppercase + numSpecialChar + numNumber;

  if (passwordLength >= 8 && passwordLength <= 128) {
    window.alert("Password is between 8 and 128 characters at " + passwordLength + " characters.");
  }

  else if (passwordLength < 8) {
    window.alert("Password length must be greater than 8 characters.");
  }

  else if (passwordLength > 128) {
    window.alert("Password length must be less than 128 characters.");
  }

  // Created empty arrays for each if statement
  var lowerArray = [];
  var upperArray = [];
  var specialArray = [];
  var numberArray = [];
  
  if(numLowercase > 0 && passwordLength <= 128) {
    while(lowerArray.length < numLowercase) {
      var randomIndex = Math.floor(Math.random() * (lowerCasedCharacters.length));
      var character = lowerCasedCharacters[randomIndex];
      lowerArray.push(character);
    }
  }

  if(numUppercase > 0 && passwordLength <= 128) {
    while(upperArray.length < numUppercase) {
      var randomIndex = Math.floor(Math.random() * (upperCasedCharacters.length));
      var character = upperCasedCharacters[randomIndex];
      upperArray.push(character);
    }
  }

  if(numSpecialChar > 0 && passwordLength <= 128) {
    while(specialArray.length < numSpecialChar) {
      var randomIndex = Math.floor(Math.random() * (specialCharacters.length));
      var character = specialCharacters[randomIndex];
      specialArray.push(character);
    }
  }

  if(numNumber > 0 && passwordLength <= 128) {
    while(numberArray.length < numNumber) {
      var randomIndex = Math.floor(Math.random() * (numericCharacters.length));
      var character = numericCharacters[randomIndex];
      numberArray.push(character);
    }
  }

  // Added each array into one array
  var passwordConcat = [];
  var passwordArray = passwordConcat.concat(lowerArray, upperArray, specialArray, numberArray);

  // Shuffle around the characters in array
  function shuffle(passwordArray) {
    passwordArray.sort(() => Math.random() - 0.5);
    return passwordArray;
  }

  var passwordShuffle = shuffle(passwordArray);

  var passwordText = document.querySelector("#password");
  passwordText.value = passwordShuffle.join('');
}

// push event listener to generate button
generateBtn.addEventListener("click", writePassword);