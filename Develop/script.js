// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Write password to the #password input
function writePassword() {

  // Prompts confirms for 4 catagories
  var hasLowercase = window.confirm("Would you like your password to have lowercase letters?");
  var hasUppercase = window.confirm("Would you like your password to have uppercase letters?");
  var hasSpecialChar = window.confirm("Would you like the password to have special characters?");
  var hasNumber = window.confirm("Would you like the password to have numbers?");

  // Password length checker
  var passwordLength = parseInt(window.prompt("How many characters would you like your password to be? Please choose between 8 and 128."));

  if (passwordLength < 8) {
    window.alert("Password length must be greater than 8 characters.");
  }

  if (passwordLength > 128) {
    window.alert("Password length must be less than 128 characters.");
  }

  // Number of window confirms that are true
  var numTrue = ([hasLowercase, hasUppercase, hasSpecialChar, hasNumber].filter(v => v).length);

  // Created empty arrays for each if statement
  var lowerArray = [];
  var upperArray = [];
  var specialArray = [];
  var numberArray = [];
  
  if(hasLowercase === true) {
    while(lowerArray.length < passwordLength) {
      var randomIndex = Math.floor(Math.random() * (lowerCasedCharacters.length));
      var character = lowerCasedCharacters[randomIndex];
      lowerArray.push(character);
    }
  }

  if(hasUppercase === true) {
    while(upperArray.length < passwordLength) {
      var randomIndex = Math.floor(Math.random() * (upperCasedCharacters.length));
      var character = upperCasedCharacters[randomIndex];
      upperArray.push(character);
    }
  }

  if(hasSpecialChar === true) {
    while(specialArray.length < passwordLength) {
      var randomIndex = Math.floor(Math.random() * (specialCharacters.length));
      var character = specialCharacters[randomIndex];
      specialArray.push(character);
    }
  }

  if(hasNumber === true) {
    while(numberArray.length < passwordLength) {
      var randomIndex = Math.floor(Math.random() * (numericCharacters.length));
      var character = numericCharacters[randomIndex];
      numberArray.push(character);
    }
  }

  // Created an array for each catagory with random values and then trimmed each down to a fraction of the requested password length
  lowerArray.length = passwordLength/numTrue;
  upperArray.length = passwordLength/numTrue;
  specialArray.length = passwordLength/numTrue;
  numberArray.length = passwordLength/numTrue;

  // Added each array into one array
  var passwordConcat = [];
  var passwordArray = passwordConcat.concat(lowerArray, upperArray, specialArray, numberArray);

  console.log(passwordArray.join(''));
  console.log(passwordArray.length);

  // Shuffle around the characters in array
  function shuffle(passwordArray) {
    passwordArray.sort(() => Math.random() - 0.5);
    return passwordArray;
  }

  var passwordShuffle = shuffle(passwordArray);
  console.log(passwordShuffle.join(''));

  var passwordText = document.querySelector("#password");
  passwordText.value = passwordShuffle.join('');
}

// push event listener to generate button
generateBtn.addEventListener("click", writePassword);