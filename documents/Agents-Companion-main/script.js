console.log("Script file loaded.");

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const headerOffset = 20; // Adjust this value based on potential fixed header height if needed
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;


        if (targetElement) {
             window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Example of how to set the original link (you can replace the URL)
document.getElementById('original-source-link').href = 'https://example.com/agents_companion_original_document.pdf';
document.getElementById('original-source-link').textContent = 'https://example.com/agents_companion_original_document.pdf';


// You can add other JS functionalities here
// E.g., add a button to toggle sidebar visibility on small screens
// E.g., lazy load images if needed