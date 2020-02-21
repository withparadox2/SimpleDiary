import express from 'express'
import mongoose from 'mongoose'
import registerRouter from './route'
import bodyParser from 'body-parser'
import session from 'express-session'
import logger from './util/logger'

setupMongodb({
  DB_URL: 'mongodb://localhost:27017/test'
})

const app = express()
const PORT = 8080

setupExpress(app)
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

function setupExpress(app: express.Express) {
  app.all('*', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type,Accept, Content-Length,Authorization, X-Requested-With'
    )
    res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.setHeader('Access-Control-Allow-Credentials', 'true') // 可以带cookies
    res.setHeader('X-Powered-By', '3.2.1')

    logger.info(req.method + ' ' + req.originalUrl)

    if (req.method == 'OPTIONS') {
      return res.sendStatus(200)
    }
    next()
  })

  app.use(
    (
      err: Error,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      logger.error(err)
      res.status(500).send('Something broke!')
    }
  )

  app.get('/', (req, res) => res.send('Hello World!'))

  const FileStore = require('session-file-store')(session) // file to store session
  app.use('/uploads', express.static('uploads')) // allow to read img
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(
    session({
      name: 'simplediary',
      secret: 'ccs',
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false,
        maxAge: 30 * 24 * 60 * 60 * 1000
      },
      store: new FileStore()
    })
  )

  registerRouter(app)
}

function setupMongodb(config: any) {
  mongoose.set('useFindAndModify', false)
  mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  const db = mongoose.connection
  db.once('open', () => {
    console.log('Connecting to the database Successfully')
  })
  db.on('error', function(error: any) {
    console.error('Error in MongoDb connection: ' + error)
    mongoose.disconnect()
  })
  db.on('close', function() {
    console.log(
      'The database is disconnected and try to reconnect the database'
    )
    mongoose.connect(config.DB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      server: { auto_reconnect: true }
    })
  })
}
