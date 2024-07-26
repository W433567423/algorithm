// 1. O^N=N N^N=O
// 2. 满足交换律与结合律

// 可以两数相同但内存不能相同
export const swap = (a: number, b: number) => {
	console.log('🚀 ~ swap ~ a,b:', a, b) // 101 111
	a = a ^ b // 010
	b = a ^ b // 101
	a = a ^ b // 111
	console.log('🚀 ~ swap ~ a,b:', a, b) // 111 101
}
swap(5, 7)

// 在时间复杂度为O(n),空间复杂度为O(1)的情况下
// 数组中有切仅有一个数出现奇数次,找出这个数
const arr1 = [83, 1, 2, 5, 8, 46, 5, 1, 2, 83, 8]
const find1 = (arr: number[]): number => {
	console.log('\n\n数组为:', arr)
	let eor = 0
	arr.forEach((element: number) => {
		eor = eor ^ element
	})
	return eor
}
console.log(find1(arr1))

// 在时间复杂度为O(n),空间复杂度为O(1)的情况下
// 数组中有且仅有两个数出现奇数次(其余出现偶数次),找出这两个数
const arr2 = [83, 1, 2, 5, 8, 46, 5, 1, 2, 83]
const find2 = (arr: number[]): { x: number; y: number } => {
	console.log('\n\n数组为:', arr)
	let eor = 0
	arr.forEach((element: number) => {
		eor = eor ^ element
	})
	// eor:a^b
	let rightOne = eor & (~eor + 1) // 提取最右侧的1(即不一样的位之一)

	let x = 0
	arr.forEach((element: number) => {
		// 等于0/1都可
		if ((element & rightOne) === 0) {
			x = x ^ element
		}
	})
	// x:a/b
	const y = eor ^ x
	// y:不同x的另一个数
	return { x, y }
}
console.log(find2(arr2)) // { x: 8, y: 46 }
