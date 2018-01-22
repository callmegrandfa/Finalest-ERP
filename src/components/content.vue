<template>
    <div class="content-wrapper" :class="{contentActive : $store.state.show}">
         <div class="routerContain">
            <button class="goLeft" @click="left">
                <!-- <i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i> -->
                <img src="../../static/image/content/go.png">
            </button>
            <div class="homePage"> <router-link to="/home">首页</router-link></div>
            <div id="window">
                <div id="longWidth">
                    <ul id="routerBox">
                        <li v-for="(i,index) in count" :key="index" class="routerBtn addBtn">

                            <router-link :to="{name:i.url.substring(0,i.url.indexOf('+')),params:{id:i.url.substring(i.url.indexOf('+')+1)}}">{{i.name}}</router-link>
                            <i class="el-icon-error close" :menuurl="i.url" @click="close" :name="i.name" :index="index"></i>
                        </li>
                    </ul>
                </div>
                
            </div>
            <button class="goRight" @click="right">
                <!-- <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i> -->
                <img src="../../static/image/content/go.png">
            </button>
            <div class="goClose"><span>关闭操作<i class="fa fa-angle-up" aria-hidden="true"></i></span></div>
        </div>    
        <div class="content" id="content">
            <div class="whiteBg">
                <keep-alive>
                <router-view></router-view>
                </keep-alive>
            </div>   
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
  data(){
      return{
          x:0,
          go:0,
      }
  },
  mounted:function(){
    this.go=document.getElementById('window').offsetWidth;//页签每次移动的长度
    let content=document.getElementById('content');//设置高度为全屏
    let height=window.innerHeight-123;
    content.style.minHeight=height+'px';
  },
  methods:{
      right:function(){
          let left;
          if(document.getElementById('longWidth').style.left!=''){
              left=parseInt(document.getElementById('longWidth').style.left);
          }else{
              left=0
          }
        let width=document.getElementById('routerBox').offsetWidth;
        if(left-this.go+width<0){
            // alert('已到尽头')
        }else{
            this.x-=this.go;
            document.getElementById('longWidth').style.left= this.x+'px';
        }
      },
      left:function(){
        let left=parseInt(document.getElementById('longWidth').style.left);
        if(left<0){
            this.x+=this.go;
            document.getElementById('longWidth').style.left=this.x+'px';
        }else{
            //alert('已到尽头')
        }
        
      },
      close:function(e){
          window.localStorage.removeItem('loglevel:webpack-dev-server');
          let nowIndex=e.target.getAttribute('index');//close元素上面绑定的index
          let elClose=document.getElementsByClassName('close');
          let elA=document.querySelectorAll('.addBtn a');
        //   let slidbarData=this.$store.state.slidbarData;//储存页签数组
          let index;
          let previousIndex;//
         for(let i=0;i<elClose.length;i++){//获取点击关闭按钮时，点击的多项在元素.close数组里的下标
             if(elClose[i].getAttribute("index")==nowIndex){
                 previousIndex=i-1;
                 index=i;
             }
         }
        
         if(previousIndex>=0&&this.hasClass(elA[index],'active')){//判断前一个路由按钮index是否存在，判断当前路由按钮是否激活
                 let url='/'+elClose[previousIndex].getAttribute('menuurl').replace('+','/');
                 this.$router.push({path:url})
         }else if(previousIndex==-1&&this.hasClass(elA[0],'active')){
             this.$router.push({path:'/home'})
         }
        //  slidbarData.splice(nowIndex,1);//储存页签数组里删除当前页签
         for(let i=0;i<window.localStorage.length;i++){
            if(nowIndex==i){
                localStorage.removeItem(window.localStorage.key(i));//localStorage里删除当前页签   
                this.$store.commit('slidbarData');
            }
        }
      },
      hasClass:function(obj, cls){
        let obj_class = obj.className,//获取 class 内容.
        obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
        let x = 0;
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
.goLeft,.goRight{
     width: 50px;
     height: 43px;
     border: none;
     outline: none;
     background-color: #C9D1D1;
     color: #797979;
     font-size: 25px;
     cursor: pointer;
}
.goLeft:hover,.goRight:hover{
    color: #33CCCC;
}
.goRight{
    margin-right: 1px;
}  
.homePage{
    height: 100%;
    background-color: #C9D1D1;
}
.homePage a{
    display: block;
    width: 50px;
    text-decoration: none;
    height: 100%;
    font-size: 12px;
    text-align: center;
    line-height: 43px;
    color: #333333;
}
.goClose{
    width: 86px;
    height: 43px;
    font-size: 12px;
    color: #333333;
    text-align: center;
    line-height: 43px;
    background-color: #C9D1D1;
    cursor: pointer;
}
.goLeft,
.homePage,
#window,
.goRight,
.goClose{
    float: left;
}
.content-wrapper{
    transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
    background-color: #414e61;
    float: left;  
    width: calc(100% - 235px);
    padding-left: 235px;
}
.contentActive{
    width: calc(100% - 50px);
    padding-left:50px;
}
.content{
    padding: 15px 0;
    background-color:#eef1f5;
    width: 100%;
}
.whiteBg{
    width:calc(100% - 30px);
    margin-left: 15px;
}
.routerContain{
    font-family: 'microsoft yahei';
    position: relative;
    height: 43px;
    background-color: #eef1f5;
}
.routerContain .goLeft img{
    transform:rotate(180deg);
    -ms-transform:rotate(180deg);
    -moz-transform:rotate(180deg);
    -webkit-transform:rotate(180deg);
    -o-transform:rotate(180deg);
}
#window{
    overflow: hidden;
    position: relative;
    width: calc(100% - 238px);
    height: 100%;
    background-color: #C9D1D1;
    margin-left: 1px;
}
#window #longWidth{
    width: 10000px;
    position: relative;
    transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s; 
    left: 0;
}
#window #routerBox{
    left: 0;
    position: absolute;
    height: 100%;
    width: auto;
}

#window #routerBox .routerBtn{
    height: 100%;
    position: relative;
    display: inline-block;
    list-style: none;
}


#window #routerBox .routerBtn .close{
    display: block;
    position: absolute;
    top: 5px;
    right: 2px;
    color: #000;;
    font-size: 12px;
    cursor: pointer;
}
#window #routerBox .routerBtn a{
    margin-top: 3px;
    height: 40px;
    padding: 0 15px;
    line-height: 40px;
    margin-right: 0;
    display: block;
    background-color: #C9D1D1;
    color: #333333;
    font-size: 12px;
    text-decoration: none;
}

#window #routerBox .routerBtn a.active{
    color: #33CCCC;
    background-color: #eef1f5;
}
.homePage a.active{
     color: #33CCCC;
    background-color: #eef1f5;
}

</style>
