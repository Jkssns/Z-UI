<template>
  <div id="app">
    <header>
      <p>button区</p>
      <z-button>我没有默认值</z-button>
      <z-button disabled type="primary"></z-button>
      <z-button round type="success"></z-button>
      <z-button type="warn" size="medium"></z-button>
      <z-button type="danger" size="small"></z-button>
      <p>input区</p>
      <p>select区</p>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
  }
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
header{
  width: 50%;
  padding-left: 20px;
  p{
    margin: 20px;
  }
}
</style>
