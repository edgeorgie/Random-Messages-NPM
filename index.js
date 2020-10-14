const messages = [
	'Edwin',
	'Enrique',
	'Jorge',
	'Max',
	'Liz',
	'Elizabeth'
]

const randomMsg = () => {
	const message = messages[Math.floor(Math.random() * messages.length)]
	console.log(message);
}

module.exports = { randomMsg }