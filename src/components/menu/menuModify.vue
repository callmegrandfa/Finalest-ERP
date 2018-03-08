<template>
    <div class="menuModify">
        <el-row>
            <el-col :span="24">
                <button @click="back" class="goBack"><i class="fa fa-angle-left" aria-hidden="true"></i> </button>
                <span class="pageName">添加模块(菜单)</span>
            </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="tipsWrapper" name="moduleCode">
                <div class="errorTips" :class="{block : !validation.hasError('addData.moduleCode')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.moduleCode') }}</p>
                </div>
            </div>
             <div class="tipsWrapper" name="moduleName">
                <div class="errorTips" :class="{block : !validation.hasError('addData.moduleName')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.moduleName') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="ico">
                <div class="errorTips" :class="{block : !validation.hasError('addData.ico')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.ico') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="moduleFullPathId">
                <div class="errorTips" :class="{block : !validation.hasError('addData.moduleFullPathId')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.moduleFullPathId') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="moduleFullPathName">
                <div class="errorTips" :class="{block : !validation.hasError('addData.moduleFullPathName')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.moduleFullPathName') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="seq">
                <div class="errorTips" :class="{block : !validation.hasError('addData.seq')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.seq') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="systemId">
                <div class="errorTips" :class="{block : !validation.hasError('addData.systemId')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.systemId') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="moduleParentId">
                <div class="errorTips" :class="{block : !validation.hasError('addData.moduleParentId')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.moduleParentId') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="url">
                <div class="errorTips" :class="{block : !validation.hasError('addData.url')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.url') }}</p>
                </div>
            </div>
            

            <div class="bgcolor">
                <label>菜单编码</label>
                <el-input 
                class="moduleCode" 
                @focus="showErrprTips"
                :class="{redBorder : validation.hasError('addData.moduleCode')}" 
                v-model="addData.moduleCode"  
                placeholder=""></el-input>
            </div>
            <div class="bgcolor">
                <label>菜单名称</label>
                <el-input 
                class="moduleName" 
                @focus="showErrprTips"
                :class="{redBorder : validation.hasError('addData.moduleName')}" 
                v-model="addData.moduleName"  
                placeholder=""></el-input>
            </div>
            <div class="bgcolor">
                <label>图标</label>
                <el-input 
                class="ico" 
                @focus="showErrprTips"
                :class="{redBorder : validation.hasError('addData.ico')}" 
                v-model="addData.ico"  
                placeholder=""></el-input>
            </div>
            <div class="bgcolor">
                <label>功能模块ID全路径</label>
                <el-input 
                class="moduleFullPathId" 
                @focus="showErrprTips"
                :class="{redBorder : validation.hasError('addData.moduleFullPathId')}" 
                v-model="addData.moduleFullPathId" 
                placeholder=""></el-input>
            </div>
            <div class="bgcolor">
                <label>功能模块名称全路径</label>
                <el-input 
                class="moduleFullPathName" 
                @focus="showErrprTips"
                :class="{redBorder : validation.hasError('addData.moduleFullPathName')}" 
                v-model="addData.moduleFullPathName" 
                placeholder=""></el-input>
            </div>
            <div class="bgcolor">
                <label>排序</label>
                <el-input 
                class="seq" 
                @focus="showErrprTips"
                :class="{redBorder : validation.hasError('addData.seq')}" 
                v-model="addData.seq" 
                placeholder=""></el-input>
            </div>
            <div class="bgcolor">
                <label>语言</label>
                <el-input  placeholder="无字段">
                    <i slot="suffix" class="el-icon-more" @click="goLanguage" style="cursor:pointer"></i>
                </el-input>
            </div>
            <div class="bgcolor">
                <label>系统ID</label>
                <el-input 
                class="systemId" 
                @focus="showErrprTips"
                :class="{redBorder : validation.hasError('addData.systemId')}" 
                v-model="addData.systemId" 
                placeholder=""></el-input>
            </div>
            <div class="bgcolor">
              <label>上级菜单</label>
              <!-- <el-cascader
                placeholder="试试搜索：指南"
                :options="treeData"
                :props="Props"
                filterable
                change-on-select
            ></el-cascader> -->
                <el-select 
                class="moduleParentId" 
                @focus="showErrprTipsSelect"
                :class="{redBorder : validation.hasError('addData.moduleParentId')}" 
                v-model="addData.moduleParentId"  
                placeholder="">
                    <el-option v-for="item in ParentId" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="bgcolor moreWidth">
                <label>web地址</label>
                <el-input 
                class="url" 
                @focus="showErrprTips"
                :class="{redBorder : validation.hasError('addData.url')}" 
                v-model="addData.url"  
                placeholder=""></el-input>
            </div>
            <div class="bgcolor">
                <label>状态</label>
                <el-input 
                placeholder="无字段"></el-input>
                <!-- <el-select 
                placeholder="无字段">
                    <el-option v-for="item in contain" :key="item.valueContain" :label="item.label" :value="item.valueContain"></el-option>
                </el-select> -->
            </div>
          </el-col>
          <div class="bgcolor">
              <label>子系统</label>
              <el-cascader
                placeholder="无字段"
                :options="treeData"
                :props="Props"
                filterable
                change-on-select
            ></el-cascader>
               <!-- <el-select v-model="valueContain" placeholder="无字段">
                  <el-option v-for="item in contain" :key="item.valueContain" :label="item.label" :value="item.valueContain"></el-option>
              </el-select> -->
              </div>
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
                                <div class="menu_btn_choose" :class="{menu_btn_active : !menuCheck}" @click="showNodeadd">已选功能</div>
                                <div class="menu_btn_choose" :class="{menu_btn_active : menuCheck}">未选功能</div>
                            </template>
                            <template v-else>
                                <div class="menu_btn_choose" :class="{menu_btn_active : !menuCheck}">已选功能</div>
                                <div class="menu_btn_choose" :class="{menu_btn_active : menuCheck}" @click="showNodedel">未选功能</div>
                            </template>
                        </div>
                    </template>
                    <el-col :span="6" class="dialog_ dialog_l">
                        <el-col :span="24">
                            <el-input placeholder="" class="menu_search">
                                <i slot="prefix" class="el-input__icon el-icon-search"></i>
                            </el-input>
                        </el-col>
                        <el-col :span="24" class="mt_20">
                            <el-tree
                            :data="componyTree"
                            :props="defaultProps"
                            node-key="id"
                            default-expand-all
                            @node-click="nodeClick"
                            :expand-on-click-node="false">
                            </el-tree>
                        </el-col>
                        
                    </el-col>
                    <el-col :span="18" class="dialog_ dialog_r">
                         <div class="menu_box" v-for="i in componyTree" :moduleName="i.displayName">
                            <p>{{i.displayName}}</p>
                            <div class="menu_item_wapper menu_item_add">
                                <span class="menu_item" v-for="x in i.children" :permissionName="x.permissionName"><a class="menu_add" @click="addPermission(x)"><i class="el-icon-minus"></i></a>{{x.displayName}}</span>
                            </div>
                            <div class="menu_item_wapper menu_item_del">
                                <span class="menu_item" v-for="x in i.children" :permissionName="x.permissionName"><a class="menu_add" @click="delPermission(x)"><i class="el-icon-plus"></i></a>{{x.displayName}}</span>
                            </div>
                        </div>
                        <!-- <el-col :span="24" class="load_more">
                            <button>加载更多</button>
                        </el-col> -->
                    </el-col>
                </el-dialog>
            </el-col>
             <el-col :span="24">
                <div class="bgcolor longWidth">
                    <label class="h_35"></label>
                    <div>
                        <a class="addRole"  v-for="x in checked" :permissionName="x.permissionName">{{x.displayName}}<i  @click="addPermission(x)" class="el-icon-error"></i></a>
                    </div>
                </div>
            </el-col>
            <el-col :span="24">
                <div class="bgcolor longWidth">
                    <label class="h_35"></label>
                    <div>
                        <button @click="save" class="add_m_bt">提交</button>
                        <button @click="back" class="add_m_bt">返回</button>
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
            // isSave:true,//是否可以保存，不能保存就是修改
            menuCheck:true,
            dialogTableVisible:false,//控制对话框
            addData:{
                // "moduleParentId": 0,
                // "moduleCode": "string",
                // "moduleName": "仓库管理",
                // "url": "string",
                // "ico": "string",
                // "systemId": 0,
                // "moduleIsBottom": true,
                // "moduleFullPathId": "string",
                // "moduleFullPathName": "string",
                // "seq": 0
            },
            valueContain:'',
            ParentId: [{ 
                value:'0',
                label: '无'
            },{ 
                value:'5',
                label: '常用功能'
            },{ 
                value:'6',
                label: '租户管理(父)'
            },{ 
                value:'8',
                label: '采购管理'
            },{ 
                value:'9',
                label: '租户管理(子)'
            },{ 
                value:'10',
                label: '集团管理(父)'
            },{ 
                value:'11',
                label: '集团管理(子)'
            },{ 
                value:'12',
                label: '组织管理'
            }],
            contain: [{ 
                valueContain:'1',
                label: '腾讯'
            }, {
                valueContain:'2',
                label: '阿里'
            }],
            contain: [{ 
                valueContain:'1',
                label: '腾讯'
            }, {
                valueContain:'2',
                label: '阿里'
            }],
            componyTree:[],
            defaultProps: {
                children: 'children',
                label: 'displayName',
                value:'permissionName'
            },
            treeData:[],
            Props: {
                children: 'childNodes',
                value: 'id',
                label:'moduleName'
            },
            checked:[],//展示所有权限
            nochecked:[],//
            nodeName:'',
            allNode:[],
        }
    },
    validators: {
      'addData.moduleCode': function (value) {//菜单编码
         return this.Validator.value(value).required().maxLength(50)
      },
      'addData.moduleName': function (value) {//菜单名称
         return this.Validator.value(value).required().maxLength(50);
      },
      'addData.ico': function (value) {//图标
         return this.Validator.value(value).required().maxLength(200);
      },
      'addData.moduleFullPathId': function (value) {//功能模块ID全路径
         return this.Validator.value(value).required().maxLength(2000);
      },
      'addData.moduleFullPathName': function (value) {//功能模块名称全路径
         return this.Validator.value(value).required().maxLength(2000);
      },
      'addData.seq': function (value) {//排序
          return this.Validator.value(value).required().integer();
      },
      'addData.systemId': function (value) {//系统ID
         return this.Validator.value(value).required().integer();
      },
      'addData.moduleParentId': function (value) {//上级菜单
          return this.Validator.value(value).required().integer();
      },
      'addData.url': function (value) {//web地址
         return this.Validator.value(value).required().maxLength(1000);
      }
    },
    created:function(){
        let _this=this;
            _this.loadParent()
            _this.$axios.gets('/api/services/app/ModuleManagement/Get',{id:_this.$route.params.id})
            .then(function(res){
                if(res.result.permissionDtos!=null&&res.result.permissionDtos.length>0){
                    _this.checked=res.result.permissionDtos;
                }
                _this.addData={
                    "id": res.result.id,
                    "moduleParentId": res.result.moduleParentId,
                    "moduleCode": res.result.moduleCode,
                    "moduleName": res.result.moduleName,
                    "url": res.result.url,
                    "ico": res.result.ico,
                    "systemId": res.result.systemId,
                    "moduleIsBottom": res.result.moduleIsBottom,
                    "moduleFullPathId": res.result.moduleFullPathId,
                    "moduleFullPathName": res.result.moduleFullPathName,
                    "seq": res.result.seq,
                }
                _this.loadPermission();
            },function(res){
            })
       
    },
    mounted:function(){
        let _this=this;
    },
    methods:{
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
        loadParent(){
            let _this=this;
            _this.$axios.gets('/api/services/app/ModuleManagement/GetModulesTree')
            .then(function(res){
                _this.treeData=res
            },function(res){
            })
        },
        uniqueArray(array1, array2){//求差集
            var result = [];
            for(var i = 0; i < array1.length; i++){
                var item = array1[i];
                var repeat = false;
                for (var j = 0; j < array2.length; j++) {
                    if (array1[i].permissionName == array2[j].permissionName) {//唯一key
                        repeat = true;
                        break;
                    }
                }
                if (!repeat) {
                    result.push(item);
                }
            }
            return result;
        },
        loadPermission(){
            let _this=this;
            _this.$axios.gets('/api/services/app/PermissionManagement/GetPermissionTree')
            .then(function(res){
                _this.componyTree=res.items
                _this.nochecked=[]
            if(res.items.length>0){//获取所有的权限子节点，存储起来
                for(let i=0;i<res.items.length;i++){
                    if(res.items[i].children.length>0&&res.items[i].children!=null){
                        for(let x=0;x<res.items[i].children.length;x++){
                           _this.allNode.push(res.items[i].children[x])
                        }
                    }
                }
             }
            if(_this.allNode.length>0){//获取未选中权限
                _this.nochecked=_this.uniqueArray(_this.allNode,_this.checked);
            }else{
                _this.nochecked=_this.allNode
            }
            },function(res){
            })
        },
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
            _this.$validate()
            .then(function (success) {
                if (success) {
                    let permissions=[];
                    $.each(_this.checked,function(index,value){
                        permissions.push(value.permissionName)
                    })
                    _this.addData.permissions=permissions;
                    // _this.addData.permissionDtos=_this.checked;//权限
                    _this.$axios.puts('/api/services/app/ModuleManagement/Update',_this.addData)
                    .then(function(res){
                        _this.open('修改成功','el-icon-circle-check','successERP');
                    },function(res){
                        _this.open('修改失败','el-icon-error','faildERP');
                    })
                }
            })    
        },
        saveAdd(){
            let _this=this;
            _this.$validate()
            .then(function (success) {
                    if (success) {
                    _this.$axios.posts('/api/services/app/OuManagement/Create',_this.addData).then(function(res){
                        _this.open('保存并新增成功','el-icon-circle-check','successERP');
                        _this.clearData();
                    },function(res){
                        _this.open('保存并新增失败','el-icon-error','faildERP');
                    })
                }
            })     
           
        },
        newAdd(){
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
            _this.validation.reset();
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
        nodeClick(data){
            let _this=this;
            _this.nodeName=data.displayName;
             $('.menu_box').each(function(x){
                if($(this).attr('moduleName')==_this.nodeName){
                    $(this).css('display','block')
                }else{
                    $(this).css('display','none')
                }
            })


             $('.menu_item_add .menu_item').each(function(){
                 let permissionName=$(this).attr('permissionName');
                 for(let i=0;i<_this.checked.length;i++){
                     if(permissionName==_this.checked[i].permissionName){
                         $(this).css('display','block')
                     }
                 }
            })
            $('.menu_item_del .menu_item').each(function(){
                 let permissionName=$(this).attr('permissionName');
                 for(let i=0;i<_this.checked.length;i++){
                     if(permissionName==_this.checked[i].permissionName){
                       $(this).css('display','none')
                     }
                 }
            })
            
        },
        addPermission(x){
            let _this=this;
            $('.menu_item_add .menu_item').each(function(){
                if($(this).attr('permissionName')==x.permissionName){
                    $(this).css('display','none')
                }
            })
            $('.menu_item_del .menu_item').each(function(){
                if($(this).attr('permissionName')==x.permissionName){
                    $(this).css('display','block')
                }
            })
            let flag=false;
            if(_this.nochecked.length<=0){
                flag=true;
            }else{
                flag=false;
                $.each(_this.nochecked,function(index,value){
                    if(x.permissionName==value.permissionName){
                        flag=false;
                    }else{
                        flag=true;
                    }
                })
            }
            if(_this.checked.length>0){
                for(let i=0;i<_this.checked.length;i++){
                    if(_this.checked[i].permissionName==x.permissionName){
                        _this.checked.splice(i,1)
                        break;
                    }
                }
            }
           
            if(flag){
                _this.nochecked.push(x);
            }
        },
        delPermission(x){
            let _this=this;
            $('.menu_item_del .menu_item').each(function(){
                if($(this).attr('permissionName')==x.permissionName){
                    $(this).css('display','none')
                }
            })
            $('.menu_item_add .menu_item').each(function(){
                if($(this).attr('permissionName')==x.permissionName){
                    $(this).css('display','block')
                }
            })
            let flag=false;
            if(_this.checked.length<=0){
                flag=true;
            }else{
                flag=false;
                $.each(_this.checked,function(index,value){
                    if(x.permissionName==value.permissionName){
                        flag=false;
                    }else{
                        flag=true;
                    }
                })
            }
            if(_this.nochecked.length>0){
                for(let i=0;i<_this.nochecked.length;i++){
                    if(_this.nochecked[i].permissionName==x.permissionName){
                        _this.nochecked.splice(i,1)
                        break;
                    }
                }
            }
            
            if(flag){
                _this.checked.push(x);
            }
        }
    
    }

  })
</script>



<style scoped>
.block{
    display: none;
}
.menuModify  .errorTips{
    margin-bottom: 10px;
    margin-top: -10px;
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
.menu_item_del .menu_item{
    display: block;
}
.menu_item_add .menu_item{
    display: none;
}

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
 .menuModify .el-row{
    background-color: #fff;
    padding-top: 15px;
  }
 .menuModify .goBack{
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
 .menuModify .bgcolor.moreWidth{
     width: 505px;
 }
  .menuModify .bgcolor.moreWidth .el-input{
      width: 423px;
  }
 .menuModify .pageName{
     display: block;
     float: left;
     height: 31px;
     line-height: 31px;
     font-family: 'microsoft yahei';
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
 }
 .menuModify .el-row:first-child{
   padding: 7px 0;
   border-bottom: 1px solid #e4e4e4;
  }
  .menuModify .bgcolor .isGive{
    display: block;
    float: left;
    height: 100%;
    line-height: 35px;
  }
.menuModify .bgcolor.longWidth{
    width: 100%;
    height:auto;
    overflow: visible;
  }
 .menuModify .bgcolor.longWidth .el-textarea{
   width: 423px;
   font-size: 12px;
 } 
 
 .menuModify .bgcolor.longWidth .addZoo{
   float: left;
   width: calc(100% - 82px)
 }
.menuModify .bgcolor.longWidth .add{
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
.menuModify .bgcolor.longWidth .add:hover{
    background-color: #354052;
}
.menuModify .bgcolor.longWidth .addRole{
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
.menuModify .bgcolor.longWidth .addRole i{
  position: absolute;
  right: -4px;
  top: -4px;
  color: #cccccc;
}
.menuModify .bgcolor.longWidth .addRole:hover i{
  color:#f66;
}
/* 右侧选项 */
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
    border: none;
    text-align: center;
    display: block;
    width: 24px;
    height: 24px;
    position: absolute;
    left: -12.5px;
    top: 16px;
    background-color: #69f;
    color: #fff;
    font-size:24px;
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
.menuModify .el-tree-node__content{
    background-color:#F9F9F9;
}
.menuModify .el-dialog__headerbtn{
    top:3px;
    font-size:50px;
}
</style>
