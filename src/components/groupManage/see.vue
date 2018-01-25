<template>
<!-- 集团管理-组织单元 -->
 <div class="seeForm">
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
                    <el-input v-model="addData.ouName" placeholder="无记录" readonly></el-input>
                </div>
                <div class="bgcolor">
                    <label>上级业务单元</label>
                    <el-input v-model="addData.ouParentid" placeholder="无记录" readonly></el-input>
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
            <el-checkbox v-model="count.isCheckCompany" @change="checkCompany">公司</el-checkbox>
            <el-checkbox v-model="count.isCheckFinance" @change="checkFinance">财务</el-checkbox>
            <el-checkbox v-model="count.isCheckBusiness" @change="checkBusiness">业务</el-checkbox>
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
                <el-tab-pane label="公司" name="company" v-if="count.isCheckCompany">
                     <el-col :span="24">
                          <div class="companyInfo">
                            <el-col :span="24">
                                <el-col :span="5"  class="getPadding">
                                    <el-checkbox v-model="group" readonly>集团公司</el-checkbox>
                                    <el-checkbox v-model="addData.isGroupCompany" readonly>是否启用</el-checkbox>
                                </el-col> 
                            </el-col>
                            <el-col :span="22"  class="getPadding">
                                <div class="bgcolor"><label>上级公司</label><el-input v-model="company.higher" placeholder="无记录" readonly></el-input></div>
                                <div class="bgcolor"><label>法人代表</label><el-input v-model="company.representative" placeholder="无记录" readonly></el-input></div>
                                <div class="bgcolor">
                                    <label>用户状态</label>
                                    <el-input v-model="addData.status" placeholder="无记录" readonly></el-input>
                                </div>
                            </el-col>
                         </div>
                     </el-col>   
                </el-tab-pane>
                <el-tab-pane label="财务" name="finance" v-if="count.isCheckFinance">财务</el-tab-pane>
                <el-tab-pane label="业务" name="business" v-if="count.isCheckBusiness">业务</el-tab-pane>
            </el-tabs>
        </el-col>
    </div>
 </el-row>     
 <el-row>
    <el-col :span="24" class="getPadding">
        <h4 class="h4">审计信息</h4>
        <div>
            <div class="bgcolor"><label>创建人</label><el-input v-model="creatorUser.fullName" readonly placeholder="无记录"></el-input></div>
            <div class="bgcolor"><label>创建时间</label><el-input v-model="auditInfo.creationTime" readonly placeholder="无记录"></el-input></div>
            <div class="bgcolor"><label>修改人</label><el-input v-model="auditInfo.lastModifierUserId" readonly placeholder="无记录"></el-input></div>
            <div class="bgcolor"><label>修改时间</label><el-input v-model="auditInfo.lastModificationTime" readonly placeholder="无记录"></el-input></div>
            <div class="bgcolor"><label>启用日期</label><el-input v-model="auditInfo.startTime" readonly placeholder="无记录"></el-input></div>
            <div class="bgcolor"><label>封存日期</label><el-input v-model="auditInfo.lastModificationTime" readonly placeholder="无记录"></el-input></div>
            <div class="bgcolor"><label>封存人</label><el-input v-model="auditInfo.lastModifierUser" readonly placeholder="无记录"    ></el-input></div>
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
            creatorUser:[],
            auditInfo:{},//审计信息
            addData:{
                // id:0,
                // groupId:1,//集团ID
                // ouCode: 'string',//组织代码存在 
                // ouName: 'string' ,//组织名称存在
                // foreignName: 'string' ,//外文名称
                // mnemonic: 'string' ,//助记码
                // ouParentid: 0 ,//上级组织ID存在
                // accountPeriodId: 0 ,//会计期间ID
                // baseCurrencyId: 0,//本位币种id存在
                // companyOuId: 0,//所属公司ID存在
                // contactPerson: 'string' ,//联系人存在
                // phone: 'string' ,//电话存在
                // address: 'string' ,//地址存在
                // areaId: 0 ,//行政区域ID
                // entityProperty : 0 ,//实体属性
                // status: 0 ,//启用状态存在
                // remark: 'string' ,//备注存在
                // basOuTypes: [ 0 ],//组织职能
                // isGroupCompany:true ,//
                // ouCompanyParentid: 0 ,//上级公司组织ID
                // legalPerson: 'string' ,//法人代表
                // companyStatus: 0 ,//公司启用状态
                // regtime: '2018-01-23T02:20:35.833Z'//公司成立时间
            },
            company:{//公司
                higher:"恒康",
                representative:"lioman",    
            },  
            ischeck:{isCheckCompany:true,//公司复选框初始选种状态
                    isCheckFinance:false,//财务复选框初始选种状态
                    isCheckBusiness:false}//业务复选框初始选种状态 
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
        ischeck: {
        handler: function (val, oldVal) { 
            var x=val.isCheckCompany || val.isCheckFinance
            if(val.isCheckCompany || val.isCheckFinance || val.isCheckBusiness){}else{
                this.ischeck.isCheckCompany=true;
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
            _this.addData={
                id: _this.$route.params.id,
                groupId:1,//集团ID
                ouCode: res.result.ouCode,//组织代码存在 
                ouName: res.result.ouName ,//组织名称存在
                foreignName: res.result.foreignName ,//外文名称
                mnemonic: res.result.mnemonic,//助记码
                ouParentid: res.result.ouParentid ,//上级组织ID存在
                accountPeriodId: res.result.accountPeriodId ,//会计期间ID
                baseCurrencyId: res.result.baseCurrencyId,//本位币种id存在
                companyOuId: res.result.companyOuId,//所属公司ID存在
                contactPerson: res.result.contactPerson ,//联系人存在
                phone: res.result.phone ,//电话存在
                address:res.result.address ,//地址存在
                areaId: res.result.areaId,//行政区域ID
                entityProperty : res.result.entityProperty,//实体属性
                status: res.result.status,//启用状态存在
                remark: res.result.remark ,//备注存在
                basOuTypes: [0],//组织职能
                isGroupCompany:res.result.isGroupCompany ,//
                ouCompanyParentid: res.result.ouCompanyParentid ,//上级公司组织ID
                legalPerson:res.result.legalPerson ,//法人代表
                companyStatus: res.result.companyStatus ,//公司启用状态
                regtime:res.result.regtime//公司成立时间
            };
            _this.auditInfo={
                lastModifierUser:res.result.lastModifierUser,
                isDeleted:res.result.isDeleted,
                deleterUserId:res.result.deleterUserId,
                deletionTime:res.result.deletionTime,
                lastModificationTime:res.result.lastModificationTime,
                lastModifierUserId:res.result.lastModifierUserId,
                creationTime:res.result.creationTime,
                creatorUserId:res.result.creatorUserId,
            }
            if(res.result.creatorUser!=null){
                    _this.creatorUser=res.result.creatorUser
                }
        },function(res){
            //console.log('err:'+res)
        })
        
         
    },
    computed:{
        count () {
            return this.ischeck;
            },
    },       
    methods:{
        back(){
            this.$store.state.url='/groupManage/default/groupManageList/default'
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
                this.count.isCheckCompany=true;
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
                if(this.count.isCheckFinance){
                     this.count.isCheckFinance=false;
                }
            }
        },
        checkBusiness:function(e){ 
            if(e){//选中业务
                this.activeName='business';
            }else{
                if(this.count.isCheckFinance){
                    this.activeName='finance';
                }else if(!this.count.isCheckFinance&&this.count.isCheckCompany){
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
  .seeForm{
      font-family: 'microsoft yahei';
  }
  .seeForm .bgcolor input{
      /* border: none; */
  }
  /*收起*/
 .seeForm .upBt{
     font-size: 12px;
     float: right;
     margin-right: 10px;
     margin-top: 10px;
     cursor: pointer;
 }
 .seeForm .upBt i{
    transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s; 
    color:#cacaca;
    margin-left: 5px;
 }
 .seeForm .upBt i.rotate{
     transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);	
 }

/*表单提示信息*/
.seeForm  .errorTips{
    margin-bottom: 10px;
    margin-top: -10px;
}

  .seeForm .el-row{
     padding:15px 0;
     border-bottom: 1px solid #e4e4e4;
     background-color: #fff;
  }
.seeForm .el-row:last-child{
      border-bottom:none;
  }

.seeForm .tabZoo .getPadding:first-child{
    padding-bottom: 15px;
}
 .seeForm .getPadding,.tabZoo .el-tabs__nav-scroll{
     padding: 0 10px;
 }
 .seeForm .tabZoo .el-tabs__active-bar{
     width: 28px!important;
 }

.seeForm .nopadding{
    padding-top: 0;
}

  </style>
