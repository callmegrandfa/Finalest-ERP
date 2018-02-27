<template>
    <div class="customer-infor-wrapper" style="float:left;background:#fff;width:100%;">
        <query :data="querychend" v-on:listquery="querylog" ></query>  
        <div id="bgh">
            <el-row style="width:100%;" >
                <el-col id="bg-white"  class="border-left" :span="24" >
                    <btm :date="bottonbox" v-on:listbtm="btmlog"> </btm>
                     <el-row class="">
                        <el-col :span="24" class="">
                             <el-table  @selection-change="handleSelectionChange" :data="tableData" border style="width: 100%" class="text-center">
                                <el-table-column prop="date" label="序号" width="60">   
                                </el-table-column>
                                <el-table-column  type="selection" label="" width="50">                          
                                </el-table-column>
                                <el-table-column prop="address" label="品牌编码">
                                </el-table-column>
                                <el-table-column prop="address2" label="品牌名称">
                                </el-table-column>
                                <el-table-column prop="address3" label="英文名称" width="">
                                </el-table-column>
                                <el-table-column prop="address4" label="备注">
                                </el-table-column>
                                <el-table-column prop="address5" label="状态">
                                </el-table-column>
                                <el-table-column prop="address6" label="创建人" width="">      
                                </el-table-column>
                                <el-table-column prop="address7" label="创建时间" width="">
                                </el-table-column> 
                                <el-table-column prop="address8" label="操作" width="">
                                    <template slot-scope="scope">
                                        <el-button type="text" size="small"   >删除</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        <el-pagination style="margin-top:20px;"  class="text-right"  background layout="total, prev, pager, next"  :page-count="totalPage" >
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
                    url: '/commodityleimu/CommodityCategoriesDetails',
                   botton:[{
                    class: 'erp_bt bt_add',
                    imgsrc: '../../../static/image/common/bt_add.png',
                    text: '新增'
                },{
                    class: 'erp_bt bt_auxiliary',
                    imgsrc: '../../../static/image/common/u470.png',
                    text: '取消'
                },{
                    class: 'erp_bt bt_save',
                    imgsrc: '../../../static/image/common/bt_save.png',
                    text: '保存'
                },{
                    class: 'erp_bt bt_del',
                    imgsrc: '../../../static/image/common/bt_del.png',
                    text: '删除'
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
                querychend:{
                    up:'',
                    demand:[{
                    must: '',
                    title: '品牌编码',
                    place: ''                
                },{
                    must: '',
                    title: '品牌名称(中文)',
                    place: ''                 
                },{
                    must: '',
                    title: '品牌名称(英文)',
                    place: ''                 
                },{
                    must: '*',
                    title: '状态',
                    options:[{
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
                    }]                
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
                                address2: '耐克',
                                address3: 'Nike',
                                address4: '',
                                address5: '以启用',
                                address6: '创建人',
                                address7: '创建时间',
                                address8: '删除',
                            }, {
                                 date:'0', 
                                name: '',
                                address: '',
                                address2: '',
                                address3: '',
                                address4: '',
                                address5: '',
                                address6: '',
                               
                                address7: '',
                                address8: '删除',
                            }, {
                                 date:'',
                                name: '',
                                address: '',
                                address2: '',
                                address3: '',
                                address4: '',
                                address5: '',
                                address6: '',
                                
                                address7: '',
                                address8: '删除',
                            }, {
                                 date:'0',
                                name: '',
                                address: '',
                                address2: '',
                                address3: '',
                                address4: '',
                                
                                address5: '',
                                address6: '',
                                address7: '',
                                address8: '删除',
                        }],

                    componyTree: [{
                        label: '商品属性',
                        children: [{
                            label: '材质',
                            children: [{
                            label: '洗涤方式'
                            }],
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
            btmlog:function(data){
                let oleftBox=document.getElementById('left-box');
                oleftBox.style.display="block";
                let ocate= document.getElementById('bgh')
                ocate.style.width="calc(100% - 275px)";
            },
            querylog:function(data){
                let _this=this;
                if(data){
                    let ocate= document.getElementById('bgh')
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
            handleSelectionChange(val) {//点击复选框选中的数据
                this.multipleSelection = val;
            },
            datashop(){
                for(var i=0;i<this.tableData.length;i++){
                    this.tableData[i].date=i+1;
                }

            },
        },
        components:{
            Query,
            Btm
        }
    }
</script>

<style scoped>
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
.border-left{
    border-left: 1px solid #E4E4E4;
}
#bgh{
   float: left;
   width: calc(100% - 275px); 
}
</style>

<style>
.el-checkbox__inner{
    width: 16px;
    height: 16px;
    background: #f4f4f5;
}
.el-checkbox__inner::after{
    left: 4px;
    top: -2px;
}
</style>