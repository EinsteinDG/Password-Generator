// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ',', '^', '_', '`', '{', '}', '|', '~', '"'];
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var superArray = []; // 


// Write password to the #password input
function writePassword() {
  let passLenght = prompt("Please, choose password lenght (8-128 digits)");
  console.log(passLenght);
  if(passLenght === false){
    console.log("This is not an answer")
  }
  if ((passLenght >= 9 && passLenght <= 128) && (!isNaN(passLenght))) {
    console.log('Please continue');
} else {
    console.log('wrong, try again');
    alert("Wrong lenght, please try again.");
  }
  
  //var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
