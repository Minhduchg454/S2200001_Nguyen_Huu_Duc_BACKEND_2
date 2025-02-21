const { ObjectId} = require('mongodb');

class ContactService {
    constructor(client){
        this.Contact = client.db().collection('contacts');
    }
    extractContactData (payload) {
        const contact = {
            name: payload.name,
            email: payload.email,
            address: payload.address,
            phone: payload.phone,
            favorite: payload.favorite,
        };

        Object.keys(contact).forEach(
            key => contact[key] === undefined && delete contact[key]
        );
        return contact;    

    }
    async create(payload){
        const contact = this.extractContactData(payload);
        const result = await this.Contact.findOneAndUpdate(
            contact,
            { $set: {favorite: contact.favorite == true} },
            { ReturnDocument: "after", upsert: true }
        );
        return result;
    }

    async find (filter){
        const cursor = this.Contact.find(filter);
        return await cursor.toArray();
    }

    async findByName(){
        
    }

}
module.exports = ContactService;