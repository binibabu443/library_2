const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ict.qzxaf.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

const Schema = mongoose.Schema;
const AuthorSchema=new Schema({
    name:String,
    country:String,
    genre:String,
    image:String
});
var Authordata=mongoose.model('authordata',AuthorSchema);
module.exports=Authordata;