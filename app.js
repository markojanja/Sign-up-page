const passwordField = document.querySelector("#password");
const confirmPasswordField = document.querySelector("#confirm_password");
const pwd_message = document.querySelector("#pass_msg");
let pwdValue;


function handlePasswordError(message){
  pwd_message.textContent = message;
  pwd_message.style.display = "block";
  pwd_message.style.color = "red";
  passwordField.style.border = "1px solid red";
}

passwordField.addEventListener("input",(e) => {
    const containsUpperCaseLetters = /(?=.*?[A-Z].*)/
    const containsDigits = /[(?=.*?[0-9].*/
    let password = e.target.value
    if(containsUpperCaseLetters.test(password)===false){
      handlePasswordError("Must contain at least one capital letter")
    }
    else if(!containsDigits.test(password)){
      handlePasswordError("Must contain at least one digit")
    }
    else if (password.length < 8) {
      handlePasswordError("must be at least 8 characters long")
    }
    else {
      pwd_message.style.display = "none";
      passwordField.style.border = "1px solid green";
    }
    pwdValue = password;
  },
  false
);

confirmPasswordField.addEventListener("input", (e) => {
  let confirmPassword = e.target.value
  if (pwdValue === confirmPassword) {
    pwd_message.style.display = "none";
    passwordField.style.border = "1px solid green";
    confirmPasswordField.style.border = "1px solid green";
  } else {
    pwd_message.style.display = "block";
    pwd_message.style.color = "red";
    passwordField.style.border = "1px solid red";
    confirmPasswordField.style.border = "1px solid red";
    pwd_message.textContent = "* passwords do not match";
  }
});

