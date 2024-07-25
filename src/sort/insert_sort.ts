import { runAndGetTime, swap } from '@/utils'
/**
 * DONE
 * @description 插入排序
 * @author tutu
 * @time 2024-07-25 17:10:30
 * @param {number[]} arr
 * @return {number[]}
 */
const insertSort = (arr: number[]): number[] => {
	if (arr === null || arr.length < 2) {
		return arr
	}
	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j >= 0; j--) {
			if (arr[j] > arr[j + 1]) swap(arr, j, j + 1)
		}
	}
	return arr
}
// 将第n个数往前排序好的地方插入
// 时间复杂度O(n ^ 2)，空间复杂度O(1)
// 某些情况优于冒泡选择
runAndGetTime(insertSort)
