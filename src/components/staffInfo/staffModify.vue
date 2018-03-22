<template>
     <div class="customer-modify-wrapper" style="float:left;background:#fff;width:100%;">
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
                        <button class="erp_bt bt_modify" @click="edit">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_modify.png">
                                </div>
                                <span class="btDetail">修改</span>
                        </button>
                        <button class="erp_bt bt_save" v-show="isShow" @click="save">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_save.png">
                                </div>
                                <span class="btDetail">保存</span>
                        </button>
                        <button class="erp_bt bt_cancel" @click="cancel" v-show="isShow">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_cancel.png">
                                </div>
                                <span class="btDetail">取消</span>
                        </button>
                    </el-col>
                </el-row>
            </div>
	        <div class="customer-modify-form">
                    <el-form :model="form"  label-width="80px" class="demo-ruleForm pl pt" >
                        <el-form-item label="职员编码" class="pr">
                            <el-input v-model="form.employeeCode" label-width="80px" :disabled="isForbid" @change="isUpdate"></el-input>
                        </el-form-item>
                        <el-form-item label="职员名称" class="pr">
                            <el-input v-model="form.employeeName" :disabled="isForbid"  @change="isUpdate"></el-input>
                        </el-form-item>
                        <el-form-item label="业务组织" class="pr">
                            <el-select v-model="form.ouId" :disabled="isForbid" @change="isUpdate">
                                 <el-option v-for="item in ouIdoptions" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="手机号码" class="pr">
                            <el-input v-model="form.mobile" :disabled="isForbid" @change="isUpdate"></el-input>
                        </el-form-item>
                        <el-form-item label="部门" class="pr">
                            <el-select v-model="form.deptId" :disabled="isForbid" @change="isUpdate">
                               <el-option v-for="item in deptIdoptions" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="性别">
                            <el-select v-model="form.sex" :disabled="isForbid" @change="isUpdate">
                                <el-option label="男" :value="1"></el-option>
                                <el-option label="女" :value="2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="生日" class="pr">
                            <el-input v-model="form.birthday" :disabled="isForbid" @change="isUpdate"></el-input>
                        </el-form-item>
                        <el-form-item label="所属店铺">
                            <el-select v-model="form.shopId" :disabled="isForbid" @change="isUpdate">
                           <el-option v-for="item in shopIdoptions" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>                            
                        <el-form-item label="职员类型">
                            <el-checkbox-group v-model="employeeTypeIds" :disabled="isForbid" @change="isUpdate">
                                <el-checkbox v-for="item in employeeIdoptions"  :label="item.label" :key="item.label">{{item.text}}</el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="备注">
                            <el-input type="textarea" :rows="5" resize="none" v-model="form.remark" :disabled="isForbid"  @change="isUpdate"></el-input>
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
                isForbid:true,//是否禁止编辑
                isShow:false,//是否显示保存按钮
                update:false,//设置更改信息的初始值
                form: {
                        "groupId":0 ,
                        "id":0,
                        "ouId": 0,
                        "ouFullname": "",
                        "deptId":0 ,
                        "deptName": "",
                        "shopId":0 ,
                        "shopName": "",
                        "employeeCode": "",
                        "employeeName": "",
                        "mobile": "",
                        "sex":0 ,
                        "sexTValue": "",
                        "birthday": "",
                        "remark": "",
                        "employeeTypes": [
                            {
                            "groupId": 0,
                            "employeeId": 0,
                            "employeeTypeid": 0,
                            "employeeTypeidTValue": ""
                            }
                        ],
                },
                ouIdoptions: [],//------所属组织--------
                deptIdoptions:[],//------所属部门--------
                shopIdoptions:[],//------所属店铺--------
                
                employeeIdoptions:[//------职员类型--------
                    { label:1,text: '采购'},
                    { label: 2,text: '业务'}, 
                    { label: 3,text: '仓库'}, 
                    { label: 4,text: '店员'}, 
                ],
               
                updateList:{//保存数据需要的参数
                            "ouId": 0,
                            "employeeCode": "",
                            "employeeName": "",
                            "mobile": "",
                            "deptId": 0,
                            "sex": 1,
                            "birthday": "",
                            "discountStart": 0,
                            "discountEnd": 0,
                            "shopId": 0,
                            "remark": "",
                            "employeeTypeIds": [],
                            "id": 0
                    },
                employeeTypeIds:[],
            }
        },
        created:function(){
            this.getDataList();
            this.getOuIdMsg();
            this.getDepmsg();
            this.getShopmsg();
            
        },
        methods: {
            // 获取数据渲染
            getDataList(){
                let _this=this;
                _this.$axios.gets('/api/services/app/EmployeeManagement/Get',{id:this.$route.params.id})
                .then(
                    rsp=>{
                        rsp.result.sex= + rsp.result.sex;
                        rsp.result.ouId= + rsp.result.ouId;
                        rsp.result.deptId= + rsp.result.deptId;
                        _this.form=rsp.result;
                         for(let val of rsp.result.employeeTypes){
                            _this.employeeTypeIds.push(val.employeeTypeid)
                        }
                        _this.form['employeeTypeIds']=_this.employeeTypeIds;
                        // console.log( _this.form);
                        // console.log(_this.form.employeeTypeIds);
                        
                        
                    }
                )
            },
            // 获取业务组织信息
            getOuIdMsg(){
                let _this=this;
                this.$axios.gets('/api/services/app/OuManagement/GetAll',{SkipCount:_this.SkipCount,MaxResultCount:_this.MaxResultCount
                }).then(
                    rsp=>{
                        // console.log(rsp.result.items);
                        for(let val of rsp.result.items){
                           _this.ouIdoptions.push({label:val.ouFullname,value:val.id})
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
                             _this.deptIdoptions.push({label:val.deptName,value:val.id})
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
                             _this.shopIdoptions.push({label:val.shopName,value:val.id})
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
            // 修改，点击修改输入框的编辑状态
            edit(){
                this.isForbid=false;
                this.isShow=true;
            },
            isUpdate(){//判断是否修改过信息
                this.update=true;
            },
            // 保存修改的数据
            save(){
                let _this=this;
                _this.updateList.ouId=_this.form.ouId;
                _this.updateList.employeeCode=_this.form.employeeCode;
                _this.updateList.employeeName=_this.form.employeeName;
                _this.updateList.mobile=_this.form.mobile;
                _this.updateList.deptId=_this.form.deptId;
                _this.updateList.sex=_this.form.sex;
                _this.updateList.birthday=_this.form.birthday;
                _this.updateList.shopId=_this.form.shopId;
                _this.updateList.employeeTypeIds=_this.form.employeeTypeIds;
                _this.updateList.remark=_this.form.remark;
                _this.updateList.id=_this.form.id;
                if(_this.update){
                    _this.$axios.puts('/api/services/app/EmployeeManagement/Update',_this.updateList).then(
                        rsp=>{
                             _this.open('修改成功','el-icon-circle-check','successERP');
                             console.log(_this.updateList);
                             this.isForbid=!this.isForbid;
                             _this.update=false;
                             _this.isShow=!this.isShow;
                        },
                        rsp=>{
                            _this.open('修改失败','el-icon-error','faildERP');
                        }
                    )
                }else{
                    _this.open('没有需要保存的项目','el-icon-warning','noticERP');
                    
                }
               

            },
            // 取消
            cancel(){
                if(this.isForbid==false){
                    this.isForbid=!this.isForbid;
                    this.getDataList();
                }
            },
        },      
        
    }
</script>

<style scope>
    .customer-modify-form{
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
    .customer-modify-wrapper .el-select{
        display: block;
    }    
    .customer-modify-wrapper .btnBd {
    width: 100%;
    border-bottom: 1px solid #E4E4E4;
    padding-bottom: 5px;
    }
</style>

