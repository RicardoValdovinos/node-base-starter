import { expect, test } from 'vitest'
import { buildGreeting } from './app.js'

test('buildGreeting empty parameter returns "Hello, world!"', () => {
	const actual = buildGreeting()
	expect(actual).toBe('Hello, world!')
})

test('buildGreeting "Test" parameter returns "Hello, Test!"', () => {
	const actual = buildGreeting('Test')
	expect(actual).toBe('Hello, Test!')
})
