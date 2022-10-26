import "./contact.style.css";

function contactTitle() {
    const contactTitle = document.createElement("h2");
    contactTitle.className = "title";
    contactTitle.textContent = "Contact Us";
    return contactTitle;
}

function phoneNumber(number) {
    const phoneNumber = document.createElement("h3");
    phoneNumber.className = "phone-number";
    phoneNumber.textContent = number;
    return phoneNumber;
}

function phoneTitle() {
    const phoneTitle = document.createElement("h1");
    phoneTitle.classList.add("title", "contact");
    phoneTitle.textContent = "Phones";
    return phoneTitle;
}

function mapTitle() {
    const mapTitle = document.createElement("h1");
    mapTitle.classList.add("title", "contact");
    mapTitle.textContent = "Location";
    return mapTitle;
}

function phones() {
    const phones = document.createElement("div");
    phones.className = "phones";
    phones.appendChild(phoneTitle());
    phones.appendChild(phoneNumber("+12 (34) 56789-1011"));
    phones.appendChild(phoneNumber("+11 (10) 98765-4321"));
    return phones;
}

function mapIframe() {
    const iframe = document.createElement("iframe");
    iframe.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.670313428382!2d138.7798084151058!3d35.48770008023996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019617e4e32da07%3A0xd0a26cdef169d769!2sNARUTO%C3%97BORUTO%20FUJI%20HIDDEN%20VILLAGE%20OF%20KONOHA!5e0!3m2!1spt-BR!2sbr!4v1666816406612!5m2!1spt-BR!2sbr";
    iframe.width = "400px";
    iframe.height = "300px";
    return iframe;
}

function map() {
    const map = document.createElement("div");
    map.className = "map";
    map.appendChild(mapTitle());
    map.appendChild(mapIframe());
    return map;
}

export default function contact() {
    const contact = document.createElement("div");
    contact.className = "contact";

    contact.appendChild(contactTitle());
    contact.appendChild(phones());
    contact.appendChild(map());
    return contact;
}
