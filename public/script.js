// Window load hote hi pure event triggers initialize ho jayenge
window.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchBtn');
    const searchDropdown = document.getElementById('searchDropdown');

    console.log("Search Elements Check:", searchBtn, searchDropdown); // VS Code console me debug karne ke liye

    if (searchBtn && searchDropdown) {
        // Click karne par class add ya remove hogi
        searchBtn.addEventListener('click', (event) => {
            event.stopPropagation(); // Window click ko block karega click hote waqt
            searchDropdown.classList.toggle('show');
            console.log("Dropdown toggled! Status now:", searchDropdown.classList.contains('show'));
        });

        // Dropdown ke bahar screen par kahin bhi click ho toh close kar do
        document.addEventListener('click', (event) => {
            if (!searchDropdown.contains(event.target) && event.target !== searchBtn) {
                searchDropdown.classList.remove('show');
            }
        });
    } else {
        console.error("Error: HTML element IDs matched nahi ho paaye!");
    }
});

// Slider Dot Click Handling Logic
document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.slider-dots .dot');
    const testimonialText = document.getElementById('testimonialText');
    const authorName = document.getElementById('authorName');
    const authorRole = document.getElementById('authorRole');
    const authorImg = document.getElementById('authorImg');

    if (dots.length > 0 && testimonialText) {
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                // 1. Sabhi dots se active class hatao
                dots.forEach(d => d.classList.remove('active'));
                
                // 2. Jis dot par click kiya use active orange karo
                this.classList.add('active');
                
                // 3. HTML attributes se data read karke screen par badlo
                testimonialText.textContent = this.getAttribute('data-quote');
                authorName.textContent = this.getAttribute('data-name');
                authorRole.textContent = this.getAttribute('data-role');
                authorImg.src = this.getAttribute('data-img');
            });
        });
    }
});