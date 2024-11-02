let express=require('express');
let bodyparser=require('body-parser');
let mysql=require('mysql');
let path=require('path');



let app=express();
// app.set('view engine','ejs');

// app.set("views",path.resolve("./views"));

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set("views",path.resolve("./views"));


    

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
    
});
app.get('/about',(req,res)=>{
    res.sendFile(__dirname+"/about.html");
    
});
app.get('/courses',(req,res)=>{
    res.sendFile(__dirname+"/courses.html");
    
});
app.get('/gallery',(req,res)=>{
    res.sendFile(__dirname+"/gallery.html");
    
});

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+"/login.html");
    
});


app.listen(4000);