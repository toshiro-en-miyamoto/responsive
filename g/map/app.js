const express = require('express')
const expressHandlebars = require('express-handlebars')

const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'development'
const config = require(`./.config.${env}`)

const {
    key
} = config.map
console.log(`key: ${key}`)

const app = express()
app.engine('handlebars', expressHandlebars({
    defaultLayout: null
}))
app.set('view engine', 'handlebars')

app.get('/map', (req, res) => res.render(
    'map',
    { key: key }
))

app.use(express.static(__dirname + '/views'))

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`)
)
