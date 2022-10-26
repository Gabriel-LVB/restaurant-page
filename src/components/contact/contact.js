import "./contact.style.css";
import elementCreator from "../../functions/elementCreator";
import insertChilds from "../../functions/insertChilds";

function phones() {
    const phones = elementCreator("div", "phones");
    const phonesTitle = elementCreator("h1", "title contact", "Phones");
    const phoneNumber1 = elementCreator(
        "h3",
        "phone-number",
        "+12 (34) 56789-1011"
    );
    const phoneNumber2 = elementCreator(
        "h3",
        "phone-number",
        "+11 (10) 98765-4321"
    );
    insertChilds(phones, phonesTitle, phoneNumber1, phoneNumber2);
    return phones;
}

function map() {
    const map = elementCreator("div", "map");
    const locationTitle = elementCreator("h1", "title contact", "Location");
    const iframeMap = elementCreator(
        "iframe",
        "",
        null,
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.670313428382!2d138.7798084151058!3d35.48770008023996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019617e4e32da07%3A0xd0a26cdef169d769!2sNARUTO%C3%97BORUTO%20FUJI%20HIDDEN%20VILLAGE%20OF%20KONOHA!5e0!3m2!1spt-BR!2sbr!4v1666816406612!5m2!1spt-BR!2sbr"
    );
    insertChilds(map, locationTitle, iframeMap);
    return map;
}

export default function contact() {
    const contact = elementCreator("div", "contact");
    const contactTitle = elementCreator("h2", "title", "Contact Us");
    insertChilds(contact, contactTitle, phones(), map());
    return contact;
}
