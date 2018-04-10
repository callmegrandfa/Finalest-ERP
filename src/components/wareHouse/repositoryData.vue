<template>
  <div class="res-detail">
        <el-row class="pt5 pb5 bb1 fixed bg-white">
            <button class="erp_bt bt_back" @click="isBack()">
                <div class="btImg">
                <img src="../../../static/image/common/bt_back.png">
                </div>
                <span class="btDetail">返回</span>
            </button>
                                            <!-- 保存新创建的仓库信息 -->
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

            <button class="erp_bt bt_saveAdd" @click='saveAdd'>
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
        </el-row>

        <el-collapse-transition>
            <div v-show="ifShow">
                <el-row class="bg-white pt10">
                    <el-col :span="24" class="getPadding">
                        <div class="tipsWrapper">
                            <div class="errorTips">
                                <p class="msgDetail">错误提示：
                                    <span :class="{block : !validation.hasError('createRepositoryParams.stock_MainTable.ouId')}">
                                        所属组织{{ validation.firstError('createRepositoryParams.stock_MainTable.ouId') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.stock_MainTable.stockCode')}">
                                        编码{{ validation.firstError('createRepositoryParams.stock_MainTable.stockCode') }},
                                    </span>
                                    
                                    <span :class="{block : !validation.hasError('createRepositoryParams.stock_MainTable.stockName')}">
                                        名称{{ validation.firstError('createRepositoryParams.stock_MainTable.stockName') }},
                                    </span>
                                    
                                    <span :class="{block : !validation.hasError('createRepositoryParams.stock_MainTable.stockFullName')}">
                                        全称{{ validation.firstError('createRepositoryParams.stock_MainTable.stockFullName') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.stock_MainTable.mnemonic')}">
                                        助记码{{ validation.firstError('createRepositoryParams.stock_MainTable.mnemonic') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.stock_MainTable.stockTypeId')}">
                                        仓库类型{{ validation.firstError('createRepositoryParams.stock_MainTable.stockTypeId') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.stock_MainTable.opAreaId')}">
                                        业务地区{{ validation.firstError('createRepositoryParams.stock_MainTable.opAreaId') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.stock_MainTable.adAreaId')}">
                                        行政地区{{ validation.firstError('createRepositoryParams.stock_MainTable.adAreaId') }},
                                    </span>
                                    
                                    <span :class="{block : !validation.hasError('createRepositoryParams.stock_MainTable.manager')}">
                                        负责人{{ validation.firstError('createRepositoryParams.stock_MainTable.manager') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.stock_MainTable.phone')}">
                                        电话{{ validation.firstError('createRepositoryParams.stock_MainTable.phone') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.stock_MainTable.email')}">
                                        Email{{ validation.firstError('createRepositoryParams.stock_MainTable.email') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.stock_MainTable.fax')}">
                                        传真{{ validation.firstError('createRepositoryParams.stock_MainTable.fax') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.stock_MainTable.stockAddress')}">
                                        地址{{ validation.firstError('createRepositoryParams.stock_MainTable.stockAddress') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.stock_MainTable.remark')}">
                                        备注{{ validation.firstError('createRepositoryParams.stock_MainTable.remark') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.stock_MainTable.status')}">
                                        状态{{ validation.firstError('createRepositoryParams.stock_MainTable.status') }},
                                    </span>
                                    <!-- ！！！！！！！！！！！！！！从表   %%%%%%%%%%%%%%%%%%%%%%%%% -->
                                    <!-- <span :class="{block : !validation.hasError('createRepositoryParams.contactPerson')}">
                                        联系人{{ validation.firstError('createRepositoryParams.stockAddress_ChildTable.contactPerson') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.stockAddress_ChildTable.mobile')}">
                                        手机{{ validation.firstError('createRepositoryParams.stockAddress_ChildTable.mobile') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.stockAddress_ChildTable.phone')}">
                                        电话{{ validation.firstError('createRepositoryParams.stockAddress_ChildTable.phone') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.stockAddress_ChildTable.completeAddress')}">
                                        送货地址{{ validation.firstError('createRepositoryParams.stockAddress_ChildTable.completeAddress') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.stockAddress_ChildTable.transportMethodId')}">
                                        运输方式{{ validation.firstError('createRepositoryParams.stockAddress_ChildTable.transportMethodId') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.stockAddress_ChildTable.logisticsCompanyId')}">
                                        物流公司{{ validation.firstError('createRepositoryParams.stockAddress_ChildTable.logisticsCompanyId') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.stockAddress_ChildTable.remark')}">
                                        备注{{ validation.firstError('createRepositoryParams.stockAddress_ChildTable.remark') }},
                                    </span> -->
                                </p>
                            </div>
                        </div>
                        
                        <div class="bgcolor">
                            <label><small>*</small>所属组织</label>
                            <el-select v-model="createRepositoryParams.stock_MainTable.ouId"
                                       :class="{redBorder : validation.hasError('createRepositoryParams.stock_MainTable.ouId')}"
                                       class="ouId"
                                       @focus="showErrprTipsSelect"
                                       @change='Modify'
                                       placeholder="">
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
                                           :label="countOu.ouName" 
                                           :value="countOu.id"
                                           id="ou_confirmSelect"></el-option>
                            </el-select>
                        </div>

                        <div class="bgcolor">
                            <label><small>*</small>编码</label>
                            <el-input placeholder="" 
                                      v-model="createRepositoryParams.stock_MainTable.stockCode"
                                      class="stockCode"
                                      @change='Modify'
                                      @focus="showErrprTips"
                                      :class="{redBorder : validation.hasError('createRepositoryParams.stock_MainTable.stockCode')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label><small>*</small>名称</label>
                            <el-input placeholder="" 
                                      v-model="createRepositoryParams.stock_MainTable.stockName"
                                      class="stockName"
                                      @change='editName'
                                      @focus="showErrprTips"
                                      :class="{redBorder : validation.hasError('createRepositoryParams.stock_MainTable.stockName')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label><small>*</small>全称</label>
                            <el-input placeholder="" 
                                      v-model="createRepositoryParams.stock_MainTable.stockFullName"
                                      class="stockFullName"
                                      @change='editFullName'
                                      @focus="showErrprTips"
                                      :class="{redBorder : validation.hasError('createRepositoryParams.stock_MainTable.stockFullName')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>助记码</label>
                            <el-input placeholder="" 
                                      v-model="createRepositoryParams.stock_MainTable.mnemonic"
                                      class="mnemonic"
                                      @change='Modify'
                                      @focus="showErrprTips"
                                      :class="{redBorder : validation.hasError('createRepositoryParams.stock_MainTable.mnemonic')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label><small>*</small>仓库类型</label>
                            <el-select v-model="createRepositoryParams.stock_MainTable.stockTypeId" 
                                       placeholder=""
                                       @change='Modify'
                                       @focus="showErrprTipsSelect"
                                       :class="{redBorder : validation.hasError('createRepositoryParams.stock_MainTable.stockTypeId')}"
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
                            <el-select v-model="createRepositoryParams.stock_MainTable.opAreaId" 
                                       placeholder=""
                                       @change='Modify'
                                       @focus="showErrprTipsSelect"
                                       :class="{redBorder : validation.hasError('createRepositoryParams.stock_MainTable.opAreaId')}"
                                       class="opAreaId">
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
                                <el-select v-model="proId" class="areaDrop" placeholder="选择省" @change='chooseProvince(proId)'>
                                    <el-option v-for="item in areaProArray" :key="item.id" :label="item.areaName" :value="item.id">
                                    </el-option>
                                </el-select>
                                <el-select  class="areaDrop" placeholder="选择市" v-model="cityId" @change='chooseCity(cityId)'>
                                    <el-option v-for="item in areaCityArray" :key="item.id" :label="item.areaName" :value="item.id">
                                    </el-option>
                                </el-select>
                                <el-select  class="areaDrop" placeholder="选择区" v-model="createRepositoryParams.stock_MainTable.adAreaId" @change='chooseDis()'>
                                    <el-option v-for="item in areaDisArray" :key="item.id" :label="item.areaName" :value="item.id">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>

                        <div class="bgcolor">
                            <label>负责人</label>
                            <el-input placeholder="" 
                                      v-model="createRepositoryParams.stock_MainTable.manager"
                                      class="manager"
                                      @change='Modify'
                                      @focus="showErrprTips"
                                      :class="{redBorder : validation.hasError('createRepositoryParams.stock_MainTable.manager')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>电话</label>
                            <el-input placeholder="" 
                                      v-model="createRepositoryParams.stock_MainTable.phone"
                                      class="phone"
                                      @change='Modify'
                                      @focus="showErrprTips"
                                      :class="{redBorder : validation.hasError('createRepositoryParams.stock_MainTable.phone')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>Email</label>
                            <el-input placeholder="" 
                                      v-model="createRepositoryParams.stock_MainTable.email"
                                      class="email"
                                      @change='Modify'
                                      @focus="showErrprTips"
                                      :class="{redBorder : validation.hasError('createRepositoryParams.stock_MainTable.email')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>传真</label>
                            <el-input v-model="createRepositoryParams.stock_MainTable.fax"
                                      placeholder="" 
                                      @change='Modify'
                                      class="fax"
                                      @focus="showErrprTips"
                                      :class="{redBorder : validation.hasError('createRepositoryParams.stock_MainTable.fax')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>地址</label>
                            <el-input v-model="createRepositoryParams.stock_MainTable.stockAddress"
                                      placeholder="" 
                                      @change='Modify'
                                      class="stockAddress"
                                      @focus="showErrprTips"
                                      :class="{redBorder : validation.hasError('createRepositoryParams.stock_MainTable.stockAddress')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>备注</label>
                            <el-input placeholder="" 
                                      v-model="createRepositoryParams.stock_MainTable.remark"
                                      class="remark"
                                      @change='Modify'
                                      @focus="showErrprTips"
                                      :class="{redBorder : validation.hasError('createRepositoryParams.stock_MainTable.remark')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label><small>*</small>状态</label>
                            <el-select v-model="createRepositoryParams.stock_MainTable.status" 
                                       placeholder=""
                                       @change='Modify'
                                       @focus="showErrprTipsSelect"
                                       :class="{redBorder : validation.hasError('createRepositoryParams.stock_MainTable.status')}"
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
      

      <el-row class="bg-white ft12 pr10 pt10 br3">
          <el-col :span='24' class="pl10 mb10 bb1">
              <span class="header-title">送货信息</span>
          </el-col>

          <el-col :span="24" class="bg-white pt10">
                <button class="erp_bt bt_add" @click="addCol">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_add.png">
                    </div>
                    <span class="btDetail">新增</span>
                </button>

                <button class="erp_bt bt_del" @click='delMore(2)'>
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

                <button class="erp_bt bt_auxiliary bt_width">
                    <div class="btImg"><img src="../../../static/image/common/bt_auxiliary.png"></div>
                    <span class="btDetail">辅助功能</span>
                    <div class="btRightImg"><img src="../../../static/image/common/bt_down_right.png"></div>
                </button>
          </el-col>

          

          <el-col :span='24' class="bg-white pl10 pr10 pt10 pb10">
              <el-table :data="addList" border style="width: 100%" stripe @selection-change="handleSelectionChange">
                    <el-table-column type="selection"></el-table-column>

                    <el-table-column prop="contactPerson" label="联系人" >
                        <template slot-scope="scope">
                            <img class="abimg" src="../../../static/image/content/redremind.png"/>
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.contactPerson" 
                                    type="text"/>
                        </template>
                    </el-table-column>

                    <el-table-column prop="moblie" label="手机" >
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.moblie" 
                                    type="text"/>
                        </template>
                    </el-table-column>

                    
                    <el-table-column prop="phone" label="电话">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.phone" 
                                    type="text"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="completeAddress" label="送货地址">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.completeAddress" 
                                    type="text"/>
                        </template>
                    </el-table-column>

                    <el-table-column prop="transportMethodId" label="运输方式">
                        <template slot-scope="scope">
                            <el-select  v-model="scope.row.transportMethodId" :class="[scope.$index%2==0?'bgw':'bgp']">
                                <el-option  v-for="item in transAr" :key="item.itemValue" :label="item.itemName" :value="item.itemValue" >
                                </el-option>
                            </el-select>
                        </template>
                    </el-table-column>
                    <el-table-column prop="transportMethodId" label="物流公司">
                        <template slot-scope="scope">
                            <el-select  v-model="scope.row.logisticsCompanyId" :class="[scope.$index%2==0?'bgw':'bgp']">
                                <el-option  v-for="item in logiAr" :key="item.itemValue" :label="item.itemName" :value="item.itemValue" >
                                </el-option>
                            </el-select>
                        </template>
                    </el-table-column>
                    <el-table-column prop="isDefault" label="默认">
                        <template slot-scope="scope">
                            <el-radio  :label="true" 
                                        v-model="scope.row.isDefault" 
                                        @change.native="getCurrentRow(scope.$index,scope.row)"></el-radio>
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
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button v-on:click="handleDelete(scope.$index,scope.row,1)" type="text" size="small">删除</el-button>
                        </template>
                    </el-table-column>
              </el-table> 
          </el-col>
      </el-row>

      <el-row class="bg-white">
        <el-col :span="22" class="auditInformation getPadding">
            <h4 class="h4">审计信息</h4>
            <div>
                <div class="bgcolor"><label>创建人</label><el-input v-model="auditInformation.createName" placeholder="" disabled="disabled"></el-input></div>
                <div class="bgcolor"><label>创建时间</label><el-date-picker v-model="auditInformation.createTime" type="date" placeholder="" disabled="disabled"></el-date-picker></div>
                <div class="bgcolor"><label>修改人</label><el-input v-model="auditInformation.modifyName" placeholder="" disabled="disabled"></el-input></div>
                <div class="bgcolor"><label>修改时间</label><el-date-picker v-model="auditInformation.modifyTime" type="date" placeholder="" disabled="disabled"></el-date-picker></div>
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
        name:'repositoryData',
        created:function(){
            let self = this;
            self.loadSelect();
        },
        validators: {
            'createRepositoryParams.stock_MainTable.ouId': function (value) {//所属组织
                return this.Validator.value(value).required().integer();
            },
            'createRepositoryParams.stock_MainTable.stockCode': function (value) {//仓库编码
                return this.Validator.value(value).required().maxLength(50);
            },
            'createRepositoryParams.stock_MainTable.stockName': function (value) {//仓库名称
                return this.Validator.value(value).required().maxLength(50);
            },
            'createRepositoryParams.stock_MainTable.stockFullName': function (value) {//仓库全称
                return this.Validator.value(value).required().maxLength(50);
            },
            'createRepositoryParams.stock_MainTable.mnemonic': function (value) {//助记码
                return this.Validator.value(value).maxLength(50);
            },
            'createRepositoryParams.stock_MainTable.stockTypeId': function (value) {//仓库类型
                return this.Validator.value(value).required().integer();
            },
            'createRepositoryParams.stock_MainTable.opAreaId': function (value) {//业务地区
                return this.Validator.value(value).integer();
            },
            'createRepositoryParams.stock_MainTable.adAreaId': function (value) {//行政地区
                return this.Validator.value(value).integer();
            },
            'createRepositoryParams.stock_MainTable.manager': function (value) {//负责人
                return this.Validator.value(value).maxLength(50);
            },
            'createRepositoryParams.stock_MainTable.phone': function (value) {//电话
                return this.Validator.value(value).maxLength(50);
            },
            'createRepositoryParams.stock_MainTable.email': function (value) {//Email 
                return this.Validator.value(value).maxLength(50);
            },
            'createRepositoryParams.stock_MainTable.fax': function (value) {//传真
                return this.Validator.value(value).maxLength(50);
            },
            'createRepositoryParams.stock_MainTable.stockAddress': function (value) {//地址
                return this.Validator.value(value).maxLength(50);
            },
            'createRepositoryParams.stock_MainTable.remark': function (value) {//备注
                return this.Validator.value(value).maxLength(50);
            },
            'createRepositoryParams.stock_MainTable.status': function (value) {//状态
            // console.log(this.createRepositoryParams.stockAddress_ChildTable)
                return this.Validator.value(value).required().integer();
                
            },

            
            // 'createRepositoryParams.stockAddress_ChildTable': function (value) {//联系人
            //     let self = this;
            //     if(self.addList.length>0){
            //         console.log(self.createRepositoryParams.stockAddress_ChildTable)
            //         console.log('我是你爸爸')
            //         return this.Validator.value(value).maxLength(50);
            //     }else{
            //         console.log('我是你妈妈')
            //         return this.Validator.value(value)
            //     }
            // },
            // 'createRepositoryParams.stockAddress_ChildTable[].mobile': function (value) {//手机
            //     let self = this;
            //     if(self.addList.length>0){
            //         return this.Validator.value(value).maxLength(20);
            //     }else{
            //         return this.Validator.value(value)
            //     }
            // },
            // 'createRepositoryParams.stockAddress_ChildTable.phone': function (value) {//电话
            //     let self = this;
            //     if(self.addList.length>0){
            //         return this.Validator.value(value).maxLength(20);
            //     }else{
            //         return this.Validator.value(value)
            //     }
            // },
            // 'createRepositoryParams.stockAddress_ChildTable.completeAddress': function (value) {//送货地址
            //     let self = this;
            //     if(self.addList.length>0){
            //         console.log('我是你大爷')
            //         return this.Validator.value(value).required().maxLength(200);
            //     }else{
            //         return this.Validator.value(value)
            //     }
            // },
            // 'createRepositoryParams.stockAddress_ChildTable.transportMethodId': function (value) {//运输方式
            //     if(this.addList.length>0){
            //         return this.Validator.value(value).maxLength(200);
            //     }else{
            //         return this.Validator.value(value)
            //     }
            // },
            // 'createRepositoryParams.stockAddress_ChildTable.logisticsCompanyId': function (value) {//物流公司
            //     if(this.addList.length>0){
            //         return this.Validator.value(value).maxLength(200);
            //     }else{
            //         return this.Validator.value(value)
            //     }
            // },
            // 'createRepositoryParams.stockAddress_ChildTable.remark': function (value) {//备注
            //     if(this.addList.length>0){
            //         return this.Validator.value(value).maxLength(200);
            //     }else{
            //         return this.Validator.value(value)
            //     }
            // },
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
        watch:{
            createRepositoryParams:{
                handler:function(){
                    console.log(123)
                },
                deep: true
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
                    console.log(res);
                    self.defaultOuId = res.result.id;
                    self.createRepositoryParams.stock_MainTable.ouId = self.defaultOuId;
                    //加载完成拿回下拉的默认值
                    self.ouItem.ouName = res.result.ouName;
                    self.ouItem.id =  res.result.id;

                    //业务地区
                    self.$axios.gets('/api/services/app/OpAreaManagement/GetTreeByOuId',{OuId:self.defaultOuId}).then(function(res){
                        // console.log(res);
                        if(res.result&&res.result.length>0){
                            self.opAr = res.result;
                            self.loadIcon();
                        }else{
                            self.opItem.areaName = '暂无业务地区';
                        }
                        
                    },function(res){
                        console.log('err'+res)
                    });


                },function(res){
                    console.log('err'+res)
                });
                
                //行政地区
                self.$axios.gets('/api/services/app/AdAreaManagement/GetListByLevelNo',{LevelNo:1}).then(function(res){
                    console.log(res);
                    self.areaProArray = res.result;
                    // self.loadIcon();
                },function(res){
                    console.log('err'+res)
                });

                //状态
                self.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status001'}).then(function(res){
                    console.log(res);
                    self.statusAr = res.result;
                },function(res){
                    console.log('err'+res)
                });
                //运输方式
                self.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'TransportMethod'}).then(function(res){
                    // console.log(res);
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
            
            //---保存------------------------------------------------
            save:function(){
                let self = this;
                self.createRepository();//创建新仓库

            },

            saveAdd:function(){//创建新的仓库并且清除数据
                let self = this;
                self.isAddNew = 1;
                self.createRepository();
                
              
            },
            //-------------------------------------------------------

            //---创建------------------------------------------------
            createRepository:function(){//创建
                let self = this;
                // console.log(self.isAddNew)
                $('.tipsWrapper').css({display:'block'})
                if(self.addList.length>0){
                    self.createRepositoryParams.stockAddress_ChildTable = self.addList;
                    self.$validate().then(function(success){
                        if(success){
                            $('.tipsWrapper').css({display:'none'})
                            let push = false;
                            for(let i in self.createRepositoryParams.stockAddress_ChildTable){
                                if(self.createRepositoryParams.stockAddress_ChildTable[i].completeAddress!=''){
                                    push = true;
                                }else{
                                    self.$message({
                                        type: 'info',
                                        message: '送货地址必填'
                                    });
                                    $('.tipsWrapper').css({display:'none'})
                                }

                            }
                            if(push){
                                self.$axios.posts('/api/services/app/StockManagement/AggregateCreateOrUpdate',self.createRepositoryParams).then(function(res){
                                    console.log(res);
                                    
                                    self.open('创建成功','el-icon-circle-check','successERP');
                                    if(self.isAddNew == 1){
                                        self.loadSelect();
                                        self.initData();
                                    }else{
                                        self.goModify(res.result)
                                    }
                                    
                                },function(res){
                                    console.log(res)
                                    self.errorMessage=true;
                                    self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                                })
                            }
                        }
                    })
                }else{
                    self.$validate().then(function(success){
                        if(success){
                            $('.tipsWrapper').css({display:'none'})
                            self.$axios.posts('/api/services/app/StockManagement/AggregateCreateOrUpdate',self.createRepositoryParams).then(function(res){
                                // console.log(res);
                                
                                self.open('创建成功','el-icon-circle-check','successERP');
                                if(self.isAddNew == 1){
                                    self.loadSelect();
                                    self.initData();
                                }else{
                                    self.goModify(res.result)
                                }
                            },function(res){
                                console.log(res)
                                self.errorMessage=true;
                                self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                            })
                        }
                    })
                }
            },
            //-------------------------------------------------------
          
            //---表格编辑--------------------------------------------
            addCol:function(){//增行
                let self = this;
                self.ifModify = true;
                self.x++;
                let newCol = 'newCol'+self.x;
                self.rows.newCol ={
                    id: 0,
                    completeAddress: "",
                    stockId: 0,
                    addressId: 0,
                    transportMethodId: '',
                    contactPerson: "",
                    phone: "",
                    moblie: "",
                    logisticsCompanyId: '',
                    isDefault: false,
                    remark: ''
                };
                // self.allList.unshift(self.rows.newCol);
                self.createRepositoryParams.stockAddress_ChildTable.unshift(self.rows.newCol)
                self.addList.unshift(self.rows.newCol);
                // console.log(self.rows)
            },

            //---默认-------------------------------------
            getCurrentRow:function(index,row){//默认单选框
                let self = this;
                for(let i in self.addList){
                    self.addList[i].isDefault = false;
                }
                self.addList[index].isDefault = true;
                // self.updateList.push(self.checkedAr)
            },
            //-------------------------------------------

            //---点击复选框选中的数据------------------------------
            handleSelectionChange:function(val){
                this.multipleSelection = val;
            },
            //---------------------------------------------------
            //---从表表格内删除------------------------------------
            handleDelete:function(index,row,who){//表格内删除操作
                let self = this; 
                self.who = who;
                self.whoIndex = index;
                self.dialogDelConfirm = true;
                
            },
            //---------------------------------------------------

            //---批量删除----------------------------------------

            delMore:function(num){//删除选中的项
                let self=this;
                if(self.multipleSelection.length>0){
                    self.who = num;
                    self.dialogDelConfirm = true; 
                }else{
                    self.$message({
                        type: 'info',
                        message: '请勾选需要删除的数据！'
                    });
                }
            },
            //----------------------------------------------------

            //---确认删除--------------------------------------------
            sureDel:function(){
                let self = this;
                if(self.who == 1){
                    self.addList.splice(self.whoIndex,1)
                    self.dialogDelConfirm = false;
                    self.open('删除成功','el-icon-circle-check','successERP');
                }

                if(self.who == 2){
                    let x = [];
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
            //-------------------------------------------------------

            //----------------------------------------------------

            //---弹出提示-----------------------------------------
            isBack(num){
                let self=this;
                if(self.ifModify){
                    self.dialogUserConfirm=true;
                }else{
                    self.back()
                }
                
            },
            
            Modify:function(){//判断是否修改过
                let self = this;
                self.ifModify = true;
            },
            //-------------------------------------------------------

            //---确认提示------------------------------------------
            sureDoing:function(){
                let self = this;
                self.back();
            },
            //----------------------------------------------------

            //---open---back----清除--------------------------------------
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
            goModify:function(id){
                // console.log(id)
                this.$store.state.url='/repository/repositoryModify/'+id
                // this.$store.state.url='/repository/default/repositoryModify/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
            back(){
                this.$store.state.url='/repository/repositoryList/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
            //-------------------------------------------------------

            //---选择省市区-----------------------------------------------
            chooseProvince:function(id){
                let self = this;
                // console.log(id)
                self.$axios.gets('/api/services/app/AdAreaManagement/GetListByAdAreaId',{ParentId:id}).then(function(res){
                    // console.log(res);
                    self.areaCityArray = res.result;
                    // self.loadIcon();
                },function(res){
                    console.log('err'+res)
                });

            },
            chooseCity:function(id){
                let self = this;
                self.$axios.gets('/api/services/app/AdAreaManagement/GetListByAdAreaId',{ParentId:id}).then(function(res){
                    // console.log(res);
                    self.areaDisArray = res.result;
                    // self.loadIcon();
                },function(res){
                    console.log('err'+res)
                })
            },
            chooseDis:function(){
                let self = this;
                console.log(self.createRepositoryParams.stock_MainTable.adAreaId)
            },
            //-----------------------------------------------------------
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
            opFilterNode(value, data) {
                console.log(value)
                if (!value) return true;
                    return data.areaName.indexOf(value) !== -1;
            },
            ouNodeClick:function(data){
                console.log(data)
                let self = this;
                self.createRepositoryParams.opAreaId = '';
                self.opItem.areaName = '';

                self.ouItem.id = data.id;
                self.ouItem.ouName = data.ouName;
                console.log(self.ouItem.ouName)
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
                // console.log(self.createRepositoryParams.stockName)
                if(!self.nameWithFull&&self.createRepositoryParams.stockFullName == ''){
                    self.createRepositoryParams.stockFullName = self.createRepositoryParams.stockName;
                }
            },
            editFullName:function(){
                let self = this;
                self.Modify();
                self.nameWithFull = true;
            },
            //------------------------------------------------------------

            //---数据初始化-----------------------------------------------
            initData:function(){
                let self = this;
                self.allList = [];
                self.ifModify = false;
                self.isAddNew = '';
                self.x = 0,//增行的下标
                self.rows = [],//增行的数组
                self.addList = [],//新增上传的数组
                self.createRepositoryParams={
                    stock_MainTable: {
                        ouId: '',
                        stockCode: "",
                        stockName: "",
                        stockFullName: "",
                        stockTypeId: 0,
                        status: 1,
                        opAreaId: '',
                        adAreaId: '',
                        mnemonic: "",
                        stockAddress: "",
                        fax: "",
                        email: "",
                        manager: "",
                        phone: "",
                        remark: ""
                    },
                    stockAddress_ChildTable: []
                };
                self.validation.reset();
            },
            //-----------------------------------------------------------

        },

        data(){
            return {
                defaultOuId:'',//默认的ouid
                isAddNew:'',//判断点击的是保存还是保存新增
                allList:[],
                auditInformation:{//审计信息
                    createName:"",
                    createTime:"",
                    modifyName:"",
                    modifyTime:"",
                    startTime:"",
                    finishTime:"",
                    finishName:"",
                },
                ifShow:true,//控制折叠页面
                ifCan:true,//控制启用状态
                ifModify:false,
                //---所属组织树形下拉-----
                ouSearch:'',
                selectOuProps:{
                    children: 'children',
                    label: 'ouName',
                    id:'id'
                },
                ouItem:{
                    id:'',
                    ouName:'',
                },
                ouAr:[],//所属组织下拉框
                //-----------------------
                //---行政地区树形下拉-----
                areaProArray:[],//行政地区(省)
                areaCityArray:[],//行政地区(市)
                areaDisArray:[],//行政地区(区)
                proId:'',//省id
                cityId:'',//市id
                // adSearch:'',//树形搜索框的
                // selectAdProps:{
                //     children: 'items',
                //     label: 'areaName',
                //     id:'id'
                // },
                // adItem:{
                //     id:'',
                //     areaName:'',
                // },
                // adAr:[],//行政地区下拉框
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

                //---普通下拉框-----------
                statusAr:[],
                transAr:[],
                logiAr:[],//物流方式
                //-----------------------
                
                stockType: [{//仓库类型
                    value:0,
                    label: '仓库'
                }, {
                    value:1,
                    label: '店铺'
                }],

                value: '',
                
                createRepositoryParams:{
                    stock_MainTable: {
                        ouId: '',
                        stockCode: "",
                        stockName: "",
                        stockFullName: "",
                        stockTypeId: 0,
                        status: 1,
                        opAreaId: '',
                        adAreaId: '',
                        mnemonic: "",
                        stockAddress: "",
                        fax: "",
                        email: "",
                        manager: "",
                        phone: "",
                        remark: ""
                    },
                    stockAddress_ChildTable: []
                },
                // createRepositoryAddressParams:{//创建新的仓库地址参数
                //     groupId:'1',//集团ID
                //     stockId:'',//仓库ID
                //     completeAddress:'',//详情地址
                //     transportMethodId:'',//运输方式
                //     contactPerson:'',//联系人
                //     phone:'',//联系电话
                //     logisticsCompanyId:'',//物流公司
                //     isDefault:false,//是否默认
                //     remark:'',//备注
                // },
                x:0,//增行的下标
                rows:[],//增行的数组
                addList:[],//新增上传的数组
                multipleSelection:[],//多选的数组

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
                //-----------------------------
                nameWithFull:false,
            }
        },
    }
</script>

<style scoped>
.res-detail{
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
.pt5{
    padding-top: 5px;
}
.pb5{
    padding-bottom: 5px;
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
    font-size: 12px;
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
    font-size: 16px;
    display: inline-block;
    border-bottom: 2px solid #00CAC9;
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
input:-ms-input-placeholder{
    color: rgba(0, 0, 0, 0.349019607843137);
}

input::-webkit-input-placeholder{
    color: rgba(0, 0, 0, 0.349019607843137);
}
</style>
<style>
.res-detail .tabZoo .auditInformation{
     margin-top: 15px;
 }
.res-detail .getPadding,.tabZoo .el-tabs__nav-scroll{
     padding: 0 10px;
 }
.res-detail .bgw .el-input__inner{
    text-align:center;
    border:none;
    background-color:white;
}
.res-detail .bgp .el-input__inner{
    text-align:center;
    border:none;
    background-color:#FAFAFA;
}
.res-detail  .errorTips{
    margin-bottom: 10px;
} 
.res-detail .area{
    width:510px;
    margin-right:0px;
}
.res-detail .el-select.areaDrop,.el-input.areaEntry{
    width: 136px;
}
.areaDrop input,.areaEntry input{
    border: none!important;
}
.areaDrop .el-input__inner,.areaEntry .el-input__inner{
    height: 32px!important;
}
</style>


