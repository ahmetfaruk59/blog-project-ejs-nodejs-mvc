const expressLayout=require('express-ejs-layouts');
const express=require('express');
const path=require('path');
const ejs=require('ejs');
const blogRouter=require('./src/routers/blog_router');



const app=express();

app.use(express.static('public'));
app.use(expressLayout);
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views',path.resolve(__dirname,'./src/views'))


app.use('/',blogRouter);
app.use('/blog',blogRouter);

app.listen(3000,()=>{
    console.log('The Server Is UP on 3000 port. ');
});