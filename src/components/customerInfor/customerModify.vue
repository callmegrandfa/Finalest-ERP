<template>
 <div class="customerBasicForm">
     <el-row class="fixed">
         <el-col :span="24" >
            <button class="erp_bt bt_back" @click="back">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_back.png">
                </div>
                <span class="btDetail">返回</span>
            </button>

            <button class="erp_bt bt_save" @click="saveModify" v-show='!isEdit'>
                <div class="btImg">
                    <img src="../../../static/image/common/bt_save.png">
                </div>
                <span class="btDetail">保存</span>
            </button>

            <button @click="Cancel()" class="erp_bt bt_cancel">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_cancel.png">
                </div>
                <span class="btDetail">取消</span>
            </button>

            <button @click="Update()" class="erp_bt bt_modify">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_modify.png">
                </div>
                <span class="btDetail">修改</span>
            </button>
            
            <span @click="ifShow = !ifShow" class="upBt">收起<i class="el-icon-arrow-down" @click="ifShow = !ifShow" :class="{rotate : !ifShow}"></i></span>
        </el-col>
    </el-row>
 <el-collapse-transition>
     <div v-show="ifShow">   
        <el-row>
            <el-col :span="24" class="getPadding"> 
                <div class="tipsWrapper" name="ouId">
                    <div class="errorTips" :class="{block : !validation.hasError('customerData.ouId')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('customerData.ouId') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="contactCode">
                    <div class="errorTips" :class="{block : !validation.hasError('customerData.contactCode')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('customerData.contactCode') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="contactName">
                    <div class="errorTips" :class="{block : !validation.hasError('customerData.contactName')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('customerData.contactName') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="contactFullName">
                    <div class="errorTips" :class="{block : !validation.hasError('customerData.contactFullName')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('customerData.contactFullName') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="mnemonic">
                    <div class="errorTips" :class="{block : !validation.hasError('customerData.mnemonic')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('customerData.mnemonic') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="contactClassId">
                    <div class="errorTips" :class="{block : !validation.hasError('customerData.contactClassId')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('customerData.contactClassId') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="contactWorkPropertyId">
                    <div class="errorTips" :class="{block : !validation.hasError('customerData.contactWorkPropertyId')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('customerData.contactWorkPropertyId') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="contactGradeId">
                    <div class="errorTips" :class="{block : !validation.hasError('customerData.contactGradeId')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('customerData.contactGradeId') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="isCustomer">
                    <div class="errorTips" :class="{block : !validation.hasError('customerData.isCustomer')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('customerData.isCustomer') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="ficaOuId">
                    <div class="errorTips" :class="{block : !validation.hasError('customerData.ficaOuId')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('customerData.ficaOuId') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="taxCode">
                    <div class="errorTips" :class="{block : !validation.hasError('customerData.taxCode')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('customerData.taxCode') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="opAreaId">
                    <div class="errorTips" :class="{block : !validation.hasError('customerData.opAreaId')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('customerData.opAreaId') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="adAreaId">
                    <div class="errorTips" :class="{block : !validation.hasError('customerData.adAreaId')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('customerData.adAreaId') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="legalPerson">
                    <div class="errorTips" :class="{block : !validation.hasError('customerData.legalPerson')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('customerData.legalPerson') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="regAddress">
                    <div class="errorTips" :class="{block : !validation.hasError('customerData.regAddress')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('customerData.regAddress') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="manager">
                    <div class="errorTips" :class="{block : !validation.hasError('customerData.manager')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('customerData.manager') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="phone">
                    <div class="errorTips" :class="{block : !validation.hasError('customerData.phone')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('customerData.phone') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="remark">
                    <div class="errorTips" :class="{block : !validation.hasError('customerData.remark')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('customerData.remark') }}</p>
                    </div>
                </div>
                <div class="tipsWrapper" name="status">
                    <div class="errorTips" :class="{block : !validation.hasError('customerData.status')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('customerData.status') }}</p>
                    </div>
                </div>

                <div class="bgcolor">
                    <label><small>*</small>所属组织</label>
                    <el-select v-model="customerData.ouId"
                               placeholder=""
                               class="ouId"
                               :disabled="isEdit"
                               @change='Modify()'
                               :class="{redBorder : validation.hasError('customerData.ouId')}">

                        <el-input placeholder="搜索..."
                                      class="selectSearch"
                                      v-model="ouSearch"></el-input>  

                        <el-tree oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                                     :data="ouAr"
                                     :props="selectOuProps"
                                     node-key="id"
                                     default-expand-all
                                     ref="tree"
                                     :filter-node-method="filterNode"
                                     :expand-on-click-node="false"
                                     @node-click="ouNodeClick"></el-tree> 

                        <el-option v-show="false"
                                    :key="countOu.id" 
                                    :label="countOu.ouFullname" 
                                    :value="countOu.id"
                                    id="ou_confirmSelect"></el-option>
                    </el-select>
                </div> 


                <div class="bgcolor">
                    <label><small>*</small>编码</label>
                    <el-input v-model="customerData.contactCode" 
                              placeholder="" 
                              :disabled="isEdit"
                              :class="{redBorder : validation.hasError('customerData.contactCode')}"
                              class="contactCode"
                              @change='Modify()'></el-input>
                </div>


                <div class="bgcolor">
                    <label><small>*</small>名称</label>
                    <el-input v-model="customerData.contactName" 
                              placeholder=""
                              :disabled="isEdit"
                              :class="{redBorder : validation.hasError('customerData.contactName')}"
                              class="contact"
                              @change='Modify()'></el-input>
                </div>


                <div class="bgcolor">
                    <label><small>*</small>全称</label>
                    <el-input v-model="customerData.contactFullName" 
                              placeholder=""
                              :disabled="isEdit"
                              :class="{redBorder : validation.hasError('customerData.contactFullName')}"
                              class="contactFullName" 
                              @change='Modify()'></el-input>
                </div>

                <div class="bgcolor">
                    <label>助记码</label>
                    <el-input v-model="customerData.mnemonic" 
                              placeholder=""
                              :disabled="isEdit"
                              :class="{redBorder : validation.hasError('customerData.mnemonic')}"
                              class="mnemonic"
                              @change='Modify()'></el-input>
                </div>
                    


                <div class="bgcolor">
                    <label>客户分类</label>
                    <el-select v-model="customerData.contactClassId"
                               placeholder=""
                               :disabled="isEdit"
                               @change='Modify()'
                               class="contactClassId"
                               :class="{redBorder : validation.hasError('customerData.contactClassId')}">
                        <el-input placeholder="搜索..."
                                      class="selectSearch"
                                      v-model="cuSearch"></el-input>

                        <el-tree oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                                     :data="cuAr"
                                     :props="selectCuProps"
                                     node-key="id"
                                     default-expand-all
                                     ref="tree"
                                     :filter-node-method="filterNode"
                                     :expand-on-click-node="false"
                                     @node-click="cuNodeClick"></el-tree>

                        <el-option v-show="false"
                                    :key="countCu.id" 
                                    :label="countCu.cuFullname" 
                                    :value="countCu.id"
                                    id="cu_confirmSelect"></el-option>
                    </el-select>
                </div>
                
                
                
                <div class="bgcolor">
                    <label>客户性质</label>
                    <el-select v-model="customerData.contactWorkPropertyId"
                               placeholder=""
                               :disabled="isEdit"
                               @change='Modify()'
                               class="contactWorkPropertyId"
                               :class="{redBorder : validation.hasError('customerData.contactWorkPropertyId')}">
                        <el-option v-for="item in propertyAr" 
                                   :key="item.itemValue" 
                                   :label="item.itemName" 
                                   :value="item.itemValue"></el-option>
                    </el-select>
                </div>

                <div class="bgcolor">
                    <label>客户等级</label>
                    <el-select v-model="customerData.contactGradeId"
                               placeholder=""
                               :disabled="isEdit"
                               @change='Modify()'
                               class="contactGradeId"
                               :class="{redBorder : validation.hasError('customerData.contactGradeId')}">
                        <el-option v-for="item in gradeAr" 
                                   :key="item.itemValue" 
                                   :label="item.itemName" 
                                   :value="item.itemValue"></el-option>
                    </el-select>
                </div>

                <div class="bgcolor">
                    <label>客户类型</label>
                    <el-select v-model="customerData.contactTypeId"
                               placeholder=""
                               :disabled="isEdit"
                               @change='Modify()'
                               class="contactTypeId"
                               :class="{redBorder : validation.hasError('customerData.contactTypeId')}">
                        <el-option v-for="item in typeAr" 
                                   :key="item.itemValue" 
                                   :label="item.itemName" 
                                   :value="item.itemValue"></el-option>
                    </el-select>
                </div>   

                <div class="bgcolor">
                    <label>对应财务组织</label>
                    <el-select v-model="customerData.ficaOuId"
                               placeholder=""
                               :disabled="isEdit"
                               class="ficaOuId"
                               @change='Modify()'
                               :class="{redBorder : validation.hasError('customerData.ficaOuId')}">
                        <el-input placeholder="搜索..."
                                      class="selectSearch"
                                      v-model="fiSearch"></el-input>
                        <el-tree oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                                     :data="fiAr"
                                     :props="selectFiProps"
                                     node-key="id"
                                     default-expand-all
                                     ref="tree"
                                     :filter-node-method="filterNode"
                                     :expand-on-click-node="false"
                                     @node-click="fiNodeClick"></el-tree>
                        <el-option v-show="false"
                                    :key="countFi.id" 
                                    :label="countFi.fiFullname" 
                                    :value="countFi.id"
                                    id="fi_confirmSelect"></el-option>
                    </el-select>
                </div>

                <div class="bgcolor">
                    <label>纳税登记号</label>
                    <el-input v-model="customerData.taxCode" 
                              placeholder=""
                              :disabled="isEdit"
                              class="taxCode"
                              :class="{redBorder : validation.hasError('customerData.taxCode')}"
                              @change='Modify()'></el-input>
                </div>

                <div class="bgcolor">
                    <label>业务地区</label>
                    <el-select v-model="customerData.opAreaId"
                               class="opAreaId"
                               :disabled="isEdit"
                               placeholder=""
                               @change='Modify()'
                               :class="{redBorder : validation.hasError('customerData.opAreaId')}">
                        <el-input placeholder="搜索..."
                                class="selectSearch"
                                v-model="opSearch"></el-input>
                        <el-tree oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                                     :data="opAr"
                                     :props="selectOpProps"
                                     node-key="id"
                                     default-expand-all
                                     ref="tree"
                                     :filter-node-method="filterNode"
                                     :expand-on-click-node="false"
                                     @node-click="opNodeClick"></el-tree>
                        <el-option v-show="false"
                                       :key="countOp.id" 
                                       :label="countOp.areaName" 
                                       :value="countOp.id"
                                       id="op_confirmSelect"></el-option>
                    </el-select>
                </div>

                <div class="bgcolor">
                    <label>行政地区</label>
                    <el-select v-model="customerData.adAreaId"
                               placeholder=""
                               :disabled="isEdit"
                               @change='Modify()'
                               class="adAreaId"
                               :class="{redBorder : validation.hasError('customerData.adAreaId')}">
                        <el-input placeholder=""
                                      class="selectSearch"
                                      v-model="adSearch"></el-input>
                        
                        <el-tree oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                                     :data="adAr"
                                     :props="selectAdProps"
                                     node-key="id"
                                     default-expand-all
                                     ref="tree"
                                     :filter-node-method="filterNode"
                                     :expand-on-click-node="false"
                                     @node-click="adNodeClick"></el-tree>
                        <el-option v-show="false"
                                   :key="countAd.id" 
                                   :label="countAd.areaName" 
                                   :value="countAd.id"
                                   id="ad_confirmSelect"></el-option>
                    </el-select>
                </div>

                <div class="bgcolor">
                    <label>法人代表</label>
                    <el-input v-model="customerData.legalPerson" 
                              placeholder=""
                              :disabled="isEdit" 
                              class="legalPerson"
                              :class="{redBorder : validation.hasError('customerData.legalPerson')}"
                              @change='Modify()'></el-input>
                </div>

                <div class="bgcolor">
                    <label>注册地址</label>
                    <el-input v-model="customerData.regAddress" 
                              placeholder=""
                              :disabled="isEdit" 
                              class="regAddress"
                              :class="{redBorder : validation.hasError('customerData.regAddress')}"
                              @change='Modify()'></el-input>
                </div>

                <div class="bgcolor">
                    <label>负责人</label>
                    <el-input v-model="customerData.manager" 
                              placeholder=""
                              :disabled="isEdit" 
                              class="manager"
                              :class="{redBorder : validation.hasError('customerData.manager')}"
                              @change='Modify()'></el-input>
                </div>

                <div class="bgcolor">
                    <label>电话</label>
                    <el-input v-model="customerData.phone" 
                              placeholder=""
                              :disabled="isEdit" 
                              class="phone"
                              :class="{redBorder : validation.hasError('customerData.phone')}"
                              @change='Modify()'></el-input>
                </div>
                
                <div class="bgcolor">
                    <label>备注</label>
                    <el-input v-model="customerData.remark" 
                              placeholder=""
                              :disabled="isEdit" 
                              class="remark"
                              :class="{redBorder : validation.hasError('customerData.remark')}"
                              @change='Modify()'></el-input>
                </div>

                <div class="bgcolor">
                    <label><small>*</small>状态</label>
                    <el-select v-model="customerData.status"
                               class="status"
                               placeholder=""
                               @change='Modify()'
                               :disabled="isEdit" 
                               :class="{redBorder : validation.hasError('customerData.status')}">
                        <el-option v-for="item in statusAr"  
                                   :key="item.itemValue" 
                                   :label="item.itemName" 
                                   :value="item.itemValue"></el-option>
                    </el-select>
                </div>
            </el-col>
        </el-row>
     </div>
 </el-collapse-transition>     
<el-row>
    <el-col :span="2" :offset="1"><el-checkbox v-model="supplier">同为供应商</el-checkbox></el-col>
    <el-col :span="2"><el-checkbox v-model="customerData.creditMgt">信用管理</el-checkbox></el-col>   
</el-row>

    <!-- 公司业务财务bootTab标签页 -->
    <el-row class="nopadding"> 
        <div class="tabZoo">
            <el-col :span="24">
               <el-tabs v-model="activeName">
                    <el-tab-pane label="银行信息" name="bank" class="getPadding" style="z-index:-10">
                        <button class="erp_bt bt_add" @click="addColbank" v-show='!isEdit'>
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_add.png">
                            </div>
                            <span class="btDetail">增行</span>
                        </button>

                        <button class="erp_bt bt_auxiliary mb10">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_auxiliary.png">
                            </div>
                            <span class="btDetail">辅助功能</span>
                        </button>
                        
                
                        <el-table :data="bankData" stripe border style="width: 100%" election-change="handleSelectionChange" class="all-table">
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="settlementCurrencyId" label="结算币种" width="180">
                                <template slot-scope="scope">
                                    <el-select  v-model="scope.row.settlementCurrencyId" :disabled="isEdit" :class="[scope.$index%2==0?'bgw':'bgp']">
                                        <el-option  v-for="item in curencyAr" :key="item.id" :label="item.currencyName" :value="item.id" >
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-table-column>

                            <el-table-column prop="accountNo" label="银行账号" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.accountNo" 
                                        type="text"    
                                        :disabled="isEdit"
                                        @click="handleBankChange(scope.$index,scope.row)"
                                        v-on:click="handleBankEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="accountName" label="银行账户" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.accountName" 
                                        type="text"    
                                        :disabled="isEdit"
                                        @click="handleBankChange(scope.$index,scope.row)"
                                        v-on:click="handleBankEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="openingBank" label="开户银行" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.openingBank" 
                                        type="text"    
                                        :disabled="isEdit"
                                        @click="handleBankChange(scope.$index,scope.row)"
                                        v-on:click="handleBankEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="contactPerson" label="联系人" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.contactPerson" 
                                        type="text"   
                                        :disabled="isEdit" 
                                        @click="handleBankChange(scope.$index,scope.row)"
                                        v-on:click="handleBankEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="phone" label="联系电话" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.phone" 
                                        type="text"    
                                        :disabled="isEdit"
                                        @click="handleBankChange(scope.$index,scope.row)"
                                        v-on:click="handleBankEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="ifDefault" label="默认">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="bankData[scope.$index].ifDefault" :disabled="isEdit"></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column prop="ifDefault" label="默认">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="bankData[scope.$index].ifDefault" :disabled="isEdit"></el-checkbox>
                                </template>
                                <template scope="scope">
                                    <el-radio :label="scope.$index" v-model="radio" @change.native="getCurrentRow(scope.$index)"></el-radio>
                                </template>
                            </el-table-column>

                            <el-table-column label='操作'>
                                <template slot-scope="scope" >
                                    <el-button v-on:click="handleBankDelete(scope.$index,scope.row)" type="text" size="small">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>

                    <el-tab-pane label="送货地址" name="address" class="getPadding" style="z-index:-1000">
                        <button class="erp_bt bt_add" @click="addColAddress" v-show='!isEdit'>
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_add.png">
                            </div>
                            <span class="btDetail">增行</span>
                        </button>

                        <button class="erp_bt bt_auxiliary" style="margin-bottom:10px;">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_auxiliary.png">
                            </div>
                            <span class="btDetail">辅助功能</span>
                        </button>
                        
                
                        <el-table :data="addressData" stripe border style="width: 100%;" election-change="handleSelectionChange2" class="all-table">
                            <!-- <el-table-column prop="addressType" label="地址类型" width="180">
                                <template slot-scope="scope">
                                    <el-select  v-model="scope.row.addressType" :disabled="isEdit" :class="[scope.$index%2==0?'bgw':'bgp']">
                                        <el-option  v-for="item in addAr" :key="item.itemValue" :label="item.itemName" :value="item.itemValue" >
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-table-column> -->

                            <el-table-column prop="completeAddress" label="供货地址" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.completeAddress" 
                                        type="text"    
                                        @click="handleAddressChange(scope.$index,scope.row)"
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="completeAddress" label="省" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.completeAddress" 
                                        type="text"    
                                        @click="handleAddressChange(scope.$index,scope.row)"
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="id" label="市" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.id" 
                                        type="text"    
                                        @click="handleAddressChange(scope.$index,scope.row)"
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="phone" label="区" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.phone" 
                                        type="text"   
                                        @click="handleAddressChange(scope.$index,scope.row)" 
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="contactPerson" label="联系人" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.contactPerson" 
                                        type="text"    
                                        @click="handleAddressChange(scope.$index,scope.row)"
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="contactPerson" label="联系电话" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.phone" 
                                        type="text"    
                                        @click="handleAddressChange(scope.$index,scope.row)"
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="ifDefault" label="默认">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="addressData[scope.$index].ifDefault"></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column label='操作'>
                                <template slot-scope="scope" >
                                    <el-button v-on:click="handleAddressDelete(scope.$index,scope.row)" type="text" size="small">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="使用组织" name="organization" class="getPadding" style="z-index:-1000">
                        <button class="erp_bt bt_add" @click="addColOu" v-show='!isEdit'>
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_add.png">
                            </div>
                            <span class="btDetail">增行</span>
                        </button>

                        <button class="erp_bt bt_auxiliary" style="margin-bottom:10px;">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_auxiliary.png">
                            </div>
                            <span class="btDetail">辅助功能</span>
                        </button>
                        
                
                        <el-table :data="ouData" stripe border style="width: 100%" election-change="handleSelectionChange3" class="all-table">
                            <el-table-column type="selection"></el-table-column>

                            <el-table-column prop="ouId" label="业务组织" width="540">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.ouId" 
                                        type="text"    
                                        @click="handleOuChange(scope.$index,scope.row)"  
                                        v-on:click="handleOuEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="transport_method_id" label="运输方式" width="540">
                                <template slot-scope="scope">
                                    <el-select  v-model="scope.row.transport_method_id" :disabled="isEdit" :class="[scope.$index%2==0?'bgw':'bgp']">
                                        <el-option  v-for="item in tranAr" :key="item.itemValue" :label="item.itemName" :value="item.itemValue" >
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-table-column>

                            <el-table-column label='操作'>
                                <template slot-scope="scope" >
                                    <el-button v-on:click="handleOuDelete(scope.$index,scope.row)" type="text" size="small">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </div>
    </el-row>    
 <el-row>
    <el-col :span="22" class="auditInformation getPadding">
        <h4 class="h4">审计信息</h4>
        <div>
            <div class="bgcolor">
                <label>创建人</label>
                <el-input v-model="auditInformation.createName" placeholder="" disabled="disabled"></el-input>
            </div>

            <div class="bgcolor">
                <label>创建时间</label>
                <el-date-picker v-model="auditInformation.createTime" type="date" placeholder="" disabled="disabled"></el-date-picker>
            </div>

            <div class="bgcolor">
                <label>修改人</label>
                <el-input v-model="auditInformation.modifyName" placeholder="" disabled="disabled"></el-input>
            </div>

            <div class="bgcolor">
                <label>修改时间</label>
                <el-date-picker v-model="auditInformation.modifyTime" type="date" placeholder="" disabled="disabled"></el-date-picker>
            </div>
            <!-- <div class="bgcolor"><label>启用日期</label><el-date-picker v-model="auditInformation.startTime" type="date" placeholder="选择启用日期"></el-date-picker></div>
            <div class="bgcolor"><label>封存日期</label><el-date-picker v-model="auditInformation.finishTime" type="date" placeholder="选择封存日期"></el-date-picker></div>
            <div class="bgcolor"><label>封存人</label><el-input v-model="auditInformation.finishName" placeholder="请录入封存人"></el-input></div>     -->
        </div>                                  
    </el-col>
</el-row>                                                                       
</div>
</template>

<script>
export default({
    name:'customerModify',
    created:function(){
        let self = this;
        self.loadData();
        self.loadSelect();
    },
    data() {
        return{
            ifShow:true,radio:'',
            ifModify:false,//判断主表是否修改过
            isEdit:true,//判断是否要修改
            auditInformation:{//审计信息
                createName:"",
                createTime:"",
                modifyName:"",
                modifyTime:"",
                startTime:"",
                finishTime:"",
                finishName:"",
            },
            //---所属组织树形下拉-----
                ouSearch:'',
                selectOuProps:{
                    children: 'children',
                    label: 'ouFullname',
                    id:'id'
                },
                ouItem:{
                    id:'',
                    ouFullname:'',
                },
                ouAr:[],//所属组织下拉框
            //-----------------------

            //---客户分类树形下拉-----
                cuSearch:'',
                selectCuProps:{
                    children: 'childNodes',
                    label: 'classFullname',
                    id:'id'
                },
                cuItem:{
                    id:'',
                    cuFullname:'',
                },
                cuAr:[],//客户分类下拉框
            //-----------------------

            //---财务组织树形下拉-----
                fiSearch:'',
                selectFiProps:{
                    children: 'children',
                    label: 'ouFullname',
                    id:'id'
                },
                fiItem:{
                    id:'',
                    fiFullname:'',
                },
                fiAr:[],//财务组织下拉框
            //-----------------------

            //---行政地区树形下拉-----
                adSearch:'',//树形搜索框的
                selectAdProps:{
                    children: 'items',
                    label: 'areaName',
                    id:'id'
                },
                adItem:{
                    id:'',
                    areaName:'',
                },
                adAr:[],//行政地区下拉框
            //-----------------------
            //---业务地区树形下拉-----
                opSearch:'',//树形搜索框的
                selectOpProps:{
                    children: 'items',
                    label: 'areaName',
                    id:'id'
                },
                opItem:{
                    id:'',
                    areaName:'',
                },
                opAr:[],//业务地区下拉框
            //-----------------------
            //---普通下拉------------
            propertyAr:[],//客户性质下拉框
            gradeAr:[],//客户等级下拉框
            typeAr:[],//客户类型下拉框
            statusAr:[],//状态下拉框
            curencyAr:[],//币种下拉
            addAr:[],//地址类型下拉
            tranAr:[],//运输方式下拉
            //-----------------------
  
            activeName: 'bank',//tabs标签页默认激活name
            
            supplier:true,//同为供应商

            customerData:'',//根据id获得的客户信息
            bankData:[],//根据groupId获得银行信息
            addressData:[],//获取的所有地址信息/也可以根据contactId获得地址信息
            ouData:[],//

            updataBankList:[],//需要修改的银行信息
            updataAddressList:[],//需要修改的地址信息
            updataOuList:[],//需要修改的组织信息

            addBankList:[],//需要添加的银行信息
            addAddressList:[],//需要添加的地址信息
            addOuList:[],//需要添加的组织信息
            x:0,
            y:0,
            z:0,
            xrows:[],
            yrows:[],
            zrows:[],

            multipleSelection:[],//需要删除的银行数组
            multipleSelectionAdd:[],//需要删除的地址数组
            multipleSelectionOu:[],//需要删除的组织数组

            createBankParams:{//创建银行的参数
                "groupId": 1,
                "contactId":'',
                "settlementCurrencyId": '',
                "accountNo": "",
                "accountName": "",
                "openingBank": '',
                "contactPerson": '',
                "phone": '',
                "isDefault": true
            },
            createAddressParams:{//创建地址的参数
                "groupId": 1,
                "contactId": '',
                "addressType": '',
                "addressId": '3',
                "completeAddress": "",
                "contactPerson": "",
                "phone": "",
                "isDefault": true
            },
            createOuParams:{//创建组织参数
                "groupId": 1,
                "contactId": '',
                "ouId": '',
                "transport_method_id": '',
                "is_default": true
            },
        }
    },
    validators: {
        'customerData.ouId': function (value) {//所属组织
            return this.Validator.value(value).required().integer();
        },
        'customerData.contactCode': function (value) {//编码
            return this.Validator.value(value).required().maxLength(50);
        },
        'customerData.contactName': function (value) {//名称
            return this.Validator.value(value).required().maxLength(50);
        },
        'customerData.contactFullName': function (value) {//全称
            return this.Validator.value(value).maxLength(50);
        },
        'customerData.mnemonic': function (value) {//助记码
            return this.Validator.value(value).required().maxLength(50);
        },
        'customerData.contactClassId': function (value) {//客户分类
            return this.Validator.value(value).required().integer();
        },
        'customerData.contactWorkPropertyId': function (value) {//客户性质
            return this.Validator.value(value).required().integer();
        },
        'customerData.contactGradeId': function (value) {//客户等级
            return this.Validator.value(value).required().integer();
        },
        'customerData.isCustomer': function (value) {//客户类型
            return this.Validator.value(value).required().integer();
        },
        'customerData.ficaOuId': function (value) {//对应财务组织
            return this.Validator.value(value).required().integer();
        },
        'customerData.taxCode': function (value) {//纳税登记号 
            return this.Validator.value(value).required().maxLength(50);
        },
        'customerData.opAreaId': function (value) {//业务地区区号
            return this.Validator.value(value).required().integer();
        },
        'customerData.adAreaId': function (value) {//行政地区
            return this.Validator.value(value).required().integer();
        },
        'customerData.legalPerson': function (value) {//法人代表
            return this.Validator.value(value).required().maxLength(50);
        },
        'customerData.regAddress': function (value) {//注册地址
            return this.Validator.value(value).required().maxLength(50);
        },
        'customerData.manager': function (value) {//负责人
            return this.Validator.value(value).required().maxLength(50);
        },
        'customerData.phone': function (value) {//电话
            return this.Validator.value(value).required().maxLength(50);
        },
        'customerData.remark': function (value) {//备注
            return this.Validator.value(value).required().maxLength(200);
        },
        'customerData.status': function (value) {//状态
            return this.Validator.value(value).required().maxLength(200);
        },
    },
    computed:{
            countCu () {
                return this.cuItem;
            },
            countFi () {
                return this.fiItem;
            },
            countOu () {
                return this.ouItem;
            },
            countAd () {
                return this.adItem;
            },
            countOp () {
                return this.opItem;
            },
        }, 
    methods:{
        //---获取数据--------------------------------------------
        loadData:function(){
            let self = this;
            if(self.$route.params.id!='default'){
                //根据id获得的客户信息
                this.$axios.gets('/api/services/app/ContactManagement/Get',{id:self.$route.params.id}).then(function(res){
                    
                    self.customerData = res.result;
                    console.log(self.customerData);
                    self.createBankParams.contactId = self.$route.params.id;
                    self.createAddressParams.contactId = self.$route.params.id;
                    self.createOuParams.contactId = self.$route.params.id;
                    // console.log(self.createBankParams)

                    //加载完成拿回的下拉框的默认值
                    self.ouItem.ouFullname = self.customerData.ouId_OuName;
                    self.ouItem.id =  self.customerData.ouId;

                    self.cuItem.id = self.customerData.contactClassId;
                    self.cuItem.id = self.customerData.contactClassId_ClassName;

                    self.adItem.areaName = self.customerData.adAreaId_AreaName;
                    self.adItem.id = self.customerData.adAreaId;

                    self.opItem.areaName = self.customerData.opAreaId_AreaName;
                    self.opItem.id = self.customerData.opAreaId;

                    self.fiItem.fiFullname = self.customerData.ficaOuId_OuName;
                    self.fiItem.id = self.customerData.ficaOuId;
                })
                //获取所有的银行信息，也可以用groupid获取，
                this.$axios.gets('/api/services/app/ContactBankManagement/GetAll',{SkipCount:'0',MaxResultCount:'100'}).then(function(res){
                    // console.log(res);
                    self.bankData = res.result.items;
                })

                //获取所有的地址信息，也可以用contactId获取
                this.$axios.gets('/api/services/app/ContactAddressManagement/GetAll',{SkipCount:'0',MaxResultCount:'100'}).then(function(res){
                    // console.log(res);
                    self.addressData = res.result.items;
                })
                
                //获取所有的组织信息，也可以用contactId获取
                this.$axios.gets('/api/services/app/ContactOuManagement/GetAll',{SkipCount:'0',MaxResultCount:'100'}).then(function(res){
                    // console.log(res);
                    self.ouData = res.result.items;
                })

            }
        },
        //------------------------------------------------------
        //---下拉的数据------------------------------------------------------
            loadSelect:function(){
                let self = this;
                //客户分类
                self.$axios.gets('/api/services/app/ContactClassManagement/GetTreeList',{Ower:1}).then(function(res){
                    // console.log(res);
                    self.cuAr = res;
                    self.loadIcon();
                },function(res){
                    console.log('err'+res)
                });
                //所属组织
                self.$axios.gets('/api/services/app/OuManagement/GetAllTree',{AreaType:1}).then(function(res){
                    // console.log(res);
                    self.ouAr = res.result;
                    self.loadIcon();
                },function(res){
                    console.log('err'+res)
                });
                //对应财务组织
                self.$axios.gets('/api/services/app/OuManagement/GetTreeWithOuType',{ouType:3}).then(function(res){
                    // console.log(res);
                    self.fiAr = res.result;
                    self.loadIcon();
                },function(res){
                    console.log('err'+res)
                });
                //客户性质
                self.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'CustomerWorkProperty'}).then(function(res){
                    // console.log(res);
                    self.propertyAr = res.result;
                },function(res){
                    console.log('err'+res)
                });
                //客户等级
                self.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'CustomerGrade'}).then(function(res){
                    // console.log(res);
                    self.gradeAr = res.result;
                },function(res){
                    console.log('err'+res)
                });
                //客户类型
                self.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'CustomerType'}).then(function(res){
                    // console.log(res);
                    self.typeAr = res.result;
                },function(res){
                    console.log('err'+res)
                });
                //行政地区*2
                self.$axios.gets('/api/services/app/AreaManagement/GetAllDataTree',{AreaType:2}).then(function(res){
                    // console.log(res);
                    self.adAr = res.result;
                    self.loadIcon();
                },function(res){
                    console.log('err'+res)
                });
                //业务地区*1
                self.$axios.gets('/api/services/app/AreaManagement/GetAllDataTree',{AreaType:1}).then(function(res){
                    // console.log(res);
                    console.log(res)
                    self.opAr = res.result;
                    // self.opAr=[{
                    //     areaCode:null,areaFullName:null,areaFullPathId:null,areaFullPathName:null,areaName:"X 公司",areaParentId:0,areaType:0,groupId:0,id:0,items:[],manager:null,ouId:38,remark:null,status:0
                    // }]
                    self.loadIcon();
                },function(res){
                    console.log('err'+res)
                });
                //状态
                self.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status001'}).then(function(res){
                    // console.log(res);
                    self.statusAr = res.result;
                },function(res){
                    console.log('err'+res)
                });
                //币种
                self.$axios.gets('/api/services/app/CurrencyManagement/GetAll',{SkipCount:'0',MaxResultCount:'100'}).then(function(res){
                    // console.log(res);
                    self.curencyAr = res.result.items;
                },function(res){
                    console.log('err'+res)
                });
                //地址类型
                self.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'AddressType'}).then(function(res){
                    console.log(res);
                    self.addAr = res.result;
                },function(res){
                    console.log('err'+res)
                });
                //运输方式
                self.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'TransportMethod'}).then(function(res){
                    console.log(res);
                    self.tranAr = res.result;
                },function(res){
                    console.log('err'+res)
                });

            },
        //------------------------------------------------------------------

        //---树-------------------------------------------------------------
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
        filterNode(value, data) {
            // console.log(data)
            if (!value) return true;
                return data.areaName.indexOf(value) !== -1;
        },
        cuNodeClick:function(data){
            let self = this;
            self.cuItem.id = data.id;
            self.cuItem.cuFullname = data.classFullname;
            self.$nextTick(function(){
                $('#cu_confirmSelect').click()
            })
        },
        ouNodeClick:function(data){
            let self = this;
            self.ouItem.id = data.id;
            self.ouItem.ouFullname = data.ouFullname;
            self.$nextTick(function(){
                $('#ou_confirmSelect').click()
            })
        },
        fiNodeClick:function(data){
            let self = this;
            self.fiItem.id = data.id;
            self.fiItem.fiFullname = data.ouFullname;
            self.$nextTick(function(){
                $('#fi_confirmSelect').click()
            })
        },
        adNodeClick:function(data){
            let self = this;
            self.adItem.id = data.id;
            self.adItem.areaName = data.areaName;
            self.$nextTick(function(){
                $('#ad_confirmSelect').click()
            })
        },
        opNodeClick:function(data){
            let self = this;
            self.opItem.id = data.id;
            self.opItem.areaName = data.areaName;
            self.$nextTick(function(){
                $('#op_confirmSelect').click()
            })
        },
        //-----------------------------------------------------

        //---保存数据---------------------------------------------
        saveModify:function(){
            let self = this;
            if(self.ifModify){
                self.saveCustomerModify();
            }
            
            self.saveBankModify();
            self.saveAddressModify();
            self.saveOuModify();

            if(self.addBankList.length>0){
                self.createBank();
            };
            if(self.addAddressList.length>0){
                self.createAddress();
            };
            if(self.addOuList.length>0){
                self.createOu();
            }
            
        },
        saveCustomerModify:function(){//修改客户信息
            let self = this;

            this.$axios.puts('/api/services/app/ContactManagement/Update',self.customerData).then(function(res){
                self.open('修改客户信息成功','el-icon-circle-check','successERP');
                self.ifModify = false;
            }),function(res){
                self.open('修改失败','el-icon-error','faildERP');
            }
        },
        saveBankModify:function(){//修改银行资料
            let self = this;
            if(self.updataBankList.length>0){
                for(let i in self.updataBankList){
                    this.$axios.puts('/api/services/app/ContactBankManagement/Update',self.updataBankList[i]).then(function(res){
                        // console.log(res);
                        self.open('修改银行信息成功','el-icon-circle-check','successERP');
                        self.updataBankList = [];
                    }),function(res){
                        self.open('修改银行信息失败','el-icon-error','faildERP');
                    }
                }
            }
        },
        saveAddressModify:function(){//修改地址
            let self = this;
            if(self.updataAddressList.length>0){
                for(let i in self.updataAddressList){
                    this.$axios.puts('/api/services/app/ContactAddressManagement/Update',self.updataAddressList[i]).then(function(res){
                        // console.log(res);
                        self.open('修改地址信息成功','el-icon-circle-check','successERP');
                        self.updataAddressList = [];
                    }),function(res){
                        self.open('修改地址信息失败','el-icon-error','faildERP');
                    }
                }
            }
        },
        saveOuModify:function(){//修改组织
            let self = this;
            if(self.updataOuList.length>0){
                for(let i in self.updataOuList){
                    this.$axios.puts('/api/services/app/ContactOuManagement/Update',self.updataOuList[i]).then(function(res){
                        // console.log(res);
                        self.open('修改组织信息成功','el-icon-circle-check','successERP');
                        self.updataOuList = [];
                    }),function(res){
                        self.open('修改组织信息失败','el-icon-error','faildERP');
                    }
                }
            }
        },
        createBank:function(){//创建银行资料
            let self = this;

            if(self.addBankList.length>0){
                for(let i in self.addBankList){
                    this.$axios.posts('/api/services/app/ContactBankManagement/Create',self.addBankList[i]).then(function(res){         
                        self.open('创建银行资料成功','el-icon-circle-check','successERP');
                        // console.log(res)
                    }),function(res){
                        self.open('创建银行资料失败','el-icon-error','faildERP');
                    };
                }
            }
        },
        createAddress:function(){//创建地址资料
            let self = this;

            if(self.addAddressList.length>0){
                for(let i in self.addAddressList){
                    this.$axios.posts('/api/services/app/ContactAddressManagement/Create',self.addAddressList[i]).then(function(res){         
                        self.open('创建地址信息成功','el-icon-circle-check','successERP');
                        // console.log(res)
                    }),function(res){
                        self.open('创建地址信息失败','el-icon-error','faildERP');
                    };
                }
            }
        },
        createOu:function(){//创建组织资料
            let self = this;

            if(self.addOuList.length>0){
                for(let i in self.addOuList){
                    this.$axios.posts('/api/services/app/ContactOuManagement/Create',self.addOuList[i]).then(function(res){         
                        self.open('创建组织信息成功','el-icon-circle-check','successERP');
                        // console.log(res)
                    }),function(res){
                        self.open('创建组织信息失败','el-icon-error','faildERP');
                    };
                }
            }
        },
        //-------------------------------------------------------

        //---控制是否可编辑---------------------------------------
            Update(){//修改
                if(this.isEdit==true){
                    this.isEdit=!this.isEdit;
                }
            },        
            Cancel(){
                let self = this;
                if(self.isEdit==false){
                    self.isEdit=!self.isEdit;
                    self.loadData();
                }
            },
        //-------------------------------------------------------

        // ---控制表格编辑----------------------------------------
        Modify:function(){//判断主表是否修改过
            let self = this;
            self.ifModify = true;
        },
        handleBankEdit:function(index,row){//银行信息编辑
        
        },
        handleBankChange:function(index,row){
            let self = this;
            let flag = false;
            if(self.updataBankList.length==0){
                flag = true;
            }else if(self.updataBankList.length>=1){
                for(let i in self.updataBankList){
                    if(row.id != self.updataBankList[i].id){
                        flag = true;
                        // console.log(flag) 
                    }else{
                        flag= false;
                        break;        
                    }
                }
            };

            if(flag){
                self.updataBankList.push(row);
                // console.log(self.updataBankList)
            }
        },
        handleSelectionChange:function(val){//点击复选框选中的数据
                this.multipleSelection = val;
        },
        handleSelectionChange2:function(val){//点击复选框选中的数据
                this.multipleSelectionAdd = val;
        },
        handleSelectionChange3:function(val){//点击复选框选中的数据
                this.multipleSelectionOu = val;
        },
        handleBankDelete:function(index,row){//银行表格内删除操作
            let self = this;
            this.bankData.splice(index,1);
            self.addBankList.splice(index,1);
            this.$axios.deletes('/api/services/app/ContactBankManagement/Delete',{id:row.id}).then(function(res){
                // console.log(res);
                self.open('删除银行资料成功','el-icon-circle-check','successERP');
            }),function(res){
                self.open('删除银行资料失败','el-icon-error','faildERP');
            };
        },
        addColbank:function(){//银行增行
            let self = this;
                self.x++;
                let newCol = 'newCol'+self.x;
                self.xrows.newCol ={
                    "groupId": 1,
                    "contactId":self.createBankParams.contactId,
                    "settlementCurrencyId": '',
                    "accountNo": "",
                    "accountName": "",
                    "openingBank": '',
                    "contactPerson": '',
                    "phone": '',
                    "isDefault": true
                };
                self.bankData.unshift(self.xrows.newCol);
                self.addBankList.unshift(self.xrows.newCol)
        },

        handleAddressEdit:function(index,row){//地址信息编辑
            
        },
        handleAddressChange:function(index,row){
            let self = this;
            let flag = false;
            if(self.updataAddressList.length==0){
                flag = true;
            }else if(self.updataAddressList.length>=1){
                for(let i in self.updataAddressList){
                    if(row.id != self.updataAddressList[i].id){
                        flag = true;
                        // console.log(flag) 
                    }else{
                        flag= false;
                        break;        
                    }
                }
            };

            if(flag){
                self.updataAddressList.push(row);
                // console.log(self.updataAddressList)
            }
        },
        handleAddressDelete:function(index,row){//地址表格内删除操作
            let self = this;
            this.addressData.splice(index,1);
            this.addAddressList.splice(index,1)
            this.$axios.deletes('/api/services/app/ContactAddressManagement/Delete',{id:row.id}).then(function(res){
                // console.log(res);
                self.open('删除地址资料成功','el-icon-circle-check','successERP');
            }),function(res){
                self.open('删除地址资料失败','el-icon-error','faildERP');
            };
        },
        addColAddress:function(){//地址增行
            let self = this;
            self.y++;
            let newCol = 'newCol'+self.y;
            self.yrows.newCol ={
                "groupId": 1,
                "contactId": self.createAddressParams.contactId,
                "addressType": '',
                "addressId": '3',
                "completeAddress": "",
                "contactPerson": "",
                "phone": "",
                "isDefault": true
            };
            self.addressData.unshift(self.yrows.newCol)
            self.addAddressList.unshift(self.yrows.newCol)
        },


        handleOuEdit:function(index,row){//组织信息编辑
            
        },
        handleOuChange:function(index,row){
            let self = this;
            let flag = false;
            if(self.updataOuList.length==0){
                flag = true;
            }else if(self.updataOuList.length>=1){
                for(let i in self.updataOuList){
                    if(row.id != self.updataOuList[i].id){
                        flag = true;
                        // console.log(flag) 
                    }else{
                        flag= false;
                        break;        
                    }
                }
            };

            if(flag){
                self.updataOuList.push(row);
                // console.log(self.updataOuList)
            }
        },
        handleOuDelete:function(index,row){//组织表格内删除操作
            let self = this;
            this.ouData.splice(index,1);
            this.addOuList.splice(index,1)
            this.$axios.deletes('/api/services/app/ContactOuManagement/Delete',{id:row.id}).then(function(res){
                // console.log(res);
                self.open('删除地址资料成功','el-icon-circle-check','successERP');
            }),function(res){
                self.open('删除地址资料失败','el-icon-error','faildERP');
            };
        },
        addColOu:function(){//组织增行
            let self = this;
            self.z++;
            let newCol = 'newCol'+self.z;
            self.zrows.newCol ={
                "groupId": 1,
                "contactId": self.createOuParams.contactId,
                "ouId": '',
                "transport_method_id": '',
                "is_default": true
            };
            self.ouData.unshift(self.zrows.newCol)
            self.addOuList.unshift(self.zrows.newCol)
        },    
        getCurrentRow:function(){
            
        },
        //-----------------------------------------------------------

        //---路由------open------------------------------------------
        back(){//点击新增跳转
            this.$store.state.url='/customer/customerList/default'
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
        //------------------------------------------------------
        //---提示错误----------------------------------------------
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
        //-------------------------------------------------------------
        
    }
       

    })
  </script>

  <style>
  .customerBasicForm{
      font-family: 'microsoft yahei';
  }
 /*收起*/
 .customerBasicForm .upBt{
     font-size: 12px;
     float: right;
     margin-right: 10px;
     margin-top: 10px;
     cursor: pointer;
 }
 .customerBasicForm .upBt i{
    transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s; 
    color:#cacaca;
    margin-left: 5px;
 }
 .customerBasicForm .upBt i.rotate{
     transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);	
 }

.customerBasicForm  .errorTips{
    margin-bottom: 10px;
}  
.customerBasicForm .el-row:first-child{
      padding:5px 0;
}
  .customerBasicForm .el-row{
     padding:15px 0;
     border-bottom: 1px solid #e4e4e4;
     background-color: #fff;
  }
  .customerBasicForm .el-row:last-child{
      border-bottom:none;
  }

.customerBasicForm .tabZoo{
     overflow: hidden;
     background-color: #fff;
 }

 .customerBasicForm  .getPadding,.tabZoo .el-tabs__nav-scroll{
     padding: 0 10px;
 }
 .customerBasicForm .tabZoo .auditInformation{
     margin-top: 15px;
 }

.customerBasicForm .tabZoo .erp_bt:first-child{
    margin-left: 0;
}
.customerBasicForm .nopadding{
    padding-top: 0;
}
.customerBasicForm .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.customerBasicForm .el-table td{
    padding: 3px 0;
}
.customerBasicForm .el-table__body{
    text-align: center;
}
.customerBasicForm .el-table .cell{
    padding-left:0px;
    padding-right:0px;
}
.mb10{
    margin-bottom: 10px;
}
.input-bgw{
    background: white;
    text-align: center;
}
.input-bgp{
    background: #FAFAFA;
    text-align: center;
}

.customerBasicForm .el-input__inner{
    height:35px !important;
    border:1px solid white;
    /* border-color:white !important; */
}
.customerBasicForm .all-table .el-input__inner{
    height:35px !important;
    text-align: center !important;
    border:none !important;
}
.customerBasicForm .bgw .el-input__inner{
    background-color:white;
}
.customerBasicForm .bgg .el-input__inner{
    background-color:#FAFAFA;
}
.customerBasicForm .el-select-dropdown__item{
    text-align: center;
}
  </style>
  
