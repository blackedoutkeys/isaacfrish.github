//data arrays
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var actualPassword = "";


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Prompt/alerts list
function promptList () {
  //empty array for pushing all data into
  var emptyArray = [];
var userLength = prompt("How many characters would you like your password to include? (Choose a number between 8-128)");
console.log("user length = " + userLength);


//check in place where user gets alert if password doesnt
  if (userLength < 8 || userLength > 128) {
    alert("Please adjust length of password to be between 8-128 characters!");
  }
  else {
    //prompts user if they would like numbers in their password Ok for yes cancel for no
      var userNumber= confirm("Please click OK if you would like numbers included in your password.");
      console.log("user number = " + userNumber);


    //prompts user if they would like upper case letters in their password Ok for yes cancel for no
      var userUpper = confirm("Please click OK if you would like uppercase letters included in your password.");
      console.log("user uppper case = " + userUpper); 

    //prompts user if they would like lower case letters in their password Ok for yes cancel for no
      var userLower = confirm("Please click OK if you would like lowercase letters included in your password.");
      console.log("user lower case = " + userLower); 

    //prompts user if they would like symbols in their password Ok for yes cancel for no
      var userSymbol = confirm("Please click OK if you would like symbols included in your password.");
      console.log("user symbol = " + userSymbol); 
      


      //if statements for following push true or OK through the array
    if (userNumber) {
      //pushses number array into empty 
      Array.prototype.push.apply(emptyArray, numbers);
    }
      console.log(emptyArray);

    if (userLower) {
            //pushses lower letter array into empty 
      Array.prototype.push.apply(emptyArray, lowerLetters);
    }
      console.log(emptyArray);

    if (userSymbol) {
            //pushses symbol array into empty 
      Array.prototype.push.apply(emptyArray, symbols);
    }
      console.log(emptyArray);

    if (userUpper) {
            //pushses upper letters array into empty 

      Array.prototype.push.apply(emptyArray, upperLetters);
    }
      //checks length of final empty array and creates password from options chosen by user
      for (let index = 0; index < userLength; index++) {
        let passwordCharacters = Math.floor(Math.random () * emptyArray.length);
          console.log(passwordCharacters);
          actualPassword += emptyArray[passwordCharacters];
      //prints actual password in console
      console.log(actualPassword);
    }
    //shows final array actual password was pulled from in console
    console.log(emptyArray);
  }
  return actualPassword;
}

//Password Generation Function Order List
function generatePassword() {
  var userPassword = promptList();
  document.getElementById("password").innerHTML = userPassword;
  actualPassword = "";
  return userPassword;
  }