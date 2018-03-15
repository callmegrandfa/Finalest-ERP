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
                        <button class="erp_bt bt_add" @click="addNew">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_add.png">
                                </div>
                                <span class="btDetail">新增</span>
                        </button>
                        <button class="erp_bt bt_save" @click="save">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_save.png">
                                </div>
                                <span class="btDetail">保存</span>
                        </button>
                    </el-col>
                </el-row>
            </div>
	        
            <div class="staff_detail_form">
                <el-form :model="form" :rules="rules" ref="form" label-width="80px" class="pl pt">
                    <el-form-item label="职员编码"  prop="employeeCode">
                        <el-input v-model="form.employeeCode" label-width="80px"></el-input>
                    </el-form-item>
                    <el-form-item label="职员名称"  prop="employeeName">
                        <el-input v-model="form.employeeName"></el-input>
                    </el-form-item>
                    <el-form-item label="业务组织"  prop="ouFullname">
                        <el-select v-model="form.ouFullname">
                        <el-option label="恒康" value="0"></el-option>
                        <el-option label="总部" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="手机号码" >
                        <el-input v-model="form.mobile"></el-input>
                    </el-form-item>
                    <el-form-item label="部门" >
                        <el-select v-model="form.department">
                        <el-option label="采购" value="0"></el-option>
                        <el-option label="店铺" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-select v-model="form.sex">
                        <el-option label="男" value="1"></el-option>
                        <el-option label="女" value="0"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="生日" >
                        <el-input v-model="form.birthday"></el-input>
                    </el-form-item>
                    <el-form-item label="所属店铺">
                        <el-select v-model="form.shopName">
                        <el-option label="测试店铺1" value="2"></el-option>
                        <el-option label="测试店铺0" value="0"></el-option>
                        </el-select>
                    </el-form-item>                            
                    <el-form-item label="职员类型">
                        <el-checkbox-group v-model="form.employeeTypes">
                        <el-checkbox  label="采购" name="type"></el-checkbox>
                        <el-checkbox label="财务" name="type"></el-checkbox>
                        <el-checkbox label="销售" name="type"></el-checkbox>
                        <el-checkbox label="总部" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="备注">
                        <el-input type="textarea" :rows="5" resize="none" v-model="form.remark"></el-input>
                    </el-form-item>
                </el-form>
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
                 form: {
                        employeeCode: '',
                        employeeName: '',
                        mobile: '',
                        department: '',
                        sex:'',
                        birthday:'',
                        shopName:'',
                        employeeTypes: [],
                        remark: ''
                },
                rules: {
                    employeeCode: [
                        { required: true,trigger: 'blur' },
                    ],
                    employeeName: [
                        { required: true, trigger: 'blur' },
                    ],
                    ouFullname: [
                         { required: true, message: '请选择', trigger: 'change' }
                    ],
                    
                },
                validators: {
                    'addStaffList.employeeCode': function (value) {//职员编码
                        return this.Validator.value(value).required().integer();
                    },
                    'addStaffList.employeeName': function (value) {//职员名称
                        return this.Validator.value(value).required().integer();
                    },
                },
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
        created:function(){

        },
        methods: {
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
            // 新增按钮：重新新增一个数据
            addNew(){
              return   this.form={};
            },
            // 保存---新增并保存
            save(){
                let _this=this;
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
                                res=>{
                                    _this.open('新增成功','el-icon-circle-check','successERP');
                                },
                                res=>{
                                    _this.open('新增失败','el-icon-error','faildERP');
                                }
                )
            }
        },
    }
</script>
<style scope>
    .staff_detail_form{
        width: 70%;
    }
   .pl{
       padding-left:20%;
   }
   .pt{
       padding-top:10px;
   }
   .fs{
       font-size:12px;
   }
    .customer-infor-wrapper .el-select{
        display: block;
    }    
    .btnBd {
    width: 100%;
    border-bottom: 1px solid #E4E4E4;
    padding-bottom: 5px;
    }
</style>




