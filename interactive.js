document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
  });

document.getElementById("changeText").addEventListener("click", function() {
    document.getElementById("myText").innerHTML = "New Text!";
  });

  document.getElementById("myElement").style.transition = "transform 2s";
  document.getElementById("myElement").style.transform = "translateX(100px)";

  fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Do something with the data
  });

document.getElementById("myForm").addEventListener("submit", function(event) {
    let input = document.getElementById("myInput").value;
    if (input === "") {
      console.log("Please enter something!");
      event.preventDefault(); // Prevent form submission
    }
  });

  window.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      // Do something when scrolled past 100 pixels
    }
  });