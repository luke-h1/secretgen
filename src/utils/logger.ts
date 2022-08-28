import pino from 'pino';

const logger = pino({
  name: 'secretgen',
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    }
  }
})
export default logger;
