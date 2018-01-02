<template>
    <header>
        <div class="page-logo">
            <a href="">
                <big>HKERP</big><br>
                <small>v2.0</small>
            </a> 
            <div class="menuBtn" @click="$store.commit('go')"></div>
        </div>
        <div class="search">
             <el-autocomplete
            v-model="state4"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入内容"
            @select="handleSelect"
            ></el-autocomplete>
        </div>
        <ul class="userInfo">
            <li class="icon">
                <a href="javascript:;"><i class="fa fa-question-circle"></i></a>
            </li>
            <li class="icon">
                <a href="javascript:;"><i class="fa fa-commenting-o"></i><span class="num">79</span></a>
            </li>
            <li class="user">
                <div class="imgWrap"><img src="../assets/logo.png" alt=""></div>
                <div class="username">
                    <span>lomen<i class="fa fa-angle-down"></i></span>   
                    <ul class="box">
                        <li><a>数据统计表</a></li>
                        <li><a>数据统计表</a></li>
                    </ul>     
                </div>
                
            </li>
        </ul>
    </header>
</template>
<script>
export default {
  name: 'appheader',
  data(){
      return{
        restaurants: [],
        state4: '',
        timeout:  null
      }
  },
   methods: {
        ajaxGet:function(){
        // let self=this;  
        // self.axios.get('/user', {
        //     params: {
               
        //     }
        // })
        // .then(function (response) {//响应成功
        //     //this.restaurants=response.data;
        //     console.log(response);
        // })
        // .catch(function (error) {//响应失败
        //     console.log(error);
        // });
        },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
          { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
          { "value": "枪会山", "address": "上海市普陀区棕榈路" },
          { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
          { "value": "钱记", "address": "上海市长宁区天山西路" },
          { "value": "壹杯加", "address": "上海市长宁区通协路" },
          { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
          { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
          { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
          { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
          { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
          { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
          { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
          { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
          { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
          { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
          { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
          { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
          { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
          { "value": "浏阳蒸菜", "address": "天山西路430号" },
          { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
          { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
          { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ];
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>
<style scoped>
@import"//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
header{
    position: fixed;
    width: 100%;
    height: 73px;
    background-color: #fff;
    z-index: 3;
}
header .page-logo{
    float: left;
    background-color: #33CCCC;
    width: 200px;
    height: 100%;
    position: relative;
}
header .page-logo a{
    width: 112px;
    cursor: pointer;
    height: 100%;
    display: block;
    color: #fff;
    text-align: center;
    text-decoration: none;  
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';    
}
header .page-logo a:hover,header .page-logo a:focus{
    text-decoration: none;
}
header .page-logo a big{
    top: 16px;
    left: 20px;
    position: absolute;
    font-weight: 700;
    font-size: 32px;
    display: block;
}
header .page-logo a small{
    top: 52px;
    left: 20px;
    position: absolute;
    font-weight: 400;
    font-size: 12px;
    display: block;
}
            
.page-logo .menuBtn{
    cursor: pointer;
    width: 20px;
    height: 20px;
    top: 23px;
    right: 23px;
    position: absolute;
    background-image: url(../assets/sidebar-toggler.png);
    background-position: center center;
    background-repeat: no-repeat;
    opacity: 0.7;
    filter: alpha(opacity=70);
}
.page-logo .menuBtn:hover{
    opacity: 1;
    filter: alpha(opacity=100);
}

/* 搜索框 */
.search{
    width: 340px;
    padding-left: 30px;
    float: left;
    margin-top: 15px;
}
/*  */
.userInfo{
float: right;
width: 300px;
height: 100%;
}
.userInfo>li{
    float: left;
    list-style: none;
    width: 50px;
    height: 100%;
    position: relative;
}
.userInfo>li.user .username:hover .box{
    display: block;
}
.userInfo>li.user .username .box{
   width: 100px;
   position: absolute;
   list-style: none;
   right: 0;
   top: 73px; 
   display: none;
}
.userInfo>li.user .username .box li a{
    display: block;
    font-size: 13px;
    width: 100%;
    height: 35px;
    line-height: 35px;
    cursor: pointer;
    background-color: #fff;
    border-top: 1px solid #80808021;
}
.userInfo>li.user .username .box li:first-child a{
    border-top: none;
}
.userInfo>li.user .username .box li a:hover{
    background-color: #dcdfe678;
}
.userInfo>li.user{
    width: 120px;
    margin-left: 10px;
}
.userInfo>li.user .username{
    position: relative;
    cursor: pointer;
    float: left;
    height: 100%;
    width: calc(100% - 44px);
    text-align: center;
    overflow: visible;
}
.userInfo>li.user .username span{
    line-height: 61px;
}
.userInfo>li.user .username span i{
    margin-left: 10px;
    color: grey;
}
.userInfo>li.user .imgWrap{
    float: left;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin-top: 12px;
}
.userInfo>li.user .imgWrap img{
    width: 44px;
    height: 44px;
}
.userInfo>li>a{
    display: block;
    width: 100%;
    height: 100%;
    color: #000;
    text-decoration: none;
    text-align: center;
    line-height: 70px;
    font-size: 25px;
    
}
.num{
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    font-size: 12px;
    line-height: 20px;
    top: 15px;
    right:0 ;
    color: #fff;
    border-radius: 50%;
    background-color:#33CCCC; 
}



</style>
