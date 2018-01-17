<template>
    <div class="user-list-wrapper">
        <el-row class="bg-white">
            <el-col :span="5">
                <el-row class="h48 pl15">
                    <el-col :span="15">
                        <i class="el-icon-search"></i>
                        <span>查询</span>
                    </el-col>
                    <el-col :span="5">
                        
                            <span class="fs12">+ 展开</span>
                        
                    </el-col>
                </el-row>

                <el-row class="mt20 pl15 h30">
                    <el-col :span="5" class="fs12">
                        <span>用户组编码</span>
                    </el-col>
                    <el-col :span="15" class="fs12 border1 pl10">
                        <el-select v-model="value" placeholder="请选择用户组编码">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>

                <el-row class="mt10 pl15 h30 fs12">
                    <el-col :span="5">
                        <span>用户组名称</span>
                    </el-col>
                    <el-col :span="15" class="border1 pl10">
                        <input type="text" class="input-need" placeholder="请录入用户组名称">
                    </el-col>
                </el-row>

                <el-row class="mt10 pl15 h30 fs12">
                    <el-col :span="5">
                        <span>所属组织</span>
                    </el-col>
                    <el-col :span="15" class="border1 pl10">
                        <input type="text" class="input-need" placeholder="请录入所属组织">
                    </el-col>
                </el-row>

                <el-row class="mt20" style="text-align:center;">
                    <span class="search-btn">查询</span>
                </el-row>
            </el-col>

            <el-col :span='19'>
                <el-row class="h48 pt5">
                    <button class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
                    <button class="erp_bt bt_add"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
                    <button class="erp_bt bt_excel"><div class="btImg"><img src="../../../static/image/common/bt_excel.png"></div><span class="btDetail">Excel</span></button>
                    <button class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
                    <button class="erp_bt bt_auxiliary"><div class="btImg"><img src="../../../static/image/common/bt_auxiliary.png"></div><span class="btDetail">辅助功能</span></button>
                    <button class="erp_bt bt_print"><div class="btImg"><img src="../../../static/image/common/bt_print.png"></div><span class="btDetail">打印</span></button>
                </el-row>

                <el-row class="pl10 pt10 pr10 pb10">
                    <el-col :span="24">
                        <el-table :data="tableData" border style="width: 100%" stripe>
                            <el-table-column prop="ifAction" label="操作">
                                <template scope="scope">
                                    <el-checkbox v-model="tableData[scope.$index].ifAction" ></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column prop="organization" label="所属组织" ></el-table-column>
                            <el-table-column prop="cusCode" label="客户编码"></el-table-column>
                            <el-table-column prop="cusName" label="客户名称"></el-table-column>
                            <el-table-column prop="cusCall" label="客户简称"></el-table-column>
                            <el-table-column prop="cusType" label="客户分类"></el-table-column>
                            <el-table-column prop="cusNature" label="客户性质"></el-table-column>
                            <el-table-column prop="ifSupply" label="供应">
                                <template scope="scope">
                                    <el-checkbox v-model="tableData[scope.$index].ifSupply" ></el-checkbox>
                                </template>
                            </el-table-column>   
                            <el-table-column prop="wareHouse" label="对应财务组织"></el-table-column>
                            <el-table-column prop="ifAllow" label="允许使用">
                                <template scope="scope">
                                    <el-checkbox v-model="tableData[scope.$index].ifAllow" ></el-checkbox>
                                </template>
                            </el-table-column>
                    </el-table> 
                    </el-col>
                </el-row>

            </el-col>
        </el-row>
        
    </div>
</template>

<script>
    export default{
        name:'userList',
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

                options: [{
                    value: '选项1',
                    label: '仓库'
                    }, {
                    value: '选项2',
                    label: '地址'
                    }, {
                    value: '选项3',
                    label: '总部'
                    }, {
                    value: '选项4',
                    label: '总部2'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                    }],

                value: '',
                tableData: [{
                    ifAction:true,
                    organization: '组织',
                    cusCode: '客户编码',
                    cusName: '客户名称',
                    cusCall: '客户简称',
                    cusType:'客户分类',
                    cusNature:'客户性质',
                    ifSupply:true,
                     wareHouse:'对应财务组织',
                    ifAllow:true,
                    }, {
                        ifAction:true,
                        organization: '组织',
                        cusCode: '客户编码',
                        cusName: '客户名称',
                        cusCall: '客户简称',
                        cusType:'客户分类',
                        cusNature:'客户性质',
                        ifSupply:true,
                        wareHouse:'对应财务组织',
                        ifAllow:true,
                    }, {
                        ifAction:true,
                        organization: '组织',
                        cusCode: '客户编码',
                        cusName: '客户名称',
                        cusCall: '客户简称',
                        cusType:'客户分类',
                        cusNature:'客户性质',
                        ifSupply:true,
                        wareHouse:'对应财务组织',
                        ifAllow:true,
                    }, {
                        ifAction:true,
                        organization: '组织',
                        cusCode: '客户编码',
                        cusName: '客户名称',
                        cusCall: '客户简称',
                        cusType:'客户分类',
                        cusNature:'客户性质',
                        ifSupply:true,
                        wareHouse:'对应财务组织',
                        ifAllow:true,
                    }, {
                        ifAction:true,
                        organization: '组织',
                        cusCode: '客户编码',
                        cusName: '客户名称',
                        cusCall: '客户简称',
                        cusType:'客户分类',
                        cusNature:'客户性质',
                        ifSupply:true,
                        wareHouse:'对应财务组织',
                        ifAllow:true,
                    }, {
                        ifAction:true,
                        organization: '组织',
                        cusCode: '客户编码',
                        cusName: '客户名称',
                        cusCall: '客户简称',
                        cusType:'客户分类',
                        cusNature:'客户性质',
                        ifSupply:true,
                        wareHouse:'对应财务组织',
                        ifAllow:true,
                    }, {
                        ifAction:true,
                        organization: '组织',
                        cusCode: '客户编码',
                        cusName: '客户名称',
                        cusCall: '客户简称',
                        cusType:'客户分类',
                        cusNature:'客户性质',
                        ifSupply:true,
                        wareHouse:'对应财务组织',
                        ifAllow:true,
                    }, {
                        ifAction:true,
                        organization: '组织',
                        cusCode: '客户编码',
                        cusName: '客户名称',
                        cusCall: '客户简称',
                        cusType:'客户分类',
                        cusNature:'客户性质',
                        ifSupply:true,
                        wareHouse:'对应财务组织',
                        ifAllow:true,
                    }, {
                        ifAction:true,
                        organization: '组织',
                        cusCode: '客户编码',
                        cusName: '客户名称',
                        cusCall: '客户简称',
                        cusType:'客户分类',
                        cusNature:'客户性质',
                        ifSupply:true,
                        wareHouse:'对应财务组织',
                        ifAllow:true,
                    }],
            }
        },
        created:function(){
            
            
        },
        methods:{
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
</style>

<style>
.user-list-wrapper .el-input input{
    border:none;
    height: 30px;
    line-height: 30px;
    padding-left: 0;
}
/* 重写checkbox */
.user-list-wrapper .el-checkbox__inner{
    width: 24px;
    height: 24px;
    border-radius:50% !important; 
}
.user-list-wrapper .el-checkbox__inner::after{
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
.user-list-wrapper .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.user-list-wrapper .el-table td{
    padding: 3px 0;
}
.user-list-wrapper .el-table__body{
    text-align: center;
}
/* 重写el-pagination样式 */
.user-list-wrapper .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
    border-radius: 50%;
}
.user-list-wrapper .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 130px;
}
.user-list-wrapper .el-input--suffix .el-input__inner{
    padding-right: 0;
} 
</style>