// Continue Icon Logo Change Script
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

const icons = [     
    'bx bx-code-alt',
    'bx bxl-python',
    'bx bxl-c-plus-plus',
    'bx bxl-typescript',
    'bx bxl-java',
    'bx bxl-html5',
    'bx bxl-css3',
    'bx bxl-javascript',
    'bx bxl-react',
    'bx bxl-nodejs',
    'bx bxl-tailwind-css',
    'bx bxl-django',
    'bx bxl-flask',
    'bx bxl-angular',
    'bx bxl-mongodb',
    'bx bxl-firebase',  
    'bx bxl-figma',
    'bx bxl-android',
    'bx bxl-flutter',
    'bx bxl-github', 
    'bx bxl-git',
    'bx bxl-visual-studio',
    'bx bxl-blender',
    'bx bxl-unity',
    'bx bxs-microchip',
    'bx bxs-chip',
    'bx bxl-tux',
    'bx bxs-terminal',
    'bx bx-basketball',
    'bx bxs-cricket-ball',
    'bx bx-football',
    'bx bx-glasses-alt',
    'bx bxs-graduation',

  ];
    
    const logoIcon = document.getElementById("logo-icon");
    let iconIndex = 0;
    
    const darkButton = document.getElementById("dark");
    const lightButton = document.getElementById("light");
    const root = document.documentElement;

    function changeIcon(){
        logoIcon.className = icons[iconIndex];
        iconIndex ++;

        if (iconIndex < icons.length){
            setTimeout(changeIcon, 500);
        }
    }

    // Light and Dark Theme Toggle Button Script

    function enableDarkTheme(){
        root.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
        darkButton.style.display = "none";
        lightButton.style.display = "block";
    }

    function enableLightTheme(){
        root.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
        darkButton.style.display = "block";
        lightButton.style.display = "none";
    }

    function detectAndApplyTheme(){
        const userPreference  = localStorage.getItem("theme");
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (userPreference){
            if (userPreference === "dark") enableDarkTheme();
            else enableLightTheme();
        }

        else{
            if (prefersDarkScheme) enableDarkTheme();
            else enableLightTheme();
        }
    }

    darkButton.onclick = enableDarkTheme;
    lightButton.onclick = enableLightTheme;

    window.onload = () => {
        detectAndApplyTheme();
        changeIcon();
    };

    const text = [" 3D Modeling ", " 3D Animation ", " App Development " ," Arduino "," Web Development ", " Game Development ", " Machine Learning "];
    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;

    function type() {
    const typewriter = document.getElementById("typewriter");

    if (isDeleting) {
        currentText = text[index].substring(0, charIndex--);
    } else {
        currentText = text[index].substring(0, charIndex++);
    }

    typewriter.textContent = currentText;

    if (!isDeleting && charIndex === text[index].length) {
        isDeleting = true;
        setTimeout(type, 2000); // Pause at the end of each word
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % text.length;
        setTimeout(type, 500); // Pause before starting the next word
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
    }

    type();

    function animateProgress(id, percentage, color) {
        const progressFill = document.getElementById(`progress-fill-${id}`);
        const messageBox = document.getElementById(`message-box-${id}`);

        progressFill.style.backgroundColor = color;

        let progress = 0;
        const step = 1; // Increment step
        const duration = 2000; // Duration of the animation in milliseconds
        const intervalTime = duration / percentage; // Calculate interval time

        const interval = setInterval(() => {
            if (progress >= percentage) {
                clearInterval(interval);
            } else {
                progress += step;
                progressFill.style.width = `${progress}%`;
                messageBox.innerText = `${progress}%`;
                messageBox.style.left = `${progress}%`;
            }
        }, intervalTime);
    }

    // Animate progress for each small card with different colors
    animateProgress(1, 42, '#ffde57'); 
    animateProgress(2, 60, '#00599A');
    animateProgress(3, 70, '#E77512'); 
    animateProgress(4, 65, '#1D9197'); 
    animateProgress(5, 42, '#46D0FE');
    animateProgress(6, 72, '#4786F5'); 
    animateProgress(7, 0, '#BDBDBD'); 


    // Automatically change the Active Class
   // Select all sections and navbar links
const sections = document.querySelectorAll("#home, #about, #project"); 
const navLinks = document.querySelectorAll(".navbar a");

function updateActiveLink() {
    let currentSection = "";

    // Find the section that is currently in view
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    // Remove the 'active' class from all links
    navLinks.forEach((link) => {
        link.classList.remove("active");
        // Add the 'active' class to the link that corresponds to the section in view
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

// Scroll event listener to update the active class based on the scroll position
window.addEventListener("scroll", updateActiveLink);

// Click event listener to handle active class on click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });

        // Update active class on click
        updateActiveLink();
    });
});



//Project Section Script
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const wrapper = document.querySelector(".wrapper");

    const firstCard = carousel.querySelector(".card");
    const firstCardWidth = firstCard.offsetWidth;

    let isDragging = false,
        startX,
        startScrollLeft,
        timeoutId;

    const dragStart = (e) => { 
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;
    
        // Calculate the new scroll position
        const newScrollLeft = startScrollLeft - (e.pageX - startX);
    
        // Check if the new scroll position exceeds 
        // the carousel boundaries
        if (newScrollLeft <= 0 || newScrollLeft >= 
            carousel.scrollWidth - carousel.offsetWidth) {
            
            // If so, prevent further dragging
            isDragging = false;
            return;
        }
    
        // Otherwise, update the scroll position of the carousel
        carousel.scrollLeft = newScrollLeft;
    };

    const dragStop = () => {
        isDragging = false; 
        carousel.classList.remove("dragging");
    };

    const autoPlay = () => {
    
        // Return if window is smaller than 800
        if (window.innerWidth < 800) return; 
        
        // Calculate the total width of all cards
        const totalCardWidth = carousel.scrollWidth;
        
        // Calculate the maximum scroll position
        const maxScrollLeft = totalCardWidth - carousel.offsetWidth;
        
        // If the carousel is at the end, stop autoplay
        if (carousel.scrollLeft >= maxScrollLeft) return;
        
        // Autoplay the carousel after every 2500ms
        timeoutId = setTimeout(() => 
            carousel.scrollLeft += firstCardWidth, 2500);
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    wrapper.addEventListener("mouseenter", () => 
        clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);

    // Add event listeners for the arrow buttons to 
    // scroll the carousel left and right
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ? 
                -firstCardWidth : firstCardWidth;
        });
    });
});

