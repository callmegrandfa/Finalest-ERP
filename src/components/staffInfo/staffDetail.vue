<template>
     <div class="customer-infor-wrapper" style="float:left;background:#fff;width:100%;">
        <div id="bgc">
	        <el-row >
	            <el-col :span="24">
	            	<btm :date="btnbox"> </btm>
	            </el-col>
	        </el-row>
            <el-form ref="form" :model="form" label-width="80px" class="pl fs pt ">
                <el-form-item label="职员编码" class="pr">
                    <el-input v-model="form.number" label-width="80px"></el-input>
                </el-form-item>
                <el-form-item label="职员名称" class="pr">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" class="pr">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="部门" class="pr">
                    <el-input v-model="form.department"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-select v-model="form.gender">
                    <el-option label="女" value="女"></el-option>
                    <el-option label="男" value="男"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="生日" class="pr">
                    <el-input v-model="form.birthday"></el-input>
                </el-form-item>
                <el-form-item label="折扣范围">
                    <el-select v-model="form.discount">
                    <el-option label="广东总部" value="80%"></el-option>
                    <el-option label="广东分部" value="90%"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所属店铺">
                    <el-select v-model="form.shops">
                    <el-option label="广东" value="广东"></el-option>
                    <el-option label="成都" value="成都"></el-option>
                    </el-select>
                </el-form-item>                            
                <el-form-item label="职员类型">
                    <el-checkbox-group v-model="form.type">
                    <el-checkbox label="采购" name="type"></el-checkbox>
                    <el-checkbox label="业务" name="type"></el-checkbox>
                    <el-checkbox label="仓库" name="type"></el-checkbox>
                    <el-checkbox label="店员" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="备注" >
                    <el-input type="textarea" :rows="5" resize="none" v-model="form.tips"></el-input>
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
                btnbox:{
                     url:"/staff/staffList",
                     botton:[
                         {class: 'erp_bt bt_back',
                          imgsrc: '../../../static/image/common/bt_back.png',
                          text: '返回'
                         },
                         {class: 'erp_bt bt_add',
                          imgsrc: '../../../static/image/common/bt_add.png',
                          text: '新增'
                         },
                         {class: 'erp_bt bt_modify',
                          imgsrc: '../../../static/image/common/bt_modify.png',
                          text: '修改'
                         },
                         {class: 'erp_bt bt_save',
                          imgsrc: '../../../static/image/common/bt_save.png',
                          text: '保存'
                         },
                         {class: 'erp_bt bt_cancel',
                          imgsrc: '../../../static/image/common/bt_cancel.png',
                          text: '取消'
                         },
                         {class: 'erp_bt bt_print',
                          imgsrc: '../../../static/image/common/bt_print.png',
                          text: '打印'
                         },
                         {class: 'erp_bt bt_version',
                          imgsrc: '../../../static/image/common/bt_version.png',
                          text: '生成用户'
                         },
                     ]
                },
                 form: {
                        number: '',
                        name: '',
                        phone: '',
                        department: '',
                        gender:'',
                        birthday:'',
                        discount:'',
                        shops:'',
                        type: [],
                        resource: '',
                        tips: ''
                }
                   
                
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        },
        components:{
            Btm,
        }
    }
</script>
<style>
   .pl{
       padding-left:80px;
   }
   .pt{
       padding-top:10px;
   }
   .pr{
       padding-right:70%;
   }
   .fs{
       font-size:12px;
   }
   .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 12px;
    color: #000;
    line-height: 40px;
    padding: 0 12px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
   }
   .el-form-item {
    margin-bottom: 10px;
   }
    .el-checkbox__inner {
        width: 20px;
        height: 20px;
    }
</style>




