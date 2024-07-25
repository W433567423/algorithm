// 生成一个乱序的数组（99999项）
const outOfOrderArray = Array.from({ length: 9999 }, (_, index) => index).sort(
	() => Math.random() - 0.5
)
export { outOfOrderArray }
