import sheet from './index.css' assert{type: 'css'}

const NavBar = () => {
    document.adoptedStyleSheets = [sheet];
    const URL = "https://grail.eecs.csuohio.edu/~alabdul/";
    const imageSource = "./resources/menu-bar.png";
    
    const navbarContainer = document.createElement("nav");
    navbarContainer.id = "navbarContainer";
    navbarContainer.classList.add("navbar-header-container");
    
    const logoContainer = document.createElement("div");
    logoContainer.id = "logoContainer";
    logoContainer.classList.add("navbar-logo-container");
    
    const logo = document.createElement("h1")
    logo.id = "logo";
    logo.classList.add("navbar-logo-text");
    
    const logoLink = document.createElement("a");
    logoLink.href = URL;
    logoLink.textContent = "Khan's";

    const optionsContainer = document.createElement("div");
    optionsContainer.id = "optionsContainer";
    optionsContainer.classList.add("navbar-options-container");
    
    const menuIcon = document.createElement("img");
    menuIcon.alt = "menu"
    menuIcon.classList.add("navbar-menu-icon");
    menuIcon.src = imageSource;
    
    
    logo.appendChild(logoLink);
    logoContainer.appendChild(logo);
    optionsContainer.appendChild(menuIcon);
    navbarContainer.appendChild(logoContainer);
    navbarContainer.appendChild(optionsContainer);
    
    return navbarContainer;
}

export default NavBar;