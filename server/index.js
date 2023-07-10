const express = require ("express")
const cors = require ("cors")
const db = require('./database-mysql/index')
const app = express()

//change to front port
var corsOptions = {
    origin: "http://localhost:3001"
  };
  
app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const PORT = 3000

const usersRoute = require('./routes/users');
const productsRoute = require('./routes/products');
const authRoute = require('./routes/auth.routes');
const { signin } = require("./controllers/auth.controller");



app.use('/api/users', usersRoute);
app.use('/api/products',productsRoute)
app.use('/api/auth',authRoute)






app.listen(PORT,function(){
    console.log("listening on port 3000!")

})