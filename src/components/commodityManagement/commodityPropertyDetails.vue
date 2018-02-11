<template>
    <div class="group-management-wrapper">
        <el-row class="bg-white">

            <el-col :span='24' class="border-left">
                <el-row class="h48 pt5">
                    <button class="erp_bt bt_back" @click="back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
                    <button class="erp_bt bt_save" @click="save"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>
                    <button class="erp_bt bt_save_add"><div class="btImg"><img src="../../../static/image/common/bt_save_add.png"></div><span class="btDetail">保存并新增</span></button>
                    <button class="erp_bt bt_add"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
                    <button class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
                    <button class="erp_bt bt_auxiliary"><div class="btImg"><img src="../../../static/image/common/bt_audit.png"></div><span class="btDetail">审核</span></button>                   
                </el-row>

                <el-row class="pl10 pr10">
                    <el-col :span="24">
                        <el-row>
                            <el-col :span="2">
                                <div class="bgcolor smallBgcolor" style="margin-top:20px">
                                        <label >上级属性</label>
                               </div>
                            </el-col>
                            <el-col :span="3">
                                <div class="smallBgcolor" style="margin-top:20px">
                                <el-input placeholder="请输入菜单编码" v-model="addData.data"></el-input>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="24">
                        <el-row>
                            <el-col :span="2">
                                <div class="bgcolor smallBgcolor" style="margin-top:0px">
                                        <label><small>*</small>属性编码</label>
                               </div>
                            </el-col>
                            <el-col :span="3" >
                                <div class="smallBgcolor" style="margin-top:0px">
                                <el-input placeholder="请输入菜单编码" v-model="addData.data" id="coding" ></el-input>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="24">
                        <el-row>
                            <el-col :span="2">
                                <div class="bgcolor smallBgcolor" style="margin-top:0px">
                                       <label> <small>*</small>属性名称</label>
                               </div>
                            </el-col>
                            <el-col :span="3" id="name">
                                <div class="smallBgcolor" style="margin-top:0px">
                                <el-input placeholder="" v-model="addData.address"></el-input>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="24">
                        <el-row>
                            <el-col :span="2">
                                <div class="bgcolor smallBgcolor" style="margin-top:0px">
                                        <label><small>*</small>控件类型</label>
                               </div>
                            </el-col>
                            <el-col :span="3" id="type">
                                <div class="bgcolor smallBgcolor" style="margin-top:0px">
                                    <el-select  v-model="addData.address1" >
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
                                <div class="bgcolor smallBgcolor" style="margin-top:0px">
                                        <label><small>*</small>数据源</label>
                               </div>
                            </el-col>
                            <el-col :span="3">
                                <div class="smallBgcolor" style="margin-top:0px">
                                <el-input placeholder="" v-model="addData.address2"></el-input>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="24">
                        <el-row>
                            <el-col :span="2">
                                <div class="bgcolor smallBgcolor" style="margin-top:0px">
                                        <label>显示顺序</label>
                               </div>
                            </el-col>
                            <el-col :span="3" id="order">
                                <div class="smallBgcolor" style="margin-top:0px">
                                <el-input placeholder="" v-model="addData.address3"></el-input>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="24">
                        <el-row>
                            <el-col :span="2">
                                <div class="bgcolor smallBgcolor" style="margin-top:0px">
                                        <label>级联属性</label>
                               </div>
                            </el-col>
                            <el-col :span="3">
                                <div class="smallBgcolor" style="margin-top:0px">
                                <el-input placeholder="" v-model="addData.address4"></el-input>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="24">
                        <el-col :span="2">
                            <div class="bgcolor smallBgcolor" style="margin-top:0px">
                                    <label>状态</label>
                           </div>
                        </el-col>
                        <el-col :span="3" id="state">
                            <div class="smallBgcolor" style="margin-top:0px">
                            <el-input placeholder="" v-model="addData.address5"></el-input>
                            </div>
                        </el-col>
                    </el-col>
                </el-row>
                <el-row class="pl10 pr10">

                    <el-col :xl="2" :lg="2" :md="4" :sm="5" :xs="6" style="margin-left:80px">
                        <div class="bgcolor smallBgcolor">
                            <el-radio v-model="radio" label="1">系统属性</el-radio>
                        </div>
                    </el-col>
                    <el-col :xl="2" :lg="2" :md="4" :sm="5" :xs="6">
                        <div class="bgcolor smallBgcolor">
                            <el-radio v-model="radio" label="2">必填</el-radio>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="pl10 pr10 pt10  " style="border-top:1px solid #e4e4e4;   ">
                    <el-col :span="24">
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
                            <el-input placeholder=""></el-input>
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
                            <el-input placeholder=""></el-input>
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
                            <el-input placeholder=""></el-input>
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
                            <el-input placeholder=""></el-input>
                            </div>
                        </el-col>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
    export default{
        name:'customerInfor',
        data(){
            return{
                radio:'1',
                addData:{

                },
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
                    value: '',
            }
        },
        methods:{
             back(){//点击新增跳转
                this.$store.state.url='/Record/commodityRecord/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
            save(){//保存数据
                let _this=this;
                _this.$axios.posts('/api/services/app/ModuleManagement/Create',_this.addData).then(function(res){
                    _this.addData.id=res.result.id;
                    _this.$store.state.url='/menu/menuModify/'+res.result.id
                    _this.$router.push({path:_this.$store.state.url})
                    console.log(res)
                },function(res){
                     console.log(res)
                     console.log(_this.addData)
                })
            }
        }
        
 }   
</script>

<style scoped>
.store-data-wrapper{
    width: 100%;
    height: auto;
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

.bgcolor{
    overflow:  visible; 
}
.bt_save{
    background-color: rgb(0,204,255);
}
.bg-white{
    background: white;
    border-radius: 3px;
}
.bt_save_add{
    background-color: rgb(22,155,213);
}
.input-need{
    outline: none;
    border:none;
    width: 100%;
    height: 28px;
}
.h48{
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #E4E4E4;
}
.mt5{
    margin-top: 5px;
}
.mt10{
    margin-top: 10px;
}
.mt20{
    margin-top: 20px;
}

.ml10{
    margin-left: 10px;
}
.pl10{
    padding-left: 10px;
}
.pl15{
    padding-left: 15px;
}
.pt10{
    padding-top: 10px;
}
.pt5{
    padding-top: 5px;
}
.pt20{
    padding-top: 20px;
}
.pb10{
    padding-bottom: 10px;
}
.pr10{
    padding-right: 10px;
}
.h30{
    height: 30px;
    line-height: 30px;
}
.fs14{
    font-size: 14px;
    color: rgba(0, 0, 0, 0.349019607843137);
}
.fs12{
    font-size: 12px;
}
.border1{
    border: 1px solid #999999;
    border-radius: 3px;
}
.border-left{
    border-left: 1px solid #E4E4E4;
}
.btn{
    display: inline-block;
    width: 100%;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: rgba(130, 170, 252, 1);
    color: white;
    border-radius: 3px;
    cursor: pointer;
}
.rbtn{
    display: inline-block;
    width: 100%;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: rgba(242, 242, 242, 1);
    border-radius: 3px;
    cursor: pointer;
}
.search-btn{
    font-size: 12px;
    display: inline-block;
    width: 87px;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    background: #4A6997;
    color: white;
    cursor: pointer;
}
.open{
    display: inline-block;
    width: 49px;
    height: 22px;
    line-height: 22px;
    border: 1px solid #cccccc;
    color: #cccccc;
    text-align: center;
    cursor: pointer;
}
</style>

<style>
.tenant-management-wrapper .el-input input{
    border:none;
    height: 30px;
    line-height: 30px;
    padding-left: 0;
}
/* 重写checkbox */
.tenant-management-wrapper .el-checkbox__inner{
    width: 24px;
    height: 24px;
    border-radius:50% !important; 
}
.tenant-management-wrapper .el-checkbox__inner::after{
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    content: "";
    border: 3px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 11px;
    left: 6px;
    position: absolute;
    top: 1px;
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

/* 重写el-table样式 */
.group-management-wrapper .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.group-management-wrapper .el-table td{
    padding: 3px 0;
}
.group-management-wrapper .el-table__body{
    text-align: center;
}
</style>