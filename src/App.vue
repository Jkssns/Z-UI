<template>
  <div id="app">
    <z-button >我没有默认值</z-button>
    <z-button disabled type="primary"></z-button>
    <z-button round type="success"></z-button>
    <z-button type="warn" size="medium"></z-button>
    <z-button type="danger" size="small"></z-button>
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
</style>
