import "./menu.style.css";
import elementCreator from "../../functions/elementCreator";
import insertChilds from "../../functions/insertChilds";

const menuList = [
    {
        name: "Sushi",
        image: "https://byfood.b-cdn.net/api/public/assets/8185/salmon-nigiri-%20sushi?optimizer=image",
    },
    {
        name: "Okonomiyaki",
        image: "https://byfood.b-cdn.net/api/public/assets/8168/okonomiyaki?optimizer=image",
    },
    {
        name: "Miso Soup",
        image: "https://byfood.b-cdn.net/api/public/assets/8186/miso%20soup?optimizer=image",
    },
    {
        name: "Yakitori",
        image: "https://byfood.b-cdn.net/api/public/assets/8169/yakitori?optimizer=image",
    },
    {
        name: "Ramen",
        image: "https://media.istockphoto.com/photos/ramen-noodles-in-soy-sauce-flavored-soup-picture-id1144177675?k=20&m=1144177675&s=612x612&w=0&h=y-bem67wejYRlU2xFRAZkzXnpyZmU0pxmll8DsSTHx0=",
    },
    {
        name: "Unagi",
        image: "https://criticalhits.com.br/wp-content/uploads/2022/09/unagi-quiz-friends.jpg",
    },
];

function createItem(item) {
    const newItem = elementCreator(
        "div",
        `menu-item ${item.name.toLowerCase()}`
    );

    const itemImage = elementCreator("img", "item-image", null, item.image);

    const texts = elementCreator("div", "item-texts");

    const itemName = elementCreator("h3", "item-name", item.name);

    const description = elementCreator(
        "p",
        "item-description",
        "Traditional Japanese food, known as washoku, is one of the most diverse and fascinating world cuisines."
    );

    insertChilds(texts, itemName, description);
    insertChilds(newItem, itemImage, texts);
    return newItem;
}

function menuItems() {
    const menuItems = elementCreator("div", "menu-items");
    menuList.forEach((item) => {
        insertChilds(menuItems, createItem(item));
    });
    return menuItems;
}

export default function menu() {
    const menu = elementCreator("div", "menu");
    const menuTitle = elementCreator("h1", "title", "Our Menu");
    insertChilds(menu, menuTitle, menuItems());
    return menu;
}
