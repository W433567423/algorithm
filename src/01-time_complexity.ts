import { outOfOrderArray } from './mock/array'
const main = () => {
	const arr = outOfOrderArray
	// 开始时间
	const startTime = new Date().getTime()
	arr.sort((a, b) => a - b)
	// 结束时间
	const endTime = new Date().getTime()
	// 排序耗时
	console.log(`排序耗时：${endTime - startTime}ms`)
}
main()
