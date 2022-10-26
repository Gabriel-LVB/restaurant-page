import "./footer.style.css";
import elementCreator from "../../functions/elementCreator";
import insertChilds from "../../functions/insertChilds";

export default function footer() {
    const footer = elementCreator("div", "footer");
    const link = elementCreator("a", "footer-link", "Gabriel-LVB");
    link.href = "https://github.com/Gabriel-LVB";
    const text = elementCreator("h3", "footer-text", "Made by ");
    insertChilds(footer, text, link);
    return footer;
}
