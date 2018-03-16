<template>
<!-- 集团管理-组织单元修改 -->
 <div class="OuModifyForm">
     <el-row class="fixed">
         <el-col :span="24">
            <button @click="back" class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
            <button @click="Update" class="erp_bt bt_modify"><div class="btImg"><img src="../../../static/image/common/bt_modify.png"></div><span class="btDetail">修改</span></button>           
            <button class="erp_bt bt_save" plain @click="save"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>
            <button @click="Cancel" class="erp_bt bt_cancel"><div class="btImg"><img src="../../../static/image/common/bt_cancel.png"></div><span class="btDetail">取消</span></button>
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
               <!-- <div class="tipsWrapper" name="ouCode">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.ouCode')}">
                        <p class="msgDetail">错误提示：编码{{ validation.firstError('addData.ouCode') }}</p>
                    </div>
                </div> -->
                <div class="tipsWrapper" name="ouName">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.ouName')}">
                        <p class="msgDetail">错误提示：名称{{ validation.firstError('addData.ouName') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="ouFullname">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.ouFullname')}">
                        <p class="msgDetail">错误提示：全称{{ validation.firstError('addData.ouFullname') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="ouParentid">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.ouParentid')}">
                        <p class="msgDetail">错误提示：上级业务单元{{ validation.firstError('addData.ouParentid') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="accCchemeId">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.accCchemeId')}">
                        <p class="msgDetail">错误提示：会计方案{{ validation.firstError('addData.accCchemeId') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="accStartMonth">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.accStartMonth')}">
                        <p class="msgDetail">错误提示：启用月份{{ validation.firstError('addData.accStartMonth') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="baseCurrencyId">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.baseCurrencyId')}">
                        <p class="msgDetail">错误提示：本位币种{{ validation.firstError('addData.baseCurrencyId') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="companyOuId">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.companyOuId')}">
                        <p class="msgDetail">错误提示：所属公司{{ validation.firstError('addData.companyOuId') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="contactPerson">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.contactPerson')}">
                        <p class="msgDetail">错误提示：联系人{{ validation.firstError('addData.contactPerson') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="phone">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.phone')}">
                        <p class="msgDetail">错误提示：电话{{ validation.firstError('addData.phone') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="address">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.address')}">
                        <p class="msgDetail">错误提示：地址{{ validation.firstError('addData.address') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="status1">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.status')}">
                        <p class="msgDetail">错误提示：启用状态{{ validation.firstError('addData.status') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="remark1">
                    <div class="errorTips" :class="{block : !validation.hasError('addData.remark')}">
                        <p class="msgDetail">错误提示：备注{{ validation.firstError('addData.remark') }}</p>
                    </div>
                </div>

                
                <div class="tipsWrapper" name="ouParentid">
                    <div class="errorTips" :class="{block : !validation.hasError('basCompany.ouParentid')}">
                        <p class="msgDetail">错误提示：上级公司{{ validation.firstError('basCompany.ouParentid') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="status2">
                    <div class="errorTips" :class="{block : !validation.hasError('basCompany.status')}">
                        <p class="msgDetail">错误提示：启用状态{{ validation.firstError('basCompany.status') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="regCapital">
                    <div class="errorTips" :class="{block : !validation.hasError('basCompany.regCapital')}">
                        <p class="msgDetail">错误提示：注册资本{{ validation.firstError('basCompany.regCapital') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="legalPerson">
                    <div class="errorTips" :class="{block : !validation.hasError('basCompany.legalPerson')}">
                        <p class="msgDetail">错误提示：法人代表{{ validation.firstError('basCompany.legalPerson') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="vatRegno">
                    <div class="errorTips" :class="{block : !validation.hasError('basCompany.vatRegno')}">
                        <p class="msgDetail">错误提示：纳税人登记号{{ validation.firstError('basCompany.vatRegno') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="regtime">
                    <div class="errorTips" :class="{block : !validation.hasError('basCompany.regtime')}">
                        <p class="msgDetail">错误提示：成立日期{{ validation.firstError('basCompany.regtime') }}</p>
                    </div>
                </div>

                <div class="tipsWrapper" name="legalPersonIdnr">
                    <div class="errorTips" :class="{block : !validation.hasError('basCompany.legalPersonIdnr')}">
                        <p class="msgDetail">错误提示：法人身份证号码{{ validation.firstError('basCompany.legalPersonIdnr') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="mgtDeptCode">
                    <div class="errorTips" :class="{block : !validation.hasError('basCompany.mgtDeptCode')}">
                        <p class="msgDetail">错误提示：主管部门代码{{ validation.firstError('basCompany.mgtDeptCode') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="mgtDeptName">
                    <div class="errorTips" :class="{block : !validation.hasError('basCompany.mgtDeptName')}">
                        <p class="msgDetail">错误提示：主管部门名称{{ validation.firstError('basCompany.mgtDeptName') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="legalPersonType">
                    <div class="errorTips" :class="{block : !validation.hasError('basCompany.legalPersonType')}">
                        <p class="msgDetail">错误提示：纳税人类别{{ validation.firstError('basCompany.legalPersonType') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="businessAddress">
                    <div class="errorTips" :class="{block : !validation.hasError('basCompany.businessAddress')}">
                        <p class="msgDetail">错误提示：营业地址{{ validation.firstError('basCompany.businessAddress') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="rangeDate">
                    <div class="errorTips" :class="{block : !validation.hasError('basCompany.dateRange')}">
                        <p class="msgDetail">错误提示：营业或有效期限{{ validation.firstError('basCompany.dateRange') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="introduction">
                    <div class="errorTips" :class="{block : !validation.hasError('basCompany.introduction')}">
                        <p class="msgDetail">错误提示：公司简介{{ validation.firstError('basCompany.introduction') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="contactAddress">
                    <div class="errorTips" :class="{block : !validation.hasError('basCompany.contactAddress')}">
                        <p class="msgDetail">错误提示：通讯地址{{ validation.firstError('basCompany.contactAddress') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="zipCode">
                    <div class="errorTips" :class="{block : !validation.hasError('basCompany.zipCode')}">
                        <p class="msgDetail">错误提示：邮政编码{{ validation.firstError('basCompany.zipCode') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="contact">
                    <div class="errorTips" :class="{block : !validation.hasError('basCompany.contact')}">
                        <p class="msgDetail">错误提示：联系人{{ validation.firstError('basCompany.contact') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="fax">
                    <div class="errorTips" :class="{block : !validation.hasError('basCompany.fax')}">
                        <p class="msgDetail">错误提示：传真{{ validation.firstError('basCompany.fax') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="phone">
                    <div class="errorTips" :class="{block : !validation.hasError('basCompany.phone')}">
                        <p class="msgDetail">错误提示：电话{{ validation.firstError('basCompany.phone') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="email">
                    <div class="errorTips" :class="{block : !validation.hasError('basCompany.email')}">
                        <p class="msgDetail">错误提示：email{{ validation.firstError('basCompany.email') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="webUrl">
                    <div class="errorTips" :class="{block : !validation.hasError('basCompany.webUrl')}">
                        <p class="msgDetail">错误提示：web网址{{ validation.firstError('basCompany.webUrl') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="remark2">
                    <div class="errorTips" :class="{block : !validation.hasError('basCompany.remark')}">
                        <p class="msgDetail">错误提示：备注{{ validation.firstError('basCompany.remark') }}</p>
                    </div>
                </div>
                




                <div class="bgcolor" >
                    <label><small>*</small>编码</label>
                    <el-input class="ouCode" 
                    disabled
                    v-model="addData.ouCode">
                    </el-input>
                </div>
                <div class="bgcolor">
                    <label><small>*</small>名称</label>
                    <el-input class="ouName"
                    :disabled="isEdit" 
                    @change="isUpdate"
                    @focus="showErrprTips"
                    :class="{redBorder : validation.hasError('addData.ouName')}"
                     v-model="addData.ouName" >
                     </el-input>
                </div>
                <div class="bgcolor">
                    <label><small>*</small>全称</label>
                    <el-input class="ouFullname"  
                    :disabled="isEdit" 
                    @change="isUpdate"
                    @focus="showErrprTips"
                    :class="{redBorder : validation.hasError('addData.ouFullname')}"
                    v-model="addData.ouFullname" 
                    placeholder=""></el-input>
                </div>
                <div class="bgcolor">
                    <label class="longLabel"><small>*</small>上级业务单元</label>
                    <el-select class="ouParentid"
                    :disabled="isEdit" 
                    @change="isUpdate"
                    @focus="showErrprTipsSelect"
                    :class="{redBorder : validation.hasError('addData.ouParentid')}"
                    placeholder=""
                    v-model="addData.ouParentid">
                        <!-- <el-option 
                        v-for="item in selectData.ouParentid" 
                        :key="item.id" 
                        :label="item.ouName" 
                        :value="item.id">
                        </el-option> -->
                        <el-input
                        placeholder="搜索..."
                        class="selectSearch"
                        v-model="search">
                        </el-input>
                        <el-tree
                        oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                        :data="selectTree"
                        :props="selectProps"
                        node-key="id"
                        default-expand-all
                        ref="tree"
                        :filter-node-method="filterNode"
                        :expand-on-click-node="false"
                        @node-click="nodeClick_ou"
                        >
                        </el-tree>
                        <!-- <el-option v-show="false" :key="item_ou.id" :label="item_ou.ouFullname" :value="item_ou.id">
                        </el-option> -->
                        <el-option v-show="false" v-for="item in selectData.ou" :key="item.id" :label="item.ouFullname" :value="item.id" :date="item.id">
                            </el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label><small>*</small>会计方案</label>
                    <el-select filterable  class="accCchemeId"
                    :disabled="isEdit" 
                    @change="isUpdate"
                    @focus="showErrprTipsSelect"
                    :class="{redBorder : validation.hasError('addData.accCchemeId')}"
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
                    :disabled="isEdit" 
                    @change="isUpdate"
                    @focus="showErrprTipsRangedate"
                    :class="{redBorder : validation.hasError('addData.accStartMonth')}"
                    class="accStartMonth datepicker" 
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd" 
                    v-model="addData.accStartMonth" 
                    type="date" 
                    ></el-date-picker>
                </div>
                <div class="bgcolor">
                    <label><small>*</small>本位币种</label>
                    <el-select filterable  
                    :disabled="isEdit" 
                    @change="isUpdate"
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
                    <el-select filterable  
                    :disabled="isEdit" 
                    @change="isUpdate"
                    placeholder=""
                    @focus="showErrprTipsSelect"
                    :class="{redBorder : validation.hasError('addData.companyOuId')}"
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
                    :disabled="isEdit" 
                    @change="isUpdate"
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
                    :disabled="isEdit" 
                    @change="isUpdate"
                    @focus="showErrprTips"
                    :class="{redBorder : validation.hasError('addData.phone')}"
                    class="phone" 
                    v-model="addData.phone" 
                    ></el-input>
                </div>
                <div class="bgcolor">
                    <label>地址</label>
                    <el-input 
                    :disabled="isEdit" 
                    @change="isUpdate"
                    @focus="showErrprTips"
                    :class="{redBorder : validation.hasError('addData.address')}"
                    class="address" 
                    v-model="addData.address" 
                    ></el-input>
                </div>
                 <div class="bgcolor">
                    <label>启用状态</label>
                    <el-select filterable  
                    :disabled="isEdit" 
                    @change="isUpdate"
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
                <div class="bgcolor longWidth">
                    <label>备注</label>
                    <el-input
                    :disabled="isEdit" 
                    @change="isUpdate"
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
        </el-row>
     </div>    
 </el-collapse-transition>  
<!--组织类型  -->
<el-row>
    <el-col :span="24" class="getPadding"> <h4 class="h4">组织类型</h4></el-col>
    <el-col :span="24" class="getPadding"> 
        <el-col :span="6">  
            <el-checkbox-group 
            :disabled="isEdit" 
            @change="isUpdate"
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
                            <el-checkbox :disabled="isEdit" v-model="basCompany.isGroupCompany" @change="isGroupCompany">集团公司</el-checkbox>
                        </el-col> 
                    </el-col>
                    <el-col :span="24"  class="getPadding" style="border-bottom:1px solid #e4e4e4; ">
                        <div class="bgcolor">
                            <label>上级公司</label>
                            <el-select filterable  
                            :disabled="isEdit" 
                            @change="isUpdate"
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

                                <el-option 
                                v-if="basCompany.isGroupCompany"
                                :label="groupCompany.label" 
                                :value="groupCompany.value" 
                                >
                                </el-option>
                            </el-select>
                        </div>
                        <div class="bgcolor">
                            <label>启用状态</label>
                            <el-select filterable  
                            :disabled="isEdit" 
                            @change="isUpdate"
                            
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
                                :disabled="isEdit" 
                                @change="isUpdate"
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.regCapital')}"
                                class="regCapital"
                                v-model="basCompany.regCapital"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>法人代表</label>
                                <el-input
                                :disabled="isEdit" 
                                @change="isUpdate"
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.legalPerson')}"
                                class="legalPerson"
                                v-model="basCompany.legalPerson"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>纳税人登记号</label>
                                <el-input 
                                :disabled="isEdit" 
                                @change="isUpdate"
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.vatRegno')}"
                                class="vatRegno"
                                v-model="basCompany.vatRegno"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>成立日期</label>
                                <el-date-picker 
                                :disabled="isEdit" 
                                @change="isUpdate"
                                
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
                                <label class="longLabel">法人身份证号码</label>
                                <el-input
                                :disabled="isEdit" 
                                @change="isUpdate"
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.legalPersonIdnr')}"   
                                class="legalPersonIdnr"
                                v-model="basCompany.legalPersonIdnr"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>主管部门代码</label>
                                <el-input
                                :disabled="isEdit" 
                                @change="isUpdate"
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.mgtDeptCode')}"
                                class="mgtDeptCode"
                                v-model="basCompany.mgtDeptCode"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>主管部门名称</label>
                                <el-input
                                :disabled="isEdit" 
                                @change="isUpdate"
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.mgtDeptName')}"
                                class="mgtDeptName"
                                v-model="basCompany.mgtDeptName"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>纳税人类别</label>
                                <el-input
                                :disabled="isEdit" 
                                @change="isUpdate"
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.legalPersonType')}"
                                class="legalPersonType"
                                v-model="basCompany.legalPersonType"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>营业地址</label>
                                <el-input
                                :disabled="isEdit" 
                                @change="isUpdate"
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.businessAddress')}"
                                class="businessAddress"
                                v-model="basCompany.businessAddress"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label class="longLabel">营业或有效期限</label>
                                <div class="rangeDate">
                                    <el-date-picker
                                    :disabled="isEdit" 
                                    @change="isUpdate"
                                    
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
                            <div class="bgcolor">
                                <label>公司简介</label>
                                <el-input
                                :disabled="isEdit" 
                                @change="isUpdate"
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.introduction')}"
                                class="introduction"
                                v-model="basCompany.introduction"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>通讯地址</label>
                                <el-input
                                :disabled="isEdit" 
                                @change="isUpdate"
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.contactAddress')}"
                                class="contactAddress"
                                v-model="basCompany.contactAddress"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>邮政编码</label>
                                <el-input
                                :disabled="isEdit" 
                                @change="isUpdate"
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.zipCode')}"
                                class="zipCode"
                                v-model="basCompany.zipCode"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>联系人</label>
                                <el-input
                                :disabled="isEdit" 
                                @change="isUpdate"
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.contact')}"
                                class="contact"
                                v-model="basCompany.contact"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>传真</label>
                                <el-input
                                :disabled="isEdit" 
                                @change="isUpdate"
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.fax')}"
                                class="fax"
                                v-model="basCompany.fax"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>电话</label>
                                <el-input
                                :disabled="isEdit" 
                                @change="isUpdate"
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.phone')}"
                                class="phone"
                                v-model="basCompany.phone"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>email</label>
                                <el-input
                                :disabled="isEdit" 
                                @change="isUpdate"
                                
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.email')}"
                                class="email"
                                v-model="basCompany.email"
                                ></el-input>
                            </div>
                            <div class="bgcolor">
                                <label>web网址</label>
                                <el-input
                                
                                :disabled="isEdit" 
                                @change="isUpdate"
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('basCompany.webUrl')}"
                                class="webUrl"
                                v-model="basCompany.webUrl"
                                ></el-input>
                            </div>
                            <div class="bgcolor longWidth">
                                <label>备注</label>
                                <el-input
                                :disabled="isEdit" 
                                @change="isUpdate"
                                
                                @focus="showErrprTipsTextArea"
                                :class="{redBorder : validation.hasError('basCompany.remark')}"
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
                <el-tab-pane v-for="item in selectData.OUType" :key="item.itemValue" :label="item.itemName" :name="item.itemCode" v-if="item.itemValue==2 && Business">
                    <el-col :span="24">
                          <div class="financeInfo">
                            <el-col :span="24"  class="getPadding">
                                <div class="bgcolor">
                                    <label>国税登记号</label>
                                    <el-input 
                                    :disabled="isEdit" 
                                    @change="isUpdate"
                                    class="legalPerson" 
                                    >
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>发税登记号</label>
                                    <el-input 
                                    :disabled="isEdit" 
                                    @change="isUpdate"
                                    class="legalPerson" 
                                    >
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>纳税人识别号</label>
                                    <el-input 
                                    :disabled="isEdit" 
                                    @change="isUpdate"
                                    class="legalPerson" 
                                    >
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>纳税人编码</label>
                                    <el-input 
                                    :disabled="isEdit" 
                                    @change="isUpdate"
                                    class="legalPerson" 
                                    >
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>纳税税种</label>
                                    <el-input 
                                    :disabled="isEdit" 
                                    @change="isUpdate"
                                    class="legalPerson" 
                                    >
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>委托税种</label>
                                    <el-input 
                                    :disabled="isEdit" 
                                    @change="isUpdate"
                                    class="legalPerson" 
                                    >
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>纳税组织</label>
                                    <el-checkbox
                                    :disabled="isEdit" 
                                    @change="isUpdate"></el-checkbox>
                                </div>
                                <div class="bgcolor">
                                    <label>启用状态</label>
                                    <el-select filterable  
                                    :disabled="isEdit" 
                                    @change="isUpdate"
                                    v-model="test"
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
                <el-tab-pane v-for="item in selectData.OUType" :key="item.itemValue" :label="item.itemName" :name="item.itemCode" v-if="item.itemValue==3 && Finance">
                    <el-col :span="24">
                          <div class="companyInfo">
                            <el-col :span="24"  class="getPadding">
                                <div class="bgcolor">
                                    <label>上级业务组织</label>
                                    <el-select filterable 
                                    :disabled="isEdit" 
                                    @change="isUpdate"
                                    v-model="test"
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
                                    :disabled="isEdit" 
                                    @change="isUpdate"
                                    class="legalPerson" 
                                    >
                                    </el-input>
                                </div>
                                <div class="bgcolor">
                                    <label>启用状态</label>
                                    <el-select filterable  
                                    :disabled="isEdit" 
                                    @change="isUpdate"
                                    v-model="test"
                                    placeholder=""
                                    class="status">
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
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd" 
                disabled
                placeholder="">
                </el-date-picker>
            </div>
            <div class="bgcolor"><label>修改人</label><el-input  v-model="auditInfo.modifiedBy" disabled></el-input></div>
            <div class="bgcolor">
                <label>修改时间</label>
                <el-date-picker
                v-model="auditInfo.modifiedTime"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd" 
                type="date"
                disabled
                placeholder="">
                </el-date-picker>
            </div>
        </div>                                  
    </el-col>
</el-row>                                                           
</div>
</template>

<script>
export default({
    data() {
        return{
            search:'',
             selectTree:[
            ],
            item_ou:{
                id:'',
                ouFullname:''
            },
            selectProps: {
                children: 'children',
                label: 'ouFullname',
                id:'id'
            },

            groupCompany:{
                value:0,
                label:"无上级公司"
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
                "status": "",//整数
                "remark": "",
                "ouTypes":[1,3],//组织职能
            },
            basCompany:{//其他信息
                "ouParentid": "",//整数
                "legalPerson": "",
                "status": "",//整数
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
            Company:true,//公司 
            Business:false,//业务   
            Finance:true,//财务
            
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
            update:false,
            isEdit:true,//是否可编辑
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
         return this.Validator.value(value).required().maxLength(50);
      },
      'addData.accCchemeId': function (value) {//会计方案
         return this.Validator.value(value).required().maxLength(50);
      },
      'addData.accStartMonth': function (value) {//启用月份
         return this.Validator.value(value).required();
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
      'addData.status': function (value) {//用户状态
         return this.Validator.value(value).required().integer();
      },
      'addData.remark': function (value) {//备注
         return this.Validator.value(value).required().maxLength(200);
      },


      'basCompany.ouParentid': function (value) {//上级公司
      if(this.Company){
          return this.Validator.value(value).required().integer();
      }
        //  return this.Validator.value(value).required().integer();
      },
    //   'basCompany.status': function (value) {//启用状态
    //      return this.Validator.value(value).required().integer();
    //   },
    //   'basCompany.regCapital': function (value) {//注册资本
    //      return this.Validator.value(value).required().integer();
    //   },
    //   'basCompany.legalPerson': function (value) {//法人代表
    //      return this.Validator.value(value).required().maxLength(50);
    //   },
    //   'basCompany.vatRegno': function (value) {//纳税人登记号
    //      return this.Validator.value(value).required().maxLength(200);
    //   },
    //   'basCompany.regtime': function (value) {//成立日期
    //      return this.Validator.value(value).required();
    //   },
    //   'basCompany.legalPersonIdnr': function (value) {//法人身份证号码
    //      return this.Validator.value(value).required().maxLength(50);
    //   },
    //   'basCompany.mgtDeptCode': function (value) {//主管部门代码
    //      return this.Validator.value(value).required().maxLength(50);
    //   },
    //   'basCompany.mgtDeptName': function (value) {//主管部门名称
    //      return this.Validator.value(value).required().maxLength(50);
    //   },
    //   'basCompany.legalPersonType': function (value) {//纳税人类别
    //      return this.Validator.value(value).required().maxLength(50);
    //   },
    //   'basCompany.businessAddress': function (value) {//营业地址
    //      return this.Validator.value(value).required().maxLength(200);
    //   },
    //   'dateRange': function (value) {//营业或有效期限
    //      return this.Validator.value(value).required();
    //   },
    //   'basCompany.introduction': function (value) {//公司简介
    //      return this.Validator.value(value).required().maxLength(200);
    //   },
    //   'basCompany.contactAddress': function (value) {//通讯地址
    //      return this.Validator.value(value).required().maxLength(200);
    //   },
    //   'basCompany.zipCode': function (value) {//邮政编码
    //      return this.Validator.value(value).required().maxLength(20);
    //   },
    //   'basCompany.contact': function (value) {//联系人
    //      return this.Validator.value(value).required().maxLength(50);
    //   },
    //   'basCompany.fax': function (value) {//传真
    //      return this.Validator.value(value).required().maxLength(50);
    //   },
    //   'basCompany.phone': function (value) {//电话
    //      return this.Validator.value(value).required().integer();
    //   },
    //   'basCompany.email': function (value) {//email
    //      return this.Validator.value(value).required().maxLength(50);
    //   },
    //   'basCompany.webUrl': function (value) {//web网址
    //      return this.Validator.value(value).required().maxLength(200);
    //   },
    //   'basCompany.remark': function (value) {//备注
    //      return this.Validator.value(value).required().maxLength(200);
    //   },
    },
    computed:{
        count () {
            return this.ischeck;
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
                _this.change_ouType()
                // _this.basOuTypes=res.result.ouTypes;
             
                if(res.result.basCompany){
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
                    _this.dateRange=[res.result.basCompany.businessStart,res.result.basCompany.businessEnd]
                }else{
                    _this.basCompany={}
                }
                _this.auditInfo={
                    createdBy:res.result.createdBy,
                    createdTime:res.result.createdTime,
                    modifiedBy:res.result.modifiedBy,
                    modifiedTime:res.result.modifiedTime,
                }
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
        filterNode(value, data) {
            if (!value) return true;
            return data.ouFullname.indexOf(value) !== -1;
        },
        loadTree(){
            let _this=this;
            _this.treeLoading=true;
            _this.$axios.gets('/api/services/app/OuManagement/GetAllTree')
            .then(function(res){
                _this.selectTree=res.result;
                _this.loadIcon();
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
            // _this.item_ou.ouFullname=data.ouFullname;
            // _this.$nextTick(function(){
            //     $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').click();
            // })
            $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').each(function(index){
                if($(this).attr('date')==data.id){
                    $(this).click()
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
            _this.update=true;
            _this.basCompany.ouParentid='';
        },
        Update(){//修改
            if(this.isEdit==true){
                this.isEdit=!this.isEdit;
            } 
        },
        isUpdate(){//判断是否修改过信息
            this.update=true;
        },
        Cancel(){
            if(this.isEdit==false){
                this.isEdit=!this.isEdit;
                this.validation.reset();
                this.getData();
            }
        },
        save(){
            let _this=this;
            // console.log(_this.addData)
            if(_this.update){
                _this.$validate()
                .then(function (success) {
                    if (success) {
                        if(_this.Company){
                            _this.basCompany.businessStart=_this.dateRange[0];
                            _this.basCompany.businessEnd=_this.dateRange[1];
                            _this.addData.basCompany=_this.basCompany;
                        }else{
                            _this.basCompany={}
                        }
                        _this.$axios.puts('/api/services/app/OuManagement/Update',_this.addData).then(function(res){
                            _this.update=false;
                            _this.isEdit=true;
                            _this.open('保存成功','el-icon-circle-check','successERP');
                        },function(res){
                            _this.open('保存失败','el-icon-error','faildERP');
                        })
                    }
                });     
            }else{
                _this.open('没有需要保存的项目','el-icon-warning','noticERP');
            }
        },
        saveAdd(){
            //  let _this=this;
            // _this.$validate()
            // .then(function (success) {
            //     if (success) {
            //         _this.$axios.puts('/api/services/app/OuManagement/Update',_this.addData).then(function(res){
            //             _this.clearData();
            //             _this.open('保存新增成功','el-icon-circle-check','successERP');
            //         },function(res){
            //             _this.open('保存新增失败','el-icon-error','faildERP');
            //         })
            //     }
            // });     
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
                basOuTypes: [],//组织职能
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
  .OuModifyForm{
      font-family: 'microsoft yahei';
  }

.OuModifyForm .bgcolor.longWidth{
    width: 100%;
    height:auto;
 }
.OuModifyForm .bgcolor.longWidth .el-textarea{
    width: 423px;
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
      padding:5px 0;
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
  
