<template>
    <div class="OuListForm">
        <el-row class="bg-white">
            <el-col :span="ifWidth ? 5 : 0" v-show="ifWidth">
                <el-row class="h48 pl15">
                    <el-col :span="18">
                        <img src="../../../static/image/common/search_btn.png" style="display:inline-block;margin-top:-4px;vertical-align: middle;">
                        <span>查询</span>
                    </el-col>
                    <el-col :span="5">
                        <span class="fs12 search_info_open" @click="closeLeft">-</span>
                    </el-col>
                </el-row>

                <div class="mt20 bgcolor smallBgcolor">
                    <label><small>*</small>组织类型</label>
                    <el-select filterable   v-model="searchData.OuType" placeholder="">
                        <el-option v-for="item in selectData.OUType" :key="item.itemValue" :label="item.itemName" :value="item.itemValue">
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor smallBgcolor"><label>编码</label><el-input v-model="searchData.OuCode" placeholder=""></el-input></div>
                <div class="bgcolor smallBgcolor"><label>名称</label><el-input v-model="searchData.Name" placeholder=""></el-input></div>
                <div class="bgcolor smallBgcolor">
                    <label>所属公司</label>
                    <el-select filterable   v-model="searchData.CompanyOuId" placeholder="">
                        <el-option 
                        v-for="item in selectData.companys" 
                        :key="item.id" 
                        :label="item.ouName" 
                        :value="item.id" 
                        >
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor smallBgcolor">
                    <label>行政地区</label>
                    <el-select v-model="searchData.AreaId" placeholder="">
                        <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option> -->
                        <el-input
                            placeholder="搜索..."
                            class="selectSearch"
                            v-model="search_area">
                        </el-input>
                            <el-tree
                            oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                            :data="selectTree_area"
                            :props="selectProps_area"
                            node-key="id"
                            default-expand-all
                            ref="tree"
                            :filter-node-method="filterNode_area"
                            :expand-on-click-node="false"
                            @node-click="nodeClick_area"
                            >
                            </el-tree>
                            <!-- <el-option v-show="false" :key="item.id" :label="item.areaName" :value="item.id"></el-option> -->
                            <el-option v-show="false" v-for="item in selectData.area" :key="item.id" :label="item.areaName" :value="item.id" :date="item.id">
                            </el-option>
                    </el-select>
                </div>
                <div class="bgcolor smallBgcolor">
                    <label>启用状态</label>
                    <el-select filterable   v-model="searchData.Status" placeholder="">
                        <el-option v-for="item in selectData.Status001" :key="item.itemValue" :label="item.itemName" :value="item.itemValue">
                        </el-option>
                    </el-select>
                </div>
                <div class="bgcolor smallBgcolor">
                    <label></label>
                    <span class="search-btn" @click="SimpleSearchClick">查询</span>
                </div>
            </el-col>
            <el-col :span='4' class="border-left" v-loading="treeLoading" id="ouListTree">
                <el-tree 
                :data="componyTree"
                :props="defaultProps"
                :highlight-current="true"
                node-key="treeId"
                default-expand-all
                :expand-on-click-node="false"
                @node-click="nodeClick">
                </el-tree>
            </el-col>
             <el-col :span="ifWidth ? 15:20" class="border-left" id="ouListTable">
                <el-row class="h48">
                    <el-col :span="ifWidth?0:2" class="search-block">
                        <div style="display:inline-block" @click="openLeft">
                            <img src="../../../static/image/common/search_btn.png">
                        </div>
                        <div style="display:inline-block;margin-left:2px;font-size:16px;" @click="openLeft">
                            <span>查询</span>
                        </div>
                        <div class="out-img" @click="openLeft">
                            <span class="search_info_open" style="margin-left:0">+</span>
                        </div>
                    </el-col>
                    <el-col :span="ifWidth?24:22" class="pt5">
                        <!-- <button class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button> -->
                        <button @click="goDetail" class="erp_bt bt_add"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
                        <button @click="confirm" class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
                        <button class="erp_bt bt_print"><div class="btImg"><img src="../../../static/image/common/bt_print.png"></div><span class="btDetail">打印</span></button>
                        <button class="erp_bt bt_out bt_width">
                            <div class="btImg"><img src="../../../static/image/common/bt_inOut.png"></div>
                            <span class="btDetail">导出</span>
                            <div class="btRightImg"><img src="../../../static/image/common/bt_down_right.png"></div>
                        </button>
                        <button class="erp_bt bt_version"><div class="btImg"><img src="../../../static/image/common/bt_version.png"></div><span class="btDetail">生成版本</span></button>
                        <button class="erp_bt bt_auxiliary bt_width">
                            <div class="btImg"><img src="../../../static/image/common/bt_auxiliary.png"></div>
                            <span class="btDetail">辅助功能</span>
                            <div class="btRightImg"><img src="../../../static/image/common/bt_down_right.png"></div>
                        </button>
                        <div class="search_input_group">
                            <div class="search_input_wapper">
                                <el-input
                                    placeholder="搜索..."
                                    class="search_input">
                                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                                </el-input>
                            </div>
                            <div class="search_button_wrapper" @click="dialogUserDefined = true">
                                <button class="userDefined">
                                    <i class="fa fa-cogs" aria-hidden="true"></i>自定义
                                </button>
                            </div>
                        </div>    
                    </el-col>    
                </el-row>
                <!-- dialog -->
                <el-dialog :visible.sync="dialogUserDefined" class="dialogUserDefined">
                    <template slot="title">
                        <span>自定义<small>(设置显示字段)</small></span>
                    </template>
                     <el-table
                        :data="tableData" 
                        border 
                        style="width: 100%" 
                        stripe 
                        ref="multipleTable">
                            <el-table-column label="序号">
                                 <template slot-scope="scope">
                                    {{scope.$index + 1}}
                                </template>
                            </el-table-column>
                            <el-table-column prop="field" label="字段"></el-table-column>
                            <el-table-column prop="field" label="操作">
                                <template slot-scope="scope">
                                    <el-switch
                                        v-model="tableData[scope.$index].value"
                                        active-color="#13ce66">
                                    </el-switch>
                                </template>
                            </el-table-column>
                        </el-table>   
                        <span slot="footer" class="dialog-footer">
                            <el-button type="primary">确 定</el-button>
                            <el-button>取 消</el-button>
                        </span>
                </el-dialog>
                <!-- dialog -->
                <el-row>
                    <el-col :span='24'>
                        <el-table 
                        v-loading="tableLoading"
                        :data="tableData" 
                        border 
                        style="width: 100%" 
                        stripe 
                        @selection-change="handleSelectionChange" 
                        ref="multipleTable">
                            <el-table-column type="selection" fixed="left"></el-table-column>
                            <el-table-column prop="ouCode" label="编码" fixed="left">
                                <template slot-scope="scope">
                                    <el-button type="text"  @click="modify(scope.row)">{{tableData[scope.$index].ouCode}}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="ouName" label="名称" fixed="left">
                                <template slot-scope="scope">
                                    <el-button type="text"  @click="modify(scope.row)">{{tableData[scope.$index].ouName}}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="ouFullname" label="全称"></el-table-column>
                            <el-table-column prop="ouParentName" label="上级业务单元"></el-table-column>
                            <el-table-column prop="companyOuName" label="所属公司"></el-table-column>
                            <el-table-column prop="baseCurrencyName" label="本位币种"></el-table-column>
                            <el-table-column prop="accStartMonth" label="启用年月" width="160">
                                <template slot-scope="scope">
                                    <el-date-picker 
                                    format="yyyy-MM-dd"
                                    value-format="yyyy-MM-dd" 
                                    v-model="tableData[scope.$index].createdTime" 
                                    type="datetime" 
                                    readonly
                                    align="center"
                                    placeholder=""></el-date-picker>
                                </template>
                            </el-table-column>
                            <el-table-column prop="statusTValue" label="状态">
                                <template slot-scope="scope">
                                    <span v-if="scope.row.statusTValue=='启用'" style="color:#39CA77;">{{scope.row.statusTValue}}</span>
                                    <span v-else-if="scope.row.statusTValue=='停用'" style="color:#FF6666;">{{scope.row.statusTValue}}</span>
                                    <span v-else>{{scope.row.statusTValue}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="公司">
                                <template slot-scope="scope">
                                    <el-checkbox v-if="i.ouType==1" v-for="i in scope.row.basOuTypes" :key="i.ouType" checked disabled></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column label="业务">
                                <template slot-scope="scope">
                                    <el-checkbox v-if="i.ouType==2" v-for="i in scope.row.basOuTypes" :key="i.ouType" checked disabled></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column label="财务">
                                <template slot-scope="scope">
                                    <el-checkbox v-if="i.ouType==3" v-for="i in scope.row.basOuTypes" :key="i.ouType" checked disabled></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作" fixed="right">
                                 <template slot-scope="scope">
                                    <el-button type="text"  @click="confirmDelThis(scope.row)" >删除</el-button>
                                    <el-button type="text"  @click="modify(scope.row)" >查看</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination
                        style="margin-top:20px;" 
                        class="text-right" 
                        background layout="total,prev, pager, next,jumper" 
                        @current-change="handleCurrentChange"
                        :current-page="pageIndex"
                        :page-size="oneItem"
                        :total="totalItem">
                        </el-pagination>   
                    </el-col>
                </el-row>

            </el-col>
        </el-row>
        <!-- dialog错误信息提示 -->
        <el-dialog :visible.sync="errorMessage" class="dialog_confirm_message" width="25%">
            <template slot="title">
                <span class="dialog_font">提示</span>
            </template>
            <el-col :span="24">
                <span @click="detail_message_ifShow = !detail_message_ifShow" class="upBt">详情<i class="el-icon-arrow-down" @click="detail_message_ifShow = !detail_message_ifShow" :class="{rotate : !detail_message_ifShow}"></i></span>
            </el-col>
            <el-col :span="24" style="position: relative;">
                <el-col :span="24">
                    <p class="dialog_body_icon"><i class="el-icon-warning"></i></p>
                    <p class="dialog_font dialog_body_message">数据提交有误!</p>
                </el-col>
                <el-collapse-transition>
                    
                        <el-col :span="24" v-show="detail_message_ifShow" class="dialog_body_detail_message">
                            <vue-scroll :ops="option">
                                <span class="dialog_font">无法为此请求检索数据</span>
                                <h4 class="dialog_font dialog_font_bold">其他信息:</h4>
                                <span class="dialog_font">执行sql语句或批处理时产生异常,执行sql语句或批处理时产生异常,执行sql语句或批处理时产生异常,执行sql语句或批处理时产生异常</span>
                       
                            </vue-scroll> 
                        </el-col>
                      
                </el-collapse-transition>   
            </el-col>
            
            <span slot="footer">
                <button class="dialog_footer_bt dialog_font" @click="errorMessage = false">确 认</button>
                <button class="dialog_footer_bt dialog_font" @click="errorMessage = false">取 消</button>
            </span>
        </el-dialog>
        <!-- dialog -->
    </div>
</template>

<script>
    export default{
        data(){
            return {
            // 错误信息提示开始
            option: {
                vRail: {
                    width: '5px',
                    pos: 'right',
                    background: "#9093994d",
                },
                vBar: {
                    width: '5px',
                    pos: 'right',
                    background: '#9093994d',
                },
                hRail: {
                    height: '0',
                },
            },
            detail_message_ifShow:false,
            errorMessage:false,
            // 错误信息提示结束               
                search_area:'',
                selectTree_area:[
                ],
                item:{
                    id:"",
                    areaName:"",
                },
                selectProps_area: {
                    children: 'items',
                    label: 'areaName',
                    id:'id'
                },
                AreaType:1,//树形图的地区分类(1.业务地区.2行政地区)

                tableLoading:false,
                treeLoading:false,
                searchData:{
                    OuCode: "",//编码
                    Name: "",//名称
                    CompanyOuId:'',//所属公司
                    AreaId: '',//行政地区
                    Status: '',//启用状态
                    OuType: '',//组织类型
                },
                selectData:{//select数据
                    OUType:[],//组织类型
                    Status001:[],//启用状态
                    companys:[],//所属公司
                    area:[],//业务地区
                },
                searchDataClick:{},
                tableSearchData:{},
               
                tableData:[],

                componyTree:  [

                ],
                defaultProps: {
                    children: 'children',
                    label: 'ouFullname',
                    id:'id'
                },
                pageIndex:1,//分页的当前页码
                totalPage:0,//当前分页总数
                oneItem:10,//每页有多少条信息
                multipleSelection: [],//复选框选中数据
                page:1,//当前页
                treeCheck:[],
                isClick:[],
                load:true,
                totalItem:0,//总共有多少条消息
                ifWidth:true,
                dialogUserDefined:false,//dialog
                height:'0px',

                detailParentId:'',//tree节点点击获取前往detail新增页上级业务地区ID
                detailParentName:'',//tree节点点击获取前往detail新增页上级业务地区name
            }
        },
        created:function(){       
                let _this=this;
                _this.getSelectData();
                _this.loadTableData();
                _this.loadTree();
                
             },
         watch: {
            search_area(val) {
                this.$refs.tree.filter(val);
            },
        },
        methods:{
            getSelectData(){
                let _this=this;
                _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'OUType'}).then(function(res){ 
                    // 组织类型
                    _this.selectData.OUType=res.result;
                    })
                _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status001'}).then(function(res){ 
                    // 启用状态
                    _this.selectData.Status001=res.result;
                    })
                 _this.$axios.gets('/api/services/app/OuManagement/GetCompanyOuList').then(function(res){ 
                // 公司
                    _this.selectData.companys=res.result;
                })    
                _this.$axios.gets('/api/services/app/AreaManagement/GetAllData',{AreaType:_this.AreaType}).then(function(res){ 
                // 业务地区
                _this.selectData.area=res.result;
                })
            },
            filterNode_area(value, data) {
                if (!value) return true;
                return data.areaName.indexOf(value) !== -1;
            },
            closeLeft:function(){
               let self = this;
               self.ifWidth = false;
           },
           openLeft:function(){
               let self = this;
               self.ifWidth = true;
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
            loadTableData(){//表格
                let _this=this;
                _this.tableLoading=true
                _this.$axios.gets('/api/services/app/OuManagement/GetAll',{SkipCount:(_this.page-1)*_this.oneItem,MaxResultCount:_this.oneItem}).then(function(res){ 
                    _this.tableData=res.result.items;
                    _this.totalItem=res.result.totalCount
                    _this.totalPage=Math.ceil(res.result.totalCount/_this.oneItem);
                    _this.tableLoading=false;
                    _this.$nextTick(function(){
                        _this.getHeight()
                    })
                    },function(res){
                        _this.getHeight()
                    _this.tableLoading=false;
                })
            },
            loadTree(){
                let _this=this;
                _this.treeLoading=true;
                _this.$axios.gets('/api/services/app/OuManagement/GetAllTree')
                .then(function(res){
                    _this.componyTree=res.result;
                    _this.treeLoading=false;
                    _this.loadIcon()
               },function(res){
                   _this.treeLoading=false;
               })
                // 地区
                _this.$axios.gets('/api/services/app/AreaManagement/GetAllDataTree',{AreaType:_this.AreaType})
                .then(function(res){
                    _this.selectTree_area=res.result;
                    _this.loadIcon();
                },function(res){
                })
            },
            loadIcon(){
                let _this=this;
                _this.$nextTick(function () {
                    $('.preNode').remove();   
                    $('.el-tree-node__label').each(function(){
                        if($(this).parent('.el-tree-node__content').next('.el-tree-node__children').text()==''){
                            $(this).prepend('<i class="preNode fa fa-file" aria-hidden="true" style="color:#f1c40f;margin-right:5px"></i>')
                        }else{
                            $(this).prepend('<i aria-hidden="true" class="preNode fa fa-folder-open" style="color:#f1c40f;margin-right:5px"></i>')
                        }
                    })
                })
            },
            handleCurrentChange(val) {//页码改变
                 let _this=this;
                 _this.page=val;
                 if(_this.load){
                     _this.loadTableData();
                 }else{
                     _this.SimpleSearch();
                 }
            },
            SimpleSearchClick(){
                let _this=this;
                 _this.load=false;
                 _this.searchDataClick={
                    OuCode:_this.searchData.OuCode,//编码
                    Name: _this.searchData.Name,//名称
                    CompanyOuId:_this.searchData.CompanyOuId,//所属公司
                    AreaId: _this.searchData.AreaId,//行政地区
                    Status: _this.searchData.Status,//启用状态
                    OuType: _this.searchData.OuType,//组织类型
                }
                _this.SimpleSearch();
            },
            SimpleSearch(){//简单搜索
                 let _this=this;
                 _this.tableLoading=true;
                 _this.searchDataClick.SkipCount=(_this.page-1)*_this.oneItem;
                 _this.searchDataClick.MaxResultCount=_this.oneItem;
                _this.$axios.gets('/api/services/app/OuManagement/GetAll',_this.searchDataClick)
                .then(function(res){      
                    _this.totalItem=res.result.totalCount
                    _this.totalPage=Math.ceil(res.result.totalCount/_this.oneItem);
                    _this.tableData=res.result.items;
                    _this.tableLoading=false;
                },function(res){
                    _this.errorMessage=true;
                     _this.tableLoading=false;
                })
            },
            goDetail(){
                let _this=this;
                if(typeof(_this.detailParentId)=='number'){
                    _this.$store.state.url='/OuManage/OuManageDetail/'+_this.detailParentId
                    _this.$router.push({path:this.$store.state.url})//点击切换路由
                }else{
                    _this.$store.state.url='/OuManage/OuManageDetail/default'
                    _this.$router.push({path:this.$store.state.url})//点击切换路由
                }
            },
             handleSelectionChange(val) {//点击复选框选中的数据
                this.multipleSelection = val;
                //console.log(val)
            },
            confirm(){
                let _this=this;
                if(_this.multipleSelection.length>0){//表格
                    _this.$confirm('确定删除?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning',
                        center: true
                    }).then(() => {//确认
                        _this.delRow()
                    }).catch(() => {//取消
                    });
                }
            },
            delRow(){
                let _this=this;
                for(let i=0;i<_this.multipleSelection.length;i++){
                    _this.$axios.deletes('/api/services/app/OuManagement/Delete',{id:_this.multipleSelection[i].id})
                    .then(function(res){
                        _this.open('删除成功','el-icon-circle-check','successERP');
                        if(_this.load){
                            _this.loadTableData();
                        }else{
                            _this.SimpleSearch();
                        }
                    },function(res){
                        _this.errorMessage=true;
                        _this.open('删除失败','el-icon-error','faildERP');
                        //console.log('err:'+res)
                    })
                }
            },
            getHeight(){
                $("#ouListTree").css({
                    minHeight:$('.OuListForm .bg-white').css('height')
                })
                $("#ouListTable").css({
                    minHeight:$('.OuListForm .bg-white').css('height')
                })
            },
            nodeClick(data){
                 let _this=this;
                 _this.detailParentId=data.id;
                 _this.detailParentName=data.ouFullname;
                _this.tableLoading=true
                _this.$axios.gets('/api/services/app/OuManagement/GetAll',{OuParentid:data.id,SkipCount:(_this.page-1)*_this.oneItem,MaxResultCount:_this.oneItem}).then(function(res){ 
                    _this.tableData=res.result.items;
                    _this.totalItem=res.result.totalCount
                    _this.totalPage=Math.ceil(res.result.totalCount/_this.oneItem);
                    _this.tableLoading=false;
                    },function(res){
                    _this.errorMessage=true;
                    _this.tableLoading=false;
                })
                 
            },
            nodeClick_area(data,node,self){
                let _this=this;
                _this.item.id=data.id;
                _this.item.areaName=data.areaName;
                // _this.$nextTick(function(){
                //     $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').click();
                // })
                
                $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').each(function(index){
                    if($(this).attr('date')==data.id){
                        $(this).click()
                    }
                })
            },
            modify(row){
                this.$store.state.url='/OuManage/OuManageModify/'+row.id
                this.$router.push({path:this.$store.state.url})//点击切换路由OuManage
            },
            confirmDelThis(row){
                let _this=this;
                _this.$confirm('确定删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {//确认
                    _this.delThis(row)
                }).catch(() => {//取消
                });
            },
            delThis(row){//删除行
                let _this=this;
                _this.$axios.deletes('/api/services/app/OuManagement/Delete',{id:row.id})
                .then(function(res){
                    _this.open('删除成功','el-icon-circle-check','successERP');
                    _this.loadTableData();
                    _this.loadTree();
                },function(res){
                    _this.errorMessage=true;
                })
            },
        },
    }
</script>

<style scoped>
.bg-white{
    background: white;
    border-radius: 3px;
}
.h48{
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #E4E4E4;
}
.mt20{
    margin-top: 20px;
}
.pl15{
    padding-left: 15px;
}
.pt5{
    padding-top: 5px;
}
.fs12{
    font-size: 12px;
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
</style>

<style>
.OuListForm .el-button+.el-button{
    margin-left: 0;
}
</style>