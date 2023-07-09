const express = require("express");
const app = express();
const {faker} = require(`@faker-js/faker`);

    const createUser = () => {
        const newFakeUser = {
            password: faker.internet.password(),
            email: faker.internet.email(),
            phoneNumber: faker.phone.number(),
            lastName: faker.person.lastName(),
            firstName: faker.person.firstName(),
            _id: faker.database.mongodbObjectId()
        };
        return newFakeUser;
    };

    const createCompany = () => {
        const newFakeCompany = {
            _id: faker.database.mongodbObjectId(),
            name: faker.company.name(),
            address: {
                street: faker.location.street(),
                city: faker.location.city(),
                state: faker.location.state(),
                zipCode: faker.location.zipCode(),
                country: faker.location.country()
            }
        };
        return newFakeCompany;
    };

    app.get("/api/users/new", (req, res) => {
            res.json(createUser());    
            });
    app.get("/api/companies/new", (req, res) => {
        res.json(createCompany());    
        });
    app.get("/api/user/company", (req, res) => {
        res.json([createCompany(), createUser()]);    
        });

    app.listen(8000, () => console.log(`Listening on port: 8000`) );