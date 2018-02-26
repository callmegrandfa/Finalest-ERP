<template>
    <div class="customer-infor-wrapper" style="float:left;background:#fff;width:100%;">
       	<query :data="querychend" v-on:listquery="querylog" ></query>     
        <div id="bgc">
	        <el-row >
	            <el-col :span="24" class="border-left">
	            	<btm :date="bottonbox" v-on:listbtm="btmlog"> </btm>

	                <el-row class="pb10">
	                	<tree :datc="componyTree" id="bg-white" style="background-color: rgba(251, 252, 253, 1);"></tree> 
		                <el-row class="bgd">
		                    <el-col :span='24' >
		                        
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
		                           <el-row style="margin-bottom:20px;" >
		                                <el-col :xl="2" :lg="2" :md="4" :sm="4" :xs="6">
		                                    &nbsp;
		                                </el-col>
		                               <el-col :span="5" class="lh40">
		                                    <el-checkbox v-model="checked">基本单位</el-checkbox>
		                                </el-col>
		                           </el-row> 
		                            
		                       	<div style="background:rgb(249,249,249)" class="pt10 pb10">
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
		                                    <button @click="increment()" class="erp_bt bt_save"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">增行</span></button>
		                                    <button @click="del()" class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删行</span></button>
		                                    
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
		                            <el-table :data="tableData" @selection-change="handleSelectionChange" border style="width: 100%">
		                                <el-table-column  prop="sequenceNumber" label="序号" width="60">
		                                </el-table-column>
		                                <el-table-column type="selection" label="" width="100">
		                                </el-table-column>
		                                <el-table-column prop="AttributeEncoding" label="多单位">
                                            <template slot-scope="scope">
                                                <el-input class="ai" v-model="tableData[scope.$index].AttributeEncoding" placeholder=""></el-input>
                                            </template>
		                                </el-table-column>
		                                <el-table-column prop="attributeName" label="系数">
                                            <template slot-scope="scope">
                                                <el-input class="ai" v-model="tableData[scope.$index].attributeName" placeholder=""></el-input>
                                            </template>
		                                </el-table-column>
		                                <el-table-column prop="startUsing" label="备注">
		                                </el-table-column>
		                                <el-table-column prop="del" label="操作">
                                            <template slot-scope="scope">
                                                <el-button type="text" size="small"  @click="oneDel(scope.row)" >删除</el-button>
                                            </template>
		                                </el-table-column>
		                            </el-table>
		                        </el-row>
		                    	</div>
		                    </el-col>
		                </el-row>
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
                input4:'',
                value1:[],
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
                    }],
                value: '',
                bottonbox:{
                    url: '/commodityleimu/CommodityCategoriesDetails',
                   botton:[{
                    class: 'erp_bt bt_add',
                    imgsrc: '../../../static/image/common/bt_add.png',
                    text: '新增'
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
                    title: '单位编码',
                    place: ''                
                },{
                    must: '',
                    title: '单位名称',
                    place: ''                 
                },{
                    must: '*',
                    title: '基本单位',
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
            increment(){
                let _this=this;
                _this.tableData.push({
                      sequenceNumber: _this.tableData.length+1,
                      Number: '',
                      AttributeEncoding: '',
                      attributeName: '',
                      startUsing: '',
                      del: '删除'
                    })
            },
            oneDel(row){
                let _this=this;
                _this.tableData.splice(row.sequenceNumber-1,1)
                for(var i=0;i<_this.tableData.length;i++){
                   _this.tableData[i].sequenceNumber=i+1; 
                }
            },
            del(){
                let _this=this;
                console.log(_this.value1)
                for(var i=0;i<_this.value1.length;i++){
                    _this.tableData.splice(_this.value1[i]-1,1)
                }
                // _this.tableData.splice(_this.value1-1,1)
                for(var i=0;i<_this.tableData.length;i++){
                   _this.tableData[i].sequenceNumber=i+1; 
                }
                // for(var i=0;i<_this.val.length;i++){
                //    _this.tableData.splice(_this.val[i].sequenceNumber,1);
                // }
            },
        	btmlog:function(data){
                let oleftBox=document.getElementById('left-box');
                oleftBox.style.display="block";
                let ocate= document.getElementById('bgc')
                ocate.style.width="calc(100% - 275px)";
            },
        	querylog:function(data){
                let _this=this;
                if(data){
                    let ocate= document.getElementById('bgc')
                    ocate.style.width="100%";
                    _this.bottonbox.botton.push({
                        class: 'erp_bt bt_auxiliary',
                        imgsrc: '../../../static/image/common/bt_stop.png',
                        text: '查询'
                    })
                }
            }, 
            handleSelectionChange(val) {//点击复选框选中的数据
                // this.multipleSelection = val;
                let _this=this;
                _this.value1.splice(0,_this.value1.length);
                for(var i=0;i<val.length;i++){

                    _this.value1.unshift(val[i].sequenceNumber)
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
.ai input{
    border-radius: 0px;
    border: none;
} 
.bgd{
	float: left;
	width: calc(100% - 200px);
}
#bgc{
	float: left;
	width: calc(100% - 275px);
	background-color: #fff;
}
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