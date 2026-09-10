// simple form alert (no backend yet)
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent! (Demo only)");
});