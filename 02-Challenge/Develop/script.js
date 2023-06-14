// Assignment Code
var generateBtn = document.querySelector("#generate");


  var letters= [ 'A','B','C']
  var numbers= [ 1,2,3,4,5,6,7,8,9]
  var spec = ['!','@','#','$','%','&','*']

function generatePassword(){

  var passL =prompt("choose password length")
// lists random numbers from the numbers array until if reaches passL
for (var i= 0; i < passL; i++){ 
  var index = Math.floor(Math.random() * passL);
  var RN = numbers[index];
  console.log( numbers[RN])
  }
  var characters = prompt( "characters availbalbe")
}

generatePassword();
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
