// Get all the buttons and convert them into an array
const buttons = Array.from(document.querySelectorAll('.highlightable-li1'));
buttons[0].classList.add('highlighted'); //defaults it to first button
// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove the 'highlighted' class from all buttons
    buttons.forEach(b => b.classList.remove('highlighted'));
    
    
    // Add the 'highlighted' class to the clicked button
    button.classList.add('highlighted');
  });
});

 
function lowerDownFunction() {
  let ContactusWindow = document.getElementById("contactUsLog-contents");
  let icon = document.getElementById("window");
  
  if (ContactusWindow.classList.contains("contact1")) {
    ContactusWindow.classList.remove("contact1");
    ContactusWindow.classList.add("contact2");
    icon.innerHTML = "Close";
  } else {
    ContactusWindow.classList.remove("contact2");
    ContactusWindow.classList.add("contact1");
    icon.innerHTML = "Chat";
  }
}