<template>
    <div class="group-management-wrapper">
        <el-row class="bg-white">

            <el-col :span='24' class="border-left">
                <btm :date="bottonbox" v-on:listbtm="btmlog"> </btm>
                <textbox :data="textboxipt"></textbox>
                <el-row class="pl10 pr10">

                    <el-col :xl="2" :lg="2" :md="4" :sm="5" :xs="6" style="margin-left:80px">
                        <div class="bgcolor smallBgcolor">
                            <el-checkbox v-model="radio" label="1">系统属性</el-checkbox>
                        </div>
                    </el-col>
                    <el-col :xl="2" :lg="2" :md="4" :sm="5" :xs="6">
                        <div class="bgcolor smallBgcolor">
                            <el-checkbox v-model="radio" label="2">必填</el-checkbox>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="pl10 pr10 pt10  " style="border-top:1px solid #e4e4e4;   ">
                    <el-col :span="24" style="margin-bottom:30px;">
                        <h4>审计信息</h4>
                    </el-col>
                    <textbox :data="textboxipt1"></textbox>
                </el-row>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
import Btm from '../../base/btm/btm'
import Textbox from '../../base/textbox/textbox'
    export default{
        name:'customerInfor',
        data(){
            return{
                radio:'1',
                addData:{

                },
                textboxipt1:[{
                    must: '',
                    title: '创建人',
                    place: ''                
                },{
                    must: '',
                    title: '创建时间',
                    place: ''                 
                },{
                    must: '',
                    title: '修改人',
                    place: ''                                
                },{
                    must: '',
                    title: '修改时间',
                    place: ''                 
                }],
                textboxipt:[{
                    must: '',
                    title: '上级属性',
                    place: '请输入菜单编码'                
                },{
                    must: '*',
                    title: '属性编码',
                    place: '请输入菜单编码'                 
                },{
                    must: '*',
                    title: '属性名称',
                    place: ''                 
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
                    must: '*',
                    title: '数据源',
                    place: ''                 
                },{
                    must: '',
                    title: '显示顺序',
                    place: ''                 
                },{
                    must: '',
                    title: '级联属性',
                    place: ''                 
                },{
                    must: '',
                    title: '状态',
                    place: ''                 
                }],
                bottonbox:{
                    url: '/commodity/commodityProperty',
                   botton:[{
                    class: 'erp_bt bt_back',
                    imgsrc: '../../../static/image/common/bt_back.png',
                    text: '返回'
                },{
                    class: 'erp_bt bt_save',
                    imgsrc: '../../../static/image/common/bt_save.png',
                    text: '保存'
                },{
                    class: 'erp_bt bt_save_add',
                    imgsrc: '../../../static/image/common/bt_save.png',
                    text: '保存并新增'
                },{
                    class: 'erp_bt bt_add',
                    imgsrc: '../../../static/image/common/bt_add.png',
                    text: '新增'
                },{
                    class: 'erp_bt bt_del',
                    imgsrc: '../../../static/image/common/bt_del.png',
                    text: '删除'
                },{
                    class: 'erp_bt bt_auxiliary',
                    imgsrc: '../../../static/image/common/bt_audit.png',
                    text: '审核'
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
            }
        },
        created:function(){
            let _this=this;
            
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
                    let ocate= document.getElementById('cp')
                    ocate.style.width="100%";
                    _this.bottonbox.botton.push({
                        class: 'erp_bt bt_auxiliary',
                        imgsrc: '../../../static/image/common/bt_stop.png',
                        text: '查询'
                    })
                }
            },
            save(){//保存数据
                let _this=this;
                _this.$axios.posts('/api/services/app/ModuleManagement/Create',_this.addData).then(function(res){
                    _this.addData.id=res.result.id;
                    _this.$store.state.url='/menu/menuModify/'+res.result.id
                    _this.$router.push({path:_this.$store.state.url})
                    console.log(res)
                },function(res){
                     console.log(res)
                     console.log(_this.addData)
                })
            }
        },
        components:{
            Btm,
            Textbox
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
</style>

<style>
/* 重写checkbox */
.el-checkbox__inner{
    width: 16px;
    height: 16px;
    border-radius:50% !important; 
}
.el-checkbox__inner::after{
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    content: "";
    border: 3px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 11px;
    left: 4px;
    position: absolute;
    top: -1px;
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
</style>