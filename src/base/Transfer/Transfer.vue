<template>
    <el-row >
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
                <el-table ref="multipleTable" :data="selectedTable" @selection-change="handleSelected" border style="width: 100%">
                    <el-table-column type="selection" label="" width="50">
                    </el-table-column>
                    <el-table-column v-for="item in selectedCols" :key="item.prop" :label="item.label" :prop="item.prop" >
                    </el-table-column>
                </el-table>
            </el-col>
        </el-col>
        <el-col :span="2" class="transfer_btns">
            <el-col :span="24" class="transfer_btn_wrapper">
                <el-button class="el_transfer"  @click="seletedToOptional" type="primary" icon="el-icon-arrow-left" round></el-button>
                <el-button class="el_transfer"  @click="optionalToSeleted" type="primary" icon="el-icon-arrow-right" round></el-button>
            </el-col>
        </el-col>
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
                <el-table ref="multipleTable"  :data="OptionalTable" @selection-change="handleOptional" border style="width: 100%">
                    <el-table-column type="selection" label="" width="50">
                    </el-table-column>
                    <el-table-column v-for="item in OptionalCols" :key="item.prop" :label="item.label" :prop="item.prop" >
                    </el-table-column>
                </el-table>
                
            </el-col>
        </el-col>
    </el-row>
</template>
<script type="text/javascript">
	export default{
		props: ['OptionalCols'], 
		data(){
			return{
                queryUnselected:'',//未选搜索
                queryOptional:'',//已选搜索
                UncheckTableData:[],//未选表格数据模型
			}
		},
		created() {
	      
	    },
	    methods:{
	    	handleSelected(val){//操作已选表格数据

            },
            handleOptional(){//操作可选表格数据

            },
            searchUncheckTable(){//过滤未选数据

            },
            seletedToOptional(){//已选到可选

            },
            optionalToSeleted(){//可选到已选

            },
	    }
	}
</script>
<style>
@import"//at.alicdn.com/t/font_561828_maf6xgd190be29.css";
button.erp_bt[disabled] {
    cursor: not-allowed;
    background: #ccc;
}
</style>