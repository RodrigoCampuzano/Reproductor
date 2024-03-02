import { list } from "./dependencies.js";

const div = document.getElementById("div");
const div2 = document.createElement("div");
div2.setAttribute("id", "div2");
const div3 = document.createElement("div");
div3.setAttribute("id", "div3");
const div4 = document.createElement("div");
div4.setAttribute("id", "container");

const input = document.createElement("input");
input.setAttribute("type", "file");
input.setAttribute("multiple", true);
input.addEventListener("change", function() {
    const files = input.files;
    for (let i = 0; i < files.length; i++) {
        list.push(files[i]);
    }
    for (let i = 0; i < files.length; i++) {
        console.log(list.getElementAt(i).getData());
    }
});

const button_play = document.createElement("button");
button_play.setAttribute("id", "btnplay");
button_play.innerHTML = "▶";
button_play.addEventListener("click", () => {
    list.play();
    div3.appendChild(list.audio)
});

const button_next = document.createElement("button");
button_next.setAttribute("id", "btnnext");
button_next.innerHTML = "▷";
button_next.addEventListener("click", () => {
    if (list.size > 0) {
        list.playNext();
        div3.appendChild(list.audio)
    }
});

const button_previous = document.createElement("button");
button_previous.setAttribute("id", "btnprevious");
button_previous.innerHTML = "◁";
button_previous.addEventListener("click", () => {
    if (list.size > 0) {
        list.playPrevious();
        div3.appendChild(list.audio)
    }
});

div2.appendChild(input);
div4.appendChild(button_previous);
div4.appendChild(button_play);
div4.appendChild(button_next);
div.appendChild(div2);
div.appendChild(div4);
div.appendChild(div3);

