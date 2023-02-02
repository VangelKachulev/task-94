import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
    static get events() {
        return {
            READY: "ready",
        };
    }

    constructor() {
        super();
        this.emojis = [];
        this.banana = "🍌";
        this.emit(Application.events.READY);
    }
    setEmojis(emojis) {
        this.emojis = emojis;
        let wrapper = document.getElementById('emojis');
        let paragraph = document.createElement('p');
        paragraph.textContent = emojis.join(" ");
        emojis.forEach(e => {
            console.log(e);
        });
        wrapper.append(paragraph);
    }

    addBananas() {
        this.emojis.map(e => {
            this.emojis.push(this.banana);

        })

        console.log(this.emojis);
    }
}