document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('toggle-theme');
    const body = document.body;

    themeToggleBtn.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });

    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(collapsible => {
        collapsible.addEventListener('click', function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    const headerText = "I am Paul Njogu";
    let currentChar = 0;
    const headerEl = document.querySelector("header h1");

    const typeWriter = () => {
        if (currentChar < headerText.length) {
            headerEl.textContent += headerText.charAt(currentChar);
            currentChar++;
            setTimeout(typeWriter, 100);
        }
    };

    typeWriter();
});
