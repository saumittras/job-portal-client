/**
 * 
 *                      JWT
 * -----------------------------------------------------------------
 * 
 * Install jsonwebtoken cookie-parser
 * set cookieParser as a middleware
 * 
 * 1. create a token 
 * 
 * jwt.sign(data, sectet, {expriresIn: '5h})
 * 
 * #Making secrete 
 * --> node
 * --> require('crypto').randomBytes(64).toString('hex')
 * 
 * then to save .env variable 
 * 
 * ACCESS_TOKEN_SECRET = xxxxxxxxxxxxx
 * 
 * 
 * #set Cookies to response
 * 
 * res.cookie('token', token, {
 *      httpOnly: true,
 *      secure: flase
 *})
 *.send({success: true})
 * 
 * seting to server side
 * 
 * cors({
 *      origin: [''],
 *      credentials: true
 * })
 * 
 * # Client : 
 * {
 *      withCredential: true
 * }
 * 
 * 2. Send the token to the client side. make sure token is in the cookies (application)
 * 
 * 3. 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */