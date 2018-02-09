<template>
    <div class="customer-infor-wrapper" style="display: table;background:#fff;width:100%;">
        <div style="display: table-row;">
        <div id="left-box" style="min-width:275px;width:275px;display: table-cell;">
        <el-row class="bg-white">
            <el-col :span="24">
                <el-row class="h48 pl15">
                    <el-col :span="18">
                        <i class="el-icon-search"></i>
                        <span>查询</span>
                    </el-col>
                    <el-col :span="5">
                        <span class="fs12 open" @click="packUp">+ 收起</span>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="bgcolor smallBgcolor" style="margin-top:20px">
                                <label >单位编码</label>
                       </div>
                    </el-col>
                    <el-col :span="14">
                        <div class="smallBgcolor" style="margin-top:20px">
                        <el-input placeholder=""></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="bgcolor smallBgcolor" >
                                <label >单位名称</label>
                       </div>
                    </el-col>
                    <el-col :span="14">
                        <div class="smallBgcolor" >
                        <el-input placeholder=""></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="bgcolor smallBgcolor">
                                <label><small>*</small>基本单位</label>
                       </div>
                    </el-col>
                    <el-col :span="14">
                        <div class="bgcolor smallBgcolor" >
                            <el-select  v-model="value" >
                            <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>

                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="bgcolor smallBgcolor">
                                <label><small>*</small>状态</label>
                       </div>
                    </el-col>
                    <el-col :span="14">
                        <div class="bgcolor smallBgcolor" >
                            <el-select  v-model="value" >
                            <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>

                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">&nbsp;</el-col>
                    <el-col style="text-align:center;margin-bottom:20px;" :span="14">
                        <span class="search-btn" style="float:left;margin-left:10px;">查询</span>
                    </el-col>
                </el-row>
            </el-col>
            </el-row>
        </div>
        <div class=" " style="display: table-cell;width:100%;background:#fff;">
        <el-row >
            <el-col :span="24" class="border-left">
                <el-row class="h48 pt5">
                    <button class="erp_bt bt_add"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
                    <button class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
                    <button class="erp_bt bt_out"><div class="btImg"><img src="../../../static/image/common/bt_inOut.png"></div><span class="btDetail">导出</span></button>
                    <button class="erp_bt bt_version"><div class="btImg"><img src="../../../static/image/common/bt_start.png"></div><span class="btDetail">启用</span></button>
                    <button class="erp_bt bt_auxiliary"><div class="btImg"><img src="../../../static/image/common/bt_auxiliary.png"></div><span class="btDetail">停用</span></button>

                    <button id="refer" @click="refer" class="erp_bt bt_version" style="display:none"><div class="btImg"><img src="../../../static/image/common/bt_start.png"></div><span class="btDetail">查询</span></button>                   
                </el-row>

                <el-row class="pr10 pb10">
                    <el-col :span='4' class="tree-container pl10 pt10" id="bg-white">
                        <el-tree :data="componyTree"></el-tree>
                    </el-col>

                    <el-col :span='19' class="ml10">
                        
                        <el-row>
                            <el-col :xl="6" :lg="12" :md="20" :sm="11" :xs="11">
                                <el-col :span="8">
                                    <div class="bgcolor smallBgcolor" style="margin-top:20px">
                                            <label >单位编码</label>
                                   </div>
                                </el-col>
                                <el-col :span="15">
                                    <div class="smallBgcolor" style="margin-top:20px">
                                    <el-input placeholder=""></el-input>
                                    </div>
                                </el-col>
                            </el-col> 
                        </el-row>
                        <el-row>
                            <el-col :xl="6" :lg="12" :md="20" :sm="11" :xs="11">
                                <el-col :span="8">
                                    <div class="bgcolor smallBgcolor">
                                            <label >单位名称</label>
                                   </div>
                                </el-col>
                                <el-col :span="15">
                                    <div class="smallBgcolor">
                                    <el-input placeholder=""></el-input>
                                    </div>
                                </el-col>
                            </el-col> 
                        </el-row>
                        <el-row>
                            <el-col :xl="6" :lg="12" :md="20" :sm="24" :xs="24">
                                <el-col :span="8">
                                    <div class="bgcolor smallBgcolor" >
                                            <label>状态</label>
                                   </div>
                                </el-col>
                                <el-col :span="15">
                                    <div class="bgcolor smallBgcolor" >
                                        <el-select  v-model="value" >
                                        <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>

                                        </el-select>
                                    </div>
                                </el-col>
                            </el-col>
                        </el-row>
                           <el-row style="margin-bottom:20px;">
                                <el-col :xl="2" :lg="2" :md="4" :sm="4" :xs="6">
                                    &nbsp;
                                </el-col>
                               <el-col :span="5" class="lh40">
                                    <el-checkbox v-model="checked">基本单位</el-checkbox>
                                </el-col>
                           </el-row> 
                            
                       
                        <el-row class="bm-pd10">

                            <el-col :span="12">
                                <span class="shop-title">
                                    多单位
                                </span>
                            </el-col>
                        </el-row>
                        <el-row class="pl10 pr10 pb10">
                            <el-col :span="12">
                                <div class="left">
                                    <button class="erp_bt bt_save"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">增行</span></button>
                                    <button class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删行</span></button>
                                    
                                </div> 
                            </el-col>
                            <el-col :xl="6" :lg="8" :md="10" :sm="11" :xs="11" style="float:right">
                                <div class="right">
                                    <el-input placeholder="" v-model="input4">
                                    <template slot="append">搜索</template>
                                  </el-input> 
                                </div>
                            </el-col>
                        </el-row>
                        <el-row >   
                            <el-table :data="tableData" border style="width: 100%">
                                <el-table-column prop="sequenceNumber" label="序号" width="60">
                                </el-table-column>
                                <el-table-column prop="Number" label="" width="100">
                                    <template scope="scope">
                                        <el-checkbox  ></el-checkbox>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="AttributeEncoding" label="多单位">
                                </el-table-column>
                                <el-table-column prop="attributeName" label="系数">
                                </el-table-column>
                                <el-table-column prop="startUsing" label="备注">
                                </el-table-column>
                                <el-table-column prop="del" label="操作">
                                </el-table-column>
                            </el-table>
                        </el-row>
                    </el-col>
                </el-row>

            </el-col>
        </el-row>
        </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'customerInfor',
        data(){
            return {
                input4:'',
                checked:true,
                try:{
                "groupId": 2,
                "stockId": 1,
                "addressId": 8,
                "completeAddress": "str33ing",
                "transportMethodId": 1,
                "contactPerson": "stri55ng",
                "phone": "18200326666",
                "logisticsCompany": "str55ing",
                "isDefault": true,
                "remark": "st54ring"
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
                tableData: [{
                      sequenceNumber: '1',
                      Number: '',
                      AttributeEncoding: '袋',
                      attributeName: '6',
                      startUsing: '1袋=6个',
                      del: '删除'
                    }, {
                      sequenceNumber: '2',
                      Number: '',
                      AttributeEncoding: '打',
                      attributeName: '12',
                      startUsing: '1打=12个',
                      del: '删除'
                    }, {
                      sequenceNumber: '3',
                      Number: '',
                      AttributeEncoding: '箱',
                      attributeName: '24',
                      startUsing: '1箱=24个',
                      del: '删除'
                    },{
                      sequenceNumber: '4',
                      Number: '',
                      AttributeEncoding: '',
                      attributeName: '',
                      startUsing: '',
                      del: '删除'
                    }],

                    componyTree: [{
                        label: '计量单位',
                        children: [{
                            label: '个',
                            
                        },{
                            label: '箱',
                            
                        },]
                         
                        }],
            }
        },
        created:function(){       
            
        },
        mounted:function(){   
            let content1=document.getElementById('bg-white');//设置高度为全屏
            let height1=window.innerHeight-123;
            content1.style.minHeight=height1+'px';
        },
        methods:{
            packUp(){
                let oleftBox=document.getElementById('left-box');
                let Re=document.getElementById('refer');
                oleftBox.style.display="none";
                Re.style.display="block";
            },
            refer(){
                let oleftBox=document.getElementById('left-box');
                let Re=document.getElementById('refer');
                oleftBox.style.display="block";
                Re.style.display="none";
            },  
            
        },
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

.bgcolor{
    overflow:  visible; 
}
.bt_save{
    background-color: rgb(0,204,255);
}
.bt_save_add{
    background-color: rgb(22,155,213);
}
.store-data-wrapper{
    width: 100%;
    height: auto;
}
.bg-white{
    background: white;
    border-radius: 3px;
}
.bm-pd10{
    border-bottom: 1px solid #e4e4e4;
    margin: 10px 0;
}
.shop-title{
    float: left;
    height: 40px;
    line-height: 40px;
    margin: 0;
    cursor: pointer;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 3px solid rgb(51,204,204);
    color: #000;
    padding: 0 20px;
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

.pl15{
    padding-left: 15px;
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
.pl10{
    padding-left: 10px;
}
.pt10{
    padding-top: 10px;
}
.el-tree{
    background-color: rgba(251, 252, 253, 1);
}
.tree-container{
    background-color: rgba(251, 252, 253, 1);
}
.el-checkbox__input.is-checked+.el-checkbox__label{
    color: #606266;
}
.bgcolor{
    width: 100%;
}
.el-checkbox__inner{
    width: 16px;
    height: 16px;
    background: #f4f4f5;
}
.el-checkbox__inner::after{
    left: 4px;
    top: -2px;
}
.el-input-group__append{
    background-color: rgb(51,204,204);
    color: #fff;
    cursor: pointer;
    border-color: rgb(51,204,204);
}
.el-input__inner{
    
    height: 30px;
}
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