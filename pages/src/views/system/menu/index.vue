<template>
	<div>
		<el-card>
			<!-- 菜单搜索区域 -->
			<el-row class="menu-contain" v-if="showSearch">
				<el-form label-width="70px" :model="searchDeptFrom" class="menu-search">
					<el-form-item label="菜单名称" prop="menuName" class="search-form-item">
						<el-input v-model="searchMenuFrom.menuName" clearable placeholder="请输入角色名称"></el-input>
					</el-form-item>
					<el-form-item label="状态" prop="status" class="search-form-item">
						<el-select v-model="searchMenuFrom.status" placeholder="菜单状态" clearable>
							<el-option
								v-for="item in menuOptions"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							>
							</el-option>
						</el-select>
					</el-form-item>
					<el-button type="primary" size="mini" icon="el-icon-search" class="menu-search-btns">
						搜索
					</el-button>
					<el-button size="mini" icon="el-icon-refresh" class="menu-search-btns">重置</el-button>
				</el-form>
			</el-row>
			<!-- 新增按钮区域 -->
			<el-row class="btns">
				<el-button type="primary" class="add-btns" size="mini" icon="el-icon-plus">新增</el-button>
			</el-row>
			<!-- 菜单数据展示区域 -->
			<el-row class="roles-table">
				<el-table
					:data="menuList"
					style="width: 100%"
					:header-cell-style="{ background: '#F8F8F9', color: '#606266' }"
					row-key="menuId"
					:tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
				>
					<el-table-column prop="menuName" label="菜单名称" width="160px"> </el-table-column>
					<el-table-column prop="icon" label="图标" width="100px" align="center"> </el-table-column>
					<el-table-column prop="menuSort" label="排序" width="60px"> </el-table-column>
					<el-table-column prop="perms" label="权限标识" width="320px"> </el-table-column>
					<el-table-column prop="component" label="组件路径" width="320px"> </el-table-column>
					<el-table-column prop="status" label="状态" width="80px" align="center"> </el-table-column>
					<el-table-column prop="createTime" label="创建时间" width="320px" align="center"> </el-table-column>
					<el-table-column label="操作" align="center">
						<template slot-scope="scope">
							<el-button type="text" size="mini" icon="el-icon-edit" @click="showEditRoleDialogVisible">
								修改
							</el-button>
							<el-button
								type="text"
								size="mini"
								icon="el-icon-circle-check"
								@click="showMenuPermissionsDialogvisible"
							>
								新增
							</el-button>
							<el-button
								type="text"
								size="mini"
								icon="el-icon-delete"
								@click="showDeleteRoleDataDialogVisible"
							>
								删除
							</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-row>
		</el-card>
	</div>
</template>

<script>
import data from './data'
import methods from './methods'
export default {
	data() {
		return data.init()
	},
	methods: methods
}
</script>

<style lang="less" scoped>
.el-card {
	padding: 0;
	margin-top: -0.3125rem;
	border: none;
}

// 菜单搜索区域
.menu-search {
	display: flex;
	flex-flow: row warp;
	.el-form-item {
		margin-right: 15px;
	}
	.el-form-item__content {
		width: 25%;
	}
	.el-form-item /deep/ .el-form-item__label {
		font-weight: bold;
	}
}

.search-form-item /deep/ .el-input__inner {
	width: 15rem;
	height: 32px;
	line-height: 32px;
}

.menu-search-btns {
	height: 100%;
	margin-top: 8px;
}
// 菜单操作区域
.btns {
	margin-bottom: 10px;
}

// 菜单数据展示区域
.roles-table {
	margin-bottom: 20px;
}
</style>
