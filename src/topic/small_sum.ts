// 小和问题
// 在一个数组中，每一个数左边比当前数小的数累加起来，叫做这个数组
// 378603796
// 的小和。求一个数组 的小和。
const smallSum = (arr: number[]): number => {
	if (arr.length === 0) {
		return 0
	}
	return merge_sort(arr, 0, arr.length - 1)
}
export const merge_sort = (arr: number[], l: number, r: number): number => {
	if (l === r) {
		return 0
	}
	let mid = (r - l) >> 1
	mid += l

	return (
		merge_sort(arr, l, mid) +
		merge_sort(arr, mid + 1, r) +
		merge(arr, l, mid, r)
	)
}
// 外排序
const merge = (arr: number[], l: number, mid: number, r: number): number => {
	console.log(arr.slice(l, mid), arr.slice(mid + 1, r))
	const help = new Array(r - l + 1)
	let i = 0
	let p1 = l
	let p2 = mid + 1
	let result = 0
	while (p1 <= mid && p2 <= r) {
		result += arr[p1] < arr[p2] ? (r - p2 + 1) * arr[p1] : 0
		help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]
	}
	while (p1 <= mid) {
		help[i++] = arr[p1++]
	}
	while (p2 <= r) {
		help[i++] = arr[p2++]
	}
	for (let i = 0; i < help.length; i++) {
		arr[l + i] = help[i]
	}
	return result
}
// 逆序对问题
// 在一个数组中，左边的数如果比右边的数大，则这两个数
// 构成一个逆序对，请打印所有逆序 对。
console.log('🚀 ~ smallSum([1, 3, 4, 2, 5]):', smallSum([1, 3, 4, 2, 5]))
