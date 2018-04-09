<template>
    <div class="customerClassModify">
        <el-row class="fixed">
            <el-col :span="24">
                <button @click="isBack" class="erp_bt bt_back">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_back.png">
                    </div>
                    <span class="btDetail">返回</span>
                </button>
                
              <button @click="save" class="erp_bt bt_save" :disabled="!ifModify" :class="{erp_fb_bt : !ifModify}">
                    <div class="btImg">
                      <img src="../../../static/image/common/bt_save.png">
                    </div>
                    <span class="btDetail">保存</span>
                  </button>
              <button class="erp_bt bt_cancel" @click="Cancel(2)" :class="{erp_fb_bt:!ifModify}">
                  <div class="btImg"><img src="../../../static/image/common/bt_cancel.png">
                  </div>
                  <span class="btDetail">取消</span>
              </button>
              <button @click="saveAdd"class="erp_bt bt_saveAdd":disabled="!ifModify" :class="{erp_fb_bt : !ifModify}">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_saveAdd.png">
                </div>
                <span class="btDetail">保存并新增</span>
              </button>
                  <button class="erp_bt bt_add" @click="goDetail" :disabled="ifModify" :class="{erp_fb_bt : ifModify}">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_add.png">
                    </div>
                    <span class="btDetail">新增</span>
                </button>

                <button class="erp_bt bt_del" @click="delModify" :disabled="ifModify" :class="{erp_fb_bt : ifModify}">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_del.png">
                    </div>
                    <span class="btDetail">删除</span>
                </button>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="24" style="margin-top:30px;">
               <div class="marginAuto">
                    <div class="bgcolor longWidth">
                        <label><small>*</small>上级客户分类</label>
                        <el-select class="classParentId" 
                                   clearable filterable
                                   :class="{redBorder : validation.hasError('customerClassData.classParentId')}" 
                                   placeholder=""            
                                   @change='Modify()'
                                   v-model="customerClassData.classParentId_ClassName">
                            <el-input placeholder="搜索..."
                                      class="selectSearch"
                                      v-model="parentSearch"></el-input>

                            <el-tree oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                                     :data="selectParentTree"
                                     :props="selectParentProps"
                                     node-key="id"
                                     default-expand-all
                                     ref="tree"
                                     :filter-node-method="filterNode"
                                     :expand-on-click-node="false"
                                     @node-click="nodeClick"></el-tree>
                            <el-option v-show="false"
                                       :key="count.id" 
                                       :label="count.className" 
                                       :value="count.id"
                                       id="businessDetail_confirmSelect">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="error_tips">{{ validation.firstError('customerClassData.classParentId') }}</div>
                </div>
            </el-col>

            <el-col :span="24">
                <div class="marginAuto">
                    <div class="bgcolor longWidth">
                        <label><small>*</small>客户分类编码</label>
                        <el-input class="classCode" 
                                  placeholder=""
                                  @change='Modify()'
                                  :class="{redBorder : validation.hasError('customerClassData.classCode')}" 
                                  v-model="customerClassData.classCode"></el-input>
                    </div>
                    <div class="error_tips">{{ validation.firstError('customerClassData.classCode') }}</div>
                </div>    
            </el-col>

            <el-col :span="24">
                <div class="marginAuto">
                    <div class="bgcolor longWidth">
                        <label><small>*</small>客户分类名称</label>
                        <el-input  class="className"
                                   :class="{redBorder : validation.hasError('customerClassData.className')}" 
                                   v-model="customerClassData.className"
                                   placeholder=""
                                   @change='Modify()'></el-input>
                    </div>
                    <div class="error_tips">{{ validation.firstError('customerClassData.className') }}</div>
                </div>    
            </el-col>
     
            
            <el-col :span="24">
                <div class="marginAuto">
                    <div class="bgcolor longWidth">
                        <label>备注</label>
                        <el-input class="remark"
                                  :class="{redBorder : validation.hasError('customerClassData.remark')}" 
                                  v-model="customerClassData.remark"
                                  type="textarea"
                                  :autosize="{ minRows: 4, maxRows: 4}"
                                  @change='Modify()'></el-input>
                    </div>
                    <div class="error_tips">{{ validation.firstError('customerClassData.remark') }}</div>
                </div>       
            </el-col>
            
            <el-col :span="24">
                <div class="marginAuto">
                    <div class="bgcolor longWidth">
                        <label><small>*</small>状态</label>
                        <el-select  class="status"
                                     clearable filterable
                                    :class="{redBorder : validation.hasError('customerClassData.status')}" 
                                    placeholder=""
                                    v-model="customerClassData.status">
                            <el-option v-for="item in status" 
                                       :key="item.itemValue" 
                                       :label="item.itemName" 
                                       :value="item.itemValue"></el-option>
                        </el-select>
                    </div>
                    <div class="error_tips">{{ validation.firstError('customerClassData.status') }}</div>
                </div>    
            </el-col>
            <!-- <el-col :span="24">
                <div class="marginAuto">
                    <div class="bgcolor longWidth">
                        <label>创建人</label>
                       <el-input class="createdBy" 
                                  :disabled="isEdit" 
                                  :class="{redBorder : validation.hasError('customerClassData.createdTime')}" 
                                  v-model="customerClassData.createdBy"
                                  :autosize="{ minRows: 4, maxRows: 4}"
                                   @change='Modify()'></el-input>
                        </el-input>
                    </div>
                   
                </div>    
            </el-col>
             <el-col :span="24">
                <div class="marginAuto">
                    <div class="bgcolor longWidth">
                        <label>创建时间</label>
                        <el-date-picker
                                  v-model="customerClassData.createdTime"
                                  type="date"
                                  format="yyyy-MM-dd"
                                  value-format="yyyy-MM-dd" 
                                  :disabled="isEdit" 
                                   @change='Modify()'></el-input>
                                  placeholder="">
                         </el-date-picker>
                    </div>
                  
                </div>    
            </el-col>-->
      </el-row>
      <el-row>
    <el-col :span="24" class="getPadding">
        <h4 class="h4">审计信息</h4>
        <div>
            <div class="bgcolor"><label>创建人</label><el-input v-model="customerClassData.createdBy" disabled></el-input></div>
            <div class="bgcolor">
                <label>创建时间</label>
                <el-date-picker
                v-model="customerClassData.createdTime"
                type="date"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd" 
                disabled
                placeholder="">
                </el-date-picker>
            </div>
            <div class="bgcolor"><label>修改人</label><el-input  v-model="customerClassData.modifiedBy" disabled></el-input></div>
            <div class="bgcolor">
                <label>修改时间</label>
                <el-date-picker
                v-model="customerClassData.modifiedTime"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd" 
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
export default {
  created: function() {
    let self = this;
    self.loadData();
    // self.loadOuTree();
    self.loadStatus();
    self.loadParentTree();
  },
  computed: {
    // countOu () {
    //     return this.ouItem;
    //     },
    count() {
      return this.parentItem;
    }
  },
  watch: {
    parentSearch(val) {
      this.$refs.tree.filter(val);
    }
  },
  data() {
    return {
      ifModify: false, //判断是否修改过
      isEdit: true, //判断是否要修改
      //---上级客户树--------
      selectParentTree: [], //选择上级客户分类
      parentSearch: "", //搜索上级客户分类
      backCancel:'',//判断信息提示确定的点击事件  返回、取消
      selectParentProps: {
        children: "childNodes",
        label: "className",
        id: "id"
      },
      parentItem: {
        id: "",
        className: ""
      },
      //--------------------
      status: [],
      customerClassData: {
        id: "",
        groupId: 1,
        // "cuId": '',
        classCode: "",
        className: "",
        classParentId: "",
        classParentId_ClassName:"",
        remark: "",
        status: "",
        createdBy: "",
        createdTime: ""
      },
      //---确认删除-----------------
      dialogDelConfirm: false, //用户删除保存提示信息
      //--------------------

      //---信息修改提示框------------
      dialogUserConfirm: false, //信息更改提示控制
      option: {
        vRail: {
          width: "5px",
          pos: "right",
          background: "#9093994d"
        },
        vBar: {
          width: "5px",
          pos: "right",
          background: "#9093994d"
        },
        hRail: {
          height: "0"
        }
      },
      errorMessage: false,
      detail_message_ifShow: false,
      response: {
        details: "",
        message: "",
        validationErrors: []
      }
      //-----------------------------
    };
  },
  validators: {
    //   'customerClassData.cuId': function (value) {//所属组织
    //      return this.Validator.value(value).required().integer();
    //   },
    "customerClassData.classParentId": function(value) {
      //上级客户分类
      return this.Validator.value(value)
        .required()
        .integer();
    },
    "customerClassData.classCode": function(value) {
      //客户分类编码
      return this.Validator.value(value)
        .required()
        .maxLength(20);
    },
    "customerClassData.className": function(value) {
      //客户分类名称
      return this.Validator.value(value)
        .required()
        .maxLength(20);
    },
    "customerClassData.status": function(value) {
      //状态
      return this.Validator.value(value)
        .required()
        .integer();
    }
  },
  methods: {
    //---加载数据---------------------------------------------
    loadData: function() {
      //根据id加载信息
      let self = this;
      if (self.$route.params.id != "default") {
        self.$axios
          .gets("/api/services/app/ContactClassManagement/Get", {
            id: self.$route.params.id
          })
          .then(function(res) {
            console.log(res);
            self.customerClassData = res.result;
            // self.ouItem.id = self.customerClassData.classParentId;
            // self.ouItem.ouName = self.customerClassData.ouFullname;
            // self.parentItem.id = self.customerClassData.classParentId;
            self.parentItem.className = self.customerClassData.className;
          });
      }
    },
    loadParentTree() {
      let self = this;
      self.treeLoading = true;
      self.$axios
        .gets("api/services/app/ContactClassManagement/GetTreeList",{Ower:1})
        .then(
          function(res) {
            // console.log(res);
            self.selectParentTree = res;
            self.loadIcon();
          },
          function(res) {
            self.treeLoading = false;
          }
        );
    },
    loadIcon() {
      let _this = this;
      _this.$nextTick(function() {
        $(".preNode").remove();
        $(".el-tree-node__label").each(function() {
          if (
            $(this)
              .parent(".el-tree-node__content")
              .next(".el-tree-node__children")
              .text() == ""
          ) {
            $(this).prepend(
              '<i class="preNode fa fa-file" aria-hidden="true" style="color:#f1c40f;margin-right:5px"></i>'
            );
          } else {
            $(this).prepend(
              '<i aria-hidden="true" class="preNode fa fa-folder-open" style="color:#f1c40f;margin-right:5px"></i>'
            );
          }
        });
      });
    },
    loadStatus: function() {
      //加载状态下拉框
      let self = this;
      self.$axios
        .gets("/api/services/app/DataDictionary/GetDictItem", {
          dictName: "Status001"
        })
        .then(
          function(res) {
            // console.log(res)
            self.status = res.result;
          },
          function(res) {}
        );
    },
    //-------------------------------------------------------

    //---树--------------------------------------------------
    filterNode(value, data) {
      // console.log(data)
      if (!value) return true;
      return data.className.indexOf(value) !== -1;
    },
    nodeClick: function(data) {
      let self = this;
      self.parentItem.id = data.id;
      self.parentItem.className = data.className;
      self.$nextTick(function() {
        $("#businessDetail_confirmSelect").click();
      });
    },
    //-------------------------------------------------------

    //---顶部删除按钮-----------------------------------------
    delModify: function() {
      let self = this;
      self.dialogDelConfirm = true;
    },
    //---保存新增---------------------------------------------
    Modify: function() {
      //判断数据是否修改过
      let self = this;
      self.ifModify = true;
      // console.log(self.ifModify)
    },
    //---修改返回提示-----------------------------------------
    isBack() {
      let self = this;
      if (self.ifModify) {
        self.dialogUserConfirm = true;
        self.backCancel = 1;
        // self.choseDoing='back'
      } else {
        self.back();
      }
    },
    sureDoing: function() {
      let self = this;
      if(self.backCancel ==1){
          self.back();
      }else if(self.backCancel == 2){
          self.loadData();
          self.ifModify = false;
          self.dialogUserConfirm=false;
      }
    },
    Cancel(){
      let self = this;
      if(self.ifModify){
          self.dialogUserConfirm=true;
          self.backCancel = 2;
          $('.tipsWrapper').css({display:'none'})
      }
  },
    //------------------保存修改---------------------------
    save() {
      
      let self = this;
        self.customerClassData.id = self.$route.params.id;
        self.$validate().then(function(success) {
          if (success) {
            self.$axios
              .puts(
                "/api/services/app/ContactClassManagement/Update", self.customerClassData).then(
                function(res) {
                  // console.log(res);
                  self.open("修改成功", "el-icon-circle-check", "successERP");
                    // 修改成功，点返回不弹出对话框
                   self.ifModify = false;
                  // console.log(self.ifModify);
                },
                function(res) {
                  self.open("修改失败", "el-icon-error", "faildERP");
                }
              );
          }
        });
    },
    //----------------保存修改并新增---------------------
    saveAdd: function() {
      let self = this;
      if ((self.ifModify = true)) {
        self.customerClassData.id = self.$route.params.id;
        self.$validate().then(function(success) {
          if (success) {
            self.$axios
              .puts(
                "/api/services/app/ContactClassManagement/Update",
                self.customerClassData
              )
              .then(
                function(res) {
                  // console.log(res);
                  self.ifModify = false;
                  self.goDetail();
                  self.open("修改成功", "el-icon-circle-check", "successERP");
                },
                function(res) {
                  self.open("修改失败", "el-icon-error", "faildERP");
                }
              );
          }
        });
      }
    },
    //-------------------------------------------------------
    //---确认删除--------------------------------------------
    sureDel: function() {
      let self = this;
      self.$axios
        .deletes("/api/services/app/ContactClassManagement/Delete", {
          id: self.$route.params.id
        })
        .then(
          function(res) {
            self.open("删除客户成功", "el-icon-circle-check", "successERP");
            self.back();
            self.dialogDelConfirm = false;
          },
          function(res) {
            self.open("删除客户失败", "el-icon-error", "faildERP");
            self.dialogDelConfirm = false;
            self.errorMessage = true;
            self.getErrorMessage(
              res.error.message,
              res.error.details,
              res.error.validationErrors
            );
          }
        );
    },
   
    //---open---路由切换--------------------------------------
    open(tittle, iconClass, className) {
      this.$notify({
        position: "bottom-right",
        iconClass: iconClass,
        title: tittle,
        showClose: false,
        duration: 3000,
        customClass: className
      });
    },
    back(row) {
      this.$store.state.url = "/customerClass/customerClassList/default";
      this.$router.push({ path: this.$store.state.url }); //点击切换路由
    },
    goModify: function(id) {
      // console.log(id)
      this.$store.state.url = "/customerClass/customerClassModify/" + id;
      // this.$store.state.url='/repository/default/repositoryModify/default'
      this.$router.push({ path: this.$store.state.url }); //点击切换路由
    },
    goDetail() {
      //点击新增跳转
      this.$store.state.url = "/customerClass/customerClassDetail/default";
      this.$router.push({ path: this.$store.state.url }); //点击切换路由
    },
    //---------------------------------------------------------
    //---错误提示-------------------------------------------
    showErrprTips(e) {
      $(".tipsWrapper").each(function() {
        if (
          $(e.target)
            .parent(".el-input")
            .hasClass($(this).attr("name"))
        ) {
          $(this).addClass("display_block");
        } else {
          $(this).removeClass("display_block");
        }
      });
    },
    showErrprTipsSelect(e) {
      $(".tipsWrapper").each(function() {
        if (
          $(e.target)
            .parent(".el-input")
            .parent(".el-select")
            .hasClass($(this).attr("name"))
        ) {
          $(this).addClass("display_block");
        } else {
          $(this).removeClass("display_block");
        }
      });
    },
    showErrprTipsRangedate(e) {
      $(".tipsWrapper").each(function() {
        if ($(e.$el).hasClass($(this).attr("name"))) {
          $(this).addClass("display_block");
        } else {
          $(this).removeClass("display_block");
        }
      });
    }
    //------------------------------------------------------
  }
};
</script>



<style scoped>
.pt15 {
  padding-top: 15px;
}
.customerClassModify .errorTips {
  margin-bottom: 10px;
  margin-top: -10px;
}
.customerClassModify .el-row {
    padding: 15px 0;
    border-bottom: 1px solid #e4e4e4;
    background-color: #fff;
}
.customerClassModify .getPadding {
    padding: 0 10px;
}
.customerClassModify .el-row:first-child {
  padding: 7px 0;
  border-bottom: 1px solid #e4e4e4;
}
.customerClassModify .el-row:last-child {
  padding-bottom: 15px;
}
.customerClassModify .bgcolor .isGive {
  display: block;
  float: left;
  height: 100%;
  line-height: 35px;
}
.customerClassModify .bgcolor.longWidth {
  margin-right: 0;
  width: 421px;
  height: auto;
  float: left;
}
.marginAuto {
  margin: auto;
  width: 550px;
}
.error_tips {
  color: red;
  font-size: 12px;
  float: left;
  height: 35px;
  line-height: 35px;
}
.customerClassModify .bgcolor.longWidth .el-input,
.customerClassModify .bgcolor.longWidth .el-textarea,
.customerClassModify .bgcolor.longWidth .el-select {
  width: calc(100% - 90px);
}
.customerClassModify .bgcolor.longWidth label {
  width: 80px;
}
.customerClassModify .bgcolor.longWidth .el-textarea {
  font-size: 12px;
}
.customerClassModify .bgcolor.longWidth .addZoo {
  float: left;
  width: calc(100% - 82px);
}
.customerClassModify .bgcolor.longWidth .add {
  display: block;
  width: 35px;
  height: 35px;
  border-radius: 3px;
  background-color: #c7c7c7;
  color: #fff;
  text-align: center;
  line-height: 35px;
  text-decoration: none;
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 10px;
}
.customerClassModify .bgcolor.longWidth .addRole {
  text-align: center;
  line-height: 35px;
  display: inline-block;
  width: 66px;
  height: 35px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 3px;
  font-size: 12px;
  margin-right: 10px;
  cursor: pointer;
  position: relative;
}
.customerClassModify .bgcolor.longWidth .add:hover {
  background-color: #354052;
}
.customerClassModify .bgcolor.longWidth .addRole i {
  position: absolute;
  right: -4px;
  top: -4px;
  color: #cccccc;
}
.customerClassModify .bgcolor.longWidth .addRole:hover i {
  color: #f66;
}
</style>
<style>
.customerClassModify .el-input__inner {
  height: 35px !important;
}
</style>


