const mongoose = require("mongoose");

const URI = "mongodb+srv://admin:admin@cluster0.uoyej.mongodb.net/EBOOK?retryWrites=true&w=majority";
const connectDB = async () => {
    await mongoose.connect(URI,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        });
    console.log('db connected')
}
module.exports = connectDB;
