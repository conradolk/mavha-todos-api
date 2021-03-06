const auth = require('basic-auth')

/**
 * Basic authentication middleware. Used to control the access to the API documentation.
 */
module.exports = function (req, res, next) {
    let user = auth(req)

    if (user === undefined || user['name'] !== 'MAvha' || user['pass'] !== 'MAvha') { // TODO: extract credentials to .env file
        res.statusCode = 401
        res.setHeader('WWW-Authenticate', 'Basic realm="Node"')
        res.end('Unauthorized')
    } else {
        next()
    }
}
