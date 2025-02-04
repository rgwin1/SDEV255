const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; //thing that defines a structure of the documents that are going to be stored inside a model -- constructor function

const blogSchema = new Schema({
    //add different properties that blogs are going to have
    title: {
        type: String,
        required: true
    }, 
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema); //first argument is name of the model, second argument is the schema


module.exports = Blog; //has to be exported so the project can utilize it
