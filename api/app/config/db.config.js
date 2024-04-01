const mongoose = require('mongoose')

dbname = 'FarmDB'
url = 'mongodb+srv://sangdanghs0812:3.14159@smart-tomato-db.pcuu6ow.mongodb.net/?retryWrites=true&w=majority&appName=Smart-tomato-DB'
connectDB = mongoose.connect(url,{ dbname }).then(()=>{
    console.log("Connect MongoDB successfully")    
}).catch((err)=>{
    console.error("Connect fail, try again");
})

module.exports = connectDB
