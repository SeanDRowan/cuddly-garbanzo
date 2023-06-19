// Assignment Code
var generateBtn = document.querySelector("#generate");
//setting up variables
let capLetters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lowercaseL = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let numbers = ["1","2","3","4","5","7","8","9","0"]
let spec = ["!","@","#","$","%","^","&","*"];



//Generate password function
function generatePassword(){
 
  let password1 = [];
  var characterBank = [];
 // ends function if user choose a length too long or too short
  var passL =prompt("How long will your password be? Choose a number between 8-128")
  if ( passL < 8 || passL > 128){
  alert ( "please choose a number between 8-128")
  }
// confirm boxes for the different variables
  var capL = confirm("Capital letters?")
  var lowerL = confirm("Lowercase letters?")
  var numbersC =confirm("Numbers?")
  var specC = confirm("Special Characters?")
// considtionals to verify that user has entered choices + pass chosen arrays into characterbank
  if(!capL && !lowerL && !numbersC && !specC){
    alert('choose atleast one option')
  }
  if(capL){
    characterBank = characterBank.concat(capLetters)
  }
  if(lowerL){
    characterBank = characterBank.concat(lowercaseL)
  }
  if(numbersC){
    characterBank = characterBank.concat(numbers)
  }
  if(specC){
    characterBank = characterBank.concat(spec)
  }
  // for loop to pull random numbers from the newly created characterbank and push them into password1
  for (var i=0; i< passL; i++){
    var singleChar = characterBank[Math.floor(Math.random()* passL)]
    password1.push(singleChar)
  }
//ends function and changes "password1" array to a string
  return password1.join('')

}
//Write password to the #password input
function writePassword() {
 var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


