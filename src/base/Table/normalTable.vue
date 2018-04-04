<template>
    <div>
        <el-table class="normalTable" @row-click="rowClick" :data="tableData" @selection-change="handleSelectionChange" border style="width: 100%">
            <el-table-column type="selection" label="" width="50">
            </el-table-column>
            <el-table-column v-for="(item) in cols" :key="item.prop" :label="item.label" :prop="item.prop" >
                <template slot-scope="scope" >
                    <img :id="scope.row.id" v-show='(scope.row.id==""||typeof(scope.row.id)=="undefined"||updateColArray.indexOf(scope.row.id)>=0)&&item.flag' class="update-icon" src="../../../static/image/content/redremind.png"/> 
                    <el-checkbox v-if="item.control=='checkbox'" disabled v-model='scope.row[item.prop]'></el-checkbox>
                    <el-input class="noEdit" :disabled="isDisable" v-if="item.control=='normal'" v-model="scope.row[item.prop]"></el-input>
                    <el-date-picker  v-if="item.control=='datetime'"  v-model="scope.row[item.prop]" readonly type="date"></el-date-picker>
                    <el-select :disabled="isDisable" v-if="item.control=='select'"  v-model="scope.row[item.prop]" >
                        <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column prop="address12" label="操作" width="">
                <template slot-scope="scope">
                    <el-button v-show="hasModify"  @click="modify(scope.row)" type="text" size="small"  >查看</el-button>
                    <el-button @click="dialogOpen(scope.row,scope.$index)" type="text" size="small"  >删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination style="margin-top:20px;"  class="text-right" @current-change="handleCurrentChange" :current-page.sync="currentPage" background layout="total, prev, pager, next"  :page-count="totalPagination" ></el-pagination>
        <dialogBox :message="dialogMessage" :dialogVisible="dialogShow"  @confirm="delConfirm" @cancel="delCancel"></dialogBox>   
    </div>
</template>
<script type="text/javascript">
    import dialogBox from '../dialog/dialog'
	export	default{
		props:['methodsUrl','cols','isDisable','tableName','hasModify'],
		data(){
			return{
                currentPage:1,//当前页码
                totalPage:10,//总页数
                eachPage:10,//每页显示条数
                tableLoading:true,//加载动画
                options: [{
                    value: 0,
                    label: '禁用'
                    }, {
                    value: 1,
                    label: '启用'
                }],
                delIndex:'',
                delRow:'',
                dialogMessage:'',
                dialogShow:false,
			}
        },
        created:function(){
            this.$store.commit('setTableName',this.tableName)
            this.$store.commit('setHttpApi', this.methodsUrl.creat)
            this.$store.dispatch('InitTable');//初始化表格数据
        },
        components:{
            dialogBox
        },
        computed:{
            tableData(){//表格数据
                return this.$store.state[this.tableName+'Table'];   
            },
            newColArray(){//新增数据集合
                if(!this.isDisable){
                    return this.$store.state[this.tableName+'NewColArray'];
                }else{
                    return [];
                }  
            },
            updateColArray(){//修改row集合
                if(!this.isDisable){
                    return this.$store.state[this.tableName+'UpdateColArray'];  
                    
                }else{
                    return [];
                }
                
            },
            totalPagination(){//分页总数
                return this.$store.state[this.tableName+'TotalPagination'];
            },
        },
        watch:{
            $route(to) {//页签切换,重置表格数据模型名称
                  this.$store.commit('setTableName',to.name)
            },
            tableData:{
                handler: function (val, oldVal) {
                    if(oldVal.length>0&&!this.isDisable){
                       this.$store.dispatch('AddUpdateArray');//当表格数据初次加载完毕且表格为可编辑状态，其数据发生改变时   
                    }
                },
                deep: true
            }
        },
        methods:{
            modify(row){//查看编辑
                this.$store.state.url=this.methodsUrl.view+row.id
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
            dialogOpen(row,index){//单条删除
                let _this=this;
                _this.delIndex=index;
                _this.delRow=row;
                _this.dialogMessage="确定删除？";
                _this.dialogShow=true;
            },
            delConfirm(){//确认删除
                let _this=this;
                if(_this.newColArray.length>0){
                    _this.$store.state[this.tableName+'Table'].splice(this.delIndex,1);
                    _this.newColArray.splice(this.delIndex,1);
                    _this.dialogShow=false;
                }else{
                    _this.$axios.deletes(_this.methodsUrl.del,{Id:this.delRow.id}).then(function(res){
                        _this.$store.dispatch('InitTable');//初始化表格数据
                        _this.open('删除成功','el-icon-circle-check','successERP');  
                        _this.dialogShow=false;  
                    }).catch(function(err){
                        _this.$message({
                            type: 'warning',
                            message: err.error.message
                        });
                    })  
                }       
            },
            delCancel(){//取消删除
                this.dialogShow=false;
            },
            rowClick(row){//获取行id
                this.$store.dispatch('getRowId',row.id);//初始化表格数据
            },
            handleSelectionChange(val){//多选操作
                this.$store.commit('setTableSelection',val)
            },
            handleCurrentChange:function(val){//获取当前页码,分页
                this.$store.commit('setCurrentPage',val)
                this.$store.dispatch('InitTable');//初始化表格数据   
                
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
    .update-icon{
        width:14px;
        height: 14px;
        position: absolute;
        left: -55px;
        top: 0px;
    }
   .normalTable .el-select input.el-input__inner[disabled] {
    background: #fff;
    height: 28px;
    border: 0;
    color: #606266;
    text-align: center;
}
</style>