const express = require('express')
const cors = require('cors')
const dataService = require('./services/dataService.js')
const server = express()
server.use(cors({
    origin:'http://localhost:3000'
}))
server.use(express.json())
server.listen(8000,()=>{
    console.log('EMS SERVER STARTED AT PORT NUMBER 8000');
})

server.get('/get-all-products',(req,res)=>{
    dataService.getAllProducts().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
server.post('/login',(req,res)=>{
    dataService.login(req.body.email,req.body.password).then((result)=>{
        res.status(result.statusCode).json(result)  
    })
})
server.get('/category/:category',(req,res)=>{
    dataService.categoryview(req.params.category).then((result)=>{
        res.status(result.statusCode).json(result)  
    })
})
server.get('/view/:id',(req,res)=>{
    dataService.viewproduct(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)  
    })
})
server.post('/cart',(req,res)=>{
    console.log(req.body);
    dataService.cart(req.body.userid,req.body.id,req.body.productname,req.body.category,req.body.imageone,req.body.imagetwo,req.body.imagethree,req.body.size,req.body.price).then((result)=>{
        res.status(result.statusCode).json(result)  
    })
})
server.post('/signup',(req,res)=>{
    dataService.signup(req.body.id,req.body.name,req.body.mobile,req.body.email,req.body.password).then((result)=>{
        res.status(result.statusCode).json(result)  
    })
})    
server.get('/cart/:id',(req,res)=>{
    dataService.movetocart(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)  
    })
})