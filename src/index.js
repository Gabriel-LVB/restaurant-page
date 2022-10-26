import "./index.css";
import header from "./components/header/header";
import home from "./components/home/home";
import menu from "./components/menu/menu";
import contact from "./components/contact/contact";
import tabsControl from "./functions/tabsControl";

const root = document.getElementById("root");
const container = document.createElement("div");
container.className = "container";
container.appendChild(contact());
root.appendChild(header("home"));
root.appendChild(container);

tabsControl();
