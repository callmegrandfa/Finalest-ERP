<template>
    <div class="commodityPropertyDetails commodity">
        <el-row class="bg-white">

            <el-col :span='24' class="border-left">
                <btm :date="bottonbox" v-on:listbtm="btmlog"> </btm>
                <el-row class="pl10 pr10">
                    <el-col :span="24" style="margin-top:20px">
                        <el-row>
                            <el-col :span="2">
                                <div class="bgcolor smallBgcolor">
                                        <label ><small>*</small>上级属性</label>
                               </div>
                            </el-col>
                            <el-col :span="5" >
                                <div class="bgcolor smallBgcolor">
                                    <el-select 
                                    class="propertyParentid" 
                                    v-model="addData.propertyParentid"
                                    placeholder="" :class="{redBorder : validation.hasError('addData.propertyParentid')}">
                                    <el-input
                                        placeholder="搜索..."
                                        class="selectSearch"
                                        v-model="treeQuery">
                                    </el-input>
                                        <el-tree
                                        oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                                        :data="classTree"
                                        :props="defaultProps"
                                        node-key="id"
                                        default-expand-all
                                        ref="tree"
                                        :filter-node-method="filterNode"
                                        :expand-on-click-node="false"
                                         @node-click="nodeClick"
                                        >
                                        </el-tree>
                                        <el-option v-show="false" :key="count.propertyParentid" :label="count.propertyName" :value="count.propertyParentid"   id="businessDetail_confirmSelect">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="3"><div class="error_tips_info">{{ validation.firstError('addData.propertyParentid') }}</div></el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="24">
                        <el-row>
                            <el-col :span="2">
                                <div class="bgcolor smallBgcolor" >
                                        <label><small>*</small>属性编码</label>
                               </div>
                            </el-col>
                            <el-col :span="5" >
                                <div class="smallBgcolor bgcolor" >
                                <el-input placeholder="" :class="{redBorder : validation.hasError('addData.propertyCode')}" v-model="addData.propertyCode" id="coding" ></el-input>
                                </div>
                            </el-col>
                            <el-col :span="3"><div class="error_tips_info">{{ validation.firstError('addData.propertyCode') }}</div></el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="24">
                        <el-row>
                            <el-col :span="2">
                                <div class="bgcolor smallBgcolor" >
                                       <label> <small>*</small>属性名称</label>
                               </div>
                            </el-col>
                            <el-col :span="5" id="name">
                                <div class="smallBgcolor bgcolor" >
                                <el-input placeholder="" :class="{redBorder : validation.hasError('addData.propertyName')}" v-model="addData.propertyName"></el-input>
                                </div>
                            </el-col>
                            <el-col :span="3"><div class="error_tips_info">{{ validation.firstError('addData.propertyName') }}</div></el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="24">
                        <el-row>
                            <el-col :span="2">
                                <div class="bgcolor smallBgcolor" >
                                        <label><small>*</small>控件类型</label>
                               </div>
                            </el-col>
                            <el-col :span="5" id="type">
                                <div class="bgcolor smallBgcolor" >
                                    <el-select v-model="addData.controlType"  :class="{redBorder : validation.hasError('addData.controlType')}">
                                    <el-option  v-for="item in ControlTypeOptions" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>

                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="3"><div class="error_tips_info">{{ validation.firstError('addData.controlType') }}</div></el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row class="pl10  pr10">
                    <el-col :span="24">
                        <el-row>
                            <el-col :span="2">
                                <div class="bgcolor smallBgcolor" >
                                        <label><small>*</small>数据源</label>
                               </div>
                            </el-col>
                            <el-col :span="5">
                                <div class="smallBgcolor bgcolor" >
                                <el-input placeholder="" v-model="addData.dataSource" :class="{redBorder : validation.hasError('addData.dataSource')}"></el-input>
                                </div>
                            </el-col>
                            <el-col :span="3"><div class="error_tips_info">{{ validation.firstError('addData.dataSource') }}</div></el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="24">
                        <el-row>
                            <el-col :span="2">
                                <div class="bgcolor smallBgcolor" >
                                        <label>显示顺序</label>
                               </div>
                            </el-col>
                            <el-col :span="5" id="order">
                                <div class="smallBgcolor" >
                                <el-input placeholder="" v-model="addData.seq"></el-input>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="24">
                        <el-row>
                            <el-col :span="2">
                                <div class="bgcolor smallBgcolor" >
                                        <label>级联属性</label>
                               </div>
                            </el-col>
                            <el-col :span="5">
                                <div class="smallBgcolor" >
                                <el-input placeholder="" v-model="addData.levelNo"></el-input>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="24">
                        <el-col :span="2">
                            <div class="bgcolor smallBgcolor" >
                                    <label>状态</label>
                           </div>
                        </el-col>
                        <el-col :span="5" id="state">
                            <div class="bgcolor smallBgcolor" >
                                <el-select  v-model="addData.status">
                                <el-option  v-for="item in StatusOptions" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>

                                </el-select>
                            </div>
                        </el-col>
                    </el-col>
                </el-row>
                <el-row class="pl10 pr10">
                    <el-col :span="2">
                        <div class="height1"></div>
                    </el-col>

                    <el-col :xl="2" :lg="2" :md="4" :sm="5" :xs="6" class="Systemcheckbox mt10">
                        
                            <el-checkbox  v-model="addData.isSystem" label="1">系统属性</el-checkbox>
                        
                    </el-col>
                    <el-col :xl="2" :lg="2" :md="4" :sm="5" :xs="6" class="mt10">
                       
                            <el-checkbox v-model="addData.required" label="2">必填</el-checkbox>
                        
                    </el-col>
                </el-row>
                <el-row class="pl10 pr10 pt10  " style="border-top:1px solid #e4e4e4;   ">
                    <el-col :span="24" style="margin-bottom:30px;">
                        <h4>审计信息</h4>
                    </el-col>
                    <el-col :span="6">
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor" style="margin-top:20px">
                                    <label>创建人</label>
                           </div>
                        </el-col>
                        <el-col :span="15">
                            <div class="smallBgcolor" style="margin-top:20px">
                            <el-input placeholder="" :disabled="isDisabled" v-model="addData.createdBy"></el-input>
                            </div>
                        </el-col>
                    </el-col>
                    <el-col :span="6">
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor" style="margin-top:20px">
                                    <label>创建时间</label>
                           </div>
                        </el-col>
                        <el-col :span="15">
                            <div class="smallBgcolor" style="margin-top:20px">
                            <el-input placeholder="" :disabled="isDisabled" v-model="addData.createdTime" type="data"></el-input>
                            </div>
                        </el-col>
                    </el-col>
                    <el-col :span="6">
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor" style="margin-top:20px">
                                    <label>修改人</label>
                           </div>
                        </el-col>
                        <el-col :span="15">
                            <div class="smallBgcolor" style="margin-top:20px">
                            <el-input placeholder="" :disabled="isDisabled" v-model="addData.modifiedBy"></el-input>
                            </div>
                        </el-col>
                    </el-col>
                    <el-col :span="6">
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor" style="margin-top:20px">
                                    <label>修改时间</label>
                           </div>
                        </el-col>
                        <el-col :span="15">
                            <div class="smallBgcolor" style="margin-top:20px">
                            <el-input placeholder="" :disabled="isDisabled" v-model="addData.modifiedTime"></el-input>
                            </div>
                        </el-col>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
import Btm from '../../base/btm/btm'
import Textbox from '../../base/textbox/textbox'
    export default{
        name:'customerInfor',
        data(){
            return{
                classTree:[],
                ifWidth:true,
                treeNode:{
                    propertyParentid:'',
                    propertyName:'',
                },
                defaultProps: {
                    children:'childNodes',
                    label:'propertyName',
                    id:"id"
                },
                treeQuery:"",
                radio:'1',
                addData:{//键子对
                      levelNo: '',
                      propertyParentid:'',
                      relPropertyId: 0,
                      isBottom: true,
                      propertyCode: "",
                      propertyName: "",
                      propertyFullpathId: "0",
                      propertyFullpathName: "默认",
                      controlType: '',
                      required: false,
                      isSystem: false,
                      seq:'',
                      dataSource: "",
                      status: '',
                    createdTime:this.GetDateTime(),//创建时间
                    createdBy:this.$store.state.name,//创建人
                    modifiedTime:this.GetDateTime(),//修改人
                    modifiedBy:this.$store.state.name//修改时间
                    
                },
                isDisabled:true,//审计信息
                bottonbox:{
                    url: '/commodityProperty/commodityPropertyList',
                   botton:[{
                    class: 'erp_bt bt_back',
                    imgsrc: '../../../static/image/common/bt_back.png',
                    text: '返回',
                    show:true,
                },{
                    class: 'erp_bt bt_save',
                    imgsrc: '../../../static/image/common/bt_save.png',
                    text: '保存',
                    show:true,
                },{
                    class: 'erp_bt bt_save_add',
                    imgsrc: '../../../static/image/common/bt_save.png',
                    text: '保存并新增',
                    show:true,
                },{
                    class: 'erp_bt bt_add',
                    imgsrc: '../../../static/image/common/bt_add.png',
                    text: '新增',
                    show:true,
                },{
                    class: 'erp_bt bt_del',
                    imgsrc: '../../../static/image/common/bt_del.png',
                    text: '删除',
                    show:true,
                },{
                    class: 'erp_bt bt_auxiliary',
                    imgsrc: '../../../static/image/common/bt_audit.png',
                    text: '审核',
                    show:true,
                }]},
                ControlTypeOptions:[{
                    value: 0,
                    label: '下拉'
                },{
                    value: 1,
                    label: '日期'
                },{
                    value: 2,
                    label: '手工录入'
                },{
                    value: 3,
                    label: '关联档案'
                }],
                StatusOptions:[{
                    value: 0,
                    label: '已提交'
                },{
                    value: 1,
                    label: '不通过'
                },{
                    value: 2,
                    label: '已反审'
                },{
                    value: 3,
                    label: '通过'
                }],
                value: '',

            }
        },
        validators: {
          'addData.propertyParentid': function (value) {//上级属性
             return this.Validator.value(value).required().maxLength(50)
          },
          'addData.propertyCode': function (value) {//属性编码
             return this.Validator.value(value).required().maxLength(50);
          },
          'addData.propertyName': function (value) {//属性名称
             return this.Validator.value(value).required().maxLength(50)
          },
          'addData.controlType': function (value) {//控件类型
             return this.Validator.value(value).required().maxLength(20)
          },
          'addData.dataSource': function (value) {//数据源
             return this.Validator.value(value).required().integer()
          },
        },
        created:function(){
            let _this=this;
            _this.InitModify();
            this.loadTree();
            console.log(this.count.propertyName)
            if(this.$route.params.id !="default"){
               _this.showbutton() 
            }else{
                
            }
        },
        computed:{
            count () {
                return this.treeNode;
            },
        },
        watch: {
            treeQuery(val) {
                console.log(this.$refs.tree.filter(val));
                this.$refs.tree.filter(val);
            },
        },
        methods:{
            InitModify(){
                let _this=this;
                if(_this.$route.params.id=="default"){
                    return;
                }else{
                    _this.$axios.gets('http://192.168.100.107:8085/api/services/app/PropertyManagement/Get',{Id:_this.$route.params.id}).then(function(res){
                        // _this.updateId=res.result.id;
                        _this.treeNode.propertyParentid=res.result.propertyParentid;
                        _this.treeNode.propertyName=res.result.propertyName;
                        console.log(_this.treeNode.propertyName);
                          _this.addData.levelNo=res.result.levelNo,
                          _this.addData.propertyParentid=res.result.propertyParentid,
                          _this.addData.relPropertyId= res.result.relPropertyId,
                          _this.addData.isBottom= res.result.isBottom,
                          _this.addData.propertyCode= res.result.propertyCode,
                          _this.addData.propertyName= res.result.propertyName,
                          _this.addData.propertyFullpathId= res.result.propertyFullpathId,
                          _this.addData.propertyFullpathName= res.result.propertyFullpathName,
                          _this.addData.controlType= res.result.controlType,
                          _this.addData.required= res.result.required,
                          _this.addData.isSystem= res.result.isSystem,
                          _this.addData.seq=res.result.seq,
                          _this.addData.dataSource= res.result.dataSource,
                          _this.addData.status= res.result.status
                          _this.addData.id= res.result.id
                          _this.addData.createdTime=res.result.createdTime,//创建时间
                          _this.addData.createdBy=res.result.createdBy,//创建人
                          _this.addData.modifiedTime=res.result.modifiedTime//修改人
                          _this.addData.modifiedBy=res.result.modifiedBy//修改时间
                    })
                }
                 
            },
            loadTree(){//获取tree data
                    let _this=this;
                    _this.treeLoading=true;
                    _this.$axios.gets('http://192.168.100.107:8085/api/services/app/PropertyManagement/GetPropertyTree')
                    .then(function(res){
                        _this.classTree=res
                        console.log(_this.classTree)
                        _this.loadIcon();
                        _this.treeLoading=false;
                },function(res){
                    _this.treeLoading=false;
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
            GetDateTime: function () {
                var date = new Date();
                var seperator1 = "-";
                var seperator2 = ":";
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                    + " " + date.getHours() + seperator2 + date.getMinutes()
                    + seperator2 + date.getSeconds();
                return currentdate;
            },
            filterNode(value, data) {
                console.log(value)
                if (!value) return true;
                return data.categoryName.indexOf(value) !== -1;
            },
            nodeClick(data){
                let _this=this;
                _this.treeNode.propertyParentid=data.propertyParentid;
                _this.treeNode.propertyName=data.propertyName;
                console.log(1)
                _this.$nextTick(function(){
                    $('#businessDetail_confirmSelect').click()
                })
            },
            InitData(){//数据重置
                this.addData.propertyParentid="";//上级商品属性类目
                this.addData.propertyCode="";//商品属性编码
                this.addData.propertyName="";//商品属性名称
                this.addData.controlType="";//控件类型
                this.addData.dataSource="";//数据源
                this.addData.seq="";//显示顺序
                this.addData.levelNo="";//级联属性
                this.addData.status="";//状态
                this.addData.isSystem="";//系统属性
                this.addData.required="";//是否必填
            },
            btmlog:function(data){

                let _this=this;
                if(data == '新增保存'){
                    _this.$validate();
                    if(_this.addData.levelNo != '' && _this.addData.propertyParentid !='' ){
                        _this.addData.levelNo=parseInt(_this.addData.levelNo);
                        _this.addData.propertyParentid=parseInt(_this.addData.propertyParentid);
                        
                    }
                    if(_this.addData.seq != ''){
                        _this.addData.seq=parseInt(_this.addData.seq);
                    }
                    

                    _this.$axios.posts('http://192.168.100.107:8085/api/services/app/PropertyManagement/Create',_this.addData).then(function(res){
                        // _this.InitModify();
                        _this.InitData();
                        // _this.validation.reset();
                        _this.open('保存商品类目成功','el-icon-circle-check','successERP');    
                    }); 
                }else if(data == '修改保存'){
                  // _this.$validate();
                  _this.addData.modifiedBy='admin';
                  _this.addData.createdBy='admin';
                  _this.addData.levelNo=parseInt(_this.addData.levelNo);
                    _this.addData.propertyParentid=parseInt(_this.addData.propertyParentid);
                    _this.addData.seq=parseInt(_this.addData.seq);
                    console.log(_this.addData)
                  _this.$axios.puts('http://192.168.100.107:8085/api/services/app/PropertyManagement/Update',_this.addData).then(function(res){
                        // _this.$store.state.url='/tenant/tenantManagement/'+res.result.id;
                        // _this.$router.push({path:_this.$store.state.url})//点击切换路由
                        _this.open('保存成功','el-icon-circle-check','successERP');
                    },function(){
                        _this.open('保存失败','el-icon-error','faildERP');
                    });
                } 
            },
            open(tittle,iconClass,className) {//提示框
                this.$notify({
                position: 'bottom-right',
                iconClass:iconClass,
                title: tittle,
                showClose: false,
                duration: 3000,
                customClass:className
                });
            },
            showbutton(){
                this.bottonbox.botton.splice(1,2,{class: 'erp_bt bt_save amend_save',show:true, imgsrc: '../../../static/image/common/bt_save.png',text: '保存'},{class: 'erp_bt bt_auxiliary cancel',show:true, imgsrc: '../../../static/image/common/u470.png',text: '取消'})
               
            }
            
        },
        components:{
            Btm
        }
        
 }   
</script>

<style scoped>
.Systemcheckbox{
    margin-left: 10px;
    margin-bottom: 30px;   
}
.mt10{
   margin-top: 10px; 
}
.smallBgcolor .el-select{
        width: 100% !important ;
        margin-left: 10px;
    }
    .bgcolor label{
        width: 100% !important ;
        margin-right: 0; 
    }
    .smallBgcolor .el-input--suffix{
        width: 100% !important ;
    }
    .smallBgcolor .el-input{
        width: 100% !important ;
        margin-left: 10px;
    }
    .input-need{
        outline: none;
        border:none;
        width: 100%;
        height: 28px;
    }
    .bgcolor{
        overflow:  visible; 
    }
.bg-white{
    background: white;
    border-radius: 3px;
}
.pl10{
    padding-left: 10px;
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
</style>

<style>
.commodityPropertyDetails .smallBgcolor .el-input input{
    height: 33px !important;
}
.commodityPropertyDetails .bgcolor{
    width: 100%; 
}
.error_tips_info{
    text-indent: 30px;
}
/* 重写checkbox */
.el-checkbox__inner{
    width: 18px;
    height: 18px;
    border-radius:50% !important; 
}
.el-checkbox__inner::after{
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    content: "";
    border: 3px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 11px;
    left: 4px;
    position: absolute;
    top: -1px;
    -webkit-transform: rotate(45deg) scaleY(0);
    transform: rotate(45deg) scaleY(0);
    width: 6px;
    -webkit-transition: -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms,-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    -webkit-transform-origin: center;
    transform-origin: center;
}
</style>