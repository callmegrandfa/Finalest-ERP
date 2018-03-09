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

            <button class="erp_bt bt_save" @click="saveModify">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_save.png">
                </div>
                <span class="btDetail">保存</span>
            </button>

            <button class="erp_bt bt_look">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_look.png">
                </div>
                <span class="btDetail">审核</span>
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
                <div class="tipsWrapper" name="contact">
                    <div class="errorTips" :class="{block : !validation.hasError('customerData.contact')}">
                        <p class="msgDetail">错误提示：{{ validation.firstError('customerData.contact') }}</p>
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

                <div class="bgcolor">
                    <label>所属组织</label>
                    <el-select v-model="customerData.ouId"
                               placeholder=""
                               class="ouId"
                               @change='Modify()'
                               :class="{redBorder : validation.hasError('customerData.ouId')}"
                               @focus="showErrprTipsSelect">
                        <el-option v-for="item in organization" 
                                   :key="item.valueOrganization" 
                                   :label="item.label" 
                                   :value="item.valueOrganization"></el-option>
                    </el-select>
                </div> 


                <div class="bgcolor">
                    <label>编码</label>
                    <el-input v-model="customerData.contact" 
                              placeholder="" 
                              @focus="showErrprTips"
                              :class="{redBorder : validation.hasError('customerData.contact')}"
                              class="contact"
                              @change='Modify()'></el-input>
                </div>


                <div class="bgcolor">
                    <label>名称</label>
                    <el-input v-model="customerData.contactName" 
                              placeholder="" 
                              @focus="showErrprTips"
                              :class="{redBorder : validation.hasError('customerData.contactName')}"
                              class="contact"
                              @change='Modify()'></el-input>
                </div>


                <div class="bgcolor">
                    <label>全称</label>
                    <el-input v-model="customerData.contactFullName" 
                              placeholder=""
                              @focus="showErrprTips"
                              :class="{redBorder : validation.hasError('customerData.contactFullName')}"
                              class="contactFullName" 
                              @change='Modify()'></el-input>
                </div>

                <div class="bgcolor">
                    <label>助记码</label>
                    <el-input v-model="customerData.mnemonic" 
                              placeholder="" 
                              @focus="showErrprTips"
                              :class="{redBorder : validation.hasError('customerData.mnemonic')}"
                              class="mnemonic"
                              @change='Modify()'></el-input>
                </div>
                    


                <div class="bgcolor">
                    <label>客户分类</label>
                    <el-select v-model="customerData.contactClassId"
                               placeholder=""
                               class="contactClassId"
                               :class="{redBorder : validation.hasError('customerData.contactClassId')}"
                               @focus="showErrprTipsSelect">
                        <el-option v-for="item in customerType" 
                                   :key="item.valueCustomerType" 
                                   :label="item.label" 
                                   :value="item.valueCustomerType"></el-option>
                    </el-select>
                </div>
                
                
                
                <div class="bgcolor">
                    <label>客户性质</label>
                    <el-select v-model="customerData.contactWorkPropertyId"
                               placeholder=""
                               class="contactWorkPropertyId"
                               :class="{redBorder : validation.hasError('customerData.contactWorkPropertyId')}"
                               @focus="showErrprTipsSelect">
                        <el-option v-for="item in customerNature" 
                                   :key="item.valueNature" 
                                   :label="item.label" 
                                   :value="item.valueNature"></el-option>
                    </el-select>
                </div>

                <div class="bgcolor">
                    <label>客户等级</label>
                    <el-select v-model="customerData.contactGradeId"
                               placeholder=""
                               class="contactGradeId"
                               :class="{redBorder : validation.hasError('customerData.contactGradeId')}"
                               @focus="showErrprTipsSelect">
                        <el-option v-for="item in customerGrade" 
                                   :key="item.valueGrade" 
                                   :label="item.label" 
                                   :value="item.valueGrade"></el-option>
                    </el-select>
                </div>

                <div class="bgcolor">
                    <label>客户类型</label>
                    <el-select v-model="customerData.isCustomer"
                               placeholder=""
                               class="isCustomer"
                               :class="{redBorder : validation.hasError('customerData.isCustomer')}"
                               @focus="showErrprTipsSelect">
                        <el-option v-for="item in sort" 
                                   :key="item.valueSort" 
                                   :label="item.label" 
                                   :value="item.valueSort"></el-option>
                    </el-select>
                </div>   

                <div class="bgcolor">
                    <label>对应财务组织</label>
                    <el-select v-model="customerData.ficaOuId"
                               placeholder=""
                               class="ficaOuId"
                               :class="{redBorder : validation.hasError('customerData.ficaOuId')}"
                               @focus="showErrprTipsSelect">
                        <el-option v-for="item in ficaOu" 
                                   :key="item.valueFinance" 
                                   :label="item.label" 
                                   :value="item.valueFinance"></el-option>
                    </el-select>
                </div>

                <div class="bgcolor">
                    <label>纳税登记号</label>
                    <el-input v-model="customerData.taxCode" 
                              placeholder="" 
                              @focus="showErrprTips"
                              class="taxCode"
                              :class="{redBorder : validation.hasError('customerData.taxCode')}"
                              @change='Modify()'></el-input>
                </div>

                <div class="bgcolor">
                    <label>业务地区区号</label>
                    <el-select v-model="customerData.opAreaId"
                               class="opAreaId"
                               placeholder=""
                               :class="{redBorder : validation.hasError('customerData.opAreaId')}"
                               @focus="showErrprTipsSelect">
                        <el-option v-for="item in opArea" 
                                   :key="item.valueAreaBusiness" 
                                   :label="item.label" 
                                   :value="item.valueAreaBusiness"></el-option>
                    </el-select>
                </div>

                <div class="bgcolor">
                    <label>国家/地区</label>
                    <el-select placeholder="" v-model="ctest">
                        <el-option v-for="item in country" :key="item.valueCountry" :label="item.label" :value="item.valueCountry"></el-option>
                    </el-select>
                </div>

                <div class="bgcolor">
                    <label>行政地区</label>
                    <el-select v-model="customerData.adAreaId"
                               placeholder=""
                               :class="{redBorder : validation.hasError('customerData.adAreaId')}"
                               @focus="showErrprTipsSelect">
                        <el-option v-for="item in adArea" 
                                   :key="item.adArea" 
                                   :label="item.label" 
                                   :value="item.adArea"></el-option>
                    </el-select>
                </div>

                <div class="bgcolor">
                    <label>法人代表</label>
                    <el-input v-model="customerData.legalPerson" 
                              placeholder="" 
                              class="legalPerson"
                              :class="{redBorder : validation.hasError('customerData.legalPerson')}"
                              @focus="showErrprTips"
                              @change='Modify()'></el-input>
                </div>

                <div class="bgcolor">
                    <label>注册地址</label>
                    <el-input v-model="customerData.regAddress" 
                              placeholder="" 
                              class="regAddress"
                              :class="{redBorder : validation.hasError('customerData.regAddress')}"
                              @focus="showErrprTips"
                              @change='Modify()'></el-input>
                </div>

                <div class="bgcolor">
                    <label>负责人</label>
                    <el-input v-model="customerData.manager" 
                              placeholder="" 
                              class="manager"
                              :class="{redBorder : validation.hasError('customerData.manager')}"
                              @focus="showErrprTips"
                              @change='Modify()'></el-input>
                </div>

                <div class="bgcolor">
                    <label>电话</label>
                    <el-input v-model="customerData.phone" 
                              placeholder="" 
                              class="phone"
                              :class="{redBorder : validation.hasError('customerData.phone')}"
                              @focus="showErrprTips"
                              @change='Modify()'></el-input>
                </div>
                
                <div class="bgcolor">
                    <label>备注</label>
                    <el-input v-model="customerData.remark" 
                              placeholder="" 
                              class="remark"
                              :class="{redBorder : validation.hasError('customerData.remark')}"
                              @focus="showErrprTips"
                              @change='Modify()'></el-input>
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
                        <button class="erp_bt bt_add" @click="addColbank">
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
                        
                
                        <el-table :data="bankData" stripe border style="width: 100%">
                            <el-table-column prop="settlementCurrencyId" label="结算币种" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.settlementCurrencyId" 
                                        type="text"    
                                        @click="handleBankChange(scope.$index,scope.row)"
                                        v-on:click="handleBankEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="accountNo" label="银行账号" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.accountNo" 
                                        type="text"    
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
                                        @click="handleBankChange(scope.$index,scope.row)"
                                        v-on:click="handleBankEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="ifDefault" label="默认">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="bankData[scope.$index].ifDefault"></el-checkbox>
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
                        <button class="erp_bt bt_add" @click="addColAddress">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_add.png">
                            </div>
                            <span class="btDetail">增行</span>
                        </button>

                        <button class="erp_bt bt_auxiliary">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_auxiliary.png">
                            </div>
                            <span class="btDetail">辅助功能</span>
                        </button>
                        
                
                        <el-table :data="addressData" stripe border style="width: 100%">
                            <el-table-column prop="addressType" label="地址类型" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.addressType" 
                                        type="text"    
                                        @click="handleAddressChange(scope.$index,scope.row)"
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                        <!-- <span>{{scope.row}}</span> -->
                                </template>
                            </el-table-column>

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
                    <el-tab-pane label="使用组织" name="organization" style="z-index:-1000">
                        <button class="erp_bt bt_add" @click="addColOu">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_add.png">
                            </div>
                            <span class="btDetail">增行</span>
                        </button>

                        <button class="erp_bt bt_auxiliary">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_auxiliary.png">
                            </div>
                            <span class="btDetail">辅助功能</span>
                        </button>
                        
                
                        <el-table :data="ouData" stripe border style="width: 100%">
                            <el-table-column type="selection"></el-table-column>

                            <el-table-column prop="" label="" width="180">
                                <template slot-scope="scope">
                                    <span>{{scope.$index+1}}</span>
                                </template>
                            </el-table-column>

                            <el-table-column prop="ouId" label="组织单元" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.ouId" 
                                        type="text"    
                                        @click="handleOuChange(scope.$index,scope.row)"  
                                        v-on:click="handleOuEdit(scope.$index,scope.row)"/> 
                                        <!-- <span>{{scope.row}}</span> -->
                                </template>
                            </el-table-column>

                            <el-table-column prop="transport_method_id" label="运输方式" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.transport_method_id" 
                                        type="text"    
                                        @click="handleOuChange(scope.$index,scope.row)"  
                                        v-on:click="handleOuEdit(scope.$index,scope.row)"/> 
                                        <!-- <span>{{addOuList}}</span> -->
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
                <el-input v-model="auditInformation.createName" placeholder="请录入创建人" disabled="disabled"></el-input>
            </div>

            <div class="bgcolor">
                <label>创建时间</label>
                <el-date-picker v-model="auditInformation.createTime" type="date" placeholder="选择创建时间" disabled="disabled"></el-date-picker>
            </div>

            <div class="bgcolor">
                <label>修改人</label>
                <el-input v-model="auditInformation.modifyName" placeholder="请录入修改人" disabled="disabled"></el-input>
            </div>

            <div class="bgcolor">
                <label>修改时间</label>
                <el-date-picker v-model="auditInformation.modifyTime" type="date" placeholder="选择修改时间" disabled="disabled"></el-date-picker>
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
    },
    data() {
        return{
            ifShow:true,
            ifModify:false,//判断主表是否修改过
            auditInformation:{//审计信息
                createName:"",
                createTime:"",
                modifyName:"",
                modifyTime:"",
                startTime:"",
                finishTime:"",
                finishName:"",
            },
            organization: [{//所属组织
                valueOrganization:'1',
                label: '恒康'
            }, {
                valueOrganization:'2',
                label: '恒大'
            }, {
                valueOrganization:'3',
                label: '361度'
            }],
            customerType:[{//客户类型
                valueCustomerType:'1',
                label: '客户类型1'
            }, {
                valueCustomerType:'2',
                label:'客户类型2' 
            }, {
                valueCustomerType:'3',
                label:'客户类型3' 
            }],
            customerNature:[{//客户性质
                valueNature:'1',
                label: '客户性质1'
            }, {
                valueNature:'2',
                label: '客户性质2'
            }, {
                valueNature:'3',
                label: '客户性质3'
            }],
            customerGrade:[{//客户等级
                valueGrade:'1',
                label: '客户等级1'
            }, {
                valueGrade:'2',
                label: '客户等级2'
            }, {
                valueGrade:'3',
                label: '客户等级3'
            }],
            sort:[{//客户类型
                valueSort:'1',
                label: '客户类型1'
            }, {
                valueSort:'2',
                label: '客户类型2'
            }, {
                valueSort:'3',
                label: '客户类型3'
            }],
            ficaOu :[{//对应财务组织
                valueFinance:'1',
                label: '财务组织1'
            }, {
                valueFinance:'2',
                label: '财务组织2'
            }, {
                valueFinance:'3',
                label: '财务组织3'
            }],
            opArea:[{//业务地区
                valueAreaBusiness:'1',
                label: '业务地区1'
            }, {
                valueAreaBusiness:'2',
                label: '业务地区2'
            }, {
                valueAreaBusiness:'3',
                label: '业务地区3'
            }],
            ctest:'1',
            country :[{//国家/地区
                valueCountry:'1',
                label: '选项1'
            }, {
                valueCountry:'2',
                label: '选项2'
            }, {
                valueCountry:'3',
                label: '选项3'
            }],
            adArea :[{//行政地区
                adArea:'1',
                label: '行政地区1'
            }, {
                adArea:'2',
                label: '行政地区2'
            }, {
                adArea:'3',
                label: '行政地区3'
            }],
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
        'customerData.contact': function (value) {//编码
            return this.Validator.value(value).required().maxLength(50);
        },
        'customerData.contactName': function (value) {//名称
            return this.Validator.value(value).required().maxLength(50);
        },
        'customerData.contactFullName': function (value) {//全称
            return this.Validator.value(value).required().maxLength(50);
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
    },
    methods:{
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
        //---获取数据--------------------------------------------
        loadData:function(){
            let self = this;
            if(self.$route.params.id!='default'){
                self.$destroy();
                //根据id获得的客户信息
                this.$axios.gets('/api/services/app/ContactManagement/Get',{id:self.$route.params.id}).then(function(res){
                    
                    self.customerData = res.result;
                    console.log(self.customerData);
                    self.createBankParams.contactId = self.$route.params.id;
                    self.createAddressParams.contactId = self.$route.params.id;
                    self.createOuParams.contactId = self.$route.params.id;
                    // console.log(self.createBankParams)
                })
                //获取所有的银行信息，也可以用groupid获取，
                this.$axios.gets('/api/services/app/ContactBankManagement/GetAll',{SkipCount:'0',MaxResultCount:'100'}).then(function(res){
                    // console.log(res);
                    self.bankData = res.result.items;
                })

                //获取所有的地址信息，也可以用contactId获取
                this.$axios.gets('/api/services/app/ContactAddressManagement/GetAll',{SkipCount:'0',MaxResultCount:'100'}).then(function(res){
                    console.log(res);
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
                        console.log(res);
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
                        console.log(res);
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
                        console.log(res);
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
                        console.log(res)
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
                        console.log(res)
                    }),function(res){
                        self.open('创建组织信息失败','el-icon-error','faildERP');
                    };
                }
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
                        console.log(flag) 
                    }else{
                        flag= false;
                        break;        
                    }
                }
            };

            if(flag){
                self.updataBankList.push(row);
                console.log(self.updataBankList)
            }
        },
        handleSelectionChange:function(val){//点击复选框选中的数据
                this.multipleSelection = val;
        },
        handleBankDelete:function(index,row){//银行表格内删除操作
            let self = this;
            this.bankData.splice(index,1);
            self.addBankList.splice(index,1);
            this.$axios.deletes('/api/services/app/ContactBankManagement/Delete',{id:row.id}).then(function(res){
                console.log(res);
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
                        console.log(flag) 
                    }else{
                        flag= false;
                        break;        
                    }
                }
            };

            if(flag){
                self.updataAddressList.push(row);
                console.log(self.updataAddressList)
            }
        },
        handleAddressDelete:function(index,row){//地址表格内删除操作
            let self = this;
            this.addressData.splice(index,1);
            this.addAddressList.splice(index,1)
            this.$axios.deletes('/api/services/app/ContactAddressManagement/Delete',{id:row.id}).then(function(res){
                console.log(res);
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
                        console.log(flag) 
                    }else{
                        flag= false;
                        break;        
                    }
                }
            };

            if(flag){
                self.updataOuList.push(row);
                console.log(self.updataOuList)
            }
        },
        handleOuDelete:function(index,row){//组织表格内删除操作
            let self = this;
            this.ouData.splice(index,1);
            this.addOuList.splice(index,1)
            this.$axios.deletes('/api/services/app/ContactOuManagement/Delete',{id:row.id}).then(function(res){
                console.log(res);
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
.input-need{
    border:none;
    outline: none;
    width: 100%;
    height: 23px;
    line-height: 23px;
    text-align: center
}
.input-bgw{
    background: white;
    text-align: center;
}
.input-bgp{
    background: #FAFAFA;
    text-align: center;
}
  </style>
  
