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

// const express = require('express')
// const app = express()

// const logger = (req,res,next)=>{
//     console.log("in the middleware");
//     const id = req.query.id;
//     res.send("hello "+id)
//     next()
// }

// app.use('/home',logger)

// app.get('/',(req,res)=>{
//     res.send("in the first page")
// })

// app.listen(3000,()=>{
//     console.log("server started.....");
// })

// const fs = require('fs')

// fs.writeFile("first.js",'console.log("new member")',function(err,data){
//     console.log("file content added");
// })

// const fs = require('fs')
// fs.readFile('first.js','utf-8',function(err,data){
//     console.log(data);

// })

// const fs = require('fs')
// fs.appendFile('first.js','console.log("i am new...")',function(err,data){
//     console.log(data);
//     console.log("appended file....");
// })


// const fs = require('fs')
// fs.unlink('first.js',function(err,data){
//     console.log("file deleted....");
// })

// const http = require('http')

// http.createServer((req,res)=>{
//     res.write("hello world....")
//     res.end()
// }).listen(3000,()=>{
//     console.log("running....");
// })


// const express = require('express')
// const app = express();

// const log = (req,res,next)=>{
//     const id = req.query.id
//     if(id === '20'){
//         res.send("vishnu"+id)
//     }else if(id === '21'){
//         res.send("nischal"+id)
//     }else{
//         res.send("invalid")
//     }
//     next()
// }

// app.use('/',log)
// app.listen(3000)

const express = require('express')

const app = express();

const log = (req,res,next)=>{
    const id = req.params.id;
    if(id === '20'){
        res.send("vishnu" +id)
    }else if(id === '32'){
        res.send("nischal" +id)
    }else[
        res.send("invalid")
    ]
}

app.use('/:id',log)
app.listen(3000,()=>{
    console.log("server running.....");
})