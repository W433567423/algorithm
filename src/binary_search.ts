/*
算法名称:二分查找法
简介:在有序数组中查找一个元素的位置，若有返回该元素的下标，若无返回null
时间复杂度:O(log(n))
代码执行:nodemon  -e  ts,tsx  --exec ts-node  ./binary_search.ts
*/
const arr: number[] = [1, 5, 6, 7, 11, 15, 24, 44, 47, 80]
const binary_search = (arr: number[], num: number) => {
	let low = 0
	let high: number = arr.length - 1
	let mid: number
	while (low <= high) {
		mid = Math.floor((low + high) / 2)
		const guess: number = arr[mid]
		if (guess === num) return mid
		else if (arr[mid] < num) low = mid + 1
		else high = mid - 1
	}
}

console.log(`下标为${binary_search(arr, 11) || null}`)
console.log(`下标为${binary_search(arr, 14) || null}`)
console.log(`下标为${binary_search(arr, 24) || null}`)

export {}
