<template>
     <div class="staff-modify-wrapper" style="float:left;background:#fff;width:100%;">
        <div id="bgc">
            <div class="btnBd">
                <el-row >
                    <el-col :span="24">
                        <button class="erp_bt bt_back" @click="goBack">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_back.png">
                                </div>
                                <span class="btDetail">返回</span>
                        </button>
                        <!-- <button class="erp_bt bt_modify" @click="edit">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_modify.png">
                                </div>
                                <span class="btDetail">修改</span>
                        </button> -->
                        <button class="erp_bt bt_save" @click="save"  :disabled="isTrue">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_save.png">
                                </div>
                                <span class="btDetail">保存</span>
                        </button>
                        <button class="erp_bt bt_cancel" @click="cancel"  :disabled="isTrue">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_cancel.png">
                                </div>
                                <span class="btDetail">取消</span>
                        </button>
                        <button class="erp_bt bt_saveAdd"  :disabled="isTrue">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_saveAdd.png">
                                </div>
                                <span class="btDetail">保存并新增</span>
                        </button>
                        <button class="erp_bt bt_add" :disabled="!isTrue">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_add.png">
                                </div>
                                <span class="btDetail">新增</span>
                        </button>
                        <button class="erp_bt bt_del" :disabled="!isTrue">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_del.png">
                                </div>
                                <span class="btDetail">删除</span>
                        </button>
                    </el-col>
                </el-row>
            </div>
            <!-- 错误提示信息 -->
             <el-row>
                <el-col>
                    <div class="errTipsWrapper" name="employeeCode">
                      <div class="errorTips" :class="{block : !validation.hasError('form.employeeCode')}">
                          <p class="msgDetail">错误提示：{{ validation.firstError('form.employeeCode') }}</p>
                      </div>
                    </div>
                    <div class="errTipsWrapper" name="employeeName">
                      <div class="errorTips" :class="{block : !validation.hasError('form.employeeName')}">
                          <p class="msgDetail">错误提示：{{ validation.firstError('form.employeeName') }}</p>
                      </div>
                    </div>
                    <div class="errTipsWrapper" name="ouId">
                      <div class="errorTips" :class="{block : !validation.hasError('form.ouId')}">
                          <p class="msgDetail">错误提示：{{ validation.firstError('form.ouId') }}</p>
                      </div>
                    </div>
                </el-col>
            </el-row>
	        <!-- 表单 -->
             <div class="staff_modify_form">
                <el-row style="margin-top:20px">
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small>*</small>职员编码</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div>
                            <el-input v-model="form.employeeCode" class="employeeCode" @focus="showErrTips" :class="{redBorder : validation.hasError('form.employeeCode')}" :disabled="isForbid" @change="isUpdate"></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small>*</small>职员名称</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div>
                            <el-input :disabled="isForbid" @change="isUpdate" v-model="form.employeeName" class="employeeName" @focus="showErrTips" :class="{redBorder : validation.hasError('form.employeeName')}" ></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small>*</small>所属组织</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div>
                            <!-- <el-select :disabled="isForbid" @change="isUpdate" v-model="form.ouId" @focus="showErrTips" class="ouId"
                                :class="{redBorder : validation.hasError('form.ouId')}">
                                <el-option v-for="item in ouIdoptions" :label="item.label" :key="item.value" :value="item.value"></el-option>
                            </el-select> -->
                            <el-select  :disabled="isForbid" @change="isUpdate" class="ouId" :class="{redBorder :           validation.hasError('form.ouId')}" v-model="form.ouId" placeholder="">
                                <el-input placeholder="搜索..." class="selectSearch" v-model="search_ou">
                                </el-input>
                                <el-tree oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" :data="selectTree_ou" :props="selectProps_ou"
                                node-key="id" default-expand-all ref="tree" :filter-node-method="filterNode_ou"
                                :expand-on-click-node="false" @node-click="nodeClick_ou">
                                </el-tree>
                                <el-option v-show="false" v-for="item in selectData.ou" :key="item.id" :label="item.ouFullname" :value="item.id" :date="item.id">
                                </el-option>
                            </el-select>
                        </div>
                        
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small></small>手机号码</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div>
                            <el-input :disabled="isForbid" @change="isUpdate" v-model="form.mobile"></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small></small>部门</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div>
                            <el-select :disabled="isForbid" @change="isUpdate" v-model="form.deptId">
                                <!-- <el-option v-for="item in deptIdoptions" :key="item.value" :label="item.label" :value="item.value"></el-option> -->
                                 <el-input placeholder="搜索..." class="selectSearch" v-model="search_ou">
                                </el-input>
                                <el-tree oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" :data="selectTree_dept" :props="selectProps_dept"
                                node-key="id" default-expand-all ref="tree" :filter-node-method="filterNode_ou"
                                :expand-on-click-node="false" @node-click="nodeClick_ou">
                                </el-tree>
                                <el-option v-show="false" v-for="item in selectDeptData.dept" :key="item.id" :label="item.deptName" :value="item.id" :date="item.id">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small></small>性别</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div>
                            <el-select :disabled="isForbid" @change="isUpdate" v-model="form.sex">
                                <el-option label="男" :value="1"></el-option>
                                <el-option label="女" :value="2"></el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small></small>生日</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div>
                            <el-date-picker type="date" :disabled="isForbid" @change="isUpdate" v-model="form.birthday" format="yyyy-MM-dd" value-format="yyyy-MM-dd">
                            </el-date-picker>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small></small>所属店铺</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div >
                            <el-select :disabled="isForbid" @change="isUpdate" v-model="form.shopId">
                                <el-option v-for="item in shopIdoptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small></small>职员类型</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div class="checkPt">
                            <el-checkbox-group :disabled="isForbid" @change="isUpdate" v-model="employeeTypeIds">
                                <el-checkbox v-for="item in employeeIdoptions"  :label="item.label" :key="item.label">{{item.text}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small></small>备注</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div>
                            <el-input :disabled="isForbid" @change="isUpdate" type="textarea" :rows="5" resize="none" v-model="form.remark"></el-input>
                        </div>
                    </el-col>
                </el-row>
            </div>          

        </div>
    </div>
</template>
<script>
export default {
  name: "staffDetail",
  data() {
    return {
     isTrue:true,
      isForbid: false, //是否禁止编辑
    //   isShow: false, //是否显示保存按钮
      update: false, //设置更改信息的初始值
      form: {
        groupId: 0,
        id: 0,
        ouId: 0,
        ouFullname: "",
        deptId: 0,
        deptName: "",
        shopId: 0,
        shopName: "",
        employeeCode: "",
        employeeName: "",
        mobile: "",
        sex: 0,
        sexTValue: "",
        birthday: "",
        remark: "",
        employeeTypes: [
          {
            groupId: 0,
            employeeId: 0,
            employeeTypeid: 0,
            employeeTypeidTValue: ""
          }
        ]
      },
    //   ouIdoptions: [], //------所属组织--------
    //   deptIdoptions: [], //------所属部门--------
      shopIdoptions: [], //------所属店铺--------

      employeeIdoptions: [
        //------职员类型--------
        { label: 1, text: "采购" },
        { label: 2, text: "业务" },
        { label: 3, text: "仓库" },
        { label: 4, text: "店员" }
      ],

      updateList: {
        //保存数据需要的参数
        ouId: 0,
        employeeCode: "",
        employeeName: "",
        mobile: "",
        deptId: 0,
        sex: 1,
        birthday: "",
        discountStart: 0,
        discountEnd: 0,
        shopId: 0,
        remark: "",
        employeeTypeIds: [],
        id: 0
      },
      employeeTypeIds: [],
        //   所属组织下拉框数据
      search_ou:'',
      selectTree_ou:[],
      selectProps_ou: {
            children: 'children',
            label: 'ouFullname',
            id:'id'
        },
      selectData:{//select数据
            area:[],//上级业务地区
            ou:[],//组织
           
        },
    //  所属部门下拉框数据
        search_dept:'',
      selectTree_dept:[],
      selectProps_dept: {
            children: 'children',
            label: 'deptName',
            id:'id'
        },
      selectDeptData:{//select数据
            dept:[],//部门
        },
    };
  },
  // 验证器
  validators: {
    "form.employeeCode": function(value) {
      //职员编码
      return this.Validator.value(value)
        .required()
        .maxLength(50);
    },
    "form.employeeName": function(value) {
      //职员名称
      return this.Validator.value(value)
        .required()
        .maxLength(50);
    },
    "form.ouId": function(value) {
      //所属组织
      return this.Validator.value(value)
        .required()
        .integer();
    }
  },
  created: function() {
    this.getDataList();
    // this.getOuIdMsg();
    // this.getDepmsg();
    this.getShopmsg();
    // 所属组织下拉选项框
    this.getSelectData();
    // 树形控件
    this.loadTree();
    // 文件夹图标
    this.loadIcon();
    // 获取部门下拉框数据
    this.getDeptData();
  },
  methods: {
    // 错误提示信息
    showErrTips(e) {
      $(".errTipsWrapper").each(function() {
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
    // 获取数据渲染
    getDataList() {
      let _this = this;
      _this.$axios
        .gets("/api/services/app/EmployeeManagement/Get", {
          id: this.$route.params.id
        })
        .then(rsp => {
          rsp.result.sex = +rsp.result.sex;
          rsp.result.ouId = +rsp.result.ouId;
          rsp.result.deptId = +rsp.result.deptId;
          _this.form = rsp.result;
          for (let val of rsp.result.employeeTypes) {
            _this.employeeTypeIds.push(val.employeeTypeid);
          }
          _this.form["employeeTypeIds"] = _this.employeeTypeIds;
          // console.log( _this.form);
          // console.log(_this.form.employeeTypeIds);
        });
    },
    // 获取业务组织信息
    getOuIdMsg() {
      let _this = this;
      this.$axios
        .gets("/api/services/app/OuManagement/GetAll", {
          SkipCount: _this.SkipCount,
          MaxResultCount: _this.MaxResultCount
        })
        .then(rsp => {
          // console.log(rsp.result.items);
          for (let val of rsp.result.items) {
            _this.ouIdoptions.push({ label: val.ouFullname, value: val.id });
          }
          // console.log( _this._this.depMsg);
        });
    },
    filterNode_ou(value, data) {
        if (!value) return true;
        return data.ouFullname.indexOf(value) !== -1;
    },
    nodeClick_ou(data,node,self){
        let _this=this;
        $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').each(function(index){
            if($(this).attr('date')==data.id){
                 $(this).click()
            }
        })
    },
    //业务组织下拉选项框
    getSelectData(){
            let _this=this;
            _this.$axios.gets('/api/services/app/OuManagement/GetOuParentList').then(function(res){ 
                // 所属组织
            _this.selectData.ou=res.result;
            })
           
        },
        // 加载树形控件
    loadTree(){
           let _this=this;
            //组织
             _this.$axios.gets('/api/services/app/OuManagement/GetAllTree')
            .then(function(res){
                _this.selectTree_ou=res.result;
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
    // 获取部门信息
    // getDepmsg() {
    //   let _this = this;
    //   this.$axios
    //     .gets("/api/services/app/DeptManagement/GetAll", {
    //       SkipCount: _this.SkipCount,
    //       MaxResultCount: _this.MaxResultCount
    //     })
    //     .then(rsp => {
    //       // console.log(rsp.result.items);
    //       for (let val of rsp.result.items) {
    //         _this.deptIdoptions.push({ label: val.deptName, value: val.id });
    //       }
    //       // console.log( _this.deptIdoptions);
    //     });
    // },
    //部门下拉选项框
    getDeptData(){
            let _this=this;
            _this.$axios.gets('/api/services/app/DeptManagement/GetOuParentList').then(function(res){ 
                // 部门
            _this.selectDeptData.dept=res.result;
            console.log( _this.selectData.dept);
            
            })
           
        },
        // 加载树形控件
    loadTree(){
           let _this=this;
            //组织
             _this.$axios.gets('/api/services/app/DeptManagement/GetAllTree')
            .then(function(res){
                _this. selectTree_dept=res.result;
                _this.loadIcon();
            },function(res){
            })
        },

    // 获取店铺信息
    getShopmsg() {
      let _this = this;
      _this.$axios
        .gets("/api/services/app/ShopManagement/GetAll", {
          SkipCount: _this.SkipCount,
          MaxResultCount: _this.MaxResultCount
        })
        .then(rsp => {
          for (let val of rsp.result.items) {
            _this.shopIdoptions.push({ label: val.shopName, value: val.id });
          }
          // console.log( _this.shopIdoptions);
        });
    },

    // 成功的提示框
    open(tittle, iconClass, className) {
      //提示框
      this.$notify({
        position: "bottom-right",
        iconClass: iconClass,
        title: tittle,
        showClose: false,
        duration: 3000,
        customClass: className
      });
    },
    //点击切换路由，返回到职员数据列表
    goBack: function() {
      this.$store.state.url = "/staff/staffList/default";
      this.$router.push({ path: this.$store.state.url });
    },
    // 修改，点击修改输入框的编辑状态
    // edit() {
    //   this.isForbid = false;
    //   this.isShow = true;
    // },
    isUpdate() {
      //判断是否修改过信息
      this.update = true;
      this.isTrue=false;
    },
    // 保存修改的数据
    save() {
      let _this = this;
      _this.$validate().then(function(success) {
        if (success) {
          _this.updateList.ouId = _this.form.ouId;
          _this.updateList.employeeCode = _this.form.employeeCode;
          _this.updateList.employeeName = _this.form.employeeName;
          _this.updateList.mobile = _this.form.mobile;
          _this.updateList.deptId = _this.form.deptId;
          _this.updateList.sex = _this.form.sex;
          _this.updateList.birthday = _this.form.birthday;
          _this.updateList.shopId = _this.form.shopId;
          _this.updateList.employeeTypeIds = _this.form.employeeTypeIds;
          _this.updateList.remark = _this.form.remark;
          _this.updateList.id = _this.form.id;
          if (_this.update) {
            _this.$axios
              .puts(
                "/api/services/app/EmployeeManagement/Update",
                _this.updateList
              )
              .then(
                rsp => {
                  _this.open("修改成功", "el-icon-circle-check", "successERP");
                //   console.log(_this.updateList);
                //   this.isForbid = !this.isForbid;
                  _this.update = false;
                //   _this.isShow = !this.isShow;
                },
                rsp => {
                  _this.open("修改失败", "el-icon-error", "faildERP");
                }
              );
          } else {
            _this.open("没有需要保存的项目", "el-icon-warning", "noticERP");
          }
        }
      });
    },
    // 取消
    cancel() {
    //   if (this.isForbid == false) {
    //     this.isForbid = !this.isForbid;
        this.getDataList();
    //   }
    }
  }
};
</script>

<style scope>
.staff_modify_form {
  padding-left: 30%;
  width: 30%;
}
.pl {
  padding-left: 20%;
}
.pt {
  padding-top: 10px;
}
.fs {
  font-size: 12px;
}
.staff-modify-wrapper .el-select {
  display: block;
}
.staff-modify-wrapper .btnBd {
  width: 100%;
  border-bottom: 1px solid #e4e4e4;
  padding: 5px;
}
.bgcolor {
  overflow: visible;
}
.staff_modify_form .checkPt {
  padding-top: 5px;
}
</style>
<style>
.staff-modify-wrapper .el-input__inner {
  border: 1px solid #dcdfe6 !important;
  height: 35px !important;
}
.staff-modify-wrapper .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
</style>


