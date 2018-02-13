<template>
    <div class="customer-infor-wrapper" style="display: table;background:#fff;width:100%;">
        <div style="display: table-row;">
        <div id="left-box" style="min-width:275px;width:275px;display: table-cell;background:#fff;">
        <el-row class="bg-white" id="bg-white">
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
                                <label>属性编码</label>
                       </div>
                    </el-col>
                    <el-col :span="14">
                        <div class="smallBgcolor" style="margin-top:20px">
                        <el-input placeholder="请录入单号"></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="bgcolor smallBgcolor" >
                                <label>属性名称</label>
                       </div>
                    </el-col>
                    <el-col :span="14">
                        <div class="smallBgcolor" >
                        <el-input placeholder="请录入单号"></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="bgcolor smallBgcolor" >
                                <label>控件类型</label>
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
                        <div class="bgcolor smallBgcolor" >
                                <label>必填</label>
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
                        <div class="bgcolor smallBgcolor" >
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
        <div class=" " style="display: table-cell; width:100%;height:100%;border-left:1px solid #e4e4e4">
        <el-row style="">
            <el-col :xl="4" :lg="4" :md="4" :sm="4" :xs="4" class="tree-container">
                <el-tree :data="componyTree"></el-tree>
            </el-col>
            <el-col  class="border-left" :span="20">
                <el-row class="h48 pt5">
        
                        <button class="erp_bt bt_add" @click="storageData" ><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
                    
                        <button class="erp_bt bt_del" @click="dell"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
                  
                        <button class="erp_bt bt_audit"><div class="btImg"><img src="../../../static/image/common/bt_audit.png"></div><span class="btDetail">审核</span></button>
                 
                        <button class="erp_bt bt_in"><div class="btImg"><img src="../../../static/image/common/bt_in.png"></div><span class="btDetail">导入</span></button>

                   
                        <button class="erp_bt bt_out"><div class="btImg"><img src="../../../static/image/common/bt_inOut.png"></div><span class="btDetail">导出</span></button>
                 
                        <button class="erp_bt bt_version"><div class="btImg"><img src="../../../static/image/common/bt_start.png"></div><span class="btDetail">启用</span></button>

                        <button class="erp_bt bt_auxiliary"><div class="btImg"><img src="../../../static/image/common/bt_stop.png"></div><span class="btDetail">停用</span></button> 
                        <button id="refer" @click="refer" class="erp_bt bt_version" style="display:none"><div class="btImg"><img src="../../../static/image/common/bt_start.png"></div><span class="btDetail">查询</span></button>
                    
                                        
                    
                                      
                </el-row>

                 <el-row class=" pt10 pr10 pb10">
                    

                    <el-col :xl="24" :lg="24" :md="24" :sm="24" :xs="24" class="ml10">
                         <el-table :data="tableData" border style="width: 100%" class="text-center">
                            <el-table-column prop="date" label="序号" width="60">
                                
                            </el-table-column>
                            <el-table-column  prop="name" label="" width="50">
                                <template scope="scope">
                                    <el-checkbox  ></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column prop="address" label="属性编码">
                            </el-table-column>
                            <el-table-column prop="address2" label="属性名称">
                            </el-table-column>
                            <el-table-column prop="address3" label="状态" width="">
                            </el-table-column>
                            <el-table-column prop="address4" label="控件类型">
                            </el-table-column>
                            <el-table-column prop="address5" label="显示顺序">
                            </el-table-column>
                            <el-table-column prop="address6" label="必填" width="">
                                <template scope="scope">
                                    <el-checkbox  ></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column prop="address7" label="备注" width="">
                            </el-table-column> 
                            <el-table-column prop="address8" label="操作" width="">
                            </el-table-column>
                        </el-table>
                    <el-pagination
                     style="margin-top:20px;" 
                     class="text-right" 
                     background layout="total, prev, pager, next" 
                     :page-count="totalPage" >
                     </el-pagination>   
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
                                 date:'0',
                                 name: '1',
                                address: '1',
                                address2: '材质',
                                address3: '已启用',
                                address4: '下拉',
                                address5: '1',
                                address6: '',
                                address7: '改姓可',
                                address8: '查看',
                            }, {
                                 date:'0', 
                                name: '1',
                                address: '1.1',
                                address2: '材质',
                                address3: '已停用',
                                address4: '日期',
                                address5: '2',
                                address6: '好用',
                               
                                address7: '好用',
                                address8: '查看',
                            }, {
                                 date:'',
                                name: '1',
                                address: '1.2',
                                address2: '洗涤方式',
                                address3: '已启用',
                                address4: '手工录入',
                                address5: '3',
                                address6: '',
                                
                                address7: '不好用',
                                address8: '查看',
                            }, {
                                 date:'0',
                                name: '1',
                                address: '2',
                                address2: '款式',
                                address3: '已停用',
                                address4: '关联档案',
                                
                                address5: '4',
                                address6: '',
                                address7: '',
                                address8: '查看',
                        }],

                    componyTree: [{
                        label: '商品属性',
                        children: [{
                            label: '材质',
                            children: [{
                            // label: '材质',
                            label: '洗涤方式'
                            }
                            ],
                        },
                            {
                             label: '款式',
                             children: [{
                            
                            }] 
                            }],
                        

                        
                        }],
                pageIndex:1,//分页的当前页码
                totalPage:0,//当前分页总数
                oneItem:10,//每页有多少条信息
                multipleSelection: [],//复选框选中数据
                page:1,//当前页
                treeCheck:[],
                isClick:[],
                load:true,
                totalItem:0,//总共有多少条消息
                tableLoading:true,
                treeLoading:true,
                Sorting:'',//table搜索
            }
        },
        created:function(){
            this.datashop();
            this.loadTableData();
        },
        mounted:function(){   
            let content1=document.getElementById('bg-white');//设置高度为全屏
            let height1=window.innerHeight-123;
            content1.style.minHeight=height1+'px';
        },
        methods:{
            loadTableData(){
                let _this=this;
                _this.tableLoading=true;
                _this.$axios.gets('/api/services/app/ModuleManagement/GetAll',{SkipCount:(_this.page-1)*_this.oneItem,MaxResultCount:_this.oneItem,Sorting:_this.Sorting}).then(function(res){
                    console.log(res)
                })
            },
            datashop(){
                for(var i=0;i<this.tableData.length;i++){
                    this.tableData[i].date=i+1;
                }

            },
            storageData(e){
                this.$store.state.url='/commodity/commodityPropertyDetails/default'
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
                let ocheck=document.getElementsByClassName('el-table_1_column_2');
                let oTh=[];
                let aa=[];
                let bb=[];
                for(var i=0;i<ocheck.length;i++){
                  oTh.push(ocheck[i].children[0].children[0]);
                 
                }//获取全部的复选框
                oTh.splice(0,1);
                for(var i=0;i<oTh.length;i++){

                    if(oTh[i].getAttribute("aria-checked")=='true'){
                        aa.push(oTh[i]);
                        oTh[i].children[0].classList.remove("is-checked")
                    }     
                }//找到当前选中的复选框
                for(var i=0;i<aa.length;i++){
                    bb.push(parseInt(aa[i].parentNode.parentNode.parentNode.children[0].children[0].innerHTML)-1)      
                }//找到当前选择的复选框的序号
                for(var i=0;i<bb.length;i++){
                    
                    this.tableData.splice(bb[i]-[i],1);
                    for(var j=0;j<this.tableData.length;j++){
                        this.tableData[j].date=j+1;
                    }
                    
                    
                }
                
                

            }
        }
       

        

    }
</script>

<style scoped>
.smallBgcolor .el-select{
    width: 100% !important ;
    margin-left: 10px;
    
}
.bt_audit{
    background-color: rgb(225,153,51);
}
.bt_in{
    background-color: rgb(130,170,252);
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
    margin-right: 10px;
    margin-left: 10px;
}
.bgcolor{
    overflow:  visible; 
}
.shopclass{
    background: rgba(251, 252, 253, 1);
}
.erp_bt{
    padding: 0 8px !important;    
}
.store-data-wrapper{
    width: 100%;
    height: auto;
}
.bt_audit{
    background-color: rgb(225,153,51);
}
.bt_in{
    background-color: rgb(130,170,252);
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
.bgcolor{
    width: 100%;
}
.el-table__header-wrapper .el-table__header th{
    white-space: nowrap;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
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
.text-left{
    text-align: left;
}
.text-center{
    text-align: center;
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