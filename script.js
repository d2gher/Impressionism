// get the elemets we're going to modified
const HTML = document.querySelector("html");
const LINKS = document.querySelectorAll("nav a");
let onLoad = null;

if (!onLoad) {
    LINKS.forEach(function(link) {
        if (link.id == document.title) {
            link.setAttribute("class", "active");
        } else {
            link.removeAttribute("class");
        }
    });
    onLoad = 1;
}
