<template>
<!-- 集团管理-组织单元 -->
 <div class="OuDetailForm">
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
                    <label><small>*</small>编码</label>
                    <el-input class="ouCode" 
                    @focus="showErrprTips"
                    placeholder=" "
                    :class="{redBorder : validation.hasError('addData.ouCode')}" 
                    v-model="addData.ouCode">
                    </el-input>
                </div>
                
               
                <div class="bgcolor">
                    <label><small>*</small>名称</label>
                    <el-input class="ouName"
                    placeholder=" "
                    @focus="showErrprTips"
                     :class="{redBorder : validation.hasError('addData.ouName')}"
                     v-model="addData.ouName" >
                     </el-input>
                </div>
                <div class="bgcolor">
                    <label><small>*</small>全称</label>
                    <el-input placeholder="无字段"></el-input>
                </div>
                <div class="bgcolor">
                    <label class="longLabel"><small>*</small>上级业务单元</label>
                    <el-select class="ouParentid"
                    @focus="showErrprTipsSelect"
                    placeholder=" "
                     :class="{redBorder : validation.hasError('addData.ouParentid')}" 
                     v-model="addData.ouParentid">
                        <el-option 
                        v-for="item in higherUnit" 
                        :key="item.value" 
                        :label="item.label" 
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label><small>*</small>会计方案</label>
                    <el-select class="ouParentid"
                    @focus="showErrprTipsSelect"
                    placeholder=" "
                    :class="{redBorder : validation.hasError('addData.ouParentid')}" 
                    v-model="addData.ouParentid">
                        <el-option 
                        v-for="item in higherUnit" 
                        :key="item.value" 
                        :label="item.label" 
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label><small>*</small>引用月份</label>
                    <el-date-picker 
                    class="regtime datepicker" 
                    @focus="showErrprTipsRangedate"
                    :class="{redBorder : validation.hasError('addData.regtime')}"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd" 
                    v-model="addData.regtime" 
                    type="date" 
                    placeholder=" "></el-date-picker>
                </div>
                <div class="bgcolor">
                    <label><small>*</small>本位币种</label>
                    <el-select placeholder=" "
                    class="baseCurrencyId" 
                    @focus="showErrprTipsSelect"
                    :class="{redBorder : validation.hasError('addData.baseCurrencyId')}" 
                    v-model="addData.baseCurrencyId">
                        <el-option 
                        v-for="item in money" 
                        :key="item.value" 
                        :label="item.label" 
                        :value="item.value" 
                        >
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label>所属公司</label>
                    <el-select placeholder=" "
                    class="companyOuId" 
                    @focus="showErrprTipsSelect"
                    :class="{redBorder : validation.hasError('addData.companyOuId')}" 
                    v-model="addData.companyOuId">
                        <el-option 
                        v-for="item in company" 
                        :key="item.value" 
                        :label="item.label" 
                        :value="item.value" 
                        >
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
                    placeholder=" ">
                    </el-input>
                </div>
                <div class="bgcolor">
                    <label>电话</label>
                    <el-input 
                    class="phone" 
                    @focus="showErrprTips"
                    :class="{redBorder : validation.hasError('addData.phone')}" 
                    v-model="addData.phone" 
                    placeholder=" "></el-input>
                </div>
                <div class="bgcolor">
                    <label>地址</label>
                    <el-input 
                    class="address" 
                    @focus="showErrprTips"
                    :class="{redBorder : validation.hasError('addData.address')}" 
                    v-model="addData.address" 
                    placeholder=" "></el-input>
                </div>
                 <div class="bgcolor">
                    <label>启用状态</label>
                    <el-select placeholder=" "
                    class="status" 
                    @focus="showErrprTipsSelect"
                    :class="{redBorder : validation.hasError('addData.status')}" 
                    v-model="selectData.Status002">
                        <el-option 
                        v-for="item in state" 
                        :key="item.value" 
                        :label="item.itemName" 
                        :value="item.itemValue" 
                        >
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor longWidth">
                    <label>备注</label>
                    <el-input
                    class="remark" 
                    @focus="showErrprTipsTextArea"
                    :class="{redBorder : validation.hasError('addData.remark')}"
                    v-model="addData.remark"
                    type="textarea"
                    :autosize="{ minRows: 4, maxRows: 10}"
                    placeholder="">
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
            <el-checkbox v-model="count.isCheckCompany" @focus="checkCompany">公司</el-checkbox>
            <el-checkbox v-model="count.isCheckFinance" @focus="checkFinance">财务</el-checkbox>
            <el-checkbox v-model="count.isCheckBusiness" @focus="checkBusiness">业务</el-checkbox>
        </el-col>              
    </el-col>           
 </el-row> 
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
                                    <el-checkbox v-model="group">集团公司</el-checkbox>
                                </el-col> 
                            </el-col>
                            <el-col :span="24"  class="getPadding">
                                <div class="bgcolor">
                                    <label>上级公司</label>
                                    <el-select 
                                    placeholder=" "
                                    class="ouCompanyParentid" 
                                    @focus="showErrprTipsSelect"
                                    :class="{redBorder : validation.hasError('addData.ouCompanyParentid')}" 
                                    v-model="addData.ouCompanyParentid">
                                        <el-option 
                                        v-for="item in preCompany" 
                                        :key="item.value" 
                                        :label="item.label" 
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="bgcolor">
                                    <label>法人代表</label>
                                    <el-input 
                                    class="legalPerson" 
                                    @focus="showErrprTips"
                                    :class="{redBorder 
                                    : validation.hasError('addData.legalPerson')}"  
                                    v-model="addData.legalPerson" 
                                    placeholder=" ">
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>启用状态</label>
                                    <el-select placeholder=" "
                                    class="status" 
                                    @focus="showErrprTipsSelect"
                                    :class="{redBorder : validation.hasError('addData.status')}" 
                                    v-model="addData.status">
                                        <el-option 
                                        v-for="item in state" 
                                        :key="item.value" 
                                        :label="item.label" 
                                        :value="item.value" 
                                        >
                                        </el-option>
                                    </el-select>
                                </div>

                                <div class="bgcolor">
                                    <label>启用状态</label>
                                    <el-select placeholder=" "
                                    class="status" 
                                    @focus="showErrprTipsSelect"
                                    :class="{redBorder : validation.hasError('addData.status')}" 
                                    v-model="addData.status">
                                        <el-option 
                                        v-for="item in state" 
                                        :key="item.value" 
                                        :label="item.label" 
                                        :value="item.value" 
                                        >
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                         </div>
                     </el-col>   
                </el-tab-pane>
<!--                  财务                            -->
                <el-tab-pane label="财务" name="finance" v-if="count.isCheckFinance">
                    <el-col :span="24">
                          <div class="financeInfo">
                            <el-col :span="24"  class="getPadding">
                                <div class="bgcolor">
                                    <label>国税登记号</label>
                                    <el-input 
                                    class="legalPerson" 
                                    @focus="showErrprTips"
                                    :class="{redBorder 
                                    : validation.hasError('addData.legalPerson')}"  
                                    v-model="addData.legalPerson" 
                                    placeholder=" ">
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>发税登记号</label>
                                    <el-input 
                                    class="legalPerson" 
                                    @focus="showErrprTips"
                                    :class="{redBorder 
                                    : validation.hasError('addData.legalPerson')}"  
                                    v-model="addData.legalPerson" 
                                    placeholder=" ">
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>纳税人识别号</label>
                                    <el-input 
                                    class="legalPerson" 
                                    @focus="showErrprTips"
                                    :class="{redBorder 
                                    : validation.hasError('addData.legalPerson')}"  
                                    v-model="addData.legalPerson" 
                                    placeholder=" ">
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>纳税人编码</label>
                                    <el-input 
                                    class="legalPerson" 
                                    @focus="showErrprTips"
                                    :class="{redBorder 
                                    : validation.hasError('addData.legalPerson')}"  
                                    v-model="addData.legalPerson" 
                                    placeholder=" ">
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>纳税税种</label>
                                    <el-input 
                                    class="legalPerson" 
                                    @focus="showErrprTips"
                                    :class="{redBorder 
                                    : validation.hasError('addData.legalPerson')}"  
                                    v-model="addData.legalPerson" 
                                    placeholder=" ">
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>委托税种</label>
                                    <el-input 
                                    class="legalPerson" 
                                    @focus="showErrprTips"
                                    :class="{redBorder 
                                    : validation.hasError('addData.legalPerson')}"  
                                    v-model="addData.legalPerson" 
                                    placeholder=" ">
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>纳税组织</label>
                                    <el-checkbox></el-checkbox>
                                </div>
                                <div class="bgcolor">
                                    <label>启用状态</label>
                                    <el-select placeholder=" "
                                    class="status" 
                                    @focus="showErrprTipsSelect"
                                    :class="{redBorder : validation.hasError('addData.status')}" 
                                    v-model="addData.status">
                                        <el-option 
                                        v-for="item in state" 
                                        :key="item.value" 
                                        :label="item.label" 
                                        :value="item.value" 
                                        >
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                         </div>
                     </el-col>   
                </el-tab-pane>
                <el-tab-pane label="业务" name="business" v-if="count.isCheckBusiness">
                    <el-col :span="24">
                          <div class="companyInfo">
                            <el-col :span="24"  class="getPadding">
                                <div class="bgcolor">
                                    <label>上级业务组织</label>
                                    <el-select 
                                    placeholder=" "
                                    class="ouCompanyParentid" 
                                    @focus="showErrprTipsSelect"
                                    :class="{redBorder : validation.hasError('addData.ouCompanyParentid')}" 
                                    v-model="addData.ouCompanyParentid">
                                        <el-option 
                                        v-for="item in preCompany" 
                                        :key="item.value" 
                                        :label="item.label" 
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="bgcolor">
                                    <label>结算账务组织</label>
                                    <el-input 
                                    class="legalPerson" 
                                    @focus="showErrprTips"
                                    :class="{redBorder 
                                    : validation.hasError('addData.legalPerson')}"  
                                    v-model="addData.legalPerson" 
                                    placeholder=" ">
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>启用状态</label>
                                    <el-select placeholder=" "
                                    class="status" 
                                    @focus="showErrprTipsSelect"
                                    :class="{redBorder : validation.hasError('addData.status')}" 
                                    v-model="addData.status">
                                        <el-option 
                                        v-for="item in state" 
                                        :key="item.value" 
                                        :label="item.label" 
                                        :value="item.value" 
                                        >
                                        </el-option>
                                    </el-select>
                                </div>

                                <div class="bgcolor">
                                    <label>启用状态</label>
                                    <el-select placeholder=" "
                                    class="status" 
                                    @focus="showErrprTipsSelect"
                                    :class="{redBorder : validation.hasError('addData.status')}" 
                                    v-model="addData.status">
                                        <el-option 
                                        v-for="item in state" 
                                        :key="item.value" 
                                        :label="item.label" 
                                        :value="item.value" 
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
        <h4 class="h4">其他信息</h4>
        <div>
            <div class="bgcolor"><label>注册资本</label><el-input></el-input></div>
            <div class="bgcolor"><label>法人代表</label><el-input></el-input></div>
            <div class="bgcolor"><label>纳税人登记号</label><el-input></el-input></div>
            <div class="bgcolor">
                <label>成立日期</label>
                <el-date-picker 
                class="regtime datepicker" 
                @focus="showErrprTipsRangedate"
                :class="{redBorder : validation.hasError('addData.regtime')}"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd" 
                v-model="addData.regtime" 
                type="date" 
                placeholder=""></el-date-picker>
            </div>
            <div class="bgcolor"><label class="longLabel">法人身份证号码</label><el-input></el-input></div>
            <div class="bgcolor"><label>主管部门代码</label><el-input></el-input></div>
            <div class="bgcolor"><label>主管部门名称</label><el-input></el-input></div>
            <div class="bgcolor">
                <label class="longLabel">营业或有效期限起始日期</label>
                <el-date-picker 
                class="regtime datepicker" 
                @focus="showErrprTipsRangedate"
                :class="{redBorder : validation.hasError('addData.regtime')}"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd" 
                v-model="addData.regtime" 
                type="date" 
                placeholder=""></el-date-picker>
            </div>
            <div class="bgcolor">
                <label class="longLabel">营业或有效期限终止日期</label>
                <el-date-picker 
                class="regtime datepicker" 
                @focus="showErrprTipsRangedate"
                :class="{redBorder : validation.hasError('addData.regtime')}"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd" 
                v-model="addData.regtime" 
                type="date" 
                placeholder=""></el-date-picker>
            </div>
            <div class="bgcolor"><label>纳税人类别</label><el-input></el-input></div>
            <div class="bgcolor"><label>公司简介</label><el-input></el-input></div>
            <div class="bgcolor"><label>联系信息</label><el-input></el-input></div>
            <div class="bgcolor"><label>营业地址</label><el-input></el-input></div>
            <div class="bgcolor"><label>通讯地址</label><el-input></el-input></div>
            <div class="bgcolor"><label>邮政编码</label><el-input></el-input></div>
            <div class="bgcolor"><label>电话</label><el-input></el-input></div>
            <div class="bgcolor"><label>传真</label><el-input></el-input></div>
            <div class="bgcolor"><label>联系人</label><el-input></el-input></div>
            <div class="bgcolor"><label>E-mail</label><el-input></el-input></div>
            <div class="bgcolor"><label>web网址</label><el-input></el-input></div>
            <div class="bgcolor longWidth">
              <label>备注</label>
              <el-input
              class="remark" 
              @focus="showErrprTipsTextArea"
              :class="{redBorder : validation.hasError('addData.remark')}"
              v-model="addData.remark"
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 10}"
              placeholder="">
              </el-input>
            </div>
        </div>                                  
    </el-col>
</el-row> 
 <el-row>
    <el-col :span="24" class="getPadding">
        <h4 class="h4">审计信息</h4>
        <div>
            <div class="bgcolor"><label>创建人</label><el-input disabled></el-input></div>
            <div class="bgcolor"><label>创建时间</label><el-input disabled></el-input></div>
            <div class="bgcolor"><label>修改人</label><el-input disabled></el-input></div>
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
                groupId:1,//集团ID
                ouCode: '',//组织代码
                ouName: '' ,//组织名称
                foreignName: 'good' ,//外文名称
                mnemonic: 'sdd' ,//助记码
                ouParentid: '' ,//上级组织ID
                accountPeriodId:1 ,//会计期间ID
                baseCurrencyId: '',//本位币种id
                companyOuId: '',//所属公司ID
                contactPerson: '' ,//联系人
                phone: '' ,//电话
                address: '' ,//地址
                areaId: 1 ,//行政区域ID
                entityProperty : 1 ,//实体属性
                status: '' ,//启用状态
                remark: '' ,//备注
                basOuTypes: [ 0,1,2,3,4,5,6],//组织职能
                isGroupCompany: false,//是否是法人公司
                ouCompanyParentid: '' ,//上级公司组织ID
                legalPerson: '',//法人代表
                companyStatus: 0 ,//公司启用状态
                regtime: ''//公司成立时间
            },
            ischeck:{isCheckCompany:true,//公司复选框初始选种状态
                    isCheckFinance:false,//财务复选框初始选种状态
                    isCheckBusiness:false}//业务复选框初始选种状态 
            ,
            
            group:true,//集团公司复选框初始选种状态
            isUse:false,//是否启用复选框初始选种状态
            higherUnit: [{//上级单元数据
                value: '0',
                label: '361度'
            }, {
                value: '1',
                label: '恒康'
            }, {
                value: '2',
                label: '红旗连锁'
            }],
            money: [{//本位币种
                value:'0',
                label: 'RMB'
            }, {
                value:'1',
                label: '美元'
            }, {
                value:'2',
                label: '英镑'
            },{
                value:'3',
                label: '日元'
            }, {
                value:'4',
                label: '韩元'
            }, {
                value:'5',
                label: '越南盾'
            },{
                value:'6',
                label: '泰铢'
            }, {
                value:'7',
                label: '港币'
            }, {
                value:'8',
                label: '银元'
            }],
            company: [{ //   所属公司数据
                value:'0',
                label: '0'
            }, {
                value:'1',
                label: '1'
            }, {
                value:'2',
                label: '2'
            }],
            preCompany: [{ //   上级公司
                value:0,
                label: '0'
            }, {
                value:1,
                label: '1'
            }, {
                value:2,
                label: '2'
            }],
            state: [{ //启用状态数据
                value:'0',
                label: '启用'
            }, {
                value:'1',
                label: '停用'
            }],
            isSave:true,//是否可以保存
            selectData:{//select数据
                OUType:[],//组织类型
                Status002:[],//启用状态
                UserType:[],//身份类型
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
    created () {
        let _this=this;
        _this.getSelectData()  
    },
    methods:{
        getSelectData(){
            let _this=this;
            _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'UserType'}).then(function(res){ 
                // 组织类型
                _this.selectData.UserType=res.result;
                })
            _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status002'}).then(function(res){ 
                // 启用状态
                _this.selectData.Status002=res.result;
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
                _this.$axios.posts('/api/services/app/OuManagement/Create',_this.addData).then(function(res){
                    _this.$store.state.url='/OuManage/OuManageModify/'+res.result.id
                    _this.$router.push({path:_this.$store.state.url})//点击切换路由OuManage
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
                    _this.$axios.posts('/api/services/app/OuManagement/Create',_this.addData).then(function(res){
                        _this.open('保存并新增成功','el-icon-circle-check','successERP');
                        _this.clearData();
                    },function(res){
                        _this.open('保存并新增失败','el-icon-error','faildERP');
                    })
                }
            });        
        },
        newAdd(){
            this.clearData();
            this.open('新增成功','el-icon-circle-check','successERP');
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
  
