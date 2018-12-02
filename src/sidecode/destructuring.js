// OBJECT DESTRUCTURING

// const person = {
//   name: 'Tom',
//   age: 33,
//   location: {
//     city: 'Krakow',
//     temp: 10
//   }
// };

// const { name: firstName = 'Anon', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// console.log(`It's ${temperature} in ${city}`);

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// ARRAY DESTRUCTURING

// const address = ['Rynek Główny 10', 'Kraków', 'małopolskie', '31-456'];

// const [, city, state] = address;

// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A Medium ${itemName} costs ${mediumPrice}`);
