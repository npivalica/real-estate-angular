let faker = require('faker');
let database = require('db.json');

for (let i = 1; i <= 6; i++) {
    database.agents.push({
        id: i,
        name: faker.name.findName(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        card: faker.helpers.createCard()
    });
}
console.log(JSON.stringify(database)); 