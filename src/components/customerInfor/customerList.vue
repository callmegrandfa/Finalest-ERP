<template>
    <div class="customer-infor-wrapper">
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

                <el-row class="mt10">
                    <div class="bgcolor">
                        <label><small>*</small>客户分类</label>
                        <el-select v-model="value" placeholder="请选择客户类型">
                            <el-option v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-row>

                <el-row class="fs12">
                   <div class="bgcolor">
                        <label>所属组织</label>
                        <el-input placeholder="" v-model="stockC"></el-input>
                    </div> 
                </el-row>

                <el-row class="fs12">
                    <div class="bgcolor">
                        <label>行政地区</label>
                        <el-input placeholder="" v-model="stockC"></el-input>
                    </div> 
                </el-row>

                <el-row class="fs12">
                    <div class="bgcolor">
                        <label>业务地区</label>
                        <el-input placeholder="" v-model="stockC"></el-input>
                    </div> 
                </el-row>

                <el-row class="fs12">
                    <div class="bgcolor">
                        <label>编码</label>
                        <el-input placeholder="" v-model="stockC"></el-input>
                    </div> 
                </el-row>

                <el-row class="fs12">
                    <div class="bgcolor">
                        <label>名称</label>
                        <el-input placeholder="" v-model="stockC"></el-input>
                    </div> 
                </el-row>

                <el-row class="fs12">
                    <div class="bgcolor">
                        <label>客户性质</label>
                        <el-input placeholder="" v-model="stockC"></el-input>
                    </div> 
                </el-row>

                <el-row style="text-align:center;">
                    <span class="search-btn">查询</span>
                </el-row>
            </el-col>

            <el-col :span='19' class="border-left">
                <el-row class="h48 pt5">
                    <button class="erp_bt bt_add" @click="goDetail">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_add.png">
                        </div>
                        <span class="btDetail">新增</span>
                    </button>

                    <button class="erp_bt bt_excel">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_excel.png">
                        </div>
                        <span class="btDetail">Excel</span>
                    </button>

                    <button class="erp_bt bt_del">
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

                    <button class="erp_bt bt_print">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_print.png">
                        </div>
                        <span class="btDetail">打印</span>
                    </button>
                </el-row>

                <el-row class="pl10 pt10 pr10 pb10">
                    <el-col :span="24">
                        <el-table :data="tableData" border style="width: 100%" stripe>
                            <el-table-column prop="ifAction" label=" ">
                                <template slot-scope="scope">
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
                                <template slot-scope="scope">
                                    <el-checkbox v-model="tableData[scope.$index].ifSupply" ></el-checkbox>
                                </template>
                            </el-table-column>   
                            <el-table-column prop="moneyOrganization" label="对应财务组织"></el-table-column>
                            <el-table-column prop="status" label="状态"></el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button v-on:click="goModify(scope.row.id)" type="text" size="small">查看</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-row>
                            <el-col :span='10'>
                                <span style="display:inline-block;margin-top:20px;">记录 40，当前第 1 页，共 4 页</span>
                            </el-col>
                            <el-col :span='14'>
                                <el-pagination style="margin-top:20px;" class="text-right" background layout="total, prev, pager, next"  :page-count="totalPage" v-on:current-change="handleCurrentChange"></el-pagination>
                            </el-col>
                        </el-row> 
                        
                    </el-col>
                </el-row>

            </el-col>
        </el-row>
        
    </div>
</template>

<script>
    export default{
        name:'customerList',
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
                    status:'启用',
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
                        status:'启用',
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
                        status:'停用',
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
                        status:'冻结',
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
                        status:'恢复',
                    }],

                    pageIndex:-1,//分页的当前页码
			        totalPage:20,//当前分页总数
            }
        },
        created:function(){
            this.loadAllList();
            
        },
        methods:{
            goDetail(){//点击新增跳转
               this.$store.state.url='/customer/customerDetail/default'
               this.$router.push({path:this.$store.state.url})//点击切换路由
            },

            goModify:function(){//点击跳转修改页modify
                this.$store.state.url='/customer/customerModify/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },

            handleCurrentChange:function(val){//获取当前页码
                this.pageIndex=val;
            },

            loadAllList:function(){//获取所有列表数据
                let self = this;
                this.$axios.gets('/api/services/app/ContactManagement/GetAll',{SkipCount:'0',MaxResultCount:'100'}).then(function(res){
                    console.log(res);
                    self.allList = res.data;
                    self.total = res.total;
                    self.totalPage = Math.ceil(res.total/self.eachPage)
                },function(res){
                    console.log('err'+res)
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
    width: 90%;
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
    border: 1px solid #cccccc;
    border-radius: 3px;
}
.border-left{
    border-left: 1px solid #E4E4E4;
    min-height: 400px;
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
.text-right{
    text-align: right;
}
</style>

<style>
/* 重写checkbox */
.customer-infor-wrapper .el-checkbox__inner{
    width: 24px;
    height: 24px;
    border-radius:50% !important; 
}
.customer-infor-wrapper .el-checkbox__inner::after{
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
.customer-infor-wrapper .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.customer-infor-wrapper .el-table td{
    padding: 3px 0;
}
.customer-infor-wrapper .el-table__body{
    text-align: center;
}
</style>