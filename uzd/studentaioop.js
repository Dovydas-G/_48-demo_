//1. Knygynas:
//Sukurkite klasę, kuri reprezentuotų knygyną. 
//Kiekviena knyga turėtų pavadinimą, autorių ir kainą. 
//Galite pridėti metodus, kad būtų galima pridėti naują knygą, 
//pašalinti knygą arba gauti visų knygų sąrašą.

console.log('<----------------------------------1>')

class Books {
    static allBooks = [];
    constructor (name, author, price) {
        this.name = name;
        this.author = author;
        this.price = price;
        Books.allBooks.push(this)
    }
    
    deleteBook () {
        this.name = undefined;
        this.author = undefined;
        this.price = undefined;
    }

    static listOfBooks () {
        for (const book of Books.allBooks) {
            console.log(book)
        }
        
    }

    static addBook (name, author, price) {
        
        const newBook = new Books(name, author, price);
        console.log(newBook);
    }

}



const atominiaiIprociai = new Books('Atominiai įpročiai', 'James Clear', 15);
console.log(atominiaiIprociai);

const gliukozesRevoliucija = new Books('Gliukozės revoliucija', 'Jessie Inchauspe', 13);
console.log(gliukozesRevoliucija);



console.log('<-------------------------Added books>')

Books.addBook('Tiems, kurie neskaito', 'Benas Lastauskas', 22)

Books.addBook('Regis, man ne viskas gerai', 'Meg Mason', 13)




console.log('<-----------------------List of books>')

Books.listOfBooks()




console.log('<-------------------------Delete book>')

atominiaiIprociai.deleteBook()

console.log(atominiaiIprociai)


console.log('<----------------------------------2>')

//2. Transporto priemonės:
//Sukurkite klases "Automobilis" ir "Motociklas". 
//Kiekviena turi markę, modelį ir variklio galingumą. 
//Sukurkite metodą, kuris leidžia gauti visą informaciją 
//apie transporto priemonę.



class CarAndMotorcycle {
    constructor (type, brand, model, enginePower) {
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.enginePower = enginePower;
    }

    specifications () {
        return `${this.type}: 
            Gamintojas: ${this.brand}
            Modelis: ${this.model}
            Variklio galia: ${this.enginePower}`
    }
}


const hondaMotorcycle = new CarAndMotorcycle('Motociklas', 'Honda', 'X-ADV', '43kW');
console.log(hondaMotorcycle.specifications());

const hondaCar = new CarAndMotorcycle('Automobilis', 'Honda', 'CR-V', '148hP');
console.log(hondaCar.specifications());



//3. Darbuotojai:
//Sukurkite klasę "Darbuotojas" su savybėmis, tokiomis kaip
// vardas, pavardė, pareigos ir atlyginimas. Pridėkite metodus,
// leidžiančius padidinti ar sumažinti atlyginimą
// ir gauti visas darbuotojo informacijas.

console.log('<----------------------------------3>')

class Worker {
    constructor (position, firstName, lastName, salary) {
        this.position = position;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    salaryUp (up) {
        this.salary = this.salary + up;
    }

    salaryDown (down) {
        this.salary = this.salary - down;
    }

    aboutWorker () {
        return `Pareigos: ${this.position} 
            Vardas: ${this.firstName} 
            Pavardė: ${this.lastName} 
            Atlyginimas: ${this.salary} 💰`
    }
}



const jonas = new Worker('Programuotojas', 'Jonas', 'Jonaitis', 800);
jonas.salaryUp(200);
console.log(jonas.aboutWorker());


const petras = new Worker('Dizaineris', 'Petras', 'Petraitis', 1000);
petras.salaryDown(300);
console.log(petras.aboutWorker());


//4. Kreditų kortelės:
//Sukurkite klasę "Kreditinė Kortelė", kuri turėtų savybes, tokias kaip kortelės numeris, 
//saugumo kodas, galiojimo data ir limitas. Pridėkite metodus, 
//kurie leidžia patikrinti kortelės galiojimą ir atlikti mokėjimus.

console.log('<----------------------------------4>')

class CreditCard {
    constructor (cardNumber, securityCode, expiryDate, limit, balance) {
        this.cardNumber = cardNumber;
        this.securityCode = securityCode;
        this.expiryDate = expiryDate;
        this.limit = limit;
        this.balance = balance;
    }

    validity () {
        const validText = 'Kortelė galioja';

        const parts = this.expiryDate.split('-');
        
        const year = (+ parts[0]);
        const month = (+ parts[1]);
        const day = (+ parts[2]);

        if (year > 2024) {
            return validText;
        }
        else if (year === 2024 && month > 3) {
            return validText;
        }
        else if (year === 2024 && month === 3 && day >= 24) {
            return validText;
        }
        else return 'Kortelės galiojimas pasibaigęs';  
    }

    transferMoney (money) {
    
        if (this.balance > 0) {
            if (this.limit >= money) {
                this.balance -= money;
                return `Sėkminga operacija, jūs pervedėte ${money}$`;
            }else return `viršytas limitas`;
        } else {
            return `nepakankamas likutis`;
        }
    }

}


const firstCard = new CreditCard ('2222-3333-4444-5555', '234', '2025-03-25', 300, 900);
console.log(firstCard.transferMoney(300));
console.log(firstCard.transferMoney(300));
console.log(firstCard.transferMoney(300));
console.log(firstCard.transferMoney(1));

console.log(firstCard);


const secondCard = new CreditCard ('5555-6666-7777-8888', '567', '2024-02-09', 500, 1500);
console.log(secondCard.validity());

