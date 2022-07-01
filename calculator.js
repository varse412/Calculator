//express is npm module
const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));//extended to post nested objects

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmicalculator.html");
});
app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    console.log(req.body.num1);
    res.send("The result of calculation is : "+result);
});
app.post("/bmicalculator",function(req1,res1){
    var num1=parseFloat(req1.body.w);
    var num2=parseFloat(req1.body.h);
    var result2=num1/(num2*num2);
    console.log(req1.body.num1);
    res1.send("The result of bmi calculation is : "+result2);
});
app.listen(3000,function(){
    console.log("port started on 3000");
});