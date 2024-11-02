import { logger } from './config/logs.js'

const greeting: Array<string> = ['Hello', 'world!']
logger.info(greeting.join(', '))
