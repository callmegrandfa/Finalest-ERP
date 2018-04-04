<template>
 <div class="customerBasicForm">
     <el-row>
         <el-col :span="24"  class="fixed bg-white bb1 pb5 pt5">
            <button class="erp_bt bt_back" @click="isBack()">
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

            <button class="erp_bt bt_cancel" @click='isBack()'>
                <div class="btImg">
                    <img src="../../../static/image/common/bt_cancel.png">
                </div>
                <span class="btDetail">取消</span>
            </button>

            <button class="erp_bt bt_saveAdd">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_saveAdd.png">
                </div>
                <span class="btDetail">保存并新增</span>
            </button>

            <button class="erp_fb_bt bt_add" :disabled='true'>
                <div class="btImg">
                    <img src="../../../static/image/common/bt_add.png">
                </div>
                <span class="btDetail">新增</span>
            </button>

             <button class="erp_fb_bt bt_del" :disabled='true'>
                <div class="btImg">
                    <img src="../../../static/image/common/bt_del.png">
                </div>
                <span class="btDetail">删除</span>
            </button>
              
            
            <span @click="ifShow = !ifShow" class="upBt">收起<i class="el-icon-arrow-down" @click="ifShow = !ifShow" :class="{rotate : !ifShow}"></i></span>
        </el-col>
    </el-row>
    <el-collapse-transition>
        <div v-show="ifShow">   
            <el-row>
                <el-col :span="24" class="getPadding"> 
                    <div class="tipsWrapper">
                        <div class="errorTips">
                            <p class="msgDetail">
                                <span :class="{block : !validation.hasError('createContactParams.ouId')}">
                                     所属组织{{ validation.firstError('createContactParams.ouId') }},
                                </span>

                                <span :class="{block : !validation.hasError('createContactParams.contactCode')}">
                                     编码{{ validation.firstError('createContactParams.contactCode') }},
                                </span>

                                <span :class="{block : !validation.hasError('createContactParams.contactName')}">
                                     名称{{ validation.firstError('createContactParams.contactName') }},
                                </span>

                                <span :class="{block : !validation.hasError('createContactParams.contactFullName')}">
                                     全称{{ validation.firstError('createContactParams.contactFullName') }},
                                </span>

                                <span :class="{block : !validation.hasError('createContactParams.mnemonic')}">
                                     助记码{{ validation.firstError('createContactParams.mnemonic') }},
                                </span>

                                <span :class="{block : !validation.hasError('createContactParams.contactClassId')}">
                                     客户分类{{ validation.firstError('createContactParams.contactClassId') }},
                                </span>

                                <span :class="{block : !validation.hasError('createContactParams.contactWorkPropertyId')}">
                                     客户性质{{ validation.firstError('createContactParams.contactWorkPropertyId') }},
                                </span>

                                <span :class="{block : !validation.hasError('createContactParams.contactGradeId')}">
                                     客户等级{{ validation.firstError('createContactParams.contactGradeId') }},
                                </span>

                                <span :class="{block : !validation.hasError('createContactParams.contactTypeId')}">
                                     客户类型{{ validation.firstError('createContactParams.contactTypeId') }},
                                </span>

                                <span :class="{block : !validation.hasError('createContactParams.ficaOuId')}">
                                     对应财务组织{{ validation.firstError('createContactParams.ficaOuId') }},
                                </span>

                                <span :class="{block : !validation.hasError('createContactParams.taxCode')}">
                                     纳税登记号{{ validation.firstError('createContactParams.taxCode') }},
                                </span>

                                <span :class="{block : !validation.hasError('createContactParams.opAreaId')}">
                                     业务地区{{ validation.firstError('createContactParams.opAreaId') }},
                                </span>

                                <span :class="{block : !validation.hasError('createContactParams.adAreaId')}">
                                     行政地区{{ validation.firstError('createContactParams.adAreaId') }},
                                </span>

                                <span :class="{block : !validation.hasError('createContactParams.legalPerson')}">
                                     法人代表{{ validation.firstError('createContactParams.legalPerson') }},
                                </span>

                                <span :class="{block : !validation.hasError('createContactParams.regAddress')}">
                                     注册地址{{ validation.firstError('createContactParams.regAddress') }},
                                </span>

                                <span :class="{block : !validation.hasError('createContactParams.manager')}">
                                     负责人{{ validation.firstError('createContactParams.manager') }},
                                </span>

                                <span :class="{block : !validation.hasError('createContactParams.phone')}">
                                     电话{{ validation.firstError('createContactParams.phone') }},
                                </span>

                                <span :class="{block : !validation.hasError('createContactParams.remark')}">
                                     备注{{ validation.firstError('createContactParams.remark') }},
                                </span>

                                <span :class="{block : !validation.hasError('createContactParams.status')}">
                                     状态{{ validation.firstError('createContactParams.status') }},
                                </span>
                            </p>
                        </div>
                    </div>
                                       

                    <div class="bgcolor">
                        <label><small>*</small>所属组织</label>
                        <el-select v-model="createContactParams.ouId" 
                                    placeholder=""
                                    class="ouId"
                                    @focus="showErrprTipsSelect"
                                    @change='Modify()'
                                    :class="{redBorder : validation.hasError('createContactParams.ouId')}">

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
                                @focus="showErrprTips" 
                                @change='Modify()'
                                :class="{redBorder : validation.hasError('createContactParams.contactCode')}"
                                class="contactCode"></el-input>
                    </div>


                    <div class="bgcolor">
                        <label><small>*</small>名称</label>
                        <el-input v-model="createContactParams.contactName" 
                                placeholder=""
                                @focus="showErrprTips" 
                                @change='editName'
                                :class="{redBorder : validation.hasError('createContactParams.contactName')}"
                                class="contactName"></el-input>
                    </div>


                    <div class="bgcolor">
                        <label><small>*</small>全称</label>
                        <el-input v-model="createContactParams.contactFullName" 
                                placeholder=""
                                @focus="showErrprTips" 
                                @change='editFullName'
                                :class="{redBorder : validation.hasError('createContactParams.contactFullName')}"
                                class="contactFullName"></el-input>
                    </div>

                    <div class="bgcolor">
                        <label>助记码</label>
                        <el-input v-model="createContactParams.mnemonic" 
                                placeholder=""
                                @focus="showErrprTips" 
                                @change='Modify()'
                                :class="{redBorder : validation.hasError('createContactParams.mnemonic')}"
                                class="mnemonic"></el-input>
                    </div>
                        
                    <div class="bgcolor">
                        <label><small>*</small>客户分类</label>
                        <el-select v-model="createContactParams.contactClassId" 
                                placeholder=""
                                class="contactClassId"
                                @change='Modify()'
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
                        <label><small>*</small>客户性质</label>
                        <el-select v-model="createContactParams.contactWorkPropertyId" 
                                    placeholder=""
                                    @change='Modify()'
                                    class="contactWorkPropertyId"
                                    @focus="showErrprTipsSelect"
                                    :class="{redBorder : validation.hasError('createContactParams.contactWorkPropertyId')}">
                                <!--  -->
                            <el-option v-for="item in typeAr" 
                                        :key="item.itemValue" 
                                        :label="item.itemName" 
                                        :value="item.itemValue"></el-option>
                        </el-select>
                    </div>

                    <div class="bgcolor">
                        <label>客户等级</label>
                        <el-select v-model="createContactParams.contactGradeId" 
                                placeholder=""
                                @change='Modify()'
                                class="contactGradeId"
                                @focus="showErrprTipsSelect"
                                :class="{redBorder : validation.hasError('createContactParams.contactGradeId')}">
                            <el-option v-for="itema in gradeAr" 
                                        :key="itema.itemValue" 
                                        :label="itema.itemName" 
                                        :value="itema.itemValue"></el-option>
                        </el-select>
                    </div>
                    <div class="bgcolor">
                        <label><small>*</small>客户类型</label>
                        <el-select v-model='createContactParams.contactTypeId'
                                placeholder=""
                                @change='Modify()'
                                class="contactTypeId"
                                @focus="showErrprTipsSelect"
                                :class="{redBorder : validation.hasError('createContactParams.contactTypeId')}">
                            <el-option v-for="itemb in propertyAr" 
                                        :key="itemb.itemValue" 
                                        :label="itemb.itemName" 
                                        :value="itemb.itemValue"></el-option>
                        </el-select>
                    </div>   
                    <div class="bgcolor">
                        <label><small>*</small>对应财务组织</label>
                        <el-select v-model="createContactParams.ficaOuId" 
                                placeholder=""
                                @change='Modify()'
                                @focus="showErrprTipsSelect"
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
                                @change='Modify()'
                                class="taxCode"
                                @focus="showErrprTips"
                                :class="{redBorder : validation.hasError('createContactParams.taxCode')}"></el-input>
                    </div>
                    <div class="bgcolor">
                        <label>业务地区</label>
                        <el-select v-model="createContactParams.opAreaId"
                                    class="opAreaId"
                                    @change='Modify()'
                                    placeholder=""
                                    @focus="showErrprTipsSelect"
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

                    <div class="bgcolor area">
                        <label>行政地区</label>
                        <div class="areaBox">
                            <el-select v-model="createContactParams.adAreaId" class="areaDrop" placeholder="选择省">
                                <el-option v-for="item in areaProArray" :key="item.id" :label="item.areaName" :value="item.id">
                                </el-option>
                            </el-select>
                            <el-select v-model="createContactParams.adAreaId" class="areaDrop" placeholder="选择市">
                                <el-option v-for="item in areaCityArray" :key="item.basOuTypes" :label="item.label" :value="item.basOuTypes">
                                </el-option>
                            </el-select>
                            <el-select v-model="createContactParams.adAreaId" class="areaDrop" placeholder="选择区">
                                <el-option v-for="item in areaDisArray" :key="item.basOuTypes" :label="item.label" :value="item.basOuTypes">
                                </el-option>
                            </el-select>
                            <el-input class="areaEntry" placeholder="街道办地址"></el-input>
                        </div>
                    </div>

                    <div class="bgcolor">
                        <label>法人代表</label>
                        <el-input v-model="createContactParams.legalPerson" 
                                placeholder=""
                                @focus="showErrprTips"
                                @change='Modify()'
                                class="legalPerson"
                                :class="{redBorder : validation.hasError('createContactParams.legalPerson')}"></el-input>
                    </div>

                    <div class="bgcolor">
                        <label>注册地址</label>
                        <el-input v-model="createContactParams.regAddress" 
                                placeholder=""
                                class="regAddress"
                                @change='Modify()'
                                :class="{redBorder : validation.hasError('createContactParams.regAddress')}"
                                @focus="showErrprTips"></el-input>
                    </div>

                    <div class="bgcolor">
                        <label>负责人</label>
                        <el-input v-model="createContactParams.manager" 
                                placeholder=""
                                class="manager"
                                @change='Modify()'
                                :class="{redBorder : validation.hasError('createContactParams.manager')}"
                                @focus="showErrprTips"></el-input>
                    </div>
                    
                    <div class="bgcolor">
                        <label>电话</label>
                        <el-input v-model="createContactParams.phone" 
                                placeholder=""
                                @change='Modify()'
                                class="phone"
                                :class="{redBorder : validation.hasError('createContactParams.phone')}"
                                @focus="showErrprTips"></el-input>
                    </div>
                    
                    <div class="bgcolor">
                        <label>备注</label>
                        <el-input v-model="createContactParams.remark" 
                                placeholder=""
                                class="remark"
                                @change='Modify()'
                                :class="{redBorder : validation.hasError('createContactParams.remark')}"
                                @focus="showErrprTips"></el-input>
                    </div>

                    <div class="bgcolor">
                        <label><small>*</small>状态</label>
                        <el-select v-model="createContactParams.status"
                                   class="status"
                                   @change='Modify()'
                                   placeholder=""
                                   @focus="showErrprTipsSelect"
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

                        <button class="erp_bt bt_del" @click='delMoreBank(4)'>
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
                        
                
                        <el-table :data="bankData" stripe border style="width: 100%" @selection-change="handleSelectionChange">
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="settlementCurrencyId" label="结算币种" width="180">
                                <template slot-scope="scope">
                                   <el-select  v-model="scope.row.settlementCurrencyId" :class="[scope.$index%2==0?'bgw':'bgg']">
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
                                        v-on:click="handleBankEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="accountName" label="银行账户" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.accountName" 
                                        type="text"    
                                        v-on:click="handleBankEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="openingBank" label="开户银行" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.openingBank" 
                                        type="text"    
                                        v-on:click="handleBankEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="contactPerson" label="联系人" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.contactPerson" 
                                        type="text"    
                                        v-on:click="handleBankEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="phone" label="联系电话" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.phone" 
                                        type="text"    
                                        v-on:click="handleBankEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="isDefault" label="默认">
                                <template slot-scope="scope">
                                    <!-- <el-checkbox v-model="bankData[scope.$index].ifDefault"></el-checkbox> -->
                                    <el-radio  :label="true" 
                                                v-model="scope.row.isDefault" 
                                                @change.native="getCurrentRow(scope.$index,scope.row)"></el-radio>
                                </template>
                            </el-table-column>
                            <el-table-column label='操作'>
                                <template slot-scope="scope" >
                                    <el-button v-on:click="handleDelete(scope.$index,scope.row,1)" type="text" size="small">删除</el-button>
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

                            <el-table-column prop="isDefault" label="默认">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="addressData[scope.$index].ifDefault"></el-checkbox>
                                    <!-- <el-radio  :label="true" 
                                                v-model="scope.row.isDefault" 
                                                @change.native="getCurrentRow(scope.$index,scope.row)" 
                                                @change="handleBankChange(scope.$index,scope.row)"
                                                :disabled="isEdit"></el-radio> -->
                                </template>
                            </el-table-column>
                            <el-table-column label='操作'>
                                <template slot-scope="scope" >
                                    <el-button v-on:click="handleDelete(scope.$index,scope.row,2)" type="text" size="small">删除</el-button>
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
                            <!-- <el-table-column prop="addressType" label="地址类型" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.addressType" 
                                        type="text"    
                                        @change='handleOuChange(scope.$index,scope.row)'
                                        v-on:click="handleOuEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column> -->

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
                                    <el-button v-on:click="handleDelete(scope.$index,scope.row,3)" type="text" size="small">删除</el-button>
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
                <div class="bgcolor"><label>创建人</label><el-input v-model="auditInformation.createName" placeholder="" disabled="disabled"></el-input></div>
                <div class="bgcolor"><label>创建时间</label><el-date-picker v-model="auditInformation.createTime" type="date" placeholder="" disabled="disabled"></el-date-picker></div>
                <div class="bgcolor"><label>修改人</label><el-input v-model="auditInformation.modifyName" placeholder="" disabled="disabled"></el-input></div>
                <div class="bgcolor"><label>修改时间</label><el-date-picker v-model="auditInformation.modifyTime" type="date" placeholder="" disabled="disabled"></el-date-picker></el-input></div>
                <!-- <div class="bgcolor"><label>启用日期</label><el-date-picker v-model="auditInformation.startTime" type="date" placeholder="选择启用日期"></el-date-picker></div>
                <div class="bgcolor"><label>封存日期</label><el-date-picker v-model="auditInformation.finishTime" type="date" placeholder="选择封存日期"></el-date-picker></div>
                <div class="bgcolor"><label>封存人</label><el-input v-model="auditInformation.finishName" placeholder="请录入封存人"></el-input></div>     -->
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
                <p class="dialog_body_icon"><i class="el-icon-warning"></i></p>
                <p class="dialog_font dialog_body_message">此操作将忽略您的更改，是否继续？</p>
            </el-col>
        </el-col>
        <!--  -->
        <span slot="footer">
            <button class="dialog_footer_bt dialog_font" @click="sureDoing">确 认</button>
            <button class="dialog_footer_bt dialog_font" @click="dialogUserConfirm = false">取 消</button>
        </span>
    </el-dialog>
    <!-- dialog -->

    <!-- dialog是否删除提示 -->
    <el-dialog :visible.sync="dialogDelConfirm" class="dialog_confirm_message" width="25%">
        <template slot="title">
            <span class="dialog_font">提示</span>
        </template>
        <el-col :span="24" style="position: relative;">
            <el-col :span="24">
                <p class="dialog_body_icon"><i class="el-icon-warning"></i></p>
                <p class="dialog_font dialog_body_message">确认删除？</p>
            </el-col>
        </el-col>
        
        <span slot="footer">
            <button class="dialog_footer_bt dialog_font" @click="sureDel">确 认</button>
            <button class="dialog_footer_bt dialog_font" @click="dialogDelConfirm = false">取 消</button>
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
                    <p class="dialog_font dialog_body_message">数据提交有误!</p>
                </el-col>
                <el-collapse-transition>
                    
                        <el-col :span="24" v-show="detail_message_ifShow" class="dialog_body_detail_message">
                            <vue-scroll :ops="option">
                                <span class="dialog_font">{{response.message}}</span>
                                <h4 class="dialog_font dialog_font_bold">其他信息:</h4>
                                <span class="dialog_font">{{response.details}}<br><span :key="index" v-for="(value,index) in response.validationErrors"><span :key="ind" v-for="(val,ind) in value.members">{{val}}</span><br></span></span>
                            </vue-scroll> 
                        </el-col>
                      
                </el-collapse-transition>   
            </el-col>
            
            <span slot="footer">
                <button class="dialog_footer_bt dialog_font" @click="errorMessage = false">确 认</button>
                <button class="dialog_footer_bt dialog_font" @click="errorMessage = false">取 消</button>
            </span>
        </el-dialog>
    <!-- dialog -->                                                                  
</div>
</template>

<script>
export default({
    data() {
        return{
            defaultOuId:'',//默认ouid
            ifShow:true,
            ifModify:false,//判断信息是否修改过
            backCancle:'',//判断是返回还是取消
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
            // item:{
            //     id:'',
            //     areaName:'',
            // },
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
                areaProArray:[],//行政地区(省)
                areaCityArray:[],//行政地区(市)
                areaDisArray:[],//行政地区(区)
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
                    children: 'childItems',
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

            createContactParams:{//创建客户资料参数
                'groupId':1,//集团Id
                'ouId':'',//组织单元id
                'contactCode':'',//客户编码
                'contactName':'',//客户名称
                'contactFullName':'',//客户全称
                'mnemonic':'',//助记码
                'contactClassId':'',//客户分类
                'contactTypeId':0,//客户类型
                'contactWorkPropertyId':0,//客户性质
                'contactGradeId':'',//客户等级ID,
                'isSupplier':'1',//是否为供应商
                'isCustomer':'1',//是否客户
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
                'status':1,//状态
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
            addBankList:[],//需要添加的银行信息

            addressData:[],//地址数据列表，开始为空
            addAddressList:[],//需要添加的地址信息

            ouData:[],//组织数据列表，开始为空
            updataOuList:[],//修改的组织信息
            addOuList:[],//需要添加的组织信息

            multipleSelection:[],//需要删除的银行数组
            multipleSelectionAdd:[],//需要删除的地址数组
            multipleSelectionOu:[],//需要删除的组织数组

            bankIndex:[],
            addIndex:[],
            ouIndex:[],

            x:0,
            y:0,
            z:0,
            xrows:[],
            yrows:[],
            zrows:[],
            backId:'',
            //---确认删除-----------------               
            dialogDelConfirm:false,//用户删除保存提示信息
            // row:{},//存储用户点击删除条目数据
            // choseAjax:'',//存储点击单个删除还是多天删除按钮判断信息
            //--------------------  

            //---信息修改提示框------------
            dialogUserConfirm:false,//信息更改提示控制
            //----------------------------
            //---错误提示框----------------
            option: {
                vRail: {
                    width: '5px',
                    pos: 'right',
                    background: "#9093994d",
                },
                vBar: {
                    width: '5px',
                    pos: 'right',
                    background: '#9093994d',
                },
                hRail: {
                    height: '0',
                },
            },
            errorMessage:false,
            detail_message_ifShow:false,
            response:{
                details:'',
                message:'',
                validationErrors:[],
            },
            //-----------------------------
            who:'',//删除的是谁以及是否是多项删除
            // whoId:'',//单项删除的id
            whoIndex:'',//单项删除的index
            //-----------------------------
            nameWithFull:false,
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
            return this.Validator.value(value).maxLength(50);
        },
        'createContactParams.contactClassId': function (value) {//客户分类
            return this.Validator.value(value).required().integer();
        },
        'createContactParams.contactWorkPropertyId': function (value) {//客户性质
            return this.Validator.value(value).required().integer();
        },
        'createContactParams.contactGradeId': function (value) {//客户等级
            return this.Validator.value(value).integer();
        },
        'createContactParams.isCustomer': function (value) {//客户类型
            return this.Validator.value(value).required().integer();
        },
        'createContactParams.ficaOuId': function (value) {//对应财务组织
            return this.Validator.value(value).required().integer();
        },
        'createContactParams.taxCode': function (value) {//纳税登记号 
            return this.Validator.value(value).maxLength(50);
        },
        'createContactParams.opAreaId': function (value) {//业务地区区号
            return this.Validator.value(value).integer();
        },
        'createContactParams.adAreaId': function (value) {//行政地区
            return this.Validator.value(value).integer();
        },
        'createContactParams.legalPerson': function (value) {//法人代表
            return this.Validator.value(value).maxLength(50);
        },
        'createContactParams.regAddress': function (value) {//注册地址
            return this.Validator.value(value).maxLength(50);
        },
        'createContactParams.manager': function (value) {//负责人
            return this.Validator.value(value).maxLength(50);
        },
        'createContactParams.phone': function (value) {//电话
            return this.Validator.value(value).maxLength(50);
        },
        'createContactParams.remark': function (value) {//备注
            return this.Validator.value(value).maxLength(200);
        },
        'createContactParams.status': function (value) {//状态
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
            //所属组织
            self.$axios.gets('/api/services/app/OuManagement/GetAllTree').then(function(res){
                // console.log(res);
                self.ouAr = res.result;
                self.loadIcon();
            },function(res){
                console.log('err'+res)
            });
            //获取当前默认ouid
            self.$axios.gets('/api/services/app/OuManagement/GetWithCurrentUser').then(function(res){
                // console.log(res);
                self.defaultOuId = res.result.id;
                self.createContactParams.ouId = self.defaultOuId;
                //加载完成拿回下拉的默认值
                self.ouItem.ouFullname = res.result.ouFullname;
                self.ouItem.id =  res.result.id;

                //业务地区
                self.$axios.gets('/api/services/app/OpAreaManagement/GetTreeByOuId',{OuId:self.defaultOuId}).then(function(res){
                    console.log(res);
                    if(res.result&&res.result.length>0){
                        self.opAr = res.result;
                        self.loadIcon();
                    }else{
                        self.opItem.areaName = '暂无业务地区'
                    }
                    
                },function(res){
                    console.log('err'+res)
                });

            },function(res){
                console.log('err'+res)
            });

            //客户分类
            self.$axios.gets('/api/services/app/ContactClassManagement/GetTreeList',{Ower:1}).then(function(res){
                console.log(res);
                self.cuAr = res;
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
                console.log(res);
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
            // self.$axios.gets('/api/services/app/AreaManagement/GetAllDataTree',{AreaType:2}).then(function(res){
            //     console.log(res);
            //     self.adAr = res.result;
            //     self.loadIcon();
            // },function(res){
            //     console.log('err'+res)
            // });
            
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
                // console.log(res);
                self.addAr = res.result;
            },function(res){
                console.log('err'+res)
            });
            //运输方式
            self.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'TransportMethod'}).then(function(res){
                // console.log(res);
                self.tranAr = res.result;
            },function(res){
                console.log('err'+res)
            });
            
        },
        //------------------------------------------------------------------

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
            $('.tipsWrapper').css({display:'block'})
            // console.log(self.createContactParams)
            self.$validate().then(function(success){
                if(success){
                    $('.tipsWrapper').css({display:'none'})
                    self.$axios.posts('/api/services/app/ContactManagement/Create',self.createContactParams).then(function(res){
                        console.log(res);
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
                        self.createAddress();

                        for(let i in self.addOuList){
                            self.addOuList[i].contactId = res.result.id;
                        }
                        self.createOu();

                        self.goModify(self.backId);
                    },function(res){
                        console.log(res)
                        self.open('创建失败','el-icon-error','faildERP')
                        self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                        self.errorMessage=true;
                    });
                }
            })
            // console.log(self.createContactParams)
            

        },
        //---------------------------------------------------------
        
        //---创建从表-----------------------------------------------
        createBank:function(){//创建银行资料
            let self = this;
            if(self.addBankList.length>0){    
                this.$axios.posts('/api/services/app/ContactBankManagement/CUDAggregate',{createList:self.addBankList,updateList:[],deleteList:[]}).then(function(res){         
                    self.open('创建银行资料成功','el-icon-circle-check','successERP');
                    // console.log(res)
                }),function(res){
                    self.open('创建银行资料失败','el-icon-error','faildERP');
                };
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
        //------------------------------------------------------

        //---从表增行--------------------------------------------
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
                    "isDefault": false,
                    index:self.x,
                };
                self.bankData.unshift(self.xrows.newCol);
                self.addBankList.unshift(self.xrows.newCol)
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
                    "isDefault": false
                };
                self.addressData.unshift(self.yrows.newCol);
                self.addAddressList.unshift(self.yrows.newCol)
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

        //-----------------------------------------------------

        //---确认删除-------------------------------------------
        sureDel:function(){
            let self = this;

            if(self.who == 1){//银行单项删除
                self.bankData.splice(self.whoIndex,1);
                self.addBankList.splice(self.whoIndex,1);
                self.dialogDelConfirm = false;
            };
            if(self.who == 2){
                self.addressData.splice(self.whoIndex,1);
                self.addAddressList.splice(self.whoIndex,1)
                self.dialogDelConfirm = false;
            };
            if(self.who == 3){
                self.ouData.splice(self.whoIndex,1);
                self.addOuList.splice(self.whoIndex,1);
                self.dialogDelConfirm = false;
            }
            // if(self.who == 4){
            //     for(let i in self.bankIndex){
            //         self.bankData.splice(self.bankIndex[i],1)
            //     }
            //     console.log(self.bankIndex[i])
            //     self.dialogDelConfirm = false;
            // }

        },
        //-----------------------------------------------------
        
        //---从表表格内删除-------------------------------------------
        handleBankDelete:function(index,row,who){//表格内删除操作 who:1银行 2地址 3使用组织
            let self = this;
            self.who = who;
            self.whoIndex = index;
            self.dialogDelConfirm = true;
        },
        //-------------------------------------------------------

        //---从表多项删除-----------------------------------------
        delMoreBank:function(num){
            let self = this;
            for(let i in self.multipleSelection){
                self.bankIndex.push(self.multipleSelection[i].index)
            }
            if(self.bankIndex.length>0){
                self.dialogDelConfirm = true; 
                self.who = num;
                console.log(self.bankIndex)
            }else{
                self.$message({
                    type: 'info',
                    message: '请勾选需要删除的数据！'
                });
            }
        },
        //------------------------------------------------------

        //----------------------------------------------------------
        
        getCurrentRow:function(index,row){//银行默认单选框
            let self = this;
            for(let i in self.bankData){
                self.bankData[i].isDefault = false;
            }
            self.bankData[index].isDefault = true;
            for(let i in addBankList){
                self.addBankList[i].isDefault = false;
            }
            self.addBankList[index].isDefault = true;
            
        },
        //----------------------------------------------------------

        //---从表复选框---------------------------------------
        handleSelectionChange:function(val){//点击复选框选中的数据
                this.multipleSelection = val;
                console.log(this.multipleSelection)
        },
        handleSelectionChange2:function(val){//点击复选框选中的数据
                this.multipleSelectionAdd = val;
        },
        handleSelectionChange3:function(val){//点击复选框选中的数据
                this.multipleSelectionOu = val;
        },
        //---------------------------------------------------

        //---判断是否有修改过的内容---------------------------
        Modify:function(){//判断主表是否修改过
            let self = this;
            self.ifModify = true;
        },
        Cancel:function(){
            let self = this;
            self.createContactParams = {//创建客户资料参数
                'groupId':1,//集团Id
                'ouId':'',//组织单元id
                'contactCode':'',//客户编码
                'contactName':'',//客户名称
                'contactFullName':'',//客户全称
                'mnemonic':'',//助记码
                'contactClassId':'',//客户分类
                'contactTypeId':0,//客户类型
                'contactWorkPropertyId':0,//客户性质
                'contactGradeId':'',//客户等级ID,
                'isSupplier':'1',//是否为供应商
                'isCustomer':'1',//是否客户
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
                'status':'未启用',//状态
            }
        },
        //--------------------------------------------------

        //---修改返回提示-----------------------------------------
        isBack(num){
            let self=this;
            if(self.ifModify){
                self.dialogUserConfirm=true;
            }else{
                self.back()
            }
        },
        sureDoing:function(){
            let self = this;
            self.back();
        },
        //-------------------------------------------------------

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
            self.createContactParams.opAreaId = '';
            self.opItem.areaName = '';

            self.ouItem.id = data.id;
            self.ouItem.ouFullname = data.ouFullname;
            self.$nextTick(function(){
                $('#ou_confirmSelect').click()
            })
            //点击所属组织，业务地区跟着变动
            self.$axios.gets('/api/services/app/OpAreaManagement/GetTreeByOuId',{OuId:data.id}).then(function(res){
                console.log(res);
                if(res.result&&res.result.length>0){
                    self.opAr = res.result;
                    self.loadIcon();
                }else{
                    self.opItem.areaName = '暂无业务地区';
                    self.opItem.id = '';
                }
            },function(res){
                console.log('err'+res)
            });
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
            // if($(e.target).parent('.el-textarea').hasClass($(this).attr('name'))){
            //     $(this).addClass('display_block')
            // }else{
            //     $(this).removeClass('display_block')
            // }
            // })
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
        //-------------------------------------------------------------

        //---编辑名称，全称跟着改变-------------------------------------
        editName:function(){
            let self = this;
            self.Modify();
            if(!self.nameWithFull&&self.createContactParams.contactFullName == ''){
                self.createContactParams.contactFullName = self.createContactParams.contactName;
            }
        },
        editFullName:function(){
            let self = this;
            self.Modify();
            self.nameWithFull = true;
        },
        //------------------------------------------------------------
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
    text-align: center;
}
.customerBasicForm .bgg .el-input__inner{
    background-color:#FAFAFA;
    text-align: center;
}
.customerBasicForm .el-select-dropdown__item{
    text-align: center;
}
.el-select.areaDrop,.el-input.areaEntry{
    width: 100px;
}
.areaDrop input,.areaEntry input{
    border: none!important;
}
.areaDrop .el-input__inner,.areaEntry .el-input__inner{
    height: 32px!important;
}
  </style>
  
