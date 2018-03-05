<template>
    <div class="tenant-management-wrapper" style="background:#fff;width:100%;">
        
        <el-row  id="pbu"  class="border-left">
            <el-col :span='24' >
                <btm :date="bottonbox" v-on:listbtm="btmlog"> </btm>
                <el-row class="pt10  table-width" >

                    <el-col :span='24' class="">
                        <el-table :data="tableData" @selection-change="handleSelectionChange"  border style="width: 100%" stripe>
                            <el-table-column type="selection" label="操作">
                            </el-table-column>
                            <el-table-column prop="tenantCode" label="租户编码" ></el-table-column>
                            <el-table-column prop="tenantName" label="租户名称"></el-table-column>
                            <el-table-column prop="phone" label="手机号码"></el-table-column>
                            <el-table-column prop="data" label="启用年月"></el-table-column>
                            <el-table-column prop="area" label="行政地区"></el-table-column>
                            <el-table-column prop="status" label="当前状态"></el-table-column>
                            <el-table-column  label="当前状态">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" @click="modify(scope.row)"  >查看</el-button>
                                </template>
                            </el-table-column>
                        </el-table>  
                        <el-pagination style="margin-top:20px;" class="text-right" background layout="total, prev, pager, next"  :page-count="totalPage" ></el-pagination>   
                    </el-col>
                </el-row>

            </el-col>
        </el-row>
        
    </div>
</template>

<script>
import Query from '../../base/query/query'
import Btm from '../../base/btm/btm'
import Tree from '../../base/tree/tree'
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
                bottonbox:{
                    url: '/tenant/tenantManagementAdd',
                   botton:[{
                    class: 'erp_bt bt_add',
                    imgsrc: '../../../static/image/common/bt_add.png',
                    text: '新增'
                },{
                    class: 'erp_bt bt_del',
                    imgsrc: '../../../static/image/common/bt_del.png',
                    text: '删除'
                },{
                    class: 'erp_bt bt_print',
                    imgsrc: '../../../static/image/common/bt_modify.png',
                    text: '打印'
                },{
                    class: 'erp_bt bt_excel',
                    imgsrc: '../../../static/image/common/bt_excel.png',
                    text: 'Excel'
                },{
                    class: 'erp_bt bt_version',
                    imgsrc: '../../../static/image/common/bt_start.png',
                    text: '启用'
                },{
                    class: 'erp_bt bt_auxiliary',
                    imgsrc: '../../../static/image/common/bt_stop.png',
                    text: '停用'
                }]},
                value: '',
                tableData: [{
                    ifAction:true,
                    tenantCode: '租户编码',
                    tenantName: '租户名称',
                    phone: '手机号码',
                    data: '启用年月',
                    area:'行政地区',
                    status:'当前状态',
                    }, {
                        ifAction:true,
                        tenantCode: '租户编码',
                        tenantName: '租户名称',
                        phone: '手机号码',
                        data: '启用年月',
                        area:'行政地区',
                        status:'当前状态',
                    }, {
                        ifAction:true,
                        tenantCode: '租户编码',
                        tenantName: '租户名称',
                        phone: '手机号码',
                        data: '启用年月',
                        area:'行政地区',
                        status:'当前状态',
                    }, {
                        ifAction:true,
                        tenantCode: '租户编码',
                        tenantName: '租户名称',
                        phone: '手机号码',
                        data: '启用年月',
                        area:'行政地区',
                        status:'当前状态',
                    }, {
                        ifAction:true,
                        tenantCode: '租户编码',
                        tenantName: '租户名称',
                        phone: '手机号码',
                        data: '启用年月',
                        area:'行政地区',
                        status:'当前状态',
                    }, {
                        ifAction:true,
                        tenantCode: '租户编码',
                        tenantName: '租户名称',
                        phone: '手机号码',
                        data: '启用年月',
                        area:'行政地区',
                        status:'当前状态',
                    }, {
                        ifAction:true,
                        tenantCode: '租户编码',
                        tenantName: '租户名称',
                        phone: '手机号码',
                        data: '启用年月',
                        area:'行政地区',
                        status:'当前状态',
                    }, {
                        ifAction:true,
                        tenantCode: '租户编码',
                        tenantName: '租户名称',
                        phone: '手机号码',
                        data: '启用年月',
                        area:'行政地区',
                        status:'当前状态',
                    }, {
                        ifAction:true,
                        tenantCode: '租户编码',
                        tenantName: '租户名称',
                        phone: '手机号码',
                        data: '启用年月',
                        area:'行政地区',
                        status:'当前状态',
                    }],

                    pageIndex:-1,//分页的当前页码
			        totalPage:20,//当前分页总数
            }
        },
        created:function(){
            let _this=this;
            _this.loadTableData();
            
        },
        mounted:function(){   
            let content1=document.getElementById('pbu');//设置高度为全屏
            let height1=window.innerHeight-123;
            content1.style.minHeight=height1+'px';
        },
        methods:{
            handleSelectionChange(val) {//点击复选框选中的数据
            },
            loadTableData(){//表格
                 let _this=this;
                 _this.tableLoading=true;
                _this.$axios.gets('/api/services/app/Tenant/GetAll').then(function(res){ 
                    console.log(res)
                })
            },
            modify(row){
                this.$store.state.url='/commodity/commodityPropertyDetails/'+row.address5;
                this.$router.push({path:this.$store.state.url});
            },
            btmlog:function(data){
                               
            },
            test:function(){
                // console.log(this.try)
                this.$axios.posts('/api/services/app/StockAddressManagement/Create',this.try)
                .then(function(res){
                console.log(res);
            },function(res){
                console.log('err:'+res)
            })
            },

            test1:function(){
                this.$axios.gets('/api/services/app/Language/GetLanguages').then(function(res){
                console.log(res);
            })
            },

        },
        components:{
            Query,
            Btm,
            Tree
        }
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
/*.tenant-management-wrapper .el-input input{
    border:none;
    height: 30px;
    line-height: 30px;
    padding-left: 0;
}*/
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
.tenant-management-wrapper .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.tenant-management-wrapper .el-table td{
    padding: 3px 0;
}
.tenant-management-wrapper .el-table__body{
    text-align: center;
}
</style>