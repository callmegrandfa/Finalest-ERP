<template>
<!-- 集团管理-组织单元 -->
 <div class="OuDetailForm">
     <el-row class="fixed">
         <el-col :span="24">
            <button @click="back" class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
            <!-- <button class="erp_bt bt_add" @click="newAdd"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button> -->
            <button class="erp_bt bt_save" plain @click="save"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>
            <button class="erp_bt bt_saveAdd" plain><div class="btImg"><img src="../../../static/image/common/bt_saveAdd.png"></div><span class="btDetail">保存并新增</span></button>
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
                <!-- <div class="tipsWrapper" name="ouCode">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.ouCode')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('addData.ouCode') }}</p>
                    </div>
                </div> -->
                <div class="bgcolor" >
                    <label><small>*</small>编码</label>
                    <el-input class="ouCode" 
                    v-model="addData.ouCode">
                    </el-input>
                </div>
                <div class="bgcolor">
                    <label><small>*</small>名称</label>
                    <el-input class="ouName"
                     v-model="addData.ouName" >
                     </el-input>
                </div>
                <div class="bgcolor">
                    <label><small>*</small>全称</label>
                    <el-input class="ouCode"  
                    v-model="addData.ouFullname" 
                    placeholder=""></el-input>
                </div>
                <div class="bgcolor">
                    <label class="longLabel"><small>*</small>上级业务单元</label>
                    <el-select class="ouParentid"
                    placeholder=""
                    v-model="addData.ouParentid">
                        <el-option 
                        v-for="item in selectData.ouParentid" 
                        :key="item.id" 
                        :label="item.ouName" 
                        :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label><small>*</small>会计方案</label>
                    <el-select class="accCchemeId"
                    placeholder=""
                    v-model="addData.accCchemeId">
                        <el-option 
                        v-for="item in selectData.accCchemeId" 
                        :key="item.id" 
                        :label="item.accperiodSchemeName" 
                        :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label><small>*</small>启用月份</label>
                    <el-date-picker 
                    class="accStartMonth datepicker" 
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd" 
                    v-model="addData.accStartMonth" 
                    type="date" 
                    ></el-date-picker>
                </div>
                <div class="bgcolor">
                    <label><small>*</small>本位币种</label>
                    <el-select 
                    placeholder=""
                    class="baseCurrencyId" 
                    v-model="addData.baseCurrencyId">
                        <el-option 
                        v-for="item in selectData.baseCurrencyId" 
                        :key="item.id" 
                        :label="item.currencyName" 
                        :value="item.id" 
                        >
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label>所属公司</label>
                    <el-select 
                    placeholder=""
                    class="companyOuId" 
                    v-model="addData.companyOuId">
                        <el-option 
                        v-for="item in selectData.companys" 
                        :key="item.id" 
                        :label="item.ouName" 
                        :value="item.id" 
                        >
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label>联系人</label>
                    <el-input 
                    class="contactPerson" 
                    v-model="addData.contactPerson" 
                    >
                    </el-input>
                </div>
                <div class="bgcolor">
                    <label>电话</label>
                    <el-input 
                    class="phone" 
                    v-model="addData.phone" 
                    ></el-input>
                </div>
                <div class="bgcolor">
                    <label>地址</label>
                    <el-input 
                    class="address" 
                    v-model="addData.address" 
                    ></el-input>
                </div>
                 <div class="bgcolor">
                    <label>启用状态</label>
                    <el-select 
                    class="status1" 
                    placeholder=""
                    v-model="addData.status">
                        <el-option 
                        v-for="item in selectData.Status001" 
                        :key="item.itemValue" 
                        :label="item.itemName" 
                        :value="item.itemValue" 
                        >
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor longWidth">
                    <label>备注</label>
                    <el-input
                    class="remark1" 
                    v-model="addData.remark"
                    type="textarea"
                    :autosize="{ minRows: 4, maxRows: 10}"
                    >
                    </el-input>
                </div>
               
            </el-col> 
        </el-row>
     </div>    
 </el-collapse-transition>  
<!--组织类型  -->
<el-row>
    <el-col :span="24" class="getPadding"> <h4 class="h4">组织类型</h4></el-col>
    <el-col :span="24" class="getPadding"> 
        <el-col :span="6">  
            <!-- <el-checkbox v-model="count.isCheckCompany" @focus="checkCompany">公司</el-checkbox>
            <el-checkbox v-model="count.isCheckFinance" @focus="checkFinance">财务</el-checkbox>
            <el-checkbox v-model="count.isCheckBusiness" @focus="checkBusiness">业务</el-checkbox> -->
            <el-checkbox-group 
            v-model="basOuTypes"
            :min="1">
            <el-checkbox v-for="item in selectData.OUType" :value="item.itemValue" :label="item.itemValue" :key="item.itemValue" @change="showTabs">{{item.itemName}}</el-checkbox>
            </el-checkbox-group>
        </el-col>              
    </el-col>           
 </el-row> 
    <!-- 公司业务财务bootTab标签页 -->
<el-row class="nopadding">  
    <div class="tabZoo">
        <el-col :span="24">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="公司" name="company" v-if="countCompany">
                     <el-col :span="24">
                          <div class="companyInfo">
                            <el-col :span="24">
                                <el-col :span="5"  class="getPadding">
                                    <el-checkbox v-model="basCompany.isGroupCompany">集团公司</el-checkbox>
                                </el-col> 
                            </el-col>
                            <el-col :span="24"  class="getPadding" style="border-bottom:1px solid #e4e4e4; ">
                                <div class="bgcolor">
                                    <label>上级公司</label>
                                    <el-select 
                                    placeholder=""
                                    class="ouParentid" 
                                    v-model="basCompany.ouParentid">
                                        <el-option 
                                        v-for="item in selectData.companys" 
                                        :key="item.id" 
                                        :label="item.ouName" 
                                        :value="item.id" 
                                        >
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="bgcolor">
                                    <label>启用状态</label>
                                    <el-select 
                                    placeholder=""
                                    class="status2" 
                                    v-model="basCompany.status">
                                        <el-option 
                                        v-for="item in selectData.Status001" 
                                        :key="item.itemValue" 
                                        :label="item.itemName" 
                                        :value="item.itemValue" 
                                        >
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="24" class="getPadding">
                                <h4 class="h4">其他信息</h4>
                                <div>
                                    <div class="bgcolor">
                                        <label>注册资本</label>
                                        <el-input
                                        class="regCapital"
                                        v-model="basCompany.regCapital"
                                        ></el-input>
                                    </div>
                                    <div class="bgcolor">
                                        <label>法人代表</label>
                                        <el-input
                                        class="legalPerson"
                                        v-model="basCompany.legalPerson"
                                        ></el-input>
                                    </div>
                                    <div class="bgcolor">
                                        <label>纳税人登记号</label>
                                        <el-input
                                        class="vatRegno"
                                        v-model="basCompany.vatRegno"
                                        ></el-input>
                                    </div>
                                    <div class="bgcolor">
                                        <label>成立日期</label>
                                        <el-date-picker 
                                        class="regtime datepicker" 
                                        format="yyyy-MM-dd"
                                        v-model="basCompany.regtime"
                                        value-format="yyyy-MM-dd"
                                        type="date" 
                                        placeholder=""></el-date-picker>
                                    </div>
                                    <div class="bgcolor">
                                        <label class="longLabel">法人身份证号码</label>
                                        <el-input
                                         
                                        class="legalPersonIdnr"
                                        v-model="basCompany.legalPersonIdnr"
                                        ></el-input>
                                    </div>
                                    <div class="bgcolor">
                                        <label>主管部门代码</label>
                                        <el-input
                                        class="mgtDeptCode"
                                        v-model="basCompany.mgtDeptCode"
                                        ></el-input>
                                    </div>
                                    <div class="bgcolor">
                                        <label>主管部门名称</label>
                                        <el-input
                                        class="mgtDeptName"
                                        v-model="basCompany.mgtDeptName"
                                        ></el-input>
                                    </div>
                                    <div class="bgcolor">
                                        <label>纳税人类别</label>
                                        <el-input
                                        class="legalPersonType"
                                        v-model="basCompany.legalPersonType"
                                        ></el-input>
                                    </div>
                                    <div class="bgcolor">
                                        <label>营业地址</label>
                                        <el-input
                                        class="businessAddress"
                                        v-model="basCompany.businessAddress"
                                        ></el-input>
                                    </div>
                                    <div class="bgcolor">
                                        <label class="longLabel">营业或有效期限</label>
                                        <!-- businessStart  businessEnd  -->
                                        <div class="rangeDate">
                                            <el-date-picker
                                            v-model="dateRange"
                                            type="daterange"
                                            format="yyyy-MM-dd"
                                            value-format="yyyy-MM-dd" 
                                            range-separator="to"
                                            align="center"
                                            unlink-panels
                                            start-placeholder=""
                                            end-placeholder="">
                                            </el-date-picker>
                                        </div>
                                    </div>
                                    <div class="bgcolor">
                                        <label>公司简介</label>
                                        <el-input
                                        class="introduction"
                                        v-model="basCompany.introduction"
                                        ></el-input>
                                    </div>
                                    <div class="bgcolor">
                                        <label>通讯地址</label>
                                        <el-input
                                        class="contactAddress"
                                        v-model="basCompany.contactAddress"
                                        ></el-input>
                                    </div>
                                    <div class="bgcolor">
                                        <label>邮政编码</label>
                                        <el-input
                                        class="zipCode"
                                        v-model="basCompany.zipCode"
                                        ></el-input>
                                    </div>
                                    <div class="bgcolor">
                                        <label>联系人</label>
                                        <el-input
                                        class="contact"
                                        v-model="basCompany.contact"
                                        ></el-input>
                                    </div>
                                    <div class="bgcolor">
                                        <label>传真</label>
                                        <el-input
                                        class="fax"
                                        v-model="basCompany.fax"
                                        ></el-input>
                                    </div>
                                    <div class="bgcolor">
                                        <label>电话</label>
                                        <el-input
                                        class="phone"
                                        v-model="basCompany.phone"
                                        ></el-input>
                                    </div>
                                    <div class="bgcolor">
                                        <label>E-mail</label>
                                        <el-input
                                        class="email"
                                        v-model="basCompany.email"
                                        ></el-input>
                                    </div>
                                    <div class="bgcolor">
                                        <label>web网址</label>
                                        <el-input
                                        class="webUrl"
                                        v-model="basCompany.webUrl"
                                        ></el-input>
                                    </div>
                                    <div class="bgcolor longWidth">
                                    <label>备注</label>
                                    <el-input
                                    class="remark2" 
                                    v-model="basCompany.remark"
                                    type="textarea"
                                    :autosize="{ minRows: 4, maxRows: 10}"
                                    placeholder="">
                                    </el-input>
                                    </div>
                                </div>                                  
                            </el-col>
                         </div>
                     </el-col>
                </el-tab-pane>
<!--                  财务                            -->
                <el-tab-pane label="财务" name="finance" v-if="countFinance">
                    <el-col :span="24">
                          <div class="financeInfo">
                            <el-col :span="24"  class="getPadding">
                                <div class="bgcolor">
                                    <label>国税登记号</label>
                                    <el-input 
                                    class="legalPerson" 
                                    >
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>发税登记号</label>
                                    <el-input 
                                    class="legalPerson" 
                                    >
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>纳税人识别号</label>
                                    <el-input 
                                    class="legalPerson" 
                                    >
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>纳税人编码</label>
                                    <el-input 
                                    class="legalPerson" 
                                    >
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>纳税税种</label>
                                    <el-input 
                                    class="legalPerson" 
                                    >
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>委托税种</label>
                                    <el-input 
                                    class="legalPerson" 
                                    >
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>纳税组织</label>
                                    <el-checkbox></el-checkbox>
                                </div>
                                <div class="bgcolor">
                                    <label>启用状态</label>
                                    <el-select 
                                    placeholder=""
                                    class="status" >
                                        <el-option 
                                        v-for="item in selectData.Status001" 
                                        :key="item.itemValue" 
                                        :label="item.itemName" 
                                        :value="item.itemValue" 
                                        >
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                         </div>
                     </el-col>   
                </el-tab-pane>
                <!-- 业务 -->
                <el-tab-pane label="业务" name="business" v-if="countBusiness">
                    <el-col :span="24">
                          <div class="companyInfo">
                            <el-col :span="24"  class="getPadding">
                                <div class="bgcolor">
                                    <label>上级业务组织</label>
                                    <el-select
                                    placeholder=""
                                    >
                                        <el-option 
                                        v-for="item in selectData.ouParentid" 
                                        :key="item.id" 
                                        :label="item.ouName" 
                                        :value="item.id">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="bgcolor">
                                    <label>结算账务组织</label>
                                    <el-input 
                                    class="legalPerson" 
                                    >
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>启用状态</label>
                                    <el-select 
                                    placeholder=""
                                    class="status">
                                        <el-option 
                                        v-for="item in selectData.Status001" 
                                        :key="item.itemValue" 
                                        :label="item.itemName" 
                                        :value="item.itemValue" 
                                        >
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                         </div>
                     </el-col>   
                </el-tab-pane>
            </el-tabs>
        </el-col>
    </div>
 </el-row>
 <el-row>
    <el-col :span="24" class="getPadding">
        <h4 class="h4">审计信息</h4>
        <div>
            <div class="bgcolor"><label>创建人</label><el-input disabled></el-input></div>
            <div class="bgcolor"><label>创建时间</label><el-input disabled></el-input></div>
            <div class="bgcolor"><label>修改人</label><el-input disabled></el-input></div>
            <div class="bgcolor"><label>修改时间</label><el-input disabled></el-input></div>
        </div>                                  
    </el-col>
</el-row>                                                           
</div>
</template>

<script>
export default({
    data() {
        return{
            dateRange:[],//有效时间
            companys:1,
            show:true,
            ifShow:true,
            activeName: 'company',
            auditInfo:{},//审计信息
            addData:{//post需要的键值对
                "ouCode": "",
                "ouName": "",
                "ouFullname": "",
                "ouParentid": "",//整数
                "accCchemeId": "",//整数
                "accStartMonth": "",
                "baseCurrencyId": "",//整数
                "companyOuId": "",//整数
                "contactPerson": "",
                "phone": "",
                "address": "",
                "status": "",//整数
                "remark": "",
            },
            basOuTypes:['1'],//组织职能
            basCompany:{//其他信息
                "ouParentid": "",//整数
                "legalPerson": "",
                "status": "",//整数
                "isGroupCompany": true,
                "regCapital": "",//整数
                "vatRegno": "",
                "regtime": "",
                "legalPersonIdnr": "",
                "mgtDeptCode": "",
                "mgtDeptName": "",
                // "businessStart": "2018-03-13T01:03:22.616Z",
                // "businessEnd": "2018-03-13T01:03:22.616Z",
                "legalPersonType": "",
                "introduction": "",
                "contact": "",
                "businessAddress": "",
                "contactAddress": "",
                "zipCode": "",
                "phone": "",
                "fax": "",
                "email": "",
                "webUrl": "",
                "remark": ""
            },
            isCheckCompany:true,//公司复选框初始选种状态
            isCheckFinance:false,//财务复选框初始选种状态
            isCheckBusiness:false,//业务复选框初始选种状态 
            
            
            group:true,//集团公司复选框初始选种状态
            isUse:false,//是否启用复选框初始选种状态

            isSave:true,//是否可以保存
            selectData:{//select数据
                Status001:[],//启用状态
                ouParentid:[],//上级业务单元
                accCchemeId:[],//会计期间方案
                baseCurrencyId:[],//本位币种
                companys:[],//公司
                OUType:[],//组织类型
            },
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
    created () {
        let _this=this;
        _this.getSelectData()  
    },
    computed: {
        countCompany () {
            return this.isCheckCompany;
            },
        countFinance () {
            return this.isCheckFinance;
            },
        countBusiness () {
            return this.isCheckBusiness;
            },        
    },
    methods:{
        getSelectData(){
            let _this=this;
            _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status001'}).then(function(res){ 
            // 启用状态
            _this.selectData.Status001=res.result;
            })
            _this.$axios.gets('/api/services/app/OuManagement/GetOuParentList').then(function(res){ 
            // 上级业务单元(所属组织)
                _this.selectData.ouParentid=res.result;
            })
            _this.$axios.gets('/api/services/app/AccperiodSheme/GetAll').then(function(res){ 
            // 会计期间方案
                _this.selectData.accCchemeId=res.result.items;
            })
            _this.$axios.gets('/api/services/app/CurrencyManagement/GetAll',{SkipCount:0,MaxResultCount:10}).then(function(res){ 
            // 本位币种
                _this.selectData.baseCurrencyId=res.result.items;
            })
             _this.$axios.gets('/api/services/app/OuManagement/GetCompanyOuList').then(function(res){ 
            // 公司
                _this.selectData.companys=res.result;
            })
             _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'OUType'}).then(function(res){ 
            // 组织类型
                _this.selectData.OUType=res.result;
            })
        },
        showErrprTips(e){
            $('.tipsWrapper').each(function(){
                if($(e.target).parent('.el-input').hasClass($(this).attr('name'))){
                    $(this).addClass('display_block')
                }else{
                    $(this).removeClass('display_block')
                }
            })
        },
        showErrprTipsSelect(e){
            $('.tipsWrapper').each(function(){
                if($(e.target).parent('.el-input').parent('.el-select').hasClass($(this).attr('name'))){
                    $(this).addClass('display_block')
                }else{
                    $(this).removeClass('display_block')
                }
            })
        },
        showErrprTipsRangedate(e){
            $('.tipsWrapper').each(function(){
                if($(e.$el).hasClass($(this).attr('name'))){
                    $(this).addClass('display_block')
                }else{
                    $(this).removeClass('display_block')
                }
            })
        },
        showErrprTipsTextArea(e){
                $('.tipsWrapper').each(function(){
                if($(e.target).parent('.el-textarea').hasClass($(this).attr('name'))){
                    $(this).addClass('display_block')
                }else{
                    $(this).removeClass('display_block')
                }
                })
        },
        showTabs(){
            let _this=this;
            let isCheckCompany=false;
            let isCheckFinance=false;
            let isCheckBusiness=false;
            $.each(_this.basOuTypes,function(index,val){
                if(val=='1'){
                    isCheckCompany=true
                }else if(val=='3'){
                    isCheckFinance=true;
                    isCheckCompany=true
                }else if(val=='2'){
                    isCheckBusiness=true;
                }
            })
            _this.isCheckCompany=isCheckCompany;
            _this.isCheckFinance=isCheckFinance;
            _this.isCheckBusiness=isCheckBusiness;
            // console.log(_this.basOuTypes)
            // if(_this.basOuTypes==['1']){
            //     _this.isCheckCompany=true;
            //     _this.isCheckFinance=false;
            //     _this.isCheckBusiness=false;
            // }else if(_this.basOuTypes==['2']){
            //     _this.isCheckCompany=false;
            //     _this.isCheckFinance=true;
            //     _this.isCheckBusiness=false;
            // }else if(_this.basOuTypes==['3']){
            //     _this.isCheckCompany=false;
            //     _this.isCheckFinance=false;
            //     _this.isCheckBusiness=true;
            // }else if(_this.basOuTypes==['1','2']){
            //     _this.isCheckCompany=true;
            //     _this.isCheckFinance=true;
            //     _this.isCheckBusiness=false;
            // }else if(_this.basOuTypes==['1','3']){
            //     _this.isCheckCompany=true;
            //     _this.isCheckFinance=false;
            //     _this.isCheckBusiness=true;
            // }else if(_this.basOuTypes==['2','3']){
            //     _this.isCheckCompany=false;
            //     _this.isCheckFinance=true;
            //     _this.isCheckBusiness=true;
            // }
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
        //     _this.$validate()
        //   .then(function (success) {
        //     if (success) {
            _this.basCompany.businessStart=_this.dateRange[0];
            _this.basCompany.businessEnd=_this.dateRange[1];
            _this.addData.ouTypes=_this.basOuTypes;
            _this.addData.basCompany=_this.basCompany;
            console.log(_this.addData)
            _this.$axios.posts('/api/services/app/OuManagement/Create',_this.addData).then(function(res){
                _this.$store.state.url='/OuManage/OuManageModify/'+res.result.id
                _this.$router.push({path:_this.$store.state.url})//点击切换路由OuManage
                _this.open('保存成功','el-icon-circle-check','successERP');
            },function(res){
                _this.open('保存失败','el-icon-error','faildERP');
            })
            // }
        //   });
            
        },
        clearData(){
            let _this=this;
            _this.creatorUser=[];
            _this.auditInfo={
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
            _this.addData={
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
                entityProperty : 1,//实体属性
                status: '',//启用状态存在
                remark: '' ,//备注存在
                basOuTypes: [0],//组织职能
                isGroupCompany:false ,//
                ouCompanyParentid: '' ,//上级公司组织ID
                legalPerson:'',//法人代表
                companyStatus:'' ,//公司启用状态
                regtime:''//公司成立时间
            };
            _this.validation.reset();
        }
    }

})        
    
  </script>

  <style>
  .OuDetailForm{
      font-family: 'microsoft yahei';
  }

.OuDetailForm .bgcolor.longWidth{
    width: 100%;
    height:auto;
 }
.OuDetailForm .bgcolor.longWidth .el-textarea{
    width: 423px;
    font-size: 12px;
 } 
/*表单提示信息*/
.OuDetailForm  .errorTips{
    margin-bottom: 10px;
    margin-top: -10px;
}

  .OuDetailForm .el-row{
     padding:15px 0;
     border-bottom: 1px solid #e4e4e4;
     background-color: #fff;
  }
.OuDetailForm .el-row:last-child{
      border-bottom:none;
  }
.OuDetailForm>.el-row:first-child{
      padding:5px 0;
  }
 .OuDetailForm .getPadding,.tabZoo .el-tabs__nav-scroll{
     padding: 0 10px;
 }
 .OuDetailForm .tabZoo .el-tabs__active-bar{
     width: 28px!important;
 }

.OuDetailForm .nopadding{
    padding-top: 0;
    padding-bottom: 0;
}
  </style>
  
