import "./home.style.css";
import narutoImage from "./naruto-eating.png";

function narutoEating() {
    const narutoEating = new Image();
    narutoEating.src = narutoImage;
    narutoEating.className = "naruto-eating";
    return narutoEating;
}

function bestRamenText() {
    const bestRamenText = document.createElement("h1");
    bestRamenText.className = "best-ramen-text";
    bestRamenText.textContent = "Best Ramen \r\n";
    bestRamenText.textContent += "in region";
    return bestRamenText;
}

function foodQuote() {
    const foodQuote = document.createElement("h3");
    foodQuote.className = "food-quote";
    foodQuote.textContent =
        "“Food brings people together on many different levels. It’s nourishment of the soul and body; it’s truly love.” \r\n";
    foodQuote.textContent += "-Chōji Akimichi ";
    return foodQuote;
}

export default function home() {
    const home = document.createElement("div");
    home.className = "home";
    home.appendChild(narutoEating());
    home.appendChild(bestRamenText());
    home.appendChild(foodQuote());

    return home;
}
