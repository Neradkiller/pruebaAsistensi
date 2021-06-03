  
const mongoose = require('mongoose')

mongoose.connection.on('open', () => {
    console.log('DB is online and conected')
})

async function connectDB(uri){
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = connectDB