<template>
     <div class="customer-infor-wrapper" style="float:left;background:#fff;width:100%;">
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
                        <button class="erp_bt bt_save" @click="save">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_save.png">
                                </div>
                                <span class="btDetail">保存</span>
                        </button>
                         <button class="erp_bt bt_cancel">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_cancel.png">
                                </div>
                                <span class="btDetail">取消</span>
                        </button>
                        <button class="erp_bt bt_saveAdd" @click="addNew">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_saveAdd.png">
                                </div>
                                <span class="btDetail">保存并新增</span>
                        </button>
                        <button class="erp_bt bt_add" :disabled="isTrue">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_add.png">
                                </div>
                                <span class="btDetail">新增</span>
                        </button>
                        <button class="erp_bt bt_del" :disabled="isTrue">
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
            <div class="staff_detail_form">
                <el-row style="margin-top:20px">
                    <el-col :span="6">
                        <div class="bgcolor smallBgcolor">
                            <label><small>*</small>职员编码</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div>
                            <el-input v-model="form.employeeCode" class="employeeCode" @focus="showErrTips" :class="{redBorder : validation.hasError('form.employeeCode')}" ></el-input>
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
                            <el-input v-model="form.employeeName" class="employeeName" @focus="showErrTips" :class="{redBorder : validation.hasError('form.employeeName')}" ></el-input>
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
                            <!-- <el-select v-model="form.ouId" @focus="showErrTips" class="ouId"
                                :class="{redBorder : validation.hasError('form.ouId')}">
                                <el-option v-for="item in ouIdMsg" :label="item.ouFullname" :key="item.ouId" :value="item.ouId"></el-option>
                            </el-select> -->
                            <el-select class="ouId" :class="{redBorder :           validation.hasError('form.ouId')}" v-model="form.ouId" placeholder="">
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
                            <el-input v-model="form.mobile"></el-input>
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
                            <el-select v-model="form.department">
                                <!-- <el-option v-for="item in depMsg" :key="item.DepId" :label="item.deptName" :value="item.DepId"></el-option> -->
                                <el-input placeholder="搜索..." class="selectSearch" v-model="search_ou">
                                </el-input>
                                <el-tree oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" :data="selectTree_dept" :props="selectProps_dept"
                                node-key="id" default-expand-all ref="tree" :filter-node-method="filterNode_dept"
                                :expand-on-click-node="false" @node-click="nodeClick_dept">
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
                            <el-select v-model="form.sex">
                                <el-option label="男" value="1"></el-option>
                                <el-option label="女" value="2"></el-option>
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
                            <el-input v-model="form.birthday"></el-input>
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
                            <el-select v-model="form.shopName">
                                <el-option v-for="item in shopMsg" :key="item.shopId" :label="item.shopName" :value="item.shopId"></el-option>
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
                        <div class="chePT">
                            <el-checkbox-group v-model="form.employeeTypes">
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
                            <el-input type="textarea" :rows="5" resize="none" v-model="form.remark"></el-input>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'staffDetail',
        data(){
            return { 
                isTrue:true,
                id:'',
                SkipCount:0,
                MaxResultCount:10,
                 form: {
                        employeeCode: '',
                        employeeName: '',
                        mobile: '',
                        department: '',
                        sex:'',
                        ouId:'',
                        birthday:'',
                        shopName:'',
                        employeeTypes: [],
                        remark: ''
                },
                // rules: {
                //     employeeCode: [
                //         { required: true,trigger: 'blur' },
                //     ],
                //     employeeName: [
                //         { required: true, trigger: 'blur' },
                //     ],
                //     ouFullname: [
                //          { required: true, message: '请选择', trigger: 'blur' }
                //     ],
                    
                // },
                
                 employeeIdoptions:[//------职员类型--------
                    { label: '1',text: '采购'},
                    { label: '2',text: '业务'}, 
                    { label: '3',text: '仓库'}, 
                    { label: '4',text: '店员'}, 
                ],
                ouIdMsg:[],// 业务组织信息
                 //   所属组织下拉框数据
                    search_ou:'',
                    selectTree_ou:[],
                    selectProps_ou: {
                            children: 'children',
                            label: 'ouFullname',
                            id:'id'
                        },
                    selectData:{//select数据
                            ou:[],//组织
                        },
                depMsg:[],//部门信息
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
                //  所属部门下拉框数据---完
                shopMsg:[],//店铺信息
                // 增加职员所需列表数据
                addList:{
                        "ouId": 0,
                        "employeeCode": "",
                        "employeeName": "",
                        "mobile": "",
                        "deptId": 0,
                        "sex": 0,
                        "birthday": "",
                        "discountStart": 0,
                        "discountEnd": 0,
                        "shopId": 0,
                        "remark": "string",
                        "employeeTypeIds": [
                            
                        ],
                        "id": 0
                        }
             }                                                        
        },
        validators: {
                    'form.employeeCode': function (value) {//职员编码
                         return this.Validator.value(value).required().maxLength(50)
                    },
                    'form.employeeName': function (value) {//职员名称
                         return this.Validator.value(value).required().maxLength(50)
                    },
                    'form.ouId': function (value) {//所属组织
                        return this.Validator.value(value).required().integer();
                    },
                },
        created:function(){
            // 所属组织下拉选项框
            this.getSelectData();
            this.loadTree();
            this.loadIcon();
            this.getOuIdMsg();
            // this.getDepmsg();
            // 获取部门信息下拉选项框
            this.getDeptData();
            this.loadDeptTree();

            this.getShopmsg();

        },
        watch:{
            // 监听所属组织的数值变化
            "form.ouId":function(newVal,oldVal){
                 let _this=this;
                // console.log(newVal);
                _this.getDeptData();
                _this.loadDeptTree();
            },
            deep:true,
        },
        methods: {
            // 错误提示信息
            showErrTips(e){
                $('.errTipsWrapper').each(function(){
                if($(e.target).parent('.el-input').hasClass($(this).attr('name'))){
                    $(this).addClass('display_block')
                }else{
                    $(this).removeClass('display_block')
                }
              })
            },
            // 获取业务组织信息
            getOuIdMsg(){
                let _this=this;
                this.$axios.gets('/api/services/app/OuManagement/GetAll',{SkipCount:_this.SkipCount,MaxResultCount:_this.MaxResultCount
                }).then(
                    rsp=>{
                        // console.log(rsp.result.items);
                        for(let val of rsp.result.items){
                           _this.ouIdMsg.push({ouFullname:val.ouFullname,ouId:val.id})
                        }
                        // console.log( _this._this.depMsg);
                    }
                )
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
                        // console.log(_this.selectTree_ou);
                        // console.log(res.result);
                        
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

            filterNode_ou(value, data) {
                if (!value) return true;
                return data.ouName.indexOf(value) !== -1;
            },
            nodeClick_ou(data,node,self){
                let _this=this;
                $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').each(function(index){
                    if($(this).attr('date')==data.id){
                        $(this).click()
                    }
                })
            },
            // 获取部门信息
                // getDepmsg(){
                //     let _this=this;
                //     this.$axios.gets('/api/services/app/DeptManagement/GetAll',{SkipCount:_this.SkipCount,MaxResultCount:_this.MaxResultCount
                //     }).then(
                //         rsp=>{
                //             // console.log(rsp.result.items);
                //             for(let val of rsp.result.items){
                //                  _this.depMsg.push({deptName:val.deptName,DepId:val.id})
                //             }
                //             // console.log( _this.depMsg);
                //         }
                //     )
            // },

             //部门下拉选项框
            getDeptData(){
                let _this=this;
                _this.$axios.gets('/api/services/app/DeptManagement/GetAllTree',{OuId:_this.form.ouId}).then(function(res){ 
                    // 部门
                _this.selectDeptData.dept=res.result;
                // console.log( res.result);
                console.log( _this.selectDeptData.dept);
                // console.log("测试部门数据ok?");
                
                })
           
            },
            // 加载部门树形控件
            loadDeptTree(){
                let _this=this;
                    _this.$axios.gets('/api/services/app/DeptManagement/GetAllTree')
                    .then(function(res){
                        _this.selectTree_dept=res.result;
                        _this.loadIcon();
                    },function(res){
                    })
            },
            filterNode_dept(value, data) {
                if (!value) return true;
                return data.ouFullname.indexOf(value) !== -1;
            },
            nodeClick_dept(data,node,self){
                let _this=this;
                $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').each(function(index){
                    if($(this).attr('date')==data.id){
                        $(this).click()
                    }
                })
            },

            // 获取店铺信息
            // 获取店铺信息
            getShopmsg(){
                let _this=this;
                _this.$axios.gets('/api/services/app/ShopManagement/GetAll',{
                    SkipCount:_this.SkipCount,MaxResultCount:_this.MaxResultCount
                }).then(
                    rsp=>{
                        for(let val of rsp.result.items){
                             _this.shopMsg.push({shopName:val.shopName,shopId:val.id})
                        }
                        // console.log( _this.shopMsg);
                        
                    }
                )
            },
            // 成功的提示框
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
            //点击切换路由，返回到职员数据列表
              goBack:function(){
                this.$store.state.url='/staff/staffList/default'
                this.$router.push({path:this.$store.state.url})
            },
            // 新增按钮：重新新增一个数据对象
            addNew(){
                let _this=this;
                _this.$validate().then(
                    function (success) {
                        if (success) {
                            _this.addList.employeeCode=_this.form.employeeCode;
                            _this.addList.employeeName=_this.form.employeeName;
                            _this.addList.ouId=_this.form.ouId;
                            _this.addList.mobile=_this.form.mobile;
                            _this.addList.deptId=_this.form.department;
                            _this.addList.sex=_this.form.sex;
                            _this.addList.birthday=_this.form.birthday;
                            _this.addList.shopId=_this.form.shopName;
                            _this.addList.employeeTypeIds=_this.form.employeeTypes;
                            _this.addList.remark=_this.form.remark;
                            _this.$axios.posts('/api/services/app/EmployeeManagement/Create',_this.addList).then(
                                            rsp=>{
                                                // console.log(rsp);
                                                _this.open('保存成功','el-icon-circle-check','successERP');
                                                _this.reset();
                                            },
                                            res=>{
                                                _this.open('保存失败','el-icon-error','faildERP');
                                            }
                            )
                        }
                      
                    }
                );
               
            },
            // 保存---新增并保存
            save(){
                let _this=this;
                _this.$validate().then(
                    function (success) {
                        if (success) {
                            _this.addList.employeeCode=_this.form.employeeCode;
                            _this.addList.employeeName=_this.form.employeeName;
                            _this.addList.ouId=_this.form.ouId;
                            _this.addList.mobile=_this.form.mobile;
                            _this.addList.deptId=_this.form.department;
                            _this.addList.sex=_this.form.sex;
                            _this.addList.birthday=_this.form.birthday;
                            _this.addList.shopId=_this.form.shopName;
                            _this.addList.employeeTypeIds=_this.form.employeeTypes;
                            _this.addList.remark=_this.form.remark;
                            _this.$axios.posts('/api/services/app/EmployeeManagement/Create',_this.addList).then(
                                            rsp=>{
                                                console.log(_this.addList);
                                                _this.open('保存成功','el-icon-circle-check','successERP');
                                            },
                                            res=>{
                                                _this.open('保存失败','el-icon-error','faildERP');
                                            }
                            )
                        }
                      
                    }
                );




                
                
                // _this.$validate();
                
            },
            // 重新验证并设置值
            reset(){
                    this.form.employeeCode='';
                    this.form.employeeName='';
                    this.form.ouId='';
                    this.form.mobile='';
                    this.form.department='';
                    this.form.sex='';
                    this.form.birthday='';
                    this.form.shopName='';
                    this.form.remark=''; 
                    this.validation.reset();               
            },
        },
       
    }
</script>


<style scoped>
.btnBd{
    /* height: 48px; */
    padding: 5px;
    border-bottom: 1px solid #e4e4e4 !important;
}
.block{
    display: none;
}
.customer-infor-wrapper{
    position: relative;
}
.staff_detail_form{
    padding-left: 30%;
    width: 30%;
}
.staff_detail_form .chePT{
    padding-top:5px;
}
.customer-infor-wrapper .smallBgcolor .el-input{
    width: 100% !important ;
}
.customer-infor-wrapper .bgcolor label{
    width: 100% !important ;
    margin-right: 0; 
}
.smallBgcolor .el-input--suffix{
    width: 100% !important ;
}
.smallBgcolor .el-input{
    width: 100% !important ;
}
.bgcolor{
    overflow:  visible; 
}
.smallBgcolor>label {
    line-height: 35px;
}
</style>




<style>
/*设置表单字体与高度*/
.staff_detail_form .el-select{
    display: block !important ;
}
.customer-infor-wrapper .redBorder .el-input__inner{
  border-color: #f66;
}
.staff_detail_form .el-input__inner{
    height: 35px;
    font-size:12px;
    border: 1px solid #dcdfe6 !important;
}
</style>







