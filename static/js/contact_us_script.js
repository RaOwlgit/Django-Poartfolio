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

    const animFilePath = "{% static 'anim.txt' %}";

    function enableDarkTheme(){
        root.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
        darkButton.style.display = "none";
        lightButton.style.display = "block";
        loadSVGFrames(animFilePath);

    }

    function enableLightTheme(){
        root.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
        darkButton.style.display = "block";
        lightButton.style.display = "none";
        loadSVGFrames(animFilePath);
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

    let frameInterval; // Variable to store the interval reference

        // Function to load SVG frames from a specified text file
        async function loadSVGFrames(fileName) {
            try {
                // Clear any existing interval to reset the animation
                if (frameInterval) clearInterval(frameInterval);

                // Fetch the text file containing SVG frames
                const response = await fetch(fileName);
                const svgData = await response.text();

                // Split the SVG data into individual frames by separating them at each <svg> tag
                const svgFrames = svgData.match(/<svg[^>]*>[\s\S]*?<\/svg>/g);

                if (!svgFrames || svgFrames.length === 0) {
                    console.error('No SVG frames found in the text file:', fileName);
                    return;
                }

                // Set up an animation loop to change the SVG content every second
                let frameIndex = 0;
                const svgContainer = document.getElementById('svg-container');

                frameInterval = setInterval(() => {
                    // Update the SVG container with the current frame
                    svgContainer.innerHTML = svgFrames[frameIndex];

                    // Move to the next frame, looping back to the start if necessary
                    frameIndex = (frameIndex + 1) % svgFrames.length;
                }, 50); // Change frame every second (1000 milliseconds)

            } catch (error) {
                console.error('Error loading SVG frames:', error);
            }
        }
