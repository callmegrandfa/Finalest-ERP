<template>
    <div class="content-wrapper" :class="{contentActive : $store.state.show}">
        <div class="content">
            <ul class="routerBox">
                <li class="routerBtn">
                    <router-link to="/home">首页</router-link>
                </li>
                <li v-for="(i,index) in count" :key="index" class="routerBtn addBtn">
                    <router-link :to="'/'+i.url">{{i.name}}</router-link>
                    <span class="close" :menuurl="i.url" @click="close" :name="i.name" :index="index">×</span>
                </li>
                
            </ul>
           <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
  name: 'appcontent',
  computed: {
    count () {
      return this.$store.state.slidbarData;//获取最新的页签数组
    }
  },
  methods:{
      close:function(e){
          var nowIndex=e.target.getAttribute('index');//close元素上面绑定的index
          var elClose=document.getElementsByClassName('close');
          var elA=document.querySelectorAll('.addBtn a');
          var slidbarData=this.$store.state.slidbarData;//储存页签数组
          var index;
          var previousIndex;//
         for(var i=0;i<elClose.length;i++){//获取点击关闭按钮时，点击的多项在元素.close数组里的下标
            // var indexArray=elClose[i].getAttribute("index");
             if(elClose[i].getAttribute("index")==nowIndex){
                 previousIndex=i-1;
                 index=i;
             }
         }
        
         if(previousIndex>=0&&this.hasClass(elA[index],'active')){//判断前一个路由按钮index是否存在，判断当前路由按钮是否激活
                 var url='/'+elClose[previousIndex].getAttribute('menuurl');
                 this.$router.push({path:url})
         }else if(previousIndex==-1&&this.hasClass(elA[0],'active')){
             this.$router.push({path:'/home'})
         }
          slidbarData.splice(nowIndex,1);//储存页签数组里删除当前页签  
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
      }
  }
}
</script>
<style  scoped>
    
.content-wrapper{
    transition: width 0.5s,padding-left 0.5s;
    -moz-transition: width 0.5s,padding-left 0.5s;
    -webkit-transition: width 0.5s,padding-left 0.5s;
    -o-transition: width 0.5s,padding-left 0.5s; 
    float: left;  
    width: calc(100% - 200px);
    padding-left: 200px;
}
.contentActive{
    width: 100%;
    padding-left: 0;
}
.content{
    padding: 0 15px;
    background-color:#EEFAF5; 
    min-height:1000px ;
    width: 100%;
}
.content .routerBox{
    background-color: #EEFAF5;
    width: 100%;
    overflow: hidden;
    padding: 28.5px 0;
}
.content .routerBox .routerBtn{
    position: relative;
    float: left;
    list-style: none;
}
.content .routerBox .routerBtn .close{
    display: block;
    position: absolute;
    top: -6px;
    right: 12px;
    color: #fff;
    font-size: 12px;
    background-color: #E4E4E4;
    border-radius: 50%;
    cursor: pointer;
}
.content .routerBox .routerBtn a{
    border-radius: 5px;
    padding: 8px 12px;
    margin-right: 20px;
    display: block;
    background-color: #fff;
    color: #333333;
    font-size: 12px;
    text-decoration: none;
}
.content .routerBox .routerBtn a.active{
    color: #33CCCC;
}

</style>
