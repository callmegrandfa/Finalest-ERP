<template>
    <div class="shop-modify">
        <el-row class="fixed">
            <el-col :span="24" >
                <button class="erp_bt bt_back" @click="isBack">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_back.png">
                    </div>
                    <span class="btDetail">返回</span>
                </button>

                <button class="erp_bt bt_add" @click="goDetail" v-show='!ifModify'>
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_add.png">
                    </div>
                    <span class="btDetail">新增</span>
                </button>

                <button class="erp_bt bt_del" @click="delCustomer(7)" v-show='!ifModify'>
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_del.png">
                    </div>
                    <span class="btDetail">删除</span>
                </button>

                <button class="erp_bt bt_save" @click="saveModify" v-show='ifModify'>
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_save.png">
                    </div>
                    <span class="btDetail">保存</span>
                </button>

                <button class="erp_bt bt_saveAdd" v-show='ifModify'>
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
                <el-row>
                    <el-col :span="24" class="getPadding"> 
                        <div class="tipsWrapper">
                            <div class="errorTips">
                                <p class="msgDetail">错误提示：
                                    <span :class="{block : !validation.hasError('shopData.ouId')}">
                                        所属组织{{ validation.firstError('shopData.ouId') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('shopData.shopCode')}">
                                        编码{{ validation.firstError('shopData.shopCode') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('shopData.shopName')}">
                                        名称{{ validation.firstError('shopData.shopName') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('shopData.shopFullName')}">
                                        全称{{ validation.firstError('shopData.shopFullName') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('shopData.shopWorkPropertyid')}">
                                        店铺性质{{ validation.firstError('shopData.shopWorkPropertyid') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('shopData.stockId')}">
                                        对应仓库{{ validation.firstError('shopData.stockId') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('shopData.shopGradeId')}">
                                        店铺等级{{ validation.firstError('shopData.shopGradeId') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('shopData.openingDate')}">
                                        开店日期{{ validation.firstError('shopData.openingDate') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('shopData.opAreaId')}">
                                        业务地区{{ validation.firstError('shopData.opAreaId') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('shopData.adAreaId')}">
                                        行政地区{{ validation.firstError('shopData.adAreaId') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('shopData.manager')}">
                                        负责人{{ validation.firstError('shopData.manager') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('shopData.phone')}">
                                        电话{{ validation.firstError('shopData.phone') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('shopData.tradingAreaid')}">
                                        商圈{{ validation.firstError('shopData.tradingAreaid') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('shopData.status')}">
                                        状态{{ validation.firstError('shopData.status') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('shopData.shopAddress')}">
                                        店铺地址{{ validation.firstError('shopData.shopAddress') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('shopData.longitude')}">
                                        经度{{ validation.firstError('shopData.longitude') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('shopData.latitude')}">
                                        纬度{{ validation.firstError('shopData.latitude') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('shopData.remark')}">
                                        备注{{ validation.firstError('shopData.remark') }},
                                    </span>
                                </p>
                            </div>
                        </div>
                        

                        <div class="bgcolor">
                            <label><small>*</small>所属组织</label>
                            <el-select v-model="shopData.ouId"
                                    placeholder=""
                                    class="ouId"
                                    @focus="showErrprTipsSelect"
                                    @change='Modify()'
                                    :class="{redBorder : validation.hasError('shopData.ouId')}">

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
                            <el-input v-model="shopData.shopCode" 
                                    placeholder=""
                                    @focus="showErrprTips"
                                    :class="{redBorder : validation.hasError('shopData.shopCode')}"
                                    class="shopCode"
                                    @change='Modify()'></el-input>
                        </div>


                        <div class="bgcolor">
                            <label><small>*</small>名称</label>
                            <el-input v-model="shopData.shopName" 
                                    placeholder=""
                                    @focus="showErrprTips"
                                    :class="{redBorder : validation.hasError('shopData.shopName')}"
                                    class="shopName"
                                    @change='Modify()'></el-input>
                        </div>


                        <div class="bgcolor">
                            <label><small>*</small>全称</label>
                            <el-input v-model="shopData.shopFullname" 
                                    placeholder=""
                                    @focus="showErrprTips"
                                    :class="{redBorder : validation.hasError('shopData.shopFullname')}"
                                    class="shopFullname" 
                                    @change='Modify()'></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>店铺性质</label>
                            <el-select v-model="shopData.shopWorkPropertyid"
                                    placeholder=""
                                    @change='Modify()'
                                    @focus="showErrprTipsSelect"
                                    class="shopWorkPropertyid"
                                    :class="{redBorder : validation.hasError('shopData.shopWorkPropertyid')}">
                                <el-option v-for="item in propertyAr" 
                                        :key="item.itemValue" 
                                        :label="item.itemName" 
                                        :value="item.itemValue"></el-option>
                            </el-select>
                        </div>

                        <div class="bgcolor">
                            <label>对应仓库</label>
                            <el-select v-model="shopData.stockId"
                                    placeholder=""
                                    @change='Modify()'
                                    @focus="showErrprTipsSelect"
                                    class="stockId"
                                    :class="{redBorder : validation.hasError('shopData.stockId')}">
                                <el-option v-for="item in stockAr" 
                                        :key="item.id" 
                                        :label="item.stockName" 
                                        :value="item.id"></el-option>
                            </el-select>
                        </div>

                        <div class="bgcolor">
                            <label>店铺等级</label>
                            <el-select v-model="shopData.shopGradeid"
                                    placeholder=""
                                    @change='Modify()'
                                    @focus="showErrprTipsSelect"
                                    class="shopGradeid"
                                    :class="{redBorder : validation.hasError('shopData.shopGradeid')}">
                                <el-option v-for="item in gradeAr" 
                                        :key="item.itemValue" 
                                        :label="item.itemName" 
                                        :value="item.itemValue"></el-option>
                            </el-select>
                        </div>
                        
                        <div class="bgcolor">
                            <label>开店日期</label>
                            <el-input v-model="shopData.openingDate" 
                                    placeholder=""
                                    @focus="showErrprTips"
                                    :class="{redBorder : validation.hasError('shopData.openingDate')}"
                                    class="openingDate"
                                    @change='Modify()'></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>业务地区</label>
                            <el-select v-model="shopData.opAreaId"
                                    class="opAreaId"
                                    @focus="showErrprTipsSelect"
                                    placeholder=""
                                    @change='Modify()'
                                    :class="{redBorder : validation.hasError('shopData.opAreaId')}">
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
                                <el-select v-model="shopData.adAreaId" class="areaDrop" placeholder="选择省">
                                    <el-option v-for="item in areaProArray" :key="item.id" :label="item.areaName" :value="item.id">
                                    </el-option>
                                </el-select>
                                <el-select v-model="shopData.adAreaId" class="areaDrop" placeholder="选择市">
                                    <el-option v-for="item in areaCityArray" :key="item.basOuTypes" :label="item.label" :value="item.basOuTypes">
                                    </el-option>
                                </el-select>
                                <el-select v-model="shopData.adAreaId" class="areaDrop" placeholder="选择区">
                                    <el-option v-for="item in areaDisArray" :key="item.basOuTypes" :label="item.label" :value="item.basOuTypes">
                                    </el-option>
                                </el-select>
                                <el-input class="areaEntry" placeholder="街道办地址"></el-input>
                            </div>
                        </div>

                        <!-- <div class="bgcolor">
                            <label>主营品牌</label>
                            <el-select v-model="shopData.mainBrand"
                                    placeholder=""
                                    @change='Modify()'
                                    @focus="showErrprTipsSelect"
                                    class="shopTypeId"
                                    :class="{redBorder : validation.hasError('shopData.shopTypeId')}">
                                <el-option v-for="item in typeAr" 
                                        :key="item.itemValue" 
                                        :label="item.itemName" 
                                        :value="item.itemValue"></el-option>
                            </el-select>
                        </div>    -->

                        <div class="bgcolor">
                            <label>负责人</label>
                            <el-input v-model="shopData.manager" 
                                    placeholder=""
                                    @focus="showErrprTips"
                                    class="manager"
                                    :class="{redBorder : validation.hasError('shopData.manager')}"
                                    @change='Modify()'></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>电话</label>
                            <el-input v-model="shopData.phone" 
                                    placeholder=""
                                    @focus="showErrprTips"
                                    class="phone"
                                    :class="{redBorder : validation.hasError('shopData.phone')}"
                                    @change='Modify()'></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>商圈</label>
                            <el-select v-model="shopData.tradingAreaid"
                                    placeholder=""
                                    @change='Modify()'
                                    @focus="showErrprTipsSelect"
                                    class="tradingAreaid"
                                    :class="{redBorder : validation.hasError('shopData.tradingAreaid')}">
                                <el-option v-for="item in busAr" 
                                        :key="item.itemValue" 
                                        :label="item.itemName" 
                                        :value="item.itemValue"></el-option>
                            </el-select>
                        </div>  

                        <div class="bgcolor">
                            <label><small>*</small>状态</label>
                            <el-select v-model="shopData.status"
                                    class="status"
                                    placeholder=""
                                    @change='Modify()'
                                    @focus="showErrprTipsSelect"
                                    :class="{redBorder : validation.hasError('shopData.status')}">
                                <el-option v-for="item in statusAr"  
                                        :key="item.itemValue" 
                                        :label="item.itemName" 
                                        :value="item.itemValue"></el-option>
                            </el-select>
                        </div>

                        <div class="bgcolor">
                            <label>店铺地址</label>
                            <el-input v-model="shopData.shopAddress" 
                                    placeholder=""
                                    @focus="showErrprTips"
                                    class="shopAddress"
                                    :class="{redBorder : validation.hasError('shopData.shopAddress')}"
                                    @change='Modify()'></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>经度</label>
                            <el-input v-model="shopData.longitude" 
                                    placeholder=""
                                    @focus="showErrprTips"
                                    class="longitude"
                                    :class="{redBorder : validation.hasError('shopData.longitude')}"
                                    @change='Modify()'></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>纬度</label>
                            <el-input v-model="shopData.latitude" 
                                    placeholder=""
                                    @focus="showErrprTips"
                                    class="latitude"
                                    :class="{redBorder : validation.hasError('shopData.latitude')}"
                                    @change='Modify()'></el-input>
                        </div>
                        
                        <div class="bgcolor">
                            <label>备注</label>
                            <el-input v-model="shopData.remark" 
                                    placeholder=""
                                    @focus="showErrprTips"
                                    class="remark"
                                    :class="{redBorder : validation.hasError('shopData.remark')}"
                                    @change='Modify()'></el-input>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-collapse-transition>     

        <!-- 公司业务财务bootTab标签页 -->
        <el-row class="nopadding"> 
            <div class="tabZoo">
                <el-col :span="24">
                <el-tabs v-model="activeName">
                        <el-tab-pane label="联系人" name="bank" class="getPadding" style="z-index:-10">
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

                                <el-table-column prop="shopPerson" label="联系人" width="180">
                                    <template slot-scope="scope">
                                        <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.shopPerson" 
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

                        <!-- <el-tab-pane label="送货地址" name="address" class="getPadding" style="z-index:-1000">
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

                                <el-table-column prop="shopPerson" label="联系人" width="180">
                                    <template slot-scope="scope">
                                        <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.shopPerson" 
                                            type="text"    
                                            @change="handleAddressChange(scope.$index,scope.row)"/> 
                                    </template>
                                </el-table-column>

                                <el-table-column prop="shopPerson" label="联系电话" width="180">
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
                        </el-tab-pane> -->

                        <!-- <el-tab-pane label="使用组织" name="organization" class="getPadding" style="z-index:-1000">
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
                        </el-tab-pane> -->
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
                        <el-input v-model="shopData.createdBy" placeholder="" disabled="disabled"></el-input>
                    </div>

                    <div class="bgcolor">
                        <label>创建时间</label>
                        <el-date-picker v-model="shopData.createdTime" type="date" placeholder="" disabled="disabled"></el-date-picker>
                    </div>

                    <div class="bgcolor">
                        <label>修改人</label>
                        <el-input v-model="shopData.modifiedBy" placeholder="" disabled="disabled"></el-input>
                    </div>

                    <div class="bgcolor">
                        <label>修改时间</label>
                        <el-date-picker v-model="shopData.modifiedTime" type="date" placeholder="" disabled="disabled"></el-date-picker>
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
    name:'shopModify',
    created:function(){
        let self = this;
        self.loadData();
        self.loadSelect();
    },
    data() {
        return{
            getOuId:'',//进入页面获取的ouid
            ifShow:true,
            radio:'',
            ifModify:false,//判断主表是否修改过
            ifBtn:true,//判断顶部按钮的显示与隐藏
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
            propertyAr:[],//店铺性质下拉框
            stockAr:[],//对应仓库
            gradeAr:[],//店铺等级下拉框
            statusAr:[],//状态下拉框
            sexAr:[],//性别下拉
            busAr:[],//商圈下拉
            //-----------------------
  
            activeName: 'bank',//tabs标签页默认激活name

            shopData:'',//根据id获得的店铺信息
            bankData:[],//根据groupId获得银行信息
            

            updataBankList:[],//需要修改的银行信息
            

            addBankList:[],//需要添加的银行信息
            
            x:0,
            xrows:[],

            multipleSelection:[],//需要删除的数组
            

            idArrayBank:{//银行多项删除的id
                ids:[]
            },

            createBankParams:{//创建银行的参数
                "groupId": 1,
                "shopId":'',
                "settlementCurrencyId": '',
                "accountNo": "",
                "accountName": "",
                "openingBank": '',
                "shopPerson": '',
                "phone": '',
                "isDefault": true
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
        'shopData.ouId': function (value) {//所属组织
            return this.Validator.value(value).required().integer();
        },
        'shopData.shopCode': function (value) {//编码
            return this.Validator.value(value).required().maxLength(50);
        },
        'shopData.shopName': function (value) {//名称
            return this.Validator.value(value).required().maxLength(50);
        },
        'shopData.shopFullName': function (value) {//全称
            return this.Validator.value(value).required().maxLength(50);
        },
        'shopData.shopWorkPropertyid': function (value) {//店铺性质
            return this.Validator.value(value).integer();
        },
        'shopData.stockId': function (value) {//对应仓库
            return this.Validator.value(value).integer();
        },
        'shopData.shopGradeid': function (value) {//店铺等级
            return this.Validator.value(value).integer();
        },
        'shopData.openingDate': function (value) {//开店日期
            return this.Validator.value(value).integer();
        },
        'shopData.opAreaId': function (value) {//业务地区
            return this.Validator.value(value).integer();
        },
        'shopData.adAreaId': function (value) {//行政地区
            return this.Validator.value(value).integer();
        },
        'shopData.manager': function (value) {//负责人
            return this.Validator.value(value).maxLength(50);
        },
        'shopData.phone': function (value) {//电话
            return this.Validator.value(value).maxLength(50);
        },
        'shopData.tradingAreaid': function (value) {//商圈
            return this.Validator.value(value).maxLength(50);
        },
        'shopData.status': function (value) {//状态
            return this.Validator.value(value).required().integer();
        },
        'shopData.shopAddress': function (value) {//店铺地址
            return this.Validator.value(value).integer();
        },
        'shopData.longitude': function (value) {//经度
            return this.Validator.value(value).number();
        },
        'shopData.latitude': function (value) {//纬度
            return this.Validator.value(value).number();
        },
        'shopData.remark': function (value) {//备注
            return this.Validator.value(value).maxLength(200);
        },
        
    },
    computed:{
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
                this.$axios.gets('/api/services/app/ShopManagement/Get',{id:self.$route.params.id}).then(function(res){
                    
                    self.shopData = res.result;
                    console.log(self.shopData);
                    self.getOuId = self.shopData.ouId;//保存加载时获取的ouid

                    //对应仓库
                    self.$axios.gets('/api/services/app/StockManagement/GetRepositoryList',{OuId:self.getOuId,Start:0,Length:100}).then(function(res){
                        // console.log(res);
                        
                        self.stockAr = res.data;
                    },function(res){
                        console.log('err'+res)
                    });

                    //业务地区
                    self.$axios.gets('/api/services/app/OpAreaManagement/GetTreeByOuId',{OuId:self.getOuId}).then(function(res){
                        console.log(res);
                        self.opAr = res.result;
                        self.loadIcon();
                    },function(res){
                        console.log('err'+res)
                    });


                    self.createBankParams.shopId = self.$route.params.id;
                    //加载完成拿回的下拉框的默认值
                    self.ouItem.ouFullname = self.shopData.ouFullname;
                    self.ouItem.id =  self.shopData.ouId;

                    // self.cuItem.id = self.shopData.shopClassId;
                    // self.cuItem.cuFullname = self.shopData.shopClassId_ClassName;

                    self.adItem.areaName = self.shopData.adAreaId_AreaName;
                    self.adItem.id = self.shopData.adAreaId;

                    self.opItem.areaName = self.shopData.opAreaFullName;
                    self.opItem.id = self.shopData.opAreaId;

                    // self.fiItem.fiFullname = self.shopData.ficaOuId_OuName;
                    // self.fiItem.id = self.shopData.ficaOuId;
                })
                
                self.loadBankData();//加载银行数据
                

            }
        },
        loadBankData:function(){//银行数据
            let self = this;
            //获取所有的银行信息，也可以用groupid获取，
            this.$axios.gets('/api/services/app/ContactBankManagement/GetAll',{SkipCount:'0',MaxResultCount:'100'}).then(function(res){
                console.log(res);
                self.bankData = res.result.items;
                for(let i in self.bankData){
                    if(self.bankData[i].isDefault == true){
                        self.checkedAr = self.bankData[i]
                    }
                }
            })
        },
        //------------------------------------------------------
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
            //店铺性质
            self.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'ShopWorkProperty'}).then(function(res){
                // console.log(res);
                self.propertyAr = res.result;
            },function(res){
                console.log('err'+res)
            });
            
            //店铺等级
            self.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'ShopGrade'}).then(function(res){
                // console.log(res);
                self.gradeAr = res.result;
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
            
            //状态
            self.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status001'}).then(function(res){
                // console.log(res);
                self.statusAr = res.result;
            },function(res){
                console.log('err'+res)
            });

            //商圈
            self.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'busCircle'}).then(function(res){
                // console.log(res);
                self.busAr = res.result;
            },function(res){
                console.log('err'+res)
            });

            //性别
            self.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Sex'}).then(function(res){
                // console.log(res);
                self.sexAr = res.result;
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
        // cuNodeClick:function(data){
        //     let self = this;
        //     self.cuItem.id = data.id;
        //     self.cuItem.cuFullname = data.classFullname;
        //     self.$nextTick(function(){
        //         $('#cu_confirmSelect').click()
        //     })
        // },
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

        //---保存、修改数据---------------------------------------------
        saveModify:function(){
            let self = this;
            if(self.ifModify){
                self.saveCustomerModify();
            }else{
                self.open('没有需要保存的项目','el-icon-warning','noticERP');
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
            // console.log(self.shopData)
            self.$validate().then(function(success){
                if(success){
                    // console.log(99999999)
                    $('.tipsWrapper').css({display:'none'});
                    // this.$axios.puts('/api/services/app/ContactManagement/Update',self.shopData).then(function(res){
                    //     self.open('修改客户信息成功','el-icon-circle-check','successERP');
                    //     self.ifModify = false;
                    // },
                    self.$axios.posts('/api/services/app/ContactManagement/CUDAggregate',{createList:[],updateList:self.shopData,deleteList:[]}).then(function(res){
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
                    "shopId":self.createBankParams.shopId,
                    "settlementCurrencyId": '',
                    "accountNo": "",
                    "accountName": "",
                    "openingBank": '',
                    "shopPerson": '',
                    "phone": '',
                    "isDefault": false
                };
                self.bankData.unshift(self.xrows.newCol);
                self.addBankList.unshift(self.xrows.newCol)
        },
        //---------------------------------------------------

        //---从表修改-----------------------------------------
        handleBankChange:function(index,row){//银行修改
            // console.log(index)
            let self = this;
            let flag = false;
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
            this.$store.state.url='/shop/shopList/default'
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
  .shop-modify{
      font-family: 'microsoft yahei';
  }
 /*收起*/
 .shop-modify .upBt{
     font-size: 12px;
     float: right;
     margin-right: 10px;
     margin-top: 10px;
     cursor: pointer;
 }
 .shop-modify .upBt i{
    transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s; 
    color:#cacaca;
    margin-left: 5px;
 }
 .shop-modify .upBt i.rotate{
     transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);	
 }

.shop-modify  .errorTips{
    margin-bottom: 10px;
}  
.shop-modify .el-row:first-child{
      padding:5px 0;
}
  .shop-modify .el-row{
     padding:15px 0;
     border-bottom: 1px solid #e4e4e4;
     background-color: #fff;
  }
  .shop-modify .el-row:last-child{
      border-bottom:none;
  }

.shop-modify .tabZoo{
     overflow: hidden;
     background-color: #fff;
 }

 .shop-modify  .getPadding,.tabZoo .el-tabs__nav-scroll{
     padding: 0 10px;
 }
 .shop-modify .tabZoo .auditInformation{
     margin-top: 15px;
 }

.shop-modify .tabZoo .erp_bt:first-child{
    margin-left: 0;
}
.shop-modify .nopadding{
    padding-top: 0;
}
.shop-modify .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.shop-modify .el-table td{
    padding: 3px 0;
}
.shop-modify .el-table__body{
    text-align: center;
}
.shop-modify .el-table .cell{
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

.shop-modify .el-input__inner{
    height:35px !important;
    border:1px solid white;
    /* border-color:white !important; */
}
.shop-modify .all-table .el-input__inner{
    height:35px !important;
    text-align: center !important;
    border:none !important;
}
.shop-modify .bgw .el-input__inner{
    background-color:white;
}
.shop-modify .bgg .el-input__inner{
    background-color:#FAFAFA;
}
.shop-modify .el-select-dropdown__item{
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
  
