/**
 *构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段  默认'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 * @param {*} rootId	跟Id 默认 '0'
 */
export function handleTree(data, id, parentId, children, rootId) {
	id = id || 'id'
	parentId = parentId || 'parentId'
	children = children || 'children'
	rootId = rootId || 0
	// 对源数据进行深度克隆
	const cloneData = JSON.parse(JSON.stringify(data))
	// 循环所有项
	const treeData = cloneData.filter(father => {
		let branchArr = cloneData.filter(child => {
			return father[id] === child[parentId]
		})
		branchArr.length > 0 ? (father.children = branchArr) : (father.children = '')
		// if (branchArr.length > 0) {
		// 	father.children = branchArr
		// } else {
		// 	father.children = ''
		// }

		// 返回第一层
		return father[parentId] === rootId
	})
	return treeData !== '' ? treeData : data
}
