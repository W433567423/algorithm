import { swap } from '@/utils/rate'
/**
 * DONE
 * @description 冒泡排序
 * @author tutu
 * @time 2024-07-25 16:06:00
 * @param {number[]} arr
 * @return {number[]}
 */
export const bubbleSort = (arr: number[]): number[] => {
	if (arr === null || arr.length < 2) {
		return arr
	}
	for (let i = arr.length - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1)
			}
		}
	}
	return arr
}
// 比较两个相邻的交换
// 时间复杂度O(n^2)，空间复杂度O(1)
// runAndGetTime(bubbleSort)
