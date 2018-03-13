<template>
    <div class="customer-infor-wrapper" style="float:left;background:#fff;width:100%;">
        <el-col  :span="ifWidth?6:0" v-show="ifWidth">
            <el-row class="bg-white" id="left-box">
                    <el-col>
                        <el-row class="h48 pl15 topSearch">
                            <el-col :span="18">
                                <i class="el-icon-search"></i>
                                <span class="topSearch">查询</span>
                            </el-col>
                            <el-col :span="5">
                                <div class="circle" @click="closeLeft"><span class="circleContent">-</span></div>
                            </el-col>
                        </el-row>
                        <div style="margin-top:20px">
                            <el-row v-for="item in info.demand" :key="item.place">
                                <el-col :span="8" >
                                    <div class="bgcolor">
                                        <label><small>{{item.must}}</small>{{item.title}}</label>
                                    </div>
                                </el-col>
                                <el-col :span="14" v-if="!item.options">
                                    <div class="bgcolor smallInput">
                                        <el-input :placeholder="item.place" :v-model="item.model"></el-input>
                                    </div>
                                </el-col>
                                <el-col :span="14" v-else>
                                    <div class="bgcolor">
                                        <el-select  v-model="item.model" >
                                            <el-option  v-for="itemnode in item.options" :key="itemnode.value" :label="itemnode.label" :value="itemnode.value">
                                            </el-option>
                                        </el-select>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <el-row>
                            <el-col :span="8">&nbsp;</el-col>
                            <el-col style="text-align:center;margin-bottom:20px;" :span="14">
                                <span class="search-btn" @click="search"  style="float:left;margin-left:10px;">查询</span>
                            </el-col>
                        </el-row>
                    </el-col>
            </el-row>
        </el-col>
        <el-col :span="ifWidth?18:24">
            <div id="bgc">
                <el-row class="h48">
                     <el-col :span='2' class="search-block"  v-show="!ifWidth">
                        <div style="display:inline-block" @click="openLeft">
                            <img src="../../../static/image/common/search_btn.png">
                        </div>
                        <div style="display:inline-block;margin-left:2px;font-size:16px;" @click="openLeft">
                            <span>查询</span>
                        </div>
                        <div class="out-img" @click="openLeft">
                            <span>+</span>
                        </div>
                    </el-col>
                    
                    <el-col :span="22" class="border-left">
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
                                    <el-col :span="8">
                                        <div class="search-input">
                                            <el-input
                                                placeholder="搜索..."
                                                prefix-icon="el-icon-search"
                                                v-model="searchContent"
                                                class="search-wid">
                                            </el-input>
                                        </div>
                                    </el-col>
                                </el-row>
                                
                               
                    </el-col>
                </el-row> 
                 <el-row class="pb10">
                        <div id="bg-white" style="background-color: rgba(251, 252, 253, 1);">

                                    
                            <el-table :data="allList" border style="width: 100%"  @selection-change="handleSelectionChange">
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
                                    <el-button type="text" size="small" @click="delRow(scope.row)">删除</el-button>
                                </template>
                                </el-table-column>
                            </el-table>
                                        
                            <el-col :span="12">
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
            </div>
        </el-col>   	    
       
    </div>
</template>

<script>
    export default{
        name:'staffList',
        data(){
            return {
                allList:[],//所有数据
                totalCount:0,
                searchContent:'',
                currentPage4:0,
                info:{
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
                multipleSelection: [],//复选框选中数据
                tableData:[],
                ifWidth:true,//控制左侧搜索展开
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
            // 左侧搜索展开--------------------------------
            closeLeft:function(){
                let self = this;
                self.ifWidth = false;
            },
            openLeft:function(){
                let self = this;
                self.ifWidth = true;
            },
            // ------------------------------------------
            // 查询
            search(up){
                console.log(up)
            },
            // 
            handleSelectionChange:function(val){//点击复选框选中的数据
                this.multipleSelection = val;
            },
            // 提示信息
            open(tittle,iconClass,className) {
                this.$notify({
                position: 'bottom-right',
                iconClass:iconClass,
                title: tittle,
                showClose: false,
                duration: 3000,
                customClass:className
                });
            },
            // 添加数据
            addStaff:function(){//点击切换路由去添加
                this.$store.state.url='/staff/staffDetail/default'
                this.$router.push({path:this.$store.state.url})
                
            },
            // 按钮删除
            delSelected:function(){
                // console.log('这是按钮批量删除')
                let _this=this;
                if(_this.multipleSelection.length>0){//表格
                    for(let i=0;i<_this.multipleSelection.length;i++){
                        _this.$axios.deletes('/api/services/app/EmployeeManagement/Delete',{id:_this.multipleSelection[i].id})
                        .then(function(res){
                            _this.loadAllList();
                            _this.open('删除成功','el-icon-circle-check','successERP');
                        },function(res){
                            _this.open('删除失败','el-icon-error','faildERP');
                            //console.log('err:'+res)
                        })
                    }
                };
            },
            // （行内按钮查看）查看详情
            checkDetail:function(row){
                // console.log(row.id)
                this.$store.state.url='/staff/staffModify/'+row.id
                this.$router.push({path:this.$store.state.url})
            },
            
            // 行内删除
            delRow:function(row){
                 this.$axios.deletes('/api/services/app/EmployeeManagement/Delete',{id:row.id})
                .then(
                    rsp=>{
                        this.getAllList();
                        this.open('删除成功','el-icon-circle-check','successERP');

                    }
                )
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
    .search-btn{
        font-size: 12px;
        display: inline-block;
        width: 87px;
        height: 30px;
        line-height: 30px;
        border-radius: 3px;
        background: #4A6997;
        color: white;
        cursor: pointer;
    }
    .bgcolor .el-input input {
    border: 1px solid rgb(194, 202, 216);
    height: 30px;
    line-height: 30px;
    }
    .el-input--prefix .el-input__inner {
    padding-left: 30px;
    border-radius: 30px;
    }
    .el-table .cell{
        font-size:12px;
        color:#000;
    }
    .search-input{
        position:absolute;
        bottom:-1px;
    }
</style>
<style scoped>
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
    .topSearch{
        font-size:18px;
    }
    .el-icon-search:before {
        padding-left:10px;
        content: "\E619";
        font-weight: 900;
        font-size: 18px;
        color: rgb(51, 204, 204);
    }
    .circle{
       display: inline-block;
        height: 15px;
        width: 15px;
        font-weight: 900;
        color: rgb(161, 161, 161);
        border: 1px solid rgb(194, 202, 216);
        border-radius: 50%;
        vertical-align: middle;
        position: relative;
        float:right;
        margin-top: 16px;
        cursor:pointer;
    }
    .circleContent{
       display: inline-block;
        position: absolute;
        top: 4%;
        left: 25%;
        height: 1px;
        width: 1px;
        line-height: 10px;
    }
</style>
