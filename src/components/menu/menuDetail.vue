<template>
    <div class="menuDetail">
        <el-row>
            <el-col :span="24">
                <button @click="back" class="goBack"><i class="fa fa-angle-left" aria-hidden="true"></i> </button>
                <span class="pageName">添加模块(菜单)</span>
            </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="bgcolor"><label>菜单编码</label><el-input v-model="addData.moduleCode"  placeholder="请输入菜单编码"></el-input></div>
            <div class="bgcolor"><label>菜单名称</label><el-input v-model="addData.moduleName"  placeholder="请输入菜单名称"></el-input></div>
            <div class="bgcolor"><label>图标</label><el-input v-model="addData.ico"  placeholder="请输入图标"></el-input></div>
            <div class="bgcolor"><label>功能模块ID全路径</label><el-input v-model="addData.moduleFullPathId"></el-input></div>
            <div class="bgcolor"><label>功能模块名称全路径</label><el-input v-model="addData.moduleFullPathName"></el-input></div>
            <div class="bgcolor"><label>排序</label><el-input v-model="addData.seq"></el-input></div>
            <div class="bgcolor">
                <label>语言</label>
                <el-input  placeholder="无字段">
                    <i slot="suffix" class="el-icon-more" @click="goLanguage" style="cursor:pointer"></i>
                </el-input>
            </div>
            <div class="bgcolor">
                <label>系统ID</label>
                <el-input v-model="addData.systemId"></el-input>
                <!-- <el-select v-model="addData.systemId" placeholder="请输入系统ID">
                  <el-option v-for="item in contain" :key="item.valueContain" :label="item.label" :value="item.valueContain"></el-option>
              </el-select> -->
            </div>
            <div class="bgcolor">
              <label>上级菜单</label>
              <el-input v-model="addData.moduleParentId"></el-input>
              <!-- <el-select v-model="addData.moduleParentId ">
                  <el-option v-for="item in contain" :key="item.valueContain" :label="item.label" :value="item.valueContain"></el-option>
              </el-select> -->
            </div>
            <div class="bgcolor moreWidth">
              <label>web地址</label>
              <el-input v-model="addData.url"  placeholder="请输入菜单编码"></el-input>
            </div>
            <div class="bgcolor">
              <label>状态</label>
              <el-select v-model="valueContain" placeholder="无字段">
                <el-option v-for="item in contain" :key="item.valueContain" :label="item.label" :value="item.valueContain"></el-option>
              </el-select>
            </div>
          </el-col>
          <div class="bgcolor"><label>子系统</label><el-input placeholder="无字段"></el-input></div>
          <div class="bgcolor"><label>是否在最底层</label><el-checkbox class="w_auto" v-model="addData.moduleIsBottom"></el-checkbox></div>
            <el-col :span="24">
                <div class="bgcolor longWidth">
                <label>备注</label>
                <el-input
                    type="textarea"
                    :autosize="{ minRows: 4, maxRows: 10}"
                    placeholder="无字段">
                </el-input>
                </div>
            </el-col>

            <el-col :span="24">
                <div class="bgcolor longWidth">
                    <label>功能权限</label>
                    <div class="addZoo">
                        <a class="add" href="javascript:;" @click="dialogTableVisible = true">+</a>
                    </div>
                </div>
                <el-dialog :visible.sync="dialogTableVisible">
                    <template slot="title">
                        <span style="float:left;">添加功能</span>
                        <div class="double_bt">
                            <template v-if="menuCheck">
                                <div class="menu_btn_choose" :class="{menu_btn_active : !menuCheck}" @click="menuCheck=!menuCheck">已选功能</div>
                                <div class="menu_btn_choose" :class="{menu_btn_active : menuCheck}">未选功能</div>
                            </template>
                            <template v-else>
                                <div class="menu_btn_choose" :class="{menu_btn_active : !menuCheck}">已选功能</div>
                                <div class="menu_btn_choose" :class="{menu_btn_active : menuCheck}" @click="menuCheck=!menuCheck">未选功能</div>
                            </template>
                            
                        </div>
                    </template>
                    <el-col :span="6" class="dialog_ dialog_l">
                        <el-col :span="24">
                            <el-input placeholder="请输入内容" class="menu_search">
                                <i slot="prefix" class="el-input__icon el-icon-search"></i>
                            </el-input>
                        </el-col>
                        <el-col :span="24" class="mt_20">
                            <el-tree
                            :data="componyTree"
                            :props="defaultProps"
                            node-key="treeId"
                            default-expand-all
                            :expand-on-click-node="true">
                            </el-tree>
                        </el-col>
                        
                    </el-col>
                    <el-col :span="18" class="dialog_ dialog_r">
                        <button class="menu_item"><span class="menu_add">+</span>新增</button>
                        <button class="menu_item"><span class="menu_add">+</span>删除</button>
                        <button class="menu_item"><span class="menu_add">+</span>导入</button>
                        <button class="menu_item"><span class="menu_add">+</span>导出</button>
                        <button class="menu_item"><span class="menu_add">+</span>审核</button>
                        <button class="menu_item"><span class="menu_add">+</span>修改</button>
                        <button class="menu_item"><span class="menu_add">+</span>保存</button>
                        <el-col :span="24" class="load_more">
                            <button>加载更多</button>
                        </el-col>
                    </el-col>
                </el-dialog>
            </el-col>
             <el-col :span="24">
                <div class="bgcolor longWidth">
                    <label class="h_35"></label>
                    <div>
                        <button class="addRole">导出<i class="el-icon-error"></i></button>
                        <button class="addRole">审核<i class="el-icon-error"></i></button>
                        <button class="addRole">添加<i class="el-icon-error"></i></button>
                    </div>
                </div>
            </el-col>
            <el-col :span="24">
                <div class="bgcolor longWidth">
                    <label class="h_35"></label>
                    <div>
                        <button @click="save" class="add_m_bt">提交</button>
                        <button class="add_m_bt">返回</button>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  export default({
    data(){
        return{
            isSave:true,//是否可以保存，不能保存就是修改
            menuCheck:true,
            dialogTableVisible:false,//控制对话框
            addData:{
                "moduleParentId": 0,
                "moduleCode": "string",
                "moduleName": "仓库管理",
                "url": "string",
                "ico": "string",
                "systemId": 0,
                "moduleIsBottom": true,
                "moduleFullPathId": "string",
                "moduleFullPathName": "string",
                "seq": 0
            },//新增
            modifyData:{
                // "id": 0,
                // "moduleParentId": 0,
                // "moduleCode": "string",
                // "moduleName": "string",
                // "url": "string",
                // "ico": "string",
                // "systemId": 0,
                // "moduleIsBottom": true,
                // "moduleFullPathId": "string",
                // "moduleFullPathName": "string",
                // "seq": 0
            },//修改
            valueContain:'',
            contain: [{ 
                valueContain:'1',
                label: '腾讯'
            }, {
                valueContain:'2',
                label: '阿里'
            }],
            componyTree:  [{
                treeId: 1,
                label: '集团名',
                children:[{
                    treeId: 2,
                    label: '测试1',
                    children:[]
                },
                {
                    treeId: 3,
                    label: '测试2',
                    children:[]
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
        }
    },
    methods:{
        back(){
            this.$store.state.url='/menu/menuList/default'
            this.$router.push({path:this.$store.state.url})//点击切换路由
        },
        goLanguage(){
            this.$store.state.url='/menu/addLangulage/default'
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
         save(){
            let _this=this;
            if(_this.isSave){
                 _this.$axios.posts('/api/services/app/ModuleManagement/Create',_this.addData).then(function(res){
                    _this.isSave=false;
                    _this.addData.id=res.result.id;
                    _this.open('保存成功','el-icon-circle-check','successERP');
                },function(res){
                    _this.open('保存失败','el-icon-error','faildERP');
                })
            }else{
                console.log(_this.addData)
                 _this.$axios.puts('/api/services/app/ModuleManagement/Update',_this.addData).then(function(res){  
                    _this.isSave=false;
                    _this.open('修改成功','el-icon-circle-check','successERP');
                },function(res){
                    _this.open('修改失败','el-icon-error','faildERP');
                })
            }
        },
        saveAdd(){
             let _this=this;
             if(_this.isSave){
                  _this.$axios.posts('/api/services/app/OuManagement/Create',_this.addData).then(function(res){
                    _this.open('保存并新增成功','el-icon-circle-check','successERP');
                    _this.isSave=true;
                    _this.clearData();
                },function(res){
                    _this.open('保存并新增失败','el-icon-error','faildERP');
                })
             }else{
                  _this.open('保存并新增失败','el-icon-error','faildERP');
             }
           
        },
        newAdd(){
            this.isSave=true;
            this.clearData();
            this.open('新增成功','el-icon-circle-check','successERP');
        },
        clearData(){
            this.creatorUser=[];
            this.auditInfo={
                id:'',
                lastModifierUser:'',
                isDeleted:false,
                deleterUserId:'',
                deletionTime:'',
                lastModificationTime:'',
                lastModifierUserId:'',
                creationTime:'',
                creatorUserId:'',
                isCompany : false,
                isAdministration :false,
                isFinance: false,
                isCapital :false,
                isPurchase :false,
            };
            this.addData={
                groupId:1,//集团ID
                ouCode: '',//组织代码存在 
                ouName: '' ,//组织名称存在
                foreignName: '' ,//外文名称
                mnemonic: '',//助记码
                ouParentid: '' ,//上级组织ID存在
                accountPeriodId:'' ,//会计期间ID
                baseCurrencyId: '',//本位币种id存在
                companyOuId: '',//所属公司ID存在
                contactPerson:'',//联系人存在
                phone:'',//电话存在
                address:'' ,//地址存在
                areaId: '',//行政区域ID
                entityProperty : '',//实体属性
                status: '',//启用状态存在
                remark: '' ,//备注存在
                basOuTypes: [0],//组织职能
                isGroupCompany:false ,//
                ouCompanyParentid: '' ,//上级公司组织ID
                legalPerson:'',//法人代表
                companyStatus:'' ,//公司启用状态
                regtime:''//公司成立时间
            };
        }
    
    }

  })
</script>



<style scoped>
.w_auto{
    width: auto;
}
.load_more{
    position: absolute;
    bottom: 40px;
    left: 0;
    text-align: center;
}
.load_more button{
    width: 300px;
    height: 47px;
    border: none;
    background-color: #f4f4f4;
    border-radius: 47px;
    cursor: pointer;
}
.mt_20{
    margin-top: 20px;
}
.menu_search{
    margin: auto;
}
.h_35{
    height: 35px    ;
}
.add_m_bt{
    border: none;
    color: #fff;
    border-radius: 3px;
    width: 120px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 12px;
    background-color: #C9C9C9;
    float: left;
    margin-right: 10px;
    cursor: pointer;
}
.add_m_bt:hover{
    background-color: #39CA77;
}
.dialog_{
    min-height: 540px;
    padding: 15px 20px;
    position: relative;
}
.dialog_l{
    background-color: #F9F9F9;
}
.dialog_r{
    background-color: #fff;
}
 .menuDetail .el-row{
    background-color: #fff;
    padding-top: 15px;
  }
 .menuDetail .goBack{
     border: none;
     background-color: transparent; 
     color: #dcdcdc;
     font-size: 25px;
     cursor: pointer;
     display: block;
     float: left;
     height: 31px;
     width: 32px;
 }
 .menuDetail .bgcolor.moreWidth{
     width: 505px;
 }
  .menuDetail .bgcolor.moreWidth .el-input{
      width: 423px;
  }
 .menuDetail .pageName{
     display: block;
     float: left;
     height: 31px;
     line-height: 31px;
     font-family: 'microsoft yahei';
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
 }
 .menuDetail .el-row:first-child{
   padding: 7px 0;
   border-bottom: 1px solid #e4e4e4;
  }
  .menuDetail .bgcolor .isGive{
    display: block;
    float: left;
    height: 100%;
    line-height: 35px;
  }
.menuDetail .bgcolor.longWidth{
    width: 100%;
    height:auto;
    overflow: visible;
  }
 .menuDetail .bgcolor.longWidth .el-textarea{
   width: 423px;
   font-size: 12px;
 } 
 
 .menuDetail .bgcolor.longWidth .addZoo{
   float: left;
   width: calc(100% - 82px)
 }
.menuDetail .bgcolor.longWidth .add{
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
.menuDetail .bgcolor.longWidth .add:hover{
    background-color: #354052;
}
.menuDetail .bgcolor.longWidth .addRole{
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
.menuDetail .bgcolor.longWidth .addRole i{
  position: absolute;
  right: -4px;
  top: -4px;
  color: #cccccc;
}
.menuDetail .bgcolor.longWidth .addRole:hover i{
  color:#f66;
}
/* 右侧选项 */
.menu_item{
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
    display: block;
    width: 24px;
    height: 24px;
    position: absolute;
    left: -12.5px;
    top: 16px;
    background-color: #69f;
    color: #fff;
    font-size: 40px;
    border-radius: 50%;
    line-height: 24px;
    cursor: pointer;
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
</style>
<style>
.menuDetail .el-tree-node__content{
    background-color:#F9F9F9;
}
.menuDetail .el-dialog__headerbtn{
    top:3px;
    font-size:50px;
}
</style>
