import { mockArray } from '@/mock/array'

const divideByTwo = (num: number) => {
	return Math.floor(num / 2) === num >> 1
}
mockArray(9999, Number.MAX_SAFE_INTEGER).forEach(e => {
	if (!divideByTwo(e)) {
		console.log(e)
	}
})
