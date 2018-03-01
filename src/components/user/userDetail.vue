<template>
    <div class="userDetail">
        <el-row>
            <el-col :span="24">
              <button @click="back" class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
              <!-- <button class="erp_bt bt_add"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button> -->
              <button @click="delRow" class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>    
              <button class="erp_bt bt_save"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>
              <button class="erp_bt bt_cancel"><div class="btImg"><img src="../../../static/image/common/bt_cancel.png"></div><span class="btDetail">取消</span></button>
              <button class="erp_bt bt_print"><div class="btImg"><img src="../../../static/image/common/bt_print.png"></div><span class="btDetail">打印</span></button>
            </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="bgcolor"><label><small>*</small>用户编码</label><el-input v-model="addData.userCode" placeholder=""></el-input></div>
            <div class="bgcolor"><label><small>*</small>用户名称</label><el-input v-model="addData.displayName"  placeholder=""></el-input></div>
            <div class="bgcolor"><label><small>*</small>手机号码</label><el-input v-model="addData.phoneNumber"  placeholder=""></el-input></div>
            <div class="bgcolor"><label><small>*</small>邮箱</label><el-input v-model="addData.email"  placeholder=""></el-input></div>
            <div class="bgcolor">
              <label><small>*</small>所属用户组</label>
              <el-select v-model="addData.userGroupId">
                  <el-option v-for="item in contain" :key="item.valueContain" :label="item.label" :value="item.valueContain"></el-option>
              </el-select>
            </div>
            <div class="bgcolor">
              <label><small>*</small>所属组织</label>
              <el-select v-model="addData.ouId ">
                <el-option v-for="item in contain" :key="item.valueContain" :label="item.label" :value="item.valueContain"></el-option>
              </el-select>
            </div>
            <div class="bgcolor">
              <label><small>*</small>身份类型</label>
              <el-select v-model="addData.userType">
                <el-option v-for="item in contain" :key="item.valueContain" :label="item.label" :value="item.valueContain"></el-option>
              </el-select>
            </div>
            <div class="bgcolor">
              <label><small>*</small>语种</label>
              <el-select v-model="addData.languageId">
                <el-option v-for="item in contain" :key="item.valueContain" :label="item.label" :value="item.valueContain"></el-option>
              </el-select>
            </div>
            <div class="bgcolor">
              <label><small>*</small>有效时间</label>
               <div class="rangeDate">
                  <el-date-picker
                  v-model="addData.valueContain"
                  type="daterange"
                  range-separator="to"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                  </el-date-picker>
              </div>
            </div>
            <div class="bgcolor">
              <label>状态</label>
              <el-select v-model="addData.status">
                <el-option v-for="item in contain" :key="item.valueContain" :label="item.label" :value="item.valueContain"></el-option>
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
                v-model="addData.remark"
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 10}"
                placeholder="请输入内容">
              </el-input>
            </div>
          </el-col>

          <el-col :span="24">
            <div class="bgcolor longWidth">
              <label>角色</label>
              <div class="addZoo">
                  <a class="add" href="javascript:;">+</a>
              </div>

            </div>
          </el-col>

          <el-col :span='24'>
              <el-table 
              v-loading="tableLoading"
              :data="tableData" 
              border 
              style="width: 100%" 
              stripe 
              @selection-change="handleSelectionChange" 
              ref="multipleTable">
                  <el-table-column type="selection"></el-table-column>
                  <el-table-column label="序号">
                        <template slot-scope="scope">
                          {{scope.$index+1}}
                      </template>
                  </el-table-column>
                  <el-table-column prop="ouCode" label="角色编码"></el-table-column>
                  <el-table-column prop="ouFullname" label="角色名称"></el-table-column>
                  <el-table-column prop="ouName" label="所属角色组"></el-table-column>
                  <el-table-column prop="ouParentName" label="所属组织"></el-table-column>
                  <el-table-column prop="companyOuId" label="状态"></el-table-column>
                  <el-table-column label="操作">
                        <template slot-scope="scope">
                          <el-button type="text" size="small"  @click="delThis(scope.row)" >删除</el-button>
                          <el-button type="text" size="small"  @click="modify(scope.row)" >查看</el-button>
                          <!-- <el-button type="text" size="small"  @click="see(scope.row)" >查看</el-button> -->
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
          </el-col>

        </el-row>
    </div>
</template>

<script>
  export default({
    data(){
      return{
         valueDate:'',
         check:false,//是否授权
         date:'',//有效时间
         valueContain:'',
         contain: 
         [{ 
            valueContain:'选项1',
            label: '腾讯'
         }, {
            valueContain:'选项2',
            label: '阿里'
         }],
        addData:[],
        tableLoading:false,
        tableData:[],
        pageIndex:1,//分页的当前页码
        totalPage:0,//当前分页总数
        oneItem:10,//每页有多少条信息
        multipleSelection: [],//复选框选中数据
        page:1,//当前页
        totalItem:0,//总共有多少条消息
      }
    },
    created:function(){       
      let _this=this;
      _this.loadTableData();
    },
    methods: {
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
          _this.$axios.gets('/api/services/app/OuManagement/GetAll',{SkipCount:(_this.page-1)*_this.oneItem,MaxResultCount:_this.oneItem}).then(function(res){ 
              _this.tableData=res.result.items;
              _this.totalItem=res.result.totalCount
              _this.totalPage=Math.ceil(res.result.totalCount/_this.oneItem);
              _this.tableLoading=false;
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
                _this.$axios.deletes('/api/services/app/OuManagement/Delete',{id:_this.multipleSelection[i].id})
                .then(function(res){
                    _this.loadTableData();
                    _this.open('删除成功','el-icon-circle-check','successERP');
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
          _this.$axios.deletes('/api/services/app/AreaManagement/Delete',{id:row.id})
          .then(function(res){
              _this.loadTableData();
          },function(res){
          })
      },
    }

})
</script>



<style scoped>
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
</style>

<style>

</style>
