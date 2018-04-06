<template>
    <div class="customerClassList">
        <el-row class="bg-white">
            <el-col :span="5">
                <el-col class="h48 pl15 pr15" :span="24">
                    <el-input placeholder="搜索..."
                              v-model="searchLeft" 
                              class="bCustSearch">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </el-col>

                <el-col :span='24' class="tree-container" >
                    <el-tree oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none"
                             v-loading="treeLoading" 
                             :data="customerClassTree"
                             :props="defaultProps"
                             node-key="id"
                             default-expand-all
                             ref="tree"
                             :expand-on-click-node="false"
                             :filter-node-method="filterNode"
                             @node-click="nodeClick">
                    </el-tree>
                </el-col>   
            </el-col>
            
            <el-col :span='19' class="border-left">
                <el-row class="h48 pt5 pr10 pl5">

                    <button class="erp_bt bt_add" @click="goDetail">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_add.png">
                        </div>
                        <span class="btDetail">新增</span>
                    </button>

                    <button @click="delRow" class="erp_bt bt_del">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_del.png">
                        </div>
                        <span class="btDetail">删除</span>
                    </button>

                    <button class="erp_bt bt_in">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_inOut.png">
                        </div>
                        <span class="btDetail">导入</span>
                    </button>
                    
                    <button class="erp_bt bt_out">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_inOut.png">
                        </div>
                        <span class="btDetail">导出</span>
                    </button>
                     <div class="search_input_group">
                            <div class="search_input_wapper">
                                <el-input
                                    v-model="InputName" 
                                    @change="searchRight"
                                    placeholder="搜索..."
                                    class="search_input">
                                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                                </el-input>
                            </div>
                            <div class="search_button_wrapper" @click="dialogUserDefined = true">
                                <button class="userDefined">
                                    <i class="fa fa-cogs" aria-hidden="true"></i>自定义
                                </button>
                            </div>
                        </div>    
                </el-row>

                <el-row>
                    <el-col :span='24'>
                        <el-table v-loading="tableLoading" :data="tableData" style="width: 100%" stripe @selection-change="handleSelectionChange" border ref="multipleTable">
                            <el-table-column type="selection" fixed="left"></el-table-column>
                            <el-table-column prop="classCode" label="客户分类编码" fixed="left" > 
                                <template slot-scope="scope">
                                    <el-button type="text" size="small"  @click="goModify(scope.row.id)">{{tableData[scope.$index].classCode}}</el-button>
                                    
                                </template>
                            </el-table-column>
                            <el-table-column prop="className" label="客户分类名称" fixed>
                                <template slot-scope="scope">
                                    <el-button type="text" size="small"  @click="goModify(scope.row.id)">{{tableData[scope.$index].className}}</el-button>
                                </template>
                            </el-table-column>
                            <!-- <el-table-column prop="manager" label="负责人"></el-table-column> -->
                            <el-table-column prop="classParentId_ClassName" label="上级客户分类">
                              <template slot-scope="scope">
                                    <el-button type="text" size="small"  @click="goModify(scope.row.id)">{{tableData[scope.$index].classParentId_ClassName}}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="remark" label="备注"></el-table-column>
                             <el-table-column prop="status" label="状态">
                                <template slot-scope="scope">
                                    <span v-if="scope.row.status=='1'" style="color:#39CA77;">启用</span>
                                    <span v-else="scope.row.status=='0'" style="color:#FF6666;">停用</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop='createdBy' label="创建人"></el-table-column>
                            <el-table-column label="创建时间">
                                <template slot-scope="scope">
                                    <el-date-picker 
                                    format="yyyy-MM-dd"
                                    value-format="yyyy-MM-dd" 
                                    v-model="tableData[scope.$index].createdTime" 
                                    type="datetime" 
                                    readonly
                                    align="center"
                                    placeholder="">
                                </el-date-picker>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作" fixed='right'>
                                 <template slot-scope="scope">
                                    <el-button type="text" size="small"  @click="goModify(scope.row.id)" >查看</el-button>
                                    <!-- <el-button type="text" size="small"  @click="see(scope.row)" >查看</el-button> -->
                                    <el-button type="text" size="small"  @click="confirmDel(scope.row)" >删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination style="margin-top:20px;" 
                                        class="text-right" 
                                        background 
                                        layout="total,prev, pager, next,jumper" 
                                        @current-change="handleCurrentChange"
                                        :current-page="pageIndex"
                                        :page-size="oneItem"
                                        :total="totalItem"></el-pagination>   
                    </el-col>
                </el-row>

            </el-col>
        </el-row>
        <!-- dialog错误信息提示 -->
        <el-dialog :visible.sync="errorMessage" class="dialog_confirm_message" width="25%">
            <template slot="title">
                <span class="dialog_font">提示</span>
            </template>
            <el-col :span="24">
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
                                <span class="dialog_font">无法为此请求检索数据</span>
                                <h4 class="dialog_font dialog_font_bold">其他信息:</h4>
                                <span class="dialog_font">执行sql语句或批处理时产生异常,执行sql语句或批处理时产生异常,执行sql语句或批处理时产生异常,执行sql语句或批处理时产生异常</span>
                       
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
  name: "customerClass",
  data() {
    return {
      ContactOwner:1,//  客户分类参数(获取所有数据时)
      searchLeft: "",
      ifCan: true,
      classParentId: [
        {
          //分类类型
          value: "1",
          label: "客户分类"
        },
        {
          value: "2",
          label: "供货商分类"
        }
      ],
      statusC: [], //状态
      tableData: [],
      customerClassTree: [],
      defaultProps: {
        children: "childNodes",
        label: "className",
        id: "id"
      },
      // TreeContextMenu:[//点击鼠标右键生成菜单
      // ],
      InputName: "",
      pageIndex: 0, //分页的当前页码
      totalPage: 0, //当前分页总数
      oneItem: 10, //每页有多少条信息
      multipleSelection: [], //复选框选中数据
      idArray: {
        ids: []
      }, //复选框选中数据id
      page: 1, //当前页
      treeCheck: [],
      isClick: [],
      load: true,
      totalItem: 0, //总共有多少条消息
      tableLoading: true,
      treeLoading: false,
      Sorting: "", //table搜索
      Ower: 1, //树形图的地区分类(1.客户分类.2供货商分类)
      isAdd: true, //判断是增加还是修改
      tittle: "", //模态框tittle
      showParent: true, //上级组织单元是否可选
      // 错误信息提示开始
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
      detail_message_ifShow: false,
      errorMessage: false,
      dateabc:'',
      // 错误信息提示结束

      selfAr: [] //根据id获得树形节点本身
    };
  },
  //----------------创建------------------------------
  created: function() {
    let self = this;
    self.loadTableData();
    self.loadTree();
    self.loadStatus();
  },
  // ---------------------验证---------------
  validators: {
    "dialogData.classCode": function(value) {
      //客户分类编码
      return this.Validator.value(value).required().maxLength();
    },
    "dialogData.className": function(value) {
      //客户分类名称
      return this.Validator.value(value).required().maxLength();
    },
    "dialogData.classParentId": function(value) {
      //上级客户分类
      return this.Validator.value(value).required().integer();
    },
    "dialogData.remark": function(value) {
      //备注
      return this.Validator.value(value).required().maxLength(200);
    }
  },
  watch: {
    searchLeft(val) {
      this.$refs.tree.filter(val);
    }
  },
  methods: {
    //---数据表格加载---------------------------------------------------
   loadTableData(data) {
      //表格
      let self = this;
      self.tableLoading = true;
      self.$axios.gets("/api/services/app/ContactClassManagement/GetNoteList",{Id:0,ContactOwner:self.ContactOwner,SkipCount: (self.page - 1) * self.oneItem,MaxResultCount: self.oneItem,Sorting: self.Sorting }).then(function(res) {
            console.log(res);
            self.tableData = res.result.items;
            // console.log(self.tableData)
            self.totalItem = res.result.totalCount;
            self.totalPage = Math.ceil(res.result.totalCount / self.oneItem);
              if(self.tableData==[]){
                   self.pageIndex=0
                    }
                    self.tableLoading=false;
                    },function(res){
                    // self.errorMessage=true;
                    self.tableLoading=false;
                    })
                },
    // ---------------------------------------获取所有列表数据-----------------
    getDataList() {
      let self = this;
      self.$axios.gets("/api/services/app/ContactClassManagement/GetSearch", {ContactOwner:1,InputName: self.InputName,SkipCount: (self.page - 1) * self.oneItem,MaxResultCount: self.oneItem}).then(res => {
           console.log(res);
          self.tableData = res.result.items;
          self.totalItem = res.result.totalCount;
         
        });
    },
    //------------------------------------------------加载树形结构-------------------------
     loadTree() {
      let self = this;
      self.treeLoading = true;
      self.$axios.gets("api/services/app/ContactClassManagement/GetTreeList", {Ower:1}).then(
          function(res) {
            // console.log(1)
            // console.log(res);
            self.treeLoading = false;
            self.customerClassTree=res;
            self.loadIcon();
          },
          function(res) {
            self.treeLoading = false;
          }
        );
    },
    loadIcon() {
      let self = this;
      self.$nextTick(function() {
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
            self.statusC = res.result;
          },
        );
    },
  
    //---保存--------------------------------------------------------
    save: function() {
      let self = this;
      self.$validate().then(function(success) {
        if (success) {
          if (self.dialogData.id != "" && self.dialogData.id != 0) {
            //判断参数id值，为''是新增，其他为创建
            self.$axios
              .puts( "/api/services/app/ContactClassManagement/Update",self.dialogData)
              .then(
                function(res) {
                  self.dialogFormVisible = false;
                  self.loadTableData();
                },
                function(res) {
                  console.log("error");
                }
              );
          } else {
            self.$axios.posts("/api/services/app/ContactClassManagement/Create",self.dialogData)
              .then(
                function(res) {
                  self.dialogFormVisible = false;
                  self.loadTableData();
                  self.clearAddDate();
                },
                function(res) {
                  console.log("error");
                }
              );
          }
        }
      });
    },
    //----------------------------------------------------------------

    // ---跳转--------open----------------------------------------------
    goDetail() {
      //点击新增跳转
      this.$store.state.url = "/customerClass/customerClassDetail/default";
      this.$router.push({ path: this.$store.state.url }); //点击切换路由
    },

    goModify: function(id) {
      //点击跳转修改页modify
      this.$store.state.url = "/customerClass/customerClassModify/" + id;
      this.$router.push({ path: this.$store.state.url }); //点击切换路由
    },

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
      //---------------------------------------------------------------
    //右边搜索框
    searchRight() {
      this.getDataList();
    },
    //------------------------------------------------------------------
    //---清除数据--------------------------------------------------
    clearAddDate: function() {
      //清除新增数据
      let self = this;
      self.dialogData = {
        //dialog数据
        id: "",
        Ower: "1",
        groupId: "1", //集团ID
        ouId: "1", //组织单元ID
        classCode: "", //部门代码
        className: "", //部门名称
        // director: "", //负责人
        // phone: "", //电话
        classParentId: "", //父客户id
        remark: "", //备注
        status: "" //启用状态
      };
    },
    //----------------------------------------------------------------

    //---修改---------------------------------------------------------
    modify: function(row) {
      // console.log(row)
      let self = this;
      self.tittle = "修改";
      self.dialogFormVisible = true;
      self.dialogData.id = row.id;
      self.dialogData.groupId = row.groupId;
      // self.dialogData.ouId = row.ouId;
      self.dialogData.classCode = row.classCode;
      self.dialogData.className = row.className;
      // self.dialogData.director = row.director;
      // self.dialogData.phone = row.phone;
      self.dialogData.classParentId = row.classParentId;
      self.dialogData.status = row.status;
      // console.log(self.dialogData);
    },
    //----------------------------------------------------------------

    //---控制编辑------分页--------------------------------------------
    handleCurrentChange(val) {
      //页码改变
      let self = this;
      self.page = val;
      if(self.load){
        self.loadTableData();
      }else{
        self.nodeClick(self.dateabc);
      }
      
    },
    handleSelectionChange(val) {
      //点击复选框选中的数据
      this.multipleSelection = val;
    },
    confirmDel(row) {
      let self = this;
      this.$confirm("确定删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          self.delThis(row);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    delThis(row) {
      //删除行
      let self = this;
      self.$axios
        .deletes("/api/services/app/ContactClassManagement/Delete", {
          id: row.id
        })
        .then(
          function(res) {
            self.open("删除成功", "el-icon-circle-check", "successERP");
            self.loadTableData();
          },
          function(res) {
            self.errorMessage = true;
          }
        );
    },
    // -------------------------------删除行----------------------
    delRow() {
      let self = this;
      for (let i in self.multipleSelection) {
        self.idArray.ids.push(self.multipleSelection[i].id);
      }
      if (self.idArray.ids.length > 0) {
        self
          .$confirm("确定删除?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
            center: true
          })
          .then(() => {
            self.$axios
              .posts(
                "/api/services/app/ContactClassManagement/BatchDelete",
                self.idArray
              )
              .then(
                function(res) {
                  self.loadTableData();
                  // self.loadTree() ;//删除成功加载树形节点
                  self.open("删除成功", "el-icon-circle-check", "successERP");
                  self.idArray = {
                    ids: []
                  };
                },
                function(res) {
                  self.errorMessage = true;
                }
              );
          })
          .catch(() => {
            self.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      } else {
        self.$message({
          type: "info",
          message: "请勾选需要删除的数据！"
        });
      }
    },
      nodeClick(data){//点击树形控件节点时的回调
            let self=this;
            // console.log(data);
            if(data.id){
              self.dateabc=data.id;
            }else{
              self.dateabc=data;
            }
            // self.dateabc=data.id;
            console.log(self.dateabc)
            self.$axios.gets('/api/services/app/ContactClassManagement/GetNoteList',{Id:self.dateabc,ContactOwner:1,SkipCount:(self.page - 1) * self.oneItem,MaxResultCount: self.oneItem}).then(
                res=>{
                  console.log(res);
                  // self.totalCount=res.result.totalCount;
                  self.totalItem = res.result.totalCount;
                  self.totalPage = Math.ceil(res.result.totalCount / self.oneItem);
                  self.tableData=res.result.items;
                  self.load=false;
                  
            })
        },
      filterNode(value, data) {//过滤节点
          if (!value) return true;
          return data.className.indexOf(value) !== -1;
          }
  }
};
</script>

<style scoped>
.error_tips {
  height: 15px;
  line-height: 15px;
  color: #f66;
}
.dialogBtn {
  display: block;
  float: left;
  width: 50%;
  height: 100%;
  background-color: #fff;
  color: #c9c9c9;
  border: none;
  border-top: 1px solid #c9c9c9;
  outline: none;
  cursor: pointer;
}
.dialogBtn:focus {
  outline: none;
}
.dialog-footer .dialogBtn:first-child {
  border-right: 1px solid #c9c9c9;
}
.dialog-footer {
  padding: 0;
  height: 50px;
}
.dialogBtn:hover {
  color: #6699ff;
}
.TreeMenu {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100px;
  height: 100px;
}
.TreeMenu button {
  display: block;
  width: 100%;
  height: calc(100% / 3);
}
.formSearch {
  float: right;
}
.bg-white {
  background: white;
  border-radius: 3px;
}
.pl5 {
  padding-left: 5px;
}
.h48 {
  height: 48px;
  line-height: 48px;
  border-bottom: 1px solid #e4e4e4;
}
.pr10 {
  padding-right: 10px;
}
.pl15 {
  padding-left: 15px;
}
.pr15 {
  padding-right: 15px;
}
.pt5 {
  padding-top: 5px;
}
.border-left {
  border-left: 1px solid #e4e4e4;
  min-height: 380px;
}
.open {
  display: inline-block;
  width: 49px;
  height: 22px;
  line-height: 22px;
  border: 1px solid #cccccc;
  color: #cccccc;
  text-align: center;
  cursor: pointer;
}
</style>

<style>
.customerClassList .el-button + .el-button {
  margin-left: 0;
}
.customerClassList .bCustSearch .el-input__inner {
  height: 30px;
  border-radius: 30px;
}

.customerClassList .bgcolor {
  margin-bottom: 0;
}
.customerClassList .cell .el-input__inner {
  border: none;
  text-align: center;
  padding: 0;
}
.customerClassList .bgw .el-input__inner {
  background-color: white;
}
.customerClassList .bgg .el-input__inner {
  background-color: #fafafa;
}
</style>
