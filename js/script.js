let score

const add = (x, y) => {
	score = x + y
	score % 2 === 0 ? even() : odd()
}

const even = () => console.log(`Liczba ${score} jest parzysta.`)
const odd = () => console.log(`Liczba ${score} jest nieparzysta.`)

add(0, 2)

console.log('----------')

const num = 10
const numbers = []

for (let i = 0; i < num; i++) {
	numbers.push(i)
}

const checkNumbers = number => {
	if (number % 3 === 0 && number !== 0) {
		console.log(`${number} jest podzielne przez 3`)
	} else console.log(`${number} jest niepodzielne przez 3 albo wynosi 0.`)
}

numbers.forEach(checkNumbers)