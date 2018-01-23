<template>
    <div class="group-management-wrapper">
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
                    <el-select  v-model="searchData.basOuTypes">
                        <el-option v-for="item in options" :key="item.basOuTypes" :label="item.label" :value="item.basOuTypes">
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor smallBgcolor"><label>编码</label><el-input v-model="searchData.ouCode" placeholder="请录入单号"></el-input></div>
                <div class="bgcolor smallBgcolor"><label>名称</label><el-input v-model="searchData.ouName" placeholder="请录入单号"></el-input></div>
                <div class="bgcolor smallBgcolor"><label>所属公司</label><el-input v-model="searchData.companyOuId" placeholder="请录入单号"></el-input></div>
                <div class="bgcolor smallBgcolor"><label>行政地区</label><el-input v-model="searchData.areaId" placeholder="请录入单号"></el-input></div>
                <div class="bgcolor smallBgcolor"><label>启用状态</label><el-input v-model="searchData.status" placeholder="请录入单号"></el-input></div>
                <el-col style="text-align:center;" :span="24">
                    <span class="search-btn" @click="searching">查询</span>
                    <span class="search-btn">高级搜索</span>
                </el-col>
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
                        <el-tree :data="componyTree"></el-tree>
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
                            <el-table-column prop="effectiveStart" label="启用年月"></el-table-column>
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
               
                try:{
                "groupId": 2,
                "stockId": 1,
                "addressId": 8,
                "completeAddress": "str33ing",
                "transportMethodId": 1,
                "contactPerson": "stri55ng",
                "phone": "18200326666",
                "logisticsCompany": "str55ing",
                "isDefault": true,
                "remark": "st54ring"
                },
                searchData:{
                    groupId:'1',//
                    ouCode: "",//编码
                    ouName: "",//名称
                    companyOuId:'',//所属公司
                    areaId: '',//行政地区
                    status: '',//启用状态
                    basOuTypes: '',//组织类型
                },
                options: [{
                    basOuTypes: '1',
                    label: '10'
                    }, {
                    basOuTypes: '2',
                    label: '20'
                    }, {
                    basOuTypes: '3',
                    label: '30'
                    }, {
                    basOuTypes: '4',
                    label: '40'
                    }, {
                    basOuTypes: '5',
                    label: '50'
                    }, {
                    basOuTypes: '6',
                    label: '60'
                    }, {
                    basOuTypes: '7',
                    label: '70'
                    }, {
                    basOuTypes: '8',
                    label: '80'
                    }, {
                    basOuTypes: '9',
                    label: '90'
                    }],
                tableData: [{
                    ouCode: '',
                    ouName: '',
                    ouName: '',
                    ouParentName: '',
                    companyOuId:'',
                    baseCurrencyId:'',
                    effectiveStart:'',
                    status:'',
                    isCompany:'',
                    isPurchase:'',
                    isFinance:'',
                    id:'',
                    },],

                    componyTree: [{
                        label: '宝胜国际',
                        children: [{
                            label: '二级 2-1',
                            children: [{
                            label: '三级 2-1-1'
                            }]
                        }, {
                            label: '二级 2-2',
                            children: [{
                            label: '三级 2-2-1'
                            }]
                        }]
                        }],
                    
                    pageIndex:-1,//分页的当前页码
                    totalPage:0,//当前分页总数
                    oneItem:10,//每页有多少条信息
                    multipleSelection: [],//复选框选中数据
                    
            }
        },
        created:function(){       
                let _this=this;
                _this.loadTableData();
                _this.loadTreeData();
             },
        methods:{
            loadTableData(){//表格
                 let _this=this;
                _this.$axios.gets('/api/services/app/OuManagement/GetAll',{SkipCount:0,MaxResultCount:_this.oneItem}).then(function(res){ 
                    _this.tableData=res.result.items;
                        _this.totalPage=Math.ceil(res.result.totalCount/_this.oneItem);
                    },function(res){
                })
            },
            loadTreeData(){//树形控件
                 let _this=this;
                _this.$axios.gets('/api/services/app/DeptManagement/GetAllByOuId',{id:1}).then(function(res){
                    //console.log(res)
                },function(res){
                })
            },
            handleCurrentChange(val) {//页码改变
                 let _this=this;
                _this.$axios.gets('/api/services/app/OuManagement/GetAll',{SkipCount:(val-1)*_this.oneItem,MaxResultCount:_this.oneItem}).then(function(res){
                    _this.tableData=res.result.items;
                    _this.totalPage=Math.ceil(res.result.totalCount/_this.oneItem);
                    },function(res){ 
                    })
            },
            searching(){//搜索
                //  let _this=this;
                // _this.$axios.posts('/api/services/app/OuManagement/Create',_this.searchData)
                // .then(function(res){
                //     console.log(res);
                // },function(res){
                //     console.log('err:'+res)
                // })
            },
            goDetail(){
                this.$store.state.url='/groupManage/default/detail/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
             handleSelectionChange(val) {//点击复选框选中的数据
                this.multipleSelection = val;
                //console.log(val)
            },
            delRow(){
                let _this=this;
                if(_this.multipleSelection.length>0){
                    for(let i=0;i<_this.multipleSelection.length;i++){
                        _this.$axios.deletes('/api/services/app/OuManagement/Delete',{id:_this.multipleSelection[i].id})
                        .then(function(res){
                             _this.loadTableData();
                            // for(let x=0;x<_this.tableData.length;x++){
                            //     if(_this.tableData[x].id==_this.multipleSelection[i].id&&typeof(_this.tableData[x].id)!='undefined'){
                            //         console.log(_this.tableData[x]);
                            //         _this.tableData.splice(x, 1);
                            //     }
                            // }
                        },function(res){
                            console.log('err:'+res)
                        })
                    }
                };  
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
/* 重写checkbox */
.tenant-management-wrapper .el-checkbox__inner{
    width: 24px;
    height: 24px;
    border-radius:50% !important; 
}
.tenant-management-wrapper .el-checkbox__inner::after{
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    content: "";
    border: 3px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 11px;
    left: 6px;
    position: absolute;
    top: 1px;
    -webkit-transform: rotate(45deg) scaleY(0);
    transform: rotate(45deg) scaleY(0);
    width: 6px;
    -webkit-transition: -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms,-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    -webkit-transform-origin: center;
    transform-origin: center;
}

/* 重写el-table样式 */
.group-management-wrapper .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.group-management-wrapper .el-table td{
    padding: 3px 0;
}
.group-management-wrapper .el-table__body{
    text-align: center;
}
</style>