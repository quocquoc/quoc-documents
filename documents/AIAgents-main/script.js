document.addEventListener('DOMContentLoaded', function () {
    const content = document.querySelector('.content');
    const tocContainer = document.getElementById('table-of-contents');
    const headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6'); // Get all heading levels

    if (!tocContainer) {
        console.warn('Table of contents container not found.');
        return;
    }

    const tocList = document.createElement('ul');

    headings.forEach((heading, index) => {
        // Skip the main H1 title of the document for ToC
        if (heading.tagName === 'H1' && heading.parentElement.classList.contains('main-header')) {
            return;
        }

        const id = heading.id || `heading-${index}`;
        if (!heading.id) {
            heading.id = id;
        }

        const listItem = document.createElement('li');
        const link = document.createElement('a');

        link.textContent = heading.textContent.replace(/^\S*\s/, ''); // Remove icon text
        link.href = `#${id}`;

        // Add class for styling based on heading level
        const level = parseInt(heading.tagName.substring(1));
        listItem.classList.add(`toc-level-${level}`);


        // Smooth scroll
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Optionally, update active state in ToC
            document.querySelectorAll('#table-of-contents a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        });

        listItem.appendChild(link);
        tocList.appendChild(listItem);
    });

    if (tocList.children.length > 0) {
        tocContainer.appendChild(tocList);
    } else {
        tocContainer.innerHTML = '<p>Không có mục lục.</p>';
    }

    // Highlight ToC link on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const tocLink = document.querySelector(`#table-of-contents a[href="#${id}"]`);
            if (tocLink) {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    document.querySelectorAll('#table-of-contents a').forEach(a => a.classList.remove('active'));
                    tocLink.classList.add('active');
                }
            }
        });
    }, { rootMargin: "0px 0px -50% 0px", threshold: [0.5, 1] }); // Adjust rootMargin and threshold as needed

    headings.forEach(heading => {
         // Skip the main H1 title of the document for ToC observer
        if (heading.tagName === 'H1' && heading.parentElement.classList.contains('main-header')) {
            return;
        }
        observer.observe(heading);
    });


    // Add simple animation to sections on scroll (optional)
    const sections = document.querySelectorAll('.content section');
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                // observer.unobserve(entry.target); // Optional: stop observing after animation
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = "0"; // Set initial state for animation
        section.style.transform = "translateY(20px)";
        sectionObserver.observe(section);
    });

});