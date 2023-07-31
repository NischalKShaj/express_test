// const express = require('express')

// const app = express()


// app.use((req,res,next)=>{
//     next()
// })

// app.get('/',(req,res)=>{
//     res.send("Hello world....")

// })


// app.get('/home',(req,res,next)=>{
//     const id = req.query.id
//     if( id ==="20"){
//         res.send("nischal "+id)
//     }else if(id ==="21"){
//         res.send("vishnu "+id)
//     }else{
//         res.send("user not found")
//     }
//     next();
// })

// app.get('/user/:id',(req,res)=>{
//     const id = req.params.id;
//     if( id ==="20"){
//         res.send("nischal "+id)
//     }else if(id ==="21"){
//         res.send("vishnu "+id)
//     }else{
//         res.send("user not found")
//     }
// })

// app.listen(4000,()=>{
//     console.log("Server running successfully....");
// })

const express = require('express')
const app = express()

const logger = (req,res,next)=>{
    console.log("in the middleware");
    const id = req.query.id;
    res.send("hello "+id)
    next()
}

app.use('/home',logger)

app.get('/',(req,res)=>{
    res.send("in the first page")
})

app.listen(3000,()=>{
    console.log("server started.....");
})