<template>
	<div>
		<el-card>
			<!-- 菜单搜索区域 -->
			<el-row class="post-contain" v-if="showSearch">
				<el-form label-width="70px" :model="searchPostForm" class="post-search">
					<el-form-item label="岗位编码" prop="postId" class="search-form-item">
						<el-input v-model="searchPostForm.postId" clearable placeholder="请输入岗位名称"></el-input>
					</el-form-item>
					<el-form-item label="部门名称" prop="postName" class="search-form-item">
						<el-input v-model="searchPostForm.postName" clearable placeholder="请输入岗位名称"></el-input>
					</el-form-item>
					<el-form-item label="状态" prop="status" class="search-form-item">
						<el-select v-model="searchPostForm.status" placeholder="部门状态" clearable>
							<el-option
								v-for="item in postOptions"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							>
							</el-option>
						</el-select>
					</el-form-item>
					<el-button type="primary" size="mini" icon="el-icon-search" class="post-search-btn">
						搜索
					</el-button>
					<el-button size="mini" icon="el-icon-refresh" class="post-reset-btn">重置</el-button>
				</el-form>
			</el-row>
			<!-- 按钮操作区域 -->
			<el-row class="post-btns" type="flex" justify="space-between">
				<el-col>
					<el-button icon="el-icon-plus" size="mini" type="primary" @click="showAddPostDialogVisible">
						新增
					</el-button>
					<el-button icon="el-icon-edit" size="mini" type="success" @click="showEditPostDialogVisible"
						>修改</el-button
					>
					<el-button icon="el-icon-delete" size="mini" type="danger" @click="showDeletePostDataDialogVisible">
						删除
					</el-button>
					<el-button icon="el-icon-download" size="mini" type="warning" @click="showExportDialogVisible">
						导出
					</el-button>
				</el-col>
				<el-col :span="2">
					<el-tooltip class="item" effect="dark" content="刷新角色数据" placement="top">
						<el-button circle icon="el-icon-refresh" class="refresh"></el-button>
					</el-tooltip>
					<el-tooltip class="item" effect="dark" content="隐藏用角色搜索" placement="top">
						<el-button circle icon="el-icon-search" class="hide-search" @click="showSearchPart"></el-button>
					</el-tooltip>
				</el-col>
			</el-row>
			<!-- 岗位数据列表区域 -->
			<el-row class="post-table">
				<el-table
					:data="postList"
					style="width: 100%"
					:header-cell-style="{ background: '#F8F8F9', color: '#606266' }"
					row-key="postId"
					:tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
				>
					<el-table-column type="selection" width="55"> </el-table-column>
					<el-table-column prop="postId" label="岗位编号" width="238px" align="center"> </el-table-column>
					<el-table-column prop="postCode" label="岗位编码" width="238px" align="center"> </el-table-column>
					<el-table-column prop="postName" label="岗位名称" width="238px" align="center"> </el-table-column>
					<el-table-column prop="postSort" label="岗位排序" width="238px" align="center"> </el-table-column>
					<el-table-column prop="status" label="状态" width="238px" align="center"> </el-table-column>
					<el-table-column prop="createTime" label="创建时间" width="180px" align="center"> </el-table-column>
					<el-table-column label="操作" align="center">
						<template slot-scope="scope">
							<el-button type="text" size="mini" icon="el-icon-edit" @click="showEditPostDialogVisible">
								修改
							</el-button>
							<el-button
								type="text"
								size="mini"
								icon="el-icon-delete"
								@click="showDeletePostDataDialogVisible"
							>
								删除
							</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-row>
			<!-- 分页区域 -->
			<el-row>
				<el-pagination
					:current-page="1"
					:page-sizes="[100, 200, 300, 400]"
					:page-size="100"
					layout="total, sizes, prev, pager, next, jumper"
					:total="400"
				>
				</el-pagination>
			</el-row>
		</el-card>
		<!-- 新增岗位弹出框区域 -->
		<el-dialog title="添加岗位" :visible.sync="addPostDialogVisible" width="30%">
			<el-form :model="addPostForm" label-width="80px">
				<el-form-item prop="postName" label="岗位名称" required>
					<el-input v-model="addPostForm.postName" placeholder="请输入岗位名称"></el-input>
				</el-form-item>
				<el-form-item prop="postCode" label="岗位编码" required>
					<el-input v-model="addPostForm.postCode" placeholder="请输入编码名称"></el-input>
				</el-form-item>
				<el-form-item prop="postSort" label="岗位顺序" required>
					<el-input-number v-model="addPostForm.postSort"></el-input-number>
				</el-form-item>
				<el-form-item prop="status" label="状态">
					<el-radio-group v-model="addPostForm.status">
						<el-radio :label="0">正常</el-radio>
						<el-radio :label="1">停用</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item prop="remark" label="备注">
					<el-input v-model="addPostForm.remark" placeholder="请输入内容" type="textarea"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="editPostDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="editPostDialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
import methods from './mehods'
import data from './data'
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

// 角色表单搜索区域

.post-search {
	display: flex;
	flex-flow: row warp;
	.el-form-item {
		margin-right: 15px;
	}
	.el-form-item__content {
		width: 25%;
	}
}
.el-form-item /deep/ .el-form-item__label {
	font-weight: bold;
}

.search-form-item /deep/ .el-input__inner {
	width: 15rem;
	height: 32px;
	line-height: 32px;
}

.search-form-item /deep/.el-date-editor {
	padding: 5px 10px 3px;
}

.date-picke {
	position: relative;
}

.post-search-btn,
.post-reset-btn {
	height: 100%;
	margin-top: 8px;
}
.post-search-btn {
	background-color: #20b2aa;
	border: 1px solid #20b2aa;
}

// 按钮操作区域
.refresh,
.hide-search {
	padding: 7px;
}

.post-btns {
	margin-bottom: 10px;
}

// 菜单数据展示区域
.post-table {
	margin-bottom: 20px;
}
</style>
