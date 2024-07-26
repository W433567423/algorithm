import { mockArray } from '@/mock/array'

// 数组对两个下标进行交换
const swap = (arr: number[], i: number, minIndex: number) => {
	let temp = arr[i]
	arr[i] = arr[minIndex]
	arr[minIndex] = temp
}

// 运行算法算法
const runAndGetTime = (f: (arr: number[]) => number[] | undefined) => {
	const arr = mockArray(9999, 9999)
	let result = []
	console.log('排序开始')
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
	console.log(`排序耗时：${endTime - startTime}ms`)
	console.log('排序结果：\n', result)
}

export { runAndGetTime, swap }
