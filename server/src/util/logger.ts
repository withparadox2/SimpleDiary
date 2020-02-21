// https://github.com/log4js-node/log4js-node/tree/master/docs

const log4js = require('log4js')
log4js.configure({
  appenders: {
    out: { type: 'stdout' },
    server: { type: 'file', filename: 'server.log', level: 'info' }
  },
  categories: { default: { appenders: ['server', 'out'], level: 'debug' } }
})
const logger = log4js.getLogger()

export default logger
