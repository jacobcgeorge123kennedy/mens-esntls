const db = require('./db')

// get all products

const getAllProducts =()=>{
    return db.Product.find().then((result)=>{
        if(result){
            return {
                statusCode:200,
                products:result
            }
        }else{
            return {
                statusCode:401,
                message:'NO DATA Found'
            }
        }
    })
}

const login=(email,password)=>{
    return db.User.findOne({
        email
    }).then((result)=>{
        if(result){
            if(result.password==password){
                return{
                    statusCode:200,
                    user:result
                }
            }else{
                return{
                    statusCode:401,
                    message:'Invalid Password'
                }
            }
        }else{
            return{
                statusCode:200,
                message:'Invalid Account'
            }
        }
    })
}

const categoryview = (category) =>{
    return db.Product.find({
        category
    }).then((result)=>{
        console.log(result);
       if(result){
        return {
            statusCode:200,
            category:result
        }
       }else{
        return {
            statusCode:200,
            message:'NO DATA FOUND'
        }
       }
    })
}

const viewproduct = (id) =>{
    return db.Product.findOne({
        id
    }).then((result)=>{
        if(result){
            return{
                statusCode:200,
                product:result
            }
        }else{
            return{
                statusCode:401,
                message:'No Data Found'
            }
        }
    })
}

const cart = (userid,id,product,category,imageone,imagetwo,imagethree,size,price) =>{
    return db.User.findOne({
        id:userid
    }).then((result)=>{
       if(result){
        console.log(result);
        if (result) {
            
        }
        return {
            statusCode:200,
            message:'Item Added to Cart'
        }
       }else{
        return {
            statusCode:401,
            message:'Invalid account'
        }
       }
    })
}

const signup = (id,name,mobile,email,password) =>{
    return db.User.findOne({
        id,
        email
    }).then((result)=>{
        if(result){
            return{
                statusCode:404,
                message:'Account already exist'
            }
        }else{
            const newUser = new db.User({
                id,
                name,
                mobile,
                email,
                password,
                cart:[]
            })
            newUser.save()
            return {
                statusCode:200,
                message:"new data added successfully"
            }
        }
    })

}

const movetocart=(id)=>{
    return db.User.findOne({
        id
    }).then((result)=>{
        if(result){
            return{
                statusCode:200,
                cart:result.cart
            }
        }else{
            return{
                statusCode:401,
                message:'invalid attempt'
            }
        }
    })
}

module.exports={
    getAllProducts,
    login,
    categoryview,
    viewproduct,
    cart,
    signup,
    movetocart
}