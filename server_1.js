const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { urlencoded } = require('express');
const adminRoutes = require('./Routes/Admin');
const shopRoutes = require('./Routes/shop');
const { extname } = require('path');
const errorController = require('./controllers/errorController');
const app = express();

//app.engine('hbs',handlebars({layoutsDir:'views/layouts',defaultLayout: 'main-layout', extname: 'hbs'}));
app.set('view engine','ejs');
app.set('views','views');


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(shopRoutes);
app.use('/admin',adminRoutes);

console.log('into main js');

/*app.use((req,res,next)=>{
    console.log('Into 404');
    //res.status(404).send('<h1>Page Not Found</h1>');
    //res.sendFile(path.join(__dirname,'views','404.html'));
    res.status(404).render('404',{title: '404 page',path: '/404'});
});*/

app.use(errorController.get404);


app.listen(8080);