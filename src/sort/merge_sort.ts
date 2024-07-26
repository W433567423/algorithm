import { mockArray } from '@/mock/array'

/**
 * DONE
 * @description 归并排序
 * @author tutu
 * @time 2024-07-26 11:50:43
 * @param {number[]} arr
 * @return {number[]}
 */
const arr = mockArray(20, 99)
// const arr = [2, 1]
export const merge_sort = (arr: number[], l: number, r: number) => {
	if (l >= r) {
		return
	}
	let mid = (r - l) >> 1
	mid += l

	merge_sort(arr, l, mid)
	merge_sort(arr, mid + 1, r)
	merge(arr, l, mid, r)
}
const merge = (arr: number[], l: number, mid: number, r: number) => {
	const result = new Array(r - l + 1)
	let i = 0
	let p1 = l
	let p2 = mid + 1
	while (p1 <= mid && p2 <= r) {
		result[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]
	}
	while (p1 <= mid) {
		result[i++] = arr[p1++]
	}
	while (p2 <= r) {
		result[i++] = arr[p2++]
	}
	for (let i = 0; i < result.length; i++) {
		arr[l + i] = result[i]
	}
}

// console.log('🚀 ~ arr2:', arr)
// const f = (arr: number[]) => {
// 	merge_sort(arr, 0, arr.length - 1)
// }
// 递归二分，以此类推
// 时间复杂度O(nlogn)，空间复杂度O(n)

// runAndGetTime(f as any)
