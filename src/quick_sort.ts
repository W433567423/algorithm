/*
算法名称:快速排序
简介:将一个无序数组从小大/从大到小排序
时间复杂度:O(nlogn)
代码执行:nodemon  -e  ts,tsx  --exec ts-node  ./quick_sort.ts
*/

const quick_sort = (arr: Array<number>): Array<number> => {
	const less: Array<number> = []
	const more: Array<number> = []
	if (arr.length < 2) return arr
	else {
		const pivot = arr[0]
		for (const i of arr.slice(1)) if (i <= pivot) less.push(i)
		for (const i of arr.slice(1)) if (i > pivot) more.push(i)
		console.log('----------', less, pivot, more)
		return quick_sort(less).concat([pivot]).concat(quick_sort(more))
	}
}
console.log('排序后的结构为', quick_sort([5, 3, 6, 2, 10, 9, 24, 15, 11]))
