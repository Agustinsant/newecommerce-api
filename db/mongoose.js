const mongoose = require('mongoose')
const url = 'mongodb+srv://agustinsant:neogevan@cluster0.u6op0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser: true,
    
})


