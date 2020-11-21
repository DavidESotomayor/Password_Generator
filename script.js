// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  function generatePassword() {
    var passwordLength = prompt("How long would you like your password to be?", "Must be between 8 and 128 characters");

    var specialCharacter = prompt("What character types would you like in your password?", "lowercase, uppercase, numeric, special characters");

    
  }




  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
