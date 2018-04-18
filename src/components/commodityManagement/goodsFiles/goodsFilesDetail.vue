<template>
 <div class="goodsFilesDetail">
     <el-row class="fixed">
         <el-col :span="24">
            <button @click="isBack" class="erp_bt bt_back"><div class="btImg"><img src="../../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>      
            <button class="erp_bt bt_save" plain @click="save"><div class="btImg"><img src="../../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>
            <button @click="isCancel" class="erp_bt bt_cancel"><div class="btImg"><img src="../../../../static/image/common/bt_cancel.png"></div><span class="btDetail">取消</span></button>
            <button plain @click="saveAdd" class="erp_bt bt_saveAdd"><div class="btImg"><img src="../../../../static/image/common/bt_saveAdd.png"></div><span class="btDetail">保存并新增</span></button>
            <button class="erp_fb_bt bt_add"><div class="btImg"><img src="../../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
            <button class="erp_fb_bt bt_del"><div class="btImg"><img src="../../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
            <!-- <span @click="ifShow = !ifShow" class="upBt">收起<i class="el-icon-arrow-down" @click="ifShow = !ifShow" :class="{rotate : !ifShow}"></i></span> -->
        </el-col>
     </el-row>
     <el-row>
         <el-col :span="24" class="getPadding">
             <div class="tipsWrapper">
                    <div class="errorTips">
                        <p class="msgDetail">错误提示：
                            <span 
                            :class="{block : !validation.hasError('product_MainTable.categoryId')}">
                            类目{{ validation.firstError('product_MainTable.categoryId') }},
                            </span>

                            <span 
                            :class="{block : !validation.hasError('product_MainTable.productCode')}">
                            商品编码{{ validation.firstError('product_MainTable.productCode') }},
                            </span>
                           <span 
                            :class="{block : !validation.hasError('product_MainTable.productName')}">
                            商品名称{{ validation.firstError('product_MainTable.productName') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('product_MainTable.brandId')}">
                            品牌{{ validation.firstError('product_MainTable.brandId') }}
                            </span>
                            <span 
                            :class="{block : !validation.hasError('product_MainTable.unitId')}">
                            单位{{ validation.firstError('product_MainTable.unitId') }}
                            </span>
                            <span 
                            :class="{block : !validation.hasError('product_MainTable.barcode')}">
                            商品条码{{ validation.firstError('product_MainTable.barcode') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('product_MainTable.mnemonic')}">
                            助记码{{ validation.firstError('product_MainTable.mnemonic') }},
                            </span> 
                             <span 
                            :class="{block : !validation.hasError('product_MainTable.saleDate')}">
                            上市时间{{ validation.firstError('product_MainTable.saleDate') }},
                            </span> 
                            <span 
                            :class="{block : !validation.hasError('product_MainTable.remark')}">
                            备注{{ validation.firstError('product_MainTable.remark') }},
                            </span> 
                            <span 
                            :class="{block : !validation.hasError('product_MainTable.validDays')}">
                            保质天数{{ validation.firstError('product_MainTable.validDays') }},
                            </span>      
                        </p>
                    </div>
                </div>
            <div class="bgcolor" style="margin-bottom:0">
                <label><small>*</small>类目</label>
                <el-select clearable filterable  class="categoryId"
                @focus="showErrprTips"
                :class="{redBorder : validation.hasError('product_MainTable.categoryId')}"
                placeholder=""
                v-model="product_MainTable.categoryId">
                    <el-input
                    placeholder="搜索..."
                    class="selectSearch"
                    v-model="search_categoryId">
                    </el-input>
                    <el-tree
                    :default-expanded-keys="expand_categoryId"
                    :render-content="renderContent_categoryId"
                    :data="selectTree_categoryId"
                    :highlight-current="true"
                    :props="selectProps_categoryId"
                    node-key="id"
                    ref="tree"
                    :filter-node-method="filterNode_categoryId"
                    :expand-on-click-node="false"
                    @node-click="nodeClick_categoryId"
                    >
                    </el-tree>
                    <el-option class="select_tree_option" :key="item_categoryId.id" :label="item_categoryId.categoryName" :value="item_categoryId.id">
                    </el-option>
                    <!-- <el-option v-show="false" v-for="item in selectData.ou" :key="item.id" :label="item.ouName" :value="item.id" :date="item.id"> -->
                </el-select>
            </div>
         </el-col>
     </el-row>
 <!-- <el-collapse-transition>
     <div v-show="ifShow"> -->
        <el-row>
            <el-col :span="24" class="getPadding">
                <div class="bgcolor" >
                    <label><small>*</small>商品编码</label>
                    <el-input class="productCode" 
                     @focus="showErrprTips"
                     :disabled="!isCategoryIdEmpty"
                    :class="{redBorder : validation.hasError('product_MainTable.productCode')}"
                    v-model="product_MainTable.productCode">
                    </el-input>
                </div>
                <div class="bgcolor">
                    <label><small>*</small>商品名称</label>
                    <el-input class="productName"
                    :disabled="!isCategoryIdEmpty"
                    @focus="showErrprTips"
                    :class="{redBorder : validation.hasError('product_MainTable.productName')}"
                     v-model="product_MainTable.productName" >
                     </el-input>
                </div>
                <div class="bgcolor">
                    <label>品牌</label>
                    <el-select clearable class="brandId"
                    :disabled="!isCategoryIdEmpty"
                    
                    @focus="showErrprTips"
                    :class="{redBorder : validation.hasError('product_MainTable.brandId')}"
                    placeholder=""
                    v-model="product_MainTable.brandId">
                        <el-option 
                        v-for="item in selectData.categoryId" 
                        :key="item.id" 
                        :label="item.accperiodSchemeName" 
                        :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label><small>*</small>单位</label>
                    <el-select clearable class="unitId"
                    :disabled="!isCategoryIdEmpty"
                    
                    @focus="showErrprTips"
                    :class="{redBorder : validation.hasError('product_MainTable.unitId')}"
                    placeholder=""
                    v-model="product_MainTable.unitId">
                        <el-option 
                        v-for="item in selectData.categoryId" 
                        :key="item.id" 
                        :label="item.accperiodSchemeName" 
                        :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label>商品条码</label>
                     <el-input class="barcode" 
                     @focus="showErrprTips"
                     :disabled="!isCategoryIdEmpty"
                    :class="{redBorder : validation.hasError('product_MainTable.barcode')}"
                    v-model="product_MainTable.barcode">
                    </el-input>
                </div>
                <div class="bgcolor">
                    <label>助记码</label>
                     <el-input class="mnemonic" 
                    @focus="showErrprTips"
                    :disabled="!isCategoryIdEmpty"
                    :class="{redBorder : validation.hasError('product_MainTable.mnemonic')}"
                    v-model="product_MainTable.mnemonic">
                    </el-input>
                </div>
                <div class="bgcolor">
                    <label>上市时间</label>
                    <el-date-picker 
                    :disabled="!isCategoryIdEmpty"
                    @focus="showErrprTips"
                    :class="{redBorder : validation.hasError('product_MainTable.saleDate')}"
                    class="saleDate datepicker" 
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd" 
                    v-model="product_MainTable.saleDate" 
                    type="date" 
                    ></el-date-picker>
                </div>
                <el-col :span="24">
                    <div class="bgcolor longWidth">
                        <label>备注</label>
                        <el-input
                        
                        :disabled="!isCategoryIdEmpty"
                        @focus="showErrprTips"
                        :class="{redBorder : validation.hasError('product_MainTable.remark')}"
                        class="remark1" 
                        v-model="product_MainTable.remark"
                        type="textarea"
                        :autosize="{ minRows: 4, maxRows: 10}"
                        >
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="bgcolor longWidth">
                        <label></label>
                        <el-checkbox :disabled="!isCategoryIdEmpty" @change="showErrprTips" v-model="product_MainTable.uniqueMgt">唯一码管理</el-checkbox>
                        <el-checkbox :disabled="!isCategoryIdEmpty" @change="showErrprTips" v-model="product_MainTable.lotMgt">批次管理</el-checkbox>
                        <el-checkbox :disabled="!isCategoryIdEmpty" @change="showErrprTips" v-model="product_MainTable.validityMgt">有效期管理</el-checkbox>
                    </div>
                    <div class="bgcolor" v-if="product_MainTable.validityMgt">
                        <label>保质天数</label>
                        <el-input class="validDays" 
                        @focus="showErrprTips"
                        :disabled="!isCategoryIdEmpty"
                        :class="{redBorder : validation.hasError('product_MainTable.validDays')}"
                        v-model="product_MainTable.validDays">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="bgcolor longWidth">
                        <label></label>
                        <el-checkbox :disabled="!isCategoryIdEmpty" @change="showErrprTips" v-model="product_MainTable.multiUnitEnabled">启用多单位</el-checkbox>
                        <el-checkbox :disabled="!isCategoryIdEmpty" @change="showErrprTips" v-model="product_MainTable.isSuite">是否套件</el-checkbox>
                    </div>
                </el-col>
                <!-- <el-col :span="24" v-if="product_MainTable.validityMgt">
                    <div class="bgcolor">
                        <label>保质天数</label>
                        <el-input class="validDays" 
                        @focus="showErrprTips"
                        :disabled="!isCategoryIdEmpty"
                        :class="{redBorder : validation.hasError('product_MainTable.validDays')}"
                        v-model="product_MainTable.validDays">
                        </el-input>
                    </div>
                </el-col> -->
            </el-col> 
        </el-row>
     <!-- </div>    
 </el-collapse-transition>   -->

<el-row class="nopadding" >  
    <div class="tabZoo">
        <el-col :span="24">
            <el-tabs v-model="activeName_one">
<!-- - - - - - - - - - - - - - - - - - - - - - - - 商品价格 - - - - - - - - - - - - - - - - - - - - -  -->
                <el-tab-pane label="商品价格" name="goodsPrice">
                    <el-col :span="24" v-if="!product_MainTable.multiUnitEnabled">
                        <div class="bgcolor ">
                            <label>进货价</label>
                            <el-input 
                            
                            :disabled="!isCategoryIdEmpty"
                            @focus="showErrprTips"
                            :class="{redBorder : validation.hasError('product_MainTable.purchasePrice')}"
                            class="purchasePrice"
                            v-model="product_MainTable.purchasePrice"
                            ></el-input>
                        </div>
                        <div class="bgcolor ">
                            <label>批发价</label>
                            <el-input 
                            
                            :disabled="!isCategoryIdEmpty"
                            @focus="showErrprTips"
                            :class="{redBorder : validation.hasError('product_MainTable.wholePrice')}"
                            class="wholePrice"
                            v-model="product_MainTable.wholePrice"
                            ></el-input>
                        </div>
                        <div class="bgcolor ">
                            <label>会员价</label>
                            <el-input 
                            
                            :disabled="!isCategoryIdEmpty"
                            @focus="showErrprTips"
                            :class="{redBorder : validation.hasError('product_MainTable.vipPrice')}"
                            class="vipPrice"
                            v-model="product_MainTable.vipPrice"
                            ></el-input>
                        </div>
                        <div class="bgcolor ">
                            <label>零售价</label>
                            <el-input 
                            :disabled="!isCategoryIdEmpty"
                            
                            @focus="showErrprTips"
                            :class="{redBorder : validation.hasError('product_MainTable.retailPrice')}"
                            class="retailPrice"
                            v-model="product_MainTable.retailPrice"
                            ></el-input>
                        </div>
                        <div class="bgcolor ">
                            <label>折扣率</label>
                            <el-input 
                            
                            :disabled="!isCategoryIdEmpty"
                            @focus="showErrprTips"
                            :class="{redBorder : validation.hasError('product_MainTable.discount')}"
                            class="discount"
                            v-model="product_MainTable.discount"
                            ></el-input>
                        </div>
                    </el-col>
<!-- - - - - - - - - - - - - - - - - - - - - - - - 多单位 - - - - - - - - - - - - - - - - - - - - -  -->                    
                    <el-col :span="24" v-if="product_MainTable.multiUnitEnabled">
                         <el-table :data="productUnit_ChildTable" border style="width: 100%" stripe>
                            

                            <el-table-column prop="unitId" label="单位类型(无)"></el-table-column>

                            <el-table-column prop="unitId" label="单位"></el-table-column>

                            <el-table-column prop="unitId" label="系数(无)"></el-table-column>

                            <el-table-column prop="purchasePrice" label="进货价">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.purchasePrice" 
                                            type="text"/>
                                </template>
                            </el-table-column>
                             <el-table-column prop="retailPrice" label="零售价">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.retailPrice" 
                                            type="text"/>
                                </template>
                            </el-table-column>
                             <el-table-column prop="wholePrice" label="批发价">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.wholePrice" 
                                            type="text"/>
                                </template>
                            </el-table-column>
                             <el-table-column prop="vipPrice" label="会员价">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.vipPrice" 
                                            type="text"/>
                                </template>
                            </el-table-column>
                             <el-table-column prop="discount" label="折扣率">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.discount" 
                                            type="text"/>
                                </template>
                            </el-table-column>
                             <el-table-column prop="isDefaultPurchase" label="默认采购单位">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="scope.row.isDefaultPurchase"></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column prop="isDefaultWhole" label="默认批发单位">
                                <template slot-scope="scope">
                                   <el-checkbox v-model="scope.row.isDefaultWhole"></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column prop="isDefaultRetail" label="默认零售单位">
                                <template slot-scope="scope">
                                   <el-checkbox v-model="scope.row.isDefaultRetail"></el-checkbox>
                                </template>
                            </el-table-column>

                        </el-table>     
                    </el-col>
                </el-tab-pane>
            </el-tabs>
        </el-col>
    </div>
 </el-row>

 <el-row class="nopadding" >  
    <div class="tabZoo">
        <el-col :span="24">
            <el-tabs v-model="activeName_two">
                <el-tab-pane label="商品规格" name="goodsSize">
<!-- - - - - - - - - - - - - - - - - - - - - - - - 商品规格表格 - - - - - - - - - - - - - - - - - - - - -  -->
                        <el-table :data="productSpec_ChildTable" border style="width: 100%" stripe>
                            

                            <el-table-column prop="groupId" label="规格编码" width="150">
                                <template slot-scope="scope">
                                    <span>{{scope.row.groupId}}</span>
                                    <button class="showGoodsDialog" @click="showGoodsDialog(scope.row)">···</button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="basSpecgroupId" label="规格组" width="150"></el-table-column>
                            <el-table-column prop="productId" label="规格名称">
                                <template slot-scope="scope">
                                    <span class="sizeNameWrapper">
                                        <span class="delSize">×</span>
                                        <span class="sizeNameBtn">1111111111111111111111</span>
                                    </span>    
                                    <span class="sizeNameWrapper">
                                        <span class="delSize">×</span>
                                        <span class="sizeNameBtn">1111111111111111111111</span>
                                    </span>
                                </template>
                            </el-table-column>
                        </el-table> 
                        
                </el-tab-pane>
            </el-tabs>
        </el-col>
    </div>
 </el-row>
 <el-row class="nopadding" >  
    <div class="tabZoo">
        <el-col :span="24">
            <el-tabs v-model="activeName_three">
                <el-tab-pane label="SKU" name="SKU">
<!-- - - - - - - - - - - - - - - - - - - - - - - - SKU表格 - - - - - - - - - - - - - - - - - - - - -  -->

                        <el-table :data="sku_ChildTable" border style="width: 100%" stripe v-if="!product_MainTable.multiUnitEnabled">
                            <!-- 未启用多单位 -->
                            <el-table-column prop="skuCode" label="SKU" ></el-table-column>   
                            <el-table-column prop="skuName" label="SKU名称" >
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.skuName" 
                                            type="text"/>
                                </template>
                            </el-table-column>

                            
                            <el-table-column prop="barcode" label="条码">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.barcode" 
                                            type="text"/>
                                </template>
                            </el-table-column>
                            <el-table-column prop="specId1" label="颜色"></el-table-column>
                            <el-table-column prop="specId2" label="尺码"></el-table-column>
                            <el-table-column prop="specId3" label="单位"></el-table-column>
                            <el-table-column prop="purchasePrice" label="进货价">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.purchasePrice" 
                                            type="text"/>
                                </template>
                            </el-table-column>
                            <el-table-column prop="retailPrice" label="零售价">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.retailPrice" 
                                            type="text"/>
                                </template>
                            </el-table-column>
                            <el-table-column prop="wholePrice" label="批发价">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.wholePrice" 
                                            type="text"/>
                                </template>
                            </el-table-column>
                            <el-table-column prop="vipPrice" label="会员价">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.vipPrice" 
                                            type="text"/>
                                </template>
                            </el-table-column>
                            <el-table-column prop="productId" label="折扣率">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.productId" 
                                            type="text"/>
                                </template>
                            </el-table-column>
                            <el-table-column prop="status" label="允许使用">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="scope.row.status"></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column prop="remark" label="备注(无)">
                                <template slot-scope="scope">
                                     <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.remark" 
                                            type="text"/>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                     <el-button type="text">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table> 
                        <!-- 启用多单位表格 -->
                        <el-table :data="skuSpecValue_GrandTable" border style="width: 100%" stripe v-if="product_MainTable.multiUnitEnabled">
                            
                            <el-table-column prop="skuCode" label="SKU"></el-table-column>   
                            <el-table-column prop="skuName" label="SKU名称">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.skuName" 
                                            type="text"/>
                                </template>
                            </el-table-column>

                            
                            <el-table-column prop="barcode" label="条码">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.barcode" 
                                            type="text"/>
                                </template>
                            </el-table-column>
                            <el-table-column prop="specId1" label="颜色"></el-table-column>
                            <el-table-column prop="specId2" label="尺码"></el-table-column>
                            <el-table-column prop="specId3" label="单位"></el-table-column>
                            
                            <el-table-column prop="status" label="允许使用">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="scope.row.status"></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column prop="remark" label="备注">
                                <template slot-scope="scope">
                                     <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.remark" 
                                            type="text"/>
                                </template>
                            </el-table-column>
                        </el-table> 
                </el-tab-pane>
<!-- - - - - - - - - - - - - - - - - - - - - - - - 商品属性 - - - - - - - - - - - - - - - - - - - - -  -->
                <el-tab-pane label="商品属性" name="property">
                    <div class="bgcolor">
                        <label>类别</label>
                        <el-input
                        
                        @focus="showErrprTips"
                        :class="{redBorder : validation.hasError('productProperty_ChildTable.propertyValueName')}"
                        v-model="productProperty_ChildTable.propertyValueName" >
                        </el-input>
                    </div>
                    <div class="bgcolor">
                        <label>系列</label>
                        <el-input
                        
                        @focus="showErrprTips"
                        :class="{redBorder : validation.hasError('productProperty_ChildTable.propertyValueName')}"
                        v-model="productProperty_ChildTable.propertyValueName" >
                        </el-input>
                    </div>
                   
                    <div class="bgcolor">
                        <label>项目</label>
                        <el-input
                        
                        @focus="showErrprTips"
                        :class="{redBorder : validation.hasError('productProperty_ChildTable.propertyValueName')}"
                        v-model="productProperty_ChildTable.propertyValueName" >
                        </el-input>
                    </div>
                </el-tab-pane>
<!-- - - - - - - - - - - - - - - - - - - - - - - - 图片 - - - - - - - - - - - - - - - - - - - - -  -->
                <el-tab-pane label="图片" name="picture">
                       <!-- <li>
                           <div>主图</div>
                           <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            :on-exceed="handleExceed"
                            :file-list="fileList"
                            :auto-upload="false"
                            :limit="1"
                            :show-file-list="false"
                            :on-change="changePicture"
                            :on-success="handleAvatarSuccess"
                            ref="upload">
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传</el-button>
                            
                       </li> -->
                            <app-loadImg :files="files" tittle="主图" @fileChange="fileChange"></app-loadImg>
                            <app-loadImg :files="files" tittle="红色" @fileChange="fileChange"></app-loadImg>
                            <app-loadImg :files="files" tittle="白色" @fileChange="fileChange"></app-loadImg>
                </el-tab-pane>
<!-- - - - - - - - - - - - - - - - - - - - - - - - 使用组织 - - - - - - - - - - - - - - - - - - - - -  -->
                <el-tab-pane label="使用组织" name="specTeam">
                    <el-table :data="productOu_ChildTable" border style="width: 100%" stripe>
                            <el-table-column prop="ouId" label="业务组织">
                            </el-table-column>

                            <el-table-column prop="ouId" label="上市日期" ></el-table-column>

                            
                            <el-table-column prop="ouId" label="备注"></el-table-column>
                            <el-table-column prop="ouId" label="状态">
                                <template slot-scope="scope">
                                    <el-checkbox></el-checkbox>
                                </template>
                            </el-table-column>
                        </el-table> 
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
<!-- dialog尺码选择 -->
        <el-dialog :visible.sync="chooseSize" class="choose_size">
            <el-dialog
                class="add_size"
                width="30%"
                title="新增尺码"
                :visible.sync="innerVisible"
                append-to-body>
                <el-col :span="24">
                    <div class="bgcolor"><label>尺码名称</label><el-input></el-input></div>
                </el-col>
                <el-col :span="24" slot="footer" class="add_size_footer">
                    <button class="transfer_footer_btn transfer_confirm">确 认</button>
                    <button class="transfer_footer_btn" @click="innerVisible = false">取 消</button>
                </el-col>
            </el-dialog>
            <template slot="title">
                <span>尺码选择</span>
                <div class="search_input_group">
                    <div class="search_input_wapper">
                        <el-input
                            placeholder="搜索..."
                            class="search_input"
                            >
                            <i slot="prefix" class="el-input__icon el-icon-search"></i>
                        </el-input>
                    </div>
                </div>
            </template>
            <el-col :span="24" class="_body">
                <el-col :span="6" class="_body_left">
                    <vue-scroll :ops="$store.state.option">
                        <p>全部</p>
                        <p>通用尺码</p>
                        <p> 裤装尺码</p>
                        <p>童装尺码</p>
                    </vue-scroll>
                </el-col>
                <el-col :span="18" class="_body_right">
                    <el-col :span="24" class="_right_body">
                        <span class="show_size"><i class="fa fa-check-square" aria-hidden="true"></i>xs</span>
                        <span class="show_size"><i class="fa fa-check-square" aria-hidden="true"></i>xs</span>
                        <span class="show_size"><i class="fa fa-check-square" aria-hidden="true"></i>XXL</span>
                        <span class="show_size"><i class="fa fa-check-square" aria-hidden="true"></i>17码</span>
                        <span class="show_size"><i class="fa fa-check-square" aria-hidden="true"></i>17码</span>
                        <span class="show_size"><i class="fa fa-check-square" aria-hidden="true"></i>17码</span>
                        <span class="show_size addSize" @click="innerVisible = true">
                            <span class="x"></span>
                            <span class="y"></span>
                        </span>
                    </el-col>
                    <el-col :span="24" class="_right_footer">
                        <div class="_footer_bt">
                            <button class="transfer_footer_btn transfer_confirm">确 认</button>
                            <button class="transfer_footer_btn" @click="chooseSize = false">取 消</button>
                        </div>
                        <div class="_footer_page transfer_footer">
                            <span>1</span>
                            <span>/</span>
                            <span>3</span>
                            <el-button class="_page_left el_transfer" type="primary" icon="el-icon-arrow-left" round></el-button>
                            <el-button class="_page_right el_transfer" type="primary" icon="el-icon-arrow-right" round></el-button>
                        </div>
                    </el-col>
                </el-col>
            </el-col>
        </el-dialog>
        <!-- dialog -->  
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
import loadImg from './loadImg'
export default {
    components: {
        'app-loadImg':loadImg,
    },
    data() {
        return{
            imageUrl:'',
            fileList: [
                ],
            isCategoryIdEmpty:false,//类目是否选择
            // 错误信息提示开始
            detail_message_ifShow:false,
            errorMessage:false,
            // 错误信息提示结束
            search_categoryId:'',//类目树搜索
            selectTree_categoryId:[],//类目树数据
            selectProps_categoryId: {//类目树默认属性
                children: 'childNodes',
                label: 'categoryName',
                id:'id'
            },
            expand_categoryId:[],////类目树默认展开节点id
            item_categoryId:{//类目树选中节点
                id:'',
                categoryName:''
            },
            ifShow:true,
            activeName_one: 'goodsPrice',
            activeName_two: "goodsSize",
            activeName_three: "SKU",
            auditInfo:{},//审计信息
            "product_MainTable":{//商品档案主表
                'id':0,
                "groupId": 1,
                "categoryId": '',//类目ID 
                "brandId": '',//品牌
                "productCode": "",//商品编码
                "productName": "",//商品名称
                "mnemonic": "",//助记码
                "barcode": "",//条码(产品级，囯码) 
                "saleDate": "",//上市日期
                "unitId": "",//基本单位
                "uniqueMgt": false,//唯一码管理 
                "lotMgt": false,//批次管理 
                "validityMgt": false,//有效期管理 
                "validDays": 0,//保质天数 
                "multiUnitEnabled": false,//启用多单位 ,
                "isSuite": false,//是否套件
                "purchasePrice": 0,//进货价 
                "purchaseUnit": '',//进货默认单位 
                "wholePrice": 0,//批发价
                "wholeUnit": '',//批发默认单位
                "discount": 1,//折扣
                "vipPrice": '',//会员价 
                "retailPrice": 0,//零售价
                "retailUnit": 0,//零售默认单位
                "remark": "",//备注
                "status": 0,//状态
            },
            "productProperty_ChildTable": [//属性从表
                {
                "id":0,
                "groupId": 1,
                "productId": '',//商品ID 
                "propertyId": '',//属性ID
                "propertyValueCode": "",//属性编码 如被引用则原属性值代码不能修改
                "propertyValueName": "",//属性名称
                }
            ],
            "productSpec_ChildTable": [//规格从表
                {
                "id": 0,
                "groupId": 1,
                "productId": '',//商品ID 
                "basSpecgroupId": '',//规格组ID
                "specId": '',//规格ID
                }
            ],
            "productSpecValue_GrandTable": [//规格值孙表 
                {
                "id": 0,
                "groupId": 1,
                "productSpecId": '',//商品规格ID 
                "specId": '',//规格ID
                "specValueId": '',//属性ID
                }
            ],
            "productUnit_ChildTable": [// 多单位从表
                {
                "id": 0,
                "groupId": 1,
                "productId": '',//商品ID
                "unitId": '',//单位ID
                "purchasePrice": 0,//进货价 
                "wholePrice": 0,//批发价
                "discount": 0,//折扣
                "vipPrice": 0,//会员价
                "retailPrice": 0,//零售价
                "isDefaultPurchase": true,//默认采购单位
                "isDefaultWhole": true,// 默认批发单位 
                "isDefaultRetail": true,//默认零售单位 
                "status": 1
                }
            ],
            "productOu_ChildTable": [//组织应用关系从表 
                {
                "id": 0,
                "groupId": 1,
                "productId": 0,//商品ID 
                "ouId": 0,//组织单元ID
                }
            ],
            "productPicture_ChildTable": [//图片从表
                {
                "id": 0,
                "groupId": 1,
                "productId": '',//商品ID 
                "specId": '',//规格ID 
                "pictureType": '',//图片类型 
                "pictureUrl": "",// 图片路径
                "pictureCode": "",// 图片代码
                "pictureName": "",//图片名
                "isMain": true,//是否主图 
                "seq": true
                }
            ],
            "sku_ChildTable": [//SKU从表
                {
                "id": 0,
                "groupId": 1,
                "productId": '',//商品ID
                "skuCode": "",//SKU商品编码
                "skuName": "",//SKU商品名称
                "barcode": "",//条码
                "unitId": '',//基本单位 
                "purchasePrice": '',//进货价
                "wholePrice": '',//批发价 
                "discount": '',//折扣 
                "vipPrice": '',//会员价 
                "retailPrice": '',//零售价 
                "status": 1
                }
            ],
            "skuSpecValue_GrandTable": [//SKU规格值孙表
                {
                "id": 0,
                "groupId": 1,
                "skuId": '',//SKU ID
                "productId": '',// 商品ID 
                "specId": '',//规格ID
                "specValueCode": "string",//规格值编码
                "specValueName": "string",//规格值名称
                }
            ],
            group:true,//集团公司复选框初始选种状态
            isUse:false,//是否启用复选框初始选种状态
            
            isSave:true,//是否可以保存
            selectData:{//select数据
                Status001:[],//启用状态
                ouParentid:[],//上级业务单元
                accCchemeId:[],//会计期间方案
                baseCurrencyId:[],//本位币种
                OUType:[],//组织类型
                ou:[],
            },
             response:{
                details:'',
                message:'',
                validationErrors:[],
            },
//----------按钮操作--------------
        choseDoing:'',//存储点击按钮判断信息
        dialogUserConfirm:false,//信息更改提示控制
        update:false,
//---------------商品规格------------------
        chooseSize:false,//dialog选择尺码
        innerVisible:false,//内层表格
//---------------SKU------------------
       
//---------------属性------------------

        files:{//传入图片上传组件数据
            src:''
        },
    }
},
    validators: {
     'product_MainTable.categoryId': function (value) {//类目
         return this.Validator.value(value).required().integer()
      },
      'product_MainTable.productCode': function (value) {//商品编码
        if(this.isCategoryIdEmpty){
            return this.Validator.value(value).required().maxLength(50);
        }else{
            return this.Validator.value(value)
        }
         
      },
      'product_MainTable.productName': function (value) {//商品名称
        if(this.isCategoryIdEmpty){
            return this.Validator.value(value).required().maxLength(100);
         }else{
            return this.Validator.value(value)
        }
      },
      'product_MainTable.brandId': function (value) {//品牌
        if(this.isCategoryIdEmpty){
            return this.Validator.value(value).integer();
         }else{
            return this.Validator.value(value)
        }
      },
      'product_MainTable.unitId': function (value) {//单位
        if(this.isCategoryIdEmpty){
            return this.Validator.value(value).required().integer();
         }else{
            return this.Validator.value(value)
        }
      },
      'product_MainTable.barcode': function (value) {//商品条码
        if(this.isCategoryIdEmpty){
            return this.Validator.value(value).maxLength(50);
         }else{
            return this.Validator.value(value)
        }
      },
      'product_MainTable.mnemonic': function (value) {//助记码
        if(this.isCategoryIdEmpty){
            return this.Validator.value(value).maxLength(50);
         }else{
            return this.Validator.value(value)
        }
      },
      'product_MainTable.saleDate': function (value) {//上市时间
          return this.Validator.value(value);
      },
      'product_MainTable.remark': function (value) {//备注
         return this.Validator.value(value)
      },
      'product_MainTable.validDays': function (value) {//保质天数
        if(typeof(value)!='undefined'){
            return this.Validator.value(value).integer()
        }else{
            return this.Validator.value(value)
        }
         
      },

    },
    mounted () {
        // let _this=this;
        // if(_this.product_MainTable.categoryId=''){
        //     _this.isCategoryIdEmpty=true
        // }else{
        //     _this.isCategoryIdEmpty=false
        // }  
    },
    created:function(){
        let _this=this;
          _this.loadTree_categoryId();
         _this.getSelectData();
         _this.getDefault();
    },  
     watch: {
      search_categoryId(val) {
        this.$refs.tree.filter(val);
      },
      'product_MainTable.categoryId'(val){
          if(val!=''){
              this.isCategoryIdEmpty=true
          }else{
              this.isCategoryIdEmpty=false
          }
      },
      'product_MainTable.validityMgt'(val){//有效期管理
            if(!val){
                delete this.product_MainTable.validDays;//保质天数
            }
      }
    },
    methods:{
        getDefault(){
            let _this=this;
           _this.product_MainTable={
                "groupId": 1,
                "categoryId": '',//类目ID 
                "brandId": 1,//品牌
                "productCode": "",//商品编码
                "productName": "",//商品名称
                "mnemonic": "",//助记码
                "barcode": "",//条码(产品级，囯码) 
                "saleDate": "",//上市日期
                "unitId": 1,//基本单位
                "uniqueMgt": false,//唯一码管理 
                "lotMgt": false,//批次管理 
                "validityMgt": false,//有效期管理 
                "validDays": 0,//保质天数 
                "multiUnitEnabled": false,//启用多单位 ,
                "isSuite": false,//是否套件
                "purchasePrice": 0,//进货价 
                "purchaseUnit": '',//进货默认单位 
                "wholePrice": 0,//批发价
                "wholeUnit": '',//批发默认单位
                "discount": 1,//折扣
                "vipPrice": '',//会员价 
                "retailPrice": 0,//零售价
                "retailUnit": 0,//零售默认单位
                "remark": "",//备注
                "status": 0,//状态
                }
        },
        getSelectData(){
            let _this=this;
            _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status001'}).then(function(res){ 
            // 启用状态
            _this.selectData.Status001=res.result;
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
        filterNode_categoryId(value, data) {
            if (!value) return true;
            return data.categoryName.indexOf(value) !== -1;
        },

        loadTree_categoryId(){
            let _this=this;
            _this.$axios.gets('/api/services/app/CategoryManagement/GetCategoryTree')
            .then(function(res){
                _this.selectTree_categoryId=res;
                _this.expand_categoryId=_this.defauleExpandTree(res,'id')
            },function(res){
            })
        },
         nodeClick_categoryId(data,node,self){
            let _this=this;
            _this.item_categoryId.id=data.id;
            _this.item_categoryId.categoryName=data.categoryName;
            _this.$nextTick(function(){
                // $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').click();
                $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').css({top:$(self.$el).offset().top-$(self.$el).parents('.el-select-dropdown__list').offset().top+26,}).click();
            })
            // $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').each(function(index){
            // if($(this).attr('date')==data.id){
            //     $(this).click()
            // }
        // })
            
        },
        back(){
            this.$store.state.url='/goodsFiles/goodsFilesList/default'
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
                    _this.$axios.posts('/api/services/app/ProductManagement/Create',_this.product_MainTable).then(function(res){
                        // _this.$store.state.url='/OuManage/OuManageModify/'+res.result.id
                        // _this.$router.push({path:_this.$store.state.url})//点击切换路由
                        _this.open('保存成功','el-icon-circle-check','successERP');
                    },function(res){
                        if(res && res!=''){ _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)}
                        _this.errorMessage=true;
                    })
                }
            });    
        },
        //-------------按钮操作-----------
        isBack(){
            let _this=this;
            if(_this.update){
                _this.dialogUserConfirm=true;
                _this.choseDoing='back'
            }else{
                _this.back()
            }
        },
        isUpdate(){//判断是否修改过信息
            this.update=true;
        },
        isCancel(){
            let _this=this;
            if(_this.update){
                _this.dialogUserConfirm=true;
                _this.choseDoing='Cancel'
            }
        },
        sureDoing(){
            let _this=this;
            if(_this.choseDoing=='back'){
                _this.back()
                _this.dialogUserConfirm=false;
            }else if(_this.choseDoing=='Cancel'){
                _this.Cancel();
                _this.dialogUserConfirm=false;
            }
        },
        Cancel(){
            let _this=this;
            _this.clearData();
            $('.tipsWrapper').css({display:'none'})
            _this.update=false;
        },
        clearData(){
            let _this=this;
             _this.product_MainTable={
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
                "ouTypes":[1,3],//组织职能
            };
           
            _this.getDefault()
            _this.validation.reset();
        },
        saveAdd(){
            
        },
//----------------------商品规格------------------
        showGoodsDialog(data){//选中编辑规格组，显示dialog
            let _this=this;
            _this.chooseSize=true;
        },
//----------------------图片------------------
        fileChange(data){//上传图片
            console.log(data)
        },
        defauleExpandTree(data,key){
            if(typeof(data[0])!='undefined'
            && data[0]!=null 
            && typeof(data[0][key])!='undefined'
            && data[0][key]!=null
            && data[0][key]!=''){
                return [data[0][key]]
            }
        },
        renderContent_categoryId(h, { node, data, store }){
             if(typeof(data.childNodes)!='undefined' && data.childNodes!=null && data.childNodes.length>0){
                return (
                    <span class="el-tree-node__label" data-id={data.id}>
                    <i aria-hidden="true" class="preNode fa fa-folder-open" style="color:#f1c40f;margin-right:5px"></i>
                        {data.categoryName}
                    </span>
                );
            }else{
                return (
                    <span class="el-tree-node__label" data-id={data.id}>
                    <i class="preNode fa fa-file" aria-hidden="true" style="color:#f1c40f;margin-right:5px"></i>
                        {data.categoryName}
                    </span>
                );
            }
        },
    }

}   
    
  </script>

<style>
.goodsFilesDetail{
    font-family: 'microsoft yahei';
}
.goodsFilesDetail .bgcolor.longWidth{
    width: 505px;
    height:auto;
 }
.goodsFilesDetail .bgcolor.longWidth .el-textarea{
    width: calc(100% - 94px);
    font-size: 12px;
 } 
 .bgcolor.longWidth>label{
    width:84px;
    height: 35px;
 }
 .bgcolor.longWidth .el-checkbox+.el-checkbox{
     margin-left: 0;
 }
/*表单提示信息*/
.goodsFilesDetail  .errorTips{
    margin-bottom: 10px;
    margin-top: -10px;
}

.goodsFilesDetail .el-row{
    padding:15px 0;
    border-bottom: 1px solid #e4e4e4;
    background-color: #fff;
}
.goodsFilesDetail .el-row:last-child{
      border-bottom:none;
  }
.goodsFilesDetail>.el-row:first-child{
      padding:7px 0;
  }
 .goodsFilesDetail .getPadding,.tabZoo .el-tabs__nav-scroll{
     padding: 0 10px;
 }
 /* .goodsFilesDetail .tabZoo .el-tabs__active-bar{
     width: 28px!important;
 } */

.goodsFilesDetail .nopadding{
    padding-top: 0;
    padding-bottom: 0;
}
.goodsFilesDetail .bgcolor .el-select .el-input input{
    height: 35px!important;
}
/* ---------dialog选择尺码---------- */
.add_size .add_size_footer{
    text-align: center;
    padding-bottom: 15px;
}
.goodsFilesDetail .choose_size .el-dialog,
.add_size .el-dialog{
    border-radius: 0!important;
}
.goodsFilesDetail .choose_size .el-dialog .el-dialog__body{
    padding: 0 20px;
}
.goodsFilesDetail ._body_left{
    border-right: 1px solid #e4e4e4;
    height: 500px;
}
.goodsFilesDetail ._body_right{
    height: 500px;
}
.goodsFilesDetail ._body_right ._right_body .show_size{
    width: 38px;
    height: 38px;
    border-radius: 3px;
    text-align: center;
    line-height: 38px;
    font-size: 12px;
    display: block;
    float: left;
    margin-left: 15px;
    margin-top: 15px;
    border: 1px solid #e4e4e4;
    cursor: pointer;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.goodsFilesDetail ._body_right ._right_body .show_size.addSize{
    background-color: #e4e4e4;
}
.goodsFilesDetail ._body_right ._right_body .show_size.addSize .x,
.goodsFilesDetail ._body_right ._right_body .show_size.addSize .y{
    display: block;
    background: #999999;
    position: absolute;
    width: 1px;
    height:23px;
    left: 50%;
    top: 8px;
}
.goodsFilesDetail ._body_right ._right_body .show_size .y{
    transform:rotate(90deg);
    -webkit-transform:rotate(90deg);
    -moz-transform:rotate(90deg); 
}
.goodsFilesDetail ._body_right ._right_body .show_size.addSize{
    font-size: 40px;
}
.goodsFilesDetail ._body_right ._right_body .show_size i.fa-check-square{
    position: absolute;
    color: #33cc66;
    top: -1px;
    left: -1px;
}
.goodsFilesDetail .showGoodsDialog{
    width: 20px;
    height: 20px;
    line-height: 20px;
    padding: 0;
    cursor: pointer;
    text-align: center;
    background-color: #fff;
    border: 1px solid #c2cad8;
    border-radius: 3px;
    outline: none;
    float: right;
}
.goodsFilesDetail .showGoodsDialog:focus{
    outline: none;
}
.goodsFilesDetail .sizeNameBtn{
    display: block;
    width: 59px;
    height: 22px;
    text-align: center;
    line-height: 22px;
    background-color: #e4e4e4;
    position: relative;
    border-radius: 3px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.goodsFilesDetail .sizeNameWrapper{
    margin-top: 5px;
    margin-bottom: 5px;
    display: block;
    width: 59px;
    height: 22px;
    margin-right: 10px;
    float: left;
    position: relative;
    cursor: pointer;
}
.goodsFilesDetail .sizeNameWrapper:hover .delSize{
    display: block;
}
.goodsFilesDetail .sizeNameWrapper .delSize{
    display: none;
    width: 12px;
    height: 12px;
    position: absolute;
    top: -3px;
    right: -3px;
    font-size: 14px;
    font-weight: bolder;
    text-align: center;
    line-height: 12px;
    cursor: pointer;
    border-radius: 50%;
    color: #fff;
    background-color: #f55e6e;
    z-index: 2;
}
.goodsFilesDetail ._body_right ._right_body .show_size:hover{
    border: 1px solid #33cc66;
}
.goodsFilesDetail ._body_right ._right_body{
    height: 450px;
}
.goodsFilesDetail ._body_right ._right_footer{
    line-height: 50px;
    height: 50px;
    padding-left: 15px;
}
.goodsFilesDetail ._body_right ._right_footer ._footer_bt{
    float: left;
}
.goodsFilesDetail ._body_right ._right_footer ._footer_page{
    float: right;
}

</style>
  
