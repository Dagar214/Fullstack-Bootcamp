//const math=require('./math');
//console.log(math,"math");

//console.log(math.add(2,3));
//console.log(math.subtract(5,2));

const express=require('express');
// console.log(express,"express");
const app=express();
// console.log(app);
app.get('/',(req,res)=>{
    res.send("This is Homepage");
});

app.get('/',(req,res)=>{
    res.send{
        <html>
            <head></head>
            <body>
                <h1>This is About Page</h1>
            </body>
        </html>
    }           
});

app.get('/contact',(req,res)=>{
    res.send("This is Contact Page");
});



app.get('/path',(req,res)=>{
 //   console.log(req,"request");
  //  console.log(res,"response");
    res.send("Hello World");
});

app.get()

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
