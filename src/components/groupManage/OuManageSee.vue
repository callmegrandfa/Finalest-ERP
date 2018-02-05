<template>
<!-- 集团管理-组织单元 -->
 <div class="OuSeeForm">
     <el-row>
         <el-col :span="24">
            <button @click="back" class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
            <!-- <button class="erp_bt bt_add" @click="newAdd"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button> -->
            <!-- <button class="erp_bt bt_save" plain @click="save"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button> -->
            <!-- <button class="erp_bt bt_saveAdd" plain @click="saveAdd"><div class="btImg"><img src="../../../static/image/common/bt_saveAdd.png"></div><span class="btDetail">保存并新增</span></button> -->
            <button class="erp_bt bt_auxiliary"><div class="btImg"><img src="../../../static/image/common/bt_auxiliary.png"></div><span class="btDetail">辅助功能</span></button>
            <span @click="ifShow = !ifShow" class="upBt">收起<i class="el-icon-arrow-down" @click="ifShow = !ifShow" :class="{rotate : !ifShow}"></i></span>
        </el-col>
     </el-row>
 <el-collapse-transition>
     <div v-show="ifShow">
        <el-row>
                <!--公司信息  -->
            <el-col :span="24" class="getPadding">
                <div class="errorTips" :class="{block : show}">
                    <p class="msgDetail">错误提示：名称不能为特殊字符</p>
                    <div class="closeMsg" @click="show = !show"><i class="fa fa-times" aria-hidden="true"></i></div>
                </div>
                <div class="bgcolor">
                    <label>编码</label>
                    <el-input v-model="addData.ouCode" placeholder="无记录" readonly></el-input>
                </div> 
                <div class="bgcolor">
                    <label>名称</label>
                    <el-input v-model="addData.ouName" placeholder="无记录" readonly></el-input>
                </div>
                <div class="bgcolor">
                    <label>全称</label>
                    <el-input v-model="addData.ouFullname" placeholder="无记录" readonly></el-input>
                </div>
                <div class="bgcolor">
                    <label>上级业务单元</label>
                    <el-input v-model="addData.ouParentName" placeholder="无记录" readonly></el-input>
                </div>
                <div class="bgcolor"><label>启用月份</label> <el-input v-model="addData.regtime" placeholder="无记录" readonly></el-input></div>
                <div class="bgcolor">
                    <label>本位币种</label>
                    <el-input v-model="addData.baseCurrencyId" placeholder="无记录" readonly></el-input>
                </div>
                <div class="bgcolor">
                    <label>所属公司</label>
                    <el-input v-model="addData.companyOuId" placeholder="无记录" readonly></el-input>
                </div>
                <div class="bgcolor"><label>联系人</label><el-input v-model="addData.contactPerson " placeholder="无记录" readonly></el-input></div>
                <div class="bgcolor"><label>电话</label><el-input v-model="addData.phone" placeholder="无记录" readonly></el-input></div>
                <div class="bgcolor"><label>地址</label><el-input v-model="addData.address" placeholder="无记录" readonly></el-input></div>
                <div class="bgcolor"><label>备注</label><el-input v-model="addData.remark" placeholder="无记录" readonly></el-input></div>
                <div class="bgcolor">
                    <label>用户状态</label>
                    <el-input v-model="addData.status" placeholder="无记录" readonly></el-input>
                </div>
            </el-col> 
        </el-row>
     </div>    
 </el-collapse-transition>  
<!--组织类型  -->
<el-row>
    <el-col :span="24" class="getPadding"> <h4 class="h4">组织类型</h4></el-col>
    <el-col :span="22" class="getPadding"> 
        <el-col :span="6">  
            <el-checkbox v-model="addData.isCompany" @change="checkCompany" disabled>公司</el-checkbox>
            <el-checkbox v-model="addData.isFinance" @change="checkFinance" disabled>财务</el-checkbox>
            <el-checkbox v-model="addData.isPurchase" @change="checkBusiness" disabled>业务</el-checkbox>
        </el-col>              
    </el-col>           
 </el-row> 
    <!--基础信息  -->  
<!-- <el-row> 
    <el-col :span="24" class="getPadding"><h4 class="h4">基础信息</h4></el-col>
    <el-col :span="22" class="getPadding">
        <div class="bgcolor"><label>版本号</label><el-input v-model="basicInformation.version" placeholder="备注" :disabled="true"></el-input></div>
        <div class="bgcolor"><label><small>*</small>版本开始日期</label><el-date-picker v-model="basicInformation.start" type="date" placeholder="请录入开始日期"></el-date-picker></div>
        <div class="bgcolor"><label><small>*</small>版本结束日期</label><el-date-picker v-model="basicInformation.finish" type="date" placeholder="请录入结束日期"></el-date-picker></div>
    </el-col> 
</el-row>   -->
    <!-- 公司业务财务bootTab标签页 -->
<el-row class="nopadding">  
    <div class="tabZoo">
        <el-col :span="24">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="公司" name="company" v-if="count.isCompany">
                     <el-col :span="24">
                          <div class="companyInfo">
                            <el-col :span="24">
                                <el-col :span="5"  class="getPadding">
                                    <el-checkbox v-model="group" disabled>集团公司</el-checkbox>
                                    <el-checkbox disabled>是否启用</el-checkbox>
                                </el-col>
                            </el-col>
                            <el-col :span="22"  class="getPadding">
                                <div class="bgcolor"><label>上级公司</label><el-input placeholder="无字段" readonly></el-input></div>
                                <div class="bgcolor"><label>法人代表</label><el-input placeholder="无字段" readonly></el-input></div>
                                
                            </el-col>
                         </div>
                     </el-col>   
                </el-tab-pane>
                <el-tab-pane label="财务" name="finance" v-if="count.isFinance">财务</el-tab-pane>
                <el-tab-pane label="业务" name="business" v-if="count.isPurchase">业务</el-tab-pane>
            </el-tabs>
        </el-col>
    </div>
 </el-row>     
 <el-row>
    <el-col :span="24" class="getPadding">
        <h4 class="h4">审计信息</h4>
        <div>
            <div class="bgcolor"><label>创建人</label><el-input v-model="addData.creatorUserName" readonly placeholder="无记录"></el-input></div>
            <div class="bgcolor"><label>创建时间</label><el-input v-model="addData.creationTime" readonly placeholder="无记录"></el-input></div>
            <div class="bgcolor"><label>修改人</label><el-input v-model="addData.lastModifierUserName" readonly placeholder="无记录"></el-input></div>
            <div class="bgcolor"><label>修改时间</label><el-input v-model="addData.lastModificationTime" readonly placeholder="无记录"></el-input></div>
            <div class="bgcolor"><label>启用日期</label><el-input readonly placeholder="无字段"></el-input></div>
            <div class="bgcolor"><label>封存日期</label><el-input readonly placeholder="无字段"></el-input></div>
            <div class="bgcolor"><label>封存人</label><el-input readonly placeholder="无字段"    ></el-input></div>
        </div>                                  
    </el-col>
</el-row>                                                           
</div>
</template>

<script>
export default({
    data() {
        return{
            show:true,
            ifShow:true,
            activeName: 'company',
            addData:{
                // groupId:0,
                // ouCode: "string",
                // ouName: "string",
                // ouFullname: "string",
                // ouParentid: 0,
                // ouParentName: "string",
                // companyOuId: 0,
                // baseCurrencyId: 0,
                // accountPeriodId: 0,
                // status: 0,
                // isCompany: true,
                // isAdministration: true,
                // isFinance: true,
                // isCapital: true,
                // isPurchase: true,
                // foreignName: "string",
                // mnemonic: "string",
                // contactPerson: "string",
                // phone: "string",
                // address: "string",
                // areaId: 0,
                // remark: "string",
                // basOuTypes: [
                //     {
                //     groupId: 0,
                //     ouId: 0,
                //     ouType: 1,
                //     id: 0
                //     }
                // ],
                // creatorUserName: "string",
                // lastModifierUserName: "string",
                // isDeleted: true,
                // deleterUserId: 0,
                // deletionTime: "2018-02-01T02:32:05.993Z",
                // lastModificationTime: "2018-02-01T02:32:05.993Z",
                // lastModifierUserId: 0,
                // creationTime: "2018-02-01T02:32:05.993Z",
                // creatorUserId: 0,
                // id: 0
            },
            ischeck:{
                        // isCompany:true,//公司复选框初始选种状态
                        // isFinance:false,//财务复选框初始选种状态
                        // isPurchase:false
                    }//业务复选框初始选种状态 
            ,
            
            group:true,//集团公司复选框初始选种状态
            isUse:false,//是否启用复选框初始选种状态
            higherUnit: [{//上级单元数据
                valueHigherUnit: '0',
                label: '361度'
            }, {
                valueHigherUnit: '1',
                label: '恒康'
            }, {
                valueHigherUnit: '2',
                label: '红旗连锁'
            }],
            money: [{//本位币种
                baseCurrencyId:'0',
                label: 'RMB'
            }, {
                baseCurrencyId:'1',
                label: '美元'
            }, {
                baseCurrencyId:'2',
                label: '英镑'
            },{
                baseCurrencyId:'3',
                label: '日元'
            }, {
                baseCurrencyId:'4',
                label: '韩元'
            }, {
                baseCurrencyId:'5',
                label: '越南盾'
            },{
                baseCurrencyId:'6',
                label: '泰铢'
            }, {
                baseCurrencyId:'7',
                label: '港币'
            }, {
                baseCurrencyId:'8',
                label: '银元'
            }],
            company: [{ //   所属公司数据
                valueCompany:'0',
                label: '恒康'
            }, {
                valueCompany:'1',
                label: '361度'
            }, {
                valueCompany:'2',
                label: '红旗连锁'
            }],
            state: [{ //启用状态数据
                valueState:'0',
                label: '启用'
            }, {
                valueState:'1',
                label: '停用'
            }]          
        }
    },
    watch:{
        addData: {
        handler: function (val, oldVal) { 
            var x=val.isCompany || val.isFinance
            if(val.isCompany || val.isFinance || val.isPurchase){}else{
                this.addData.isCompany=true;
                this.activeName='company';
            } },
        deep: true,
        immediate: true
        },
    }, 
    created:function(){
        let _this=this;
        _this.$axios.gets('/api/services/app/OuManagement/Get',{id:_this.$route.params.id})
        .then(function(res){
            console.log(res)
            _this.addData=res.result
        },function(res){
            //console.log('err:'+res)
        })
        
         
    },
    computed:{
        count () {
            return this.addData;
            },
    },       
    methods:{
        back(){
            this.$store.state.url='/OuManage/OuManageList/default'
            this.$router.push({path:this.$store.state.url})//点击切换路由
        },
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
         handleClick(tab, event) {
            // console.log(tab, event);
        },
        checkFinance:function(e){
            
            if(e){//选中财务
                this.count.isCompany=true;
                this.activeName='finance';
            }else{
                this.activeName='company';
            }
        },
        checkCompany:function(e){
            if(e){//选中公司
                this.activeName='company';
            }else{
                this.activeName='business';
                if(this.count.isFinance){
                     this.count.isFinance=false;
                }
            }
        },
        checkBusiness:function(e){ 
            if(e){//选中业务
                this.activeName='business';
            }else{
                if(this.count.isFinance){
                    this.activeName='finance';
                }else if(!this.count.isFinance&&this.count.isCompany){
                    this.activeName='company';
                }
            }
        },
    }

})        
    
  </script>

<style>
  .block{
      display: none;
  }
  .OuSeeForm{
      font-family: 'microsoft yahei';
  }
  .OuSeeForm .bgcolor input{
      /* border: none; */
  }
  /*收起*/
 .OuSeeForm .upBt{
     font-size: 12px;
     float: right;
     margin-right: 10px;
     margin-top: 10px;
     cursor: pointer;
 }
 .OuSeeForm .upBt i{
    transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s; 
    color:#cacaca;
    margin-left: 5px;
 }
 .OuSeeForm .upBt i.rotate{
     transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);	
 }

/*表单提示信息*/
.OuSeeForm  .errorTips{
    margin-bottom: 10px;
    margin-top: -10px;
}

  .OuSeeForm .el-row{
     padding:15px 0;
     border-bottom: 1px solid #e4e4e4;
     background-color: #fff;
  }
.OuSeeForm .el-row:last-child{
      border-bottom:none;
  }

.OuSeeForm .tabZoo .getPadding:first-child{
    padding-bottom: 15px;
}
 .OuSeeForm .getPadding,.tabZoo .el-tabs__nav-scroll{
     padding: 0 10px;
 }
 .OuSeeForm .tabZoo .el-tabs__active-bar{
     width: 28px!important;
 }

.OuSeeForm .nopadding{
    padding-top: 0;
}

  </style>
