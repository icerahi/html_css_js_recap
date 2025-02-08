let password = "imranhasan";

if (password.length === 8) {
  console.log("Welcome");
} else if (password.length <= 8) {
  console.log("Password is too short!");
} else if (password.length >= 8) {
  console.log("Too Long Password!");
  console.log("Password should be 8 characters!");
} else {
  print("Please provide a password!!");
}
