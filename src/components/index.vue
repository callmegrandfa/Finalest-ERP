<template>
  <div>
    <app-header></app-header>
    <div class="clearfix"> </div>
    <div class="wrapper page-container">
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
  }
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

