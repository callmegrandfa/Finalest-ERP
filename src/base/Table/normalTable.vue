<template>
    <div>
        <el-table class="normalTable" @row-click="rowClick" :data="tableData" @selection-change="handleSelectionChange" border style="width: 100%">
            <el-table-column type="selection" label="" width="50">
            </el-table-column>
            <el-table-column v-for="(item) in cols" :key="item.prop" :label="item.label" :prop="item.prop" >
                <template slot-scope="scope" >
                    <img :id="scope.row.id" v-show='(scope.row.id==""||typeof(scope.row.id)=="undefined"||updateColArray.indexOf(scope.row.id)>=0)&&item.flag' class="update-icon" src="../../../static/image/content/redremind.png"/> 
                    <el-checkbox v-if="item.control=='checkbox'" disabled v-model='scope.row[item.prop]'></el-checkbox>
                    <el-input :class="{errorclass:item.required&&scope.row[item.prop]==''&&ifSave==true}"  class="noEdit" :disabled="isDisable" v-if="item.control=='normal'" v-model="scope.row[item.prop]"></el-input>
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
        <dialogBox :message="dialogMessage" :dialogVisible="delDialog"  @confirm="delConfirm" @cancel="delCancel"></dialogBox>   
    </div>
</template>
<script type="text/javascript">
    import dialogBox from '../dialog/dialog'
	export	default{
		props:['methodsUrl','cols','isDisable','tableName','hasModify',"ifSave"],
		data(){
			return{
                // currentPage:1,//当前页码
                totalPage:10,//总页数
                eachPage:10,//每页显示条数
                tableLoading:true,//加载动画
                tableClone:[],
                updateId:'',//修改行id
                rowIndex:'',//修改行index
                updateRow:'',
                clickRow:'',
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
                delDialog:false,
                pageFlag:true,
			}
        },
        created:function(){
            this.$store.commit('setTableName',this.tableName)
            this.$store.commit('setHttpApi', this.methodsUrl.creat)
            this.$store.dispatch('InitTable');//初始化表格数据
            setTimeout(() => {//拷贝初始化数据，和修改行做对比
                let table= this.deepClone(this.$store.state[this.tableName+'Table'])
                this.$store.commit('Init_TableClone', table);
                this.tableClone=this.$store.state[this.tableName+'TableClone'];
                }, 1500);
        },
        components:{
            dialogBox
        },
        computed:{
            tableData(){//表格数据
                return this.$store.state[this.tableName+'Table'];   
            },
            currentPage:{
                get:function(){
                    return this.$store.state[this.tableName+'CurrentPage'];
                },
                set:function(newValue){
                   this.$store.state[this.tableName+'CurrentPage']=newValue;
                }
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
            newColArray:{
                handler:function(val,oldVal){
                    if(val.length>0){
                        this.turnPage=Number($(document).find(".el-pagination.is-background .el-pager li.active").html());
                    }
                },
                deep:true
            },
            updateColArray:{
                handler:function(val,oldVal){
                    if(val.length>0){
                        this.turnPage=Number($(document).find(".el-pagination.is-background .el-pager li.active").html());
                    }
                },
                deep:true
            },
            tableData:{
                handler: function (val, oldVal) {
                    if(oldVal.length>0&&!this.isDisable){
                        for(let i in this.$store.state[this.tableName+'Table']){
                            if(this.clickRow.id==this.$store.state[this.tableName+'Table'][i].id){
                                this.rowIndex=i;
                            }
                        }
                        if(!this.Compare(this.updateRow,this.$store.state[this.tableName+'Table'][this.rowIndex])){
                            this.$store.dispatch('AddUpdateArray');//当表格数据初次加载完毕且表格为可编辑状态，其数据发生改变时   
                        }else{
                            console.log("xiangtong");
                        }
                        
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
                _this.delDialog=true;
            },
            open(tittle,iconClass,className) {//提示框
                this.$notify({
                position: 'bottom-right',
                iconClass:iconClass,
                title: tittle,
                showClose: false,
                duration: 3000,
                customClass:className
                });
            },
            delConfirm(){//确认删除
                let _this=this;
                if(_this.newColArray.length>0){
                    _this.$store.state[this.tableName+'Table'].splice(this.delIndex,1);
                    _this.newColArray.splice(_this.delIndex,1);
                    _this.$store.commit('setUpdateColArray',[])//置空修改增集合 
                    if(_this.newColArray.length==0){
                        _this.$store.commit('setIfDel',true);//设置删除参数为真
                    }else{
                        _this.$store.commit('setIfDel',false);//设置删除参数为假
                    }
                    _this.delDialog=false;
                }else{
                    _this.$axios.deletes(_this.methodsUrl.del,{Id:_this.delRow.id}).then(function(res){
                        _this.$store.dispatch('InitTable');//初始化表格数据
                        _this.open('删除成功','el-icon-circle-check','successERP'); 
                        _this.$store.commit('setUpdateColArray',[])//置空修改增集合 
                        _this.$store.commit('setIfDel',true);//设置删除参数为真
                        _this.delDialog=false;  
                    }).catch(function(err){
                        _this.$message({
                            type: 'warning',
                            message: err.error.message
                        });
                    })  
                }       
            },
            delCancel(){//取消删除
                this.delDialog=false;
            },
            rowClick(row){//获取行id
                //this.updateId=row.id
                this.clickRow=row;
                //this.InitUpdateRow(row.id);
                for(let i in this.tableClone){
                    if(row.id==this.tableClone[i].id){
                       this.updateRow=this.tableClone[i];
                    }
                }
                
                this.$store.dispatch('getRowId',row.id);//传递获取的行id
            },
            handleSelectionChange(val){//多选操作
                this.$store.commit('setTableSelection',val)
            },
            handleCurrentChange:function(val){//获取当前页码,分页
                if((this.newColArray.length>0||this.updateColArray.length>0)&&this.pageFlag){
                    this.$confirm('当前存在未保存修改项，是否继续翻页?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning',
                        center: true
                        }).then(() => {
                            this.$store.commit('setCurrentPage',val)//跳转至目标分页
                            this.$store.dispatch('InitTable');//初始化表格数据
                            this.$store.commit('setUpdateColArray',[])//置空修改增集合 
                            this.$store.commit('setAddColArray',[])//置空修改增集合 
                        }).catch(() => {
                            this.pageFlag=false;
                            this.$store.commit('setCurrentPage',1)
                            return;     
                    });
                }else if(this.newColArray.length==0&&this.updateColArray.length==0){
                    this.$store.commit('setCurrentPage',val)//跳转至目标分页
                    this.$store.dispatch('InitTable');//初始化表格数据
                    this.$store.commit('setUpdateColArray',[])//置空修改增集合 
                    this.$store.commit('setAddColArray',[])//置空修改增集合 
                }
                setTimeout(() => {this.pageFlag = true}, 1000)
                
            },
            // 数据深拷贝
            // 递归实现一个深拷贝
            deepClone(source){
                if(!source || typeof source !== 'object'){
                    throw new Error('error arguments', 'shallowClone');
                }
                var targetObj = source.constructor === Array ? [] : {};
                for(var keys in source){
                    if(source.hasOwnProperty(keys)){
                        if(source[keys] && typeof source[keys] === 'object'){
                        targetObj[keys] = source[keys].constructor === Array ? [] : {};
                        targetObj[keys] = this.deepClone(source[keys]);
                        }else{
                        targetObj[keys] = source[keys];
                        }
                    } 
                }
                return targetObj;
            },
            // InitUpdateRow(id){//根据id获取修改行数据
            //     let _this=this;
            //     _this.$axios.gets(_this.methodsUrl.getId,{Id:id}).then(function(res){
            //         _this.updateRow=res.result;
            //     })
            // },
            // 对比json对象的方法块
            isObj(object) {  
                return object && typeof (object) == 'object' && Object.prototype.toString.call(object).toLowerCase() == "[object object]";  
            },        
            isArray(object) {  
                return object && typeof (object) == 'object' && object.constructor == Array;  
            }, 
            getLength(object) {  
                var count = 0;  
                for (var i in object) count++;  
                return count;  
            },
            Compare(objA, objB) {  
                if (!this.isObj(objA) || !this.isObj(objB)) return false; //判断类型是否正确  
                if (this.getLength(objA) != this.getLength(objB)) return false; //判断长度是否一致  
                return this.CompareObj(objA, objB, true);//默认为true  
            },  
            CompareObj(objA, objB, flag) {  
                for (var key in objA) {  
                    if (!flag) //跳出整个循环  
                        break;  
                    if (!objB.hasOwnProperty(key)) { flag = false; break; }  
                    if (!this.isArray(objA[key])) { //子级不是数组时,比较属性值  
                        if (objB[key] != objA[key]) { flag = false; break; }  
                    } else {  
                        if (!this.isArray(objB[key])) { flag = false; break; }  
                        var oA = objA[key], oB = objB[key];  
                        if (oA.length != oB.length) { flag = false; break; }  
                        for (var k in oA) {  
                            if (!flag) //这里跳出循环是为了不让递归继续  
                                break;  
                            flag = this.CompareObj(oA[k], oB[k], flag);  
                        }  
                    }  
                }  
                return flag;  
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