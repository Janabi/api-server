'use strict';

class Model {

    constructor(schema) {
        this.schema = schema;
    }

    async create(record) {
        try{

            let newRecord = new this.schema(record);
            console.log("helooooooooo")
            let data = await newRecord.save();
            console.log("data >>>>>>>>>>>>>>>>>", data)
            return data;
        } catch(err) {
            console.log("error>>>>>", err)
        }
    }

    read(_id) {
        let obj = _id ? {_id} : {};
        return this.schema.find(obj); 
    }

    update(_id, record) {
        return this.schema.findByIdAndUpdate(_id, record);
    }

    delete(_id) {
        return this.schema.findByIdAndDelete(_id);
    }
}

module.exports = Model;