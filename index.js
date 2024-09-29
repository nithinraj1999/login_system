const express = require("express")
const router =require("./router")
const path =require("path")
const session =require("express-session")
const bodyparser = require("body-parser")
const nocahe =require("nocache")
const app = express()



app.use(nocahe())
app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:true
}))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"views")))
app.use('/',router)
app.listen(3002,()=>{console.log("running........http://localhost:"+3002)})


