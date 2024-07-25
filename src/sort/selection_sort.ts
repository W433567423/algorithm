import { swap } from '@/utils'
/**
 * DONE
 * @description 选择排序
 * @author tutu
 * @time 2024-07-25 15:09:25
 * @param {number[]} arr
 * @return {number[]}
 */
const selectionSort = (arr: number[]): number[] => {
	if (arr === null || arr.length < 2) {
		return arr
	}
	for (let i = 0; i < arr.length; i++) {
		let minIndex = i
		for (let j = i + 1; j < arr.length; j++) {
			minIndex = arr[j] < arr[minIndex] ? j : minIndex
		}
		swap(arr, i, minIndex)
	}

	return []
}
