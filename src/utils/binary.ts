import { mockArray } from '@/mock/array'

// 在一个有序数组中，找某个数是否存在 时间复杂度O(log2 n)
const binaryFind = (nums: number[], target: number): number => {
	let left = 0
	let right = nums.length - 1
	while (left <= right) {
		const midIndex = Math.floor((right - left) / 2) + left

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
// console.log(binaryFind([1, 5, 6, 31, 55, 56, 88, 89, 99], 6))
// console.log(binaryFind([1, 5, 6, 31, 55, 56, 88, 89, 99], 7))

// 在一个有序数组中，找>=某个数最左侧的位置
const binaryFindMore = (nums: number[], target: number): number => {
	let left = 0
	let right = nums.length - 1
	while (left <= right) {
		const midIndex = Math.floor((right - left) / 2) + left

		if (nums[midIndex] >= target) {
			right = midIndex - 1
		} else {
			left = midIndex + 1
		}
	}
	return left
}

// console.log(binaryFindMore([1, 1, 1, 1, 2, 2, 2, 3], 3))

// 局部最小值问题
// 找最大值
const arr3 = mockArray(20, 99)
const binaryFindMax = (arr: number[], i: number, j: number): number => {
	if (i === j) {
		return arr[i]
	} else {
		const mid = (i + (j - 1)) >> 1
		const leftMax = binaryFindMax(arr, i, mid)
		const rightMax = binaryFindMax(arr, mid + 1, j)
		return Math.max(leftMax, rightMax)
	}
}
console.log('🚀 ~ arr3:', arr3)
console.log(`max:${binaryFindMax(arr3, 0, 19)}`)

// master公式
// T(N)=a*T(N/b)+O(N^d)
// 1. log(b,a)>d => 复杂度为O(N^log(b,a))
// 2. log(b,a)=d => 复杂度为O(N^d*logN)
// 3. log(b,a)<>>d => 复杂度为O(N^d)
