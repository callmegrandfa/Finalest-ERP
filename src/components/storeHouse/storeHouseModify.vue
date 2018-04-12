<template>
  <div class="res-modify">
        <el-row class="bg-white pt10 pb10 bb1 fixed">
            <button class="erp_bt bt_back" @click="back()">
                <div class="btImg">
                <img src="../../../static/image/common/bt_back.png">
                </div>
                <span class="btDetail">返回</span>
            </button>

            <button class="erp_bt bt_save" >
                <div class="btImg">
                <img src="../../../static/image/common/bt_save.png">
                </div>
                <span class="btDetail">保存</span>
            </button>

            <button class="erp_bt bt_cancel">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_cancel.png">
                </div>
                <span class="btDetail">取消</span>
            </button>

            <button class="erp_bt bt_saveAdd">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_saveAdd.png">
                </div>
                <span class="btDetail">保存并新增</span>
            </button>

            <button class="erp_bt bt_add">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_add.png">
                </div>
                <span class="btDetail">新增</span>
            </button>

            <button class="erp_bt bt_del">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_del.png">
                </div>
                <span class="btDetail">删除</span>
            </button>
            <div class="toggle-btn">
                <span >收起</span>
                <i class="el-icon-arrow-up"></i>
            </div>
        </el-row>

        <el-collapse-transition>
            <div class="bb1">
                <el-row class="bg-white ft12 pr10 pt10">
                    <el-col :span="24">
                        <div class="bgcolor">
                            <label><small>*</small>所属组织</label>
                            <el-select v-model='dataItem.OuId'></el-select>
                        </div>

                        <div class="bgcolor">
                            <label><small>*</small>编码</label>
                            <el-input placeholder="" class="stockCode"  v-model='dataItem.stockCode'></el-input>
                        </div>

                        <div class="bgcolor">
                            <label><small>*</small>名称</label>
                            <el-input placeholder=""  v-model='dataItem.stockName'></el-input>
                        </div>

                        <div class="bgcolor">
                            <label><small>*</small>全称</label>
                            <el-input placeholder="" v-model='dataItem.stockFullName'></el-input>
                        </div>
                        <div class="bgcolor">
                            <label>助记码</label>
                            <el-input placeholder="" v-model='dataItem.mnemonic'></el-input>
                        </div>

                        <div class="bgcolor">
                            <label><small>*</small>仓库类型</label>
                            <el-select  class="stockTypeId" v-model='dataItem.stockTypeId'></el-select>
                        </div>

                        <div class="bgcolor">
                            <label>业务地区</label>
                            <el-select class="opAreaId" v-model='dataItem.opAreaId'> </el-select>
                        </div>

                        <div class="bgcolor area">
                            <label>行政地区</label>
                            <div class="areaBox">
                                <el-select  class="areaDrop" placeholder="选择省">
                                </el-select>
                                <el-select  class="areaDrop" placeholder="选择市">
                                </el-select>
                                <el-select class="areaDrop" placeholder="选择区">
                                </el-select>
                                <!-- <el-input class="areaEntry" placeholder="街道办地址"></el-input> -->
                            </div>
                        </div>

                        <div class="bgcolor">
                            <label>负责人</label>
                            <el-input placeholder="" class="manager" v-model='dataItem.manager'></el-input>
                        </div>
                        <div class="bgcolor">
                            <label>电话</label>
                            <el-input placeholder="" v-model='dataItem.phone'></el-input>
                        </div>
                        <div class="bgcolor">
                            <label>Email</label>
                            <el-input placeholder="" v-model='dataItem.email'></el-input>
                        </div>
                        <div class="bgcolor">
                            <label>传真</label>
                            <el-input v-model='dataItem.fax'> </el-input>
                        </div>
                        <div class="bgcolor">
                            <label>地址</label>
                            <el-input v-model='dataItem.stockAddress'></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>备注</label>
                            <el-input placeholder="" v-model='dataItem.remark'></el-input>
                        </div>

                        <div class="bgcolor">
                            <label><small>*</small>状态</label>
                            <el-select class="status" v-model='dataItem.status'>
                            </el-select>
                        </div>
                    </el-col>    
                </el-row>
            </div>
        </el-collapse-transition>
        <el-row class="ft12 pr10 pt10 br3 bg-white">
            <el-col :span='24' class="pl10 mb10 bb1">
                <span class="header-title">送货信息</span>
            </el-col>

            <el-col :span="24" class="bg-white pl10 mb10">
                <button class="erp_bt bt_add">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_add.png">
                    </div>
                    <span class="btDetail">增行</span>
                </button>
                
                <button class="erp_bt bt_del" >
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_del.png">
                    </div>
                    <span class="btDetail">删除</span>
                </button>

                <button class="erp_bt bt_excel">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_excel.png">
                    </div>
                    <span class="btDetail">Excel</span>
                </button>

                <button class="erp_bt bt_auxiliary">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_auxiliary.png">
                    </div>
                    <span class="btDetail">辅助功能</span>
                </button>
            </el-col>
            <el-col>
            <Table :methodsUrl="httpUrl" :cols="column" :HttpParams="HttpParams" :hasPagination="hasPagination" :isDisable='isDisable' :tableName="tableModel" :mutiSelect="mutiSelect"  :command="command"></Table>
              <!-- <el-table :data="repositoryAddressData" border style="width: 100%" stripe @selection-change="handleSelectionChange">
                    <el-table-column type="selection"></el-table-column>

                    <el-table-column prop="contactPerson" label="联系人" >
                        <template slot-scope="scope">
                            <img v-show='redAr.indexOf(scope.row)>=0' class="abimg" src="../../../static/image/content/redremind.png"/>
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.contactPerson"
                                    @change='handleChange(scope.$index,scope.row)'
                                    type="text"/>
                        </template>
                    </el-table-column>

                    <el-table-column prop="moblie" label="手机">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.moblie"
                                    @change='handleChange(scope.$index,scope.row)'
                                    type="text"/>
                        </template>
                    </el-table-column>

                    <el-table-column prop="phone" label="电话">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.phone"
                                    @change='handleChange(scope.$index,scope.row)'
                                    type="text"/>
                        </template>
                    </el-table-column>

                    <el-table-column prop="completeAddress" label="送货地址">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.completeAddress"
                                    @change='handleChange(scope.$index,scope.row)'
                                    type="text" />
                        </template>
                    </el-table-column>

                    <el-table-column prop="transportMethodId" label="运输方式">
                        <template slot-scope="scope">
                            <el-select  v-model="scope.row.transportMethodId" :class="[scope.$index%2==0?'bgw':'bgp']" @change='handleChange(scope.$index,scope.row)'>
                                <el-option  v-for="item in transAr" :key="item.itemValue" :label="item.itemName" :value="item.itemValue" >
                                </el-option>
                                <el-option v-show="false" label="无" :value="TransValue">
                                </el-option>
                            </el-select>
                        </template>
                    </el-table-column>

                    <el-table-column prop="transportMethodId" label="物流公司">
                        <template slot-scope="scope">
                            <el-select  v-model="scope.row.logisticsCompanyId" :class="[scope.$index%2==0?'bgw':'bgp']" @change='handleChange(scope.$index,scope.row)'>
                                <el-option  v-for="item in logiAr" :key="item.itemValue" :label="item.itemName" :value="item.itemValue" >
                                </el-option>
                                <el-option v-show="false" label="无" :value="LogiValue">
                                </el-option>
                            </el-select>
                        </template>
                    </el-table-column>

                    <el-table-column prop="isDefault" label="默认">
                        <template slot-scope="scope">
                            <el-radio  :label="true" 
                                        v-model="scope.row.isDefault" 
                                        @change.native="getCurrentRow(scope.$index,scope.row)" 
                                        @change="handleChange(scope.$index,scope.row)"></el-radio>
                        </template>
                    </el-table-column>

                    <el-table-column prop="remark" label="备注">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.remark"
                                    @change='handleChange(scope.$index,scope.row)'
                                    type="text"/>
                        </template>
                    </el-table-column>

                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button v-on:click="handleDelete(scope.$index,scope.row,1)" type="text" size="small">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>  -->
            </el-col>
        </el-row>

        <el-row class="ft12 pr10 pt10 br3">
            <el-col :span='24' class="bg-white pl10 pt10 pb10">
                <span style="color:black;font-size:16px;font-weight:bolder;">审计信息</span>
            </el-col>

            <el-col :span="24" class="bg-white pb10">   
                <div>
                    <div class="bgcolor">
                        <label>创建人</label>
                        <el-input placeholder="" disabled="disabled" v-model="dataItem.createdBy" ></el-input>
                    </div>

                    <div class="bgcolor">
                        <label>创建时间</label>
                        <el-date-picker  type="date" placeholder="" disabled="disabled" v-model="dataItem.createdTime" ></el-date-picker>
                    </div>

                    <div class="bgcolor">
                        <label>修改人</label>
                        <el-input placeholder="" disabled="disabled" v-model="dataItem.modifiedBy" ></el-input>
                    </div>

                    <div class="bgcolor">
                        <label>修改时间</label>
                        <el-date-picker type="date" placeholder="" disabled="disabled" v-model="dataItem.modifiedTime" ></el-date-picker>
                    </div>
                </div> 
            </el-col>
        </el-row>
  </div>
</template>

<script>
import Table from '../../base/Table/Table'
    export default{
        name:'repositoryModify',
        data(){
            return{
                changeTimes:0,//数据变化统计
                dataItem:{
                    ouId:'',//所属组织
                    stockCode:'',//仓库编码
                    stockName:'',//仓库名称
                    stockFullName:'',//仓库全称
                    mnemonic:'',//助记码
                    stockTypeId:'',//仓库类型
                    opAreaId_AreaName:'',//业务地区
                    adAreaId:'',//行政地区
                    manager:'',//负责人
                    phone:'',//电话
                    email:'',//邮箱
                    fax:'',//传真
                    stockAddress:'',//仓库地址
                    remark:'',//备注
                    status:'',//状态
                    createdBy:'',//创建人
                    createdTime:'',//创建时间
                    modifiedBy:'',//修改人
                    modifiedTime:'',//修改时间
                },
                subData:[],//从表信息
                httpUrl:{
                    Initial:'/api/services/app/StockAddressManagement/GetAllByStockId',
                    delete:'/api/services/app/StockAddressManagement/Delete',
                },
                column:[{//表格列配置
                        prop: 'contactPerson',
                        label: '联系人',
                        controls:'text',
                        required:true,
                        isFix:"",
                        width:"auto",
                        isDisable:false,
                        sortable:false,
                    },{
                        prop: 'moblie',
                        label: '手机',
                        controls:'text',
                        required:true,
                        isFix:"",
                        width:"auto",
                        isDisable:false,
                        sortable:false,
                    },{
                        prop: 'phone',
                        label: '电话',
                        controls:'text',
                        required:true,
                        isFix:"",
                        width:"auto",
                        isDisable:false,
                        sortable:false,
                    },{
                        prop: 'completeAddress',
                        label: '送货地址',
                        controls:'text',
                        required:true,
                        isFix:"",
                        width:"auto",
                        isDisable:false,
                        sortable:false,
                    },{
                        prop: 'transportMethodId',
                        label: '运输方式',
                        controls:'select',
                        required:true,
                        isFix:"",
                        width:"auto",
                        isDisable:false,
                        sortable:false,
                    },{
                        prop: 'logisticsCompanyId',
                        label: '物流公司',
                        controls:'select',
                        required:true,
                        isFix:"",
                        width:"auto",
                        isDisable:false,
                        sortable:false,
                    },{
                        prop: 'isDefault',
                        label: '默认',
                        controls:'text',
                        required:true,
                        isFix:"",
                        width:"auto",
                        isDisable:false,
                        sortable:false,
                    },{
                        prop: 'remark',
                        label: ' 备注',
                        controls:'text',
                        required:true,
                        isFix:"",
                        width:"auto",
                        isDisable:false,
                        sortable:false,
                    },],
                isDisable:false,
                tableModel:'storeHouseModify',
                mutiSelect:true,
                command:[{
                    text:'删除',
                    class:'blue'
                }],
                hasPagination:false,
                HttpParams:{
                    Id:this.$route.params.id
                }
            }
        },
        created(){
            this.InitModify();
            // this.InitSubData();
        },
        mounted:function(){
            
        },
        computed:{
            
        },

        watch:{

        },  
        methods:{
            back(){
                this.$store.state.url='/storeHouse/storeHouseList/default'
           		this.$router.push({path:this.$store.state.url})//点击切换路由
            },
            InitModify(){//查看详情(获取主表信息)
                let _this=this;
                if(_this.$route.params.id=="default"){
                    return;
                }else{
                    _this.$axios.gets('/api/services/app/StockManagement/Get',{Id:_this.$route.params.id}).then(function(res){
                        _this.dataItem.changeTimes=0;
                        _this.dataItem.ouId=res.result.ouId;//所属组织
                        _this.dataItem.stockCode=res.result.stockCode;//仓库编码
                        _this.dataItem.stockName=res.result.stockName;//仓库名称
                        _this.dataItem.stockFullName=res.result.stockFullName;//仓库全称
                        _this.dataItem.mnemonic=res.result.mnemonic;//助记码
                        _this.dataItem.stockTypeId=res.result.stockTypeId;//仓库类型
                        _this.dataItem.opAreaId_AreaName=res.result.opAreaId_AreaName;//业务地区
                        _this.dataItem.adAreaId=res.result.adAreaId;//行政地区
                        _this.dataItem.manager=res.result.manager;//负责人
                        _this.dataItem.phone=res.result.phone;//电话
                        _this.dataItem.email=res.result.email;//邮箱
                        _this.dataItem.fax=res.result.fax;//传真
                        _this.dataItem.stockAddress=res.result.stockAddress;//仓库地址
                        _this.dataItem.remark=res.result.remark;//备注
                        _this.dataItem.status=res.result.status;//状态
                        _this.dataItem.createdBy=res.result.createdBy;//创建人
                        _this.dataItem.createdTime=res.result.createdTime;//创建时间
                        _this.dataItem.modifiedBy=res.result.modifiedBy;//修改人
                        _this.dataItem.modifiedTime=res.result.modifiedTime;//修改时间
                                       
                    })
                }
                 
            },
            InitSubData(){
                 let _this=this;
                if(_this.$route.params.id=="default"){
                    return;
                }else{
                    _this.$axios.gets('/api/services/app/StockAddressManagement/GetAllByStockId',{Id:_this.$route.params.id}).then(function(res){
                        _this.$store.commit('Init_Table',res.result);
                    })
                }
            },
            
        },
        components:{
            Table
        }
        
    }
</script>

<style scoped>
.res-modify{
    background: #EEF1F5;
    height: auto;
    width: 100%;
}
.bg-white{
    background: white;
}
.pl10{
    padding-left: 10px;
}
.pl40{
    padding-left: 40px;
}
.ml15{
    margin-left: 15px;
}
.ml10{
    margin-left: 10px;
}
.mt10{
    margin-top: 10px;
}
.mt20{
    margin-top: 20px;
}
.mb10{
    margin-bottom: 10px;
}
.pt10{
    padding-top: 10px;
}
.pb10{
    padding-bottom: 10px;
}
.pr10{
    padding-right: 10px;
}
.ft12{
    font-size: 14px;
}
.btn{
    display: inline-block;
    width: 100%;
    border-radius: 3px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: white;
    background: rgba(130, 170, 252, 1);
    cursor: pointer;
}
.br3{
    border-radius: 3px;
}
.h30{
    height: 32px;
    line-height: 30px;
}
.h35{
    height: 35px;
    line-height: 35px;
}
.input-need{
    border:none;
    outline: none;
    width: 100%;
    height: 23px;
    line-height: 23px;
}
.input-bgw{
    background: white;
    text-align: center;
}
.input-bgp{
    background: #FAFAFA;
    text-align: center;
}
.header-title{
    color: #333333;
    font-size: 16px;
    display: inline-block;
    border-bottom: 2px solid rgb(51, 204, 204);
    font-weight: bolder;
    padding: 5px 1px;
}
.bb1{
    border-bottom: 1px solid #cccccc;
}
.b1{
    border: 1px solid #cccccc;
}
.fr{
    float: right;
}
.toggle-btn{
    cursor: pointer;
    font-size: 12px;
    float: right;
    margin-right: 20px;
    height: 36px;
    line-height: 36px;
}

</style>
<style>
.res-modify .el-input__inner{
    height:35px !important;
}
.res-modify .bgw .el-input__inner{
    text-align:center;
    border:none;
    background-color:white;
}
.res-modify .bgp .el-input__inner{
    text-align:center;
    border:none;
    background-color:#FAFAFA;
}
.res-modify .display_block{
    margin-bottom:5px;
}
.res-modify .area{
    width:510px;
    margin-right:0px;
}
.el-select.areaDrop,.el-input.areaEntry{
    width: 136px;
}
.areaDrop input,.areaEntry input{
    border: none!important;
}
.areaDrop .el-input__inner,.areaEntry .el-input__inner{
    height: 32px!important;
}
</style>



