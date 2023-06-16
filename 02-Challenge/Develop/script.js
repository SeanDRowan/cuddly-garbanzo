// Assignment Code
var generateBtn = document.querySelector("#generate");
let letters ="abcdefghijklmnopqustuvwxyz";
let numbers ="12345abcdefghijklmnopqustuvwxyz67890";
let spec = "!@#$abcdefghijklmnopqustuvwxyz%^&*";
let all = "!@#$1234567890abcdefghijklmnopqustuvwxyz$%^&*"

  var passL =prompt("choose password length")
  alert("your password will be "+ passL + " characters long")

  var capL =prompt ("Capital letters? Y/N").toUpperCase(); 
 
  var num= prompt ("Include numbers? Y/N").toUpperCase(); 

  var specC = prompt ("include special characters? Y/N").toUpperCase(); 

console.log(capL,num,specC)
function generatePassword(){
  let password1 = "";
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
  console.log(password1)
    }
generatePassword();



//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


//return pwOptions
