<template>
    <div class="orderDetail">
        <el-row>
            <el-col :span="24" class="orderHead">
                <el-col :span="18" class="orderTittle">
                    <h4>采购订单-详细资料</h4>
                    <div class="seal">
                        <div class="seal1">
                            <div class="seal2">
                                <div class="seal3">
                                    <span>已生效</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <el-steps :active="2">
                        <el-step title="Step1" description="新增报表信息"></el-step>
                        <el-step title="Step2" description="提交送审"></el-step>
                        <el-step title="Step3" description="完成"></el-step>
                    </el-steps>
                </el-col>
            </el-col> 
        </el-row>

        <el-row>
            <el-col :span="24">
                <button class="headBtn">返回</button>
                <button class="headBtn">保存</button>
                <button class="headBtn">保存并新增</button>
                <button class="headBtn">保存并审核</button>
                <button class="headBtn">审核</button>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="24" class="getPadding">
                <el-col :span="5" class="bgcolor">
                    <label>单号</label>
                    <el-input :disabled="true" v-model="data.num" placeholder="请录入单号"></el-input>
                </el-col>
                <el-col :span="5" class="bgcolor">
                    <label>手工单号</label>
                    <el-input v-model="data.handmade" placeholder="请录入手工单号"></el-input>
                </el-col>
                <el-col :span="5" class="bgcolor">
                    <label><small>*</small>仓库</label>
                    <el-input v-model="data.wareHouse" placeholder="请录入仓库"></el-input>
                </el-col>
                <el-col :span="5" class="bgcolor">
                    <label><small>*</small>交货日期</label>
                    <el-date-picker v-model="data.deliveryData" type="date" placeholder="选择日期"></el-date-picker>
                </el-col>
                <el-col :span="5" class="bgcolor">
                    <label><small>*</small>供应商</label>
                    <el-select v-model="valueSupplier">
                        <el-option v-for="item in supplier" :key="item.valueSupplier" :label="item.label" :value="item.valueSupplier"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="5" class="bgcolor">
                    <label><small>*</small>品牌</label>
                    <el-input v-model="data.brand" placeholder="请录入品牌"></el-input>
                </el-col>
                <el-col :span="5" class="bgcolor">
                    <label><small>*</small>佣金</label>
                    <el-input v-model="data.commission" placeholder="请录入佣金"></el-input>
                </el-col>
                <!-- <el-col :span="5" class="bgcolor">
                    <label>年份</label>
                    <el-date-picker v-model="data.year" type="year" placeholder="请选择年份"></el-date-picker>
                </el-col> -->
                <el-col :span="5" class="bgcolor">
                    <label><small>*</small>季节</label>
                    <el-select v-model="valueSeason">
                        <el-option v-for="item in season" :key="item.valueSeason" :label="item.label" :value="item.valueSeason"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="5" class="bgcolor">
                    <label>货币</label>
                    <el-input v-model="data.currency" placeholder="请录入货币"></el-input>
                </el-col>
                <el-col :span="5" class="bgcolor">
                    <label>结算方式</label>
                    <el-input v-model="data.settlement" placeholder="请录入结算方式"></el-input>
                </el-col>
                <el-col :span="5" class="bgcolor">
                    <label>发运方式</label>
                    <el-input v-model="data.post" placeholder="请录入发运方式"></el-input>
                </el-col>
                <el-col :span="5" class="bgcolor">
                    <label>采购类型</label>
                    <el-input v-model="data.purchaseType" placeholder="请录入采购类型"></el-input>
                </el-col>
                <el-col :span="5" class="bgcolor">
                    <label>采购方式</label>
                    <el-input v-model="data.purchaseMethod" placeholder="请录入采购方式"></el-input>
                </el-col>
                <el-col :span="5" class="bgcolor">
                    <label>PO类型</label>
                    <el-input v-model="data.POType" placeholder="请录入PO类型"></el-input>
                </el-col>
                <!-- <el-col :span="5" class="bgcolor">
                    <label>税率</label>
                    <el-input v-model="data.taxRate" placeholder="请录入税率"></el-input>
                </el-col> -->
                <el-col :span="5" class="bgcolor">
                    <label>付款条件</label>
                    <el-input v-model="data.payment" placeholder="请录入付款条件"></el-input>
                </el-col>
                <el-col :span="5" class="bgcolor">
                    <label>工厂订单号</label>
                    <el-input v-model="data.orderNum" placeholder="请录入工厂订单号"></el-input>
                </el-col>
                <el-col :span="10" class="bgcolor moreWidth"><label>备注</label><el-input v-model="data.remarks" placeholder="备注"></el-input></el-col>  
            </el-col>  
        </el-row>

        <el-row class="noPadding">
            <el-col :span="24" class="greyClr">     
                <h4 class="h4 getPadding">其他信息</h4>
            </el-col> 

            <el-col :span="24" class="formData">
                <el-col :span="5" class="bgcolor">
                    <label>金额计算方式</label>
                    <label class="dataLeft">无</label>
                </el-col>
                <el-col :span="5" class="bgcolor">
                    <label>批次定单号</label>
                    <label class="dataLeft">123123</label>
                </el-col>
                <el-col :span="5" class="bgcolor">
                    <label>汇率</label>
                    <label class="dataLeft">1.00</label>
                </el-col>
                <!-- <el-col :span="5" class="bgcolor">
                    <label>开单日期</label>
                    <el-input :disabled="true" v-model="data.wareHouse" placeholder="无记录"></el-input>
                </el-col> -->
                <el-col :span="5" class="bgcolor">
                    <label>操作员</label>
                   <label class="dataLeft">3111111</label>
                </el-col>
            </el-col> 
        </el-row>

<el-row class="nopadding">  
    <div class="tabZoo">
        <el-col :span="24">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="货品明细" name="company" v-if="count.isCheckCompany">
                    
                </el-tab-pane>
                <el-tab-pane label="财务" name="finance" v-if="count.isCheckFinance">财务</el-tab-pane>
                <el-tab-pane label="业务" name="business" v-if="count.isCheckBusiness">业务</el-tab-pane>
            </el-tabs>
        </el-col>
    </div>
 </el-row> 

        <!-- <el-row class="tabZoo">
            <el-col :span="24" class="operationBtn">
                <button class="erp_bt bt_codeNew"><div class="btImg"><img src="../../../static/image/common/bt_codeNew.png"></div><span class="btDetail">扫码新增</span></button>
                <button class="erp_bt bt_inputNew"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">输入新增</span></button>
                <button class="erp_bt bt_in"><div class="btImg"><img src="../../../static/image/common/bt_inOut.png"></div><span class="btDetail">导入</span></button>
                 <button class="erp_bt bt_out"><div class="btImg"><img src="../../../static/image/common/bt_inOut.png"></div><span class="btDetail">导出</span></button>
                <el-col :span='5' class="search-input">
                    <input type="text" class="form-control" placeholder="编码/名称..."/>
                </el-col>
                <el-col :span='2' class="search-btn">
                    <span>搜索</span>
                </el-col>
                <el-col :span='2' :offset="6">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                    <i class="fa fa-bars rotate" aria-hidden="true"></i>
                    <span>全屏</span>
                </el-col>   
            </el-col>
            <el-table :data="tableData" stripe border style="width: 100%">
                <el-table-column prop="code" label="货号" width="200"></el-table-column>
                <el-table-column prop="size" label="规格" width="180"></el-table-column>
                <el-table-column prop="num" label="数量" width="180"></el-table-column>
                <el-table-column prop="money" label="零售价" width="180"></el-table-column>
                <el-table-column prop="volume" label="体积" width="180"></el-table-column>
                 <el-table-column fixed="right" label="操作">
                     <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">插入</el-button>
                        <el-button type="text" size="small">卡片展示</el-button>
                        <el-button type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="10000"
            class="pagination">
            </el-pagination>
        </el-row> -->
    </div>
</template>
<script>
    export default({
        data(){
            return{
                currentPage:4,//分页当前页
                tableData: [{//表格
                    code: 'A001',
                    size: '红',
                    num: '1',
                    money:'1',
                    volume:'1',
                    },{//表格
                    code: 'A001',
                    size: '红',
                    num: '1',
                    money:'1',
                    volume:'1',
                    },{//表格
                    code: 'A004005006',
                    size: '红',
                    num: '1',
                    money:'1',
                    volume:'1',
                    },{//表格
                    code: 'A004005006',
                    size: '红',
                    num: '1',
                    money:'1',
                    volume:'1',
                }, ],
                data:{
                    num:'PO1711063111111-002',//单号
                    handmade:'1',//手工单号 
                    wareHouse:'',//仓库
                    deliveryData:'',//交货日期
                    brand:'',//品牌
                    commission:'',//佣金
                    year:'2017',//年份
                    season:'秋',//季节
                    currency:'',//货币
                    settlement :'',//结算方式
                    post:'',//发运方式
                    purchaseType:'',//采购类型 
                    purchaseMethod:'',//采购方式 
                    POType:'',//PO类型 
                    taxRate:'',//税率 
                    payment:'',//付款条件 
                    orderNum:'',//工厂订单号 
                    remarks:'',//备注  
                    calculation:'',//金额计算方式 
                    batchNum:'123123',//备批次单号
                    exchangeRate:'1.0',//汇率 
                    billingDate:'2017.11.06',//开单日期 
                    operator:'3111111',//操作员   
                },
                 supplier: [{//供应商
                        valueSupplier:'选项1',
                        label: 'NiKE'
                    }, {
                        valueSupplier:'选项2',
                        label: '安踏'
                    }, {
                        valueSupplier:'选项3',
                        label: '李宁'
                    }],
                season:[{//季节
                        valueSeason:'选项1',
                        label: '春'
                    }, {
                        valueSeason:'选项2',
                        label: '夏'
                    }, {
                        valueSeason:'选项3',
                        label: '秋'
                    },{
                        valueSeason:'选项4',
                        label: '冬'
                    }], 
                valueSupplier:'NiKE',
                valueSeason:'夏',
            }
        },
        methods:{
            handleClick(row) {
                console.log(row);
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
    })
</script>
<style>
 .orderDetail{
      font-family: 'microsoft yahei';
  }
.orderDetail .orderHead{
    background-color: #fff;
    padding: 5px 0;
}
.orderDetail .orderHead .orderTittle h4{
    padding-left: 15px;
    font-size: 20px;
    font-weight: bold;
    line-height: 36px;
}
/* 已生效 */

.orderDetail .orderHead .orderTittle .seal,
.orderDetail .orderHead .orderTittle .seal1,
.orderDetail .orderHead .orderTittle .seal2,
.orderDetail .orderHead .orderTittle .seal3{
    position: absolute;
    background-repeat:no-repeat;
    background-position:center;
    top:0;
    left: 0;
    width: 55px;
    height: 55px;
}
.orderDetail .orderHead .orderTittle .seal{
    transform: rotate(-34deg);
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    -o-transform: rotate(-34deg);
    -moz-transform: rotate(-34deg);	
    top: -3px;
    left: 210px;
    background-image: url(../../../static/image/u1.png);
}
.orderDetail .orderHead .orderTittle .seal1{
    background-image: url(../../../static/image/u2.png);
}
.orderDetail .orderHead .orderTittle .seal2{
    background-image: url(../../../static/image/u3.png);
}
.orderDetail .orderHead .orderTittle .seal3{
    background-image: url(../../../static/image/u4.png);
}
.orderDetail .orderHead .orderTittle .seal3 span{
    font-weight: bold;
    position: absolute;
    font-size: 12px;
    color: #FF669B;
    top: 20px;
    left: 9px;
    transform: rotate(87deg);
    -ms-transform: rotate(87deg);
    -webkit-transform: rotate(87deg);
    -o-transform: rotate(87deg);
    -moz-transform: rotate(87deg);	
}
/* steps */
.orderDetail .el-steps .el-step__line{
    /* 水平线 */
    display: none;
}
.orderDetail .el-steps .el-step__main{
    position: absolute;
    top: 0px;
    left: 42px;
}
.orderDetail .el-steps .el-step__head{
    width: 120px;
}
.orderDetail .el-steps .el-step__title{
    font-size: 12px;
    line-height: 20px;
}
.orderDetail .el-steps .el-step__description{
    padding-right: 0;
}
.orderDetail .el-steps .el-step__icon{
    width: 36px;
    height: 36px;
}

  .orderDetail .slidup{
       max-height: 90px;
  }
  .orderDetail .slidUp{
      max-height: 45px;
  }

.orderDetail .el-button--primary{
    background-color: #82AAFC;
    border: none;
}


.orderDetail .el-row{
     padding:15px 0;
     border-bottom: 1px solid #e4e4e4;
     background-color: #fff;
  }
.orderDetail .el-row:first-child{
    padding: 0;
    border:none;
    margin-bottom: 15px;
}


.orderDetail .companyInfo>.el-col:first-child,
.orderDetail .companyInfo .el-col h4{
    margin-bottom: 15px;
}

.orderDetail .tabZoo{
     overflow: hidden;
     background-color: #fff;
 }
 .orderDetail .tabZoo .bgcolor{
     border: 1px solid #BCBCBC;
     border-radius: 4px;
 }
 .orderDetail .getPadding,.tabZoo .el-tabs__nav-scroll{
     padding: 0 10px;
 }
 .orderDetail .tabZoo .auditInformation{
     margin-top: 15px;
 }
 .orderDetail .tabZoo .auditInformation h4{
     margin-bottom: 15px;
 }


  /* 搜索框 */
.orderDetail .search-input{
    border: 1px solid #cccccc;
    border-radius: 3px;
    border-right: none;
    margin-left: 10px;
}
.orderDetail .search-input .form-control{
    width:100%;
    height:27px;
    outline: none;
    padding-left: 5px;
    border:none;
    border-radius:3px 0 0 3px;
}
.orderDetail .search-btn{
    background:#82AAFC;
    height:30px;
    text-align:center;
    line-height:30px;
    border-radius:0 4px 4px 0;
    cursor: pointer;
    margin-left: -1px;
    color: #fff;
}
.orderDetail .rotate{
     transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
 }
 .orderDetail .operationBtn{
     padding: 15px 0;
 }
 /* 分页 */
 .orderDetail .pagination{
     float: right;
 }
.orderDetail .greyClr{
    background-color: #f2f2f2;
    padding-top: 15px;
}
.orderDetail .noPadding{
    padding: 0;
}
.orderDetail .formData{
    padding: 10px;
}
.orderDetail .formData .bgcolor{
    margin-bottom: 0;
}
.orderDetail .dataLeft{
    text-align: left;
}
.h4.getPadding{
    padding-bottom: 10px;
    border-bottom: 1px solid #e4e4e4;
}
</style>



