// Assignment Code
var generateBtn = document.querySelector("#generate");
//setting up variables
let letters ="abcdefghijklmnopqustuvwxyz";
let numbers ="12345abcdefghijklmnopqustuvwxyz67890";
let spec = "!@#$abcdefghijklmnopqustuvwxyz%^&*";
let all = "!@#$1234567890abcdefghijklmnopqustuvwxyz$%^&*"
let password1 = "";

//Generate password function
function generatePassword(){
  //Conditionals for password length/Caps/numbers/ and special character promts
  var passL =prompt("How long will your password be? Choose a number between 8-123")
  if ( 8> passL){
  alert ( "please choose a number between 8-128")
    generatePassword()
  }else if ( passL > 128) {
  alert ( "please choose a number between 8-128")
   generatePassword()
  }
  else{alert("your password will be "+ passL + " characters long")
  var capL =prompt ("Capital letters? Y/N").toUpperCase(); 
  var num= prompt ("Include numbers? Y/N").toUpperCase(); 
  var specC = prompt ("include special characters? Y/N").toUpperCase();} 
// conditionals for user choice to prompts + "for" loops to pull random characcters from selected variable strings
  if (capL=== "N" && num === "N" && specC === "N"){
  for (var i =0; i < passL; i++) {
    password1  = password1 + letters.charAt(Math.floor(Math.random() * Math.floor(letters.length -1)));
  } alert("Your password will contain lowercase letters only")
} else if (capL === "Y" && num ==="N" && specC=== "N"){for (var i =0; i < passL; i++) {
  password1 = password1 + letters.charAt(Math.floor(Math.random() * Math.floor(letters.length -1))).toUpperCase();
} alert("Your password will contain capital letters")
} else if (capL === "N" && num ==="Y" && specC=== "N"){for (var i =0; i < passL; i++) {
  password1 = password1 + numbers.charAt(Math.floor(Math.random() * Math.floor(letters.length -1)));
}alert("Your password will contain numbers")
} else if (capL === "N" && num ==="N" && specC=== "Y"){for (var i =0; i < passL; i++) {
  password1 = password1 + spec.charAt(Math.floor(Math.random() * Math.floor(letters.length -1)));
}alert("Your password will contain special characters")
}else if (capL === "Y" && num ==="Y" && specC=== "N"){for (var i =0; i < passL; i++) {
  password1 = password1 + numbers.charAt(Math.floor(Math.random() * Math.floor(letters.length -1))).toUpperCase();
}alert("Your password will contain capital letters and numbers")
}else if (capL === "Y" && num ==="N" && specC=== "Y"){for (var i =0; i < passL; i++) {
  password1 = password1 + spec.charAt(Math.floor(Math.random() * Math.floor(letters.length -1))).toUpperCase();
}alert("Your password will contain capital letters and special characters")
}else if (capL === "N" && num ==="Y" && specC=== "Y"){for (var i =0; i < passL; i++) {
  password1 = password1 + all.charAt(Math.floor(Math.random() * Math.floor(letters.length -1)));
}alert("Your password will contain numbers and special characters")
} else if (capL === "Y" && num ==="Y" && specC=== "Y"){for (var i =0; i < passL; i++) {
  password1 = password1 + all.charAt(Math.floor(Math.random() * Math.floor(letters.length -1))).toUpperCase();
}alert("Your password will contain all available characters")
}else{
  alert( "invalid input") 
} 
} 
//Write password to the #password input
function writePassword() {
  generatePassword();
  let password = password1

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


