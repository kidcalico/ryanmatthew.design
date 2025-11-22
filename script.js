// Dark mode toggle

const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if(savedTheme) {
    body.classList.add(savedTheme);
}

themeToggle.addEventListener('click', () => {
    const darkToggle = document.querySelector('#theme-toggle')
    body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
        darkToggle.innerHTML = '<img src="images/icon-sun.svg" alt="sun icon" style="width: 30px; height: 30px">';
    } else {
        localStorage.removeItem('theme');
        darkToggle.innerHTML = '<img src="images/icon-moon.svg" alt="sun icon" style="width: 30px; height: 30px">';
    }
});

initDark();

function initDark() {
    const darkToggle = document.querySelector('#theme-toggle')
    // body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
        darkToggle.innerHTML = '<img src="images/icon-sun.svg" alt="sun icon" style="width: 30px; height: 30px">';
    } else {
        localStorage.removeItem('theme');
        darkToggle.innerHTML = '<img src="images/icon-moon.svg" alt="sun icon" style="width: 30px; height: 30px">';
    }
}



// Enhanced modal functionality
function openModal(imageSrc) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = imageSrc;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Add keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    document.body.style.overflow = ''; // Restore scrolling
}

// Mobile menu toggle
document.querySelector('.mobile-menu-toggle')?.addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header-links').classList.toggle('active');
});