import "./home.style.css";
import narutoImageLink from "./naruto-eating.png";
import elementCreator from "../../functions/elementCreator";
import insertChilds from "../../functions/insertChilds";

export default function home() {
    const home = elementCreator("div", "home");
    const narutoImage = elementCreator(
        "img",
        "naruto-eating",
        null,
        narutoImageLink
    );
    const bestRamenText = elementCreator(
        "h1",
        "best-ramen-text",
        "Best Ramen \r\nin region"
    );
    const foodQuote = elementCreator(
        "h3",
        "food-quote",
        "“Food brings people together on many different levels. It’s nourishment of the soul and body; it’s truly love.” \r\n-Chōji Akimichi "
    );
    insertChilds(home, narutoImage, bestRamenText, foodQuote);

    return home;
}
