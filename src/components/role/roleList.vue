<template>
    <div class="roleList">
        <el-row class="bg-white">
            <el-col :span="5">
                <el-row class="h48 pl15">
                    <el-col :span="18">
                        <i class="el-icon-search"></i>
                        <span>查询</span>
                    </el-col>
                    <el-col :span="5">
                        <span class="fs12 open">+ 展开</span>
                    </el-col>
                </el-row>

                <!-- <div class="mt20 bgcolor smallBgcolor">
                    <label><small>*</small>组织类型</label>
                    <el-select  v-model="searchData.OuType">
                        <el-option v-for="item in options" :key="item.basOuTypes" :label="item.label" :value="item.basOuTypes">
                        </el-option>
                    </el-select>
                </div> -->
                <div class="mt20 bgcolor smallBgcolor"><label>角色编码</label><el-input v-model="searchData.roleCode" placeholder=""></el-input></div>
                <div class="bgcolor smallBgcolor"><label>角色名称</label><el-input v-model="searchData.displayName" placeholder=""></el-input></div>
                <div class="bgcolor smallBgcolor"><label>所属组织</label><el-input v-model="searchData.ouId" placeholder=""></el-input></div>
                <div class="bgcolor smallBgcolor"><label>上级用户组(无字段)</label><el-input v-model="searchData.UserType" placeholder="无字段"></el-input></div>
                <div class="bgcolor smallBgcolor">
                    <label></label>
                    <span class="search-btn" @click="SimpleSearchClick">查询</span>
                </div>
            </el-col>

            <el-col :span='19' class="border-left">
                <el-row class="h48 pt5">
                    <button class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
                    <button @click="goDetail" class="erp_bt bt_add"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
                    <button @click="confirm" class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
                    <button class="erp_bt bt_in"><div class="btImg"><img src="../../../static/image/common/bt_inOut.png"></div><span class="btDetail">导入</span></button>
                    <button class="erp_bt bt_out bt_width">
                        <div class="btImg"><img src="../../../static/image/common/bt_inOut.png"></div>
                        <span class="btDetail">导出</span>
                        <div class="btRightImg"><img src="../../../static/image/common/bt_down_right.png"></div>
                    </button>
                    <button class="erp_bt bt_start"><div class="btImg"><img src="../../../static/image/common/bt_start.png"></div><span class="btDetail">启用</span></button>
                    <button class="erp_bt bt_stop"><div class="btImg"><img src="../../../static/image/common/bt_stop.png"></div><span class="btDetail">停用</span></button>             
                </el-row>

                <el-row class="pl10 pt10 pr10 pb10">

                    <el-col :span='24'>
                        <el-table 
                        v-loading="tableLoading"
                        :data="tableData" 
                        border 
                        style="width: 100%" 
                        stripe 
                        @selection-change="handleSelectionChange" 
                        ref="multipleTable">
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="roleCode" label="角色编码"></el-table-column>
                            <el-table-column prop="displayName" label="角色名称"></el-table-column>
                            <el-table-column prop="ouId" label="所属组织"></el-table-column>
                            <el-table-column prop="status" label="状态"></el-table-column>
                            <el-table-column label="创建时间(无字段)" width="160">
                                <template slot-scope="scope">
                                    <el-date-picker
                                    format="yyyy.MM.dd"
                                    v-model="tableData[scope.$index].createdTime " 
                                    type="datetime" 
                                    readonly
                                    align="center"></el-date-picker>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作">
                                 <template slot-scope="scope">
                                     <el-button type="text" size="small"  @click="confirmDelThis(scope.row)">删除</el-button>
                                    <el-button type="text" size="small"  @click="see(scope.row)" >查看</el-button>
                                    <!-- <el-button type="text" size="small"  @click="see(scope.row)" >查看</el-button> -->
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination
                        style="margin-top:20px;" 
                        class="text-right" 
                        background layout="total,prev, pager, next,jumper" 
                        @current-change="handleCurrentChange"
                        :current-page="pageIndex"
                        :page-size="oneItem"
                        :total="totalItem">
                        </el-pagination>   
                    </el-col>
                </el-row>

            </el-col>
        </el-row>
        
    </div>
</template>

<script>
    export default{
        data(){
            return {
                tableLoading:false,
                treeLoading:false,
                searchData:{
                    OuCode: "",//编码
                    Name: "",//名称
                    CompanyOuId:'',//所属公司
                    AreaId: '',//行政地区
                    Status: '',//启用状态
                    OuType: '',//组织类型
                },
                searchDataClick:{},
                tableSearchData:{},
                options: [{
                    basOuTypes: '1',
                    label: '1'
                    }, {
                    basOuTypes: '2',
                    label: '2'
                    }, {
                    basOuTypes: '3',
                    label: '3'
                    }, {
                    basOuTypes: '4',
                    label: '4'
                    }, {
                    basOuTypes: '5',
                    label: '5'
                    }, {
                    basOuTypes: '6',
                    label: '6'
                    }, {
                    basOuTypes: '7',
                    label: '7'
                    }, {
                    basOuTypes: '8',
                    label: '8'
                    }, {
                    basOuTypes: '9',
                    label: '9'
                    }],
                tableData:[],

                componyTree:  [],
                defaultProps: {
                    children: 'items',
                    label: 'deptName',
                    id:'id'
                },
                pageIndex:1,//分页的当前页码
                totalPage:0,//当前分页总数
                oneItem:10,//每页有多少条信息
                multipleSelection: [],//复选框选中数据
                page:1,//当前页
                treeCheck:[],
                isClick:[],
                load:true,
                totalItem:0,//总共有多少条消息
                searchBtClick:false,
            }
        },
        created:function(){       
                let _this=this;
                _this.loadTableData();
             },
        methods:{
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
            loadTableData(){//表格
                let _this=this;
                _this.tableLoading=true
                _this.$axios.gets('/api/services/app/Role/GetAll',{SkipCount:(_this.page-1)*_this.oneItem,MaxResultCount:_this.oneItem}).then(function(res){ 
                    console.log(res)
                    _this.tableData=res.result.items;
                    _this.totalItem=res.result.totalCount
                    _this.totalPage=Math.ceil(res.result.totalCount/_this.oneItem);
                    _this.tableLoading=false;
                    },function(res){
                    _this.tableLoading=false;
                })
            },
            handleCurrentChange(val) {//页码改变
                 let _this=this;
                 _this.page=val;
                 if(_this.load){
                     _this.loadTableData();
                 }else{
                     _this.SimpleSearch();
                 }
            },
            SimpleSearchClick(){
                let _this=this;
                 _this.load=false;
                 _this.searchBtClick=true;
                 _this.tableLoading=true;
                 _this.searchDataClick={
                    roleCode:_this.searchData.roleCode,//
                    displayName: _this.searchData.displayName,//
                    ouId: _this.searchData.ouId,//
                    status: _this.searchData.status,
                    sorting:'',
                }
                _this.SimpleSearch();
            },
            SimpleSearch(){//简单搜索
                 let _this=this;
                 _this.searchDataClick.SkipCount=(_this.page-1)*_this.oneItem;
                 _this.searchDataClick.MaxResultCount=_this.oneItem;
                 console.log(_this.searchDataClick)
                _this.$axios.gets('/api/services/app/Role/GetAll',_this.searchDataClick)
                .then(function(res){
                    _this.totalItem=res.result.totalCount
                    _this.totalPage=Math.ceil(res.result.totalCount/_this.oneItem);
                    _this.tableData=res.result.items;
                    _this.tableLoading=false;
                    _this.searchBtClick=false;
                },function(res){
                     _this.tableLoading=false;
                     _this.searchBtClick=false;
                })
            },
            goDetail(){
                this.$store.state.url='/role/roleDetail/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
             handleSelectionChange(val) {//点击复选框选中的数据
                this.multipleSelection = val;
            },
            confirm(){
                let _this=this;
                if(_this.multipleSelection.length>0){//表格
                    _this.$confirm('确定删除?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning',
                        center: true
                    }).then(() => {//确认
                        _this.delRow()
                    }).catch(() => {//取消
                    });
                }   
            },
            delRow(){
                let _this=this;
                for(let i=0;i<_this.multipleSelection.length;i++){
                    _this.$axios.deletes('/api/services/app/OuManagement/Delete',{id:_this.multipleSelection[i].id})
                    .then(function(res){
                        if(_this.load){
                            _this.loadTableData();
                        }else{
                            _this.SimpleSearch();
                        }
                        _this.open('删除成功','el-icon-circle-check','successERP');
                    },function(res){
                        _this.open('删除失败','el-icon-error','faildERP');
                    })
                }
            },
            see(row){
                this.$store.state.url='/role/roleModify/'+row.id
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
            confirmDelThis(row){
                let _this=this;
                _this.$confirm('确定删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {//确认
                    _this.delThis(row)
                }).catch(() => {//取消
                });
            },
            delThis(row){//删除行
                let _this=this;
                _this.$axios.deletes('/api/services/app/Role/Delete',{id:row.id})
                .then(function(res){
                    _this.open('删除成功','el-icon-circle-check','successERP');
                    _this.loadTableData();
                },function(res){
            })
      },
        },
    }
</script>

<style scoped>
.store-data-wrapper{
    width: 100%;
    height: auto;
}
.bg-white{
    background: white;
    border-radius: 3px;
}
.input-need{
    outline: none;
    border:none;
    width: 100%;
    height: 28px;
}
.h48{
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #E4E4E4;
}
.mt5{
    margin-top: 5px;
}
.mt10{
    margin-top: 10px;
}
.mt20{
    margin-top: 20px;
}

.ml10{
    margin-left: 10px;
}
.pl10{
    padding-left: 10px;
}
.pl15{
    padding-left: 15px;
}
.pt10{
    padding-top: 10px;
}
.pt5{
    padding-top: 5px;
}
.pt20{
    padding-top: 20px;
}
.pb10{
    padding-bottom: 10px;
}
.pr10{
    padding-right: 10px;
}
.h30{
    height: 30px;
    line-height: 30px;
}
.fs14{
    font-size: 14px;
    color: rgba(0, 0, 0, 0.349019607843137);
}
.fs12{
    font-size: 12px;
}
.border1{
    border: 1px solid #999999;
    border-radius: 3px;
}
.border-left{
    border-left: 1px solid #E4E4E4;
    min-height: 498px;
}
.btn{
    display: inline-block;
    width: 100%;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: rgba(130, 170, 252, 1);
    color: white;
    border-radius: 3px;
    cursor: pointer;
}
.rbtn{
    display: inline-block;
    width: 100%;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: rgba(242, 242, 242, 1);
    border-radius: 3px;
    cursor: pointer;
}
.open{
    display: inline-block;
    width: 49px;
    height: 22px;
    line-height: 22px;
    border: 1px solid #cccccc;
    color: #cccccc;
    text-align: center;
    cursor: pointer;
}
</style>

<style>
.tenant-management-wrapper .el-input input{
    border:none;
    height: 30px;
    line-height: 30px;
    padding-left: 0;
}
.roleList .el-button+.el-button{
    margin-left: 0;
}

</style>