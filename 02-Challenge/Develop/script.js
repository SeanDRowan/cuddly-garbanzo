// Assignment Code
var generateBtn = document.querySelector("#generate");

const options ={
letters: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
lettersLc: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
numbers: [ 1,2,3,4,5,6,7,8,9],
specl: ['!','@','#','$','%','&','*'],
}

var pwOptions = {
  length: passL,
  hasSpecial: specC,
  hasNumbers: num,
  hasCapital: capL,
}

  var passL =prompt("choose password length")
  alert("your password will be "+ passL + " characters long")

  var capL =prompt ("Include Capital letters? Y/N").toUpperCase(); 
 
  var num= prompt ("Include numbers? Y/N").toUpperCase(); 

  var specC = prompt ("include special characters? Y/N").toUpperCase(); 


function generatePassword(){
  let LC = "";
  for (lettersLc in options) {
    LC += options.lettersLc [Math.floor(Math.random() * passL)];
    console.log(LC)
  }
  let UC = "";
  for (letters in options){ UC += options.letters [Math.floor(Math.random() * passL)];
    console.log(UC)
  }
  let num = "";
  for (numbers in options){ num += options.numbers [Math.floor(Math.random() * passL)];
    console.log(num)
  }
  let SC ="";
  for (specl in options){ SC += options.specl [Math.floor(Math.random() * passL)];
    console.log(SC)
  }
  if (capL == "Y" && num =="N" && specC== "N")
  {
  for (numbers in options ) LC += options.letters [Math.floor(Math.random() * passL)];
    console.log(UC)
   var password1 = [LC].concat ([UC])
  console.log(password1)
  }else{
    for (numbers in options ) LC += options.letters [Math.floor(Math.random() * (0.5* passL))];
   console.log(password1)
  }
    }
generatePassword();
// if capital letters only - RCL
//if lowercase letter
// if numbers - RN
// if spec characters -SC
//lists random numbers from the numbers array until if reaches passL

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


//return pwOptions
