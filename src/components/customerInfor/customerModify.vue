<template>
    <div class="customerBasicForm">
        <el-row class="fixed">
            <el-col :span="24" >
                <button class="erp_bt bt_back" @click="isBack">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_back.png">
                    </div>
                    <span class="btDetail">返回</span>
                </button>

                <!-- <button @click="Update()" class="erp_bt bt_modify">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_modify.png">
                    </div>
                    <span class="btDetail">修改</span>
                </button> -->

                <button class="erp_bt bt_add" @click="goDetail" v-show='!ifModify&&!ifDoModify'>
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_add.png">
                    </div>
                    <span class="btDetail">新增</span>
                </button>

                <button class="erp_bt bt_del" @click="delCustomer(7)" v-show='!ifModify&&!ifDoModify'>
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_del.png">
                    </div>
                    <span class="btDetail">删除</span>
                </button>

                <button class="erp_bt bt_save" @click="saveModify" v-show='ifModify||ifDoModify'>
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_save.png">
                    </div>
                    <span class="btDetail">保存</span>
                </button>

                <button class="erp_bt bt_saveAdd" v-show='ifModify||ifDoModify'>
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_saveAdd.png">
                    </div>
                    <span class="btDetail">保存并新增</span>
                </button>

                <button @click="Cancel()" class="erp_bt bt_cancel" v-show='ifModify'>
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_cancel.png">
                    </div>
                    <span class="btDetail">取消</span>
                </button>

                
                
                <span @click="ifShow = !ifShow" class="upBt">收起<i class="el-icon-arrow-down" @click="ifShow = !ifShow" :class="{rotate : !ifShow}"></i></span>
            </el-col>
        </el-row>
        
        <el-collapse-transition>
            <div v-show="ifShow">   
                <el-row class="bg-white ft12 pr10 pt10">
                    <el-col :span="24" class="getPadding"> 
                        <div class="tipsWrapper" name="ouId">
                            <div class="errorTips" :class="{block : !validation.hasError('customerData.ouId')}">
                                <p class="msgDetail">错误提示：所属组织{{ validation.firstError('customerData.ouId') }}</p>
                            </div>
                        </div>

                        <div class="tipsWrapper" name="contactCode">
                            <div class="errorTips" :class="{block : !validation.hasError('customerData.contactCode')}">
                                <p class="msgDetail">编码{{ validation.firstError('customerData.contactCode') }}</p>
                            </div>
                        </div>

                        <div class="tipsWrapper" name="contactName">
                            <div class="errorTips" :class="{block : !validation.hasError('customerData.contactName')}">
                                <p class="msgDetail">名称{{ validation.firstError('customerData.contactName') }}</p>
                            </div>
                        </div>

                        <div class="tipsWrapper" name="contactFullName">
                            <div class="errorTips" :class="{block : !validation.hasError('customerData.contactFullName')}">
                                <p class="msgDetail">全称{{ validation.firstError('customerData.contactFullName') }}</p>
                            </div>
                        </div>

                        <div class="tipsWrapper" name="mnemonic">
                            <div class="errorTips" :class="{block : !validation.hasError('customerData.mnemonic')}">
                                <p class="msgDetail">助记码{{ validation.firstError('customerData.mnemonic') }}</p>
                            </div>
                        </div>

                        <div class="tipsWrapper" name="contactClassId">
                            <div class="errorTips" :class="{block : !validation.hasError('customerData.contactClassId')}">
                                <p class="msgDetail">客户分类{{ validation.firstError('customerData.contactClassId') }}</p>
                            </div>
                        </div>

                        <div class="tipsWrapper" name="contactWorkPropertyId">
                            <div class="errorTips" :class="{block : !validation.hasError('customerData.contactWorkPropertyId')}">
                                <p class="msgDetail">客户性质{{ validation.firstError('customerData.contactWorkPropertyId') }}</p>
                            </div>
                        </div>

                        <div class="tipsWrapper" name="contactGradeId">
                            <div class="errorTips" :class="{block : !validation.hasError('customerData.contactGradeId')}">
                                <p class="msgDetail">客户等级{{ validation.firstError('customerData.contactGradeId') }}</p>
                            </div>
                        </div>

                        <div class="tipsWrapper" name="contactTypeId">
                            <div class="errorTips" :class="{block : !validation.hasError('customerData.contactTypeId')}">
                                <p class="msgDetail">客户类型{{ validation.firstError('customerData.contactTypeId') }}</p>
                            </div>
                        </div>

                        <div class="tipsWrapper" name="ficaOuId">
                            <div class="errorTips" :class="{block : !validation.hasError('customerData.ficaOuId')}">
                                <p class="msgDetail">对应财务组织{{ validation.firstError('customerData.ficaOuId') }}</p>
                            </div>
                        </div>

                        <div class="tipsWrapper" name="taxCode">
                            <div class="errorTips" :class="{block : !validation.hasError('customerData.taxCode')}">
                                <p class="msgDetail">纳税登记号{{ validation.firstError('customerData.taxCode') }}</p>
                            </div>
                        </div>

                        <div class="tipsWrapper" name="opAreaId">
                            <div class="errorTips" :class="{block : !validation.hasError('customerData.opAreaId')}">
                                <p class="msgDetail">业务地区{{ validation.firstError('customerData.opAreaId') }}</p>
                            </div>
                        </div>

                        <div class="tipsWrapper" name="adAreaId">
                            <div class="errorTips" :class="{block : !validation.hasError('customerData.adAreaId')}">
                                <p class="msgDetail">行政地区{{ validation.firstError('customerData.adAreaId') }}</p>
                            </div>
                        </div>

                        <div class="tipsWrapper" name="legalPerson">
                            <div class="errorTips" :class="{block : !validation.hasError('customerData.legalPerson')}">
                                <p class="msgDetail">法人代表{{ validation.firstError('customerData.legalPerson') }}</p>
                            </div>
                        </div>

                        <div class="tipsWrapper" name="regAddress">
                            <div class="errorTips" :class="{block : !validation.hasError('customerData.regAddress')}">
                                <p class="msgDetail">注册地址{{ validation.firstError('customerData.regAddress') }}</p>
                            </div>
                        </div>

                        <div class="tipsWrapper" name="manager">
                            <div class="errorTips" :class="{block : !validation.hasError('customerData.manager')}">
                                <p class="msgDetail">负责人{{ validation.firstError('customerData.manager') }}</p>
                            </div>
                        </div>

                        <div class="tipsWrapper" name="phone">
                            <div class="errorTips" :class="{block : !validation.hasError('customerData.phone')}">
                                <p class="msgDetail">电话{{ validation.firstError('customerData.phone') }}</p>
                            </div>
                        </div>

                        <div class="tipsWrapper" name="remark">
                            <div class="errorTips" :class="{block : !validation.hasError('customerData.remark')}">
                                <p class="msgDetail">备注{{ validation.firstError('customerData.remark') }}</p>
                            </div>
                        </div>

                        <div class="tipsWrapper" name="status">
                            <div class="errorTips" :class="{block : !validation.hasError('customerData.status')}">
                                <p class="msgDetail">状态{{ validation.firstError('customerData.status') }}</p>
                            </div>
                        </div>
                        

                        <div class="bgcolor">
                            <label><small>*</small>所属组织</label>
                            <el-select v-model="customerData.ouId"
                                    placeholder=""
                                    class="ouId"
                                    @focus="showErrprTipsSelect"
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
                                    @focus="showErrprTips"
                                    :class="{redBorder : validation.hasError('customerData.contactCode')}"
                                    class="contactCode"
                                    @change='Modify()'></el-input>
                        </div>


                        <div class="bgcolor">
                            <label><small>*</small>名称</label>
                            <el-input v-model="customerData.contactName" 
                                    placeholder=""
                                    @focus="showErrprTips"
                                    :class="{redBorder : validation.hasError('customerData.contactName')}"
                                    class="contactName"
                                    @change='Modify()'></el-input>
                        </div>


                        <div class="bgcolor">
                            <label><small>*</small>全称</label>
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
                                    @change='Modify()'
                                    @focus="showErrprTipsSelect"
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
                                    @change='Modify()'
                                    @focus="showErrprTipsSelect"
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
                                    @change='Modify()'
                                    @focus="showErrprTipsSelect"
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
                                    @change='Modify()'
                                    @focus="showErrprTipsSelect"
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
                                    class="ficaOuId"
                                    @focus="showErrprTipsSelect"
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
                                    @focus="showErrprTips"
                                    class="taxCode"
                                    :class="{redBorder : validation.hasError('customerData.taxCode')}"
                                    @change='Modify()'></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>业务地区</label>
                            <el-select v-model="customerData.opAreaId"
                                    class="opAreaId"
                                    @focus="showErrprTipsSelect"
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

                        <div class="bgcolor area">
                            <label>行政地区</label>
                            <div class="areaBox">
                                <el-select v-model="customerData.adAreaId" class="areaDrop" placeholder="选择省">
                                    <el-option v-for="item in areaProArray" :key="item.id" :label="item.areaName" :value="item.id">
                                    </el-option>
                                </el-select>
                                <el-select v-model="customerData.adAreaId" class="areaDrop" placeholder="选择市">
                                    <el-option v-for="item in areaCityArray" :key="item.basOuTypes" :label="item.label" :value="item.basOuTypes">
                                    </el-option>
                                </el-select>
                                <el-select v-model="customerData.adAreaId" class="areaDrop" placeholder="选择区">
                                    <el-option v-for="item in areaDisArray" :key="item.basOuTypes" :label="item.label" :value="item.basOuTypes">
                                    </el-option>
                                </el-select>
                                <el-input class="areaEntry" placeholder="街道办地址"></el-input>
                            </div>
                        </div>

                        <div class="bgcolor">
                            <label>法人代表</label>
                            <el-input v-model="customerData.legalPerson" 
                                    placeholder=""
                                    class="legalPerson"
                                    @focus="showErrprTips"
                                    :class="{redBorder : validation.hasError('customerData.legalPerson')}"
                                    @change='Modify()'></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>注册地址</label>
                            <el-input v-model="customerData.regAddress" 
                                    placeholder=""
                                    class="regAddress"
                                    @focus="showErrprTips"
                                    :class="{redBorder : validation.hasError('customerData.regAddress')}"
                                    @change='Modify()'></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>负责人</label>
                            <el-input v-model="customerData.manager" 
                                    placeholder=""
                                    @focus="showErrprTips"
                                    class="manager"
                                    :class="{redBorder : validation.hasError('customerData.manager')}"
                                    @change='Modify()'></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>电话</label>
                            <el-input v-model="customerData.phone" 
                                    placeholder=""
                                    @focus="showErrprTips"
                                    class="phone"
                                    :class="{redBorder : validation.hasError('customerData.phone')}"
                                    @change='Modify()'></el-input>
                        </div>
                        
                        <div class="bgcolor">
                            <label>备注</label>
                            <el-input v-model="customerData.remark" 
                                    placeholder=""
                                    @focus="showErrprTips"
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
                                    @focus="showErrprTipsSelect"
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
                            <button class="erp_bt bt_add" @click="addColbank">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_add.png">
                                </div>
                                <span class="btDetail">增行</span>
                            </button>
                            
                            <button class="erp_bt bt_del" @click="delMoreBank(4)">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_del.png">
                                </div>
                                <span class="btDetail">删除</span>
                            </button>

                            <button class="erp_bt bt_auxiliary mb10" @click='test'>
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_auxiliary.png">
                                </div>
                                <span class="btDetail">辅助功能</span>
                            </button>
                            
                    
                            <el-table :data="bankData" stripe border style="width: 100%" @selection-change="handleSelectionChange" class="all-table">
                                <el-table-column type="selection"></el-table-column>
                                <el-table-column prop="settlementCurrencyId" label="结算币种" width="180">
                                    <template slot-scope="scope">
                                        <el-select  v-model="scope.row.settlementCurrencyId" :class="[scope.$index%2==0?'bgw':'bgp']">
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
                                            @change="handleBankChange(scope.$index,scope.row)"/> 
                                    </template>
                                </el-table-column>

                                <el-table-column prop="accountName" label="银行账户" width="180">
                                    <template slot-scope="scope">
                                        <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.accountName" 
                                            type="text"    
                                            @change="handleBankChange(scope.$index,scope.row)"/> 
                                    </template>
                                </el-table-column>

                                <el-table-column prop="openingBank" label="开户银行" width="180">
                                    <template slot-scope="scope">
                                        <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.openingBank" 
                                            type="text"    
                                            @change="handleBankChange(scope.$index,scope.row)"/> 
                                    </template>
                                </el-table-column>

                                <el-table-column prop="contactPerson" label="联系人" width="180">
                                    <template slot-scope="scope">
                                        <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.contactPerson" 
                                            type="text"   
                                            @change="handleBankChange(scope.$index,scope.row)"/> 
                                    </template>
                                </el-table-column>

                                <el-table-column prop="phone" label="联系电话" width="180">
                                    <template slot-scope="scope">
                                        <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.phone" 
                                            type="text"    
                                            @change="handleBankChange(scope.$index,scope.row)"/> 
                                    </template>
                                </el-table-column>

                                <el-table-column prop="isDefault" label="默认">
                                    <template slot-scope="scope">
                                        <el-radio  :label="true" 
                                                    v-model="scope.row.isDefault" 
                                                    @change.native="getCurrentRow(scope.$index,scope.row)" 
                                                    @change="handleBankChange(scope.$index,scope.row)"></el-radio>
                                    </template>
                                </el-table-column>

                                <el-table-column label='操作'>
                                    <template slot-scope="scope" >
                                        <el-button @click="handleDelete(scope.$index,scope.row,1)" type="text" size="small">删除</el-button>
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

                            <button class="erp_bt bt_del" @click="delMoreAdd(5)">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_del.png">
                                </div>
                                <span class="btDetail">删除</span>
                            </button>

                            <button class="erp_bt bt_auxiliary" style="margin-bottom:10px;">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_auxiliary.png">
                                </div>
                                <span class="btDetail">辅助功能</span>
                            </button>
                            
                    
                            <el-table :data="addressData" stripe border style="width: 100%;" election-change="handleSelectionChange2" class="all-table">

                                <el-table-column prop="completeAddress" label="供货地址" width="180">
                                    <template slot-scope="scope">
                                        <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.completeAddress" 
                                            type="text"    
                                            @change="handleAddressChange(scope.$index,scope.row)"/> 
                                    </template>
                                </el-table-column>

                                <el-table-column prop="completeAddress" label="省" width="180">
                                    <template slot-scope="scope">
                                        <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.completeAddress" 
                                            type="text"    
                                            @change="handleAddressChange(scope.$index,scope.row)"/> 
                                    </template>
                                </el-table-column>

                                <el-table-column prop="id" label="市" width="180">
                                    <template slot-scope="scope">
                                        <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.id" 
                                            type="text"    
                                            @change="handleAddressChange(scope.$index,scope.row)"/> 
                                    </template>
                                </el-table-column>

                                <el-table-column prop="phone" label="区" width="180">
                                    <template slot-scope="scope">
                                        <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.phone" 
                                            type="text"   
                                            @change="handleAddressChange(scope.$index,scope.row)"/> 
                                    </template>
                                </el-table-column>

                                <el-table-column prop="contactPerson" label="联系人" width="180">
                                    <template slot-scope="scope">
                                        <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.contactPerson" 
                                            type="text"    
                                            @change="handleAddressChange(scope.$index,scope.row)"/> 
                                    </template>
                                </el-table-column>

                                <el-table-column prop="contactPerson" label="联系电话" width="180">
                                    <template slot-scope="scope">
                                        <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.phone" 
                                            type="text"    
                                            @change="handleAddressChange(scope.$index,scope.row)"/> 
                                    </template>
                                </el-table-column>

                                <el-table-column prop="isDefault" label="默认">
                                    <template slot-scope="scope">
                                        <el-checkbox v-model="addressData[scope.$index].isDefault"></el-checkbox>
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

                            <button class="erp_bt bt_del" @click="delMoreAdd(6)">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_del.png">
                                </div>
                                <span class="btDetail">删除</span>
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
                                            @change="handleOuChange(scope.$index,scope.row)" /> 
                                    </template>
                                </el-table-column>

                                <el-table-column prop="transport_method_id" label="运输方式" width="540">
                                    <template slot-scope="scope">
                                        <el-select  v-model="scope.row.transport_method_id" 
                                                    @change="handleOuChange(scope.$index,scope.row)"
                                                    :class="[scope.$index%2==0?'bgw':'bgp']">
                                            <el-option  v-for="item in tranAr" :key="item.itemValue" :label="item.itemName" :value="item.itemValue" >
                                            </el-option>
                                        </el-select>
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
                    <div class="bgcolor">
                        <label>创建人</label>
                        <el-input v-model="customerData.createdBy" placeholder="" disabled="disabled"></el-input>
                    </div>

                    <div class="bgcolor">
                        <label>创建时间</label>
                        <el-date-picker v-model="customerData.createdTime" type="date" placeholder="" disabled="disabled"></el-date-picker>
                    </div>

                    <div class="bgcolor">
                        <label>修改人</label>
                        <el-input v-model="customerData.modifiedBy" placeholder="" disabled="disabled"></el-input>
                    </div>

                    <div class="bgcolor">
                        <label>修改时间</label>
                        <el-date-picker v-model="customerData.modifiedTime" type="date" placeholder="" disabled="disabled"></el-date-picker>
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
    name:'customerModify',
    created:function(){
        let self = this;
        self.loadData();
        self.loadSelect();
    },
    data() {
        return{
            getOuId:'',//保存获取的ouid
            ifShow:true,
            radio:'',
            ifModify:false,//判断主表是否修改过
            ifDoModify:false,//判断从表是否修改过
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

            idArrayBank:{//银行多项删除的id
                ids:[]
            },
            idArrayAdd:{//地址多项删除的id
                ids:[]
            },
            idArrayOu:{//组织多项删除的id
                ids:[]
            },

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
            checkedAr:[],//进来时数据选中的默认框
            //---确认删除-----------------               
            dialogDelConfirm:false,//用户删除保存提示信息
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
            whoId:'',//单项删除的id
            whoIndex:'',//单项删除的index
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
            return this.Validator.value(value).required().maxLength(50);
        },
        'customerData.mnemonic': function (value) {//助记码
            return this.Validator.value(value).maxLength(50);
        },
        'customerData.contactClassId': function (value) {//客户分类
            return this.Validator.value(value).integer();
        },
        'customerData.contactWorkPropertyId': function (value) {//客户性质
            return this.Validator.value(value).integer();
        },
        'customerData.contactGradeId': function (value) {//客户等级
            return this.Validator.value(value).integer();
        },
        'customerData.contactTypeId': function (value) {//客户类型
            return this.Validator.value(value).integer();
        },
        'customerData.ficaOuId': function (value) {//对应财务组织
            return this.Validator.value(value).integer();
        },
        'customerData.taxCode': function (value) {//纳税登记号 
            return this.Validator.value(value).maxLength(50);
        },
        'customerData.opAreaId': function (value) {//业务地区区号
            return this.Validator.value(value).integer();
        },
        'customerData.adAreaId': function (value) {//行政地区
            return this.Validator.value(value).integer();
        },
        'customerData.legalPerson': function (value) {//法人代表
            return this.Validator.value(value).maxLength(50);
        },
        'customerData.regAddress': function (value) {//注册地址
            return this.Validator.value(value).maxLength(50);
        },
        'customerData.manager': function (value) {//负责人
            return this.Validator.value(value).maxLength(50);
        },
        'customerData.phone': function (value) {//电话
            return this.Validator.value(value).maxLength(50);
        },
        'customerData.remark': function (value) {//备注
            return this.Validator.value(value).maxLength(200);
        },
        'customerData.status': function (value) {//状态
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
    methods:{
        //---获取数据--------------------------------------------
        loadData:function(){
            let self = this;
            if(self.$route.params.id!='default'){
                //根据id获得的客户信息
                this.$axios.gets('/api/services/app/ContactManagement/Get',{id:self.$route.params.id}).then(function(res){
                    
                    self.customerData = res.result;
                    console.log(self.customerData)
                    self.getOuId = res.result.ouId;
                    self.createBankParams.contactId = self.$route.params.id;
                    self.createAddressParams.contactId = self.$route.params.id;
                    self.createOuParams.contactId = self.$route.params.id;

                    //业务地区
                    self.$axios.gets('/api/services/app/OpAreaManagement/GetTreeByOuId',{OuId:self.getOuId}).then(function(res){
                        // console.log(res);
                        self.opAr = res.result;
                        self.loadIcon();
                    },function(res){
                        console.log('err'+res)
                    });
                     
                    

                    //加载完成拿回的下拉框的默认值
                    self.ouItem.ouFullname = self.customerData.ouId_OuName;
                    self.ouItem.id =  self.customerData.ouId;

                    self.cuItem.id = self.customerData.contactClassId;
                    self.cuItem.cuFullname = self.customerData.contactClassId_ClassName;

                    self.adItem.areaName = self.customerData.adAreaId_AreaName;
                    self.adItem.id = self.customerData.adAreaId;

                    self.opItem.areaName = self.customerData.opAreaId_AreaName;
                    self.opItem.id = self.customerData.opAreaId;

                    self.fiItem.fiFullname = self.customerData.ficaOuId_OuName;
                    self.fiItem.id = self.customerData.ficaOuId;
                })
                
                self.loadBankData();//加载银行数据
                self.loadAddData();//加载地址数据
                self.loadOuData();//加载使用组织数据
                

            }
        },
        loadBankData:function(){//银行数据
            let self = this;
            //获取所有的银行信息，也可以用groupid获取，
            this.$axios.gets('/api/services/app/ContactBankManagement/GetListByContactId',{ContactId:self.$route.params.id}).then(function(res){
                console.log(res);
                self.bankData = res.result.items;
                for(let i in self.bankData){
                    if(self.bankData[i].isDefault == true){
                        self.checkedAr = self.bankData[i]
                    }
                }
            })
        },
        loadAddData:function(){//地址数据
            let self = this;
            //获取所有的地址信息，也可以用contactId获取
            self.$axios.gets('/api/services/app/ContactAddressManagement/GetAll',{SkipCount:'0',MaxResultCount:'100'}).then(function(res){
                // console.log(res);
                self.addressData = res.result.items;
            })
        },
        loadOuData:function(){//使用组织数据
            let self = this;
            //获取所有的组织信息，也可以用contactId获取
            self.$axios.gets('/api/services/app/ContactOuManagement/GetAll',{SkipCount:'0',MaxResultCount:'100'}).then(function(res){
                // console.log(res);
                self.ouData = res.result.items;
            })
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
            self.$axios.gets('/api/services/app/OuManagement/GetAllTree').then(function(res){
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
            // self.$axios.gets('/api/services/app/AreaManagement/GetAllDataTree',{AreaType:2}).then(function(res){
            //     // console.log(res);
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
            self.customerData.opAreaId = '';
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
            self.opItem.id = data.id;
            self.opItem.areaName = data.areaName;
            self.$nextTick(function(){
                $('#op_confirmSelect').click()
            })
        },
        //-----------------------------------------------------

        //---保存、修改数据---------------------------------------------
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
            $('.tipsWrapper').css({display:'block'});
            // console.log(self.customerData)
            self.$validate().then(function(success){
                if(success){
                    $('.tipsWrapper').css({display:'none'});
                    
                    self.$axios.posts('/api/services/app/ContactManagement/CUDAggregate',{createList:[],updateList:self.customerData,deleteList:[]}).then(function(res){
                        self.open('修改客户信息成功','el-icon-circle-check','successERP');
                        self.ifModify = false;
                    },function(res){
                        self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                        self.errorMessage=true;
                        self.open('修改失败','el-icon-error','faildERP');
                    })
                }
            });
            
        },
        saveBankModify:function(){//修改银行资料
            let self = this;
            if(self.updataBankList.length>0){
                self.$axios.posts('/api/services/app/ContactBankManagement/CUDAggregate',{createList:[],updateList:self.updataBankList,deleteList:[]}).then(function(res){
                        console.log(res);
                        self.open('修改银行资料成功','el-icon-circle-check','successERP');
                        self.updataBankList = [];
                    },function(res){
                        self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                        self.errorMessage=true;
                        self.open('修改银行资料失败','el-icon-error','faildERP');
                    })
            }
        },
        saveAddressModify:function(){//修改地址
            let self = this;
            if(self.updataAddressList.length>0){
                for(let i in self.updataAddressList){
                    self.$axios.posts('/api/services/app/ContactAddressManagement/CUDAggregate',{createList:[],updateList:self.updataAddressList,deleteList:[]}).then(function(res){
                        // console.log(res);
                        self.open('修改地址信息成功','el-icon-circle-check','successERP');
                        self.updataAddressList = [];
                    },function(res){
                        self.open('修改地址信息失败','el-icon-error','faildERP');
                        self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                        self.errorMessage=true;
                    })
                }
            }
        },
        saveOuModify:function(){//修改组织
            let self = this;
            if(self.updataOuList.length>0){
                for(let i in self.updataOuList){
                    self.$axios.posts('/api/services/app/CurrencyManagement/CUDAggregate',{createList:[],updateList:self.updataOuList,deleteList:[]}).then(function(res){
                        // console.log(res);
                        self.open('修改组织信息成功','el-icon-circle-check','successERP');
                        self.updataOuList = [];
                    },function(res){
                        self.open('修改组织信息失败','el-icon-error','faildERP');
                        self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                        self.errorMessage=true;
                    })
                }
            }
        },
        createBank:function(){//创建银行资料
            let self = this;

            if(self.addBankList.length>0){
                    self.$axios.posts('/api/services/app/ContactBankManagement/CUDAggregate',{createList:self.addBankList,updateList:[],deleteList:[]}).then(function(res){         
                        self.open('创建银行资料成功','el-icon-circle-check','successERP');
                        self.addBankList = [];
                    },function(res){
                        self.open('创建银行资料失败','el-icon-error','faildERP');
                        self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                        self.errorMessage=true;
                    })
            }
        },
        createAddress:function(){//创建地址资料
            let self = this;

            if(self.addAddressList.length>0){
                self.$axios.posts('/api/services/app/ContactAddressManagement/CUDAggregate',{createList:self.addAddressList,updateList:[],deleteList:[]}).then(function(res){         
                    self.open('创建地址信息成功','el-icon-circle-check','successERP');
                    self.addAddressList = [];
                },function(res){
                    self.open('创建地址信息失败','el-icon-error','faildERP');
                    self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                    self.errorMessage=true;
                })
            }
        },
        createOu:function(){//创建组织资料
            let self = this;

            if(self.addOuList.length>0){
                self.$axios.posts('/api/services/app/ContactOuManagement/CUDAggregate',{createList:self.addOuList,updateList:[],deleteList:[]}).then(function(res){         
                    self.open('创建组织信息成功','el-icon-circle-check','successERP');
                    self.addOuList = [];
                },function(res){
                    self.open('创建组织信息失败','el-icon-error','faildERP');
                    self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                    self.errorMessage=true;
                })
               
            }
        },
        //-------------------------------------------------------

        //---控制按钮显示及隐藏-----------------------------------     
        Cancel(){
            let self = this;
            // if(self.isEdit==false){
                // self.isEdit=!self.isEdit;
                self.loadData();
                self.ifModify = false;
                $('.tipsWrapper').css({display:'none'})
            // }
        },
        //-------------------------------------------------------

        // ---控制编辑----------------------------------------
        Modify:function(){//判断主表是否修改过
            let self = this;
            self.ifModify = true;
        },
        //---------------------------------------------------
        //---从表增行--------------------------------------------
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
                    "isDefault": false
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
                "contactId": self.createAddressParams.contactId,
                "addressType": '',
                "addressId": '3',
                "completeAddress": "",
                "contactPerson": "",
                "phone": "",
                "isDefault": false
            };
            self.addressData.unshift(self.yrows.newCol)
            self.addAddressList.unshift(self.yrows.newCol)
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
        //---------------------------------------------------

        //---从表修改-----------------------------------------
        handleBankChange:function(index,row){//银行修改
            // console.log(index)
            let self = this;
            let flag = false;
            self.ifDoModify = true;
            if(self.updataBankList.length==0&&row.id>0){
                flag = true;
            }else if(self.updataBankList.length>=1&&row.id>0){
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
        handleAddressChange:function(index,row){//地址修改
            let self = this;
            let flag = false;
            self.ifDoModify = true;
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
        handleOuChange:function(index,row){//使用组织修改
            let self = this;
            let flag = false;
            self.ifDoModify = true;
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
        //---------------------------------------------------

        //---从表默认单选框-----------------------------------
        getCurrentRow:function(index,row){//银行默认单选框
            let self = this;
            for(let i in self.bankData){
                self.bankData[i].isDefault = false;
            }
            self.bankData[index].isDefault = true;
            // self.updataBankList.push(row);
            self.updataBankList.push(self.checkedAr)
            
        },
        //---------------------------------------------------

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

        //---从表单项删除-------------------------------------

        handleDelete:function(index,row,who){//银行表格内删除操作
            let self = this;
            self.who = who;
            self.whoIndex = index;
            self.whoId = row.id;
            self.dialogDelConfirm = true;
        },
        //---------------------------------------------------

        //---确认删除-----------------------------------------
        sureDel:function(){
            let self = this;
            console.log(self.who)
            if(self.who == 1){//银行单项删除
                // console.log(self.whoId)
                if(self.whoId>0){
                    // console.log(self.dialogDelConfirm)
                    self.$axios.deletes('/api/services/app/ContactBankManagement/Delete',{id:self.whoId}).then(function(res){
                        self.open('删除银行资料成功','el-icon-circle-check','successERP');
                        self.bankData.splice(self.whoIndex,1);
                        self.dialogDelConfirm = false;
                        console.log(self.dialogDelConfirm)
                    },function(res){
                        self.open('删除银行资料失败','el-icon-error','faildERP');
                        self.dialogDelConfirm = false;
                        self.errorMessage=true;
                        self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                    })
                }else{
                    self.bankData.splice(self.whoIndex,1);
                    self.addBankList.splice(self.whoIndex,1);
                    self.dialogDelConfirm = false;
                    self.open('删除新增行成功','el-icon-circle-check','successERP');
                }
            }

            if(self.who == 2){//地址单项删除
                if(self.whoId>0){
                    self.$axios.deletes('/api/services/app/ContactAddressManagement/Delete',{id:self.whoId}).then(function(res){
                        self.open('删除地址资料成功','el-icon-circle-check','successERP');
                        self.addressData.splice(self.whoIndex,1);
                        self.dialogDelConfirm = false;
                    },function(res){
                        self.open('删除地址资料失败','el-icon-error','faildERP');
                        self.dialogDelConfirm = false;
                        self.errorMessage=true;
                        self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                        
                    })
                }else{
                    self.addressData.splice(self.whoIndex,1);
                    self.addAddressList.splice(self.whoIndex,1);
                    self.dialogDelConfirm = false;
                    self.open('删除新增行成功','el-icon-circle-check','successERP');
                }
            }

            if(self.who == 3){//使用组织单项删除
                if(self.whoId>0){
                    self.$axios.deletes('/api/services/app/ContactOuManagement/Delete',{id:self.whoId}).then(function(res){
                        self.open('删除使用组织成功','el-icon-circle-check','successERP');
                        self.ouData.splice(self.whoIndex,1);
                        self.dialogDelConfirm = false;
                    },function(res){
                        self.open('删除使用组织失败','el-icon-error','faildERP');
                        self.dialogDelConfirm = false;
                        self.errorMessage=true;
                        self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                    })
                }else{
                    self.ouData.splice(self.whoIndex,1);
                    self.addOuList.splice(self.whoIndex,1);
                    self.dialogDelConfirm = false;
                    self.open('删除新增行成功','el-icon-circle-check','successERP');
                }
            }

            if(self.who == 4){//银行多项删除  
                self.$axios.posts('/api/services/app/ContactBankManagement/BatchDelete',self.idArrayBank).then(function(res){
                    self.open('删除银行资料成功','el-icon-circle-check','successERP');
                    self.loadBankData();
                    self.dialogDelConfirm = false;
                },function(res){
                    self.open('删除银行资料失败','el-icon-error','faildERP');
                    self.dialogDelConfirm = false;
                    self.errorMessage = true;
                    self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                })    
            }

            if(self.who == 5){//地址多项删除  
                self.$axios.posts('/api/services/app/ContactAddressManagement/BatchDelete',self.idArrayAdd).then(function(res){
                    self.open('删除地址成功','el-icon-circle-check','successERP');
                    self.loadAddData();
                    self.dialogDelConfirm = false;
                },function(res){
                    self.open('删除地址失败','el-icon-error','faildERP');
                    self.dialogDelConfirm = false;
                    self.errorMessage = true;
                    self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                })    
            }

            if(self.who == 6){//使用组织多项删除  
                self.$axios.posts('/api/services/app/ContactOuManagement/BatchDelete',self.idArrayOu).then(function(res){
                    self.open('删除使用组织成功','el-icon-circle-check','successERP');
                    self.loadOuData();
                    self.dialogDelConfirm = false;
                },function(res){
                    self.open('删除使用组织失败','el-icon-error','faildERP');
                    self.dialogDelConfirm = false;
                    self.errorMessage = true;
                    self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                })    
            }

            if(self.who == 7){//删除
                self.$axios.deletes('/api/services/app/ContactManagement/Delete',{id:self.$route.params.id}).then(function(res){
                    self.open('删除资料成功','el-icon-circle-check','successERP');
                    self.back();
                    self.dialogDelConfirm = false;
                },function(res){
                    self.open('删除使用组织失败','el-icon-error','faildERP');
                    self.dialogDelConfirm = false;
                    self.errorMessage = true;
                    self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                }) 
            }


        },
        //---------------------------------------------------
        
        
        //---从表多项删除---------------------------------------------
        delMoreBank:function(num){//银行多项删除
            let self = this;

            for(let i in self.multipleSelection){
                self.idArrayBank.ids.push(self.multipleSelection[i].id)
            }

            if(self.idArrayBank.ids.length>0){
                if(self.idArrayBank.ids.indexOf(undefined)!=-1){
                    self.$message({
                        type: 'warning',
                        message: '新增数据请在行内删除'
                    });
                    return;
                }
                self.dialogDelConfirm = true;   
                self.who = num;
            }else{
                self.$message({
                    type: 'info',
                    message: '请勾选需要删除的数据！'
                });
            }
            
        },

        delMoreAdd:function(num){
            let self = this;

            for(let i in self.multipleSelectionAdd){
                self.idArrayAdd.ids.push(self.multipleSelectionAdd[i].id)
            }

            if(self.idArrayAdd.ids.length>0){
                if(self.idArrayAdd.ids.indexOf(undefined)!=-1){
                    self.$message({
                        type: 'warning',
                        message: '新增数据请在行内删除'
                    });
                    return;
                }
                self.dialogDelConfirm = true;   
                self.who = num;
            }else{
                self.$message({
                    type: 'info',
                    message: '请勾选需要删除的数据！'
                });
            }
        },

        delMoreOu:function(num){
            let self = this;

            for(let i in self.multipleSelectionOu){
                self.idArrayOu.ids.push(self.multipleSelectionOu[i].id)
            }

            if(self.idArrayOu.ids.length>0){
                if(self.idArrayOu.ids.indexOf(undefined)!=-1){
                    self.$message({
                        type: 'warning',
                        message: '新增数据请在行内删除'
                    });
                    return;
                }
                self.dialogDelConfirm = true;   
                self.who = num;
            }else{
                self.$message({
                    type: 'info',
                    message: '请勾选需要删除的数据！'
                });
            }
        },

        
        delCustomer:function(num){//删除此页客户资料
            let self = this;

            self.who = num;
            self.dialogDelConfirm = true;  
        },
        
        
          
        
        //-----------------------------------------------------------

        //---路由------open------------------------------------------
        back(){//点击新增跳转
            this.$store.state.url='/customer/customerList/default'
            this.$router.push({path:this.$store.state.url})//点击切换路由
        },
        goDetail(){//点击新增跳转
            this.$store.state.url='/customer/customerDetail/default'
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

        //---修改返回提示-----------------------------------------
        isBack(){
            let self=this;
            if(self.ifModify){
                self.dialogUserConfirm=true;
                // self.choseDoing='back'
            }else{
                self.back()
            }
        },
        sureDoing:function(){
            let self = this;
            self.back();
        },
        //-------------------------------------------------------
        //---提示错误----------------------------------------------
        showErrprTips(e){
            // $('.tipsWrapper').css({display:'none'})
            $('.tipsWrapper').each(function(){
                if($(e.target).parent('.el-input').hasClass($(this).attr('name'))){
                    $(this).addClass('display_block')
                }else{
                    $(this).removeClass('display_block')
                }
            })
        },
        showErrprTipsSelect(e){
            // $('.tipsWrapper').css({display:'none'})
            $('.tipsWrapper').each(function(){
                if($(e.target).parent('.el-input').parent('.el-select').hasClass($(this).attr('name'))){
                    $(this).addClass('display_block')
                }else{
                    $(this).removeClass('display_block')
                }
            })
        },
        showErrprTipsRangedate(e){
            // $('.tipsWrapper').css({display:'none'})
            $('.tipsWrapper').each(function(){
                if($(e.$el).hasClass($(this).attr('name'))){
                    $(this).addClass('display_block')
                }else{
                    $(this).removeClass('display_block')
                }
            })
        },
        showErrprTipsTextArea(e){
            // $('.tipsWrapper').css({display:'none'})
            $('.tipsWrapper').each(function(){
            if($(e.target).parent('.el-textarea').hasClass($(this).attr('name'))){
                $(this).addClass('display_block')
            }else{
                $(this).removeClass('display_block')
            }
            })
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
        test:function(){
            let self = this;
            console.log(self.checkedAr)
            console.log(self.addBankList)
            console.log(self.updataBankList)
        },
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
  
