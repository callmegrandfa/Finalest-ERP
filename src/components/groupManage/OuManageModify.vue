<template>
<!-- 集团管理-组织单元修改 -->
 <div class="OuModifyForm">
     <el-row class="fixed">
         <el-col :span="24">
           <button @click="isBack" class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
              <button @click="save" class="erp_bt bt_save" :disabled="!ifModify" :class="{erp_fb_bt : !ifModify}"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>
              <button @click="isCancel" class="erp_bt bt_cancel" :disabled="!ifModify" :class="{erp_fb_bt : !ifModify}"><div class="btImg"><img src="../../../static/image/common/bt_cancel.png"></div><span class="btDetail">取消</span></button>
              <button plain @click="saveAdd" class="erp_bt bt_saveAdd" :disabled="!ifModify" :class="{erp_fb_bt : !ifModify}"><div class="btImg"><img src="../../../static/image/common/bt_saveAdd.png"></div><span class="btDetail">保存并新增</span></button>
              <button @click="add" class="erp_bt bt_add" :disabled="ifModify" :class="{erp_fb_bt : ifModify}"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
              <button @click="isDeleteThis" class="erp_bt bt_del" :disabled="ifModify" :class="{erp_fb_bt : ifModify}"><div class="btImg" ><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
            <span @click="ifShow = !ifShow" class="upBt">收起<i class="el-icon-arrow-down" @click="ifShow = !ifShow" :class="{rotate : !ifShow}"></i></span>
        </el-col>
     </el-row>
 <el-collapse-transition>
     <div v-show="ifShow">
        <el-row>
                <!--公司信息  -->
            <el-col :span="24" class="getPadding">
                <div class="tipsWrapper">
                    <div class="errorTips">
                        <p class="msgDetail">错误提示：
                            <span 
                            :class="{block : !validation.hasError('addData.ouCode')}">
                            编码{{ validation.firstError('addData.ouCode') }},
                            </span>

                            <span 
                            :class="{block : !validation.hasError('addData.ouName')}">
                            名称{{ validation.firstError('addData.ouName') }},
                            </span>
                           <span 
                            :class="{block : !validation.hasError('addData.ouFullname')}">
                            全称{{ validation.firstError('addData.ouFullname') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('addData.ouParentid')}">
                            上级业务单元{{ validation.firstError('addData.ouParentid') }}
                            </span>
                            <span 
                            :class="{block : !validation.hasError('addData.accCchemeId')}">
                            会计方案{{ validation.firstError('addData.accCchemeId') }}
                            </span>
                            <span 
                            :class="{block : !validation.hasError('addData.accStartMonth')}">
                            启用年月{{ validation.firstError('addData.accStartMonth') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('addData.baseCurrencyId')}">
                            本位币种{{ validation.firstError('addData.baseCurrencyId') }},
                            </span> 
                             <span 
                            :class="{block : !validation.hasError('addData.companyOuId')}">
                            所属公司{{ validation.firstError('addData.companyOuId') }},
                            </span> 
                            <span 
                            :class="{block : !validation.hasError('addData.contactPerson')}">
                            联系人{{ validation.firstError('addData.contactPerson') }},
                            </span> 
                            <span 
                            :class="{block : !validation.hasError('addData.phone')}">
                            电话{{ validation.firstError('addData.phone') }},
                            </span>                
                            <span 
                            :class="{block : !validation.hasError('addData.address')}">
                            地址{{ validation.firstError('addData.address') }},
                            </span> 
                            <span 
                            :class="{block : !validation.hasError('addData.status')}">
                            启用状态{{ validation.firstError('addData.status') }},
                            </span> 
                            <span 
                            :class="{block : !validation.hasError('addData.remark')}">
                            备注{{ validation.firstError('addData.remark') }},
                            </span> 
                            <span 
                            :class="{block : !validation.hasError('basCompany.ouParentid')}">
                            公司：上级公司{{ validation.firstError('basCompany.ouParentid') }},
                            </span> 
                            <span 
                            :class="{block : !validation.hasError('basCompany.status')}">
                            公司：启用状态{{ validation.firstError('basCompany.status') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('basCompany.regCapital')}">
                            公司：注册资本{{ validation.firstError('basCompany.regCapital') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('basCompany.legalPerson')}">
                            公司：法人代表{{ validation.firstError('basCompany.legalPerson') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('basCompany.vatRegno')}">
                            公司：纳税人登记号{{ validation.firstError('basCompany.vatRegno') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('basCompany.regtime')}">
                            公司：成立日期{{ validation.firstError('basCompany.regtime') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('basCompany.legalPersonIdnr')}">
                            公司：法人身份证号码{{ validation.firstError('basCompany.legalPersonIdnr') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('basCompany.mgtDeptCode')}">
                            公司：主管部门代码{{ validation.firstError('basCompany.mgtDeptCode') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('basCompany.mgtDeptName')}">
                            公司：主管部门名称{{ validation.firstError('basCompany.mgtDeptName') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('basCompany.legalPersonType')}">
                            公司：纳税人类别{{ validation.firstError('basCompany.legalPersonType') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('basCompany.businessAddress')}">
                            公司：营业地址{{ validation.firstError('basCompany.businessAddress') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('dateRange')}">
                            公司：营业或有效期限{{ validation.firstError('dateRange') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('basCompany.introduction')}">
                            公司：公司简介{{ validation.firstError('basCompany.introduction') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('basCompany.contactAddress')}">
                            公司：通讯地址{{ validation.firstError('basCompany.contactAddress') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('basCompany.zipCode')}">
                            公司：邮政编码{{ validation.firstError('basCompany.zipCode') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('basCompany.contact')}">
                            公司：联系人{{ validation.firstError('basCompany.contact') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('basCompany.fax')}">
                            公司：传真{{ validation.firstError('basCompany.fax') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('basCompany.phone')}">
                            公司：电话{{ validation.firstError('basCompany.phone') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('basCompany.email')}">
                            公司：email{{ validation.firstError('basCompany.email') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('basCompany.webUrl')}">
                            公司：web网址{{ validation.firstError('basCompany.webUrl') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('basCompany.remark')}">
                            公司：备注{{ validation.firstError('basCompany.remark') }},
                            </span>
            <!-- - - - - - - - - - - - - - - - -业务 - - - - - - - - - - - - -->
                            <span 
                            :class="{block : !validation.hasError('basBusiness.ouParentid')}">
                            业务：上级业务组织{{ validation.firstError('basBusiness.ouParentid') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('basBusiness.stmOuId')}">
                            业务：结算账务组织{{ validation.firstError('basBusiness.stmOuId') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('basBusiness.status')}">
                            业务：启用状态{{ validation.firstError('basBusiness.status') }},
                            </span>
            <!-- - - - - - - - - - - - - - - - -业务 - - - - - - - - - - - - -->
                            <span 
                            :class="{block : !validation.hasError('basFinance.stateTaxNo')}">
                            财务：国税登记号{{ validation.firstError('basFinance.stateTaxNo') }},
                            </span> 
                            <span 
                            :class="{block : !validation.hasError('basFinance.localTaxNo')}">
                            财务：地税登记号{{ validation.firstError('basFinance.localTaxNo') }},
                            </span> 
                            <span 
                            :class="{block : !validation.hasError('basFinance.taxpayerRegNo')}">
                            财务：纳税人识别号{{ validation.firstError('basFinance.taxpayerRegNo') }},
                            </span> 
                            <span 
                            :class="{block : !validation.hasError('basFinance.taxpayerCode')}">
                            财务：纳税人编码{{ validation.firstError('basFinance.taxpayerCode') }},
                            </span> 
                            <span 
                            :class="{block : !validation.hasError('basFinance.taxType')}">
                            财务：纳税税种{{ validation.firstError('basFinance.taxType') }},
                            </span> 
                            <span 
                            :class="{block : !validation.hasError('basFinance.delegateTaxType')}">
                            财务：委托税种{{ validation.firstError('basFinance.delegateTaxType') }},
                            </span>  
                            <span 
                            :class="{block : !validation.hasError('basFinance.status')}">
                            财务：启用状态{{ validation.firstError('basFinance.status') }},
                            </span>   
                        </p>
                    </div>
                </div>
               
                <div class="bgcolor" >
                    <label><small>*</small>编码</label>
                    <el-input class="ouCode" 
                    disabled
                    v-model="addData.ouCode">
                    </el-input>
                </div>
                <div class="bgcolor" @keyup="updateOuName">
                    <label><small>*</small>名称</label>
                    <el-input class="ouName"
                    
                    @focus="isUpdateOuName"
                    :class="{redBorder : validation.hasError('addData.ouName')}"
                     v-model="addData.ouName" >
                     </el-input>
                </div>
                <div class="bgcolor">
                    <label><small>*</small>全称</label>
                    <el-input class="ouFullname"  
                     
                    
                    @focus="showErrprTips"
                    :class="{redBorder : validation.hasError('addData.ouFullname')}"
                    v-model="addData.ouFullname" 
                    placeholder=""></el-input>
                </div>
                <div class="bgcolor">
                    <label>上级业务单元</label>
                    <el-select clearable class="ouParentid"
                     
                    
                    @focus="showErrprTipsSelect"
                    :class="{redBorder : validation.hasError('addData.ouParentid')}"
                    placeholder=""
                    v-model="addData.ouParentid">
                        <el-input
                        placeholder="搜索..."
                        class="selectSearch"
                        v-model="search">
                        </el-input>
                        <el-tree
                         :render-content="renderContent_ouParentid"
                        :data="selectTree"
                        :highlight-current="true"
                        :props="selectProps"
                        node-key="id"
                        default-expand-all
                        ref="tree"
                        :filter-node-method="filterNode"
                        :expand-on-click-node="false"
                        @node-click="nodeClick_ou"
                        >
                        </el-tree>
                        <!-- <el-option v-show="false" :key="item_ou.id" :label="item_ou.ouName" :value="item_ou.id">
                        </el-option> -->
                        <el-option v-show="false" v-for="item in selectData.ou" :key="item.id" :label="item.ouName" :value="item.id" :date="item.id">
                            </el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label><small>*</small>会计方案</label>
                    <el-select clearable filterable  class="accCchemeId"
                     
                    @change="getStartMonth"
                    @focus="showErrprTipsSelect"
                    :class="{redBorder : validation.hasError('addData.accCchemeId')}"
                    placeholder=""
                    v-model="addData.accCchemeId">
                        <el-option 
                        v-for="item in selectData.accCchemeId" 
                        :key="item.itemValue" 
                        :label="item.itemName" 
                        :value="item.itemValue">
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label><small>*</small>启用年月</label>
                    <el-date-picker 
                    disabled 
                    
                    @focus="showErrprTipsRangedate"
                    :class="{redBorder : validation.hasError('addData.accStartMonth')}"
                    class="accStartMonth datepicker" 
                    format="yyyy-MM"
                    value-format="yyyy-MM" 
                    v-model="addData.accStartMonth" 
                    type="month" 
                    ></el-date-picker>
                </div>
                <div class="bgcolor">
                    <label><small>*</small>本位币种</label>
                    <el-select clearable filterable  
                     
                    
                    placeholder=""
                    @focus="showErrprTipsSelect"
                    :class="{redBorder : validation.hasError('addData.baseCurrencyId')}"
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
                    <el-select class="companyOuId"
                        clearable filterable
                        :disabled="Company"
                        
                        @focus="showErrprTipsSelect"
                        :class="{redBorder : validation.hasError('addData.ouParentid')}"
                        placeholder=""
                        v-model="addData.companyOuId">
                            <el-input
                            placeholder="搜索..."
                            class="selectSearch"
                            v-model="search_companyOuId">
                            </el-input>
                            <el-tree
                             :render-content="renderContent_companyOuId"
                            :data="selectTreeCompany"
                            :highlight-current="true"
                            :props="selectPropsCompany"
                            node-key="id"
                            default-expand-all
                            ref="trees"
                            :filter-node-method="filterNode1"
                            :expand-on-click-node="false"
                            @node-click="nodeClick"
                            >
                        </el-tree>
                        <!-- <el-option v-show="false" :key="item_ou.id" :label="item_ou.ouName" :value="item_ou.id">
                        </el-option> -->
                        <el-option v-show="false" v-for="item in selectData.ou" :key="item.id" :label="item.ouName" :value="item.id" :date="item.id">
                        </el-option>
                    </el-select>

                </div>
                <div class="bgcolor">
                    <label>联系人</label>
                    <el-input 
                     
                    
                    @focus="showErrprTips"
                    :class="{redBorder : validation.hasError('addData.contactPerson')}"
                    class="contactPerson" 
                    v-model="addData.contactPerson" 
                    >
                    </el-input>
                </div>
                <div class="bgcolor">
                    <label>电话</label>
                    <el-input 
                     
                    
                    @focus="showErrprTips"
                    :class="{redBorder : validation.hasError('addData.phone')}"
                    class="phone" 
                    v-model="addData.phone" 
                    ></el-input>
                </div>
                <div class="bgcolor">
                    <label>地址</label>
                    <el-input 
                     
                    
                    @focus="showErrprTips"
                    :class="{redBorder : validation.hasError('addData.address')}"
                    class="address" 
                    v-model="addData.address" 
                    ></el-input>
                </div>
                 <div class="bgcolor">
                    <label>启用状态</label>
                    <el-select clearable filterable  
                     
                    
                    @focus="showErrprTipsSelect"
                    :class="{redBorder : validation.hasError('addData.status')}"
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
                <el-col :span="24">
                    <div class="bgcolor longWidth">
                        <label>备注</label>
                        <el-input
                         
                        
                        @focus="showErrprTipsTextArea"
                        :class="{redBorder : validation.hasError('addData.remark')}"
                        class="remark1" 
                        v-model="addData.remark"
                        type="textarea"
                        :autosize="{ minRows: 4, maxRows: 10}"
                        >
                        </el-input>
                    </div>
                </el-col>
            </el-col> 
        </el-row>
     </div>    
 </el-collapse-transition>  
<!--组织类型  -->
<el-row>
    <el-col :span="24" class="getPadding"> <h4 class="h4">组织类型</h4></el-col>
    <el-col :span="24" class="getPadding"> 
        <el-col :span="6">  
            <el-checkbox-group 
             
            
            v-model="addData.ouTypes"
            :min="1">
            <el-checkbox v-for="item in selectData.OUType" :label="item.itemValue" :key="item.itemValue" @change="change_ouType">{{item.itemName}}</el-checkbox>
            </el-checkbox-group>
        </el-col>              
    </el-col>           
 </el-row> 
    <!-- 公司业务财务bootTab标签页 -->
<el-row class="nopadding">  
    <div class="tabZoo">
        <el-col :span="24">
            <el-tabs v-model="activeName">
                <el-tab-pane v-for="item in selectData.OUType" :label="item.itemName" :key="item.itemValue" :name="item.itemCode" v-if="item.itemValue==1 && Company">
                <el-col :span="24" v-if="item.itemValue==1 && Company">
                    <div class="companyInfo">
                    <el-col :span="24">
                        <el-col :span="5"  class="getPadding">
                            <el-checkbox  v-model="basCompany.isGroupCompany" @change="isGroupCompany">集团公司</el-checkbox>
                        </el-col> 
                    </el-col>
                    <el-col :span="24"  class="getPadding" style="border-bottom:1px solid #e4e4e4; ">
                        <div class="bgcolor">
                            <label>上级公司</label>
                            <el-select clearable filterable  
                             :disabled="basCompany.isGroupCompany"
                            
                            @focus="showErrprTipsSelect"
                            :class="{redBorder : validation.hasError('basCompany.ouParentid')}"
                            placeholder=""
                            class="ouParentid" 
                            v-model="basCompany.ouParentid">
                                <el-option 
                                v-if="!basCompany.isGroupCompany"
                                v-for="item in selectData.companys" 
                                :key="item.id" 
                                :label="item.ouName" 
                                :value="item.id" 
                                >
                                </el-option>

                                <!-- <el-option 
                                v-if="basCompany.isGroupCompany"
                                :label="groupCompany.label" 
                                :value="groupCompany.value" 
                                >
                                </el-option> -->
                            </el-select>
                        </div>
                        <div class="bgcolor">
                            <label>启用状态</label>
                            <el-select clearable filterable  
                             
                            
                            
                            @focus="showErrprTipsSelect"
                            :class="{redBorder : validation.hasError('basCompany.status')}"
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
                                 
                                
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.regCapital')}"
                                class="regCapital"
                                v-model="basCompany.regCapital"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>法人代表</label>
                                <el-input
                                 
                                
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.legalPerson')}"
                                class="legalPerson"
                                v-model="basCompany.legalPerson"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>纳税人登记号</label>
                                <el-input 
                                 
                                
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.vatRegno')}"
                                class="vatRegno"
                                v-model="basCompany.vatRegno"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>成立日期</label>
                                <el-date-picker 
                                 
                                
                                
                                @focus="showErrprTipsRangedate"
                                :class="{redBorder : validation.hasError('basCompany.regtime')}"
                                class="regtime datepicker" 
                                format="yyyy-MM-dd"
                                v-model="basCompany.regtime"
                                value-format="yyyy-MM-dd"
                                type="date" 
                                placeholder=""></el-date-picker>
                            </div>
                            <div class="bgcolor">
                                <label>法人身份证号码</label>
                                <el-input
                                 
                                
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.legalPersonIdnr')}"   
                                class="legalPersonIdnr"
                                v-model="basCompany.legalPersonIdnr"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>主管部门代码</label>
                                <el-input
                                 
                                
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.mgtDeptCode')}"
                                class="mgtDeptCode"
                                v-model="basCompany.mgtDeptCode"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>主管部门名称</label>
                                <el-input
                                 
                                
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.mgtDeptName')}"
                                class="mgtDeptName"
                                v-model="basCompany.mgtDeptName"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>纳税人类别</label>
                                <el-input
                                 
                                
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.legalPersonType')}"
                                class="legalPersonType"
                                v-model="basCompany.legalPersonType"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>营业地址</label>
                                <el-input
                                 
                                
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.businessAddress')}"
                                class="businessAddress"
                                v-model="basCompany.businessAddress"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>营业或有效期限</label>
                                <div class="rangeDate">
                                    <el-date-picker
                                     
                                    
                                    
                                    @focus="showErrprTipsRangedate"
                                    :class="{redBorder : validation.hasError('dateRange')}"
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
                            <div class="bgcolor longWidth">
                                <label>公司简介</label>
                                <el-input
                                 
                                
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.introduction')}"
                                class="introduction"
                                v-model="basCompany.introduction"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>通讯地址</label>
                                <el-input
                                 
                                
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.contactAddress')}"
                                class="contactAddress"
                                v-model="basCompany.contactAddress"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>邮政编码</label>
                                <el-input
                                 
                                
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.zipCode')}"
                                class="zipCode"
                                v-model="basCompany.zipCode"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>联系人</label>
                                <el-input
                                 
                                
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.contact')}"
                                class="contact"
                                v-model="basCompany.contact"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>传真</label>
                                <el-input
                                 
                                
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.fax')}"
                                class="fax"
                                v-model="basCompany.fax"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>电话</label>
                                <el-input
                                 
                                
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.phone')}"
                                class="phone"
                                v-model="basCompany.phone"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>email</label>
                                <el-input
                                 
                                
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.email')}"
                                class="email"
                                v-model="basCompany.email"
                                ></el-input>
                            </div>
                            <div class="bgcolor longWidth">
                                <label>web网址</label>
                                <el-input
                                
                                 
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.webUrl')}"
                                class="webUrl"
                                v-model="basCompany.webUrl"
                                ></el-input>
                            </div>
                            <el-col :span="24">
                                <div class="bgcolor longWidth">
                                    <label>备注</label>
                                    <el-input
                                     
                                    
                                    
                                    @focus="showErrprTipsTextArea"
                                    :class="{redBorder : validation.hasError('basCompany.remark')}"
                                    class="remark2" 
                                    v-model="basCompany.remark"
                                    type="textarea"
                                    :autosize="{ minRows: 4, maxRows: 10}"
                                    placeholder="">
                                    </el-input>
                                </div>
                            </el-col>
                        </div>                                  
                    </el-col>
                    </div>
                </el-col>
                </el-tab-pane>
                <el-tab-pane v-for="item in selectData.OUType" :key="item.itemValue" :label="item.itemName" :name="item.itemCode" v-if="item.itemValue==2 && Business">
                    <el-col :span="24">
                          <div class="financeInfo">
                            <el-col :span="24"  class="getPadding">
                                <div class="bgcolor">
                                    <label>上级业务组织</label>
                                    <el-select clearable filterable 
                                    v-model="basBusiness.ouParentid"
                                    :class="{redBorder : validation.hasError('basBusiness.ouParentid')}"
                                    @focus="showErrprTips"
                                    
                                    placeholder=""
                                    >
                                        <!-- <el-option 
                                        v-for="item in selectData.ouParentid" 
                                        :key="item.id" 
                                        :label="item.ouName" 
                                        :value="item.id">
                                        </el-option> -->
                                    </el-select>
                                </div>
                                <div class="bgcolor">
                                    <label>结算账务组织</label>
                                    <el-select clearable filterable 
                                    v-model="basBusiness.stmOuId"
                                    :class="{redBorder : validation.hasError('basBusiness.stmOuId')}"
                                    @focus="showErrprTips"
                                    
                                    placeholder=""
                                    >
                                        <!-- <el-option 
                                        v-for="item in selectData.ouParentid" 
                                        :key="item.id" 
                                        :label="item.ouName" 
                                        :value="item.id">
                                        </el-option> -->
                                    </el-select>
                                </div>
                                <div class="bgcolor">
                                    <label>启用状态</label>
                                    <el-select clearable filterable  
                                    
                                    @focus="showErrprTips"
                                    :class="{redBorder : validation.hasError('basBusiness.status')}"
                                    v-model="basBusiness.status"
                                    placeholder="">
                                        <el-option 
                                        v-for="item in selectData.Status001" 
                                        :key="item.itemValue" 
                                        :label="item.itemName" 
                                        :value="item.itemValue" 
                                        ></el-option>
                                    </el-select>
                                </div>
                            </el-col>
                         </div>
                     </el-col>   
                </el-tab-pane>
                <el-tab-pane v-for="item in selectData.OUType" :key="item.itemValue" :label="item.itemName" :name="item.itemCode" v-if="item.itemValue==3 && Finance">
                    <el-col :span="24">
                          <div class="companyInfo">
                            <el-col :span="24"  class="getPadding">
                                <div class="bgcolor">
                                    <label>国税登记号</label>
                                    <el-input 
                                    :class="{redBorder : validation.hasError('basFinance.stateTaxNo')}"
                                    @focus="showErrprTips"
                                    v-model="basFinance.stateTaxNo"
                                    
                                    class="legalPerson" 
                                    >
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>地税登记号</label>
                                    <el-input 
                                    :class="{redBorder : validation.hasError('basFinance.localTaxNo')}"
                                    @focus="showErrprTips"
                                    v-model="basFinance.localTaxNo"
                                    
                                    class="legalPerson" 
                                    >
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>纳税人识别号</label>
                                    <el-input 
                                    :class="{redBorder : validation.hasError('basFinance.taxpayerRegNo')}"
                                    @focus="showErrprTips"
                                    v-model="basFinance.taxpayerRegNo"
                                    
                                    class="legalPerson" 
                                    >
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>纳税人编码</label>
                                    <el-input 
                                    :class="{redBorder : validation.hasError('basFinance.taxpayerCode')}"
                                    @focus="showErrprTips"
                                    v-model="basFinance.taxpayerCode"
                                    
                                    class="legalPerson" 
                                    >
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>纳税税种</label>
                                    <el-input 
                                    :class="{redBorder : validation.hasError('basFinance.taxType')}"
                                    @focus="showErrprTips"
                                    v-model="basFinance.taxType"
                                    
                                    class="legalPerson" 
                                    >
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>委托税种</label>
                                    <el-input 
                                    :class="{redBorder : validation.hasError('basFinance.delegateTaxType')}"
                                    @focus="showErrprTips"
                                    v-model="basFinance.delegateTaxType"
                                    
                                    class="legalPerson" 
                                    >
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>纳税组织</label>
                                    <el-checkbox 
                                    @focus="showErrprTips"
                                    v-model="basFinance.isTaxOu"
                                    
                                    ></el-checkbox>
                                </div>
                                <div class="bgcolor">
                                    <label>启用状态</label>
                                    <el-select clearable filterable  
                                    
                                    :class="{redBorder : validation.hasError('basFinance.status')}"
                                    @focus="showErrprTips"
                                    v-model="basFinance.status"
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
            </el-tabs>
        </el-col>
    </div>
 </el-row>

 <el-row>
    <el-col :span="24" class="getPadding">
        <h4 class="h4">审计信息</h4>
        <div>
            <div class="bgcolor"><label>创建人</label><el-input v-model="auditInfo.createdBy" disabled></el-input></div>
            <div class="bgcolor">
                <label>创建时间</label>
                <el-date-picker
                v-model="auditInfo.createdTime"
                type="date"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
                disabled
                placeholder="">
                </el-date-picker>
            </div>
            <div class="bgcolor"><label>修改人</label><el-input  v-model="auditInfo.modifiedBy" disabled></el-input></div>
            <div class="bgcolor">
                <label>修改时间</label>
                <el-date-picker
                v-model="auditInfo.modifiedTime"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="date"
                disabled
                placeholder="">
                </el-date-picker>
            </div>
        </div>                                  
    </el-col>
</el-row>       
<!-- dialog数据变动提示 -->
        <el-dialog :visible.sync="dialogUserConfirm" class="dialog_confirm_message" width="25%">
            <template slot="title">
                <span class="dialog_font">提示</span>
            </template>
            <el-col :span="24" style="position: relative;">
                <el-col :span="24">
                    <p class="dialog_body_icon"><i class="el-icon-question"></i></p>
                    <p class="dialog_font dialog_body_message">此操作将忽略您的更改，是否继续？</p>
                </el-col>
            </el-col>
            
            <span slot="footer">
                <button class="dialog_footer_bt dialog_font" @click="sureDoing">确 认</button>
                <button class="dialog_footer_bt dialog_font" @click="dialogUserConfirm = false">取 消</button>
            </span>
        </el-dialog>
        <!-- dialog -->
<!-- dialog错误信息提示 -->
        <el-dialog :visible.sync="errorMessage" class="dialog_confirm_message" width="25%">
            <template slot="title">
                <span class="dialog_font">提示</span>
            </template>
            <el-col :span="24" class="detail_message_btnWapper">
                <span @click="detail_message_ifShow = !detail_message_ifShow" class="upBt">详情<i class="el-icon-arrow-down" @click="detail_message_ifShow = !detail_message_ifShow" :class="{rotate : !detail_message_ifShow}"></i></span>
            </el-col>
            <el-col :span="24" style="position: relative;">
                <el-col :span="24">
                    <p class="dialog_body_icon"><i class="el-icon-warning"></i></p>
                    <p class="dialog_font dialog_body_message">信息提报有误!</p>
                </el-col>
                <el-collapse-transition>
                    <el-col :span="24" v-show="detail_message_ifShow" class="dialog_body_detail_message">
                        <vue-scroll :ops="$store.state.option">
                            <span class="dialog_font">{{response.message}}</span>
                            <h4 class="dialog_font dialog_font_bold">其他信息:</h4>
                            <span class="dialog_font">{{response.details}}<br><span :key="index" v-for="(value,index) in response.validationErrors"><span :key="ind" v-for="(val,ind) in value.members">{{val}}</span><br></span></span>
                        </vue-scroll> 
                    </el-col>
                </el-collapse-transition>   
            </el-col>
            <span slot="footer">
                <button class="dialog_footer_bt dialog_font dialog_footer_bt_long" @click="errorMessage = false">确 认</button>
            </span>
        </el-dialog>
        <!-- dialog -->                                         
</div>
</template>

<script>
export default({
    data() {
        return{
            saveSuccess:false,
            firstModify:false,
            secondModify:false,
            thirfModify:false,
            forthModify:false,
            fiveModify:false,
            ifModify:false,
            // 错误信息提示开始
            detail_message_ifShow:false,
            errorMessage:false,
            // 错误信息提示结束
            dialogUserConfirm:false,//信息更改提示控制
            choseDoing:'',//存储点击按钮判断信息
            search:'',
            search_companyOuId:'',
             selectTree:[
            ],
            selectTreeCompany:[],
            item_ou:{
                id:'',
                ouName:''
            },
            selectProps: {
                children: 'children',
                label: 'ouName',
                id:'id'
            },
            //选择所属公司
            selectPropsCompany:{
                children: 'children',
                label: 'ouName',
                id:'id'
            },
            groupCompany:{
                value:0,
                label:""
            },
            test:'', 
            dateRange:[],//有效时间
            companys:1,
            show:true,
            ifShow:true,
            activeName: 'Company',
            auditInfo:{},//审计信息
            addData:{
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
                "status": 1,//整数
                "remark": "",
                "ouTypes":[],//组织职能
            },
            companyOuId:0,//纪录组织本身id
            ouTypes:[],//储存ouTypes
            basCompany:{//其他信息
                "ouParentid": "",//整数
                "legalPerson": "",
                "status": 1,//整数
                "isGroupCompany": false,
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
             basBusiness: {
                "ouParentid": '',
                "stmOuId": '',
                "status": 1
            },
            basFinance: {
                "stateTaxNo": "",
                "localTaxNo": "",
                "taxpayerRegNo": "",
                "taxpayerCode": "",
                "taxType": "",
                "delegateTaxType": "",
                "isTaxOu": false,
                "status": 1
            },
            Company:false,//公司 
            Business:false,//业务   
            Finance:false,//财务
            
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
                ou:[],
            },
            response:{
                details:'',
                message:'',
                validationErrors:[],
            },
//----------名称全称联动----------
            isUpdateFlag:false,                 
        }
    },
    validators: {
    //  'addData.ouCode': function (value) {//编码
    //      return this.Validator.value(value).required().maxLength(50)
    //   },
      'addData.ouName': function (value) {//名称
         return this.Validator.value(value).required().maxLength(50);
      },
      'addData.ouFullname': function (value) {//全称
         return this.Validator.value(value).required().maxLength(50);
      },
      'addData.ouParentid': function (value) {//上级业务单元
         return this.Validator.value(value).integer();
      },
      'addData.accCchemeId': function (value) {//会计方案
         return this.Validator.value(value).required().integer();
      },
      'addData.accStartMonth': function (value) {//启用年月
         return this.Validator.value(value).required();
      },
      'addData.baseCurrencyId': function (value) {//本位币种id
         return this.Validator.value(value).required().integer();
      },
      'addData.companyOuId': function (value) {//所属公司
          return this.Validator.value(value).integer();
      },
      'addData.contactPerson': function (value) {//联系人
         return this.Validator.value(value).maxLength(50);
      },
      'addData.phone': function (value) {//电话
          return this.Validator.value(value).maxLength(50);
      },
      'addData.address': function (value) {//地址
          return this.Validator.value(value).maxLength(200);
      },
      'addData.status': function (value) {//用户状态
         return this.Validator.value(value).integer();
      },
      'addData.remark': function (value) {//备注
         return this.Validator.value(value).maxLength(200);
      },

    'basCompany.ouParentid': function (value) {//上级公司
       
        if(typeof(value)!='undefined'){
            if(this.Company){
                if(!this.basCompany.isGroupCompany){
                     return this.Validator.value(value).required().integer();
                }else{
                    return this.Validator.value(value)
                }
               
            }else{
                return this.Validator.value(value)
            }
        }
      },
      'basCompany.status': function (value) {//启用状态
        if(typeof(value)!='undefined'){
            if(this.Company){
                return this.Validator.value(value).integer();
            }else{
                return this.Validator.value(value)
            }
        }
      },
      'basCompany.regCapital': function (value) {//注册资本
        if(typeof(value)!='undefined'){
            if(this.Company){
                return this.Validator.value(value).integer();
            }else{
                return this.Validator.value(value)
            }
        }
      },
      'basCompany.legalPerson': function (value) {//法人代表
        if(typeof(value)!='undefined'){
            if(this.Company){
                return this.Validator.value(value).maxLength(50);
            }else{
                return this.Validator.value(value)
            }
        }
      },
      'basCompany.vatRegno': function (value) {//纳税人登记号
        if(typeof(value)!='undefined'){
            if(this.Company){
            return this.Validator.value(value).maxLength(200);
            }else{
                return this.Validator.value(value)
            }
        }
      },
      'basCompany.regtime': function (value) {//成立日期
        if(typeof(value)!='undefined'){
            if(this.Company){
            return this.Validator.value(value);
            }else{
                return this.Validator.value(value)
            }
        }
      },
      'basCompany.legalPersonIdnr': function (value) {//法人身份证号码
      if(typeof(value)!='undefined'){
        if(this.Company){
            return this.Validator.value(value).maxLength(50);
        }else{
            return this.Validator.value(value)
        }
      }
      },
      'basCompany.mgtDeptCode': function (value) {//主管部门代码
      if(typeof(value)!='undefined'){
        if(this.Company){
            return this.Validator.value(value).maxLength(50);
        }else{
            return this.Validator.value(value)
        }
      }
      },
      'basCompany.mgtDeptName': function (value) {//主管部门名称
      if(typeof(value)!='undefined'){
        if(this.Company){
            return this.Validator.value(value).maxLength(50);
        }else{
            return this.Validator.value(value)
        }
      }
      },
      'basCompany.legalPersonType': function (value) {//纳税人类别
      if(typeof(value)!='undefined'){
        if(this.Company){
            return this.Validator.value(value).maxLength(50);
        }else{
            return this.Validator.value(value)
        }
      }
      },
      'basCompany.businessAddress': function (value) {//营业地址
      if(typeof(value)!='undefined'){
        if(this.Company){
            return this.Validator.value(value).maxLength(200);
        }else{
            return this.Validator.value(value)
        }
      }
      },
      'dateRange': function (value) {//营业或有效期限
        if(typeof(value)!='undefined'){
            if(this.Company){
                return this.Validator.value(value);
            }else{
                return this.Validator.value(value)
            }
        }
      },
      'basCompany.introduction': function (value) {//公司简介
        if(typeof(value)!='undefined'){
            if(this.Company){
                return this.Validator.value(value).maxLength(200);
            }else{
                return this.Validator.value(value)
            }
        }
      },
      'basCompany.contactAddress': function (value) {//通讯地址
        if(typeof(value)!='undefined'){
            if(this.Company){
                return this.Validator.value(value).maxLength(200);
            }else{
                return this.Validator.value(value)
            }
        }
      },
      'basCompany.zipCode': function (value) {//邮政编码
        if(typeof(value)!='undefined'){
            if(this.Company){
                return this.Validator.value(value).maxLength(20);
            }else{
                return this.Validator.value(value)
            }
        }
      },
      'basCompany.contact': function (value) {//联系人
      if(typeof(value)!='undefined'){
        if(this.Company){
           return this.Validator.value(value).maxLength(50);
        }else{
            return this.Validator.value(value)
        }
      }
      },
      'basCompany.fax': function (value) {//传真
      if(typeof(value)!='undefined'){
        if(this.Company){
           return this.Validator.value(value).maxLength(50);
        }else{
            return this.Validator.value(value)
        }
      }
      },
      'basCompany.phone': function (value) {//电话
      if(typeof(value)!='undefined'){
        if(this.Company){
            return this.Validator.value(value).integer();
        }else{
            return this.Validator.value(value)
        }
      }
      },
      'basCompany.email': function (value) {//email
      if(typeof(value)!='undefined'){
        if(this.Company){
            return this.Validator.value(value).maxLength(50);
        }else{
            return this.Validator.value(value)
        }
      }
      },
      'basCompany.webUrl': function (value) {//web网址
      if(typeof(value)!='undefined'){
        if(this.Company){
            return this.Validator.value(value).maxLength(200);
        }else{
            return this.Validator.value(value)
        }
      }
      },
      'basCompany.remark': function (value) {//备注
        if(typeof(value)!='undefined'){
            if(this.Company){
                return this.Validator.value(value).maxLength(200);
            }else{
                return this.Validator.value(value)
            }
        }
      },
//----------------------业务--------------------
      'basBusiness.ouParentid': function (value) {//上级业务组织
        if(typeof(value)!='undefined'){
            if(this.Business){
                return this.Validator.value(value).integer();
            }else{
                return this.Validator.value(value)
            }
        }
      },
      'basBusiness.stmOuId': function (value) {//结算账务组织
        if(typeof(value)!='undefined'){
            if(this.Business){
                return this.Validator.value(value).integer();
            }else{
                return this.Validator.value(value)
            }
        }
      },
      'basBusiness.status': function (value) {//启用状态
        if(typeof(value)!='undefined'){
            if(this.Business){
                return this.Validator.value(value).integer();
            }else{
                return this.Validator.value(value)
            }
        }
      },
//------------------------财务--------------------------
    'basFinance.stateTaxNo': function (value) {//国税登记号
        if(typeof(value)!='undefined'){
            if(this.Finance){
                return this.Validator.value(value).maxLength(50);
            }else{
                return this.Validator.value(value)
            }
        }
      },
      'basFinance.localTaxNo': function (value) {//地税登记号
        if(typeof(value)!='undefined'){
            if(this.Finance){
                return this.Validator.value(value).maxLength(50);
            }else{
                return this.Validator.value(value)
            }
        }
      },
      'basFinance.taxpayerRegNo': function (value) {//纳税人识别号
        if(typeof(value)!='undefined'){
            if(this.Finance){
                return this.Validator.value(value).maxLength(50);
            }else{
                return this.Validator.value(value)
            }
        }
      },
      'basFinance.taxpayerCode': function (value) {//纳税人编码
        if(typeof(value)!='undefined'){
            if(this.Finance){
                return this.Validator.value(value).maxLength(50);
            }else{
                return this.Validator.value(value)
            }
        }
      },
      'basFinance.taxType': function (value) {//纳税税种
        if(typeof(value)!='undefined'){
            if(this.Finance){
                return this.Validator.value(value).maxLength(50);
            }else{
                return this.Validator.value(value)
            }
        }
      },
      'basFinance.delegateTaxType': function (value) {//委托税种
        if(typeof(value)!='undefined'){
            if(this.Finance){
                return this.Validator.value(value).maxLength(50);
            }else{
                return this.Validator.value(value)
            }
        }
      },
      'basFinance.status': function (value) {//启用状态
        if(typeof(value)!='undefined'){
            if(this.Finance){
                return this.Validator.value(value).integer();
            }else{
                return this.Validator.value(value)
            }
        }
      },
    },
    created:function(){
        let _this=this;
         _this.loadTree();
         _this.getSelectData();
         _this.getData();
    },  
     watch: {
      search(val) {
        this.$refs.tree.filter(val);
      },
      search_companyOuId(val) {
        this.$refs.trees.filter(val);
      },
      Company(val){
          let _this=this;
          if(val){
            //   let flag=false
            //   $.each(_this.ouTypes,function(index,val){
            //       if(val==1){
            //           flag=true
            //       }
            //   })
            //   if(flag){//当前组织是公司类型
            //       _this.addData.companyOuId=this.companyOuId
            //   }else{//当前组织不是公司类型
            //       _this.addData.companyOuId=''
            //   }
              _this.addData.companyOuId=this.companyOuId
              _this.addData.basCompany=this.basCompany
          }else{
              _this.addData.companyOuId=''
              delete _this.addData.basCompany
          }
      },
      Business(val){
          if(val){
              this.addData.basBusiness=this.basBusiness
          }else{
              delete this.addData.basBusiness
          }
      },
      Finance(val){
          if(val){
              this.addData.basFinance=this.basFinance
          }else{
              delete this.addData.basFinance
          }
      },
      addData:{
            handler:function(val,oldVal){
                let _this=this;
                if(!_this.saveSuccess){
                    if(!_this.firstModify){
                        _this.firstModify=!_this.firstModify;
                    }else{
                        _this.ifModify=true
                    }
                }else{
                     _this.ifModify=true;
                }
            },
            deep:true,
        },
        basCompany:{
            handler:function(val,oldVal){
                let _this=this;
                if(!_this.saveSuccess){
                    if(!_this.secondModify){
                        _this.secondModify=!_this.secondModify;
                    }else{
                        _this.ifModify=true
                    }
                }else{
                    _this.ifModify=false;
                }
            },
            deep:true,
        },
        basBusiness:{
            handler:function(val,oldVal){
                let _this=this;
                if(!_this.saveSuccess){
                    if(!_this.thirfModify){
                        _this.thirfModify=!_this.thirfModify;
                    }else{
                        _this.ifModify=true
                    }
                }else{
                     _this.ifModify=true;
                }
            },
            deep:true,
        },
        basFinance:{
            handler:function(val,oldVal){
                let _this=this;
                if(!_this.saveSuccess){
                    if(!_this.forthModify){
                        _this.forthModify=!_this.forthModify;
                    }else{
                        _this.ifModify=true
                    }
                }else{
                     _this.ifModify=true;
                }
            },
            deep:true,
        },
        dateRange:{
            handler:function(val,oldVal){
                let _this=this;
                if(!_this.saveSuccess){
                    if(!_this.fiveModify){
                        _this.fiveModify=!_this.fiveModify;
                    }else{
                        _this.ifModify=true
                    }
                }else{
                     _this.ifModify=true;
                }
            },
            deep:true,
        }
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
                // console.log(res)
            })
            _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'AccountScheme'}).then(function(res){ 
            // 会计期间
                _this.selectData.accCchemeId=res.result;
            })
            _this.$axios.gets('/api/services/app/CurrencyManagement/GetAll').then(function(res){ 
            // 本位币种
                _this.selectData.baseCurrencyId=res.result.items;
            })
             _this.$axios.gets('/api/services/app/OuManagement/GetCompanyOuList').then(function(res){ 
            // 公司
                _this.selectData.companys=res.result;
                // console.log(res)
            })
             _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'OUType'}).then(function(res){ 
            // 组织类型
                _this.selectData.OUType=res.result;
            })
            _this.$axios.gets('/api/services/app/OuManagement/GetOuParentList').then(function(res){ 
            // 上级组织
            _this.selectData.ou=res.result;
            })
        },
        getData(){
            let _this=this;
            _this.$axios.gets('/api/services/app/OuManagement/Get',{id:_this.$route.params.id})
         
            .then(function(res){
                _this.addData={
                    "ouCode": res.result.ouCode,
                    "ouName": res.result.ouName,
                    "ouFullname": res.result.ouFullname,
                    "ouParentid": res.result.ouParentid,//整数
                    "accCchemeId": res.result.accCchemeId,//整数
                    "accStartMonth": res.result.accStartMonth,
                    "baseCurrencyId": res.result.baseCurrencyId,//整数
                    "companyOuId": res.result.companyOuId,//整数
                    "contactPerson": res.result.contactPerson,
                    "phone": res.result.phone,
                    "address": res.result.address,
                    "status": res.result.status,//整数
                    "remark": res.result.remark,
                    "id":res.result.id,
                    "ouTypes":res.result.ouTypes
                };
                _this.companyOuId=res.result.id;//储存当前公司ID
                _this.ouTypes=res.result.ouTypes;//储存当前ouTypes
                _this.change_ouType()
             
                if(res.result.basCompany!=null && typeof(res.result.basCompany)!='undefined' && res.result.basCompany!=[]){
                    _this.basCompany={
                        "ouParentid": res.result.basCompany.ouParentid,//整数
                        "legalPerson": res.result.basCompany.legalPerson,
                        "status": res.result.basCompany.status,//整数
                        "isGroupCompany": res.result.basCompany.isGroupCompany,
                        "regCapital": res.result.basCompany.regCapital,//整数
                        "vatRegno": res.result.basCompany.vatRegno,
                        "regtime": res.result.basCompany.regtime,
                        "legalPersonIdnr": res.result.basCompany.legalPersonIdnr,
                        "mgtDeptCode": res.result.basCompany.mgtDeptCode,
                        "mgtDeptName": res.result.basCompany.mgtDeptName,
                        // "businessStart": "2018-03-13T01:03:22.616Z",
                        // "businessEnd": "2018-03-13T01:03:22.616Z",
                        "legalPersonType": res.result.basCompany.legalPersonType,
                        "introduction": res.result.basCompany.introduction,
                        "contact": res.result.basCompany.contact,
                        "businessAddress": res.result.basCompany.businessAddress,
                        "contactAddress": res.result.basCompany.contactAddress,
                        "zipCode": res.result.basCompany.zipCode,
                        "phone": res.result.basCompany.phone,
                        "fax": res.result.basCompany.fax,
                        "email": res.result.basCompany.email,
                        "webUrl": res.result.basCompany.webUrl,
                        "remark": res.result.basCompany.remark
                    }
                    _this.dateRange=[res.result.basCompany.businessStart,res.result.basCompany.businessEnd];//营业或有效期限

                }
                if(res.result.basFinance!=null && typeof(res.result.basFinance)!='undefined' && res.result.basFinance!=[]){
                    _this.basFinance={
                        "stateTaxNo": res.result.basFinance.stateTaxNo,
                        "localTaxNo": res.result.basFinance.localTaxNo,
                        "taxpayerRegNo": res.result.basFinance.taxpayerRegNo,
                        "taxpayerCode": res.result.basFinance.taxpayerCode,
                        "taxType": res.result.basFinance.taxType,
                        "delegateTaxType": res.result.basFinance.delegateTaxType,
                        "isTaxOu": res.result.basFinance.isTaxOu,
                        "status": res.result.basFinance.status
                    }
                }
                if(res.result.basBusiness!=null && typeof(res.result.basBusiness)!='undefined' && res.result.basBusiness!=[]){
                    _this.basBusiness={
                        "ouParentid": res.result.basBusiness.ouParentid,
                        "stmOuId": res.result.basBusiness.stmOuId,
                        "status": res.result.basBusiness.status
                    }
                }
                _this.auditInfo={
                    createdBy:res.result.createdBy,
                    createdTime:res.result.createdTime,
                    modifiedBy:res.result.modifiedBy,
                    modifiedTime:res.result.modifiedTime,
                }
                _this.saveSuccess=false;
                _this.firstModify=false;
                _this.secondModify=false;
                _this.thirfModify=false;
                _this.forthModify=false;
                _this.ifModify=false;
                _this.fiveModify=false;
            })
        },
        showErrprTips(e){
             $('.tipsWrapper').css({display:'none'})
            // $('.tipsWrapper').each(function(){
            //     if($(e.target).parent('.el-input').hasClass($(this).attr('name'))){
            //         $(this).addClass('display_block')
            //     }else{
            //         $(this).removeClass('display_block')
            //     }
            // })
        },
        showErrprTipsSelect(e){
             $('.tipsWrapper').css({display:'none'})
            // $('.tipsWrapper').each(function(){
            //     if($(e.target).parent('.el-input').parent('.el-select').hasClass($(this).attr('name'))){
            //         $(this).addClass('display_block')
            //     }else{
            //         $(this).removeClass('display_block')
            //     }
            // })
        },
        showErrprTipsRangedate(e){
             $('.tipsWrapper').css({display:'none'})
            // $('.tipsWrapper').each(function(){
            //     if($(e.$el).hasClass($(this).attr('name'))){
            //         $(this).addClass('display_block')
            //     }else{
            //         $(this).removeClass('display_block')
            //     }
            // })
        },
        showErrprTipsTextArea(e){
             $('.tipsWrapper').css({display:'none'})
            // $('.tipsWrapper').each(function(){
            //   if($(e.target).parent('.el-textarea').hasClass($(this).attr('name'))){
            //       $(this).addClass('display_block')
            //   }else{
            //       $(this).removeClass('display_block')
            //   }
            // })
        },
        filterNode(value, data) {
            if (!value) return true;
            return data.ouName.indexOf(value) !== -1;
        },
         filterNode1(value, data) {
            if (!value) return true;
            return data.ouName.indexOf(value) !== -1;
        },
        loadTree(){
            let _this=this;
            _this.treeLoading=true;
            _this.$axios.gets('/api/services/app/OuManagement/GetAllTree')
            .then(function(res){
                _this.selectTree=res.result;
            },function(res){
            })
             _this.$axios.gets('/api/services/app/OuManagement/GetTreeWithOuType',{ouType:1})
            .then(function(res){
                // console.log(res);
                _this.selectTreeCompany=res.result;
            },function(res){
            })
        },
        loadIcon(){
            let _this=this;
            _this.$nextTick(function () {
                $('.preNode').remove();   
                $('.el-tree-node__label').each(function(){
                    if($(this).parent('.el-tree-node__content').next('.el-tree-node__children').text()==''){
                        $(this).prepend('<i class="preNode fa fa-file" aria-hidden="true" style="color:#f1c40f;margin-right:5px"></i>')
                    }else{
                        $(this).prepend('<i aria-hidden="true" class="preNode fa fa-folder-open" style="color:#f1c40f;margin-right:5px"></i>')
                    }
                })
            })
        },
        nodeClick_ou(data,node,self){
            let _this=this;
            // _this.item_ou.id=data.id;
            // _this.item_ou.ouName=data.ouName;
            // _this.$nextTick(function(){
            //     $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').click();
            // })
            $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').each(function(index){
                if($(this).attr('date')==data.id){
                    $(this).click()
                }
            })
        },
        // 
        nodeClick(data,node,self){
            let _this=this;
            // _this.item_ou.id=data.id;
            // _this.item_ou.ouName=data.ouName;
            // _this.$nextTick(function(){
            //     $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').click();
            // })
            $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').each(function(index){
                if($(this).attr('date')==data.id){
                    $(this).click()
                }
            })
        },
        isBack(){
            let _this=this;
            if(_this.ifModify){
                _this.dialogUserConfirm=true;
                _this.choseDoing='back'
            }else{
                _this.back()
            }
        },
        isCancel(){
            let _this=this;
            if(_this.ifModify){
                _this.dialogUserConfirm=true;
                _this.choseDoing='Cancel'
            }
        },
        isUpdateOuName(){
            let _this=this
            _this.showErrprTips();
            if(_this.addData.ouName==_this.addData.ouFullname){
                _this.isUpdateFlag=true;
            }else{
                _this.isUpdateFlag=false;
            }
        },
        updateOuName(){
            let _this=this;
            if(_this.isUpdateFlag){
                _this.addData.ouFullname=_this.addData.ouName
            }
        },
        isDeleteThis(){
            let _this=this;
            _this.dialogUserConfirm=true;
            _this.choseDoing='deleteThis'

        },
        sureDoing(){
            let _this=this;
            if(_this.choseDoing=='back'){
                _this.back()
                _this.dialogUserConfirm=false;
            }else if(_this.choseDoing=='Cancel'){
                _this.Cancel();
                _this.dialogUserConfirm=false;
            }else if(_this.choseDoing=='deleteThis'){
                _this.deleteThis();
                _this.dialogUserConfirm=false;
            }
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
        change_ouType(){
            let _this=this;
            for(let i=0;i<_this.addData.ouTypes.length;i++){
               if(_this.addData.ouTypes[i]==1){
                   _this.Company=true
                   break
               }else{
                   _this.Company=false
               }
            }
            for(let i=0;i<_this.addData.ouTypes.length;i++){
               
               if(_this.addData.ouTypes[i]==2){
                    _this.Business=true
                    break
               }else{
                   _this.Business=false
               }
               
            }
            for(let i=0;i<_this.addData.ouTypes.length;i++){
               if(_this.addData.ouTypes[i]==3){
                    _this.Finance=true
                    break
               }else{
                   _this.Finance=false
               }
            }
            if(_this.Company && !_this.Finance){//财务公司联动
                    _this.Finance=true;
                    _this.addData.ouTypes.push(3)
            }
            if(_this.Company){//激活项
                _this.activeName="Company"
            }else{
                
                if(_this.Business){
                    _this.activeName="Business"
                }else{
                    _this.activeName="Finance"
                }
            }
            
        },
        isGroupCompany(){
            let _this=this;
            _this.basCompany.ouParentid='';
            _this.validation.reset()
        },
        Cancel(){
            let _this=this;
             $('.tipsWrapper').css({display:'none'})
            _this.validation.reset();
            _this.getData();
        },
        getErrorMessage(message,details,validationErrors){
            let _this=this;
            _this.response.message='';
            _this.response.details='';
            _this.response.validationErrors=[];
            if(details!=null && details){
                _this.response.details=details;
            }
            if(message!=null && message){
                _this.response.message=message;
            }
            if(message!=null && message){
                _this.response.validationErrors=validationErrors;
            }
        },
        save(){
            let _this=this;
            $('.tipsWrapper').css({display:'block'})
                _this.$validate()
                .then(function (success) {
                    if (success) {
                        $('.tipsWrapper').css({display:'none'})
                        if(_this.Company){
                        _this.basCompany.businessStart=_this.dateRange[0];
                        _this.basCompany.businessEnd=_this.dateRange[1];
                        _this.addData.basCompany=_this.basCompany;
                        }
                        if(_this.Finance){
                            _this.addData.basBusiness=_this.basBusiness;
                        }
                        if(_this.Business){
                            _this.addData.basFinance=_this.basFinance;
                        }
                        _this.$axios.puts('/api/services/app/OuManagement/Update',_this.addData).then(function(res){
                             _this.auditInfo={
                                createdBy:res.result.createdBy,
                                createdTime:res.result.createdTime,
                                modifiedBy:res.result.modifiedBy,
                                modifiedTime:res.result.modifiedTime,
                            }
                            _this.saveSuccess=true;
                            _this.firstModify=false;
                            _this.secondModify=false;
                            _this.thirfModify=false;
                            _this.forthModify=false;
                            _this.fiveModify=false;
                            _this.ifModify=false;
                            _this.open('保存成功','el-icon-circle-check','successERP');
                        },function(res){
                            if(res && res!=''){ _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)}
                            _this.errorMessage=true;
                        })
                    }
                });
        },
        saveAdd(){
            let _this=this;
            $('.tipsWrapper').css({display:'block'})
                _this.$validate()
                .then(function (success) {
                    if (success) {
                        $('.tipsWrapper').css({display:'none'})
                        if(_this.Company){
                        _this.basCompany.businessStart=_this.dateRange[0];
                        _this.basCompany.businessEnd=_this.dateRange[1];
                        _this.addData.basCompany=_this.basCompany;
                        }
                        if(_this.Finance){
                            _this.addData.basBusiness=_this.basBusiness;
                        }
                        if(_this.Business){
                            _this.addData.basFinance=_this.basFinance;
                        }
                             _this.$axios.puts('/api/services/app/OuManagement/Update',_this.addData).then(function(res){
                            _this.open('保存成功','el-icon-circle-check','successERP');
                            _this.add()
                        },function(res){
                            if(res && res!=''){ _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)}
                            _this.errorMessage=true;
                        })
                    }
                });
        },
        add(){
            let _this=this;
            _this.$store.state.url='/OuManage/OuManageDetail/default'
            _this.$router.push({path:this.$store.state.url})//点击切换路由
        },
        deleteThis(){
             let _this=this;
            _this.$axios.deletes('/api/services/app/OuManagement/Delete',{id:_this.$route.params.id})
            .then(function(res){
                _this.dialogUserConfirm=false;
                _this.open('删除成功','el-icon-circle-check','successERP');
                _this.add();
            },function(res){
                if(res && res!=''){ _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)}
                _this.dialogUserConfirm=false;
                _this.errorMessage=true;
            })
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
                basOuTypes: [],//组织职能
                isGroupCompany:false ,//
                ouCompanyParentid: '' ,//上级公司组织ID
                legalPerson:'',//法人代表
                companyStatus:'' ,//公司启用状态
                regtime:''//公司成立时间
            };
        },
        getStartMonth(){//根据会计期间生成启用年月
            let _this=this;
            _this.$axios.gets('/api/services/app/Accperiod/Get',{id:_this.addData.accCchemeId})
            .then(function(res){
                _this.addData.accStartMonth=res.result.beginDate
            },function(res){
            })
        },
        renderContent_companyOuId(h, { node, data, store }){
                
            if(typeof(data.children)!='undefined' && data.children!=null && data.children.length>0){
                return (
                    <span class="el-tree-node__label" data-id={data.id}>
                    <i aria-hidden="true" class="preNode fa fa-folder-open" style="color:#f1c40f;margin-right:5px"></i>
                        {data.ouName}
                    </span>
                );
            }else{
                return (
                    <span class="el-tree-node__label" data-id={data.id}>
                    <i class="preNode fa fa-file" aria-hidden="true" style="color:#f1c40f;margin-right:5px"></i>
                        {data.ouName}
                    </span>
                );
            }
        },
        renderContent_ouParentid(h, { node, data, store }){
            if(typeof(data.children)!='undefined' && data.children!=null && data.children.length>0){
                return (
                    <span class="el-tree-node__label" data-id={data.id}>
                    <i aria-hidden="true" class="preNode fa fa-folder-open" style="color:#f1c40f;margin-right:5px"></i>
                        {data.ouName}
                    </span>
                );
            }else{
                return (
                    <span class="el-tree-node__label" data-id={data.id}>
                    <i class="preNode fa fa-file" aria-hidden="true" style="color:#f1c40f;margin-right:5px"></i>
                        {data.ouName}
                    </span>
                );
            }
        },
    }

})        
    
  </script>

<style>
  .OuModifyForm{
      font-family: 'microsoft yahei';
  }

.OuModifyForm .bgcolor.longWidth{
    width: 505px;
    height:auto;
 }
.OuModifyForm .bgcolor.longWidth .el-textarea{
    width: calc(100% - 94px);
    font-size: 12px;
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
.OuModifyForm>.el-row:first-child{
      padding:7px 0;
  }
 .OuModifyForm .getPadding,.tabZoo .el-tabs__nav-scroll{
     padding: 0 10px;
 }
 .OuModifyForm .tabZoo .el-tabs__active-bar{
     width: 28px!important;
 }

.OuModifyForm .nopadding{
    padding-top: 0;
    padding-bottom: 0;
}
  </style>
  <style>
  .OuModifyForm .bgcolor .el-select .el-input input{
    height: 35px!important;
    }
  </style>
  
