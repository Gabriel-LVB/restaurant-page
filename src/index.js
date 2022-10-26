import "./index.css";
import header from "./components/header/header";
import home from "./components/home/home";
import tabsControl from "./functions/tabsControl";
import elementCreator from "./functions/elementCreator";
import insertChilds from "./functions/insertChilds";
import footer from "./components/footer/footer";

const root = document.getElementById("root");
const container = elementCreator("div", "container");
insertChilds(container, home());
insertChilds(root, header("home"), container, footer());

tabsControl();
