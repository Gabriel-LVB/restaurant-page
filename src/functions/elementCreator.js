export default function elementCreator(
    type,
    className,
    innerText = null,
    src = null
) {
    const element = document.createElement(type);
    element.className = className;
    if (innerText) {
        element.textContent = innerText;
    }
    if (src) {
        element.src = src;
    }
    return element;
}
