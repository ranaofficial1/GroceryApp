const mongoose = require("mongoose")
const chalk = require("chalk")



mongoose.connect(`mongodb+srv://rana:BnMjaMPGwFgs6cyV@cluster0.yfgrx.mongodb.net/Cluster0?retryWrites=true&w=majority`, {
   


    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log(chalk.whiteBright.bold("Connected to Database Successfully !!!"))
})