import { runAndGetTime } from '@/utils'
import { bubbleSort } from './bubble_sort'
import { insertSort } from './insert_sort'
import { merge_sort } from './merge_sort'
import { selectionSort } from './selection_sort'

const f0 = (arr: number[]) => {
	return arr.sort()
}
const f1 = (arr: number[]) => {
	return merge_sort(arr, 0, arr.length - 1)
}

runAndGetTime(f0, 'sort函数')
runAndGetTime(f1, '归并')
runAndGetTime(selectionSort, '选择')
runAndGetTime(bubbleSort, '冒泡')
runAndGetTime(insertSort, '插入')
