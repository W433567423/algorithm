/**
 * DONE
 * @description 生成随机数组(范围)
 * @author tutu
 * @time 2024-07-25 18:20:27
 * @param {number} maxSize  数组最大长度
 * @param {number} maxValue 数组最大值
 * @param {number} minValue 数组最小值
 */
const mockArray = (
	maxSize: number,
	maxValue: number,
	minValue?: number
): number[] => {
	if (!minValue) minValue = -maxValue
	console.log(
		`数据量为10^${maxSize.toString().length - 1}~10^${
			maxSize.toString().length
		}\n数据范围为${minValue}~${maxValue}`
	)
	const arr = new Array(maxSize)
	for (let i = 0; i < maxSize; i++) {
		arr[i] = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
	}
	return arr
}
export { mockArray }
