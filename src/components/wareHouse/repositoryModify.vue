<template>
  <div class="res-modify">
        <el-row class="bg-white pt10 pb10 bb1 fixed">
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
            </button>  -->

            <button class="erp_bt bt_add" @click="goDetail" v-show='!ifModify'>
                <div class="btImg">
                    <img src="../../../static/image/common/bt_add.png">
                </div>
                <span class="btDetail">新增</span>
            </button>

            <button class="erp_bt bt_del" @click="delModify" v-show='!ifModify'>
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

            

            <div class="toggle-btn">
                <span @click='ifShow = !ifShow'>收起</span>
                <i class="el-icon-arrow-up"></i>
            </div>
        </el-row>

        <el-collapse-transition>
            <div v-show="ifShow" class="bb1">
                <el-row class="bg-white ft12 pr10 pt10">
                    <el-col :span="24" class="getPadding">
                        <div class="tipsWrapper" name="ouId">
                            <div class="errorTips" :class="{block : !validation.hasError('repositoryData.ouId')}">
                                <p class="msgDetail">错误提示：所属组织{{ validation.firstError('repositoryData.ouId') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="stockCode">
                            <div class="errorTips" :class="{block : !validation.hasError('repositoryData.stockCode')}">
                                <p class="msgDetail">错误提示：编码{{ validation.firstError('repositoryData.stockCode') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="stockName">
                            <div class="errorTips" :class="{block : !validation.hasError('repositoryData.stockName')}">
                                <p class="msgDetail">错误提示：名称{{ validation.firstError('repositoryData.stockName') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="stockFullName">
                            <div class="errorTips" :class="{block : !validation.hasError('repositoryData.stockFullName')}">
                                <p class="msgDetail">错误提示：全称{{ validation.firstError('repositoryData.stockFullName') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="mnemonic">
                            <div class="errorTips" :class="{block : !validation.hasError('repositoryData.mnemonic')}">
                                <p class="msgDetail">错误提示：助记码{{ validation.firstError('repositoryData.mnemonic') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="stockTypeId">
                            <div class="errorTips" :class="{block : !validation.hasError('repositoryData.stockTypeId')}">
                                <p class="msgDetail">错误提示：仓库类型{{ validation.firstError('repositoryData.stockTypeId') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="opAreaId">
                            <div class="errorTips" :class="{block : !validation.hasError('repositoryData.opAreaId')}">
                                <p class="msgDetail">错误提示：业务地区{{ validation.firstError('repositoryData.opAreaId') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="adAreaId">
                            <div class="errorTips" :class="{block : !validation.hasError('repositoryData.adAreaId')}">
                                <p class="msgDetail">错误提示：行政地区{{ validation.firstError('repositoryData.adAreaId') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="manager">
                            <div class="errorTips" :class="{block : !validation.hasError('repositoryData.manager')}">
                                <p class="msgDetail">错误提示：负责人{{ validation.firstError('repositoryData.manager') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="phone">
                            <div class="errorTips" :class="{block : !validation.hasError('repositoryData.phone')}">
                                <p class="msgDetail">错误提示：电话{{ validation.firstError('repositoryData.phone') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="email">
                            <div class="errorTips" :class="{block : !validation.hasError('repositoryData.email')}">
                                <p class="msgDetail">错误提示：email{{ validation.firstError('repositoryData.email') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="fax">
                            <div class="errorTips" :class="{block : !validation.hasError('repositoryData.fax')}">
                                <p class="msgDetail">错误提示：传真{{ validation.firstError('repositoryData.fax') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="remark">
                            <div class="errorTips" :class="{block : !validation.hasError('repositoryData.remark')}">
                                <p class="msgDetail">错误提示：备注{{ validation.firstError('repositoryData.remark') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="status">
                            <div class="errorTips" :class="{block : !validation.hasError('repositoryData.status')}">
                                <p class="msgDetail">错误提示：状态{{ validation.firstError('repositoryData.status') }}</p>
                            </div>
                        </div>
                        <div class="bgcolor">
                            <label><small>*</small>所属组织</label>
                            <el-select v-model="repositoryData.ouId"
                                       :class="{redBorder : validation.hasError('repositoryData.ouId')}"
                                       class="ouId"
                                       @focus="showErrprTipsSelect"
                                       @change='Modify()'
                                       placeholder="">
                                <el-input placeholder="搜索..."
                                          class="selectSearch"
                                          v-model="ouSearch"></el-input>

                                <el-tree oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                                        :data="ouAr"
                                        :props="selectOuProps"
                                        node-key="id"
                                        default-expand-all
                                        ref="ouTree"
                                        :filter-node-method="ouFilterNode"
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
                            <el-input placeholder="" 
                                      v-model="repositoryData.stockCode" 
                                      @change="Modify()"
                                      @focus="showErrprTips"
                                      class="stockCode"
                                      :class="{redBorder : validation.hasError('repositoryData.stockCode')}"></el-input>
                        </div>
                        <div class="bgcolor">
                            <label><small>*</small>名称</label>
                            <el-input placeholder="" 
                                      v-model="repositoryData.stockName" 
                                      @change="Modify()"
                                      @focus="showErrprTips"
                                      class="stockName"
                                      :class="{redBorder : validation.hasError('repositoryData.stockName')}"></el-input>
                        </div>
                        <div class="bgcolor">
                            <label><small>*</small>全称</label>
                            <el-input placeholder="" 
                                      v-model="repositoryData.stockFullName" 
                                      @change="Modify()"
                                      @focus="showErrprTips"
                                      class="stockFullName"
                                      :class="{redBorder : validation.hasError('repositoryData.stockFullName')}"></el-input>
                        </div>
                        <div class="bgcolor">
                            <label>助记码</label>
                            <el-input placeholder="" 
                                      v-model="repositoryData.mnemonic" 
                                      @change="Modify()"
                                      @focus="showErrprTips"
                                      class="mnemonic"
                                      :class="{redBorder : validation.hasError('repositoryData.mnemonic')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label><small>*</small>仓库类型</label>
                            <el-select v-model="repositoryData.stockTypeId" 
                                       placeholder=""
                                       @change="Modify()"
                                       @focus="showErrprTipsSelect"
                                       :class="{redBorder : validation.hasError('repositoryData.stockTypeId')}"
                                       class="stockTypeId">
                                <el-option v-for="item in stockType"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                </el-option>
                            </el-select>
                        </div>

                        <div class="bgcolor">
                            <label>业务地区</label>
                            <el-select v-model="repositoryData.opAreaId" 
                                       placeholder=""
                                       @change="Modify()"
                                       @focus="showErrprTipsSelect"
                                       :class="{redBorder : validation.hasError('repositoryData.opAreaId')}"
                                       class="opAreaId">
                                <el-input placeholder="搜索..."
                                          class="selectSearch"
                                          v-model="opSearch"></el-input>
                                <el-tree oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                                         :data="opAr"
                                         :props="selectOpProps"
                                         node-key="id"
                                         default-expand-all
                                         ref="opTree"
                                         :filter-node-method="opFilterNode"
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
                            <el-select v-model="repositoryData.adAreaId" 
                                       placeholder=""
                                       @change="Modify()"
                                       @focus="showErrprTipsSelect"
                                       :class="{redBorder : validation.hasError('repositoryData.adAreaId')}"
                                       class="adAreaId">
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
                            <label>负责人</label>
                            <el-input placeholder="" 
                                      v-model="repositoryData.manager"
                                      @change="Modify()"
                                      @focus="showErrprTips"
                                      class="manager"
                                      :class="{redBorder : validation.hasError('repositoryData.manager')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>电话</label>
                            <el-input placeholder="" 
                                      v-model="repositoryData.phone"
                                      @change="Modify()"
                                      @focus="showErrprTips"
                                      class="phone"
                                      :class="{redBorder : validation.hasError('repositoryData.phone')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>Email</label>
                            <el-input placeholder="" 
                                      v-model="repositoryData.email"
                                      @change="Modify()"
                                      @focus="showErrprTips"
                                      class="email"
                                      :class="{redBorder : validation.hasError('repositoryData.email')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>传真</label>
                            <el-input v-model="repositoryData.fax"
                                      @change="Modify()"
                                      @focus="showErrprTips"
                                      placeholder="" 
                                      class="fax"
                                      :class="{redBorder : validation.hasError('repositoryData.fax')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>地址</label>
                            <el-input v-model="repositoryData.stockAddress"
                                      @change="Modify()"
                                      @focus="showErrprTips"
                                      placeholder="" 
                                      class="stockAddress"
                                      :class="{redBorder : validation.hasError('repositoryData.stockAddress')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>备注</label>
                            <el-input placeholder="" 
                                      v-model="repositoryData.remark"
                                      @focus="showErrprTips"
                                      @change="Modify()"
                                      class="remark"
                                      :class="{redBorder : validation.hasError('repositoryData.remark')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label><small>*</small>状态</label>
                            <el-select v-model="repositoryData.status" 
                                       placeholder=""
                                       @change='Modify()'
                                       @focus="showErrprTipsSelect"
                                       :class="{redBorder : validation.hasError('repositoryData.status')}"
                                       class="status">
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

        <el-row class="ft12 pr10 pt10 br3 bg-white">
            <el-col :span='24' class="pl10 mb10 bb1">
                <span class="header-title">送货信息</span>
            </el-col>

            <el-col :span="24" class="bg-white pl10">
                <button class="erp_bt bt_add" @click='addCol'>
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_add.png">
                    </div>
                    <span class="btDetail">增行</span>
                </button>
                
                <button class="erp_bt bt_del" @click='delRow'>
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_del.png">
                    </div>
                    <span class="btDetail">删除</span>
                </button>

                <button class="erp_bt bt_excel">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_excel.png">
                    </div>
                    <span class="btDetail">Excel</span>
                </button>

                <button class="erp_bt bt_auxiliary" @click='test'>
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_auxiliary.png">
                    </div>
                    <span class="btDetail">辅助功能</span>
                </button>
          </el-col>

          <el-col :span='24' class="bg-white pl10 pr10 pt10 pb10 bb1">
              <el-table :data="repositoryAddressData" border style="width: 100%" stripe @selection-change="handleSelectionChange">
                    <el-table-column type="selection"></el-table-column>

                    <el-table-column prop="contactPerson" label="联系人" >
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.contactPerson"
                                    @change='handleChange(scope.$index,scope.row)'
                                    type="text"/>
                        </template>
                    </el-table-column>

                    <el-table-column prop="moblie" label="手机">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.moblie"
                                    @change='handleChange(scope.$index,scope.row)'
                                    type="text"/>
                        </template>
                    </el-table-column>

                    <el-table-column prop="phone" label="电话">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.phone"
                                    @change='handleChange(scope.$index,scope.row)'
                                    type="text"/>
                        </template>
                    </el-table-column>

                    <el-table-column prop="completeAddress" label="送货地址">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.completeAddress"
                                    @change='handleChange(scope.$index,scope.row)'
                                    type="text" />
                        </template>
                    </el-table-column>

                    <el-table-column prop="transportMethodId" label="运输方式">
                        <template slot-scope="scope">
                            <el-select  v-model="scope.row.transportMethodId" :class="[scope.$index%2==0?'bgw':'bgp']" @change='handleChange(scope.$index,scope.row)'>
                                <el-option  v-for="item in transAr" :key="item.itemValue" :label="item.itemName" :value="item.itemValue" >
                                </el-option>
                            </el-select>
                        </template>
                    </el-table-column>

                    <el-table-column prop="transportMethodId" label="物流公司">
                        <template slot-scope="scope">
                            <el-select  v-model="scope.row.logisticsCompanyId" :class="[scope.$index%2==0?'bgw':'bgp']" @change='handleChange(scope.$index,scope.row)'>
                                <el-option  v-for="item in logiAr" :key="item.itemValue" :label="item.itemName" :value="item.itemValue" >
                                </el-option>
                            </el-select>
                        </template>
                    </el-table-column>

                    <el-table-column prop="isDefault" label="默认">
                        <template slot-scope="scope">
                            <el-radio  :label="true" 
                                                v-model="scope.row.isDefault" 
                                                @change.native="getCurrentRow(scope.$index,scope.row)" 
                                                @change="handleChange(scope.$index,scope.row)"></el-radio>
                        </template>
                    </el-table-column>

                    <el-table-column prop="remark" label="备注">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.remark"
                                    @change='handleChange(scope.$index,scope.row)'
                                    type="text"/>
                        </template>
                    </el-table-column>

                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button v-on:click="handleDelete(scope.$index,scope.row)" type="text" size="small">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table> 
            </el-col>
        </el-row>

      <el-row class="ft12 pr10 pt10 br3">
          <el-col :span='24' class="bg-white pl10 pt10 pb10">
              <span style="color:black;font-size:16px;font-weight:bolder;">审计信息</span>
          </el-col>

          <el-col :span="24" class="bg-white pb10">   
              <div>
                <div class="bgcolor">
                    <label>创建人</label>
                    <el-input placeholder="" disabled="disabled"></el-input>
                </div>

                <div class="bgcolor">
                    <label>创建时间</label>
                    <el-date-picker  type="date" placeholder="" disabled="disabled"></el-date-picker>
                </div>

                <div class="bgcolor">
                    <label>修改人</label>
                    <el-input placeholder="" disabled="disabled"></el-input>
                </div>

                <div class="bgcolor">
                    <label>修改时间</label>
                    <el-date-picker type="date" placeholder="" disabled="disabled"></el-date-picker>
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
    export default{
        name:'repositoryModify',
        created:function(){
            let self = this;
            self.loadData();
            self.loadSelect();
        },
        validators: {
            'repositoryData.ouId': function (value) {//所属组织
                return this.Validator.value(value).required().integer();
            },
            'repositoryData.stockCode': function (value) {//仓库编码
                return this.Validator.value(value).required().maxLength(50);
            },
            'repositoryData.stockName': function (value) {//仓库名称
                return this.Validator.value(value).required().maxLength(50);
            },
            'repositoryData.stockFullName': function (value) {//仓库全称
                return this.Validator.value(value).required().maxLength(50);
            },
            'repositoryData.mnemonic': function (value) {//助记码
                return this.Validator.value(value).maxLength(50);
            },
            'repositoryData.stockTypeId': function (value) {//仓库类型
                return this.Validator.value(value).required().integer();
            },
            'repositoryData.opAreaId': function (value) {//业务地区
                return this.Validator.value(value).integer();
            },
            'repositoryData.adAreaId': function (value) {//行政地区
                return this.Validator.value(value).integer();
            },
            'repositoryData.manager': function (value) {//负责人
                return this.Validator.value(value).required().maxLength(50);
            },
            'repositoryData.phone': function (value) {//电话
                return this.Validator.value(value).maxLength(50);
            },
            'repositoryData.email': function (value) {//Email 
                return this.Validator.value(value).maxLength(50);
            },
            'repositoryData.fax': function (value) {//传真
                return this.Validator.value(value).maxLength(50);
            },
            'repositoryData.stockAddress': function (value) {//地址
                return this.Validator.value(value).maxLength(50);
            },
            'repositoryData.remark': function (value) {//备注
                return this.Validator.value(value).maxLength(50);
            },
            'repositoryData.status': function (value) {//状态
                return this.Validator.value(value).required().integer();
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
        watch: {
            opSearch(val) {
                this.$refs.opTree.filter(val);
            },
            ouSearch(val) {
                this.$refs.ouTree.filter(val);
            }
        },
        methods:{
            
            //---加载信息-----------------------------------------------
            loadData:function(){//根据id查找仓库信息和仓库地址信息
                let self = this;
                if(self.$route.params.id!='default'){
                    //根据仓库id获取仓库信息
                    self.$axios.posts('/api/services/app/StockManagement/QueryRepositoryDetail',{id:self.$route.params.id}).then(function(res){  
                        console.log(res)               
                        self.repositoryData = res.result;

                        //加载完成拿回的下拉框的默认值
                        self.ouItem.ouFullname = self.repositoryData.ouId_OuName;
                        self.ouItem.id =  self.repositoryData.ouId;

                        self.adItem.areaName = self.repositoryData.adAreaId_AreaName;
                        self.adItem.id = self.repositoryData.adAreaId;

                        self.opItem.areaName = self.repositoryData.opAreaId_AreaName;
                        self.opItem.id = self.repositoryData.opAreaId;
                        // console.log(self.repositoryData);
                    });
                    // console.log(self.$route.params.id)
                    //根据仓库id获取仓库地址信息
                    self.createParams.stockId = self.$route.params.id;
                    self.getRepositoryAddressParams={
                        id:self.$route.params.id,
                    }
                    // console.log(self.getRepositoryAddressParams)
                    self.loadAddData();
                    
                }
            },
            loadAddData:function(){
                let self = this;
                this.$axios.gets('/api/services/app/StockAddressManagement/GetAllByStockId',self.getRepositoryAddressParams).then(function(res){
                        // console.log(res);
                        self.repositoryAddressData = res.result;
                        for(let i in self.repositoryAddressData){
                            if(self.repositoryAddressData[i].isDefault == true){
                                self.checkedAr = self.repositoryAddressData[i]
                            }
                        }
                    })
            },
                         //---下拉的数据-
            loadSelect:function(){
                let self = this;
                //所属组织
                self.$axios.gets('/api/services/app/OuManagement/GetAllTree',{AreaType:1}).then(function(res){
                    // console.log(res);
                    self.ouAr = res.result;
                    self.loadIcon();
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
                //运输方式
                self.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'TransportMethod'}).then(function(res){
                    console.log(res);
                    self.transAr = res.result;
                },function(res){
                    console.log('err'+res)
                });
                //物流公司
                self.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'logisticsCompany'}).then(function(res){
                    // console.log(res);
                    self.logiAr = res.result;
                },function(res){
                    console.log('err'+res)
                });
                
            },
            //------------------------------------------------------------------

            //---修改完成保存----------------------------------------------
            saveModify:function(){//修改仓库信息保存
                let self = this;
                
                
                if(self.updateList.length>0){
                    self.$axios.posts('/api/services/app/StockAddressManagement/CUDAggregate',{createList:[],updateList:self.updateList,deleteList:[]}).then(function(res){
                        console.log(res);
                        self.open('修改地址信息成功','el-icon-circle-check','successERP');
                        self.updateList = [];
                    })
                    
                }
                
                self.repositoryData.adAreaId == 1;
                console.log(self.repositoryData)
                if(self.ifModify){
                    self.$validate().then(function(success){
                        if(success){
                            self.$axios.puts('/api/services/app/StockManagement/UpdateRepository',self.repositoryData).then(function(res){
                                console.log(res);
                                self.open('修改仓库信息成功','el-icon-circle-check','successERP');
                                self.ifModify = false;
                            })
                        }
                    })
                }else{
                     self.open('没有需要保存的项目','el-icon-warning','noticERP');
                };

                
                self.createAddress();
            },

            createAddress:function(){//保存新增的仓库地址信息
                let self = this;
                if(self.addList.length>0){
                    this.$axios.posts('/api/services/app/StockAddressManagement/CUDAggregate',{createList:self.addList,updateList:[],deleteList:[]}).then(function(res){//创建
                        console.log(res);
                        self.open('新增地址成功','el-icon-circle-check','successERP');
                        self.addList = [];
                        self.loadData();
                        self.clearData();
                    })
                }
            },
            //------------------------------------------------------------

            //---控制是否可编辑---------------------------------------        
            Cancel(){
                let self = this;
                self.loadData();
                self.ifModify = false;
                $('.tipsWrapper').css({display:'none'})
                // }
            },
            //-------------------------------------------------------

            //---表格编辑-------------------------------------------------
            addCol:function(){//增行
                let self = this;
                self.x++;
                let newCol = 'newCol'+self.x;
                self.rows.newCol ={
                    groupId:'1',//集团ID
                    stockId:self.$route.params.id,//仓库ID
                    completeAddress:'',//详情地址
                    transportMethodId:'',//运输方式
                    contactPerson:'',//联系人
                    phone:'',
                    moblie:'',
                    logisticsCompanyId:'',//物流公司
                    isDefault:false,//是否默认
                    remark:'',//备注
                };
                self.repositoryAddressData.unshift(self.rows.newCol);
                self.addList.unshift(self.rows.newCol);
                // console.log(self.repositoryAddressData)
                // console.log(self.x)
                // console.log(self.rows)
                // console.log(self.addList)
            },
            delRow:function(){//删除选中的项
                let self=this;
                for(let i in self.multipleSelection){
                    self.idArray.ids.push(self.multipleSelection[i].id)
                }
                if(self.idArray.ids.indexOf(undefined)!=-1){
                    self.$message({
                        type: 'warning',
                        message: '新增数据请在行内删除'
                    });
                    return;
                }
                
                if(self.idArray.ids.length>0){
                    console.log(self.idArray.ids)
                    self.$confirm('确定删除?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning',
                        center: true
                        }).then(() => {
                            self.$axios.posts('/api/services/app/StockAddressManagement/BatchDelete',self.idArray).then(function(res){
                                self.loadAddData();
                                self.open('删除成功','el-icon-circle-check','successERP');    
                            })
                        }).catch(() => {
                            self.$message({
                                type: 'info',
                                message: '已取消删除'
                            });
                    });
                }else{
                    self.$message({
                        type: 'info',
                        message: '请勾选需要删除的数据！'
                    });
                }
            },
            handleSelectionChange:function(val){//点击复选框选中的数据
                this.multipleSelection = val;
                console.log(this.multipleSelection)
            },

            handleChange:function(index,row){
                let self = this;
                let flag = false;
                if(self.updateList.length==0&&row.id>0){
                    flag = true;
                }else if(self.updateList.length>=1&&row.id>0){
                    for(let i in self.updateList){
                        if(row.id != self.updateList[i].id){
                            flag = true;
                            console.log(flag) 
                        }else{
                            flag= false;
                            break;        
                        }
                    }
                };

                if(flag){
                    self.updateList.push(row);
                    console.log(self.updateList)
                }
            },
            getCurrentRow:function(index,row){//默认单选框
                let self = this;
                for(let i in self.repositoryAddressData){
                    self.repositoryAddressData[i].isDefault = false;
                }

                
                self.repositoryAddressData[index].isDefault = true;
                self.updateList.push(self.checkedAr)
            },
            handleDelete:function(index,row){//表格内删除操作
                let self = this;
                
                self.$confirm('确定删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                    }).then(() => {
                        self.$axios.deletes('/api/services/app/StockAddressManagement/Delete',{id:row.id}).then(function(res){
                            self.repositoryAddressData.splice(index,1)
                            self.loadAllList();
                            self.open('删除成功','el-icon-circle-check','successERP');    
                        })
                    }).catch(() => {
                        self.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                    });
                
            },
            Modify:function(){
                let self = this;
                self.ifModify = true;
            },
            //------------------------------------------------------

            //---确认删除--------------------------------------------
            sureDel:function(){
                let self = this;
                self.$axios.deletes('/api/services/app/StockManagement/DeleteRepository',{id:self.$route.params.id}).then(function(res){
                    self.open('删除仓库成功','el-icon-circle-check','successERP');
                    self.back();
                    self.dialogDelConfirm = false;
                },function(res){
                    self.open('删除仓库失败','el-icon-error','faildERP');
                    self.dialogDelConfirm = false;
                    self.errorMessage = true;
                    self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                }) 
            },
            //------------------------------------------------------

            //---顶部删除按钮-----------------------------------------
            delModify:function(){
                let self = this;
                self.dialogDelConfirm = true; 
            },
            //-------------------------------------------------------

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

            //---open-------数据清除--------路由跳转-----------------------
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

            // clearData:function(){//清除创建的参数
            //     let self = this;
            //     self.createParams={
            //         groupId:'1',//集团ID
            //         stockId:self.$route.params.id,//仓库ID
            //         completeAddress:'',//详情地址
            //         transportMethodId:'',//运输方式
            //         contactPerson:'',//联系人
            //         phone:'',//联系电话
            //         logisticsCompanyId:'',//物流公司
            //         isDefault:false,//是否默认
            //         remark:'',//备注
            //     };
            // },
            back(){
                this.$store.state.url='/repository/repositoryList/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
            goDetail(){//点击新增跳转
                this.$store.state.url='/repository/repositoryData/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
            //------------------------------------------------------------
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
            ouNodeClick:function(data){
                console.log(data)
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
            ouFilterNode(value, data) {
                if (!value) return true;
                    return data.ouFullname.indexOf(value) !== -1;
            },
            opFilterNode(value, data) {
                console.log(value)
                console.log(data)
                // if (!value) return true;
                //     return data.areaName.indexOf(value) !== -1;
            },
            filterNode(value, data) {
                console.log(data)
                if (!value) return true;
                    return data.areaName.indexOf(value) !== -1;
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
                console.log(self.addList)
                console.log(self.updateList)
            },
        },

        data(){
            return {
                repositoryData:{
                    "ouId": '',
                    "stockCode": "",
                    "stockName": "",
                    "stockFullName": "",
                    'mnemonic':'',
                    "opAreaId": '',
                    "adAreaId": '',
                    "stockTypeId": '',
                    "invTypeId": '',
                    "fax": "",
                    'stockAddress':'',
                    "email": "",
                    "status": '',
                    "manager": "",
                    "phone": "",
                    "remark": ""
                },//根据仓库id查出的仓库信息
                repositoryAddressData:[],//根据仓库id查出的仓库地址信息
                getRepositoryAddressParams:{
                   id:'',
                }, 
                ifModify:false,//判断主表是否修改过
                ifShow:true,//控制折叠页面
                ou: [{//所属组织
                    value:0,
                    label: '恒康'
                }, {
                    value:1,
                    label: '恒大'
                }, {
                    value:2,
                    label: '361度'
                }],
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

                //---普通下拉框-----------
                statusAr:[],//状态
                transAr:[],//运输方式
                logiAr:[],//物流公司
                //-----------------------
                stockType: [{//仓库类型
                    value:0,
                    label: '仓库'
                }, {
                    value:1,
                    label: '店铺'
                }],
                
                status: [],

                value: '',
                
                createParams:{//创建新的仓库地址
                    groupId:'1',//集团ID
                    stockId:'',//仓库ID
                    completeAddress:'',//详情地址
                    transportMethodId:'',//运输方式
                    contactPerson:'',//联系人
                    phone:'',//联系电话
                    logisticsCompanyId:'',//物流公司
                    isDefault:false,//是否默认
                    remark:'',//备注
                },
                x:0,//增行的下标
                rows:[],//增行的数组
                updateList:[],//更新上传的数组
                addList:[],//新增上传的数组
                multipleSelection:[],//需要删除的数组
                idArray:{
                    ids:[]
                },//需要删除的数组id
                checkedAr:[],//加载时从表默认选择的数组

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
            }
        },
    }
</script>

<style scoped>
.res-modify{
    background: #EEF1F5;
    height: auto;
    width: 100%;
}
.bg-white{
    background: white;
}
.pl10{
    padding-left: 10px;
}
.pl40{
    padding-left: 40px;
}
.ml15{
    margin-left: 15px;
}
.ml10{
    margin-left: 10px;
}
.mt10{
    margin-top: 10px;
}
.mt20{
    margin-top: 20px;
}
.mb10{
    margin-bottom: 10px;
}
.pt10{
    padding-top: 10px;
}
.pb10{
    padding-bottom: 10px;
}
.pr10{
    padding-right: 10px;
}
.ft12{
    font-size: 14px;
}
.btn{
    display: inline-block;
    width: 100%;
    border-radius: 3px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: white;
    background: rgba(130, 170, 252, 1);
    cursor: pointer;
}
.br3{
    border-radius: 3px;
}
.h30{
    height: 32px;
    line-height: 30px;
}
.h35{
    height: 35px;
    line-height: 35px;
}
.input-need{
    border:none;
    outline: none;
    width: 100%;
    height: 23px;
    line-height: 23px;
}
.input-bgw{
    background: white;
    text-align: center;
}
.input-bgp{
    background: #FAFAFA;
    text-align: center;
}
.header-title{
    color: #333333;
    font-size: 16px;
    display: inline-block;
    border-bottom: 2px solid rgb(51, 204, 204);
    font-weight: bolder;
    padding: 5px 1px;
}
.bb1{
    border-bottom: 1px solid #cccccc;
}
.b1{
    border: 1px solid #cccccc;
}
.fr{
    float: right;
}
.toggle-btn{
    cursor: pointer;
    font-size: 12px;
    float: right;
    margin-right: 20px;
    height: 36px;
    line-height: 36px;
}

</style>
<style>
.res-modify .el-input__inner{
    height:35px !important;
}
.res-modify .bgw .el-input__inner{
    text-align:center;
    border:none;
    background-color:white;
}
.res-modify .bgp .el-input__inner{
    text-align:center;
    border:none;
    background-color:#FAFAFA;
}
</style>



