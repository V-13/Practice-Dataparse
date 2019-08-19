const Express =require('express');
var app= new Express();

var bodyParser=require('body-parser');

app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(rq,rs)=>{
    rs.render('info',{title:"Student info"});
});

app.post('/read',(rq,rs)=>{
    var x=rq.body
    rs.render('read',{info:x,title:'values'});
    var array=rq.body
    console.log(array);
});
app.get('/info',(rq,rs)=>{
    rs.render('info',{title:'Student info'});
});

app.listen(process.env.PORT||5000,()=>{
    console.log("server running on 5000");
});
