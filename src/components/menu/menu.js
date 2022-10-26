import "./menu.style.css";

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

function menuTitle() {
    const menuTitle = document.createElement("h1");
    menuTitle.className = "title";
    menuTitle.textContent = "Our Menu";
    return menuTitle;
}

function createItem(item) {
    const newItem = document.createElement("div");
    newItem.className = `menu-item ${item.name.toLowerCase()}`;

    const itemImage = new Image();
    itemImage.className = "item-image";
    itemImage.src = item.image;

    const texts = document.createElement("div");
    texts.className = "item-texts";

    const itemName = document.createElement("h3");
    itemName.className = "item-name";
    itemName.textContent = item.name;

    const description = document.createElement("p");
    description.className = "item-description";
    description.textContent =
        "Traditional Japanese food, known as washoku, is one of the most diverse and fascinating world cuisines.";

    texts.appendChild(itemName);
    texts.appendChild(description);

    newItem.appendChild(itemImage);
    newItem.appendChild(texts);
    return newItem;
}

function menuItems() {
    const menuItems = document.createElement("div");
    menuItems.className = "menu-items";
    menuList.forEach((item) => {
        menuItems.appendChild(createItem(item));
    });
    return menuItems;
}

export default function menu() {
    const menu = document.createElement("div");
    menu.className = "menu";
    menu.appendChild(menuTitle());
    menu.appendChild(menuItems());
    return menu;
}
