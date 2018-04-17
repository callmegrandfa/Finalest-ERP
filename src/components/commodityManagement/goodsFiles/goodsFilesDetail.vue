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
                            :class="{block : !validation.hasError('addData.categoryId')}">
                            类目{{ validation.firstError('addData.categoryId') }},
                            </span>

                            <span 
                            :class="{block : !validation.hasError('addData.productCode')}">
                            商品编码{{ validation.firstError('addData.productCode') }},
                            </span>
                           <span 
                            :class="{block : !validation.hasError('addData.productName')}">
                            商品名称{{ validation.firstError('addData.productName') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('addData.brandId')}">
                            品牌{{ validation.firstError('addData.brandId') }}
                            </span>
                            <span 
                            :class="{block : !validation.hasError('addData.unitId')}">
                            单位{{ validation.firstError('addData.unitId') }}
                            </span>
                            <span 
                            :class="{block : !validation.hasError('addData.barcode')}">
                            商品条码{{ validation.firstError('addData.barcode') }},
                            </span>
                            <span 
                            :class="{block : !validation.hasError('addData.mnemonic')}">
                            助记码{{ validation.firstError('addData.mnemonic') }},
                            </span> 
                             <span 
                            :class="{block : !validation.hasError('addData.saleDate')}">
                            上市时间{{ validation.firstError('addData.saleDate') }},
                            </span> 
                            <span 
                            :class="{block : !validation.hasError('addData.remark')}">
                            备注{{ validation.firstError('addData.remark') }},
                            </span> 
                        
                        </p>
                    </div>
                </div>
            <div class="bgcolor" style="margin-bottom:0">
                <label><small>*</small>类目</label>
                <el-select clearable filterable  class="categoryId"
                @focus="showErrprTipsSelect"
                :class="{redBorder : validation.hasError('addData.categoryId')}"
                placeholder=""
                v-model="addData.categoryId">
                    <el-option 
                    v-for="item in test1" 
                    :key="item.id" 
                    :label="item.name" 
                    :value="item.id">
                    </el-option>
                </el-select>
            </div>
         </el-col>
     </el-row>
 <!-- <el-collapse-transition>
     <div v-show="ifShow"> -->
        <el-row v-show="isCategoryIdEmpty">
            <el-col :span="24" class="getPadding">
                <div class="bgcolor" >
                    <label><small>*</small>商品编码</label>
                    <el-input class="productCode" 
                     @focus="showErrprTips"
                     @change="isUpdate"
                    :class="{redBorder : validation.hasError('addData.productCode')}"
                    v-model="addData.productCode">
                    </el-input>
                </div>
                <div class="bgcolor">
                    <label><small>*</small>商品名称</label>
                    <el-input class="productName"
                    @change="isUpdate"
                    @focus="showErrprTipsSelect"
                    :class="{redBorder : validation.hasError('addData.productName')}"
                     v-model="addData.productName" >
                     </el-input>
                </div>
                <div class="bgcolor">
                    <label>品牌</label>
                    <el-select clearable class="brandId"
                    
                    @change="isUpdate"
                    @focus="showErrprTipsSelect"
                    :class="{redBorder : validation.hasError('addData.brandId')}"
                    placeholder=""
                    v-model="addData.brandId">
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
                    
                    @change="isUpdate"
                    @focus="showErrprTipsSelect"
                    :class="{redBorder : validation.hasError('addData.unitId')}"
                    placeholder=""
                    v-model="addData.unitId">
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
                     @change="isUpdate"
                    :class="{redBorder : validation.hasError('addData.barcode')}"
                    v-model="addData.barcode">
                    </el-input>
                </div>
                <div class="bgcolor">
                    <label>助记码</label>
                     <el-input class="mnemonic" 
                    @focus="showErrprTips"
                    @change="isUpdate"
                    :class="{redBorder : validation.hasError('addData.mnemonic')}"
                    v-model="addData.mnemonic">
                    </el-input>
                </div>
                <div class="bgcolor">
                    <label>上市时间</label>
                    <el-date-picker 
                    @focus="showErrprTipsRangedate"
                    :class="{redBorder : validation.hasError('addData.saleDate')}"
                    class="saleDate datepicker" 
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd" 
                    v-model="addData.saleDate" 
                    type="date" 
                    ></el-date-picker>
                </div>
                <el-col :span="24">
                    <div class="bgcolor longWidth">
                        <label>备注</label>
                        <el-input
                        
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
                <el-col :span="24">
                    <div class="bgcolor longWidth">
                        <label></label>
                        <el-checkbox v-model="addData.uniqueMgt">唯一码管理</el-checkbox>
                        <el-checkbox v-model="addData.lotMgt">批次管理</el-checkbox>
                        <el-checkbox v-model="addData.isSuite">是否套件</el-checkbox>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="bgcolor">
                        <label></label>
                        <el-checkbox v-model="addData.validityMgt">有效期管理</el-checkbox>
                        <el-checkbox v-model="addData.multiUnitEnabled">启用多单位</el-checkbox>
                    </div>
                </el-col>
            </el-col> 
        </el-row>
     <!-- </div>    
 </el-collapse-transition>   -->

<el-row class="nopadding" v-show="isCategoryIdEmpty">  
    <div class="tabZoo">
        <el-col :span="24">
            <el-tabs v-model="activeName_one">
                <el-tab-pane label="商品价格" name="goodsPrice">
                    <div class="bgcolor ">
                        <label>进货价</label>
                        <el-input 
                        
                        @change="isUpdate"
                        @focus="showErrprTips"
                        :class="{redBorder : validation.hasError('addData.purchasePrice')}"
                        class="purchasePrice"
                        v-model="addData.purchasePrice"
                        ></el-input>
                    </div>
                    <div class="bgcolor ">
                        <label>批发价</label>
                        <el-input 
                        
                        @change="isUpdate"
                        @focus="showErrprTips"
                        :class="{redBorder : validation.hasError('addData.wholePrice')}"
                        class="wholePrice"
                        v-model="addData.wholePrice"
                        ></el-input>
                    </div>
                    <div class="bgcolor ">
                        <label>会员价</label>
                        <el-input 
                        
                        @change="isUpdate"
                        @focus="showErrprTips"
                        :class="{redBorder : validation.hasError('addData.vipPrice')}"
                        class="vipPrice"
                        v-model="addData.vipPrice"
                        ></el-input>
                    </div>
                    <div class="bgcolor ">
                        <label>零售价</label>
                        <el-input 
                        
                        @change="isUpdate"
                        @focus="showErrprTips"
                        :class="{redBorder : validation.hasError('addData.retailPrice')}"
                        class="retailPrice"
                        v-model="addData.retailPrice"
                        ></el-input>
                    </div>
                    <div class="bgcolor ">
                        <label>折扣率</label>
                        <el-input 
                        
                        @change="isUpdate"
                        @focus="showErrprTips"
                        :class="{redBorder : validation.hasError('addData.discount')}"
                        class="discount"
                        v-model="addData.discount"
                        ></el-input>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-col>
    </div>
 </el-row>

 <el-row class="nopadding" v-show="isCategoryIdEmpty">  
    <div class="tabZoo">
        <el-col :span="24">
            <el-tabs v-model="activeName_two">
                <el-tab-pane label="商品规格" name="goodsSize">
<!-- - - - - - - - - - - - - - - - - - - - - - - - 商品规格表格 - - - - - - - - - - - - - - - - - - - - -  -->
                        <el-table :data="goodsSize_data" border style="width: 100%" stripe>
                            <el-table-column type="selection"></el-table-column>

                            <el-table-column prop="groupId" label="规格编码" >
                                <template slot-scope="scope">
                                    <img class="abimg" src="../../../../static/image/content/redremind.png"/>
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.groupId" 
                                            type="text"/>
                                </template>
                            </el-table-column>

                            <el-table-column prop="specId" label="规格" >
                                <template slot-scope="scope">
                                    <el-select  
                                    v-model="scope.row.transportMethodId" 
                                    :class="[scope.$index%2==0?'bgw':'bgp']"
                                    placeholder=""
                                    >
                                        <!-- <el-option  v-for="item in transAr" :key="item.itemValue" :label="item.itemName" :value="item.itemValue" >
                                        </el-option> -->
                                    </el-select>
                                </template>
                            </el-table-column>

                            
                            <el-table-column prop="basSpecgroupId" label="规格组">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.basSpecgroupId" 
                                            type="text"/>
                                </template>
                            </el-table-column>
                            <el-table-column prop="productId" label="规格名称">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.productId" 
                                            type="text"/>
                                </template>
                            </el-table-column>
                        </el-table> 
                        
                </el-tab-pane>
            </el-tabs>
        </el-col>
    </div>
 </el-row>
 <el-row class="nopadding" v-show="isCategoryIdEmpty">  
    <div class="tabZoo">
        <el-col :span="24">
            <el-tabs v-model="activeName_three">
                <el-tab-pane label="SKU" name="SKU">
<!-- - - - - - - - - - - - - - - - - - - - - - - - SKU表格 - - - - - - - - - - - - - - - - - - - - -  -->
                        <el-table :data="SKU_data" border style="width: 100%" stripe>
                            <el-table-column type="selection"></el-table-column>

                            <el-table-column prop="skuCode" label="SKU编码" >
                                <template slot-scope="scope">
                                    <img class="abimg" src="../../../../static/image/content/redremind.png"/>
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.skuCode" 
                                            type="text"/>
                                </template>
                            </el-table-column>

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
                            <el-table-column prop="specId1" label="颜色">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.specId1" 
                                            type="text"/>
                                </template>
                            </el-table-column>
                            <el-table-column prop="specId2" label="尺码">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.specId2" 
                                            type="text"/>
                                </template>
                            </el-table-column>
                            <el-table-column prop="specId3" label="单位">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.specId3" 
                                            type="text"/>
                                </template>
                            </el-table-column>
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
                        <label>品类</label>
                        <el-input class="productId"
                        @change="isUpdate"
                        @focus="showErrprTipsSelect"
                        :class="{redBorder : validation.hasError('goodsProperty.productId')}"
                        v-model="goodsProperty.productId" >
                        </el-input>
                    </div>
                    <div class="bgcolor">
                        <label>系列</label>
                        <el-input class="propertyId"
                        @change="isUpdate"
                        @focus="showErrprTipsSelect"
                        :class="{redBorder : validation.hasError('goodsProperty.propertyId')}"
                        v-model="goodsProperty.propertyId" >
                        </el-input>
                    </div>
                    <div class="bgcolor">
                        <label>性别</label>
                        <el-select clearable class="brandId"
                        
                        @change="isUpdate"
                        @focus="showErrprTipsSelect"
                        :class="{redBorder : validation.hasError('goodsProperty.brandId')}"
                        placeholder=""
                        v-model="goodsProperty.brandId">
                            <el-option 
                            v-for="item in selectData.categoryId" 
                            :key="item.id" 
                            :label="item.accperiodSchemeName" 
                            :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="bgcolor">
                        <label>季节</label>
                        <el-select clearable class="brandId"
                        
                        @change="isUpdate"
                        @focus="showErrprTipsSelect"
                        :class="{redBorder : validation.hasError('goodsProperty.brandId')}"
                        placeholder=""
                        v-model="goodsProperty.brandId">
                            <el-option 
                            v-for="item in selectData.categoryId" 
                            :key="item.id" 
                            :label="item.accperiodSchemeName" 
                            :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="bgcolor">
                        <label>年份</label>
                        <el-date-picker 
                        @focus="showErrprTipsRangedate"
                        :class="{redBorder : validation.hasError('goodsProperty.propertyValueCode')}"
                        class="saleDate datepicker" 
                        format="yyyy"
                        value-format="yyyy" 
                        v-model="goodsProperty.propertyValueCode" 
                        type="year" 
                        ></el-date-picker>
                    </div>
                    <div class="bgcolor">
                        <label>其他属性</label>
                        <el-input class="propertyValueName"
                        @change="isUpdate"
                        @focus="showErrprTipsSelect"
                        :class="{redBorder : validation.hasError('goodsProperty.propertyValueName')}"
                        v-model="goodsProperty.propertyValueName" >
                        </el-input>
                    </div>
                </el-tab-pane>
<!-- - - - - - - - - - - - - - - - - - - - - - - - 图片 - - - - - - - - - - - - - - - - - - - - -  -->
                <el-tab-pane label="图片" name="picture">
                   <ul>
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
                       <li>
                            <app-loadImg></app-loadImg>
                       </li>
                   </ul>
                </el-tab-pane>
<!-- - - - - - - - - - - - - - - - - - - - - - - - 使用组织 - - - - - - - - - - - - - - - - - - - - -  -->
                <el-tab-pane label="使用组织" name="specTeam">
                    <el-table :data="SKU_data" border style="width: 100%" stripe>
                            <el-table-column prop="skuCode" label="业务组织">
                            </el-table-column>

                            <el-table-column prop="skuName" label="上市日期" ></el-table-column>

                            
                            <el-table-column prop="barcode" label="备注"></el-table-column>
                            <el-table-column prop="specId1" label="状态">
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
            test1:[{
                id:1,
                name:'nihao'
            },{
                id:2,
                name:'你好'
            }],
            groupId:1,
            isCategoryIdEmpty:false,//类目是否选择
            // 错误信息提示开始
            detail_message_ifShow:false,
            errorMessage:false,
            // 错误信息提示结束
            search:'',
             selectTree:[
            ],
            selectTreeCompany:[],
            item_ou:{
                id:'',
                ouFullname:''
            },
            selectProps: {
                children: 'children',
                label: 'ouFullname',
                id:'id'
            },
            selectPropsCompany:{
                 children: 'children',
                label: 'ouFullname',
                id:'id'
            },
             test:'',   
            dateRange:[],//有效时间
            companys:1,
            show:true,
            ifShow:true,
            activeName_one: 'goodsPrice',
            activeName_two: "goodsSize",
            activeName_three: "SKU",
            auditInfo:{
                createdTime:this.GetDateTime(),//创建时间
                createdBy:this.$store.state.name,//创建人
                modifiedTime:this.GetDateTime(),//修改人
                modifiedBy:this.$store.state.name//修改时间
            },//审计信息
            addData:{
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
            isEdit:true,//是否可编辑
             response:{
                details:'',
                message:'',
                validationErrors:[],
            },
//----------按钮操作--------------
        choseDoing:'',//存储点击按钮判断信息
        dialogUserConfirm:false,//信息更改提示控制
        update:false,
//----------名称全称联动----------
        isUpdateFlag:false,   
//---------------商品规格------------------
        multipleSelection_size:[],//从表商品规格选中数据
        goodsSize_data:[],//从表商品规格数据
        goodsSize_newCol:[],//所有新行
        goodsSize_col:{
                "groupId": 1,
                "productId": 0,
                "basSpecgroupId": 0,
                "specId": 0
            },
        goodsSize_newCol_len:0,//新行数目
//---------------SKU------------------
        multipleSelection_SKU:[],//从表商品规格选中数据
        SKU_data:[],//从表商品规格数据
        SKU_newCol:[],//所有新行
        SKU_col:{
            "groupId": 1,
            "productId": 0,
            "skuCode": "",
            "skuName": "",
            "barcode": "",
            "specId1": 0,
            "specId2": 0,
            "specId3": 0,
            "specId4": 0,
            "unitId": 0,
            "purchasePrice": 0,
            "wholePrice": 0,
            "discount": 0,
            "vipPrice": 0,
            "retailPrice": 0,
            "status": 0
            },
        SKU_newCol_len:0,//新行数目
//---------------属性------------------
        goodsProperty:{
            "groupId": 1,
            "productId": 0,
            "propertyId": 0,
            "propertyValueCode": "",
            "propertyValueName": ""
        }
    }
},
    validators: {
     'addData.categoryId': function (value) {//类目
         return this.Validator.value(value).required().integer()
      },
      'addData.productCode': function (value) {//商品编码
        if(this.isCategoryIdEmpty){
            return this.Validator.value(value).required().maxLength(50);
        }else{
            return this.Validator.value(value)
        }
         
      },
      'addData.productName': function (value) {//商品名称
        if(this.isCategoryIdEmpty){
            return this.Validator.value(value).required().maxLength(100);
         }else{
            return this.Validator.value(value)
        }
      },
      'addData.brandId': function (value) {//品牌
        if(this.isCategoryIdEmpty){
            return this.Validator.value(value).integer();
         }else{
            return this.Validator.value(value)
        }
      },
      'addData.unitId': function (value) {//单位
        if(this.isCategoryIdEmpty){
            return this.Validator.value(value).required().integer();
         }else{
            return this.Validator.value(value)
        }
      },
      'addData.barcode': function (value) {//商品条码
        if(this.isCategoryIdEmpty){
            return this.Validator.value(value).maxLength(50);
         }else{
            return this.Validator.value(value)
        }
      },
      'addData.mnemonic': function (value) {//助记码
        if(this.isCategoryIdEmpty){
            return this.Validator.value(value).maxLength(50);
         }else{
            return this.Validator.value(value)
        }
      },
      'addData.saleDate': function (value) {//上市时间
          return this.Validator.value(value);
      },
      'addData.remark': function (value) {//备注
         return this.Validator.value(value)
      },

    },
    computed:{
        count () {
            return this.ischeck;
            }  
    },
    mounted () {
        // let _this=this;
        // if(_this.addData.categoryId=''){
        //     _this.isCategoryIdEmpty=true
        // }else{
        //     _this.isCategoryIdEmpty=false
        // }  
    },
    created:function(){
        let _this=this;
         _this.loadTree();
          _this.loadTreeCompany();
         _this.getSelectData();
         _this.getDefault();
    },  
     watch: {
      search(val) {
        this.$refs.tree.filter(val);
      },
      'addData.categoryId'(val){
          if(val!=''){
              this.isCategoryIdEmpty=true
          }else{
              this.isCategoryIdEmpty=false
          }
      }
    },
    methods:{
        getDefault(){
            let _this=this;
           _this.addData={
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
            _this.$axios.gets('/api/services/app/OuManagement/GetOuParentList').then(function(res){ 
            // 上级业务单元(所属组织)
                _this.selectData.ouParentid=res.result;
            })
            // _this.$axios.gets('/api/services/app/AccperiodSheme/GetAll').then(function(res){ 
            // // 会计期间方案
            //     _this.selectData.accCchemeId=res.result.items;
            // })
            _this.$axios.gets('/api/services/app/CurrencyManagement/GetAll').then(function(res){ 
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
            return data.ouFullname.indexOf(value) !== -1;
        },
 //---------------------------商品规格------------------------------

//---------------------------SKU------------------------------

        getStartMonth(){//根据会计期间生成启用年月
            let _this=this;
            _this.$axios.gets('/api/services/app/AccperiodSheme/Get',{id:_this.addData.accCchemeId})
            .then(function(res){
                _this.addData.accStartMonth=res.result.checkDate 
            },function(res){
            })
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
        loadTreeCompany(){
        let _this=this;
        _this.treeLoading=true;
        _this.$axios.gets('/api/services/app/OuManagement/GetTreeWithOuType',{ouType:1})
        .then(function(res){
            // console.log(res);
            _this.selectTreeCompany=res.result;
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
            _this.item_ou.id=data.id;
            _this.item_ou.ouFullname=data.ouFullname;
            // _this.$nextTick(function(){
            //     $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').click();
            // })
            $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').each(function(index){
            if($(this).attr('date')==data.id){
                $(this).click()
            }
        })
        },
       nodeClick(data,node,self){
        let _this=this;
        _this.item_ou.id=data.id;
        _this.item_ou.ouFullname=data.ouFullname;
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
                    _this.$axios.posts('/api/services/app/ProductManagement/Create',_this.addData).then(function(res){
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
             _this.addData={
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
           
            _this.Company=true;//公司 
            _this.Business=false;//业务   
            _this.Finance=true;//财务
            _this.dateRange=[]
            _this.getDefault()
            _this.validation.reset();
        },
        saveAdd(){
            
        },
        submitUpload() {//手动上传
            this.$refs.upload.submit();
        },
        handleRemove(file, fileList) {//文件列表移除文件时的钩子
            console.log(file, fileList);
        },
        handlePreview(file) {//点击已上传的文件链接时的钩子, 可以通过 file.response 拿到服务端返回数据
            console.log(file);
        },
        beforeRemove(file, fileList) {//删除前
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        handleExceed(files, fileList) {//超出上传限制回调
            this.$message.warning(`一次选择一张`);
        },
         handleAvatarSuccess(res, file) {//文件上传成功时的钩子
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        changePicture(file, fileList){
            this.imageUrl = URL.createObjectURL(file.raw);
            console.log(fileList)
        },
            GetDateTime: function () {
            var date = new Date();
            var seperator1 = "-";
            var seperator2 = ":";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + date.getHours() + seperator2 + date.getMinutes()
                + seperator2 + date.getSeconds();
            return currentdate;
        }
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
  </style>
  <style>
  .goodsFilesDetail .bgcolor .el-select .el-input input{
    height: 35px!important;
    }
  </style>
  
