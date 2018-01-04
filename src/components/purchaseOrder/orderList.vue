<template>
  <p>orderList</p>
</template>
<template>
    <div class="orderDetail">
        <el-row>
            <el-col :span="24" class="orderHead">
                <el-col :span="19" class="orderTittle"><h4>现货采购订单-订单详情</h4></el-col>
                <el-col :span="4">
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
                <div class="operationBtn">
                    <el-col :span='2' class="ml10"><span class="btn">保存</span></el-col>
                    <el-col :span='2' class="ml10"><span class="btn">保存并新增</span></el-col>
                    <el-col :span='2' class="ml10"><span class="btn">保存并修改</span></el-col>
                    <el-col :span='2' class="ml10"><span class="btn">取消</span></el-col>
                    <el-col :span='2' class="ml10"><span class="btn">辅助功能</span></el-col>
                    <el-col :span='2' class="ml10"><span class="btn">打印</span></el-col>
                    <el-col :span='2' class="ml10"><span class="btn">导出</span></el-col>        
                </div>  
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="2">     
                <h4>基础信息</h4>
            </el-col> 

            <el-col :span="20" :class="{slidup : showBasicInfo}" class="down">
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
                    <el-input v-model="data.deliveryData" placeholder="请录入交货日期"></el-input>
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
                <el-col :span="5" class="bgcolor">
                    <label>年份</label>
                    <el-input v-model="data.year" placeholder="请录入年份"></el-input>
                </el-col>
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
                <el-col :span="5" class="bgcolor">
                    <label>税率</label>
                    <el-input v-model="data.taxRate" placeholder="请录入税率"></el-input>
                </el-col>
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

            <el-col :span="2">   
                <a class="upBtn" @click="showBasicInfo = !showBasicInfo">
                    收起<span class="el-icon-arrow-down"></span>
                </a>
            </el-col>  
        </el-row>

        <el-row>
            <el-col :span="2">     
                <h4>其他信息</h4>
            </el-col> 

            <el-col :span="20" :class="{slidup : showOtherInfo}" class="down">
                <el-col :span="5" class="bgcolor noColor">
                    <label>单号</label>
                    <el-input :disabled="true" v-model="data.num" placeholder="请录入单号"></el-input>
                </el-col>
                <el-col :span="5" class="bgcolor noColor">
                    <label>手工单号</label>
                    <el-input v-model="data.handmade" placeholder="请录入手工单号"></el-input>
                </el-col>
                <el-col :span="5" class="bgcolor noColor">
                    <label><small>*</small>仓库</label>
                    <el-input v-model="data.wareHouse" placeholder="请录入仓库"></el-input>
                </el-col>
            </el-col> 

            <el-col :span="2">   
                <a class="upBtn" @click="showOtherInfo = !showOtherInfo">
                    收起<span class="el-icon-arrow-down"></span>
                </a>
            </el-col>  
        </el-row>    
    </div>
</template>
<script>
    export default({
        data(){
            return{
                showBasicInfo:false,
                showOtherInfo:false,
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
        }
    })
</script>
<style>
.orderDetail .orderHead{
    background-color: #fff;
}

.orderDetail .down{
    overflow: hidden;
    transition: max-height 0.5s;
    -moz-transition: max-height 0.5s;
    -webkit-transition: max-height 0.5s;
    -o-transition: max-height 0.5s; 
    max-height:  900px;
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
.orderDetail .bgcolor{
    background-color: #fff;
    height: 30px;
    font-size: 12px;
    margin-right: 15px;
    margin-bottom: 15px;
    float: left;
    overflow: hidden;
}
.orderDetail .noColor{
    background-color:transparent;
}
.orderDetail .moreWidth{
    width: calc(41.667% + 15px)
}
  
.orderDetail .el-row{
    margin-bottom: 15px;
}
.orderDetail .bgcolor label{
    padding-left: 10px;
    line-height:30px;
    display: block;
    width:83px;
    height: 100%;
    float: left;
    color: #BCBCBC;
}
.orderDetail .bgcolor label small{
    color: #FF669B;
    margin-right: 2px;
}
.orderDetail .bgcolor .el-select,.orderDetail .bgcolor .el-input{
    display: block;
    width: calc(100% - 93px);
    height: 30px;
    float: left;
}
.orderDetail .bgcolor .el-input input{
    border: none;
    height: 30px;
}
.orderDetail .bgcolor .el-input input[disabled]{
    background-color: #fff;
}
.orderDetail .bgcolor .el-select .el-input {
    width: 100%;
}
.orderDetail .noColor .el-input input[disabled]{
    background-color: transparent;
}
.orderDetail .companyInfo>.el-col:first-child,
.orderDetail .companyInfo .el-col h4{
    margin-bottom: 15px;
}
.orderDetail .upBtn{
    font-size: 12px;
    color: #BCBCBC;
    cursor: pointer;
}
.orderDetail .upBtn .el-icon-arrow-down{
    margin-left: 5px;
}
.orderDetail .tabZoo{
     overflow: hidden;
     background-color: #fff;
 }
 .orderDetail .tabZoo .bgcolor{
     border: 1px solid #BCBCBC;
     border-radius: 4px;
 }
 .orderDetail .tabZoo .getPadding,.tabZoo .el-tabs__nav-scroll{
     padding: 0 20px;
 }
 .orderDetail .tabZoo .auditInformation{
     margin-top: 15px;
 }
 .orderDetail .tabZoo .auditInformation h4{
     margin-bottom: 15px;
 }

.orderDetail .btn{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    background:rgba(130, 170, 252, 1);
    border-radius: 3px;
    color: white;
    width: 100%;
    text-align: center;
    cursor: pointer;
}
.orderDetail .ml10{
   margin-left: 10px;
}

 
   

  /* 输入框 placeholder字体颜色*/
  ::-webkit-input-placeholder {
    color: #BCBCBC; }

  :-moz-placeholder {
    color: #BCBCBC; }

  ::-moz-placeholder {
    color: #BCBCBC; }

  :-ms-input-placeholder {
    color: #BCBCBC; }

</style>



