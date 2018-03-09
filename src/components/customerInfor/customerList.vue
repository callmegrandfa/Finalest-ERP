<template>
    <div class="customer-infor-wrapper">
        <el-row class="bg-white">
            <el-col :span="ifWidth?5:0" v-show="ifWidth">
                <el-row class="h48 pl15">
                    <el-col :span="18">
                        <img src="../../../static/image/common/search_btn.png" style="display:inline-block;margin-top:10px;">
                        <span>查询</span>
                    </el-col>
                    <el-col :span="5">
                        <span class="fs12 search_info_open" @click="closeLeft">-</span>
                    </el-col>
                </el-row>

                <el-row class="mt10">
                    <div class="bgcolor smallBgcolor">
                        <label>客户分类</label>
                        <el-select v-model="value" placeholder="请选择客户类型">
                            <el-option v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-row>

                <el-row class="fs12">
                   <div class="bgcolor smallBgcolor">
                        <label>所属组织</label>
                        <el-input placeholder="" ></el-input>
                    </div> 
                </el-row>

                <el-row class="fs12">
                    <div class="bgcolor smallBgcolor">
                        <label>行政地区</label>
                        <el-input placeholder="" ></el-input>
                    </div> 
                </el-row>

                <el-row class="fs12">
                    <div class="bgcolor smallBgcolor">
                        <label>业务地区</label>
                        <el-input placeholder="" ></el-input>
                    </div> 
                </el-row>

                <el-row class="fs12">
                    <div class="bgcolor smallBgcolor">
                        <label>编码</label>
                        <el-input placeholder="" ></el-input>
                    </div> 
                </el-row>

                <el-row class="fs12">
                    <div class="bgcolor smallBgcolor">
                        <label>名称</label>
                        <el-input placeholder="" ></el-input>
                    </div> 
                </el-row>

                <el-row class="fs12">
                    <div class="bgcolor smallBgcolor">
                        <label>客户性质</label>
                        <el-input placeholder="" ></el-input>
                    </div> 
                </el-row>

                <el-row style="text-align:center;">
                    <div class="bgcolor smallBgcolor">
                        <span class="search-btn">查询</span>
                    </div>
                </el-row>
            </el-col>
            <el-col :span="ifWidth?19:24" class="border-left">
                <el-row class="h48">
                    <el-col :span='2' class="search-block"  v-show="!ifWidth">
                        <div style="display:inline-block" @click="openLeft">
                            <img src="../../../static/image/common/search_btn.png">
                        </div>
                        <div style="display:inline-block;margin-left:2px;font-size:16px;" @click="openLeft">
                            <span>查询</span>
                        </div>
                        <div class="out-img" @click="openLeft">
                            <span>+</span>
                        </div>
                    </el-col>

                    <el-col :span='22' class="pt5">
                        <button class="erp_bt bt_add" @click="goDetail">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_add.png">
                            </div>
                            <span class="btDetail">新增</span>
                        </button>

                        <button class="erp_bt bt_del" @click="delRow">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_del.png">
                            </div>
                            <span class="btDetail">删除</span>
                        </button>

                        <button class="erp_bt bt_auxiliary">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_auxiliary.png">
                            </div>
                            <span class="btDetail">辅助功能</span>
                        </button>

                        <button class="erp_bt bt_print">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_print.png">
                            </div>
                            <span class="btDetail">打印</span>
                        </button>
                    </el-col>
                    
                    
                </el-row>

                <el-row class="pl10 pt10 pr10 pb10">
                    <el-col :span="24">
                        <el-table :data="allList" border style="width: 100%" stripe @selection-change="handleSelectionChange">
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="ouId" label="所属组织" ></el-table-column>
                            <el-table-column prop="contact" label="客户编码"></el-table-column>
                            <el-table-column prop="contactName" label="客户名称"></el-table-column>
                            <el-table-column prop="contactFullName" label="客户全称"></el-table-column>
                            <el-table-column prop="contactClassId" label="客户类型"></el-table-column>
                            <el-table-column prop="contactWorkPropertyId" label="客户性质"></el-table-column>
                            <el-table-column prop="isSupplier" label="供应">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="allList[scope.$index].isSupplier" disabled="disabled"></el-checkbox>
                                </template>
                            </el-table-column>   
                            <el-table-column prop="ficaOuId" label="对应财务组织"></el-table-column>
                            <el-table-column prop="status" label="状态"></el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button v-on:click="goModify(scope.row.id)" type="text" size="small">查看</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-row>
                            <el-col :span='6'>
                                <div style="margin-top:20px;" class="ml10">
                                        记录<span>{{total}}</span>，当前第<span>{{page}}</span>页，共<span>{{totalPage}}</span>页
                                </div>
                                
                            </el-col>
                            <el-col :span="18">
                                <el-pagination style="margin-top:20px;" class="text-right" background layout="total, prev, pager, next"  :page-count="totalPage" v-on:current-change="handleCurrentChange"></el-pagination>
                            </el-col>
                        </el-row>
                        
                    </el-col>
                </el-row>

            </el-col>
        </el-row>
        
    </div>
</template>

<script>
    export default{
        name:'customerList',
        data(){
            return {
                allList:[],//所有数据列表
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
                pageIndex:-1,//分页的当前页码
                totalPage:0,//当前分页总数
                total:'',//数据总条数
                page:1,//当前页
                eachPage:10,//一页显示的数量
                multipleSelection: [],//复选框选中数据
                ifWidth:true,//控制左侧搜索展开
            }
        },
        created:function(){
            this.loadAllList();
            
        },
        methods:{
        //---获取数据-------------------------------------------------------
            loadAllList:function(){//获取所有列表数据
                let self = this;
                this.$axios.gets('/api/services/app/ContactManagement/GetAll',{SkipCount:(self.page-1)*self.eachPage,MaxResultCount:self.eachPage}).then(function(res){
                    console.log(res);
                    self.allList = res.result.items;
                    self.total = res.result.totalCount;
                    self.totalPage = Math.ceil(self.total/self.eachPage)
                },function(res){
                    console.log('err'+res)
                })
            },
        //------------------------------------------------------------------

        // ---跳转--------open----------------------------------------------
            goDetail(){//点击新增跳转
               this.$store.state.url='/customer/customerDetail/default'
               this.$router.push({path:this.$store.state.url})//点击切换路由
            },

            goModify:function(id){//点击跳转修改页modify
                // this.$store.state.url='/customer/customerModify/default'
                this.$store.state.url='/customer/customerModify/'+id;
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
            
            open(tittle,iconClass,className) {
                this.$notify({
                position: 'bottom-right',
                iconClass:iconClass,
                title: tittle,
                showClose: false,
                duration: 3000,
                customClass:className
                });
            },
        //------------------------------------------------------------------

        //---控制修改及分页--------------------------------------------------
            delRow:function(){//删除选中的项
                let _this=this;
                if(_this.multipleSelection.length>0){//表格
                    for(let i=0;i<_this.multipleSelection.length;i++){
                        _this.$axios.deletes('/api/services/app/ContactManagement/Delete',{id:_this.multipleSelection[i].id})
                        .then(function(res){
                            _this.loadAllList();
                            _this.open('删除成功','el-icon-circle-check','successERP');
                        },function(res){
                            _this.open('删除失败','el-icon-error','faildERP');
                            //console.log('err:'+res)
                        })
                    }
                };
            },
            handleSelectionChange:function(val){//点击复选框选中的数据
                this.multipleSelection = val;
            },
            handleCurrentChange:function(val){//获取当前页码
                this.pageIndex=val;
            },
            handleCurrentChange:function(val){//获取当前页码
                this.pageIndex=val;
                console.log(val)
                this.page = val;
                this.loadAllList();
            },
        //------------------------------------------------------------------

        //---左侧搜索展开----------------------------------------------------
        closeLeft:function(){
            let self = this;
            self.ifWidth = false;
        },
        openLeft:function(){
            let self = this;
            self.ifWidth = true;
        },
        //------------------------------------------------------------------
    }
}
</script>

<style scoped>
.store-data-wrapper{
    width: 100%;
    height: auto;
}
.bg-white{
    background: white;
    border-radius: 3px;
}
.input-need{
    outline: none;
    border:none;
    width: 90%;
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
.w0{
    width: 0px;
}

.w20{
    width: 20%;
}
.w80{
    width: 80%;
}
w100{
    width: 100%;
}
.border1{
    border: 1px solid #cccccc;
    border-radius: 3px;
}
.border-left{
    border-left: 1px solid #E4E4E4;
    min-height: 400px;
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
.search_info_open{
    display: inline-block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    border: 1px solid #E3E3E3;
    color: #cccccc;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
    margin-left: 20px;
}
.text-right{
    text-align: right;
}
.search-block{
    border-right:1px solid #E3E3E3;
    line-height:47px;
    text-align:center;
    cursor: pointer;
}
.out-img{
    display: inline-block;
    width: 16px;
}
.out-img span{
    display: block;
    background-image: url(../../../static/image/common/btn-circle.png);
    background-repeat: no-repeat;
    background-position: center;
    color: #E3E3E3;
}
</style>

<style>

</style>