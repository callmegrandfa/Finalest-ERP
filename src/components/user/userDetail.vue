<template>
    <div class="userDetail">
        <el-row>
            <el-col :span="24">
              <button @click="back" class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
              <!-- <button class="erp_bt bt_add"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button> -->
              <button @click="delRow" class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>    
              <button @click="save" class="erp_bt bt_save"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>
              <button class="erp_bt bt_cancel"><div class="btImg"><img src="../../../static/image/common/bt_cancel.png"></div><span class="btDetail">取消</span></button>
              <button class="erp_bt bt_print"><div class="btImg"><img src="../../../static/image/common/bt_print.png"></div><span class="btDetail">打印</span></button>
            </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="tipsWrapper" name="userCode">
                <div class="errorTips" :class="{block : !validation.hasError('addData.userCode')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.userCode') }}</p>
                </div>
            </div>
             <div class="tipsWrapper" name="displayName">
                <div class="errorTips" :class="{block : !validation.hasError('addData.displayName')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.displayName') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="phoneNumber">
                <div class="errorTips" :class="{block : !validation.hasError('addData.phoneNumber')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.phoneNumber') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="email">
                <div class="errorTips" :class="{block : !validation.hasError('addData.email')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.email') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="userGroupId">
                <div class="errorTips" :class="{block : !validation.hasError('addData.userGroupId')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.userGroupId') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="ouId">
                <div class="errorTips" :class="{block : !validation.hasError('addData.ouId')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.ouId') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="userType">
                <div class="errorTips" :class="{block : !validation.hasError('addData.userType')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.userType') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="languageId">
                <div class="errorTips" :class="{block : !validation.hasError('addData.languageId')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.languageId') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="status">
                <div class="errorTips" :class="{block : !validation.hasError('addData.status')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.status') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="remark">
                <div class="errorTips" :class="{block : !validation.hasError('addData.remark')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.remark') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="dateRange">
                <div class="errorTips" :class="{block : !validation.hasError('dateRange')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('dateRange') }}</p>
                </div>
            </div>

            <div class="bgcolor"><label>
              <small>*</small>用户编码</label>
              <el-input 
              class="userCode" 
              @focus="showErrprTips"
              :class="{redBorder : validation.hasError('addData.userCode')}" 
              v-model="addData.userCode" 
              placeholder=""></el-input>
            </div>
            <div class="bgcolor">
              <label><small>*</small>用户名称</label>
              <el-input 
              class="displayName" 
              @focus="showErrprTips"
              :class="{redBorder : validation.hasError('addData.displayName')}" 
              v-model="addData.displayName"  
              placeholder=""></el-input>
            </div>
            <div class="bgcolor">
              <label><small>*</small>手机号码</label>
              <el-input 
              class="phoneNumber" 
              @focus="showErrprTips"
              :class="{redBorder : validation.hasError('addData.phoneNumber')}" 
              v-model="addData.phoneNumber"  
              placeholder=""></el-input>
            </div>
            <div class="bgcolor">
              <label><small>*</small>邮箱</label>
              <el-input 
              class="email" 
              @focus="showErrprTips"
              :class="{redBorder : validation.hasError('addData.email')}"
              v-model="addData.email"  
              placeholder=""></el-input>
            </div>
            <div class="bgcolor">
              <label><small>*</small>所属用户组</label>
              <el-select 
              class="userGroupId" 
              placeholder=""
              @focus="showErrprTipsSelect"
              :class="{redBorder : validation.hasError('addData.userGroupId')}"
              v-model="addData.userGroupId">
                  <el-option v-for="item in contain" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </div>
            <div class="bgcolor">
              <label><small>*</small>所属组织</label>
              <el-select 
              class="ouId" 
              placeholder=""
              @focus="showErrprTipsSelect"
              :class="{redBorder : validation.hasError('addData.ouId')}"
              v-model="addData.ouId">
                <el-option v-for="item in contain" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </div>
            <div class="bgcolor">
              <label><small>*</small>身份类型</label>
              <el-select 
              class="userType" 
              placeholder=""
              @focus="showErrprTipsSelect"
              :class="{redBorder : validation.hasError('addData.userType')}"
              v-model="addData.userType">
                <el-option v-for="item in contain" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </div>
            <div class="bgcolor">
              <label><small>*</small>语种</label>
              <el-select 
              class="languageId" 
              placeholder=""
              @focus="showErrprTipsSelect"
              :class="{redBorder : validation.hasError('addData.languageId')}"
              v-model="addData.languageId">
                <el-option v-for="item in contain" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </div>
            <div class="bgcolor">
              <label><small>*</small>有效时间</label>
               <div class="rangeDate">
                  <el-date-picker
                  v-model="dateRange"
                  class="dateRange"
                  @focus="showErrprTipsRangedate"
                  :class="{redBorder : validation.hasError('dateRange')}"
                  type="daterange"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd" 
                  range-separator="to"
                  start-placeholder=""
                  end-placeholder="">
                  </el-date-picker>
              </div>
            </div>
            <div class="bgcolor">
              <label>状态</label>
              <el-select 
              class="status" 
              placeholder=""
              @focus="showErrprTipsSelect"
              :class="{redBorder : validation.hasError('addData.status')}"
              v-model="addData.status">
                <el-option v-for="item in contain" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </div>
          </el-col>

          <el-col :span="24">
            <div class="bgcolor">
              <label><el-checkbox v-model="addData.isReg"></el-checkbox></label>
              <span class="isGive">是否注册用户</span>
            </div>
          </el-col>

          <el-col :span="24">
            <div class="bgcolor longWidth">
              <label>备注</label>
              <el-input
              class="remark" 
               @focus="showErrprTipsTextArea"
               :class="{redBorder : validation.hasError('addData.remark')}"
                v-model="addData.remark"
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 10}"
                placeholder="">
              </el-input>
            </div>
          </el-col>

          <el-col :span="24">
            <div class="bgcolor longWidth">
              <label>关联角色</label>
              <div class="addZoo">
                  <a class="add" href="javascript:;" @click="dialogTableVisible = true">+</a>
                  <a class="addRole"  v-for="x in checked">{{x.displayName}}<i @click="addRole(x)" class="el-icon-error"></i></a>
              </div>
            </div>
            <el-dialog :visible.sync="dialogTableVisible">
                    <template slot="title">
                        <span style="float:left;">选取角色</span>
                        <div class="double_bt">
                            <template v-if="menuCheck">
                                <div class="menu_btn_choose" :class="{menu_btn_active : !menuCheck}" @click="showNodeadd">已选角色</div>
                                <div class="menu_btn_choose" :class="{menu_btn_active : menuCheck}">未选角色</div>
                            </template>
                            <template v-else>
                                <div class="menu_btn_choose" :class="{menu_btn_active : !menuCheck}">已选角色</div>
                                <div class="menu_btn_choose" :class="{menu_btn_active : menuCheck}" @click="showNodedel">未选角色</div>
                            </template>
                            
                        </div>
                    </template>
                    <el-col :span="24">
                        <!-- <span class="menu_item" v-for="x in checked"><a class="menu_add" @click="addRole(x)"><i class="el-icon-minus"></i></a>{{x.displayName}}</span>
                        <span class="menu_item" v-for="x in nochecked"><a class="menu_add" @click="delRole(x)"><i class="el-icon-plus"></i></a>{{x.displayName}}</span> -->
                        <div class="menu_item_wapper menu_item_add">
                            <span class="menu_item" v-for="x in checked"><a class="menu_add" @click="addRole(x)"><i class="el-icon-minus"></i></a>{{x.displayName}}</span>
                        </div>
                        <div class="menu_item_wapper menu_item_del">
                            <span class="menu_item" v-for="x in nochecked"><a class="menu_add" @click="delRole(x)"><i class="el-icon-plus"></i></a>{{x.displayName}}</span>
                        </div>
                        <!-- <el-col :span="24" class="load_more">
                            <button>加载更多</button>
                        </el-col> -->
                    </el-col>
                </el-dialog>
          </el-col>

          <!-- <el-col :span='24'>
            <div class="bgcolor longWidth">
                <label>&nbsp;</label>
                <el-table 
                v-loading="tableLoading"
                :data="tableData" 
                border 
                style="width: calc(100% - 82px)" 
                stripe 
                @selection-change="handleSelectionChange" 
                ref="multipleTable">
                    <el-table-column type="selection"></el-table-column>
                    <el-table-column label="序号">
                          <template slot-scope="scope">
                            {{scope.$index+1}}
                        </template>
                    </el-table-column>
                    <el-table-column prop="roleCode" label="角色编码"></el-table-column>
                    <el-table-column prop="displayName" label="角色名称"></el-table-column>
                    <el-table-column label="所属角色组(无字段)"></el-table-column>
                    <el-table-column prop="ouId" label="所属组织"></el-table-column>
                    <el-table-column prop="status" label="状态"></el-table-column>
                    <el-table-column label="操作">
                          <template slot-scope="scope">
                            <el-button type="text" size="small"  @click="delThis(scope.row)" >删除</el-button>
                            <el-button type="text" size="small"  @click="modify(scope.row)" >查看</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                    style="margin-top:20px;" 
                    class="text-right" 
                    background layout="total,prev, pager, next,jumper" 
                    @current-change="handleCurrentChange"
                    :current-page="pageIndex"
                    :page-size="oneItem"
                    :total="totalItem">
                </el-pagination>   
            </div>
          </el-col> -->

      </el-row>
  </div>
</template>

<script>
  export default({
    data(){
      return{
        dialogTableVisible:false,//控制对话框
        menuCheck:true,//未选功能，已选功能
         check:false,//是否授权
         contain: 
         [{ 
            value:0,
            label: '0'
         },{ 
            value:1,
            label: '1'
         }, {
            value:2,
            label: '2'
         }],
        addData:{
          "userCode": "",
          "displayName": "",
          "phoneNumber": "",
          "email": "",
          "userGroupId": "",
          "ouId": "",
          "status": "",
          "userType": "",
          "languageId": "",
          "isReg": false,
          "remark": "",
          "roleCodes": []
        },
        dateRange:[],//有效时间
        tableLoading:false,
        tableData:[],
        pageIndex:1,//分页的当前页码
        totalPage:0,//当前分页总数
        oneItem:10,//每页有多少条信息
        multipleSelection: [],//复选框选中数据
        page:1,//当前页
        totalItem:0,//总共有多少条消息
        checked:[],//已关联角色
        nochecked:[],//未关联角色
      }
    },
     validators: {
      'addData.userCode': function (value) {//用户编码
         return this.Validator.value(value).required().maxLength(50)
      },
      'addData.displayName': function (value) {//用户名称
         return this.Validator.value(value).required().maxLength(50);
      },
      'addData.phoneNumber': function (value) {//手机号码
         return this.Validator.value(value).required().maxLength(20);
      },
      'addData.email': function (value) {//邮箱
         return this.Validator.value(value).required().maxLength(200);
      },
      'addData.userGroupId': function (value) {//所属用户组
         return this.Validator.value(value).required().integer();
      },
      'addData.ouId': function (value) {//所属组织
          return this.Validator.value(value).required().integer();
      },
      'addData.userType': function (value) {//身份类型
         return this.Validator.value(value).required().integer();
      },
      'addData.languageId': function (value) {//语种
          return this.Validator.value(value).required().integer();
      },
      'addData.status': function (value) {//状态
         return this.Validator.value(value).required().integer();
      },
      'addData.remark': function (value) {//备注
         return this.Validator.value(value).required().maxLength(200);
      },
      'dateRange':function(value){
          return this.Validator.value(value).required();
      }

    },
    created:function(){       
      let _this=this;
      _this.loadTableData();
    },
    methods: {
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
      loadTableData(){//表格
          let _this=this;
          _this.tableLoading=true
          _this.$axios.gets('/api/services/app/Role/GetAll',{SkipCount:(_this.page-1)*_this.oneItem,MaxResultCount:_this.oneItem})
          .then(function(res){ 
            //   _this.tableData=res.result.items;
              _this.totalItem=res.result.totalCount
              _this.totalPage=Math.ceil(res.result.totalCount/_this.oneItem);
              _this.tableLoading=false;
              _this.nochecked=res.result.items;
              },function(res){
              _this.tableLoading=false;
          })
      },
      handleCurrentChange(val) {//页码改变
            let _this=this;
            _this.page=val;
            _this.loadTableData();
      },
      handleSelectionChange(val) {//点击复选框选中的数据
          this.multipleSelection = val;
      },
      delRow(){
        let _this=this;
        if(_this.multipleSelection.length>0){//表格
            for(let i=0;i<_this.multipleSelection.length;i++){
                _this.$axios.deletes('/api/services/app/Role/Delete',{id:_this.multipleSelection[i].id})
                .then(function(res){
                    _this.open('删除成功','el-icon-circle-check','successERP');
                    _this.loadTableData();
                },function(res){
                    _this.open('删除失败','el-icon-error','faildERP');
                })
            }
        };
      },
      back(row){
          this.$store.state.url='/user/userList/default'
          this.$router.push({path:this.$store.state.url})//点击切换路由OuManage
      },
      see(row){
          // this.$store.state.url='/OuManage/OuManageSee/'+row.id
          // this.$router.push({path:this.$store.state.url})//点击切换路由
      },
      delThis(row){//删除行
          let _this=this;
          _this.$axios.deletes('/api/services/app/Role/Delete',{id:row.id})
          .then(function(res){
              _this.open('删除成功','el-icon-circle-check','successERP');
              _this.loadTableData();
          },function(res){
          })
      },
      showNodeadd(){
            let _this=this;
            _this.menuCheck=!_this.menuCheck
            $('.menu_item_add').css('display','block')
            $('.menu_item_del').css('display','none')
        },
        showNodedel(){
            let _this=this;
            _this.menuCheck=!_this.menuCheck
            $('.menu_item_add').css('display','none')
            $('.menu_item_del').css('display','block')
        },
        addRole(x){
            let _this=this;
            let flag=false;
            if(_this.nochecked.length<=0){
                flag=true;
            }else{
                flag=false;
                $.each(_this.nochecked,function(index,value){
                    if(x==value){
                        flag=false;
                    }else{
                        flag=true;
                    }
                })
            }
            $.each(_this.checked,function(index,value){
                if(x==value){
                    _this.checked.splice(index,1)
                }
            })
            if(flag){
                _this.nochecked.push(x);
            }
        },
        delRole(x){
            let _this=this;
            let flag=false;
            if(_this.checked.length<=0){
                flag=true;
            }else{
                flag=false;
                $.each(_this.checked,function(index,value){
                    if(x==value){
                        flag=false;
                    }else{
                        flag=true;
                    }
                })
            }
            $.each(_this.nochecked,function(index,value){
                if(x==value){
                    _this.nochecked.splice(index,1)
                }
            })
            if(flag){
                _this.checked.push(x);
            }
        },
        save(){
            let _this=this;
            _this.$validate()
            .then(function (success) {
                if (success) {
                    let roles=[];
                    $.each(_this.checked,function(index,value){
                        roles.push(value.roleCode)
                    })
                    _this.addData.roleCodes=roles;
                    _this.addData.effectiveStart=_this.dateRange[0];
                    _this.addData.effectiveEnd=_this.dateRange[1];
                    _this.$axios.posts('/api/services/app/User/Create',_this.addData)
                    .then(function(res){
                        _this.addData.id=res.result.id;
                        _this.$store.state.url='/user/userModify/'+res.result.id
                        _this.$router.push({path:_this.$store.state.url})
                        _this.open('保存成功','el-icon-circle-check','successERP');
                    },function(res){
                        _this.open('保存失败','el-icon-error','faildERP');
                    })
                }
            });
        },
    }

})
</script>



<style scoped>
.userDetail  .errorTips{
    margin-bottom: 10px;
    margin-top: -10px;
}
.block{
    display: none;
}
 .userDetail .el-row{
    background-color: #fff;
    padding-top: 15px;
  }
 .userDetail .el-row:first-child{
   padding: 7px 0;
   border-bottom: 1px solid #e4e4e4;
  }
  .userDetail .bgcolor .isGive{
    display: block;
    float: left;
    height: 100%;
    line-height: 35px;
  }
.userDetail .bgcolor.longWidth{
    width: 100%;
    height:auto;
  }
 .userDetail .bgcolor.longWidth .el-textarea{
   width: 436px;
   font-size: 12px;
 } 
 .userDetail .bgcolor.longWidth .addZoo{
   float: left;
   width: calc(100% - 82px)
 }
.userDetail .bgcolor.longWidth .add{
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
.userDetail .bgcolor.longWidth .addRole{
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
.userDetail .bgcolor.longWidth .add:hover{
    background-color: #354052;
}
.userDetail .bgcolor.longWidth .addRole i{
  position: absolute;
  right: -4px;
  top: -4px;
  color: #cccccc;
}
.userDetail .bgcolor.longWidth .addRole:hover i{
  color:#f66;
}
/* 头部已选功能，未选功能 */
.double_bt{
    width: 200px;
    height: 30px;
    border: 1px solid #6699FF;
    color: #6699FF;
    background-color: transparent;
    font-size: 12px;
    border-radius: 3px;
    margin: auto;
}
.menu_btn_choose{
    width: 100px;
    height: 30px;
    float: left;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
}
.menu_btn_active{
    background-color: #6699FF;
    color: #fff;
    
}
.show{
    display: block;
}
.menu_box{
    display: none;
}
.menu_item_wapper{
    display: block;
}
.menu_item_del{
    display: block;
}
.menu_item_add{
    display: none;
}
/* .menu_item_del .menu_item{
    display: block;
}
.menu_item_add .menu_item{
    display: none;
} */

.load_more{
    text-align: center;
}
.menu_item{
    text-align: center;
    display: block;
    width: 190px;
    height: 60px;
    line-height: 60px;
    font-size: 13px;
    color: #666666;
    position: relative;
    float: left;
    margin-right: 20px;
    border: 1px solid #33CCCC;
    border-radius: 5px;
    background-color: transparent;
    margin-bottom: 15px;
}
.menu_add{
    text-align: center;
    display: block;
    width: 24px;
    height: 24px;
    position: absolute;
    left: -12.5px;
    top: 16px;
    background-color: #69f;
    color: #fff;
    font-size: 24px;
    border-radius: 50%;
    line-height: 24px;
    cursor: pointer;
}
.menu_add:hover{
    opacity: 0.9;
}
</style>

<style>
.userDetail .el-dialog__headerbtn{
    top:3px;
    font-size:50px;
}
.userDetail .el-dialog__body{
  overflow: hidden;
}
</style>
