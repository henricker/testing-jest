const routes = require('express').Router()
const authMiddleware = require('./app/middleware/auth')
const sessionController = require('./app/controller/SessionController')

routes.post('/sessions', sessionController.store)

routes.use(authMiddleware)

routes.get('/dashboard', (request, response) => {
  return response.status(200).send()
})

module.exports = routes