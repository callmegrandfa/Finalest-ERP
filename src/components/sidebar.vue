<template>
   <ul class="slidUl menu" :class="{menuActive : $store.state.show}">
        <li class="one" v-for="item in items" :menuid="item.menuid">
            <a href="javascript:;">{{item.name}}</a>
            <ul class="slidUl slid1">
                <li class="two" v-for="i in item.secondLevel" :menuid="i.menuid">
                    <a href="javascript:;">{{i.name}}</a>
                    <ul class="slidUl slid2" >
                        <li class="three" v-for="it in i.thirdInfo" :menuid="it.menuid"><a href="javascript:;" :menuUrl="it.address" :menuname="it.name" @click="storageData">{{it.name}}</a></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</template>
<script>

export default {
  name: 'appsiderbar',
  data(){
    return{
        items:
        [
            {
                name:'系统管理',
                menuid:'1',
                tobarString:'',
                secondLevel:[
                    {
                    name:'公共基础资料',
                    menuid:'11',
                    tobarString:'',
                    thirdInfo:[
                        {name:'详情',address:'detail',menuid:'1101',tobarString:''},
                        {name:'数据资料短',address:'shortData',menuid:'1102',tobarString:''},
                        {name:'数据资料长',address:'longData',menuid:'1103',tobarString:''},
                        {name:'数据资料中',address:'midData',menuid:'1104',tobarString:''},   
                        {name:'仓库数据列表',address:'repositoryList',menuid:'1105',tobarString:''},
                        {name:'仓库资料',address:'repositoryData',menuid:'1106',tobarString:''},
                        {name:'商品资料',address:'goodsData',menuid:'1107',tobarString:''},
                        {name:'店铺数据列表',address:'storeData',menuid:'1108',tobarString:''},   
                        {name:'店铺资料-基本信息',address:'storeBasicInfor',menuid:'1109',tobarString:''},
                        {name:'客户资料-基本信息',address:'customerBasicInfor',menuid:'1110',tobarString:''},
                        {name:'客户资料',address:'customerInfor',menuid:'1111',tobarString:''},
                        {name:'现货采购订单-订单列表',address:'orderList',menuid:'1112',tobarString:''}, 
                        {name:'现货采购订单-订单详情',address:'orderDetails',menuid:'1113',tobarString:''},
                        {name:'集团管理',address:'groupManager',menuid:'1114',tobarString:''},
                        {name:'供应商列表',address:'supplierList',menuid:'1116',tobarString:''},   
                        {name:'组织单元',address:'organization',menuid:'1117',tobarString:''},
                        {name:'d',address:'14',menuid:'1118',tobarString:''},
                        {name:'f',address:'15',menuid:'1119',tobarString:''},
                        {name:'g',address:'16',menuid:'1120',tobarString:''},   
                        {name:'h',address:'17',menuid:'1121',tobarString:''},
                        {name:'j',address:'18',menuid:'1122',tobarString:''},
                        {name:'k',address:'19',menuid:'1123',tobarString:''},
                        {name:'l',address:'20',menuid:'1124',tobarString:''}      
                    ]
                }]
            }, {
                name:'系统管理',
                menuid:'1',
                tobarString:'',
                secondLevel:[
                    {
                    name:'公共基础资料',
                    menuid:'11',
                    tobarString:'',
                    thirdInfo:[
                        {name:'详情',address:'detail',menuid:'111',tobarString:''},
                        {name:'数据资料短',address:'shortData',menuid:'112',tobarString:''},
                        {name:'数据资料长',address:'longData',menuid:'113',tobarString:''},
                        {name:'数据资料中',address:'midData',menuid:'114',tobarString:''}       
                    ]
                }]
            }]
        }
    },
    methods:{
        switch(){
            this.$router.push({path:this.$store.state.url})//点击切换路由
        },
        hasClass:function(obj, cls){
            var obj_class = obj.className,//获取 class 内容.
            obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
            var x = 0;
            for(x in obj_class_lst) {
                if(obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
                return true;
                }
            }
            return false;
        },
        storageData(e){
            var flag=false;
            var isSame=false;
            var slidbarData=this.$store.state.slidbarData;//储存页签数组
            var name=e.target.getAttribute("menuname");
            var menuUrl=e.target.getAttribute("menuurl");
        
            if(slidbarData.length==0){//slidbarData为空
                flag=true;
            }else{//slidbarData不为空
                for(var i=0;i<slidbarData.length;i++){
                    if(slidbarData[i].name==name){//相同页签
                        flag=false;
                        isSame=false;
                        break;
                    }else{
                      flag=true;
                      isSame=true; 
                    }   
                }
            }
            
            var pushItem={'name':name,'url':menuUrl,'params':'default'};
            this.$store.state.url='/'+menuUrl+'/'+'default';//储存当前url
            var isSwitch=true;
             if(slidbarData.length>=10){
                if(isSame){
                    var r=confirm("您选择打开的窗口已达到10个，如需继续添加新的窗口，默认关闭第一个窗口");
                    if (r==true)
                    {
                        slidbarData.shift();
                        flag=true;
                    }else{
                        flag=false;
                        isSwitch=false;
                    }
                }else{
                    
                }
                
            }
            if(flag){
                 slidbarData.push(pushItem);
            }
            if(isSwitch){
                this.switch();
            }
            
        }
    }
}
</script>

<style  scoped>

.slidUl{
    width: 200px;
    height: auto;
    background-color: rgba(38, 52, 75, 1);
    display: none;  
    position: absolute;
    left: 200px;
    top:0px;
}
.menu{
    display: block;
    width: 200px;
    top: 73px;
    z-index:2;
    left: 0;
    float: left;
    transition: left 0.5s;
    -moz-transition: left 0.5s;
    -webkit-transition: left 0.5s;
    -o-transition: left 0.5s; 
}
.menuActive{
    left:-200px!important;
}
.menu li{
    list-style: none; 
    width: 200px;
    height: 46px;
    text-align: left;
    line-height: 46px;
    position: relative;
}
.menu li:hover{
    background: #212d41;
    color: #e4e9f2;
}
.menu li a{
    display: block;
    height: 100%;
    width:calc(100% - 20px);
    padding-left: 20px;
    font-size: 12px;
    color: #c3cee0;
    text-decoration: none;
}
.menu li:hover{
    text-decoration: none;
}
  
.menu li.one:hover .slid1{
    display: block;
}
.menu li.two:hover .slid2{
    display: block;
    max-height: 460px;
    overflow-y: scroll;
    overflow-x:hidden;
}

.slid2{
    cursor: pointer;
}
.slid2::-webkit-scrollbar {
    width:10px;
    height:10px;
}
.slid2::-webkit-scrollbar-button    {
    background-color:#26344b;
}
.slid2::-webkit-scrollbar-track     {
    background:#26344b;
}
.slid2::-webkit-scrollbar-track-piece {
    background:url(http://www.lyblog.net/wp/wp-content/themes/mine/img/stripes_tiny_08.png);
}
.slid2::-webkit-scrollbar-thumb{
    background:#000;
    border-radius:4px;
}
.slid2::-webkit-scrollbar-corner {
    background:#26344b;
}
.slid2::-webkit-scrollbar-resizer  {
    background:#26344b;
}
</style>
