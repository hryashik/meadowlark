const express = require('express')
const expressHandlebars = require('express-handlebars')
const fortune = require('./lib/fortune')
const port = 3000
const app = express()

app.engine('hbs', expressHandlebars.engine({
   defaultLayout: 'main',
   extname: 'hbs'
}))
app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

app.get('/', ((req, res) => {
   res.render('home')
}))
app.get('/about', (req, res) => {
   res.render('about', {
      fortune: fortune.getFortune()
   })
})

app.use((req, res) => {
   res.status(404)
   res.render('404')
})


app.listen(port, () => console.log('Express is starting...'))