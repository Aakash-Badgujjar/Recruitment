module.exports = function(){
    const faker = require("faker");
    let users = [];
        for (let i = 0; i < 200; i++) {
        const profile = {
            image: faker.image.avatar(),
            name: faker.name.findName(),
            description: faker.name.jobTitle(),
            company: faker.company.companyName(),
            address: faker.address.streetAddress() + faker.address.city()

        }
        users.push(profile)
    }

    return{
        "users":users
    }

}