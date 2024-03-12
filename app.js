require('dotenv').config()
const express = require('express')
const router = require('./router/router')
const cors = require('cors')
const connectDb = require('./db/connect')
const app = express()
const port = 2000

/**they are same  */

app.use(express())
app.use(express.urlencoded({extended : false}))
app.use(cors())
app.use('/uploads' , express.static(__dirname + 'uploads'))

/* testing api  */

app.get('/' , (req , res) => {
    return res.status(200).json({msg : 'hello from server'})
})

/**they are same api routes */

app.use('/api' , router)

const start = async () =>{
    try { 
        await connectDb(process.env.MDB_URL)
        app.listen(port , () => {
            console.log(`Server is running on http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}

start()