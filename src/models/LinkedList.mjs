import { Node } from "./Node.js";

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.position = 0;
        this.audio = document.createElement("audio");
    }

    push(data) {
        const node = new Node(data);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    getElementAt(index) {
        if (index >= 0 && index < this.size) {
            let node = this.head;
            for (let i = 0; i < index; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    play() {
        if (this.size > 0) {
            const file = this.head.data;
            this.audio.src = URL.createObjectURL(file);
            this.audio.controls = true;
            this.audio.play();
        }
    }

    playNext() {
        if (this.position < this.size - 1) {
            this.position++;
            const node = this.getElementAt(this.position);
            const file = node.data;
            this.audio.src = URL.createObjectURL(file);
            this.audio.controls = true;
            this.audio.play();
        }
    }

    playPrevious() {
        if (this.position > 0) {
            this.position--;
            const node = this.getElementAt(this.position);
            const file = node.data;
            this.audio.src = URL.createObjectURL(file);
            this.audio.controls = true;
            this.audio.play();
            
        }
    }
}

