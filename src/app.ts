import { logger } from './config/logs.js'

export const buildGreeting = (name?: string) => {
	if (!name) {
		return 'Hello, world!'
	}
	return `Hello, ${name}!`
}

const greeting = buildGreeting('world')

logger.info(greeting)
