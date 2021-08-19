/**
 * 
 * @file        mongoose.js
 * @description this file configures mongoose and registers our different models
 * @author      Kunal Ghanghav
 * @date        2021.07.21
 * 
 */

const config = require("./config");
const mongoose = require("mongoose");

mongoose.connect(config.db,{
 useNewUrlParser: true,
 useUnifiedTopology: true 
});
const mongoDB = mongoose.connection;

// adding the default admin user when API first starts
const Student = require('../app/models/students.server.model');

mongoDB.on('error', console.error.bind(console, 'connection error:'));
mongoDB.once('open', () => {
    // instead of using findOneAndUpdate, switched to findOne then save because findoneandupdate with upsert:true was not triggering the pre middleware
    if (Student.findOne({ studentNumber: 1 },
        // callback
        (err, res) => {
            if (!res) {
                let admin = Student({
                    studentNumber: 1,
                    password: 'password',
                    firstName: 'admin',
                    lastName: 'user',
                    role: 'admin',
                    //  provider is mandatory for passport
                    provider: 'local'
                })

                admin.save(err => {
                    if (err) {
                        console.log(`unable to insert admin into ${config.db}`);
                        console.log(err);
                    } else {
                        console.log(`admin user (#1) inserted into ${config.db}`);
                    }
                });
            } else {
                console.log(`admin user (#1) already exists in ${config.db}`);
            }
        })) {

    }
    console.log(`Connected to MongoDB at ${config.db}`);
});

module.exports = mongoDB;