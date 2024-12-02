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


//Middle Section Script

const search = document.querySelector('.input-group input'),
    table_rows = document.querySelectorAll('tbody tr'),
    table_headings = document.querySelectorAll('thead th');

// 1. Searching for specific data of HTML table
search.addEventListener('input', searchTable);

function searchTable() {
    table_rows.forEach((row, i) => {
        let table_data = row.textContent.toLowerCase(),
            search_data = search.value.toLowerCase();

        row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
        row.style.setProperty('--delay', i / 25 + 's');
    })

    document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
        visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
    });
}


function sortTable(column, sort_asc) {
    [...table_rows].sort((a, b) => {
        let first_row = a.querySelectorAll('td')[column].textContent.toLowerCase(),
            second_row = b.querySelectorAll('td')[column].textContent.toLowerCase();

        return sort_asc ? (first_row < second_row ? 1 : -1) : (first_row < second_row ? -1 : 1);
    })
        .map(sorted_row => document.querySelector('tbody').appendChild(sorted_row));
}


// Select the elements
const copyTextElement = document.getElementById("copy-text");
const messageElement = document.getElementById("message");

// Add click event listener
copyTextElement.addEventListener("click", () => {
    // Copy text to clipboard
    navigator.clipboard.writeText(copyTextElement.textContent).then(() => {
        // Show confirmation message
        messageElement.style.display = "block";

        // Hide the message after 2 seconds
        setTimeout(() => {
            messageElement.style.display = "none";
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
});