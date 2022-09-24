const passwordField = document.querySelector("#password");
const confirmPasswordField = document.querySelector("#confirm_password");
const pwd_message = document.querySelector("#pass_msg");
let pwdVal;

passwordField.addEventListener("input",(e) => {
    if (e.target.value.length < 8) {
      pwd_message.style.display = "block";
      pwd_message.style.color = "red";
      passwordField.style.border = "1px solid red";
      pwd_message.textContent = "*password must be 8 characters long";
    } else {
      pwd_message.style.display = "none";
      passwordField.style.border = "1px solid green";
    }
    pwdVal = e.target.value;
  },
  false
);

confirmPasswordField.addEventListener("input", (e) => {
  if (pwdVal === e.target.value) {
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

//TODO
//refactor code
