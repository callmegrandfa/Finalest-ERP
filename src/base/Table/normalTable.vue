<template>
    <div>
        <el-table :data="tableData" @selection-change="handleSelectionChange" border style="width: 100%">
            <el-table-column type="selection" label="" width="50">
            </el-table-column>
            <el-table-column v-for="item in cols" :key="item.prop" :label="item.label" :prop="item.prop" >
                <template slot-scope="scope" >
                    <el-checkbox v-if="item.control=='checkbox'" disabled v-model='scope.row[item.prop]'></el-checkbox>
                    <el-input class="noEdit" :disabled="isDisable" v-if="item.control!='checkbox'" v-model="scope.row[item.prop]"></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="address12" label="操作" width="">
                <template slot-scope="scope">
                    <el-button @click="modify(scope.row)" type="text" size="small"  >查看</el-button>
                    <el-button @click="del(scope.row)" type="text" size="small"  >删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination style="margin-top:20px;"  class="text-right" @current-change="handleCurrentChange" :current-page.sync="currentPage" background layout="total, prev, pager, next"  :page-count="totalPage" ></el-pagination>
    </div>
</template>
<script type="text/javascript">
	export	default{
		props:['methodsUrl','cols','isDisable','tableName'],
		data(){
			return{
                currentPage:1,//当前页码
                totalPage:10,//总页数
                eachPage:10,//每页显示条数
                tableLoading:true,//加载动画
			}
        },
        created:function(){
            this.$store.commit('setTableName',this.tableName)
            this.$store.commit('setHttpApi', this.methodsUrl.creat)
            this.$store.dispatch('getTable');//初始化表格数据
        },
        computed:{
            tableData(){
                return this.$store.state[this.tableName];
            }
        },
        methods:{
            modify(row){//查看编辑
                this.$store.state.url=this.methodsUrl.view+row.id
                this.$router.push({path:this.$store.state.url})//点击切换路由OuManage
            },
            del(row){//单条删除
                let _this=this;
                _this.$confirm('确定删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                    }).then(() => {
                        _this.$axios.deletes(_this.methodsUrl.del,{Id:row.id}).then(function(res){
                            this.$store.dispatch('getTable');//初始化表格数据
                            _this.open('删除成功','el-icon-circle-check','successERP');    
                        }).catch(function(err){
                            _this.$message({
                                type: 'warning',
                                message: err.error.message
                            });
                        })  
                    }).catch(() => {
                        _this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                });
            },
            handleSelectionChange(val){//多选操作
                this.SelectionChange=val;
            },
            handleCurrentChange:function(val){//获取当前页码,分页
                this.currentPage=val;
                this.loadTableData();
                
            },
        }
	}
</script>
<style >
	.noEdit .el-input__inner {
        border: none;
        height: 28px;
        text-align: center;
    }
    .noEdit.is-disabled .el-input__inner{
        color: #606266;
        background: #fff;
    }
</style>