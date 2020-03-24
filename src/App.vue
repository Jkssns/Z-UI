<template>
  <div id="app">
    <ul>
      <p>试验区</p>
      <router-link tag="li" :to="item.path" v-for="(item,index) in pathList" :key="index">
        <z-button type="primary">点击去{{item.name}}区</z-button>
      </router-link>
    </ul> 
    <router-view />
    <div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
       pathList:[
       { name: 'button', path: '/button'},
       { name: 'input', path: '/input'},
       { name: 'select', path: '/select'},
       { name: 'dialog', path: '/dialog'},
       { name: '集中展示', path: '/home'},
      ]
    }
  },
}
</script>

<style>
body,html,div,p,span,em,i,ul,ol,li,hr,button,input,
h1,h2,h3,h4,h5,h6{
  margin: 0;
  padding: 0;
}
</style>
<style lang="scss" scoped>
ul{
  margin-bottom: 50px;
  border: 1px solid red;
  li{
    margin-bottom: 20px;
  }
}
</style>
