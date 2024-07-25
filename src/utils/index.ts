const swap = (arr: number[], i: number, minIndex: number) => {
	let temp = arr[i]
	arr[i] = arr[minIndex]
	arr[minIndex] = temp
}

export { swap }
