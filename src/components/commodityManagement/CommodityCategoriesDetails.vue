<template>
    <div class="CommodityCategoriesDetails">
        <el-row class="bg-white">
            <el-col :span='24' class="border-left">
               <btm :date="bottonbox" v-on:listbtm="btmlog"> </btm>
               <el-row class="pl10 pr10" style="margin-top:20px">
                    <el-col :span="24">
                        <el-row>
                            <el-col :span="2">
                                <div class="bgcolor smallBgcolor" >
                                    <label ><small>*</small>上级商品类目</label>
                               </div>
                            </el-col>
                            <el-col :span="3">
                                <div class="smallBgcolor">
                                    <el-input placeholder=""></el-input>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="24">
                        <el-row>
                            <el-col :span="2">
                                <div class="bgcolor smallBgcolor" >
                                    <label ><small>*</small>商品类目编码</label>
                               </div>
                            </el-col>
                            <el-col :span="3">
                                <div class="smallBgcolor" >
                                    <el-input placeholder="" v-model="addItem.categoryCode"></el-input>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="24">
                        <el-row>
                            <el-col :span="2">
                                <div class="bgcolor smallBgcolor">
                                        <label ><small>*</small>商品类目名称</label>
                               </div>
                            </el-col>
                            <el-col :span="3">
                                <div class="smallBgcolor" >
                                <el-input placeholder="" v-model="addItem.categoryName"></el-input>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="24">
                        <el-row>
                            <el-col :span="2">
                                <div class="bgcolor smallBgcolor">
                                        <label><small>*</small>助记码</label>
                               </div>
                            </el-col>
                            <el-col :span="3">
                                <div class="bgcolor smallBgcolor">
                                    <el-select  v-model="addItem.mnemonic" >
                                    <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>

                                    </el-select>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row class="pl10  pr10">
                    <el-col :span="24">
                        <el-row>
                            <el-col :span="2">
                                <div class="bgcolor smallBgcolor">
                                        <label ><small>*</small>状态</label>
                               </div>
                            </el-col>
                            <el-col :span="3">
                                <div class="smallBgcolor" >
                                <el-input placeholder="" v-model="addItem.status" ></el-input>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="24">
                        <el-row>
                            <el-col :span="2">
                                <div class="bgcolor smallBgcolor">
                                        <label ><small>*</small>备注</label>
                               </div>
                            </el-col>
                            <el-col :span="15">
                                <div class="smallBgcolor" >
                                <el-input placeholder="" v-model="addItem.remark"></el-input>
                                </div>
                            </el-col>
                        </el-row> 
                    </el-col>
                </el-row>
                <el-row class="pl10 pr10">
                    <el-col :span="2" style="">
                        &nbsp;
                    </el-col>
                    <el-col :span="2" style="margin-left:0">
                        <div class="bgcolor smallBgcolor">
                            <el-checkbox v-model="addItem.isService">服务类（虚拟）</el-checkbox>
                        </div>
                    </el-col> 
                </el-row>
                <el-row class="pl10 pr10 pt10" style="border-top:1px solid #e4e4e4;   ">
                    <el-col :span="24" style="margin-bottom:30px">
                        <h4>审计信息</h4>
                    </el-col>
                    <el-col :span="6">
                        <el-row>
                            <el-col :span="8">
                                <div class="bgcolor smallBgcolor">
                                        <label ><small>*</small>创建人</label>
                               </div>
                            </el-col>
                            <el-col :span="13">
                                <div class="smallBgcolor">
                                <el-input placeholder="" v-model="addItem.createdBy"></el-input>
                                </div>
                            </el-col>
                        </el-row> 
                    </el-col>
                    <el-col :span="6">
                        <el-row>
                            <el-col :span="8">
                                <div class="bgcolor smallBgcolor">
                                        <label ><small>*</small>创建时间</label>
                               </div>
                            </el-col>
                            <el-col :span="13">
                                <div class="smallBgcolor">
                                    <el-date-picker
                                    v-model="addItem.createdTime"
                                    type="datetime"
                                    placeholder="选择日期时间">
                                    </el-date-picker>
                                </div>
                            </el-col>
                        </el-row> 
                    </el-col>
                    <el-col :span="6">
                        <el-row>
                            <el-col :span="8">
                                <div class="bgcolor smallBgcolor">
                                        <label ><small>*</small>修改人</label>
                               </div>
                            </el-col>
                            <el-col :span="13">
                                <div class="smallBgcolor">
                                <el-input placeholder="" v-model="addItem.modifiedBy"></el-input>
                                </div>
                            </el-col>
                        </el-row> 
                    </el-col>
                    <el-col :span="6">
                        <el-row>
                            <el-col :span="8">
                                <div class="bgcolor smallBgcolor">
                                        <label ><small>*</small>修改时间</label>
                               </div>
                            </el-col>
                            <el-col :span="13">
                                <div class="smallBgcolor" >
                                    <el-date-picker
                                    v-model="addItem.modifiedTime"
                                    type="datetime">
                                    </el-date-picker>
                                </div>
                            </el-col>
                        </el-row> 
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
                radio:'1',
                options: [{
                    value: '选项1',
                    label: '仓库'
                    }, {
                    value: '选项2',
                    label: '地址'
                    }, {
                    value: '选项3',
                    label: '总部'
                    }, {
                    value: '选项4',
                    label: '总部2'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                    }],
                bottonbox:{
                   //url: '/commodityleimu/CommodityCategories',
                   url: '/commodityleimu/commodityClassHeading',
                   botton:[{
                    class: 'erp_bt bt_back',
                    imgsrc: '../../../static/image/common/bt_back.png',
                    text: '返回'
                },{
                    class: 'erp_bt bt_save',
                    imgsrc: '../../../static/image/common/bt_save.png',
                    text: '保存'
                },{
                    class: 'erp_bt bt_save_add',
                    imgsrc: '../../../static/image/common/bt_save_add.png',
                    text: '新增'
                },{
                    class: 'erp_bt bt_del',
                    imgsrc: '../../../static/image/common/bt_del.png',
                    text: '删除'
                },{
                    class: 'erp_bt bt_auxiliary',
                    imgsrc: '../../../static/image/common/bt_audit.png',
                    text: '审核'
                }]},
                addItem:{
                    //上级商品类目
                    categoryCode:"",//商品类目编码
                    categoryName:"",//商品类目名称
                    mnemonic:"",//助记码
                    status:"",//状态
                    isService:"",//服务类
                    remark:"",//备注
                    createdTime:"",//创建时间
                    createdBy:"",//创建人
                    modifiedTime:"",//修改人
                    modifiedBy:""//修改时间
                },
            }
        },
        created(){
            this.InitModify();
        },
        methods:{
            // back(){//点击新增跳转
            //     this.$store.state.url='/commodityleimu/commodityClassHeading/default'
            //     this.$router.push({path:this.$store.state.url})//点击切换路由
            // },
            btmlog:function(data){
               
            },
            InitModify(){
                let _this=this;
                if(_this.$route.params.id=="default"){
                    return;
                }else{
                    _this.$axios.gets('http://192.168.100.107:8085/api/services/app/CategoryManagement/Get',{Id:_this.$route.params.id}).then(function(res){
                        console.log(res.result)
                        _this.addItem.categoryCode=res.result.categoryCode;
                        _this.addItem.categoryName=res.result.categoryName;
                        _this.addItem.mnemonic=res.result.mnemonic;
                        _this.addItem.status=res.result.status;
                        _this.addItem.isService=res.result.isService;
                        _this.addItem.remark=res.result.remark;
                        _this.addItem.createdTime=res.result.createdTime;
                        _this.addItem.createdBy=res.result.createdBy;
                        _this.addItem.modifiedTime=res.result.modifiedTime;
                        _this.addItem.modifiedBy=res.result.modifiedBy;
                        //_this.tableData=res.result;                   
                    })
                }
                 
            }
        },
        components:{
            Btm,
            Textbox
        }
        
 }   
</script>

<style scoped>
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
.CommodityCategoriesDetails .smallBgcolor .el-input input{
    height: 33px!important;
}
.CommodityCategoriesDetails .bgcolor{
    width: 100%; 
}
/* 重写checkbox */
.el-checkbox__inner{
    width: 16px;
    height: 16px;
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
    top: -2px;
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