const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/esntls')

const Product = mongoose.model('Product',{
    id:String,
    product:String,
    category:String,
    imageone:String,
    imagetwo:String,
    imagethree:String,
    size:Array,
    price:Number
})

const User = mongoose.model('User',{
    id:String,
    name:String,
    mobile:String,
    email:String,
    password:String,
    cart:Array
})
 
module.exports={
    Product,
    User
}