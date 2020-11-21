// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  function generatePassword() {

    for (var i = 0; i < 1;) {
      var passwordLength = prompt("How long would you like your password to be?", "Must be a number between 8 and 128 characters");

      if (isNaN(passwordLength) || (passwordLength < 8 || passwordLength > 128) && (passwordLength != null)){
        alert ("Password must be a number between 8 and 128 characters")
      } else if (passwordLength == null){
        throw alert("Program Canceled")
      } else {
        passwordLength = parseInt(passwordLength)
        break;
      }
    }

    
    // var specialCharacter = prompt("What character types would you like in your password?", "lowercase, uppercase, numeric, special characters");
    

  }




  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
