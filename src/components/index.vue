<template>
  <div>
    <app-header></app-header>
    <div class="wrapper">
      <app-sidebar></app-sidebar>
      <app-content></app-content>
    </div>   
  </div>
</template>

<script>
import header from './header'
import sidebar from './sidebar'
import content from './content'

export default {
  name: 'index',
  components: {
    'app-header':header,
    'app-sidebar':sidebar,
    'app-content':content,
  },
  data(){
      return{
          go:0,
      }
  },
  mounted:function(){
    let _this=this;
      _this.go=document.getElementById('window').offsetWidth;//页签每次移动的长度
      let content=document.getElementById('contents');//设置高度为全屏
      let height=window.innerHeight-123;
      content.style.minHeight=height+'px';
      window.onresize = function(){
        let he=window.innerHeight-123;
        content.style.minHeight=he+'px';
        _this.$store.state.slidbarHeight=$(window).height();
    }

      $(window).scroll(function(){
        console.log(_this.$store.state.fixed)
        if($(window).scrollTop()>14){
          
          if(!_this.$store.state.show){
            $('.fixed').css({
              position:'fixed',
              top:'93px',
              zIndex:'999',
              width:'calc(100% - 265px)',
              transition: 'width 0s'
            })
          }else{
             $('.fixed').css({
              position:'fixed',
              top:'93px',
              zIndex:'999',
              width:'calc(100% - 80px)',
              transition: 'width 0s'
            })
          }
          _this.$store.commit('go1');
        }else{
          $('.fixed').css({
            position:'relative',
            top:'0',
            width:'100%',
            transition: 'width 0s'
          })
          _this.$store.commit('go2');
        }
      })
  },
}
</script>
<style scoped>
.wrapper{
  background-color: rgba(38, 52, 75, 1);
  padding-top: 50px;
  position: relative;
  overflow: hidden;
}
</style>

