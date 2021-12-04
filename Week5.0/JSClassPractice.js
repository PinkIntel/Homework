class Item {
    constructor(console, name, price) {
        this.console = console;
        this.name = name;
        this.price = price;
    }

    buying() {
        return `This customer would like to buy this copy of ${this.name} for their ${this.console}. It costs ${this.price} before tax.`;
    }
}

class Secondary extends Item {
    constructor(console, name, price, additional) {
        super(console, name, price);
        this.additional = additional;
    }
    addOn() {
        return `The customer would also like to buy this ${this.additional} too.`;
    }
}

const myPurchase = new Item("Xbox One", "Diablo",  "$30");
const myAddOn = new Secondary("Xbox One", "Diablo",  "$30", "remote");

console.log(myPurchase.buying());
console.log(myAddOn.addOn());
