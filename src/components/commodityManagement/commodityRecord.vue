<template>
    <div class="customer-infor-wrapper" style="display: table;background:#fff;width:100%">
        <div style="display: table-row;">
        <div id="left-box" style="min-width:275px;width:275px;display: table-cell;">
        <el-row class="bg-white"  id="box">
           
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
                                <label >商品编码</label>
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
                        <div class="bgcolor smallBgcolor">
                                <label>商品名称</label>
                       </div>
                    </el-col>
                    <el-col :span="14">
                        <div class="smallBgcolor">
                        <el-input placeholder=""></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="bgcolor smallBgcolor">
                                <label>助记码</label>
                       </div>
                    </el-col>
                    <el-col :span="14">
                        <div class="smallBgcolor">
                        <el-input placeholder=""></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="bgcolor smallBgcolor">
                                <label>上市时间(起)</label>
                       </div>
                    </el-col>
                    <el-col :span="14">
                        <div class="smallBgcolor">
                        <el-input placeholder=""></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="bgcolor smallBgcolor">
                                <label>上市时间(终)</label>
                       </div>
                    </el-col>
                    <el-col :span="14">
                        <div class="smallBgcolor">
                        <el-input placeholder=""></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="bgcolor smallBgcolor">
                                <label>状态</label>
                       </div>
                    </el-col>
                    <el-col :span="14">
                        <div class="bgcolor smallBgcolor">
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
                                <label>品牌</label>
                       </div>
                    </el-col>
                    <el-col :span="14">
                        <div class="smallBgcolor">
                        <el-input placeholder=""></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="bgcolor smallBgcolor">
                                <label>状态</label>
                       </div>
                    </el-col>
                    <el-col :span="14">
                        <div class="bgcolor smallBgcolor">
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
        <div class=" " style="display: table-cell;width:100%;">
        <el-row >
            <el-col :span="24" class="border-left" id="bg-white">
                <el-row class="h48 pt5">
                    <button class="erp_bt bt_add" @click="storageData"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
                    <button class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
                    <button class="erp_bt bt_audit"><div class="btImg"><img src="../../../static/image/common/bt_audit.png"></div><span class="btDetail">审核</span></button>
                    <button class="erp_bt bt_in"><div class="btImg"><img src="../../../static/image/common/bt_in.png"></div><span class="btDetail">导入</span></button>
                    <button class="erp_bt bt_out"><div class="btImg"><img src="../../../static/image/common/bt_inOut.png"></div><span class="btDetail">导出</span></button>
                    <button class="erp_bt bt_version"><div class="btImg"><img src="../../../static/image/common/bt_start.png"></div><span class="btDetail">启用</span></button>
                    <button class="erp_bt bt_auxiliary"><div class="btImg"><img src="../../../static/image/common/bt_stop.png"></div><span class="btDetail">停用</span></button> 
                    <button id="refer" @click="refer" class="erp_bt bt_version" style="display:none"><div class="btImg"><img src="../../../static/image/common/bt_start.png"></div><span class="btDetail">查询</span></button>
                </el-row>

                <el-row class="pl10 pt10 pr10 pb10" >
                    <el-col :xl="23" :lg="22" :md="15" :sm="14" :xs="13">
                         <el-table :data="tableData" border style="width: 100%">
                            <el-table-column prop="date" label="序号" width="60">
                            </el-table-column>
                            <el-table-column prop="name" label="" width="50">
                                <template scope="scope">
                                    <el-checkbox  ></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column prop="address" label="商品编码">
                            </el-table-column>
                            <el-table-column prop="address1" label="商品名称">
                            </el-table-column>
                            <el-table-column prop="address2" label="状态" width="100">
                            </el-table-column>
                            <el-table-column prop="address3" label="助记码">
                            </el-table-column>
                            <el-table-column prop="address4" label="商品条码">
                            </el-table-column>
                            <el-table-column prop="address5" label="品牌" >
                            </el-table-column>
                            <el-table-column prop="address6" label="类目" >
                            </el-table-column>
                            <el-table-column prop="address7" label="上市日期" width="100">
                            </el-table-column>
                            <el-table-column prop="address8" label="操作" >
                            </el-table-column>
                        </el-table>
                        <el-row>
                            <el-col :span='10'>
                                <span style="display:inline-block;margin-top:20px;">记录 40，当前第 1 页，共 4 页</span>
                            </el-col>
                            <el-col :span='14'>
                                <el-pagination style="margin-top:20px;" class="text-right" background layout="total, prev, pager, next"  :page-count="totalPage" ></el-pagination>
                            </el-col>
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
                                 date: '1',
                                 name: '',
                                address: '1',
                                address1: '苹果',
                                address2: '已提交',
                                address3: '',
                                address4: '1',
                                address5: '红富士',
                                address6: '水果',
                                address7: '2017.02.02',
                                address8: '查看',
                            }, {
                                  date: '2',
                                 name: '',
                                address: '2',
                                address1: '栗子',
                                address2: '不通过',
                                address3: '',
                                address4: '2',
                                address5: '红富士',
                                address6: '水果',
                                address7: '2017.02.02',
                                address8: '查看',
                            }, {
                                 date: '3',
                                 name: '',
                                address: '3',
                                address1: '梨子',
                                address2: '已反审',
                                address3: '',
                                address4: '3',
                                address5: '红富士',
                                address6: '水果',
                                address7: '2017.02.02',
                                address8: '查看',
                            }, {
                                 date: '4',
                                 name: '',
                                address: '4',
                                address1: '桃子',
                                address2: '已反审',
                                address3: '',
                                address4: '4',
                                address5: '红富士',
                                address6: '水果',
                                address7: '2017.02.02',
                                address8: '查看',
                        }],

                    pageIndex:-1,//分页的当前页码
			        totalPage:20,//当前分页总数
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
            storageData(e){
                this.$store.state.url='/Record/commodityRecord/default'
               this.$router.push({path:this.$store.state.url})//点击切换路由
            },
            shop(){
                let as=document.getElementByClassName('customer-infor-wrapper');
                as.offsetWidth;
            },
            
            handleClick(row) {
                console.log(row);
            },
            storageData(e){
                this.$store.state.url='/Record/commodityRecordDetails/default'
               this.$router.push({path:this.$store.state.url})//点击切换路由
            },
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
            dell(){
                let ocheck=document.getElementsByClassName('is-checked');
            } 
              

        },
    }
</script>

<style scoped>
.customer-infor-wrapper{
    display: flex;
    display: -webkit-flex; 
    width: 100%;
}
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
.bt_audit{
    background-color: rgb(225,153,51);
}
.bt_in{
    background-color: rgb(130,170,252);
}
.bt_save_add{
    background-color: rgb(22,155,213);
}
.bg-white{
    background: white;
    border-radius: 3px;
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
    border: 1px solid #cccccc;
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
.text-right{
    text-align: right;
}
</style>

<style>
.el-checkbox__inner{
    width: 16px !important;
    height: 16px !important;
    background: #f4f4f5;
}
.el-checkbox__inner::after{
    left: 4px;
    top: -2px;
}
.bgcolor{
    width: 100%;
}
.customer-infor-wrapper .el-input input{
    height: 30px;
    line-height: 30px;
    padding-left: 0;
}
/* 重写checkbox */
.customer-infor-wrapper .el-checkbox__inner{
    width: 24px;
    height: 24px;
    border-radius:50% !important; 
}
.customer-infor-wrapper .el-checkbox__inner::after{
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
.customer-infor-wrapper .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.customer-infor-wrapper .el-table td{
    padding: 3px 0;
}
.customer-infor-wrapper .el-table__body{
    text-align: center;
}
/* 重写el-pagination样式 */
/* .customer-infor-wrapper .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
    border-radius: 50%;
} */
/* .customer-infor-wrapper .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 130px;
} */
/* .customer-infor-wrapper .el-input--suffix .el-input__inner{
    padding-right: 0;
}  */
</style>