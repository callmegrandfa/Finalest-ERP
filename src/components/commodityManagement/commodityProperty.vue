<template>
    <div class="commodityProperty" style="background:#fff;width:100%;float:left">
        <div id="left-box" style="min-width:275px;width:275px;background:#fff;float:left">
        <el-row class="bg-white"  v-show="ifWidth">
            <el-col :span="24">
                <el-row class="h48 pl15">
                    <el-col :span="18">
                        <i class="el-icon-search"></i>
                        <span>查询</span>
                    </el-col>
                    <el-col :span="5">
                        <span class="fs12 open" @click="closeLeft">+ 收起</span>
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
        <div id="cp" style="float:left">
        <el-row style="">
            <el-col  class="border-left" :span="24" id="bg-white">
                <el-col :span="ifWidth?0:2" class="search-block" >
                    <div @click="openLeft">
                        <div style="display:inline-block" >
                            <img src="../../../static/image/common/search_btn.png">
                        </div>
                        <div style="display:inline-block;margin-left:2px;font-size:16px;" >
                            <span>查询</span>
                        </div>
                        <div class="out-img" >
                            <span class="search_info_open" style="margin-left:0">+</span>
                        </div>
                    </div>
                </el-col>
                <el-col :span="ifWidth?24:22">
                    <btm :date="bottonbox" v-on:listbtm="btmlog"> </btm>
                </el-col> 
                
                <div style="min-width:200px;width:200px;float:left;">
                    <el-col :span='24' class="tree-container pl10 pt10">
                        <el-tree :data="componyTree"></el-tree>
                    </el-col>
                </div>
                 <el-row class="table-width pt10 pr10 pb10" style="float:left">
                    <el-col :xl="24" :lg="24" :md="24" :sm="24" :xs="24" class="ml10">
                         <el-table :data="tableData" border style="width: 100%" class="text-center">
                            <el-table-column prop="date" label="序号" width="60">
                                
                            </el-table-column>
                            <el-table-column  prop="name" label="" width="50">
                                <template slot-scope="scope">
                                    <el-checkbox  ></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column prop="address" label="属性编码">
                            </el-table-column>
                            <el-table-column prop="address2" label="属性名称">
                                <template slot-scope="scope">
                                    <el-button type="text"    >{{tableData[scope.$index].address2}}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="address3" label="状态" width="">
                            </el-table-column>
                            <el-table-column prop="address4" label="控件类型">
                            </el-table-column>
                            <el-table-column prop="address5" label="显示顺序">
                            </el-table-column>
                            <el-table-column prop="address6" label="必填" width="">
                                <template slot-scope="scope">
                                    <el-checkbox  ></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column prop="address7" label="备注" width="">
                            </el-table-column> 
                            <el-table-column prop="address8" label="操作" width="">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" @click="modify(scope.row)"  >查看</el-button>
                                </template>
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
</template>

<script>
import Query from '../../base/query/query'
import Btm from '../../base/btm/btm'
import Tree from '../../base/tree/tree'
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
                bottonbox:{
                    url: '/commodity/commodityPropertyDetails',
                   botton:[{
                    class: 'erp_bt bt_add',
                    imgsrc: '../../../static/image/common/bt_add.png',
                    text: '新增'
                },{
                    class: 'erp_bt bt_del',
                    imgsrc: '../../../static/image/common/bt_del.png',
                    text: '删除'
                },{
                    class: 'erp_bt bt_audit',
                    imgsrc: '../../../static/image/common/bt_audit.png',
                    text: '审核'
                },{
                    class: 'erp_bt bt_in',
                    imgsrc: '../../../static/image/common/bt_in.png',
                    text: '导入'
                },{
                    class: 'erp_bt bt_out',
                    imgsrc: '../../../static/image/common/bt_inOut.png',
                    text: '导出'
                },{
                    class: 'erp_bt bt_version',
                    imgsrc: '../../../static/image/common/bt_start.png',
                    text: '启用'
                },{
                    class: 'erp_bt bt_auxiliary',
                    imgsrc: '../../../static/image/common/bt_stop.png',
                    text: '停用'
                }]},
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
                                address8: '',
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
                                address8: '',
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
                                address8: '',
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
                                address8: '',
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
                ifWidth:true,
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
            closeLeft:function(){
                let self = this;
                self.ifWidth = false;
                let obgh=document.getElementById('cp');
                obgh.style.width="100%";
            },
            openLeft:function(){
               let self = this;
               self.ifWidth = true;
               let obgh=document.getElementById('cp');
                obgh.style.width="calc(100% - 275px)";
            },
            modify(row){
                this.$store.state.url='/commodity/commodityPropertyDetails/'+row.address5;
                this.$router.push({path:this.$store.state.url});
            },
            btmlog:function(data){
                let oleftBox=document.getElementById('left-box');
                oleftBox.style.display="block";
                let ocate= document.getElementById('cp')
                ocate.style.width="calc(100% - 275px)";
            },
            querylog:function(data){
                let _this=this;
                if(data){
                    let ocate= document.getElementById('cp')
                    ocate.style.width="100%";
                    _this.bottonbox.botton.push({
                        class: 'erp_bt bt_auxiliary',
                        imgsrc: '../../../static/image/common/bt_stop.png',
                        text: '查询'
                    })
                }
            },
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
            
                
                

        },
        components:{
            Query,
            Btm,
            Tree
        }

        

    }
</script>

<style scoped>
.el-tree{
        background-color: transparent;
    }
    .pt10{
        padding-top: 10px;
    }
    .pl10{
        padding-left: 10px;
    }
.ml10{
    margin-left: 10px;
}
.pt10{
    padding-top: 10px;
}
.border-left{
    border-left: 1px solid #E4E4E4;
}
#cp{
    width: calc(100% - 275px);
}
.table-width{
    width: calc(100% - 200px);
}
.fs14{
        font-size: 14px;
        color: rgba(0, 0, 0, 0.349019607843137);
    }
    .fs12{
        font-size: 12px;
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
    .pl15{
        padding-left: 15px;
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
        margin-right: 10px;
        margin-left: 10px;
    }
    .bgcolor{
        overflow:  visible; 
    }
    .bg-white{
        background: white;
        border-radius: 3px;
    } 
    .h48{
        height: 48px;
        line-height: 48px;
        border-bottom: 1px solid #E4E4E4;
    }
</style>

<style>
.commodityProperty .bgcolor{
    width: 100%;
}
.el-checkbox__inner{
    width: 16px ;
    height: 16px ;
    background: #f4f4f5 ;
}
.el-checkbox__inner::after{
    left: 4px ;
    top: -2px ;
}
</style>