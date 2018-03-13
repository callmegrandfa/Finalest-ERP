<template>
     <div class="customer-infor-wrapper" style="float:left;background:#fff;width:100%;">
        <div id="bgc">
	        <el-row >
	            <el-col :span="24">
	            	<button class="erp_bt bt_back" @click="goBack">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_back.png">
                            </div>
                            <span class="btDetail">返回</span>
                    </button>
	            	<button class="erp_bt bt_save" @click="addStaff">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_save.png">
                            </div>
                            <span class="btDetail">保存</span>
                    </button>
	            	<button class="erp_bt bt_cancel" >
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_cancel.png">
                            </div>
                            <span class="btDetail">取消</span>
                    </button>
	            	<button class="erp_bt bt_print">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_print.png">
                            </div>
                            <span class="btDetail">打印</span>
                    </button>
	            	<button class="erp_bt bt_version">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_version.png">
                            </div>
                            <span class="btDetail">生成用户</span>
                    </button>
	            </el-col>
	        </el-row>

            <el-form :model="form" :rules="rules" ref="form" label-width="80px" class="demo-ruleForm pl pt">
                <el-form-item label="职员编码" class="pr" prop="employeeCode">
                    <el-input v-model="form.employeeCode" label-width="80px"></el-input>
                </el-form-item>
                <el-form-item label="职员名称" class="pr" prop="employeeName">
                    <el-input v-model="form.employeeName"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" class="pr">
                    <el-input v-model="form.mobile"></el-input>
                </el-form-item>
                <el-form-item label="部门" class="pr">
                    <el-select v-model="form.department">
                    <el-option label="" value=""></el-option>
                    <el-option label="" value=""></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="性别">
                    <el-select v-model="form.sex">
                    <el-option label="sex" value="sexTValue"></el-option>
                    <el-option label="sex" value="sexTValue"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="生日" class="pr">
                    <el-input v-model="form.birthday"></el-input>
                </el-form-item>
                <el-form-item>
                </el-form-item>
                <el-form-item>
                </el-form-item>
                <el-form-item>
                </el-form-item>
               

                <el-form-item label="所属店铺">
                    <el-select v-model="form.shopName">
                    <el-option label="广东" value="广东"></el-option>
                    <el-option label="成都" value="成都"></el-option>
                    </el-select>
                </el-form-item>                            
                <el-form-item label="职员类型">
                    <el-checkbox-group v-model="form.employeeTypes">
                    <el-checkbox  label="采购" name="type"></el-checkbox>
                    <el-checkbox label="业务" name="type"></el-checkbox>
                    <el-checkbox label="仓库" name="type"></el-checkbox>
                    <el-checkbox label="店员" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea" :rows="5" resize="none" v-model="form.remark"></el-input>
                </el-form-item>
            </el-form>

        </div>
    </div>
</template>
<script>
    import Btm from '../../base/btm/btm'
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
                        resource: '',
                        remark: ''
                },
                rules: {
                    employeeCode: [
                        { required: true,trigger: 'blur' },
                    ],
                    employeeName: [
                        { required: true, trigger: 'blur' },
                    ],
                },
                addStaffList:{//创建员工资料的参数
                                            
                    "employeeCode": "string",
                    "employeeName": "string",
                    "mobile": "string",
                    "deptId": 0,
                    "sex": 0,
                    "birthday": "2018-03-12T05:54:50.468Z",
                    "discountStart": 0,
                    "discountEnd": 0,
                    "shopId": 0,
                    "remark": "string",
                    "employeeTypeIds": [
                        0
                    ],
                    "id": 0
                    
                },
                validators: {
                    'addStaffList.employeeCode': function (value) {//职员编码
                        return this.Validator.value(value).required().integer();
                    },
                    'addStaffList.employeeName': function (value) {//职员名称
                        return this.Validator.value(value).required().integer();
                    },
                },
            }

                                              
            
        },
        created:function(){
            // console.log(this.$route);
            // console.log(this.$route.params);
            this.$axios.gets('/api/services/app/EmployeeManagement/Get',{id:this.$route.params.id})
            .then(
                rsp=>{
                    console.log(rsp.result);
                    this.form=rsp.result;
                }
            )
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            goBack:function(){//点击切换路由，返回到职员数据列表
                this.$store.state.url='/staff/staffList/default'
                this.$router.push({path:this.$store.state.url})
            },

            addStaff:function(){//保存---新增并保存
            let _this=this;
            console.log(_this.addStaffList)
            _this.$axios.posts('/api/services/app/EmployeeManagement/Create',_this.addStaffList).then(
                             res=>{
                                 console.log(res)
                             }

                         )
                //  console.log('测试新增');
                //  this.Validator().then(function(success){
                //      if(success){
                         
                         
                //      }
                //  })
            },

        },
        components:{
            Btm,
        }
    }
</script>
<style>
   .pl{
       padding-left:20%;
   }
   .pt{
       padding-top:10px;
   }
   .pr{
       padding-right:30%;
   }
   .fs{
       font-size:12px;
   }
   .el-form-item__label {
        font-size: 12px;
   }
   .el-form-item {
        margin-bottom: 10px;
   }
   .el-checkbox__inner {
        width: 20px;
        height: 20px;
   }
   .el-select .el-input__inner {
        cursor: pointer;
        padding-right: 340px;
    }
    .el-textarea__inner{
        width:67%;
    }
    .el-col-24 {
    width: 100%;
    border-bottom: 1px solid #E4E4E4;
    padding-bottom: 5px;
    }
</style>




