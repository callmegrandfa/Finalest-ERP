<template>
 <div class="customerBasicForm">
     <el-row>
         <el-col :span="24"  class="fixed bg-white bb1 pb5 pt5">
            <button class="erp_bt bt_back" @click="isBack">
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

            <button class="erp_bt bt_saveAdd" @click="saveAdd">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_saveAdd.png">
                </div>
                <span class="btDetail">保存并新增</span>
            </button>

            <button class="erp_bt bt_cancel" @click='Cancel()'>
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
            <el-row class="bg-white pt10">
                <el-col :span="24" class="getPadding"> 
                    <div class="tipsWrapper mb10">
                        <div class="errorTips">
                            <p class="msgDetail">错误提示：
                                <span :class="{block : !validation.hasError('createShopParams.ouId')}">
                                     所属组织{{ validation.firstError('createShopParams.ouId') }},
                                </span>

                                <span :class="{block : !validation.hasError('createShopParams.contactCode')}">
                                     编码{{ validation.firstError('createShopParams.contactCode') }},
                                </span>

                                <span :class="{block : !validation.hasError('createShopParams.contactName')}">
                                     名称{{ validation.firstError('createShopParams.contactName') }},
                                </span>

                                <span :class="{block : !validation.hasError('createShopParams.contactFullName')}">
                                     全称{{ validation.firstError('createShopParams.contactFullName') }},
                                </span>

                                <span :class="{block : !validation.hasError('createShopParams.mnemonic')}">
                                     助记码{{ validation.firstError('createShopParams.mnemonic') }},
                                </span>

                                <span :class="{block : !validation.hasError('createShopParams.contactClassId')}">
                                     客户分类{{ validation.firstError('createShopParams.contactClassId') }},
                                </span>

                                <span :class="{block : !validation.hasError('createShopParams.contactWorkPropertyId')}">
                                     客户性质{{ validation.firstError('createShopParams.contactWorkPropertyId') }},
                                </span>

                                <span :class="{block : !validation.hasError('createShopParams.contactGradeId')}">
                                     客户等级{{ validation.firstError('createShopParams.contactGradeId') }},
                                </span>

                                <span :class="{block : !validation.hasError('createShopParams.contactTypeId')}">
                                     客户类型{{ validation.firstError('createShopParams.contactTypeId') }},
                                </span>

                                <span :class="{block : !validation.hasError('createShopParams.ficaOuId')}">
                                     对应财务组织{{ validation.firstError('createShopParams.ficaOuId') }},
                                </span>

                                <span :class="{block : !validation.hasError('createShopParams.taxCode')}">
                                     纳税登记号{{ validation.firstError('createShopParams.taxCode') }},
                                </span>

                                <span :class="{block : !validation.hasError('createShopParams.opAreaId')}">
                                     业务地区{{ validation.firstError('createShopParams.opAreaId') }},
                                </span>

                                <span :class="{block : !validation.hasError('createShopParams.adAreaId')}">
                                     行政地区{{ validation.firstError('createShopParams.adAreaId') }},
                                </span>

                                <span :class="{block : !validation.hasError('createShopParams.legalPerson')}">
                                     法人代表{{ validation.firstError('createShopParams.legalPerson') }},
                                </span>

                                <span :class="{block : !validation.hasError('createShopParams.regAddress')}">
                                     注册地址{{ validation.firstError('createShopParams.regAddress') }},
                                </span>

                                <span :class="{block : !validation.hasError('createShopParams.manager')}">
                                     负责人{{ validation.firstError('createShopParams.manager') }},
                                </span>

                                <span :class="{block : !validation.hasError('createShopParams.phone')}">
                                     电话{{ validation.firstError('createShopParams.phone') }},
                                </span>

                                <span :class="{block : !validation.hasError('createShopParams.remark')}">
                                     备注{{ validation.firstError('createShopParams.remark') }},
                                </span>

                                <span :class="{block : !validation.hasError('createShopParams.status')}">
                                     状态{{ validation.firstError('createShopParams.status') }},
                                </span>
                            </p>
                        </div>
                    </div>
                    
                    

                    <div class="bgcolor">
                        <label><small>*</small>所属组织</label>
                        <el-select v-model="createShopParams.ouId" 
                                placeholder=""
                                class="ouId"
                                @focus="showErrprTipsSelect"
                                @change='Modify()'
                                :class="{redBorder : validation.hasError('createShopParams.ouId')}">

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
                        <el-input v-model="createShopParams.shopCode" 
                                placeholder=""
                                @focus="showErrprTips" 
                                @change='Modify()'
                                :class="{redBorder : validation.hasError('createShopParams.shopCode')}"
                                class="shopCode"></el-input>
                    </div>


                    <div class="bgcolor">
                        <label><small>*</small>名称</label>
                        <el-input v-model="createShopParams.shopName" 
                                placeholder=""
                                @focus="showErrprTips" 
                                @change='Modify()'
                                :class="{redBorder : validation.hasError('createShopParams.shopName')}"
                                class="shopName"></el-input>
                    </div>


                    <div class="bgcolor">
                        <label><small>*</small>全称</label>
                        <el-input v-model="createShopParams.shopFullname" 
                                    placeholder=""
                                    @focus="showErrprTips" 
                                    @change='Modify()'
                                    :class="{redBorder : validation.hasError('createShopParams.shopFullname')}"
                                    class="shopFullname"></el-input>
                    </div>

                    <div class="bgcolor">
                        <label><small>*</small>店铺性质</label>
                        <el-select v-model="createShopParams.shopWorkPropertyid"
                                    placeholder=""
                                    @change='Modify()'
                                    @focus="showErrprTipsSelect"
                                    class="shopWorkPropertyid"
                                    :class="{redBorder : validation.hasError('createShopParams.shopWorkPropertyid')}">
                            <el-option v-for="item in propertyAr" 
                                    :key="item.itemValue" 
                                    :label="item.itemName" 
                                    :value="item.itemValue"></el-option>
                        </el-select>
                    </div>

                    <div class="bgcolor">
                        <label>对应仓库</label>
                        <el-select v-model="createShopParams.stockId"
                                    placeholder=""
                                    @change='Modify()'
                                    @focus="showErrprTipsSelect"
                                    class="stockId"
                                    :class="{redBorder : validation.hasError('createShopParams.stockId')}">
                            <el-option v-for="item in stockAr" 
                                    :key="item.id" 
                                    :label="item.stockName" 
                                    :value="item.id"></el-option>
                        </el-select>
                    </div>

                    <div class="bgcolor">
                        <label>店铺等级</label>
                        <el-select v-model="createShopParams.shopGradeid"
                                    placeholder=""
                                    @change='Modify()'
                                    @focus="showErrprTipsSelect"
                                    class="shopGradeid"
                                    :class="{redBorder : validation.hasError('createShopParams.shopGradeid')}">
                            <el-option v-for="item in gradeAr" 
                                    :key="item.itemValue" 
                                    :label="item.itemName" 
                                    :value="item.itemValue"></el-option>
                        </el-select>
                    </div>

                    <div class="bgcolor">
                        <label>开店日期</label>
                        <el-date-picker v-model="createShopParams.openingDate" 
                                        type="date" 
                                        @focus="showErrprTips"
                                        class="openingDate"
                                        @change='Modify()'
                                        :class="{redBorder : validation.hasError('createShopParams.openingDate')}"
                                        placeholder=""></el-date-picker>
                    </div>

                    <div class="bgcolor">
                        <label>业务地区</label>
                        <el-select v-model="createShopParams.opAreaId"
                                    class="opAreaId"
                                    @change='Modify()'
                                    placeholder=""
                                    @focus="showErrprTipsSelect"
                                    :class="{redBorder : validation.hasError('createShopParams.opAreaId')}">
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
                            <el-select v-model="createShopParams.adAreaId" class="areaDrop" placeholder="选择省">
                                <el-option v-for="item in areaProArray" :key="item.id" :label="item.areaName" :value="item.id">
                                </el-option>
                            </el-select>
                            <el-select v-model="createShopParams.adAreaId" class="areaDrop" placeholder="选择市">
                                <el-option v-for="item in areaCityArray" :key="item.basOuTypes" :label="item.label" :value="item.basOuTypes">
                                </el-option>
                            </el-select>
                            <el-select v-model="createShopParams.adAreaId" class="areaDrop" placeholder="选择区">
                                <el-option v-for="item in areaDisArray" :key="item.basOuTypes" :label="item.label" :value="item.basOuTypes">
                                </el-option>
                            </el-select>
                            <el-input class="areaEntry" placeholder="街道办地址"></el-input>
                        </div>
                    </div>


                    <div class="bgcolor">
                        <label>负责人</label>
                        <el-input v-model="createShopParams.manager" 
                                placeholder=""
                                class="manager"
                                @change='Modify()'
                                :class="{redBorder : validation.hasError('createShopParams.manager')}"
                                @focus="showErrprTips"></el-input>
                    </div>
                    
                    <div class="bgcolor">
                        <label>电话</label>
                        <el-input v-model="createShopParams.phone" 
                                placeholder=""
                                @change='Modify()'
                                class="phone"
                                :class="{redBorder : validation.hasError('createShopParams.phone')}"
                                @focus="showErrprTips"></el-input>
                    </div>

                    <div class="bgcolor">
                        <label>商圈</label>
                        <el-select v-model="createShopParams.tradingAreaid"
                                placeholder=""
                                @change='Modify()'
                                @focus="showErrprTipsSelect"
                                class="tradingAreaid"
                                :class="{redBorder : validation.hasError('createShopParams.tradingAreaid')}">
                            <el-option v-for="item in busAr" 
                                    :key="item.itemValue" 
                                    :label="item.itemName" 
                                    :value="item.itemValue"></el-option>
                        </el-select>
                    </div>

                    <div class="bgcolor">
                        <label>状态</label>
                        <el-select v-model="createShopParams.status"
                                    class="status"
                                    placeholder=""
                                    @change='Modify()'
                                    @focus="showErrprTipsSelect"
                                    :class="{redBorder : validation.hasError('createShopParams.status')}">
                            <el-option v-for="item in statusAr"  
                                    :key="item.itemValue" 
                                    :label="item.itemName" 
                                    :value="item.itemValue"></el-option>
                        </el-select>
                    </div>

                    <div class="bgcolor">
                        <label>店铺地址</label>
                        <el-input v-model="createShopParams.shopAddress" 
                                placeholder=""
                                @focus="showErrprTips"
                                class="shopAddress"
                                :class="{redBorder : validation.hasError('createShopParams.shopAddress')}"
                                @change='Modify()'></el-input>
                    </div>

                    <div class="bgcolor">
                        <label>经度</label>
                        <el-input v-model="createShopParams.longitude" 
                                placeholder=""
                                @focus="showErrprTips"
                                class="longitude"
                                :class="{redBorder : validation.hasError('createShopParams.longitude')}"
                                @change='Modify()'></el-input>
                    </div>

                    <div class="bgcolor">
                        <label>纬度</label>
                        <el-input v-model="createShopParams.latitude" 
                                placeholder=""
                                @focus="showErrprTips"
                                class="latitude"
                                :class="{redBorder : validation.hasError('createShopParams.latitude')}"
                                @change='Modify()'></el-input>
                    </div>
                    
                    <div class="bgcolor">
                        <label>备注</label>
                        <el-input v-model="createShopParams.remark" 
                                placeholder=""
                                class="remark"
                                @change='Modify()'
                                :class="{redBorder : validation.hasError('createShopParams.remark')}"
                                @focus="showErrprTips"></el-input>
                    </div>
                </el-col>
            </el-row>
        </div>
    </el-collapse-transition>     

    <!-- 联系人bootTab标签页 -->
    <el-row class="nopadding"> 
        <div class="tabZoo">
            <el-col :span="24">
               <el-tabs v-model="activeName">
                    <el-tab-pane label="联系人" name="contact" class="getPadding" style="z-index:-10">
                        <button class="erp_bt bt_add" @click="addCol">
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

                        <button class="erp_bt bt_del" @click='delMore(2)'>
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
                        
                
                        <el-table :data="addList" stripe border style="width: 100%" @selection-change="handleSelectionChange">
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

                            <el-table-column prop="sex" label="性别" width="180">
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
                                    <el-button v-on:click="handleDelete(scope.$index,scope.row,1)" type="text" size="small">删除</el-button>
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
            defaultOuId:'',
            ifShow:true,
            ifModify:false,//判断信息是否修改过
            showCompany:false,//初始默认公司计信息状态展开  
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

            createShopParams:{
                ouId: '',
                shopCode: "",
                shopName: "",
                shopFullname: "",
                shopWorkPropertyid: 0,
                opAreaId: 1,
                stockId: '',
                mnemonic: "",
                shopGradeid: '',
                adAreaId: 10,
                openingDate: "",
                manager: "",
                phone: "",
                tradingAreaid: '',
                shopAddress: "",
                longitude: '',
                latitude: '',
                remark: "",
                status:0,
                brandCodes: [],
                shopContacts: [
                    {
                    contactPerson: "",
                    mobile: "",
                    phone: "",
                    isDefault: false,
                    remark: "",
                    position: "",
                    sex: '',
                    id: 0
                    }
                ],
                id: 0
            },

            createBankParams:{//创建银行的参数
                groupId: 1,
                contactId:'',
                settlementCurrencyId: '',
                accountNo: "",
                accountName: "",
                openingBank: '',
                contactPerson: '',
                phone: '111111111111',
                isDefault: true
            },    

            contactData:[],//银行数据列表，开始为空
            addList:[],//需要添加的联系人信息


            multipleSelection:[],//需要删除的银行数组

            contactIndex:[],

            x:0,
            xrows:[],
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
        }
    },
    validators: {
        'createShopParams.ouId': function (value) {//所属组织
            return this.Validator.value(value).required().integer();
        },
        'createShopParams.shopCode': function (value) {//编码
            return this.Validator.value(value).required().maxLength(50);
        },
        'createShopParams.shopName': function (value) {//名称
            return this.Validator.value(value).required().maxLength(50);
        },
        'createShopParams.shopFullname': function (value) {//全称
            return this.Validator.value(value).required().maxLength(50);
        },
        'createShopParams.shopWorkPropertyid': function (value) {//店铺性质
            return this.Validator.value(value).integer();
        },
        'createShopParams.stockId': function (value) {//对应仓库
            return this.Validator.value(value).integer();
        },
        'createShopParams.shopGradeid': function (value) {//店铺等级
            return this.Validator.value(value).integer();
        },
        'createShopParams.openingDate': function (value) {//开店日期
            return this.Validator.value(value).maxLength(50);
        },
        'createShopParams.opAreaId': function (value) {//业务地区
            return this.Validator.value(value).integer();
        },
        'createShopParams.adAreaId': function (value) {//行政地区
            return this.Validator.value(value).integer();
        },
        'createShopParams.manager': function (value) {//负责人
            return this.Validator.value(value).maxLength(50);
        },
        'createShopParams.phone': function (value) {//电话
            return this.Validator.value(value).maxLength(50);
        },
        'createShopParams.tradingAreaid': function (value) {//商圈
            return this.Validator.value(value).maxLength(50);
        },
        // 'createShopParams.status': function (value) {//状态
        //     return this.Validator.value(value).integer();
        // },
        'createShopParams.shopAddress': function (value) {//店铺地址
            return this.Validator.value(value).maxLength(50);
        },
        'createShopParams.longitude': function (value) {//经度
            return this.Validator.value(value).maxLength(50);
        },
        'createShopParams.latitude': function (value) {//纬度
            return this.Validator.value(value).maxLength(50);
        },
        'createShopParams.remark': function (value) {//备注
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
                self.createShopParams.ouId = self.defaultOuId;
                //加载完成拿回下拉的默认值
                self.ouItem.ouFullname = res.result.ouFullname;
                self.ouItem.id =  res.result.id;

                //业务地区
                self.$axios.gets('/api/services/app/OpAreaManagement/GetTreeByOuId',{OuId:self.defaultOuId}).then(function(res){
                    // console.log(res);
                    self.opAr = res.result;
                    self.loadIcon();
                },function(res){
                    console.log('err'+res)
                });

                //对应仓库
                self.$axios.gets('/api/services/app/StockManagement/GetRepositoryList',{OuId:self.defaultOuId,Start:0,Length:100}).then(function(res){
                    // console.log(res);
                    self.stockAr = res.data;
                },function(res){
                    console.log('err'+res)
                });


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

        //---跳转修改页------------------------------------------------
        goModify:function(id){//点击跳转修改页modify
            this.$store.state.url='/shop/shopModify/'+id;
            this.$router.push({path:this.$store.state.url})//点击切换路由
        },
        //------------------------------------------------------------

        //---保存数据--------------------------------------------------       
        save:function(){//创建店铺
            let self = this;
            $('.tipsWrapper').css({display:'block'})
            self.$validate().then(function(success){
                if(success){
                    $('.tipsWrapper').css({display:'none'})
                    if(self.addList.length>0){
                        self.createShopParams.shopContacts = self.addList;
                        self.$axios.posts('/api/services/app/ShopManagement/Create',self.createShopParams).then(function(res){
                        // console.log(res);
                        self.open('创建店铺资料成功','el-icon-circle-check','successERP');
                        self.backId = res.result.id;
                        
                        

                        self.goModify(self.backId);
                    },function(res){
                        console.log(res)
                        self.open('创建失败','el-icon-error','faildERP')
                        self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                        self.errorMessage=true;
                    });
                    }
                    
                }
            })

        },
        saveAdd:function(){
            let self = this;
            $('.tipsWrapper').css({display:'block'})
            self.$validate().then(function(success){
                if(success){
                    $('.tipsWrapper').css({display:'none'})
                    if(self.addList.length>0){
                        self.createShopParams.shopContacts = self.addList;
                        self.$axios.posts('/api/services/app/ShopManagement/Create',self.createShopParams).then(function(res){
                        console.log(res);
                        self.open('创建店铺资料成功','el-icon-circle-check','successERP');
                        
                                 

                        self.Cancel();
                    },function(res){
                        console.log(res)
                        self.open('创建失败','el-icon-error','faildERP')
                        self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                        self.errorMessage=true;
                    });
                    }
                    
                }
            })

            
        },
        //---------------------------------------------------------
        

        //---从表增行--------------------------------------------
        addCol:function(){
            console.log(123)
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
                self.addList.unshift(self.xrows.newCol)
        },

        //-----------------------------------------------------

        //---确认删除-------------------------------------------
        sureDel:function(){
            let self = this;

            if(self.who == 1){//单项删除
                self.addList.splice(self.whoIndex,1);
                self.dialogDelConfirm = false;
                self.open('删除成功','el-icon-circle-check','successERP');
            };

            if(self.who == 2){//批量删除
                let x=[];
                $.each(self.addList,function(index,value){
                    let flag = false;
                    $.each(self.multipleSelection,function(i,val){
                        if(value==val){
                            flag = true;
                        }
                    })
                    if(!flag){
                        x.push(value)
                    }
                })
                self.addList = x;
                // console.log(self.addList)
                self.dialogDelConfirm = false;
            }

        },
        //-----------------------------------------------------
        
        //---从表表格内删除-------------------------------------------
        handleDelete:function(index,row,who){//表格内删除操作
            let self = this;
            self.who = who;
            self.whoIndex = index;
            self.dialogDelConfirm = true;
        },
        //-------------------------------------------------------

        //---从表多项删除-----------------------------------------
        delMore:function(num){
            let self = this;
            // for(let i in self.multipleSelection){
            //     self.contactIndex.push(self.multipleSelection[i].index)
            // }
            if(self.multipleSelection.length<=0){
                self.$message({
                    type: 'info',
                    message: '请勾选需要删除的数据！'
                });
            }else{
                self.who = num;
                self.dialogDelConfirm = true; 
            }
            // if(self.contactIndex.length>0){
            //     self.dialogDelConfirm = true; 
            //     self.who = num;
            //     console.log(self.contactIndex)
            // }else{
            //     self.$message({
            //         type: 'info',
            //         message: '请勾选需要删除的数据！'
            //     });
            // }
        },
        //------------------------------------------------------

        //---默认-------------------------------------------------------
        
        getCurrentRow:function(index,row){//默认单选框
            let self = this;
            for(let i in self.contactData){
                self.contactData[i].isDefault = false;
            }
            self.contactData[index].isDefault = true;
            for(let i in addBankList){
                self.addBankList[i].isDefault = false;
            }
            self.addBankList[index].isDefault = true;
            
        },
        //----------------------------------------------------------

        //---从表复选框---------------------------------------
        handleSelectionChange:function(val){//点击复选框选中的数据
                this.multipleSelection = val;
                // console.log(this.multipleSelection)
        },
        //---------------------------------------------------

        //---从表修改----------------------------------------
        handleChange:function(index,row){
            let self = this;
            self.ifModify = true;
        },
        //--------------------------------------------------

        //---判断是否有修改过的内容---------------------------
        Modify:function(){//判断主表是否修改过
            let self = this;
            self.ifModify = true;
        },
        Cancel:function(){
            let self = this;
            
            if(self.ifModify){
                self.dialogUserConfirm = true;
                self.backCancle = 1;//为1是取消
            }
            console.log(self.backCancle)
        },
        
        //--------------------------------------------------

        //---修改返回提示-----------------------------------------
        isBack(){
            let self=this;
            if(self.ifModify){
                self.backCancle = 2;
                self.dialogUserConfirm=true;
                // self.choseDoing='back'
            }else{
                self.back()
            }
        },
        sureDoing:function(){
            let self = this;
            // console.log(self.backCancle)
            if(self.backCancle === 1){//为1是取消
                self.backId = '';
                self.dialogUserConfirm=false;
                self.createShopParams = {//创建客户资料参数
                    ouId: self.defaultOuId,
                    shopCode: "",
                    shopName: "",
                    shopFullname: "",
                    shopWorkPropertyid: 0,
                    opAreaId: 1,
                    stockId: '',
                    mnemonic: "",
                    shopGradeid: '',
                    adAreaId: 10,
                    openingDate: "",
                    manager: "",
                    phone: "",
                    tradingAreaid: '',
                    shopAddress: "",
                    longitude: '',
                    latitude: '',
                    remark: "",
                    status:0,
                    brandCodes: [],
                    shopContacts: [
                        {
                        contactPerson: "",
                        mobile: "",
                        phone: "",
                        isDefault: false,
                        remark: "",
                        position: "",
                        sex: '',
                        id: 0
                        }
                    ],
                    id: 0
                }
                self.addList = [];
                self.backCancle = '';
                self.ifModify = false;
                $('.tipsWrapper').css({display:'none'})
            }
            if(self.backCancle === 2){//为2是返回
                self.back();
            }
        },
        //-------------------------------------------------------

        //---控制跳转------------------------------------------------
        back(){//点击新增跳转
            this.$store.state.url='/shop/shopList/default'
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
            self.createShopParams.stockId = '';
            self.createShopParams.opAreaId = '';
            self.opItem.areaName = '';
            self.ouItem.id = data.id;
            self.ouItem.ouFullname = data.ouFullname;
            self.$nextTick(function(){
                $('#ou_confirmSelect').click()
            })
            //点击所属组织，业务地区跟着变动
            self.$axios.gets('/api/services/app/OpAreaManagement/GetTreeByOuId',{OuId:data.id}).then(function(res){
                // console.log(res);
                self.opAr = res.result;
                if(res.result.length==0){
                    self.opItem.areaName = '暂无业务地区';
                    self.opItem.id = '';
                }
                self.loadIcon();
            },function(res){
                console.log('err'+res)
            });

            //点击所属组织，对应仓库跟着变动
            self.$axios.gets('/api/services/app/StockManagement/GetRepositoryList',{OuId:self.defaultOuId,Start:0,Length:100}).then(function(res){
                // console.log(res);
                self.stockAr = res.data;
            },function(res){
                console.log('err'+res)
            });
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
            // console.log(data)
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
.customerBasicForm .bgp .el-input__inner{
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
  
