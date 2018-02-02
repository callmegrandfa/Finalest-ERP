<template>
    <div class="OuListForm">
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

                <div class="mt20 bgcolor smallBgcolor">
                    <label><small>*</small>组织类型</label>
                    <el-select  v-model="searchData.OuType">
                        <el-option v-for="item in options" :key="item.basOuTypes" :label="item.label" :value="item.basOuTypes">
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor smallBgcolor"><label>编码</label><el-input v-model="searchData.OuCode" placeholder="请录入编码"></el-input></div>
                <div class="bgcolor smallBgcolor"><label>名称</label><el-input v-model="searchData.Name" placeholder="请录入名称"></el-input></div>
                <div class="bgcolor smallBgcolor"><label>所属公司</label><el-input v-model="searchData.CompanyOuId" placeholder="请录入所属公司"></el-input></div>
                <div class="bgcolor smallBgcolor"><label>行政地区</label><el-input v-model="searchData.AreaId" placeholder="请录入行政地区"></el-input></div>
                <div class="bgcolor smallBgcolor"><label>启用状态</label><el-input v-model="searchData.Status" placeholder="请录入启用状态"></el-input></div>
                <div class="bgcolor smallBgcolor">
                    <label></label>
                    <span class="search-btn" @click="SimpleSearch">查询</span>
                    <span class="search-btn">高级搜索</span>
                </div>
            </el-col>

            <el-col :span='19' class="border-left">
                <el-row class="h48 pt5">
                    <button class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
                    <button @click="goDetail" class="erp_bt bt_add"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
                    <button @click="delRow" class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
                    <button class="erp_bt bt_print"><div class="btImg"><img src="../../../static/image/common/bt_print.png"></div><span class="btDetail">打印</span></button>
                    <button class="erp_bt bt_out"><div class="btImg"><img src="../../../static/image/common/bt_inOut.png"></div><span class="btDetail">导出</span></button>
                    <button class="erp_bt bt_version"><div class="btImg"><img src="../../../static/image/common/bt_version.png"></div><span class="btDetail">生成版本</span></button>
                    <button class="erp_bt bt_auxiliary"><div class="btImg"><img src="../../../static/image/common/bt_auxiliary.png"></div><span class="btDetail">辅助功能</span></button>                   
                </el-row>

                <el-row class="pl10 pt10 pr10 pb10">
                    <el-col :span='4' class="tree-container">
                        <el-tree
                        :data="componyTree"
                        :props="defaultProps"
                        node-key="treeId"
                        default-expand-all
                        :expand-on-click-node="true"
                        @node-click="nodeClick">
                        </el-tree>
                    </el-col>

                    <el-col :span='19' class="ml10">
                        <el-table :data="tableData" border style="width: 100%" stripe @selection-change="handleSelectionChange"> ref="multipleTable">
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="ouCode" label="编码"></el-table-column>
                            <el-table-column prop="ouName" label="名称"></el-table-column>
                            <el-table-column prop="ouName" label="简称"></el-table-column>
                            <el-table-column prop="ouParentName" label="上级业务单元"></el-table-column>
                            <el-table-column prop="companyOuId" label="所属公司"></el-table-column>
                            <el-table-column prop="baseCurrencyId" label="本位币种"></el-table-column>
                            <el-table-column prop="creationTime" label="公司成立时间"></el-table-column>
                            <el-table-column prop="status" label="状态"></el-table-column>
                            <el-table-column prop="isCompany" label="公司">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="tableData[scope.$index].isCompany" disabled></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column prop="isPurchase" label="业务">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="tableData[scope.$index].isPurchase" disabled></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column prop="isFinance" label="财务">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="tableData[scope.$index].isFinance" disabled></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作">
                                 <template slot-scope="scope">
                                    <!-- <el-button type="text" size="small"  @click="modify(scope.row)" >修改</el-button> -->
                                    <el-button type="text" size="small"  @click="see(scope.row)" >查看</el-button>
                                </template>
                            </el-table-column>
                        </el-table>  
                        <el-pagination
                        style="margin-top:20px;" 
                        class="text-right" 
                        background layout="total, prev, pager, next" 
                        @current-change="handleCurrentChange"
                        :page-count="totalPage" >
                        </el-pagination>   
                    </el-col>
                </el-row>

            </el-col>
        </el-row>
        
    </div>
</template>

<script>
    export default{
        name:'customerInfor',
        data(){
            return {
                searchData:{
                    OuCode: "",//编码
                    Name: "",//名称
                    CompanyOuId:'',//所属公司
                    AreaId: '',//行政地区
                    Status: '',//启用状态
                    OuType: '',//组织类型
                },
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

                componyTree:  [{
                    treeId: 1,
                    label: '',
                    children:[]
                    }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                pageIndex:-1,//分页的当前页码
                totalPage:0,//当前分页总数
                oneItem:10,//每页有多少条信息
                multipleSelection: [],//复选框选中数据
                page:1,//当前页
                treeCheck:[],
                isClick:[],
                load:true,
            }
        },
        created:function(){       
                let _this=this;
                _this.loadTableData();
                _this.loadTree();
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
                _this.$axios.gets('/api/services/app/OuManagement/GetAll',{SkipCount:(_this.page-1)*_this.oneItem,MaxResultCount:_this.oneItem}).then(function(res){ 
                    _this.tableData=res.result.items;
                    console.log(res)
                    _this.totalPage=Math.ceil(res.result.totalCount/_this.oneItem);
                    },function(res){
                })
            },
            loadTree(){
                let _this=this;
                _this.$axios.gets('/api/services/app/DeptManagement/GetAllByOuId',{id:1})
                .then(function(res){
                    console.log(res)
                    let children=[];
                    if(res.result.length>0){
                        for(let i=0;i<res.result.length;i++){
                            let label=res.result[i].deptName;
                            let treeId=res.result[i].id;
                            let child={'treeId':treeId,'label':label,children:[]}
                            children.push(child)
                        }     
                    }
                    _this.componyTree=[{
                        treeId: 1,
                        label: 'erp',
                        children:children
                        }]
               })
            },
            handleCurrentChange(val) {//页码改变
                 let _this=this;
                 _this.page=val;
                 if(_this.load){
                     _this.loadTableData();
                 }
            },
            SimpleSearch(){//简单搜索
                 let _this=this;
                _this.$axios.gets('/api/services/app/OuManagement/SimpleSearch',_this.searchData)
                .then(function(res){
                    _this.load=false
                    _this.tableData=res.result.basOus;
                    console.log(res);
                },function(res){
                    console.log('err:'+res)
                })
            },
            goDetail(){
                this.$store.state.url='/OuManage/OuManageDetail/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
             handleSelectionChange(val) {//点击复选框选中的数据
                this.multipleSelection = val;
                //console.log(val)
            },
            delRow(){
                let _this=this;
                if(_this.multipleSelection.length>0){//表格
                    for(let i=0;i<_this.multipleSelection.length;i++){
                        _this.$axios.deletes('/api/services/app/OuManagement/Delete',{id:_this.multipleSelection[i].id})
                        .then(function(res){
                            if(_this.load){
                                _this.loadTableData();
                            }
                            
                            _this.open('删除成功','el-icon-circle-check','successERP');
                            // for(let x=0;x<_this.tableData.length;x++){
                            //     if(_this.tableData[x].id==_this.multipleSelection[i].id&&typeof(_this.tableData[x].id)!='undefined'){
                            //         console.log(_this.tableData[x]);
                            //         _this.tableData.splice(x, 1);
                            //     }
                            // }
                        },function(res){
                            _this.open('删除失败','el-icon-error','faildERP');
                            //console.log('err:'+res)
                        })
                    }
                };

                // if(_this.treeCheck.length>0){//tree
                //     for(let i=0;i<_this.treeCheck.length;i++){
                //         _this.$axios.deletes('/api/services/app/DeptManagement/Delete',{id:_this.treeCheck[i]})
                //         .then(function(res){    
                //           _this.loadTree();
                //         },function(res){
                //             console.log('err:'+res)
                //         })
                //     }
                // }

            },
            // checkChange(data,check){
            //     let _this=this;
            //     let add=false;
            //     if(check){
            //         _this.treeCheck.push(data.treeId);
            //     }else{
            //         for(let i=0;i<_this.treeCheck.length;i++){
            //             if(_this.treeCheck[i]==data.treeId){
            //                 _this.treeCheck.splice(i,1);
            //             }
            //         }
            //     }
            // },
            nodeClick(data){
                 let _this=this;
                 let flag=false;
                 if(_this.isClick.length>0){
                     for(let i=0;i<_this.isClick.length;i++){
                        if(_this.isClick[i]==data.treeId){
                            flag=false
                            break;
                        }else{
                            flag=true;
                        }
                    }
                 }else{
                     flag=true;
                 }
                 
                //  console.log(flag)
                 if(data.treeId!=1&&flag){
                     _this.$axios.gets('/api/services/app/DeptManagement/GetAllByOuId',{id:data.treeId})
                    .then(function(res){
                        _this.isClick.push(data.treeId);
                        //console.log(res)
                        if(res.result.length>0){
                            for(let i=0;i<res.result.length;i++){
                                let label=res.result[i].deptName;
                                let treeId=res.result[i].id;
                                let child={'treeId':treeId,'label':label,children:[]}
                                data.children.push(child)
                            }
                        }
                    })
                 }
                
            },
            modify(row){
                this.$store.state.url='/OuManage/OuManageModify/'+row.id
                this.$router.push({path:this.$store.state.url})//点击切换路由OuManage
            },
            see(row){
                this.$store.state.url='/OuManage/OuManageSee/'+row.id
                this.$router.push({path:this.$store.state.url})//点击切换路由
            }
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
    min-height: 380px;
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
.OuListForm .el-button+.el-button{
    margin-left: 0;
}
/* 重写checkbox */
.tree-container .el-checkbox__inner {
        width: 12px;
        height: 12px;
        border-radius: 0;
    }   
   .tree-container .el-checkbox__inner::after{
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 8px;
        left: 3px;
        position: absolute;
        top: 0px;
        width: 4px;
    }

/* 重写el-table样式 */
.OuListForm .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.OuListForm .el-table td{
    padding: 3px 0;
}
.OuListForm .el-table__body{
    text-align: center;
}
</style>