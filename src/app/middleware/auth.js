const { promisify } = require('util')
const jwt = require('jsonwebtoken')

module.exports = async (request, response, next) => {
  const authHeader = request.headers.authorization

  if(!authHeader)
    return response.status(401).send({ message: 'Token not provided' })

  const [, token] = authHeader.split(' ')

  try {
    const decode = await promisify(jwt.verify)(token, process.env.APP_SECRET)
    request.userId = decode.id
    return next()
  } catch(err) {
    return response.status(401).json({ message: 'Token invalid'})
  }
}