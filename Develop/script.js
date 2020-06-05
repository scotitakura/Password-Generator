// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

console.log(specialCharacters);
console.log(numericCharacters);
console.log(lowerCasedCharacters);
console.log(upperCasedCharacters);

// Write password to the #password input
function writePassword() {
  var hasLowercase = window.confirm("Would you like your password to have lowercase letters?");
  var hasUppercase = window.confirm("Would you like your password to have uppercase letters?");
  var hasSpecialchar = window.confirm("Would you like the password to have special characters?");
  var hasNumber = window.confirm("Would you like the password to have numbers?");

  var passwordLength = parseInt(window.prompt("How many characters would you like your password to be between 8 and 128?"));

  if (passwordLength < 8) {
    window.alert("Password length must be greater than 8 characters.");
  }

  if (passwordLength > 128){
    window.alert("Password length must be less than 128 characters.");
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);