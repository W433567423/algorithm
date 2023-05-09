/*
算法名称:选择排序
简介:将一个无序数组从小大/从大到小排序
时间复杂度:O(n²)
代码执行:nodemon  -e  ts,tsx  --exec ts-node  ./select_sort.ts
*/
const arr = [5, 3, 6, 2, 10, 9, 24, 15, 11]
// 拿到一个数组中最小的数字
const findSmallest = (arr: Array<number>) => {
	let min: number = arr[0]
	let index: number = 0
	while (index !== arr.length) {
		if (arr[index] < min) {
			min = arr[index]
		}
		index++
	}
	return min
}
// 选择排序算法
const select_sort = (arr: Array<number>) => {
	const newArr: Array<number> = []
	let small: number
	let i: string = ''
	for (i in [...Array(arr.length).keys()]) {
		small = findSmallest(arr)
		newArr.push(arr.splice(arr.indexOf(small), 1)[0])
	}
	return newArr
}
console.log('排序后的数组:', select_sort(arr))
export {}
