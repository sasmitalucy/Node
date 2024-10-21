const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}));
const auth = (req,res,next)=>{
    const authorizationHeader = req.headers.authorization;
    if(!authorizationHeader && authorizationHeader !== 'Bearer secret-key'){
        res.status(401).send("Invalid Authentication Key");
    }
    next();

}
app.get("/",auth,(req,res)=>{
    num1 = req.query.num1;
    num2 = req.query.num2;
    if(isNaN(num1) || isNaN(num2)){
        res.status(404).send("Not a Number")
    }
    var sum = num1+num2;
    res.send(sum);
})

app.listen(3000);
