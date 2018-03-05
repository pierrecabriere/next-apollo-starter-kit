// server.js
const next = require('next')
const routes = require('./routes')
const app = next({dev: !process.env.PROD})
const handler = routes.getRequestHandler(app)
const { createServer } = require('http')

app.prepare().then(() => {
  createServer(handler).listen(3000)
})