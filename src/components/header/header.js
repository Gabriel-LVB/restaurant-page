import "./header.style.css";
import elementCreator from "../../functions/elementCreator";
import insertChilds from "../../functions/insertChilds";

function navItem(name) {
    const navItem = elementCreator("li", "nav-item", name);
    name === "Home" && navItem.classList.add("active");
    return navItem;
}

function navBar() {
    const navBar = elementCreator("ul", "navbar");
    insertChilds(navBar, navItem("Home"), navItem("Menu"), navItem("Contact"));
    return navBar;
}

export default function header() {
    const header = elementCreator("div", "header");
    const logo = elementCreator("h1", "logo", "Uzumaki");
    const subLogo = elementCreator("h1", "sub-logo", "Ninja Food");
    insertChilds(header, logo, subLogo, navBar());
    return header;
}
