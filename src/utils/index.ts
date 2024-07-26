import { mockArray } from '@/mock/array'

// 数组对两个下标进行交换
const swap = (arr: number[], i: number, minIndex: number) => {
	let temp = arr[i]
	arr[i] = arr[minIndex]
	arr[minIndex] = temp
}
console.log('开始生成随机数组')
const arr = mockArray(100000, 1000000)
const rightSortArr = arr.sort()
console.log('生成随机数组完毕，并已获得排序成功数组\n')

// 运行算法算法
const runAndGetTime = (
	f: (arr: number[]) => number[] | void,
	category?: string
) => {
	let result = []
	console.log(`${category}排序开始`)
	// 开始时间
	const startTime = new Date().getTime()
	if (Array.isArray(f(arr))) {
		result = f(arr) as number[]
	} else {
		result = arr
	}
	// 结束时间
	const endTime = new Date().getTime()
	// 排序耗时
	console.log(`排序耗时：${endTime - startTime}ms\n`)
	if (result !== rightSortArr) {
		console.log(`${category}排序异常`)
	}
}

export { runAndGetTime, swap }
