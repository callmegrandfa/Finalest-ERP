<template>
    <div class="customer-infor-wrapper" style="float:left;background:#fff;width:100%;">
       	<query :data="querychend"></query>     
        <div id="bgc">
	        <el-row >
	            <el-col :span="24" class="border-left">
                    <el-row class="h48 pt5">
                        <el-col :span="16">
                                <button class="erp_bt bt_add" @click="addStaff">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_add.png">
                                </div>
                                <span class="btDetail">新增</span>
                            </button>


                            <button class="erp_bt bt_del" @click="delSelected">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_del.png">
                                </div>
                                <span class="btDetail">删除</span>
                            </button>

                            
                            <button class="erp_bt bt_auxiliary">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_auxiliary.png">
                                </div>
                                <span class="btDetail">辅助功能</span>
                            </button>


                            <button class="erp_bt bt_excel">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_excel.png">
                                </div>
                                <span class="btDetail">Excel</span>
                            </button>

                            <button class="erp_bt bt_print">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_print.png">
                                </div>
                                <span class="btDetail">打印</span>
                            </button>
                        </el-col>
                        <el-col :span="8" class="h48 lh48">
                            <el-input
                                placeholder="搜索..."
                                prefix-icon="el-icon-search"
                                v-model="searchContent"
                                class="search-wid">
                            </el-input>
                        </el-col>
                    </el-row>
                       
	                <el-row class="pb10">
	                	 <div id="bg-white" style="background-color: rgba(251, 252, 253, 1);">

                         
                            <el-table :data="allList" border style="width: 100%">
                                <el-table-column type="selection" width="50">
                                </el-table-column>
                                <el-table-column prop="employeeCode" label="职员编码" width="120" fixed>
                                </el-table-column>
                                <el-table-column prop="employeeName" label="职员名称"  width="120">
                                </el-table-column>
                                <el-table-column prop="mobile" label="手机号码" width="120">
                                </el-table-column>
                                <el-table-column prop="deptName" label="所属部门"
                                width="120">
                                </el-table-column>
                                <el-table-column prop="sex" label="性别"
                                width="120">
                                </el-table-column>
                                <el-table-column prop="birthday" label="生日"
                                width="120">
                                </el-table-column>
                                <el-table-column prop="employeeTypes" label="职员类型"
                                width="120">
                                </el-table-column>
                                <el-table-column prop="shopName" label="所属店铺"
                                width="120">
                                </el-table-column>
                                <el-table-column label="操作" width="120" fixed="right">
                                    <template slot-scope="scope">
                                        <el-button @click="checkDetail(scope.row)" type="text" size="small">查看</el-button>
                                        <el-button type="text" size="small" @click="delRow">删除</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
  

                             <el-col :span="18">
                                <el-pagination @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page="currentPage4"
                                :page-sizes="[10, 20, 30, 40]"
                                :page-size="10"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="totalCount">
                                </el-pagination>
                            </el-col>

                         </div> 
	                </el-row>
	            </el-col>
	        </el-row>
        </div>
    </div>
</template>

<script>
    import Query from '../../base/query/query'
    import Tree from '../../base/tree/tree'
    export default{
        name:'staffList',
        data(){
            return {
                allList:[],//所有数据
                totalCount:0,
                searchContent:'',
                currentPage4:0,
                querychend:{
                    up:'',
                    demand:[
                        {must: '',title: '职员编码',place: ''},
                        {must: '',title: '职员名称',
                            options:[
                                {value: '选项1',label: '仓库'},
                                {value: '选项2',label: '地址'},
                                {value: '选项3',label: '总部'},
                                {value: '选项4',label: '总部2'},
                                {value: '选项5',label: '北京烤鸭'}
                                ],
                            place: '',
                        },
                        {must: '',title: '部门',options:[
                            {value: '选项1',label: '仓库'},
                                {value: '选项2',label: '地址'},
                                {value: '选项3',label: '总部'},
                                {value: '选项4',label: '总部2'},
                                {value: '选项5',label: '北京烤鸭'}
                                ],          
                        },
                        {must: '',title: '店铺',options:[
                            {value: '选项1',label: '仓库'},
                                {value: '选项2',label: '地址'},
                                {value: '选项3',label: '总部'},
                                {value: '选项4',label: '总部2'},
                                {value: '选项5',label: '北京烤鸭'}
                                ],          
                        },
                ]},
                tableData:[],
            }
        },        
        created:function(){       
            this.getAllList();
        },
        methods: {
            // 获取所有数据，默认渲染所有数据
            getAllList:function(){
                this.$axios.gets('/api/services/app/EmployeeManagement/GetAll').then(
                         rsp=>{
                        console.log(rsp.result);
                        this.allList=rsp.result.items;
                        this.totalCount=rsp.result.totalCount;
                    }
                    
                )
            },
            // 添加数据
            addStaff:function(){//点击切换路由，到详情页添加
                this.$store.state.url='/staff/staffDetail/default'
                this.$router.push({path:this.$store.state.url})
                
            },
            // 按钮删除
            delSelected:function(){
                console.log('这是按钮删除')
            },
            // （行内按钮查看）查看详情
            checkDetail:function(row){
                // console.log(row.id)
                this.$store.state.url='/staff/staffDetail/'+row.id
                this.$router.push({path:this.$store.state.url})
            },
            
            // 行内删除
            delRow:function(){
                console.log("这是行内删除");
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
             handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
             }
        },
        mounted:function(){   
            let content1=document.getElementById('bg-white');//设置高度为全屏
            let height1=window.innerHeight-123;
            content1.style.minHeight=height1+'px';
        },              
        components:{
            Query,
            Tree
        }
    }
</script>


<style>
    .lh48{
        line-height:48px;
    }
    .fr{
        float:right;
    }
    .pr5{
        padding-right:5px;
    }
    .bgd{
        float: left;
        width: calc(100% - 200px);
    }
    #bgc{
        float: left;
        width: calc(100% - 275px);
        background-color: #fff;
    }
    .pl10{
        padding-left: 10px;
    }
    .pt10{
        padding-top: 10px;
    }
    .el-checkbox__inner{
        width: 16px;
        height: 16px;
        background: #f4f4f5;
    }
    .el-checkbox__inner::after{
        left: 4px;
        top: -2px;
    }
    .el-icon-search:before {
    content: "\E619";
    font-weight: 900;
    font-size: 16px;
    }
    .el-input__inner{
        height: 30px;
    }
    .ai .el-input__inner{
        border: none;
    }
    .el-select .el-input {
    width: 130px;
  }
  .input-with-select {
    background-color: #fff;
  }
  .search-wid{
      width:200px;
  }
.el-input-group--append .el-input__inner, .el-input-group__prepend {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 150px;
    height:30px;
}
.fr{
    float:right;
}
.h48{
        height: 48px;
        line-height: 48px;
        border-bottom: 1px solid #E4E4E4;
}
.pt5{
        padding-top: 5px;
    }
.el-input-group>.el-input__inner {
    vertical-align: middle;
    display: table-cell;
    padding-top: 10px;
}
</style>
<style scoped>
    .smallBgcolor .el-select{
        width: 100% !important ;
        margin-left: 10px;
    }
    .bgcolor label{
        width: 100% !important ;
        margin-right: 0; 
    }
    .smallBgcolor .el-input{
        width: 100% !important ;
        margin-left: 10px;
    }

    .bgcolor{
        overflow:  visible; 
    }
    .bg-white{
        background: white;
        border-radius: 3px;
    }
    .bm-pd10{
        border-bottom: 1px solid #e4e4e4;
        margin: 10px 0;
    }
    .shop-title{
        float: left;
        height: 40px;
        line-height: 40px;
        margin: 0;
        cursor: pointer;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: 3px solid rgb(51,204,204);
        color: #000;
        padding: 0 20px;
    }
    .pb10{
        padding-bottom: 10px;
    }
    .pr10{
        padding-right: 10px;
    }
    .border-left{
        border-left: 1px solid #E4E4E4;
    }
</style>
