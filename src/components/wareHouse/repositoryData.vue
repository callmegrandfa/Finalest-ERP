<template>
  <div class="res-detail">
        <el-row class="pt5 pb5 bb1 fixed bg-white">
            <button class="erp_bt bt_back" @click="back">
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

            <button class="erp_bt bt_saveAdd" @click='saveAdd'>
                <div class="btImg">
                    <img src="../../../static/image/common/bt_saveAdd.png">
                </div>
                <span class="btDetail">保存并新增</span>
            </button>
            
            <div class="toggle-btn">
                <span @click='ifShow = !ifShow'>收起</span>
                <i class="el-icon-arrow-up"></i>
            </div>
        </el-row>

        <el-collapse-transition>
            <div v-show="ifShow" class="bb1">
                 <!-- ft12 pr10  -->
                <el-row class="bg-white pt10">
                    <el-col :span="24" class="getPadding">
                        <div class="tipsWrapper mb10">
                            <div class="errorTips">
                                <p class="msgDetail">错误提示：
                                    <span :class="{block : !validation.hasError('createRepositoryParams.ouId')}">
                                        所属组织{{ validation.firstError('createRepositoryParams.ouId') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.stockCode')}">
                                        编码{{ validation.firstError('createRepositoryParams.stockCode') }},
                                    </span>
                                    
                                    <span :class="{block : !validation.hasError('createRepositoryParams.stockName')}">
                                        名称{{ validation.firstError('createRepositoryParams.stockName') }},
                                    </span>
                                    
                                    <span :class="{block : !validation.hasError('createRepositoryParams.stockFullName')}">
                                        全称{{ validation.firstError('createRepositoryParams.stockFullName') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.mnemonic')}">
                                        助记码{{ validation.firstError('createRepositoryParams.mnemonic') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.stockTypeId')}">
                                        仓库类型{{ validation.firstError('createRepositoryParams.stockTypeId') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.opAreaId')}">
                                        业务地区{{ validation.firstError('createRepositoryParams.opAreaId') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.adAreaId')}">
                                        行政地区{{ validation.firstError('createRepositoryParams.adAreaId') }},
                                    </span>
                                    
                                    <span :class="{block : !validation.hasError('createRepositoryParams.manager')}">
                                        负责人{{ validation.firstError('createRepositoryParams.manager') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.phone')}">
                                        电话{{ validation.firstError('createRepositoryParams.phone') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.email')}">
                                        Email{{ validation.firstError('createRepositoryParams.email') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.fax')}">
                                        传真{{ validation.firstError('createRepositoryParams.fax') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.stockAddress')}">
                                        地址{{ validation.firstError('createRepositoryParams.stockAddress') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.remark')}">
                                        备注{{ validation.firstError('createRepositoryParams.remark') }},
                                    </span>

                                    <span :class="{block : !validation.hasError('createRepositoryParams.status')}">
                                        状态{{ validation.firstError('createRepositoryParams.status') }},
                                    </span>
                                </p>
                            </div>
                        </div>
                        <!-- <div class="tipsWrapper" name="ouId">
                            <div class="errorTips" :class="{block : !validation.hasError('createRepositoryParams.ouId')}">
                                <p class="msgDetail">错误提示：{{ validation.firstError('createRepositoryParams.ouId') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="stockCode">
                            <div class="errorTips" :class="{block : !validation.hasError('createRepositoryParams.stockCode')}">
                                <p class="msgDetail">错误提示：{{ validation.firstError('createRepositoryParams.stockCode') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="stockName">
                            <div class="errorTips" :class="{block : !validation.hasError('createRepositoryParams.stockName')}">
                                <p class="msgDetail">错误提示：{{ validation.firstError('createRepositoryParams.stockName') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="stockFullName">
                            <div class="errorTips" :class="{block : !validation.hasError('createRepositoryParams.stockFullName')}">
                                <p class="msgDetail">错误提示：{{ validation.firstError('createRepositoryParams.stockFullName') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="mnemonic">
                            <div class="errorTips" :class="{block : !validation.hasError('createRepositoryParams.mnemonic')}">
                                <p class="msgDetail">错误提示：{{ validation.firstError('createRepositoryParams.mnemonic') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="stockTypeId">
                            <div class="errorTips" :class="{block : !validation.hasError('createRepositoryParams.stockTypeId')}">
                                <p class="msgDetail">错误提示：{{ validation.firstError('createRepositoryParams.stockTypeId') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="opAreaId">
                            <div class="errorTips" :class="{block : !validation.hasError('createRepositoryParams.opAreaId')}">
                                <p class="msgDetail">错误提示：{{ validation.firstError('createRepositoryParams.opAreaId') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="adAreaId">
                            <div class="errorTips" :class="{block : !validation.hasError('createRepositoryParams.adAreaId')}">
                                <p class="msgDetail">错误提示：{{ validation.firstError('createRepositoryParams.adAreaId') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="manager">
                            <div class="errorTips" :class="{block : !validation.hasError('createRepositoryParams.manager')}">
                                <p class="msgDetail">错误提示：{{ validation.firstError('createRepositoryParams.manager') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="phone">
                            <div class="errorTips" :class="{block : !validation.hasError('createRepositoryParams.phone')}">
                                <p class="msgDetail">错误提示：{{ validation.firstError('createRepositoryParams.phone') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="email">
                            <div class="errorTips" :class="{block : !validation.hasError('createRepositoryParams.email')}">
                                <p class="msgDetail">错误提示：{{ validation.firstError('createRepositoryParams.email') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="fax">
                            <div class="errorTips" :class="{block : !validation.hasError('createRepositoryParams.fax')}">
                                <p class="msgDetail">错误提示：{{ validation.firstError('createRepositoryParams.fax') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="remark">
                            <div class="errorTips" :class="{block : !validation.hasError('createRepositoryParams.remark')}">
                                <p class="msgDetail">错误提示：{{ validation.firstError('createRepositoryParams.remark') }}</p>
                            </div>
                        </div>
                        <div class="tipsWrapper" name="status">
                            <div class="errorTips" :class="{block : !validation.hasError('createRepositoryParams.status')}">
                                <p class="msgDetail">错误提示：{{ validation.firstError('createRepositoryParams.status') }}</p>
                            </div>
                        </div> -->
                        <div class="bgcolor">
                            <label><small>*</small>所属组织</label>
                            <el-select v-model="createRepositoryParams.ouId"
                                       :class="{redBorder : validation.hasError('createRepositoryParams.ouId')}"
                                       class="ouId"
                                       @focus="showErrprTipsSelect"
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
                                           :label="countOu.ouFullname" 
                                           :value="countOu.id"
                                           id="ou_confirmSelect"></el-option>
                            </el-select>
                        </div>

                        <div class="bgcolor">
                            <label><small>*</small>编码</label>
                            <el-input placeholder="" 
                                      v-model="createRepositoryParams.stockCode"
                                      class="stockCode"
                                      @focus="showErrprTips"
                                      :class="{redBorder : validation.hasError('createRepositoryParams.stockCode')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label><small>*</small>名称</label>
                            <el-input placeholder="" 
                                      v-model="createRepositoryParams.stockName"
                                      class="stockName"
                                      @focus="showErrprTips"
                                      :class="{redBorder : validation.hasError('createRepositoryParams.stockName')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label><small>*</small>全称</label>
                            <el-input placeholder="" 
                                      v-model="createRepositoryParams.stockFullName"
                                      class="stockFullName"
                                      @focus="showErrprTips"
                                      :class="{redBorder : validation.hasError('createRepositoryParams.stockFullName')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>助记码</label>
                            <el-input placeholder="" 
                                      v-model="createRepositoryParams.mnemonic"
                                      class="mnemonic"
                                      @focus="showErrprTips"
                                      :class="{redBorder : validation.hasError('createRepositoryParams.mnemonic')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label><small>*</small>仓库类型</label>
                            <el-select v-model="createRepositoryParams.stockTypeId" 
                                       placeholder=""
                                       @focus="showErrprTipsSelect"
                                       :class="{redBorder : validation.hasError('createRepositoryParams.stockTypeId')}"
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
                            <el-select v-model="createRepositoryParams.opAreaId" 
                                       placeholder=""
                                       @focus="showErrprTipsSelect"
                                       :class="{redBorder : validation.hasError('createRepositoryParams.opAreaId')}"
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

                        <div class="bgcolor">
                            <label>行政地区</label>
                            <el-select v-model="createRepositoryParams.adAreaId" 
                                       placeholder=""
                                       @focus="showErrprTipsSelect"
                                       :class="{redBorder : validation.hasError('createRepositoryParams.adAreaId')}"
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
                                      v-model="createRepositoryParams.manager"
                                      class="manager"
                                      @focus="showErrprTips"
                                      :class="{redBorder : validation.hasError('createRepositoryParams.manager')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>电话</label>
                            <el-input placeholder="" 
                                      v-model="createRepositoryParams.phone"
                                      class="phone"
                                      @focus="showErrprTips"
                                      :class="{redBorder : validation.hasError('createRepositoryParams.phone')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>Email</label>
                            <el-input placeholder="" 
                                      v-model="createRepositoryParams.email"
                                      class="email"
                                      @focus="showErrprTips"
                                      :class="{redBorder : validation.hasError('createRepositoryParams.email')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>传真</label>
                            <el-input v-model="createRepositoryParams.fax"
                                      placeholder="" 
                                      class="fax"
                                      @focus="showErrprTips"
                                      :class="{redBorder : validation.hasError('createRepositoryParams.fax')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>地址</label>
                            <el-input v-model="createRepositoryParams.stockAddress"
                                      placeholder="" 
                                      class="stockAddress"
                                      @focus="showErrprTips"
                                      :class="{redBorder : validation.hasError('createRepositoryParams.stockAddress')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label>备注</label>
                            <el-input placeholder="" 
                                      v-model="createRepositoryParams.remark"
                                      class="remark"
                                      @focus="showErrprTips"
                                      :class="{redBorder : validation.hasError('createRepositoryParams.remark')}"></el-input>
                        </div>

                        <div class="bgcolor">
                            <label><small>*</small>状态</label>
                            <el-select v-model="createRepositoryParams.status" 
                                       placeholder=""
                                       @focus="showErrprTipsSelect"
                                       :class="{redBorder : validation.hasError('createRepositoryParams.status')}"
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
                <button class="erp_bt bt_print" @click='addCol'>
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_print.png">
                     </div>
                    <span class="btDetail">增行</span>
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
                <!-- <button class="erp_bt bt_del" @click='delRow'>
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_del.png">
                    </div>
                    <span class="btDetail">删除</span>
                </button> -->
          </el-col>

          

          <el-col :span='24' class="bg-white pl10 pr10 pt10 pb10">
              <el-table :data="allList" border style="width: 100%" stripe @selection-change="handleSelectionChange">
                    <el-table-column type="selection"></el-table-column>

                    <el-table-column prop="contactPerson" label="联系人" >
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.contactPerson" 
                                    v-on:click='handleEdit(scope.$index)'
                                    type="text"/>
                        </template>
                    </el-table-column>

                    <el-table-column prop="moblie" label="手机" >
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.moblie" 
                                    v-on:click='handleEdit(scope.$index)'
                                    type="text"/>
                        </template>
                    </el-table-column>

                    
                    <el-table-column prop="phone" label="电话">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.phone" 
                                    v-on:click='handleEdit(scope.$index)'
                                    type="text"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="completeAddress" label="送货地址">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.completeAddress" 
                                    v-on:click='handleEdit(scope.$index)'
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
                            <el-select  v-model="scope.row.logisticsCompanyId" :disabled="isEdit" :class="[scope.$index%2==0?'bgw':'bgp']">
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
                                        :disabled="isEdit"></el-radio>
                        </template>
                    </el-table-column>
                    <el-table-column prop="remark" label="备注">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.remark" 
                                    v-on:click='handleEdit(scope.$index)'
                                    type="text"/>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <!-- <span>{{scope.row}}</span> -->
                            <!-- <el-button v-on:click='a(scope.row)'>123</el-button> -->
                            <!-- <el-button v-on:click="handleEdit(scope.$index)" type="text"  size="small">修改</el-button> -->
                            <!-- <el-button v-on:click="handleSave(scope.$index,scope.row)" type="text" size="small">保存</el-button>  -->
                            <el-button v-on:click="handleDelete(scope.$index,scope.row.id)" type="text" size="small">删除</el-button>
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
                <div class="bgcolor"><label>修改时间</label><el-date-picker v-model="auditInformation.modifyTime" type="date" placeholder="" disabled="disabled"></el-date-picker></el-input></div>
                <!-- <div class="bgcolor"><label>启用日期</label><el-date-picker v-model="auditInformation.startTime" type="date" placeholder="选择启用日期"></el-date-picker></div>
                <div class="bgcolor"><label>封存日期</label><el-date-picker v-model="auditInformation.finishTime" type="date" placeholder="选择封存日期"></el-date-picker></div>
                <div class="bgcolor"><label>封存人</label><el-input v-model="auditInformation.finishName" placeholder="请录入封存人"></el-input></div>     -->
            </div>                                  
        </el-col>
    </el-row>  


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
            'createRepositoryParams.ouId': function (value) {//所属组织
                return this.Validator.value(value).required().integer();
            },
            'createRepositoryParams.stockCode': function (value) {//仓库编码
                return this.Validator.value(value).required().maxLength(50);
            },
            'createRepositoryParams.stockName': function (value) {//仓库名称
                return this.Validator.value(value).required().maxLength(50);
            },
            'createRepositoryParams.stockFullName': function (value) {//仓库全称
                return this.Validator.value(value).required().maxLength(50);
            },
            'createRepositoryParams.mnemonic': function (value) {//助记码
                return this.Validator.value(value).maxLength(50);
            },
            'createRepositoryParams.stockTypeId': function (value) {//仓库类型
                return this.Validator.value(value).required().integer();
            },
            'createRepositoryParams.opAreaId': function (value) {//业务地区
                return this.Validator.value(value).integer();
            },
            'createRepositoryParams.adAreaId': function (value) {//行政地区
                return this.Validator.value(value).integer();
            },
            'createRepositoryParams.manager': function (value) {//负责人
                return this.Validator.value(value).maxLength(50);
            },
            'createRepositoryParams.phone': function (value) {//电话
                return this.Validator.value(value).maxLength(50);
            },
            'createRepositoryParams.email': function (value) {//Email 
                return this.Validator.value(value).maxLength(50);
            },
            'createRepositoryParams.fax': function (value) {//传真
                return this.Validator.value(value).maxLength(50);
            },
            'createRepositoryParams.stockAddress': function (value) {//地址
                return this.Validator.value(value).maxLength(50);
            },
            'createRepositoryParams.remark': function (value) {//备注
                return this.Validator.value(value).maxLength(50);
            },
            'createRepositoryParams.status': function (value) {//状态
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
        methods:{
            //---加载数据----------------------------------------------
            loadStatus:function(){
                let self = this;
                this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status001'}).then(function(res){
                    self.status = res.result;
                    console.log(self.status);
                },function(res){
                    console.log('err'+res)
                })
            },
            //--------------------------------------------------------
            //---下拉的数据------------------------------------------------------
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
                self.$validate().then(function(success){
                    if(success){
                        self.$axios.posts('/api/services/app/StockManagement/CreateRepository',self.createRepositoryParams).then(function(res){
                            console.log(res);
                            self.open('创建仓库成功','el-icon-circle-check','successERP');
                        })
                        self.createRepositoryParams = {
                            "ouId": '1',
                            "stockCode": "",
                            "stockName": "",
                            "stockFullName": "",
                            "opAreaId": '',
                            "adAreaId": '',
                            "stockTypeId": '',
                            "invTypeId": 1,
                            "fax": "",
                            "email":  '',
                            "status": '',
                            "manager": "",
                            "mnemonic": "",
                            "stockAddress": "",
                            "phone": "",
                            "remark": ""
                        } 
                        self.addList = [];
                        self.rows = [];
                    }
                })
                
              
            },
            //-------------------------------------------------------

            //---创建------------------------------------------------
            createRepository:function(){//创建新仓库
                let self = this;
                $('.tipsWrapper').css({display:'block'})
                self.$validate().then(function(success){
                    if(success){
                        self.$axios.posts('/api/services/app/StockManagement/CreateRepository',self.createRepositoryParams).then(function(res){
                            console.log(res);
                            self.open('创建仓库成功','el-icon-circle-check','successERP');
                            self.createReAddress(res.result);
                            self.goModify(res.result)
                        })
                    }
                })
            },
            createReAddress:function(id){//创建新的仓库地址
                let self = this;
                console.log(id)
                if(self.addList.length>0){
                    for(let i in self.addList){
                        self.addList[i].stockId = id;
                    }
                    // for(let i in self.addList){
                    //     self.addList[i].stockId = id;
                    //     console.log(self.addList)
                    //     this.$axios.posts('api/services/app/StockAddressManagement/Create',self.addList[i]).then(function(res){
                    //         // console.log(res);
                    //         self.open('创建仓库地址成功','el-icon-circle-check','successERP');
                    //     })
                    // }

                    this.$axios.posts('/api/services/app/StockAddressManagement/CUDAggregate',{createList:self.addList,updateList:[],deleteList:[]}).then(function(res){//创建
                        console.log(res);
                        self.open('创建仓库地址成功','el-icon-circle-check','successERP');
                        self.addList = [];
                        // self.loadData();
                        // self.clearData();
                    })
                }
                
            },
            //-------------------------------------------------------
          
            //---表格编辑--------------------------------------------
            addCol:function(){//增行
                let self = this;
                self.x++;
                let newCol = 'newCol'+self.x;
                self.rows.newCol ={
                    groupId:'1',//集团ID
                    stockId:'',//仓库ID
                    completeAddress:'',//详情地址
                    transportMethodId:'',//运输方式
                    contactPerson:'',//联系人
                    moblie:'',
                    phone:'',//联系电话
                    logisticsCompanyId:'',//物流公司
                    isDefault:false,//是否默认
                    remark:'',//备注
                };
                self.allList.unshift(self.rows.newCol);
                self.addList.unshift(self.rows.newCol);
                // console.log(self.rows)
            },

            handleEdit:function(index){//表格内编辑操作

            },

            getCurrentRow:function(index,row){//默认单选框
                let self = this;
                for(let i in self.addList){
                    self.addList[i].isDefault = false;
                }
                self.addList[index].isDefault = true;
                // self.updateList.push(self.checkedAr)
            },

            handleSelectionChange:function(val){//点击复选框选中的数据
                this.multipleSelection = val;
                console.log(this.multipleSelection)
            },

            handleDelete:function(index,id){//表格内删除操作
                let self = this; 
                self.$confirm('确定删除?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning',
                        center: true
                        }).then(() => {
                            self.open('删除成功','el-icon-circle-check','successERP');    
                            self.allList.splice(index,1);
                            self.addList.splice(index,1);
                        }).catch(() => {
                            self.$message({
                                type: 'info',
                                message: '已取消删除'
                            });
                    });
                
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
            clearData:function(){//清除创建的参数
                let self = this;
                self.createParams={
                    groupId:'1',//集团ID
                    stockId:'16',//仓库ID
                    completeAddress:'',//详情地址
                    transportMethodId:'',//运输方式
                    contactPerson:'',//联系人
                    phone:'',//联系电话
                    logisticsCompanyId:'',//物流公司
                    isDefault:false,//是否默认
                    remark:'',//备注
                };
            },
            //-------------------------------------------------------
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
            //-------------------------------------------------------------
            


        },

        data(){
            return {
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
                // ifSave:-1,//保存按钮（是否可见）
                queryOuId:{//ouManagement的搜索Id
                    id:'2'
                },
                ouGet:'',
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
                tableData:[],
                
                createRepositoryParams:{//创建新仓库的参数
                    "ouId": '',
                    "stockCode": "",
                    "stockName": "",
                    "stockFullName": "",
                    "opAreaId": '',
                    "adAreaId": '1',
                    "stockTypeId": '',
                    "fax": "",
                    "email":  '',
                    "status": '',
                    "mnemonic": "",
                    "stockAddress": "",
                    "manager": "",
                    "phone": "",
                    "remark": ""
                },
                createRepositoryAddressParams:{//创建新的仓库地址参数
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
                addList:[],//新增上传的数组
                multipleSelection:[],//多选的数组
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
</style>


