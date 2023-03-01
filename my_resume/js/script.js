var password = "hyi";

function checkPassword() {
  var input = document.getElementById("password").value;
  if (input == password) {
    document.getElementById("content").style.display = "block";
    document.getElementById("error-message").style.display = "none";
  } else {
    document.getElementById("content").style.display = "none";
    document.getElementById("error-message").style.display = "block";
  }
}