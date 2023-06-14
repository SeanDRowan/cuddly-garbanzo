// Assignment Code
var generateBtn = document.querySelector("#generate");


  const letters= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  const lettersLc= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const numbers= [ 1,2,3,4,5,6,7,8,9]
  const spec = ['!','@','#','$','%','&','*']

  var passL =prompt("choose password length")
  alert("your password will be "+ passL + " characters long")

  var capL =prompt ("Include Capital letters? Y/N").toUpperCase(); 
 
  var numb= prompt ("Include numbers? Y/N").toUpperCase(); 

  var specC = prompt ("include special characters? Y/N").toUpperCase(); 


function generatePassword(){


  let LCL = [];
  for (var x= 0; x < passL; x++) {
    LCL += lettersLc [Math.floor(Math.random() * lettersLc.length)];
  }
  let RCL = [];
    for (var x= 0; x < passL; x++) {
      RCL += letters [Math.floor(Math.random() * letters.length)];
    }
  let RN =[]
    for (var y= 0; y < passL; y++){
      RN += numbers [Math.floor(Math.random() * numbers.length)]
      }
  let RSC= []
    for (var z= 0; z < passL; z++){
      RSC += spec [Math.floor(Math.random() * spec.length)]
      }


if (capL === 'N' && numb === 'N' && specC === 'N') {
  password = LCL
    alert ("your password will only use lowercase letters")
 }
else if ( capL === 'Y' && numb === 'N' && specC === 'N'){
  password= LCL.concat(RCL)
  console.log(password)
  alert ("your password will use uppercase and lowercase letters")
         }
         else if ( capL === 'Y' && numb === 'Y' && specC ==='N'){
         password = LCL.concat(RCL,RN)
         console.log (password)
         alert ("your password will use letters and numbers")
         }
         else if ( capL === 'N' && numb === 'Y' && specC ==='Y'){
        password = LCL.concat(RN,RSC)
        console.log (password)
        alert ("your password will use numbers and special characters")
         }
         else if (capL === 'N' && numb === 'N' && specC === 'Y'){
        password = LCL.concat(RSC)
        console.log (password)
        alert ("your password will use lower case letters and special characters")
         }else{
        password = LCL.concat(RCL,RN,RSC)
        console.log(password)
        alert ("your password will use all available characters")
         }
      }
      
// if capital letters only - RCL
//if lowercase letters
// if numbers - RN
// if spec characters -SC
//lists random numbers from the numbers array until if reaches passL

generatePassword();

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
