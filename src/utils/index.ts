// export const swap = (arr: number[], a: number, b: number) => {
// 	arr[a] = arr[a] ^ arr[b]
// 	arr[b] = arr[a] ^ arr[b]
// 	arr[a] = arr[a] ^ arr[b]
// }
// 数组对两个下标进行交换
export const swap = (arr: number[], i: number, j: number) => {
	let temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}
