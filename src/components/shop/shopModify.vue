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

                <button class="erp_bt bt_add" @click="goDetail" v-show='!ifModify&&!ifDoModify'>
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_add.png">
                    </div>
                    <span class="btDetail">新增</span>
                </button>

                <button class="erp_bt bt_del" @click="delShop(3)" v-show='!ifModify&&!ifDoModify'>
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

                                    <span :class="{block : !validation.hasError('shopData.shopFullname')}">
                                        全称{{ validation.firstError('shopData.shopFullname') }},
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
                            <label><small>*</small>店铺性质</label>
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
                            <el-date-picker v-model="shopData.openingDate" 
                                            type="date" 
                                            @focus="showErrprTips"
                                            class="openingDate"
                                            @change='Modify()'
                                            :class="{redBorder : validation.hasError('shopData.openingDate')}"
                                            placeholder=""></el-date-picker>
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
                            <label>状态</label>
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
                        <el-tab-pane label="联系人" name="contact" class="getPadding" style="z-index:-10">
                            <button class="erp_bt bt_add" @click="addCol">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_add.png">
                                </div>
                                <span class="btDetail">增行</span>
                            </button>
                            
                            <button class="erp_bt bt_del" @click="delMore(2)">
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
                            
                    
                            <el-table :data="shopData.shopContacts" stripe border style="width: 100%" @selection-change="handleSelectionChange" class="all-table">
                                <el-table-column type="selection"></el-table-column>

                                <el-table-column prop="contactPerson" label="联系人" width="180">
                                    <template slot-scope="scope">
                                        <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.contactPerson" 
                                            type="text"
                                            @change="handleChange(scope.$index,scope.row)"/> 
                                    </template>
                                </el-table-column>

                                <el-table-column prop="accountName" label="性别" width="180">
                                    <template slot-scope="scope">
                                        <el-select  v-model="scope.row.sex" :class="[scope.$index%2==0?'bgw':'bgp']">
                                            <el-option  v-for="item in sexAr" :key="item.itemValue" :label="item.itemName" :value="item.itemValue" >
                                            </el-option>
                                        </el-select>
                                    </template>
                                </el-table-column>

                                <el-table-column prop="position" label="职位" width="180">
                                    <template slot-scope="scope">
                                        <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.position" 
                                            type="text"    
                                            @change="handleChange(scope.$index,scope.row)"/> 
                                    </template>
                                </el-table-column>

                                <el-table-column prop="mobile" label="手机" width="180">
                                    <template slot-scope="scope">
                                        <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.mobile" 
                                            type="text"    
                                            @change="handleChange(scope.$index,scope.row)"/> 
                                    </template>
                                </el-table-column>

                                
                                <el-table-column prop="isDefault" label="默认" >
                                    <template slot-scope="scope">
                                        <el-radio  :label="true" 
                                                    v-model="scope.row.isDefault" 
                                                    @change.native="getCurrentRow(scope.$index,scope.row)" 
                                                    @change="handleChange(scope.$index,scope.row)"></el-radio>
                                    </template>
                                </el-table-column>

                                <el-table-column prop="remark" label="备注" width="180">
                                    <template slot-scope="scope">
                                        <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.remark" 
                                            type="text"   
                                            @change="handleChange(scope.$index,scope.row)"/> 
                                    </template>
                                </el-table-column>

                                <el-table-column label='操作'>
                                    <template slot-scope="scope" >
                                        <el-button @click="handleDelete(scope.$index,scope.row,1)" type="text" size="small">删除</el-button>
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
  
            activeName: 'contact',//tabs标签页默认激活name

            shopData:'',//根据id获得的店铺信息
            contactData:[],//联系人数据
            addList:[],//新增联系人
            
            x:0,
            xrows:[],

            multipleSelection:[],//需要删除的数组
            

            idArray:{//银行多项删除的id
                ids:[]
            },

            createContactParams:{//创建银行的参数
                contactPerson: "",
                mobile: "",
                phone: "",
                isDefault: false,
                remark: "",
                position: "",
                sex: '',
                id: 0
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
        'shopData.shopFullname': function (value) {//全称
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
            return this.Validator.value(value).maxLength(50);
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
            return this.Validator.value(value)
        },
        'shopData.longitude': function (value) {//经度
            return this.Validator.value(value).maxLength(50);
        },
        'shopData.latitude': function (value) {//纬度
            return this.Validator.value(value).maxLength(50);
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
                    self.contactData = self.shopData.shopContacts;
                    console.log(self.shopData);
                    // console.log(self.contactData)
                    
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
                        // console.log(res);
                        self.opAr = res.result;
                        self.loadIcon();
                    },function(res){
                        console.log('err'+res)
                    });


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
                
            }
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
                console.log(res);
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
            let self=this;
            self.$nextTick(function () {
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
        ouNodeClick:function(data){
            let self = this;
            self.ouItem.id = data.id;
            self.ouItem.ouFullname = data.ouFullname;
            self.$nextTick(function(){
                $('#ou_confirmSelect').click()
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
        //----------------------------------------------------------------

        //---保存、修改数据---------------------------------------------
        saveModify:function(){
            let self = this;
            if(self.ifModify){
                $('.tipsWrapper').css({display:'block'});
                self.$validate().then(function(success){
                    if(success){
                        $('.tipsWrapper').css({display:'none'});
                        self.$axios.puts('/api/services/app/ShopManagement/Update',self.shopData).then(function(res){
                            self.open('修改店铺信息成功','el-icon-circle-check','successERP');
                            self.ifModify = false;
                        },function(res){
                            self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                            self.errorMessage=true;
                            self.open('修改店铺信息失败','el-icon-error','faildERP');
                        })
                    }
                });
            }

            if(self.ifDoModify){
                self.saveContactModify();
            }
            
            self.createContact();
            
        },
        saveContactModify:function(){//修改联系人
            let self = this;
            self.$axios.puts('/api/services/app/ShopManagement/Update',self.shopData).then(function(res){
                console.log(res);
                self.open('修改联系人成功','el-icon-circle-check','successERP');
                self.ifDoModify = false;
            },function(res){
                self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                self.errorMessage=true;
                self.open('修改联系人失败','el-icon-error','faildERP');
            })
            
        },
        
        createContact:function(){//创建联系人
            let self = this;
            console.log(self.shopData.shopContacts)
            if(self.addList.length>0){
                
                self.$axios.puts('/api/services/app/ShopManagement/Update',self.shopData).then(function(res){         
                    self.open('创建联系人成功','el-icon-circle-check','successERP');
                    self.loadData();
                    self.addList = [];
                },function(res){
                    self.open('创建联系人失败','el-icon-error','faildERP');
                    self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                    self.errorMessage=true;
                })
            }
        },
        
        //-------------------------------------------------------

        //---控制按钮显示及隐藏-----------------------------------     
        Cancel(){
            let self = this;
            self.loadData();
            self.ifModify = false;
            self.ifDoModify = false;
            $('.tipsWrapper').css({display:'none'})
        },
        //-------------------------------------------------------

        // ---主表修改----------------------------------------
        Modify:function(){//判断主表是否修改过
            let self = this;
            self.ifModify = true;
        },
        //---------------------------------------------------
        //---从表修改-----------------------------------------
        handleChange:function(index,row){//判断联系人是否修改
            let self = this;
            self.ifDoModify = true;
        },
        //---------------------------------------------------
        //---从表增行--------------------------------------------
        addCol:function(){//银行增行
            let self = this;
                self.x++;
                let newCol = 'newCol'+self.x;
                self.xrows.newCol ={
                    contactPerson: "",
                    mobile: "",
                    phone: "",
                    isDefault: false,
                    remark: "",
                    position: "",
                    sex: '',
                    id: 0
                };
                self.shopData.shopContacts.unshift(self.xrows.newCol);
                self.addList.unshift(self.xrows.newCol)
        },
        //---------------------------------------------------

        

        //---从表默认单选框-----------------------------------
        getCurrentRow:function(index,row){//默认单选框
            let self = this;
            for(let i in self.shopData.shopContacts){
                self.shopData.shopContacts[i].isDefault = false;
            }
            self.shopData.shopContacts[index].isDefault = true;
            
        },
        //---------------------------------------------------

        //---从表复选框---------------------------------------
        handleSelectionChange:function(val){//点击复选框选中的数据
                this.multipleSelection = val;
        },
        //---------------------------------------------------

        

        //---确认删除-----------------------------------------
        sureDel:function(){
            let self = this;
            console.log(self.who)
            if(self.who == 1){//单项删除
                if(self.whoId>0){
                    self.shopData.shopContacts.splice(self.whoIndex,1);
                    self.$axios.puts('/api/services/app/ShopManagement/Update',self.shopData).then(function(res){
                        self.open('删除联系人成功','el-icon-circle-check','successERP');
                        self.dialogDelConfirm = false;
                    },function(res){
                        self.open('删除联系人失败','el-icon-error','faildERP');
                        self.dialogDelConfirm = false;
                        self.errorMessage=true;
                        self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                    })
                }else{
                    self.shopData.shopContacts.splice(self.whoIndex,1);
                    self.addList.splice(self.whoIndex,1);
                    self.dialogDelConfirm = false;
                    self.open('删除新增行成功','el-icon-circle-check','successERP');
                }
            }

            if(self.who == 2){//多项删除  
                let x=[];
                $.each(self.shopData.shopContacts,function(index,value){
                    let flag=false;
                    $.each(self.multipleSelection,function(i,val){
                        if(value==val){
                            flag=true
                        }
                    })
                    if(!flag){
                        x.push(value)
                    }
                })
           
                self.shopData.shopContacts = x;
                console.log(self.shopData.shopContacts)

                self.$axios.puts('/api/services/app/ShopManagement/Update',self.shopData).then(function(res){
                    self.open('删除联系人成功','el-icon-circle-check','successERP');
                    self.loadData();
                    self.dialogDelConfirm = false;
                },function(res){
                    self.open('删除联系人失败','el-icon-error','faildERP');
                    self.dialogDelConfirm = false;
                    self.errorMessage = true;
                    self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                })    
            }

            if(self.who == 3){//删除
                self.$axios.deletes('/api/services/app/ShopManagement/Delete',{id:self.$route.params.id}).then(function(res){
                    self.open('删除店铺成功','el-icon-circle-check','successERP');
                    self.back();
                    self.dialogDelConfirm = false;
                },function(res){
                    self.open('删除店铺失败','el-icon-error','faildERP');
                    self.dialogDelConfirm = false;
                    self.errorMessage = true;
                    self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                }) 
            }


        },
        //---------------------------------------------------

        //---从表单项删除-------------------------------------

        handleDelete:function(index,row,who){//表格内删除操作
            let self = this;
            console.log(row)
            self.who = who;
            self.whoIndex = index;
            self.whoId = row.id;
            self.dialogDelConfirm = true;
        },
        //---------------------------------------------------
        
        
        //---从表多项删除---------------------------------------------
        delMore:function(num){//多项删除
            let self = this;
            
            for(let i in self.multipleSelection){
                self.idArray.ids.push(self.multipleSelection[i].id)
            }
            if(self.idArray.ids.length>0){
                if(self.idArray.ids.indexOf(undefined)!=-1){
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
        
        delShop:function(num){//删除此页店铺
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
            this.$store.state.url='/shop/shopDetail/default'
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
            
        },
        showErrprTipsSelect(e){
            $('.tipsWrapper').css({display:'none'})
            
        },
        showErrprTipsRangedate(e){
            $('.tipsWrapper').css({display:'none'})
            
        },
        showErrprTipsTextArea(e){
            $('.tipsWrapper').css({display:'none'})
            
        },
        getErrorMessage(message,details,validationErrors){
            let self=this;
            self.response.message='';
            self.response.details='';
            self.response.validationErrors=[];
            if(details!=null && details){
                self.response.details=details;
            }
            if(message!=null && message){
                self.response.message=message;
            }
            if(message!=null && message){
                self.response.validationErrors=validationErrors;
            }
        },
        //-------------------------------------------------------------
        test:function(){
            let self = this;
            // console.log(self.checkedAr)
            console.log(self.contactData)
            console.log(self.addList)
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
  
