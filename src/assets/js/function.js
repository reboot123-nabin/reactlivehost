var checkBox = document.getElementById("myCheck");
// Get the output text
var text = document.getElementById("text");

// If the checkbox is checked, display the output text
if (checkBox.checked == true){
  text.style.backgroundColor = "white";
} else {
  text.style.display = "white";
}