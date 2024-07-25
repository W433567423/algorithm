// 斐波那契数列
const fibonacci = (num: number): number => {
	if (num < 3) {
		return 1
	} else {
		return fibonacci(num - 1) + fibonacci(num - 2)
	}
}
// 1 1 2 3 5, 8 13 21 34 55, 89 144 243
console.log('🚀 ~ fibonacci(10):', fibonacci(10))
