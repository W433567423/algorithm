import { swap } from '@/utils'

// 荷兰国旗问题
const dutch_flag = (arr: number[], target: number) => {
	let less = -1 // 左边界
	let more = arr.length // 右边界
	let cur = 0 // 下标
	while (cur < more) {
		if (arr[cur] < target) {
			less++
			swap(arr, less, cur)
			cur++
		} else if (arr[cur] > target) {
			more--
			swap(arr, more, cur)
		} else {
			cur++
		}
	}
}
const arr = [5, 5, 8, 6, 5, 8, 1, 3, 6, 9, 9]
console.log('🚀 ~ arr:', arr)
dutch_flag(arr, 5)
console.log('🚀 ~ arr:', arr)
