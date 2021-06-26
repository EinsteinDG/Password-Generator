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
  if (passLenght === false) {
    console.log("This is not an answer")
  }
  if ((passLenght >= 9 && passLenght <= 128) && (!isNaN(passLenght))) {
    console.log('Please continue'); alert("Please continue"); choosePassType();

  } else {
    console.log('Not a number');
    alert("This is not a number, please try again.");
  }


  //var password = generatePassword();



  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function choosePassType() {

  let passType = confirm("Do you want to include (a-z) lower case letter?");
  console.log(passType);
  if (passType === true) {
    console.log("lowercase required"); alert("Passwrod is getting stronger!");
    const masterArray = lowercaseArray;
    console.log(masterArray);
  }
  else {
    console.log("Not required");
    alert("password will no carry lower case letters");

  }
  let passType2 = confirm("Do you want to include (A-Z) Upper case letters?");
  console.log(passType2);
  if (passType2 === true) {
    console.log("upper case required"); alert("Your password will be unbreakable!"); console.log(uppercaseArray);
  }

  else {
    console.log("No upper case letter required");
    alert("password will no carry upper case letters");
  }
}




// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
