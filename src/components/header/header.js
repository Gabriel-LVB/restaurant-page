import "./header.style.css";

function logo() {
    const logo = document.createElement("h1");
    logo.className = "logo";
    logo.textContent = "Uzumaki";
    return logo;
}

function subLogo() {
    const subLogo = document.createElement("h3");
    subLogo.className = "sub-logo";
    subLogo.textContent = "Ninja Food";
    return subLogo;
}

function navItem(name) {
    const navItem = document.createElement("li");
    navItem.className = "nav-item";
    navItem.classList.add(name);
    if (name === "Home") {
        navItem.classList.add("active");
    }
    navItem.textContent = name;
    return navItem;
}

function navBar() {
    const navBar = document.createElement("ul");
    navBar.className = "navbar";
    navBar.appendChild(navItem("Home"));
    navBar.appendChild(navItem("Menu"));
    navBar.appendChild(navItem("Contact"));
    return navBar;
}

export default function header() {
    const header = document.createElement("div");
    header.className = "header";
    header.appendChild(logo());
    header.appendChild(subLogo());
    header.appendChild(navBar());
    return header;
}
