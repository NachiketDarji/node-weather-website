const express = require('express')
const path = require('path')
const hbs = require('hbs')
const fs = require('fs')
const geocode = require('./utils/geocode.js')

const app = express();
const port = process.env.PORT || 3000
//define express
const viewpath = path.join(__dirname,'../templates/views')
const publicdir = path.join(__dirname,'../public')

//setup handlebars server
app.set('views',viewpath);
app.set('view engine', 'hbs')

//for partials
const partialsPath = path.join(__dirname, "../templates/partials");
let partialFileNames = fs.readdirSync(partialsPath);
partialFileNames.forEach(filename => {
      let matches = /^([^.]+).hbs$/.exec(filename);
      if (!matches) {
            return;
      }
      let partialName = matches[1];
      let partialTemplate = fs.readFileSync(
            partialsPath + "/" + filename,
            "utf-8"
      );
      hbs.registerPartial(partialName, partialTemplate);
});

//setup static directory to serve
app.use(express.static(publicdir))

app.get('', (req, res) =>{
    res.render('index',{title: 'Weather',name: 'Nachiket Darji'})
})

app.get('/about', (req, res) =>{
    res.render('about',{title: 'About Me',name:'Nachiket Darji'}) //
})

app.get('/weather', (req, res) =>{
    if(!req.query.address)
    {
        return res.send({Error : 'Provide the address'})
    }
    
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error)
        {
            return res.send({error})
        }
        
        res.send({latitude,longitude,location})
    })
   
})

app.get('/help',(req,res)=>{
    res.render('help',{title: 'Help',name:'Nachiket Darji',number: '635431****'})
})

app.get('*', (req, res)=>{
    res.render('error',{title: 'Error',name:'Nachiket Darji'})
})

app.listen(port,() => {
    console.log('server listening on port '+port)
})