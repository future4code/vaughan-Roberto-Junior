import { Commerce } from "./classes/Commerce";
import { Customer } from "./classes/Customer";
import { Industry } from "./classes/Industry";
import { Place } from "./classes/Place";
import { Residence } from "./classes/Residence";
import { User } from "./classes/User";
import { client } from "./interface/Client";

let id = new Date().getTime().toString();

let newUser = new User(id, 'eu@labenu.com', 'Roberto', '123456');

let newCustomer = new Customer(id, 'eu@labenu.com', 'Roberto', '123456', '3000');

console.log(newCustomer.introduceYourself());

console.log(client);
console.log(client.calculateBill());

// let place = new Place('72880000');

let residencia = new Residence(3, '72883715');
let comercio = new Commerce(10, '72880000');
let industria = new Industry(6, '72885555');

console.log(residencia.getCep());
console.log(comercio.getCep());
console.log(industria.getCep());




