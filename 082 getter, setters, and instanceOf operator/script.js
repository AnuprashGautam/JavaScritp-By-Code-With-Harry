class ATM {
    constructor(customerName, pin) {
        this.customerName = customerName;
        this.pin = pin;
    }

    detail() {
        console.log(`Your id is ${this.customerName} and pin is ${this.pin}.`);
    }
}

class SecureATM {
    // ✅ Declare private fields
    #customerName;
    #pin;

    constructor(customerName, pin) {
        this.#customerName = customerName;
        this.#pin = pin;
    }

    // ✅ Getter for customerName
    get getCustomerName() {
        console.log('Returning the customer name after proper validation:');
        return this.#customerName;
    }

    // ✅ Getter for pin
    get getPin() {
        console.log('Returning the customer pin after proper validation:');
        return this.#pin;
    }

    // ✅ Setter for customerName
    set setCustomerName(name) {
        console.log('Setting the customer name after proper validation:');
        this.#customerName = name; 
    }

    // ✅ Setter for pin
    set setPin(pin) {
        console.log('Setting the customer pin after proper validation:');
        this.#pin = pin;
    }
}

// Testing
let a = new ATM('Rahul', 1234);
console.log(a.customerName);
console.log(a.pin);
a.detail();

let b = new SecureATM('Anuprash', 4523);
console.log(b.getCustomerName); // ✅ Use getter
console.log(b.getPin);          // ✅ Use getter

b.setCustomerName = "Anu";      // ✅ Use setter
b.setPin = 9999;                // ✅ Use setter

console.log(b.getCustomerName); // Anu
console.log(b.getPin);          // 9999
