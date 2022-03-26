const express = require('express')
const expressHandlebars = require('express-handlebars')
const port = 3000
const app = express()

app.engine('hbs', expressHandlebars.engine({
   defaultLayout: 'main',
   extname: 'hbs'
}))
app.set('view engine', 'hbs')

app.get('/', ((req, res) => {
   res.render('home')
}))
app.get('/about', (req, res) => {
   res.render('about')
})

app.use((req, res) => {
   res.status(404)
   res.render('404')
})

app.listen(port, () => console.log('Express is starting...'))
