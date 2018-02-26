<template>
<!-- 集团管理-组织单元修改 -->
 <div class="OuModifyForm">
     <el-row class="fixed">
         <el-col :span="24">
            <button @click="back" class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
            <!-- <button class="erp_bt bt_add" @click="newAdd"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button> -->
            <button class="erp_bt bt_save" plain @click="save"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>
            <button class="erp_bt bt_saveAdd" plain @click="saveAdd"><div class="btImg"><img src="../../../static/image/common/bt_saveAdd.png"></div><span class="btDetail">保存并新增</span></button>
            <button class="erp_bt bt_auxiliary bt_width">
                <div class="btImg"><img src="../../../static/image/common/bt_auxiliary.png"></div>
                <span class="btDetail">辅助功能</span>
                <div class="btRightImg"><img src="../../../static/image/common/bt_down_right.png"></div>
            </button>  
            <span @click="ifShow = !ifShow" class="upBt">收起<i class="el-icon-arrow-down" @click="ifShow = !ifShow" :class="{rotate : !ifShow}"></i></span>
        </el-col>
     </el-row>
 <el-collapse-transition>
     <div v-show="ifShow">
        <el-row>
                <!--公司信息  -->
            <el-col :span="24" class="getPadding">
                <div class="tipsWrapper" name="ouCode">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.ouCode')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('addData.ouCode') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="ouName">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.ouName')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('addData.ouName') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="ouParentid">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.ouParentid')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('addData.ouParentid') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="regtime">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.regtime')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('addData.regtime') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="baseCurrencyId">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.baseCurrencyId')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('addData.baseCurrencyId') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="companyOuId">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.companyOuId')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('addData.companyOuId') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="contactPerson">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.contactPerson')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('addData.contactPerson') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="phone">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.phone')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('addData.phone') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="address">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.address')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('addData.address') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="remark">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.remark')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('addData.remark') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="status">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.status')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('addData.status') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="ouCompanyParentid">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.ouCompanyParentid')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('addData.ouCompanyParentid') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="legalPerson">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.legalPerson')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('addData.legalPerson') }}</p>
                    </div>
                </div>
                
                
                
                <div class="bgcolor" >
                    <label>编码</label>
                    <el-input class="ouCode" 
                    @focus="showErrprTips"
                    :class="{redBorder : validation.hasError('addData.ouCode')}" 
                    v-model="addData.ouCode" 
                    placeholder="请录入编码">
                    </el-input>
                </div>
                
               
                <div class="bgcolor">
                        <label>名称</label>
                    <el-input class="ouName"
                    @focus="showErrprTips"
                     :class="{redBorder : validation.hasError('addData.ouName')}"
                     v-model="addData.ouName" 
                     placeholder="请录入手工单号">
                     </el-input>
                </div>
                <div class="bgcolor">
                    <label>全称</label>
                    <el-input placeholder="无字段"></el-input>
                </div>
                <div class="bgcolor">
                    <label>上级业务单元</label>
                    <el-select class="ouParentid"
                    @focus="showErrprTips"
                     :class="{redBorder : validation.hasError('addData.ouParentid')}" 
                     v-model="addData.ouParentid">
                        <el-option 
                        v-for="item in higherUnit" 
                        :key="item.valueHigherUnit" 
                        :label="item.label" 
                        :value="item.valueHigherUnit">
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label>公司成立时间</label>
                    <el-date-picker 
                    class="regtime datepicker" 
                    @focus="showErrprTips1"
                    :class="{redBorder : validation.hasError('addData.regtime')}"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd" 
                    v-model="addData.regtime" 
                    type="date" 
                    placeholder="请选择公司成立时间"></el-date-picker>
                </div>
                <div class="bgcolor">
                    <label>本位币种id</label>
                    <el-select 
                    class="baseCurrencyId" 
                    @focus="showErrprTips"
                    :class="{redBorder : validation.hasError('addData.baseCurrencyId')}" 
                    v-model="addData.baseCurrencyId">
                        <el-option 
                        v-for="item in money" 
                        :key="item.baseCurrencyId" 
                        :label="item.label" 
                        :value="item.baseCurrencyId" 
                        placeholder="请选择本位币种">
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label>所属公司</label>
                    <el-select 
                    class="companyOuId" 
                    @focus="showErrprTips"
                    :class="{redBorder : validation.hasError('addData.companyOuId')}" 
                    v-model="addData.companyOuId">
                        <el-option 
                        v-for="item in company" 
                        :key="item.valueCompany" 
                        :label="item.label" 
                        :value="item.valueCompany" 
                        placeholder="请选择所属公司">
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label>联系人</label>
                    <el-input 
                    class="contactPerson" 
                    @focus="showErrprTips"
                    :class="{redBorder : validation.hasError('addData.contactPerson')}" 
                    v-model="addData.contactPerson" 
                    placeholder="请填入联系人">
                    </el-input>
                </div>
                <div class="bgcolor">
                    <label>电话</label>
                    <el-input 
                    class="phone" 
                    @focus="showErrprTips"
                    :class="{redBorder : validation.hasError('addData.phone')}" 
                    v-model="addData.phone" 
                    placeholder="请填入电话"></el-input>
                </div>
                <div class="bgcolor">
                    <label>地址</label>
                    <el-input 
                    class="address" 
                    @focus="showErrprTips"
                    :class="{redBorder : validation.hasError('addData.address')}" 
                    v-model="addData.address" 
                    placeholder="请填入地址"></el-input>
                </div>
                <div class="bgcolor">
                    <label>备注</label>
                    <el-input 
                    class="remark" 
                    @focus="showErrprTips"
                    :class="{redBorder : validation.hasError('addData.remark')}" 
                    v-model="addData.remark" 
                    placeholder="备注"></el-input>
                </div>
                <div class="bgcolor">
                    <label>用户状态</label>
                    <el-select 
                    class="status" 
                    @focus="showErrprTips"
                    :class="{redBorder : validation.hasError('addData.status')}" 
                    v-model="addData.status">
                        <el-option 
                        v-for="item in state" 
                        :key="item.valueState" 
                        :label="item.label" 
                        :value="item.valueState" 
                        placeholder="请选择用户状态">
                        </el-option>
                    </el-select>
                </div>
                <!-- <div class="bgcolor"><label>上级公司ID</label><el-input v-model="addData.ouCompanyParentid" placeholder=""></el-input></div>
                <div class="bgcolor"><label>集团ID</label><el-input v-model="addData.groupId" placeholder=""></el-input></div>
                <div class="bgcolor"><label>外文名称</label><el-input v-model="addData.foreignName" placeholder=""></el-input></div>
                <div class="bgcolor"><label>助记码</label><el-input v-model="addData.mnemonic" placeholder=""></el-input></div>
                <div class="bgcolor"><label>会计期间ID</label><el-input v-model="addData.accountPeriodId" placeholder=""></el-input></div>
                <div class="bgcolor"><label>公司启用状态</label><el-input v-model="addData.companyStatus" placeholder=""></el-input></div>
                <div class="bgcolor"><label>实体属性</label><el-input v-model="addData.entityProperty" placeholder=""></el-input></div>
                <div class="bgcolor"><label>行政区域ID</label><el-input v-model="addData.areaId" placeholder=""></el-input></div> -->
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
                                    <el-checkbox v-model="group" disabled>集团公司</el-checkbox>
                                    <el-checkbox v-model="addData.isGroupCompany">是否启用</el-checkbox>
                                </el-col> 
                            </el-col>
                            <el-col :span="22"  class="getPadding">
                                <div class="bgcolor">
                                    <label>上级公司</label>
                                    <el-select 
                                    class="ouCompanyParentid" 
                                    @focus="showErrprTips"
                                    :class="{redBorder : validation.hasError('addData.ouCompanyParentid')}" 
                                    v-model="addData.ouCompanyParentid">
                                        <el-option 
                                        v-for="item in preCompany" 
                                        :key="item.valueCo" 
                                        :label="item.label" 
                                        :value="item.valueCo">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="bgcolor">
                                    <label>法人代表</label>
                                    <el-input 
                                    class="legalPerson" 
                                    @focus="showErrprTips"
                                    :class="{redBorder : validation.hasError('addData.legalPerson')}"  
                                    v-model="addData.legalPerson" 
                                    placeholder="请输入法人代表">
                                    </el-input>
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
            <div class="bgcolor"><label>创建人</label><el-input :disabled="true" v-model="auditInfo.creatorUserId"></el-input></div>
            <div class="bgcolor"><label>创建时间</label><el-input :disabled="true" v-model="auditInfo.creationTime"></el-input></div>
            <div class="bgcolor"><label>修改人</label><el-input :disabled="true" v-model="auditInfo.lastModifierUserId"></el-input></div>
            <div class="bgcolor"><label>修改时间</label><el-input :disabled="true" v-model="auditInfo.lastModificationTime"></el-input></div>
            <div class="bgcolor"><label>启用日期</label><el-input :disabled="true" v-model="auditInfo.creationTime"></el-input></div>
            <div class="bgcolor"><label>封存日期</label><el-input :disabled="true" v-model="auditInfo.deletionTime"></el-input></div>
            <div class="bgcolor"><label>封存人</label><el-input :disabled="true" v-model="auditInfo.deleterUserId"></el-input></div>
        </div>                                  
    </el-col>
</el-row>                                                           
</div>
</template>

<script>
export default({
    data() {
        return{
            companys:1,
            show:true,
            ifShow:true,
            activeName: 'company',
            auditInfo:{},//审计信息
            addData:{//post需要的键值对
                // groupId:1,//集团ID
                // ouCode: '',//组织代码
                // ouName: '' ,//组织名称
                // foreignName: '默认' ,//外文名称
                // mnemonic: '默认' ,//助记码
                // ouParentid: 1 ,//上级组织ID
                // accountPeriodId:1 ,//会计期间ID
                // baseCurrencyId: 1,//本位币种id
                // companyOuId: 1,//所属公司ID
                // contactPerson: '默认' ,//联系人
                // phone: '' ,//电话
                // address: '' ,//地址
                // areaId: 1 ,//行政区域ID
                // entityProperty : 1 ,//实体属性
                // status: 1 ,//启用状态
                // remark: '' ,//备注
                // basOuTypes: [ 1,2,3,4,5,6 ],//组织职能
                // isGroupCompany:true ,//是否是法人公司
                // ouCompanyParentid: 1 ,//上级公司组织ID
                // legalPerson: '',//法人代表
                // companyStatus: 0 ,//公司启用状态
                // regtime: '2018-01'//公司成立时间
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
                label: '0'
            }, {
                valueCompany:'1',
                label: '1'
            }, {
                valueCompany:'2',
                label: '2'
            }],
            preCompany: [{ //   上级公司
                valueCo:0,
                label: '0'
            }, {
                valueCo:1,
                label: '1'
            }, {
                valueCo:2,
                label: '2'
            }],
            state: [{ //启用状态数据
                valueState:'0',
                label: '启用'
            }, {
                valueState:'1',
                label: '停用'
            }],
            isSave:true,//是否可以保存
        }
    },
    validators: {
      'addData.ouCode': function (value) {//编码
         return this.Validator.value(value).required().maxLength(50)
      },
      'addData.ouName': function (value) {//名称
         return this.Validator.value(value).required().maxLength(50);
      },
      'addData.ouParentid': function (value) {//上级业务单元
         return this.Validator.value(value).required().maxLength(50);
      },
      'addData.regtime': function (value) {//公司成立时间
         return this.Validator.value(value).required().maxLength(50);
      },
      'addData.baseCurrencyId': function (value) {//本位币种id
         return this.Validator.value(value).required().integer();
      },
      'addData.companyOuId': function (value) {//所属公司
          return this.Validator.value(value).required().integer();
      },
      'addData.contactPerson': function (value) {//联系人
         return this.Validator.value(value).required().maxLength(50);
      },
      'addData.phone': function (value) {//电话
          return this.Validator.value(value).required().maxLength(50);
      },
      'addData.address': function (value) {//地址
         return this.Validator.value(value).required().maxLength(200);
      },
      'addData.remark': function (value) {//备注
         return this.Validator.value(value).required().maxLength(200);
      },
      'addData.status': function (value) {//用户状态
         return this.Validator.value(value).required().integer();
      },
      'addData.ouCompanyParentid': function (value) {//上级公司
         return this.Validator.value(value).required().integer();
      },
      'addData.legalPerson': function (value) {//法人代表
          return this.Validator.value(value).required().maxLength(50);
      },
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
    computed:{
        count () {
            return this.ischeck;
            },
    },
    created:function(){
        let _this=this;
        _this.$axios.gets('/api/services/app/OuManagement/Get',{id:_this.$route.params.id})
        .then(function(res){
            _this.addData={
                id:res.result.id,
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
                entityProperty :1,//实体属性 '未返回字段'
                status: res.result.status,//启用状态存在
                remark: res.result.remark ,//备注存在
                basOuTypes:[0],//组织职能
                isGroupCompany:true ,//'未返回字段'
                ouCompanyParentid: 0 ,//上级公司组织ID '未返回字段'
                legalPerson:'ad' ,//法人代表 '未返回字段'
                companyStatus: 1 ,//公司启用状态 '未返回字段'
                regtime:'2018-02-08 03:17:37'//公司成立时间
            };
            _this.auditInfo={
                lastModifierUserName:res.result.lastModifierUserName,
                isDeleted:res.result.isDeleted,
                deleterUserId:res.result.deleterUserId,
                deletionTime:res.result.deletionTime,
                lastModificationTime:res.result.lastModificationTime,
                lastModifierUserId:res.result.lastModifierUserId,
                creationTime:res.result.creationTime,
                creatorUserId:res.result.creatorUserId,
                isCompany : res.result.isCompany,//是否是法人公司
                isAdministration : res.result.isAdministration,//是否是行政
                isFinance: res.result.isFinance,//是否是财务
                isCapital :res.result.isCapital ,//是否是资金
                isPurchase :res.result.isPurchase ,//是否是采购
            }
        },function(res){

        })
    },  
    methods:{
        showErrprTips(e){
            $('.tipsWrapper').each(function(){
                if($(e.target).parent('.el-input').hasClass($(this).attr('name'))){
                    $(this).addClass('display_block')
                }else{
                    $(this).removeClass('display_block')
                }
            })

        },
        showErrprTips1(e){
            $('.tipsWrapper').each(function(){
                if($(e.$el).hasClass($(this).attr('name'))){
                    $(this).addClass('display_block')
                }else{
                    $(this).removeClass('display_block')
                }
            })
        },
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
        save(){
            let _this=this;
             _this.$validate()
            .then(function (success) {
                if (success) {
                    _this.$axios.puts('/api/services/app/OuManagement/Update',_this.addData).then(function(res){
                        _this.open('保存成功','el-icon-circle-check','successERP');
                    },function(res){
                        _this.open('保存失败','el-icon-error','faildERP');
                    })
                }
            });       
        },
        saveAdd(){
             let _this=this;
            _this.$validate()
            .then(function (success) {
                if (success) {
                    _this.$axios.puts('/api/services/app/OuManagement/Update',_this.addData).then(function(res){
                        _this.clearData();
                        _this.open('保存新增成功','el-icon-circle-check','successERP');
                    },function(res){
                        _this.open('保存新增失败','el-icon-error','faildERP');
                    })
                }
            });     
        },
        newAdd(){
            this.clearData();
            this.open('新增成功','el-icon-circle-check','successERP');
        },
        clearData(){
            this.creatorUser=[];
            this.auditInfo={
                id:'',
                lastModifierUser:'',
                isDeleted:false,
                deleterUserId:'',
                deletionTime:'',
                lastModificationTime:'',
                lastModifierUserId:'',
                creationTime:'',
                creatorUserId:'',
                isCompany : false,
                isAdministration :false,
                isFinance: false,
                isCapital :false,
                isPurchase :false,
            };
            this.addData={
                groupId:1,//集团ID
                ouCode: '',//组织代码存在 
                ouName: '' ,//组织名称存在
                foreignName: '' ,//外文名称
                mnemonic: '',//助记码
                ouParentid: '' ,//上级组织ID存在
                accountPeriodId:'' ,//会计期间ID
                baseCurrencyId: '',//本位币种id存在
                companyOuId: '',//所属公司ID存在
                contactPerson:'',//联系人存在
                phone:'',//电话存在
                address:'' ,//地址存在
                areaId: '',//行政区域ID
                entityProperty : '',//实体属性
                status: '',//启用状态存在
                remark: '' ,//备注存在
                basOuTypes: [0],//组织职能
                isGroupCompany:false ,//
                ouCompanyParentid: '' ,//上级公司组织ID
                legalPerson:'',//法人代表
                companyStatus:'' ,//公司启用状态
                regtime:''//公司成立时间
            };
        }
    }

})        
    
  </script>

<style>
  .block{
      display: none;
  }
  .OuModifyForm{
      font-family: 'microsoft yahei';
  }
  /*收起*/
 .OuModifyForm .upBt{
     font-size: 12px;
     float: right;
     margin-right: 10px;
     margin-top: 10px;
     cursor: pointer;
 }
 .OuModifyForm .upBt i{
    transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s; 
    color:#cacaca;
    margin-left: 5px;
 }
 .OuModifyForm .upBt i.rotate{
     transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);	
 }

/*表单提示信息*/
.OuModifyForm  .errorTips{
    margin-bottom: 10px;
    margin-top: -10px;
}

  .OuModifyForm .el-row{
     padding:15px 0;
     border-bottom: 1px solid #e4e4e4;
     background-color: #fff;
  }
.OuModifyForm .el-row:last-child{
      border-bottom:none;
  }

.OuModifyForm .tabZoo .getPadding:first-child{
    padding-bottom: 15px;
}
 .OuModifyForm .getPadding,.tabZoo .el-tabs__nav-scroll{
     padding: 0 10px;
 }
 .OuModifyForm .tabZoo .el-tabs__active-bar{
     width: 28px!important;
 }

.OuModifyForm .nopadding{
    padding-top: 0;
}

  </style>
