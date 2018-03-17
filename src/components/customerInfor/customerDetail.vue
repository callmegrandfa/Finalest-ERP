<template>
 <div class="customerBasicForm">
     <el-row>
         <el-col :span="24"  class="fixed bg-white bb1 pb5 pt5">
            <button class="erp_bt bt_back" @click="back">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_back.png">
                </div>
                <span class="btDetail">返回</span>
            </button>

            <button class="erp_bt bt_save" @click="save">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_save.png">
                </div>
                <span class="btDetail">保存</span>
            </button>

            <button class="erp_bt bt_saveAdd">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_saveAdd.png">
                </div>
                <span class="btDetail">保存并新增</span>
            </button>
            
            <span @click="ifShow = !ifShow" class="upBt">收起<i class="el-icon-arrow-down" @click="ifShow = !ifShow" :class="{rotate : !ifShow}"></i></span>
        </el-col>
    </el-row>
    <el-collapse-transition>
        <div v-show="ifShow">   
            <el-row>
                <el-col :span="24" class="getPadding"> 
                    <!-- <div class="tipsWrapper" name="ouId">
                        <div class="errorTips" :class="{block : !validation.hasError('createContactParams.ouId')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('createContactParams.ouId') }}</p>
                        </div>
                    </div> -->
                    <div class="tipsWrapper" name="contact">
                        <div class="errorTips" :class="{block : !validation.hasError('createContactParams.contact')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('createContactParams.contact') }}</p>
                        </div>
                    </div>
                    <div class="tipsWrapper" name="contactName">
                        <div class="errorTips" :class="{block : !validation.hasError('createContactParams.contactName')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('createContactParams.contactName') }}</p>
                        </div>
                    </div>
                    <div class="tipsWrapper" name="contactFullName">
                        <div class="errorTips" :class="{block : !validation.hasError('createContactParams.contactFullName')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('createContactParams.contactFullName') }}</p>
                        </div>
                    </div>
                    <div class="tipsWrapper" name="mnemonic">
                        <div class="errorTips" :class="{block : !validation.hasError('createContactParams.mnemonic')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('createContactParams.mnemonic') }}</p>
                        </div>
                    </div>
                    <div class="tipsWrapper" name="contactClassId">
                        <div class="errorTips" :class="{block : !validation.hasError('createContactParams.contactClassId')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('createContactParams.contactClassId') }}</p>
                        </div>
                    </div>
                    <div class="tipsWrapper" name="contactWorkPropertyId">
                        <div class="errorTips" :class="{block : !validation.hasError('createContactParams.contactWorkPropertyId')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('createContactParams.contactWorkPropertyId') }}</p>
                        </div>
                    </div>
                    <div class="tipsWrapper" name="contactGradeId">
                        <div class="errorTips" :class="{block : !validation.hasError('createContactParams.contactGradeId')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('createContactParams.contactGradeId') }}</p>
                        </div>
                    </div>
                    <div class="tipsWrapper" name="isCustomer">
                        <div class="errorTips" :class="{block : !validation.hasError('createContactParams.isCustomer')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('createContactParams.isCustomer') }}</p>
                        </div>
                    </div>
                    <div class="tipsWrapper" name="ficaOuId">
                        <div class="errorTips" :class="{block : !validation.hasError('createContactParams.ficaOuId')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('createContactParams.ficaOuId') }}</p>
                        </div>
                    </div>
                    <div class="tipsWrapper" name="taxCode">
                        <div class="errorTips" :class="{block : !validation.hasError('createContactParams.taxCode')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('createContactParams.taxCode') }}</p>
                        </div>
                    </div>
                    <div class="tipsWrapper" name="opAreaId">
                        <div class="errorTips" :class="{block : !validation.hasError('createContactParams.opAreaId')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('createContactParams.opAreaId') }}</p>
                        </div>
                    </div>
                    <div class="tipsWrapper" name="adAreaId">
                        <div class="errorTips" :class="{block : !validation.hasError('createContactParams.adAreaId')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('createContactParams.adAreaId') }}</p>
                        </div>
                    </div>
                    <div class="tipsWrapper" name="legalPerson">
                        <div class="errorTips" :class="{block : !validation.hasError('createContactParams.legalPerson')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('createContactParams.legalPerson') }}</p>
                        </div>
                    </div>
                    <div class="tipsWrapper" name="regAddress">
                        <div class="errorTips" :class="{block : !validation.hasError('createContactParams.regAddress')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('createContactParams.regAddress') }}</p>
                        </div>
                    </div>
                    <div class="tipsWrapper" name="manager">
                        <div class="errorTips" :class="{block : !validation.hasError('createContactParams.manager')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('createContactParams.manager') }}</p>
                        </div>
                    </div>
                    <div class="tipsWrapper" name="phone">
                        <div class="errorTips" :class="{block : !validation.hasError('createContactParams.phone')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('createContactParams.phone') }}</p>
                        </div>
                    </div>
                    <div class="tipsWrapper" name="remark">
                        <div class="errorTips" :class="{block : !validation.hasError('createContactParams.remark')}">
                            <p class="msgDetail">错误提示：{{ validation.firstError('createContactParams.remark') }}</p>
                        </div>
                    </div>
                    

                    <div class="bgcolor">
                        <label><small>*</small>所属组织</label>
                        <el-select v-model="createContactParams.ouId" 
                                placeholder=""
                                class="ouId"
                                :class="{redBorder : validation.hasError('createContactParams.ouId')}">
                                <!-- @focus="showErrprTipsSelect" -->

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
                        <el-input v-model="createContactParams.contactCode" 
                                placeholder=""
                                :class="{redBorder : validation.hasError('createContactParams.contactCode')}"
                                class="contactCode"></el-input>
                                <!-- @focus="showErrprTips" -->
                    </div>


                    <div class="bgcolor">
                        <label><small>*</small>名称</label>
                        <el-input v-model="createContactParams.contactName" 
                                placeholder=""
                                :class="{redBorder : validation.hasError('createContactParams.contactName')}"
                                class="contactName"></el-input>
                    </div>


                    <div class="bgcolor">
                        <label><small>*</small>全称</label>
                        <el-input v-model="createContactParams.contactFullName" 
                                placeholder=""
                                :class="{redBorder : validation.hasError('createContactParams.contactFullName')}"
                                class="contactFullName"></el-input>
                    </div>

                    <div class="bgcolor">
                        <label>助记码</label>
                        <el-input v-model="createContactParams.mnemonic" 
                                placeholder=""
                                :class="{redBorder : validation.hasError('createContactParams.mnemonic')}"
                                class="mnemonic"></el-input>
                    </div>
                        
                    <div class="bgcolor">
                        <label>客户分类</label>
                        <el-select v-model="createContactParams.contactClassId" 
                                placeholder=""
                                class="contactClassId"
                                :class="{redBorder : validation.hasError('createContactParams.contactClassId')}"
                                @focus="showErrprTipsSelect">
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
                        <el-select v-model="createContactParams.contactWorkPropertyId" 
                                placeholder=""
                                class="contactWorkPropertyId"
                                :class="{redBorder : validation.hasError('createContactParams.contactWorkPropertyId')}">
                                <!-- @focus="showErrprTipsSelect" -->
                            <el-option v-for="item in propertyAr" 
                                        :key="item.itemValue" 
                                        :label="item.itemName" 
                                        :value="item.itemValue"></el-option>
                        </el-select>
                    </div>

                    <div class="bgcolor">
                        <label>客户等级</label>
                        <el-select v-model="createContactParams.contactGradeId" 
                                placeholder=""
                                class="contactGradeId"
                                :class="{redBorder : validation.hasError('createContactParams.contactGradeId')}">
                            <el-option v-for="itema in gradeAr" 
                                        :key="itema.itemValue" 
                                        :label="itema.itemName" 
                                        :value="itema.itemValue"></el-option>
                        </el-select>
                    </div>
                    <div class="bgcolor">
                        <label>客户类型</label>
                        <el-select v-model='createContactParams.isCustomer'
                                placeholder=""
                                class="isCustomer"
                                :class="{redBorder : validation.hasError('createContactParams.isCustomer')}">
                            <el-option v-for="itemb in typeAr" 
                                        :key="itemb.itemValue" 
                                        :label="itemb.itemName" 
                                        :value="itemb.itemValue"></el-option>
                        </el-select>
                    </div>   
                    <div class="bgcolor">
                        <label>对应财务组织</label>
                        <el-select v-model="createContactParams.ficaOuId" 
                                placeholder=""
                                class="ficaOuId"
                                :class="{redBorder : validation.hasError('createContactParams.ficaOuId')}">
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
                        <el-input v-model="createContactParams.taxCode" 
                                placeholder=""
                                class="taxCode"
                                :class="{redBorder : validation.hasError('createContactParams.taxCode')}"></el-input>
                    </div>
                    <div class="bgcolor">
                        <label>业务地区</label>
                        <el-select v-model="createContactParams.opAreaId"
                                    class="opAreaId"
                                    placeholder=""
                                    :class="{redBorder : validation.hasError('createContactParams.opAreaId')}">
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
                        <el-select v-model="createContactParams.adAreaId" 
                                   placeholder=""
                                   class="adAreaId"
                                   :class="{redBorder : validation.hasError('createContactParams.adAreaId')}">
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
                        <el-input v-model="createContactParams.legalPerson" 
                                placeholder=""
                                class="legalPerson"
                                :class="{redBorder : validation.hasError('createContactParams.legalPerson')}"></el-input>
                    </div>

                    <div class="bgcolor">
                        <label>注册地址</label>
                        <el-input v-model="createContactParams.regAddress" 
                                placeholder=""
                                class="regAddress"
                                :class="{redBorder : validation.hasError('createContactParams.regAddress')}"
                                @focus="showErrprTips"></el-input>
                    </div>

                    <div class="bgcolor">
                        <label>负责人</label>
                        <el-input v-model="createContactParams.manager" 
                                placeholder=""
                                class="manager"
                                :class="{redBorder : validation.hasError('createContactParams.manager')}"
                                @focus="showErrprTips"></el-input>
                    </div>
                    
                    <div class="bgcolor">
                        <label>电话</label>
                        <el-input v-model="createContactParams.phone" 
                                placeholder=""
                                class="phone"
                                :class="{redBorder : validation.hasError('createContactParams.phone')}"
                                @focus="showErrprTips"></el-input>
                    </div>
                    
                    <div class="bgcolor">
                        <label>备注</label>
                        <el-input v-model="createContactParams.remark" 
                                placeholder=""
                                class="remark"
                                :class="{redBorder : validation.hasError('createContactParams.remark')}"
                                @focus="showErrprTips"></el-input>
                    </div>

                    <div class="bgcolor">
                        <label><small>*</small>状态</label>
                        <el-select v-model="createContactParams.status"
                                   class="status"
                                   placeholder=""
                                   :class="{redBorder : validation.hasError('createContactParams.status')}">
                            <el-option v-for="itemc in statusAr"  
                                       :key="itemc.itemValue" 
                                       :label="itemc.itemName" 
                                       :value="itemc.itemValue"></el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row>
        </div>
    </el-collapse-transition>     
<el-row>
    <el-col :span="2" :offset="1"><el-checkbox v-model="supplier">同为供应商</el-checkbox></el-col>
    <el-col :span="2"><el-checkbox v-model="createContactParams.creditMgt">信用管理</el-checkbox></el-col>   
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
                            <span class="btDetail">新增</span>
                        </button>

                        <button class="erp_bt bt_excel mb10">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_excel.png">
                            </div>
                            <span class="btDetail">Excel</span>
                        </button>

                        <button class="erp_bt bt_del">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_del.png">
                            </div>
                            <span class="btDetail">删除</span>
                        </button>

                        <button class="erp_bt bt_auxiliary">
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
                                        @change='handleAddressChange(scope.$index,scope.row)'
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="completeAddress" label="供货地址" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.addressType" 
                                        type="text"    
                                        @change='handleAddressChange(scope.$index,scope.row)'
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="completeAddress" label="省" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.completeAddress" 
                                        type="text"    
                                        @change='handleAddressChange(scope.$index,scope.row)'
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="id" label="市" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.id" 
                                        type="text"    
                                        @change='handleAddressChange(scope.$index,scope.row)'
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="phone" label="区" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.phone" 
                                        type="text"    
                                        @change='handleAddressChange(scope.$index,scope.row)'
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="contactPerson" label="联系人" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.contactPerson" 
                                        type="text"    
                                        @change='handleAddressChange(scope.$index,scope.row)'
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="contactPerson" label="联系电话" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.contactPerson" 
                                        type="text"    
                                        @change='handleAddressChange(scope.$index,scope.row)'
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
                                    <el-button v-on:click="handleAddressDelete(scope.$index)" type="text" size="small">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>

                    <el-tab-pane label="使用组织" name="organization" class="getPadding" style="z-index:-1000">
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
                            <el-table-column prop="addressType" label="地址类型" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.addressType" 
                                        type="text"    
                                        @change='handleOuChange(scope.$index,scope.row)'
                                        v-on:click="handleOuEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="completeAddress" label="供货地址" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.addressType" 
                                        type="text"    
                                        @change='handleOuChange(scope.$index,scope.row)'
                                        v-on:click="handleOuEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="completeAddress" label="省" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.completeAddress" 
                                        type="text"    
                                        @change='handleOuChange(scope.$index,scope.row)'
                                        v-on:click="handleOuEdit(scope.$index,scope.row)"/>  
                                </template>
                            </el-table-column>

                            <el-table-column prop="id" label="市" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.id" 
                                        type="text"    
                                        @change='handleOuChange(scope.$index,scope.row)'
                                        v-on:click="handleOuEdit(scope.$index,scope.row)"/>  
                                </template>
                            </el-table-column>

                            <el-table-column prop="phone" label="区" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.phone" 
                                        type="text"    
                                        @change='handleOuChange(scope.$index,scope.row)'
                                        v-on:click="handleOuEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="contactPerson" label="联系人" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.contactPerson" 
                                        type="text"    
                                        @change='handleOuChange(scope.$index,scope.row)'
                                        v-on:click="handleOuEdit(scope.$index,scope.row)"/>  
                                </template>
                            </el-table-column>

                            <el-table-column prop="contactPerson" label="联系电话" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.contactPerson" 
                                        type="text"    
                                        @change='handleOuChange(scope.$index,scope.row)'
                                        v-on:click="handleOuEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="ifDefault" label="默认">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="ouData[scope.$index].ifDefault"></el-checkbox>
                                </template>
                            </el-table-column>

                            <el-table-column label='操作'>
                                <template slot-scope="scope" >
                                    <el-button v-on:click="handleOuDelete(scope.$index)" type="text" size="small">删除</el-button>
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
                <div class="bgcolor"><label>创建人</label><el-input v-model="auditInformation.createName" placeholder="创建人" disabled="disabled"></el-input></div>
                <div class="bgcolor"><label>创建时间</label><el-date-picker v-model="auditInformation.createTime" type="date" placeholder="创建时间" disabled="disabled"></el-date-picker></div>
                <div class="bgcolor"><label>修改人</label><el-input v-model="auditInformation.modifyName" placeholder="修改人" disabled="disabled"></el-input></div>
                <div class="bgcolor"><label>修改时间</label><el-date-picker v-model="auditInformation.modifyTime" type="date" placeholder="修改时间" disabled="disabled"></el-date-picker></el-input></div>
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
    data() {
        return{
            ifShow:true,
            showCompany:false,//初始默认公司计信息状态展开  
            auditInformation:{//审计信息
                createName:"",
                createTime:"",
                modifyName:"",
                modifyTime:"",
                startTime:"",
                finishTime:"",
                finishName:"",
            },
            search:'',
            item:{
                id:'',
                areaName:'',
            },
            defaultProps: {
                children: 'items',
                label: 'areaName',
                id:'id'
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
            //-----------------------
            
            activeName: 'bank',//tabs标签页默认激活name
            supplier:true,//同为供应商

            createContactParams:{//创建客户资料参数
                'groupId':1,//集团Id
                'ouId':'',//组织单元id
                'contactCode':'',//客户编码
                'contactName':'',//客户名称
                'contactFullName':'',//客户全称
                'mnemonic':'',//助记码
                'contactClassId':'',//客户分类
                'contactWorkPropertyId':'',//客户性质
                'contactGradeId':'1',//客户等级ID,
                'isSupplier':'1',//是否为供应商
                'isCustomer':'',//是否客户
                'ficaOuId':'',//财务组织单元 ID
                'taxCode':'',//纳税登记号
                'opAreaId':'',//业务地区
                'adAreaId':'1',//行政地区
                'legalPerson':'',//法人代表
                'regAddress':'',// 注册地址
                'manager':'',//负责人
                'phone':'',//电话
                'remark':'',//备注
                'creditMgt':true,//信用管理
                'status':'',//状态
            },

            createBankParams:{//创建银行的参数
                groupId: 1,
                contactId:'',
                settlementCurrencyId: '',
                accountNo: "",
                accountName: "",
                openingBank: '',
                contactPerson: '',
                phone: '',
                isDefault: true
            },    

            createAddressParams:{//创建地址的参数
                groupId: 1,
                contactId: '',
                addressType: '',
                addressId: '',
                completeAddress: "",
                contactPerson: "",
                phone: "",
                isDefault: true
            },
            
            createOuParams:{//创建组织参数
                groupId: 1,
                contactId: '',
                ouId: '',
                transport_method_id: '',
                is_default: true
            },
            bankData:[],//银行数据列表，开始为空
            updataBankList:[],//需要修改的银行信息
            addBankList:[],//需要添加的银行信息

            addressData:[],//地址数据列表，开始为空
            updataAddressList:[],//修改的银行信息
            addAddressList:[],//需要添加的地址信息

            ouData:[],//组织数据列表，开始为空
            updataOuList:[],//修改的组织信息
            addOuList:[],//需要添加的组织信息

            x:0,
            y:0,
            z:0,
            xrows:[],
            yrows:[],
            zrows:[],
            backId:'',
            customerData:'',//根据id获得的客户信息
        }
    },
    validators: {
        'createContactParams.ouId': function (value) {//所属组织
            return this.Validator.value(value).required().integer();
        },
        'createContactParams.contactCode': function (value) {//编码
            return this.Validator.value(value).required().maxLength(50);
        },
        'createContactParams.contactName': function (value) {//名称
            return this.Validator.value(value).required().maxLength(50);
        },
        'createContactParams.contactFullName': function (value) {//全称
            return this.Validator.value(value).required().maxLength(50);
        },
        'createContactParams.mnemonic': function (value) {//助记码
            return this.Validator.value(value).required().maxLength(50);
        },
        'createContactParams.contactClassId': function (value) {//客户分类
            return this.Validator.value(value).required().integer();
        },
        'createContactParams.contactWorkPropertyId': function (value) {//客户性质
            return this.Validator.value(value).required().integer();
        },
        'createContactParams.contactGradeId': function (value) {//客户等级
            return this.Validator.value(value).required().integer();
        },
        'createContactParams.isCustomer': function (value) {//客户类型
            return this.Validator.value(value).required().integer();
        },
        'createContactParams.ficaOuId': function (value) {//对应财务组织
            return this.Validator.value(value).required().integer();
        },
        'createContactParams.taxCode': function (value) {//纳税登记号 
            return this.Validator.value(value).required().maxLength(50);
        },
        'createContactParams.opAreaId': function (value) {//业务地区区号
            return this.Validator.value(value).required().integer();
        },
        'createContactParams.adAreaId': function (value) {//行政地区
            return this.Validator.value(value).required().integer();
        },
        'createContactParams.legalPerson': function (value) {//法人代表
            return this.Validator.value(value).required().maxLength(50);
        },
        'createContactParams.regAddress': function (value) {//注册地址
            return this.Validator.value(value).required().maxLength(50);
        },
        'createContactParams.manager': function (value) {//负责人
            return this.Validator.value(value).required().maxLength(50);
        },
        'createContactParams.phone': function (value) {//电话
            return this.Validator.value(value).required().maxLength(50);
        },
        'createContactParams.remark': function (value) {//备注
            return this.Validator.value(value).required().maxLength(200);
        },
        'createContactParams.status': function (value) {//备注
            return this.Validator.value(value).required().integer();
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
    created () {
        let self=this;
        // self.loadTree();  
        self.loadSelect();
    },
    watch: {
      search(val) {
        this.$refs.tree.filter(val);
      }
    },
    methods:{
        //---下拉的数据------------------------------------------------------
            loadSelect:function(){
                let self = this;
                //客户分类
                self.$axios.gets('/api/services/app/ContactClassManagement/GetTreeList',{Ower:1}).then(function(res){
                    console.log(res);
                    self.cuAr = res;
                    self.loadIcon();
                },function(res){
                    console.log('err'+res)
                });
                //组织单元
                self.$axios.gets('/api/services/app/OuManagement/GetAllTree',{AreaType:1}).then(function(res){
                    console.log(res);
                    self.ouAr = res.result;
                    self.loadIcon();
                },function(res){
                    console.log('err'+res)
                });
                //对应财务组织
                self.$axios.gets('/api/services/app/OuManagement/GetTreeWithOuType',{ouType:3}).then(function(res){
                    console.log(res);
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
                    console.log(res);
                    self.adAr = res.result;
                    self.loadIcon();
                },function(res){
                    console.log('err'+res)
                });
                
                //业务地区*1
                self.$axios.gets('/api/services/app/AreaManagement/GetAllDataTree',{AreaType:1}).then(function(res){
                    // console.log(res);
                    self.opAr = res.result;
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
                
            },
        //------------------------------------------------------------------
        
        //---创建完成后刷新页面获取数据----------------------------------
        loadData:function(){
            let self = this;
            this.$axios.gets('/api/services/app/ContactManagement/Get',{id:self.backId}).then(function(res){
                    // console.log(res);
                    self.createContactParams = res.result;
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
        },
        //------------------------------------------------------------

        //---跳转修改页------------------------------------------------
        goModify:function(id){//点击跳转修改页modify
            // this.$store.state.url='/customer/customerModify/default'
            this.$store.state.url='/customer/customerModify/'+id;
            this.$router.push({path:this.$store.state.url})//点击切换路由
        },
        //------------------------------------------------------------

        //---保存数据--------------------------------------------------       
        save:function(){//点击保存创建客户资料
            let self = this;
            console.log(self.createContactParams)
            self.$validate().then(function(success){
                if(success){
                    console.log(2)
                    self.$axios.posts('/api/services/app/ContactManagement/Create',self.createContactParams).then(function(res){
                        // console.log(res);
                        self.open('创建客户资料成功','el-icon-circle-check','successERP');
                        // console.log(res.result.id);
                        self.backId = res.result.id;
                        self.createBankParams.contactId = res.result.id;
                        // console.log(self.createBankParams.contactId)
                        // console.log(self.createBankParams)
                        for(let i in self.addBankList){
                            self.addBankList[i].contactId = res.result.id;
                        }
                        self.createBank();
                        
                        for(let i in self.addAddressList){
                            self.addAddressList[i].contactId = res.result.id;
                        }
                        self.createBank();

                        for(let i in self.addOuList){
                            self.addOuList[i].contactId = res.result.id;
                        }
                        self.createOu();

                        self.goModify(self.backId);
                    },function(res){
                        console.log(res)
                        self.open('创建失败','el-icon-error','faildERP')
                    });
                }
            })
            console.log(self.createContactParams)
            

        },
        //---------------------------------------------------------
        
        //---创建数据-----------------------------------------------
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
        addColbank:function(){//银行增行
            let self = this;
                self.x++;
                let newCol = 'newCol'+self.x;
                self.xrows.newCol ={
                    "groupId": 1,
                    "contactId":'',
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
        addColAddress:function(){//地址增行
            let self = this;
                self.y++;
                let newCol = 'newCol'+self.y;
                self.yrows.newCol ={
                    "groupId": 1,
                    "contactId": '',
                    "addressType": '',
                    "addressId": '',
                    "completeAddress": "",
                    "contactPerson": "",
                    "phone": "",
                    "isDefault": true
                };
                self.addressData.unshift(self.yrows.newCol);
                self.addAddressList.unshift(self.yrows.newCol)
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
        addColOu:function(){//组织增行
            let self = this;
            self.z++;
            let newCol = 'newCol'+self.z;
            self.zrows.newCol ={
                "groupId": 1,
                "contactId": '',
                "ouId": '',
                "transport_method_id": '',
                "is_default": true
            };
            self.ouData.unshift(self.zrows.newCol)
            self.addOuList.unshift(self.zrows.newCol)
        },

        //------------------------------------------------------------
        
        //---控制编辑删除等-------------------------------------------
        
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
            }

            if(flag){
                self.updataBankList.push(row);
                console.log(self.updataBankList)
            }
        },
        handleBankDelete:function(index,row){//银行表格内删除操作
            let self = this;
            this.bankData.splice(index,1);
            self.addBankList.splice(index,1);
            // this.$axios.deletes('/api/services/app/ContactBankManagement/Delete',{id:row.id}).then(function(res){
            //     console.log(res);
            //     self.open('删除银行资料成功','el-icon-circle-check','successERP');
            // }),function(res){
            //     self.open('删除银行资料失败','el-icon-error','faildERP');
            // };
        },

        handleAddressEdit:function(){//地址信息编辑
            
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
        handleAddressDelete:function(index){//地址表格内删除操作
            let self = this;
            self.addressData.splice(index,1);
            self.addAddressList.splice(index,1)
            // this.$axios.deletes('/api/services/app/ContactAddressManagement/Delete',{id:row.id}).then(function(res){
            //     console.log(res);
            //     self.open('删除地址资料成功','el-icon-circle-check','successERP');
            // }),function(res){
            //     self.open('删除地址资料失败','el-icon-error','faildERP');
            // };
        },

        handleOuEdit:function(){//地址信息编辑
            let self = this;
            self.updataAddressList.push(row)
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
        handleOuDelete:function(index){//地址表格内删除操作
            let self = this;
            self.ouData.splice(index,1);
            self.addOuList.splice(index,1);
            // this.$axios.deletes('/api/services/app/ContactAddressManagement/Delete',{id:row.id}).then(function(res){
            //     console.log(res);
            //     self.open('删除地址资料成功','el-icon-circle-check','successERP');
            // }),function(res){
            //     self.open('删除地址资料失败','el-icon-error','faildERP');
            // };
        },
        //------------------------------------------------------------

        //---控制跳转------------------------------------------------
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
        //----------------------------------------------------------

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
            console.log(data)
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
            console.log(data)
            self.opItem.id = data.id;
            self.opItem.areaName = data.areaName;
            self.$nextTick(function(){
                $('#op_confirmSelect').click()
            })
        },
        //-----------------------------------------------------
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
  .block{
    display: none;
    }
    .bg-white{
        background: white;
    }
  .customerBasicForm{
      font-family: 'microsoft yahei';
  }
  .bb1{
    border-bottom: 1px solid #cccccc;
  }
  .pb5{
    padding-bottom: 5px;
  }
  .pt5{
    padding-top: 5px;
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
.customerBasicForm .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}

  </style>
  
