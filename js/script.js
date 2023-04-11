let score

const add = (x, y) => {
	score = x + y
	score % 2 === 0 ? even() : odd()
}

const even = () => console.log(`Liczba ${score} jest parzysta.`)
const odd = () => console.log(`Liczba ${score} jest nieparzysta.`)

add(0, 2)

