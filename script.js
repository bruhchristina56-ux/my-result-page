
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("studentName").value.trim();
  const email = document.getElementById("studentEmail").value.trim();

  if (!name || !email) {
    alert("Please enter your name and email.");
    return;
  }

  // Display the entered name
  document.getElementById("displayName").textContent = name;

  // Reset loading animation each time
  const progress = document.querySelector(".loading-progress");
  progress.style.animation = "none";
  void progress.offsetWidth;
  progress.style.animation = "progress 3s linear forwards";

  // Show loading screen
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("loadingPage").classList.remove("hidden");

  // Display result after 3 seconds
  setTimeout(function() {
    document.getElementById("loadingPage").classList.add("hidden");
    document.getElementById("resultPage").classList.remove("hidden");

    window.scrollTo(0, 0);
  }, 3000);
});

function goHome() {
  document.getElementById("resultPage").classList.add("hidden");
  document.getElementById("homePage").classList.remove("hidden");

  window.scrollTo(0, 0);
}