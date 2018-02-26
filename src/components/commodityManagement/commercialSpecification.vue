<template>
    <div class="customer-infor-wrapper" style="background:#fff;width:100%;float:left">
        <query :data="querychend"  v-on:listquery="querylog"></query>
        <div id="bs" style="float:left;">
            <el-row  >
                <el-col :span="24" class="border-left" id="bg-white">
                    <btm :date="bottonbox" v-on:listbtm="btmlog"> </btm>
                     <el-row class="" style="position:relative">
                        
                        <div style="width:100%">
                            
                        <el-row>
                        <el-col :span="24" class="" style="display">
                            <el-table :data="tableData" border  class="text-center">
                                <el-table-column prop="date" label="序号" >
                                    
                                </el-table-column>
                                <el-table-column prop="name" label="" >
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
                                <el-table-column prop="address3" label="状态" >
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
                         :page-count="totalPage"
                          >
                         </el-pagination> 
                          
                        </el-col>
                    </el-row>
                        </div>  
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
                    url: '/commercial/commercialSpecificationDetails',
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
                querychend:{
                demand:[{
                    must: '',
                    title: '规格编码',
                    place: '1223'                
                },{
                    must: '',
                    title: '规格名称',
                    place: '1223'                 
                },{
                    must: '',
                    title: '控件类型',
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
                },{
                    must: '',
                    title: '必填',
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
                },{
                    must: '',
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
                                 date: '1',
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
                                 date: '2',
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
                                date: '3',
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
                                date: '4',
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
                        label: '一级 1',
                        children: [{
                            label: '二级 1-1',
                            children: [{
                            label: '三级 1-1-1'
                            }]
                        }]
                        }, {
                        label: '一级 2',
                        children: [{
                            label: '二级 2-1',
                            children: [{
                            label: '三级 2-1-1'
                            }]
                        }, {
                            label: '二级 2-2',
                            children: [{
                            label: '三级 2-2-1'
                            }]
                        }]
                        }, {
                        label: '一级 3',
                        children: [{
                            label: '二级 3-1',
                            children: [{
                            label: '三级 3-1-1'
                            }]
                        }, {
                            label: '二级 3-2',
                            children: [{
                            label: '三级 3-2-1'
                            }]
                        }]
                        }],

                    pageIndex:-1,//分页的当前页码
              totalPage:100,//当前分页总数
            }
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
                let ocate= document.getElementById('bs')
                ocate.style.width="calc(100% - 275px)";
            },
            querylog:function(data){
                let _this=this;
                if(data){
                    let ocate= document.getElementById('bs')
                    ocate.style.width="100%";
                    _this.bottonbox.botton.push({
                        class: 'erp_bt bt_auxiliary',
                        imgsrc: '../../../static/image/common/bt_stop.png',
                        text: '查询'
                    })
                }
            },
            storageData(e){
                this.$store.state.url='/commercial/commercialSpecificationDetails/default'
               this.$router.push({path:this.$store.state.url})//点击切换路由
            },
            packUp(){
                let oleftBox=document.getElementById('left-box');
                let obs=document.getElementById('bs');
                let Re=document.getElementById('refer');

                oleftBox.style.display="none";
                Re.style.display="block";
                obs.style.width="100%";
            },
            refer(){
                let obs=document.getElementById('bs');
                let oleftBox=document.getElementById('left-box');
                let Re=document.getElementById('refer');
                oleftBox.style.display="block";
                obs.style.width="calc(100% - 275px)";
                Re.style.display="none";
            },
            dell(){
                let ocheck=document.getElementsByClassName('is-checked');
            }
        },
        components:{
            Query,
            Btm
        }
    }
</script>

<style scoped>
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
.border-left{
    border-left: 1px solid #E4E4E4;
}
</style>

<style>
#bs{
    width: calc(100% - 275px);
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
</style>