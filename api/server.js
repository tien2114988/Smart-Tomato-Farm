const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')

const app = express()

const manageRoute = require('./app/routes/manage.route')


url = 'mongodb+srv://sangdanghs0812:3.14159@smart-tomato-db.pcuu6ow.mongodb.net/?retryWrites=true&w=majority&appName=Smart-tomato-DB'
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("Connect MongoDB successfully")    
}).catch((err)=>{
    console.error(err);
})





// middleware
app.use(logger('dev'))



// routes
app.get('/',(req,res,next) => res.status(200).json(
    {
        message: 'Server is OK'
    })
)

app.use('/manage',manageRoute)



//catch 404 error
app.use((req,res,next)=>{
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})




// error handler
app.use(()=>{
    const error = app.get('env') === 'development' ? err : {}
    const status = err.status || 500

    // response to client
    return res.status(status).json({
        error:{
            message: error.message
        }
    })
})



// start server
const port = process.env.PORT || '3000'
app.listen(port, () => {
    console.log(`App start to listen at http://localhost:${port}`);
  });