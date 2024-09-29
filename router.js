const express =require("express")
const router =express.Router()

const email = "admin@gmail.com"
const password = "123"

const products = 
[
    {
        name:"Studio dispaly",
        src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK0U3?wid=532&hei=582&fmt=png-alpha&.v=1646446502337"
    },
    {
        name:"Magic Keyboard ",
        src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMMR3?wid=532&hei=582&fmt=png-alpha&.v=1645719947833"
    },
    {
        name:"Magic Mouse",
        src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMMQ3?wid=532&hei=582&fmt=png-alpha&.v=1645138486301"
    },
    {
        name:"Power Adapter",
        src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU862?wid=532&hei=582&fmt=png-alpha&.v=1591824860000"
    },
    {
        name:"Air Pods",
        src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=532&hei=582&fmt=png-alpha&.v=1632861342000"
    },
    {
        name:"Home Pod",
        src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-select-midnight-202210?wid=532&hei=582&fmt=png-alpha&.v=1670557210097"
    },
];




router.get("/",(req,res) =>{
    if(req.session.user){
        res.redirect('/dashboard')
    }else{
        res.render("base",{title:"login page"})
    }
})

router.post("/login",(req,res)=>{
  
    if(req.body.email ==email && req.body.password == password){
        req.session.user=req.body.email
        res.redirect("/dashboard")
        
    }else{
        res.redirect('/')
    }                                        
})

router.get("/dashboard",(req,res)=>{
    if (req.session.user) {
        res.render("dashboard",{products,title:"Dashboard"})
    }else{
        res.redirect('/')
    }  
})

router.get("/logout",(req,res)=>{
    
    res.send("Invalid")
})

router.post("/logout",(req,res)=>{
    req.session.destroy((err)=>{
        if (err) {
            console.log('logout failed');
        }else{
            //res.render("base",{logout:"logout successfully"});  
             res.redirect("/")
           
        }
    })
    
})




module.exports =router