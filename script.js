// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterTypeArray = [];
var characterObject = {
    lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    numeric:   ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    special:   ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
}


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
        alert("The password will be " + passwordLength + " characters long")
        return passwordLength;
      }
    }

    for (var i = 0; i < 1;) {
      var characterType = prompt("Which character type would you like in your password?", "lowercase, uppercase, numeric, special");

      if(characterType == null) {
          throw alert("Program canceled");
      }

      if ((characterType.toLowerCase() === "lowercase") || (characterType.toLowerCase() === "uppercase") || (characterType.toLowerCase() === "numeric") || (characterType.toLowerCase() === "special")) {
        characterTypeArray.push(characterType.toLowerCase());

        var confirmResponse = confirm("Would you like to enter another character type?");
        if (!confirmResponse) {
        break;
        }
      } else {
        alert("Entered invalid character type")
      }
    }


    for (var i = 0; i < passwordLength; i++) {

    }



  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
