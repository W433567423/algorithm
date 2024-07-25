// 在一个有序数组中，找某个数是否存在 时间复杂度O(log2 n)
const binaryFind = (nums: number[], target: number): number => {
	let left = 0
	let right = nums.length - 1
	while (left <= right) {
		const midIndex = Math.floor((right - left) / 2) + left
		console.log(left, right, midIndex)

		if (nums[midIndex] === target) {
			return midIndex
		} else if (nums[midIndex] < target) {
			left = midIndex + 1
		} else {
			right = midIndex - 1
		}
	}
	return -1
}
console.log(binaryFind([1, 5, 6, 31, 55, 56, 88, 89, 99], 6))
console.log(binaryFind([1, 5, 6, 31, 55, 56, 88, 89, 99], 7))

// 在一个有序数组中，找>=某个数最左侧的位置
const binaryFindMore = (nums: number[], target: number): number => {
	let left = 0
	let right = nums.length - 1
	while (left <= right) {
		const midIndex = Math.floor((right - left) / 2) + left
		console.log(left, right, midIndex)

		if (nums[midIndex] >= target) {
			right = midIndex - 1
		} else {
			left = midIndex + 1
		}
	}
	return left
}

console.log(binaryFindMore([1, 1, 1, 1, 2, 2, 2, 3], 3))

// 局部最小值问题
