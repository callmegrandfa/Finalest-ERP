<template>
    <el-row class="transfer">
        <el-col :span="11" class="transfer_warapper">
            <el-col :span="24" class="transfer_header">
                <span>可选</span>
                <div class="transfer_search" @keyup.enter="searchOptional">
                    <el-input
                        placeholder="搜索..."
                        v-model="queryOptional"
                        class="search_input"
                        >
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </div>
            </el-col>    
            <el-col :span="24" class="transfer_table">
                <el-table ref="multipleTable"  :data="OptionalPagination" @selection-change="handleOptional" border style="width: 100%" height="250">
                    <el-table-column type="selection" label="" width="50">
                    </el-table-column>
                    <el-table-column v-for="item in OptionalCols" :key="item.prop" :label="item.label" :prop="item.prop" >
                    </el-table-column>
                </el-table>
                <el-row class="mt10 tr">
                    <span>共 {{OptionalTotalPage}} 页</span>
                    <el-button type="primary" :disabled="OptionalPre" @click="handleOptionalPre" size="mini" icon="el-icon-arrow-left"></el-button>
                    <el-button type="primary" class="mr10" :disabled="OptionalNext" @click="handleOptionalNext" size="mini" icon="el-icon-arrow-right"></el-button>
                </el-row>
            </el-col>
        </el-col>
        <el-col :span="2" class="transfer_btns">
            <el-col :span="24" class="transfer_btn_wrapper">
                <el-button class="el_transfer" :disabled="toSeletedBtn"   type="primary" icon="el-icon-arrow-left" round></el-button>
                <el-button class="el_transfer" :disabled="toOptionalBtn"  type="primary" icon="el-icon-arrow-right" round></el-button>
            </el-col>
        </el-col>
        <el-col :span="11" class="transfer_warapper">
            <el-col :span="24" class="transfer_header">
                <span>已选</span>
                <div class="transfer_search" @keyup.enter="searchSelected">
                    <el-input
                        placeholder="搜索..."
                        v-model="querySelected"
                        class="search_input"
                        >
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </div>    
            </el-col>    
            <el-col :span="24" class="transfer_table">
                <el-table ref="multipleTable" :data="SelectedPagination" @selection-change="handleSelected" border style="width: 100%" height="250">
                    <el-table-column type="selection" label="" width="50">
                    </el-table-column>
                    <el-table-column v-for="item in OptionalCols" :key="item.prop" :label="item.label" :prop="item.prop" >
                    </el-table-column>
                </el-table>
                <el-row class="mt10 tr">
                    <span>共 {{SelectedTotalPage}} 页</span>
                    <el-button type="primary" :disabled="SelectedPre" @click="handleSelectedPre" size="mini" icon="el-icon-arrow-left"></el-button>
                    <el-button type="primary" class="mr10" :disabled="SelectedNext" @click="handleSelectedNext" size="mini" icon="el-icon-arrow-right"></el-button>
                </el-row>
            </el-col>
        </el-col>
    </el-row>
</template>
<script type="text/javascript">
	export default{
        props: {transferHttpSetting:{type:Object},
			// expandParams:{type:Object},
			OptionalCols:{type:Array}}, 
		data(){
			return{
                querySelected:'',//已选搜索
                queryOptional:'',//可选搜索
                OptionalHandle:[],//可选项勾选数据
                OptionalTotalPage:0,//可选表格分页总数
                selectedHanled:[],//已选项勾选数据
                OptionalPre:true,//可选上一页
                OptionalNext:true,//可选下一页
                OptionalCurrentPage:0,//当前页
                //selectedTable:[],//已选表格数据模型
                OptionalPagination:[],
                SelectedCurrentPage:0,//已选表格当前页
                SelectedTotalPage:0,
                toOptionalBtn:true,
                toSeletedBtn:true,
                SelectedPre:true,//可选上一页
                SelectedNext:true,//可选下一页
                SelectedPagination:[],
                EachPage:10,//表格每页显示多少条数据
                StartCount:0,//显示多少条
                EndCount:0,//跳过几条
			}
		},
		created() {
            this.$store.commit('setTransferName',this.transferHttpSetting.transferName)
            this.$store.commit('setTransferApi',this.transferHttpSetting.transferApi)
            this.$store.commit('setTransferParams',this.transferHttpSetting.transferParams)
            this.$store.dispatch('InitTransfer');//初始化可选表格数据
        },
        watch:{
            OptionalCurrentPage:function(val){
                this.StartCount=(val-1)*this.EachPage;
                this.EndCount=this.EachPage+this.StartCount;
                this.OptionalPagination=this.OptionalTableFilter.slice(this.StartCount,this.EndCount);
            },
            SelectedCurrentPage:function(val){
                this.StartCount=(val-1)*this.EachPage;
                this.EndCount=this.EachPage+this.StartCount;
                this.SelectedPagination=this.SelectedTableFilter.slice(this.StartCount,this.EndCount);
            },
            OptionalTableFilter:{//监听可选表格数据变化，显示分页情况
                handler:function(val,oldVal){
                    this.OptionalTotalPage=Math.ceil(val.length/this.EachPage)
                    if(this.OptionalTotalPage>1){//判断下一页按钮高亮
                        this.OptionalNext=false;
                    }else{
                        this.OptionalNext=true
                    }
                    if(val.length>0){//分页显示值设定
                        this.OptionalCurrentPage=1;
                        this.OptionalPre=true;
                        this.StartCount=(this.OptionalCurrentPage-1)*this.EachPage;
                        this.EndCount=this.EachPage+this.StartCount;
                        this.OptionalPagination=this.OptionalTableFilter.slice(this.StartCount,this.EndCount);
                    }
                    else if(val.length==0){
                        this.OptionalPagination=[];
                        this.OptionalPre=true;
                        this.OptionalNext=true;
                    }
                },
                deep:true
            },
            SelectedTableFilter:{//监听已选表格数据变化，显示分页情况
                handler:function(val,oldVal){
                    this.SelectedTotalPage=Math.ceil(val.length/this.EachPage)
                    if(this.SelectedTotalPage>1){//判断下一页按钮高亮
                        this.SelectedNext=false;
                    }else{
                        this.SelectedNext=true
                    }
                    if(val.length>0){//分页显示值设定
                        this.SelectedCurrentPage=1;
                        this.SelectedPre=true;
                        this.StartCount=(this.SelectedCurrentPage-1)*this.EachPage;
                        this.EndCount=this.EachPage+this.StartCount;
                        this.SelectedPagination=this.SelectedTableFilter.slice(this.StartCount,this.EndCount);
                    }
                    else if(val.length==0){
                        this.SelectedPagination=[];
                        this.SelectedPre=true;
                        this.SelectedNext=true;
                    }
                },
                deep:true
            }
        },
        computed:{
            OptionalTable(){
                return  this.$store.state[this.transferHttpSetting.transferName+'OptionalTable'];   
            },
            SelectedTable(){
                return  this.$store.state[this.transferHttpSetting.transferName+'SelectedTable'];   
            },
            OptionalTableFilter: function () {//已选表格数据过滤
                var filterKey = this.queryOptional && this.queryOptional.toLowerCase()
                if (filterKey) {
                    return this.OptionalTable.filter(function (data) {
                        return Object.keys(data).some(function (key) {
                            return String(data[key]).toLowerCase().indexOf(filterKey) > -1
                        })
                    })
                }
                return this.OptionalTable;
            },
            SelectedTableFilter: function () {//已选表格数据过滤
                var filterKey = this.querySelected && this.querySelected.toLowerCase()
                if (filterKey) {
                    return this.SelectedTable.filter(function (data) {
                        return Object.keys(data).some(function (key) {
                            return String(data[key]).toLowerCase().indexOf(filterKey) > -1
                        })
                    })
                }
                return this.SelectedTable;
            },
        },
	    methods:{
            handleSelected(val){//操作已选表格数据
                if(val.length>0){
                    this.selectedHanled=val;
                }else{
                }
                this.seletedToOptional();
            },
            handleOptional(val){//操作可选表格数据
                if(val.length>0){
                    this.OptionalHandle=val;
                }else{
                }
                this.optionalToSeleted();
            },
            handleOptionalPre(){//可选数据上一页
                if(this.OptionalCurrentPage>1){
                    this.OptionalCurrentPage--
                    if(this.OptionalCurrentPage==1){
                        this.OptionalPre=true;
                    }
                }
                this.OptionalNext=false;
            },
            handleOptionalNext(){//可选数据下一页
                if(this.OptionalCurrentPage<this.OptionalTotalPage){
                    this.OptionalCurrentPage++
                    if(this.OptionalCurrentPage==this.OptionalTotalPage){
                        this.OptionalNext=true;
                    }
                }
                this.OptionalPre=false;                
            },
            handleSelectedPre(){//已选数据上一页
                if(this.SelectedCurrentPage>1){
                    this.SelectedCurrentPage--
                    if(this.SelectedCurrentPage==1){
                        this.SelectedPre=true;
                    }
                }
                this.SelectedNext=false;
            },
            handleSelectedNext(){//已选数据下一页
                if(this.SelectedCurrentPage<this.SelectedTotalPage){
                    this.SelectedCurrentPage++
                    if(this.SelectedCurrentPage==this.SelectedTotalPage){
                        this.SelectedNext=true;
                    }
                }
                this.SelectedPre=false;       
            },
            seletedToOptional(){//已选到可选
                this.$store.commit('Init_Transfer',this.array_diff(this.selectedHanled, this.$store.state[this.transferHttpSetting.transferName+'OptionalTable']));//重置可选列表
                this.$store.commit('Init_TransferSelected',this.array_diff(this.selectedHanled, this.$store.state[this.transferHttpSetting.transferName+'SelectedTable']));//重置已选列表
                this.selectedHanled=[];//置空选中集合
            },
            optionalToSeleted(){//可选到已选
                this.$store.commit('Init_TransferSelected',this.array_diff(this.OptionalHandle, this.$store.state[this.transferHttpSetting.transferName+'SelectedTable']));//重置已选列表
                this.$store.commit('Init_Transfer',this.array_diff(this.OptionalHandle, this.$store.state[this.transferHttpSetting.transferName+'OptionalTable']));//重置可选列表
                this.OptionalHandle=[];//置空选中集合
            },
            selectedHandlePagination(val){//设置已选表格当前页
                this.selectedCurrentPage=val;
            },
            array_diff(a, b) {//去重
                return diff(a, b).concat( diff(b, a) );
                function diff(a, b) {
                    var c = {};
                    b.forEach(function(o){ c[ JSON.stringify(o) ] = 0 });
                    a.forEach(function(o){ delete c[ JSON.stringify(o) ]; });
                    return Object.keys(c).map(JSON.parse);
                }
            }
	    }
	}
</script>
<style>
@import"//at.alicdn.com/t/font_561828_maf6xgd190be29.css";
button.erp_bt[disabled] {
    cursor: not-allowed;
    background: #ccc;
}
.transfer .el-button--primary.is-disabled,.transfer .el-button--primary.is-disabled:hover{
    color: #A6ACC2;
    background-color: rgba(255,255,255,.5);
    border-color: #C9D1D1;
}
</style>