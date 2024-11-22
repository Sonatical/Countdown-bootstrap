// Date of graduation
const graduationDate = new Date("May 18, 2026 00:00:00").getTime();

// Function to update countdown
function updateCountdown() {
    // Current date and time
    const now = new Date().getTime();
    
    // Distance between now and graduation date
    const distance = graduationDate - now;
    
    // Calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Target the element to display the countdown
    const timerElement = document.getElementById("timer");
    
    // If the timer element exists, update it
    if (timerElement) {
        // Display the countdown result
        timerElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        
        // If the countdown is complete, display the graduation message
        if (distance < 0) {
            clearInterval(countdown);
            timerElement.innerHTML = "Congratulations! Class of 2026 has graduated!";
        }
    } else {
        console.error("Element with ID 'timer' not found.");
    }
}

// Update the countdown every second
const countdown = setInterval(updateCountdown, 1000);

// Function to handle highlighting and navigation
function highlightSection(event) {
    // Prevent the default hyperlink behavior for now
    event.preventDefault();

    // Get the target section id
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    // Remove highlight from any previously highlighted section
    document.querySelectorAll(".highlight").forEach(el => el.classList.remove("highlight"));

    // Scroll to the target section and add highlight
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
        targetSection.classList.add("highlight");

        // Remove highlight and navigate after 1.5 seconds
        setTimeout(() => {
            targetSection.classList.remove("highlight");

            // Now allow the link navigation to happen
            window.location.hash = event.currentTarget.getAttribute("href");
        }, 1500); // Wait for 1.5 seconds before navigating
    }
}

// Attach events to nav links
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", highlightSection);
});
