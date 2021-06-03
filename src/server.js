require('dotenv').config()

const app = require('./app')
const connectDB = require('./db/mongoose')

const port = process.env.APP_PORT || 8081
const db_uri = process.env.DB_URI

async function initApp(port, db_uri){
    try
    {
        await connectDB(db_uri)
        app.listen(port,'0.0.0.0', () => {
            console.log(`Server listening on port ${port}`)
        })
    }
    catch(e){
        console.error(e)
        process.exit(0)
    }
}

initApp(port, db_uri)