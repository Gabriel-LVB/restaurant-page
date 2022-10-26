import home from "../components/home/home";
import menu from "../components/menu/menu";
import contact from "../components/contact/contact";
const tabsContent = { home: home(), menu: menu(), contact: contact() };

function clear(container) {
    document.querySelectorAll("li").forEach((tab) => {
        tab.classList.remove("active");
    });
    container.removeChild(container.firstChild);
}

function upadteContainer(tab, container) {
    tab.classList.add("active");
    const currentName = tab.textContent.toLowerCase();
    const currentTab = tabsContent[currentName];
    container.appendChild(currentTab);
}

export default function checkTab() {
    const container = document.querySelector(".container");
    document.querySelectorAll("li").forEach((tab) => {
        tab.addEventListener("click", () => {
            if (!tab.className.includes("active")) {
                clear(container);
                upadteContainer(tab, container);
            }
        });
    });
}
