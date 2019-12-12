const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScheme = new Schema({
    name: String,
    age: Number
});

mongoose.connect("mongodb://localhost:27017/createUserLocal", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(`DB Connection Error: ${err.message}`);
    });


const User = mongoose.model("User", userScheme);
const user = new User({
    name: 'Billoop',
    age: 44
});


user.save()
    .then(doc => {
        console.log("Сохранен объект", doc);
        mongoose.disconnect();
    })
    .catch(err => {
        console.error(err);
        mongoose.disconnect();
    });
