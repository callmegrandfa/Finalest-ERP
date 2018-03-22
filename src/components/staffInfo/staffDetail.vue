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
                        <button class="erp_bt bt_saveAdd" @click="addNew">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_saveAdd.png">
                                </div>
                                <span class="btDetail">保存并新增</span>
                        </button>
                    </el-col>
                </el-row>
            </div>
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
                            <label><small>*</small>业务组织</label>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div>
                            <el-select v-model="form.ouId" @focus="showErrTips" class="ouId"
                                :class="{redBorder : validation.hasError('form.ouId')}">
                                <el-option v-for="item in ouIdMsg" :label="item.ouFullname" :key="item.ouId" :value="item.ouId"></el-option>
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
                                <el-option v-for="item in depMsg" :key="item.DepId" :label="item.deptName" :value="item.DepId"></el-option>
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
                        <div>
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
                    { label: 1,text: '采购'},
                    { label: 2,text: '财务'}, 
                    { label: 3,text: '销售'}, 
                    { label: 4,text: '总部'}, 
                ],
                ouIdMsg:[],// 业务组织信息
                depMsg:[],//部门信息
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
                            0
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
            this.getOuIdMsg();
            this.getDepmsg();
            this.getShopmsg();

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
            // 获取部门信息
            getDepmsg(){
                let _this=this;
                this.$axios.gets('/api/services/app/DeptManagement/GetAll',{SkipCount:_this.SkipCount,MaxResultCount:_this.MaxResultCount
                }).then(
                    rsp=>{
                        // console.log(rsp.result.items);
                        for(let val of rsp.result.items){
                             _this.depMsg.push({deptName:val.deptName,DepId:val.id})
                        }
                        // console.log( _this.depMsg);
                    }
                )
            },
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
                            _this.addList.remark=_this.form.remark;
                            _this.$axios.posts('/api/services/app/EmployeeManagement/Create',_this.addList).then(
                                            rsp=>{
                                                // console.log(rsp);
                                                _this.open('新增成功','el-icon-circle-check','successERP');
                                                 _this.validation.reset();
                                            },
                                            res=>{
                                                _this.open('新增失败','el-icon-error','faildERP');
                                            }
                            )
                        }
                      
                    }
                );
                // this.save().then(
                //     (success)=>{
                //          this.validation.reset();
                //     }
                // );
                // this.form={};
               
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
                            _this.addList.remark=_this.form.remark;
                            _this.$axios.posts('/api/services/app/EmployeeManagement/Create',_this.addList).then(
                                            rsp=>{
                                                // console.log(rsp);
                                                _this.open('新增成功','el-icon-circle-check','successERP');
                                            },
                                            res=>{
                                                _this.open('新增失败','el-icon-error','faildERP');
                                            }
                            )
                        }
                      
                    }
                );




                
                
                // _this.$validate();
                
            }
        },
    }
</script>


<style scoped>
.block{
    display: none;
}
.customer-infor-wrapper{
    position: relative;
}
.staff_detail_form{
    padding-left: 25%;
    width: 50%;
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
    height:30px;
    font-size:12px;
}
</style>







