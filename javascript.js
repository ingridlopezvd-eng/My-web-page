// Wait for the page to fully load before running scripts
document.addEventListener("DOMContentLoaded", function () {
    console.log("Page Loaded ✅");

    // Check if the accordion buttons exist
    const accordionButtons = document.querySelectorAll(".accordion-button");

    if (accordionButtons.length === 0) {
        console.error("❌ No accordion buttons found!");
        return;
    }

    // Add a visual indicator when a section is open
    accordionButtons.forEach(button => {
        button.addEventListener("click", function () {
            console.log("Accordion clicked:", this.textContent.trim());

            // Toggle a class for styling
            this.classList.toggle("active-section");
        });
    });

    // Optional: show a greeting alert when clicking the Bio section
    const bioButton = accordionButtons[0];
    bioButton.addEventListener("click", function () {
        console.log("Bio section opened!");
    });
});
